import * as THREE from "./vendor/three.module.js";
import { BASE_PINK, FAMILIES, GAME_COLOR, MOCKUP_COLOR, MOB_GROUPS, MOB_KEYS, MOB_LABEL, MOBS, mobLabel, SURF_VS, SURF_FS, HULL_VS, HULL_FS, EDGE_FS, DIL_FS, POST_VS, POST_FS } from "./assetCatalog.js";

function bgMesh(toon) {
  const c = document.createElement("canvas");
  c.width = 8; c.height = 256;
  const g = c.getContext("2d").createLinearGradient(0, 0, 0, 256);
  if (toon) {
    g.addColorStop(0, "#3f9ad6"); g.addColorStop(0.42, "#8ecfee");
    g.addColorStop(0.72, "#dff0e2"); g.addColorStop(1, "#f6e8bd");
  } else {
    g.addColorStop(0, "#0d1230"); g.addColorStop(1, "#1b2a52");
  }
  const ctx = c.getContext("2d");
  ctx.fillStyle = g; ctx.fillRect(0, 0, 8, 256);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 12),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c) })
  );
  mesh.position.set(0, 1.2, -4.5);
  return mesh;
}
function contactShadow() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, "rgba(18,10,30,0.62)");
  g.addColorStop(1, "rgba(18,10,30,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 1.1),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0.12, -0.62, 0);
  return mesh;
}
THREE.ColorManagement.enabled = false;

const CELL_W = 302, CELL_H = 300;
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const canvas = document.getElementById("stage");
const SELFTEST = new URLSearchParams(location.search).has("selftest");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: SELFTEST });
renderer.setPixelRatio(DPR);
renderer.setSize(CELL_W * 4, CELL_H, false);
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setScissorTest(true);
const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const CELLS = [
  { key: "raw", title: "A · RAW 3D MESH",
    note: 'The asset with nothing on top: smooth N·L shading, one key light from upper-left, sky fill, contact shadow. Plain surface shader, no ramp, no ink, no post — <b>this is the model itself</b>.' },
  { key: "toon", title: "B · + TOON RAMP",
    note: 'N·L snapped to two tones with a hairline boundary (Wind Waker\'s ever-so-slight edge). The shadow <b>keeps its saturation</b> and drifts toward violet, so it stays bright instead of muddy; the core shadow hugs the underside. Same ramp math as <b>wind-waker-toon.html</b>.' },
  { key: "ink", title: "C · + THIN INK + RIM",
    note: 'Inverted hull pushed along its normals by a fixed screen-space amount (~1px, tinted with the sprite\'s own dark hue, not the fat black ink of the 2D mockup), plus a sky-bounce rim on upward-facing edges and a warm back rim opposite the key. A hull is cheap but <b>not even</b>: it thins out wherever the surface faces the camera. For ink that is the same width everywhere use the screen-space ink in cell D.' },
  { key: "live", title: "D · + POST FILTERS · DRAG ME",
    note: 'Full-screen pass on the rendered cell: saturation and warmth lift, <b>halftone dots only in the shadow</b>, film grain, vignette, optional posterize. Drag inside this cell to orbit; the chips toggle every filter. <b>INK THICK (BLACK, EVEN)</b> is <b>screen-space ink</b>, not a hull: the pass reads the depth buffer, edge-detects the silhouette with a depth-normalized threshold, then dilates that mask by a fixed pixel radius, so the line is the <b>same thickness everywhere</b> ~4px (8px with INK WIDE) and always pure black.' }
];

const BASE_CFG = {
  raw:  { toon: 0, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0, backRim: 0, post: { sat: 1, warm: 0, halftone: 0, grain: 0, vignette: 0, poster: 0, glow: 0 } },
  toon: { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0, backRim: 0, post: { sat: 1, warm: 0, halftone: 0, grain: 0, vignette: 0, poster: 0, glow: 0 } },
  ink:  { toon: 1, inkHull: 1, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35, post: { sat: 1, warm: 0, halftone: 0, grain: 0, vignette: 0, poster: 0, glow: 0 } },
  live: { toon: 1, inkHull: 1, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35, post: { sat: 1.18, warm: 0.7, halftone: 1, grain: 1, vignette: 0.6, poster: 0, glow: 0 } }
};

