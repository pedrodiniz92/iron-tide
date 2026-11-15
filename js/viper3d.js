// ---- WINGED VIPER: VENOM WYRM -----------------------------------------------
// One alternative viper model, built on the same toon kit as the rest of the
// game's 3D assets (surfMaterial / addHull / part / finishMob from
// mockups/toon3d.js), so it inherits the exact ramp, ink outline and rim light.
//
// Registered as an ordinary builder key (viper_wyrm) in js/assets3d.js
// BUILDERS, which means:
//   * the real game draws it (boss.js pushes Iron3D.viperLookKey()),
//   * mockups/viper-looks-v2.html draws it from the SAME code via Iron3D.keys,
//   * the shipped "viper" key is untouched and stays the default, so
//     index.html?viper=1 is the only other look.
//
// What the shipped viper gets wrong (mockups/viper-looks.html look 1): it is a
// flat neon-green arrow - symmetric wings, one tiny beak, and NO FACE. The skull
// cruiser works because one bold high-contrast face fills most of the model;
// the squid works because a big mantle + radiating arms read as a creature.
// So the wyrm is built around ONE dominant mass + ONE big face, with the wings
// fused into that mass, and the model is normalised to 2.3 units by finishMob
// like every kit mob.
//
//   VENOM WYRM - vertical hooded serpent head facing the player: a spread cobra
//                hood (tapered flare with the spectacle marking) that IS the
//                winged part, slit-pupil eyes under supraocular brow ridges,
//                and an open jaw with two fangs. Tall + narrow.
import * as THREE from "../mockups/vendor/three.module.js";
import { surfMaterial, addHull, finishMob } from "../mockups/toon3d.js";

const INK = "#141020";
const BONE = "#f2f4f8";

function part(group, geo, hex, cfg, x, y, z, thick, sx, sy, sz) {
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, cfg));
  mesh.position.set(x, y, z);
  if (sx) mesh.scale.set(sx, sy, sz);
  addHull(group, mesh, geo, thick || 0.012, cfg, hex);
  group.add(mesh);
  return mesh;
}

function polyShape(pts) {
  const sh = new THREE.Shape();
  pts.forEach(([x, y], i) => (i === 0 ? sh.moveTo(x, y) : sh.lineTo(x, y)));
  sh.closePath();
  return sh;
}

function extrudePoly(pts, cfg, hex, group, opts) {
  const o = opts || {};
  let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
  pts.forEach(([x, y]) => {
    minx = Math.min(minx, x); maxx = Math.max(maxx, x);
    miny = Math.min(miny, y); maxy = Math.max(maxy, y);
  });
  const span = Math.max(maxx - minx, maxy - miny);
  const depth = o.depth || span * 0.34;
  const bev = o.bevel === undefined ? span * 0.06 : o.bevel;
  const geo = new THREE.ExtrudeGeometry(polyShape(pts), {
    depth, bevelEnabled: bev > 0, bevelThickness: bev, bevelSize: bev * 0.9,
    bevelSegments: 3, curveSegments: 12
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, cfg));
  addHull(group, mesh, geo, 0.020, cfg, hex);
  group.add(mesh);
  return { mesh, front: depth / 2 + bev };
}

// A hard flat glow. NOT the runtime's `glow` flag - that one ramps the whole
// model to RED (js/assets3d.js), the same trap the squid builder avoids with a
// plain MeshBasicMaterial.
function glowMesh(geo, hex) {
  // a missing hex here is silent otherwise: THREE.MeshBasicMaterial({ color: undefined })
  // just warns and the accent renders WHITE, so the tongue/fangs lose their accent colour
  if (!hex) throw new Error("glowMesh needs an accent hex");
  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: hex }));
}

// One big face, dead-on to the camera: dark sockets + bright slit pupils, the
// skull's trick (a bold high-contrast face beats detail at fight size). Returns
// the parts so a builder with a TILTED head can rotate the face with it (an
// unrotated pupil on a tilted head floats off the surface).
function face(g, cfg, glow, y, z, spread, r) {
  const parts = [];
  [-1, 1].forEach((s) => {
    // SOCKET: a dark cup RECESSED into the head plate, not a sphere bulging out of
    // it. A 0.55-deep sphere at z = plateFront - 0.10 poked its front rim 0.27 past
    // the plate and read as a dark blob stuck on the face; its z centre now sits
    // INSIDE the plate so only the opening shows (hollow eye).
    parts.push(part(g, new THREE.SphereGeometry(r, 20, 14), INK, cfg, s * spread, y, z - r * 0.30, 0.010, 1, 1.2, 0.55));
    // PUPIL: held just inside the socket opening (behind its front rim) so the
    // bright slit reads as surrounded by dark, not floating on top of it
    const pupil = glowMesh(new THREE.BoxGeometry(r * 0.34, r * 1.25, r * 0.3), glow);
    pupil.position.set(s * spread, y, z - r * 0.06);
    g.add(pupil);
    parts.push(pupil);
  });
  return parts;
}

