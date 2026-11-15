import * as THREE from "../mockups/vendor/three.module.js";
import { surfMaterial, addHull, finishMob } from "../mockups/toon3d.js";

// ---- PLAYER SHIPS v2: three hulls, each exactly the BULWARK's width ---------
// Three alternative player designs built on the same toon kit the rest of the
// game uses (surfMaterial / addHull / finishMob) and the same authored-palette
// material the Bulwark uses (palMat), so the ramp, ink outline and rim light are
// identical to the ship in play today.
//
// THE WIDTH RULE. The Bulwark's widest part is its tail box: BoxGeometry(72, ...)
// at x 0, so the hull spans x -36 .. +36 = 72 model units. Its booms reach only
// x +-31.8, so the tail box is what sets the width. Every ship below has ONE part
// that spans exactly 72 units the same way (a 72-wide plate / wing, centred at x 0),
// and no other part reaches past +-36. Measured in the mockup probe (probe(id).spanX),
// not eyeballed.
//
// THE GUN RULE. js/player.js fires DOUBLE at offsets [-14, 14] px from the hitbox
// centre, and the player draws at 56 * FIT(1.35) = 75.6 px wide, so 14 px is
// 14 / (75.6/72) = 13.33 model units. GUN_X below is that number, and every rig
// ends with its two guns exactly over the bullet lines and its single gun on the
// centreline. The animation BETWEEN those two states differs per ship.
//
// Registration is by builder key (ship1 / ship2 / ship3) in js/assets3d.js, picked
// per page load with index.html?ship=1|2|3 (none = the Bulwark). The mockup
// mockups/ship-looks-v2.html draws the same builders via Iron3D.keys.
//
// Palettes are cool steel / cyan / brass-crimson, kept clear of the venom green
// (#7dff66) and the ghost white (#dfe9ff) so a ship never reads as a creature.

// 14 px of the DOUBLE shot, in model units (the Bulwark's own number)
export const GUN_X = 14 / (75.6 / 72);   // 13.333...
export const GUN_DUR = 0.5;              // seconds, single <-> double
// the kit's normalisation target (identical to assets3d.js TARGET): finishMob scales
// the model so its LARGEST dimension is 2.35, then sync() applies 56/2.35*1.35
const TARGET = 2.35;
const easeIO = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

// ---- LANTERN: gunmetal + cyan ----------------------------------------------
// Idea: a flat armoured wedge with two rear sponsons - "a slab with wings".
// Silhouette: a broad trapezoid nose (wide at the front, narrow at the back),
// a straight 72-wide stern plate, two short sponsons at the corners and a low
// bridge. Square, low, unmistakeably sturdy next to the Bulwark's rounded bomber.
// Palette: the FIRST pass used a pale steel hull (#b8c8dc) whose grey sat almost on
// top of the Bulwark's (#9fb0c4), so at the game's 75.6 px the ship read as the old
// hull with a cyan trim. This pass pushes the hull DARK teal-gunmetal and keeps the
// cyan for the bright faces, so LANTERN is a different ship at game scale, not a
// recoloured Bulwark.
// Gun animation: ONE gun on the centreline that RETRACTS into the spine rail while
// two full guns slide out along the rail to +-GUN_X. Single is one gun (one muzzle,
// nothing else), double is the pair on the bullet lines; the rail's slot makes the
// slide read mechanically.
const LANTERN = {
  // the TOP face is what the camera sees, so its lit colour carries the ship's cyan
  // identity: LANTERN reads cyan-teal at 75.6 px, where the Bulwark reads pale steel
  // with jade. Two other hulls (LANCER amber, SENTRY crimson) sit either side, so the
  // three ships are told apart by hue alone even at game scale.
  hull: { lit: "#7fc9dc", mid: "#2f6474", shadow: "#173a45", deep: "#0a1e26", rim: "#bff6ff", back: "#46e6ff" },
  dark: { lit: "#1f3346", mid: "#101f2c", shadow: "#070d14", deep: "#03070a", rim: "#46e6ff" },
  // ACCENT carries the ship's identity: the lit face itself is CYAN, not near-white,
  // so the trim reads cyan at the game's 75.6 px instead of washing out
  accent: { lit: "#46e6ff", mid: "#189ab4", shadow: "#0a5a70", deep: "#053a48",
    rim: "#dcffff", back: "#46e6ff" },
  cockpit: { lit: "#f4ffff", mid: "#7af4ff", shadow: "#12a8c4", deep: "#054a5e" },
  plume: { lit: "#8ff0ff", mid: "#2aa6c8", shadow: "#0b4a60", deep: "#04222e" },
  core: { lit: "#dcfaff", mid: "#63d8f2", shadow: "#1a7a94", deep: "#1a7a94" },
  outline: "#050e16"
};

