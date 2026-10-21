import * as THREE from "./vendor/three.module.js";

const BASE_PINK = "#ff5c8a";
const BASE_BLUE = "#99d4ff";

function hexToHsl(hex) {
  const n = hex.replace("#", "");
  const r = parseInt(n.slice(0, 2), 16) / 255, g = parseInt(n.slice(2, 4), 16) / 255, b = parseInt(n.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s * 100, l * 100];
}
function toward(h, target, deg) {
  const d = ((target - h + 540) % 360) - 180;
  return h + Math.sign(d) * Math.min(Math.abs(d), deg);
}
function three(h, s, l) {
  return new THREE.Color().setHSL((((h % 360) + 360) % 360) / 360, Math.max(0, Math.min(1, s / 100)), Math.max(0, Math.min(1, l / 100)));
}
function ramp(hex, toon) {
  const [h, s, l] = hexToHsl(hex);
  if (!toon) {
    return {
      lit: three(h, s * 0.9, Math.min(88, l + 14)),
      mid: three(h, s, l),
      shadow: three(h, s * 0.95, Math.max(12, l - 22)),
      deep: three(h, s * 0.9, Math.max(7, l - 38)),
      edge: three(h, s * 0.8, 14),
      rim: three(h, 30, 92),
      back: three(toward(h, 40, 25), 40, 80)
    };
  }
  return {
    lit: three(toward(h, 52, 5), s * 0.92, Math.min(90, l + 9)),
    mid: three(h, s, l),
    shadow: three(toward(h, 300, 14), Math.min(100, s * 1.06), Math.max(14, l - 6)),
    deep: three(toward(h, 300, 22), s * 0.92, Math.max(9, l - 17)),
    edge: three(toward(h, 306, 20), s * 0.9, Math.max(16, l - 30)),
    rim: three(toward(h, 48, 26), Math.min(100, s * 0.42 + 34), Math.min(94, l + 34)),
    back: three(toward(h, 34, 30), Math.min(100, s * 0.7 + 12), Math.min(92, l + 26))
  };
}

const SURF_VS = `
varying vec3 vN;
varying vec3 vV;
varying vec2 vUv;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  vV = normalize(cameraPosition - world.xyz);
  gl_Position = projectionMatrix * viewMatrix * world;
}`;

const SURF_FS = `
uniform vec3 uLit, uMid, uShadow, uDeep, uKey, uRim, uBack;
uniform float uToon, uSoft, uRimW, uBackW, uAlpha;
varying vec3 vN;
varying vec3 vV;
varying vec2 vUv;
#ifdef USE_MAP
uniform sampler2D uMap;
uniform vec2 uMapS;
uniform vec2 uMapO;
#endif
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  vec3 K = normalize(uKey);
  float ndl = dot(N, K) * 0.5 + 0.5;
  float band = smoothstep(0.50 - uSoft, 0.50 + uSoft, ndl);
  float core = smoothstep(0.26 - uSoft, 0.26 + uSoft, ndl);
  float flatL = smoothstep(0.12, 0.92, ndl);
  float flatD = smoothstep(0.02, 0.42, ndl);
  float t = mix(flatL, band, uToon);
  float d = mix(flatD, core, uToon);
  vec3 c = mix(uShadow, uMid, t);
  c = mix(uDeep, c, d);
  #ifdef USE_MAP
  c *= texture2D(uMap, vUv * uMapS + uMapO).rgb * 1.25;
  #endif
  float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  c += uRim * fres * uRimW * (0.30 + 0.70 * max(N.y, 0.0));
  float back = pow(max(dot(N, -K) * 0.5 + 0.5, 0.0), 3.0) * fres;
  c += uBack * back * uBackW;
  gl_FragColor = vec4(c, uAlpha);
}`;

const HULL_VS = `
uniform float uThick;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec3 n = normalize(normalMatrix * normal);
  mv.xy += n.xy * uThick;
  gl_Position = projectionMatrix * mv;
}`;

