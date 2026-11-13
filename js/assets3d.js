import * as THREE from "../mockups/vendor/three.module.js";
import { MOBS as BASE_MOBS, surfMaterial, addHull, finishMob } from "../mockups/toon3d.js";
import { MOB_V2 } from "../mockups/toon3d.v2.js";
import { buildBanshee, buildStinger } from "../mockups/banshees3d.js";

const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const TARGET = 2.35;
const FIT = 1.35;
const FIT_KEY = { scrap: 1.2, sentry: 1.2, skull: 1.15, viper: 1.2, stinger: 1.65,
  squid: 1.15, zealot: 1.6, idol: 1.6, "ABYSSAL SQUID": 1.15 };
const BUILDERS = Object.assign({}, BASE_MOBS, MOB_V2, { invSquid: BASE_MOBS.squid });

const KEY = {
  squid: "invSquid", octopus: "invSquid", octo: "invSquid", crab: "crab_b",
  ufo: "ufo", player: "player",
  scrap: "scrap", sentry: "sentry", skull: "skull", viper: "viper",
  "ABYSSAL SQUID": "squid", zealot: "zealot", idol: "idol",
  rapid: "drop_rapid", double: "drop_double", laser: "drop_laser", shield: "drop_shield",
  slow: "drop_slow", bomb: "drop_bomb", loot: "drop_loot",
  banshee: "banshee", ghost: "ghost", stinger: "stinger"
};

// ---- BULWARK: the player hull (ported from mockups/ship-looks.html) ----
// Heavy bomber silhouette: wide flat hull, twin booms, big dome, four pod jets, and a
// nose gun rig that IS the single <-> double animation. Baked palette is JADE INLAY, the
// dark-steel + jade scheme: steel hull, deep green-steel structure, mint trim, jade
// rim-light. Model units are the game's own space, same as buildPlayerC (hull 30 wide),
// so the crack plate, the glow pass and finishMob(TARGET) all work unchanged.
const BULWARK = {
  hull: { lit: "#a8bcd2", mid: "#52657c", shadow: "#2a3646", deep: "#141c26", rim: "#d8fff0", back: "#3fe0b0" },
  dark: { lit: "#2f5f52", mid: "#16332e", shadow: "#0b1f1c", deep: "#05100e", rim: "#5fd8b8" },
  accent: { lit: "#d8fff0", mid: "#4fe8b4", shadow: "#1a9a76", deep: "#0a4a38", rim: "#f0fff8", back: "#4fe8b4" },
  cockpit: { lit: "#eaffff", mid: "#8ff5d4", shadow: "#20b088", deep: "#0a5a44" },
  plume: { lit: "#eafff8", mid: "#7dffd0", shadow: "#1a9a76", deep: "#08382c" },
  core: { lit: "#ffffff", mid: "#eafff8", shadow: "#7dffd0", deep: "#7dffd0" },
  outline: "#071219"
};
// The DOUBLE-shot offsets, in model units: js/player.js fires at +-14 px from the hitbox
// centre; the shipped hull spans 72 units and draws 56 * FIT(1.35) = 75.6 px wide, so
// 14 px / (75.6 / 72) = 13.33 units puts the gun pair exactly over the bullet spawn lines.
const GUN_X = 14 / (75.6 / 72);
const GUN_DUR = 0.5;   // seconds, single <-> double
const easeIO = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

