import * as THREE from "./vendor/three.module.js";
import { MOBS as BASE_MOBS, GAME_COLOR } from "./toon3d.js";
import { MOB_V2 } from "./toon3d.v2.js";

const MOBS = Object.assign({}, BASE_MOBS, MOB_V2);
const RIG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };

const W = 900;
const H = 560;
const LEVEL = 6;
const PHASE = 2;

const DESIGN = {
  skull: {
    name: "SKULL CRUISER", color: "#ff3366", accent: "#ffe066", model: "skull",
    speed: 95, bulletCap: 6, bombTimer: 2.15, bombMax: 2, bombRadius: 70,
    bombShieldDamage: 24, laserFollow: 0.95
  },
  viper: {
    name: "WINGED VIPER", color: "#2fc96f", accent: "#7dff66", model: "viper",
    speed: 122, bulletCap: 8, bombTimer: 3.35, bombMax: 3, bombRadius: 34,
    bombBarrierDamage: 16, diveInterval: 4.6
  },
  turtle: {
    name: "TURTLE BULWARK", color: "#2fc96f", accent: "#ffe066", model: "turtle",
    speed: 62, bulletCap: 5, bombTimer: 3.25, bombMax: 1, bombRadius: 72,
    bombShieldDamage: 30, slamInterval: 5.4, mineInterval: 0.72,
    mineShieldDamage: 18, shellHp: 2, shellRegen: 15
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

let bossModel = addModel(stage, DESIGN.skull.model, DESIGN.skull.color, 150);
const shipModel = addModel(stage, "player", GAME_COLOR.player, 64);

const world = {
  boss: { x: W / 2 - 64, y: 70, w: 128, h: 64, vx: 120, vy: 14 },
  ship: { x: W / 2 - 17, y: H - 64, w: 34, h: 22, vx: 0, targetX: W / 2 },
  bullets: [], bombs: [], mines: [], waves: [], shots: [], tele: [],
  laser: null, shell: 0, shellTimer: 0, msg: "", msgTtl: 0, t: 0
};

function bossCenter() { return { x: world.boss.x + world.boss.w / 2, y: world.boss.y + world.boss.h / 2 }; }
function shipCenter() { return { x: world.ship.x + world.ship.w / 2, y: world.ship.y + world.ship.h / 2 }; }

function predictShipX(sx, sy, speed) {
  const t = Math.max(0.1, Math.hypot(shipCenter().x - sx, shipCenter().y - sy) / speed);
  return Math.max(30, Math.min(W - 30, shipCenter().x + world.ship.vx * t));
}

function bossAim(sx, sy, speed, limit) {
  const cur = shipCenter().x;
  const lead = predictShipX(sx, sy, speed);
  const r = Math.random();
  const leadChance = Math.min(0.8, 0.3 + PHASE * 0.18);
  const target = r < leadChance ? lead : r < leadChance + 0.3 ? (cur + lead) / 2 : cur;
  return Math.max(-limit, Math.min(limit, (Math.max(sx - 260, Math.min(sx + 260, target)) - sx) * 1.5));
}

function addBullet(sx, sy, vx, speed, color) {
  if (world.bullets.length >= 10) return;
  world.bullets.push({ x: sx, y: sy, vx, speed, color });
}

function addBomb(sx, sy, opts) {
  const targetX = opts.targetX !== undefined ? opts.targetX : shipCenter().x;
  const dx = targetX - sx;
  const dy = shipCenter().y - sy;
  world.bombs.push({
    x: sx, y: sy,
    vx: Math.max(-210, Math.min(210, dx * 0.85)),
    vy: Math.min(135, -40 + dy * 0.45),
    ttl: 4.6, color: opts.color, radius: opts.radius, direct: opts.direct,
    trail: []
  });
}

function addMine(sx, sy, vx) {
  world.mines.push({ x: sx, y: sy, vx: vx || 0, vy: 112, ttl: 6, arm: 1.2, fuse: 2.2, blast: 64 });
}

function addWave(x, y, r) { world.waves.push({ x, y, r, max: r, ttl: 0.7 }); }

function say(text) { world.msg = text; world.msgTtl = 1.4; }

function updateWorld(dt) {
  world.t += dt;
  const b = world.boss;
  b.x += b.vx * dt;
  b.y += b.vy * dt;
  if (b.x <= 18) { b.x = 18; b.vx = Math.abs(b.vx); }
  if (b.x + b.w >= W - 18) { b.x = W - b.w - 18; b.vx = -Math.abs(b.vx); }
  b.y = Math.max(58, Math.min(H - b.h - 150, b.y));

  const s = world.ship;
  let danger = null;
  for (const bullet of world.bullets) {
    const t = (s.y - bullet.y) / bullet.speed;
    if (t > 0 && t < 1.4 && Math.abs(bullet.x + bullet.vx * t - (s.x + s.w / 2)) < 60) { danger = bullet; break; }
  }
  for (const bomb of world.bombs) {
    if (Math.abs(bomb.x - (s.x + s.w / 2)) < 70 && bomb.y > H * 0.45) { danger = bomb; break; }
  }
  if (danger) {
    const away = (s.x + s.w / 2) - (danger.x) >= 0 ? 1 : -1;
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

  world.bombs = world.bombs.filter((bomb) => {
    bomb.vy += 280 * dt;
    bomb.x += bomb.vx * dt;
    bomb.y += bomb.vy * dt;
    bomb.ttl -= dt;
    bomb.trail.push({ x: bomb.x, y: bomb.y, ttl: 0.28 });
    bomb.trail.forEach((pt) => { pt.ttl -= dt; });
    bomb.trail = bomb.trail.filter((pt) => pt.ttl > 0);
    if (bomb.y >= H - 30 || bomb.ttl <= 0) {
      addWave(bomb.x, bomb.y, bomb.radius * 1.45);
      return false;
    }
    return true;
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
    if (m.y >= H - 30 || m.ttl <= 0 || m.fuse <= 0) {
      addWave(m.x + 8, m.y + 8, m.blast || 64);
      return false;
    }
    return true;
  });

  world.waves = world.waves.filter((wv) => {
    wv.ttl -= dt;
    wv.r += (wv.max - wv.r) * 6 * dt;
    return wv.ttl > 0;
  });

  world.tele = world.tele.filter((tl) => { tl.ttl -= dt; return tl.ttl > 0; });

  if (world.laser) {
    const L = world.laser;
    L.ttl -= dt;
    if (L.state === "aim") {
      L.endX += (shipCenter().x - L.endX) * 1.3 * dt;
      if (L.ttl <= 0) { L.state = "fire"; L.ttl = 1.1; }
    } else if (L.state === "fire" && L.ttl <= 0) {
      world.laser = null;
    }
  }

  world.msgTtl = Math.max(0, world.msgTtl - dt);
}

function renderFx() {
  fxctx.clearRect(0, 0, W, H);
  const b = world.boss;

  if (world.shell > 0) {
    fxctx.strokeStyle = "rgba(130, 255, 190, 0.8)";
    fxctx.lineWidth = 4;
    fxctx.beginPath();
    fxctx.arc(b.x + b.w / 2, b.y + b.h / 2, b.w / 2 + 12, 0, Math.PI * 2);
    fxctx.stroke();
    fxctx.lineWidth = 1;
    fxctx.fillStyle = "#62ffa1";
    fxctx.font = "12px 'Courier New', monospace";
    fxctx.fillText(`SHELL ${world.shell}/2`, b.x + b.w / 2 - 26, b.y - 14);
  }

  for (const tl of world.tele) {
    if (tl.kind === "dive") {
      fxctx.strokeStyle = "rgba(125, 255, 102, 0.7)";
      fxctx.lineWidth = 3;
      fxctx.setLineDash([8, 8]);
      fxctx.beginPath();
      fxctx.moveTo(b.x + b.w / 2, b.y + b.h);
      fxctx.lineTo(tl.x, H - 50);
      fxctx.stroke();
      fxctx.setLineDash([]);
      fxctx.strokeRect(tl.x - 26, H - 76, 52, 26);
      fxctx.fillStyle = "#7dff66";
      fxctx.font = "12px 'Courier New', monospace";
      fxctx.fillText("DIVE", tl.x - 14, H - 82);
      fxctx.lineWidth = 1;
    } else if (tl.kind === "charge") {
      fxctx.strokeStyle = "rgba(130, 255, 190, 0.6)";
      fxctx.lineWidth = 3;
      fxctx.strokeRect(b.x - 10, b.y + b.h - 6, b.w + 20, 12);
      fxctx.fillStyle = "#62ffa1";
      fxctx.font = "12px 'Courier New', monospace";
      fxctx.fillText("WINDING UP", b.x + b.w / 2 - 40, b.y + b.h + 26);
      fxctx.lineWidth = 1;
    } else if (tl.kind === "lead") {
      fxctx.strokeStyle = "rgba(255, 224, 102, 0.5)";
      fxctx.setLineDash([4, 8]);
      fxctx.beginPath();
      fxctx.moveTo(b.x + b.w / 2, b.y + b.h);
      fxctx.lineTo(tl.x, shipCenter().y);
      fxctx.stroke();
      fxctx.setLineDash([]);
      fxctx.strokeRect(tl.x - 14, shipCenter().y - 14, 28, 28);
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
      fxctx.beginPath();
      fxctx.moveTo(ox, oy);
      fxctx.lineTo(L.endX, L.endY);
      fxctx.stroke();
      fxctx.setLineDash([]);
      fxctx.strokeRect(L.endX - 18, L.endY - 18, 36, 36);
      fxctx.lineWidth = 1;
    } else {
      fxctx.strokeStyle = "rgba(255, 51, 102, 0.24)";
      fxctx.lineWidth = 26;
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
      fxctx.strokeStyle = "#ff3366";
      fxctx.lineWidth = 11;
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
      fxctx.strokeStyle = "#ffffff";
      fxctx.lineWidth = 3;
      fxctx.beginPath(); fxctx.moveTo(ox, oy); fxctx.lineTo(L.endX, L.endY); fxctx.stroke();
    }
  }

  for (const m of world.mines) {
    const armed = (m.arm || 0) <= 0;
    const lit = armed && m.fuse < 0.7;
    fxctx.save();
    fxctx.globalAlpha = (m.arm || 0) > 0 ? 0.5 + 0.3 * Math.sin(world.t * 10)
      : lit ? 0.6 + 0.4 * Math.sin(world.t * 40) : 1;
    fxctx.translate(m.x, m.y);
    fxctx.rotate(Math.PI / 4);
    fxctx.fillStyle = lit ? "#ff6b6b" : "#2fc96f";
    fxctx.shadowColor = fxctx.fillStyle;
    fxctx.shadowBlur = 8;
    fxctx.fillRect(-7, -7, 14, 14);
    fxctx.restore();
  }

  for (const bomb of world.bombs) {
    const hex = bomb.color;
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), bl = parseInt(hex.slice(5, 7), 16);
    for (const pt of bomb.trail) {
      const a = Math.max(0, pt.ttl / 0.28);
      fxctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${a * 0.55})`;
      fxctx.beginPath();
      fxctx.arc(pt.x, pt.y, 4 + a * 5, 0, Math.PI * 2);
      fxctx.fill();
    }
    fxctx.fillStyle = hex;
    fxctx.shadowColor = hex;
    fxctx.shadowBlur = 10;
    fxctx.beginPath();
    fxctx.arc(bomb.x, bomb.y, 7, 0, Math.PI * 2);
    fxctx.fill();
    fxctx.shadowBlur = 0;
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
    fxctx.strokeStyle = `rgba(255, 224, 102, ${Math.max(0, wv.ttl / 0.7)})`;
    fxctx.lineWidth = 3;
    fxctx.beginPath();
    fxctx.arc(wv.x, wv.y, wv.r, 0, Math.PI * 2);
    fxctx.stroke();
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

function resetWorld(design) {
  world.bullets = []; world.bombs = []; world.mines = []; world.waves = []; world.tele = [];
  world.laser = null; world.shell = 0; world.msgTtl = 0; world.t = 0;
  world.boss = { x: W / 2 - 64, y: 70, w: 128, h: 64, vx: design.speed + LEVEL * 8, vy: 14 };
  world.ship.x = W / 2 - 17; world.ship.vx = 0; world.ship.targetX = W / 2;
}

function swapBossModel(design) {
  stage.scene.remove(bossModel);
  bossModel = addModel(stage, design.model, design.color, 150);
}

function fireSpread(design) {
  const cx = world.boss.x + world.boss.w / 2;
  const cy = world.boss.y + world.boss.h;
  const speed = 190 + LEVEL * 16 + PHASE * 18;
  const pattern = Math.floor(Math.random() * 3);
  if (pattern === 0) {
    const wide = Math.abs(bossAim(cx, cy, speed, 55));
    addBullet(cx, cy, 0, speed, design.accent);
    addBullet(cx, cy, -wide, speed, design.accent);
    addBullet(cx, cy, wide, speed, design.accent);
  } else if (pattern === 1) {
    const side = Math.abs(bossAim(cx, cy, speed, 35));
    addBullet(cx - 40, cy, -side, speed, design.accent);
    addBullet(cx + 40, cy, side, speed, design.accent);
    addBullet(cx, cy, 0, speed * 1.1, design.accent);
  } else {
    const fan = Math.abs(bossAim(cx, cy, speed, 45));
    addBullet(cx, cy, -fan, speed, design.accent);
    addBullet(cx, cy, 0, speed, design.accent);
    addBullet(cx, cy, fan, speed, design.accent);
  }
}

function fireVenomSpread(design) {
  const cx = world.boss.x + world.boss.w / 2;
  const cy = world.boss.y + world.boss.h;
  const speed = 190 + LEVEL * 16 + PHASE * 18;
  if (Math.random() < 0.5) {
    const side = Math.abs(bossAim(cx, cy, speed, 60));
    addBullet(cx, cy, bossAim(cx, cy, speed, 40), speed * 0.95, design.accent);
    addBullet(cx - 40, cy, -side, speed * 0.85, design.accent);
    addBullet(cx + 40, cy, side, speed * 0.85, design.accent);
  } else {
    const lead = bossAim(cx, cy, speed, 70);
    addBullet(cx - 22, cy, lead * 0.6, speed * 0.9, design.accent);
    addBullet(cx + 22, cy, lead, speed * 0.9, design.accent);
  }
}

const ABILITIES = {
  skull: [
    { key: "Q", name: "SPREAD SHOTS", desc: "3-shot fans aimed at your predicted position. bulletCap 6.",
      dur: 7, start(d) { resetWorld(d); this.t = 0; },
      step(d, dt) { this.t -= dt; if (this.t <= 0) { fireSpread(d); this.t = 1.1; } } },
    { key: "W", name: "LASER SWEEP", desc: "Red reticle tracks you (laserFollow 0.95), then a 1.1s beam fires along the lock.",
      dur: 6, start(d) { resetWorld(d);
        world.laser = { state: "aim", ttl: 1.8, endX: shipCenter().x, endY: H - 60 };
        say("LASER LOCK"); },
      step(d, dt) { if (world.laser && world.laser.state === "fire" && !this.fired) { this.fired = true; say("LASER FIRE"); } } },
    { key: "E", name: "CRUISER BOMBS", desc: "Heavy bombs (radius 70, 24 shield dmg) lobbed at your lane, 2 in the air.",
      dur: 7, start(d) { resetWorld(d); this.t = 0.4; },
      step(d, dt) { this.t -= dt; if (this.t <= 0 && world.bombs.length < d.bombMax) {
        const cx = world.boss.x + world.boss.w / 2;
        addBomb(cx, world.boss.y + world.boss.h, { color: d.accent, radius: d.bombRadius });
        this.t = d.bombTimer; } } },
    { key: "P", name: "SMART AIMING (PASSIVE)", desc: "Shots lead your movement: ~66% full lead at phase 2, rest half/no lead.",
      dur: 6, start(d) { resetWorld(d); this.t = 0; },
      step(d, dt) { this.t -= dt;
        world.tele = world.tele.filter((tl) => tl.kind !== "lead");
        const cx = world.boss.x + world.boss.w / 2;
        const cy = world.boss.y + world.boss.h;
        world.tele.push({ kind: "lead", x: predictShipX(cx, cy, 250), ttl: 0.1 });
        if (this.t <= 0) { addBullet(cx, cy, bossAim(cx, cy, 250, 120), 250, d.accent); this.t = 0.9; } } }
  ],
  viper: [
    { key: "Q", name: "VENOM DIVE", desc: "0.6s reticle telegraph on your lane, then a shallow swoop (stops above you) dripping 3 green venom bombs, then climbs.",
      dur: 9, start(d) { resetWorld(d); this.state = "idle"; this.t = 0.8; },
      step(d, dt) {
        const b = world.boss;
        const diveSpeed = d.speed + LEVEL * 8;
        if (this.state === "idle") { this.t -= dt;
          if (this.t <= 0) { this.state = "tele"; this.t = 0.6;
            this.tx = shipCenter().x;
            world.tele.push({ kind: "dive", x: this.tx, ttl: 0.6 });
            say("VENOM DIVE"); } }
        else if (this.state === "tele") { this.t -= dt;
          if (this.t <= 0) { this.state = "dive"; this.drop = 0.1; this.count = 0;
            b.vx = (this.tx >= b.x + b.w / 2 ? 1 : -1) * diveSpeed * 1.6;
            b.vy = 300 + LEVEL * 10; } }
        else if (this.state === "dive") { this.drop -= dt;
          if (this.drop <= 0) { this.drop = 0.22;
            addBomb(b.x + b.w / 2, b.y + b.h, { color: d.accent, radius: 18, direct: true,
              targetX: shipCenter().x });
            this.count += 1; }
          if (b.y + b.h >= world.ship.y - 130 || this.count >= 3) {
            this.state = "climb"; b.vy = -(300 + LEVEL * 10);
            addWave(b.x + b.w / 2, b.y + b.h, 70); } }
        else if (this.state === "climb" && b.y <= 58) { b.y = 58; this.state = "idle";
          b.vy = 14; b.vx = diveSpeed * (Math.random() < 0.5 ? -1 : 1); this.t = 1.2; }
        b.y = Math.max(58, Math.min(H - b.h - 24, b.y));
      } },
    { key: "W", name: "VENOM SPREAD", desc: "Aimed 2-3 shot spreads between dives (same patterns as in-game).",
      dur: 7, start(d) { resetWorld(d); this.t = 0; },
      step(d, dt) { this.t -= dt; if (this.t <= 0) { fireVenomSpread(d); this.t = 1.0; } } },
    { key: "E", name: "BOMB RUN", desc: "2 direct venom bombs per launch (radius 18, 16 barrier dmg), aimed at you or your shields.",
      dur: 7, start(d) { resetWorld(d); this.t = 0.4; },
      step(d, dt) { this.t -= dt; if (this.t <= 0 && world.bombs.length < d.bombMax) {
        const cx = world.boss.x + world.boss.w / 2;
        addBomb(cx - 20, world.boss.y + world.boss.h, { color: d.accent, radius: 18, direct: true });
        addBomb(cx + 20, world.boss.y + world.boss.h, { color: d.accent, radius: 18, direct: true });
        this.t = d.bombTimer; } } },
    { key: "P", name: "SMART AIMING (PASSIVE)", desc: "Same lead system: bullets predict your strafe at dive speeds.",
      dur: 6, start(d) { resetWorld(d); this.t = 0; },
      step(d, dt) { this.t -= dt;
        const cx = world.boss.x + world.boss.w / 2;
        const cy = world.boss.y + world.boss.h;
        world.tele = [{ kind: "lead", x: predictShipX(cx, cy, 280), ttl: 0.1 }];
        if (this.t <= 0) { addBullet(cx, cy, bossAim(cx, cy, 280, 140), 280, d.accent); this.t = 0.8; } } }
  ],
  turtle: [
    { key: "Q", name: "SEISMIC SLAM", desc: "0.7s WINDS UP, then a slam: shockwave + a fan of 3 fused spike mines erupts around your ship. Bomb breaks the windup.",
      dur: 9, start(d) { resetWorld(d); this.state = "idle"; this.t = 0.8; },
      step(d, dt) {
        const b = world.boss;
        if (this.state === "idle") { this.t -= dt;
          if (this.t <= 0) { this.state = "tele"; this.t = 0.7;
            world.tele.push({ kind: "charge", ttl: 0.7 });
            say("TURTLE WINDS UP"); } }
        else if (this.state === "tele") { this.t -= dt;
          if (this.t <= 0) { this.state = "idle"; this.t = 3.2;
            addWave(b.x + b.w / 2, b.y + b.h, 140);
            say("SEISMIC SLAM");
            const px = shipCenter().x;
            [-1, 0, 1].forEach((i) => addMine(px + i * 74 - 8, Math.max(80, world.ship.y - 110 - Math.abs(i) * 26), i * 30)); } }
      } },
    { key: "W", name: "SHELL ARMOR", desc: "2 shell hits absorb damage; shell regenerates after 15s (ring shows progress).",
      dur: 8, start(d) { resetWorld(d); world.shell = 2; this.t = 0; },
      step(d, dt) { this.t -= dt;
        if (this.t <= 0 && world.bullets.length < 4) {
          const cx = world.boss.x + world.boss.w / 2;
          addBullet(cx, world.boss.y + world.boss.h, 0, 240, "#9ae6ff");
          this.t = 0.7; }
        for (const p of world.bullets) {
          if (world.shell > 0 && Math.hypot(p.x - (world.boss.x + world.boss.w / 2), p.y - (world.boss.y + world.boss.h / 2)) < world.boss.w / 2 + 12) {
            world.shell -= 1; world.bullets = world.bullets.filter((q) => q !== p);
            addWave(world.boss.x + world.boss.w / 2, world.boss.y + world.boss.h / 2, 40);
            say(world.shell > 0 ? `SHELL ${world.shell}/2` : "SHELL BROKEN");
            break;
          }
        }
        if (world.shell <= 0 && !this.regen) { this.regen = true; this.rt = 3; }
        if (this.regen) { this.rt -= dt;
          if (this.rt <= 0) { world.shell = 2; this.regen = false; say("TURTLE SHELL RESTORED"); } } } },
    { key: "E", name: "SPIKE MINES", desc: "Drop on a 0.72s cadence. 1.2s arm (slow fall), then drift toward you (capped curve) and explode after 2.2s with a 64px blast.",
      dur: 7, start(d) { resetWorld(d); this.t = 0.2; },
      step(d, dt) { this.t -= dt; if (this.t <= 0) {
        const cx = world.boss.x + world.boss.w / 2;
        addMine(cx, world.boss.y + world.boss.h, 0);
        this.t = d.mineInterval; } } },
    { key: "P", name: "SMART AIMING (PASSIVE)", desc: "Bullets lead your strafe like every other boss.",
      dur: 6, start(d) { resetWorld(d); this.t = 0; },
      step(d, dt) { this.t -= dt;
        const cx = world.boss.x + world.boss.w / 2;
        const cy = world.boss.y + world.boss.h;
        world.tele = [{ kind: "lead", x: predictShipX(cx, cy, 230), ttl: 0.1 }];
        if (this.t <= 0) { addBullet(cx, cy, bossAim(cx, cy, 230, 110), 230, d.accent); this.t = 1.0; } } }
  ]
};

const tabsEl = document.getElementById("tabs");
const cardsEl = document.getElementById("cards");
const captionEl = document.getElementById("caption");
const badgeEl = document.getElementById("badge");

const BOSS_KEYS = ["skull", "viper", "turtle"];
let curBoss = "skull";
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
  ab.fired = false;
  ab.regen = false;
  ab.start(design);
  abilityElapsed = 0;
  badgeEl.textContent = design.name;
  captionEl.textContent = `${ab.key} — ${ab.name}`;
  renderTabs();
  renderCards();
}

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

window.__bs = {
  world,
  get stage() { return stage; },
  get bossModel() { return bossModel; },
  get shipModel() { return shipModel; },
  get cap() { return document.getElementById("caption").textContent; },
  get badge() { return document.getElementById("badge").textContent; }
};
