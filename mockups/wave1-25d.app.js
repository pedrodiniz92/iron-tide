import * as THREE from "./vendor/three.module.js";
import { GAME_COLOR, MOBS, EDGE_FS, DIL_FS, POST_VS, POST_FS } from "./toon3d.js";

THREE.ColorManagement.enabled = false;

const W = 900, H = 600;
const COLORS = { squid: "#99d4ff", crab: "#ffd26b", octopus: "#9fffc9", player: "#78ff78", hud: "#66ff66" };

const SIL = {
  classic: { bb: { x: -28, y: -11, w: 56, h: 22 }, path(c) {
    c.beginPath(); c.moveTo(0, -11); c.lineTo(4, -3); c.lineTo(12, 1); c.lineTo(28, 7);
    c.lineTo(16, 9); c.lineTo(6, 6); c.lineTo(-6, 6); c.lineTo(-16, 9);
    c.lineTo(-28, 7); c.lineTo(-12, 1); c.lineTo(-4, -3); c.closePath(); } },
  squid: { bb: { x: -13, y: -16, w: 26, h: 34 }, path(c) {
    c.beginPath(); c.moveTo(0, -16); c.quadraticCurveTo(13, -13, 12, 0); c.quadraticCurveTo(11, 8, 6, 9);
    c.lineTo(8, 17); c.lineTo(4, 10); c.lineTo(2, 18); c.lineTo(-1, 10);
    c.lineTo(-3, 18); c.lineTo(-6, 9); c.quadraticCurveTo(-11, 8, -12, 0);
    c.quadraticCurveTo(-13, -13, 0, -16); c.closePath(); } },
  crab: { bb: { x: -18, y: -8, w: 36, h: 26 }, path(c) {
    c.beginPath(); c.moveTo(-14, -8); c.lineTo(14, -8); c.quadraticCurveTo(18, 2, 12, 10);
    c.lineTo(16, 18); c.lineTo(10, 12); c.lineTo(6, 18); c.lineTo(0, 12);
    c.lineTo(-6, 18); c.lineTo(-10, 12); c.lineTo(-16, 18); c.lineTo(-12, 10);
    c.quadraticCurveTo(-18, 2, -14, -8); c.closePath(); } }
};

const c2 = document.getElementById("game2d").getContext("2d");
const glCanvas = document.getElementById("game3d");

const typeForRow = (row) => (row <= 1
  ? { name: "squid", color: COLORS.squid }
  : row === 2 ? { name: "crab", color: COLORS.crab } : { name: "octopus", color: COLORS.octopus });

const invaders = [];
for (let row = 0; row < 3; row += 1) {
  for (let col = 0; col < 11; col += 1) {
    invaders.push({
      type: typeForRow(row), x: 84 + col * 56, y: 86 + row * 46, baseY: 86 + row * 46,
      w: 32, h: 32, row, hp: row === 0 ? 2 : 1, alive: true
    });
  }
}
const shields = [];
for (let i = 0; i < 4; i += 1) {
  const shield = { x: 96 + i * 168, y: H - 128, cells: [] };
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 6; col += 1) {
      shield.cells.push({ x: shield.x + col * 12, y: (H - 128) + row * 8, w: 11, h: 7 });
    }
  }
  shields.push(shield);
}
const player = { x: W / 2 - 28, y: H - 70, w: 56, h: 22 };

const S = { squid: true, crab: true, ramp: true, inkThin: true, inkBlack: false, rim: true, spin: true };
let dir = 1;
const q = new URLSearchParams(location.search);
if (q.has("squid")) S.squid = q.get("squid") !== "0";
if (q.has("crab")) S.crab = q.get("crab") !== "0";
if (q.has("inkBlack")) S.inkBlack = q.get("inkBlack") !== "0";
if (q.has("ramp")) S.ramp = q.get("ramp") !== "0";
if (q.has("rim")) S.rim = q.get("rim") !== "0";

function march(dt) {
  const speed = 20 + 1 * 4 + (55 - invaders.length) * 0.95;
  const maxX = Math.max(...invaders.map((inv) => inv.x + inv.w));
  const minX = Math.min(...invaders.map((inv) => inv.x));
  if (dir > 0 && maxX + speed * dt >= W - 16) { dir = -1; descend(); }
  else if (dir < 0 && minX - speed * dt <= 16) { dir = 1; descend(); }
  else invaders.forEach((inv) => { inv.x += dir * speed * dt; });
}
function descend() {
  invaders.forEach((inv) => { inv.baseY += 15; inv.y += 15; });
  const bottom = Math.max(...invaders.map((inv) => inv.y + inv.h));
  if (bottom >= player.y - 4) invaders.forEach((inv) => { inv.y = inv.baseY = 86 + inv.row * 46; });
}

