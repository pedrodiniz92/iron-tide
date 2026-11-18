"use strict";
// DASH INVULN GLOW mockup - mirrors js/player.js tryDash/updateDash (v1.2.1 UTI rework)
// and the 2.5D ship push3D entry of js/drawing.js:321. Real model via the real bundle.
const W = 900, H = 600;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const hud = document.getElementById("hud");

// the real silhouette (js/silhouettes.js "classic") for the 2D underlay/glow
const SIL = { bb: { x: -28, y: -11, w: 56, h: 22 }, path(c) {
  c.beginPath(); c.moveTo(0, -11); c.lineTo(4, -3); c.lineTo(12, 1); c.lineTo(28, 7);
  c.lineTo(16, 9); c.lineTo(6, 6); c.lineTo(-6, 6); c.lineTo(-16, 9);
  c.lineTo(-28, 7); c.lineTo(-12, 1); c.lineTo(-4, -3); c.closePath(); } };

const S = {
  mode: "halo",            // halo | rim | both | off
  level: 1,                // 0 = no dash, 1 = UTI I, 3 = UTI III
  auto: true, rain: true,
  player: { x: W / 2 - 28, y: 520, w: 56, h: 24 },
  dashTimer: 0, dashFrom: 0, dashTo: 0,
  grace: 0, graceMax: 0.12,
  dashCooldown: 0,
  ringT: 9,                // shockwave age (>=1 = dormant)
  bullets: [], popups: [], ghosts: [],
  flash: 0, shake: 0,
  stats: { dodges: 0, hits: 0 }
};

// the real numbers (js/player.js: mobilityDashCooldown + tryDash grace windows)
const GRACE = { 0: 0, 1: 0.12, 3: 0.2 };
const CD = { 0: 0, 1: 3.0, 3: 2.5 };
const DASH_DIST = 210, DASH_T = 0.14;

function tryDash(dir) {
  if (S.level < 1 || S.dashTimer > 0 || S.dashCooldown > 0) return;
  S.dashFrom = S.player.x;
  S.dashTo = clamp(S.player.x + dir * DASH_DIST, 10, W - S.player.w - 10);
  S.dashTimer = DASH_T;
  S.dashCooldown = CD[S.level];
  S.grace = S.graceMax = GRACE[S.level];   // UTI I: 0.12s at START; III: 0.2s (dash+tail)
  S.ringT = 0;
}

function spawnBullet() {
  // biased into the player's lane so the demo actually produces dodges
  const px = S.player.x + S.player.w / 2;
  const x = clamp(px + (Math.random() - 0.5) * 260, 20, W - 26);
  S.bullets.push({ x, y: -14, w: 6, h: 14, vy: 240 + Math.random() * 70, dodged: false });
}

function update(dt) {
  // dash motion + dash ghosts (player.js updateDash)
  if (S.dashTimer > 0) {
    S.dashTimer -= dt;
    const t = 1 - Math.max(0, S.dashTimer) / DASH_T;
    S.player.x = S.dashFrom + (S.dashTo - S.dashFrom) * t;
    S.ghosts.push({ x: S.player.x, y: S.player.y, ttl: 0.25 });
    if (S.dashTimer <= 0) S.player.x = S.dashTo;
  }
  if (S.grace > 0) S.grace = Math.max(0, S.grace - dt);
  if (S.dashCooldown > 0) S.dashCooldown = Math.max(0, S.dashCooldown - dt);
  S.ringT += dt;
  S.ghosts.forEach((g) => { g.ttl -= dt; });
  S.ghosts = S.ghosts.filter((g) => g.ttl > 0);
  S.flash = Math.max(0, S.flash - dt * 3);
  S.shake = Math.max(0, S.shake - dt * 40);

  // auto-demo: dash away from the nearest bullet closing on the ship
  if (S.auto && S.level >= 1 && S.dashTimer <= 0 && S.dashCooldown <= 0) {
    const cx = S.player.x + S.player.w / 2;
    const near = S.bullets.find((b) => b.y > S.player.y - 150 && b.y < S.player.y - 30 &&
      Math.abs(b.x - cx) < 46);
    if (near) tryDash(near.x > cx ? -1 : 1);
  }

  // bullet rain + collisions (overlaps() semantics from js/helpers.js)
  if (S.rain && Math.random() < dt * 2.2) spawnBullet();
  const p = S.player;
  S.bullets.forEach((b) => {
    b.y += b.vy * dt;
    const hit = b.x < p.x + p.w && b.x + b.w > p.x && b.y < p.y + p.h && b.y + b.h > p.y;
    if (!hit) return;
    if (S.grace > 0) {
      // THE DODGE: bullet passes through while invulnerable -> popup + glow is live
      if (!b.dodged) { b.dodged = true; S.stats.dodges += 1; addDodgePopup(); }
    } else if (!b.hitDone) {
      b.hitDone = true; S.stats.hits += 1; S.flash = 1; S.shake = 6;
    }
  });
  S.bullets = S.bullets.filter((b) => b.y < H + 20);

  S.popups.forEach((q) => { q.ttl -= dt; q.y -= 34 * dt; });
  S.popups = S.popups.filter((q) => q.ttl > 0);
}

