function updatePowerups(dt) {
  powerups.forEach((powerup) => {
    powerup.x += powerup.vx * dt;
    powerup.y += powerup.vy * dt;
    if (powerup.x < 22 || powerup.x > W - 48) powerup.vx *= -1;
    if (Number.isFinite(powerup.ttl)) powerup.ttl = Math.max(0, powerup.ttl - dt);
  });

  powerups = powerups.filter((powerup) => {
    return powerup.y < H - 46 && (!Number.isFinite(powerup.ttl) || powerup.ttl > 0);
  });

  const touched = powerups.find((powerup) => overlaps(powerup, player));
  if (touched) collectPowerup(touched);
}

function updateEffects(dt) {
  if (!permanentLongPowerups) {
    Object.keys(effects).forEach((key) => {
      effects[key] = Math.max(0, effects[key] - dt);
    });
  }

  if (effects.shield <= 0) {
    if (shieldHits > 0 && shieldRestoreTimer <= 0) {
      shieldHits = 0;
      syncShieldStack();
      noteShieldBreak();
    } else if (shieldHits > 0) {
      shieldHits = 0;
      syncShieldStack();
    }
  }
}

function maybeDropPowerup(invader) {
  const chance = Math.min(0.22, 0.07 + level * 0.006 + dropRateBonus);
  if (Math.random() > chance) return;

  const roll = Math.random();
  let type = POWERUP_TYPES[0];
  if (roll < 0.04) type = POWERUP_TYPES.find((powerup) => powerup.id === "bomb") || POWERUP_TYPES[0];
  else if (roll < 0.16) type = POWERUP_TYPES.find((powerup) => powerup.id === "shield") || POWERUP_TYPES[0];
  else if (roll < 0.24) type = POWERUP_TYPES.find((powerup) => powerup.id === "laser") || POWERUP_TYPES[0];
  else if (roll < 0.42) type = POWERUP_TYPES.find((powerup) => powerup.id === "double") || POWERUP_TYPES[0];
  else if (roll < 0.7) type = POWERUP_TYPES.find((powerup) => powerup.id === "rapid") || POWERUP_TYPES[0];
  else type = POWERUP_TYPES.find((powerup) => powerup.id === "slow") || POWERUP_TYPES[0];

  spawnPowerupAt(invader.x + invader.w / 2, invader.y + invader.h / 2, type,
    false, 6, invaderDirection * (26 + Math.random() * 10));
}

function spawnPowerupAt(x, y, type, fromUfo = false, ttl = 6, vx = null) {
  const powerup = {
    type,
    x: Math.max(22, Math.min(W - 48, x - 13)),
    y: Math.max(52, Math.min(H - 90, y - 12)),
    w: 26,
    h: 24,
    vx: vx === null ? (Math.random() < 0.5 ? -1 : 1) * (18 + Math.random() * 22) : vx,
    vy: 34 + level * 2,
    fromUfo,
    ttl,
    persist: !Number.isFinite(ttl)
  };
  powerups.push(powerup);
  return powerup;
}

function pickLootType(quality = 1) {
  const table = quality >= 3
    ? [["laser", 30], ["double", 25], ["shield", 25], ["bomb", 20]]
    : quality >= 2
      ? [["laser", 24], ["shield", 24], ["double", 22], ["bomb", 18], ["rapid", 12]]
      : [["rapid", 28], ["double", 26], ["slow", 22], ["shield", 14], ["laser", 8], ["bomb", 2]];

  const roll = Math.random() * table.reduce((total, item) => total + item[1], 0);
  let sum = 0;
  for (const item of table) {
    sum += item[1];
    if (roll <= sum) {
      return POWERUP_TYPES.find((powerup) => powerup.id === item[0]) || POWERUP_TYPES[0];
    }
  }

  return POWERUP_TYPES.find((powerup) => powerup.id === table[0][0]) || POWERUP_TYPES[0];
}

function spawnUfoLootCrate(ufo) {
  const quality = Math.max(1, (ufo.maxHp || 3) - 2);
  const lootType = pickLootType(quality);
  const crate = spawnPowerupAt(
    ufo.x + ufo.w / 2,
    ufo.y + ufo.h / 2,
    POWERUP_TYPES.find((powerup) => powerup.id === "loot") || POWERUP_TYPES[0],
    true,
    Infinity,
    ufo.vx
  );

  crate.lootQuality = quality;
  crate.lootType = lootType;
  return crate;
}