const HULL_FS = `
uniform vec3 uColor;
uniform float uAlpha;
void main() { gl_FragColor = vec4(uColor, uAlpha); }`;

const EDGE_FS = `
uniform sampler2D uDepth;
uniform vec2 uTexel;
uniform vec2 uNearFar;
uniform float uThresh;
varying vec2 vUv;
float eyeDepth(vec2 uv) {
  float d = texture2D(uDepth, uv).r;
  float n = uNearFar.x, f = uNearFar.y;
  return (2.0 * n * f) / (f + n - (2.0 * d - 1.0) * (f - n));
}
void main() {
  float c = eyeDepth(vUv);
  float g = abs(eyeDepth(vUv - vec2(uTexel.x, 0.0)) - eyeDepth(vUv + vec2(uTexel.x, 0.0)))
          + abs(eyeDepth(vUv - vec2(0.0, uTexel.y)) - eyeDepth(vUv + vec2(0.0, uTexel.y)));
  float m = smoothstep(0.0, 1.0, (g / max(c, 0.001)) / uThresh - 1.0);
  gl_FragColor = vec4(m, m, m, 1.0);
}`;


const DIL_FS = `
uniform sampler2D uTex;
uniform vec2 uTexel;
uniform vec2 uDir;
uniform float uRadius;
varying vec2 vUv;
void main() {
  float m = 0.0;
  for (int i = -8; i <= 8; i++) {
    float k = float(i);
    if (abs(k) > uRadius) continue;
    float v = texture2D(uTex, vUv + uDir * k * uTexel).r - abs(k) / max(uRadius, 0.35);
    m = max(m, v);
  }
  gl_FragColor = vec4(clamp(m, 0.0, 1.0), 0.0, 0.0, 1.0);
}`;

const POST_VS = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const POST_FS = `
uniform sampler2D uTex;
uniform sampler2D uEdge;
uniform vec2 uRes;
uniform vec2 uTexel;
uniform vec3 uInkCol;
uniform float uInkPx;
uniform float uInkOn;
uniform float uTime, uSat, uWarm, uHalftone, uGrain, uVignette, uPoster, uGlow;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec4 src = texture2D(uTex, vUv);
  vec3 c = src.rgb;
  float alpha = src.a;
  if (uPoster > 0.5) c = floor(c * uPoster + 0.5) / uPoster;
  float lum = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(lum), c, uSat);
  c += vec3(0.045, 0.020, -0.028) * uWarm * (1.0 - lum);
  if (uHalftone > 0.5) {
    vec2 p = vUv * uRes / 4.0;
    vec2 f = fract(p) - 0.5;
    float r = clamp((0.55 - lum) * 1.15, 0.0, 0.70);
    c = mix(c, c * 0.70, step(length(f), r) * step(lum, 0.66));
  }
  if (uGrain > 0.5) {
    float g = hash(vUv * uRes + fract(uTime) * 137.0) - 0.5;
    c += g * 0.06 * uGrain;
  }
  if (uVignette > 0.5) {
    float v = smoothstep(0.92, 0.30, length(vUv - 0.5) * 1.3);
    c *= mix(1.0, v, uVignette * 0.6);
  }
  if (uGlow > 0.01) {
    vec3 bl = vec3(0.0);
    for (int i = 0; i < 8; i += 1) {
      float a = float(i) * 0.7853981;
      vec2 o = vec2(cos(a), sin(a)) * 72.0 * uTexel;
      vec3 sc = texture2D(uTex, vUv + o).rgb;
      bl += sc * max(0.0, dot(sc, vec3(0.299, 0.587, 0.114)) - 0.62);
    }
    c += bl * (uGlow / 8.0);
  }
  float inkA = 0.0;
  if (uInkOn > 0.5) {
    inkA = smoothstep(0.02, 0.40, texture2D(uEdge, vUv).r);
    c = mix(c, uInkCol, inkA);
  }
  gl_FragColor = vec4(c, max(alpha, inkA));
}`;

