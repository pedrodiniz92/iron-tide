// Panel-pause regression harness. Loads the whole 2D layer (harness.js) and
// drives the panel's own toggleTestPanel()/jumpToWave() through the state
// machine, mirroring the real frame() dispatch.
//
// The requirement: opening the test panel pauses the run, INCLUDING between
// waves, and closing it resumes only the pause it caused.
//
// What this harness is out to prove:
//  A. closing the panel during a wave break must not leave the run in
//     "playing" with waveClearing === true - checkWaveClear() then returns at
//     its waveClearing guard forever and no wave ever spawns (soft-lock).
//  B. jumpToWave() from the post-boss upgrade picker (state "choices",
//     waveClearing true) must leave the jumped wave able to clear.
//  C. a run the player paused with `p` stays paused across a panel open/close.
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");
const { sandbox } = require("./harness.js");

const REPO = require("path").join(__dirname, "..");
const run = (code) => vm.runInContext(code, sandbox);

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};

// the real frame() dispatch, minus draw()
run(`
  function step(dt) {
    if (state === "playing") update(dt);
    else if (state === "waveBreak") updateWaveBreak(dt);
    else if (state === "choices") { updateRespawn(dt); updateMusic(dt); }
  }
  function stepFor(seconds) {
    var n = Math.round(seconds * 60);
    for (var i = 0; i < n; i += 1) step(1 / 60);
    return { state: state, level: level, waveClearing: waveClearing,
             invadersAlive: invaders.filter(function (v) { return v.alive; }).length };
  }
  function clearField() { invaders.forEach(function (v) { v.alive = false; }); }
`);

// Every block starts from a clean run: startGame() clears waveClearing, so a
// soft-lock found in one block cannot poison the next.
const fresh = (w) => run(`
  if (testPanelOpen) toggleTestPanel();
  startGame(true);
  jumpToWave(${w});
  state
`);

console.log("\nPANEL PAUSE (real toggleTestPanel / jumpToWave)");

// --- C. the panel pauses a live run, and resumes it ---
fresh(1);
check("panel opens on a live run: the run pauses",
  run(`toggleTestPanel(); state`) === "paused", run("state"));
check("panel closes: the run resumes",
  run(`toggleTestPanel(); state`) === "playing", run("state"));

// --- C. a `p` pause survives a panel open/close (the pairing rule) ---
fresh(1);
run('state = "paused"');   // what `p` does to a playing run
run("toggleTestPanel()");
const claimed = run("(typeof panelPausedFrom === 'undefined' ? panelPaused : panelPausedFrom)");
check("opening the panel over a player's `p` pause does not claim the pause",
  !claimed, "claimed=" + JSON.stringify(claimed));
run("toggleTestPanel()");
check("closing the panel leaves a player's `p` pause paused",
  run("state") === "paused", run("state"));

// --- A. the wave-break pause, and what the close restores ---
fresh(1);
run('clearField(); checkWaveClear();');
check("clearing a wave enters the wave break",
  run("state") === "waveBreak" && run("waveClearing") === true,
  "state=" + run("state") + " waveClearing=" + run("waveClearing"));

run("toggleTestPanel()");
check("the panel pauses the run BETWEEN waves (v1.9.0 requirement)",
  run("state") === "paused", run("state"));

const afterClose = run(`
  toggleTestPanel();
  ({ state: state, waveClearing: waveClearing, waveBreakTimer: waveBreakTimer })
`);
check("closing the panel during the break resumes the BREAK, not the wave",
  afterClose.state === "waveBreak",
  "state=" + afterClose.state + " waveClearing=" + afterClose.waveClearing +
  " timer=" + afterClose.waveBreakTimer);

const afterBreak = run("stepFor(10)");
check("the wave after a panel-opened break actually starts (no soft-lock)",
  afterBreak.level === 2 && afterBreak.invadersAlive > 0,
  JSON.stringify(afterBreak));

