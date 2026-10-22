
if (new URLSearchParams(location.search).has("selftest")) {
  document.title = "SELFTEST boot";
}
function init() {
  resetPlayer();
  newWave();
  draw();
}

function startGame() {
  initAudio();
  state = "playing";
  score = 0;
  lives = 3;
  level = testJumpLevel || 1;
  testJumpLevel = 0;
  extraLivesAwarded = 0;
  playerBullets = [];
  enemyBullets = [];
  powerups = [];
  bombShots = [];
  laserBeams = [];
  enemyBombs = [];
  spikeMines = [];
  shockwaves = [];
  scorePopups = [];
  bombInventory = 0;
  fireCooldown = 0;
  combo = 0;
  comboMultiplier = 1;
  comboTimer = 0;
  comboMeter = 0;
  screenShake = 0;
  waveTime = 0;
  effects = { rapid: 0, double: 0, laser: 0, slow: 0, shield: 0 };
  dashTimer = 0;
  dashCooldown = 0;
  dashGrace = 0;
  dashGhosts = [];
  shieldHits = 0;
  explosions = [];
  ufo = null;
  boss = null;
  bossSpawned = false;
  bossDir = 1;
  bossFireTimer = 1.2;
  bossCount = 0;
  resetStagger();
  ufoTimer = 14;
  enemyFireTimer = 1.2;
  invulnerabilityTimer = 1.5;
  waveBreakTimer = 0;
  waveClearing = false;
  nextWaveIsBoss = false;
  gameMessages = [];
  upgradeChoices = [];
  upgradeLevels = { offense: 0, defense: 0, mobility: 0 };
  bombSpeedMultiplier = 1;
  bombRadiusBonus = 0;
  dropRateBonus = 0;
  permanentDoubleShots = false;
  permanentFireRateBonus = 0;
  permanentDamage = 0;
  maxShieldHits = 1;
  shieldRestoreDelay = 0;
  shieldRestoreTimer = 0;
  runTime = 0;
  playerName = effectiveName() || "PILOT";
  saveName(playerName);
  resetPlayer();
  updateDashHint();
  newWave();
  setMusic(pickWaveMusic(level), true);
  updateStatus("Good luck.");
}

function frame(now) {
  window.__ironFrames = (window.__ironFrames || 0) + 1;
  const dt = Math.min(0.035, (now - lastTime) / 1000);
  lastTime = now;

  if (state === "playing") update(dt);
  if (state === "waveBreak") updateWaveBreak(dt);
  if (state === "choices") updateMusic(dt);
  draw();
  requestAnimationFrame(frame);
}

function winGame() {
  state = "victory";
  clearEnemyFire();
  victoryRank = saveScore({ name: playerName || "PILOT", score: score, time: Math.round(runTime), date: new Date().toISOString().slice(0, 10) });
  playLevelClear();
  updateStatus("THE IRON TIDE IS BROKEN.");
}

function update(dt) {
  runTime += dt;
  movePlayer(dt);
  updateDash(dt);
  updateFire(dt);
  updatePlayerBullets(dt);
  updateLaserBeams(dt);
  updateBombShots(dt);
  updateEnemyBombs(dt);
  updateSpikeMines(dt);
  updatePowerups(dt);
  updateEffects(dt);
  updateEnemyBullets(dt);
  updateInvaders(dt);
  updateMinibossSpawn();
  updateBoss(dt);
  updateStagger(dt);
  updateUfo(dt);
  updateExplosions(dt);
  updateShockwaves(dt);
  updateFeedback(dt);
  updateMusic(dt);
  checkCollisions();
}

