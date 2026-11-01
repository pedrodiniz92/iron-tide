import * as THREE from "./vendor/three.module.js";
import { MOBS as BASE_MOBS, GAME_COLOR } from "./toon3d.js";
import { MOB_V2 } from "./toon3d.v2.js";

const MOBS = Object.assign({}, BASE_MOBS, MOB_V2);
const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };

const W = 900;
const H = 560;
const LEVEL = 6;

const DESIGN = {
  monarch: {
    name: "OBSIDIAN MONARCH", color: "#6d28d9", accent: "#c86bff", model: "skull",
    speed: 70, mineShieldDamage: 10, tag: "black skull monolith, purple crown"
  },
  crawler: {
    name: "VOID CRAWLER", color: "#5a1f9d", accent: "#c86bff", model: "crab_b",
    speed: 85, mineShieldDamage: 10, tag: "black carapace spider, purple core"
  },
  wyrm: {
    name: "UMBRAL WYRM", color: "#8a2be2", accent: "#e0b3ff", model: "viper",
    speed: 95, mineShieldDamage: 10, tag: "black serpent, purple mane"
  }
};

function fitCanvas(canvas) {
  const w = Math.max(1, Math.floor(canvas.clientWidth));
  const h = Math.max(1, Math.floor(canvas.clientHeight));
  canvas.width = w;
  canvas.height = h;
  return { w, h };
}

function makeStage3D(canvas) {
  const { w, h } = fitCanvas(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(w, h, false);
  const scene = new THREE.Scene();
  const cam = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, -4000, 4000);
  return { renderer, scene, cam, w, h };
}

function addModel(stage, key, hex, targetSize) {
  const builder = MOBS[key] || MOBS.skull;
  const model = builder(RIG, hex);
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const scale = targetSize / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(scale);
  model.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  const pivot = new THREE.Group();
  pivot.add(model);
  pivot.userData.model = model;
  stage.scene.add(pivot);
  return pivot;
}

function place3D(pivot, x, y, tilt, baseRot) {
  pivot.position.set(x - W / 2, H / 2 - y, 0);
  const base = baseRot || [0, 0, 0];
  pivot.userData.model.rotation.set(base[0], base[1] + tilt, base[2]);
}

const stage = makeStage3D(document.getElementById("stage3d"));
const fx = document.getElementById("fx");
const fxctx = fx.getContext("2d");
fitCanvas(fx);

let bossModel = addModel(stage, DESIGN.monarch.model, DESIGN.monarch.color, 150);
const shipModel = addModel(stage, "player", GAME_COLOR.player, 64);

function buildBarrier() {
  const cells = [];
  for (let s = 0; s < 4; s += 1) {
    const sx = 96 + s * 168;
    const sy = H - 128;
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        cells.push({ x: sx + col * 12, y: sy + row * 8, w: 11, h: 7, hp: 3, maxHp: 3 });
      }
    }
  }
  return cells;
}

function damageShieldBlast(x, y, radius) {
  for (const cell of world.barrier) {
    const cx = cell.x + cell.w / 2;
    const cy = cell.y + cell.h / 2;
    if (Math.hypot(cx - x, cy - y) <= radius) {
      cell.hp -= 1;
      cell.flash = 0.5;
    }
  }
  world.barrier = world.barrier.filter((c) => c.hp > 0);
}

function cellsOnBeam(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const steps = Math.max(24, Math.ceil(dist / 8));
  const seen = [];
  const picked = new Set();
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = x1 + dx * t;
    const y = y1 + dy * t;
    for (const cell of world.barrier) {
      if (picked.has(cell)) continue;
      if (x >= cell.x && x <= cell.x + cell.w && y >= cell.y && y <= cell.y + cell.h) {
        picked.add(cell);
        seen.push({ cell, px: x, py: y });
      }
    }
  }
  return seen;
}

const world = {
  boss: { x: W / 2 - 64, y: 70, w: 128, h: 64, vx: 120, vy: 14 },
  ship: { x: W / 2 - 17, y: H - 64, w: 34, h: 22, vx: 0, targetX: W / 2 },
  bullets: [], bombs: [], mines: [], waves: [], tele: [], shots: [], pods: [],
  minions: [], auraT: 0, staggerT: 0,
  barrier: buildBarrier(), bubble: 0,
  laser: null, msg: "", msgTtl: 0, t: 0
};