function makeCell(index, spec) {
  const scene = new THREE.Scene();
  scene.add(bgMesh(true));
  scene.add(contactShadow());
  const camera = new THREE.PerspectiveCamera(24, CELL_W / CELL_H, 0.1, 60);
  camera.position.set(0, 1.15, 10.4);
  camera.lookAt(0, 0.28, 0);
  const size = [CELL_W * DPR, CELL_H * DPR];
  const depthTex = new THREE.DepthTexture(size[0], size[1]);
  depthTex.format = THREE.DepthFormat;
  const target = new THREE.WebGLRenderTarget(size[0], size[1], {
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: true, samples: 4
  });
  target.depthTexture = depthTex;
  const texel = new THREE.Vector2(1 / size[0], 1 / size[1]);
  const hw = [size[0], size[1]];
  const halfTexel = new THREE.Vector2(1 / hw[0], 1 / hw[1]);
  const mkQuad = (mat) => {
    const sc = new THREE.Scene();
    sc.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
    return sc;
  };
  const newHalf = () => new THREE.WebGLRenderTarget(hw[0], hw[1], {
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false
  });
  const edgeA = newHalf(), edgeB = newHalf(), edgeC = newHalf();
  const edgeMat = new THREE.ShaderMaterial({
    vertexShader: POST_VS,
    fragmentShader: EDGE_FS,
    uniforms: {
      uDepth: { value: depthTex },
      uTexel: { value: halfTexel },
      uNearFar: { value: new THREE.Vector2(camera.near, camera.far) },
      uThresh: { value: 0.011 }
    }
  });
  const dilMatH = new THREE.ShaderMaterial({
    vertexShader: POST_VS,
    fragmentShader: DIL_FS,
    uniforms: { uTex: { value: edgeA.texture }, uTexel: { value: halfTexel }, uDir: { value: new THREE.Vector2(1, 0) }, uRadius: { value: 2 } }
  });
  const dilMatV = new THREE.ShaderMaterial({
    vertexShader: POST_VS,
    fragmentShader: DIL_FS,
    uniforms: { uTex: { value: edgeB.texture }, uTexel: { value: halfTexel }, uDir: { value: new THREE.Vector2(0, 1) }, uRadius: { value: 2 } }
  });
  const edgeQuad = mkQuad(edgeMat);
  const dilQuadH = mkQuad(dilMatH);
  const dilQuadV = mkQuad(dilMatV);
  const postMat = new THREE.ShaderMaterial({
    vertexShader: POST_VS,
    fragmentShader: POST_FS,
    uniforms: {
      uTex: { value: target.texture },
      uEdge: { value: edgeC.texture },
      uRes: { value: new THREE.Vector2(size[0], size[1]) },
      uTexel: { value: texel },
      uInkCol: { value: new THREE.Color("#050309") },
      uInkPx: { value: 0 }, uInkOn: { value: 0 },
      uTime: { value: 0 }, uSat: { value: 1 }, uWarm: { value: 0 },
      uHalftone: { value: 0 }, uGrain: { value: 0 }, uVignette: { value: 0 }, uPoster: { value: 0 }, uGlow: { value: 0 }
    }
  });
  const quad = new THREE.Scene();
  quad.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMat));

  const cell = {
    ...spec, index, x: index * CELL_W,
    mobKey: spec.mob || "squid", baseHex: GAME_COLOR[spec.mob || "squid"] || BASE_PINK,
    cfg: JSON.parse(JSON.stringify(BASE_CFG[spec.key])),
    scene, camera, target, edgeTarget: edgeC, edgeQuad, dilQuadH, dilQuadV, dilMatH, dilMatV,
    postMat, quad, squid: null, yaw: index === 3 ? 0.35 : -0.25
  };
  cell.rebuild = () => {
    if (cell.squid) {
      scene.remove(cell.squid);
      cell.squid.traverse((o) => { if (o.isMesh) o.material.dispose(); });
    }
    cell.squid = MOBS[cell.mobKey](cell.cfg, cell.baseHex);
    cell.squid.position.y = 0.12;
    cell.squid.rotation.y = cell.yaw;
    scene.add(cell.squid);
    const p = postMat.uniforms;
    p.uSat.value = cell.cfg.post.sat;
    p.uWarm.value = cell.cfg.post.warm;
    p.uHalftone.value = cell.cfg.post.halftone;
    p.uGrain.value = cell.cfg.post.grain;
    p.uVignette.value = cell.cfg.post.vignette;
    p.uPoster.value = cell.cfg.post.poster;
    p.uGlow.value = cell.cfg.post.glow;
    p.uInkOn.value = cell.cfg.inkBlack ? 1 : 0;
    p.uInkPx.value = cell.cfg.inkPx;
    const rad = cell.cfg.inkBlack ? Math.max(1, Math.min(8, (cell.cfg.inkPx * DPR) / 2)) : 0;
    cell.dilMatH.uniforms.uRadius.value = rad;
    cell.dilMatV.uniforms.uRadius.value = rad;
  };
  cell.draw = () => {
    renderer.setRenderTarget(cell.target);
    renderer.setViewport(0, 0, CELL_W, CELL_H);
    renderer.setScissor(0, 0, CELL_W, CELL_H);
    renderer.clear();
    renderer.render(cell.scene, cell.camera);
    const pass = (rt, sc) => {
      renderer.setRenderTarget(rt);
      renderer.setViewport(0, 0, CELL_W, CELL_H);
      renderer.setScissor(0, 0, CELL_W, CELL_H);
      renderer.clear();
      renderer.render(sc, quadCam);
    };
    pass(edgeA, edgeQuad);
    pass(edgeB, dilQuadH);
    pass(edgeC, dilQuadV);
    renderer.setRenderTarget(null);
    renderer.setViewport(cell.x, 0, CELL_W, CELL_H);
    renderer.setScissor(cell.x, 0, CELL_W, CELL_H);
    renderer.clear();
    renderer.render(cell.quad, quadCam);
  };
  cell.animate = (t) => {
    if (!cell.squid) return;
    cell.squid.rotation.y = cell.yaw + (index === 3 ? 0 : Math.sin(t / 3400 + index) * 0.42);
    cell.squid.position.y = 0.12 + Math.sin(t / 900 + index) * 0.035;
    (cell.squid.userData.legs || []).forEach((pivot, i) => {
      pivot.rotation.x += Math.sin(t / 520 + i * 0.9) * 0.006;
    });
    (cell.squid.userData.claws || []).forEach((pivot, i) => {
      pivot.rotation.x = -0.35 + Math.sin(t / 620 + i * 3.1) * 0.22;
    });
    (cell.squid.userData.spin || []).forEach((pivot, i) => {
      pivot.rotation.y = t / 1600 + i;
    });
    (cell.squid.userData.roll || []).forEach((grp) => {
      grp.children.forEach((m, i) => {
        if (i % 2 === 0) m.rotation.y = t / 320;
      });
    });
  };
  cell.rebuild();
  return cell;
}

