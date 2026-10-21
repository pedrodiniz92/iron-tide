const frame3D = [];

function push3D(entry) {
  if (window.Iron3D) frame3D.push(entry);
  return !!window.Iron3D;
}

function draw() {
  frame3D.length = 0;
  ctx.clearRect(0, 0, W, H);

  drawGround();
  drawHud();

  if (state !== "playing") screenShake = 0;
  ctx.save();
  if (screenShake > 0) {
    const s = Math.min(screenShake, 18);
    ctx.translate((Math.random() - 0.5) * s, (Math.random() - 0.5) * s);
  }
  drawShields();
  drawInvaders();
  drawFrenzy()
  drawBoss();
  drawUfo();
  drawPowerups();
  drawBombShots();
  drawLaserBeams();
  drawEnemyBombs();
  drawSpikeMines();
  drawBullets();
  drawPlayer();
  drawShockwaves();
  drawExplosions();
  drawScorePopups();
  drawGameMessages();
  ctx.restore();

  if (window.Iron3D) {
    Iron3D.sync(frame3D);
    Iron3D.render(performance.now());
  }

  if (state === "playing") {
    hideOverlay();
  } else if (state === "ready") {
    showOverlay("IRON TIDE", "Press Enter, click to start");
    showStartExtras();
  } else if (state === "victory") {
    showOverlay("YOU BEAT IT", "");
    overlaySub.innerHTML = "The Iron Tide is broken.<br>SCORE " + score +
      " &middot; TIME " + formatTime(runTime) + " &middot; RANK #" + victoryRank +
      "<br><br>Press <kbd>Enter</kbd> for the board";
  } else if (state === "gameover") {
    showOverlay("GAME OVER", `Score ${score} · Press Enter`);
  } else if (state === "paused") {
    showOverlay("PAUSED", "");
    overlaySub.innerHTML = controlsText() + "<br><br>Press <kbd>P</kbd> to continue";
    if (pauseToggles) pauseToggles.style.display = "flex";
  } else if (state === "choices") {
    hideOverlay();
    drawUpgradeChoices();
  } else if (state === "waveBreak") {
    hideOverlay();
  }
}

function drawHud() {
  ctx.fillStyle = COLORS.hud;
  ctx.font = "16px 'Courier New', monospace";

  if (hudScoreEl) hudScoreEl.textContent = `SCORE ${score}`;
  if (hudHiEl) hudHiEl.textContent = `HI ${highScore}`;
  if (hudWaveEl) hudWaveEl.textContent = `WAVE ${level}`;
  if (hudLivesEl) hudLivesEl.textContent = `LIVES ${lives}`;

  const active = [];
  if (effects.rapid > 0) active.push(`RAPID FIRE ${Math.ceil(effects.rapid)}s`);
  if (effects.double > 0) active.push(`DOUBLE SHOT ${Math.ceil(effects.double)}s`);
  if (effects.laser > 0) active.push(`LASER ${Math.ceil(effects.laser)}s`);
  if (effects.shield > 0) {
    active.push(Number.isFinite(effects.shield)
      ? `SHIELD ${Math.ceil(effects.shield)}s x${shieldHits}`
      : `SHIELD x${shieldHits}`);
  }
  if (effects.slow > 0) active.push(`TIME WARP ${Math.ceil(effects.slow)}s`);
  if (active.length) ctx.fillText(`POWER ${active.join(" ")}`, 16, 44);

  const upgrades = [];
  if (upgradeLevels.offense > 0) upgrades.push(`OFF ${upgradeLevels.offense}`);
  if (upgradeLevels.defense > 0) upgrades.push(`SHIELD ${upgradeLevels.defense}`);
  if (upgradeLevels.mobility > 0) {
    upgrades.push(`MOB ${upgradeLevels.mobility}`);
    upgrades.push(dashCooldown <= 0 ? "DASH READY" : `DASH ${Math.ceil(dashCooldown * 10) / 10}s`);
  }
  if (shieldRestoreTimer > 0) upgrades.push(`RESTORE ${Math.ceil(shieldRestoreTimer)}s`);
  if (invulnerabilityTimer > 0) upgrades.push(`RESPAWN ${Math.ceil(invulnerabilityTimer * 10) / 10}s`);
  if (upgrades.length) {
    ctx.fillStyle = "#cfe8d4";
    ctx.font = "13px 'Courier New', monospace";
    ctx.fillText(upgrades.join(" · "), 16, 58);
    ctx.font = "16px 'Courier New', monospace";
  }

  if (comboMultiplier > 1) {
    ctx.fillStyle = "#ffe066";
    ctx.font = "bold 15px 'Courier New', monospace";
    ctx.fillText(`COMBO x${comboMultiplier}`, W / 2 - 46, 42);
    ctx.font = "16px 'Courier New', monospace";
  }

  if (comboActive()) {
    const bx = W / 2 - 46;
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(bx, 48, 92, 4);
    ctx.fillStyle = comboMultiplier > 1 ? "#ffe066" : "#9ae6ff";
    ctx.fillRect(bx, 48, 92 * comboMeter, 4);
  }
  drawBombHud();
}

function drawRoundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawBombHud() {
  const active = bombInventory > 0;
  const color = active ? "#ffe066" : "#666";
  const x = W - 144;
  const y = 34;

  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(x + 10, y + 10, 9, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x + 18, y + 2);
  ctx.quadraticCurveTo(x + 25, y - 4, x + 30, y - 1);
  ctx.stroke();

  ctx.fillStyle = active ? "#ff7a00" : "#666";
  ctx.beginPath();
  ctx.arc(x + 31, y - 1, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color;
  ctx.font = "bold 15px 'Courier New', monospace";
  ctx.textAlign = "left";
  ctx.fillText(`(x${bombInventory})`, x + 38, y + 14);

  drawRoundRect(x + 84, y - 1, 28, 24, 4);
  ctx.fillStyle = "#151515";
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.font = "bold 15px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText("Q", x + 98, y + 16);

  ctx.textAlign = "left";
  ctx.lineWidth = 1;
  ctx.restore();
}

function drawGround() {
  ctx.strokeStyle = "#246b24";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, H - 38);
  ctx.lineTo(W, H - 38);
  ctx.stroke();
}

function drawPlayer() {
  const invulnBlink = invulnerabilityTimer > 0 && Math.floor(invulnerabilityTimer * 14) % 2 === 0;
  ctx.save();
  dashGhosts.forEach((ghost) => {
    ctx.globalAlpha = (ghost.ttl / 0.25) * 0.35;
    neon("classic", ghost.x + player.w / 2, ghost.y + 15, player.w, COLORS.player);
  });
  ctx.globalAlpha = invulnBlink ? 0.42 : 1;

  if (mobilityLevel() >= 1 && dashCooldown > 0) {
    const heat = Math.max(0, 1 - dashCooldown / mobilityDashCooldown());
    neonFlame(player.x + player.w / 2, player.y + player.h - 2, 6 + heat * 12,
      `rgba(102, 136, 170, ${0.3 + heat * 0.7})`);
  }
  if (!push3D({ id: "player", key: "player", x: player.x, y: player.y, w: player.w, h: player.h,
    color: COLORS.player, rot: [-Math.PI / 2, 0, 0], tilt: 0 })) {
    neon("classic", player.x + player.w / 2, player.y + player.h / 2, player.w, COLORS.player);
  }
  if (mobilityLevel() >= 1 && dashCooldown <= 0) {
    ctx.fillStyle = "#2a3038";
    ctx.fillRect(player.x + player.w / 2 - 5, player.y + 22, 10, 2);
  }

  if (invulnerabilityTimer > 0) {
    ctx.strokeStyle = "rgba(120, 255, 120, 0.75)";
    ctx.lineWidth = 3;
    ctx.strokeRect(player.x - 10, player.y - 10, player.w + 20, player.h + 20);
    ctx.lineWidth = 1;
  }

  if (effects.shield > 0 && shieldHits > 0) {
    const layers = Math.min(shieldHits, maxShieldHits);
    ctx.lineWidth = 2;
    for (let i = 0; i < layers; i++) {
      const inset = 9 + i * 7;
      const alpha = 0.72 - i * 0.11;
      ctx.strokeStyle = i === layers - 1
        ? `rgba(180, 255, 220, ${alpha})`
        : `rgba(98, 255, 161, ${alpha})`;
      ctx.strokeRect(
        player.x - inset,
        player.y - inset,
        player.w + inset * 2,
        player.h + inset * 2
      );
    }
    ctx.lineWidth = 1;
  }
  ctx.restore();
}