function bossCenter() { return { x: world.boss.x + world.boss.w / 2, y: world.boss.y + world.boss.h / 2 }; }
function shipCenter() { return { x: world.ship.x + world.ship.w / 2, y: world.ship.y + world.ship.h / 2 }; }

function addBullet(sx, sy, vx, speed, color) {
  if (world.bullets.length >= 14) return;
  world.bullets.push({ x: sx, y: sy, vx, speed, color });
}

function addShot(sx, sy, vx, vy, color) {
  world.shots.push({ x: sx, y: sy, vx, vy, color });
}

function addMine(sx, sy, vx, vy) {
  world.mines.push({ x: sx, y: sy, vx: vx || 0, vy: vy === undefined ? 112 : vy, ttl: 6, arm: 1.2, fuse: 3.0, blast: 64 });
}

function addWave(x, y, r, color) { world.waves.push({ x, y, r, max: r, ttl: 0.7, color: color || "#ffe066" }); }

function addPod(sx, sy, vx, vy, opts) {
  world.pods.push({ x: sx, y: sy, vx, vy, kind: opts.kind, targetY: opts.targetY, color: opts.color, burst: opts.burst || 3 });
}

function addTele(kind, x, ttl) { world.tele.push({ kind, x, ttl }); }

function say(text) { world.msg = text; world.msgTtl = 1.4; }

const MINION_GLYPHS = [
  ["01100110", "01111110", "11111111", "10111101", "10100101", "00100100"],
  ["00100100", "00111100", "01111110", "11011011", "10111101", "01000010"],
  ["00011000", "00111100", "01111110", "11100111", "10111101", "01000010"]
];

function spawnSquad(color) {
  for (let i = 0; i < 5; i += 1) {
    world.minions.push({
      x: W / 2 - 96 + i * 48, y: -24 - i * 18, w: 26, h: 18,
      glyph: i % 3, color: color || "#c86bff",
      state: "drop", hoverY: 120 + (i % 2) * 26, t: 0, seed: i * 1.7,
      diveT: 1.6 + i * 0.25, vy: 0, vx: 0
    });
  }
  say("MINIONS SUMMONED");
}