function neon(ctx, name, cx, cy, targetW, color, glow = 7) {
  const shape = SIL[name];
  const scale = targetW / shape.bb.w;
  ctx.save();
  ctx.translate(cx - (shape.bb.x + shape.bb.w / 2) * scale, cy - (shape.bb.y + shape.bb.h / 2) * scale);
  ctx.scale(scale, scale);
  ctx.shadowColor = color;
  ctx.shadowBlur = glow;
  shape.path(ctx);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
function drawInvaderArmor(inv) {
  const cx = inv.x + inv.w / 2;
  c2.save();
  c2.globalAlpha = 0.22; c2.fillStyle = "#6fdcff";
  c2.beginPath(); c2.arc(cx, inv.y + 12, 24, 0, Math.PI); c2.fill();
  c2.globalAlpha = 0.85; c2.strokeStyle = "#6fdcff"; c2.lineWidth = 2;
  c2.beginPath(); c2.arc(cx, inv.y + 12, 24, 0, Math.PI); c2.stroke();
  c2.globalAlpha = 0.5; c2.lineWidth = 1;
  for (let i = -2; i <= 2; i += 1) {
    c2.beginPath(); c2.arc(cx + i * 9, inv.y + 18, 4, 0, Math.PI); c2.stroke();
  }
  c2.restore();
}
function drawScene2D() {
  c2.fillStyle = "#000";
  c2.fillRect(0, 0, W, H);
  c2.strokeStyle = "#246b24";
  c2.lineWidth = 2;
  c2.beginPath(); c2.moveTo(0, H - 38); c2.lineTo(W, H - 38); c2.stroke();

  c2.fillStyle = "#175017";
  shields.forEach((shield) => shield.cells.forEach((cell) => c2.fillRect(cell.x, cell.y, cell.w, cell.h)));

  invaders.forEach((inv) => {
    if (S[inv.type.name]) {
      if (inv.hp > 1) drawInvaderArmor(inv);
      return;
    }
    const fitW = inv.h * (SIL[inv.type.name].bb.w / SIL[inv.type.name].bb.h);
    neon(c2, inv.type.name, inv.x + inv.w / 2, inv.y + inv.h / 2, Math.min(inv.w, fitW * 1.35), inv.type.color);
    const eyeR = Math.max(2.1, inv.w * 0.068);
    c2.beginPath();
    c2.arc(inv.x + inv.w * 0.33, inv.y + inv.h * 0.38, eyeR, 0, Math.PI * 2);
    c2.arc(inv.x + inv.w * 0.67, inv.y + inv.h * 0.38, eyeR, 0, Math.PI * 2);
    c2.fillStyle = "#0d0d14";
    c2.fill();
    if (inv.hp > 1) drawInvaderArmor(inv);
  });

  neon(c2, "classic", player.x + player.w / 2, player.y + player.h / 2, player.w, COLORS.player);
  c2.fillStyle = COLORS.hud;
  c2.font = "16px 'Courier New', monospace";
  c2.fillText("SCORE 0        HI 0        WAVE 1        LIVES 3", 16, 24);
}
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: true, alpha: true, premultipliedAlpha: false });
renderer.setPixelRatio(DPR);
renderer.setSize(W, H, false);
renderer.setClearColor(0x000000, 0);
renderer.setScissorTest(true);
const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const SELFTEST = new URLSearchParams(location.search).has("selftest");

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(0, W, H, 0, 50, 150);
camera.position.z = 100;

