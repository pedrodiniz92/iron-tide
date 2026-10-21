import * as THREE from "./vendor/three.module.js";
import { GAME_COLOR, GEO, addHull, finishMob, part, surfMaterial } from "./toon3d.js";

// Points are given in the game's own canvas space (y grows DOWN); polyShape flips y
// so the 3D model stands the same way the 2D sprite does.
function polyShape(pts, close) {
  const sh = new THREE.Shape();
  pts.forEach(([x, y], i) => (i ? sh.lineTo(x, -y) : sh.moveTo(x, -y)));
  if (close !== false) sh.closePath();
  return sh;
}

// Same polygon with its corners cut by quadratic arcs, so the body reads chunky and round.
function roundedShape(pts, radius) {
  const n = pts.length;
  const P = pts.map(([x, y]) => new THREE.Vector2(x, -y));
  let r = radius;
  for (let i = 0; i < n; i += 1) {
    const len = P[i].distanceTo(P[(i + 1) % n]);
    r = Math.min(r, len * 0.45);
  }
  const sh = new THREE.Shape();
  for (let i = 0; i < n; i += 1) {
    const cur = P[i];
    const a = cur.clone().sub(P[(i - 1 + n) % n]).normalize().multiplyScalar(r);
    const b = P[(i + 1) % n].clone().sub(cur).normalize().multiplyScalar(r);
    const from = cur.clone().sub(a);
    const to = cur.clone().add(b);
    if (i === 0) sh.moveTo(from.x, from.y);
    else sh.lineTo(from.x, from.y);
    sh.quadraticCurveTo(cur.x, cur.y, to.x, to.y);
  }
  sh.closePath();
  return sh;
}

function extrudePoly(pts, cfg, hex, group, opts) {
  const o = opts || {};
  const sh = o.round ? roundedShape(pts, o.round) : polyShape(pts);
  let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
  pts.forEach(([x, y]) => {
    minx = Math.min(minx, x); maxx = Math.max(maxx, x);
    miny = Math.min(miny, y); maxy = Math.max(maxy, y);
  });
  const span = Math.max(maxx - minx, maxy - miny);
  const depth = (o.depth || span * 0.34);
  const bev = (o.bevel === undefined ? span * 0.06 : o.bevel);
  const geo = new THREE.ExtrudeGeometry(sh, {
    depth, bevelEnabled: bev > 0, bevelThickness: bev, bevelSize: bev * 0.9,
    bevelSegments: 3, curveSegments: 12
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, o.map ? Object.assign({}, cfg, { map: o.map, mapS: o.mapS, mapO: o.mapO }) : cfg));
  addHull(group, mesh, geo, 0.020, cfg, hex);
  group.add(mesh);
  return { mesh, span, front: depth / 2 + bev };
}

function discRing(group, radius, tube, hex, cfg, y, sx) {
  const geo = new THREE.TorusGeometry(radius, tube, 10, 44);
  const m = part(group, geo, hex, cfg, 0, y, 0, 0.010, sx || 1, sx || 1, 1);
  m.rotation.x = Math.PI / 2;
  return m;
}

// A real flying saucer: lathe-turned disc (round from every angle), glass dome,
// rim lights in the game's #ffe9a8, and a glowing underside emitter.
export function buildSaucer(cfg, hex) {
  const g = new THREE.Group();
  const pink = hex || GAME_COLOR.ufo;
  const profile = [[0, -9], [6, -8.6], [12, -6.4], [19, -3], [25.5, 0.4], [26, 1.6],
    [23, 3.4], [17, 5.4], [10, 6.8], [4, 7.4], [0, 7.5]]
    .map(([x, y]) => new THREE.Vector2(x, -y));
  const disc = new THREE.Mesh(new THREE.LatheGeometry(profile, 56), surfMaterial(pink, cfg));
  addHull(g, disc, disc.geometry, 0.020, cfg, pink);
  g.add(disc);

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(9.4, 40, 22, 0, Math.PI * 2, 0, Math.PI * 0.52),
    surfMaterial("#dff2ff", cfg)
  );
  dome.position.y = 7.0;
  addHull(g, dome, dome.geometry, 0.012, cfg, "#dff2ff");
  g.add(dome);
  const pilot = new THREE.Mesh(new THREE.SphereGeometry(3.4, 20, 14), surfMaterial(pink, cfg));
  pilot.scale.set(1, 0.9, 1);
  pilot.position.y = 7.6;
  g.add(pilot);

  const lights = new THREE.Group();
  for (let i = 0; i < 6; i += 1) {
    const a = (i / 6) * Math.PI * 2;
    const l = new THREE.Mesh(new THREE.SphereGeometry(2.5, 18, 12),
      new THREE.MeshBasicMaterial({ color: "#ffe9a8" }));
    l.position.set(Math.cos(a) * 21.5, -1.4, Math.sin(a) * 21.5);
    lights.add(l);
  }
  g.add(lights);
  g.userData.spin = [lights];

  const beam = new THREE.Mesh(new THREE.CircleGeometry(8.5, 34),
    new THREE.MeshBasicMaterial({ color: "#ffe066", side: THREE.DoubleSide }));
  beam.rotation.x = Math.PI / 2;
  beam.position.y = -9.1;
  g.add(beam);
  return finishMob(g, 2.35);
}

