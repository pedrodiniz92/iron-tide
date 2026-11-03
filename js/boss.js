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

    if (bomb.y >= H - 42) {
      explodeEnemyBomb(bomb);
      return false;
    }
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

  if (clearEnemyFirePending) {
    clearEnemyFirePending = false;
    enemyBullets = [];
    enemyBombs = [];
    spikeMines = [];
  }
}

function updateSpikeMines(dt) {
  spikeMines = spikeMines.filter((mine) => {
    mine.arm = Math.max(0, (mine.arm || 0) - dt);
    if (mine.arm <= 0) {
      const dx = (player.x + player.w / 2) - (mine.x + mine.w / 2);
      const target = clamp(dx * 0.9, -90, 90);
      const step = 140 * dt;
      mine.vx = (mine.vx || 0) + clamp(target - (mine.vx || 0), -step, step);
      mine.fuse = (mine.fuse === undefined ? 2.2 : mine.fuse) - dt;
    }
    mine.x += (mine.vx || 0) * dt;
    mine.y += mine.vy * dt * (mine.arm > 0 ? 0.25 : 1);
    mine.ttl -= dt;

    if (mine.y >= H - 42 || mine.ttl <= 0 || (mine.fuse !== undefined && mine.fuse <= 0)) {
      explodeSpikeMine(mine);
      return false;
    }

    if (mine.pulse && mine.arm <= 0) {
      mine.pulseTimer = (mine.pulseTimer === undefined ? 0.45 : mine.pulseTimer) - dt;
      if (mine.pulseTimer <= 0) {
        mine.pulseTimer = 1.1;
        const mx = mine.x + mine.w / 2;
        const my = mine.y + mine.h / 2;
        if (Math.hypot(player.x + player.w / 2 - mx, player.y + player.h / 2 - my) < (mine.pulseRadius || 116)) {
          fireMineShot(mine);
        }
      }
    }

    if (mine.arm > 0) return true;

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

  if (clearEnemyFirePending) {
    clearEnemyFirePending = false;
    enemyBullets = [];
    enemyBombs = [];
    spikeMines = [];
  }
}

function explodeSpikeMine(mine) {
  const mx = mine.x + mine.w / 2;
  const my = mine.y + mine.h / 2;
  const r = mine.blastRadius || 64;
  addExplosion(mx, my, "#ff6b6b");
  addShockwave(mx, my, r);
  addScreenShake(5);
  playBombExplosion();
  const pdx = player.x + player.w / 2 - mx;
  const pdy = player.y + player.h / 2 - my;
  if (pdx * pdx + pdy * pdy <= r * r) hitPlayerWithSpikeMine();
  shields.forEach((shield) => {
    const sdx = shield.x + shield.w / 2 - mx;
    const sdy = shield.y + shield.h / 2 - my;
    if (sdx * sdx + sdy * sdy <= (r + 40) * (r + 40)) {
      damageShieldArea(shield, mx, my, r);
    }
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
    if (shieldHits < maxShieldHits) noteShieldBreak();
    showGameMessage(shieldHits > 0 ? t("SHIELD ABSORBED SPIKE x{n}", { n: shieldHits }) : t("SHIELD GONE"), 1.1, "#62ffa1");
    return;
  }

  if (state !== "playing") return;
  lives -= 1;
  addScreenShake(12);
  playPlayerDeath();
  addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
  clearWeaponUpgrades();
  clearEnemyFire();
  playerBullets = [];
  clearPlayerBulletsPending = true;

  if (lives <= 0) {
    gameOver();
  } else {
    resetPlayer();
  }
}

function fireSpikeMine(boss, arm = 1.2, offset = 0) {
  spikeMines.push({
    x: boss.x + boss.w / 2 - 8 + offset,
    y: boss.y + boss.h,
    w: 16,
    h: 16,
    vx: 0,
    vy: 112,
    ttl: 6.2,
    fuse: 3.0,
    blastRadius: 64,
    hp: 1,
    maxHp: 1,
    arm: arm,
    pulse: boss.phase >= 2,
    pulseTimer: 0.45,
    pulseRadius: boss.minePulseRadius || 116,
    shieldDamage: boss.mineShieldDamage || 12
  });
}

function fireMineShot(mine) {
  const sx = mine.x + mine.w / 2;
  const sy = mine.y + mine.h / 2;
  const speed = 260;
  enemyBullets.push({
    x: sx - 2,
    y: sy - 2,
    w: 4,
    h: 12,
    speed,
    vx: aimVx({ type: { name: "stinger" } }, sx, sy, speed, 150),
    hp: 1,
    maxHp: 1,
    color: "#62ffa1",
    fromBoss: true,
    shooterId: -1
  });
  addExplosion(sx, sy, "#62ffa1");
  playHit();
}

function fireScrapDrone(boss) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h;
  const dir = Math.random() < 0.5 ? -1 : 1;
  enemyBullets.push({
    x: cx - 8,
    y: cy,
    w: 16,
    h: 12,
    speed: 120 + level * 8,
    vx: dir * (70 + Math.random() * 70),
    hp: 1,
    maxHp: 1,
    color: boss.designData.accent,
    fromBoss: true,
    shooterId: -1,
    drone: true,
    wobble: Math.random() * Math.PI * 2,
    wobbleAmp: 70 + Math.random() * 50
  });
}

function fireScrapBurst(boss) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h;
  const speed = 210 + level * 12;
  for (let i = 0; i < 3; i += 1) {
    addBossBullet(boss, cx - 2 + (i - 1) * 18, cy, bossAimVx(boss, cx, cy, speed, 90) + (i - 1) * 18, speed);
  }
  boss.scrapShield = boss.scrapShieldDuration;
  addExplosion(cx, cy, boss.designData.accent);
}

function shedScrapFragment(boss) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h / 2;
  enemyBullets.push({
    x: cx - 6,
    y: cy - 6,
    w: 12,
    h: 12,
    speed: 150 + level * 8,
    vx: Math.random() * 140 - 70,
    hp: 1,
    maxHp: 1,
    color: boss.designData.accent,
    fromBoss: true,
    shooterId: -1,
    fragment: true
  });
}

