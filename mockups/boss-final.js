/* THE DROWNED ONE — Cthulhu / "captain with tentacles" final-boss mockup.
   3 looks: Abyssal Priest · Shattered Captain · Deep One Warlord.
   2-skill kit: THE CALLING (minions: zealots / idols) + SIREN BELL (frozen volley,
   mine-style capped tracking).
   Click a minion to damage it. */
import * as THREE from "./vendor/three.module.js";
import { MOBS as BASE_MOBS, GAME_COLOR, surfMaterial } from "./toon3d.js";
import { MOB_V2 } from "./toon3d.v2.js";

const MOBS = Object.assign({}, BASE_MOBS, MOB_V2);
const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };

const P = {
  void: 0x050109, abyss: 0x150a24, ink: 0x2b1740, deep: 0x4a2568,
  violet: 0x8b5cf6, magenta: 0xc026d3, bone: 0xe8e2d0, flesh: 0x6d5a8c,
  glow: 0xc9a7ff, gold: 0xffd76a, water: 0x35597f, pale: 0xbfe3ff,
};

const hex = (n) => "#" + n.toString(16).padStart(6, "0");
const toon = (color, opts = {}) => (opts.transparent
  ? new THREE.MeshLambertMaterial({ color, ...opts })
  : surfMaterial(hex(color), RIG));
const glowMat = (color, intensity = 1.6) =>
  new THREE.MeshBasicMaterial({ color, transparent: true, opacity: Math.min(1, 0.85 * intensity) });

const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist2 = (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by);

const anim = [];
const glowMats = [];

function addGlow(parent, r, x, y, z, color, intensity = 1.6) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 12), glowMat(color, intensity));
  m.position.set(x, y, z);
  parent.add(m);
  glowMats.push(m.material);
  return m;
}
function addBox(parent, w, h, d, x, y, z, mat, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  parent.add(m);
  return m;
}
function addSphere(parent, r, x, y, z, mat, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 12), mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  parent.add(m);
  return m;
}
function addCone(parent, r, h, x, y, z, mat, rx = 0, seg = 8) {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat);
  m.position.set(x, y, z);
  m.rotation.x = rx;
  parent.add(m);
  return m;
}

/* ---------- procedural tentacle (hanging, swaying) ---------- */
function tentacle(parent, { x, y, z, len = 1.2, r = 0.14, segs = 5, mat, phase = 0, sway = 0.22, curl = 0.4 }) {
  const root = new THREE.Group();
  root.position.set(x, y, z);
  parent.add(root);
  const parts = [];
  let cur = root;
  for (let i = 0; i < segs; i++) {
    const seg = new THREE.Mesh(
      new THREE.CylinderGeometry(r * (1 - i / segs * 0.8), r * (1 - (i + 1) / segs * 0.8), len / segs, 6), mat);
    seg.position.y = -len / segs / 2;
    const pivot = new THREE.Group();
    pivot.add(seg);
    pivot.position.y = i === 0 ? 0 : -len / segs;
    cur.add(pivot);
    parts.push(pivot);
    cur = pivot;
  }
  anim.push((t) => {
    parts.forEach((p, i) => {
      p.rotation.x = Math.sin(t * 2.2 + phase + i * 0.7) * sway + curl * 0.12 * i;
      p.rotation.z = Math.cos(t * 1.7 + phase + i * 0.5) * sway * 0.6;
    });
  });
  return root;
}

/* ---------- LOOK A: ABYSSAL SQUID (giant squid: mantle, fins, big eyes, 8 arms + 2 clubs) ---------- */
function buildAbyssalSquid() {
  const g = new THREE.Group();
  const ink = toon(P.ink), deep = toon(P.deep), flesh = toon(P.flesh), bone = toon(P.bone);
  addSphere(g, 0.9, 0, 0.9, 0, ink, 0.85, 1.5, 0.85);
  addCone(g, 0.55, 1.3, 0, 2.1, 0, ink, 0, 10);
  addSphere(g, 0.62, 0, -0.1, 0.1, deep, 1.1, 0.8, 1);
  for (const s of [-1, 1]) {
    addSphere(g, 0.26, s * 0.42, 0.05, 0.45, bone, 1, 1.15, 0.8);
    addSphere(g, 0.13, s * 0.42, 0.05, 0.62, glowMat(P.glow));
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 7 - 0.5) * 2.4;
    const root = tentacle(g, { x: Math.sin(a) * 0.5, y: -0.55, z: Math.cos(a) * 0.35,
      len: rnd(1.6, 2.4), r: 0.16, segs: 6, mat: flesh, phase: i * 0.8, sway: 0.2, curl: 0.35 });
    root.rotation.z = -a * 0.5;
  }
  return g;
}