// PLAYER A — wide gunship hauler (the game's classic-cannon silhouette widened into a hull).
export function buildPlayerC(cfg, hex) {
  const g = new THREE.Group();
  const green = hex || GAME_COLOR.player;
  const hull = new THREE.Mesh(new THREE.BoxGeometry(30, 12, 16), surfMaterial(green, cfg));
  addHull(g, hull, hull.geometry, 0.020, cfg, green);
  g.add(hull);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 7), surfMaterial("#dff6ff", cfg));
  strip.position.set(0, 6.5, 5);
  addHull(g, strip, strip.geometry, 0.012, cfg, "#dff6ff");
  g.add(strip);
  const wing = new THREE.BoxGeometry(24, 4, 12);
  const pods = [];
  [-1, 1].forEach((s) => {
    const w = part(g, wing, green, cfg, s * 24, 0, -2, 0.016);
    w.rotation.z = s * 0.12;
    [-6, 4].forEach((z) => {
      const pod = part(g, new THREE.CylinderGeometry(3.2, 3.2, 10, 18), "#2a3038", cfg, s * 30, -3, z, 0.010);
      pod.rotation.x = Math.PI / 2;
      pods.push(pod);
      const glow = new THREE.Mesh(new THREE.CircleGeometry(2.7, 20),
        new THREE.MeshBasicMaterial({ color: "#7888ff" }));
      glow.position.set(s * 30, -3, z - 5.2);
      glow.rotation.y = Math.PI;
      g.add(glow);
    });
    part(g, new THREE.BoxGeometry(3, 10, 9), green, cfg, s * 33, 6, -4, 0.010);
  });
  part(g, new THREE.BoxGeometry(10, 3, 8), "#2a3038", cfg, 0, -2, -10, 0.010);
  const barrel = new THREE.CylinderGeometry(1.5, 1.7, 13, 14);
  const muzzle = new THREE.CylinderGeometry(2.3, 2.3, 2.6, 14);
  [0].forEach((x) => {
    const gun = part(g, barrel, "#2a3038", cfg, x, 0.5, 12, 0.010);
    gun.rotation.x = Math.PI / 2;
    const tip = part(g, muzzle, "#ffd166", cfg, x, 0.5, 18.5, 0.008);
    tip.rotation.x = Math.PI / 2;
  });
  part(g, new THREE.BoxGeometry(8, 4.5, 5), "#2a3038", cfg, 0, 0.5, 8, 0.010);
  g.userData.spin = [];
  g.userData.claws = [];
  return finishMob(g, 2.35);
}

// ---- CRAB B: built from the game's own crab sprite (wide flat shell, eye gaps, legs) ----
export function buildCrabB(cfg, hex, opts) {
  const o = opts || {};
  const g = new THREE.Group();
  const yellow = hex || GAME_COLOR.crab;
  const shell = extrudePoly([
    [-14, -8], [14, -8], [18, 2], [12, 10], [-12, 10], [-18, 2]
  ], cfg, yellow, g, { depth: 18, bevel: 3.4, round: 6, map: o.map, mapS: o.mapS, mapO: o.mapO });
  g.userData.shell = shell.mesh;
  part(g, new THREE.SphereGeometry(6, 24, 14), yellow, cfg, 0, 12, 2, 0.014, 2.1, 0.5, 1.2);
  for (const s of [-1, 1]) {
    part(g, new THREE.CylinderGeometry(1.7, 1.7, 7, 14), yellow, cfg, s * 5.5, 15, 2, 0.010);
    part(g, new THREE.SphereGeometry(3.1, 18, 12), "#f6fbff", cfg, s * 5.5, 19, 2, 0.010);
    part(g, new THREE.SphereGeometry(1.5, 12, 8), "#141020", cfg, s * 5.5, 19.5, 4.4, 0.006);
  }
  const legs = [];
  for (const s of [-1, 1]) {
    [[-11, 4], [-3, 8], [5, 10], [12, 8]].forEach(([x, z], i) => {
      const p = new THREE.Group();
      p.position.set(x, -8, z - 6);
      p.rotation.z = s * (0.5 + i * 0.14);
      p.rotation.x = -0.3 + i * 0.2;
      const seg = part(p, new THREE.CylinderGeometry(1.9, 1.0, 13, 14), yellow, cfg, s * 5, -3, 0, 0.012);
      seg.rotation.z = s * 0.5;
      const foot = part(p, new THREE.ConeGeometry(1.5, 8, 12), yellow, cfg, s * 9, -8, 0, 0.010);
      foot.rotation.z = s * 1.1;
      g.add(p);
      legs.push(p);
    });
  }
  g.userData.legs = legs;
  const claws = [];
  for (const s of [-1, 1]) {
    const p = new THREE.Group();
    p.position.set(s * 15, -6, 6);
    p.rotation.z = s * 0.5;
    part(p, new THREE.CylinderGeometry(2.4, 2.0, 9, 14), yellow, cfg, 0, 4, 0, 0.012);
    part(p, new THREE.SphereGeometry(4.2, 20, 14), yellow, cfg, 0, 11, 0, 0.012, 1, 1.2, 0.8);
    part(p, new THREE.ConeGeometry(1.9, 7, 12), yellow, cfg, s * 3.4, 15, 0, 0.010);
    g.add(p);
    claws.push(p);
  }
  g.userData.claws = claws;
  return finishMob(g, 2.3);
}

