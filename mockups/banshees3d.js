import * as THREE from "./vendor/three.module.js";
import { addHull, finishMob, part, surfMaterial } from "./toon3d.js";

const DARK = "#171226";

export const BANSHEES = {
  ghost: "SHEET GHOST (classic)",
  veiled: "VEILED BANSHEE (hood + wail)",
  wail: "WAIL WISP (skull + vortex)"
};

export function buildBanshee(kind, cfg, hex) {
  const g = new THREE.Group();
  const body = hex || (kind === "wail" ? "#dfe9ff" : "#cfe6ff");
  g.userData.spin = [];
  if (kind === "veiled") {
    const hood = part(g, new THREE.ConeGeometry(0.44, 0.85, 26), body, cfg, 0, 0.5, -0.02, 0.016, 1, 1, 1.05);
    hood.rotation.x = -0.22;
    part(g, new THREE.SphereGeometry(0.3, 24, 16), DARK, cfg, 0, 0.3, 0.16, 0.010, 1, 1.15, 0.7);
    for (const s of [-1, 1]) {
      part(g, new THREE.SphereGeometry(0.06, 12, 8), "#eaf4ff", cfg, s * 0.11, 0.36, 0.35, 0.005);
      part(g, new THREE.ConeGeometry(0.055, 0.42, 10), body, cfg, s * 0.44, 0.02, 0.18, 0.008, 1, 1, 1)
        .rotation.z = s * -1.25;
    }
    part(g, new THREE.SphereGeometry(0.075, 12, 10), "#0d0a18", cfg, 0, 0.14, 0.37, 0.005, 0.6, 1.3, 0.5);
    [[0.4, 0.06], [0.32, 0.05], [0.22, 0.04], [0.12, 0.03]].forEach(([r, xw], i) => {
      part(g, new THREE.SphereGeometry(r, 20, 14), body, cfg, (i % 2 ? 1 : -1) * xw, 0.02 - i * 0.25, 0.02 + i * 0.04, 0.012, 1, 1.15, 1);
    });
    for (let i = 0; i < 4; i += 1) {
      const strand = part(g, new THREE.ConeGeometry(0.045, 0.5, 8), body, cfg, -0.18 + i * 0.12, 0.95, -0.18, 0.008);
      strand.rotation.x = -0.55 - i * 0.08;
      strand.rotation.z = (i - 1.5) * 0.16;
    }
  } else if (kind === "wail") {
    part(g, new THREE.SphereGeometry(0.38, 26, 18), body, cfg, 0, 0.44, 0, 0.016, 1, 1.05, 1.02);
    for (const s of [-1, 1]) {
      part(g, new THREE.SphereGeometry(0.12, 14, 10), DARK, cfg, s * 0.15, 0.48, 0.36, 0.006, 1, 1.1, 0.85);
      part(g, new THREE.SphereGeometry(0.13, 14, 10), body, cfg, s * 0.3, 0.08, 0, 0.010);
      const arm = part(g, new THREE.CylinderGeometry(0.055, 0.07, 0.42, 10), body, cfg, s * 0.46, -0.14, 0.04, 0.008);
      arm.rotation.z = s * 0.5;
      part(g, new THREE.SphereGeometry(0.08, 12, 8), body, cfg, s * 0.56, -0.34, 0.06, 0.006, 1, 1.2, 0.8);
    }
    part(g, new THREE.SphereGeometry(0.11, 14, 12), DARK, cfg, 0, 0.22, 0.38, 0.005, 0.8, 1.2, 0.75);
    [[0.3, -0.1], [0.23, -0.38], [0.16, -0.62], [0.09, -0.82]].forEach(([r, y], i) => {
      const spin = new THREE.Group();
      const ball = part(spin, new THREE.SphereGeometry(r, 18, 12), "#dfe9ff", cfg, 0.06, y, -0.14, 0.010, 1.15, 1, 1);
      ball.rotation.y = i * 0.9;
      g.add(spin);
      g.userData.spin.push({ obj: spin, speed: 2.4 - i * 0.3 });
    });
    for (const s of [-1, 1]) {
      const claw = part(g, new THREE.ConeGeometry(0.07, 0.2, 8), body, cfg, s * 0.58, -0.4, 0.06, 0.006);
      claw.rotation.z = s * 2.4;
    }
  } else {
    part(g, new THREE.SphereGeometry(0.5, 30, 20), body, cfg, 0, 0.22, 0, 0.018, 1, 1.08, 1);
    part(g, new THREE.CylinderGeometry(0.5, 0.56, 0.5, 28), body, cfg, 0, -0.08, 0, 0.016);
    for (let i = 0; i < 7; i += 1) {
      const a = (i / 7) * Math.PI * 2;
      part(g, new THREE.SphereGeometry(0.13, 14, 10), body, cfg, Math.cos(a) * 0.5, -0.34, Math.sin(a) * 0.5, 0.008, 1, 0.8, 1);
    }
    for (const s of [-1, 1]) {
      part(g, new THREE.SphereGeometry(0.12, 14, 10), DARK, cfg, s * 0.17, 0.3, 0.44, 0.005, 0.8, 1.15, 0.6);
      part(g, new THREE.SphereGeometry(0.15, 14, 10), body, cfg, s * 0.55, 0.06, 0.08, 0.008, 0.55, 1, 0.8);
    }
    part(g, new THREE.SphereGeometry(0.08, 12, 10), DARK, cfg, 0, 0.04, 0.5, 0.004, 0.8, 1.1, 0.5);
  }
  finishMob(g, 1.05);
  return g;
}

export function buildStinger(cfg, hex) {
  const g = new THREE.Group();
  const body = hex || "#ffb04c";
  part(g, new THREE.SphereGeometry(0.22, 20, 14), body, cfg, 0, 0.18, 0, 0.012, 0.85, 1.35, 0.75);
  part(g, new THREE.SphereGeometry(0.17, 16, 12), body, cfg, 0, -0.18, 0, 0.010, 1, 0.9, 0.9);
  const stinger = part(g, new THREE.ConeGeometry(0.07, 0.34, 10), "#3a2a12", cfg, 0, -0.46, 0, 0.006);
  stinger.rotation.x = Math.PI;
  for (const s of [-1, 1]) {
    const wing = part(g, new THREE.BoxGeometry(0.52, 0.05, 0.16), body, cfg, s * 0.32, 0.16, -0.02, 0.008);
    wing.rotation.z = s * 0.55;
    wing.rotation.y = s * 0.35;
    part(g, new THREE.SphereGeometry(0.05, 10, 8), "#171226", cfg, s * 0.08, -0.16, 0.14, 0.004);
  }
  finishMob(g, 1.0);
  return g;
}