/* ---------- LOOK B: SHATTERED CAPTAIN (Salazar-style split head) ---------- */
function buildShatteredCaptain() {
  const g = new THREE.Group();
  const bone = toon(P.bone), ink = toon(P.ink), water = toon(P.water);
  const f1 = addSphere(g, 0.85, 0, 1.05, 0, bone, 1, 0.85, 0.95);
  const f2 = addSphere(g, 0.4, -0.62, 0.45, 0.25, bone, 0.9, 1.1, 0.8);
  const f3 = addSphere(g, 0.36, 0.66, 0.5, 0.2, bone, 0.9, 1.1, 0.8);
  addSphere(g, 0.55, 0, -0.5, 0.4, bone, 1.05, 0.6, 0.9);
  addSphere(g, 0.13, -0.26, 0.62, 0.7, glowMat(P.pale));
  addSphere(g, 0.13, 0.26, 0.62, 0.7, glowMat(P.pale));
  for (let i = 0; i < 7; i++) {
    tentacle(g, { x: rnd(-0.55, 0.55), y: rnd(0.2, 0.9), z: rnd(0.35, 0.6),
      len: rnd(0.9, 1.4), r: 0.09, mat: water, phase: i * 1.3, sway: 0.3, curl: 0.8 });
  }
  for (let i = 0; i < 7; i++) {
    const a = (i / 6 - 0.5) * 2.4;
    const flap = addCone(g, 0.28, rnd(1.1, 1.6), Math.sin(a) * 0.75, -1.5, Math.cos(a) * 0.35, ink, Math.PI, 4);
    flap.scale.z = 0.3;
  }
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.15, 0.12, 8), ink);
  brim.position.y = 1.75;
  g.add(brim);
  addCone(g, 0.5, 0.5, 0, 2.0, 0, ink);
  anim.push((t) => {
    const b = Math.sin(t * 1.1) * 0.08;
    f1.position.y = 1.05 + b;
    f2.position.x = -0.62 - b * 0.6;
    f3.position.x = 0.66 + b * 0.6;
    f2.rotation.z = b * 0.4;
    f3.rotation.z = -b * 0.4;
  });
  addGlow(g, 0.6, 0, 0.6, -0.4, P.pale, 0.4);
  return g;
}

/* ---------- LOOK C: DEEP ONE WARLORD ---------- */
function buildDeepOneWarlord() {
  const g = new THREE.Group();
  const deep = toon(P.deep), ink = toon(P.ink), flesh = toon(P.flesh), bone = toon(P.bone);
  addSphere(g, 1.0, 0, 0.6, 0.1, deep, 0.95, 0.9, 1.3);
  addCone(g, 0.42, 0.9, 0, -0.05, 1.05, flesh, Math.PI / 2);
  addSphere(g, 0.14, -0.3, 0.35, 0.92, glowMat(P.gold));
  addSphere(g, 0.14, 0.3, 0.35, 0.92, glowMat(P.gold));
  for (let i = -1; i <= 1; i++) {
    const fin = addCone(g, 0.3, 0.85, i * 0.42, 1.35, 0, ink, 0, 4);
    fin.scale.z = 0.25;
    fin.rotation.z = i * 0.35;
  }
  for (const s of [-1, 1]) {
    for (let i = 0; i < 3; i++) addBox(g, 0.06, 0.34, 0.1, s * 0.85, 0.15 - i * 0.28, 0.15, glowMat(P.glow, 0.9));
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 7 - 0.5) * 1.3;
    tentacle(g, { x: Math.sin(a) * 0.5, y: -0.55, z: 0.75,
      len: rnd(0.9, 1.3), r: 0.11, mat: flesh, phase: i * 0.8, curl: 0.5 });
  }
  for (const s of [-1, 1]) {
    addSphere(g, 0.62, s * 1.25, -0.85, -0.15, ink, 1.1, 0.7, 1);
    for (let i = 0; i < 4; i++) {
      addSphere(g, rnd(0.08, 0.14), s * 1.25 + rnd(-0.4, 0.4), -0.6 + rnd(-0.3, 0.3), rnd(0.1, 0.5), bone);
    }
  }
  addGlow(g, 0.5, 0, 0.6, -0.5, P.violet, 0.5);
  return g;
}

const looks = [
  { name: "Abyssal Squid", build: buildAbyssalSquid, scale: 0.8 },
  { name: "Shattered Captain", build: buildShatteredCaptain },
  { name: "Deep One Warlord", build: buildDeepOneWarlord },
];

/* ---------- scene ---------- */
const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
const ARENA = { w: 12, h: 8.4 };
const camera = new THREE.OrthographicCamera(-ARENA.w / 2, ARENA.w / 2, ARENA.h / 2, -ARENA.h / 2, -100, 100);

function fitModel(model, target) {
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = target / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(s);
  model.position.set(-center.x * s, -center.y * s, -center.z * s);
  const pivot = new THREE.Group();
  pivot.add(model);
  return pivot;
}

scene.add(new THREE.AmbientLight(0x8a7fb8, 1.1));
const key = new THREE.DirectionalLight(0xc9a7ff, 2.2);
key.position.set(3, 6, 8);
scene.add(key);
const rim = new THREE.DirectionalLight(0x7c3aed, 1.6);
rim.position.set(-4, 2, -6);
scene.add(rim);

function fit() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
addEventListener("resize", fit);

let bossModel = null;
let lookIndex = 0;
function applyLook(i) {
  lookIndex = i;
  if (bossModel) {
    scene.remove(bossModel);
    anim.length = 0;
    glowMats.length = 0;
  }
  bossModel = fitModel(looks[i].build(), 2.4);
  bossModel.position.set(0, 1.6, 0);
  scene.add(bossModel);
  document.getElementById("lookName").textContent = looks[i].name;
}