function updateWorld(dt) {
  world.t += dt;
  const b = world.boss;
  if (world.staggerT > 0) world.staggerT = Math.max(0, world.staggerT - dt);
  if (world.auraT > 0) world.auraT = Math.max(0, world.auraT - dt);
  const slow = world.staggerT > 0 ? 0.22 : 1;
  b.x += b.vx * dt * slow;
  b.y += b.vy * dt;
  if (b.x <= 18) { b.x = 18; b.vx = Math.abs(b.vx); }
  if (b.x + b.w >= W - 18) { b.x = W - b.w - 18; b.vx = -Math.abs(b.vx); }
  b.y = Math.max(58, Math.min(H - b.h - 170, b.y));

  const s = world.ship;
  let danger = null;
  for (const bullet of world.bullets) {
    const t = (s.y - bullet.y) / bullet.speed;
    if (t > 0 && t < 1.4 && Math.abs(bullet.x + bullet.vx * t - (s.x + s.w / 2)) < 60) { danger = bullet; break; }
  }
  for (const mine of world.mines) {
    if (Math.abs(mine.x - (s.x + s.w / 2)) < 80 && mine.y > H * 0.4) { danger = mine; break; }
  }
  if (world.laser && world.laser.state === "fire" && world.laser.lethal !== false) {
    const away = (s.x + s.w / 2) > world.laser.endX ? 1 : -1;
    s.targetX = Math.max(40, Math.min(W - 40, s.x + s.w / 2 + away * 260));
  } else if (danger) {
    const away = (s.x + s.w / 2) - danger.x >= 0 ? 1 : -1;
    s.targetX = Math.max(40, Math.min(W - 40, s.x + s.w / 2 + away * 190));
  } else if (Math.random() < 0.02) {
    s.targetX = 60 + Math.random() * (W - 120);
  }
  const dir = Math.sign(s.targetX - (s.x + s.w / 2));
  s.vx = dir * 260;
  s.x += s.vx * dt;
  s.x = Math.max(10, Math.min(W - s.w - 10, s.x));

  world.bullets = world.bullets.filter((p) => {
    p.y += p.speed * dt;
    p.x += p.vx * dt;
    return p.y < H + 20 && p.x > -30 && p.x < W + 30;
  });

  world.shots = world.shots.filter((p) => {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    return p.y < H + 20 && p.y > -20 && p.x > -30 && p.x < W + 30;
  });

  world.mines = world.mines.filter((m) => {
    m.arm = Math.max(0, (m.arm || 0) - dt);
    if (m.arm <= 0) {
      const dx = shipCenter().x - (m.x + 8);
      const target = Math.max(-90, Math.min(90, dx * 0.9));
      m.vx += Math.max(-140 * dt, Math.min(140 * dt, target - m.vx));
      m.fuse -= dt;
    }
    m.y += m.vy * dt * (m.arm > 0 ? 0.25 : 1);
    m.x += m.vx * dt;
    m.ttl -= dt;
    if (m.arm <= 0) {
      for (const cell of world.barrier) {
        if (m.x < cell.x + cell.w && m.x + 16 > cell.x && m.y < cell.y + cell.h && m.y + 16 > cell.y) {
          damageShieldBlast(m.x + 8, m.y + 8, 40);
          addWave(m.x + 8, m.y + 8, 30, "#62ffa1");
          return false;
        }
      }
    }
    if (m.y >= H - 30 || m.ttl <= 0 || m.fuse <= 0) {
      addWave(m.x + 8, m.y + 8, m.blast || 64, "#ff6b6b");
      damageShieldBlast(m.x + 8, m.y + 8, (m.blast || 64) + 40);
      return false;
    }
    return true;
  });

  world.pods = world.pods.filter((pod) => {
    pod.vy += 300 * dt;
    pod.x += pod.vx * dt;
    pod.y += pod.vy * dt;
    const apex = pod.vy >= 0;
    const landed = pod.y >= pod.targetY;
    if ((pod.kind === "seed" && apex) || (pod.kind === "mortar" && landed)) {
      addWave(pod.x, pod.y, 40, pod.color);
      for (let i = 0; i < pod.burst; i += 1) {
        addMine(pod.x - 24 + i * 24, pod.y - 8, (i - (pod.burst - 1) / 2) * 30);
      }
      return false;
    }
    return pod.y < H + 30;
  });

  world.minions = world.minions.filter((m) => {
    m.t += dt;
    if (m.state === "drop") {
      m.y += 150 * dt;
      if (m.y >= m.hoverY) m.state = "hover";
    } else if (m.state === "hover") {
      m.x += Math.sin(m.t * 2.2 + m.seed) * 34 * dt;
      m.diveT -= dt;
      if (m.diveT <= 0) { m.state = "dive"; m.vy = 320; m.vx = (shipCenter().x - m.x) * 0.8; }
    } else {
      m.y += m.vy * dt;
      m.x += m.vx * dt;
    }
    return m.y < H + 24;
  });

  world.waves = world.waves.filter((wv) => {
    wv.ttl -= dt;
    wv.r += (wv.max - wv.r) * 6 * dt;
    return wv.ttl > 0;
  });

  world.tele = world.tele.filter((tl) => { tl.ttl -= dt; return tl.ttl > 0; });
  for (const cell of world.barrier) {
    if (cell.flash > 0) cell.flash = Math.max(0, cell.flash - dt);
  }
  world.bubble = Math.max(0, world.bubble - dt);

  updateLaser(dt);

  world.msgTtl = Math.max(0, world.msgTtl - dt);
}

function updateLaser(dt) {
  const L = world.laser;
  if (!L) return;
  L.ttl -= dt;
  const b = world.boss;
  const ox = b.x + b.w / 2;
  const oy = b.y + b.h;

  if (L.state === "aim") {
    L.endX += (shipCenter().x - L.endX) * 1.3 * dt;
    L.endY = shipCenter().y;
    L.angle = Math.atan2(L.endY - oy, L.endX - ox);
    if (L.ttl <= 0) {
      L.state = "fire";
      L.ttl = L.fireTtl;
      L.pulseT = 0;
      L.on = true;
      say(L.say || "LASER");
    }
    return;
  }

  if (L.state === "fire") {
    if (L.sweep) L.angle += L.sweep * dt;
    const len = 1400;
    L.endX = ox + Math.cos(L.angle) * len;
    L.endY = oy + Math.sin(L.angle) * len;

    if (L.pulses > 0) {
      L.pulseT += dt;
      const cycle = 0.55;
      L.on = (L.pulseT % cycle) < 0.25;
      L.pulseCount = Math.floor(L.pulseT / cycle);
      if (L.pulseCount >= L.pulses) { world.laser = null; return; }
    }
    if (L.heat) {
      L.width = 2 + 12 * (1 - Math.max(0, L.ttl / L.fireTtl));
      L.lethal = L.ttl <= 0.4;
    }
    const hits = cellsOnBeam(ox, oy, L.endX, L.endY);
    if (!L.pierce && hits.length) {
      L.endX = hits[0].px;
      L.endY = hits[0].py;
    }
    L.tick = (L.tick || 0) + dt;
    if (L.tick >= 0.1) {
      L.tick = 0;
      const targets = L.pierce ? hits : hits.slice(0, 1);
      targets.forEach((h) => { h.cell.hp -= 1; h.cell.flash = 0.5; });
      world.barrier = world.barrier.filter((c) => c.hp > 0);
    }
    if (L.ttl <= 0) world.laser = null;
  }
}