// ---- LANCER: gunmetal + amber ----------------------------------------------
// Idea: a dart with two swept blade wings - the Bulwark's mass replaced by a
// narrow arrow with a long, pointed nose.
// Silhouette: a slim pointed fuselage, two wings swept HARD back from a 72-unit
// wing spar, and a split twin tail. Reads long and quick, not heavy.
// Gun animation: the pair ROTATES OUT. Both guns are hinged at the nose tip;
// they start folded flat against the fuselage pointing straight ahead (the single
// gun, drawn as one centreline muzzle), then swing apart like scissors to +-GUN_X
// and lock pointing up the bullet line. The muzzle flashes on the ends.
const LANCER = {
  hull: { lit: "#9fb2c8", mid: "#4a5568", shadow: "#2a3242", deep: "#141a26", rim: "#c8d8e8", back: "#ffb060" },
  dark: { lit: "#2a3140", mid: "#12161f", shadow: "#0a0d13", deep: "#05070a", rim: "#7a8aa0" },
  accent: { lit: "#ffe0b0", mid: "#ffab3d", shadow: "#b04a10", deep: "#5c2006", rim: "#fff3c8", back: "#ffab3d" },
  cockpit: { lit: "#ffffff", mid: "#bfe9ff", shadow: "#6fa8c8", deep: "#2a4a60" },
  plume: { lit: "#9fb4cc", mid: "#3d5a78", shadow: "#1d2f42", deep: "#0c1620" },
  core: { lit: "#cfe0ee", mid: "#7fa6c4", shadow: "#3d5a78", deep: "#3d5a78" },
  outline: "#10141e"
};

// ---- SENTRY: iron + crimson ------------------------------------------------
// Idea: a twin-hull catamaran - one ship that is visibly TWO ships sharing a
// bridge, the opposite read to the Bulwark's one wide slab.
// Silhouette: two long parallel pontoons with a 72-wide cross-deck bar joining
// them at the stern, a raised centre bridge and a pair of outrigger fins.
// Gun animation: the pair SPLIT OFF THE WINGTIPS. The single gun sits on the
// bridge centreline as a stub; the two wing guns are stowed INSIDE the pontoons
// (invisible, tucked at the pontoon outer edge) and SLIDE UP and OUTWARD to the
// bullet lines while the centre stub retracts into the bridge. Different read:
// the guns arrive from the hull's edges, not from the nose.
const SENTRY = {
  hull: { lit: "#cfd8e8", mid: "#7d8798", shadow: "#3f4756", deep: "#1c2029", rim: "#ffffff", back: "#ff6a5a" },
  dark: { lit: "#a8434a", mid: "#6e2028", shadow: "#3d0f14", deep: "#1e0609", rim: "#d88a86" },
  accent: { lit: "#ff9a8a", mid: "#e63946", shadow: "#901a24", deep: "#4a0a10", rim: "#ffc8c0", back: "#e63946" },
  cockpit: { lit: "#fff0ee", mid: "#ffc0b8", shadow: "#a05a50", deep: "#4a2018" },
  plume: { lit: "#9fb4cc", mid: "#3d5a78", shadow: "#1d2f42", deep: "#0c1620" },
  core: { lit: "#cfe0ee", mid: "#7fa6c4", shadow: "#3d5a78", deep: "#3d5a78" },
  outline: "#1a0a10"
};

export const SHIP_PALETTES = { ship1: LANTERN, ship2: LANCER, ship3: SENTRY };

// shared helpers: an authored-ramp material (the Bulwark's palMat rule: the
// player builder gets a cfg carrying the crack map, that map must NOT go on the
// parts or the whole ship renders 25% paler) and a part placer that mirrors the
// Bulwark's add(): mesh + dark outline shell at the authored palette.
function partCfg(cfg) {
  const o = Object.assign({}, cfg);
  delete o.map;
  return o;
}
function setPal(u, P) {
  const set = (n, hex) => {
    if (!hex || !u[n]) return;
    const v = hex.replace("#", "");
    u[n].value.setRGB(parseInt(v.slice(0, 2), 16) / 255,
      parseInt(v.slice(2, 4), 16) / 255, parseInt(v.slice(4, 6), 16) / 255);
  };
  set("uLit", P.lit); set("uShadow", P.shadow); set("uDeep", P.deep);
  set("uRim", P.rim); set("uBack", P.back);
}
function palMat(cfg, P, o) {
  const m = surfMaterial(P.mid, cfg);
  setPal(m.uniforms, P);
  const q = o || {};
  if (q.alpha !== undefined) {
    m.uniforms.uAlpha.value = q.alpha;
    m.transparent = true;
    if (!q.keepShell) { m.depthWrite = false; m.renderOrder = 3; }
  }
  if (q.flat) { m.uniforms.uRimW.value = 0; m.uniforms.uBackW.value = 0; }
  // the gun rig animates uAlpha from the runtime's render(), so pin the base
  // alpha the runtime caches in userData.a0 (else the fade factor fights it)
  m.userData.a0 = 1;
  return m;
}
function makeKit(cfg, P) {
  const g = new THREE.Group();
  const c2 = partCfg(cfg);
  const add = (geo, pal_, pos, rot, po) => {
    const q = po || {};
    const m = new THREE.Mesh(geo, palMat(c2, pal_, q));
    m.position.set(pos[0], pos[1], pos[2]);
    if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
    if (q.scale) m.scale.set(q.scale[0], q.scale[1], q.scale[2]);
    let sh = null;
    if (!q.alpha || q.keepShell) {
      sh = addHull(g, m, geo, 0.012, cfg, P.outline);
      const v = P.outline.replace("#", "");
      sh.material.uniforms.uColor.value.setRGB(parseInt(v.slice(0, 2), 16) / 255,
        parseInt(v.slice(2, 4), 16) / 255, parseInt(v.slice(4, 6), 16) / 255);
    }
    g.add(m);
    return { m, sh };
  };
  // a jet: dark nozzle ring + additive plume cylinder + bright core
  const jet = (x, y, z, list) => {
    add(new THREE.CylinderGeometry(2.4, 2.4, 9, 16), P.dark, [x, y, z], [Math.PI / 2, 0, 0]);
    const j = add(new THREE.CylinderGeometry(1.7, 1.7, 10, 14), P.plume,
      [x, y, z - 5], [-Math.PI / 2, 0, 0], { alpha: 0.85, flat: true });
    const c = add(new THREE.CylinderGeometry(0.8, 0.8, 6, 12), P.core,
      [x, y, z - 4], [-Math.PI / 2, 0, 0], { alpha: 0.9, flat: true });
    j.m.renderOrder = 3; c.m.renderOrder = 3;
    list.push({ m: j.m }, { m: c.m, core: true });
  };
  return { g, add, jet };
}