const GEO = {
  mantle: new THREE.SphereGeometry(0.62, 48, 32),
  eye: new THREE.SphereGeometry(0.135, 26, 18),
  pupil: new THREE.SphereGeometry(0.072, 18, 12),
  leg: new THREE.CylinderGeometry(0.115, 0.05, 0.82, 22, 6),
  fin: new THREE.SphereGeometry(0.19, 26, 18),
  shell: new THREE.SphereGeometry(0.62, 48, 32),
  arm: new THREE.CylinderGeometry(0.1, 0.13, 0.44, 20, 4),
  jaw: new THREE.ConeGeometry(0.115, 0.34, 18, 4),
  cleg: new THREE.CylinderGeometry(0.06, 0.022, 0.62, 18, 5)
};

const GAME_COLOR = { squid: "#99d4ff", crab: "#ffd26b", octopus: "#9fffc9" };

function surfMaterial(color, cfg) {
  const r = ramp(color, cfg.toon);
  const hasMap = Boolean(cfg.map);
  return new THREE.ShaderMaterial({
    vertexShader: hasMap ? "#define USE_MAP\n" + SURF_VS : SURF_VS,
    fragmentShader: hasMap ? "#define USE_MAP\n" + SURF_FS : SURF_FS,
    uniforms: {
      uMap: { value: cfg.map || new THREE.Texture() },
      uMapS: { value: cfg.mapS || new THREE.Vector2(1, 1) },
      uMapO: { value: cfg.mapO || new THREE.Vector2(0, 0) },
      uLit: { value: r.lit }, uMid: { value: r.mid }, uShadow: { value: r.shadow }, uDeep: { value: r.deep },
      uKey: { value: new THREE.Vector3(-0.55, 0.72, 0.62) },
      uRim: { value: r.rim }, uBack: { value: r.back },
      uToon: { value: cfg.toon ? 1 : 0 }, uSoft: { value: 0.035 },
      uRimW: { value: cfg.rim }, uBackW: { value: cfg.backRim },
      uAlpha: { value: cfg.alpha === undefined ? 1 : cfg.alpha }
    }
  });
}
function hullMaterial(hex, thick, cfg) {
  const mode = cfg.inkHull ? "thin" : "off";
  const thickMode = false;
  return new THREE.ShaderMaterial({
    vertexShader: HULL_VS,
    fragmentShader: HULL_FS,
    uniforms: {
      uThick: { value: mode === "off" ? 0 : thick * (thickMode ? 2.9 : 1) },
      uColor: { value: thickMode ? new THREE.Color("#04030a") : ramp(hex, cfg.toon).edge },
      uAlpha: { value: thickMode ? 1 : 0.8 }
    },
    side: THREE.BackSide
  });
}
function addHull(parent, mesh, geo, thick, cfg, color) {
  const hull = new THREE.Mesh(geo, hullMaterial(color, thick, cfg));
  hull.scale.copy(mesh.scale);
  hull.position.copy(mesh.position);
  hull.rotation.copy(mesh.rotation);
  parent.add(hull);
  return hull;
}