function addDodgePopup() {
  S.popups.push({ text: "Dodge!", x: S.player.x + S.player.w / 2,
    y: S.player.y - 16, ttl: 0.6, maxTtl: 0.6, born: performance.now() });
}

// ---- render ---------------------------------------------------------------
const frame3D = [];
function draw(now) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, W, H);
  if (S.shake > 0) ctx.translate((Math.random() - 0.5) * S.shake, (Math.random() - 0.5) * S.shake);

  const p = S.player, cx = p.x + p.w / 2, cy = p.y + p.h / 2;
  const i = S.grace > 0 ? S.grace / S.graceMax : 0;   // glow intensity = grace timer

  // SHOCKWAVE RING (mode "both"): pops at dash start, 0.35s
  if (S.mode === "both" && S.ringT < 0.35) {
    const a = S.ringT / 0.35;
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "rgba(127, 216, 234, " + (0.8 * (1 - a)).toFixed(3) + ")";
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(cx, cy, 24 + 90 * a, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
  }

  // HALO: additive cyan aura, quick pop then decays exactly with the grace window
  if ((S.mode === "halo" || S.mode === "both") && i > 0) {
    const pop = 1 + 0.18 * (1 - i);
    const r = 46 * pop;
    const g = ctx.createRadialGradient(cx, cy, 2, cx, cy, r);
    g.addColorStop(0, "rgba(190, 240, 255, " + (0.85 * i).toFixed(3) + ")");
    g.addColorStop(0.45, "rgba(127, 216, 234, " + (0.5 * i).toFixed(3) + ")");
    g.addColorStop(1, "rgba(127, 216, 234, 0)");
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // RIM: neon silhouette underlay (the game's own underlay pattern, cyan = invuln).
  // The 3D hull draws at alpha 0.5 OVER the 2D layer, so this reads through it.
  if ((S.mode === "rim" || S.mode === "both") && i > 0) {
    const scale = 75 / SIL.bb.w;
    ctx.save();
    ctx.translate(cx, cy); ctx.scale(scale, scale);
    ctx.shadowColor = "#7fd8ea"; ctx.shadowBlur = 18 * i;
    ctx.fillStyle = "rgba(127, 216, 234, " + (0.45 * i).toFixed(3) + ")";
    SIL.path(ctx); ctx.fill();
    ctx.fill();   // twice: the game's neon doubles up for the glow core
    ctx.restore();
  }

  // DASH GHOSTS (player.js:65 - the game draws these already; cyan-tinted here)
  S.ghosts.forEach((g) => {
    const scale = 75 / SIL.bb.w;
    ctx.save();
    ctx.translate(g.x + p.w / 2, g.y + p.h / 2); ctx.scale(scale, scale);
    ctx.globalAlpha = g.ttl * 0.8 * 0.35;
    ctx.fillStyle = "#7fd8ea";
    SIL.path(ctx); ctx.fill();
    ctx.restore();
  });

  // bullets (enemy capsule look)
  S.bullets.forEach((b) => {
    ctx.save();
    ctx.shadowColor = b.dodged ? "#7fd8ea" : "#ff6a5a";
    ctx.shadowBlur = b.dodged ? 10 : 6;
    ctx.fillStyle = b.dodged ? "#bfefff" : "#ff6a5a";
    ctx.fillRect(b.x, b.y, b.w, b.h);
    ctx.restore();
  });

  // reload heat bar under the ship (mirrors mobilityDashCooldown)
  if (S.level >= 1) {
    const ready = S.dashCooldown <= 0;
    const f = ready ? 1 : 1 - S.dashCooldown / CD[S.level];
    ctx.save();
    ctx.globalAlpha = ready ? 0.6 + 0.4 * Math.sin(now / 90) : 0.8;
    ctx.fillStyle = ready ? "#7fd8ea" : "#3a5a70";
    ctx.fillRect(cx - 20, p.y + p.h + 8, 40 * f, 3);
    ctx.restore();
  }

  // "Dodge!" popup: rises 34px/s, 0.6s, scale-pop 1.15 -> 1 over the first 0.1s
  S.popups.forEach((q) => {
    const age = q.maxTtl - q.ttl;
    const sc = age < 0.1 ? 1.15 - 1.5 * age : 1;
    ctx.save();
    ctx.translate(q.x, q.y);
    ctx.scale(sc, sc);
    ctx.font = "bold 15px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.shadowColor = "#7fd8ea"; ctx.shadowBlur = 8;
    ctx.fillStyle = "rgba(127, 216, 234, " + Math.min(1, q.ttl / 0.35).toFixed(3) + ")";
    ctx.fillText(q.text, 0, 0);
    ctx.restore();
  });

  // hit flash (control: no grace -> you eat it)
  if (S.flash > 0) {
    ctx.save();
    ctx.fillStyle = "rgba(255, 60, 60, " + (0.22 * S.flash).toFixed(3) + ")";
    ctx.fillRect(-20, -20, W + 40, H + 40);
    ctx.restore();
  }

  // the REAL ship: same push3D entry as js/drawing.js:321 (ship1/LANTERN look)
  if (window.Iron3D) {
    frame3D.length = 0;
    frame3D.push({ id: "player", key: Iron3D.shipLookKey(),
      x: p.x, y: p.y, w: p.w, h: p.h,
      color: "#5a6678", rot: [-Math.PI / 2, 0, 0], tilt: 0, alpha: 0.5, guns: 0,
      pow: { laser: false, rapid: false, slow: false, bomb: false } });
    Iron3D.sync(frame3D);
    Iron3D.render(now);
  }

  hud.innerHTML = "mode <b>" + S.mode + "</b> · UTI <b>" + (S.level || "off") + "</b> · grace <b>" +
    Math.round(S.grace * 1000) + "ms</b> · reload <b>" + S.dashCooldown.toFixed(1) + "s</b> · dodges <b>" +
    S.stats.dodges + "</b> · hits <b>" + S.stats.hits + "</b>";
}

let last = performance.now();
function loop(now) {
  const dt = Math.min(0.035, (now - last) / 1000);
  last = now;
  update(dt);
  draw(now);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// ---- panel + keys ----------------------------------------------------------
function setMode(m) { S.mode = m; wire(); }
function setLevel(l) { S.level = l; S.grace = 0; S.dashTimer = 0; S.dashCooldown = 0; wire(); }
function wire() {
  document.querySelectorAll("#panel button[data-mode]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.mode === S.mode)));
  document.querySelectorAll("#panel button[data-lvl]").forEach((b) =>
    b.setAttribute("aria-pressed", String(Number(b.dataset.lvl) === S.level)));
  document.querySelectorAll("#panel button[data-auto]").forEach((b) =>
    b.setAttribute("aria-pressed", String(S.auto)));
  document.querySelectorAll("#panel button[data-rain]").forEach((b) =>
    b.setAttribute("aria-pressed", String(S.rain)));
}
document.querySelectorAll("#panel button").forEach((b) => b.addEventListener("click", () => {
  if (b.dataset.mode) setMode(b.dataset.mode);
  if (b.dataset.lvl) setLevel(Number(b.dataset.lvl));
  if (b.dataset.auto) S.auto = !S.auto;
  if (b.dataset.rain) S.rain = !S.rain;
  wire();
}));
addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  if (k === "1") setMode("halo");
  if (k === "2") setMode("rim");
  if (k === "3") setMode("both");
  if (k === "4") setMode("off");
  if (k === "q") setLevel(0);
  if (k === "w") setLevel(1);
  if (k === "e") setLevel(3);
  if (k === "r") { S.auto = !S.auto; wire(); }
  if (k === "t") { S.rain = !S.rain; wire(); }
  if (e.shiftKey && (k === "arrowleft" || k === "a")) tryDash(-1);
  if (e.shiftKey && (k === "arrowright" || k === "d")) tryDash(1);
});

// ---- probe surface ---------------------------------------------------------
window.SANDBOX = {
  S,
  setMode, setLevel,
  setAuto: (v) => { S.auto = !!v; wire(); },
  setRain: (v) => { S.rain = !!v; wire(); },
  dash: tryDash,
  state: () => ({ mode: S.mode, level: S.level, grace: +S.grace.toFixed(3), graceMax: S.graceMax,
    cooldown: +S.dashCooldown.toFixed(2), dodges: S.stats.dodges, hits: S.stats.hits,
    bullets: S.bullets.length, popups: S.popups.length, playerX: Math.round(S.player.x) })
};
