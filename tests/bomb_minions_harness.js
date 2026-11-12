// Verifies a player bomb blast kills minions (zealot + idol), running the REAL
// explodeBombShot out of js/powerups.js and the REAL killMinion out of js/boss.js.
// Also runs the pre-fix v1.8.1 (fe5174c) copy of explodeBombShot to prove the bug was real.
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");

const REPO = require("path").join(__dirname, "..");
const fixed = fs.readFileSync(REPO + "/js/powerups.js", "utf8");
const boss = fs.readFileSync(REPO + "/js/boss.js", "utf8");
const helpers = fs.readFileSync(REPO + "/js/helpers.js", "utf8");
// killMinion's death volley is born in pushEnemyBullet, so the sandbox needs the
// real helper - the auto-stub would swallow the shots.
const SHOT_HELPERS = fs.readFileSync(REPO + "/js/constants.js", "utf8")
  .match(/const ENEMY_SHOT_SPEED_SCALES = \{[^}]*\};/)[0] + "\n" +
  sliceFn(helpers, "enemyShotSpeedScale") + "\n" + sliceFn(helpers, "pushEnemyBullet");
const v181 = execSync("git -C " + REPO + " show fe5174c:js/powerups.js", { encoding: "utf8" });

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

const KILL = sliceFn(boss, "killMinion");

// Auto-stub sandbox: unknown globals become no-op functions, seeded names are real.
function makeCtx(minions) {
  const rec = { scores: [], drops: [], kills: 0, hits: 0 };
  const target = {
    Math, Number, String, Array, Object, JSON, Boolean, Date, isNaN,
    COLORS: { explosion: "#fff", ufo: "#fff" },
    minions,
    shields: [], invaders: [], bosses: [], enemyBullets: [], enemyBombs: [], spikeMines: [],
    ufo: null, level: 10,
    rec,
    addScore: (n) => rec.scores.push(n),
    comboAddKill: () => { rec.kills += 1; },
    comboAddHit: () => { rec.hits += 1; },
    spawnPowerupAt: (x, y, loot) => rec.drops.push({ x, y, loot }),
    pickLootType: (tier) => "loot" + tier,
    t: (k) => k,
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    damageShieldArea: () => {},
    damageBoss: () => {},
    checkWaveClear: () => {},
    invaderHitColor: () => "#fff",
    registerInvaderKill: () => {},
    maybeDropPowerup: () => {},
    spawnUfoLootCrate: () => ({}),
    bombShotDamage: (u, base) => base
  };
  const sandbox = new Proxy(target, {
    has: () => true,
    get: (t, p) => (p in t ? t[p] : () => undefined),
    set: (t, p, v) => { t[p] = v; return true; }
  });
  vm.createContext(sandbox);
  vm.runInContext(SHOT_HELPERS + "\n" + sliceFn(fixed, "explodeBombShot") + "\n" + KILL, sandbox);
  return { sandbox, rec, target };
}

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};

const shot = { x: 400, y: 300, w: 14, h: 14, radius: 180 };
const minion = (type, x, y, hp) => ({
  id: Math.random(), type, x, y, bx: x, by: y, w: 34, h: 34,
  hp: hp === undefined ? (type === "zealot" ? 4 : 3) : hp,
  maxHp: type === "zealot" ? 4 : 3, t: 0, fire: 2, auraR: type === "idol" ? 150 : 0, phase: 0
});
const blast = (list) => {
  const c = makeCtx(list);
  c.sandbox.shot = shot;
  vm.runInContext("explodeBombShot(shot)", c.sandbox);
  return c;
};

console.log("\nplayer bomb blast vs minions (blast radius 180)");

const z = blast([minion("zealot", 420, 320)]);
check("zealot in the blast dies", z.target.minions.length === 0,
  "minions left " + z.target.minions.length);
check("zealot scores 40 via killMinion", z.rec.scores.includes(40), "scores=" + z.rec.scores.join(","));
check("dead zealot drops loot", z.rec.drops.length === 1, "drops=" + z.rec.drops.length);
// The zealot's 3-shot death volley spawns INSIDE the blast, and the same blast
// clears enemy fire (clearRadius 153) - so a bomb kill adds no shots to the
// screen. That is the desirable contract; assert it explicitly.
check("bomb-killed zealot leaves no shots on screen (its volley is cleared by the same blast)",
  z.target.enemyBullets.length === 0 && z.rec.scores.filter((n) => n === 12).length === 3,
  "bullets=" + z.target.enemyBullets.length + " scores=" + z.rec.scores.join(","));

const i = blast([minion("idol", 380, 280)]);
check("idol in the blast dies (heal broken)", i.target.minions.length === 0 &&
  !i.target.minions.find((m) => m.type === "idol"), "minions left " + i.target.minions.length);
check("idol scores 60 via killMinion", i.rec.scores.includes(60), "scores=" + i.rec.scores.join(","));

const pair = blast([minion("zealot", 300, 250), minion("zealot", 500, 350)]);
check("both zealots die in one blast (no skip on rebind)", pair.target.minions.length === 0,
  "minions left " + pair.target.minions.length);

const far = minion("zealot", 900, 100);
const outside = blast([far]);
check("minion outside the blast is untouched", outside.target.minions.length === 1 &&
  outside.target.minions[0].hp === 4, "hp=" + outside.target.minions[0].hp);

const chipped = blast([minion("zealot", 420, 320, 1)]);
check("a 1 HP zealot dies to the blast", chipped.target.minions.length === 0);
const tough = blast([minion("zealot", 420, 320, 8)]);
check("an 8 HP zealot survives at 4 (blast is 4 damage, not a one-shot)",
  tough.target.minions.length === 1 && tough.target.minions[0].hp === 4,
  "hp=" + (tough.target.minions[0] && tough.target.minions[0].hp));

const baseline = (() => {
  const list = [minion("zealot", 420, 320), minion("idol", 380, 280)];
  const c = makeCtx(list);
  // SHOT_HELPERS is already in this context from makeCtx; re-declaring the const throws.
  vm.runInContext(sliceFn(v181, "explodeBombShot") + "\n" + KILL, c.sandbox);
  c.sandbox.shot = shot;
  vm.runInContext("explodeBombShot(shot)", c.sandbox);
  return c;
})();
check("BASELINE reproduced the bug (v1.8.1 blast spared both minions)",
  baseline.target.minions.length === 2 && baseline.target.minions.every((m) => m.hp === m.maxHp),
  "minions=" + baseline.target.minions.length + " hp=" + baseline.target.minions.map((m) => m.hp).join(","));

check("blast iterates minions.slice() (killMinion rebinds the global)",
  /minions\.slice\(\)\.forEach/.test(sliceFn(fixed, "explodeBombShot")));
check("enemy bombs/mines do NOT friendly-fire minions",
  !/minions/.test(fs.readFileSync(REPO + "/js/boss.js", "utf8")
    .match(/function explodeSpikeMine[\s\S]*?\n}/)[0]));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