function buildSquid(cfg, baseHex) {
  const group = new THREE.Group();
  const body = surfMaterial(baseHex, cfg);
  const eyeMat = surfMaterial("#f6fbff", cfg);
  const pupilMat = surfMaterial("#141020", cfg);

  const mantle = new THREE.Mesh(GEO.mantle, body);
  mantle.scale.set(1, 1.22, 0.92);
  mantle.position.y = 0.6;
  addHull(group, mantle, GEO.mantle, 0.022, cfg, baseHex);
  group.add(mantle);

  for (const side of [-1, 1]) {
    const fin = new THREE.Mesh(GEO.fin, body);
    fin.scale.set(0.9, 0.55, 0.42);
    fin.position.set(side * 0.56, 0.92, -0.06);
    fin.rotation.z = side * 0.5;
    addHull(group, fin, GEO.fin, 0.014, cfg, baseHex);
    group.add(fin);

    const eye = new THREE.Mesh(GEO.eye, eyeMat);
    eye.scale.set(1, 1.12, 0.72);
    eye.position.set(side * 0.23, 0.6, 0.47);
    addHull(group, eye, GEO.eye, 0.010, cfg, "#f6fbff");
    group.add(eye);

    const pupil = new THREE.Mesh(GEO.pupil, pupilMat);
    pupil.position.set(side * 0.24, 0.58, 0.57);
    addHull(group, pupil, GEO.pupil, 0.006, cfg, "#141020");
    group.add(pupil);
  }

  const legs = [];
  [-0.5, -0.3, -0.1, 0.1, 0.3, 0.5].forEach((x, i) => {
    const pivot = new THREE.Group();
    pivot.position.set(x * 0.82, 0.2, i % 2 ? 0.1 : -0.08);
    pivot.rotation.z = x * 0.62;
    pivot.rotation.x = i % 2 ? 0.24 : -0.18;
    const leg = new THREE.Mesh(GEO.leg, body);
    leg.position.y = -0.42;
    addHull(pivot, leg, GEO.leg, 0.014, cfg, baseHex);
    pivot.add(leg);
    group.add(pivot);
    legs.push(pivot);
  });
  group.userData.legs = legs;
  return group;
}

function buildCrab(cfg, baseHex) {
  const group = new THREE.Group();
  const body = surfMaterial(baseHex, cfg);
  const eyeMat = surfMaterial("#f6fbff", cfg);
  const pupilMat = surfMaterial("#141020", cfg);

  const shell = new THREE.Mesh(GEO.shell, body);
  shell.scale.set(1.42, 0.78, 0.98);
  shell.position.y = 0.5;
  addHull(group, shell, GEO.shell, 0.022, cfg, baseHex);
  group.add(shell);

  const brow = new THREE.Mesh(GEO.shell, body);
  brow.scale.set(0.62, 0.3, 0.62);
  brow.position.set(0, 0.78, 0.24);
  addHull(group, brow, GEO.shell, 0.016, cfg, baseHex);
  group.add(brow);

  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(GEO.eye, eyeMat);
    eye.scale.set(0.86, 1, 0.7);
    eye.position.set(side * 0.25, 0.76, 0.42);
    addHull(group, eye, GEO.eye, 0.010, cfg, "#f6fbff");
    group.add(eye);

    const pupil = new THREE.Mesh(GEO.pupil, pupilMat);
    pupil.position.set(side * 0.26, 0.76, 0.52);
    addHull(group, pupil, GEO.pupil, 0.006, cfg, "#141020");
    group.add(pupil);

    const armPivot = new THREE.Group();
    armPivot.position.set(side * 0.72, 0.5, 0.26);
    armPivot.rotation.z = side * 1.15;
    armPivot.rotation.x = -0.35;
    const arm = new THREE.Mesh(GEO.arm, body);
    arm.position.y = 0.2;
    addHull(armPivot, arm, GEO.arm, 0.014, cfg, baseHex);
    armPivot.add(arm);
    for (const jawSide of [-1, 1]) {
      const jawPivot = new THREE.Group();
      jawPivot.position.set(0, 0.42, 0);
      jawPivot.rotation.z = jawSide * 0.42;
      const jaw = new THREE.Mesh(GEO.jaw, body);
      jaw.position.y = 0.16;
      addHull(jawPivot, jaw, GEO.jaw, 0.012, cfg, baseHex);
      jawPivot.add(jaw);
      armPivot.add(jawPivot);
    }
    armPivot.userData.claw = side;
    group.add(armPivot);
    (group.userData.claws = group.userData.claws || []).push(armPivot);
  }

  const legs = [];
  for (const side of [-1, 1]) {
    [-0.16, 0.14, 0.4].forEach((z, i) => {
      const pivot = new THREE.Group();
      pivot.position.set(side * 0.6, 0.34, z);
      pivot.rotation.z = side * (0.7 + i * 0.16);
      pivot.rotation.x = -0.2 + i * 0.22;
      const leg = new THREE.Mesh(GEO.cleg, body);
      leg.position.y = -0.3;
      addHull(pivot, leg, GEO.cleg, 0.012, cfg, baseHex);
      pivot.add(leg);
      group.add(pivot);
      legs.push(pivot);
    });
  }
  group.userData.legs = legs;
  return group;
}



