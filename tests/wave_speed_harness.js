// Verifies the early-wave foe-shot speed curve and the viper's slower cadence.
// Runs the REAL fireEnemyBullet (js/invaders.js) through the REAL
// pushEnemyBullet/enemyShotSpeedScale (js/helpers.js), against the HEAD baseline,
// with a seeded RNG so both runs pick the same shooter. Then evaluates the REAL
// shot-timer expression out of js/boss.js for every boss design.
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");

const REPO = require("path").join(__dirname, "..");
const inv = fs.readFileSync(REPO + "/js/invaders.js", "utf8");
const helpers = fs.readFileSync(REPO + "/js/helpers.js", "utf8");
const consts = fs.readFileSync(REPO + "/js/constants.js", "utf8");
const bossSrc = fs.readFileSync(REPO + "/js/boss.js", "utf8");
const headInv = execSync("git -C " + REPO + " show fe5174c:js/invaders.js", { encoding: "utf8" });

function sliceFn(src, name) {
  const start = src.indexOf("function " + name + "(");
  if (start < 0) throw new Error("missing " + name);
  let depth = 0;
  const i = src.indexOf("{", start);
  for (let j = i; j < src.length; j += 1) {
    if (src[j] === "{") depth += 1;
    else if (src[j] === "}") { depth -= 1; if (depth === 0) return src.slice(start, j + 1); }
  }
  throw new Error("unbalanced " + name);
}

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};

// ---- 1. every foe shot goes through the one choke point ----
const pushers = (src) => (src.match(/enemyBullets\.push/g) || []).length;
check("no spawner pushes enemyBullets directly (only the helper does)",
  pushers(helpers) === 1 && ["boss.js", "invaders.js", "player.js", "powerups.js", "main.js"]
    .every((f) => pushers(fs.readFileSync(REPO + "/js/" + f, "utf8")) === 0),
  "helpers=" + pushers(helpers));