const px = [W * DPR, H * DPR];
const texel = new THREE.Vector2(1 / px[0], 1 / px[1]);
const depthTex = new THREE.DepthTexture(px[0], px[1]);
depthTex.format = THREE.DepthFormat;
const rt = new THREE.WebGLRenderTarget(px[0], px[1], {
  minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: true, samples: 4
});
rt.depthTexture = depthTex;
const newRt = () => new THREE.WebGLRenderTarget(px[0], px[1], {
  minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false
});
const edgeA = newRt(), edgeB = newRt(), edgeC = newRt();
const mkQuad = (mat) => {
  const sc = new THREE.Scene();
  sc.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
  return sc;
};
const edgeMat = new THREE.ShaderMaterial({
  vertexShader: POST_VS,
  fragmentShader: EDGE_FS,
  uniforms: {
    uDepth: { value: depthTex }, uTexel: { value: texel },
    uNearFar: { value: new THREE.Vector2(camera.near, camera.far) },
    uThresh: { value: q.has("thresh") ? Number(q.get("thresh")) : 0.011 }
  }
});
const dilMatH = new THREE.ShaderMaterial({
  vertexShader: POST_VS, fragmentShader: DIL_FS,
  uniforms: { uTex: { value: edgeA.texture }, uTexel: { value: texel }, uDir: { value: new THREE.Vector2(1, 0) }, uRadius: { value: 2 } }
});
const dilMatV = new THREE.ShaderMaterial({
  vertexShader: POST_VS, fragmentShader: DIL_FS,
  uniforms: { uTex: { value: edgeB.texture }, uTexel: { value: texel }, uDir: { value: new THREE.Vector2(0, 1) }, uRadius: { value: 2 } }
});
const postMat = new THREE.ShaderMaterial({
  vertexShader: POST_VS,
  fragmentShader: POST_FS,
  transparent: true,
  uniforms: {
    uTex: { value: rt.texture }, uEdge: { value: edgeC.texture },
    uRes: { value: new THREE.Vector2(px[0], px[1]) }, uTexel: { value: texel },
    uInkCol: { value: new THREE.Color("#050309") }, uInkPx: { value: 4 }, uInkOn: { value: 1 },
    uTime: { value: 0 }, uSat: { value: 1 }, uWarm: { value: 0 },
    uHalftone: { value: 0 }, uGrain: { value: 0 }, uVignette: { value: 0 }, uPoster: { value: 0 }
  }
});
const edgeQuad = mkQuad(edgeMat), dilQuadH = mkQuad(dilMatH), dilQuadV = mkQuad(dilMatV), postQuad = mkQuad(postMat);

const mobCfg = () => ({
  toon: S.ramp ? 1 : 0,
  inkHull: S.inkThin ? 1 : 0,
  inkBlack: S.inkBlack ? 1 : 0,
  inkPx: 4,
  rim: S.rim ? 0.55 : 0,
  backRim: S.rim ? 0.3 : 0
});

let mobs = [];
function buildMobs() {
  mobs.forEach((mob) => {
    scene.remove(mob.outer);
    mob.outer.traverse((o) => { if (o.isMesh) o.material.dispose(); });
  });
  mobs = [];
  const cfg = mobCfg();
  invaders.forEach((inv) => {
    if (!S[inv.type.name]) return;
    const inner = new THREE.Group();
    inner.add(MOBS[inv.type.name](cfg, GAME_COLOR[inv.type.name] || inv.type.color));
    const box = new THREE.Box3().setFromObject(inner);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 32 / Math.max(0.001, size.x);
    inner.scale.setScalar(scale);
    inner.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    const outer = new THREE.Group();
    outer.add(inner);
    scene.add(outer);
    mobs.push({ inv, outer, phase: (inv.row * 11 + inv.x) * 0.31 });
  });
  postMat.uniforms.uInkOn.value = S.inkBlack ? 1 : 0;
  const rad = Math.max(1, Math.min(8, (4 * DPR) / 2));
  dilMatH.uniforms.uRadius.value = rad;
  dilMatV.uniforms.uRadius.value = rad;
}
buildMobs();

function syncMobs(t) {
  mobs.forEach((mob) => {
    const inv = mob.inv;
    mob.outer.position.set(inv.x + inv.w / 2, H - (inv.y + inv.h / 2), 0);
    mob.outer.rotation.y = S.spin ? Math.sin(t / 2100 + mob.phase) * 0.55 : 0;
    const g = mob.outer.children[0].children[0];
    (g.userData.legs || []).forEach((pivot, i) => {
      pivot.rotation.x += Math.sin(t / 520 + i * 0.9) * 0.005;
    });
    (g.userData.claws || []).forEach((pivot, i) => {
      pivot.rotation.x = -0.35 + Math.sin(t / 620 + i * 3.1) * 0.2;
    });
  });
}

const pass = (target, sc) => {
  renderer.setRenderTarget(target);
  renderer.setViewport(0, 0, W, H);
  renderer.setScissor(0, 0, W, H);
  renderer.clear();
  renderer.render(sc, quadCam);
};
function renderOverlay(t) {
  renderer.setRenderTarget(rt);
  renderer.setViewport(0, 0, W, H);
  renderer.setScissor(0, 0, W, H);
  renderer.clear();
  renderer.render(scene, camera);
  pass(edgeA, edgeQuad);
  pass(edgeB, dilQuadH);
  pass(edgeC, dilQuadV);
  renderer.setRenderTarget(null);
  renderer.setViewport(0, 0, W, H);
  renderer.setScissor(0, 0, W, H);
  renderer.clear();
  renderer.render(postQuad, quadCam);
  if (SELFTEST) postMat.uniforms.uTime.value = t / 1000;
}