const SHAPES = {
  ufo: { path(c) {
    c.beginPath(); c.moveTo(-26, 4); c.quadraticCurveTo(0, -12, 26, 4);
    c.quadraticCurveTo(0, 20, -26, 4); c.closePath(); } },
  player: { path(c) {
    c.beginPath(); c.moveTo(0, -11); c.lineTo(4, -3); c.lineTo(12, 1); c.lineTo(28, 7);
    c.lineTo(16, 9); c.lineTo(6, 6); c.lineTo(-6, 6); c.lineTo(-16, 9);
    c.lineTo(-28, 7); c.lineTo(-12, 1); c.lineTo(-4, -3); c.closePath(); } },
  scrap: { path(c) {
    c.beginPath(); c.moveTo(-22, 18); c.lineTo(-18, -6); c.lineTo(-6, -14); c.lineTo(14, -14);
    c.lineTo(22, -2); c.lineTo(22, 18); c.closePath(); } },
  sentry: { path(c) {
    c.beginPath(); c.moveTo(0, -20); c.lineTo(6, -8); c.lineTo(12, -12); c.lineTo(8, -2);
    c.lineTo(12, 10); c.lineTo(5, 8); c.lineTo(0, 20); c.lineTo(-5, 8); c.lineTo(-12, 10);
    c.lineTo(-8, -2); c.lineTo(-12, -12); c.lineTo(-6, -8); c.closePath(); } },
  skull: { path(c) {
    c.beginPath(); c.moveTo(-20, -10); c.quadraticCurveTo(-22, -19, 0, -19);
    c.quadraticCurveTo(22, -19, 20, -10); c.quadraticCurveTo(14, 2, 10, 4);
    c.lineTo(10, 14); c.lineTo(-10, 14); c.lineTo(-10, 4); c.quadraticCurveTo(-14, 2, -20, -10);
    c.closePath(); } },
  viper: { path(c) {
    c.beginPath(); c.moveTo(0, -12); c.lineTo(8, -4); c.lineTo(26, -9); c.lineTo(16, 2);
    c.lineTo(6, 6); c.lineTo(0, 14); c.lineTo(-6, 6); c.lineTo(-16, 2); c.lineTo(-26, -9);
    c.lineTo(-8, -4); c.closePath(); } },
  box: { path(c) {
    c.beginPath(); c.moveTo(-12, -8);
    c.arc(-8, -8, 4, Math.PI, Math.PI * 1.5);
    c.arc(8, -8, 4, Math.PI * 1.5, 0);
    c.arc(8, 8, 4, 0, Math.PI * 0.5);
    c.arc(-8, 8, 4, Math.PI * 0.5, Math.PI);
    c.closePath(); } },
  turtle: { path(c) {
    c.beginPath(); c.moveTo(-38, 10); c.quadraticCurveTo(-40, -26, 0, -28);
    c.quadraticCurveTo(40, -26, 38, 10); c.quadraticCurveTo(20, 22, 0, 22);
    c.quadraticCurveTo(-20, 22, -38, 10); c.closePath(); } }
};

