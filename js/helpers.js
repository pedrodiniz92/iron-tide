function damageShield(shield, bullet) {
  shield.cells = shield.cells.filter((cell) => {
    if (!overlaps(bullet, cell)) return true;
    cell.hp -= 1;
    return cell.hp > 0;
  });

  if (!shield.cells.length) {
    shields = shields.filter((item) => item !== shield);
  }
}

function overlaps(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function overlapsPadded(a, b, pad) {
  return a.x < b.x + b.w + pad && a.x + a.w > b.x - pad && a.y < b.y + b.h + pad && a.y + a.h > b.y - pad;
}

function addExplosion(x, y, color, squash = null) {
  explosions.push({ x, y, color, squash, ttl: 0.38 });
}

function addScreenShake(power) {
  screenShake = Math.min(18, screenShake + power);
}

function addScorePopup(x, y, points) {
  scorePopups.push({
    x,
    y,
    points,
    ttl: 0.82,
    maxTtl: 0.82,
    color: comboMultiplier > 1 ? "#ffe066" : "#ffffff"
  });
}

function registerInvaderKill(invader) {
  comboAddKill();
  addScore(invader.type.score, invader.x + invader.w / 2, invader.y + invader.h / 2);
}

function comboActive() {
  return comboMeter > 0 && comboTimer > 0;
}

function comboAddHit() {
  comboMeter = Math.min(1, comboMeter + 0.06);
  comboTimer = Math.max(comboTimer, 2.25);
  refreshCombo();
}

function comboAddKill() {
  combo += 1;
  comboMeter = Math.min(1, comboMeter + 0.2);
  comboTimer = Math.max(comboTimer, 2.25);
  refreshCombo();
}

function refreshCombo() {
  const next = Math.min(8, 1 + Math.floor(comboMeter * 8));
  if (next > comboMultiplier) updateStatus(`COMBO x${next}`);
  comboMultiplier = next;
}

function powerupName(type) {
  return type?.name || POWERUP_NAMES[type?.id] || type?.label || "POWER";
}

function isPlayerInvulnerable() {
  return invulnerabilityTimer > 0 || dashGrace > 0;
}

function getSlowFactor(target) {
  if (effects.slow <= 0) return 1;
  return SLOW_FACTORS[target] || 1;
}

function clearEnemyFire() {
  enemyBullets = [];
  enemyBombs = [];
  spikeMines = [];
}

function noteShieldBreak() {
  if (shieldRestoreDelay <= 0 || shieldRestoreTimer > 0) return;
  shieldRestoreTimer = shieldRestoreDelay;
  showGameMessage(`SHIELD BROKEN - RESTORES IN ${shieldRestoreDelay}s`, 1.35, "#ff8844");
}

function addShieldHit() {
  shieldHits = maxShieldHits;
  effects.shield = Math.max(effects.shield, 30);
  shieldRestoreTimer = 0;
}

function showGameMessage(text, ttl = 1.15, color = "#ffe066", y = H / 2 - 24) {
  gameMessages.push({
    text,
    ttl,
    maxTtl: ttl,
    color,
    x: W / 2,
    y
  });
  if (gameMessages.length > 4) gameMessages.shift();
  updateStatus(text);
}

function showFloatingMessage(text, x, y, ttl = 0.95, color = "#ffe066") {
  gameMessages.push({
    text,
    ttl,
    maxTtl: ttl,
    color,
    x: clamp(x, 54, W - 54),
    y: clamp(y, 44, H - 60)
  });
  if (gameMessages.length > 6) gameMessages.shift();
  updateStatus(text);
}

function updateGameMessages(dt) {
  gameMessages.forEach((message) => {
    message.ttl -= dt;
    message.y -= 12 * dt;
  });
  gameMessages = gameMessages.filter((message) => message.ttl > 0);
}

function updateFeedback(dt) {
  comboTimer -= dt;
  comboMeter = Math.max(0, comboMeter - dt * 0.22);
  if (comboTimer <= 0 || comboMeter <= 0) {
    combo = 0;
    comboMeter = 0;
    comboMultiplier = 1;
  }

  screenShake = Math.max(0, screenShake - dt * 16);
  if (dashCooldown > 0) {
    dashCooldown = Math.max(0, dashCooldown - dt);
    if (dashCooldown === 0) playDashCharge();
  }
  waveTime += dt;
  invulnerabilityTimer = Math.max(0, invulnerabilityTimer - dt);
  updateGameMessages(dt);

  if (shieldHits > 0) {
    shieldRestoreTimer = 0;
  } else if (shieldRestoreTimer > 0) {
    shieldRestoreTimer = Math.max(0, shieldRestoreTimer - dt);
    if (shieldRestoreTimer <= 0 && maxShieldHits > 0) {
      shieldHits = maxShieldHits;
      effects.shield = 30;
      playShieldCharge();
      showGameMessage("SHIELD RESTORED", 1.15, "#62ffa1");
    }
  }

  scorePopups.forEach((popup) => {
    popup.ttl -= dt;
    popup.y -= 42 * dt;
  });
  scorePopups = scorePopups.filter((popup) => popup.ttl > 0);
}

function getWavePattern() {
  const patterns = ["classic", "stagger", "weave", "swoop"];
  return patterns[(level - 1) % patterns.length];
}

function invaderSpeedFactor(invader) {
  const pattern = getWavePattern();
  if (pattern === "stagger") return 0.72 + invader.row * 0.13;
  if (pattern === "swoop") return 1.12 - invader.row * 0.05;
  return 1;
}

function applyWavePatternMotion() {
  const pattern = getWavePattern();
  if (pattern !== "weave" && pattern !== "swoop") return;

  const amplitude = pattern === "swoop" ? 18 + level * 2 : 8 + level;
  invaders.filter((invader) => invader.alive).forEach((invader) => {
    const phase = waveTime * 1.35 + invader.x * 0.025 + invader.row * 0.75;
    invader.y = Math.min(invader.baseY + Math.sin(phase) * amplitude, H - 72);
  });
}

function invaderTypeForRow(row) {
  return INVADER_TYPES.find((type) => type.rows.includes(row)) || INVADER_TYPES[2];
}

function updateDashHint() {
  const el = document.getElementById("dashHint");
  if (el) el.style.display = (upgradeLevels && upgradeLevels.mobility >= 1) ? "inline" : "none";
}

function showOverlay(title, subtitle) {
  if (!overlay || !overlayTitle || !overlaySub) return;
  overlayTitle.textContent = title;
  overlaySub.textContent = subtitle;
  if (pauseToggles) pauseToggles.style.display = "none";
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  overlay?.classList.add("hidden");
}

function updateStatus(text) {
  const status = document.getElementById("status");
  if (status) status.textContent = text;
}

function loadHighScore() {
  try {
    if (!localStorage.getItem("hiscoreResetV2")) {
      localStorage.removeItem("invadersIronTideHighScore");
      localStorage.removeItem("spaceInvadersHighScore");
      localStorage.setItem("hiscoreResetV2", "1");
    }
    return Number(localStorage.getItem("invadersIronTideHighScore") || 0);
  } catch {
    return 0;
  }
}

function saveHighScore(value) {
  try {
    localStorage.setItem("invadersIronTideHighScore", String(value));
  } catch {
    return;
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