/* ---------- LOOK D: DAVY JONES (barnacled captain, tentacle beard, claws) ---------- */
function buildDavyJones() {
  const g = new THREE.Group();
  const flesh = toon(0x8fae8b), ink = toon(P.ink), deep = toon(P.deep),
        bone = toon(P.bone), crab = toon(0x9a3b2e);
  addSphere(g, 1.0, 0, 0.55, 0, flesh, 0.95, 1.0, 0.95);
  addBox(g, 0.95, 0.16, 0.3, 0, 0.55, 0.82, ink);
  addSphere(g, 0.15, -0.3, 0.35, 0.85, glowMat(0xffe9a8));
  addSphere(g, 0.15, 0.3, 0.35, 0.85, glowMat(0xffe9a8));
  addCone(g, 0.12, 0.32, 0, 0.05, 0.95, flesh, Math.PI / 2);
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.35, 0.1, 3), ink);
  brim.position.y = 1.45;
  brim.rotation.y = Math.PI / 6;
  g.add(brim);
  addCone(g, 0.55, 0.6, 0, 1.75, 0, ink);
  for (let i = 0; i < 14; i++) {
    const a = (i / 13 - 0.5) * 1.7;
    tentacle(g, { x: Math.sin(a) * 0.7, y: -0.55, z: 0.5 + Math.cos(a) * 0.15,
      len: rnd(1.3, 2.0), r: 0.15, mat: deep, phase: i * 0.7, sway: 0.25, curl: 0.5 });
  }
  for (let i = 0; i < 5; i++) {
    const a = (i / 4 - 0.5) * 2.0;
    const flap = addCone(g, 0.35, 1.2, Math.sin(a) * 0.9, -0.4, -0.55, deep, Math.PI * 0.9, 4);
    flap.scale.z = 0.25;
    flap.position.z = -0.55 + Math.cos(a) * 0.1;
  }
  for (let i = 0; i < 6; i++) {
    addSphere(g, rnd(0.06, 0.12), rnd(-0.7, 0.7), rnd(-0.3, 0.6), rnd(0.6, 0.9), bone);
  }
  for (const s of [-1, 1]) {
    const arm = addCone(g, 0.18, 1.2, s * 1.5, -0.9, 0.1, ink, Math.PI, 6);
    arm.rotation.z = s * 0.6;
    addSphere(g, 0.35, s * 2.1, -1.5, 0.2, crab, 1.2, 0.8, 0.8);
    addBox(g, 0.5, 0.12, 0.2, s * 2.35, -1.35, 0.35, crab, 0, 0, s * -0.5);
  }
  addGlow(g, 0.55, 0, 0.5, -0.5, P.violet, 0.5);
  return g;
}
looks.push({ name: "Davy Jones", build: buildDavyJones });

/* ---------- arena: game look (dark + green ground line + stars) ---------- */
const ground = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-ARENA.w / 2, -ARENA.h / 2, 0),
    new THREE.Vector3(ARENA.w / 2, -ARENA.h / 2, 0),
  ]),
  new THREE.LineBasicMaterial({ color: 0x246b24 }));
scene.add(ground);
const starGeo = new THREE.BufferGeometry();
const starPos = new Float32Array(140 * 3);
for (let i = 0; i < 140; i++) {
  starPos[i * 3] = rnd(-ARENA.w / 2, ARENA.w / 2);
  starPos[i * 3 + 1] = rnd(-ARENA.h / 2, ARENA.h / 2);
  starPos[i * 3 + 2] = -3;
}
starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x9ae6ff, size: 0.05, transparent: true, opacity: 0.6 })));

/* ---------- player: the game's gunship (design A) ---------- */
const player = { x: 0, y: -3.2, r: 0.35, hp: 5, maxHp: 5, inv: 0, fire: 0, shieldHits: 2, keys: {} };
const ship = fitModel(MOBS.player(RIG, GAME_COLOR.player), 0.85);
scene.add(ship);
const shieldRing = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.035, 8, 40), glowMat(0x62ffa1, 1.2));
scene.add(shieldRing);

/* ---------- barriers: the game's 4 green cell bunkers ---------- */
const barriers = [];
(function buildBarriers() {
  const cellW = 0.17, cellH = 0.11, gap = 0.02;
  for (const bx of [-4.2, -1.4, 1.4, 4.2]) {
    const cells = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 6; col++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(cellW, cellH, 0.3),
          new THREE.MeshBasicMaterial({ color: 0x286b28, transparent: true }));
        const cx = bx + col * (cellW + gap) - (6 * (cellW + gap)) / 2 + cellW / 2;
        const cy = -2.15 + row * (cellH + gap);
        m.position.set(cx, cy, 0);
        scene.add(m);
        cells.push({ x: cx, y: cy, w: cellW, h: cellH, hp: 3, m });
      }
    }
    barriers.push({ cells });
  }
})();
function damageCell(c, dmg) {
  c.hp -= dmg;
  const frac = Math.max(0, c.hp / 3);
  c.m.material.color.setHex(frac > 0.66 ? 0x286b28 : frac > 0.33 ? 0x1d7a2a : 0x175017);
  c.m.material.opacity = 0.35 + 0.65 * frac;
  if (c.hp <= 0) {
    scene.remove(c.m);
    burst(c.x, c.y, 0x286b28, 6, 2);
    const b = barriers.find((it) => it.cells.includes(c));
    b.cells.splice(b.cells.indexOf(c), 1);
  }
}
function hitBarrier(x, y, dmg) {
  for (const b of barriers) {
    for (const c of b.cells) {
      if (Math.abs(x - c.x) < c.w / 2 + 0.06 && Math.abs(y - c.y) < c.h / 2 + 0.06) {
        damageCell(c, dmg);
        return true;
      }
    }
  }
  return false;
}

addEventListener("keydown", (e) => {
  player.keys[e.key] = true;
  if (e.key === " ") e.preventDefault();
});
addEventListener("keyup", (e) => { player.keys[e.key] = false; });

/* ---------- bullets ---------- */
const bullets = [];
function addBullet(x, y, vx, vy, r, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 10), glowMat(color));
  m.position.set(x, y, 0);
  scene.add(m);
  const b = { x, y, vx, vy, r, m, color, life: opts.life ?? 8, frozen: false, homing: opts.homing ?? 0, seek: 0, hp: opts.hp ?? 0 };
  bullets.push(b);
  return b;
}
function killBullet(b) { scene.remove(b.m); bullets.splice(bullets.indexOf(b), 1); }

