function newWave() {
  invaders = [];
  shields = [];
  const seq = [];
  if (level >= 5) seq.push("ghost");
  if (level >= 4) seq.push("banshee");
  if (level >= 2) seq.push("stinger");
  seq.push("crab");
  const squidRows = seq.length <= 2 ? 2 : 1;
  for (let i = 0; i < squidRows; i += 1) seq.push("squid");
  const rows = isFinalStage(level) || level % 3 === 0 ? 0 : seq.length;

  for (let row = 0; row < rows; row += 1) {
    const byDepth = seq[row];
    for (let col = 0; col < 11; col += 1) {
      invaders.push({
        id: row * 11 + col,
        type: INVADER_TYPES.find((t) => t.name === byDepth),
        x: 84 + col * 56,
        y: 86 + row * 46,
        baseY: 86 + row * 46,
        w: 32,
        h: 32,
        row,
        hp: byDepth === "crab" ? 2 : 1,
        maxHp: byDepth === "crab" ? 2 : 1,
        alive: true
      });
    }
  }
  ghostPhaseT = 0;
  screamTimer = 6;
  frenzyZones = [];
  applyRowRoles();

  for (let i = 0; i < 4; i += 1) {
    const shield = {
      x: 96 + i * 168,
      y: H - 128,
      w: 72,
      h: 26,
      cells: []
    };
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 6; col += 1) {
        shield.cells.push({
          x: shield.x + col * 12,
          y: shield.y + row * 8,
          w: 11,
          h: 7,
          hp: 1
        });
      }
    }
    shields.push(shield);
  }

  invaderDirection = 1;
  setMusic(pickWaveMusic(level));
  playerBullets = [];
  enemyBullets = [];
  bombShots = [];
  laserBeams = [];
  enemyBombs = [];
  spikeMines = [];
  shockwaves = [];
  scorePopups = [];
  powerups = powerups.filter((powerup) => powerup.persist || Number.isFinite(powerup.ttl));
  combo = 0;
  comboMultiplier = 1;
  comboTimer = 0;
  comboMeter = 0;
  screenShake = 0;
  waveTime = 0;
  boss = null;
  bosses = [];
  bossSpawned = false;
  bossDir = 1;
  bossFireTimer = 1.2;
  resetStagger();
  enemyFireTimer = 1.2;
  invulnerabilityTimer = Math.max(invulnerabilityTimer, 0.85);
  gameMessages = [];
}

function updateEnemyBullets(dt) {
  const slowFactor = getSlowFactor("enemy");
  enemyBullets.forEach((bullet) => {
    bullet.y += bullet.speed * slowFactor * dt;
    bullet.x += (bullet.vx || 0) * slowFactor * dt;
  });

  enemyBullets = enemyBullets.filter((bullet) => bullet.y < H + 20);

  enemyFireTimer -= dt;
  if (enemyFireTimer <= 0) {
    lastShotFast = fireEnemyBullet();
    enemyFireTimer = Math.max(0.62, 2.15 - level * 0.07 - Math.random() * 0.75) * (lastShotFast === "frenzy" ? 0.3 : lastShotFast === "threat" ? 0.67 : lastShotFast ? 0.7 : 1);
  }
}

function applyRowRoles() {
  invaders.forEach((invader) => {
    invader.rowRole = invader.row === 0 ? "last" : (level >= 2 && invader.row === 1 ? "second" : "");
  });
}