function applyTemporaryEffect(id, duration) {
  if (permanentLongPowerups) {
    effects[id] = Infinity;
    return;
  }
  effects[id] = Math.min(14, effects[id] + duration);
}

function grantBomb(x, y) {
  const isFirstBomb = bombInventory === 0;
  bombInventory += 1;
  showFloatingMessage(`BOMB READY x${bombInventory}`, x, y, 1.2, "#ffe66a");
  if (isFirstBomb) showGameMessage("PRESS Q TO LAUNCH", 1.8, "#ffe66a", H * 0.68);
}

function openLootCrate(powerup) {
  const loot = powerup.lootType || pickLootType(powerup.lootQuality || 1);
  const label = loot.label;

  const name = powerupName(loot);
  const fx = powerup.x + powerup.w / 2;
  const fy = powerup.y - 18;
  if (loot.id === "bomb") {
    grantBomb(fx, fy);
    return;
  }

  if (loot.id === "shield") {
    addShieldHit();
    effects.shield = Infinity;
    showFloatingMessage(`SHIELD x${shieldHits}`, fx, fy, 1.2, "#62ffa1");
    return;
  }

  applyTemporaryEffect(loot.id, loot.duration);
  showFloatingMessage(permanentLongPowerups ? `${name} UNTIL DEATH` : `${name} +${loot.duration}s`, fx, fy, 1.2, loot.color);
}

function collectPowerup(powerup) {
  powerups = powerups.filter((item) => item !== powerup);
  addScore(25, powerup.x + powerup.w / 2, powerup.y + powerup.h / 2);
  addScreenShake(2);
  addExplosion(powerup.x + powerup.w / 2, powerup.y + powerup.h / 2, powerup.type.color);
  playPowerup();

  if (powerup.type.id === "loot") {
    openLootCrate(powerup);
    return;
  }

  const name = powerupName(powerup.type);
  const fx = powerup.x + powerup.w / 2;
  const fy = powerup.y - 18;
  if (powerup.type.id === "bomb") {
    grantBomb(fx, fy);
    return;
  }

  if (powerup.type.id === "shield") {
    addShieldHit();
    effects.shield = Infinity;
    showFloatingMessage(`SHIELD READY x${shieldHits}`, fx, fy, 1.0, "#62ffa1");
    return;
  }

  applyTemporaryEffect(powerup.type.id, powerup.type.duration);
  showFloatingMessage(permanentLongPowerups ? `${name} UNTIL DEATH` : `${name} +${powerup.type.duration}s`, fx, fy, 1.0, powerup.type.color);
}

function useBomb() {
  if (bombInventory <= 0) return;
  bombInventory -= 1;
  bombShots.push({
    x: player.x + player.w / 2 - 5,
    y: player.y - 22,
    w: 18,
    h: 22,
    vx: (Math.random() * 22 - 11) * bombSpeedMultiplier,
    vy: -260 * bombSpeedMultiplier,
    radius: 180 + (bombSpeedMultiplier - 1) * 28 + bombRadiusBonus,
    ttl: 4.5,
    trail: []
  });
  playBombLaunch();
  addScreenShake(2);
  showGameMessage(`BOMB FIRED x${bombInventory} LEFT`, 0.85, "#ffe66a");
}

function updateBombShots(dt) {
  bombShots = bombShots.filter((shot) => {
    shot.ttl -= dt;
    shot.x += shot.vx * dt;
    shot.y += shot.vy * dt;

    shot.trail.push({ x: shot.x + shot.w / 2, y: shot.y + shot.h / 2, ttl: 0.28 });
    shot.trail.forEach((point) => {
      point.ttl -= dt;
    });
    shot.trail = shot.trail.filter((point) => point.ttl > 0);

    if (shot.y < 0 || shot.y > H + 60) return false;

    if (shot.ttl <= 0) {
      explodeBombShot(shot);
      return false;
    }

    const hitInvader = invaders.find((invader) => invader.alive && overlaps(shot, invader));
    const hitUfo = ufo && overlaps(shot, ufo);
    const hitBoss = boss && overlaps(shot, boss);
    const hitEnemyBullet = enemyBullets.find((bullet) => overlaps(shot, bullet));
    const hitShield = shields.find((shield) => overlaps(shot, shield));

    if (hitInvader || hitUfo || hitBoss || hitEnemyBullet || hitShield) {
      explodeBombShot(shot);
      return false;
    }

    return true;
  });
}