function rgb255(hex) {
  const n = hex.replace("#", "");
  return [parseInt(n.slice(0, 2), 16) / 255, parseInt(n.slice(2, 4), 16) / 255,
    parseInt(n.slice(4, 6), 16) / 255];
}
// a surf material painted with an explicit ramp (the game's builders derive the ramp from
// one hex; the Bulwark's palette is authored stop-by-stop, so the uniforms are set direct)
function palMat(cfg, P, o) {
  const m = surfMaterial(P.mid, cfg);
  const u = m.uniforms;
  const set = (n, hex) => {
    if (hex && u[n]) { const c = rgb255(hex); u[n].value.setRGB(c[0], c[1], c[2]); }
  };
  set("uLit", P.lit); set("uShadow", P.shadow); set("uDeep", P.deep);
  set("uRim", P.rim); set("uBack", P.back);
  if (o) {
    if (o.alpha !== undefined) { u.uAlpha.value = o.alpha; m.transparent = true; m.depthWrite = false; }
    if (o.flat) { u.uRimW.value = 0; u.uBackW.value = 0; }
  }
  return m;
}
function buildBulwark(cfg, hex, opts) {
  const o = opts || {};
  const g = new THREE.Group();
  const P = BULWARK;
  // part + its dark outline shell, all at the Bulwark's authored palette
  const add = (geo, pal_, pos, rot, po) => {
    const m = new THREE.Mesh(geo, palMat(cfg, pal_, po));
    m.position.set(pos[0], pos[1], pos[2]);
    if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
    if (po && po.scale) m.scale.set(po.scale[0], po.scale[1], po.scale[2]);
    let sh = null;
    // translucent parts (the jets) wear no shell, same as the mockup
    if (!po || (!po.alpha || po.keepShell)) {
      sh = addHull(g, m, geo, 0.012, cfg, P.outline);
      const oc = rgb255(P.outline);
      sh.material.uniforms.uColor.value.setRGB(oc[0], oc[1], oc[2]);
    }
    g.add(m);
    return { m, sh };
  };
  // hull: wide flat body, tail block, twin booms (x span 71 units = the shipped width)
  add(new THREE.BoxGeometry(61.5, 9, 16), P.hull, [0, 0, 1]);
  add(new THREE.BoxGeometry(72, 6, 8.8), P.hull, [0, -1, -5]);
  add(new THREE.BoxGeometry(9.6, 10.2, 24.8), P.hull, [-27, 0, -3]);
  add(new THREE.BoxGeometry(9.6, 10.2, 24.8), P.hull, [27, 0, -3]);
  add(new THREE.BoxGeometry(44.4, 7.2, 7.2), P.dark, [0, 0, -14]);
  add(new THREE.SphereGeometry(9.4, 40, 22, 0, Math.PI * 2, 0, Math.PI * 0.52), P.cockpit,
    [0, 4, 7], null, { scale: [0.95, 0.5, 0.85] });
  // Damage crack plate, the shipped hull's trick: a plane just in front of the side the
  // camera sees (model -y), uv straight onto the screen box, uMap swapped by render().
  const plateMat = surfMaterial(P.hull.mid,
    o.map ? Object.assign({}, cfg, { map: o.map, mapS: o.mapS, mapO: o.mapO }) : cfg);
  ["lit", "shadow", "deep", "rim", "back"].forEach((k) => {
    const c = rgb255(P.hull[k]);
    plateMat.uniforms["u" + k[0].toUpperCase() + k.slice(1)].value.setRGB(c[0], c[1], c[2]);
  });
  if (o.map) plateMat.uniforms.uTintMul.value.multiplyScalar(1 / 1.25);
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(61.5, 16), plateMat);
  plateMat.side = THREE.DoubleSide;
  plate.rotation.x = Math.PI / 2;
  plate.position.set(0, -4.9, 1);
  g.add(plate);
  g.userData.shell = plate;
  plate.userData.crackSkin = "ship";
  // gun bar: the rail the guns ride in and out of; spans the whole pair (2*GUN_X + a gun)
  add(new THREE.BoxGeometry(46.5, 6, 8), P.dark, [0, 0.5, 11.5]);
  // one gun = housing + barrel + muzzle, tagged with its home transform. The housing
  // wears the HULL colour (the bar behind it is dark, so a dark gun vanished into it) and
  // both ends of the animation use the SAME geometry, so the pair reads as the centre
  // gun, doubled. The housings sit FORWARD of the hull nose so each gun silhouettes.
  const rig = { center: [], side: [] };
  const gun = (list, x, z) => {
    const push = (r, zz) => list.push({ m: r.m, sh: r.sh, x0: x, y0: 1, z0: zz });
    push(add(new THREE.BoxGeometry(18.6, 10.8, 9.92), P.hull, [x, 1, z], null, { keepShell: true }), z);
    push(add(new THREE.CylinderGeometry(1.984, 1.984, 10, 14), P.dark,
      [x, 1, z + 7], [Math.PI / 2, 0, 0], { keepShell: true }), z + 7);
    push(add(new THREE.CylinderGeometry(2.72, 2.72, 3.4, 14), P.accent,
      [x, 1, z + 11], [Math.PI / 2, 0, 0], { keepShell: true }), z + 11);
  };
  gun(rig.center, 0, 14);
  gun(rig.side, -GUN_X, 13);
  gun(rig.side, GUN_X, 13);
  g.userData.guns = rig;
  // four engine pods, plume + core; render() pulses them (userData.plume)
  const plume = [];
  [[-15.4, -9], [15.4, -9], [-33, -9], [33, -9]].forEach(([x, z]) => {
    add(new THREE.CylinderGeometry(2.56, 2.56, 10, 18), P.dark, [x, -1, z], [Math.PI / 2, 0, 0]);
    const j = add(new THREE.CylinderGeometry(1.92, 1.92, 11, 14), P.plume,
      [x, -1, z - 5.5], [-Math.PI / 2, 0, 0], { alpha: 0.85, flat: true });
    const c = add(new THREE.CylinderGeometry(0.864, 0.864, 6.82, 12), P.core,
      [x, -1, z - 4.41], [-Math.PI / 2, 0, 0], { alpha: 0.9, flat: true });
    j.m.renderOrder = 3;
    c.m.renderOrder = 3;
    plume.push({ m: j.m }, { m: c.m, core: true });
  });
  g.userData.plume = plume;
  g.userData.spin = [];
  g.userData.claws = [];
  return finishMob(g, TARGET);
}
BUILDERS.player = buildBulwark;
// the gunship this file used to ship, kept under its builder's name for the mockups
// (mockups/ship-looks.html harvests its parts as the clone kit)
BUILDERS.playerC = MOB_V2.player;

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

