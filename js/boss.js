function updateEnemyBombs(dt) {
  enemyBombs = enemyBombs.filter((bomb) => {
    bomb.vy += 280 * dt;
    bomb.x += bomb.vx * dt;
    bomb.y += bomb.vy * dt;
    bomb.ttl -= dt;

    bomb.trail.push({ x: bomb.x + bomb.w / 2, y: bomb.y + bomb.h / 2, ttl: 0.28 });
    bomb.trail.forEach((point) => {
      point.ttl -= dt;
    });
    bomb.trail = bomb.trail.filter((point) => point.ttl > 0);

    if (bomb.y >= H - 42) return false;
    if (bomb.x < -20 || bomb.x > W + 20) return false;

    if (bomb.ttl <= 0) {
      if (!bomb.direct) explodeEnemyBomb(bomb);
      return false;
    }

    const hitShield = shields.find((shield) => overlaps(bomb, shield));
    if (hitShield) {
      explodeEnemyBomb(bomb, hitShield);
      return false;
    }

    if (overlaps(bomb, player)) {
      addExplosion(bomb.x + bomb.w / 2, bomb.y + bomb.h / 2, bomb.color || "#ff3366");
      hitPlayerWithEnemyBomb(bomb.playerDamage);
      return false;
    }

    return true;
  });
}

function updateSpikeMines(dt) {
  spikeMines = spikeMines.filter((mine) => {
    mine.x += (mine.vx || 0) * dt;
    mine.y += mine.vy * dt;
    mine.ttl -= dt;

    if (mine.y >= H - 42 || mine.ttl <= 0) return false;

    const hitShield = shields.find((shield) => overlaps(mine, shield));
    if (hitShield) {
      damageShieldArea(hitShield, mine.x + mine.w / 2, mine.y + mine.h / 2, mine.shieldDamage || 12);
      addExplosion(mine.x + mine.w / 2, mine.y + mine.h / 2, "#62ffa1");
      playShieldHit();
      return false;
    }

    if (overlaps(mine, player)) {
      hitPlayerWithSpikeMine();
      addExplosion(mine.x + mine.w / 2, mine.y + mine.h / 2, "#62ffa1");
      return false;
    }

    return true;
  });
}

function hitPlayerWithSpikeMine() {
  if (isPlayerInvulnerable()) return;

  if (shieldHits > 0 && effects.shield > 0) {
    shieldHits -= 1;
    syncShieldStack();
    if (shieldHits <= 0) effects.shield = 0;
    addExplosion(player.x + player.w / 2, player.y + player.h / 2, "#62ffa1");
    playShieldHit();
    showGameMessage(shieldHits > 0 ? `SHIELD ABSORBED SPIKE x${shieldHits}` : "SHIELD GONE", 1.1, "#62ffa1");
    return;
  }

  lives -= 1;
  addScreenShake(12);
  playPlayerDeath();
  addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
  clearWeaponUpgrades();
  clearEnemyFire();
  playerBullets = [];

  if (lives <= 0) {
    gameOver();
  } else {
    resetPlayer();
  }
}

function fireSpikeMine(boss) {
  const mineCount = boss.burrowing ? Math.max(2, boss.mineBurst || 2) : 1;
  const spread = mineCount === 1 ? 0 : 44;
  for (let i = 0; i < mineCount; i += 1) {
    const offset = mineCount === 1 ? 0 : (i - (mineCount - 1) / 2) * spread;
    spikeMines.push({
      x: boss.x + boss.w / 2 - 8 + offset,
      y: boss.y + boss.h,
      w: 16,
      h: 16,
      vx: offset * 0.45,
      vy: boss.burrowing ? 128 : 112,
      ttl: 6.2,
      hp: 1,
      maxHp: 1,
      shieldDamage: boss.mineShieldDamage || 12
    });
  }
}

function explodeEnemyBomb(bomb, hitShield = null) {
  const centerBombX = bomb.x + bomb.w / 2;
  const centerBombY = bomb.y + bomb.h / 2;
  const direct = bomb.direct === true;
  addExplosion(centerBombX, centerBombY, "#ff6600");
  addExplosion(centerBombX, centerBombY, COLORS.explosion);
  if (!direct) {
    addShockwave(centerBombX, centerBombY, bomb.radius * 1.45);
  }
  addScreenShake(direct ? 4 : 6);
  playBombExplosion();

  if (hitShield) {
    damageShieldArea(hitShield, centerBombX, centerBombY, bomb.shieldDamage || 24);
  }

  if (Math.hypot(player.x + player.w / 2 - centerBombX, player.y + player.h / 2 - centerBombY) <= bomb.radius) {
    hitPlayerWithEnemyBomb(bomb.playerDamage || 1);
  }
}

function hitPlayerWithEnemyBomb(damage = 1) {
  if (isPlayerInvulnerable()) return;

  if (shieldHits > 0 && effects.shield > 0) {
    shieldHits -= 1;
    syncShieldStack();
    if (shieldHits <= 0) effects.shield = 0;
    addExplosion(player.x + player.w / 2, player.y + player.h / 2, "#62ffa1");
    playShieldHit();
    showGameMessage(shieldHits > 0 ? `SHIELD ABSORBED BOMB x${shieldHits}` : "SHIELD GONE", 1.1, "#62ffa1");
    return;
  }

  lives -= Math.max(1, damage);
  addScreenShake(14);
  playPlayerDeath();
  addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
  clearWeaponUpgrades();
  clearEnemyFire();
  playerBullets = [];

  if (lives <= 0) {
    gameOver();
  } else {
    resetPlayer();
  }
}