function checkCollisions() {
  playerBullets = playerBullets.filter((bullet) => {
    const hitInvader = invaders.find((invader) => invader.alive && !invader.ghosted && overlaps(bullet, invader));
    if (hitInvader) {
      const damage = bullet.damage || 1;
      hitInvader.hp = Math.max(0, (hitInvader.hp || 1) - damage);
      if (hitInvader.hp === 1 && (hitInvader.maxHp || 1) >= 2) hitInvader.threatened = 5;
      if (hitInvader.hp > 0) {
        comboAddHit();
        playHit();
        addExplosion(bullet.x + bullet.w / 2, bullet.y, invaderHitColor(hitInvader));
        return false;
      }
      hitInvader.alive = false;
      registerInvaderKill(hitInvader);
      addExplosion(hitInvader.x + hitInvader.w / 2, hitInvader.y + hitInvader.h / 2, hitInvader.type.color,
        { name: hitInvader.type.name === "octopus" ? "octo" : hitInvader.type.name, w: hitInvader.w, color: hitInvader.type.color });
      playHit();
      maybeDropPowerup(hitInvader);
      checkWaveClear();
      return false;
    }

    if (boss && overlaps(bullet, boss)) {
      damageBoss(bullet.damage || 1);
      addExplosion(bullet.x + bullet.w / 2, bullet.y, "#ff3366");
      playHit();
      return false;
    }

    const hitUfo = ufo && overlapsPadded(bullet, ufo, 5);
    if (hitUfo) {
      const damage = bullet.damage || 1;
      ufo.hp = Math.max(0, (ufo.hp || 1) - damage);
      addExplosion(bullet.x + bullet.w / 2, bullet.y, COLORS.ufo);
      if (ufo.hp > 0) {
        comboAddHit();
        playHit();
        return false;
      }

      comboAddKill();
      addScore(100, ufo.x + ufo.w / 2, ufo.y + ufo.h / 2);
      addExplosion(ufo.x + ufo.w / 2, ufo.y + ufo.h / 2, COLORS.ufo);
      const crate = spawnUfoLootCrate(ufo);
      ufo = null;
      playUfoKill();
      return false;
    }

    const hitEnemyBullet = enemyBullets.find((enemyBullet) => overlapsPadded(bullet, enemyBullet, 5));
    if (hitEnemyBullet) {
      hitEnemyBullet.hp = Math.max(0, (hitEnemyBullet.hp || 1) - 1);
      addExplosion(hitEnemyBullet.x + hitEnemyBullet.w / 2, hitEnemyBullet.y + hitEnemyBullet.h / 2, "#ff8844");
      playHit();
      if (hitEnemyBullet.hp <= 0) {
        enemyBullets = enemyBullets.filter((item) => item !== hitEnemyBullet);
        addScore(12);
      }
      return false;
    }

    const hitEnemyBomb = enemyBombs.find((bomb) => overlaps(bullet, bomb));
    if (hitEnemyBomb) {
      hitEnemyBomb.hp = Math.max(0, (hitEnemyBomb.hp || 2) - 1);
      addExplosion(hitEnemyBomb.x + hitEnemyBomb.w / 2, hitEnemyBomb.y + hitEnemyBomb.h / 2, "#ff6600");
      playHit();
      if (hitEnemyBomb.hp <= 0) {
        enemyBombs = enemyBombs.filter((bomb) => bomb !== hitEnemyBomb);
        addScore(15);
      }
      return false;
    }

    const hitMine = spikeMines.find((mine) => overlaps(bullet, mine));
    if (hitMine) {
      hitMine.hp = Math.max(0, (hitMine.hp || 1) - 1);
      addExplosion(hitMine.x + hitMine.w / 2, hitMine.y + hitMine.h / 2, "#62ffa1");
      playHit();
      if (hitMine.hp <= 0) {
        spikeMines = spikeMines.filter((mine) => mine !== hitMine);
        addScore(10);
      }
      return false;
    }

    const hitPowerup = powerups.find((powerup) => overlaps(bullet, powerup));
    if (hitPowerup) {
      collectPowerup(hitPowerup);
      return false;
    }

    const shieldHit = firstShieldCellHit(bullet);
    if (shieldHit) {
      damageShieldCell(shieldHit.shield, shieldHit.cell);
      addExplosion(shieldHit.cell.x + shieldHit.cell.w / 2, shieldHit.cell.y, COLORS.shield);
      playShieldHit();
      return false;
    }

    return true;
  });

  enemyBullets = enemyBullets.filter((bullet) => {
    if (spikeMines.some((mine) => overlaps(bullet, mine))) return false;

    const hitShield = shields.find((shield) => overlaps(bullet, shield));
    if (hitShield) {
      damageShield(hitShield, bullet);
      playShieldHit();
      return false;
    }

    if (overlaps(bullet, player)) {
      if (isPlayerInvulnerable()) return false;
      addExplosion(player.x + player.w / 2, player.y + player.h / 2, COLORS.player);

      if (shieldHits > 0 && effects.shield > 0) {
        shieldHits -= 1;
        if (shieldHits <= 0) effects.shield = 0;
        addExplosion(player.x + player.w / 2, player.y + player.h / 2, "#62ffa1");
        playShieldHit();
        if (shieldHits <= 0) noteShieldBreak();
        showGameMessage(shieldHits > 0 ? `SHIELD ABSORBED HIT x${shieldHits}` : "SHIELD GONE", 1.05, "#62ffa1");
        return false;
      }

      if (isPlayerInvulnerable()) return false;

      lives -= 1;
      addScreenShake(14);
      playPlayerDeath();
      clearWeaponUpgrades();
      clearEnemyFire();
      playerBullets = [];

      if (lives <= 0) {
        gameOver();
      } else {
        resetPlayer();
      }
      return false;
    }

    return true;
  });
}