function resetWorld(design) {
  world.bullets = []; world.bombs = []; world.mines = []; world.waves = [];
  world.tele = []; world.shots = []; world.pods = [];
  world.barrier = buildBarrier(); world.bubble = 0;
  world.laser = null; world.msgTtl = 0; world.t = 0;
  world.minions = []; world.auraT = 0; world.staggerT = 0;
  world.boss = { x: W / 2 - 64, y: 70, w: 128, h: 64, vx: design.speed + LEVEL * 8, vy: 14 };
  world.ship.x = W / 2 - 17; world.ship.vx = 0; world.ship.targetX = W / 2;
}

function swapBossModel(design) {
  stage.scene.remove(bossModel);
  bossModel = addModel(stage, design.model, design.color, 150);
}

function renderFx() {
  fxctx.clearRect(0, 0, W, H);
  const b = world.boss;

  for (const cell of world.barrier) {
    const frac = Math.max(0, cell.hp / cell.maxHp);
    fxctx.globalAlpha = 0.35 + 0.65 * frac;
    fxctx.fillStyle = frac > 0.95 ? "#2fc96f" : frac > 0.6 ? "#d8c94a" : "#c94a4a";
    fxctx.fillRect(cell.x, cell.y, cell.w, cell.h);
    if (cell.hp < cell.maxHp) {
      fxctx.globalAlpha = 0.8;
      fxctx.strokeStyle = "#0b0c14";
      fxctx.beginPath();
      fxctx.moveTo(cell.x + 2, cell.y + 1);
      fxctx.lineTo(cell.x + cell.w - 3, cell.y + cell.h - 2);
      if (cell.hp === 1) {
        fxctx.moveTo(cell.x + cell.w - 2, cell.y + 1);
        fxctx.lineTo(cell.x + 2, cell.y + cell.h - 2);
      }
      fxctx.stroke();
    }
    if (cell.flash > 0) {
      fxctx.globalAlpha = Math.min(1, cell.flash * 2.2);
      fxctx.fillStyle = "#ffffff";
      fxctx.fillRect(cell.x - 1, cell.y - 1, cell.w + 2, cell.h + 2);
    }
    fxctx.globalAlpha = 1;
  }

  if (world.bubble > 0) {
    fxctx.strokeStyle = "rgba(130, 255, 190, 0.85)";
    fxctx.lineWidth = 4;
    fxctx.beginPath();
    fxctx.arc(b.x + b.w / 2, b.y + b.h / 2, b.w / 2 + 14, 0, Math.PI * 2);
    fxctx.stroke();
    fxctx.lineWidth = 1;
    fxctx.fillStyle = "#62ffa1";
    fxctx.font = "12px 'Courier New', monospace";
    fxctx.fillText("INVULNERABLE", b.x + b.w / 2 - 44, b.y - 16);
  }

  if (world.auraT > 0) {
    const pulse = 0.6 + 0.4 * Math.sin(world.t * 7);
    fxctx.strokeStyle = "rgba(200, 107, 255, 0.8)";
    fxctx.lineWidth = 5;
    fxctx.globalAlpha = pulse;
    fxctx.beginPath();
    fxctx.arc(b.x + b.w / 2, b.y + b.h / 2, b.w / 2 + 22, 0, Math.PI * 2);
    fxctx.stroke();
    fxctx.globalAlpha = 0.25 * pulse;
    fxctx.fillStyle = "#8a2be2";
    fxctx.fill();
    fxctx.globalAlpha = 1;
    fxctx.lineWidth = 1;
    fxctx.fillStyle = "#e0b3ff";
    fxctx.font = "12px 'Courier New', monospace";
    fxctx.fillText("PHASE 2 AURA", b.x + b.w / 2 - 42, b.y - 30);
  }

  if (world.staggerT > 0) {
    const bw = 120;
    fxctx.fillStyle = "#10060f";
    fxctx.fillRect(b.x + b.w / 2 - bw / 2, b.y - 26, bw, 8);
    fxctx.fillStyle = "#ff5050";
    fxctx.fillRect(b.x + b.w / 2 - bw / 2 + 1, b.y - 25, (bw - 2) * (world.staggerT / 3), 6);
    fxctx.fillStyle = "#ffb0c0";
    fxctx.font = "10px 'Courier New', monospace";
    fxctx.fillText("STAGGERED", b.x + b.w / 2 - 32, b.y - 32);
  }

  for (const m of world.minions) {
    const glyph = MINION_GLYPHS[m.glyph];
    const px = 3;
    fxctx.fillStyle = m.color;
    fxctx.shadowColor = m.color;
    fxctx.shadowBlur = 8;
    for (let row = 0; row < glyph.length; row += 1) {
      for (let col = 0; col < 8; col += 1) {
        if (glyph[row][col] === "1") fxctx.fillRect(m.x + col * px, m.y + row * px, px, px);
      }
    }
    fxctx.shadowBlur = 0;
  }

  for (const tl of world.tele) {
    if (tl.kind === "reticle") {
      fxctx.strokeStyle = "rgba(255, 224, 102, 0.75)";
      fxctx.lineWidth = 2;
      fxctx.beginPath();
      fxctx.arc(tl.x, H - 90, 22, 0, Math.PI * 2);
      fxctx.stroke();
      fxctx.beginPath();
      fxctx.moveTo(tl.x - 30, H - 90); fxctx.lineTo(tl.x + 30, H - 90);
      fxctx.moveTo(tl.x, H - 120); fxctx.lineTo(tl.x, H - 60);
      fxctx.stroke();
      fxctx.lineWidth = 1;
    } else if (tl.kind === "windup") {
      fxctx.strokeStyle = "rgba(130, 255, 190, 0.6)";
      fxctx.lineWidth = 3;
      fxctx.strokeRect(b.x - 10, b.y + b.h - 6, b.w + 20, 12);
      fxctx.fillStyle = "#62ffa1";
      fxctx.font = "12px 'Courier New', monospace";
      fxctx.fillText("WINDING UP", b.x + b.w / 2 - 40, b.y + b.h + 26);
      fxctx.lineWidth = 1;
    }
  }

  if (world.laser) {
    const L = world.laser;
    const ox = b.x + b.w / 2;
    const oy = b.y + b.h;
    if (L.state === "aim") {
      fxctx.strokeStyle = "rgba(255, 51, 102, 0.62)";
      fxctx.lineWidth = 2;
      fxctx.setLineDash([10, 9]);
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
      fxctx.setLineDash([]);
      fxctx.strokeRect(L.endX - 18, L.endY - 18, 36, 36);
      fxctx.lineWidth = 1;
    } else if (L.on !== false) {
      const heatFlash = L.heat && L.lethal;
      fxctx.strokeStyle = heatFlash ? "rgba(255, 90, 40, 0.30)" : "rgba(255, 51, 102, 0.24)";
      fxctx.lineWidth = (L.width || 11) * 2.4;
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
      fxctx.strokeStyle = heatFlash ? "#ff5a28" : "#ff3366";
      fxctx.lineWidth = L.width || 11;
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
      fxctx.strokeStyle = "#ffffff";
      fxctx.lineWidth = 3;
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
      if (L.pierce) {
        fxctx.fillStyle = "#ffe066";
        fxctx.font = "11px 'Courier New', monospace";
        fxctx.fillText("PIERCING", ox - 26, oy + 18);
      }
    }
  }

  for (const pod of world.pods) {
    fxctx.fillStyle = pod.color;
    fxctx.shadowColor = pod.color;
    fxctx.shadowBlur = 10;
    fxctx.beginPath();
    fxctx.arc(pod.x, pod.y, 8, 0, Math.PI * 2);
    fxctx.fill();
    fxctx.shadowBlur = 0;
  }

  for (const m of world.mines) {
    const armed = (m.arm || 0) <= 0;
    const lit = armed && m.fuse < 0.7;
    fxctx.save();
    fxctx.globalAlpha = (m.arm || 0) > 0 ? 0.5 + 0.3 * Math.sin(world.t * 10)
      : lit ? 0.6 + 0.4 * Math.sin(world.t * 40) : 1;
    fxctx.translate(m.x + 8, m.y + 8);
    fxctx.fillStyle = lit ? "#ff6b6b" : "#2fc96f";
    fxctx.shadowColor = fxctx.fillStyle;
    fxctx.shadowBlur = 8;
    fxctx.beginPath();
    for (let i = 0; i < 8; i += 1) {
      const a = i * Math.PI / 4;
      fxctx.lineTo(Math.cos(a) * 9, Math.sin(a) * 9);
      fxctx.lineTo(Math.cos(a + Math.PI / 8) * 4.5, Math.sin(a + Math.PI / 8) * 4.5);
    }
    fxctx.closePath();
    fxctx.fill();
    fxctx.shadowBlur = 0;
    fxctx.restore();
  }

  for (const p of world.shots) {
    fxctx.save();
    fxctx.translate(p.x, p.y);
    fxctx.rotate(Math.atan2(p.vy, p.vx));
    fxctx.fillStyle = p.color;
    fxctx.shadowColor = p.color;
    fxctx.shadowBlur = 6;
    fxctx.fillRect(-6, -2.5, 12, 5);
    fxctx.shadowBlur = 0;
    fxctx.restore();
  }

  for (const p of world.bullets) {
    fxctx.save();
    fxctx.translate(p.x, p.y + 7.5);
    fxctx.rotate(Math.atan2(-(p.vx || 0), p.speed || 250));
    fxctx.fillStyle = p.color;
    fxctx.shadowColor = p.color;
    fxctx.shadowBlur = 6;
    fxctx.fillRect(-2.5, -7.5, 5, 15);
    fxctx.shadowBlur = 0;
    fxctx.restore();
  }

  for (const wv of world.waves) {
    fxctx.strokeStyle = wv.color;
    fxctx.globalAlpha = Math.max(0, wv.ttl / 0.7);
    fxctx.lineWidth = 3;
    fxctx.beginPath();
    fxctx.arc(wv.x, wv.y, wv.r, 0, Math.PI * 2);
    fxctx.stroke();
    fxctx.globalAlpha = 1;
    fxctx.lineWidth = 1;
  }

  if (world.msgTtl > 0) {
    fxctx.fillStyle = "#ffe066";
    fxctx.font = "16px 'Courier New', monospace";
    fxctx.textAlign = "center";
    fxctx.fillText(world.msg, W / 2, 40);
    fxctx.textAlign = "left";
  }
}

