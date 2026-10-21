const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
const notesEl = document.getElementById("notes");

const state = { follow: 1, scream: 1, r: 210 };

const banshee = { x: 490, y: 90, w: 34, h: 34, phase: 0 };
const mobs = [];
for (let row = 0; row < 4; row += 1) {
  for (let col = 0; col < 9; col += 1) {
    mobs.push({
      x: 90 + col * 100, y: 170 + row * 70, w: 26, h: 26,
      cool: 0.4 + Math.random() * 2, base: 2.2, frenzied: false, flash: 0
    });
  }
}
let zone = null;
const shots = [];
let screamCool = 1.2;

function step(dt, t) {
  banshee.phase += dt;
  banshee.x = 490 + Math.sin(banshee.phase * 0.5) * 330;
  screamCool -= dt;
  if (state.scream && screamCool <= 0) {
    zone = { t: 3.2, hx: banshee.x, hy: banshee.y };
    screamCool = 6;
  }
  if (zone) {
    zone.t -= dt;
    if (state.follow) { zone.hx = banshee.x; zone.hy = banshee.y; }
    if (zone.t <= 0) zone = null;
  }
  mobs.forEach((m) => {
    m.frenzied = !!zone && Math.hypot(m.x - zone.hx, m.y - zone.hy) < state.r;
    m.cool -= dt * (m.frenzied ? 2.4 : 1);
    if (m.cool <= 0) {
      m.cool = m.base * (0.6 + Math.random() * 0.8) / (m.frenzied ? 1 : 1);
      m.flash = 0.15;
      shots.push({ x: m.x, y: m.y + 14, vy: 240, fr: m.frenzied });
      if (m.frenzied && Math.random() < 0.6) shots.push({ x: m.x + 8, y: m.y + 14, vy: 252, fr: true });
    }
    m.flash = Math.max(0, m.flash - dt);
  });
  for (let i = shots.length - 1; i >= 0; i -= 1) {
    shots[i].y += shots[i].vy * dt;
    if (shots[i].y > canvas.height) shots.splice(i, 1);
  }
}

function draw(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const pulse = 0.5 + 0.5 * Math.sin(t / 110);
  if (zone) {
    const fade = Math.min(1, zone.t / 0.6);
    ctx.save();
    ctx.globalAlpha = (0.16 + 0.12 * pulse) * fade;
    ctx.strokeStyle = "#ff4455";
    ctx.setLineDash([10, 8]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(zone.hx, zone.hy, state.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = (0.22 + 0.18 * pulse) * fade;
    ctx.lineWidth = 2;
    mobs.forEach((m) => {
      if (!m.frenzied) return;
      ctx.beginPath();
      ctx.moveTo(zone.hx, zone.hy);
      ctx.lineTo(m.x, m.y);
      ctx.stroke();
    });
    ctx.globalAlpha = 0.85 * fade;
    ctx.fillStyle = "#ff4455";
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.fillText("!", zone.hx, zone.hy - 26);
    ctx.restore();
  }
  ctx.save();
  ctx.translate(banshee.x, banshee.y);
  ctx.fillStyle = "#c4a8ff";
  ctx.beginPath();
  ctx.arc(0, -4, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(-9, 4, 18, 12);
  ctx.fillStyle = "#171226";
  ctx.fillRect(-6, -8, 4, 5);
  ctx.fillRect(2, -8, 4, 5);
  ctx.fillRect(-2, 0, 4, 6);
  ctx.restore();
  mobs.forEach((m) => {
    ctx.save();
    ctx.translate(m.x, m.y);
    if (m.frenzied) {
      ctx.shadowColor = "#ff4455";
      ctx.shadowBlur = 14;
      ctx.fillStyle = `rgb(255,${90 + Math.round(pulse * 60)},110)`;
    } else {
      ctx.fillStyle = "#ffd26b";
    }
    ctx.fillRect(-m.w / 2, -m.h / 2, m.w, m.h);
    ctx.fillStyle = "#171226";
    ctx.fillRect(-7, -6, 5, 5);
    ctx.fillRect(2, -6, 5, 5);
    ctx.restore();
  });
  shots.forEach((s) => {
    ctx.fillStyle = s.fr ? "#ff6680" : "#9fffc9";
    ctx.fillRect(s.x - 2, s.y, 4, 12);
  });
}

const chipsEl = document.getElementById("chips");
function mkChip(id, label, fn) {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.dataset.chip = id;
  b.textContent = label();
  b.addEventListener("click", () => { fn(); refresh(); });
  chipsEl.appendChild(b);
  return b;
}
function refresh() {
  chipsEl.querySelectorAll("[data-chip]").forEach((b) => {
    b.textContent = b.dataset.chip === "follow" ? "FOLLOW: " + (state.follow ? "ON" : "OFF")
      : b.dataset.chip === "scream" ? "SCREAMS: " + (state.scream ? "ON" : "OFF")
      : "RADIUS " + state.r;
  });
  notesEl.textContent = "Top: banshee drifting · zone " + (zone ? zone.t.toFixed(1) + "s left" : "idle") +
    " · affected mobs: " + mobs.filter((m) => m.frenzied).length + " of " + mobs.length +
    " · red shots = frenzy double-shots";
}
mkChip("follow", () => "FOLLOW: ON", () => { state.follow = state.follow ? 0 : 1; });
mkChip("scream", () => "SCREAMS: ON", () => { state.scream = state.scream ? 0 : 1; });
mkChip("r", () => "RADIUS 210", () => { state.r = state.r === 210 ? 150 : state.r === 150 ? 260 : 210; });

let last = 0;
function frame(t) {
  const dt = Math.min(0.05, (t - last) / 1000);
  last = t;
  step(dt, t);
  draw(t);
  refresh();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

if (new URLSearchParams(location.search).has("selftest")) {
  setTimeout(() => {
    document.title = "SELFTEST " + JSON.stringify({ mobs: mobs.length, shots: shots.length, follow: state.follow });
  }, 700);
}