function shapeOf(def) {
  const sh = new THREE.Shape();
  const c = {
    beginPath() {},
    closePath() { sh.closePath(); },
    moveTo(x, y) { sh.moveTo(x, y); },
    lineTo(x, y) { sh.lineTo(x, y); },
    quadraticCurveTo(a, b, x, y) { sh.quadraticCurveTo(a, b, x, y); },
    arc(x, y, r, a0, a1, ccw) { sh.absarc(x, y, r, a0, a1, !!ccw); }
  };
  def.path(c);
  return sh;
}

function bodyFromShape(name, cfg, hex, group) {
  const shape = shapeOf(SHAPES[name]);
  const probe = new THREE.ShapeGeometry(shape, 16);
  probe.computeBoundingBox();
  const pb = probe.boundingBox;
  probe.dispose();
  const span = Math.max(pb.max.x - pb.min.x, pb.max.y - pb.min.y);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: span * 0.30, bevelEnabled: true, bevelThickness: span * 0.055,
    bevelSize: span * 0.05, bevelSegments: 3, curveSegments: 18
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, cfg));
  addHull(group, mesh, geo, 0.022, cfg, hex);
  group.add(mesh);
  return { geo, span, front: span * 0.21 };
}

function finishMob(group, target) {
  const box = new THREE.Box3().setFromObject(group);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const k = target / Math.max(size.x, size.y, size.z);
  const outer = new THREE.Group();
  group.scale.setScalar(k);
  group.position.set(-center.x * k, -center.y * k, -center.z * k);
  outer.add(group);
  return outer;
}

function part(group, geo, hex, cfg, x, y, z, thick, sx, sy, sz) {
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, cfg));
  mesh.position.set(x, y, z);
  if (sx) mesh.scale.set(sx, sy, sz);
  addHull(group, mesh, geo, thick || 0.012, cfg, hex);
  group.add(mesh);
  return mesh;
}

function buildUfo(cfg, hex) {
  const g = new THREE.Group();
  const b = bodyFromShape("ufo", cfg, hex, g);
  const dome = new THREE.SphereGeometry(11, 28, 18);
  part(g, dome, "#f2f8ff", cfg, 0, 8.5, 0, 0.012, 1, 0.72, 0.9);
  const light = new THREE.SphereGeometry(2.6, 16, 12);
  [-14, 0, 14].forEach((x) => part(g, light, "#ffe066", cfg, x, -3.5, 7, 0.008));
  part(g, new THREE.TorusGeometry(19, 2.1, 10, 34), hex, cfg, 0, 2, 0, 0.010, 1, 0.55, 1);
  return finishMob(g, 2.3);
}

function buildPlayer(cfg, hex) {
  const g = new THREE.Group();
  const b = bodyFromShape("player", cfg, hex, g);
  part(g, new THREE.SphereGeometry(4.4, 22, 14), "#dff6ff", cfg, 0, 1.5, 3.5, 0.010, 1, 0.85, 1.5);
  const tip = new THREE.BoxGeometry(4, 2.4, 6);
  [-24, 24].forEach((x) => part(g, tip, hex, cfg, x, 4.5, 0, 0.010));
  part(g, new THREE.ConeGeometry(3.2, 7, 16), hex, cfg, 0, -8, 0, 0.010, 1, 1, 1);
  g.userData.nose = true;
  return finishMob(g, 2.3);
}

function buildScrap(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("scrap", cfg, hex, g);
  const wheel = new THREE.CylinderGeometry(5, 5, 4.6, 20);
  const wheels = [];
  [-12, 1, 14].forEach((x) => {
    const m = part(g, wheel, "#3a3f52", cfg, x, -14, 0, 0.010);
    m.rotation.x = Math.PI / 2;
    wheels.push(m);
  });
  g.userData.legs = wheels;
  part(g, new THREE.BoxGeometry(12, 4, 7), hex, cfg, 8, 12, 2, 0.010);
  part(g, new THREE.SphereGeometry(3, 16, 12), "#ffe066", cfg, -12, 8, 6, 0.008);
  return finishMob(g, 2.3);
}