function updateMinibossSpawn() {
  if (state !== "playing" || boss || bossSpawned || waveClearing || !isMinibossWave(level)) return;

  const alive = invaders.filter((invader) => invader.alive).length;
  const threshold = Math.max(1, Math.ceil(invaders.length * 0.1));

  if (alive === 0 || alive > threshold) return;

  spawnBoss();
}

function checkWaveClear() {
  if (waveClearing || state === "waveBreak" || state === "choices") return;
  if (boss) return;
  if (invaders.some((invader) => invader.alive)) return;

  waveClearing = true;
  level += 1;
  addScore(150);
  playLevelClear();
  clearEnemyFire();
  playerBullets = [];
  bombShots = [];
  nextWaveIsBoss = isFullBossWave(level);
  state = "waveBreak";
  waveBreakTimer = 2.4;
  showGameMessage(`WAVE ${level}${nextWaveIsBoss ? " - BOSS" : ""}`, waveBreakTimer, "#ff3366");
}

function updateWaveBreak(dt) {
  waveBreakTimer -= dt;
  updateMusic(dt);
  updateGameMessages(dt);
  updateExplosions(dt);
  updateShockwaves(dt);
  screenShake = Math.max(0, screenShake - dt * 16);

  if (waveBreakTimer > 0) return;

  newWave();
  if (nextWaveIsBoss) spawnBoss();
  waveClearing = false;
  nextWaveIsBoss = false;
  state = "playing";
}

function addScore(points, x, y) {
  const gained = Math.max(1, Math.floor(points * comboMultiplier));
  score += gained;
  if (score > highScore) {
    highScore = score;
    saveHighScore(highScore);
  }

  if (typeof x === "number" && typeof y === "number") {
    addScorePopup(x, y, gained);
    playComboScore(gained);
  }

  while (score >= (extraLivesAwarded + 1) * 6000) {
    lives += 1;
    extraLivesAwarded += 1;
    playExtraLife();
    showGameMessage(`+1 life\n${gained} POINTS`, 1.75, "#78ff78");
  }
}

function gameOver() {
  state = "gameover";
  screenShake = 0;
  saveHighScore(highScore);
  if (score > 0) {
    victoryRank = saveScore({ name: playerName || "PILOT", score: score, time: Math.round(runTime), date: new Date().toISOString().slice(0, 10), win: false });
  }
  stopMusic();
  playGameOver();
  updateStatus(victoryRank ? `RANK #${victoryRank} - Press Enter to play again.` : "Press Enter to play again.");
}

function finishBossFight() {
  waveClearing = true;
  level += 1;
  addScore(150);
  clearEnemyFire();
  playerBullets = [];
  bombShots = [];
  playLevelClear();
  setMusic(7);
  state = "choices";
  upgradeChoices = buildUpgradeChoices();
  upgradeSel = 0;
  showGameMessage("CHOOSE A PERMANENT UPGRADE", 2.2, "#ffe066");
  updateStatus("Click a card, arrows + Enter, or press 1, 2, 3.");
}