let minionSeq = 0;

function spawnMinion(type, x, y) {
  if (type === "idol" && minions.some((m) => m.type === "idol")) return null;
  const hp = type === "zealot" ? 4 : 3;
  const minion = {
    id: ++minionSeq,
    type,
    x: clamp(x, 16, W - 50),
    y: clamp(y, 60, H - 140),
    bx: clamp(x, 16, W - 50),
    by: clamp(y, 60, H - 140),
    w: 34,
    h: 34,
    hp,
    maxHp: hp,
    vx: 0,
    vy: 0,
    t: 0,
    fire: 1 + Math.random() * 1.5,
    spread: type === "zealot" ? 0.22 : 0,
    auraR: type === "idol" ? 150 : 0,
    phase: Math.random() * Math.PI * 2
  };
  minions.push(minion);
  return minion;
}

function killMinion(minion) {
  const cx = minion.x + minion.w / 2;
  const cy = minion.y + minion.h / 2;
  comboAddKill();
  addScore(minion.type === "idol" ? 60 : 40, cx, cy);
  addExplosion(cx, cy, minion.type === "idol" ? "#ffd76a" : "#8b5cf6");
  addExplosion(cx, cy, COLORS.explosion);
  playHit();
  if (minion.type === "zealot") {
    const a0 = Math.PI / 2;
    for (let i = 0; i < 3; i += 1) {
      const a = a0 + (i - 1) * 0.22;
      const speed = 130;
      enemyBullets.push({
        x: cx - 2,
        y: cy - 2,
        w: 5,
        h: 12,
        speed: Math.max(30, Math.sin(a) * speed),
        vx: Math.cos(a) * speed,
        hp: 1,
        maxHp: 1,
        color: "#c026d3",
        fromBoss: true,
        shooterId: -1
      });
    }
  }
  spawnPowerupAt(cx, cy, pickLootType(1), false, 8, null, true);
  minions = minions.filter((m) => m !== minion);
}

function fireZealotShot(minion) {
  if (enemyBullets.length >= 14) return;
  const sx = minion.x + minion.w / 2;
  const sy = minion.y + minion.h / 2;
  const a = Math.atan2(player.y + player.h / 2 - sy, player.x + player.w / 2 - sx);
  const speed = 110;
  enemyBullets.push({
    x: sx - 2,
    y: sy - 2,
    w: 5,
    h: 12,
    speed: Math.max(30, Math.sin(a) * speed),
    vx: Math.cos(a) * speed,
    hp: 1,
    maxHp: 1,
    color: "#c026d3",
    fromBoss: true,
    shooterId: -1
  });
}

function updateMinions(dt) {
  const unit = bosses[0] || null;
  minions.forEach((minion) => {
    minion.t += dt;
    if (minion.type === "zealot") {
      if (unit && minion.t < 1.6) {
        const away = minion.x + minion.w / 2 >= unit.x + unit.w / 2 ? 1 : -1;
        minion.x += away * 150 * dt;
        minion.y += (unit.y + 50 - minion.y) * 2.2 * dt;
      } else {
        minion.x += Math.cos(minion.t * 1.1 + minion.phase) * 95 * dt;
        minion.y += Math.sin(minion.t * 1.9 + minion.phase) * 65 * dt;
      }
      minion.fire -= dt;
      if (minion.fire <= 0) {
        minion.fire = 1.5 + Math.random() * 1.0;
        fireZealotShot(minion);
      }
    } else if (minion.type === "idol") {
      minion.x = clamp(minion.bx + Math.sin(minion.t * 0.6 + minion.phase) * 150, 16, W - 50);
      minion.y = clamp(minion.by + Math.sin(minion.t * 0.42 + minion.phase * 1.7) * 85, 60, H - 140);
      const cx = minion.x + minion.w / 2;
      const cy = minion.y + minion.h / 2;
      if (unit && Math.hypot(unit.x + unit.w / 2 - cx, unit.y + unit.h / 2 - cy) < minion.auraR + 60) {
        unit.hp = Math.min(unit.maxHp, unit.hp + 0.5 * dt);
      }
      minions.forEach((other) => {
        if (other === minion) return;
        if (Math.hypot(other.x + other.w / 2 - cx, other.y + other.h / 2 - cy) < minion.auraR) {
          other.hp = Math.min(other.maxHp, other.hp + 0.5 * dt);
        }
      });
    }
    minion.x = clamp(minion.x, 16, W - minion.w - 16);
    minion.y = clamp(minion.y, 60, H - 140);
  });
  minions.forEach((a, i) => {
    if (unit && a.type === "idol" && unit.y + unit.h > a.y - 4) unit.y = a.y - unit.h - 4;
    const acx = a.x + a.w / 2;
    const acy = a.y + a.h / 2;
    minions.slice(i + 1).forEach((b) => {
      const dx = b.x + b.w / 2 - acx;
      const dy = b.y + b.h / 2 - acy;
      const d = Math.hypot(dx, dy) || 1;
      if (d < 46) {
        const p = (46 - d) / 2;
        const nx = dx / d;
        const ny = dy / d;
        if (a.type === "idol") { a.bx -= nx * p; a.by -= ny * p; } else { a.x -= nx * p; a.y -= ny * p; }
        if (b.type === "idol") { b.bx += nx * p; b.by += ny * p; } else { b.x += nx * p; b.y += ny * p; }
      }
    });
    if (unit) {
      const dx = acx - (unit.x + unit.w / 2);
      const dy = acy - (unit.y + unit.h / 2);
      const d = Math.hypot(dx, dy) || 1;
      const minD = (unit.w + a.w) / 2 + 6;
      if (d < minD) {
        const p = minD - d;
        if (a.type === "idol") { a.bx += (dx / d) * p; a.by += (dy / d) * p; }
        else { a.x += (dx / d) * p; a.y += (dy / d) * p; }
      }
    }
    a.x = clamp(a.x, 16, W - a.w - 16);
    a.y = clamp(a.y, 60, H - 140);
    a.bx = clamp(a.bx, 16, W - a.w - 16);
    a.by = clamp(a.by, 60, H - 140);
  });
}