const shots = [];
function addShot(x, y, vx, vy) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.34, 6), glowMat(P.pale));
  m.position.set(x, y, 0);
  scene.add(m);
  shots.push({ x, y, vx, vy, m });
}
function killShot(s) { scene.remove(s.m); shots.splice(shots.indexOf(s), 1); }

/* ---------- particles + floaters ---------- */
const parts = [];
function burst(x, y, color, n = 12, spd = 3) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = rnd(0.3, 1) * spd;
    const m = new THREE.Mesh(new THREE.SphereGeometry(rnd(0.04, 0.1), 6, 6), glowMat(color));
    m.position.set(x, y, 0);
    scene.add(m);
    parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, m, life: rnd(0.3, 0.7) });
  }
}
const floaters = [];
function say(x, y, text, color = "#c9a7ff") {
  const div = document.createElement("div");
  div.className = "floater";
  div.textContent = text;
  div.style.color = color;
  document.getElementById("fx").appendChild(div);
  floaters.push({ el: div, x, y, life: 1.2 });
}
function toScreen(x, y) {
  return { sx: (x / ARENA.w + 0.5) * 100, sy: (0.5 - y / ARENA.h) * 100 };
}

/* ---------- minions ---------- */
const minions = [];
let callingVariant = "b";
function spawnMinion(type, x, y) {
  const g = new THREE.Group();
  let hp = 1, r = 0.4, extra = null;
  if (type === "zealot") {
    addSphere(g, 0.3, 0, 0, 0, toon(P.ink));
    addSphere(g, 0.14, 0, 0, 0.25, glowMat(P.magenta));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.04, 6, 20), glowMat(P.gold, 1.2));
    ring.rotation.x = Math.PI / 2.4;
    g.add(ring);
    hp = 4; r = 0.5;
  } else if (type === "idol") {
    addSphere(g, 0.45, 0, 0.25, 0, toon(P.ink), 1, 0.95, 1);
    addCone(g, 0.3, 0.75, 0, 0.9, 0, toon(P.ink), 0, 8);
    addSphere(g, 0.15, -0.17, 0.32, 0.34, toon(P.bone), 1, 1.15, 0.8);
    addSphere(g, 0.15, 0.17, 0.32, 0.34, toon(P.bone), 1, 1.15, 0.8);
    addSphere(g, 0.06, -0.17, 0.32, 0.44, glowMat(P.gold));
    addSphere(g, 0.06, 0.17, 0.32, 0.44, glowMat(P.gold));
    for (let i = 0; i < 6; i++) {
      const a = (i / 5 - 0.5) * 2.2;
      tentacle(g, { x: Math.sin(a) * 0.3, y: -0.08, z: Math.cos(a) * 0.2,
        len: 0.8, r: 0.07, segs: 4, mat: toon(P.flesh), phase: i, curl: 0.4 });
    }
    hp = 3; r = 0.6;
    g.scale.setScalar(0.7);
    const aura = new THREE.Mesh(new THREE.RingGeometry(1.95, 2.1, 48), glowMat(P.gold, 0.8));
    g.add(aura);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(2.0, 48), new THREE.MeshBasicMaterial({ color: P.gold, transparent: true, opacity: 0.08 }));
    g.add(disc);
    extra = { aura };
  }
  g.position.set(x, y, 0);
  scene.add(g);
  const mn = { type, x, y, bx: x, by: y, hp, maxHp: hp, r, g, t: 0, fire: rnd(1, 2), latched: false, phase: Math.random() * 6, beam: null, dive: rnd(1, 2), diving: false, bites: 3, aura: extra && extra.aura };
  if (type === "zealot" || type === "idol") {
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.09), new THREE.MeshBasicMaterial({ color: 0x110820 }));
    const fill = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.07), new THREE.MeshBasicMaterial({ color: 0x62ffa1 }));
    scene.add(bg);
    scene.add(fill);
    mn.bar = { bg, fill, y: r + 0.45 };
  }
  minions.push(mn);
  say(x, y, type.toUpperCase(), type === "idol" ? "#ffd76a" : "#c9a7ff");
  return mn;
}
function killMinion(mn) {
  burst(mn.x, mn.y, mn.type === "idol" ? P.gold : P.violet, 16, 3.4);
  if (mn.type === "zealot") {
    const a0 = -Math.PI / 2;
    for (let i = 0; i < 3; i++) {
      const a = a0 + (i - 1) * 0.22;
      addBullet(mn.x, mn.y, Math.cos(a) * 2.2, Math.sin(a) * 2.2, 0.12, P.magenta, { life: 3, hp: 1 });
    }
    say(mn.x, mn.y, "DEATH HEX", "#c026d3");
  }
  if (mn.beam) scene.remove(mn.beam);
  if (mn.bar) { scene.remove(mn.bar.bg); scene.remove(mn.bar.fill); }
  dropPowerup(mn.x, mn.y);
  scene.remove(mn.g);
  minions.splice(minions.indexOf(mn), 1);
}
/* ---------- weakened powerup drops from killed minions ---------- */
const PU = {
  rapid:  { color: 0xff5c8a },
  double: { color: 0x42d3e6 },
  shield: { color: 0x62ffa1 },
  bomb:   { color: 0xffd76a },
  laser:  { color: 0xff3366 },
  slow:   { color: 0x9ae6ff },
};
const weak = { rapid: 0, double: 0, laser: 0, slow: 0, shieldTtl: 0 };
const drops = [];
function dropPowerup(x, y) {
  const type = pick(Object.keys(PU));
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.26, 0.12), toon(PU[type].color));
  m.position.set(x, y, 0.2);
  scene.add(m);
  drops.push({ type, x, y, m, ttl: 8 });
  say(x, y, "WEAK " + type.toUpperCase(), "#ffd76a");
}
function applyWeak(type) {
  if (type === "bomb") {
    for (const bl of [...bullets]) killBullet(bl);
    say(player.x, player.y + 0.8, "BOMB: CLEARED", "#ffd76a");
    return;
  }
  if (type === "shield") {
    player.shieldHits += 1;
    weak.shieldTtl = 10;
    say(player.x, player.y + 0.8, "SHIELD 10s", "#62ffa1");
    return;
  }
  weak[type] = Math.max(weak[type], 10);
  say(player.x, player.y + 0.8, type.toUpperCase() + " 10s", "#ffd76a");
}
function updateDrops(dt) {
  for (const key of ["rapid", "double", "laser", "slow"]) weak[key] = Math.max(0, weak[key] - dt);
  if (weak.shieldTtl > 0) {
    weak.shieldTtl -= dt;
    if (weak.shieldTtl <= 0) player.shieldHits = 0;
  }
  for (const d of [...drops]) {
    d.y -= 1.3 * dt;
    d.ttl -= dt;
    if (d.y < -ARENA.h / 2 + 0.3) d.y = -ARENA.h / 2 + 0.3;
    d.m.position.set(d.x, d.y, 0.2);
    d.m.rotation.y += dt * 2;
    if (dist2(d.x, d.y, player.x, player.y) < 0.55) {
      applyWeak(d.type);
      burst(d.x, d.y, PU[d.type].color, 8, 2);
      scene.remove(d.m);
      drops.splice(drops.indexOf(d), 1);
    } else if (d.ttl <= 0) {
      scene.remove(d.m);
      drops.splice(drops.indexOf(d), 1);
    }
  }
}