function buildUpgradeChoices() {
  return UPGRADE_TREES.map((tree) => {
    const level = Math.min(upgradeLevels[tree.id] + 1, tree.levels.length);
    const def = tree.levels[level - 1];
    return {
      treeId: tree.id,
      treeName: tree.name,
      level,
      label: def.label,
      desc: def.desc,
      text: `${tree.name} ${level}: ${def.label}`
    };
  });
}

function chooseUpgrade(index) {
  const choice = upgradeChoices[index];
  if (!choice) return;

  applyUpgrade(choice);
  upgradeChoices = [];
  waveClearing = false;
  nextWaveIsBoss = isFullBossWave(level);
  state = "waveBreak";
  waveBreakTimer = 1.7;
  showGameMessage(`UPGRADE: ${choice.text}`, 1.25, "#ffe066");
  updateStatus(`Permanent upgrade: ${choice.text}`);
}

function applyUpgrade(choice) {
  upgradeLevels[choice.treeId] = choice.level;

  if (choice.treeId === "offense") {
    permanentFireRateBonus = [0, 0.15, 0.3, 0.3, 0.3][choice.level] || 0.3;
    permanentDoubleShots = choice.level >= 3;
    permanentDamage = choice.level >= 4 ? 1 : 0;
    return;
  }

  if (choice.treeId === "defense") {
    if (choice.level >= 1) shieldRestoreDelay = 12;
    if (choice.level >= 2) shieldRestoreDelay = 9;
    if (choice.level >= 3) maxShieldHits = Math.max(maxShieldHits, 2);
    if (choice.level >= 4) {
      maxShieldHits = Math.max(maxShieldHits, 3);
      shieldRestoreDelay = 6;
    }
    shieldHits = Math.max(shieldHits, maxShieldHits);
    effects.shield = Math.max(effects.shield, 18);
    shieldRestoreTimer = 0;
    return;
  }

  if (choice.treeId === "mobility") {
    dashCooldown = Math.min(dashCooldown, mobilityDashCooldown());
  }
  updateDashHint();
}

function tryStart() {
  initAudio();
  if (state === "victory") { state = "ready"; return; }
  if (state !== "ready" && state !== "gameover") return;
  if (!effectiveName()) {
    window.__nameEditing = true;
    refreshNameWidgets();
    const input = document.getElementById("nameInput");
    if (input) input.focus();
    updateStatus("TYPE YOUR NAME FIRST");
    return;
  }
  startGame();
}

function pickUpgradeAt(event) {
  const rect = canvas.getBoundingClientRect();
  const mx = (event.clientX - rect.left) * (W / rect.width);
  const my = (event.clientY - rect.top) * (H / rect.height);
  for (let i = 0; i < upgradeChoices.length; i += 1) {
    const y = 225 + i * 70;
    if (mx > 82 && mx < W - 82 && my > y - 28 && my < y + 26) {
      upgradeSel = i;
      chooseUpgrade(i);
      return true;
    }
  }
  return false;
}

canvas.addEventListener("mousedown", (event) => {
  if (state === "choices" && pickUpgradeAt(event)) return;
  tryStart();
});

