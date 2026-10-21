import * as THREE from "./vendor/three.module.js";
import { buildBanshee, BANSHEES } from "./banshees3d.js";

const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(canvas.width, canvas.height, false);
renderer.setClearColor(0x0b0c14, 1);

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(26, canvas.width / canvas.height, 0.5, 300);
const target = new THREE.Vector3(0, 0, 0);

const TINTS = [["BONE", "#dfe9ff"], ["SPECTRAL", "#c4a8ff"], ["PHASE", "#9dffd4"]];
const BANSHEE_TINTS = [["WRAITH", "#c4a8ff"], ["CRIMSON", "#ff7a9c"], ["CAULD", "#8fffc8"]];

const state = {
  kind: "ghost", tint: 0, bTint: 0, toon: 1, rim: 0.5, backRim: 0.3, inkHull: 0,
  ghosting: 1, spin: 0, yaw: 0.3, pitch: 0.08, dist: 4.6
};

const VIEWS = { "3/4": [0.5, 0.28], FRONT: [0, 0.04], SIDE: [Math.PI / 2, 0.04], TOP: [0, 1.15] };

function cfgOf() {
  return { toon: state.toon, inkHull: state.inkHull, inkBlack: 0, inkPx: 4, rim: state.rim, backRim: state.backRim };
}

const ROWS = [["ghost", -1.15], ["wail", 1.15]];
let mobs = [];
function rebuild() {
  mobs.forEach((m) => scene.remove(m));
  mobs = ROWS.map(([kind, y]) => {
    const tint = kind === "ghost" ? TINTS[state.tint][1] : BANSHEE_TINTS[state.bTint][1];
    const m = buildBanshee(kind, cfgOf(), tint);
    m.position.x = y;
    m.scale.multiplyScalar(0.8);
    if (kind === "ghost") {
      const veil = new THREE.Mesh(
        new THREE.PlaneGeometry(2.0, 2.0),
        new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false })
      );
      veil.position.set(0, 0.05, 1.2);
      m.add(veil);
      m.userData.veilMesh = veil;
    }
    scene.add(m);
    return m;
  });
  notes();
}

function ghostAlpha(t) {
  if (!state.ghosting) return 1;
  const p = (t % 4000) / 1000;
  if (p < 3) return 1;
  return 0.14 + 0.04 * Math.sin((p - 3) * 12);
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
function notes() {
  notesEl.textContent = "LEFT: GHOSTS (wave 5, phases every 4s) " + TINTS[state.tint][0] +
    " · RIGHT: BANSHEES (wave 4, scream) " + BANSHEE_TINTS[state.bTint][0] +
    " · dist " + state.dist.toFixed(1);
}

function frame(t) {
  if (state.spin) state.yaw += 0.004;
  const a = ghostAlpha(t);
  mobs.forEach((mob, i) => {
    mob.rotation.y = Math.sin(t / 900 + i) * 0.4;
    (mob.userData.spin || []).forEach((sp) => { sp.obj.rotation.y = t / (sp.speed * 260); });
    if (mob.userData.veilMesh) {
      mob.userData.veilMesh.rotation.y = -mob.rotation.y;
      mob.userData.veilMesh.material.opacity = a >= 0.99 ? 0 : 0.85;
    }
  });
  placeCamera();
  renderer.render(scene, cam);
  requestAnimationFrame(frame);
}

rebuild();
requestAnimationFrame(frame);

const CHIPS = [
  { id: "tint", label: "GHOST TINT", get: () => true, labelFn: () => "GHOST TINT: " + TINTS[state.tint][0], cycle: true, act: () => { state.tint = (state.tint + 1) % TINTS.length; } },
  { id: "btint", label: "BANSHEE COLOR", get: () => true, labelFn: () => "BANSHEE: " + BANSHEE_TINTS[state.bTint][0], cycle: true, act: () => { state.bTint = (state.bTint + 1) % BANSHEE_TINTS.length; } },
  { id: "ghost", label: "PHASE DEMO", get: () => !!state.ghosting, set: (v) => { state.ghosting = v ? 1 : 0; } },
  { id: "toon", label: "TOON RAMP", get: () => !!state.toon, set: (v) => { state.toon = v ? 1 : 0; }, rebuild: true },
  { id: "rim", label: "SKY RIM", get: () => state.rim > 0, set: (v) => { state.rim = v ? 0.5 : 0; }, rebuild: true },
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
  notes();
}

CHIPS.forEach((chip) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.dataset.chip = chip.id;
  b.textContent = chip.labelFn ? chip.labelFn() : chip.label;
  b.setAttribute("aria-pressed", chip.get() ? "true" : "false");
  b.addEventListener("click", () => {
    if (chip.cycle) chip.act();
    else chip.set(!chip.get());
    if (chip.rebuild || chip.cycle) rebuild();
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
  state.dist = Math.max(2.2, Math.min(12, state.dist + Math.sign(e.deltaY) * 0.4));
  notes();
}, { passive: false });

const q = new URLSearchParams(location.search);
if (q.get("design") && BANSHEES[q.get("design")]) state.kind = q.get("design");
if (VIEWS[q.get("view")]) { state.yaw = VIEWS[q.get("view")][0]; state.pitch = VIEWS[q.get("view")][1]; state.spin = 0; }
rebuild();
refreshChips();

if (q.has("selftest")) {
  setTimeout(() => {
    let meshes = 0;
    mobs.forEach((m) => m.traverse((o) => { if (o.isMesh) meshes += 1; }));
    document.title = "SELFTEST " + JSON.stringify({ designs: mobs.length, meshes });
  }, 600);
}

if (q.has("ascii")) {
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