// The ship's own damage pattern. The crab gets a radial impact star (one hit, starburst, arc
// ring); a hull that took a hit gets a running fracture that runs the length of the ship, with
// en-echelon cracks ahead of it and spall chips - thinner lines, wider reach, no ring.
// uv here is the plate's screen box (u right, v up), so the pattern is laid out in screen space.
// Hull-plate crack skins. Each is drawn on a small canvas with the mip chain off (the plate is
// only ~32 px on screen, and mipmapping filters a thin crack back to plain white). "ship" is the
// one in play; ship2..ship4 are the extra patterns to pick from. All of them, like the crab's
// shell crack, start at an impact core with the lines thickest there and tapering outward.
let shipCrackTex = null;
function shipCrackTexture() {
  if (shipCrackTex) return shipCrackTex;
  // The crab's crack, on the ship's hull: same impact core, same five rays, same taper (85 -> 55
  // -> 30 of a 1024-wide shell = 21 -> 14 -> 7.5 here), same arc ring. The star is drawn in the
  // shell's uv space (u right, v up) and centred on the hull; the canvas is small with the mip
  // chain off because the plate is only ~32 px on screen.
  const cv = document.createElement("canvas");
  cv.width = 256; cv.height = 128;
  const g2 = cv.getContext("2d");
  g2.fillStyle = "#ffffff";
  g2.fillRect(0, 0, 256, 128);
  g2.strokeStyle = "rgba(10,6,2,0.92)";
  g2.lineCap = "round";
  const SX = 10 / 36;
  const SY = 10 / 18;
  const ix = 0.52, iy = 0.05;
  const ux = (x) => x * SX + 0.5;
  const uy = (y) => y * SY + 0.5;
  const X = (u) => u * 256;
  const Y = (v) => (1 - v) * 128;
  const chain = (x, y, ang, segs) => {
    segs.forEach(([len, bend, w], i) => {
      const nx = x + Math.cos(ang) * len;
      const ny = y + Math.sin(ang) * len;
      g2.lineWidth = w / 4;
      g2.beginPath();
      g2.moveTo(X(ux(x)), Y(uy(y)));
      if (i > 0) g2.lineTo(X(ux(x)), Y(uy(y)));
      g2.lineTo(X(ux(nx)), Y(uy(ny)));
      g2.stroke();
      x = nx; y = ny; ang += bend;
    });
  };
  chain(ix, iy, -2.35, [[0.42, -0.25, 85], [0.5, 0.2, 55], [0.42, 0.05, 30]]);
  chain(ix, iy, -1.5, [[0.36, 0.3, 85], [0.45, 0.15, 55], [0.4, 0.05, 30]]);
  chain(ix, iy, -0.4, [[0.42, -0.15, 85], [0.36, 0.25, 55], [0.3, 0.1, 30]]);
  chain(ix, iy, 2.6, [[0.4, 0.18, 85], [0.36, -0.22, 55], [0.3, -0.1, 30]]);
  chain(ix, iy, 1.75, [[0.24, -0.3, 85], [0.2, 0.3, 55]]);
  g2.lineWidth = 16;
  g2.beginPath();
  g2.arc(X(ux(ix)), Y(uy(iy)), 0.42 * SX * 256, -2.5, -1.25, false);
  g2.stroke();
  shipCrackTex = new THREE.CanvasTexture(cv);
  shipCrackTex.wrapS = THREE.ClampToEdgeWrapping;
  shipCrackTex.wrapT = THREE.ClampToEdgeWrapping;
  shipCrackTex.generateMipmaps = false;
  shipCrackTex.minFilter = THREE.LinearFilter;
  return shipCrackTex;
}

// which crack a shell mesh wears: the hull plate wears the ship's copy of the crab's star,
// every other shell (crab, carapaces) wears the star itself
function crackSkin(shellMesh) {
  return shellMesh.userData.crackSkin === "ship" ? shipCrackTexture() : crackTexture();
}