const cells = CELLS.map((spec, i) => makeCell(i, spec));
const live = cells[3];
const urlMob = new URLSearchParams(location.search).get("mob");
const INK_MODES = {
  off: { inkHull: 0, inkBlack: 0, inkPx: 4 },
  thin: { inkHull: 1, inkBlack: 0, inkPx: 4 }
};
const urlInk = new URLSearchParams(location.search).get("ink");
if (INK_MODES[urlInk]) { Object.assign(live.cfg, INK_MODES[urlInk]); live.rebuild(); }
const urlGlow = new URLSearchParams(location.search).get("glow");
if (urlGlow) { live.cfg.post.glow = Number(urlGlow) || 0.85; }

const CHIPS = [
  { id: "toon", label: "TOON RAMP", get: () => live.cfg.toon, set: (v) => { live.cfg.toon = v ? 1 : 0; } },
  { id: "thinInk", label: "INK THIN (own hue, hull)", get: () => !!live.cfg.inkHull, set: (v) => { live.cfg.inkHull = v ? 1 : 0; } },
  { id: "rim", label: "SKY RIM", get: () => live.cfg.rim > 0, set: (v) => { live.cfg.rim = v ? 0.55 : 0; } },
  { id: "back", label: "BACK RIM", get: () => live.cfg.backRim > 0, set: (v) => { live.cfg.backRim = v ? 0.35 : 0; } },
  { id: "halftone", label: "HALFTONE", get: () => !!live.cfg.post.halftone, set: (v) => { live.cfg.post.halftone = v ? 1 : 0; } },
  { id: "grain", label: "GRAIN", get: () => !!live.cfg.post.grain, set: (v) => { live.cfg.post.grain = v ? 1 : 0; } },
  { id: "vignette", label: "VIGNETTE", get: () => !!live.cfg.post.vignette, set: (v) => { live.cfg.post.vignette = v ? 0.6 : 0; } },
  { id: "poster", label: "POSTERIZE 6", get: () => !!live.cfg.post.poster, set: (v) => { live.cfg.post.poster = v ? 6 : 0; } },
  { id: "warm", label: "WARM LIFT", get: () => !!live.cfg.post.warm, set: (v) => { live.cfg.post.warm = v ? 0.7 : 0; } },
  { id: "glow", label: "NEON GLOW", get: () => !!live.cfg.post.glow, set: (v) => { live.cfg.post.glow = v ? 0.85 : 0; } },
  { id: "sat", label: "SAT +18%", get: () => live.cfg.post.sat > 1, set: (v) => { live.cfg.post.sat = v ? 1.18 : 1; } },
  { id: "base", label: "BASE", labelFn: () => "BASE: " + (live.baseHex === GAME_COLOR[live.mobKey] ? "GAME " + GAME_COLOR[live.mobKey].toUpperCase() : "MOCKUP " + (MOCKUP_COLOR[live.mobKey] || BASE_PINK).toUpperCase()), get: () => live.baseHex === GAME_COLOR[live.mobKey], set: (v) => { live.baseHex = v ? GAME_COLOR[live.mobKey] : (MOCKUP_COLOR[live.mobKey] || BASE_PINK); } }
];
const chipsEl = document.getElementById("chips");
function refreshChips() {
  for (const other of CHIPS) {
    const el = chipsEl.querySelector(`[data-chip="${other.id}"]`);
    if (!el) continue;
    el.setAttribute("aria-pressed", other.get() ? "true" : "false");
    if (other.labelFn) el.textContent = other.labelFn();
  }
}
for (const chip of CHIPS) {
  const b = document.createElement("button");
  b.className = "chip";
  b.dataset.chip = chip.id;
  b.type = "button";
  b.textContent = chip.labelFn ? chip.labelFn() : chip.label;
  b.setAttribute("aria-pressed", chip.get() ? "true" : "false");
  b.addEventListener("click", () => {
    chip.set(!chip.get());
    refreshChips();
    live.rebuild();
  });
  chipsEl.appendChild(b);
}