canvas.addEventListener("pointerdown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = ((e.clientX - rect.left) / rect.width - 0.5) * ARENA.w;
  const my = -((e.clientY - rect.top) / rect.height - 0.5) * ARENA.h;
  for (const mn of [...minions]) {
    if (dist2(mx, my, mn.x, mn.y) < mn.r + 0.5) {
      mn.hp -= 1;
      burst(mn.x, mn.y, P.bone, 5, 2);
      if (mn.hp <= 0) killMinion(mn);
      return;
    }
  }
});

/* ---------- boss + effects state ---------- */
const boss = { x: 0, y: 1.6, r: 1.6, hp: 100, maxHp: 100, t: 0, shot: 1.2, castTimer: 4, skill: null, regen: 0 };
const effects = { bell: null };
let castName = "", castTotal = 0, castTime = 0;

const ambient = scene.children.find((c) => c.isAmbientLight);

function hurtPlayer(n = 1) {
  if (player.inv > 0) return;
  if (player.shieldHits > 0) {
    player.shieldHits -= 1;
    player.inv = 0.6;
    burst(player.x, player.y, 0x62ffa1, 12, 3);
    say(player.x, player.y + 0.6, player.shieldHits > 0 ? "SHIELD ABSORBED HIT x" + player.shieldHits : "SHIELD GONE", "#62ffa1");
    return;
  }
  player.hp -= n;
  player.inv = 1.2;
  burst(player.x, player.y, P.magenta, 10, 3);
  if (player.hp <= 0) {
    player.hp = player.maxHp;
    player.x = 0;
    player.y = -3.2;
    say(0, 0, "PLAYER RESET", "#8fff8f");
  }
}
function fireHex(n, opts = {}) {
  const a0 = Math.atan2(player.y - boss.y, player.x - boss.x);
  for (let i = 0; i < n; i++) {
    const a = a0 + (i - (n - 1) / 2) * (opts.spread ?? 0.22);
    const s = opts.speed ?? 2.4;
    addBullet(boss.x, boss.y - 0.8, Math.cos(a) * s, Math.sin(a) * s, opts.r ?? 0.14, opts.color ?? P.violet, { life: opts.life ?? 8 });
  }
}
function beamMesh(color) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 6), glowMat(color, 1.2));
  scene.add(m);
  return m;
}
function aimBeam(m, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy);
  m.scale.y = L;
  m.position.set((ax + bx) / 2, (ay + by) / 2, -0.3);
  m.rotation.z = Math.atan2(dy, dx) - Math.PI / 2;
}

/* ---------- THE CALLING (minions) ---------- */
let callWindup = 0;
function castCalling() {
  callWindup = 2.5;
  say(boss.x, boss.y - 1.6, "THE CALLING", "#c9a7ff");
}
function doCallingSpawn() {
  const type = callingVariant === "b" ? "zealot" : "idol";
  if (type === "idol") {
    if (minions.some((m) => m.type === "idol")) { say(boss.x, boss.y - 1.6, "THE IDOL ENDURES", "#ffd76a"); return; }
    spawnMinion(type, rnd(-ARENA.w / 2 + 2.2, ARENA.w / 2 - 2.2), rnd(-1.2, 2.2));
  } else {
    const alive = minions.filter((m) => m.type === "zealot").length;
    for (let i = 0; i < 2 && alive + i < 3; i++) spawnMinion(type, boss.x + (i === 0 ? -1 : 1) * 0.5, boss.y);
  }
}
function updateCalling() { if (callWindup <= 0) boss.skill = null; }