// ---- CRAB C: round tall carapace, big raised pincers, six legs ----
export function buildCrabC(cfg, hex) {
  const g = new THREE.Group();
  const yellow = hex || GAME_COLOR.crab;
  const shell = new THREE.Mesh(new THREE.SphereGeometry(15, 44, 26), surfMaterial(yellow, cfg));
  shell.scale.set(1.5, 1.15, 1.25);
  shell.position.y = 6;
  addHull(g, shell, shell.geometry, 0.022, cfg, yellow);
  g.add(shell);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(19, 2.6, 12, 40), surfMaterial("#e0a83c", cfg));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 2;
  rim.scale.set(1.45, 1.1, 1);
  addHull(g, rim, rim.geometry, 0.014, cfg, "#e0a83c");
  g.add(rim);
  for (const s of [-1, 1]) {
    part(g, new THREE.CylinderGeometry(2.1, 2.1, 10, 14), yellow, cfg, s * 7, 19, 2, 0.010);
    part(g, new THREE.SphereGeometry(4, 20, 14), "#f6fbff", cfg, s * 7, 25, 2, 0.012);
    part(g, new THREE.SphereGeometry(1.9, 12, 8), "#141020", cfg, s * 7, 25.5, 5.4, 0.006);
  }
  const legs = [];
  for (const s of [-1, 1]) {
    [[-16, 8], [-4, 12], [8, 10]].forEach(([x, z], i) => {
      const p = new THREE.Group();
      p.position.set(x, 0, z - 8);
      p.rotation.z = s * (0.55 + i * 0.16);
      const seg = part(p, new THREE.CylinderGeometry(2.2, 1.2, 16, 14), yellow, cfg, s * 6, -6, 0, 0.012);
      seg.rotation.z = s * 0.55;
      const low = part(p, new THREE.CylinderGeometry(1.2, 0.7, 12, 12), yellow, cfg, s * 12, -13, 0, 0.010);
      low.rotation.z = s * 0.35;
      g.add(p);
      legs.push(p);
    });
  }
  g.userData.legs = legs;
  const claws = [];
  for (const s of [-1, 1]) {
    const p = new THREE.Group();
    p.position.set(s * 20, 4, 6);
    p.rotation.z = s * 0.35;
    part(p, new THREE.CylinderGeometry(3.2, 2.6, 12, 16), yellow, cfg, 0, 7, 0, 0.014);
    const palm = part(p, new THREE.SphereGeometry(6.4, 22, 16), yellow, cfg, 0, 16, 0, 0.016, 1, 1.25, 0.85);
    palm.position.x = s * 1.5;
    const fixed = part(p, new THREE.ConeGeometry(3.1, 12, 14), "#e0a83c", cfg, s * 5, 23, 0, 0.012);
    fixed.rotation.z = -s * 0.35;
    const dactyl = new THREE.Group();
    dactyl.position.set(s * 4, 18, 0);
    dactyl.rotation.z = s * 0.9;
    const mov = part(dactyl, new THREE.ConeGeometry(2.6, 11, 14), "#e0a83c", cfg, 0, 5, 0, 0.012);
    mov.rotation.z = -s * 0.5;
    p.add(dactyl);
    g.add(p);
    claws.push(p);
  }
  g.userData.claws = claws;
  part(g, new THREE.BoxGeometry(12, 3.4, 8), "#8a5a20", cfg, 0, -6, 12, 0.010);
  return finishMob(g, 2.3);
}

// ---- SCRAPLING: the game's own scrap body + 3 wheels + eyes + welded scrap plates ----
export function buildScrapB(cfg, hex) {
  const g = new THREE.Group();
  const blue = hex || GAME_COLOR.scrap;
  const body = extrudePoly([
    [-22, 18], [-18, -6], [-6, -14], [14, -14], [22, -2], [22, 18]
  ], cfg, blue, g, { depth: 20, bevel: 1.6 });
  const front = body.front;
  part(g, new THREE.BoxGeometry(16, 5, 13), "#4f8cff", cfg, 6, 17, 2, 0.012);
  part(g, new THREE.CylinderGeometry(2.4, 2.4, 14, 14), "#4f8cff", cfg, -14, 12, 4, 0.010);
  part(g, new THREE.SphereGeometry(3, 14, 10), "#3a3f52", cfg, -14, 20, 4, 0.008);
  [-16, 16].forEach((x) => part(g, new THREE.BoxGeometry(4, 4, 4), "#4f8cff", cfg, x, 4, front - 1, 0.010));
  for (const s of [-1, 1]) {
    part(g, new THREE.SphereGeometry(4.4, 20, 14), "#f6fbff", cfg, s * 8, 4, front - 0.5, 0.012, 1, 1, 0.7);
    part(g, new THREE.SphereGeometry(2.1, 14, 10), "#0d0d14", cfg, s * 8, 4, front + 2.6, 0.006);
  }
  const wheel = new THREE.CylinderGeometry(5.2, 5.2, 26, 22);
  const hub = new THREE.CylinderGeometry(2.2, 2.2, 27, 14);
  const roll = new THREE.Group();
  [-12, 1, 14].forEach((x) => {
    const w = part(roll, wheel, "#22262f", cfg, x, -18, 0, 0.014);
    w.rotation.x = Math.PI / 2;
    const h = part(roll, hub, "#ffd166", cfg, x, -18, 0, 0.008);
    h.rotation.x = Math.PI / 2;
  });
  g.add(roll);
  g.userData.roll = [roll];
  g.userData.legs = [];
  g.userData.claws = [];
  return finishMob(g, 2.35);
}