function build(key, color, quality) {
  if (key === "banshee") return buildBanshee("wail", RIG, color);
  if (key === "ghost") {
    const g = buildBanshee("ghost", RIG, color);
    g.userData.__ghost = true;
    patchGhost(g);   // phase shader patch on every part (see below)
    ensureProxy(g);  // depth-prepass clone for the fused silhouette mask
    return g;
  }
  if (key === "stinger") return buildStinger(RIG, color);
  const mesh = key === "crab"
    ? BUILDERS.crab_b(RIG, color, { map: blankTexture(),
      mapS: new THREE.Vector2(1 / 36, 1 / 18), mapO: new THREE.Vector2(0.5, 0.5) })
    : key === "player" || key === "playerC"
    ? BUILDERS[key](RIG, color, { map: blankTexture(),
      mapS: new THREE.Vector2(1, 1), mapO: new THREE.Vector2(0, 0) })
    : BUILDERS[KEY[key] || key](RIG, color, quality);
  return mesh;
}

// ---- GHOST PHASE VISUALS (ported from mockups/ghost-hp-visuals.html) ----
// The 15-part toon ghost cannot self-blend into one silhouette: overlapping
// parts double-blend at shared pixels (head-over-body seam, internal edges).
// The fix is the research-backed pair: a constant-colour DEPTH PREPASS (mask
// pass: every part writes the same white, so internal structure cannot exist)
// + a SINGLE alpha layer (one screen-space quad samples the fused mask).
// SHIMMER (1 HP flicker) and FADE (phase window) both render through the quad.
const PHASE_SNIP = `float a = uAlpha;
  if (uPhase > 0.001) {
    float flatAmt = clamp(uPhase * 3.0, 0.0, 1.0);
    float hollow = (uMode > 1.5) ? 1.0 : 0.0;
    vec2 suv = gl_FragCoord.xy / uRes;
    float m = texture2D(uMask, suv).r;
    float px = 3.0;
    float mn = min(m, min(
      min(texture2D(uMask, suv + vec2(px, 0.0) / uRes).r, texture2D(uMask, suv - vec2(px, 0.0) / uRes).r),
      min(texture2D(uMask, suv + vec2(0.0, px) / uRes).r, texture2D(uMask, suv - vec2(0.0, px) / uRes).r)));
    float rim = 1.0 - mn;
    float sa = step(0.02, m) * mix(0.9, 1.0, clamp(rim * (uMode > 2.5 ? 3.0 : 2.0), 0.0, 1.0));
    a = mix(a, a * sa, hollow * uPhase);
    // DETAIL parts (dark eyes/mouth) fade out only in SPECTRAL modes; the FADE
    // keeps the face (eyes/mouth read in the flat fade)
    a *= mix(1.0, 1.0 - uPhase * step(2.5, uMode), uDetail);
    vec3 sc = vec3(0.97, 0.98, 1.0);
    c = mix(c, sc, flatAmt * (1.0 - uDetail * step(uMode, 2.5)));
    c += vec3(1.0) * rim * hollow * uPhase * (uMode > 2.5 ? 1.1 : 0.7);
  }
  gl_FragColor = vec4(c, a);`;

function patchGhost(mesh) {
  const shell = mesh.userData.shell
    || (mesh.children[0] && mesh.children[0].userData && mesh.children[0].userData.shell);
  // the ghost wears NO crack (user call): hide the shell plate
  if (shell) shell.visible = false;
  mesh.traverse((o) => {
    if (!o.isMesh || !o.material.uniforms || o.material.userData.__patched) return;
    o.material.userData.__patched = true;
    const u = o.material.uniforms;
    if (u.uLit) {
      // body part; DARK face parts (eyes/mouth) have a dark mid colour; the crack
      // SHELL PLATE counts as detail too (its open cylinder edge reads as a band)
      o.material.userData.__detail = o === shell
        || (u.uMid.value.r + u.uMid.value.g + u.uMid.value.b) / 3 < 0.35;
      o.material.uniforms.uPhase = { value: 0 };
      o.material.uniforms.uMode = { value: 0 };
      o.material.uniforms.uDetail = { value: o.material.userData.__detail ? 1 : 0 };
      const sz = renderer.getDrawingBufferSize(new THREE.Vector2());
      o.material.uniforms.uMask = { value: null }; // set by updateMaskPass
      o.material.uniforms.uRes = { value: { x: sz.x, y: sz.y } };
      // per-part rim/key/back lights trace the JOINTS (the "internals") - in phase
      // they fade to zero; the phase edge glow comes from the fused mask rim only
      o.material.fragmentShader = "uniform float uPhase;\nuniform float uMode;\nuniform float uDetail;\nuniform sampler2D uMask;\nuniform vec2 uRes;\n"
        + o.material.fragmentShader
          .replace("c += uKey * key * uKeyW;",
            "c += uKey * key * uKeyW * (1.0 - uPhase);")
          .replace("c += uRim * fres * uRimW * (0.30 + 0.70 * max(N.y, 0.0));",
            "c += uRim * fres * uRimW * (0.30 + 0.70 * max(N.y, 0.0)) * (1.0 - uPhase);")
          .replace("c += uBack * back * uBackW;",
            "c += uBack * back * uBackW * (1.0 - uPhase);")
          .replace("gl_FragColor = vec4(c, uAlpha);", PHASE_SNIP);
      o.material.needsUpdate = true;
    } else if (u.uColor) {
      o.material.userData.__hull = true;
      // dark outline hull: fade in the SHADER (the per-frame alpha sync overwrites
      // JS uAlpha writes - a half-visible dark hull reads as an artifact)
      o.material.uniforms.uPhase = { value: 0 };
      o.material.fragmentShader = "uniform float uPhase;\n"
        + o.material.fragmentShader
          .replace("gl_FragColor = vec4(uColor, uAlpha);",
            "gl_FragColor = vec4(uColor, uAlpha * (1.0 - uPhase));");
      o.material.needsUpdate = true;
    }
  });
  mesh.userData.__patched = true;
}

