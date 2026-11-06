function updateFire(dt) {
  fireCooldown = Math.max(0, fireCooldown - dt);
  if (keys.has(" ")) firePlayer();
}

function resetPlayer(showMessage = true) {
  player = {
    x: W / 2 - 28,
    y: H - 70,
    w: 56,
    h: 22,
    speed: 290
  };
  invulnerabilityTimer = RESPAWN_INVULN;
  playerHp = maxPlayerHp;
  hpSlowTimer = 0;
  dashTimer = 0;
  dashGrace = 0;
  shieldHits = Math.min(shieldHits, maxShieldHits);
  if (upgradeLevels.defense >= 1 && shieldHits < 1) {
    shieldHits = 1;
    effects.shield = Math.max(effects.shield, 30);
    shieldRestoreTimer = 0;
  }
  syncShieldStack();
  bombShots = [];
  dashGhosts = [];
  clearEnemyFire();
  playerBullets = [];
  if (showMessage) showGameMessage(t("RESPAWN: INVULNERABLE"), 1.2, "#78ff78");
}

function mobilityLevel() {
  return upgradeLevels.mobility;
}

function mobilityDashCooldown() {
  const level = mobilityLevel();
  return level >= 4 ? 1.75 : 3.5 - (level - 1) * 0.5;
}

function mobilityDashDistance() {
  return 210;
}

function mobilityDashInvuln() {
  return mobilityLevel() >= 3;
}

function tryDash(dir) {
  if (mobilityLevel() < 1 || dashTimer > 0 || dashCooldown > 0) return;
  dashFrom = player.x;
  dashTo = clamp(player.x + dir * mobilityDashDistance(), 10, W - player.w - 10);
  dashTimer = 0.14;
  dashCooldown = mobilityDashCooldown();
  if (mobilityDashInvuln()) dashGrace = 0.2;
  playDash();
}

function updateDash(dt) {
  if (dashTimer > 0) {
    dashTimer -= dt;
    const t = 1 - Math.max(0, dashTimer) / 0.14;
    player.x = dashFrom + (dashTo - dashFrom) * t;
    dashGhosts.push({ x: player.x, y: player.y, ttl: 0.25 });
    if (dashTimer <= 0) player.x = dashTo;
  }
  if (dashGrace > 0) dashGrace = Math.max(0, dashGrace - dt);
  dashGhosts.forEach((ghost) => {
    ghost.ttl -= dt;
  });
  dashGhosts = dashGhosts.filter((ghost) => ghost.ttl > 0);
}

// A cracked hull (1 HP) drags the ship: -30% on the spot, easing to -15% over HP_SLOW_EASE_TIME.
// The speed comes back when the hull knits (see updateHpRegen).
function playerSpeedMul() {
  if (playerHp >= maxPlayerHp) return 1;
  const t = clamp(hpSlowTimer / HP_SLOW_EASE_TIME, 0, 1);
  return HP_SLOW_START + (HP_SLOW_EASE - HP_SLOW_START) * t;
}

function movePlayer(dt) {
  const left = keys.has("arrowleft") || keys.has("a");
  const right = keys.has("arrowright") || keys.has("d");
  const speed = player.speed * playerSpeedMul();

  if (left) player.x -= speed * dt;
  if (right) player.x += speed * dt;

  if (window.IS_TOUCH && window.touchAimX !== null && window.touchAimX !== undefined) {
    const target = clamp(window.touchAimX - player.w / 2, 10, W - player.w - 10);
    const d = target - player.x;
    const step = speed * 2.2 * dt;
    player.x = Math.abs(d) <= step ? target : player.x + Math.sign(d) * step;
  }

  player.x = clamp(player.x, 10, W - player.w - 10);
}

function firePlayer() {
  if (fireCooldown > 0) return;
  const rapid = effects.rapid > 0;
  const rapidMult = rapid ? 0.76 : 1;
  const offenseMult = 1 - Math.min(0.24, permanentFireRateBonus);
  fireCooldown = 0.44 * rapidMult * offenseMult;

  const multishot = effects.double > 0 || permanentDoubleShots;
  const offsets = multishot ? [-14, 14] : [0];

  offsets.forEach((offset) => {
    playerBullets.push({
      x: player.x + player.w / 2 - 2 + offset,
      y: player.y - 10,
      w: 4,
      h: 12,
      speed: 560,
      damage: 1 + permanentDamage
    });
  });

  playShoot();
}

function useLaser() {
  if (laserCharges <= 0) return;
  laserCharges -= 1;
  fireLaserBeam();
  showGameMessage(t("LASER FIRED x{n} LEFT", { n: laserCharges }), 0.85, "#6fdcff");
}

function fireLaserBeam() {
  const x = player.x + player.w / 2;
  const y = player.y;
  laserBeams.push({
    x,
    ttl: 4,
    maxTtl: 4,
    damageTimer: 0,
    fade: 0.3,
    fadeMax: 0.3
  });
  addExplosion(x, y - 8, "#6fdcff");
  playShoot();
}

