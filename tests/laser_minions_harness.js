// Verifies minions block the laser beam: real findLaserTarget + damageLaserTarget
// out of js/player.js, real killMinion out of js/boss.js, and the v1.8.1 (fe5174c) baseline
// to prove the beam used to pass through them.
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");

const REPO = require("path").join(__dirname, "..");
const fixed = fs.readFileSync(REPO + "/js/player.js", "utf8");
const boss = fs.readFileSync(REPO + "/js/boss.js", "utf8");
const helpers = fs.readFileSync(REPO + "/js/helpers.js", "utf8");
// killMinion's death volley is born in pushEnemyBullet, so the sandbox needs the
// real helper - the auto-stub would swallow the shots.
const SHOT_HELPERS = fs.readFileSync(REPO + "/js/constants.js", "utf8")
  .match(/const ENEMY_SHOT_SPEED_SCALES = \{[^}]*\};/)[0] + "\n" +
  sliceFn(helpers, "enemyShotSpeedScale") + "\n" + sliceFn(helpers, "pushEnemyBullet");
const v181 = execSync("git -C " + REPO + " show fe5174c:js/player.js", { encoding: "utf8" });

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

function makeCtx(list) {
  const rec = { scores: [], drops: [], kills: 0, hits: 0, bossDamage: 0 };
  const target = {
    Math, Number, String, Array, Object, JSON, Boolean, Date, isNaN,
    COLORS: { ufo: "#fff", explosion: "#fff" },
    minions: list, invaders: [], bosses: [], enemyBullets: [], enemyBombs: [], spikeMines: [],
    ufo: null, powerups: [], level: 10,
    rec,
    addScore: (n) => rec.scores.push(n),
    comboAddKill: () => { rec.kills += 1; },
    comboAddHit: () => { rec.hits += 1; },
    spawnPowerupAt: (x, y, loot) => rec.drops.push({ x, y, loot }),
    pickLootType: (tier) => "loot" + tier,
    damageBoss: (u, dmg) => { rec.bossDamage += dmg; },
    t: (k) => k,
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    checkWaveClear: () => {},
    registerInvaderKill: () => {},
    maybeDropPowerup: () => {},
    spawnUfoLootCrate: () => ({ lootType: "bomb" }),
    powerupName: (n) => n
  };
  const sandbox = new Proxy(target, {
    has: () => true,
    get: (t, p) => (p in t ? t[p] : () => undefined),
    set: (t, p, v) => { t[p] = v; return true; }
  });
  vm.createContext(sandbox);
  vm.runInContext(SHOT_HELPERS + "\n" + sliceFn(fixed, "findLaserTarget") + "\n" +
    sliceFn(fixed, "damageLaserTarget") + "\n" + KILL, sandbox);
  return { sandbox, rec, target };
}

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};

const PLAYER_Y = 530;
const BEAM_X = 464;
const bossUnit = () => ({ x: 400, y: 120, w: 128, h: 96, maxHp: 100, phase: 1 });
const minion = (type, x, y) => ({
  id: Math.random(), type, x, y, bx: x, by: y, w: 34, h: 34,
  hp: type === "zealot" ? 4 : 3, maxHp: type === "zealot" ? 4 : 3,
  t: 0, fire: 2, auraR: type === "idol" ? 150 : 0, phase: 0
});
const pick = (c) => vm.runInContext("findLaserTarget(BEAM_X, PLAYER_Y)",
  Object.assign(c.sandbox, {}));

console.log("\nlaser beam vs minions (beam x=464, ship y=530)");

const withIdol = makeCtx([minion("idol", 440, 300)]);
withIdol.sandbox.BEAM_X = BEAM_X; withIdol.sandbox.PLAYER_Y = PLAYER_Y;
withIdol.sandbox.bosses = [bossUnit()];
const t1 = pick(withIdol);
check("idol parked in the column is the target, not the boss behind it",
  t1 && t1.kind === "minion" && t1.ref.type === "idol", "kind=" + (t1 && t1.kind));