// Depth prepass proxy: deep clone, colour off, depth on. uAlpha is DELETED so
// the per-frame alpha traverse (which would make it transparent + re-order it)
// skips the proxy entirely.
function ensureProxy(mesh) {
  if (mesh.userData.__proxy) return mesh.userData.__proxy;
  const proxy = mesh.clone(true);
  proxy.traverse((o) => {
    if (o.isMesh) {
      // BODY silhouette only: face parts and hull outlines must not write depth
      // (the proxy writes no colour, so anything it occludes shows the dark
      // background through it = a dark rectangle)
      const ud = o.material.userData || {};
      if (ud.__detail || ud.__hull) { o.visible = false; return; }
      o.material = o.material.clone();
      delete o.material.uniforms.uAlpha;
      o.material.colorWrite = false;
      o.material.depthWrite = true;
      o.material.transparent = false;
      o.renderOrder = -10;
    }
  });
  mesh.add(proxy);
  mesh.userData.__proxy = proxy;
  return proxy;
}

// ---- Silhouette mask pass: constant-colour render of the proxies. The RT is
// at DRAWING-BUFFER size (900*dpr): the quad shader samples gl_FragCoord
// (device pixels) / uRes, so mask and screen must share resolution.
let maskRT = null, maskScene = null;
const maskClones = new Map();
function ensureMaskPass() {
  const sz = renderer.getDrawingBufferSize(new THREE.Vector2());
  if (maskRT) {
    // follow the renderer onto a screen with a different devicePixelRatio
    if (maskRT.width !== sz.x || maskRT.height !== sz.y) maskRT.setSize(sz.x, sz.y);
    maskRT.__res.x = sz.x; maskRT.__res.y = sz.y;
    return;
  }
  maskRT = new THREE.WebGLRenderTarget(sz.x, sz.y);
  maskScene = new THREE.Scene();
  maskRT.__res = { x: sz.x, y: sz.y };
}
function updateMaskPass(meshes, active) {
  if (!active) return;
  ensureMaskPass();
  scene.updateMatrixWorld(true);
  const seen = new Set();
  for (const mesh of meshes) {
    seen.add(mesh);
    const proxy = mesh.userData.__proxy;
    if (!proxy) continue;
    let clone = maskClones.get(mesh);
    if (!clone) {
      clone = proxy.clone(true);
      clone.traverse((o) => {
        if (o.isMesh) o.material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
      });
      clone.matrixAutoUpdate = false;
      maskScene.add(clone);
      maskClones.set(mesh, clone);
    }
    clone.visible = true;
    clone.matrix.copy(mesh.matrixWorld);
  }
  maskClones.forEach((clone, mesh) => { if (!seen.has(mesh)) clone.visible = false; });
  renderer.setRenderTarget(maskRT);
  renderer.setClearColor(0x000000, 1);
  renderer.render(maskScene, cam);
  renderer.setRenderTarget(null);
  renderer.setClearColor(0x000000, 0);
  meshes.forEach((mesh) => mesh.traverse((o) => {
    const u = o.material && o.material.uniforms;
    if (u && u.uMask) {
      u.uMask.value = maskRT.texture;
      u.uRes.value.x = maskRT.__res.x;
      u.uRes.value.y = maskRT.__res.y;
    }
  }));
}