let currentMob = cells[0].mobKey;

function cellMobKey(index, key) {
  const fam = FAMILIES[key];
  return fam ? fam.keys[Math.min(index, fam.keys.length - 1)] : key;
}

function refreshTitles() {
  cells.forEach((cell, i) => {
    if (!cell.labelEl) return;
    const fam = FAMILIES[currentMob];
    const tag = fam ? " · " + fam.tag + " " + String.fromCharCode(65 + Math.min(i, fam.keys.length - 1)) : "";
    cell.labelEl.textContent = CELLS[i].title + tag;
  });
}

function setMob(key) {
  if (!MOBS[key] && !FAMILIES[key]) return;
  currentMob = key;
  cells.forEach((cell, i) => {
    const k = cellMobKey(i, key);
    cell.mobKey = k;
    cell.baseHex = GAME_COLOR[k] || BASE_PINK;
    cell.rebuild();
  });
  refreshChips();
  refreshTitles();
  const pick = document.getElementById("mobPick");
  if (pick) pick.value = key;
}

const pickEl = document.createElement("select");
pickEl.id = "mobPick";
pickEl.className = "mobpick";
for (const grp of MOB_GROUPS) {
  const og = document.createElement("optgroup");
  og.label = grp.name;
  for (const key of grp.keys) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = mobLabel(key);
    og.appendChild(opt);
  }
  pickEl.appendChild(og);
}
pickEl.value = live.mobKey;
pickEl.addEventListener("change", () => setMob(pickEl.value));
chipsEl.parentNode.insertBefore(pickEl, chipsEl);

canvas.addEventListener("pointerdown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (canvas.width / rect.width) / DPR;
  if (Math.floor(x / CELL_W) === 3) {
    canvas.setPointerCapture(e.pointerId);
    canvas.userData = { lastX: e.clientX, yaw: live.yaw };
  }
});
canvas.addEventListener("pointermove", (e) => {
  if (!canvas.userData) return;
  live.yaw = canvas.userData.yaw + (e.clientX - canvas.userData.lastX) * 0.011;
});
canvas.addEventListener("pointerup", () => { canvas.userData = null; });

const notesEl = document.getElementById("notes");
CELLS.forEach((spec, i) => {
  const div = document.createElement("div");
  div.className = "cell";
  div.innerHTML = `<h2>${spec.title}</h2><div class="note">${spec.note}</div>`;
  notesEl.appendChild(div);
  cells[i].labelEl = div.querySelector("h2");
});
if (MOBS[urlMob] || FAMILIES[urlMob]) setMob(urlMob);
else refreshTitles();