// A wing that is part of the mass: a tapered blade anchored at the shoulder,
// whose ROOT sits on the hull and whose tip sweeps out and back. `side` is -1
// (left) or +1 (right); `droop` bends the tip down, `sweep` rotates the whole
// blade back around Y so it has depth, not just a flat plate facing the camera.
function blade(g, cfg, hex, rib, side, x, y, z, len, chord, droop, sweep) {
  const sh = polyShape([
    [0, chord * 0.5], [len * 0.45, chord * 0.42], [len * 0.78, chord * 0.20],
    [len, chord * 0.02], [len * 0.72, -chord * 0.30], [len * 0.30, -chord * 0.50],
    [0, -chord * 0.5]
  ]);
  const geo = new THREE.ExtrudeGeometry(sh, {
    depth: chord * 0.30, bevelEnabled: true, bevelThickness: chord * 0.09,
    bevelSize: chord * 0.08, bevelSegments: 2, curveSegments: 8
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, cfg));
  mesh.position.set(x + side * len * 0.5, y, z);
  // mirror for the left wing, then droop + sweep
  mesh.scale.x = side;
  mesh.rotation.y = side * sweep;
  mesh.rotation.z = side * droop;
  addHull(g, mesh, geo, 0.016, cfg, hex);
  g.add(mesh);
  // the leading edge, in the accent: a bright line along the wing's top edge
  const edge = new THREE.BoxGeometry(len * 0.92, chord * 0.10, chord * 0.20);
  const em = part(g, edge, rib, cfg, x + side * len * 0.5, y + chord * 0.34, z, 0.008);
  em.scale.x = side;
  em.rotation.y = side * sweep;
  em.rotation.z = side * droop;
  return mesh;
}

function plain(g) {
  g.userData.legs = [];
  g.userData.claws = [];
  g.userData.spin = [];
  return finishMob(g, 2.3);
}