function fireEnemyBullet() {
  const maxBullets = frenzyZones.some((zone) => zone.arm <= 0) ? 6 : (boss ? 2 : Math.min(3, 2 + Math.floor(level / 3)));
  if (enemyBullets.length >= maxBullets) return false;

  const alive = invaders.filter((invader) => invader.alive);
  if (!alive.length) return false;

  const free = alive.filter((invader) => invader.type.name !== "ghost" &&
    !enemyBullets.some((bullet) => bullet.shooterId === invader.id));
  const frenzied = frenzyZones.length ? free.filter((invader) => frenzyZones.some(
    (zone) => Math.hypot(invader.x + invader.w / 2 - zone.x, invader.y + invader.h / 2 - zone.y) < zone.r
  )) : [];
  const threatened = free.filter((invader) => invader.threatened > 0);
  const front = free.filter((invader) => invader.rowRole === "last");
  const pool = threatened.length && Math.random() < 0.8 ? threatened
    : (front.length && Math.random() < 0.7 ? front : (free.length ? free : alive));
  const source = pool[Math.floor(Math.random() * pool.length)];

  const aimed = (source.rowRole === "last" && level >= 2) || source.type.name === "stinger";
  const sx = source.x + source.w / 2;
  const vx = aimed ? Math.max(-190, Math.min(190, (player.x + player.w / 2 - sx) * 1.5)) : 0;

  enemyBullets.push({
    x: sx - 2,
    y: source.y + source.h,
    w: 4,
    h: 14,
    speed: 560 * Math.min(1, 0.85 + (level - 1) * 0.05),
    vx,
    hp: 2,
    maxHp: 2,
    color: source.type.color,
    shooterId: source.id
  });
  return source.threatened > 0 ? "threat" : aimed;
}

function updateInvaders(dt) {
  const alive = invaders.filter((invader) => invader.alive);
  if (!alive.length) return;

  ghostPhaseT = (ghostPhaseT + dt) % 4;
  const ghosted = ghostPhaseT >= 3;
  frenzyZones.forEach((zone) => {
    zone.t -= dt;
    if (zone.arm > 0) zone.arm = Math.max(0, zone.arm - dt);
  });
  const armedZones = frenzyZones.filter((zone) => zone.arm <= 0);
  frenzyZones.forEach((zone) => {
    if (zone.b && zone.b.alive) {
      zone.x = zone.b.x + zone.b.w / 2;
      zone.y = zone.b.y + zone.b.h / 2;
      zone.sx = zone.x;
      zone.sy = zone.y;
    }
  });
  frenzyZones = frenzyZones.filter((zone) => zone.t > 0);
  alive.forEach((invader) => {
    if (invader.threatened > 0) invader.threatened = Math.max(0, invader.threatened - dt);
    if (invader.type.name === "ghost") {
      invader.ghosted = ghosted;
      invader.ghostAlpha = ghostPhaseT < 3 ? 1
        : ghostPhaseT < 3.25 ? 1 - ((ghostPhaseT - 3) / 0.25) * 0.82
        : ghostPhaseT < 3.75 ? 0.18
        : 0.18 + ((ghostPhaseT - 3.75) / 0.25) * 0.82;
    }
    invader.frenzied = frenzyZones.some((zone) => Math.hypot(
      invader.x + invader.w / 2 - zone.x, invader.y + invader.h / 2 - zone.y
    ) < zone.r);
    invader.frenzyLive = armedZones.some((zone) => Math.hypot(
      invader.x + invader.w / 2 - zone.x, invader.y + invader.h / 2 - zone.y
    ) < zone.r);
  });
  const frenzyCap = armedZones.length ? 6 : (boss ? 2 : Math.min(3, 2 + Math.floor(level / 3)));
  alive.forEach((invader) => {
    if (!invader.frenzyLive || invader.type.name === "ghost") return;
    invader.frenzyShotT = (invader.frenzyShotT === undefined ? 0.3 + Math.random() * 1.1 : invader.frenzyShotT) - dt;
    if (invader.frenzyShotT > 0) return;
    invader.frenzyShotT = 0.95 + Math.random() * 0.8;
    if (enemyBullets.length >= frenzyCap) return;
    const fx = invader.x + invader.w / 2;
    const faim = (invader.rowRole === "last" && level >= 2) || invader.type.name === "stinger";
    enemyBullets.push({
      x: fx - 2, y: invader.y + invader.h, w: 4, h: 14,
      speed: 560 * Math.min(1, 0.85 + (level - 1) * 0.05),
      vx: faim ? Math.max(-380, Math.min(380, (player.x + player.w / 2 - fx) * 1.5)) : 0,
      hp: 2, maxHp: 2, color: invader.type.color, shooterId: invader.id
    });
  });
  if (boss && boss.alive && boss.mini && armedZones.length &&
      armedZones.some((zone) => Math.hypot(boss.x + boss.w / 2 - zone.x, boss.y + boss.h / 2 - zone.y) < zone.r + 40)) {
    boss.frenzyShotT = (boss.frenzyShotT === undefined ? 0.2 : boss.frenzyShotT) - dt;
    if (boss.frenzyShotT <= 0) {
      boss.frenzyShotT = 1.1 + Math.random() * 0.8;
      if (enemyBullets.length < frenzyCap) {
        const bx = boss.x + boss.w / 2;
        addBossBullet(bx - 2, boss.y + boss.h,
          Math.max(-190, Math.min(190, (player.x + player.w / 2 - bx) * 1.5)),
          560 * Math.min(1, 0.85 + (level - 1) * 0.05));
      }
    }
  }
  screamTimer -= dt;
  if (screamTimer <= 0) {
    const wailing = alive.filter((invader) => invader.type.name === "banshee");
    if (wailing.length) {
      const b = wailing[Math.floor(Math.random() * wailing.length)];
      playScream();
      frenzyZones.push({ x: b.x + b.w / 2, y: b.y + b.h / 2, r: 210, t: 3.2, arm: 0.8, sx: b.x + b.w / 2, sy: b.y + b.h / 2, b });
      addShockwave(b.x + b.w / 2, b.y + b.h / 2, 210);
      addShockwave(b.x + b.w / 2, b.y + b.h / 2, 165);
      addShockwave(b.x + b.w / 2, b.y + b.h / 2, 120);
      alive.forEach((invader) => {
        if (invader.type.name === "ghost") return;
        if (Math.hypot(invader.x + invader.w / 2 - b.x - b.w / 2, invader.y + invader.h / 2 - b.y - b.h / 2) < 210) {
          invader.frenzyShotT = 0.3 + Math.random() * 1.1;
        }
      });
      screamTimer = 8;
    } else {
      screamTimer = 1;
    }
  }

  const speed = (20 + level * 4 + (55 - alive.length) * 0.95) * getSlowFactor("enemy");
  const w = Math.max(...alive.map((invader) => invader.x + invader.w));
  const minX = Math.min(...alive.map((invader) => invader.x));

  if (invaderDirection > 0 && w + speed * dt >= W - 16) {
    invaderDirection = -1;
    descendInvaders();
  } else if (invaderDirection < 0 && minX - speed * dt <= 16) {
    invaderDirection = 1;
    descendInvaders();
  } else {
    alive.forEach((invader) => {
      invader.x += invaderDirection * speed * invaderSpeedFactor(invader) * dt;
    });
  }

  applyWavePatternMotion();
}