function damageShieldArea(shield, x, y, radius) {
  shield.cells = shield.cells.filter((cell) => {
    const cx = cell.x + cell.w / 2;
    const cy = cell.y + cell.h / 2;
    return Math.hypot(cx - x, cy - y) > radius;
  });
  if (shield.cells.length === 0) shields = shields.filter((item) => item !== shield);
}

function createBossFromDesign(design, mini, x, y) {
  const hp = design.hp + level * design.hpScale;
  const unit = {
    design: BOSS_DESIGNS.indexOf(design),
    designData: design,
    designName: design.name,
    ability: design.ability,
    mini: mini === true,
    bulletCap: design.bulletCap,
    bombMax: design.bombMax,
    bombRadius: design.bombRadius,
    laserFollow: design.laserFollow,
    laserEnabled: design.laser !== false,
    bombsPerLaunch: design.bombsPerLaunch || 1,
    bombShieldDamage: design.bombShieldDamage || 24,
    bombDirect: design.bombDirect === true,
    bombPlayerDamage: design.bombPlayerDamage || 1,
    bombBarrierDamage: design.bombBarrierDamage || design.bombShieldDamage || 24,
    shellHp: design.shellHp || 0,
    shellMaxHp: design.shellMaxHp || 0,
    shellRegen: design.shellRegen || 15,
    shellTimer: 0,
    burrowing: false,
    burrowTele: 0,
    shellJustRestored: false,
    coreOpen: false,
    coreTimer: 0,
    burrowTimer: design.burrowInterval || 9,
    burrowDuration: 0,
    burrowLength: design.burrowDuration || 3.2,
    shellRegenBoost: design.shellRegenBoost || 2.4,
    mineTimer: design.mineInterval || 0.9,
    mineShieldDamage: design.mineShieldDamage || 12,
    burrowShellHits: design.burrowShellHits || 2,
    mineBurst: design.mineBurst || 1,
    mineInterval: design.mineInterval || 0.9,
    x,
    y,
    w: 128,
    h: 64,
    vx: design.speed + level * 8,
    vy: 12 + level,
    moveTimer: 1.4,
    hp,
    maxHp: hp,
    phase: 1,
    timer: 1.1,
    bombTimer: design.bombTimer,
    laser: {
      state: "idle",
      timer: 2.6,
      aimX: W / 2,
      aimY: H - 80,
      endX: W / 2,
      endY: H - 80,
      width: 13,
      height: 16,
      hasHitShield: false,
      hasHitPlayer: false
    }
  };
  bosses.push(unit);
  return unit;
}

function spawnBoss() {
  bossSpawned = true;

  if (isFinalStage(level)) {
    const left = BOSS_DESIGNS.find((d) => d.name === FINAL_BOSS_NAMES[0]) || BOSS_DESIGNS[0];
    const right = BOSS_DESIGNS.find((d) => d.name === FINAL_BOSS_NAMES[1]) || BOSS_DESIGNS[1] || BOSS_DESIGNS[0];
    createBossFromDesign(left, false, W / 2 - 150, 54);
    createBossFromDesign(right, false, W / 2 + 22, 54);
    boss = bosses[0];
    bossCount += 1;
    addExplosion(W / 2, 90, "#ff3366");
    addExplosion(W / 2, 90, "#ffe066");
    addScreenShake(14);
    playBombExplosion();
    showGameMessage("FINAL STAGE: SKULL CRUISER + WINGED VIPER", 1.6, "#ff3366");
    return;
  }

  const design = testBossName
    ? (MINIBOSS_DESIGNS.concat(BOSS_DESIGNS).find((d) => d.name === testBossName) || currentBossDesign(level))
    : currentBossDesign(level);
  const mini = isMinibossWave(level);
  const unit = createBossFromDesign(design, mini, W / 2 - 64, 54);
  boss = unit;
  if (!mini) bossCount += 1;
  addExplosion(W / 2, 90, "#ff3366");
  addExplosion(W / 2, 90, "#ffe066");
  addScreenShake(10);
  playBombExplosion();
  showGameMessage(`${mini ? "MINIBOSS" : "BOSS"} INCOMING: ${design.name}`, 1.35, design.color);
}

function updateBoss(dt) {
  boss = bosses[0] || null;
  if (!bosses.length) return;
  bosses.forEach((unit) => updateBossUnit(unit, dt));
}

