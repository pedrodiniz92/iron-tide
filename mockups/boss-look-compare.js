import * as THREE from "./vendor/three.module.js";
import { MOBS as BASE_MOBS, GAME_COLOR, MOB_LABEL, surfMaterial, part, finishMob, bodyFromShape, SHAPES } from "./toon3d.js";
import { MOB_V2, LABEL_V2 } from "./toon3d.v2.js";

const MOBS = Object.assign({}, BASE_MOBS, MOB_V2);
const LABELS = Object.assign({}, MOB_LABEL, LABEL_V2);
const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const TARGET = 2.35;
const FIT = 1.2;

const UNITS = [
  {
    key: "scrap",
    title: "SCRAPLING",
    current: "scrap",
    suggestion: "scrap_b",
    note: "Current: the game's scrap-cart shell. Suggested: a welded junk crawler with more plates, wheels, and a visible print nozzle."
  },
  {
    key: "sentry",
    title: "SPINE SENTRY",
    current: "sentry",
    suggestion: "sentry_b",
    note: "Current: spiked armored crawler. Suggested: a mine-layer turret with a low chassis, side rollers, and a rear seed hopper."
  },
  {
    key: "skull",
    title: "SKULL CRUISER",
    current: "skull",
    suggestion: "skull_b",
    note: "Current: skull cruiser. Suggested: a sleeker command ship with a skull prow, laser spine, and side cannon pods."
  },
  {
    key: "viper",
    title: "WINGED VIPER",
    current: "viper",
    suggestion: "viper_b",
    note: "Current: winged viper. Suggested: a green serpent gunship with swept wings, venom pods, and a sharper forward beak."
  },
  {
    key: "viper",
    title: "WINGED VIPER — OPTION C",
    current: "viper",
    suggestion: "viper_c",
    note: "Suggested C: segmented serpent body with forward fangs, twin tail thrusters, and a dorsal fin."
  },
  {
    key: "viper",
    title: "WINGED VIPER — OPTION D",
    current: "viper",
    suggestion: "viper_d",
    note: "Suggested D: stealth glider with swept delta wings, flat belly, stinger tail, and side venom pods."
  },
  {
    key: "turtle",
    title: "TURTLE BULWARK",
    current: "turtle",
    suggestion: "turtle_b",
    note: "Current: turtle bulwark. Suggested: an armored drill tank with a shell ramp, front drill, and burrow plates."
  }
];

function makeRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x000000, 0);
  return renderer;
}

function fitCanvas(canvas) {
  const w = Math.max(1, Math.floor(canvas.clientWidth));
  const h = Math.max(1, Math.floor(canvas.clientHeight));
  canvas.width = w;
  canvas.height = h;
  return { w, h };
}

function sceneFor(canvas, key, hex) {
  const { w, h } = fitCanvas(canvas);
  const renderer = makeRenderer(canvas);
  renderer.setSize(w, h, false);
  const scene = new THREE.Scene();
  const cam = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, -4000, 4000);
  const builder = MOBS[key] || MOBS.scrap;
  const model = builder(RIG, hex);
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const scale = (Math.min(w, h) * 0.72 / TARGET) * FIT;
  model.scale.setScalar(scale);
  model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  scene.add(model);
  return { renderer, scene, cam, model, w, h };
}

function projectedCenter(model) {
  model.updateMatrixWorld(true);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const v = new THREE.Vector3();
  model.traverse((obj) => {
    if (!obj.isMesh) return;
    const pos = obj.geometry && obj.geometry.attributes && obj.geometry.attributes.position;
    if (!pos) return;
    for (let i = 0; i < pos.count; i += 1) {
      v.fromBufferAttribute(pos, i).applyMatrix4(obj.matrixWorld);
      if (v.x < minX) minX = v.x;
      if (v.x > maxX) maxX = v.x;
      if (v.y < minY) minY = v.y;
      if (v.y > maxY) maxY = v.y;
    }
  });
  if (!Number.isFinite(minX) || !Number.isFinite(minY)) return null;
  return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
}

function centerModel(view) {
  const center = projectedCenter(view.model);
  if (center) {
    view.model.position.x -= center.x;
    view.model.position.y -= center.y;
  }
}

function renderScene(view, time) {
  view.model.rotation.y = Math.sin(time / 900) * 0.35;
  centerModel(view);
  view.renderer.render(view.scene, view.cam);
}

function suggestionBuilder(key) {
  if (key === "sentry_b") return buildSentrySuggestion;
  if (key === "viper_b") return buildViperSuggestion;
  return MOBS[key] || MOBS.scrap;
}

function buildSentrySuggestion(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("sentry", cfg, hex, g);
  const roller = new THREE.CylinderGeometry(5.8, 5.8, 5.2, 18);
  const rollers = [];
  [-22, -8, 8, 22].forEach((x) => {
    const m = part(g, roller, "#3a3f52", cfg, x, 13, 0, 0.010);
    m.rotation.x = Math.PI / 2;
    rollers.push(m);
  });
  g.userData.legs = rollers;
  part(g, new THREE.BoxGeometry(30, 7, 12), "#3a3f52", cfg, 0, -1, 3, 0.010);
  part(g, new THREE.BoxGeometry(18, 9, 11), "#3a3f52", cfg, 0, 7, -4, 0.010);
  part(g, new THREE.ConeGeometry(4.2, 13, 14), "#e8fff0", cfg, 0, 15, -4, 0.010);
  part(g, new THREE.SphereGeometry(3.5, 18, 12), "#ffe066", cfg, 0, -1, 8, 0.008);
  part(g, new THREE.SphereGeometry(1.8, 14, 10), "#141020", cfg, 0, -1, 10.2, 0.006);
  [-16, 16].forEach((x) => part(g, new THREE.BoxGeometry(7, 4, 9), hex, cfg, x, 3, 5, 0.010));
  return finishMob(g, 2.3);
}

