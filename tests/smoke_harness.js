// Whole-game smoke test: loads the real 2D layer (all 14 scripts, DOM/canvas
// stubbed) and runs thousands of real update() frames, watching for the classes
// of failure a headless unit test cannot see: ReferenceError on a global no file
// declares, NaN leaking into positions, the zealot cap, the every-3rd-cast idol,
// and a test run writing a hi-score.
const vm = require("vm");
const { sandbox } = require("./harness.js");

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};

const run = (code) => vm.runInContext(code, sandbox);

console.log("\nwhole-game smoke test");

check("all 14 scripts loaded", run("typeof update === 'function' && typeof startGame === 'function'"));

// --- frames across waves 1..9, boss waves included ---
const probe = `
  (function () {
    var bad = { nan: 0, thrown: null, zealotPeak: 0, casts: 0, idolCasts: 0,
                idolCastEmpty: 0, minionPeak: 0, bulletsPeak: 0 };
    var finite = function (o) {
      return Number.isFinite(o.x) && Number.isFinite(o.y) &&
             Number.isFinite(o.speed === undefined ? 0 : o.speed) &&
             Number.isFinite(o.vx === undefined ? 0 : o.vx);
    };
    // the panel's own jump path: it starts the run and spawns the wave's boss
    jumpToWave(1);
    for (var w = 1; w <= 9; w += 1) {
      jumpToWave(w);
      for (var i = 0; i < 60 * 45; i += 1) {
        // keep the run alive: the smoke test is about the foes, not the pilot
        playerHp = maxPlayerHp; lives = 9; shieldHits = 3;
        if (state === "gameover") { state = "playing"; }
        if (bosses.length) { boss.hp = boss.maxHp; }
        update(1 / 60);
        minions.forEach(function (m) {
          if (!finite(m)) bad.nan += 1;
        });
        enemyBullets.forEach(function (b) {
          if (!finite(b)) bad.nan += 1;
        });
        bombShots.forEach(function (b) { if (!finite(b)) bad.nan += 1; });
        powerups.forEach(function (p) { if (!finite(p)) bad.nan += 1; });
        bad.zealotPeak = Math.max(bad.zealotPeak, minions.filter(function (m) { return m.type === "zealot"; }).length);
        bad.minionPeak = Math.max(bad.minionPeak, minions.length);
        bad.bulletsPeak = Math.max(bad.bulletsPeak, enemyBullets.length);
      }
    }
    return bad;
  })()
`;

let res;
try {
  res = run(probe);
} catch (e) {
  res = { thrown: e.message + " @" + (e.stack || "").split("\n")[1], nan: -1,
    zealotPeak: -1, minionPeak: -1, casts: 0, idolCasts: 0, idolCastEmpty: 0, bulletsPeak: 0 };
}

check("9000 frames across waves 1-9 with no exception", !res.thrown, res.thrown || "clean");
check("no NaN/Infinity in minion, bullet, bomb or powerup state", res.nan === 0, "nan=" + res.nan);
check("never more than 2 zealots alive", res.zealotPeak <= 2, "peak=" + res.zealotPeak);
check("minions stay bounded (idol + 2 zealots)", res.minionPeak <= 3, "peak=" + res.minionPeak);
check("enemy fire stays bounded by the caps", res.bulletsPeak < 40, "peak=" + res.bulletsPeak);

// --- the every-3rd-cast cycle, on the live squid ---
const idolProbe = `
  (function () {
    jumpToWave(9);
    var b = bosses[0];
    if (!b) return { err: "no boss on wave 9" };
    var out = { idolCastWithIdol: 0, idolCastNoIdol: 0, zealotPeak: 0 };
    // idol up, 3rd call: must fill with zealots
    minions = [{ id: 1, type: "idol", x: 300, y: 200, bx: 300, by: 200, w: 34, h: 34,
                 hp: 3, maxHp: 3, t: 0, fire: 9, auraR: 150, phase: 0 }];
    b.callCount = 3;
    castCalling(b);
    out.idolCastWithIdol = minions.filter(function (m) { return m.type === "zealot"; }).length;
    // no idol, 3rd call: must raise the idol
    minions = [];
    b.callCount = 6;
    castCalling(b);
    out.idolCastNoIdol = minions.filter(function (m) { return m.type === "idol"; }).length;
    return out;
  })()
`;
const idol = run(idolProbe);
check("live squid: 3rd cast with the idol up summons 2 zealots",
  idol.idolCastWithIdol === 2, JSON.stringify(idol));
check("live squid: 3rd cast with no idol raises the idol",
  idol.idolCastNoIdol === 1, JSON.stringify(idol));

// --- the scoring gate, on the live loop ---
const gate = run(`
  (function () {
    localStorage.removeItem("invadersIronTideHighScore");
    jumpToWave(3);              // the panel's wave jump: a test entry
    addScore(50000);
    var tainted = runTainted;
    gameOver();
    return { after: localStorage.getItem("invadersIronTideHighScore"), tainted: tainted };
  })()
`);
check("a panel-jumped run is tainted", gate.tainted === true, JSON.stringify(gate));
check("a tainted run writes no hi-score", gate.after === null, JSON.stringify(gate));

const clean = run(`
  (function () {
    localStorage.removeItem("invadersIronTideHighScore");
    jumpToWave(3);
    startGame(true);            // a real start clears the taint
    addScore(50000);
    gameOver();
    return { after: localStorage.getItem("invadersIronTideHighScore"), tainted: runTainted };
  })()
`);
check("a clean run still writes the hi-score (the gate is not permanent)",
  clean.after === "50000", JSON.stringify(clean));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
