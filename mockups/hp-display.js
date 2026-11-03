// HP display mockup, 2.5D. The ship and the mobs are the shipping Three.js toon models: they go
// through window.Iron3D (js/assets3d.bundle.js), the same entry point js/drawing.js push3D()
// uses. HUD text, bullets and shield rings stay on the 2D #game canvas, as in the game.
// canvas/ctx/W/H/COLORS come from js/constants.js. Open hp-display.html (file:// is fine).

const PANEL = 280;
const SHIP_W = 56;
const SHIP_H = 22;
const HUD_FONT = "16px 'Courier New', monospace";
const TAG_FONT = "12px 'Courier New', monospace";

// the damage timing comes from js/constants.js (loaded on this page), so the mockup runs the
// shipping numbers, not a copy of them
const CYCLE = 14; // s: hit at t=0, hull knits at HP_REGEN_TIME, cycle restarts

let simStart = performance.now();
let lastSim = 1e9;
let lastFrame = performance.now();
const chips = [];

// same shape as js/helpers.js addHullChips()
function spawnChips(cx, cy) {
  for (let i = 0; i < 14; i += 1) {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.4;
    const sp = 90 + Math.random() * 190;
    const ttl = HULL_CHIP_TIME * (0.7 + Math.random() * 0.5);
    chips.push({
      x: cx + (Math.random() - 0.5) * 26,
      y: cy + (Math.random() - 0.5) * 10,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp * 0.7 + 40,
      size: 2 + Math.random() * 3.5,
      rot: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 9,
      ttl,
      maxTtl: ttl
    });
  }
}

// same shape as js/helpers.js updateHullChips() + js/drawing.js drawHullChips()
function stepChips(dt) {
  chips.forEach((chip) => {
    chip.ttl -= dt;
    chip.vy += 520 * dt;
    chip.vx *= 1 - 1.6 * dt;
    chip.x += chip.vx * dt;
    chip.y += chip.vy * dt;
    chip.rot += chip.spin * dt;
  });
  for (let i = chips.length - 1; i >= 0; i -= 1) if (chips[i].ttl <= 0) chips.splice(i, 1);
}

function drawChips() {
  chips.forEach((chip) => {
    const life = chip.ttl / chip.maxTtl;
    ctx.save();
    ctx.translate(chip.x, chip.y);
    ctx.rotate(chip.rot);
    ctx.globalAlpha = Math.min(1, life * 1.4);
    ctx.fillStyle = COLORS.player;
    ctx.fillRect(-chip.size / 2, -chip.size / 2, chip.size, chip.size);
    ctx.fillStyle = "rgba(8, 42, 14, 0.6)";
    ctx.fillRect(-chip.size / 2, chip.size * 0.12, chip.size, chip.size * 0.38);
    ctx.restore();
  });
}

// the state the demo ship is in right now, on the shipping rules
function simState(now) {
  const t = ((now - simStart) / 1000) % CYCLE;
  const hp = t < HP_REGEN_TIME ? 1 : 2;
  const crackFade = hp === 1
    ? Math.min(1, t / CRACK_SHOW_TIME)
    : Math.max(0, 1 - (t - HP_REGEN_TIME) / CRACK_FADE_TIME);
  const e = Math.min(t, HP_SLOW_EASE_TIME) / HP_SLOW_EASE_TIME;
  const speedMul = hp === 1 ? HP_SLOW_START + (HP_SLOW_EASE - HP_SLOW_START) * e : 1;
  if (t < lastSim) spawnChips(380 + SHIP_W / 2, PANEL + 212 + SHIP_H / 2);
  lastSim = t;
  return { t, hp, crackFade, speedMul };
}

const frame3D = [];
function push3D(entry) {
  frame3D.push(entry);
}

function text(s, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font || HUD_FONT;
  ctx.fillText(s, x, y);
}

function note(x, y, s) {
  ctx.fillStyle = "#5b6a8c";
  ctx.font = TAG_FONT;
  ctx.fillText(s, x, y);
}