function castCalling(boss) {
  if (boss.callCount % 4 === 0 && !minions.some((m) => m.type === "idol")) {
    spawnMinion("idol", 120 + Math.random() * (W - 240), 150 + Math.random() * (H - 410));
  } else if (boss.callCount % 4 === 1) {
    const cx = boss.x + boss.w / 2;
    let zealots = minions.filter((m) => m.type === "zealot").length;
    let spawned = 0;
    if (zealots + spawned < 3) {
      spawnMinion("zealot", cx - 46, boss.y + boss.h / 2);
      spawned += 1;
    }
    if (zealots + spawned < 3) {
      spawnMinion("zealot", cx + 12, boss.y + boss.h / 2);
      spawned += 1;
    }
    if (spawned > 0) {
      addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#c9a7ff");
    }
  }
}

function castBell(boss) {
  bellEffect = { t: 0, phase: 0 };
  addScreenShake(4);
}

function updateBell(dt) {
  if (!bellEffect) return;
  bellEffect.t += dt;
    if (bellEffect.phase === 0) {
    enemyBullets.forEach((bullet) => {
      bullet.frozen = true;
    });
    if (bellEffect.t > 1.6) {
      bellEffect.phase = 1;
      const volley = enemyBullets.slice(0, 8);
      enemyBullets.forEach((bullet) => {
        bullet.frozen = false;
        if (volley.indexOf(bullet) < 0) return;
        const bx = bullet.x + bullet.w / 2;
        const by = bullet.y + bullet.h / 2;
        const a = Math.atan2(player.x + player.w / 2 - bx, player.y + player.h / 2 - by);
        bullet.speed = Math.cos(a) * 340;
        bullet.vx = Math.sin(a) * 340;
        bullet.seek = 1.2;
        bullet.seekA0 = Math.atan2(bullet.speed, bullet.vx);
        bullet.homingT = 0;
        bullet.ttl = 4;
        bullet.hp = 1;
        bullet.maxHp = 1;
      });
    }
  } else if (bellEffect.t > 4.5) {
    bellEffect = null;
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
    if (shieldHits < maxShieldHits) noteShieldBreak();
    showGameMessage(shieldHits > 0 ? t("SHIELD ABSORBED BOMB x{n}", { n: shieldHits }) : t("SHIELD GONE"), 1.1, "#62ffa1");
    return;
  }

  lives -= Math.max(1, damage);
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
    resetPlayer();
  }
}