function updateBossUnit(boss, dt) {
  const bossSlow = getSlowFactor("boss");
  const moveScale = boss.burrowing ? 0 : 1;
  boss.x += boss.vx * dt * moveScale * bossSlow;
  boss.y += boss.vy * dt * moveScale * bossSlow;

  if (boss.x <= 18) {
    boss.x = 18;
    boss.vx = Math.abs(boss.vx);
  }
  if (boss.x + boss.w >= W - 18) {
    boss.x = W - boss.w - 18;
    boss.vx = -Math.abs(boss.vx);
  }

  boss.moveTimer -= dt * bossSlow;
  if (boss.moveTimer <= 0) {
    boss.moveTimer = 1.1 + Math.random() * 1.2;
    const inLowerHalf = boss.y + boss.h / 2 > H / 2;
    const upChance = inLowerHalf ? 0.72 : 0.44;
    const moveSpeed = 18 + level * 2;
    boss.vy = Math.random() < upChance ? -moveSpeed : moveSpeed;
  }

  boss.y = clamp(boss.y, 58, Math.min(H - boss.h - 24, player.y - boss.h - 150));
  boss.phase = boss.hp <= boss.maxHp * 0.33 ? 3 : boss.hp <= boss.maxHp * 0.66 ? 2 : 1;

  if (boss.ability === "SHELL BURROW") {
    if (boss.burrowing) {
      boss.burrowDuration -= dt * bossSlow;
      boss.coreTimer -= dt * bossSlow;
      if (boss.coreTimer <= 0) {
        boss.coreOpen = !boss.coreOpen;
        boss.coreTimer = boss.coreOpen ? 0.6 : 0.8;
        addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, boss.coreOpen ? "#ffe066" : "#62ffa1");
      }
      boss.mineTimer -= dt * bossSlow;
      if (boss.mineTimer <= 0) {
        fireSpikeMine(boss);
        boss.mineTimer = Math.max(0.55, 0.95 - level * 0.015);
      }
      if (boss.burrowDuration <= 0) {
        boss.burrowing = false;
        boss.coreOpen = false;
        boss.burrowTimer = Math.max(7.2, 9.6 - level * 0.06);
        boss.shellMaxHp = Math.max(boss.shellMaxHp, boss.burrowShellHits || 2);
        boss.shellHp = Math.max(boss.shellHp, boss.burrowShellHits || 2);
        boss.shellTimer = 0;
        addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#62ffa1");
      }
    } else if (boss.burrowTele > 0) {
      boss.burrowTele -= dt * bossSlow;
      screenShake = Math.max(screenShake, 4);
      if (boss.burrowTele <= 0) {
        boss.burrowing = true;
        boss.burrowDuration = boss.burrowLength;
        boss.coreOpen = false;
        boss.coreTimer = 0.8;
        boss.mineTimer = 0.25;
        boss.shellHp = Math.max(boss.shellHp, boss.burrowShellHits || 2);
        addScreenShake(6);
        showGameMessage("SHELL BURROW", 0.85, "#62ffa1");
      }
    } else {
      boss.burrowTimer -= dt * bossSlow;
      if (boss.burrowTimer <= 0 && boss.shellJustRestored) {
        boss.shellJustRestored = false;
        boss.burrowTele = 0.6;
        addScreenShake(4);
        showGameMessage("GROUND RUMBLES", 0.6, "#62ffa1");
      }
    }
  }

  if (boss.ability === "MINE SEED") {
    boss.mineTimer -= dt * bossSlow;
    if (boss.mineTimer <= 0) {
      fireSpikeMine(boss);
      boss.mineTimer = Math.max(1.1, boss.mineInterval || 1.7);
    }
  }

  if (boss.shellMaxHp > 0 && boss.shellHp <= 0 && boss.shellTimer > 0) {
    const regenSpeed = boss.burrowing ? 0 : bossSlow;
    boss.shellTimer = Math.max(0, boss.shellTimer - dt * regenSpeed);
    if (boss.shellTimer <= 0) {
      boss.shellHp = boss.shellMaxHp;
      boss.shellJustRestored = true;
      addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#62ffa1");
      showGameMessage("TURTLE SHELL RESTORED", 1.05, "#62ffa1");
    }
  }

  if (boss.laserEnabled === false) {
    boss.laser.state = "idle";
    boss.laser.timer = Math.max(0.8, boss.laser.timer + dt);
    boss.laser.endX = boss.laser.aimX;
    boss.laser.endY = boss.laser.aimY;
  }

  if (bossStagger > 0) {
    boss.laser.state = "idle";
    boss.laser.timer = Math.max(0.8, boss.laser.timer + dt * 1.4);
    boss.laser.endX = boss.laser.aimX;
    boss.laser.endY = boss.laser.aimY;
    return;
  }

  boss.timer -= dt * bossSlow;
  if (boss.timer <= 0) {
    fireBossBullet(boss);
    boss.timer = Math.max(0.45, 1.25 - level * 0.04 - (boss.phase - 1) * 0.14);
  }

  boss.bombTimer -= dt * bossSlow;
  if (boss.bombTimer <= 0) {
    fireBossBomb(boss);
    boss.bombTimer = Math.max(1.8, 3.8 - level * 0.08 - (boss.phase - 1) * 0.22);
  }

  if (boss.laserEnabled !== false) updateBossLaser(boss, dt);
}