function buildViperSuggestion(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("viper", cfg, hex, g);
  const wing = new THREE.BoxGeometry(28, 3, 11);
  const wings = [];
  [-18, 18].forEach((x) => {
    const m = part(g, wing, hex, cfg, x, 2, -2, 0.010);
    m.rotation.z = x > 0 ? -0.28 : 0.28;
    wings.push(m);
  });
  g.userData.wings = wings;
  part(g, new THREE.ConeGeometry(5.2, 14, 16), hex, cfg, 0, 0, 22, 0.010);
  part(g, new THREE.BoxGeometry(9, 5, 18), "#245c39", cfg, 0, -3, 2, 0.010);
  [-12, 12].forEach((x) => part(g, new THREE.SphereGeometry(4.2, 18, 12), "#7dff66", cfg, x, -2, 8, 0.008));
  part(g, new THREE.SphereGeometry(3.2, 18, 12), "#ffe066", cfg, 0, 2, 14, 0.008);
  return finishMob(g, 2.35);
}

function buildViperC(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("viper", cfg, hex, g);
  const seg = new THREE.CylinderGeometry(4.5, 5.5, 7, 12);
  [-14, -7, 0, 7, 14].forEach((z, i) => {
    const m = part(g, seg, i % 2 ? "#245c39" : hex, cfg, 0, -2, z, 0.010);
    m.rotation.x = Math.PI / 2;
  });
  const fang = new THREE.ConeGeometry(2.2, 9, 10);
  [-5, 5].forEach((x) => {
    const m = part(g, fang, "#e8fff0", cfg, x, -4, 22, 0.010);
    m.rotation.x = -Math.PI / 2;
  });
  const eye = new THREE.SphereGeometry(2.8, 16, 10);
  [-6, 6].forEach((x) => part(g, eye, "#ffe066", cfg, x, 2, 18, 0.008));
  const thruster = new THREE.ConeGeometry(3.8, 10, 12);
  [-8, 8].forEach((x) => {
    const m = part(g, thruster, "#7dff66", cfg, x, -1, -20, 0.010);
    m.rotation.x = Math.PI / 2;
  });
  const fin = new THREE.BoxGeometry(3, 10, 14);
  [0].forEach((x) => part(g, fin, hex, cfg, x, 6, -14, 0.010));
  return finishMob(g, 2.35);
}

function buildViperD(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("viper", cfg, hex, g);
  const delta = new THREE.ConeGeometry(18, 28, 3);
  [-1, 1].forEach((side) => {
    const m = part(g, delta, hex, cfg, side * 14, -1, -4, 0.012);
    m.rotation.z = side * -0.55;
    m.rotation.y = side * 0.3;
    m.scale.set(1, 0.22, 1);
  });
  const belly = new THREE.BoxGeometry(22, 3, 32);
  part(g, belly, "#1a3d26", cfg, 0, -6, 0, 0.012);
  const stinger = new THREE.ConeGeometry(2.0, 16, 10);
  const st = part(g, stinger, "#7dff66", cfg, 0, -2, -22, 0.010);
  st.rotation.x = Math.PI / 2;
  const cockpit = new THREE.SphereGeometry(4.5, 20, 12);
  part(g, cockpit, "#ffe066", cfg, 0, 3, 10, 0.010, 1, 0.65, 1.4);
  const pod = new THREE.SphereGeometry(3.2, 16, 10);
  [-14, 14].forEach((x) => part(g, pod, "#7dff66", cfg, x, -3, 4, 0.008));
  return finishMob(g, 2.35);
}

MOBS.sentry_b = suggestionBuilder("sentry_b");
MOBS.viper_b = suggestionBuilder("viper_b");
MOBS.viper_c = buildViperC;
MOBS.viper_d = buildViperD;

const views = [];
const root = document.getElementById("units");

UNITS.forEach((unit) => {
  const box = document.createElement("section");
  box.className = "unit";
  box.innerHTML = `
    <h2>${unit.title}</h2>
    <div class="pair">
      <div class="cell"><h3>CURRENT</h3><canvas></canvas></div>
      <div class="cell"><h3>SUGGESTED NEW LOOK</h3><canvas></canvas></div>
    </div>
    <div class="note"><b>${unit.note}</b></div>
  `;
  root.appendChild(box);

  const canvases = box.querySelectorAll("canvas");
  const current = sceneFor(canvases[0], unit.current, GAME_COLOR[unit.key] || "#9ae6ff");
  const suggested = sceneFor(canvases[1], unit.suggestion, GAME_COLOR[unit.key] || "#9ae6ff");
  views.push(current, suggested);
});

function frame(now) {
  views.forEach((view) => renderScene(view, now));
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