function drawSprite(sprite, x, y, scale, color) {
  ctx.fillStyle = color;
  for (let row = 0; row < sprite.length; row += 1) {
    for (let col = 0; col < sprite[row].length; col += 1) {
      if (sprite[row][col] === "1") {
        ctx.fillRect(x + col * scale, y + row * scale, scale, scale);
      }
    }
  }
}

function drawInvaders() {
  invaders.forEach((invader) => {
    if (!invader.alive) return;
    if (push3D({ id: "inv" + invader.id, key: invader.type.name, x: invader.x, y: invader.y,
      w: invader.w, h: invader.h, color: invader.type.color, phase: invader.x * 0.02,
      alpha: invader.ghostAlpha === undefined ? 1 : invader.ghostAlpha, glow: invader.frenzied,
      crack: (invader.maxHp || 1) >= 2 && (invader.hp || 1) < 2 })) {
      // model drawn on the 3D layer
    } else {
      const shapeName = invader.type.name === "octopus" ? "octo" : invader.type.name;
      const fitW = invader.h * (SIL[shapeName].bb.w / SIL[shapeName].bb.h);
      ctx.globalAlpha = invader.ghostAlpha === undefined ? 1 : invader.ghostAlpha;
      if (invader.frenzied) {
        ctx.shadowColor = "#ff4455";
        ctx.shadowBlur = 16;
      }
      neon(shapeName, invader.x + invader.w / 2, invader.y + invader.h / 2, Math.min(invader.w, fitW * 1.35),
        invader.frenzied ? "#ff2f4f" : invader.type.color);
      const eyeR = Math.max(2.1, invader.w * 0.068);
      const eyeY = invader.y + invader.h * 0.38;
      ctx.beginPath();
      ctx.arc(invader.x + invader.w * 0.33, eyeY, eyeR, 0, Math.PI * 2);
      ctx.arc(invader.x + invader.w * 0.67, eyeY, eyeR, 0, Math.PI * 2);
      ctx.fillStyle = "#0d0d14";
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "rgba(0,0,0,0)";
    }
    if ((invader.hp || 1) > 1) {

    }

  });
}

function drawFrenzy() {
  if (!frenzyZones.length) return;
  const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 110);
  ctx.save();
  frenzyZones.forEach((zone) => {
    const fade = Math.min(1, zone.t / 0.6);
    ctx.globalAlpha = (0.16 + 0.12 * pulse) * fade;
    ctx.strokeStyle = "#ff4455";
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 8]);
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, zone.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 0.8 * fade;
    ctx.fillStyle = "#ff4455";
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.fillText("!", zone.sx, zone.sy - 26);

  });
  ctx.restore();
}

function drawInvaderArmor(invader) {
  const cx = invader.x + invader.w / 2;
  const y = invader.y + invader.h - 3;
  const w = invader.w * 0.66;
  const up = (invader.hp || 1) >= 2;
  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 4;
  if (up) {
    ctx.shadowColor = "#8fd8ff";
    ctx.shadowBlur = 10;
    ctx.strokeStyle = "#c8dcf2";
    ctx.beginPath();
    ctx.moveTo(cx - w / 2, y - 7);
    ctx.lineTo(cx, y);
    ctx.lineTo(cx + w / 2, y - 7);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#7fb8d8";
    ctx.beginPath();
    ctx.moveTo(cx - w / 3, y - 9);
    ctx.lineTo(cx, y - 3);
    ctx.lineTo(cx + w / 3, y - 9);
    ctx.stroke();
  } else {
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "#5a6678";
    ctx.beginPath();
    ctx.moveTo(cx - w / 2, y - 7);
    ctx.lineTo(cx - 3, y - 1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + 3, y - 1);
    ctx.lineTo(cx + w / 2, y - 7);
    ctx.stroke();
    ctx.globalAlpha = 0.45;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - w / 6, y - 10);
    ctx.lineTo(cx - w / 10, y - 2);
    ctx.stroke();
  }
  ctx.restore();
}

function invaderHitColor(invader) {
  return (invader.hp || 1) > 0 ? "#ffffff" : invader.type.color;
}

