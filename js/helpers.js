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

// Foe shot speed for the wave being played (see ENEMY_SHOT_SPEED_SCALES).
function enemyShotSpeedScale() {
  return ENEMY_SHOT_SPEED_SCALES[level] || 1;
}

// Every foe shot is born here. The early-wave curve scales the vertical and the horizontal
// component together, so the shot is slower along exactly the same line of fire.
function pushEnemyBullet(bullet) {
  const scale = enemyShotSpeedScale();
  if (scale !== 1) {
    bullet.speed = (bullet.speed || 0) * scale;
    bullet.vx = (bullet.vx || 0) * scale;
  }
  enemyBullets.push(bullet);
}

function addExplosion(x, y, color, squash = null) {
  explosions.push({ x, y, color, squash, ttl: 0.38 });
}

// Green hull chips thrown off the ship when a hit cracks it. 2D layer, like the explosions.
function addHullChips(x, y, count = 14) {
  for (let i = 0; i < count; i += 1) {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.4;
    const sp = 90 + Math.random() * 190;
    const ttl = HULL_CHIP_TIME * (0.7 + Math.random() * 0.5);
    hullChips.push({
      x: x + (Math.random() - 0.5) * 26,
      y: y + (Math.random() - 0.5) * 10,
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

function updateHullChips(dt) {
  hullChips.forEach((chip) => {
    chip.ttl -= dt;
    chip.vy += 520 * dt;
    chip.vx *= 1 - 1.6 * dt;
    chip.x += chip.vx * dt;
    chip.y += chip.vy * dt;
    chip.rot += chip.spin * dt;
  });
  hullChips = hullChips.filter((chip) => chip.ttl > 0);
}

// The only HP recovery outside a respawn: the hull knitting itself back at 1 HP (see
// updateHpRegen), or a heal a future powerup may call. Shields never call this - shield is
// its own layer and never touches playerHp.
function healPlayer(to = maxPlayerHp) {
  const next = clamp(to, 0, maxPlayerHp);
  if (next <= playerHp) return false;
  playerHp = next;
  hpSlowTimer = 0;
  return true;
}

// Ticks the cracked-hull state: crack in, slow ease, and the 10 s knit back to full HP.
// Runs in "playing" and "waveBreak", like the death pause, so a hit at the end of a wave
// still heals on time.
function updateHpRegen(dt) {
  if (playerHp >= maxPlayerHp) {
    hpSlowTimer = 0;
    crackFade = Math.max(0, crackFade - dt / CRACK_FADE_TIME);
    return;
  }
  hpSlowTimer += dt;
  crackFade = Math.min(1, crackFade + dt / CRACK_SHOW_TIME);
  if (hpSlowTimer >= HP_REGEN_TIME) healPlayer(maxPlayerHp);
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
  if (next > comboMultiplier) updateStatus(t("COMBO x{n}", { n: next }));
  comboMultiplier = next;
}

function powerupName(type) {
  return t(type?.name || POWERUP_NAMES[type?.id] || type?.label || "POWER");
}

function isPlayerInvulnerable() {
  return invulnerabilityTimer > 0 || dashGrace > 0 || respawnTimer > 0;
}

// Single entry point for player damage: HP first, lives second.
// A non-lethal hit costs no reset, so it buys a short grace to reposition.
function damagePlayer(hits = 1) {
  if (state !== "playing" || isPlayerInvulnerable()) return false;

  if (playerHp > hits) {
    playerHp -= hits;
    invulnerabilityTimer = 0.8;
    hpSlowTimer = 0;
    addScreenShake(7);
    addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
    addHullChips(player.x + player.w / 2, player.y + player.h / 2);
    playShieldHit();
    showGameMessage(t("HIT! {n} HP LEFT", { n: playerHp }), 0.9, "#ffb04c");
    return false;
  }

  lives -= 1;
  addScreenShake(14);
  playPlayerDeath();
  addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
  clearWeaponUpgrades();
  clearEnemyFire();
  playerBullets = [];
  clearPlayerBulletsPending = true;

  if (lives <= 0) {
    gameOver();
  } else {
    respawnTimer = RESPAWN_PAUSE;
  }
  return false;
}

// Ticks the death pause. Called from both "playing" and "waveBreak" so a death at the
// end of a wave still respawns on time instead of leaving a ghost ship for the whole break.
function updateRespawn(dt) {
  if (respawnTimer <= 0) return;
  respawnTimer = Math.max(0, respawnTimer - dt);
  if (respawnTimer <= 0) resetPlayer(state !== "choices");
}

function getSlowFactor(target) {
  if (effects.slow <= 0) return 1;
  return SLOW_FACTORS[target] || 1;
}

function clearEnemyFire() {
  enemyBullets = [];
  enemyBombs = [];
  spikeMines = [];
  clearEnemyFirePending = true;
}

function noteShieldBreak() {
  if (shieldRestoreDelay <= 0 || shieldRestoreTimer > 0) return;
  if (shieldHits >= maxShieldHits) return;
  shieldRestoreTimer = shieldRestoreDelay;
  showGameMessage(t("SHIELD BROKEN - RESTORES IN {n}s", { n: shieldRestoreDelay }), 1.35, "#ff8844");
}

function syncShieldStack() {
  itemShieldHits = Math.max(0, shieldHits - maxShieldHits);
}

// Shield is a separate layer: it never touches playerHp.
// Only a respawn (a lost life) refills HP, see resetPlayer().
function addShieldHit(duration = 30) {
  shieldHits += 1;
  syncShieldStack();
  effects.shield = Math.max(effects.shield, duration);
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

  if (shieldHits >= maxShieldHits) {
    shieldRestoreTimer = 0;
  } else if (shieldRestoreTimer > 0) {
    shieldRestoreTimer = Math.max(0, shieldRestoreTimer - dt);
    if (shieldRestoreTimer <= 0 && maxShieldHits > 0) {
      shieldHits = maxShieldHits + itemShieldHits;
      effects.shield = Math.max(effects.shield, 30);
      playShieldCharge();
      showGameMessage(t("SHIELD RESTORED"), 1.15, "#62ffa1");
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
    invader.y = Math.min(invader.baseY + Math.sin(phase) * amplitude, player.y - 4 - invader.h);
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
  const extras = document.getElementById("startExtras");
  if (extras) extras.style.display = "none";
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