const CHIPS = [
  { id: "squid", label: "SQUID: 3D", get: () => S.squid, set: (v) => { S.squid = v; } },
  { id: "crab", label: "CRAB: 3D", get: () => S.crab, set: (v) => { S.crab = v; } },
  { id: "ramp", label: "TOON RAMP", get: () => S.ramp, set: (v) => { S.ramp = v; } },
  { id: "inkThin", label: "INK THIN (own hue)", get: () => S.inkThin, set: (v) => { S.inkThin = v; } },
  { id: "inkBlack", label: "INK BLACK (EVEN)", get: () => S.inkBlack, set: (v) => { S.inkBlack = v; } },
  { id: "rim", label: "RIM LIGHT", get: () => S.rim, set: (v) => { S.rim = v; } },
  { id: "spin", label: "TURN (SHOW 3D)", get: () => S.spin, set: (v) => { S.spin = v; } }
];
const chipsEl = document.getElementById("chips");
for (const chip of CHIPS) {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.dataset.chip = chip.id;
  b.textContent = chip.label;
  b.setAttribute("aria-pressed", chip.get() ? "true" : "false");
  b.addEventListener("click", () => {
    chip.set(!chip.get());
    for (const other of CHIPS) {
      const el = chipsEl.querySelector(`[data-chip="${other.id}"]`);
      if (el) el.setAttribute("aria-pressed", other.get() ? "true" : "false");
    }
    buildMobs();
  });
  chipsEl.appendChild(b);
}

function selfTest() {
  drawScene2D();
  syncMobs(2400);
  renderOverlay(2400);
  const inv = invaders[0];
  const w = Math.round(36 * DPR), h = Math.round(46 * DPR);
  const x = Math.round((inv.x + inv.w / 2 - 18) * DPR);
  const y = Math.round((H - (inv.y + inv.h / 2) - 23) * DPR);
  const buf = new Uint8Array(w * h * 4);
  const gl = renderer.getContext();
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
  let lit = 0, ink = 0, uniq = new Set();
  for (let i = 0; i < buf.length; i += 4) {
    if (buf[i + 3] > 40) {
      lit += 1;
      uniq.add((buf[i] >> 4) + "," + (buf[i + 1] >> 4) + "," + (buf[i + 2] >> 4));
    }
    if (buf[i + 3] > 40 && buf[i] + buf[i + 1] + buf[i + 2] < 90) ink += 1;
  }
  const dbg = new Uint8Array(4 * 4);
  const m = new THREE.ShaderMaterial({
    vertexShader: POST_VS,
    fragmentShader: "uniform sampler2D uTex; varying vec2 vUv; void main(){ gl_FragColor = vec4(vec3(texture2D(uTex, vUv).r), 1.0); }",
    uniforms: { uTex: { value: edgeC.texture } }
  });
  const dbgScene = mkQuad(m);
  renderer.setRenderTarget(null);
  renderer.setViewport(0, 0, W, H);
  renderer.setScissor(0, 0, W, H);
  renderer.clear();
  renderer.render(dbgScene, quadCam);
  const gl2 = renderer.getContext();
  const readAt = (cx, cy) => {
    const b = new Uint8Array(4);
    gl2.bindFramebuffer(gl2.FRAMEBUFFER, null);
    gl2.readPixels(Math.round(cx * DPR), Math.round((H - cy) * DPR), 1, 1, gl2.RGBA, gl2.UNSIGNED_BYTE, b);
    return b[0];
  };
  const maskOnMob = readAt(invaders[0].x + 16, invaders[0].y + 12);
  const maskOnBg = readAt(450, 420);
  const maskOnCrab = readAt(invaders[22].x + 16, invaders[22].y + 16);
  const grid = c2.getImageData(0, 0, W, H).data;
  let lit2d = 0;
  for (let i = 3; i < grid.length; i += 4) if (grid[i] > 20) lit2d += 1;
  const text = `MASK mob=${maskOnMob} crab=${maskOnCrab} bg=${maskOnBg} | SELFTEST mobs3d=${mobs.length} squidRow0=${S.squid ? "3D" : "2D"} crab=${S.crab ? "3D" : "2D"} ` +
    `overlayPx=${lit} inkPx=${ink} uniq=${uniq.size} canvas2dPx=${lit2d}`;
  document.title = text;
  const pre = document.createElement("pre");
  pre.id = "selftest";
  pre.textContent = text;
  document.body.appendChild(pre);
}
if (SELFTEST) setTimeout(selfTest, 1500);

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.035, (now - last) / 1000);
  last = now;
  march(dt);
  drawScene2D();
  syncMobs(now);
  renderOverlay(now);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
