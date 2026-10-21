import * as THREE from "../mockups/vendor/three.module.js";
import { MOBS as BASE_MOBS } from "../mockups/toon3d.js";
import { MOB_V2 } from "../mockups/toon3d.v2.js";
import { buildBanshee, buildStinger } from "../mockups/banshees3d.js";

const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const TARGET = 2.35;
const FIT = 1.35;
const FIT_KEY = { scrap: 1.2, sentry: 1.2, skull: 1.15, viper: 1.2, turtle: 1.12, stinger: 1.65 };
const BUILDERS = Object.assign({}, BASE_MOBS, MOB_V2);

const KEY = {
  squid: "squid", octopus: "squid", octo: "squid", crab: "crab_b",
  ufo: "ufo", player: "player",
  scrap: "scrap", sentry: "sentry", skull: "skull", viper: "viper", turtle: "turtle",
  rapid: "drop_rapid", double: "drop_double", laser: "drop_laser", shield: "drop_shield",
  slow: "drop_slow", bomb: "drop_bomb", loot: "drop_loot",
  banshee: "banshee", ghost: "ghost", stinger: "stinger"
};

const canvas = document.getElementById("stage3d");
const W = canvas.width;
const H = canvas.height;
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(W, H, false);
renderer.setClearColor(0x000000, 0);

const scene = new THREE.Scene();
const cam = new THREE.OrthographicCamera(0, W, 0, -H, -4000, 4000);

const pool = new Map();

let crackTex = null;
let blankTex = null;
function crackTexture() {
  if (crackTex) return crackTex;
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
  crackTex = new THREE.CanvasTexture(cv);
  crackTex.wrapS = THREE.ClampToEdgeWrapping;
  crackTex.wrapT = THREE.ClampToEdgeWrapping;
  return crackTex;
}
function blankTexture() {
  if (blankTex) return blankTex;
  const cv = document.createElement("canvas");
  cv.width = 4; cv.height = 4;
  const g2 = cv.getContext("2d");
  g2.fillStyle = "#ffffff";
  g2.fillRect(0, 0, 4, 4);
  blankTex = new THREE.CanvasTexture(cv);
  return blankTex;
}

function build(key, color, quality) {
  if (key === "banshee") return buildBanshee("wail", RIG, color);
  if (key === "ghost") return buildBanshee("ghost", RIG, color);
  if (key === "stinger") return buildStinger(RIG, color);
  const mesh = key === "crab"
    ? BUILDERS.crab_b(RIG, color, { map: blankTexture(),
      mapS: new THREE.Vector2(1 / 36, 1 / 18), mapO: new THREE.Vector2(0.5, 0.5) })
    : BUILDERS[KEY[key] || key](RIG, color, quality);
  return mesh;
}

function sync(list) {
  const seen = new Set();
  for (const e of list) {
    seen.add(e.id);
    const id = (KEY[e.key] || e.key) + "|" + (e.color || "") + "|" + (e.quality || 0);
    let item = pool.get(e.id);
    if (!item || item.id !== id) {
      if (item) scene.remove(item.mesh);
      const mesh = build(e.key, e.color, e.quality);
      scene.add(mesh);
      item = { mesh, id };
      pool.set(e.id, item);
    }
    const fit = e.fit || FIT_KEY[e.key] || FIT;
    const scale = (Math.max(e.w, e.h) / TARGET) * fit;
    item.mesh.scale.setScalar(scale);
    item.mesh.position.set(e.x + e.w / 2, -(e.y + e.h / 2), e.z || 0);
    item.phase = e.phase || 0;
    item.base = e.rot ? [e.rot[0], e.rot[1], e.rot[2]] : [0, 0, 0];
    item.flicker = e.flicker ? 1 : 0;
    item.alphaT = e.alpha === undefined ? 1 : e.alpha;
    item.glow = e.glow ? 1 : 0;
    item.crack = e.crack ? 1 : 0;
    item.tilt = e.tilt === undefined ? 0.34 : e.tilt;
  }
  for (const [id, item] of pool) {
    if (!seen.has(id)) {
      scene.remove(item.mesh);
      pool.delete(id);
    }
  }
}