function explodeBombShot(shot) {
  const centerShotX = shot.x + shot.w / 2;
  const centerShotY = shot.y + shot.h / 2;
  addExplosion(centerShotX, centerShotY, COLORS.explosion);
  addExplosion(centerShotX, centerShotY, "#ffe066");
  addExplosion(centerShotX, centerShotY, "#ff6600");
  addShockwave(centerShotX, centerShotY, shot.radius * 1.45);
  addScreenShake(10);
  playBombExplosion();

  invaders.forEach((invader) => {
    if (!invader.alive) return;
    const dx = invader.x + invader.w / 2 - centerShotX;
    const dy = invader.y + invader.h / 2 - centerShotY;
    if (dx * dx + dy * dy <= shot.radius * shot.radius) {
      invader.shieldHp = 0;
      invader.hp = Math.max(0, (invader.hp || 1) - 2);
      if (invader.hp === 1 && (invader.maxHp || 1) >= 2) invader.threatened = 5;
      if (invader.hp > 0) {
        comboAddHit();
        addExplosion(invader.x + invader.w / 2, invader.y + invader.h / 2, invaderHitColor(invader));
      } else {
        invader.alive = false;
        registerInvaderKill(invader);
        addExplosion(invader.x + invader.w / 2, invader.y + invader.h / 2, invader.type.color,
          { name: invader.type.name === "octopus" ? "octo" : invader.type.name, w: invader.w, color: invader.type.color });
        maybeDropPowerup(invader);
      }
    }
  });

  if (boss) {
    const dx = boss.x + boss.w / 2 - centerShotX;
    const dy = boss.y + boss.h / 2 - centerShotY;
    if (dx * dx + dy * dy <= shot.radius * shot.radius) {
      if (boss.burrowing) {
        boss.burrowing = false;
        boss.coreOpen = false;
        boss.burrowTele = 0;
        boss.burrowTimer = Math.max(7.2, 9.6 - level * 0.06);
        showGameMessage("BURROW BROKEN!", 1.0, "#ffe066");
        damageBoss(Math.round(18 + level * 1.5 + boss.maxHp * 0.09));
      } else {
        damageBoss(Math.round(12 + level + boss.maxHp * 0.06));
      }
    }
  }

  const clearRadius = shot.radius * 0.85;
  enemyBullets = enemyBullets.filter((bullet) => {
    const dx = bullet.x + bullet.w / 2 - centerShotX;
    const dy = bullet.y + bullet.h / 2 - centerShotY;
    if (dx * dx + dy * dy > clearRadius * clearRadius) return true;
    bullet.hp = Math.max(0, (bullet.hp || 1) - 1);
    if (bullet.hp <= 0) {
      addScore(12);
      return false;
    }
    return true;
  });
  enemyBombs = enemyBombs.filter((bomb) => {
    const dx = bomb.x + bomb.w / 2 - centerShotX;
    const dy = bomb.y + bomb.h / 2 - centerShotY;
    if (dx * dx + dy * dy > clearRadius * clearRadius) return true;
    bomb.hp = Math.max(0, (bomb.hp || 2) - 1);
    if (bomb.hp <= 0) {
      addScore(15);
      return false;
    }
    return true;
  });

  if (ufo) {
    const dx = ufo.x + ufo.w / 2 - centerShotX;
    const dy = ufo.y + ufo.h / 2 - centerShotY;
    if (dx * dx + dy * dy <= shot.radius * shot.radius) {
      comboAddKill();
      addScore(100, ufo.x + ufo.w / 2, ufo.y + ufo.h / 2);
      addExplosion(ufo.x + ufo.w / 2, ufo.y + ufo.h / 2, COLORS.ufo);
      const crate = spawnUfoLootCrate(ufo);
      ufo = null;
      playUfoKill();
    }
  }

  checkWaveClear();
}