function laserStart(opts) {
  const b = world.boss;
  b.vx = 26;
  b.vy = 0;
  world.laser = Object.assign({
    state: "aim", ttl: 0.8, fireTtl: 1.2, endX: shipCenter().x, endY: shipCenter().y,
    angle: Math.PI / 2, width: 11, sweep: 0, pierce: false, pulses: 0, heat: false,
    on: true, lethal: true, say: "LASER"
  }, opts);
}

const KIT = [
  { key: "1", name: "VOID SPREAD", dur: 7,
    desc: "0.5s crown telegraph, then a 7-shot purple fan plus 2 aimed pods at your lane. Phase 2 doubles the fan. The opener of the kit.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 0.5; },
    step(d, dt) {
      if (this.state === "idle") { this.t -= dt;
        if (this.t <= 0) { this.state = "done";
          const b = world.boss;
          world.tele.push({ kind: "windup", ttl: 0.5 });
          const n = world.auraT > 0 ? 11 : 7;
          for (let i = 0; i < n; i += 1) {
            addShot(b.x + b.w / 2, b.y + b.h, (i - (n - 1) / 2) * 46, 190, d.accent);
          }
          addPod(b.x + b.w / 2, b.y + b.h, (shipCenter().x - b.x - b.w / 2) * 0.7, 60, { kind: "plain", color: d.accent });
          say("VOID SPREAD"); } }
    } },
  { key: "2", name: "MINION SUMMON", dur: 9,
    desc: "0.8s pentagram telegraph, then a 5-invader squad drops in formation, hovers, and dives at you one by one. The crowd mechanic the 2-boss stage used to give you.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 0.8; },
    step(d, dt) {
      if (this.state === "idle") { this.t -= dt;
        if (this.t <= 0) { this.state = "done";
          addWave(bossCenter().x, bossCenter().y, 90, d.accent);
          spawnSquad(d.accent); } }
    } },
  { key: "3", name: "PIERCING BEAM", dur: 8,
    desc: "0.9s aim, 1.4s purple beam that BURNS THROUGH barrier blocks and keeps going to your ship. Same numbers as the skull's in-game piercing laser.",
    start(d) { resetWorld(d); this.t = 0.3; this.fired = false; },
    step(d, dt) { this.t -= dt;
      if (!this.fired && this.t <= 0) { this.fired = true;
        laserStart({ ttl: 0.9, fireTtl: 1.4, pierce: true, width: 11, say: "PIERCING BEAM" }); } } },
  { key: "4", name: "CARAPACE BARRAGE", dur: 8,
    desc: "Boss slows to a stop, braces, parks invulnerable and drops fused mines straight below: 3 first cast, 4 second, 5 after. Pure zone denial.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 0.5; this.cast = (this.cast || 0) + 1; this.count = Math.min(2 + this.cast, 5); this.dropped = 0; },
    step(d, dt) {
      const b = world.boss;
      if (this.state === "idle") { this.t -= dt;
        if (this.t <= 0) { this.state = "slow"; this.t = 0.8; this.slowFrom = b.vx; } }
      else if (this.state === "slow") { this.t -= dt;
        b.vx = this.slowFrom * Math.max(0, this.t / 0.8);
        if (this.t <= 0) { this.state = "windup"; this.t = 0.9; b.vx = 0;
          world.tele.push({ kind: "windup", ttl: 0.9 });
          say("BRACED"); } }
      else if (this.state === "windup") { this.t -= dt; b.vx = 0;
        if (this.t <= 0) { this.state = "drop"; this.t = 1.6; this.drop = 0.1;
          world.bubble = 1.6;
          say("CARAPACE BARRAGE"); } }
      else if (this.state === "drop") { this.t -= dt; b.vx = 0; this.drop -= dt;
        if (this.drop <= 0 && this.dropped < this.count) {
          this.dropped += 1; this.drop = 0.22;
          addMine(b.x + b.w / 2 - 8 + (this.dropped - (this.count + 1) / 2) * 26, b.y + b.h, 0);
        } }
    } },
  { key: "5", name: "MINE MORTAR", dur: 8,
    desc: "3 reticle telegraphs land on your lane, 0.8s later a mortar volley arcs in and bursts into fused drifting mines. Aimed, readable, dodge by moving.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 0.8; this.marked = false; },
    step(d, dt) {
      if (this.state === "idle") { this.t -= dt;
        if (!this.marked) { this.marked = true;
          const px = shipCenter().x;
          [-90, 0, 90].forEach((o) => addTele("reticle", Math.max(40, Math.min(W - 40, px + o)), 0.8));
          say("MINE MORTAR"); }
        if (this.t <= 0) { this.state = "done";
          const b = world.boss;
          const px = shipCenter().x;
          [-90, 0, 90].forEach((o) => {
            const tx = Math.max(40, Math.min(W - 40, px + o));
            addPod(b.x + b.w / 2, b.y + b.h, (tx - b.x - b.w / 2) * 0.55, -160,
              { kind: "mortar", targetY: H - 170, color: d.accent, burst: 3 });
          }); } }
    } },
  { key: "6", name: "OBSIDIAN DIVE", dur: 8,
    desc: "0.6s red telegraph over your lane, then the whole boss body swoops down to your row, sweeps across, and climbs back. Touching it hurts; the sweep is the dodge window.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 0.6; },
    step(d, dt) {
      const b = world.boss;
      if (this.state === "idle") { this.t -= dt;
        if (this.t <= 0) { this.state = "dive"; this.t = 1.1;
          b.vy = 340; b.vx = Math.sign(shipCenter().x - bossCenter().x) * 150;
          addTele("reticle", shipCenter().x, 0.6);
          say("OBSIDIAN DIVE"); } }
      else if (this.state === "dive") { this.t -= dt;
        if (this.t <= 0) { this.state = "climb"; this.t = 1.0; b.vy = -300; } }
      else if (this.state === "climb") { this.t -= dt;
        if (this.t <= 0) { this.state = "done"; b.vy = 14; b.vx = d.speed + LEVEL * 8; } }
    } },
  { key: "7", name: "PHASE 2 AURA", dur: 9,
    desc: "At 50% HP the boss cracks open: purple aura, +40% speed, VOID SPREAD doubles. Every remaining skill keeps its tell — the fight gets denser, not unfair.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 1.2; },
    step(d, dt) {
      if (this.state === "idle") { this.t -= dt;
        if (this.t <= 0) { this.state = "done";
          world.auraT = 6;
          world.boss.vx *= 1.4;
          addWave(bossCenter().x, bossCenter().y, 220, d.accent);
          say("PHASE 2 — AURA"); } }
    } },
  { key: "8", name: "STAGGER", dur: 7,
    desc: "4 + 2×wave bullet damage in a 3s window → 3.0s stagger: boss at 22% speed, bar over the HP bar. The final boss keeps the same rule — no immunity.",
    start(d) { resetWorld(d); this.state = "idle"; this.t = 1.0; },
    step(d, dt) {
      if (this.state === "idle") { this.t -= dt;
        if (this.t <= 0) { this.state = "done";
          world.staggerT = 3.0;
          say("STAGGERED"); } }
    } }
];