function render(t) {
  for (const item of pool.values()) {
    const m = item.mesh;
    m.rotation.set(item.base[0], item.base[1] + Math.sin(t / 1100 + item.phase) * item.tilt, item.base[2]);
    const parts = Object.assign({}, m.userData, (m.children[0] && m.children[0].userData) || {});
    (parts.legs || []).forEach((pivot, i) => {
      pivot.rotation.x = Math.sin(t / 300 + i * 0.9) * 0.12;
    });
    (parts.claws || []).forEach((pivot, i) => {
      pivot.rotation.x = -0.3 + Math.sin(t / 380 + i * 3.1) * 0.2;
    });
    (parts.spin || []).forEach((sp, i) => {
      ((sp && sp.obj) || sp).rotation.y = t / 900 * ((sp && sp.speed) || 2) / 2 + i;
    });
    (parts.roll || []).forEach((grp) => {
      grp.children.forEach((mesh, i) => {
        if (i % 2 === 0) mesh.rotation.y = t / 200;
      });
    });
    if (item.glow !== item.wasGlow || item.crack !== item.wasCrack) {
      item.wasGlow = item.glow;
      item.wasCrack = item.crack;
      const shM = m.userData.shell || (m.children[0] && m.children[0].userData && m.children[0].userData.shell);
      if (shM) shM.material.uniforms.uMap.value = item.crack ? crackTexture() : blankTexture();
      m.traverse((o) => {
        if (o.isMesh && o.material.uniforms && o.material.uniforms.uRim) {
          if (!o.material.userData.rim0) o.material.userData.rim0 = o.material.uniforms.uRim.value.clone();
          if (item.glow) {
            o.material.uniforms.uRim.value.setRGB(1.0, 0.22, 0.3);
            o.material.uniforms.uRimW.value = 1.5;
            item.glowMats = item.glowMats || [];
            item.glowMats.push(o.material);
          } else {
            o.material.uniforms.uRim.value.copy(o.material.userData.rim0);
            o.material.uniforms.uRimW.value = RIG.rim;
          }
          item.glowMats = null;
        }
      });
    }
    if (item.glowMats && item.glow) {
      const w = 1.25 + 0.6 * (0.5 + 0.5 * Math.sin(t / 130));
      item.glowMats.forEach((mat) => { mat.uniforms.uRimW.value = w; });
    }
    const aT = item.flicker ? 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t / 240)) : item.alphaT;
    if (item.alphaCur === undefined) item.alphaCur = 1;
    if (Math.abs(aT - item.alphaCur) > 0.004 || (aT !== item.alphaCur && Math.abs(aT - item.alphaCur) > 0.0005)) {
      item.alphaCur += (aT - item.alphaCur) * 0.25;
      if (Math.abs(aT - item.alphaCur) <= 0.004) item.alphaCur = aT;
      const ac = item.alphaCur;
      m.traverse((o) => {
        if (o.isMesh && o.material.uniforms && o.material.uniforms.uAlpha) {
          if (o.material.userData.a0 === undefined) o.material.userData.a0 = o.material.uniforms.uAlpha.value;
          o.material.uniforms.uAlpha.value = o.material.userData.a0 * ac;
          o.material.transparent = ac < 0.999;
          o.renderOrder = ac < 0.999 ? 2 : 0;
        }
      });
    }
  }
  renderer.render(scene, cam);
  if (window.__ironSample) {
    window.__ironSample = false;
    const gl = renderer.getContext();
    const w = canvas.width;
    const h = canvas.height;
    const buf = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    let lit = 0;
    for (let i = 3; i < buf.length; i += 4) if (buf[i] > 8) lit += 1;
    window.__ironSamplePct = Math.round((lit / (w * h)) * 100);
  }
}

window.Iron3D = { sync, render, count: () => pool.size, ready: true, keys: KEY,
  debug: (id) => {
    const it = pool.get(id);
    if (!it) return { missing: true };
    const sh = it.mesh.userData.shell || (it.mesh.children[0] && it.mesh.children[0].userData && it.mesh.children[0].userData.shell);
    return {
      crack: it.crack,
      shell: Boolean(sh),
      useMap: Boolean(sh && sh.material.vertexShader.indexOf("USE_MAP") >= 0),
      map: sh && sh.material.uniforms && sh.material.uniforms.uMap
        ? (sh.material.uniforms.uMap.value === crackTexture() ? "crack" : sh.material.uniforms.uMap.value === blankTexture() ? "blank" : "other")
        : "none",
      mapS: sh && sh.material.uniforms.uMapS ? sh.material.uniforms.uMapS.value.toArray() : null,
      mapO: sh && sh.material.uniforms.uMapO ? sh.material.uniforms.uMapO.value.toArray() : null,
      uv0: sh ? sh.geometry.attributes.uv.array.slice(0, 4) : null,
      texel: (function () {
        const im = crackTexture().image;
        const d = im.getContext("2d").getImageData(683, 128, 1, 1).data;
        return [d[0], d[1], d[2], d[3]];
      })()
    };
  } };