// --- B. jump to a wave from the post-boss upgrade picker ---
fresh(6);
run('finishBossFight();');   // -> state "choices", waveClearing true, level 7
check("killing a boss opens the upgrade picker",
  run("state") === "choices" && run("waveClearing") === true,
  "state=" + run("state") + " waveClearing=" + run("waveClearing"));

run('jumpToWave(5)');
check("jumping from the picker starts the wave",
  run("state") === "playing" && run("level") === 5,
  "state=" + run("state") + " level=" + run("level"));
check("the jumped wave is not left flagged as clearing",
  run("waveClearing") === false, "waveClearing=" + run("waveClearing"));

const afterJump = run(`
  clearField();
  checkWaveClear();
  stepFor(10);
  ({ state: state, level: level, waveClearing: waveClearing,
     invadersAlive: invaders.filter(function (v) { return v.alive; }).length,
     bosses: bosses.length })
`);
// level 6 is a full boss wave, and those spawn no invaders (js/invaders.js:11),
// so "playable" means a field of invaders or a boss.
check("the jumped wave can clear (no soft-lock)",
  afterJump.level === 6 && (afterJump.invadersAlive > 0 || afterJump.bosses > 0),
  JSON.stringify(afterJump));

// --- the upgrade picker: the panel must never claim a pause it did not cause ---
fresh(6);
run('finishBossFight();');   // state "choices" (the permanent-upgrade picker)
run("toggleTestPanel()");
const claimedInChoices = run("(typeof panelPausedFrom === 'undefined' ? panelPaused : panelPausedFrom)");
check("opening the panel during the upgrade picker claims no pause",
  !claimedInChoices, "claimed=" + JSON.stringify(claimedInChoices));
run("toggleTestPanel()");
check("closing the panel during the picker leaves the picker up (no forced 'playing')",
  run("state") === "choices", "state=" + run("state"));

// --- the panel's own upgrade-prompt flow: close-then-jump ---
fresh(1);
run('clearField(); checkWaveClear(); toggleTestPanel();');
const promptFlow = run(`
  // showUpgradePrompt's START button: if (testPanelOpen) toggleTestPanel(); jumpToWave(target);
  toggleTestPanel();
  jumpToWave(4);
  clearField();
  checkWaveClear();
  stepFor(10);
`);
check("panel upgrade flow (close then jump) leaves a playable wave",
  promptFlow.level === 5 && promptFlow.invadersAlive > 0, JSON.stringify(promptFlow));

// --- baselines: v1.8.1 (fe5174c) had no pause at all ---
const oldTestmode = execSync("git -C " + REPO + " show fe5174c:js/testmode.js", { encoding: "utf8" });
const oldToggle = oldTestmode.slice(oldTestmode.indexOf("function toggleTestPanel("));
run(oldToggle.slice(0, oldToggle.indexOf("\n}", oldToggle.indexOf("function toggleTestPanel(")) + 2));

fresh(1);
run('clearField(); checkWaveClear();');
run("toggleTestPanel()");
check("BASELINE v1.8.1: the panel did NOT pause the run between waves",
  run("state") === "waveBreak", "state=" + run("state"));
run("toggleTestPanel()");

fresh(1);
run('state = "paused";');   // the player paused with `p`
run("toggleTestPanel()");
run("toggleTestPanel()");
check("BASELINE v1.8.1: closing the panel unfroze the player's own `p` pause",
  run("state") === "playing", "state=" + run("state"));

const oldJump = oldTestmode.slice(oldTestmode.indexOf("function jumpToWave("));
run(oldJump.slice(0, oldJump.indexOf("\n}", oldJump.indexOf("function jumpToWave(")) + 2));
fresh(6);
run('finishBossFight(); jumpToWave(5);');
check("BASELINE v1.8.1: jumping from the picker left the player stuck in the picker",
  run("state") === "choices", "state=" + run("state"));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