function updateBossLaser(boss, dt) {
  const laser = boss.laser;
  const origin = getBossLaserOrigin(boss);
  const playerCenterX = player.x + player.w / 2;
  const playerCenterY = player.y + player.h / 2;
  const phase = boss.phase || 1;
  const followBase = boss.laserFollow || 1;
  const bossSlow = getSlowFactor("boss");
  let followSpeed = 0.62;

  if (laser.state === "idle") followSpeed = 3.2 + phase * 0.12;
  else if (laser.state === "aim") followSpeed = 0.58 * followBase + phase * 0.08;
  else followSpeed = 0.95 * followBase + phase * 0.12;

  laser.timer -= dt * bossSlow;
  laser.aimX += (playerCenterX - laser.aimX) * dt * followSpeed * bossSlow;
  laser.aimY += (playerCenterY - laser.aimY) * dt * followSpeed * bossSlow;

  if (laser.state === "idle") {
    laser.endX = laser.aimX;
    laser.endY = laser.aimY;
  }

  if (laser.state === "idle" && laser.timer <= 0) {
    laser.state = "aim";
    laser.timer = 1.15;
    laser.hasHitShield = false;
    laser.hasHitPlayer = false;
    laser.aimX = playerCenterX;
    laser.aimY = playerCenterY;
    laser.endX = laser.aimX;
    laser.endY = laser.aimY;
    playHit();
  }

  if (laser.state === "aim") {
    laser.endX = laser.aimX;
    laser.endY = laser.aimY;

    if (laser.timer <= 0) {
      laser.state = "fire";
      laser.timer = 0.38;
      playBombExplosion();
      addScreenShake(3);
    }
  } else if (laser.state === "fire") {
    const hit = firstShieldHitOnSegment(origin.x, origin.y, laser.aimX, laser.aimY);
    laser.endX = hit ? hit.x : laser.aimX;
    laser.endY = hit ? hit.y : laser.aimY;

    if (hit && !laser.hasHitShield) {
      laser.hasHitShield = true;
      damageShieldCell(hit.shield, hit.cell);
      addExplosion(hit.x, hit.y, "#62ffa1");
      playShieldHit();
    }

    enemyBullets = enemyBullets.filter((bullet) => {
      const bx = bullet.x + bullet.w / 2;
      const by = bullet.y + bullet.h / 2;
      return pointToSegmentDistance(bx, by, origin.x, origin.y, laser.endX, laser.endY) > laser.width + 8;
    });

    const playerHitX = Math.abs(playerCenterX - laser.endX) < laser.width;
    const playerHitY = Math.abs(playerCenterY - laser.endY) < laser.height;
    if (!hit && !laser.hasHitPlayer && playerHitX && playerHitY) {
      laser.hasHitPlayer = true;
      hitPlayerWithBossLaser();
    }

    if (laser.timer <= 0) {
      laser.state = "idle";
      laser.timer = Math.max(2.6, 4.6 - level * 0.05 - phase * 0.18);
      laser.hasHitShield = false;
      laser.hasHitPlayer = false;
    }
  }
}

function getBossLaserOrigin(boss) {
  return {
    x: boss.x + boss.w / 2,
    y: boss.y + boss.h - 4
  };
}

function firstShieldHitOnSegment(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.hypot(dx, dy);
  const steps = Math.max(24, Math.ceil(distance / 8));

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = x1 + dx * t;
    const y = y1 + dy * t;

    for (const shield of shields) {
      const cell = shield.cells.find((item) => pointInRect(x, y, item));
      if (cell) return { shield, cell, x, y };
    }
  }

  return null;
}

function pointInRect(x, y, rect) {
  return x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h;
}

function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSquared = dx * dx + dy * dy;

  if (lengthSquared === 0) return Math.hypot(px - x1, py - y1);

  const t = clamp(((px - x1) * dx + (py - y1) * dy) / lengthSquared, 0, 1);
  return Math.hypot(px - (x1 + dx * t), py - (y1 + dy * t));
}

function firstShieldCellHit(rect) {
  for (const shield of shields) {
    const cell = shield.cells.find((item) => overlaps(rect, item));
    if (cell) return { shield, cell };
  }
  return null;
}

function damageShieldCell(shield, cell) {
  cell.hp -= 1;
  shield.cells = shield.cells.filter((item) => item !== cell && item.hp > 0);
  if (shield.cells.length === 0) shields = shields.filter((item) => item !== shield);
}

function hitPlayerWithBossLaser() {
  if (isPlayerInvulnerable()) return;

  if (shieldHits > 0 && effects.shield > 0) {
    shieldHits -= 1;
    syncShieldStack();
    if (shieldHits <= 0) effects.shield = 0;
    addExplosion(player.x + player.w / 2, player.y + player.h / 2, "#62ffa1");
    playShieldHit();
    if (shieldHits <= 0) noteShieldBreak();
    showGameMessage(shieldHits > 0 ? `SHIELD ABSORBED LASER x${shieldHits}` : "SHIELD GONE", 1.05, "#62ffa1");
    return;
  }

  lives -= 1;
  addScreenShake(14);
  playPlayerDeath();
  addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
  clearWeaponUpgrades();
  clearEnemyFire();
  playerBullets = [];

  if (lives <= 0) {
    gameOver();
  } else {
    resetPlayer();
  }
}

