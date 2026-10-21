import * as THREE from "./vendor/three.module.js";
import { MOB_V2 } from "./toon3d.v2.js";

const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(canvas.width, canvas.height, false);
renderer.setClearColor(0x0b0c14, 1);

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(26, canvas.width / canvas.height, 0.5, 300);
const target = new THREE.Vector3(0, 0.2, 0);

function crackTexture() {
  const cv = document.createElement("canvas");
  cv.width = 1024; cv.height = 512;
  const g2 = cv.getContext("2d");
  g2.fillStyle = "#ffffff";
  g2.fillRect(0, 0, 1024, 512);
  g2.strokeStyle = "rgba(10,6,2,0.92)";
  g2.lineCap = "round";
  g2.lineWidth = 85;
  const X = (x) => (x * 10 / 36 + 0.5) * 1024;
  const Y = (y) => (1 - (y * 10 / 18 + 0.5)) * 512;
  const chain = (x, y, ang, segs) => {
    segs.forEach(([len, bend, w], i) => {
      const nx = x + Math.cos(ang) * len;
      const ny = y + Math.sin(ang) * len;
      g2.lineWidth = w;
      g2.beginPath();
      g2.moveTo(X(x), Y(y));
      if (i > 0) g2.lineTo(X(x), Y(y));
      g2.lineTo(X(nx), Y(ny));
      g2.stroke();
      x = nx; y = ny; ang += bend;
    });
  };
  const ix = 0.6, iy = 0.45;
  chain(ix, iy, -2.35, [[0.42, -0.25, 85], [0.5, 0.2, 55], [0.42, 0.05, 30]]);
  chain(ix, iy, -1.5, [[0.36, 0.3, 85], [0.45, 0.15, 55], [0.4, 0.05, 30]]);
  chain(ix, iy, -0.4, [[0.42, -0.15, 85], [0.36, 0.25, 55], [0.3, 0.1, 30]]);
  chain(ix, iy, 2.6, [[0.4, 0.18, 85], [0.36, -0.22, 55], [0.3, -0.1, 30]]);
  chain(ix, iy, 1.75, [[0.24, -0.3, 85], [0.2, 0.3, 55]]);
  g2.lineWidth = 64;
  g2.beginPath();
  g2.arc(X(ix), Y(iy), 0.42 * 10 / 36 * 1024, -2.5, -1.25, false);
  g2.stroke();
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

const CFG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const COLORS = "#ffd26b";
const STEEL = "#c8dcf2";
const STEEL_DARK = "#5a6678";

const state = { yaw: 0, pitch: 0.12, dist: 9.2, spin: 0 };

function addBox(g, w, h, d, col, x, y, z, rz) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color: col }));
  m.position.set(x, y, z);
  m.rotation.z = rz || 0;
  g.add(m);
  return m;
}

const STYLES = [
  {
    name: "A: PAULDRONS",
    x: -2.5,
    build(c) {
      c.userData.l = addBox(c, 0.5, 0.16, 0.52, STEEL, -0.5, 0.52, 0, 0.35);
      c.userData.r = addBox(c, 0.5, 0.16, 0.52, STEEL, 0.5, 0.52, 0, -0.35);
    },
    setHp(c, hp) {
      const up = hp >= 2;
      [c.userData.l, c.userData.r].forEach((p, i) => {
        p.material.color.set(up ? STEEL : STEEL_DARK);
        p.position.y = up ? 0.52 : 0.34;
        p.rotation.z = (i ? -1 : 1) * (up ? 0.35 : 0.95);
      });
    }
  },
  {
    name: "B: HEX BUBBLE",
    x: 0,
    build(c) {
      c.userData.bubble = new THREE.Mesh(
        new THREE.SphereGeometry(0.92, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.62),
        new THREE.MeshBasicMaterial({ color: 0x6fdcff, transparent: true, opacity: 0.3, depthWrite: false })
      );
      c.userData.bubble.position.y = 0.1;
      c.add(c.userData.bubble);
      c.userData.wire = new THREE.Mesh(
        new THREE.SphereGeometry(0.93, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.62),
        new THREE.MeshBasicMaterial({ color: 0xaef2ff, wireframe: true, transparent: true, opacity: 0.5, depthWrite: false })
      );
      c.userData.wire.position.y = 0.1;
      c.add(c.userData.wire);
    },
    setHp(c, hp) {
      const up = hp >= 2;
      c.userData.bubble.material.opacity = up ? 0.3 : 0;
      c.userData.wire.material.opacity = up ? 0.5 : 0;
    }
  },
  {
    name: "C: BARE + CRACKS",
    x: 2.5,
    crack: true,
    build() {},
    setHp() {}
  }
];

const rows = [
  { hp: 2, y: 1.05 },
  { hp: 1, y: -1.05 }
];
const crabs = [];
rows.forEach((row) => {
  STYLES.forEach((st) => {
    const c = MOB_V2.crab_b(CFG, COLORS,
      st.crack && row.hp < 2
        ? { map: crackTexture(), mapS: new THREE.Vector2(1 / 36, 1 / 18), mapO: new THREE.Vector2(0.5, 0.5) }
        : undefined);
    c.position.set(st.x, row.y, 0);
    c.scale.multiplyScalar(0.85);
    st.build(c);
    st.setHp(c, row.hp);
    scene.add(c);
    crabs.push(c);
  });
});

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
const labels = document.createElement("div");
labels.style.cssText = "position:absolute; left:0; top:0; color:#ffb0a0; font:bold 13px 'Courier New', monospace; pointer-events:none;";
labels.textContent = "1 HP";
canvas.parentNode.insertBefore(labels, canvas.nextSibling);
const labelsTop = document.createElement("div");
labelsTop.style.cssText = "position:absolute; left:14px; top:6px; color:#9fffc9; font:bold 13px 'Courier New', monospace; pointer-events:none;";
labelsTop.textContent = "2 HP  ·  A: PAULDRONS        B: HEX BUBBLE        C: BARE + SHELL CRACKS";
canvas.parentNode.insertBefore(labelsTop, canvas.nextSibling);
canvas.style.position = "relative";
canvas.parentNode.style.position = canvas.parentNode.style.position || "relative";
function notes() {
  notesEl.textContent = "Top row: 2 HP (shield up) · bottom row: 1 HP (shield down) · " +
    "A: PAULDRONS · B: HEX BUBBLE · C: BARE SHELL, CRACKS ON THE SHELL · dist " + state.dist.toFixed(1);
}

function frame(t) {
  crabs.forEach((c, i) => { c.rotation.y = state.spin ? t / 1400 + i : Math.sin(t / 900 + i) * 0.35; });
  placeCamera();
  renderer.render(scene, cam);
  labels.style.transform = "translate(14px, " + (canvas.height - 30) + "px)";
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
      : "ZOOM " + state.dist.toFixed(1);
  });
  notes();
}
mkChip("spin", () => "AUTO SPIN: OFF", () => { state.spin = state.spin ? 0 : 1; });

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
  state.dist = Math.max(3, Math.min(14, state.dist + Math.sign(e.deltaY) * 0.5));
  refresh();
}, { passive: false });

refresh();
notes();

if (new URLSearchParams(location.search).has("selftest")) {
  setTimeout(() => {
    document.title = "SELFTEST " + JSON.stringify({ crabs: crabs.length, rows: rows.map((r) => r.hp) });
  }, 600);
}
