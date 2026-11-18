// ---- SKULL CRUISER: the 3D skull (SINGLE SOURCE OF TRUTH) --------------------
// The one place the Skull Cruiser's head is defined. Built on the same toon kit
// as the rest of the game's 3D assets (surfMaterial / addHull / finishMob from
// mockups/toon3d.js), so it inherits the exact ramp, ink outline and rim light.
//
// Registered as the "skull" builder in js/assets3d.js BUILDERS, which means:
//   * the real game draws it (boss.js pushes key "skull"),
//   * mockups/skull-mouth-lab.html draws it from the SAME code via
//     Iron3D.BUILDERS.skull,
// so a change to the skull here shows up in BOTH the mockup and the game by
// default - there is no second copy to keep in sync.
//
// ONE opaque 3D skull (no alpha, no 2D face layer, nothing showing through):
// cranium dome, rounded tapered face mass, deep-set eye sockets + iris glimmer,
// a heart-shaped nasal aperture, and a CLOSED BITE mouth (3D tapered crowns in a
// dental arch, dark gaps, overbite/overjet, on a rounded-U mandible). The
// crossed bones are 3D parts behind the head.
//
// Authored in the shipped model space (the push adds rot [0,0,PI] to stand it
// up, so screen y = -model y; face on +z). finishMob target 2.3 + FIT_KEY.skull
// 1.15 = the shipped fight size (the mockup's "AS IN GAME" view uses the same).
import * as THREE from "../mockups/vendor/three.module.js";
import { surfMaterial, addHull, finishMob } from "../mockups/toon3d.js";

const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
const BONE = "#f2f2f8";   // the shipped tooth / bone colour
const DARK = "#0d0d14";   // the shipped eye / mouth-line / mouth-backing colour
const GOLD = "#ffe066";   // the Skull Cruiser's accent (the crown colour)

// kit helper: a toon part + its ink shell (pos/rot/sc as arrays)
function part(g, geo, hex, pos, rot, sc, thick) {
  const m = new THREE.Mesh(geo, surfMaterial(hex, RIG));
  m.position.set(pos[0], pos[1], pos[2]);
  if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
  if (sc) m.scale.set(sc[0], sc[1], sc[2]);
  addHull(g, m, geo, thick === undefined ? 0.010 : thick, RIG, hex);
  g.add(m);
  return m;
}

function addBones(g) {
  // 3D crossed bones BEHIND the head (z -10: the head's back face is z ~ -6,
  // so they peek out at the corners like a pirate emblem, with real depth).
  // Built as a group (shaft + 4 end knobs) - the bundle has no
  // BufferGeometryUtils, so merging is not available.
  const mk = (x, y, r) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 10), surfMaterial(BONE, RIG));
    s.position.set(x, y, 0);
    return s;
  };
  [Math.PI / 4, -Math.PI / 4].forEach((rz) => {
    const b = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(3.0, 3.0, 58, 14), surfMaterial(BONE, RIG));
    b.add(shaft);
    [-1, 1].forEach((s) => {
      b.add(mk(-2.6, s * 30.5, 4.6));
      b.add(mk(2.6, s * 30.5, 4.6));
    });
    b.position.set(0, -1, -10);
    b.rotation.z = rz;
    g.add(b);
  });
}

// CROWN: a gold crown on top of the cranium (model y ~ -18, the head's apex).
// Three styles, all built from the same toon kit so they inherit the ramp/ink/rim.
// The mockup drives which style shows; the picked one is what ships in the game.
function addCrown(g, style) {
  if (!style || style === "none") return;
  const spike = (x, h, r) => {
    const m = part(g, new THREE.ConeGeometry(r, h, 8), GOLD, [x, -18 - h / 2, 0], null, null, 0.010);
    m.rotation.x = Math.PI; // tip points up (model y more negative = screen top)
  };
  if (style === "spikes") {
    [[-8, 5], [-4, 6], [0, 7], [4, 6], [8, 5]].forEach(([x, h]) => spike(x, h, 1.6));
  } else if (style === "band") {
    part(g, new THREE.CylinderGeometry(9.5, 10.5, 3.5, 18), GOLD, [0, -17.5, 0], null, null, 0.012);
    [[-8, 5], [-4, 6], [0, 7], [4, 6], [8, 5]].forEach(([x, h]) => spike(x, h, 1.5));
  } else if (style === "pirate") {
    spike(0, 9, 2.4);
    [[-7, 5], [-3.5, 6], [3.5, 6], [7, 5]].forEach(([x, h]) => spike(x, h, 1.4));
    part(g, new THREE.SphereGeometry(1.6, 12, 10), "#ff3366", [0, -19, 5], null, null, 0);
  }
}