function fireBossBullet(boss) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h;
  const phase = boss.phase || 1;
  const design = boss.designData || BOSS_DESIGNS[0];
  const speed = 190 + level * 16 + phase * 18;

  if (design.ability === "RAPID STREAM") {
    const pattern = Math.floor(Math.random() * 4);
    const playerAim = clamp((player.x + player.w / 2 - cx) * 1.05, -130, 130);
    if (pattern === 0) {
      addBossBullet(boss, cx - 2, cy, 0, speed * 1.22);
      addBossBullet(boss, cx - 2, cy, playerAim, speed * 1.05);
    } else if (pattern === 1) {
      addBossBullet(boss, cx - 18, cy, -34, speed * 1.18);
      addBossBullet(boss, cx - 2, cy, 0, speed * 1.22);
      addBossBullet(boss, cx + 14, cy, 34, speed * 1.18);
    } else if (pattern === 2) {
      const sweep = (Math.random() < 0.5 ? -1 : 1) * (50 + Math.random() * 40);
      addBossBullet(boss, cx - 2, cy, sweep, speed * 1.1);
      if (phase >= 2) addBossBullet(boss, cx - 2, cy, -sweep * 0.6, speed);
    } else {
      addBossBullet(boss, cx - 34, cy, playerAim * 0.9, speed * 1.05);
      addBossBullet(boss, cx + 30, cy, playerAim * 1.1, speed * 1.05);
      if (phase >= 3) addBossBullet(boss, cx - 2, cy, 0, speed * 1.22);
    }
    return;
  }

  if (design.ability === "TRIPLE BOMBS") {
    const pattern = Math.floor(Math.random() * 2);
    if (pattern === 0) {
      addBossBullet(boss, cx - 2, cy, 0, speed * 0.92);
      addBossBullet(boss, cx - 42, cy, -24, speed * 0.84);
      addBossBullet(boss, cx + 38, cy, 24, speed * 0.84);
    } else {
      addBossBullet(boss, cx - 24, cy, -14, speed * 0.88);
      addBossBullet(boss, cx + 20, cy, 14, speed * 0.88);
      if (phase >= 3) addBossBullet(boss, cx - 2, cy, 0, speed * 0.92);
    }
    return;
  }

  if (design.ability === "SHELL BURROW") {
    const pattern = Math.floor(Math.random() * 2);
    if (pattern === 0) {
      addBossBullet(boss, cx - 42, cy, -22, speed * 0.82);
      addBossBullet(boss, cx + 38, cy, 22, speed * 0.82);
    } else {
      addBossBullet(boss, cx - 2, cy, 0, speed * 0.86);
      if (phase >= 2) addBossBullet(boss, cx - 42, cy, -18, speed * 0.76);
      if (phase >= 3) addBossBullet(boss, cx + 38, cy, 18, speed * 0.76);
    }
    return;
  }

  const pattern = Math.floor(Math.random() * 3);
  if (pattern === 0) {
    addBossBullet(boss, cx - 2, cy, 0, speed);
    addBossBullet(boss, cx - 2, cy, -55, speed);
    addBossBullet(boss, cx - 2, cy, 55, speed);
  } else if (pattern === 1) {
    addBossBullet(boss, cx - 42, cy, -35, speed);
    addBossBullet(boss, cx + 38, cy, 35, speed);
    if (phase >= 2) {
      addBossBullet(boss, cx - 2, cy, 0, speed * 1.1);
    }
  } else if (phase >= 3) {
    [-45, 0, 45].forEach((vx) => addBossBullet(boss, cx - 2, cy, vx, speed));
  } else {
    addBossBullet(boss, cx - 2, cy, 0, speed * 1.2);
  }
}

function fireBossBomb(boss) {
  const design = boss.designData || BOSS_DESIGNS[0];
  const bombsToFire = boss.bombsPerLaunch || design.bombsPerLaunch || 1;
  const available = Math.max(0, (boss.bombMax || 2) - enemyBombs.length);
  const count = Math.min(bombsToFire, available);
  if (count <= 0) return;

  const originX = boss.x + boss.w / 2;
  const originY = boss.y + boss.h;
  const direct = boss.bombDirect === true;
  const fanSpread = direct ? 116 : design.ability === "SHELL BURROW" ? 22 : 58;

  for (let i = 0; i < count; i += 1) {
    const offset = count === 1 ? 0 : (i - (count - 1) / 2) * (fanSpread / count);
    const shield = shields.length ? shields[Math.floor(Math.random() * shields.length)] : null;
    const targetX = direct && shield
      ? shield.x + shield.w / 2 + offset + (Math.random() * 20 - 10)
      : player.x + player.w / 2 + offset + (Math.random() * 14 - 7);
    const targetY = direct && shield
      ? shield.y + 8 + (Math.random() * 10 - 5)
      : player.y + player.h / 2 + (Math.random() * 18 - 9);
    const dx = targetX - originX;
    const dy = targetY - originY;
    const vx = clamp(dx * 0.85, -210, 210);
    const vy = Math.min(135, -40 + dy * 0.45);

    enemyBombs.push({
      x: originX - 7,
      y: originY,
      w: 14,
      h: 14,
      vx,
      vy,
      ttl: direct ? 5.2 : 4.5,
      hp: 2,
      maxHp: 2,
      radius: direct ? 18 : boss.bombRadius || design.bombRadius || 70,
      direct,
      playerDamage: direct ? Math.max(1, boss.bombPlayerDamage || 1) : 1,
      shieldDamage: direct
        ? boss.bombBarrierDamage || design.bombBarrierDamage || 24
        : boss.bombShieldDamage || design.bombShieldDamage || 24,
      color: design.accent,
      fromBoss: true,
      trail: []
    });
  }

  playBombLaunch();
}

function addBossBullet(boss, x, y, vx, speed) {
  if (enemyBullets.length >= (boss?.bulletCap || 6)) return;
  const design = boss?.designData || BOSS_DESIGNS[0];
  enemyBullets.push({
    x,
    y,
    w: 5,
    h: 15,
    speed,
    vx,
    hp: 2,
    maxHp: 2,
    color: design.accent,
    fromBoss: true,
    shooterId: -1
  });
}

function bossHitReward(boss) {
  if (!boss) return;
  const mini = boss.mini === true;
  addScore((mini ? 4 : 8) + level);

  const chance = Math.min(0.035, 0.01 + level * 0.001 + dropRateBonus * 0.4);
  if (Math.random() > chance) return;

  const type = pickLootType(mini ? 2 : 3);
  spawnPowerupAt(boss.x + boss.w / 2, boss.y + boss.h / 2, type, false, 5.5);
}

