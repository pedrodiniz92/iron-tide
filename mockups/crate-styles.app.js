import * as THREE from "./vendor/three.module.js";
import { addHull, finishMob, part, surfMaterial } from "./toon3d.js";

const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(canvas.width, canvas.height, false);
renderer.setClearColor(0x0b0c14, 1);

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(24, canvas.width / canvas.height, 0.5, 100);
const CFG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const GOLD = "#ffd166";
const state = { spin: 1, quality: 2 };
const RING = ["#8fffc8", "#9ae6ff", "#ffd166"];

function crateSimple() {
  const g = new THREE.Group();
  const body = part(g, new THREE.BoxGeometry(20, 18, 16), GOLD, CFG, 0, 0, 0, 0.016);
  addHull(g, body, body.geometry, 0.022, CFG, GOLD);
  part(g, new THREE.BoxGeometry(20.6, 3, 16.6), "#8a6a20", CFG, 0, 6, 0, 0.010);
  part(g, new THREE.BoxGeometry(3, 18.6, 16.6), "#8a6a20", CFG, 0, 0, 0, 0.010);
  part(g, new THREE.BoxGeometry(20.6, 18.6, 3), "#8a6a20", CFG, 0, 0, 0, 0.010);
  part(g, new THREE.BoxGeometry(5, 4.4, 3), "#2b2b0e", CFG, 0, 1.5, 8.6, 0.008);
  part(g, new THREE.SphereGeometry(1.1, 10, 8), "#ffe066", CFG, 0, 1.5, 10.2, 0.005);
  return g;
}

const builders = [crateSimple];
const names = ["SIMPLE CRATE"];
const mobs = builders.map((b, i) => {
  const m = b();
  finishMobScale(m);
  m.position.x = 0;
  scene.add(m);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.045, 8, 40),
    new THREE.MeshBasicMaterial({ color: RING[state.quality], transparent: true, opacity: 0.85 }));
  ring.position.x = 0;
  ring.rotation.x = 1.35;
  scene.add(ring);
  m.userData.ring = ring;
  return m;
});

function finishMobScale(g) {
  const box = new THREE.Box3().setFromObject(g);
  const size = box.getSize(new THREE.Vector3());
  g.scale.setScalar(1.9 / Math.max(size.x, size.y, size.z));
}

cam.position.set(0, 2.2, 9.5);
cam.lookAt(0, 0, 0);

const notesEl = document.getElementById("notes");
function frame(t) {
  mobs.forEach((m, i) => {
    m.rotation.y = state.spin ? t / 1600 + i * 2 : 0.6;
    m.position.y = Math.sin(t / 700 + i) * 0.12;
    m.userData.ring.rotation.z = t / 2400 + i;
    m.userData.ring.position.y = m.position.y;
  });
  renderer.render(scene, cam);
  notesEl.textContent = names.map((n, i) => n + (mobs[i].userData.ring.visible ? "" : "")).join("   ·   ") +
    "   ·   quality ring: " + ["common", "rare", "gold"][state.quality];
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

const chipsEl = document.getElementById("chips");
function mkChip(id, label, fn) {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.dataset.chip = id;
  b.textContent = label();
  b.addEventListener("click", () => { fn(); refresh(); });
  chipsEl.appendChild(b);
  return b;
}
function refresh() {
  chipsEl.querySelectorAll("[data-chip]").forEach((b) => {
    b.textContent = b.dataset.chip === "spin" ? "AUTO SPIN: " + (state.spin ? "ON" : "OFF")
      : "QUALITY: " + ["COMMON", "RARE", "GOLD"][state.quality];
  });
  mobs.forEach((m) => { m.userData.ring.material.color.set(RING[state.quality]); });
}
mkChip("spin", () => "AUTO SPIN: ON", () => { state.spin = state.spin ? 0 : 1; });
mkChip("quality", () => "QUALITY: GOLD", () => { state.quality = (state.quality + 1) % 3; });

canvas.addEventListener("pointerdown", (e) => {
  canvas.setPointerCapture(e.pointerId);
  canvas.userData = { x: e.clientX, y: e.clientY };
  state.spin = 0;
});
canvas.addEventListener("pointermove", (e) => {
  if (!canvas.userData) return;
  cam.position.x = (e.clientX - canvas.userData.x) * 0.012;
  cam.position.y = 2.2 - (e.clientY - canvas.userData.y) * 0.01;
  cam.lookAt(0, 0, 0);
});
canvas.addEventListener("pointerup", () => { canvas.userData = null; });

if (new URLSearchParams(location.search).has("selftest")) {
  setTimeout(() => {
    document.title = "SELFTEST " + JSON.stringify({ crates: mobs.length, quality: state.quality });
  }, 600);
}