function updateMinions(dt) {
  for (const mn of [...minions]) {
    mn.t += dt;
    if (mn.bar) {
      const frac = clamp(mn.hp / mn.maxHp, 0, 1);
      mn.bar.bg.position.set(mn.x, mn.y + mn.bar.y, 0.5);
      mn.bar.fill.scale.x = Math.max(0.001, frac);
      mn.bar.fill.position.set(mn.x - (1 - frac) * 0.3, mn.y + mn.bar.y, 0.51);
      mn.bar.fill.material.color.setHex(frac > 0.6 ? 0x62ffa1 : frac > 0.3 ? 0xffd76a : 0xff5a5a);
    }
    if (mn.type === "zealot") {
      if (mn.t < 1.6) {
        mn.x += Math.sign(mn.x - boss.x) * 2.4 * dt;
        mn.y += (boss.y - 0.9 - mn.y) * dt * 2.2;
      } else {
        mn.x += Math.cos(mn.t * 1.1 + mn.phase) * 1.4 * dt;
        mn.y += Math.sin(mn.t * 1.9 + mn.phase) * 0.9 * dt;
      }
      mn.g.position.set(mn.x, mn.y, 0);
      mn.g.rotation.y += dt * 1.2;
      mn.fire -= dt;
      if (mn.fire <= 0) {
        mn.fire = rnd(1.5, 2.5);
        const a = Math.atan2(player.y - mn.y, player.x - mn.x);
        addBullet(mn.x, mn.y, Math.cos(a) * 1.6, Math.sin(a) * 1.6, 0.16, P.magenta, { life: 6, hp: 1 });
      }
    } else if (mn.type === "idol") {
      mn.x = clamp(mn.bx + Math.sin(mn.t * 0.6 + mn.phase) * 2.2, -ARENA.w / 2 + 2.2, ARENA.w / 2 - 2.2);
      mn.y = clamp(mn.by + Math.sin(mn.t * 0.42 + mn.phase * 1.7) * 1.2, -1.2, 2.2);
      mn.g.position.set(mn.x, mn.y, 0);
      if (mn.aura) mn.aura.rotation.z += dt * 0.5;
      for (const o of minions) {
        if (o !== mn && dist2(o.x, o.y, mn.x, mn.y) < 2.0) o.hp = Math.min(o.maxHp, o.hp + dt * 0.5);
      }
      if (dist2(boss.x, boss.y, mn.x, mn.y) < 2.0) boss.hp = Math.min(boss.maxHp, boss.hp + dt * 0.5);
    }
  }
  for (let i = 0; i < minions.length; i++) {
    const a = minions[i];
    for (let j = i + 1; j < minions.length; j++) {
      const b = minions[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 1;
      const minD = a.r + b.r + 0.15;
      if (d < minD) {
        const p = (minD - d) / 2;
        const nx = dx / d, ny = dy / d;
        if (a.type === "idol") { a.bx -= nx * p; a.by -= ny * p; } else { a.x -= nx * p; a.y -= ny * p; }
        if (b.type === "idol") { b.bx += nx * p; b.by += ny * p; } else { b.x += nx * p; b.y += ny * p; }
      }
    }
    const dx = a.x - boss.x, dy = a.y - boss.y;
    const d = Math.hypot(dx, dy) || 1;
    const minD = boss.r + a.r + 0.1;
    if (d < minD) {
      const p = minD - d;
      if (a.type === "idol") { a.bx += (dx / d) * p; a.by += (dy / d) * p; }
      else { a.x += (dx / d) * p; a.y += (dy / d) * p; }
    }
  }
  boss.regen = 0;
}

/* ---------- SIREN BELL (freeze, then mine-style capped tracking) ---------- */
function castBell() {
  effects.bell = { t: 0, phase: 0 };
  say(boss.x, boss.y, "THE BELL TOLLS", "#ffd76a");
}
function updateBell(dt) {
  const b = effects.bell;
  if (!b) { boss.skill = null; return; }
  b.t += dt;
  if (b.phase === 0) {
    for (const bl of bullets) {
      bl.frozen = true;
      bl.m.material.color.setHex(P.bone);
    }
    if (b.t > 1.6) {
      b.phase = 1;
      const volley = bullets.slice(0, 8);
      for (const bl of bullets) {
        bl.frozen = false;
        if (volley.indexOf(bl) < 0) continue;
        const a = Math.atan2(player.y - bl.y, player.x - bl.x);
        bl.vx = Math.cos(a) * 3.4;
        bl.vy = Math.sin(a) * 3.4;
        bl.seek = 1.2;
        bl.seekA0 = Math.atan2(bl.vy, bl.vx);
        bl.homing = 0;
        bl.hp = 1;
        bl.life = Math.min(bl.life, 4.5);
        bl.m.material.color.setHex(P.magenta);
      }
    }
  } else if (b.t > 4.5) {
    effects.bell = null;
    boss.skill = null;
  }
}

const kit = {
  calling: { name: "THE CALLING", icon: "⁂", cd: 10, cast: castCalling, update: updateCalling },
  bell: { name: "SIREN BELL", icon: "♒", cd: 13, cast: castBell, update: updateBell },
};
const skillKeys = Object.keys(kit);
let forced = null;

function castSkill(key) {
  if (boss.skill) return;
  const s = kit[key];
  boss.skill = key;
  castName = s.name;
  castTotal = key === "calling" ? 2.5 : 0.9;
  castTime = castTotal;
  document.getElementById("castName").textContent = s.name;
  setTimeout(() => { document.getElementById("castName").textContent = ""; }, 1600);
  s.cast();
}

/* ---------- updates ---------- */
function updatePlayer(dt) {
  player.inv = Math.max(0, player.inv - dt);
  const sp = 5.2;
  const k = player.keys;
  let dx = 0;
  if (k.ArrowLeft || k.a) dx -= 1;
  if (k.ArrowRight || k.d) dx += 1;
  player.x += dx * sp * dt;
  player.x = clamp(player.x, -ARENA.w / 2 + player.r, ARENA.w / 2 - player.r);
  player.y = -3.2;
  ship.position.set(player.x, player.y, 0);
  ship.visible = player.inv <= 0 || Math.floor(performance.now() / 90) % 2 === 0;
  shieldRing.position.set(player.x, player.y, 0.1);
  shieldRing.visible = player.shieldHits > 0;
  player.fire -= dt;
  if ((k[" "] || k.j) && player.fire <= 0) {
    player.fire = weak.rapid > 0 ? 0.09 : 0.18;
    addShot(player.x, player.y + 0.4, 0, 9);
    if (weak.double > 0) {
      addShot(player.x - 0.25, player.y + 0.3, 0, 9);
      addShot(player.x + 0.25, player.y + 0.3, 0, 9);
    }
  }
}
function updateBullets(dt) {
  for (const bl of [...bullets]) {
    if (bl.frozen) continue;
    if (bl.homing > 0) {
      const a = Math.atan2(player.y - bl.y, player.x - bl.x);
      const sp = Math.hypot(bl.vx, bl.vy);
      const ca = Math.atan2(bl.vy, bl.vx);
      let da = a - ca;
      while (da > Math.PI) da -= Math.PI * 2;
      while (da < -Math.PI) da += Math.PI * 2;
      const na = ca + clamp(da, -bl.homing * dt, bl.homing * dt);
      bl.vx = Math.cos(na) * sp;
      bl.vy = Math.sin(na) * sp;
    }
    bl.x += bl.vx * dt * (weak.slow > 0 ? 0.55 : 1);
    if (bl.seek > 0) {
      bl.seek -= dt;
      const sp = Math.hypot(bl.vx, bl.vy) || 3.4;
      const ta = Math.atan2(player.y - bl.y, player.x - bl.x);
      const ca = Math.atan2(bl.vy, bl.vx);
      let da = ta - ca;
      while (da > Math.PI) da -= Math.PI * 2;
      while (da < -Math.PI) da += Math.PI * 2;
      let na = ca + clamp(da, -2.6 * dt, 2.6 * dt);
      if (bl.seekA0 !== undefined) {
        let off = na - bl.seekA0;
        while (off > Math.PI) off -= Math.PI * 2;
        while (off < -Math.PI) off += Math.PI * 2;
        na = bl.seekA0 + clamp(off, -1.05, 1.05);
      }
      bl.vx = Math.cos(na) * sp;
      bl.vy = Math.sin(na) * sp;
    }
    bl.y += bl.vy * dt * (weak.slow > 0 ? 0.55 : 1);
    bl.m.position.set(bl.x, bl.y, 0);
    bl.life -= dt;
    if (bl.life <= 0 || Math.abs(bl.x) > ARENA.w / 2 + 0.5 || Math.abs(bl.y) > ARENA.h / 2 + 0.5) {
      if (bl.hp > 0 && bl.life <= 0) burst(bl.x, bl.y, P.magenta, 4, 2);
      killBullet(bl);
    }
    else if (hitBarrier(bl.x, bl.y, 1)) killBullet(bl);
    else if (dist2(bl.x, bl.y, player.x, player.y) < bl.r + player.r) {
      killBullet(bl);
      hurtPlayer();
    }
  }
}
function updateShots(dt) {
  for (const s of [...shots]) {
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    s.m.position.set(s.x, s.y, 0);
    if (s.y > ARENA.h / 2) { killShot(s); continue; }
    let hit = hitBarrier(s.x, s.y, 1);
    if (!hit) for (const bl of bullets) {
      if (bl.hp > 0 && dist2(s.x, s.y, bl.x, bl.y) < bl.r + 0.15) {
        bl.hp -= 1;
        burst(bl.x, bl.y, P.magenta, 5, 2);
        if (bl.hp <= 0) killBullet(bl);
        hit = true;
        break;
      }
    }
    if (!hit) for (const mn of minions) {
      if (dist2(s.x, s.y, mn.x, mn.y) < mn.r + 0.15) {
        mn.hp -= weak.laser > 0 ? 2 : 1;
        burst(s.x, s.y, P.bone, 4, 2);
        if (mn.hp <= 0) killMinion(mn);
        hit = true;
        break;
      }
    }
    if (!hit && dist2(s.x, s.y, boss.x, boss.y) < boss.r) {
      boss.hp -= weak.laser > 0 ? 2 : 1;
      burst(s.x, s.y, P.glow, 4, 2);
      if (boss.hp <= 0) {
        say(boss.x, boss.y, "THE DROWNED ONE FALLS", "#8fff8f");
        burst(boss.x, boss.y, P.violet, 40, 5);
        boss.hp = boss.maxHp;
      }
      hit = true;
    }
    if (hit) killShot(s);
  }
}
function updateParts(dt) {
  for (const p of [...parts]) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= dt;
    p.m.position.set(p.x, p.y, 0);
    p.m.material.opacity = clamp(p.life * 2, 0, 1);
    if (p.life <= 0) { scene.remove(p.m); parts.splice(parts.indexOf(p), 1); }
  }
}
function updateFloaters(dt) {
  for (const f of [...floaters]) {
    f.life -= dt;
    f.y += dt * 0.8;
    const { sx, sy } = toScreen(f.x, f.y);
    f.el.style.left = sx + "%";
    f.el.style.top = sy + "%";
    f.el.style.opacity = clamp(f.life, 0, 1);
    if (f.life <= 0) { f.el.remove(); floaters.splice(floaters.indexOf(f), 1); }
  }
}
function updateBoss(dt) {
  boss.t += dt;
  if (callWindup > 0) {
    callWindup -= dt;
    if (callWindup <= 0) doCallingSpawn();
  }
  const wslow = callWindup > 0 ? 0.45 : 1;
  const idol = minions.find((m) => m.type === "idol");
  const side = Math.sin(boss.t * 0.45) >= 0 ? 1 : -1;
  const tx = idol ? idol.x + side * (2.6 + Math.sin(boss.t * 1.7) * 0.5) : Math.sin(boss.t * 0.35) * 3.2;
  const ty = idol ? Math.min(idol.y + 1.5 + Math.sin(boss.t * 0.7) * 0.6, ARENA.h / 2 - 1.4) : 1.6 + Math.sin(boss.t * 0.8) * 0.35;
  boss.x += (tx - boss.x) * dt * (idol ? 1.6 : 0.8) * wslow;
  boss.y += (ty - boss.y) * dt * (idol ? 1.6 : 0.8) * wslow;
  if (idol && boss.y < idol.y + 0.9) boss.y = idol.y + 0.9;
  bossModel.position.set(boss.x, boss.y, 0);
  boss.shot -= dt;
  if (boss.shot <= 0 && (!boss.skill || callWindup > 0)) {
    boss.shot = callWindup > 0 ? 3.1 : 1.4;
    fireHex(3);
  }
  if (!boss.skill) {
    boss.castTimer -= dt;
    if (boss.castTimer <= 0) {
      const key = forced || (Math.random() < 0.65 ? "calling" : "bell");
      forced = null;
      castSkill(key);
      boss.castTimer = key === "calling" && callingVariant === "c" ? 13 : kit[key].cd;
    }
  } else if (castTime > 0) {
    castTime -= dt;
  } else {
    kit[boss.skill].update(dt);
  }
}
function updateHud() {
  document.getElementById("bossFill").style.width = (boss.hp / boss.maxHp * 100) + "%";
  document.getElementById("hpFill").style.width = (player.hp / player.maxHp * 100) + "%";
  document.getElementById("castFill").style.width = (castTime > 0 ? (1 - castTime / castTotal) * 100 : 100) + "%";
  document.getElementById("skillNow").textContent = boss.skill ? kit[boss.skill].name : "—";
  document.getElementById("skillCd").textContent = boss.skill ? "casting" : "next in " + Math.max(0, boss.castTimer).toFixed(0) + "s";
}