// cfg  = the RIG (toon/ink/rim params) - the game passes its own RIG.
// hex  = the boss's design colour (kept for signature parity; the skull is white bone).
// opts = { bones: true|false } - the crossed-bones toggle (the mockup drives it;
//        the game always builds them). A non-object (e.g. the game's quality arg)
//        means "bones on".
export function buildSkull3D(cfg, hex, opts) {
  const o = (opts && typeof opts === "object") ? opts : {};
  const g = new THREE.Group();
  if (o.bones !== false) addBones(g);
  addCrown(g, o.crown);
  // cranium: the dome (model y -19..4 region = screen top)
  part(g, new THREE.SphereGeometry(12.5, 28, 20), BONE, [0, -6.5, 0], null, [1.15, 1.0, 0.92], 0.018);
  // face mass: tapered ROUNDED profile (brow-to-cheek), extruded in Z with a
  // bevel so the front/back edges round off. Widest at the cheekbones (the
  // zygomatic arches), tapering inward to the jaw - no hard box edges.
  const face = new THREE.Shape();
  const fr = 3; // corner radius
  face.moveTo(-12.5 + fr, -3.5);
  face.lineTo(12.5 - fr, -3.5);                       // top (brow) edge
  face.quadraticCurveTo(12.5, -3.5, 12.5, -3.5 + fr); // top-right corner
  face.quadraticCurveTo(14.6, 0.5, 13.6, 3.0);        // right cheekbone bulge
  face.quadraticCurveTo(12.0, 9.0, 9.5, 9.0);         // taper into the jaw
  face.lineTo(-9.5, 9.0);                             // bottom (jaw) edge
  face.quadraticCurveTo(-12.0, 9.0, -13.6, 3.0);      // taper out of the jaw
  face.quadraticCurveTo(-14.6, 0.5, -12.5, -3.5 + fr);// left cheekbone bulge
  face.quadraticCurveTo(-12.5, -3.5, -12.5 + fr, -3.5);// top-left corner
  face.closePath();
  const faceGeo = new THREE.ExtrudeGeometry(face, {
    depth: 10, bevelEnabled: true, bevelThickness: 1.2, bevelSize: 1.2,
    bevelSegments: 3, curveSegments: 8
  });
  faceGeo.center();
  part(g, faceGeo, BONE, [0, 2.5, 2.5], null, null, 0.018);
  // eye sockets: big dark spheres set INTO the face (centred behind the front
  // face so only the front cap shows = deep socket), angled inward
  const eye = new THREE.SphereGeometry(5.4, 22, 16);
  [[-1, 8], [1, -8]].forEach(([s, rz]) => {
    const m = part(g, eye, DARK, [s * 7.6, -0.5, 6.6], null, [1, 1.15, 0.7], 0);
    m.rotation.z = rz * Math.PI / 180;
    // iris glimmer: a small white bead on the socket surface (the dark socket
    // sphere's front cap reaches z ~10.4, so the bead sits just in front of it)
    part(g, new THREE.SphereGeometry(1.3, 12, 10), "#ffffff", [s * 7.6, -1.2, 10.9], null, null, 0);
  });
  // nasal aperture: HEART-SHAPED (real anatomy, Lumen anterior view) - a broad
  // nasal bridge at the top, the sides curving inward to a point at the tip.
  // Narrow (~1/3 of the inter-orbital distance), sitting between and just
  // below the orbits.
  const nose = new THREE.Shape();
  nose.moveTo(-2.7, 0);
  nose.lineTo(2.7, 0);
  nose.quadraticCurveTo(2.4, -2.9, 0, -6.0);   // right side curving to the tip
  nose.quadraticCurveTo(-2.4, -2.9, -2.7, 0);  // left side curving back up
  nose.closePath();
  const noseGeo = new THREE.ExtrudeGeometry(nose, { depth: 4, bevelEnabled: false });
  noseGeo.center();
  part(g, noseGeo, DARK, [0, 3.6, 8.6], null, null, 0);
  // ---- MOUTH (closed bite) --------------------------------------------------
  {
    // CLOSED BITE: anatomical interlocking rows
    part(g, new THREE.BoxGeometry(19, 7.5, 11.5), BONE, [0, 11.5, 2.0], null, null, 0.016);
    [[-1, 14], [1, -14]].forEach(([s, rz]) =>
      part(g, new THREE.BoxGeometry(5, 8, 7), BONE, [s * 10.5, 11.0, -1.5], null, null, 0.010).rotation.z = rz * Math.PI / 180);
    // lower jaw: rounded U-shape (real mandible) with a rounded chin - no hard
    // box edges on the jaw line.
    const jaw = new THREE.Shape();
    const jr = 3.2;
    jaw.moveTo(-8.5 + jr, 0);
    jaw.lineTo(8.5 - jr, 0);
    jaw.quadraticCurveTo(8.5, 0, 8.5, jr);
    jaw.lineTo(8.5, 5 - jr);
    jaw.quadraticCurveTo(8.5, 5, 8.5 - jr, 5);
    jaw.lineTo(-8.5 + jr, 5);
    jaw.quadraticCurveTo(-8.5, 5, -8.5, 5 - jr);
    jaw.lineTo(-8.5, jr);
    jaw.quadraticCurveTo(-8.5, 0, -8.5 + jr, 0);
    jaw.closePath();
    const jawGeo = new THREE.ExtrudeGeometry(jaw, {
      depth: 10, bevelEnabled: true, bevelThickness: 1, bevelSize: 1,
      bevelSegments: 3, curveSegments: 8
    });
    jawGeo.center();
    part(g, jawGeo, BONE, [0, 16.5, 2.5], null, null, 0.014);
    [[-1, -16], [1, 16]].forEach(([s, rz]) =>
      part(g, new THREE.BoxGeometry(4.5, 7, 6.5), BONE, [s * 9.0, 14.5, -1.0], null, null, 0.010).rotation.z = rz * Math.PI / 180);
    // backing sits only behind the tooth rows (top at the upper gum line,
    // bottom just above the lower gum) - no dark slab above the teeth
    part(g, new THREE.BoxGeometry(17.5, 6.4, 3), DARK, [0, 12.0, 8.2], null, null, 0);
    // Real 3D teeth in a DENTAL ARCH (researched: Lumen Anatomy "The Skull" -
    // the alveolar process of the maxilla/mandible is a U/parabolic arch; each
    // tooth is a 3D crown anchored in a socket). Front teeth sit at the front
    // of the arch (highest z), the molars curve back (lower z). Each tooth is a
    // tapered crown with real extrusion depth (a front labial face + a back) and
    // a slight forward lean. Dark gaps between the teeth let the dark mouth
    // show through. Uppers overlap the lowers (overbite) and sit in front
    // (overjet).
    const BONE2 = "#c9c9d4";   // lowers: -20% brightness
    const toothGeo = (wTop, wBottom, h, depth) => {
      const s = new THREE.Shape();
      s.moveTo(-wTop / 2, h / 2);
      s.lineTo(wTop / 2, h / 2);
      s.lineTo(wBottom / 2, -h / 2);
      s.lineTo(-wBottom / 2, -h / 2);
      s.closePath();
      const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
      geo.center();
      return geo;
    };
    const archZ = (x, zFront, k) => zFront - k * x * x;
    // upper row: molar, canine, incisor (per side). Gum line at y 8.7; each
    // tooth's centre sits at 8.7 + h/2 so the crowns hang from the gum.
    // Incisors are wide + flat, canines are long + pointed, molars are wide.
    // Deeper crowns (real 3D volume, per the angled reference views) and a
    // stronger arch so the molars recede back into the jaw.
    const upTeeth = [
      [-7.25, 2.9, 2.5, 3.6, 4.4],  // molar (wide, flat, deep)
      [-4.35, 2.5, 0.9, 4.8, 4.6],  // canine (long, pointed, deep)
      [-1.45, 2.9, 2.3, 3.9, 4.6],  // incisor (wide, flat, deep)
      [1.45, 2.9, 2.3, 3.9, 4.6],   // incisor
      [4.35, 2.5, 0.9, 4.8, 4.6],   // canine
      [7.25, 2.9, 2.5, 3.6, 4.4]    // molar
    ];
    upTeeth.forEach(([x, wt, wb, h, d]) => {
      const m = part(g, toothGeo(wt, wb, h, d), BONE,
        [x, 8.7 + h / 2, archZ(x, 10.8, 0.055)], null, null, 0);
      m.rotation.y = x * 0.028; // toe-out: back teeth angle outward (arch)
      m.rotation.x = -0.22; // forward lean: the labial face reads
    });
    // lower row: 5 teeth pointing up from the jaw (gum at y 15.5), peeking
    // below the uppers. Wider at the gum (bottom), narrowing to the tip.
    const loTeeth = [
      [-6.0, 2.5, 2.9, 3.4, 4.0],  // molar
      [-3.0, 2.1, 2.7, 3.6, 4.0],  // premolar
      [0, 2.3, 2.7, 3.8, 4.0],     // incisor
      [3.0, 2.1, 2.7, 3.6, 4.0],   // premolar
      [6.0, 2.5, 2.9, 3.4, 4.0]    // molar
    ];
    loTeeth.forEach(([x, wt, wb, h, d]) => {
      const m = part(g, toothGeo(wt, wb, h, d), BONE2,
        [x, 15.5 - h / 2, archZ(x, 10.1, 0.055)], null, null, 0);
      m.rotation.y = x * 0.028; // toe-out
      m.rotation.x = 0.08; // lowers more upright
    });
  }
  return finishMob(g, 2.3);
}