// ---- SKULL CRUISER: crossed bones, cranium, eye sockets, nose, teeth, jaw, laser orb ----
// One bone, built as its own chunky parts (shaft + 4 rounded lobes), so nothing self-intersects.
function makeBone(cfg, hex, len, shaft, knob, flat) {
  const bone = new THREE.Group();
  const barGeo = new THREE.CylinderGeometry(shaft, shaft, len, 22);
  const bar = new THREE.Mesh(barGeo, surfMaterial(hex, cfg));
  bar.rotation.z = Math.PI / 2;
  bar.scale.z = flat;
  addHull(bone, bar, barGeo, 0.016, cfg, hex);
  bone.add(bar);
  const lobeGeo = new THREE.SphereGeometry(knob, 24, 16);
  [-1, 1].forEach((ex) => [-1, 1].forEach((ey) => {
    const lobe = new THREE.Mesh(lobeGeo, surfMaterial(hex, cfg));
    lobe.position.set((ex * len) / 2, ey * knob * 0.8, 0);
    lobe.scale.set(1, 1, flat);
    addHull(bone, lobe, lobeGeo, 0.014, cfg, hex);
    bone.add(lobe);
  }));
  return bone;
}

export function buildSkullB(cfg, hex) {
  const g = new THREE.Group();
  const pink = hex || GAME_COLOR.skull;
  const bone = "#f2f4f8";
  const boneA = makeBone(cfg, bone, 88, 5.5, 8.6, 0.55);
  boneA.rotation.z = Math.PI / 4;
  boneA.position.set(0, 3, -14);
  g.add(boneA);
  const boneB = makeBone(cfg, bone, 88, 5.5, 8.6, 0.55);
  boneB.rotation.z = -Math.PI / 4;
  boneB.position.set(0, 3, -14);
  g.add(boneB);
  const head = extrudePoly([
    [-20, -10], [-22, -19], [0, -19], [22, -19], [20, -10], [14, 2], [10, 4],
    [10, 14], [-10, 14], [-10, 4], [-14, 2]
  ], cfg, pink, g, { depth: 22, bevel: 2.2 });
  const front = head.front;
  for (const s of [-1, 1]) {
    part(g, new THREE.SphereGeometry(6.4, 22, 14), "#0d0d14", cfg, s * 9.5, 4, front - 1.5, 0.010, 1, 1.15, 0.55);
    part(g, new THREE.SphereGeometry(2.2, 14, 10), "#ff77aa", cfg, s * 9.5, 4.5, front + 1.2, 0.006);
  }
  const nose = extrudePoly([[0, -5], [3.5, 3], [-3.5, 3]], cfg, "#0d0d14", g, { depth: 4, bevel: 0.6 });
  nose.mesh.position.set(0, -1, front - 1.5);
  part(g, new THREE.BoxGeometry(22, 6, 6), "#0d0d14", cfg, 0, -11, front - 2, 0.008);
  const jaw = extrudePoly([[-11, 0], [11, 0], [8, -9], [-8, -9]], cfg, pink, g, { depth: 16, bevel: 1.4 });
  jaw.mesh.position.set(0, -14, -1);
  const tooth = new THREE.BoxGeometry(3.4, 3.6, 4.4);
  for (let i = 0; i < 4; i += 1) {
    const x = -9 + i * 6;
    part(g, tooth, bone, cfg, x, -9.5, front - 2.5, 0.008);
    part(g, tooth, bone, cfg, x - 3, -14.5, front - 2.5, 0.008);
  }
  const orb = new THREE.Mesh(new THREE.SphereGeometry(4.2, 22, 16),
    new THREE.MeshBasicMaterial({ color: "#ff3366" }));
  orb.position.set(0, -13, front - 1);
  g.add(orb);
  g.userData.spin = [];
  g.userData.claws = [];
  g.userData.legs = [];
  const spike = new THREE.ConeGeometry(3.4, 12, 14);
  [-26, -14, 14, 26].forEach((x) => part(g, spike, "#ffd166", cfg, x, 24, -2, 0.012));
  return finishMob(g, 2.45);
}

// ---- TURTLE BULWARK: domed shell with scute plates, rim, plastron, head, flippers, tail ----

const SKIN_CACHE = {};

function hexPath(ctx, cx, cy, rad, rot) {
  ctx.beginPath();
  for (let i = 0; i < 6; i += 1) {
    const a = rot + (i / 6) * Math.PI * 2;
    const x = cx + Math.cos(a) * rad;
    const y = cy + Math.sin(a) * rad;
    if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
  }
  ctx.closePath();
}