/* ---------- UI wiring ---------- */
const skillsEl = document.getElementById("skills");
for (const key of skillKeys) {
  const b = document.createElement("button");
  b.className = "skill";
  b.innerHTML = `<b>${kit[key].icon} ${kit[key].name}</b><span>${kit[key].cd}s cd</span>`;
  b.onclick = () => { forced = key; boss.castTimer = Math.min(boss.castTimer, 0.3); };
  skillsEl.appendChild(b);
}
const looksEl = document.getElementById("looks");
looks.forEach((l, i) => {
  const b = document.createElement("button");
  b.textContent = l.name;
  b.className = i === 0 ? "on" : "";
  b.onclick = () => {
    applyLook(i);
    [...looksEl.children].forEach((c) => c.classList.remove("on"));
    b.classList.add("on");
  };
  looksEl.appendChild(b);
});
const variantsEl = document.getElementById("variants");
for (const [v, label] of [["b", "b · Zealots (6 HP, spawn at boss, spread out)"], ["c", "c · Idol (3 HP, one at a time, squid-themed, heal-all aura)"]]) {
  const b = document.createElement("button");
  b.textContent = label;
  b.className = v === "b" ? "on" : "";
  b.onclick = () => {
    callingVariant = v;
    [...variantsEl.children].forEach((c) => c.classList.remove("on"));
    b.classList.add("on");
  };
  variantsEl.appendChild(b);
}