check("all 8 old spawners now call pushEnemyBullet",
  (bossSrc.match(/pushEnemyBullet\(\{/g) || []).length === 6 &&
  (inv.match(/pushEnemyBullet\(\{/g) || []).length === 2,
  "boss=" + (bossSrc.match(/pushEnemyBullet\(\{/g) || []).length +
  " invaders=" + (inv.match(/pushEnemyBullet\(\{/g) || []).length);

// ---- 2. the curve, measured on real shots ----
const SCALES = JSON.parse(consts.match(/const ENEMY_SHOT_SPEED_SCALES = (\{[^}]*\});/)[1]
  .replace(/(\d+):/g, '"$1":'));
const EXPECT = { 1: 0.85, 2: 0.9, 3: 0.9, 4: 0.95, 5: 1, 6: 1, 10: 1 };

function fireShot(src, level, seed) {
  const invader = {
    id: 7, alive: true, x: 420, y: 150, w: 40, h: 30, row: 0, rowRole: "last",
    threatened: 0, type: { name: "crab", color: "#f0f", points: 40 }
  };
  const target = {
    Math, Number, String, Array, Object, JSON, Boolean, Date, isNaN, Math2: Math,
    level, invaders: [invader], enemyBullets: [], frenzyZones: [], boss: null,
    player: { x: 430, y: 530, w: 42, h: 26, vx: 120 },
    playerCenterX: () => 451,
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    aimModeFor: () => 1,
    predictPlayerX: (sx, sy, speed) => 451 + 120 * ((560 - sy) / speed),
    aimTargetX: null, aimVx: null
  };
  // seeded RNG so the fixed and baseline runs pick the same shooter
  let s = seed;
  target.Math = Object.create(Math);
  target.Math.random = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return (s >>> 8) / 16777216;
  };
  const sandbox = new Proxy(target, {
    has: () => true,
    get: (t, p) => (p in t ? t[p] : () => undefined),
    set: (t, p, v) => { t[p] = v; return true; }
  });
  vm.createContext(sandbox);
  const parts = [sliceFn(src, "fireEnemyBullet"), sliceFn(src, "aimVx"), sliceFn(src, "aimTargetX")];
  if (src === inv) parts.push(sliceFn(helpers, "pushEnemyBullet"),
    sliceFn(helpers, "enemyShotSpeedScale"),
    "const ENEMY_SHOT_SPEED_SCALES = " + JSON.stringify(SCALES).replace(/"(\d+)":/g, "$1:") + ";");
  vm.runInContext(parts.join("\n"), sandbox);
  vm.runInContext("fireEnemyBullet()", sandbox);
  if (!target.enemyBullets.length) throw new Error("no shot fired at level " + level);
  return target.enemyBullets[0];
}

console.log("\nfoe shot speed by wave (real fireEnemyBullet, crab shooter, aimed)");
const base = {};
[1, 2, 3, 4, 5, 6, 10].forEach((lv) => {
  const fixed = fireShot(inv, lv, 977);
  const before = fireShot(headInv, lv, 977);
  base[lv] = before;
  const speedRatio = fixed.speed / before.speed;
  const vxRatio = before.vx === 0 ? 1 : fixed.vx / before.vx;
  const want = EXPECT[lv];
  check("wave " + lv + ": shot speed x" + want,
    Math.abs(speedRatio - want) < 1e-9,
    "ratio=" + speedRatio.toFixed(4) + " " + before.speed.toFixed(1) + " -> " + fixed.speed.toFixed(1));
  check("wave " + lv + ": line of fire unchanged (vx scaled with speed)",
    Math.abs(vxRatio - want) < 1e-9 &&
    Math.abs(fixed.vx / fixed.speed - before.vx / before.speed) < 1e-12,
    "vx/speed=" + (fixed.vx / fixed.speed).toFixed(6) + " vs " + (before.vx / before.speed).toFixed(6));
});
check("wave 1 is the slowest and wave 5 matches the old speed exactly",
  fireShot(inv, 1, 977).speed < fireShot(inv, 4, 977).speed &&
  fireShot(inv, 4, 977).speed < fireShot(inv, 5, 977).speed &&
  fireShot(inv, 5, 977).speed === base[5].speed,
  "w1=" + fireShot(inv, 1, 977).speed.toFixed(1) + " w5=" + fireShot(inv, 5, 977).speed.toFixed(1));
check("the curve is exactly the requested -15/-10/-10/-5/0",
  SCALES[1] === 0.85 && SCALES[2] === 0.9 && SCALES[3] === 0.9 && SCALES[4] === 0.95 &&
  SCALES[5] === undefined, JSON.stringify(SCALES));

// ---- 3. viper fires less often: evaluate the real timer-reset expression ----
const timerLine = bossSrc.match(/boss\.timer = \(riteActive\(boss\)[\s\S]*?\n\s*Math\.max\([^;]*\);/)[0];
const interval = (design, level, phase) => {
  const boss = { timer: 0, phase, designData: design };
  new Function("boss", "level", "riteActive", timerLine)(boss, level, () => false);
  return boss.timer;
};
const designs = JSON.parse("[" + consts
  .slice(consts.indexOf("const BOSS_DESIGNS = [") + "const BOSS_DESIGNS = [".length,
    consts.indexOf("\n];", consts.indexOf("const BOSS_DESIGNS = [")))
  .replace(/([{,]\s*)(\w+):/g, "$1\"$2\":")
  .replace(/,\s*\]/g, "]") + "]");
const viper = designs.find((d) => d.name === "WINGED VIPER");
const skull = designs.find((d) => d.name === "SKULL CRUISER");

console.log("\nviper shot cadence (real timer-reset expression from js/boss.js)");
check("WINGED VIPER carries shotMul 1.25", viper.shotMul === 1.25, "shotMul=" + viper.shotMul);
let allRatios = [];
[1, 3, 5, 8, 10].forEach((lv) => [1, 2, 3].forEach((ph) => {
  const r = interval(viper, lv, ph) / interval(skull, lv, ph);
  allRatios.push(r);
}));
check("viper's gap between shots is 1.25x the other bosses' at every wave and phase",
  allRatios.every((r) => Math.abs(r - 1.25) < 1e-12),
  "ratios " + Math.min(...allRatios).toFixed(3) + "-" + Math.max(...allRatios).toFixed(3));
check("that is 20% fewer shots per second",
  Math.abs((1 / interval(viper, 5, 1)) / (1 / interval(skull, 5, 1)) - 0.8) < 1e-12,
  "shots/s " + (1 / interval(skull, 5, 1)).toFixed(3) + " -> " + (1 / interval(viper, 5, 1)).toFixed(3));
check("the gap does not widen with the wave (same 1.25x on wave 1 and wave 10)",
  Math.abs(interval(viper, 1, 1) / interval(skull, 1, 1) - interval(viper, 10, 3) / interval(skull, 10, 3)) < 1e-12,
  "w1 " + interval(viper, 1, 1).toFixed(3) + "s vs w10 " + interval(viper, 10, 3).toFixed(3) + "s");
check("every other design is unchanged (no shotMul)",
  designs.filter((d) => d !== viper).every((d) => !d.shotMul),
  designs.map((d) => d.name.split(" ")[1] + ":" + (d.shotMul || 1)).join(" "));
check("bomb cadence untouched by the change",
  !/bombTimer = .*shotMul/.test(bossSrc));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