// same call js/drawing.js drawPlayer() makes for the shield stack
function shieldRings(x, y, w, h, layers) {
  ctx.lineWidth = 2;
  for (let i = 0; i < layers; i += 1) {
    const inset = 9 + i * 7;
    const alpha = 0.72 - i * 0.11;
    ctx.strokeStyle = i === layers - 1
      ? `rgba(180, 255, 220, ${alpha})`
      : `rgba(98, 255, 161, ${alpha})`;
    ctx.strokeRect(x - inset, y - inset, w + inset * 2, h + inset * 2);
  }
  ctx.lineWidth = 1;
}

function ship(id, x, y, crack, fade) {
  push3D({ id, key: "player", x, y, w: SHIP_W, h: SHIP_H,
    color: COLORS.player, rot: [-Math.PI / 2, 0, 0], tilt: 0,
    crack: Boolean(crack), crackFade: fade === undefined ? (crack ? 1 : 0) : fade });
}

function mob(id, key, x, y, w, h, color) {
  push3D({ id, key, x, y, w, h, color, phase: x * 0.02, tilt: 0.34 });
}

function scene(top, mobs) {
  ctx.strokeStyle = "rgba(36, 107, 36, 0.5)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, top);
  ctx.lineTo(W, top);
  ctx.stroke();
  ctx.lineWidth = 1;

  text("WAVE 7", 24, top + 24, COLORS.hud, TAG_FONT);
  if (!mobs) return;
  mob("m1-" + top, "squid", 165, top + 70, 30, 26, COLORS.squid);
  mob("m2-" + top, "squid", 285, top + 70, 30, 26, COLORS.squid);
  mob("m3-" + top, "crab", 405, top + 68, 34, 28, COLORS.crab);
  mob("m4-" + top, "octopus", 605, top + 70, 28, 24, COLORS.octopus);
  mob("m5-" + top, "stinger", 725, top + 70, 28, 24, COLORS.stinger);

  [150, 380, 690].forEach((x) => {
    ctx.fillStyle = COLORS.enemyBullet;
    ctx.fillRect(x, top + 190, 4, 10);
  });
}

function panelA(top) {
  text("A - HUD TEXT (shipping)", 24, top + 48, "#9ae6ff", TAG_FONT);
  text("LIVES 2 · HP 2/2", 24, top + 80, COLORS.hud, HUD_FONT);
  text("LIVES 2 · HP 1/2", 176, top + 80, COLORS.hud, HUD_FONT);
  note(552, top + 236, "nothing on the ship itself");
  ship("shipA1", 222, top + 150, false);
  shieldRings(222, top + 150, SHIP_W, SHIP_H, 1);
  ship("shipA2", 622, top + 150, false);
  // shipping crab at 1 HP, for reference - its star is the shape being asked for on the hull
  push3D({ id: "crackRef-" + top, key: "crab", x: 430, y: top + 68, w: 34, h: 28,
    color: COLORS.crab, phase: 0, tilt: 0.34, crack: true });
}

// D: the crack on the ship's own hull - the crab's impact star, drawn at hull scale, through the
// shipping code path (userData.shell + uMap swap in js/assets3d.js). Top: the static read.
// Bottom: the shipping cycle running live - the hit, green hull chips flying, the 30% -> 15%
// slow, the knit at 10 s, and the crack fading out over 0.55 s.
function panelD(top, sim) {
  text("D - HULL CRACK (the crab's star, on the ship's hull)", 24, top + 44, "#9ae6ff", TAG_FONT);
  ship("shipDclean", 222, top + 78, false);
  shieldRings(222, top + 78, SHIP_W, SHIP_H, 1);
  note(150, top + 134, "2 HP: clean hull");
  ship("shipD2", 622, top + 78, true, 1);
  note(552, top + 134, "1 HP: crack on the hull");

  text("LIVES 2 · HP " + sim.hp + "/2   speed x" + sim.speedMul.toFixed(2) +
    "   crack " + sim.crackFade.toFixed(2), 24, top + 176, COLORS.hud, HUD_FONT);
  ship("shipDlive", 380, top + 212, sim.crackFade > 0.02, sim.crackFade);
  note(286, top + 268, "t=" + sim.t.toFixed(1) + "s  hit -> chips, knits at " + HP_REGEN_TIME + "s");
  drawChips();
}