/* ---------- loop ---------- */
let last = 0;
function loop(ts) {
  const dt = Math.min(0.05, (ts - last) / 1000 || 0.016);
  last = ts;
  const t = ts / 1000;
  anim.forEach((f) => f(t));
  glowMats.forEach((m) => { m.opacity = 0.55 + 0.35 * Math.sin(t * 3); });
  updateBoss(dt);
  updateMinions(dt);
  updateDrops(dt);
  updatePlayer(dt);
  updateBullets(dt);
  updateShots(dt);
  updateParts(dt);
  updateFloaters(dt);
  updateHud();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
fit();
applyLook(0);
requestAnimationFrame(loop);

window.__bossFinal = {
  dbg: () => ({
    canvasAttr: [canvas.width, canvas.height],
    canvasCss: [canvas.clientWidth, canvas.clientHeight],
    children: scene.children.length,
    bossPos: bossModel ? bossModel.position.toArray() : null,
    bossKids: bossModel ? bossModel.children.length : 0,
    cam: camera.position.toArray(),
    camOrtho: [camera.left, camera.right, camera.top, camera.bottom],
    renderCalls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    ctxLost: renderer.getContext().isContextLost(),
  }),
  state: () => ({
    look: looks[lookIndex].name,
    skill: boss.skill,
    minions: minions.map((m) => m.type + ":" + m.hp),
    bullets: bullets.length,
    hp: Math.round(boss.hp),
    shieldHits: player.shieldHits,
    drops: drops.map((d) => d.type),
    weak: Object.fromEntries(Object.entries(weak).map(([k2, v]) => [k2, Math.round(v)])),
    barrierCells: barriers.reduce((n, b) => n + b.cells.length, 0),
    effects: Object.fromEntries(Object.entries(effects).map(([k2, v]) => [k2, typeof v === "number" ? Math.round(v * 10) / 10 : !!v])),
  }),
  cast: castSkill,
  setLook: applyLook,
  setVariant: (v) => { callingVariant = v; },
  kit: skillKeys,
  looks: looks.map((l) => l.name),
};
