import * as THREE from "./vendor/three.module.js";
import { buildTurtleB } from "./toon3d.v2.js";

const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(canvas.width, canvas.height, false);
renderer.setClearColor(0x0b0c14, 1);

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(24, canvas.width / canvas.height, 0.5, 300);
const target = new THREE.Vector3(0, 0.05, 0);

const GAME = "#2fc96f";
const MOCKUP = "#42d3e6";

const state = {
  toon: 1, rim: 0.55, backRim: 0.35, inkHull: 0,
  plateRings: 3, flatBelly: 1, spin: 1, base: GAME,
  yaw: 0.6, pitch: 0.35, dist: 6.4
};

const VIEWS = {
  "3/4": [0.6, 0.35], FRONT: [0, 0.04], TOP: [0, 1.25], SIDE: [Math.PI / 2, 0.04], BELLY: [0, -0.6]
};

function cfgOf() {
  return {
    toon: state.toon, inkHull: state.inkHull, inkBlack: 0, inkPx: 4,
    rim: state.rim, backRim: state.backRim,
    plateRings: state.plateRings, flatBelly: state.flatBelly
  };
}

let mob = null;
let plates = 0;

function rebuild() {
  if (mob) scene.remove(mob);
  mob = buildTurtleB(cfgOf(), state.base);
  plates = 0;
  mob.traverse((o) => { if (o.isMesh) plates += 1; });
  scene.add(mob);
  report();
}

function placeCamera() {
  const cp = Math.cos(state.pitch);
  cam.position.set(
    target.x + Math.sin(state.yaw) * cp * state.dist,
    target.y + Math.sin(state.pitch) * state.dist,
    target.z + Math.cos(state.yaw) * cp * state.dist
  );
  cam.lookAt(target);
}

const notesEl = document.getElementById("notes");
function report() {
  notesEl.textContent = "meshes " + plates + " · yaw " + state.yaw.toFixed(2) +
    " · pitch " + state.pitch.toFixed(2) + " · dist " + state.dist.toFixed(1) +
    " · rings " + state.plateRings + " · belly " + (state.flatBelly ? "FLAT" : "ROUND") +
    " · base " + state.base;
}

function frame(t) {
  if (state.spin) state.yaw += 0.0035;
  if (mob) {
    const parts = Object.assign({}, mob.userData, (mob.children[0] && mob.children[0].userData) || {});
    (parts.claws || []).forEach((pivot, i) => {
      pivot.rotation.x = -0.3 + Math.sin(t / 620 + i * 3.1) * 0.22;
    });
  }
  placeCamera();
  renderer.render(scene, cam);
  requestAnimationFrame(frame);
}

rebuild();
requestAnimationFrame(frame);

const CHIPS = [
  { id: "toon", label: "TOON RAMP", get: () => !!state.toon, set: (v) => { state.toon = v ? 1 : 0; }, apply: "mat" },
  { id: "rim", label: "SKY RIM", get: () => state.rim > 0, set: (v) => { state.rim = v ? 0.55 : 0; }, apply: "mat" },
  { id: "back", label: "BACK RIM", get: () => state.backRim > 0, set: (v) => { state.backRim = v ? 0.35 : 0; }, apply: "mat" },
  { id: "thinInk", label: "INK THIN (own hue, hull)", get: () => !!state.inkHull, set: (v) => { state.inkHull = v ? 1 : 0; }, apply: "mat" },
  { id: "rings", label: "PLATE SIZE", get: () => true, labelFn: () => "SKIN HEX SIZE: " + state.plateRings + " of 5", cycle: true, act: () => { state.plateRings = (state.plateRings % 5) + 1; } },
  { id: "belly", label: "BELLY", get: () => !!state.flatBelly, labelFn: () => "BELLY: " + (state.flatBelly ? "FLAT" : "ROUND"), set: (v) => { state.flatBelly = v ? 1 : 0; } },
  { id: "base", label: "BASE", get: () => state.base === GAME, labelFn: () => "BASE: " + (state.base === GAME ? "GAME " + GAME : "MOCKUP " + MOCKUP), set: (v) => { state.base = v ? GAME : MOCKUP; } },
  { id: "spin", label: "AUTO SPIN", get: () => !!state.spin, set: (v) => { state.spin = v ? 1 : 0; } }
];

const chipsEl = document.getElementById("chips");
function refreshChips() {
  CHIPS.forEach((chip) => {
    const el = chipsEl.querySelector(`[data-chip="${chip.id}"]`);
    if (!el) return;
    el.setAttribute("aria-pressed", chip.get() ? "true" : "false");
    if (chip.labelFn) el.textContent = chip.labelFn();
  });
  report();
}