// The crack plate (the Bulwark's damage trick): a plane on the camera-facing side
// (model -y) whose uv lands on the screen box; render() swaps uMap by crackFade.
// Every ship needs one or it can't show damage.
function crackPlate(g, P, cfg, w, z) {
  const mapCfg = cfg.map ? Object.assign({}, cfg, { map: cfg.map, mapS: cfg.mapS, mapO: cfg.mapO }) : cfg;
  const m = surfMaterial(P.hull.mid, mapCfg);
  setPal(m.uniforms, P.hull);
  if (cfg.map) m.uniforms.uTintMul.value.multiplyScalar(1 / 1.25);
  m.side = THREE.DoubleSide;
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(w, 16), m);
  plate.rotation.x = Math.PI / 2;
  plate.position.set(0, -4.9, z);
  plate.userData.crackSkin = "ship";
  g.add(plate);
  g.userData.shell = plate;
}

// a gun: housing + barrel + muzzle, tagged with home x/y/z/scale so the rig can
// animate between two exact states without rebuilding geometry
function gunUnit(K, P, list, x, y, z, opts) {
  const o = opts || {};
  const sc = o.s || 1;
  const push = (r, role) => list.push({ m: r.m, sh: r.sh, x0: x, y0: y, z0: r.m.position.z,
    s0: sc, tilt: o.tilt || 0, role });
  // housing: a squat turret block behind the barrel (not taller than wide, so it
  // reads as a mount, not a slab)
  push(K.add(new THREE.BoxGeometry(15.4 * sc, 8.6 * sc, 8.4 * sc), o.housing || P.hull,
    [x, y, z], null, { keepShell: true }), "housing");
  // barrel: long and thin, reaching well past the housing. Kept thicker than the
  // shipped Bulwark's (r 1.5 -> 2.1) so it still reads as a barrel at the game's
  // 75.6 px draw size, where the whole hull is only ~76 px wide.
  push(K.add(new THREE.CylinderGeometry(2.1 * sc, 2.1 * sc, 13.6 * sc, 14), P.dark,
    [x, y, z + 10.6 * sc], [Math.PI / 2, 0, 0], { keepShell: true }), "barrel");
  // muzzle: a bright ring at the very tip, clearly wider than the barrel and in the
  // ship's ACID colour, so "one gun" is visible on the centreline even at game scale
  push(K.add(new THREE.CylinderGeometry(3.8 * sc, 3.8 * sc, 3.6 * sc, 14), P.accent,
    [x, y, z + 17.6 * sc], [Math.PI / 2, 0, 0], { keepShell: true }), "muzzle");
  return list;
}

// NOTE: rig shapes differ per ship; render() in assets3d.js dispatches on
// rig.mode so each ship gets its own animation, not the Bulwark's sink/ride-out.

