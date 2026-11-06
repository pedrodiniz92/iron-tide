const { run, start, sim } = require("./sim.js");

start(10);
run("spawnBoss()");
console.log("boss:", run("bosses[0].designName"), "hp", run("bosses[0].hp"), "speed", run("bosses[0].vx"));

const dt = 1 / 60;
let prevCall = null;
for (let f = 0; f < 60 * 150; f += 1) {
  run("update(" + dt + ")");
  const s = run(`JSON.stringify({
    st: state, lvl: level, nb: bosses.length,
    cs: bosses[0] ? bosses[0].callState : null,
    ct: bosses[0] ? +bosses[0].callT.toFixed(2) : null,
    cc: bosses[0] ? bosses[0].callCount : null,
    ctm: bosses[0] ? +bosses[0].callTimer.toFixed(2) : null,
    bt: bosses[0] ? +bosses[0].bellTimer.toFixed(2) : null,
    bell: bellEffect ? bellEffect.phase + ":" + bellEffect.t.toFixed(2) : null,
    eb: enemyBullets.length,
    fz: enemyBullets.filter(b => b.frozen).length,
    noBellFrozen: bellEffect ? -1 : enemyBullets.filter(b => b.frozen).length,
    noTtl: enemyBullets.filter(b => b.ttl === undefined).length,
    min: minions.map(m => m.type + ":" + m.hp.toFixed(1)).join(","),
    hp: bosses[0] ? +bosses[0].hp.toFixed(1) : null,
    vx: bosses[0] ? +bosses[0].vx.toFixed(1) : null,
    x: bosses[0] ? +bosses[0].x.toFixed(0) : null,
    y: bosses[0] ? +bosses[0].y.toFixed(0) : null,
    lives, playerHp, stg: +bossStagger.toFixed(2)
  })`);
  if (s !== prevCall) {
    console.log((f * dt).toFixed(2) + "s " + s);
    prevCall = s;
  }
  if (run("state") !== "playing") { console.log("STATE ->", run("state"), "at", (f * dt).toFixed(2)); break; }
}
