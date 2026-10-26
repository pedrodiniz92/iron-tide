import * as THREE from "./vendor/three.module.js";
import { MOB_V2 } from "./toon3d.v2.js";

const DROP_TTL = 6;
const WARN = 1.8;
const BLACK = new THREE.Color("#000000");
const CFG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const BASE_SCALE = (30 / 2.35) * 1.35;

const POWERUPS = [
  { key: "drop_rapid", label: "RAPID FIRE", color: "#ff6655" },
  { key: "drop_double", label: "DOUBLE SHOT", color: "#ffb04c" },
  { key: "drop_laser", label: "LASER", color: "#6fdcff" },
  { key: "drop_shield", label: "SHIELD", color: "#62ffa1" },
  { key: "drop_slow", label: "TIME WARP", color: "#bf9cff" },
  { key: "drop_bomb", label: "BOMB", color: "#ffe66a" },
  { key: "drop_loot", label: "LOOT CRATE", color: "#ffd166" }
];

function makeBlack(uniforms) {
  ["uLit", "uMid", "uShadow", "uDeep", "uRim", "uBack"].forEach((name) => {
    if (uniforms[name]) uniforms[name].value.copy(BLACK);
  });
  if (uniforms.uAlpha) uniforms.uAlpha.value = 1;
}

function makeAssetOpaqueBlack(model) {
  model.traverse((obj) => {
    if (!obj.isMesh || !obj.material.uniforms) return;
    const uniforms = obj.material.uniforms;
    if (uniforms.uColor && uniforms.uThick) {
      uniforms.uColor.value.copy(BLACK);
      uniforms.uAlpha.value = 1;
      obj.material.transparent = false;
      return;
    }
    if (uniforms.uMid) {
      const c = uniforms.uMid.value;
      const lum = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
      if (lum < 0.18) {
        makeBlack(uniforms);
        obj.material.transparent = false;
      }
    }
  });
}

function collectParts(model) {
  const allMeshes = [];
  const solidMeshes = [];
  model.traverse((obj) => {
    if (!obj.isMesh) return;
    allMeshes.push(obj);
    if (obj.material.isMeshBasicMaterial && obj.material.color.getHex() === 0x62ffa1) {
      obj.material.depthTest = false;
      obj.material.depthWrite = false;
      obj.material.transparent = false;
      solidMeshes.push(obj);
    }
  });
  const nonSolidMeshes = allMeshes.filter((obj) => solidMeshes.indexOf(obj) < 0);
  return { allMeshes, solidMeshes, nonSolidMeshes };
}

function buildCard(option, index) {
  const card = document.createElement("div");
  card.className = "card";

  const canvas = document.createElement("canvas");
  canvas.width = 180;
  canvas.height = 120;

  const overlay = document.createElement("canvas");
  overlay.className = "overlay";
  overlay.width = canvas.width;
  overlay.height = canvas.height;

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = option.label;

  card.append(canvas, overlay, name);
  document.getElementById("grid").appendChild(card);

  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(dpr);
  renderer.setSize(canvas.width, canvas.height, false);
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, canvas.width, 0, -canvas.height, -4000, 4000);
  const model = MOB_V2[option.key](CFG, option.color);
  model.scale.setScalar(BASE_SCALE);
  model.position.set(canvas.width / 2, -canvas.height / 2, 0);
  scene.add(model);
  makeAssetOpaqueBlack(model);

  const target = new THREE.WebGLRenderTarget(canvas.width * dpr, canvas.height * dpr, {
    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: true,
    stencilBuffer: false
  });
  target.texture.colorSpace = THREE.SRGBColorSpace;

  const compositeScene = new THREE.Scene();
  const compositeCamera = new THREE.OrthographicCamera(0, canvas.width, 0, -canvas.height, -4000, 4000);
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: target.texture,
      transparent: true,
      depthTest: false,
      depthWrite: false
    })
  );
  plane.scale.set(canvas.width, canvas.height, 1);
  plane.position.set(canvas.width / 2, -canvas.height / 2, 0);
  compositeScene.add(plane);

  const parts = collectParts(model);

  Object.assign(option, {
    canvas,
    overlayCtx: overlay.getContext("2d"),
    renderer,
    scene,
    camera,
    model,
    target,
    compositeScene,
    compositeCamera,
    plane,
    allMeshes: parts.allMeshes,
    solidMeshes: parts.solidMeshes,
    nonSolidMeshes: parts.nonSolidMeshes,
    phase: index * 0.7,
    alphaCur: 1
  });
}

function renderCard(option, alpha) {
  option.nonSolidMeshes.forEach((mesh) => {
    mesh.visible = true;
  });
  option.solidMeshes.forEach((mesh) => {
    mesh.visible = false;
  });

  option.renderer.setRenderTarget(option.target);
  option.renderer.setClearColor(0x000000, 0);
  option.renderer.clear();
  option.renderer.render(option.scene, option.camera);

  option.renderer.setRenderTarget(null);
  option.renderer.setClearColor(0x000000, 0);
  option.renderer.clear();
  option.plane.material.opacity = alpha;
  option.renderer.render(option.compositeScene, option.compositeCamera);

  option.nonSolidMeshes.forEach((mesh) => {
    mesh.visible = false;
  });
  option.solidMeshes.forEach((mesh) => {
    mesh.visible = true;
  });
  option.renderer.render(option.scene, option.camera);
}

function applyOption(option, t, progress, now) {
  const target = progress < WARN ? 1 : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(now / 240));
  option.alphaCur += (target - option.alphaCur) * 0.25;
  if (Math.abs(target - option.alphaCur) <= 0.004) option.alphaCur = target;

  const sway = Math.sin(now / 1100 + option.phase) * 0.34;
  option.model.rotation.y = sway;
  renderCard(option, option.alphaCur);
}

function drawOverlay(option, progress) {
  const g = option.overlayCtx;
  g.clearRect(0, 0, option.canvas.width, option.canvas.height);
  g.fillStyle = "#6a8fa5";
  g.font = "10px 'Courier New', monospace";
  g.fillText(`TTL ${Math.max(0, DROP_TTL - progress).toFixed(1)}s`, 8, 14);
}

function frame(now) {
  const t = now / 1000;
  const progress = t % DROP_TTL;
  POWERUPS.forEach((option) => {
    applyOption(option, t, progress, now);
    drawOverlay(option, progress);
  });
  requestAnimationFrame(frame);
}

POWERUPS.forEach(buildCard);
window.__powerupBlink = POWERUPS;
window.__powerupBlinkRender = renderCard;
requestAnimationFrame(frame);