// ===== SHIP 1: LANTERN - armoured wedge, guns SPLIT from the centre ==========
function buildLantern(cfg, hex, opts) {
  const P = LANTERN;
  const K = makeKit(cfg, P);
  const { add, g } = K;
  // 72-unit stern plate: THE width part (x -36..+36), the SAME authored width as the
  // Bulwark's own tail box (js/assets3d.js: BoxGeometry(72, 6, 8.8)), so finishMob
  // normalises both hulls identically and every ship draws 75.6 px wide.
  // It stays LOW (y -2), behind the wedge, so it is the stern bar - not the ship's face.
  add(new THREE.BoxGeometry(72, 4.6, 8.8), P.hull, [0, -2, -5]);
  // wedge nose in FOUR receding steps, each narrower + taller than the last, so the
  // taper is a real arrow (52 -> 34 -> 18 -> 8 wide), not a slab with a notch
  add(new THREE.BoxGeometry(52, 7.5, 12), P.hull, [0, -0.5, -1]);
  add(new THREE.BoxGeometry(34, 8.4, 10), P.hull, [0, 0.4, 8]);
  add(new THREE.BoxGeometry(18, 8.8, 8), P.hull, [0, 1, 15]);
  add(new THREE.BoxGeometry(8, 6, 6), P.dark, [0, 1.4, 20]);
  // a bright armour lip on the tip, so the nose is the brightest thing forward
  add(new THREE.BoxGeometry(8, 1.6, 6.2), P.accent, [0, 4.6, 20], null, { flat: true });
  // sponsons at the corners: short stubs whose outer edge is x +-31.8
  add(new THREE.BoxGeometry(7, 8, 18), P.dark, [-29, 0.4, -2]);
  add(new THREE.BoxGeometry(7, 8, 18), P.dark, [29, 0.4, -2]);
  add(new THREE.BoxGeometry(7, 2.2, 18), P.accent, [-29, 4.6, -2], null, { flat: true });
  add(new THREE.BoxGeometry(7, 2.2, 18), P.accent, [29, 4.6, -2], null, { flat: true });
  // bridge dome: a raised pale cockpit block that stands ABOVE the rail bar (rail top
  // y 2.8), so it silhouettes as the ship's bridge instead of hiding behind the guns
  add(new THREE.BoxGeometry(14, 6.4, 10), P.hull, [0, 4.4, 7]);
  add(new THREE.SphereGeometry(7, 30, 16, 0, Math.PI * 2, 0, Math.PI * 0.5), P.cockpit,
    [0, 7.4, 7], null, { scale: [0.86, 0.5, 1.0] });
  // rounded tail block behind the plate
  add(new THREE.BoxGeometry(40, 6, 7), P.dark, [0, 0, -13]);
  crackPlate(g, P, cfg, 52, -1);
  // the spine rail the guns slide along: dark bar with a bright slot line, sitting
  // ON the bow (z 17) instead of jutting past the nose tip at z 20. Kept LOW (top at
  // y 2.8) so the bridge dome behind it still silhouettes.
  add(new THREE.BoxGeometry(26, 3.6, 6.4), P.dark, [0, 1, 17]);
  add(new THREE.BoxGeometry(18, 1.2, 6.6), P.accent, [0, 3.2, 17], null, { flat: true });
  // GUN RIG "split": SINGLE is ONE gun, exactly what you asked for. A whole gun
  // sits on the centreline wearing one muzzle. The pair is stowed INSIDE the rail
  // (hidden) and, as the animation runs, the single gun retracts into the rail
  // while the two full guns slide out along it to +-GUN_X - so you never see two
  // half-muzzles at single, only one gun, then a pair.
  // Lifted to y 4.5 so the housing and muzzle silhouette ABOVE the deck (at y 1
  // the gun merges into the hull and reads as a dot).
  const rig = { mode: "split", center: [], side: [] };
  gunUnit(K, P, rig.center, 0, 3.2, 18, { s: 1, housing: P.hull });
  gunUnit(K, P, rig.side, -GUN_X, 3.2, 18, { s: 1, housing: P.hull });
  gunUnit(K, P, rig.side, GUN_X, 3.2, 18, { s: 1, housing: P.hull });
  g.userData.guns = rig;
  // POWER-UP STATE PARTS. Every kit part is tagged so shipPowerStep() can animate
  // it from the four live game states: laser (beam firing), rapid (quick shot),
  // slow (time warp), bomb (launched). All of them are authored at alpha 0 and
  // scale 0, so at rest they cost nothing visually and never widen the hull
  // (they sit inside x +-36 and z under 20, so the 72-unit width is untouched).
  g.userData.pow = lanternPowerParts(K, P);
  const plume = [];
  [[-22, -10], [22, -10]].forEach(([x, z]) => K.jet(x, -6, z, plume));
  g.userData.plume = plume;
  g.userData.spin = []; g.userData.claws = [];
  return finishMob(g, TARGET);
}

