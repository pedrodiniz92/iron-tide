// The squid's every-3rd-cast idol must never be a no-show. Runs the REAL
// castCalling + spawnMinion out of js/boss.js, and the v1.9.1 baseline (f99861c,
// pinned - never HEAD, which moves the moment the fix ships) to prove the old
// cast summoned nothing while the idol was alive.
const fs = require("fs");
const vm = require("vm");
const { execSync } = require("child_process");

const REPO = require("path").join(__dirname, "..");
const boss = fs.readFileSync(REPO + "/js/boss.js", "utf8");
const v191 = execSync("git -C " + REPO + " show f99861c:js/boss.js", { encoding: "utf8" });

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

function cast(src, callCount, minions) {
  const target = {
    Math, Number, String, Array, Object, JSON, Boolean, isNaN,
    W: 928, H: 620, minions, minionSeq: 0, boss: { x: 400, y: 120, w: 128, h: 96, callCount },
    seen: []
  };
  const sandbox = new Proxy(target, {
    has: () => true,
    get: (t, p) => (p in t ? t[p] : () => undefined),
    set: (t, p, v) => { t[p] = v; return true; }
  });
  vm.createContext(sandbox);
  vm.runInContext(sliceFn(src, "castCalling") + "\n" + sliceFn(src, "spawnMinion"), sandbox);
  vm.runInContext("castCalling(boss)", sandbox);
  return minions;
}

let fails = 0;
const check = (label, ok, extra) => {
  console.log((ok ? "  PASS " : "  FAIL ") + label + (extra ? "  [" + extra + "]" : ""));
  if (!ok) fails += 1;
};
const zealots = (list) => list.filter((m) => m.type === "zealot").length;
const idols = (list) => list.filter((m) => m.type === "idol").length;
const minion = (type) => ({
  id: Math.random(), type, x: 300, y: 200, bx: 300, by: 200, w: 34, h: 34,
  hp: type === "zealot" ? 4 : 3, maxHp: type === "zealot" ? 4 : 3, t: 0, fire: 2,
  auraR: type === "idol" ? 150 : 0, phase: 0
});

console.log("\nTHE CALLING summons (real castCalling)");

const idolCast = cast(boss, 3, []);
check("3rd cast raises the idol", idols(idolCast) === 1 && zealots(idolCast) === 0,
  "idols=" + idols(idolCast) + " zealots=" + zealots(idolCast));

const idolAlive = cast(boss, 3, [minion("idol")]);
check("3rd cast with the idol already alive summons 2 zealots, not nothing",
  zealots(idolAlive) === 2 && idols(idolAlive) === 1,
  "idols=" + idols(idolAlive) + " zealots=" + zealots(idolAlive));

const plain = cast(boss, 1, []);
check("normal cast summons 2 zealots", zealots(plain) === 2, "zealots=" + zealots(plain));

const oneAlive = cast(boss, 1, [minion("zealot")]);
check("zealot cap holds: 1 alive -> 1 more", zealots(oneAlive) === 2, "zealots=" + zealots(oneAlive));

const twoAlive = cast(boss, 1, [minion("zealot"), minion("zealot")]);
check("zealot cap holds: 2 alive -> none", zealots(twoAlive) === 2, "zealots=" + zealots(twoAlive));

const crowded = cast(boss, 6, [minion("idol"), minion("zealot"), minion("zealot")]);
check("idol + 2 zealots alive -> the cast is empty (the cap is the hard rule)",
  idols(crowded) === 1 && zealots(crowded) === 2,
  "idols=" + idols(crowded) + " zealots=" + zealots(crowded));

const doubleIdol = cast(boss, 3, [minion("idol"), minion("idol")]);
check("the idol never duplicates", idols(doubleIdol) === 2, "idols=" + idols(doubleIdol));

const baseline = cast(v191, 4, [minion("idol")]);
check("BASELINE reproduced the no-show (v1.9.1 4th cast with the idol alive summoned nothing)",
  zealots(baseline) === 0 && idols(baseline) === 1,
  "idols=" + idols(baseline) + " zealots=" + zealots(baseline));

check("the windup gate is untouched (riteActive still reads callState)",
  /function riteActive\(boss\) \{\n  return boss\.callState === "slow" \|\| boss\.callState === "windup";/.test(boss));

console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : "FAILURES: " + fails));
process.exit(fails === 0 ? 0 : 1);