function buildSentry(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("sentry", cfg, hex, g);
  const spike = new THREE.ConeGeometry(2.6, 9, 14);
  [[-13, 0, 1], [13, 0, -1]].forEach(([x, y, s]) => {
    const m = part(g, spike, "#e8fff0", cfg, x, y, 2, 0.010);
    m.rotation.z = s * Math.PI / 2;
  });
  part(g, new THREE.SphereGeometry(3.4, 18, 12), "#ffe066", cfg, 0, -2, 6, 0.008);
  part(g, new THREE.SphereGeometry(1.7, 14, 10), "#141020", cfg, 0, -2, 8.5, 0.006);
  return finishMob(g, 2.3);
}

function buildSkull(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("skull", cfg, hex, g);
  const eye = new THREE.SphereGeometry(6, 22, 14);
  [-9, 9].forEach((x) => part(g, eye, "#0d0d14", cfg, x, -6, 5, 0.010, 1, 1, 0.6));
  const tooth = new THREE.BoxGeometry(3, 6, 5);
  [-6, -2, 2, 6].forEach((x) => part(g, tooth, "#f2f2f8", cfg, x, 11, 3, 0.008));
  part(g, new THREE.BoxGeometry(22, 3.4, 6), "#0d0d14", cfg, 0, 6.5, 4, 0.008);
  return finishMob(g, 2.3);
}

function buildViper(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("viper", cfg, hex, g);
  const wing = new THREE.BoxGeometry(22, 3, 9);
  const wings = [];
  [-15, 15].forEach((x) => {
    const m = part(g, wing, hex, cfg, x, 2, -2, 0.010);
    m.rotation.z = x > 0 ? -0.22 : 0.22;
    wings.push(m);
  });
  g.userData.claws = wings;
  part(g, new THREE.SphereGeometry(5.4, 20, 14), hex, cfg, 0, -10, 3, 0.010, 1, 0.9, 1.1);
  part(g, new THREE.ConeGeometry(2.4, 6, 14), "#ffe066", cfg, 0, -16, 3, 0.008);
  part(g, new THREE.SphereGeometry(1.5, 12, 8), "#141020", cfg, 2.4, -11, 7, 0.006);
  return finishMob(g, 2.3);
}

function buildTurtle(cfg, hex) {
  const g = new THREE.Group();
  bodyFromShape("turtle", cfg, hex, g);
  const rib = new THREE.BoxGeometry(2.6, 44, 4);
  [-24, -8, 8, 24].forEach((x) => {
    const m = part(g, rib, hex, cfg, x, 0, 9, 0.010);
    m.rotation.z = x * 0.012;
  });
  part(g, new THREE.SphereGeometry(7, 22, 14), "#9fffc9", cfg, 0, -16, 6, 0.010, 1.1, 0.8, 1);
  [-3, 3].forEach((x) => part(g, new THREE.SphereGeometry(1.9, 12, 8), "#141020", cfg, x, -18, 11, 0.006));
  const foot = new THREE.SphereGeometry(6, 18, 12);
  const feet = [];
  [-30, 30].forEach((x) => {
    const m = part(g, foot, "#2a8f5c", cfg, x, -14, 4, 0.010, 1.2, 0.7, 1);
    feet.push(m);
  });
  g.userData.claws = feet;
  return finishMob(g, 2.3);
}

function letterTexture(label, color) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = color || "#0d0d14";
  g.font = "bold 92px 'Courier New', monospace";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(label, 64, 70);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

const QUALITY_COLOR = { 1: "#ffe066", 2: "#62ffa1", 3: "#ff3366" };