function damageBoss(boss, amount) {
  if (!boss) return;
  comboAddHit();
  const design = boss.designData || BOSS_DESIGNS[0];
  if (boss.burrowing) {
    if (!boss.coreOpen) {
      bossHitReward(boss);
      addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#62ffa1");
      playShieldHit();
      return;
    }
    amount = amount * 2;
  }
  if (boss.shellHp > 0) {
    boss.shellHp = Math.max(0, boss.shellHp - 1);
    bossHitReward(boss);
    addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#62ffa1");
    addScreenShake(4);
    playShieldHit();
    if (boss.shellHp <= 0) boss.shellTimer = boss.shellRegen || 15;
    return;
  }
  if (bossStagger > 0) {
    amount = Math.ceil(amount * 1.8);
  }
  const oldPhase = boss.phase || 1;
  boss.hp -= amount;
  if (boss.hp > 0) bossHitReward(boss);
  if (bossStagger <= 0) {
    addStaggerDamage(boss, amount);
  }
  boss.phase = boss.hp <= boss.maxHp * 0.33 ? 3 : boss.hp <= boss.maxHp * 0.66 ? 2 : 1;
  if (boss.phase > oldPhase) {
    addScreenShake(6);
    playBombExplosion();
    showGameMessage(`BOSS PHASE ${boss.phase}`, 1.15, design.color);
  } else {
    addScreenShake(Math.min(1, amount));
  }
  addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#ff3366");

  if (boss.hp <= 0) {
    comboAddKill();
    addScore((boss.mini ? 160 : 300) + level * (boss.mini ? 25 : 50), boss.x + boss.w / 2, boss.y + boss.h / 2);
    addScreenShake(boss.mini ? 10 : 14);
    addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#ffe066");
    addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, COLORS.explosion);
    playBombExplosion();
    const bossX = boss.x + boss.w / 2;
    const bossY = boss.y + boss.h / 2;
    const mini = boss.mini === true;
    bosses = bosses.filter((item) => item !== boss);
    boss = bosses[0] || null;
    resetStagger();
    clearEnemyFire();
    spawnPowerupAt(bossX, bossY, POWERUP_TYPES.find((powerup) => powerup.id === "bomb") || POWERUP_TYPES[0], true, Infinity);
    showGameMessage(mini ? "MINIBOSS DOWN!" : "BOSS DOWN!", 1.35, design.color);
    if (bosses.length > 0) return;
    if (mini) {
      if (!invaders.some((invader) => invader.alive)) checkWaveClear();
    } else if (design.name === "TURTLE BULWARK") {
      finishBossFight();
      return;
    } else if (isFinalStage(level)) {
      winGame();
      return;
    } else {
      finishBossFight();
    }
  }
}

function resetStagger() {
  staggerDamage = 0;
  staggerWindow = 0;
  staggerCooldown = 0;
  bossStagger = 0;
}

function clearWeaponUpgrades() {
  effects.rapid = 0;
  effects.double = 0;
  effects.laser = 0;
  effects.slow = 0;
  laserBeams = [];
}

function updateStagger(dt) {
  if (bossStagger > 0) {
    bossStagger = Math.max(0, bossStagger - dt);
    if (bossStagger <= 0) staggerDamage = 0;
  }

  if (staggerWindow > 0) {
    staggerWindow = Math.max(0, staggerWindow - dt);
    if (staggerWindow <= 0) staggerDamage = 0;
  }

  if (staggerCooldown > 0) {
    staggerCooldown = Math.max(0, staggerCooldown - dt);
  }
}

function addStaggerDamage(boss, amount) {
  if (!boss || bossStagger > 0 || staggerCooldown > 0) return;

  staggerDamage += amount;
  staggerWindow = STAGGER_WINDOW;

  const threshold = Math.max(12, 10 + level * 3);
  if (staggerDamage >= threshold) {
    triggerBossStagger();
  }
}

function triggerBossStagger(boss) {
  if (!boss) return;

  bossStagger = STAGGER_DURATION;
  staggerCooldown = STAGGER_COOLDOWN + Math.min(8, level);
  staggerDamage = 0;
  staggerWindow = 0;

  bosses.forEach((unit) => {
    unit.timer = Math.max(1.0, unit.timer + 1.2);
    unit.bombTimer = Math.max(1.6, unit.bombTimer + 1.6);
    unit.laser.state = "idle";
    unit.laser.timer = Math.max(3.2, unit.laser.timer + 2.4);
    unit.laser.hasHitShield = false;
    unit.laser.hasHitPlayer = false;
  });

  addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#ffe066");
  addScreenShake(8);
  playBombExplosion();
  spawnPowerupAt(boss.x + boss.w / 2, boss.y + boss.h + 8, POWERUP_TYPES.find((powerup) => powerup.id === "bomb") || POWERUP_TYPES[0], true, Infinity);
  showGameMessage(`BOSS STAGGERED! ${Math.ceil(bossStagger)}s`, 1.15, "#ffe066");
}