function soccerCenters() {
  const phi = (1 + Math.sqrt(5)) / 2;
  const v = [
    [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
    [0, -1, phi], [0, 1, phi], [-phi, 0, 1], [phi, 0, 1],
    [-phi, 0, -1], [phi, 0, -1], [0, -1, -phi], [0, 1, -phi]
  ];
  const f = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
  ];
  const raw = v.map((p) => p.slice());
  f.forEach((t) => raw.push([
    (v[t[0]][0] + v[t[1]][0] + v[t[2]][0]) / 3,
    (v[t[0]][1] + v[t[1]][1] + v[t[2]][1]) / 3,
    (v[t[0]][2] + v[t[1]][2] + v[t[2]][2]) / 3
  ]));
  const n = new THREE.Vector3();
  const q = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, phi).normalize(), new THREE.Vector3(0, 1, 0)
  );
  const cs = raw.map((p) => n.set(p[0], p[1], p[2]).normalize().clone().applyQuaternion(q).normalize());
  const rad = cs.map((c, i) => {
    let m = Infinity;
    cs.forEach((d, j) => {
      if (i !== j) m = Math.min(m, Math.acos(Math.min(1, c.dot(d))) / 2);
    });
    return m * (i < 12 ? 1.236 : 1.155);
  });
  return { cs, rad };
}

function domeSkinTexture(S) {
  if (SKIN_CACHE["d" + S]) return SKIN_CACHE["d" + S];
  const PL = 1024;
  const pc = document.createElement("canvas");
  pc.width = PL; pc.height = PL;
  const p = pc.getContext("2d");
  p.setTransform(1, 0, 0, 1, 0, 0);
  p.fillStyle = "#1c6f3c";
  p.fillRect(0, 0, PL, PL);
  const WX = 29.75 * 1.25;
  const WZ = 29.75 * 1.05;
  p.setTransform(PL / 2 / WX, 0, 0, PL / 2 / WZ, PL / 2, PL / 2);
  const N = 6;
  const s3 = Math.sqrt(3) * S;
  const s15 = 1.5 * S;
  for (let q = -N; q <= N; q += 1) {
    for (let r = Math.max(-N, -q - N); r <= Math.min(N, -q + N); r += 1) {
      const gx = s3 * (q + r / 2);
      const gz = s15 * r;
      if ((gx / WX) * (gx / WX) + (gz / WZ) * (gz / WZ) > 1) continue;
      const ring = Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r));
      const lit = ring === 0 ? "#5cf0a2" : (Math.hypot(gx, gz) > 26 ? "#43c477" : "#4de692");
      const dk = ring === 0 ? "#2f9e60" : (Math.hypot(gx, gz) > 26 ? "#24764a" : "#2c9257");
      const rad = S * 0.93;
      const gr = p.createRadialGradient(gx, gz, rad * 0.12, gx, gz, rad);
      gr.addColorStop(0, lit);
      gr.addColorStop(0.72, lit);
      gr.addColorStop(1, dk);
      p.fillStyle = gr;
      hexPath(p, gx, gz, rad, Math.PI / 6);
      p.fill();
    }
  }
  p.setTransform(1, 0, 0, 1, 0, 0);
  const src = p.getImageData(0, 0, PL, PL).data;
  const TW = 1024;
  const TH = 512;
  const tc = document.createElement("canvas");
  tc.width = TW; tc.height = TH;
  const t = tc.getContext("2d");
  const out = t.createImageData(TW, TH);
  const K = (PL / 2) / 29.75;
  const capPhi = Math.PI * 0.54;
  for (let y = 0; y < TH; y += 1) {
    const phi = ((y + 0.5) / TH) * capPhi;
    const rho = 30 * Math.sin(phi);
    for (let x = 0; x < TW; x += 1) {
      const th = ((x + 0.5) / TW) * Math.PI * 2;
      let px = PL / 2 + Math.cos(th) * rho * K;
      let py = PL / 2 + Math.sin(th) * rho * K;
      px = Math.max(0, Math.min(PL - 1, px)) | 0;
      py = Math.max(0, Math.min(PL - 1, py)) | 0;
      const si = (py * PL + px) * 4;
      const di = ((TH - 1 - y) * TW + x) * 4;
      out.data[di] = src[si];
      out.data[di + 1] = src[si + 1];
      out.data[di + 2] = src[si + 2];
      out.data[di + 3] = 255;
    }
  }
  t.putImageData(out, 0, 0);
  const tex = new THREE.CanvasTexture(tc);
  tex.colorSpace = THREE.SRGBColorSpace;
  SKIN_CACHE["d" + S] = tex;
  return tex;
}