// ---- LANTERN power-up parts -------------------------------------------------
// Idea: LANTERN is the "instrumented" hull - it shows what is running as LIGHTS
// and MECHANICAL STATE on the ship itself, so power-ups read on the model, not
// only in the HUD text. Four independent channels, each with a bright emissive
// part the stepper fades/scales/pulses:
//   laser   - two cyan emitter pods beside the nose; on beam fire they flare and a
//             wide lens ring opens at the muzzle (the ship is the beam's source)
//   rapid   - the gun housings run HOT: barrels/casings tint amber-white, muzzle
//             rings swell, and a hot halo ring pulses above the deck
//   slow    - the TIME WARP field: the rim light and a violet field ring spin and
//             breathe, so the hull visibly sits inside a slowed bubble
//   bomb    - a launch flare off the bow plus a charge bar on the spine that fills
//             when a bomb is ready
// The stepper drives only uAlpha / scale / rotation / palette mix - no rebuilds.
function lanternPowerParts(K, P) {
  const out = { laser: [], rapid: [], slow: [], bomb: [], mats: [] };
  const glow = (geo, pal_, pos, rot, po) => {
    const q = K.add(geo, pal_, pos, rot, Object.assign({ alpha: 0.001, flat: true }, po || {}));
    q.m.renderOrder = 4;
    out.mats.push(q.m.material);
    return q;
  };
  const HOT = { lit: "#fff0c8", mid: "#ffb43d", shadow: "#b4570f", deep: "#5c2404", rim: "#fffbe0", back: "#ffb43d" };
  const WARP = { lit: "#efe2ff", mid: "#bf9cff", shadow: "#6a48c4", deep: "#32206e", rim: "#f7ecff", back: "#bf9cff" };
  const BEAM = { lit: "#eaffff", mid: "#6fdcff", shadow: "#1d9fd6", deep: "#0a5a70", rim: "#f2ffff", back: "#6fdcff" };
  // LASER: emitter pods on the nose shoulders (inside x +-36) + lens ring at the
  // bow muzzle. Pods are small blocks with a bright cap so they read as optics.
  [-1, 1].forEach((s) => {
    K.add(new THREE.BoxGeometry(5, 4.2, 6), P.dark, [s * 20, 2.4, 15], null, { keepShell: true });
    const cap = glow(new THREE.BoxGeometry(3.6, 2.4, 3.6), BEAM, [s * 20, 4.8, 16]);
    cap.kind = "cap"; out.laser.push(cap);
    // a bright optic strip sitting proud of the deck along each shoulder, so the
    // laser state reads along the hull even when the beam covers the nose
    const strip = glow(new THREE.BoxGeometry(3.2, 0.9, 10), BEAM, [s * 20, 2.4, 8]);
    strip.kind = "strip"; out.laser.push(strip);
  });
  // the lens: a thin ring the beam leaves through, opened at the muzzle (z 20)
  const lens = glow(new THREE.CylinderGeometry(4.6, 4.6, 1.2, 20), BEAM, [0, 3.2, 21.2],
    [Math.PI / 2, 0, 0]);
  lens.kind = "lens"; out.laser.push(lens);
  // RAPID (quick shot): the BARREL pumps - no internals glow. The stepper drives
  // the existing gun barrel + muzzle parts forward/back on each shot and flashes
  // an amber ring at the muzzle tip. Hotel palette kept for the flash only.
  // TIME WARP (slow): a GLOW OUTLINING the hull, not rings inside it and not bars
  // across the deck. Four thin violet edge strips sit just OUTSIDE the hull's own
  // footprint (the 72-wide stern plate and the wedge's sides), so the silhouette
  // reads as ringed by violet light. The motion TRAIL is drawn in the 2D layer
  // (js/drawing.js) from the ship's recent positions, so it appears only when you fly.
  const EDGE_Z = -2;
  out.slow.push(glow(new THREE.BoxGeometry(70, 1.0, 3), WARP, [0, -3.2, EDGE_Z + 22]));   // bow edge
  out.slow.push(glow(new THREE.BoxGeometry(70, 1.0, 3), WARP, [0, -3.2, EDGE_Z - 22]));   // stern edge
  out.slow.push(glow(new THREE.BoxGeometry(2.0, 1.0, 44), WARP, [-34, -3.2, EDGE_Z]));    // left flank
  out.slow.push(glow(new THREE.BoxGeometry(2.0, 1.0, 44), WARP, [34, -3.2, EDGE_Z]));     // right flank
  // BOMB: launch flare cone off the bow while the bomb is airborne
  out.bomb.push(glow(new THREE.ConeGeometry(4.2, 8, 16), HOT, [0, 3.2, 24], [Math.PI / 2, 0, 0]));
  return out;
}