CHIPS.forEach((chip) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.dataset.chip = chip.id;
  b.textContent = chip.labelFn ? chip.labelFn() : chip.label;
  b.setAttribute("aria-pressed", chip.get() ? "true" : "false");
  b.addEventListener("click", () => {
    if (chip.cycle) {
      chip.act();
    } else {
      chip.set(!chip.get());
    }
    rebuild();
    refreshChips();
  });
  chipsEl.appendChild(b);
});

const viewsEl = document.getElementById("views");
Object.keys(VIEWS).forEach((name) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.textContent = name;
  b.addEventListener("click", () => {
    state.yaw = VIEWS[name][0];
    state.pitch = VIEWS[name][1];
    state.spin = 0;
    refreshChips();
  });
  viewsEl.appendChild(b);
});

canvas.addEventListener("pointerdown", (e) => {
  canvas.setPointerCapture(e.pointerId);
  canvas.userData = { x: e.clientX, y: e.clientY, yaw: state.yaw, pitch: state.pitch };
  state.spin = 0;
});
canvas.addEventListener("pointermove", (e) => {
  if (!canvas.userData) return;
  state.yaw = canvas.userData.yaw + (e.clientX - canvas.userData.x) * 0.011;
  state.pitch = Math.max(-1.35, Math.min(1.35, canvas.userData.pitch + (e.clientY - canvas.userData.y) * 0.008));
});
canvas.addEventListener("pointerup", () => { canvas.userData = null; });
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  state.dist = Math.max(3, Math.min(16, state.dist + Math.sign(e.deltaY) * 0.5));
  report();
}, { passive: false });

const urlRing = new URLSearchParams(location.search).get("rings");
if (urlRing !== null && Number.isFinite(Number(urlRing))) state.plateRings = Math.max(1, Math.min(5, Number(urlRing)));
const urlBelly = new URLSearchParams(location.search).get("belly");
if (urlBelly) state.flatBelly = urlBelly === "flat" ? 1 : 0;
const urlView = new URLSearchParams(location.search).get("view");
if (VIEWS[urlView]) {
  state.yaw = VIEWS[urlView][0];
  state.pitch = VIEWS[urlView][1];
  state.spin = 0;
}
rebuild();
refreshChips();

if (new URLSearchParams(location.search).has("selftest")) {
  setTimeout(() => {
    document.title = "SELFTEST " + JSON.stringify({ plates, mesh: Boolean(mob), ...cfgOf() });
  }, 600);
}

if (new URLSearchParams(location.search).has("texprobe")) {
  setTimeout(() => {
    let tex = null;
    mob.traverse((o) => {
      if (o.isMesh && o.geometry.type === "SphereGeometry" && o.material.uniforms && o.material.uniforms.uMap && o.material.uniforms.uMap.value && o.material.uniforms.uMap.value.image) tex = o.material.uniforms.uMap.value;
    });
    if (!tex) { document.title = "TEXPROBE no texture"; return; }
    const cv = tex.image;
    const g = cv.getContext("2d");
    const d = g.getImageData(0, 0, cv.width, cv.height).data;
    let min = 999; let max = -999; let sum = 0; let n = 0;
    const hist = {};
    for (let i = 0; i < d.length; i += 16) {
      const l = (d[i] + d[i + 1] + d[i + 2]) / 3;
      min = Math.min(min, l); max = Math.max(max, l); sum += l; n += 1;
      const k = Math.round(d[i]) + "," + Math.round(d[i + 1]) + "," + Math.round(d[i + 2]);
      hist[k] = (hist[k] || 0) + 1;
    }
    const top = Object.entries(hist).sort((a, b) => b[1] - a[1]).slice(0, 4);
    document.title = "TEXPROBE " + JSON.stringify({ size: cv.width + "x" + cv.height, min, max, mean: Math.round(sum / n), top });
  }, 800);
}

if (new URLSearchParams(location.search).has("ascii")) {
  setTimeout(() => {
    renderer.render(scene, cam);
    const W = 100;
    const H = 42;
    const c2 = document.createElement("canvas");
    c2.width = W; c2.height = H;
    const g = c2.getContext("2d");
    g.drawImage(renderer.domElement, 0, 0, W, H);
    const d = g.getImageData(0, 0, W, H).data;
    const RAMP = " .:-=+oO #%@";
    let out = "ASCIIFRAME\n";
    for (let y = 0; y < H; y += 1) {
      let line = "";
      for (let x = 0; x < W; x += 1) {
        const i = (y * W + x) * 4;
        const l = (d[i] * 0.25 + d[i + 1] * 0.6 + d[i + 2] * 0.15) / 255;
        line += RAMP[Math.max(0, Math.min(9, Math.round(l * 9)))];
      }
      out += line + "\n";
    }
    console.log(out + "ENDASCII");
  }, 900);
}