function bandSkinTexture() {
  if (SKIN_CACHE.band) return SKIN_CACHE.band;
  const W = 1024;
  const H = 128;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const g = c.getContext("2d");
  g.fillStyle = "#1c6f3c";
  g.fillRect(0, 0, W, H);
  const cols = 26;
  const cw = W / cols;
  for (let row = 0; row < 3; row += 1) {
    const cy = 28 + row * 36;
    for (let i = -1; i <= cols; i += 1) {
      const cx = (i + 0.5) * cw + (row % 2 ? cw / 2 : 0);
      const gr = g.createRadialGradient(cx, cy, 4, cx, cy, cw * 0.95);
      gr.addColorStop(0, "#43c477");
      gr.addColorStop(1, "#256f47");
      g.fillStyle = gr;
      hexPath(g, cx, cy, cw * 0.62, Math.PI / 6);
      g.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  SKIN_CACHE.band = tex;
  return tex;
}

export function buildTurtleB(cfg, hex) {
  const g = new THREE.Group();
  const green = hex || GAME_COLOR.turtle;
  const dark = "#188a4c";
  const cream = "#d8f5c0";
  const R = 30;
  const rings = cfg.plateRings === undefined ? 3 : cfg.plateRings;
  const flat = cfg.flatBelly === undefined ? 1 : cfg.flatBelly;
  const noRim = Object.assign({}, cfg, { rim: 0, backRim: 0 });
  const SX = 1.25; const SY = 0.8; const SZ = 1.05;
  const SIZES = [8.6, 7.4, 6.4, 5.4, 4.6];
  const S = SIZES[Math.max(0, Math.min(4, rings - 1))];
  const skin = domeSkinTexture(S);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(R, 64, 32, 0, Math.PI * 2, 0, Math.PI * (flat ? 0.54 : 0.995)),
    surfMaterial("#ffffff", Object.assign({}, cfg, { map: skin }))
  );
  dome.scale.set(1.25, 0.8, 1.05);
  dome.position.y = 2;
  addHull(g, dome, dome.geometry, 0.024, cfg, green);
  g.add(dome);
  if (flat) {
    const lid = new THREE.Mesh(new THREE.CircleGeometry(R * 1.0, 52), surfMaterial(dark, noRim));
    lid.rotation.x = Math.PI / 2;
    lid.scale.set(SX, SZ, 1);
    lid.position.y = -0.4;
    addHull(g, lid, lid.geometry, 0.012, noRim, dark);
    g.add(lid);
  }
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(R * 1.02, R * 0.99, 3.6, 52), surfMaterial("#ffffff", Object.assign({}, noRim, { map: bandSkinTexture() })));
  rim.scale.set(SX, 1, SZ);
  rim.position.y = -1;
  addHull(g, rim, rim.geometry, 0.016, noRim, dark);
  g.add(rim);

  part(g, new THREE.BoxGeometry(52, 2.6, 38), cream, noRim, 0, -11, 0, 0.014);

  const neck = part(g, new THREE.CylinderGeometry(6.2, 7.6, 20, 20), "#6fd698", cfg, 0, 0.5, 26, 0.014);
  neck.rotation.x = Math.PI / 2;
  const fold = part(g, new THREE.TorusGeometry(6.9, 1.7, 10, 26), "#4fae78", cfg, 0, 0.5, 20.5, 0.010);
  fold.rotation.x = Math.PI / 2;
  const head = new THREE.Group();
  head.position.set(0, 2, 33);
  part(head, new THREE.SphereGeometry(11, 26, 18), "#7ee6a4", cfg, 0, 2, 4, 0.016, 1.05, 0.95, 1.15);
  part(head, new THREE.SphereGeometry(5.4, 20, 14), "#5fd08a", cfg, 0, -1, 13, 0.012, 1.2, 0.7, 0.9);
  for (const s of [-1, 1]) {
    part(head, new THREE.SphereGeometry(3.1, 18, 12), "#f6fbff", cfg, s * 5, 6, 10, 0.010);
    part(head, new THREE.SphereGeometry(1.6, 12, 8), "#141020", cfg, s * 5, 6, 12.6, 0.006);
    part(head, new THREE.BoxGeometry(5, 1.6, 3), "#3a8f5c", cfg, s * 5, 9.4, 10.5, 0.006);
  }
  part(head, new THREE.BoxGeometry(9, 1.6, 4), "#2a5f3c", cfg, 0, -3, 15, 0.006);
  g.add(head);

  const paddles = [];
  [[-1, 24, 1.35], [1, 24, 1.35], [-1, -20, 0.9], [1, -20, 0.9]].forEach(([s, z, k]) => {
    const p = new THREE.Group();
    p.position.set(s * 24, -4, z);
    p.rotation.y = s * (z > 0 ? -0.5 : 0.5);
    const pad = part(p, new THREE.SphereGeometry(10, 22, 14), "#7ee6a4", cfg, s * 8, 0, 0, 0.014, 1.3, 0.35, 0.8 * k);
    pad.rotation.z = s * 0.35;
    g.add(p);
    paddles.push(p);
  });
  g.userData.claws = paddles;
  g.userData.legs = [];
  g.userData.spin = [];
  const tail = part(g, new THREE.ConeGeometry(5, 14, 14), "#5fd08a", cfg, 0, -2, -32, 0.012);
  tail.rotation.x = Math.PI / 2.2;
  void tail;
  return finishMob(g, 2.5);
}

// ---- LOOT DROPS: the game's own power-up icons as 3D parts (no letters) ----
const QUALITY = { 1: "#ffe066", 2: "#62ffa1", 3: "#ff3366" };
const GLYPH = "#141420";
export const SHIELD_GREEN = "#0c6b3d";