// Stepper for the LANTERN power-up states. `st` is the game's live state handed
// over by the drawing layer:
//   st.laser  - beam is firing right now (a laserBeams entry is live)
//   st.rapid  - quick shot running
//   st.slow   - time warp running
//   st.bomb   - bomb is airborne, OR st.bombReady fills the charge bar
// Each channel moves toward its target between 0 and 1 in POWER_DUR, so entering
// and leaving a power-up is a fade, never a pop.
export const POWER_DUR = 0.22;
export function shipPowerStep(item, dt, st, t) {
  const parts = Object.assign({}, item.mesh.userData,
    (item.mesh.children[0] && item.mesh.children[0].userData) || {});
  const pow = parts && parts.pow;
  if (!pow) return;
  // the authored palette for the muzzle rest colour below (P is the parameter
  // name inside the builders, NOT in scope here - bare P threw ReferenceError
  // every frame and froze the loop). pow parts only exist on the v2 hulls.
  const P = SHIP_PALETTES[item.key] || LANTERN;
  const s = st || {};
  const tgt = {
    laser: s.laser ? 1 : 0,
    rapid: s.rapid ? 1 : 0,
    slow: s.slow ? 1 : 0,
    bomb: s.bomb ? 1 : 0
  };
  item.powRaw = item.powRaw || { laser: 0, rapid: 0, slow: 0, bomb: 0 };
  const step = (k) => {
    let v = item.powRaw[k];
    if (v !== tgt[k]) {
      v += Math.sign(tgt[k] - v) * Math.min(1, dt / POWER_DUR);
      v = Math.max(0, Math.min(1, v));
      item.powRaw[k] = v;
    }
    return v;
  };
  const setQ = (q, s_, a) => {
    const vis = a > 0.01;
    q.m.visible = vis;
    if (!vis) return;
    q.m.scale.setScalar(s_);
    q.m.material.uniforms.uAlpha.value = a;
    q.m.material.transparent = true;
  };
  // --- LASER: shoulder optics flare cyan; the lens swells as a beam fires ----
  const L = step("laser");
  pow.laser.forEach((q, i) => {
    const kind = q.kind || "cap";
    const a = L * (kind === "lens" ? 0.95 : 0.9);
    const sc = kind === "lens" ? 0.9 + 0.4 * L : 0.9 + 0.3 * L;
    setQ(q, sc, a);
    q.m.material.uniforms.uAlpha.value = a * (0.85 + 0.15 * Math.sin(t / 90 + i));
  });
  // --- RAPID (quick shot): the BARREL PUMPS --------------------------------
  // Each gun's barrel + muzzle kick forward along their own axis and settle back,
  // on a fast cycle so it reads as pumping. The muzzle end gets an amber flash.
  // This is applied AFTER shipGunStep() set the gun transforms (render() order),
  // so it's an offset on top of the resolved single/double position.
  const R = step("rapid");
  if (parts.guns) {
    const pump = Math.max(0, Math.sin(t / 55));
    const kick = 2.5 * R * pump;      // model units the barrel slides forward
    parts.guns.center.concat(parts.guns.side).forEach((q) => {
      if (!q.m.visible) return;
      if (q.role === "barrel") {
        q.m.position.z = q.m.position.z + kick;
        // the barrel LENGTH stretches with the pump, so the slide reads as motion
        const base = q.s0 || 1;
        q.m.scale.set(base, base * (1 + 0.08 * R * pump), base);
      } else if (q.role === "muzzle") {
        q.m.position.z = q.m.position.z + kick;
        const base = q.s0 || 1;
        q.m.scale.setScalar(base * (1 + 0.45 * R * pump));
        // amber flash on the muzzle ring while it pumps, lerped back to the
        // gun's own palette when rapid ends (so nothing stays tinted)
        const u = q.m.material.uniforms;
        if (u.uLit && u.uMid) {
          // NEVER clone the live colour as the "rest" value: if it is already NaN (a
          // broken material leaves 000NaN), cloning BAKES the NaN in and the muzzle
          // stays black forever - that is the black muzzle tip seen in the game. Take
          // the rest colour from the authored palette instead, and sanitise it.
          const rgb = (hex, fallback) => {
            const v = String(hex || "").replace("#", "");
            const n = [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
            return n.every(Number.isFinite) ? n.map((x) => x / 255) : fallback;
          };
          if (!q.m.userData.muz0) {
            q.m.userData.muz0 = {
              lit: rgb(P.accent && P.accent.lit, [0.275, 0.902, 1]),
              mid: rgb(P.accent && P.accent.mid, [0.094, 0.604, 0.706])
            };
          }
          const z = q.m.userData.muz0;
          const hotLit = [1, 0.86, 0.55], hotMid = [1, 0.45, 0.12];
          // a NaN-safe factor: any bad input collapses to "no tint", never to NaN
          const k = Number.isFinite(pump) && Number.isFinite(R) ? pump * R : 0;
          u.uLit.value.set(
            z.lit[0] + (hotLit[0] - z.lit[0]) * k,
            z.lit[1] + (hotLit[1] - z.lit[1]) * k,
            z.lit[2] + (hotLit[2] - z.lit[2]) * k);
          u.uMid.value.set(
            z.mid[0] + (hotMid[0] - z.mid[0]) * k,
            z.mid[1] + (hotMid[1] - z.mid[1]) * k,
            z.mid[2] + (hotMid[2] - z.mid[2]) * k);
        }
        if (u.uAlpha) u.uAlpha.value = Math.min(1, u.uAlpha.value);
      }
    });
  }
  // --- SLOW (time warp): a dash-like glow trailing/trailing the hull --------
  const S = step("slow");
  pow.slow.forEach((q, i) => {
    // a travelling pulse so the length glows back to front, like a dash streak
    const travel = 0.5 + 0.5 * Math.sin(t / 300 + i * 0.7);
    const sc = i === 0 ? 1 : 0.85 + 0.25 * travel;
    q.m.material.uniforms.uAlpha.value = S * (0.22 + 0.30 * travel);
    q.m.scale.setScalar(sc);
    q.m.visible = S > 0.01;
    q.m.material.transparent = true;
  });
  // --- BOMB: launch flare off the bow --------------------------------------
  const B = step("bomb");
  pow.bomb.forEach((q) => {
    const sc = 0.5 + 0.7 * B + 0.25 * B * (0.5 + 0.5 * Math.sin(t / 70));
    setQ(q, sc, B);
  });
}

// ===== SHIP 2: LANCER - dart with swept blade wings, guns ROTATE out =========
function buildLancer(cfg, hex, opts) {
  const P = LANCER;
  const K = makeKit(cfg, P);
  const { add, g } = K;
  // 72-unit wing spar: THE width part (x -36..+36), set back and LOW so the fuselage
  // rises in front of it (a single flat plane reads as a plank, not a craft)
  add(new THREE.BoxGeometry(72, 4, 8), P.hull, [0, -1.2, -6]);
  // slim fuselage: a stepped arrow - 22 wide body, 14, 9, then a dark 6-wide tip -
  // so the nose tapers instead of ending in a block
  add(new THREE.BoxGeometry(22, 7.5, 26), P.hull, [0, 1.2, 4]);
  add(new THREE.BoxGeometry(14, 6.4, 10), P.hull, [0, 1.4, 12]);
  add(new THREE.BoxGeometry(9, 5, 8), P.hull, [0, 1.6, 19]);
  add(new THREE.BoxGeometry(6, 3.6, 7), P.dark, [0, 1.8, 25]);
  // bright nose lip, the brightest thing forward
  add(new THREE.BoxGeometry(6, 1.2, 7.2), P.accent, [0, 3.2, 25], null, { flat: true });
  // swept blade wings: the wing body wears the HULL colour (so it reads as part of
  // the ship, not a dark triangle), with a dark leading edge and an amber stripe
  // running the whole span. Tips close at x +-33.2 so the ink shell stays inside 36.
  [-1, 1].forEach((s) => {
    add(new THREE.BoxGeometry(28, 3.4, 6.4), P.hull, [s * 20, -0.6, 2], [0, s * -0.62, 0]);
    add(new THREE.BoxGeometry(28, 1.4, 6.6), P.dark, [s * 20, 1.4, 2], [0, s * -0.62, 0]);
    add(new THREE.BoxGeometry(28, 1.0, 2.2), P.accent, [s * 20, 3.0, 3.4], [0, s * -0.62, 0],
      { flat: true });
    add(new THREE.BoxGeometry(3.4, 2.2, 6), P.accent, [s * 32.6, -0.9, -4.6], [0, s * -0.62, 0],
      { flat: true });
  });
  // tail fins: thin vertical blades, set back and up so the stern silhouettes
  add(new THREE.BoxGeometry(5, 5.6, 9), P.dark, [-9, 1.4, -14]);
  add(new THREE.BoxGeometry(5, 5.6, 9), P.dark, [9, 1.4, -14]);
  add(new THREE.BoxGeometry(5, 1, 9.2), P.accent, [-9, 4.2, -14], null, { flat: true });
  add(new THREE.BoxGeometry(5, 1, 9.2), P.accent, [9, 4.2, -14], null, { flat: true });
  // canopy: tall enough to read as a cockpit dome
  add(new THREE.SphereGeometry(6.6, 32, 18, 0, Math.PI * 2, 0, Math.PI * 0.5), P.cockpit,
    [0, 4.6, 6], null, { scale: [0.8, 0.95, 1.3] });
  crackPlate(g, P, cfg, 20, 4);
  // nose gun deck: a dark plate the pair hinges on, under the gun and ahead of the lip
  add(new THREE.BoxGeometry(13, 3.4, 6), P.dark, [0, 1.4, 28]);
  // GUN RIG "scissor": both guns hinge at the nose tip. At single they sit folded
  // flat, one on top of the other at x 0 - one centreline gun from the camera. At
  // double they swing to +-GUN_X with rotation.z walking from 0 to the sweep angle,
  // so the pair scissors open around the nose.
  const rig = { mode: "scissor", center: [], side: [] };
  gunUnit(K, P, rig.center, 0, 3.2, 21, { s: 0.95, housing: P.dark });
  gunUnit(K, P, rig.side, -GUN_X, 3.2, 20, { s: 0.95, tilt: -0.16, housing: P.dark });
  gunUnit(K, P, rig.side, GUN_X, 3.2, 20, { s: 0.95, tilt: 0.16, housing: P.dark });
  g.userData.guns = rig;
  const plume = [];
  [[-9, -20], [9, -20]].forEach(([x, z]) => K.jet(x, -6, z, plume));
  g.userData.plume = plume;
  g.userData.spin = []; g.userData.claws = [];
  return finishMob(g, TARGET);
}

// ===== SHIP 3: SENTRY - catamaran, guns SLIDE UP from the pontoon edges =======
function buildSentry(cfg, hex, opts) {
  const P = SENTRY;
  const K = makeKit(cfg, P);
  const { add, g } = K;
  // 72-unit cross-deck bar: THE width part (x -36..+36). Kept LOW and set back so
  // the pontoons and bridge stand proud of it.
  add(new THREE.BoxGeometry(72, 5, 9), P.dark, [0, -1.4, -4]);
  // two long pontoons: outboard hulls at x +-24, width 8.6 => outer edge +-28.3,
  // with rounded tops so each reads as a separate float hull. The crimson band runs
  // the OUTER edge of each pontoon, one stripe along the ship.
  [-1, 1].forEach((s) => {
    add(new THREE.BoxGeometry(8.6, 7, 32), P.hull, [s * 24, -0.5, 2]);
    add(new THREE.SphereGeometry(4.3, 30, 16, 0, Math.PI * 2, 0, Math.PI * 0.5), P.hull,
      [s * 24, 3, 2], null, { scale: [1, 0.5, 3.2] });
    add(new THREE.BoxGeometry(2.2, 3.4, 32), P.accent, [s * 27.6, 0.2, 2], null, { flat: true });
    // outrigger fin: a thin blade at the pontoon stern, tip x +-33
    add(new THREE.BoxGeometry(9, 2.2, 12), P.dark, [s * 30, -0.5, -12]);
    add(new THREE.BoxGeometry(9, 0.9, 12.2), P.accent, [s * 30, 1.4, -12], null, { flat: true });
  });
  // centre bridge deck + raised cabin: narrow enough to leave a GAP to each pontoon,
  // so the bridge reads as a bridge BETWEEN two hulls. The cabin is LOW and set back
  // so it never blocks the single gun on the bow.
  add(new THREE.BoxGeometry(16, 5, 22), P.dark, [0, 0.4, 4]);
  add(new THREE.BoxGeometry(16, 2.6, 14), P.hull, [0, 2.6, -2]);
  add(new THREE.SphereGeometry(6.4, 34, 18, 0, Math.PI * 2, 0, Math.PI * 0.55), P.cockpit,
    [0, 4.2, -3], null, { scale: [0.75, 0.6, 1.0] });
  add(new THREE.BoxGeometry(2.4, 1.2, 20), P.accent, [0, 3.8, 6], null, { flat: true });
  crackPlate(g, P, cfg, 40, 4);
  // gun deck: a dark block on the bridge nose, below the gun so the gun silhouettes
  add(new THREE.BoxGeometry(12, 3.4, 7), P.hull, [0, 1.4, 24]);
  // GUN RIG "slide-out": one gun on the bridge centreline at single; the pair is
  // stowed INSIDE the pontoons (hidden) and rides UP + OUT to the bullet lines while
  // the single gun sinks into the deck.
  const rig = { mode: "slide", center: [], side: [] };
  gunUnit(K, P, rig.center, 0, 3.2, 27, { s: 0.9, housing: P.hull });
  gunUnit(K, P, rig.side, -GUN_X, 3.2, 19, { s: 0.9, housing: P.hull });
  gunUnit(K, P, rig.side, GUN_X, 3.2, 19, { s: 0.9, housing: P.hull });
  g.userData.guns = rig;
  const plume = [];
  [[-30, -17], [30, -17]].forEach(([x, z]) => K.jet(x, -6, z, plume));
  g.userData.plume = plume;
  g.userData.spin = []; g.userData.claws = [];
  return finishMob(g, TARGET);
}

export const SHIPS_V2 = { ship1: buildLantern, ship2: buildLancer, ship3: buildSentry };

// Stepper: each rig's own single<->double animation, driven by the runtime's
// render(). assets3d.js:render() calls shipGunStep(rig, item, dt) for every rig
// carrying rig.mode (the Bulwark keeps its shipped inline block because it is the
// default and its parts carry no mode).
export function shipGunStep(rig, item, dt) {
  const tgt = item.guns ? 1 : 0;
  if (item.gunRaw === undefined) item.gunRaw = tgt;
  if (item.gunRaw !== tgt) {
    item.gunRaw += Math.sign(tgt - item.gunRaw) * Math.min(1, dt / GUN_DUR);
    item.gunRaw = Math.max(0, Math.min(1, item.gunRaw));
  }
  const p = easeIO(item.gunRaw);
  // setG: exact state setter. Position/scale/alpha come from the rig, home
  // transform from the part's own tag.
  const setG = (q, x, dz, s, a, rotZ) => {
    const vis = a > 0.02;
    q.m.visible = vis;
    if (q.sh) q.sh.visible = vis;
    if (!vis) return;
    q.m.position.set(x, q.y0, q.z0 + dz);
    q.m.scale.setScalar(s);
    if (rotZ !== undefined) q.m.rotation.z = rotZ;
    q.m.material.uniforms.uAlpha.value = a;
    q.m.material.transparent = a < 0.999;
    if (q.sh) {
      q.sh.position.copy(q.m.position);
      q.sh.scale.copy(q.m.scale);
      q.sh.rotation.copy(q.m.rotation);
      q.sh.material.uniforms.uAlpha.value = a * 0.8;
    }
  };
  if (rig.mode === "split") {
    // SINGLE = one whole gun on the centreline. As it runs, that gun retracts down
    // into the spine rail and fades while the pair slides out along the rail to
    // +-GUN_X and fades in. Both ends are exact: one gun, or two at +-GUN_X.
    rig.center.forEach((q) => setG(q, q.x0, -7 * p, q.s0 * (1 - 0.35 * p),
      Math.max(0, 1 - p * 1.8)));
    rig.side.forEach((q) => {
      // x is proportional to p so each gun sits exactly at +-GUN_X at the end
      const sx = q.x0 < 0 ? -1 : 1;
      const x = sx * GUN_X * p;
      setG(q, x, -6 * (1 - p), q.s0 * (0.7 + 0.3 * p),
        Math.max(0, Math.min(1, p * 1.6 - 0.25)));
    });
  } else if (rig.mode === "scissor") {
    // folded centre gun sinks away as the pair swings open around the nose tip
    rig.center.forEach((q) => setG(q, q.x0, -6 * p, q.s0 * (1 - 0.3 * p), Math.max(0, 1 - p * 1.6)));
    rig.side.forEach((q) => setG(q, q.x0 * p, -4 * (1 - p), q.s0 * (0.7 + 0.3 * p),
      Math.max(0, Math.min(1, p * 1.6)), q.tilt * p));
  } else if (rig.mode === "slide") {
    // centre stub retracts down into the deck; pair climbs out of the pontoons
    rig.center.forEach((q) => setG(q, q.x0, -10 * p, q.s0 * (1 - 0.4 * p), Math.max(0, 1 - p * 1.6)));
    rig.side.forEach((q) => setG(q, q.x0 * p, -14 * (1 - p), q.s0 * (0.6 + 0.4 * p),
      Math.max(0, Math.min(1, p * 1.6))));
  }
}