// ---- Single-layer phase sprite: ONE screen-space quad per ghost samples the
// fused mask. The parts are hidden in phase, so the silhouette cannot
// double-blend at the head/body seam (the top/bottom split).
let quadMat = null;
function setSubtreeVisible(o, v) {
  if (o.userData.__vis0 === undefined) o.userData.__vis0 = o.visible;
  o.visible = v ? o.userData.__vis0 : false;
  o.children.forEach((c) => setSubtreeVisible(c, v));
}
function ensureQuad(mesh) {
  if (mesh.userData.__quad) return mesh.userData.__quad;
  if (!quadMat) {
    const sz = renderer.getDrawingBufferSize(new THREE.Vector2());
    quadMat = new THREE.ShaderMaterial({
      transparent: true, depthTest: false, depthWrite: false,
      uniforms: {
        uMask: { value: null }, uRes: { value: { x: sz.x, y: sz.y } },
        uPhase: { value: 0 }, uMode: { value: 0 }, uAlpha: { value: 1 }
      },
      vertexShader: "void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: "uniform sampler2D uMask; uniform vec2 uRes; uniform float uPhase; uniform float uMode; uniform float uAlpha;\n"
        + "void main() {\n"
        + "  vec2 suv = gl_FragCoord.xy / uRes;\n"
        + "  float m = texture2D(uMask, suv).r;\n"
        + "  float px = 1.5;\n"
        + "  float mn = min(m, min(\n"
        + "    min(texture2D(uMask, suv + vec2(px, 0.0) / uRes).r, texture2D(uMask, suv - vec2(px, 0.0) / uRes).r),\n"
        + "    min(texture2D(uMask, suv + vec2(0.0, px) / uRes).r, texture2D(uMask, suv - vec2(0.0, px) / uRes).r)));\n"
        + "  float rim = 1.0 - mn;\n"
        // mode 0 = FLAT (SHIMMER): uniform uAlpha inside the fused silhouette.
        // mode 1 = FADE: flat + a whisper of rim on the pale white.
        + "  float a;\n"
        + "  if (uMode < 1.5) a = uAlpha;\n"
        + "  else a = uAlpha * mix(0.9, 1.0, clamp(rim * 1.5, 0.0, 1.0));\n"
        + "  vec3 c = vec3(0.97, 0.98, 1.0) + vec3(1.0) * rim * (uMode > 0.5 ? 0.25 : 0.0);\n"
        + "  gl_FragColor = vec4(c, a * step(0.02, m) * uPhase);\n"
        + "}"
    });
  }
  // per-mesh material clone: each ghost fades on its own clock
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), quadMat.clone());
  quad.scale.set(1.8, 1.8, 1);
  quad.renderOrder = 999;
  quad.visible = false;
  mesh.add(quad);
  mesh.userData.__quad = quad;
  return quad;
}

function applyPhase(mesh, phaseU, mode, ac, flicker) {
  // BOTH phase looks render as the single-layer mask sprite. The 1HP SHIMMER
  // routes through the same quad (flat mode 0, uAlpha = flicker alpha): parts
  // flickering double-blend at the head/body seam -> the top/bottom split.
  const useQuad = phaseU > 0.02 || flicker;
  const proxy = mesh.userData.__proxy;
  if (proxy) proxy.visible = false; // the quad replaces the parts entirely
  const quad = ensureQuad(mesh);
  // NEVER show the quad before the mask pass has fed it a texture: sampling an
  // unbound texture returns WHITE on Chrome -> a solid white square.
  quad.visible = useQuad && !!quad.material.uniforms.uMask.value;
  quad.renderOrder = 999; // the alpha traverse overwrites this to 2 every frame
  if (useQuad) {
    quad.material.uniforms.uPhase.value = phaseU > 0.02 ? phaseU : 1;
    quad.material.uniforms.uMode.value = phaseU > 0.02 ? mode : 0;
    quad.material.uniforms.uAlpha.value = ac;
  }
  // the quad IS the ghost in phase - hide every part so nothing double-blends.
  // EXCEPTION: in FADE mode the face (detail) parts stay visible, drawn ON TOP
  // of the quad, so the eyes/mouth read in the flat fade.
  mesh.children.forEach((c) => {
    if (c === proxy || c === quad) return;
    const isDetail = c.isMesh && c.material.userData && c.material.userData.__detail;
    if (useQuad && mode < 2.5 && isDetail) {
      setSubtreeVisible(c, true);
      c.renderOrder = 1000; // above the quad (999)
    } else {
      setSubtreeVisible(c, !useQuad);
      if (c.isMesh) c.renderOrder = 0;
    }
  });
  mesh.traverse((o) => {
    if (!o.isMesh || !o.material.uniforms) return;
    if (o === quad) return; // the quad's uniforms are set above - don't clobber
    const u = o.material.uniforms;
    // proxy materials keep uPhase (cloned) but have uAlpha deleted - skip them
    if (u.uPhase && u.uAlpha) {
      u.uPhase.value = phaseU;
      if (u.uMode) u.uMode.value = mode;
      // hull + detail fades happen in their shaders (uPhase / uDetail) - the
      // alpha traverse below owns uAlpha
    }
  });
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
    item.crackFade = e.crackFade === undefined ? item.crack : Math.max(0, Math.min(1, e.crackFade));
    item.tilt = e.tilt === undefined ? 0.34 : e.tilt;
    item.guns = e.guns ? 1 : 0;
    item.phaseU = e.phaseU === undefined ? 0 : e.phaseU;
    item.shimmer = e.shimmer ? 1 : 0;
  }
  for (const [id, item] of pool) {
    if (!seen.has(id)) {
      scene.remove(item.mesh);
      maskClones.delete(item.mesh); // drop the mask-pass clone (no wave leak)
      pool.delete(id);
    }
  }
}