function findLaserTarget(x, y) {
  const candidates = [];
  const add = (kind, ref) => {
    if (!ref) return;
    const center = { x: ref.x + ref.w / 2, y: ref.y + ref.h / 2 };
    const window = ref.w / 2 + 6;
    if (center.x < x - window || center.x > x + window) return;
    if (center.y >= y) return;
    candidates.push({ kind, ref, y: center.y });
  };

  invaders.forEach((invader) => {
    if (invader.alive) add("invader", invader);
  });
  bosses.forEach((unit) => add("boss", unit));
  // Minions block the beam, the way they block bullets and take the blast: the
  // idol hovers beside the squid, so the beam hits it instead of the boss.
  minions.forEach((minion) => add("minion", minion));
  add("ufo", ufo);
  enemyBullets.forEach((bullet) => add("bullet", bullet));
  enemyBombs.forEach((bomb) => add("bomb", bomb));
  spikeMines.forEach((mine) => add("mine", mine));

  candidates.sort((a, b) => b.y - a.y);
  return candidates[0] || null;
}

function updateLaserBeams(dt) {
  laserBeams.forEach((beam) => {
    beam.x = player.x + player.w / 2;

    if (beam.ttl > 0) {
      beam.ttl -= dt;
      beam.damageTimer += dt;

      const hitPickup = powerups.find((powerup) => {
        const cx = powerup.x + powerup.w / 2;
        const cy = powerup.y + powerup.h / 2;
        return Math.abs(cx - beam.x) < powerup.w / 2 + 3 && cy < player.y;
      });
      if (hitPickup) collectPowerup(hitPickup);

      if (beam.damageTimer >= 0.5) {
        beam.damageTimer = 0;
        const target = findLaserTarget(beam.x, player.y);
        if (target) damageLaserTarget(target);
      }
    } else {
      beam.fade = Math.max(0, beam.fade - dt);
    }
  });

  laserBeams = laserBeams.filter((beam) => beam.ttl > 0 || beam.fade > 0);
}

function damageLaserTarget(target) {

  const ref = target.ref;
  const cx = ref.x + ref.w / 2;
  const cy = ref.y + ref.h / 2;

    if (target.kind === "invader") {
      ref.hp = Math.max(0, (ref.hp || 1) - 1);
      addExplosion(cx, cy, ref.hp > 0 ? "#ffffff" : ref.type.color);
      playHit();
      if (ref.hp > 0) comboAddHit();
      if (ref.hp <= 0) {
      ref.alive = false;
      registerInvaderKill(ref);
        addExplosion(cx, cy, ref.type.color,
          { name: ref.type.name === "octopus" ? "octo" : ref.type.name, w: ref.w, color: ref.type.color });
        maybeDropPowerup(ref);
        checkWaveClear();
      }
      return;
    }

    if (target.kind === "boss") {
      damageBoss(ref, 1);
      return;
    }

    if (target.kind === "minion") {
      ref.hp -= 1;
      addExplosion(cx, cy, ref.type === "idol" ? "#ffd76a" : "#c9a7ff");
      playHit();
      if (ref.hp > 0) comboAddHit();
      if (ref.hp <= 0) killMinion(ref);
      return;
    }


    if (target.kind === "ufo") {
      ref.hp = Math.max(0, (ref.hp || 1) - 1);
      addExplosion(cx, cy, COLORS.ufo);
      playHit();
      if (ref.hp > 0) comboAddHit();
      if (ref.hp <= 0) {
        comboAddKill();
        addScore(100, cx, cy);
      addExplosion(cx, cy, COLORS.ufo);
      const crate = spawnUfoLootCrate(ref);
      ufo = null;
        playUfoKill();
        showGameMessage(t("UFO DOWN! {name} CRATE", { name: powerupName(crate.lootType) }), 1.25, COLORS.ufo);
      }
      return;
    }

    if (target.kind === "bullet") {
      ref.hp = Math.max(0, (ref.hp || 2) - 1);
      addExplosion(cx, cy, "#ff8844");
      playHit();
      if (ref.hp <= 0) {
        enemyBullets = enemyBullets.filter((bullet) => bullet !== ref);
        addScore(12, cx, cy);
      }
      return;
    }

    if (target.kind === "bomb") {
      ref.hp = Math.max(0, (ref.hp || 2) - 1);
      addExplosion(cx, cy, "#ff6600");
      playHit();
      if (ref.hp <= 0) {
        enemyBombs = enemyBombs.filter((bomb) => bomb !== ref);
        addScore(15, cx, cy);
      }
      return;
    }

    if (target.kind === "mine") {
      ref.hp = Math.max(0, (ref.hp || 1) - 1);
      addExplosion(cx, cy, "#62ffa1");
      playHit();
      if (ref.hp <= 0) {
        spikeMines = spikeMines.filter((mine) => mine !== ref);
        addScore(10, cx, cy);
      }
    }
  }


function updatePlayerBullets(dt) {
  playerBullets.forEach((bullet) => {
    bullet.y -= bullet.speed * dt;
  });
  playerBullets = playerBullets.filter((bullet) => bullet.y > -30);
}