function dropBase(cfg, hex, g) {
  const shape = polyShape([[-12, -8], [-8, -12], [8, -12], [12, -8], [12, 8], [8, 12], [-8, 12], [-12, 8]]);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 9, bevelEnabled: true, bevelThickness: 2.4, bevelSize: 2.2, bevelSegments: 3
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, surfMaterial(hex, cfg));
  addHull(g, mesh, geo, 0.022, cfg, hex);
  g.add(mesh);
  return { front: 4.5 + 2.4 };
}

function qualityFrame(g, qc, z) {
  const bar = new THREE.BoxGeometry(32, 2.4, 2.4);
  const vbar = new THREE.BoxGeometry(2.4, 32, 2.4);
  const mat = new THREE.MeshBasicMaterial({ color: qc });
  [[0, -16, bar], [0, 16, bar], [-16, 0, vbar], [16, 0, vbar]].forEach(([x, y, geo]) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    g.add(m);
  });
}

function dropIcon(g, z, add) {
  const inner = new THREE.Group();
  inner.position.z = z;
  add(inner, z);
  g.add(inner);
}

export const DROPS_V2 = {
  drop_bomb(cfg, color) {
    const g = new THREE.Group();
    const b = dropBase(cfg, color || "#ffe66a", g);
    dropIcon(g, b.front + 1.5, (inner) => {
      const ball = part(inner, new THREE.SphereGeometry(6.6, 26, 18), GLYPH, cfg, 0, -1.5, 1, 0.014);
      ball.position.set(0, -1.5, 1);
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(3.5, 3, 2), new THREE.Vector3(8, 8, 3), new THREE.Vector3(7, 13, 4)
      );
      const fuse = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 1.5, 10, false),
        surfMaterial("#ffd166", cfg));
      inner.add(fuse);
      const spark = new THREE.Mesh(new THREE.SphereGeometry(2.6, 16, 12),
        new THREE.MeshBasicMaterial({ color: "#ff7a00" }));
      spark.position.set(7, 13, 4);
      inner.add(spark);
    });
    return finishMob(g, 2.1);
  },
  drop_shield(cfg, color) {
    const g = new THREE.Group();
    const b = dropBase(cfg, color || "#62ffa1", g);
    dropIcon(g, b.front + 0.5, (inner) => {
      extrudePoly([[0, -11], [9, -6], [7, 8], [0, 12], [-7, 8], [-9, -6]], cfg,
        SHIELD_GREEN, inner, { depth: 5.5, bevel: 1.2 });
      extrudePoly([[0, -6], [5, -3], [4, 4], [0, 7], [-4, 4], [-5, -3]], cfg, "#d9ffe9", inner,
        { depth: 2.4, bevel: 0.5 }).mesh.position.z = 3.6;
    });
    return finishMob(g, 2.1);
  },
  drop_laser(cfg, color) {
    const g = new THREE.Group();
    const hex = color || "#6fdcff";
    const b = dropBase(cfg, hex, g);
    dropIcon(g, b.front + 1, (inner) => {
      [[12, 0.18], [6.5, 0.5], [2.6, 1]].forEach(([w, a]) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, 24, 3),
          new THREE.MeshBasicMaterial({ color: "#f6fbff", transparent: true, opacity: a }));
        m.position.z = 1;
        inner.add(m);
      });
      part(inner, new THREE.BoxGeometry(1.6, 24, 4), "#ffffff", cfg, 0, 0, 1.6, 0.006);
      part(inner, new THREE.SphereGeometry(4, 20, 14), "#f6fbff", cfg, 0, -11, 2, 0.012, 1, 0.8, 1);
      part(inner, new THREE.CylinderGeometry(2, 3.4, 6, 16), GLYPH, cfg, 0, -13, 1, 0.010);
    });
    return finishMob(g, 2.1);
  },
  drop_rapid(cfg, color) {
    const g = new THREE.Group();
    const hex = color || "#ff6655";
    const b = dropBase(cfg, hex, g);
    dropIcon(g, b.front + 0.5, (inner) => {
      extrudePoly([[-2, -12], [-11, 2], [-3, 2], [2, 12], [11, -2], [3, -2]], cfg, GLYPH, inner,
        { depth: 6, bevel: 1.4 });
    });
    return finishMob(g, 2.1);
  },
  drop_double(cfg, color) {
    const g = new THREE.Group();
    const hex = color || "#ffb04c";
    const b = dropBase(cfg, hex, g);
    dropIcon(g, b.front + 0.5, (inner) => {
      [0, 14].forEach((off) => {
        const pts = [[17, 8], [24, 22], [20, 22], [20, 37], [14, 37], [14, 22], [10, 22]]
          .map(([x, y]) => [(x - 24) * 0.62 + off * 0.5, (y - 22) * 0.62]);
        extrudePoly(pts, cfg, GLYPH, inner, { depth: 5, bevel: 1 });
      });
    });
    return finishMob(g, 2.1);
  },
  drop_slow(cfg, color) {
    const g = new THREE.Group();
    const hex = color || "#bf9cff";
    const b = dropBase(cfg, hex, g);
    dropIcon(g, b.front + 0.5, (inner) => {
      extrudePoly([[-8, -10], [8, -10], [2, 0], [8, 10], [-8, 10], [-2, 0]], cfg, GLYPH, inner,
        { depth: 6, bevel: 1.2 });
    });
    return finishMob(g, 2.1);
  },
  drop_loot(cfg, color, quality) {
    const g = new THREE.Group();
    const hex = color || "#ffd166";
    const b = dropBase(cfg, hex, g);
    const lower = part(g, new THREE.CylinderGeometry(13.6, 13.6, 11.6, 8), "#c08f2f", cfg, 0, -2.6, 0, 0.010);
    lower.rotation.y = Math.PI / 8;
    const belt = part(g, new THREE.CylinderGeometry(13.9, 13.9, 3.6, 8), "#8a6a20", cfg, 0, 4, 0, 0.010);
    belt.rotation.y = Math.PI / 8;
    dropIcon(g, b.front + 0.4, (inner) => {
      part(inner, new THREE.BoxGeometry(6, 5, 3.4), "#2b2b0e", cfg, 0, 0.5, 2.4, 0.010);
      qualityFrame(g, QUALITY[quality] || QUALITY[2], b.front + 3);
    });
    return finishMob(g, 2.1);
  }
};