function draw(now) {
  const dt = Math.min(0.05, (now - lastFrame) / 1000);
  lastFrame = now;
  const sim = simState(now);
  stepChips(dt);

  frame3D.length = 0;
  ctx.clearRect(0, 0, W, H);

  scene(0, false);
  scene(PANEL, true);
  ctx.strokeStyle = "#246b24";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, H - 38);
  ctx.lineTo(W, H - 38);
  ctx.stroke();
  ctx.lineWidth = 1;

  panelA(0);
  panelD(PANEL, sim);
  text("shield = its own layer, never HP  ·  respawn = full HP", 24, H - 14, "#93a0bd", TAG_FONT);

  if (window.Iron3D) {
    Iron3D.sync(frame3D);
    Iron3D.render(now);
  }
}

function frame(now) {
  draw(now);
  requestAnimationFrame(frame);
}

frame(performance.now());

const shipCrack = window.Iron3D && Iron3D.debug ? Iron3D.debug("shipD2") : null;

function pct(el) {
  const off = document.createElement("canvas");
  off.width = 90;
  off.height = 60;
  const pg = off.getContext("2d");
  pg.clearRect(0, 0, 90, 60);
  pg.drawImage(el, 0, 0, 90, 60);
  const d = pg.getImageData(0, 0, 90, 60).data;
  let lit = 0;
  for (let i = 3; i < d.length; i += 4) if (d[i] > 8) lit += 1;
  return Math.round((lit / (90 * 60)) * 100);
}
// dark pixels inside the ship's box on the WebGL canvas: the crack lines are near black, the
// hull is bright green, so this counts crack, not imagination
function crackPixels(cx, cy) {
  const off = document.createElement("canvas");
  off.width = 44;
  off.height = 20;
  const pg = off.getContext("2d");
  pg.drawImage(document.getElementById("stage3d"), cx - 22, cy - 10, 44, 20, 0, 0, 44, 20);
  const d = pg.getImageData(0, 0, 44, 20).data;
  let dark = 0;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 8 && d[i] + d[i + 1] + d[i + 2] < 150) dark += 1;
  }
  return dark;
}

const shipCrackPixels = crackPixels(622 + SHIP_W / 2, PANEL + 78 + SHIP_H / 2);
const cleanShipPixels = crackPixels(222 + SHIP_W / 2, PANEL + 78 + SHIP_H / 2);

function canvasProbe() {
  const three = pct(document.getElementById("stage3d"));
  const two = pct(document.getElementById("game"));
  document.title = "HP MOCKUP 3D " + three + "% · 2D " + two + "% · meshes " +
    (window.Iron3D ? Iron3D.count() : 0) +
    " · shipCrack=" + (shipCrack ? (shipCrack.shell ? "shell:" + shipCrack.map + " mix" + shipCrack.mapMix : "no-shell") : "?") +
    " · px1hp=" + shipCrackPixels + " px2hp=" + cleanShipPixels +
    " · chips=" + chips.length;
}
canvasProbe();

document.getElementById("verdict").innerHTML = window.Iron3D
  ? "Models on the WebGL layer: <b>" + Iron3D.count() + " meshes</b>. <b>A</b> is the shipping HUD text (EN/PT). " +
    "<b>D</b> is the crack on the ship's own hull: the crab's impact star, same core, same rays tapering " +
    "outward, same arc ring, drawn at hull scale through the shipping code path " +
    "(<code>userData.shell</code> + <code>uMap</code> swap in <code>js/assets3d.js</code>). The ship reports " +
    "<code>map=" + (shipCrack ? shipCrack.map : "?") + "</code>; dark hull pixels on the WebGL canvas are " +
    "<b>" + shipCrackPixels + " at 1 HP</b> against <b>" + cleanShipPixels + "</b> on the clean hull. The bottom " +
    "row runs the shipping cycle live: hit at t=0, green hull chips fly, crack in over 0.2 s, speed x0.70 " +
    "easing to x0.85 over 2 s, hull knits at " + HP_REGEN_TIME + " s and the crack fades out over " +
    CRACK_FADE_TIME + " s (<code>uMapMix</code>)."
  : "Iron3D did not load - this page is showing the 2D fallback, so nothing here is a valid read of the 2.5D look.";
