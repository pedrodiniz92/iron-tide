// Scoring-gate harness: a run that used any test facility must write no hi-score
// and no leaderboard row, and a clean run must still write both.
//
// The gate is one-way inside a run: taintRun() sets `runTainted`, only
// startGame() clears it - and startGame() re-arms it when the page carries the
// ?boss= URL param (js/main.js:85-86).
//
// Baselines are pinned to fe5174c (v1.8.1), the release BEFORE the gate was
// closed, so each check proves the old hole existed and the current code shuts it.
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");
const { sandbox } = require("./harness.js");

const REPO = require("path").join(__dirname, "..");
const run = (code) => vm.runInContext(code, sandbox);
const mainSrc = fs.readFileSync(REPO + "/js/main.js", "utf8");
const oldMain = execSync("git -C " + REPO + " show fe5174c:js/main.js", { encoding: "utf8" });
const oldTestmode = execSync("git -C " + REPO + " show fe5174c:js/testmode.js", { encoding: "utf8" });

function sliceFn(src, name) {
  const start = src.indexOf("function " + name + "(");
  if (start < 0) return null;
  let depth = 0;
  for (let j = src.indexOf("{", start); j < src.length; j += 1) {
    if (src[j] === "{") depth += 1;
    else if (src[j] === "}") { depth -= 1; if (depth === 0) return src.slice(start, j + 1); }
  }
  return null;
}

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};

run(`
  function resetBoard() {
    localStorage.removeItem("invadersIronTideHighScore");
    localStorage.removeItem("it25_scores");
    highScore = 0;
    score = 0;
  }
  function hi() { return localStorage.getItem("invadersIronTideHighScore"); }
  function rows() { return JSON.parse(localStorage.getItem("it25_scores") || "[]").length; }
`);

console.log("\nSCORING GATE (real startGame / addScore / gameOver / winGame)");

// 1. the ?boss= URL param is a page-session facility: it taints every run it arms
run('urlBossName = "crab"; testBossName = "crab"; startGame(true);');
check("?boss= arms the taint, and a restart keeps it (the laundering hole is shut)",
  run("runTainted") === true, "runTainted=" + run("runTainted"));
run('addScore(50000); gameOver();');
check("that run writes no hi-score and no board row",
  run("hi()") === null && run("rows()") === 0, `hi=${run("hi()")} rows=${run("rows()")}`);

// 2. a panel boss pick must not leak into the next run, and must not taint it
run('urlBossName = null; testBossName = "turtle"; startGame(true);');
check("a panel boss pick does not leak into the next run",
  run("testBossName") === null, "testBossName=" + run("testBossName"));
check("and the next run is clean (the taint is not permanent)",
  run("runTainted") === false, "runTainted=" + run("runTainted"));
run('addScore(50000); gameOver();');
check("a clean run writes the hi-score and the board row",
  run("hi()") === "50000" && run("rows()") === 1, `hi=${run("hi()")} rows=${run("rows()")}`);

// 3. the panel's wave jump
run('resetBoard(); jumpToWave(3); addScore(50000); gameOver();');
check("a panel wave jump taints the run and writes nothing",
  run("runTainted") === true && run("hi()") === null && run("rows()") === 0,
  `tainted=${run("runTainted")} hi=${run("hi()")} rows=${run("rows()")}`);

// 4. the taint is one-way within a run, and cannot launder a stored score
run('resetBoard(); startGame(true); addScore(100);');
const midHi = run("hi()");
run('taintRun(); addScore(99999); gameOver();');
check("a run tainted mid-flight stops touching the stored hi-score",
  midHi === "100" && run("hi()") === "100", `mid=${midHi} after=${run("hi()")}`);
check("the in-memory HUD hi-score is not raised by a tainted run",
  run("highScore") === 100, "highScore=" + run("highScore"));

// 5. a tainted win must not rank; a clean win must
run('resetBoard(); jumpToWave(10); winGame();');
check("a tainted victory takes no leaderboard spot",
  run("victoryRank") === 0 && run("rows()") === 0,
  `rank=${run("victoryRank")} rows=${run("rows()")}`);
run('resetBoard(); startGame(true); winGame();');
check("a clean victory does rank",
  run("victoryRank") >= 1 && run("rows()") === 1,
  `rank=${run("victoryRank")} rows=${run("rows()")}`);

// 6. ?selftest: the block at the end of main.js must taint the run it starts
const selfBlock = mainSrc.slice(mainSrc.lastIndexOf('has("selftest")'));
check("the ?selftest block taints the run it starts",
  /startGame\(\);[\s\S]*?taintRun\(\);/.test(selfBlock), selfBlock.slice(0, 40).replace(/\n/g, " "));

// --- baselines: v1.8.1 (fe5174c) opened all of these ---
const oldStart = sliceFn(oldMain, "startGame");
const oldJump = sliceFn(oldTestmode, "jumpToWave");
check("v1.8.1 sources sliced for the baselines", Boolean(oldStart && oldJump));

const gateAtV181 = execSync(
  "git -C " + REPO + " grep -c runTainted fe5174c -- js/ || true", { encoding: "utf8" }).trim();
check("BASELINE v1.8.1: the gate did not exist, so a ?boss= test-boss run ranked",
  gateAtV181 === "" && /if \(qBoss\) testBossName = qBoss;/.test(oldTestmode),
  "runTainted hits at v1.8.1: " + (gateAtV181 || "none"));

run(oldJump);
run('runTainted = false; jumpToWave(3);');
check("BASELINE v1.8.1: the wave jump left an untainted run",
  run("runTainted") === false, "runTainted=" + run("runTainted"));

const oldSelfBlock = oldMain.slice(oldMain.lastIndexOf('has("selftest")'));
check("BASELINE v1.8.1: ?selftest never tainted",
  !/taintRun\(\)/.test(oldSelfBlock));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