// ---- VENOM WYRM -------------------------------------------------------------
// A cobra's threat display, read dead-on from the front. Built from the photos in
// /tmp/opencode/viper-refs:
//   cobra_hood_marks.jpg (dorsal view, hood spread) - the hood outline: a rounded
//     oval mask, widest just above the middle, top shoulders rounding outward,
//     bottom narrowing to the neck; and the "spectacle" mark: two dark loops
//     joined by a bridge across the hood, sitting just UNDER the head.
//   naja_atra_hood.jpg (near-front, hood spread) - the flare is much wider than
//     the head, the hood tips round off, and below it the neck is a narrow pale
//     column, not part of the flare.
//   cobra_hood.jpg - black cross-bands across the hood; the head is a small blunt
//     wedge that sits ON TOP of the flare, nose angled down.
//   eyelash_front.jpg - eyes sit HIGH on the head under a supraocular BROW ridge
//     of raised scales that arches over each eye (the viper tell).
//   eyelash_threat.jpg / cobra_fangs.jpg - the jaw gapes forward, two slim pale
//     fangs at the FRONT TIP of the upper jaw pointing down, bright interior.
// Tall + narrow, one big high-contrast face: hood fills the width, head fills
// the top. The head is built in its own frame above the hood so it stands proud
// of the flare - the mushroom trap is head and hood merging into one disc.
export function buildViperWyrm(cfg, hex) {
  const g = new THREE.Group();
  const body = hex || "#2fc96f";
  const glow = "#7dff66";
  const shade = "#1d8a48";
  const deep = "#0f5c30";

  // --- HOOD ----------------------------------------------------------------
  // A rounded oval mask, NOT a shield: widest just above the middle, shoulders
  // rounding smoothly to the top, a soft taper down to the neck point. No spikes.
  const hood = extrudePoly([
    [-7.6, 5.0], [-9.6, 4.4], [-10.8, 1.8], [-11.0, -0.8], [-10.4, -3.4],
    [-9.0, -5.6], [-6.2, -7.0], [-3.0, -7.7], [0, -8.0], [3.0, -7.7],
    [6.2, -7.0], [9.0, -5.6], [10.4, -3.4], [11.0, -0.8], [10.8, 1.8],
    [9.6, 4.4], [7.6, 5.0], [0, 5.8]
  ], cfg, shade, g, { depth: 1.9, bevel: 0.6 });
  hood.mesh.position.set(0, -1.4, -2.8);
  // the hood's front plane: markings must sit IN FRONT of it or they vanish
  const hf = -2.8 + hood.front;

  // the spectacle mark: two dark loops + the bridge, sitting just UNDER the head
  // on the hood shoulders (cobra_hood_marks.jpg). The marking that makes a bare
  // oval read as a cobra hood.
  // MEASURED: the head plate covers world y 0.18 .. 6.82, so a marking at y 4.05 in
  // the hood's frame (world 2.65) is hidden BEHIND the head - only the rings' outer
  // arcs ever showed. The spectacle sits on the shoulders just under the chin
  // (hood-local y -0.85 -> world -2.25), where nothing covers it.
  // Thin dark loops LOW on the hood shoulders (cobra_hood_marks.jpg): a spectacle's
  // outline is a thin line, and fat rings + a bridge bar under the mouth read as
  // GOGGLES - so the loops are slim and the bridge is a slim bar set between them.
  // No spectacle here. Tried four times: inside the flare the loops sit behind the
  // head plate, under the chin behind the jaw lobe, on the flanks the bridge's ends
  // peek out as random black dashes. At boss size fat rings + a bridge also read as
  // GOGGLES. Dropped - a cobra hood is carried by the flare's SHAPE and the cross-
  // bands, which survive the small size; the marking that failed is not worth the
  // clutter. (cobra_hood_marks.jpg gave the hood outline, which is kept above.)

  // hood cross-bands (cobra_hood.jpg): short dark bands on the lower hood only,
  // so they read as markings in the flare, not a ladder across the whole model
  [-2.0, -4.0].forEach((y, i) => {
    const w = 2 * (10.4 + y * 0.55) * (0.44 - i * 0.05);
    part(g, new THREE.BoxGeometry(w, 0.26, 0.35), deep, cfg, 0, y, hf - 0.10, 0.006);
  });

  // the flare's wing ribs: accent lines running out to the hood tips, so the
  // spread membrane reads as wings, not a flat shield
  [-1, 1].forEach((s) => {
    const rib = part(g, new THREE.BoxGeometry(0.18, 5.4, 0.35), glow, cfg, s * 8.4, 0.2, hf - 0.05, 0.006);
    rib.rotation.z = s * -0.34;
  });

  // --- HEAD (its own frame, ABOVE the hood) --------------------------------
  // extrudePoly() calls geo.center(), so a part's LOCAL frame is centred on the
  // polygon's midpoint. The head's local y therefore runs -3.47 .. +3.47 (measured),
  // not the 0.9..7.0 the outline was drafted in. Every face part is placed in that
  // centred frame - the floating-eyes bug was y taken from the draft frame.
  // Narrow blunt wedge, taller than wide (naja_atra_hood.jpg): a wide hexagon head
  // over a wide hood is what read as a toad - the cobra read needs the head to be
  // much NARROWER than the flare, so the flare's width contrast says "hood".
  const hg = new THREE.Group();
  hg.position.set(0, 3.5, 0.4);
  g.add(hg);
  const head = extrudePoly([
    [-2.9, 4.4], [-2.3, 6.2], [-1.2, 7.1], [0, 7.3], [1.2, 7.1], [2.3, 6.2],
    [2.9, 4.4], [2.2, 3.2], [1.4, 2.1], [0, 1.6], [-1.4, 2.1], [-2.2, 3.2]
  ], cfg, body, hg, { depth: 2.3, bevel: 0.45 });
  const H = head.front;          // 1.60: the head's front plane, from local centre

  // eyes HIGH on the head: y +1.1 sits in the head's upper third, well inside the
  // top edge (+3.47), so both sockets land fully on the head plate
  face(hg, cfg, glow, 0.95, H - 0.10, 1.28, 0.68);
  // supraocular brow ridges: a narrow raised scale ridge over each socket, slanting
  // UP toward the outside of the head (eyelash_front.jpg). The slant direction is the
  // face's expression: inner end HIGH = worried/sad, so the outer end is lifted and
  // the inner end drops toward the nose - a set, determined brow, not a sad one.
  [-1, 1].forEach((s) => {
    // the ridge sits just above the socket's top rim: the socket reaches y 1.77
    // (centre 0.95 + r * 1.2), so a brow at 1.62 drew straight ACROSS the eye and
    // read as a dark bar over it
    const b = part(hg, new THREE.BoxGeometry(0.95, 0.22, 0.26), INK, cfg,
      s * 1.28, 1.90, H - 0.01, 0.004);
    b.rotation.z = s * -0.10;
  });

  // --- MOUTH + FANGS ------------------------------------------------------
  // Read from cobra_fangs.jpg / eyelash_threat.jpg: the upper jaw's chin edge hangs
  // two LONG pale fangs, the mouth opens as a dark gap behind them, and the lower
  // jaw is a thin plate tucked under the chin - never a bulky block below it (a
  // big dark block under the chin read as a muzzle/beard, not a mouth).
  //
  // Measured frames (extrudePoly centres geometry): head front H = 1.60, a jaw
  // wedge at z 1.25 lands its front at 2.14. The earlier passes buried the mouth
  // because the cavity sat BEHIND the jaw's front plane - so now the cavity is ON
  // the chin edge (z >= 1.9) and the fangs hang at z 2.5, ahead of every plane.
  const jaw = extrudePoly([
    [-1.7, 0.5], [-1.9, -0.5], [-1.0, -1.3], [0, -1.6], [1.0, -1.3], [1.9, -0.5],
    [1.7, 0.5], [0, 1.0]
  ], cfg, deep, hg, { depth: 0.9, bevel: 0.18 });
  jaw.mesh.position.set(0, -2.85, H - 0.55);        // a thin plate AT the chin
  jaw.mesh.rotation.x = 0.12;

  // the cavity: a dark gap sitting ON the chin edge, narrower than the chin so its
  // dark shape can never spill past the head silhouette (that read as a moustache)
  {
    const cav = new THREE.Shape();
    const pts = [[-1.40, 0.40], [-0.7, 0.58], [0, 0.66], [0.7, 0.58], [1.40, 0.40],
      [1.10, -0.30], [0.5, -0.52], [0, -0.58], [-0.5, -0.52], [-1.10, -0.30]];
    pts.forEach(([x, y], i) => (i === 0 ? cav.moveTo(x, y) : cav.lineTo(x, y)));
    cav.closePath();
    const geo = new THREE.ExtrudeGeometry(cav, { depth: 0.22, bevelEnabled: false, curveSegments: 10 });
    const m = new THREE.Mesh(geo, surfMaterial(INK, cfg));
    m.position.set(0, -2.62, H + 0.32);            // proud of the chin, faces camera
    hg.add(m);
  }
  // fangs: long pale cones from the chin's front edge pointing DOWN - the strongest
  // "venomous" cue after the eyes, so they are long, slim and fully in front
  [-1, 1].forEach((s) => {
    const f = part(hg, new THREE.ConeGeometry(0.32, 1.9, 10), BONE, cfg,
      s * 0.85, -2.22, H + 0.62, 0.008);
    f.rotation.x = Math.PI;
    f.rotation.z = s * -0.05;
  });
  // one short forked tongue accent low in the cavity: a gap must never become a
  // grin, so this stays small and narrow with dark on both sides of it
  [-1, 1].forEach((s) => {
    const fork = glowMesh(new THREE.BoxGeometry(0.16, 0.46, 0.18), glow);
    fork.position.set(s * 0.20, -3.02, H + 0.55);
    fork.rotation.z = s * 0.30;
    hg.add(fork);
  });

  // --- NECK ----------------------------------------------------------------
  // The narrow pale column under the hood (naja_atra_hood.jpg): thinner than the
  // flare's base, so the hood reads as a separate spread part from the body.
  part(g, new THREE.CylinderGeometry(1.7, 2.2, 5.0, 16), shade, cfg,
    0, -6.8, -1.0, 0.014, 1.35, 1, 0.7);
  // pale ventral banding down the neck front - short, not a ladder
  [-6.0, -7.4].forEach((y) => {
    part(g, new THREE.BoxGeometry(1.9, 0.30, 0.32), deep, cfg, 0, y, 0.15, 0.006);
  });
  // the coil base on the floor so the column does not float
  part(g, new THREE.CylinderGeometry(2.6, 3.0, 1.0, 18), body, cfg, 0, -9.4, -0.6, 0.014, 1.3, 1, 1.0);

  // --- TAIL ----------------------------------------------------------------
  // a stinger tail curling off the coil's base at the front, low, out of the way
  const st = part(g, new THREE.ConeGeometry(0.6, 2.8, 12), glow, cfg, 0, -10.4, 0.8, 0.010);
  st.rotation.x = Math.PI * 0.85;
  return plain(g);
}

export const VIPER_LOOKS_V2 = {
  viper_wyrm: buildViperWyrm
};