let prevT = 0;
function render(t) {
  const dt = Math.max(0.001, Math.min(0.05, (t - prevT) / 1000)) || 0.016;
  prevT = t;
  const phaseMeshes = [];
  let phaseActive = false;
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
    // engine plumes: pulse length + alpha (the Bulwark's jets)
    (parts.plume || []).forEach((p, i) => {
      const w = 0.5 + 0.5 * Math.sin(t / (p.core ? 93 : 150) + i * 1.7);
      p.m.scale.y = 0.8 + 0.34 * w;
      p.m.material.uniforms.uAlpha.value = (p.core ? 0.82 : 0.7) + 0.22 * w;
      p.m.material.transparent = true;
    });
    // BULWARK nose gun rig: single (one centreline gun) <-> double (the pair at +-GUN_X).
    // The centre gun sinks into the hull and fades; the pair rides out of the nose along
    // the gun bar and fades in. Both ends are exact, the middle is a 0.5 s ease.
    const rig = parts.guns;
    if (rig) {
      const tgt = item.guns ? 1 : 0;
      if (item.gunRaw === undefined) item.gunRaw = tgt;
      if (item.gunRaw !== tgt) {
        item.gunRaw += Math.sign(tgt - item.gunRaw) * Math.min(1, dt / GUN_DUR);
        item.gunRaw = Math.max(0, Math.min(1, item.gunRaw));
      }
      const p = easeIO(item.gunRaw);
      const setG = (q, x, dz, s, a) => {
        const vis = a > 0.02;
        q.m.visible = vis;
        if (q.sh) q.sh.visible = vis;
        if (!vis) return;
        q.m.position.set(x, q.y0, q.z0 + dz);
        q.m.scale.setScalar(s);
        q.m.material.uniforms.uAlpha.value = a;
        q.m.material.transparent = a < 0.999;
        if (q.sh) {
          q.sh.position.copy(q.m.position);
          q.sh.scale.copy(q.m.scale);
          q.sh.material.uniforms.uAlpha.value = a * 0.8;
        }
      };
      rig.center.forEach((q) => setG(q, q.x0, -12 * p, 1 - 0.45 * p, Math.max(0, 1 - p * 1.7)));
      rig.side.forEach((q) => setG(q, q.x0 * p, -7 * (1 - p), 0.55 + 0.45 * p,
        Math.max(0, Math.min(1, p * 1.7))));
    }
    const shF = m.userData.shell || (m.children[0] && m.children[0].userData && m.children[0].userData.shell);
    if (item.crackFade !== item.wasCrackFade) {
      if (shF && shF.material.uniforms && shF.material.uniforms.uMapMix) {
        shF.material.uniforms.uMapMix.value = item.crackFade;
      }
      item.wasCrackFade = item.crackFade;
    }
    if (item.glow !== item.wasGlow || item.crack !== item.wasCrack) {
      item.fadeT = 0.3;
      item.wasGlow = item.glow;
      item.wasCrack = item.crack;
      const shM = m.userData.shell || (m.children[0] && m.children[0].userData && m.children[0].userData.shell);
      if (shM) shM.material.uniforms.uMap.value = item.crack ? crackSkin(shM) : blankTexture();
      m.traverse((o) => {
        if (o.isMesh && o.material.uniforms && o.material.uniforms.uRim) {
          if (!o.material.userData.rim0) o.material.userData.rim0 = o.material.uniforms.uRim.value.clone();
          if (item.glow) {
            const u = o.material.uniforms;
            if (!o.material.userData.col0) {
              o.material.userData.col0 = {
                lit: u.uLit.value.clone(), mid: u.uMid.value.clone(),
                shadow: u.uShadow.value.clone(), deep: u.uDeep.value.clone()
              };
            }
            o.material.uniforms.uRim.value.setRGB(1.0, 0.35, 0.4);
            o.material.uniforms.uRimW.value = 1.5;
            item.glowMats = item.glowMats || [];
            if (item.glowMats.indexOf(o.material) < 0) item.glowMats.push(o.material);
          } else {
            o.material.uniforms.uRim.value.copy(o.material.userData.rim0);
            o.material.uniforms.uRimW.value = RIG.rim;
          }
        }
      });
    }
    if (item.glowMats && item.glow) {
      const w = 1.25 + 0.6 * (0.5 + 0.5 * Math.sin(t / 130));
      item.glowMats.forEach((mat) => { mat.uniforms.uRimW.value = w; });
    }
    if (item.glowMats && item.fadeT > 0) {
      const on = item.glow ? 1 : 0;
      let done = true;
      item.glowMats.forEach((mat) => {
        const u = mat.uniforms;
        const c0 = mat.userData.col0;
        if (!c0) return;
        const keys = [["uLit", "lit", [1.0, 0.55, 0.6]], ["uMid", "mid", [1.0, 0.16, 0.28]],
          ["uShadow", "shadow", [0.55, 0.06, 0.16]], ["uDeep", "deep", [0.25, 0.02, 0.08]]];
        keys.forEach(([uni, key, red]) => {
          const v = u[uni].value;
          const tgt = on ? { r: red[0], g: red[1], b: red[2] } : c0[key];
          v.lerp(tgt, 0.18);
          const gap = Math.abs(v.r - tgt.r) + Math.abs(v.g - tgt.g) + Math.abs(v.b - tgt.b);
          if (gap > 0.03) done = false;
          else v.copy(tgt);
        });
      });
      item.fadeT -= 0.016;
      if (done) {
        item.fadeT = 0;
        if (!on) item.glowMats = null;
      }
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
    if (m.userData.__ghost) {
      // SHIMMER (1 HP flicker) + FADE (phase window) render as the single-layer
      // mask sprite. __phaseOv is the headless-probe override (Iron3D.phase).
      const phU = item.__phaseOv ? item.__phaseOv.u : item.phaseU;
      const fl = item.__phaseOv ? !!item.__phaseOv.fl : !!item.shimmer;
      try {
        applyPhase(m, phU, 1, item.alphaCur, fl && phU <= 0.02);
        if (phU > 0.02 || fl) { phaseMeshes.push(m); phaseActive = true; }
      } catch (e) {
        // never let a patch error kill the frame (the ghosts would vanish)
        window.__patchErr = String(e && e.stack || e);
      }
    }
  }
  try { updateMaskPass(phaseMeshes, phaseActive); }
  catch (e) { window.__maskErr = String(e && e.stack || e); }
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

// THREE/renderer/scene/cam are exposed for the mockups' silhouette-mask pass
// (constant-colour depth prepass -> fused alpha rim, see mockups/ghost-hp-visuals.html)
window.Iron3D = { sync, render, count: () => pool.size, ready: true, keys: KEY, pool,
  THREE, renderer, scene, cam,
  // headless probe hook: force a pool item's phase look (u 0..1, fl = shimmer)
  phase: (id, u, fl) => {
    const it = pool.get(id);
    if (!it) return false;
    it.__phaseOv = { u: u, fl: fl };
    return true;
  },
  debug: (id) => {
    const it = pool.get(id);
    if (!it) return { missing: true };
    const sh = it.mesh.userData.shell || (it.mesh.children[0] && it.mesh.children[0].userData && it.mesh.children[0].userData.shell);
    return {
      crack: it.crack,
      shell: Boolean(sh),
      useMap: Boolean(sh && sh.material.vertexShader.indexOf("USE_MAP") >= 0),
      map: sh && sh.material.uniforms && sh.material.uniforms.uMap
        ? (sh.material.uniforms.uMap.value === blankTexture() ? "blank"
          : sh.material.uniforms.uMap.value === shipCrackTexture() ? "star-ship"
            : sh.material.uniforms.uMap.value === crackTexture() ? "star" : "other")
        : "none",
      mapMix: sh && sh.material.uniforms && sh.material.uniforms.uMapMix
        ? Math.round(sh.material.uniforms.uMapMix.value * 100) / 100 : null,
      mapS: sh && sh.material.uniforms.uMapS ? sh.material.uniforms.uMapS.value.toArray() : null,
      mapO: sh && sh.material.uniforms.uMapO ? sh.material.uniforms.uMapO.value.toArray() : null,
      uv0: sh ? sh.geometry.attributes.uv.array.slice(0, 4) : null,
      glow: it.glow, fadeT: it.fadeT, mats: it.glowMats ? it.glowMats.length : null,
      lit: (function () {
        const out = [];
        it.mesh.traverse(function (o) {
          if (out.length < 2 && o.isMesh && o.material.uniforms && o.material.uniforms.uLit) {
            out.push(o.material.uniforms.uLit.value.toArray().map(function (n) { return Math.round(n * 100) / 100; }));
          }
        });
        return out;
      })(),
      texel: (function () {
        const im = crackTexture().image;
        const d = im.getContext("2d").getImageData(683, 128, 1, 1).data;
        return [d[0], d[1], d[2], d[3]];
      })()
    };
  } };
