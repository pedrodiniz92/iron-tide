const vm = require("vm");
const h = require("./harness.js");
const C = h.context;

function run(code) { return vm.runInContext(code, C); }

function start(level) {
  run("startGame(true)");
  if (level > 1) { run(`level = ${level}; newWave();`); }
}

function step(dt) { run("update(" + dt + ")"); }

function sim(seconds, dt = 1 / 60) {
  const n = Math.round(seconds / dt);
  for (let i = 0; i < n; i += 1) {
    run("update(" + dt + ")");
  }
}

module.exports = { run, start, step, sim, C };