function frame(t) {
  for (const cell of cells) {
    cell.animate(t);
    cell.postMat.uniforms.uTime.value = t / 1000;
    cell.draw();
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function selfTest() {
  const parts = cells.map((cell) => {
    const w = cell.target.width, h = cell.target.height;
    const buf = new Uint8Array(w * h * 4);
    cell.animate(2400);
    cell.draw();
    const gl = renderer.getContext();
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.pixelStorei(gl.PACK_ALIGNMENT, 4);
    gl.readPixels(cell.x * DPR, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    let sum = 0, min = 255, max = 0, dark = 0;
    const uniq = new Set();
    for (let i = 0; i < buf.length; i += 4) {
      const lum = 0.299 * buf[i] + 0.587 * buf[i + 1] + 0.114 * buf[i + 2];
      sum += lum;
      if (lum < min) min = lum;
      if (lum > max) max = lum;
      if (lum < 45) dark += 1;
      if (i % 400 === 0) uniq.add((buf[i] >> 4) + "," + (buf[i + 1] >> 4) + "," + (buf[i + 2] >> 4));
    }
    const n = w * h;
    const out = [];
    for (const [x0, x1, y0, y1, name] of [[0, 1, 0, 1, "full"], [0.34, 0.66, 0.15, 0.85, "mob"]]) {
      let cs = 0, cn = 0, cd = 0, cb = 0;
      const cu = new Set();
      for (let y = Math.floor(h * y0); y < Math.floor(h * y1); y++) {
        for (let x = Math.floor(w * x0); x < Math.floor(w * x1); x++) {
          const i = (y * w + x) * 4;
          const lum = 0.299 * buf[i] + 0.587 * buf[i + 1] + 0.114 * buf[i + 2];
          cs += lum; cn += 1;
          if (lum < 45) cd += 1;
          if (lum > 235) cb += 1;
          cu.add((buf[i] >> 4) + "," + (buf[i + 1] >> 4) + "," + (buf[i + 2] >> 4));
        }
      }
      out.push(name + " avg" + Math.round(cs / cn) + " ink" + (Math.round(cd / cn * 1000) / 10) +
        "% blow" + (Math.round(cb / cn * 1000) / 10) + "% uniq" + cu.size);
    }
    let feather = 0, hard = 0;
    for (let y = Math.floor(h * 0.15); y < Math.floor(h * 0.85); y++) {
      for (let x = Math.floor(w * 0.34); x < Math.floor(w * 0.66); x++) {
        const i = (y * w + x) * 4;
        const lum = 0.299 * buf[i] + 0.587 * buf[i + 1] + 0.114 * buf[i + 2];
        if (lum >= 45 && lum <= 150) feather += 1;
        if (lum < 45) hard += 1;
      }
    }
    const featherPct = Math.round(feather / Math.max(1, hard) * 100);
    let stepMax = 0, stepSum = 0, stepN = 0, prevX = -1;
    for (let y = Math.floor(h * 0.2); y < Math.floor(h * 0.8); y++) {
      let inkX = -1;
      for (let x = Math.floor(w * 0.34); x < Math.floor(w * 0.5); x++) {
        const i = (y * w + x) * 4;
        if (0.299 * buf[i] + 0.587 * buf[i + 1] + 0.114 * buf[i + 2] < 90) { inkX = x; break; }
      }
      if (inkX >= 0 && prevX >= 0) {
        const d = Math.abs(inkX - prevX);
        stepSum += d; stepN += 1;
        if (d > stepMax) stepMax = d;
      }
      if (inkX >= 0) prevX = inkX;
    }
    const stair = "stair max" + stepMax + " avg" + (stepN ? (Math.round(stepSum / stepN * 100) / 100) : 0);
    const runs = [];
    for (const fy of [0.3, 0.45, 0.6, 0.75]) {
      const y = Math.floor(h * (0.15 + 0.7 * fy));
      let run = 0;
      for (let x = Math.floor(w * 0.34); x < Math.floor(w * 0.66); x++) {
        const i = (y * w + x) * 4;
        const lum = 0.299 * buf[i] + 0.587 * buf[i + 1] + 0.114 * buf[i + 2];
        if (lum < 45) run += 1;
        else if (run > 0) { runs.push(run); run = 0; }
      }
      if (run > 0) runs.push(run);
    }
    const inkRuns = runs.filter((r) => r <= 24);
    const minRun = inkRuns.length ? Math.min(...inkRuns) : 0;
    const maxRun = inkRuns.length ? Math.max(...inkRuns) : 0;
    return cell.key + " [rng " + Math.round(min) + "-" + Math.round(max) + "] feather" + featherPct + "% " + stair + " inkruns min" + minRun + " max" + maxRun +
      " n" + inkRuns.length + " | " + out.join(" ");
  });
  const text = "SELFTEST " + parts.join(" | ");
  document.title = text;
  const pre = document.createElement("pre");
  pre.id = "selftest";
  pre.textContent = text;
  document.body.appendChild(pre);
}
if (SELFTEST) setTimeout(selfTest, 1500);