const nameStartBtn = document.getElementById("nameStart");
if (nameStartBtn) {
  nameStartBtn.addEventListener("click", () => {
    if (state === "ready") tryStart();
  });
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (["arrowleft", "arrowright", "arrowup", "arrowdown", " "].includes(event.key.toLowerCase()) || event.key === " ") {
    event.preventDefault();
  }

  initAudio();
  keys.add(key);

  if (handleTestKeys(key, event)) return;

  if (key === "w" && !event.repeat && state === "playing" && upgradeLevels.offense >= 1 && bombShots.length) {
    explodeBombShot(bombShots.shift());
    return;
  }

  if (event.shiftKey && state === "playing" && (key === "arrowleft" || key === "arrowright")) {
    tryDash(key === "arrowleft" ? -1 : 1);
    return;
  }

  if (key === "enter" && (state === "ready" || state === "gameover")) {
    if (key === "enter" && document.activeElement === document.getElementById("nameInput") && !effectiveName()) {
      updateStatus("TYPE YOUR NAME FIRST");
      return;
    }
    tryStart();
    return;
  }

  if (key === "enter" && state === "victory") {
    state = "ready";
    return;
  }

  if (key === "enter" && document.activeElement === document.getElementById("nameInput") &&
      (state === "ready" || state === "gameover")) {
    tryStart();
    return;
  }

  if (state === "choices" && ["1", "2", "3"].includes(key)) {
    chooseUpgrade(Number(key) - 1);
    return;
  }

  if (state === "choices" && (key === "arrowup" || key === "arrowleft")) {
    upgradeSel = (upgradeSel + upgradeChoices.length - 1) % upgradeChoices.length;
    return;
  }

  if (state === "choices" && (key === "arrowdown" || key === "arrowright")) {
    upgradeSel = (upgradeSel + 1) % upgradeChoices.length;
    return;
  }

  if (state === "choices" && key === "enter") {
    chooseUpgrade(upgradeSel);
    return;
  }

  if (key === "m") {
    toggleSfx();
    return;
  }

  if (key === "n") {
    toggleMusic();
    return;
  }

  if (key === "b") {
    toggleBoth();
    return;
  }

  if (key === "p") {
    if (state === "playing") state = "paused";
    else if (state === "paused") state = "playing";
    return;
  }

  if (key === " " && !event.repeat && state === "playing") {
    firePlayer();
  }

  if (key === "q" && !event.repeat && state === "playing") {
    useBomb();
  }
});

document.addEventListener("keyup", (event) => {
  keys.delete(event.key.toLowerCase());
});

init();
requestAnimationFrame(frame);

if (new URLSearchParams(location.search).has("selftest")) {
  setTimeout(() => {
    document.title = "SELFTEST started";
    startGame();
    const lvl = Number(new URLSearchParams(location.search).get("level") || 1);
    if (lvl > 1) {
      level = lvl;
      newWave();
    }
    setTimeout(() => {
      document.title = "SELFTEST spawned";
      spawnBoss();
      POWERUP_TYPES.forEach((type, i) => {
        spawnPowerupAt(120 + i * 70, 260, type, false, 40);
        if (type.id === "loot") {
          const last = powerups[powerups.length - 1];
          last.lootQuality = 2;
          last.lootType = POWERUP_TYPES[0];
        }
      });
      ufo = { x: W / 2 - 22, y: 120, w: 44, h: 18, hp: 2, maxHp: 2, vx: 40 };
      document.title = "SELFTEST ufod";
      setTimeout(() => {
        const report = {
          state,
          invaders: invaders.filter((i) => i.alive).length,
          powerups: powerups.length,
          boss: Boolean(boss),
          ufo: Boolean(ufo),
          iron3d: Boolean(window.Iron3D),
          meshes: window.Iron3D ? Iron3D.count() : 0,
          frames: window.__ironFrames || 0
        };
        window.__ironSample = true;
        window.__ironSamplePct = -1;
        setTimeout(() => {
          report.threeLivePct = window.__ironSamplePct;
          document.title = "SELFTEST " + JSON.stringify(report);
         }, 200);
        setTimeout(() => {
         try {
          const probe = document.createElement("canvas");
          probe.width = 90;
          probe.height = 60;
          const pg = probe.getContext("2d");
          pg.drawImage(document.getElementById("stage3d"), 0, 0, 90, 60);
          const d = pg.getImageData(0, 0, 90, 60).data;
          let lit = 0;
          for (let i = 3; i < d.length; i += 4) if (d[i] > 8) lit += 1;
          report.threePct = Math.round((lit / (90 * 60)) * 100);
          pg.clearRect(0, 0, 90, 60);
          pg.drawImage(document.getElementById("game"), 0, 0, 90, 60);
          const d2 = pg.getImageData(0, 0, 90, 60).data;
          let lit2 = 0;
          for (let i = 3; i < d2.length; i += 4) if (d2[i] > 8) lit2 += 1;
          report.twoPct = Math.round((lit2 / (90 * 60)) * 100);
          document.title = "SELFTEST " + JSON.stringify(report);
         } catch (err) {
          document.title = "SELFTESTPROBEFAIL " + String(err && err.message ? err.message : err);
         }
        });
        console.log("SELFTEST " + JSON.stringify(report));
        document.title = "SELFTEST " + JSON.stringify(report);
      }, 900);
    }, 900);
  }, 400);
}