function damageShieldArea(shield, x, y, radius) {
  shield.cells = shield.cells.filter((cell) => {
    const cx = cell.x + cell.w / 2;
    const cy = cell.y + cell.h / 2;
    if (Math.hypot(cx - x, cy - y) <= radius) cell.hp -= 1;
    return cell.hp > 0;
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
    diveState: "idle",
    diveTimer: design.diveInterval || 4.6,
    diveTele: 0,
    diveTargetX: W / 2,
    diveDropTimer: 0,
    diveCount: 0,
    shellHp: design.shellHp || 0,
    shellMaxHp: design.shellMaxHp || 0,
    shellRegen: design.shellRegen || 15,
    shellTimer: 0,
    carapaceState: "idle",
    carapaceTimer: design.carapaceInterval || 5.4,
    carapaceT: 0,
    carapaceVx0: 0,
    carapaceDropped: 0,
    carapaceDropT: 0,
    carapaceMines: 0,
    carapaceInvuln: 0,
    mineTimer: design.mineInterval || 0.9,
    mineShieldDamage: design.mineShieldDamage || 12,
    mineInterval: design.mineInterval || 0.9,
    droneTimer: design.droneInterval || 1.25,
    droneInterval: design.droneInterval || 1.25,
    burstTimer: design.burstInterval || 2.4,
    burstInterval: design.burstInterval || 2.4,
    scrapShieldDuration: design.scrapShieldDuration || 1.1,
    scrapShield: 0,
    rollTimer: design.rollInterval || 5.4,
    rollInterval: design.rollInterval || 5.4,
    rollDuration: 0,
    rollLength: design.rollDuration || 1.6,
    rolling: false,
    mineArmDelay: design.mineArmDelay || 0.75,
    minePulseRadius: design.minePulseRadius || 116,
    callTimer: design.callingInterval ? 4 : 999,
    callCount: 0,
    callWindup: 0,
    callingInterval: design.callingInterval || 7,
    bellTimer: design.bellInterval || 999,
    bellInterval: design.bellInterval || 13,
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
    carapaceCast: 0,
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
    const design = BOSS_DESIGNS.find((d) => d.name === FINAL_BOSS_NAMES[0]) || BOSS_DESIGNS[0];
    const unit = createBossFromDesign(design, false, W / 2 - 17, 54);
    boss = unit;
    addExplosion(W / 2, 90, "#8b5cf6");
    addExplosion(W / 2, 90, "#c9a7ff");
    addScreenShake(14);
    playBombExplosion();
    showGameMessage(t("FINAL STAGE: THE ABYSSAL SQUID"), 1.6, "#c9a7ff");
    return;
  }

  const design = testBossName
    ? (MINIBOSS_DESIGNS.concat(BOSS_DESIGNS).find((d) => d.name === testBossName) || currentBossDesign(level))
    : currentBossDesign(level);
  const mini = isMinibossWave(level);
  const unit = createBossFromDesign(design, mini, W / 2 - 64, 54);
  boss = unit;
  addExplosion(W / 2, 90, "#ff3366");
  addExplosion(W / 2, 90, "#ffe066");
  addScreenShake(10);
  playBombExplosion();
  showGameMessage(t("{kind} INCOMING: {name}", { kind: t(mini ? "MINIBOSS" : "BOSS"), name: t(design.name) }), 1.35, design.color);
}

function updateBoss(dt) {
  boss = bosses[0] || null;
  if (bosses.length) bosses.forEach((unit) => updateBossUnit(unit, dt));
  updateMinions(dt);
}

function updateBossUnit(boss, dt) {
  const staggered = bossStagger > 0;
  if (staggered) {
    boss.laser.state = "idle";
    boss.laser.timer = Math.max(0.8, boss.laser.timer + dt * 1.4);
    boss.laser.endX = boss.laser.aimX;
    boss.laser.endY = boss.laser.aimY;
  }

  const bossSlow = (staggered ? 0.22 : 1) * getSlowFactor("boss");
  const windupSlow = boss.callWindup > 0 ? 0.45 : 1;
  boss.x += boss.vx * dt * bossSlow * windupSlow;
  boss.y += boss.vy * dt * bossSlow * windupSlow;

  if (boss.x <= 18) {
    boss.x = 18;
    boss.vx = Math.abs(boss.vx);
  }
  if (boss.x + boss.w >= W - 18) {
    boss.x = W - boss.w - 18;
    boss.vx = -Math.abs(boss.vx);
  }

  const diving = boss.diveState === "dive" || boss.diveState === "climb";
  boss.moveTimer -= dt * bossSlow;
  if (boss.moveTimer <= 0 && !diving) {
    boss.moveTimer = 1.1 + Math.random() * 1.2;
    const inLowerHalf = boss.y + boss.h / 2 > H / 2;
    const upChance = inLowerHalf ? 0.72 : 0.44;
    const moveSpeed = 18 + level * 2;
    boss.vy = Math.random() < upChance ? -moveSpeed : moveSpeed;
  }

  const yMax = diving ? H - boss.h - 24 : Math.min(H - boss.h - 24, player.y - boss.h - 150);
  if (boss.y > yMax) boss.y = Math.max(yMax, boss.y - 260 * dt);
  else boss.y = clamp(boss.y, 58, yMax);
  boss.phase = boss.hp <= boss.maxHp * 0.33 ? 3 : boss.hp <= boss.maxHp * 0.66 ? 2 : 1;

  if (staggered) return;

  if (boss.ability === "CARAPACE BARRAGE") {
    boss.carapaceInvuln = Math.max(0, boss.carapaceInvuln - dt);
    if (boss.carapaceState === "idle") {
      boss.carapaceTimer -= dt * bossSlow;
      if (boss.carapaceTimer <= 0) {
        boss.carapaceState = "slow";
        boss.carapaceT = 0.8;
        boss.carapaceVx0 = boss.vx;
      }
    } else if (boss.carapaceState === "slow") {
      boss.carapaceT -= dt * bossSlow;
      boss.vx = boss.carapaceVx0 * Math.max(0, boss.carapaceT / 0.8);
      if (boss.carapaceT <= 0) {
        boss.carapaceState = "windup";
        boss.carapaceT = 0.9;
        boss.vx = 0;
        addScreenShake(4);
      }
    } else if (boss.carapaceState === "windup") {
      boss.carapaceT -= dt * bossSlow;
      boss.vx = 0;
      screenShake = Math.max(screenShake, 3);
      if (boss.carapaceT <= 0) {
        boss.carapaceState = "drop";
        boss.carapaceT = 1.6;
        boss.carapaceDropT = 0.1;
        boss.carapaceDropped = 0;
        boss.carapaceCast = (boss.carapaceCast || 0) + 1;
        boss.carapaceMines = Math.min(2 + boss.carapaceCast, 5);
        boss.carapaceInvuln = 1.6;
        addScreenShake(6);
      }
    } else if (boss.carapaceState === "drop") {
      boss.carapaceT -= dt * bossSlow;
      boss.carapaceDropT -= dt * bossSlow;
      boss.vx = 0;
      if (boss.carapaceDropT <= 0 && boss.carapaceDropped < boss.carapaceMines) {
        boss.carapaceDropped += 1;
        boss.carapaceDropT = 0.22;
        fireSpikeMine(boss, 1.2, (boss.carapaceDropped - (boss.carapaceMines + 1) / 2) * 26);
      }
      if (boss.carapaceT <= 0) {
        boss.carapaceState = "idle";
        boss.carapaceTimer = Math.max(3.4, (boss.designData.carapaceInterval || 5.4) - (boss.phase - 1) * 0.6);
        boss.vx = (boss.carapaceVx0 >= 0 ? 1 : -1) * (boss.designData.speed + level * 8);
      }
    }
  }

  if (boss.ability === "VENOM DIVE") {
    const diveSpeed = boss.designData.speed + level * 8;
    if (boss.diveState === "idle") {
      boss.diveTimer -= dt * bossSlow;
      if (boss.diveTimer <= 0) {
        boss.diveState = "telegraph";
        boss.diveTele = 0.6;
        boss.diveTargetX = clamp(playerCenterX(), 60, W - 60);
        addScreenShake(3);
      }
    } else if (boss.diveState === "telegraph") {
      boss.diveTele -= dt * bossSlow;
      if (boss.diveTele <= 0) {
        boss.diveState = "dive";
        boss.diveDropTimer = 0.1;
        boss.diveCount = 0;
        boss.vx = (boss.diveTargetX >= boss.x + boss.w / 2 ? 1 : -1) * diveSpeed * 1.6;
        boss.vy = 300 + level * 10;
      }
    } else if (boss.diveState === "dive") {
      boss.diveDropTimer -= dt * bossSlow;
      if (boss.diveDropTimer <= 0) {
        boss.diveDropTimer = 0.22;
        fireVenomBomb(boss);
        boss.diveCount += 1;
      }
      if (boss.y + boss.h >= player.y - 130 || boss.diveCount >= 4) {
        boss.diveState = "climb";
        boss.vy = -(300 + level * 10);
        addShockwave(boss.x + boss.w / 2, boss.y + boss.h, 70);
      }
    } else if (boss.diveState === "climb") {
      if (boss.y <= 58) {
        boss.y = 58;
        boss.diveState = "idle";
        boss.vy = 12 + level;
        boss.vx = diveSpeed * (Math.random() < 0.5 ? -1 : 1);
        boss.diveTimer = Math.max(2.6, (boss.designData.diveInterval || 4.6) - (boss.phase - 1) * 0.8);
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

  if (boss.ability === "SWARM PRINTER") {
    boss.scrapShield = Math.max(0, (boss.scrapShield || 0) - dt * bossSlow);
    boss.droneTimer -= dt * bossSlow;
    if (boss.droneTimer <= 0) {
      fireScrapDrone(boss);
      if (boss.phase >= 2) fireScrapDrone(boss);
      boss.droneTimer = Math.max(0.55, boss.droneInterval - (boss.phase - 1) * 0.22);
    }
    boss.burstTimer -= dt * bossSlow;
    if (boss.burstTimer <= 0) {
      fireScrapBurst(boss);
      boss.burstTimer = Math.max(1.25, boss.burstInterval - (boss.phase - 1) * 0.35);
    }
  }

  if (boss.ability === "ZONE DENIAL") {
    boss.mineTimer -= dt * bossSlow;
    if (boss.mineTimer <= 0) {
      fireSpikeMine(boss, boss.mineArmDelay || 0.75);
      boss.mineTimer = Math.max(0.95, boss.mineInterval - (boss.phase - 1) * 0.18);
    }
    const baseSpeed = boss.designData.speed + level * 8;
    if (boss.rolling) {
      boss.rollDuration -= dt * bossSlow;
      boss.vx = (boss.vx >= 0 ? 1 : -1) * baseSpeed * 2.15;
      if (boss.rollDuration <= 0) {
        boss.rolling = false;
        boss.vx = (boss.vx >= 0 ? 1 : -1) * baseSpeed;
      }
    } else {
      boss.rollTimer -= dt * bossSlow;
      if (boss.rollTimer <= 0) {
        boss.rolling = true;
        boss.rollDuration = boss.rollLength;
        boss.rollTimer = Math.max(2.8, boss.rollInterval - (boss.phase - 1) * 0.7);
        boss.vx = (boss.x + boss.w / 2 < W / 2 ? 1 : -1) * baseSpeed * 2.15;
        addScreenShake(4);
      }
    }
  }

  if (boss.ability === "ABYSSAL RITE") {
    boss.hoverT = (boss.hoverT || 0) + dt;
    const idol = minions.find((m) => m.type === "idol");
    if (idol) {
      const side = Math.sin(boss.hoverT * 0.45) >= 0 ? 1 : -1;
      const off = side * (95 + Math.sin(boss.hoverT * 1.7) * 15);
      boss.vx = clamp((idol.x + idol.w / 2 + off - (boss.x + boss.w / 2)) * 1.6, -170, 170);
      boss.vy = clamp((idol.y - 90 + Math.sin(boss.hoverT * 0.7) * 40 - boss.y) * 1.6, -130, 130);
    }
    boss.callTimer -= dt * bossSlow;
    if (boss.callTimer <= 0 && !boss.callWindup) {
      boss.callCount += 1;
      boss.callWindup = 2.5;
      boss.callTimer = boss.callingInterval;
    }
    if (boss.callWindup > 0) {
      boss.callWindup -= dt * bossSlow;
      if (boss.callWindup <= 0) castCalling(boss);
    }
    boss.bellTimer -= dt * bossSlow;
    if (boss.bellTimer <= 0) {
      castBell(boss);
      boss.bellTimer = boss.bellInterval;
    }
    updateBell(dt);
  }

  if (boss.shellMaxHp > 0 && boss.shellHp <= 0 && boss.shellTimer > 0) {
    boss.shellTimer = Math.max(0, boss.shellTimer - dt * bossSlow);
    if (boss.shellTimer <= 0) {
      boss.shellHp = boss.shellMaxHp;
      addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#62ffa1");
    }
  }

  if (boss.laserEnabled === false) {
    boss.laser.state = "idle";
    boss.laser.timer = Math.max(0.8, boss.laser.timer + dt);
    boss.laser.endX = boss.laser.aimX;
    boss.laser.endY = boss.laser.aimY;
  }

  boss.timer -= dt * bossSlow;
  if (boss.timer <= 0) {
    fireBossBullet(boss);
    boss.timer = (boss.callWindup > 0 ? 2.2 : 1) * Math.max(0.45, 1.25 - level * 0.04 - (boss.phase - 1) * 0.14);
  }

  boss.bombTimer -= dt * bossSlow;
  if (boss.bombTimer <= 0) {
    if (boss.callWindup > 0) {
      boss.bombTimer = 0.5;
    } else {
      fireBossBomb(boss);
      boss.bombTimer = Math.max(1.8, 3.8 - level * 0.08 - (boss.phase - 1) * 0.22);
    }
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
      laser.timer = boss.designData.laserPierce ? 0.5 : 0.38;
      laser.pierceTick = 0;
      if (boss.designData.laserPierce) {
        laser.strafeVx0 = boss.vx;
        boss.vx *= 0.25;
      }
      playBombExplosion();
      addScreenShake(3);
    }
  } else if (laser.state === "fire") {
    if (boss.designData.laserPierce) {
      laser.endX = laser.aimX;
      laser.endY = laser.aimY;
      laser.pierceTick = (laser.pierceTick || 0) + dt;
      if (laser.pierceTick >= 0.1) {
        laser.pierceTick = 0;
        const burns = cellsOnBeam(origin.x, origin.y, laser.endX, laser.endY, laser.width);
        burns.forEach((h) => {
          h.cell.hp -= 1;
          h.cell.flash = 0.5;
          addExplosion(h.x, h.y, "#ff3366");
        });
        shields.forEach((shield) => {
          shield.cells = shield.cells.filter((cell) => cell.hp > 0);
        });
        shields = shields.filter((shield) => shield.cells.length > 0);
        if (burns.length) playShieldHit();
      }
    } else {
      const hit = firstShieldHitOnSegment(origin.x, origin.y, laser.aimX, laser.aimY);
      laser.endX = hit ? hit.x : laser.aimX;
      laser.endY = hit ? hit.y : laser.aimY;

      if (hit && !laser.hasHitShield) {
        laser.hasHitShield = true;
        damageShieldCell(hit.shield, hit.cell);
        addExplosion(hit.x, hit.y, "#62ffa1");
        playShieldHit();
      }
    }

    enemyBullets = enemyBullets.filter((bullet) => {
      const bx = bullet.x + bullet.w / 2;
      const by = bullet.y + bullet.h / 2;
      return pointToSegmentDistance(bx, by, origin.x, origin.y, laser.endX, laser.endY) > laser.width + 8;
    });

    if (!laser.hasHitPlayer) {
      let playerOnBeam = false;
      for (let s = 0; s <= 40; s += 1) {
        const t = s / 40;
        const px = origin.x + (laser.endX - origin.x) * t;
        const py = origin.y + (laser.endY - origin.y) * t;
        if (px > player.x - 4 && px < player.x + player.w + 4 && py > player.y - 4 && py < player.y + player.h + 4) {
          playerOnBeam = true;
          break;
        }
      }
      if (playerOnBeam) {
        hitPlayerWithBossLaser();
        laser.hasHitPlayer = !isPlayerInvulnerable();
      }
    }

    if (laser.timer <= 0) {
      laser.state = "idle";
      if (laser.strafeVx0 !== undefined) {
        boss.vx = laser.strafeVx0;
        laser.strafeVx0 = undefined;
      }
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

function cellsOnBeam(x1, y1, x2, y2, width = 0) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const steps = Math.max(24, Math.ceil(dist / 8));
  const nx = dist > 0 ? -dy / dist : 0;
  const ny = dist > 0 ? dx / dist : 0;
  const offsets = width > 0 ? [-width / 2, 0, width / 2] : [0];
  const picked = new Set();
  const seen = [];
  for (const off of offsets) {
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const x = x1 + dx * t + nx * off;
      const y = y1 + dy * t + ny * off;
      for (const shield of shields) {
        const cell = shield.cells.find((item) => !picked.has(item) && pointInRect(x, y, item));
        if (cell) {
          picked.add(cell);
          seen.push({ shield, cell, x, y });
        }
      }
    }
  }
  return seen;
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
  cell.hp -= 2;
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
    if (shieldHits < maxShieldHits) noteShieldBreak();
    showGameMessage(shieldHits > 0 ? t("SHIELD ABSORBED LASER x{n}", { n: shieldHits }) : t("SHIELD GONE"), 1.05, "#62ffa1");
    return;
  }

  if (state !== "playing") return;
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
    resetPlayer();
  }
}

function bossAimVx(boss, sx, sy, speed, limit) {
  const phase = boss.phase || 1;
  const leadChance = Math.min(0.8, 0.3 + phase * 0.18);
  const current = playerCenterX();
  const predicted = predictPlayerX(sx, sy, speed);
  const roll = Math.random();
  const target = roll < leadChance ? predicted
    : roll < leadChance + 0.3 ? (current + predicted) / 2
    : current;
  return clamp((clamp(target, sx - 260, sx + 260) - sx) * 1.5, -limit, limit);
}

function fireBossBullet(boss) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h;
  const phase = boss.phase || 1;
  const design = boss.designData || BOSS_DESIGNS[0];
  const speed = 190 + level * 16 + phase * 18;
  const aim = (limit) => bossAimVx(boss, cx, cy, speed, limit);

  if (design.ability === "RAPID STREAM") {
    const pattern = Math.floor(Math.random() * 4);
    const playerAim = aim(130);
    if (pattern === 0) {
      addBossBullet(boss, cx - 2, cy, 0, speed * 1.22);
      addBossBullet(boss, cx - 2, cy, playerAim, speed * 1.05);
    } else if (pattern === 1) {
      const sideAim = aim(34);
      addBossBullet(boss, cx - 18, cy, -Math.abs(sideAim), speed * 1.18);
      addBossBullet(boss, cx - 2, cy, 0, speed * 1.22);
      addBossBullet(boss, cx + 14, cy, Math.abs(sideAim), speed * 1.18);
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

  if (design.ability === "VENOM DIVE") {
    const pattern = Math.floor(Math.random() * 2);
    if (pattern === 0) {
      const sideAim = Math.abs(aim(60));
      addBossBullet(boss, cx - 2, cy, aim(40), speed * 0.95);
      addBossBullet(boss, cx - 42, cy, -sideAim, speed * 0.85);
      addBossBullet(boss, cx + 38, cy, sideAim, speed * 0.85);
    } else {
      const lead = aim(70);
      addBossBullet(boss, cx - 24, cy, lead * 0.6, speed * 0.9);
      addBossBullet(boss, cx + 20, cy, lead, speed * 0.9);
      if (phase >= 3) addBossBullet(boss, cx - 2, cy, lead * 1.2, speed);
    }
    return;
  }

  if (design.ability === "CARAPACE BARRAGE") {
    const pattern = Math.floor(Math.random() * 2);
    if (pattern === 0) {
      const sideAim = Math.abs(aim(22));
      addBossBullet(boss, cx - 42, cy, -sideAim, speed * 0.82);
      addBossBullet(boss, cx + 38, cy, sideAim, speed * 0.82);
    } else {
      const sideAim = Math.abs(aim(18));
      addBossBullet(boss, cx - 2, cy, 0, speed * 0.86);
      if (phase >= 2) addBossBullet(boss, cx - 42, cy, -sideAim, speed * 0.76);
      if (phase >= 3) addBossBullet(boss, cx + 38, cy, sideAim, speed * 0.76);
    }
    return;
  }

  const pattern = Math.floor(Math.random() * 3);
  if (pattern === 0) {
    const wideAim = Math.abs(aim(55));
    addBossBullet(boss, cx - 2, cy, 0, speed);
    addBossBullet(boss, cx - 2, cy, -wideAim, speed);
    addBossBullet(boss, cx - 2, cy, wideAim, speed);
  } else if (pattern === 1) {
    const sideAim = Math.abs(aim(35));
    addBossBullet(boss, cx - 42, cy, -sideAim, speed);
    addBossBullet(boss, cx + 38, cy, sideAim, speed);
    if (phase >= 2) {
      addBossBullet(boss, cx - 2, cy, 0, speed * 1.1);
    }
  } else if (phase >= 3) {
    const fanAim = Math.abs(aim(45));
    [-fanAim, 0, fanAim].forEach((vx) => addBossBullet(boss, cx - 2, cy, vx, speed));
  } else {
    addBossBullet(boss, cx - 2, cy, 0, speed * 1.2);
  }
}

function fireVenomBomb(boss) {
  const cx = boss.x + boss.w / 2;
  const cy = boss.y + boss.h;
  const shield = shields.length ? shields[Math.floor(Math.random() * shields.length)] : null;
  const targetX = shield ? shield.x + shield.w / 2 : playerCenterX();
  const dx = targetX - cx;
  enemyBombs.push({
    x: cx - 7,
    y: cy,
    w: 14,
    h: 14,
    vx: clamp(dx * 0.5 + boss.vx * 0.35, -160, 160),
    vy: 60,
    ttl: 4.2,
    hp: 2,
    maxHp: 2,
    radius: 18,
    direct: true,
    playerDamage: Math.max(1, boss.bombPlayerDamage || 1),
    shieldDamage: boss.bombBarrierDamage || 16,
    color: boss.designData.accent,
    fromBoss: true,
    trail: []
  });
  playBombLaunch();
}

function fireBossBomb(boss) {
  const design = boss.designData || BOSS_DESIGNS[0];
  const bombsToFire = boss.bombsPerLaunch ?? design.bombsPerLaunch ?? 1;
  const available = Math.max(0, (boss.bombMax ?? 2) - enemyBombs.length);
  const count = Math.min(bombsToFire, available);
  if (count <= 0) return;

  const originX = boss.x + boss.w / 2;
  const originY = boss.y + boss.h;
  const direct = boss.bombDirect === true;
  const fanSpread = direct ? 116 : design.ability === "CARAPACE BARRAGE" ? 22 : 58;

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

  const chance = Math.min(0.08, (mini ? 0.022 : 0.016) + level * 0.0015 + dropRateBonus * 0.55);
  if (Math.random() > chance) return;

  const type = pickLootType(mini ? 2 : 3);
  spawnPowerupAt(boss.x + boss.w / 2, boss.y + boss.h / 2, type, false, 5.5);
}

function damageBoss(unit, amount, opts = {}) {
  if (!unit) return;
  if (unit.hp <= 0) return;
  if (unit.carapaceInvuln > 0) {
    addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, "#62ffa1");
    playShieldHit();
    return;
  }
  comboAddHit();
  const design = unit.designData || BOSS_DESIGNS[0];
  if (unit.shellHp > 0) {
    unit.shellHp = Math.max(0, unit.shellHp - 1);
    bossHitReward(unit);
    addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, "#62ffa1");
    addScreenShake(4);
    playShieldHit();
    if (unit.shellHp <= 0) unit.shellTimer = unit.shellRegen || 15;
    return;
  }
  if (unit.scrapShield > 0) {
    amount = Math.max(0, amount - 1);
    shedScrapFragment(unit);
    addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, design.accent);
    playShieldHit();
    if (amount <= 0) {
      bossHitReward(unit);
      return;
    }
  }
  if (bossStagger > 0) {
    amount = Math.ceil(amount * 1.8);
  }
  const oldPhase = unit.phase || 1;
  unit.hp -= amount;
  if (unit.hp > 0) bossHitReward(unit);
  if (bossStagger <= 0) {
    addStaggerDamage(unit, amount * (opts.staggerMul === undefined ? 1 : opts.staggerMul));
  }
  unit.phase = unit.hp <= unit.maxHp * 0.33 ? 3 : unit.hp <= unit.maxHp * 0.66 ? 2 : 1;
  if (unit.phase > oldPhase) {
    addScreenShake(6);
    playBombExplosion();
    showGameMessage(t("BOSS PHASE {n}", { n: unit.phase }), 1.15, design.color);
  } else {
    addScreenShake(Math.min(1, amount));
  }
  addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, "#ff3366");

  if (unit.hp <= 0) {
    comboAddKill();
    addScore((unit.mini ? 160 : 300) + level * (unit.mini ? 25 : 50), unit.x + unit.w / 2, unit.y + unit.h / 2);
    addScreenShake(unit.mini ? 10 : 14);
    addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, "#ffe066");
    addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, COLORS.explosion);
    playBombExplosion();
    const bossX = unit.x + unit.w / 2;
    const bossY = unit.y + unit.h / 2;
    const mini = unit.mini === true;
    bosses = bosses.filter((item) => item !== unit);
    boss = bosses[0] || null;
    minions.forEach((m) => {
      addExplosion(m.x + m.w / 2, m.y + m.h / 2, m.type === "idol" ? "#ffd76a" : "#8b5cf6");
    });
    minions = [];
    resetStagger();
    clearEnemyFire();
    spawnPowerupAt(bossX, bossY, POWERUP_TYPES.find((powerup) => powerup.id === "bomb") || POWERUP_TYPES[0], true, Infinity);
    spawnPowerupAt(bossX - 34, bossY, pickLootType(mini ? 2 : 3), false, 9);
    if (mini || Math.random() < 0.65) {
      spawnPowerupAt(bossX + 34, bossY, pickLootType(mini ? 2 : 3), false, 9);
    }
    showGameMessage(mini ? t("MINIBOSS DOWN!") : t("BOSS DOWN!"), 1.35, design.color);
    if (bosses.length > 0) return;
    if (mini) {
      if (!invaders.some((invader) => invader.alive)) checkWaveClear();
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
  staggerGrace = 0;
  staggerDecayDiv = 5;
  staggerThresholdEff = 0;
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

  if (staggerGrace > 0) {
    staggerGrace = Math.max(0, staggerGrace - dt);
  } else if (staggerDamage > 0 && bossStagger <= 0 && staggerCooldown <= 0) {
    const threshold = staggerThresholdEff || Math.max(4, 4 + level * 2) * 1.2;
    staggerDamage = Math.max(0, staggerDamage - dt * (threshold / staggerDecayDiv));
  }

  if (staggerCooldown > 0) {
    staggerCooldown = Math.max(0, staggerCooldown - dt);
  }
}