function drawBossAccessoryRing(x, y, radius, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawBossDesignShape(boss, design, tier, meshId) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h / 2;
  ctx.save();

  const shapeName = design.name === "WINGED VIPER" ? "viper"
    : design.name === "TURTLE BULWARK" ? "turtle"
    : design.name === "SCRAPLING" ? "scrap"
    : design.name === "SPINE SENTRY" ? "sentry" : "skull";
  const fitW = boss.h * (SIL[shapeName].bb.w / SIL[shapeName].bb.h);
  if (window.Iron3D) {
    push3D({ id: meshId, key: shapeName, x: boss.x - 13, y: boss.y - 13,
      w: boss.w + 26, h: boss.h + 26, color: design.color, phase: 1.1, tilt: 0.2 });
  } else {
  if (design.name === "SKULL CRUISER") {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = "#f2f4f8";
    ctx.shadowColor = "#f2f4f8";
    ctx.shadowBlur = 6;
    [Math.PI / 4, -Math.PI / 4].forEach((ang) => {
      ctx.save();
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.rect(-46, -6, 92, 12);
      ctx.arc(-46, -8, 9, 0, Math.PI * 2);
      ctx.arc(-46, 8, 9, 0, Math.PI * 2);
      ctx.arc(46, -8, 9, 0, Math.PI * 2);
      ctx.arc(46, 8, 9, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });
    ctx.restore();
  }
  neon(shapeName, cx, cy, Math.min(boss.w + 26, fitW * 1.2), design.color, 10 + tier * 7);
  if (design.name !== "SPINE SENTRY") {
    const eyeR = Math.max(6, boss.w * 0.07);
    const eyeY = cy - boss.h * 0.1;
    ctx.beginPath();
    ctx.arc(cx - boss.w * 0.16, eyeY, eyeR, 0, Math.PI * 2);
    ctx.arc(cx + boss.w * 0.16, eyeY, eyeR, 0, Math.PI * 2);
    ctx.fillStyle = "#0d0d14";
    ctx.fill();
  }
  if (design.name === "SKULL CRUISER") {
    const open = boss.laser && boss.laser.state !== "idle";
    const jawY = cy + boss.h * 0.19 + (open ? 6 : 2);
    ctx.fillStyle = "#0d0d14";
    ctx.fillRect(cx - 10, cy + boss.h * 0.16, 20, open ? 10 : 5);
    ctx.save();
    ctx.fillStyle = design.color;
    ctx.beginPath();
    ctx.moveTo(cx - 11, jawY);
    ctx.lineTo(cx + 11, jawY);
    ctx.lineTo(cx + 8, jawY + 9);
    ctx.lineTo(cx - 8, jawY + 9);
    ctx.closePath();
    ctx.shadowColor = design.color;
    ctx.shadowBlur = 5;
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "#f2f4f8";
    for (let i = 0; i < 4; i += 1) {
      const tx = cx - 9 + i * 6;
      ctx.fillRect(tx, cy + boss.h * 0.16 + 1, 3, 3);
      ctx.fillRect(tx + 3, jawY - 3, 3, 3);
    }
    if (open) {
      ctx.save();
      ctx.fillStyle = "#ff3366";
      ctx.shadowColor = "#ff3366";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(cx, cy + boss.h * 0.19, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.fillStyle = "#0d0d14";
    ctx.beginPath();
    ctx.moveTo(cx - 3.5, cy + boss.h * 0.04);
    ctx.lineTo(cx + 3.5, cy + boss.h * 0.04);
    ctx.lineTo(cx, cy + boss.h * 0.13);
    ctx.closePath();
    ctx.fill();
  }


  }
  if (tier >= 1) {
    ctx.fillStyle = design.accent;
    [-26, -14, 14, 26].forEach((offset) => {
      ctx.beginPath();
      ctx.moveTo(cx + offset, boss.y - 4);
      ctx.lineTo(cx + offset + 4, boss.y + 10);
      ctx.lineTo(cx + offset - 4, boss.y + 10);
      ctx.closePath();
      ctx.fill();
    });
  }
  if (tier >= 2) {
    ctx.strokeStyle = design.accent;
    ctx.lineWidth = 3;
    ctx.strokeRect(boss.x - 7, boss.y + 14, boss.w + 14, 40);
    ctx.lineWidth = 1;
    drawBossAccessoryRing(cx, cy, 52, "rgba(255,255,255,0.22)");
  }
  if (tier >= 3) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(cx - 36, boss.y - 20);
    ctx.lineTo(cx - 22, boss.y - 6);
    ctx.lineTo(cx - 8, boss.y - 20);
    ctx.lineTo(cx + 8, boss.y - 6);
    ctx.lineTo(cx + 22, boss.y - 20);
    ctx.lineTo(cx + 36, boss.y - 6);
    ctx.lineTo(cx + 26, boss.y + 2);
    ctx.lineTo(cx - 26, boss.y + 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = design.accent;
    ctx.fillRect(boss.x + 4, boss.y + 34, 12, 28);
    ctx.fillRect(boss.x + boss.w - 16, boss.y + 34, 12, 28);
  }

  ctx.restore();
}

function drawBoss() {
  if (!bosses.length) return;
  bosses.forEach((unit, index) => drawBossUnit(unit, index));
}

function drawBossUnit(boss, index) {
  ctx.save();
  const design = boss.designData || BOSS_DESIGNS[0];
  const tier = boss.mini ? 0 : clamp(Math.floor((level - 3) / 3) + 1, 0, 3);
  drawBossDesignShape(boss, design, tier, "boss" + index);

  if (boss.shellMaxHp > 0) {
    const shellCx = boss.x + boss.w / 2;
    const shellCy = boss.y + boss.h / 2;
    const shellRadius = boss.w / 2 + 10;
    const regen = Math.max(1, boss.shellRegen || 15);
    const progress = boss.shellHp > 0 ? 1 : clamp(1 - boss.shellTimer / regen, 0, 1);
    ctx.save();

    ctx.strokeStyle = boss.shellHp > 0 ? "rgba(130, 255, 190, 0.82)" : "rgba(130, 255, 190, 0.22)";
    ctx.lineWidth = boss.shellHp > 0 ? 4 : 3;
    ctx.setLineDash(boss.shellHp > 0 ? [] : [7, 7]);
    ctx.beginPath();
    ctx.arc(shellCx, shellCy, shellRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    if (boss.shellHp <= 0 && progress > 0) {
      ctx.strokeStyle = "rgba(130, 255, 190, 0.72)";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(shellCx, shellCy, shellRadius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
      ctx.stroke();
    }

    ctx.fillStyle = boss.shellHp > 0 ? "#62ffa1" : "#9aa6ad";
    ctx.font = "12px 'Courier New', monospace";
    const shellLabel = boss.shellHp > 0 ? `SHELL ${boss.shellHp}/${boss.shellMaxHp || 1}` : `SHELL ${Math.ceil(boss.shellTimer)}s`;
    ctx.fillText(shellLabel, shellCx - 34, boss.y - 12);

    ctx.lineWidth = 1;
    ctx.restore();
  }

  drawBossBar(boss, index);

  if (bossStagger > 0) {
    ctx.strokeStyle = "rgba(255, 224, 102, 0.62)";
    ctx.lineWidth = 3;
    ctx.strokeRect(boss.x - 7, boss.y - 7, boss.w + 14, boss.h + 14);
    ctx.fillStyle = "#ffe066";
    ctx.fillText("STAGGER", boss.x + boss.w / 2 - 28, boss.y - 12);
    ctx.lineWidth = 1;
  }

  if (boss.burrowing) {
    const burrowCx = boss.x + boss.w / 2;
    const burrowCy = boss.y + boss.h / 2;
    const burrowProgress = clamp(boss.burrowDuration / Math.max(0.1, boss.burrowLength), 0, 1);
    ctx.save();
    ctx.fillStyle = "rgba(47, 201, 111, 0.13)";
    ctx.beginPath();
    ctx.ellipse(burrowCx, burrowCy + 6, boss.w / 2 + 26, boss.h / 2 + 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(130, 255, 190, 0.58)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(burrowCx, burrowCy, boss.w / 2 + 22, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * burrowProgress);
    ctx.stroke();
    ctx.fillStyle = "#62ffa1";
    ctx.font = "12px 'Courier New', monospace";
    ctx.fillText(`BURROW ${Math.ceil(boss.burrowDuration)}s`, burrowCx - 32, boss.y - 28);
    if (boss.coreOpen) {
      const corePulse = 10 + Math.sin(Date.now() / 90) * 3;
      ctx.fillStyle = "#ffe066";
      ctx.beginPath();
      ctx.arc(burrowCx, burrowCy, corePulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(burrowCx, burrowCy, corePulse * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffe066";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(burrowCx, burrowCy, 30 + corePulse * 0.6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
    ctx.lineWidth = 1;
    ctx.restore();
  }

  if (boss.burrowTele > 0) {
    ctx.strokeStyle = "rgba(130, 255, 190, 0.55)";
    ctx.lineWidth = 3;
    ctx.strokeRect(boss.x - 10, boss.y + boss.h - 6, boss.w + 20, 12);
    ctx.fillStyle = "#62ffa1";
    ctx.font = "12px 'Courier New', monospace";
    ctx.fillText("RUMBLE", boss.x + boss.w / 2 - 24, boss.y + boss.h + 26);
    ctx.lineWidth = 1;
  }

  const laser = boss.laser;
  const origin = getBossLaserOrigin(boss);

  if (boss.laserEnabled !== false) {
    if (laser.state === "idle") {
      ctx.strokeStyle = "rgba(255, 51, 102, 0.22)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(laser.endX, laser.endY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    if (laser.state === "aim") {
      ctx.strokeStyle = "rgba(255, 51, 102, 0.62)";
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 9]);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(laser.endX, laser.endY);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle = "#ff3366";
      ctx.strokeRect(laser.endX - 18, laser.endY - 18, 36, 36);
      ctx.lineWidth = 1;
    }

    if (laser.state === "fire") {
      ctx.lineCap = "butt";
      ctx.strokeStyle = "rgba(255, 51, 102, 0.24)";
      ctx.lineWidth = laser.width * 2.6;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(laser.endX, laser.endY);
      ctx.stroke();
      ctx.strokeStyle = "#ff3366";
      ctx.lineWidth = laser.width;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(laser.endX, laser.endY);
      ctx.stroke();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(laser.endX, laser.endY);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }
  ctx.restore();
}

function drawBossBar(boss, index) {
  const phase = boss.phase || 1;
  const ratio = clamp(boss.hp / boss.maxHp, 0, 1);
  const width = bosses.length > 1 ? 210 : 260;
  const x = bosses.length > 1
    ? (index === 0 ? W / 2 - width - 18 : W / 2 + 18)
    : W / 2 - width / 2;
  ctx.fillStyle = "#222";
  ctx.fillRect(x, 58, width, 8);
  ctx.fillStyle = phase === 3 ? "#ff2222" : phase === 2 ? "#ff8844" : "#ff3366";
  ctx.fillRect(x, 58, width * ratio, 8);
  ctx.fillStyle = "#ffffff";
  ctx.font = "13px 'Courier New', monospace";
  ctx.fillText(`${boss.mini ? "MINIBOSS" : "BOSS"} P${phase}`, x + 4, 54);
}

