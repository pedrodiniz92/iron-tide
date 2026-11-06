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
let maxNb = 0, maxFz = 0, maxHp = -1, idolHealSeen = 0;

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
      if (b.frozen && b.ttl !== undefined && b.ttl < 0) out.push("frozen ttl went negative: "+b.ttl);
    });
    minions.forEach(function(m){
      if (!isFinite(m.x)||!isFinite(m.y)||!isFinite(m.bx)||!isFinite(m.by)) out.push("NaN minion");
      if (m.y > H - 140 + 1 || m.y < 60 - 1) out.push("minion y out of clamp: "+m.y);
    });
    if (boss && (!isFinite(boss.x)||!isFinite(boss.y)||!isFinite(boss.vx)||!isFinite(boss.vy))) out.push("NaN boss");
    if (boss && boss.hp > boss.maxHp + 0.001) out.push("boss hp>max "+boss.hp+"/"+boss.maxHp);
    if (boss && (boss.y < 57 || boss.y > H - boss.h - 24 + 1)) out.push("boss y out of range "+boss.y);
    return JSON.stringify(out);
  })()`));
  arr.forEach((m) => { if (!bad.includes(m)) bad.push(m); });
}

for (let i = 0; i < N; i += 1) {
  if (run("state") !== "playing") { log.push(`t=${(i*dt).toFixed(2)} state=${run("state")} (sim stops)`); break; }
  run("invulnerabilityTimer = 999; playerHp = maxPlayerHp;");
  const hpBefore = Number(run("boss ? boss.hp : 0"));
  run("update(1/60)");
  const hpAfter = Number(run("boss ? boss.hp : 0"));
  if (hpAfter > hpBefore + 1e-9) idolHealSeen += 1;
  maxHp = Math.max(maxHp, hpAfter);
  const f = Number(run("enemyBullets.filter(b=>b.frozen).length"));
  maxFz = Math.max(maxFz, f);
  maxNb = Math.max(maxNb, Number(run("enemyBullets.length")));
  const key = run(`[state, boss?boss.callState:"-", boss?boss.callCount:-1, bellEffect?bellEffect.phase:"-", minions.filter(m=>m.type==="zealot").length, minions.filter(m=>m.type==="idol").length, bosses.length].join("|")`);
  if (key !== prevKey) {
    prevKey = key;
    const full = run(`JSON.stringify({cs:boss?boss.callState:"-",cc:boss?boss.callCount:-1,ct:boss?+boss.callT.toFixed(2):-1,bt:boss?+boss.bellTimer.toFixed(2):-1,hp:boss?+boss.hp.toFixed(1):-1,be:bellEffect?bellEffect.phase+":"+bellEffect.t.toFixed(2):null,mz:minions.filter(m=>m.type==="zealot").length,mi:minions.filter(m=>m.type==="idol").length,mhp:minions.map(m=>m.type+":"+m.hp.toFixed(1)).join(","),nb:enemyBullets.length,fz:enemyBullets.filter(b=>b.frozen).length,nt:enemyBullets.filter(b=>b.ttl===undefined).length,nbmb:enemyBombs.length,nmin:spikeMines.length,bx:boss?Math.round(boss.x):-1,by:boss?Math.round(boss.y):-1})`);
    log.push(`t=${(i*dt).toFixed(2)} ${full}`);
  }
  check();
}

console.log("LEVEL", LVL, "design:", run("boss ? boss.designData.name : '-'"), "maxHp:", run("boss ? boss.maxHp : '-'"));
console.log("events:", log.length, "maxBullets:", maxNb, "maxFrozen:", maxFz, "maxBossHp:", maxHp.toFixed(2), "healFrames:", idolHealSeen);
console.log("--- LOG ---\n" + log.join("\n"));
console.log("--- VIOLATIONS ---\n" + (bad.length ? bad.join("\n") : "none"));