const ABILITIES = { monarch: KIT, crawler: KIT, wyrm: KIT };

const tabsEl = document.getElementById("tabs");
const cardsEl = document.getElementById("cards");
const captionEl = document.getElementById("caption");
const badgeEl = document.getElementById("badge");

const BOSS_KEYS = ["monarch", "crawler", "wyrm"];
let curBoss = "monarch";
let curAbility = 0;
let abilityElapsed = 0;

function renderTabs() {
  tabsEl.innerHTML = "";
  BOSS_KEYS.forEach((key) => {
    const tab = document.createElement("div");
    tab.className = "tab" + (key === curBoss ? " on" : "");
    tab.textContent = DESIGN[key].name;
    tab.onclick = () => { curBoss = key; curAbility = 0; selectAbility(); };
    tabsEl.appendChild(tab);
  });
}

function renderCards() {
  cardsEl.innerHTML = "";
  ABILITIES[curBoss].forEach((ab, i) => {
    const card = document.createElement("div");
    card.className = "card" + (i === curAbility ? " on" : "");
    card.innerHTML = `<span class="key">${ab.key}</span><h3>${ab.name}</h3><p>${ab.desc}</p>`;
    card.onclick = () => { curAbility = i; selectAbility(); };
    cardsEl.appendChild(card);
  });
}