function dropBuilder(letter, hex, quality) {
  return function (cfg, color) {
    const g = new THREE.Group();
    const body = bodyFromShape("box", cfg, color || hex, g);
    const label = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 15),
      new THREE.MeshBasicMaterial({ map: letterTexture(letter), transparent: true, depthWrite: false })
    );
    label.position.set(0, 0, body.front + body.span * 0.055 + 0.4);
    g.add(label);
    if (quality) {
      const qc = QUALITY_COLOR[quality] || QUALITY_COLOR[1];
      const bar = new THREE.BoxGeometry(31, 2.2, 2.2);
      const vbar = new THREE.BoxGeometry(2.2, 31, 2.2);
      [[-15.5, 0, vbar], [15.5, 0, vbar]].forEach(([x, y, geo]) => {
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: qc }));
        m.position.set(x, y, body.front + 1.2);
        g.add(m);
      });
      [[0, -15.5, bar], [0, 15.5, bar]].forEach(([x, y, geo]) => {
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: qc }));
        m.position.set(x, y, body.front + 1.2);
        g.add(m);
      });
    }
    return finishMob(g, 2.0);
  };
}

export const DROPS = {
  drop_rapid: dropBuilder("R", "#ff6655", 0),
  drop_double: dropBuilder("D", "#ffb04c", 0),
  drop_laser: dropBuilder("L", "#6fdcff", 0),
  drop_shield: dropBuilder("S", "#62ffa1", 0),
  drop_slow: dropBuilder("Z", "#bf9cff", 0),
  drop_bomb: dropBuilder("B", "#ffe66a", 0),
  drop_loot: dropBuilder("C", "#ffd166", 2)
};

export const MOBS = {
  squid: buildSquid, crab: buildCrab, ufo: buildUfo, player: buildPlayer,
  scrap: buildScrap, sentry: buildSentry, skull: buildSkull, viper: buildViper, turtle: buildTurtle,
  drop_rapid: DROPS.drop_rapid, drop_double: DROPS.drop_double, drop_laser: DROPS.drop_laser,
  drop_shield: DROPS.drop_shield, drop_slow: DROPS.drop_slow, drop_bomb: DROPS.drop_bomb,
  drop_loot: DROPS.drop_loot
};
export const MOB_LABEL = {
  squid: "SQUID", crab: "CRAB (A: CURRENT, SQUAT)", ufo: "UFO", player: "PLAYER SHIP",
  scrap: "MINIBOSS: SCRAPLING", sentry: "MINIBOSS: SPINE SENTRY",
  skull: "BOSS: SKULL CRUISER", viper: "BOSS: WINGED VIPER", turtle: "BOSS: TURTLE BULWARK",
  drop_rapid: "LOOT: RAPID FIRE (R)", drop_double: "LOOT: DOUBLE SHOT (D)", drop_laser: "LOOT: LASER (L)",
  drop_shield: "LOOT: SHIELD (S)", drop_slow: "LOOT: TIME WARP (Z)", drop_bomb: "LOOT: BOMB (B)",
  drop_loot: "LOOT: CRATE (C, quality 2)"
};
Object.assign(GAME_COLOR, {
  ufo: "#ff55aa", player: "#78ff78", scrap: "#99d4ff", sentry: "#9fffc9",
  skull: "#ff3366", viper: "#2fc96f", turtle: "#2fc96f",
  drop_rapid: "#ff6655", drop_double: "#ffb04c", drop_laser: "#6fdcff",
  drop_shield: "#62ffa1", drop_slow: "#bf9cff", drop_bomb: "#ffe66a", drop_loot: "#ffd166"
});
export const MOCKUP_COLOR = { squid: "#ff5c8a", crab: "#42d3e6" };
export { BASE_PINK, BASE_BLUE, GAME_COLOR, ramp, hexToHsl, toward, three,
         SURF_VS, SURF_FS, HULL_VS, HULL_FS, EDGE_FS, DIL_FS, POST_VS, POST_FS,
         GEO, surfMaterial, hullMaterial, addHull, buildSquid, buildCrab, part, finishMob, bodyFromShape, shapeOf, SHAPES };