const zealotCase = makeCtx([minion("zealot", 440, 300)]);
zealotCase.sandbox.BEAM_X = BEAM_X; zealotCase.sandbox.PLAYER_Y = PLAYER_Y;
zealotCase.sandbox.bosses = [bossUnit()];
const t2 = pick(zealotCase);
check("zealot in the column blocks the beam", t2 && t2.kind === "minion", "kind=" + (t2 && t2.kind));

const noMinion = makeCtx([]);
noMinion.sandbox.BEAM_X = BEAM_X; noMinion.sandbox.PLAYER_Y = PLAYER_Y;
noMinion.sandbox.bosses = [bossUnit()];
const t3 = pick(noMinion);
check("with no minion, the boss is still the target (no regression)",
  t3 && t3.kind === "boss", "kind=" + (t3 && t3.kind));

const offColumn = makeCtx([minion("zealot", 100, 300)]);
offColumn.sandbox.BEAM_X = BEAM_X; offColumn.sandbox.PLAYER_Y = PLAYER_Y;
offColumn.sandbox.bosses = [bossUnit()];
const t4 = pick(offColumn);
check("minion outside the beam window is not picked", t4 && t4.kind === "boss",
  "kind=" + (t4 && t4.kind));

// Beam damage: 1 HP per 0.5s tick, killMinion on death.
const tick = (c) => {
  const t = pick(c);
  vm.runInContext("damageLaserTarget(target)", Object.assign(c.sandbox, { target: t }));
};
const zealotDeath = makeCtx([minion("zealot", 440, 300)]);
zealotDeath.sandbox.BEAM_X = BEAM_X; zealotDeath.sandbox.PLAYER_Y = PLAYER_Y;
zealotDeath.sandbox.bosses = [bossUnit()];
let ticks = 0;
while (zealotDeath.target.minions.length && ticks < 10) { tick(zealotDeath); ticks += 1; }
check("beam kills a 4 HP zealot in 4 ticks (1 HP per 0.5s = 2.0s)",
  zealotDeath.target.minions.length === 0 && ticks === 4, "ticks=" + ticks);
check("beam-killed zealot scores 40 and drops loot",
  zealotDeath.rec.scores.includes(40) && zealotDeath.rec.drops.length === 1,
  "scores=" + zealotDeath.rec.scores.join(","));
// The laser, unlike the bomb blast, does not clear enemy fire: the zealot's
// death volley lands on screen, so shooting a zealot is not free of risk.
check("beam-killed zealot's 3-shot volley lands (the laser does not clear enemy fire)",
  zealotDeath.target.enemyBullets.length === 3,
  "bullets=" + zealotDeath.target.enemyBullets.length);

const idolDeath = makeCtx([minion("idol", 440, 300)]);
idolDeath.sandbox.BEAM_X = BEAM_X; idolDeath.sandbox.PLAYER_Y = PLAYER_Y;
idolDeath.sandbox.bosses = [bossUnit()];
let idolTicks = 0;
while (idolDeath.target.minions.length && idolTicks < 10) { tick(idolDeath); idolTicks += 1; }
check("beam kills the 3 HP idol in 3 ticks (heal broken by laser)",
  idolDeath.target.minions.length === 0 && idolTicks === 3, "ticks=" + idolTicks);
check("the boss takes no beam damage while the idol shields it",
  idolDeath.rec.bossDamage === 0, "bossDamage=" + idolDeath.rec.bossDamage);

const baseline = (() => {
  const c = makeCtx([minion("idol", 440, 300)]);
  vm.runInContext(sliceFn(v181, "findLaserTarget") + "\n" + KILL, c.sandbox);
  c.sandbox.BEAM_X = BEAM_X; c.sandbox.PLAYER_Y = PLAYER_Y;
  c.sandbox.bosses = [bossUnit()];
  return { c, t: vm.runInContext("findLaserTarget(BEAM_X, PLAYER_Y)", c.sandbox) };
})();
check("BASELINE reproduced the bug (v1.8.1 beam picked the boss straight through the idol)",
  baseline.t && baseline.t.kind === "boss", "kind=" + (baseline.t && baseline.t.kind));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