function selectAbility() {
  const design = DESIGN[curBoss];
  swapBossModel(design);
  const ab = ABILITIES[curBoss][curAbility];
  ab.start(design);
  abilityElapsed = 0;
  badgeEl.textContent = design.name;
  captionEl.textContent = `${ab.key} — ${ab.name}`;
  renderTabs();
  renderCards();
}

document.addEventListener("keydown", (event) => {
  const n = Number(event.key);
  if (n >= 1 && n <= ABILITIES[curBoss].length) {
    curAbility = n - 1;
    selectAbility();
  }
});

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const design = DESIGN[curBoss];
  const ab = ABILITIES[curBoss][curAbility];
  abilityElapsed += dt;
  if (abilityElapsed > ab.dur) {
    curAbility = (curAbility + 1) % ABILITIES[curBoss].length;
    selectAbility();
  } else {
    try { ab.step(design, dt); } catch (err) { console.error("ability step", ab.name, err); }
  }
  updateWorld(dt);
  const b = world.boss;
  place3D(bossModel, b.x + b.w / 2, b.y + b.h / 2, Math.sin(world.t / 1.1) * 0.2, [0, 0, 0]);
  place3D(shipModel, world.ship.x + world.ship.w / 2, world.ship.y + world.ship.h / 2, 0, [-Math.PI / 2, 0, 0]);
  stage.renderer.render(stage.scene, stage.cam);
  renderFx();
  requestAnimationFrame(frame);
}

selectAbility();
requestAnimationFrame(frame);

window.__ba = {
  world,
  get stage() { return stage; },
  get bossModel() { return bossModel; },
  get shipModel() { return shipModel; },
  get cap() { return document.getElementById("caption").textContent; },
  get badge() { return document.getElementById("badge").textContent; }
};