function descendInvaders() {
  invaders.forEach((invader) => {
    invader.baseY += 15;
    invader.y += 15;
  });

  const invaderBottom = Math.max(...invaders.filter((invader) => invader.alive).map((invader) => invader.y + invader.h));
  if (invaderBottom >= player.y - 4) {
    lives = 0;
    addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);
    playPlayerDeath();
    clearWeaponUpgrades();
    clearEnemyFire();
    showGameMessage("BASE OVERRUN", 1.6, "#ff3366");
    gameOver();
  }
}

function updateUfo(dt) {
  const ufoSlow = getSlowFactor("ufo");
  if (!ufo) {
    ufoTimer -= dt * ufoSlow;
    if (ufoTimer <= 0 && invaders.some((invader) => invader.alive)) {
      const leftToRight = Math.random() > 0.5;
      const ufoHp = 2 + Math.floor((level - 1) / 4);
      ufo = {
        x: leftToRight ? -60 : W + 60,
        y: 42,
        w: 54,
        h: 22,
        vx: leftToRight ? 130 : -130,
        hp: ufoHp,
        maxHp: ufoHp
      };
      ufoTimer = 17 + Math.random() * 9;
    }
    return;
  }

  ufo.x += ufo.vx * dt * ufoSlow;
  if (ufo.x < -80 || ufo.x > W + 80) ufo = null;
}

function updateExplosions(dt) {
  explosions.forEach((explosion) => {
    explosion.ttl -= dt;
  });
  explosions = explosions.filter((explosion) => explosion.ttl > 0);
}