function addStaggerDamage(boss, amount) {
  if (!boss || bossStagger > 0 || staggerCooldown > 0) return;

  staggerDamage += amount;
  const design = boss.designData || BOSS_DESIGNS[0];
  const ease = design.staggerEase || 1;
  const venom = boss.ability === "VENOM DIVE";
  const forgiving = venom || ease < 1;
  staggerGrace = venom ? 2.0 : forgiving ? 1.5 : 0.4;
  staggerDecayDiv = venom ? 8 : forgiving ? 7 : 5;
  staggerThresholdEff = Math.max(4, 4 + level * 2) * 1.2 * (venom ? 0.75 : 1) * ease;

  if (staggerDamage >= staggerThresholdEff) {
    triggerBossStagger(boss);
  }
}

function triggerBossStagger(boss) {
  if (!boss) return;

  bossStagger = STAGGER_DURATION;
  staggerCooldown = STAGGER_COOLDOWN + Math.min(6, level);
  staggerDamage = 0;
  staggerWindow = 0;

  bosses.forEach((unit) => {
    unit.timer = Math.max(1.0, unit.timer + 1.2);
    unit.bombTimer = Math.max(1.6, unit.bombTimer + 1.6);
    unit.laser.state = "idle";
    unit.laser.timer = Math.max(3.2, unit.laser.timer + 2.4);
    unit.laser.hasHitShield = false;
    unit.laser.hasHitPlayer = false;
    unit.carapaceInvuln = 0;
  });

  addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#ffe066");
  addScreenShake(8);
  playBombExplosion();
  spawnPowerupAt(boss.x + boss.w / 2, boss.y + boss.h + 8, POWERUP_TYPES.find((powerup) => powerup.id === "bomb") || POWERUP_TYPES[0], true, Infinity);
  showGameMessage(t("BOSS STAGGERED! {n}s", { n: Math.ceil(bossStagger) }), 1.15, "#ffe066");
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
    : design.name === "ABYSSAL SQUID" ? "squid"
    : design.name === "SCRAPLING" ? "scrap"
    : design.name === "SPINE SENTRY" ? "sentry" : "skull";
  const fitW = boss.h * (SIL[shapeName].bb.w / SIL[shapeName].bb.h);
  if (window.Iron3D) {
    push3D({ id: meshId, key: design.name === "ABYSSAL SQUID" ? "ABYSSAL SQUID" : shapeName,
      x: boss.x - 13, y: boss.y - 13,
      w: boss.w + 26, h: boss.h + 26, color: design.color, phase: 1.1, tilt: 0.2 });
  } else {
  if (design.name === "ABYSSAL SQUID") {
    ctx.save();
    ctx.fillStyle = design.color;
    ctx.shadowColor = design.color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.ellipse(cx, cy - boss.h * 0.10, boss.w * 0.28, boss.h * 0.34, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx - boss.w * 0.13, cy - boss.h * 0.36);
    ctx.lineTo(cx, cy - boss.h * 0.62);
    ctx.lineTo(cx + boss.w * 0.13, cy - boss.h * 0.36);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = design.accent;
    ctx.lineWidth = 4;
    for (let i = 0; i < 4; i += 1) {
      const bx = cx - boss.w * 0.24 + i * boss.w * 0.16;
      ctx.beginPath();
      ctx.arc(bx, cy + boss.h * 0.28, boss.w * 0.09, Math.PI * 0.1, Math.PI * 0.9);
      ctx.stroke();
    }
    ctx.lineWidth = 1;
    ctx.restore();
  }
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
  if (tier >= 2 && design.name !== "ABYSSAL SQUID") {
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
    const barW = Math.max(44, boss.w);
    const barX = boss.x + boss.w / 2 - barW / 2;
    const barY = boss.y - 24;
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(barX, barY, barW, 4);
    ctx.fillStyle = "#ffe066";
    ctx.fillRect(barX, barY, barW * Math.max(0, bossStagger / STAGGER_DURATION), 4);
    ctx.lineWidth = 1;
  }

  if (boss.carapaceState === "windup" || boss.carapaceState === "slow") {
    ctx.strokeStyle = "rgba(130, 255, 190, 0.55)";
    ctx.lineWidth = 3;
    ctx.strokeRect(boss.x - 10, boss.y + boss.h - 6, boss.w + 20, 12);
    ctx.fillStyle = "#62ffa1";
    ctx.font = "12px 'Courier New', monospace";
    ctx.fillText("WINDING UP", boss.x + boss.w / 2 - 40, boss.y + boss.h + 26);
    ctx.lineWidth = 1;
  }

  if (boss.carapaceInvuln > 0) {
    ctx.strokeStyle = "rgba(130, 255, 190, 0.85)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(boss.x + boss.w / 2, boss.y + boss.h / 2, boss.w / 2 + 14, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 1;
  }

  if (boss.ability === "VENOM DIVE" && boss.diveState === "telegraph") {
    ctx.save();
    ctx.strokeStyle = "rgba(125, 255, 102, 0.7)";
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(boss.x + boss.w / 2, boss.y + boss.h);
    ctx.lineTo(boss.diveTargetX, H - 60);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeRect(boss.diveTargetX - 26, H - 86, 52, 26);
    ctx.fillStyle = "#7dff66";
    ctx.font = "12px 'Courier New', monospace";
    ctx.fillText("DIVE", boss.diveTargetX - 14, H - 92);
    ctx.lineWidth = 1;
    ctx.restore();
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
  if (bossStagger > 0) {
    ctx.fillStyle = "#ff5050";
    ctx.fillRect(x, 70, width * (bossStagger / STAGGER_DURATION), 5);
    ctx.fillStyle = "#ffb0c0";
    ctx.font = "9px 'Press Start 2P'";
    ctx.fillText("STAGGERED", x + 4, 86);
  } else if (staggerDamage > 0 && staggerCooldown <= 0) {
    const threshold = Math.max(4, 4 + level * 2) * 1.2 * (boss.ability === "VENOM DIVE" ? 0.75 : 1);
    ctx.fillStyle = "#ff9a3c";
    ctx.fillRect(x, 70, width * Math.min(1, staggerDamage / threshold), 5);
  }
}