// PLAYER B — same gunship wings and engines, triangular middle hull.
export function buildPlayerTri(cfg, hex) {
  const g = new THREE.Group();
  const green = hex || GAME_COLOR.player;
  const tri = extrudePoly([[0, -30], [24, 20], [-24, 20]], cfg, green, g, { depth: 14, bevel: 2.8, round: 9 });
  tri.mesh.rotation.x = Math.PI / 2;
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(6, 26, 16), surfMaterial("#dff6ff", cfg));
  canopy.scale.set(0.95, 0.7, 1.9);
  canopy.position.set(0, 7, 4);
  addHull(g, canopy, canopy.geometry, 0.012, cfg, "#dff6ff");
  g.add(canopy);
  const dorsal = extrudePoly([[-3, 16], [3, 16], [1, -12], [-1, -12]], cfg, "#2a3038", g, { depth: 4, bevel: 0.8 });
  dorsal.mesh.rotation.y = Math.PI / 2;
  dorsal.mesh.position.set(0, 8, -6);
  const wing = new THREE.BoxGeometry(24, 4, 13);
  [-1, 1].forEach((sd) => {
    const w = part(g, wing, green, cfg, sd * 26, -1, -4, 0.016);
    w.rotation.z = sd * 0.1;
    w.rotation.y = sd * 0.22;
    [-6, 5].forEach((z) => {
      const pod = part(g, new THREE.CylinderGeometry(3.2, 3.2, 10, 18), "#2a3038", cfg, sd * 32, -4, z - 4, 0.010);
      pod.rotation.x = Math.PI / 2;
      const glow = new THREE.Mesh(new THREE.CircleGeometry(2.7, 20),
        new THREE.MeshBasicMaterial({ color: "#7888ff" }));
      glow.position.set(sd * 32, -4, z - 9.2);
      glow.rotation.y = Math.PI;
      g.add(glow);
    });
    part(g, new THREE.BoxGeometry(3, 11, 9), green, cfg, sd * 35, 6, -6, 0.010);
  });
  const nose = new THREE.Mesh(new THREE.ConeGeometry(4.4, 12, 16), surfMaterial("#ffd166", cfg));
  nose.rotation.x = -Math.PI / 2;
  nose.position.set(0, 0, 26);
  addHull(g, nose, nose.geometry, 0.012, cfg, "#ffd166");
  g.add(nose);
  g.userData.spin = [];
  g.userData.claws = [];
  return finishMob(g, 2.35);
}

export const MOB_V2 = {
  ufo: buildSaucer,
  player: buildPlayerC, player_b: buildPlayerTri,
  crab_b: buildCrabB, crab_c: buildCrabC,
  scrap: buildScrapB, skull: buildSkullB, turtle: buildTurtleB,
  drop_bomb: DROPS_V2.drop_bomb, drop_shield: DROPS_V2.drop_shield, drop_laser: DROPS_V2.drop_laser,
  drop_rapid: DROPS_V2.drop_rapid, drop_double: DROPS_V2.drop_double, drop_slow: DROPS_V2.drop_slow,
  drop_loot: DROPS_V2.drop_loot
};

export const LABEL_V2 = {
  ufo: "UFO (SAUCER)", player: "PLAYER SHIP (A: GUNSHIP)",
  player_b: "PLAYER SHIP (B: TRIANGULAR MIDDLE)",
  crab_b: "CRAB (B: SPRITE SHELL)", crab_c: "CRAB (C: ROUND, BIG PINCERS)",
  scrap: "MINIBOSS: SCRAPLING", skull: "BOSS: SKULL CRUISER", turtle: "BOSS: TURTLE BULWARK",
  drop_bomb: "LOOT: BOMB (B)", drop_shield: "LOOT: SHIELD (S)", drop_laser: "LOOT: LASER (L)",
  drop_rapid: "LOOT: RAPID FIRE (R)", drop_double: "LOOT: DOUBLE SHOT (D)",
  drop_slow: "LOOT: TIME WARP (Z)", drop_loot: "LOOT: CRATE (C, quality 2)"
};

export const COLOR_V2 = {
  crab_b: "#ffd26b", crab_c: "#ffd26b", player_b: "#78ff78"
};
