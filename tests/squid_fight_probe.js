const { run, start } = require("./sim.js");

const LVL = Number(process.argv[2] || 10);
const SECS = Number(process.argv[3] || 120);

start(LVL);
run("spawnBoss()");

const log = [];
let prevKey = null;
const bad = [];
const dt = 1 / 60;
const N = Math.round(SECS / dt);
let maxNb = 0, maxFz = 0, frozenFrames = 0, maxHp = 0;

function check() {
  const arr = JSON.parse(run(`(function(){
    var out = [];
    var mz = minions.filter(function(m){return m.type==="zealot"}).length;
    var mi = minions.filter(function(m){return m.type==="idol"}).length;
    if (mz > 2) out.push("ZEALOTS>2: " + mz);
    if (mi > 1) out.push("IDOLS>1: " + mi);
    enemyBullets.forEach(function(b){
      if (!isFinite(b.x)||!isFinite(b.y)||!isFinite(b.vx)||!isFinite(b.speed)) out.push("NaN bullet");
      if (b.seekMax !== undefined && !(b.seekMax >= 0)) out.push("bad seekMax " + b.seekMax);
    });
    minions.forEach(function(m){
      if (!isFinite(m.x)||!isFinite(m.y)||!isFinite(m.bx)||!isFinite(m.by)) out.push("NaN minion");
    });
    if (boss && (!isFinite(boss.x)||!isFinite(boss.y)||!isFinite(boss.vx)||!isFinite(boss.vy))) out.push("NaN boss");
    if (boss && boss.hp > boss.maxHp) out.push("boss hp>max "+boss.hp+"/"+boss.maxHp);
    return JSON.stringify(out);
  })()`));
  arr.forEach((m) => { if (!bad.includes(m)) bad.push(m); });
}

for (let i = 0; i < N; i += 1) {
  if (run("state") !== "playing") { log.push(`t=${(i*dt).toFixed(2)} state=${run("state")} (sim stops: real frame() gates update)`); break; }
  run("update(1/60)");
  const f = Number(run("enemyBullets.filter(b=>b.frozen).length"));
  frozenFrames += f;
  maxFz = Math.max(maxFz, f);
  maxNb = Math.max(maxNb, Number(run("enemyBullets.length")));
  maxHp = Math.max(maxHp, Number(run("boss ? boss.hp : 0")));
  const key = run(`[state, boss?boss.callState:"-", boss?boss.callCount:-1, bellEffect?bellEffect.phase:"-", minions.filter(m=>m.type==="zealot").length, minions.filter(m=>m.type==="idol").length, lives, boss?Math.round(boss.hp):-1, bosses.length].join("|")`);
  if (key !== prevKey) {
    prevKey = key;
    const full = run(`JSON.stringify({cs:boss?boss.callState:"-",cc:boss?boss.callCount:-1,ct:boss?+boss.callT.toFixed(2):-1,bt:boss?+boss.bellTimer.toFixed(2):-1,hp:boss?+boss.hp.toFixed(1):-1,be:bellEffect?bellEffect.phase+":"+bellEffect.t.toFixed(2):null,mz:minions.filter(m=>m.type==="zealot").length,mi:minions.filter(m=>m.type==="idol").length,nb:enemyBullets.length,fz:enemyBullets.filter(b=>b.frozen).length,nt:enemyBullets.filter(b=>b.ttl===undefined).length,nbmb:enemyBombs.length,nmin:spikeMines.length})`);
    log.push(`t=${(i*dt).toFixed(2)} ${full}`);
  }
  check();
}

console.log("LEVEL", LVL, "design:", run("boss ? boss.designData.name : '-'"), "maxHp:", run("boss ? boss.maxHp : '-'"), "spawnVx:", run("boss ? boss.vx : '-'"));
console.log("events:", log.length, "frozenFrameSum:", frozenFrames, "maxBullets:", maxNb, "maxFrozen:", maxFz);
console.log("--- LOG ---\n" + log.join("\n"));
console.log("--- VIOLATIONS ---\n" + (bad.length ? bad.join("\n") : "none"));