function drawUfo() {
  if (!ufo) return;
  const sx = ufo.w / 44;
  const sy = ufo.h / 18;
  const ufoCx = ufo.x + 22 * sx;
  const ufoCy = ufo.y + 10 * sy;
  if (!push3D({ id: "ufo", key: "ufo", x: ufo.x - 10, y: ufo.y - 14, w: ufo.w + 20, h: ufo.h + 28,
    color: COLORS.ufo, rot: [0.5, 0, 0], tilt: 0.3, fit: 1.25, phase: 0.4 })) {
    neon("ufo", ufoCx, ufoCy, ufo.w * 0.92, COLORS.ufo);
    ctx.fillStyle = "#ffe9a8";
    [[-14, 5], [0, 8], [14, 5]].forEach((p) => {
      ctx.beginPath();
      ctx.arc(ufoCx + p[0] * sx, ufoCy + p[1] * sy, 2.4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const ufoHp = Math.max(0, ufo.hp || 1);
  const ufoMaxHp = Math.max(1, ufo.maxHp || 1);
  if (window.Iron3D && ufoHp > 1) {
    for (let i = 0; i < ufoHp; i += 1) {
      ctx.fillStyle = i === ufoHp - 1 && ufoHp < ufoMaxHp ? "#ffffff" : "#ff55aa";
      ctx.fillRect(ufoCx - 8 + i * 7, ufo.y - 12, 5, 5);
    }
  }
}

function drawDoubleShotIcon(cx, cy, color) {
  const arrows = [
    [[17, 8], [24, 22], [20, 22], [20, 37], [14, 37], [14, 22], [10, 22]],
    [[31, 8], [38, 22], [34, 22], [34, 37], [28, 37], [28, 22], [24, 22]]
  ];

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(0.42, 0.42);
  ctx.translate(-24, -24);
  ctx.fillStyle = color;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 5;

  arrows.forEach((arrow) => {
    ctx.beginPath();
    arrow.forEach(([x, y], index) => {
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  ctx.restore();
}

function drawPowerups() {
  powerups.forEach((powerup) => {
    const cx = powerup.x + powerup.w / 2;
    const cy = powerup.y + powerup.h / 2;
    const color = powerup.type.color;
    const expiring = Number.isFinite(powerup.ttl) && powerup.ttl < 1.8;
    const alpha = expiring ? Math.max(0.25, 0.55 + Math.sin(Date.now() / 65) * 0.25) : 1;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowBlur = 16;
    ctx.shadowColor = color;

    if (!push3D({ id: "pow" + (powerups.indexOf(powerup)), key: powerup.type.id, x: cx - 15, y: cy - 15,
      w: 30, h: 30, color, quality: powerup.lootQuality, flicker: expiring, phase: cx * 0.05 })) {
      neon("box", cx, cy, 26, color);
      const label = powerup.type.id === "loot"
        ? (powerup.lootType ? powerup.lootType.label : "?")
        : powerup.type.label || "!";
      ctx.fillStyle = "#0d0d14";
      ctx.font = "bold 15px 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.fillText(label, cx, cy + 5);
      ctx.textAlign = "left";
      ctx.font = "14px 'Courier New', monospace";
      ctx.lineWidth = 1;
      if (powerup.type.id === "loot") {
        const q = powerup.lootQuality || 1;
        ctx.strokeStyle = q >= 3 ? "#ff3366" : q >= 2 ? "#62ffa1" : "#ffe066";
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 15, cy - 15, 30, 30);
        ctx.lineWidth = 1;
      }
    }
    ctx.restore();
    return;

    ctx.fillStyle = color;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;

    if (powerup.type.id === "bomb") {
      ctx.beginPath();
      ctx.arc(cx, cy + 2, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "#ffe66a";
      ctx.beginPath();
      ctx.moveTo(cx + 4, cy - 7);
      ctx.quadraticCurveTo(cx + 11, cy - 12, cx + 8, cy - 17);
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(cx + 8, cy - 17, 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (powerup.type.id === "shield") {
      ctx.beginPath();
      ctx.moveTo(cx, cy - 11);
      ctx.lineTo(cx + 9, cy - 6);
      ctx.lineTo(cx + 7, cy + 8);
      ctx.lineTo(cx, cy + 12);
      ctx.lineTo(cx - 7, cy + 8);
      ctx.lineTo(cx - 9, cy - 6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (powerup.type.id === "laser") {
      const a0 = ctx.globalAlpha;
      ctx.lineCap = "round";
      ctx.strokeStyle = color;
      ctx.globalAlpha = a0 * 0.25;
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 12);
      ctx.lineTo(cx, cy - 12);
      ctx.stroke();
      ctx.globalAlpha = a0 * 0.6;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 12);
      ctx.lineTo(cx, cy - 12);
      ctx.stroke();
      ctx.globalAlpha = a0;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 12);
      ctx.lineTo(cx, cy - 12);
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cx, cy + 10, 4, 0, Math.PI * 2);
      ctx.fill();
    } else if (powerup.type.id === "rapid") {
      ctx.beginPath();
      ctx.moveTo(cx - 2, cy - 12);
      ctx.lineTo(cx - 11, cy + 2);
      ctx.lineTo(cx - 3, cy + 2);
      ctx.lineTo(cx + 2, cy + 12);
      ctx.lineTo(cx + 11, cy - 2);
      ctx.lineTo(cx + 3, cy - 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (powerup.type.id === "double") {
      drawDoubleShotIcon(cx, cy, color);
    } else if (powerup.type.id === "loot") {
      const quality = powerup.lootQuality || 1;
      const qualityColor = quality >= 3 ? "#ff3366" : quality >= 2 ? "#62ffa1" : "#ffe066";
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.rect(cx - 11, cy - 8, 22, 16);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = qualityColor;
      ctx.strokeRect(cx - 13, cy - 10, 26, 20);
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy - 8);
      ctx.lineTo(cx, cy + 8);
      ctx.moveTo(cx - 11, cy - 2);
      ctx.lineTo(cx + 11, cy - 2);
      ctx.stroke();
      ctx.fillStyle = "#2b2b0e";
      ctx.fillRect(cx - 3, cy - 3, 6, 4);
      ctx.fillStyle = powerup.lootType ? powerup.lootType.color : "#ffffff";
      ctx.font = "13px 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.fillText(powerup.lootType ? powerup.lootType.label : "?", cx, cy + 22);
      ctx.textAlign = "left";
      ctx.font = "14px 'Courier New', monospace";
    } else {
      ctx.beginPath();
      ctx.moveTo(cx - 8, cy - 10);
      ctx.lineTo(cx + 8, cy - 10);
      ctx.lineTo(cx + 2, cy);
      ctx.lineTo(cx + 8, cy + 10);
      ctx.lineTo(cx - 8, cy + 10);
      ctx.lineTo(cx - 2, cy);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    ctx.lineWidth = 1;
    ctx.restore();
  });
}

function drawBombShots() {
  bombShots.forEach((shot) => {
    (shot.trail || []).forEach((point) => {
      const alpha = Math.max(0, point.ttl / 0.28);
      ctx.fillStyle = `rgba(255, 153, 0, ${alpha * 0.55})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4 + alpha * 5, 0, Math.PI * 2);
      ctx.fill();
    });

    neonFlame(shot.x + shot.w / 2, shot.y + 2, 10, "rgba(255, 159, 28, 0.9)");
    neon("bomb", shot.x + shot.w / 2, shot.y + shot.h / 2, shot.w, "#ffe066");
  });
}

function drawLaserBeams() {
  laserBeams.forEach((beam) => {
    const startX = beam.x;
    const startY = player.y;
    const endX = beam.x;
    const endY = 0;
    const alpha = beam.ttl > 0 ? 1 : Math.max(0, beam.fade / beam.fadeMax);
    const tickFlash = beam.damageTimer < 0.12 ? 1.25 : 1;

    ctx.save();
    ctx.globalAlpha = alpha * 0.18;
    ctx.strokeStyle = "#6fdcff";
    ctx.lineWidth = 18 * tickFlash;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.globalAlpha = alpha * 0.55;
    ctx.lineWidth = 8 * tickFlash;
    ctx.strokeStyle = "#6fdcff";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.globalAlpha = Math.min(1, alpha * 1.35);
    ctx.lineWidth = 2.5 * tickFlash;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.globalAlpha = alpha * 0.8;
    ctx.fillStyle = "#6fdcff";
    ctx.beginPath();
    ctx.arc(startX, startY, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  });
}

function drawEnemyBombs() {
  enemyBombs.forEach((bomb) => {
    const cx = bomb.x + bomb.w / 2;
    const cy = bomb.y + bomb.h / 2;

    (bomb.trail || []).forEach((point) => {
      const alpha = Math.max(0, point.ttl / 0.28);
      ctx.fillStyle = `rgba(255, 153, 0, ${alpha * 0.55})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4 + alpha * 5, 0, Math.PI * 2);
      ctx.fill();
    });

    neon("bomb", cx, cy, bomb.w, "#ffe066");
  });
}

function drawSpikeMines() {
  spikeMines.forEach((mine) => {
    const cx = mine.x + mine.w / 2;
    const cy = mine.y + mine.h / 2;
    ctx.save();
    neon("mine", cx, cy, 24, "#2fc96f");
    ctx.restore();
  });
}

function drawBullets() {
  playerBullets.forEach((bullet) => {
    neon("bullet", bullet.x + bullet.w / 2, bullet.y + bullet.h / 2, Math.max(5, bullet.w + 2), COLORS.bullet);
  });

  enemyBullets.forEach((bullet) => {
    const col = bullet.color || (bullet.fromBoss ? "#ff3366" : COLORS.enemyBullet);
    const cx = bullet.x + bullet.w / 2;

    ctx.save();
    ctx.translate(cx, bullet.y + bullet.h / 2);
    ctx.rotate(Math.atan2(-(bullet.vx || 0), bullet.vy || 560));
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = col;
    ctx.fillRect(-1, -bullet.h / 2 - 14, 3, 8);
    ctx.globalAlpha = 0.45;
    ctx.fillRect(-1, -bullet.h / 2 - 6, 3, 6);
    ctx.globalAlpha = 1;
    neon("ebolt", 0, 0, Math.max(8, bullet.w + 4), col);
    ctx.restore();
  });
}

function drawShields() {
  shields.forEach((shield) => {
    shield.cells.forEach((cell) => {
      ctx.fillStyle = cell.hp > 1 ? COLORS.shield : "#175017";
      ctx.fillRect(cell.x, cell.y, cell.w, cell.h);
    });
  });
}

function updateShockwaves(dt) {
  shockwaves.forEach((wave) => {
    wave.ttl -= dt;
  });
  shockwaves = shockwaves.filter((wave) => wave.ttl > 0);
}

function addShockwave(x, y, maxRadius) {
  shockwaves.push({
    x,
    y,
    maxRadius,
    radius: 12,
    ttl: 0.48,
    maxTtl: 0.48
  });
}

function drawShockwaves() {
  shockwaves.forEach((wave) => {
    const progress = 1 - wave.ttl / wave.maxTtl;
    const radius = wave.radius + wave.maxRadius * progress;
    ctx.strokeStyle = `rgba(255, 224, 102, ${Math.max(0, wave.ttl / wave.maxTtl)})`;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(wave.x, wave.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = `rgba(255, 102, 0, ${Math.max(0, (wave.ttl / wave.maxTtl) * 0.7)})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(wave.x, wave.y, radius * 0.78, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 1;
  });
}

function drawExplosions() {
  explosions.forEach((explosion) => {
    const age = 0.38 - explosion.ttl;
    const squashEnd = explosion.squash ? 0.1 : 0;
    ctx.save();
    ctx.translate(explosion.x, explosion.y);
    if (explosion.squash && age < squashEnd) {
      const s = age / squashEnd;
      ctx.save();
      ctx.scale(1 - 0.45 * s, 1 - 0.45 * s);
      neon(explosion.squash.name, 0, 0, explosion.squash.w, explosion.squash.color);
      ctx.restore();
    }
    const p = Math.max(0, (age - squashEnd) / (0.38 - squashEnd));
    ctx.globalAlpha = 1 - p;
    ctx.fillStyle = explosion.color;
    const size = 3 - 2 * p;
    for (let i = 0; i < 4; i += 1) {
      ctx.save();
      ctx.rotate(i * Math.PI / 2 + 0.4);
      ctx.fillRect(4 + p * 14, -size / 2, size, size);
      ctx.restore();
    }
    ctx.restore();
  });
}

function drawScorePopups() {
  scorePopups.forEach((popup) => {
    const alpha = Math.max(0, popup.ttl / popup.maxTtl);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = popup.color;
    ctx.font = `bold ${12 + Math.min(8, popup.points / 18)}px 'Courier New', monospace`;
    ctx.textAlign = "center";
    ctx.fillText(`+${popup.points}`, popup.x, popup.y);
    ctx.textAlign = "start";
    ctx.globalAlpha = 1;
  });
}

function showStartExtras() {
  const box = document.getElementById("startExtras");
  const nameEl = document.getElementById("nameInput");
  const board = document.getElementById("boardTop");
  if (!box || !board) return;
  box.style.display = "block";
  refreshNameWidgets();
  board.innerHTML = "";
  loadScores().slice(0, 10).forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry.name + " - " + entry.score + " - " + formatTime(entry.time);
    if (entry.name === loadName()) li.className = "you";
    board.appendChild(li);
  });
  if (!board.children.length) {
    const li = document.createElement("li");
    li.textContent = "no runs yet - beat the TURTLE BULWARK on wave 9";
    board.appendChild(li);
  }
}

function drawGameMessages() {
  gameMessages.forEach((message, index) => {
    const alpha = Math.max(0, Math.min(1, message.ttl / Math.max(0.2, message.maxTtl * 0.45)));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textAlign = "center";
    ctx.shadowBlur = 22;
    ctx.shadowColor = message.color;
    ctx.lineWidth = 6;
    ctx.strokeStyle = "rgba(0,0,0,0.78)";
    ctx.fillStyle = message.color;
    ctx.font = "bold 30px 'Courier New', monospace";
    const lines = String(message.text).split("\n");
    lines.forEach((line, lineIndex) => {
      const lineY = message.y + index * 34 + lineIndex * 32;
      ctx.shadowBlur = 22;
      ctx.fillText(line, message.x, lineY);
      ctx.shadowBlur = 0;
      ctx.strokeText(line, message.x, lineY);
      ctx.fillText(line, message.x, lineY);
    });
    ctx.restore();
  });
}

function drawUpgradeChoices() {
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.72)";
  ctx.fillRect(46, 120, W - 92, 360);
  ctx.strokeStyle = "#66ff66";
  ctx.strokeRect(46, 120, W - 92, 360);
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffe066";
  ctx.font = "bold 24px 'Courier New', monospace";
  ctx.fillText("CHOOSE A PERMANENT UPGRADE", W / 2, 152);
  ctx.fillStyle = "#cfe8d4";
  ctx.font = "14px 'Courier New', monospace";
  ctx.fillText("Click a card, arrows + Enter, or press 1, 2, 3.", W / 2, 174);

  upgradeChoices.forEach((choice, index) => {
    const y = 225 + index * 70;
    const selected = index === upgradeSel;
    ctx.fillStyle = selected ? "rgba(40,60,0,0.7)" : "rgba(0,40,0,0.55)";
    ctx.fillRect(82, y - 28, W - 164, 54);
    ctx.strokeStyle = selected ? "#ffe066" : "#66ff66";
    ctx.lineWidth = selected ? 3 : 1;
    ctx.strokeRect(82, y - 28, W - 164, 54);
    ctx.lineWidth = 1;
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 18px 'Courier New', monospace";
    ctx.textAlign = "left";
    ctx.fillText(`${index + 1}. ${choice.text}`, 104, y - 4);
    ctx.fillStyle = "#a6ffa6";
    ctx.font = "14px 'Courier New', monospace";
    ctx.fillText(choice.desc, 104, y + 16);
  });

  ctx.restore();
}

function refreshNameWidgets() {
  const input = document.getElementById("nameInput");
  const label = document.getElementById("nameLabel");
  const who = document.getElementById("nameWho");
  const change = document.getElementById("changeName");
  if (!input || !label || !who || !change) return;
  const saved = loadName() === "PILOT" ? "" : loadName();
  const editing = window.__nameEditing === true || !saved;
  window.__nameEditing = editing;
  input.style.display = editing ? "inline-block" : "none";
  label.style.display = editing ? "none" : "block";
  change.style.display = editing ? "none" : "inline-block";
  who.textContent = saved;
  if (editing && !input.value) input.value = saved;
}

function effectiveName() {
  const input = document.getElementById("nameInput");
  if (window.__nameEditing && input) return input.value.trim().slice(0, 12);
  return loadName() === "PILOT" ? "" : loadName();
}

const changeNameBtn = document.getElementById("changeName");
if (changeNameBtn) {
  changeNameBtn.addEventListener("click", () => {
    window.__nameEditing = true;
    refreshNameWidgets();
    const input = document.getElementById("nameInput");
    if (input) {
      input.value = loadName() === "PILOT" ? "" : loadName();
      input.focus();
      input.select();
    }
  });
}
