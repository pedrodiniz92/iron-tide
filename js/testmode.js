const TEST_FEATURES = [
  { id: "laserKey", label: "Press L = laser powerup", on: false },
  { id: "dropPower", label: "Shift+P = drop random powerup above you", on: false }
];

let testBossName = null;
const qBoss = new URLSearchParams(location.search).get("boss");
if (qBoss) testBossName = qBoss;

function applyTestLoadout() {
  bombInventory = 2;
  upgradeLevels.mobility = 1;
  upgradeLevels.defense = 1;
  maxShieldHits = Math.max(maxShieldHits, 1);
  addShieldHit();
  updateStatus("Test loadout: 2 bombs, DASH 1, SHIELD 1");
}

function spawnTestBoss() {
  if (state !== "playing" || bosses.length) return;
  spawnBoss();
}

let testPanelOpen = false;

function testFeatureOn(id) {
  const feature = TEST_FEATURES.find((item) => item.id === id);
  return Boolean(feature && feature.on);
}

function handleTestKeys(key, event) {
  const repeat = event.repeat;

  if (key === "`") {
    if (!document.getElementById("testPanel")) return false;
    toggleTestPanel();
    return true;
  }

  if (key === "l" && !repeat && state === "playing" && testFeatureOn("laserKey")) {
    laserCharges += 1;
    showFloatingMessage(`LASER x${laserCharges}`, player.x + player.w / 2, player.y - 18, 1.0, "#6fdcff");
    return true;
  }

  if (key === "p" && event.shiftKey && !repeat && state === "playing" && testFeatureOn("dropPower")) {
    const types = POWERUP_TYPES.filter((type) => type.id !== "loot");
    const type = types[Math.floor(Math.random() * types.length)];
    spawnPowerupAt(player.x + player.w / 2, player.y - 40, type);
    return true;
  }

  return false;
}

function toggleTestPanel() {
  const panel = document.getElementById("testPanel");
  if (!panel) return;
  testPanelOpen = !testPanelOpen;
  panel.style.display = testPanelOpen ? "block" : "none";
  if (testPanelOpen && state === "playing") state = "paused";
  if (!testPanelOpen && state === "paused") state = "playing";
}

function jumpToWave(target) {
  const prompt = document.getElementById("testUpgradePrompt");
  if (prompt) prompt.style.display = "none";
  level = target;
  testJumpLevel = level;
  newWave();
  nextWaveIsBoss = isFullBossWave(level);
  if (nextWaveIsBoss) {
    spawnBoss();
    nextWaveIsBoss = false;
  }
  updateStatus("Jumped to wave " + level);
}

function showUpgradePrompt(target, earned) {
  const box = document.getElementById("testUpgradePrompt");
  box.innerHTML = "";
  const title = document.createElement("div");
  title.textContent = `WAVE ${target}: you'd have ${earned} upgrade${earned > 1 ? "s" : ""} from killed bosses. Pick them:`;
  title.style.cssText = "color:#ffe066;margin-bottom:6px;";
  box.appendChild(title);

  const rows = [];
  for (let i = 0; i < earned; i += 1) {
    const row = document.createElement("div");
    row.style.cssText = "margin:4px 0;";
    const treeSel = document.createElement("select");
    treeSel.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
    UPGRADE_TREES.forEach((tree) => {
      const opt = document.createElement("option");
      opt.value = tree.id;
      opt.textContent = tree.name;
      treeSel.appendChild(opt);
    });
    const lvlSel = document.createElement("select");
    lvlSel.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
    for (let l = 1; l <= 3; l += 1) {
      const opt = document.createElement("option");
      opt.value = String(l);
      opt.textContent = "lvl " + l;
      lvlSel.appendChild(opt);
    }
    row.appendChild(treeSel);
    row.appendChild(lvlSel);
    box.appendChild(row);
    rows.push({ treeSel, lvlSel });
  }

  const startBtn = document.createElement("button");
  startBtn.textContent = `START WAVE ${target}`;
  startBtn.style.cssText = "display:block;margin-top:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#ffe066;border:1px solid #ffe066;cursor:pointer;";
  startBtn.addEventListener("click", () => {
    const taken = {};
    rows.forEach(({ treeSel, lvlSel }) => {
      const tree = UPGRADE_TREES.find((t) => t.id === treeSel.value);
      const want = Number(lvlSel.value);
      const level = Math.min(want, (taken[tree.id] || 0) + 1, tree.levels.length);
      taken[tree.id] = Math.max(taken[tree.id] || 0, level);
      applyUpgrade({ treeId: tree.id, level, text: `${tree.name} ${level}: ${tree.levels[level - 1].label}` });
    });
    if (testPanelOpen) toggleTestPanel();
    jumpToWave(target);
  });
  box.appendChild(startBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "CANCEL";
  cancelBtn.style.cssText = "display:block;margin-top:4px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  cancelBtn.addEventListener("click", () => { box.style.display = "none"; });
  box.appendChild(cancelBtn);

  box.style.display = "block";
}

function buildTestPanel() {
  const button = document.createElement("button");
  button.id = "testModeButton";
  button.textContent = "TEST";
  button.style.cssText = "position:fixed;top:8px;right:8px;z-index:20;padding:4px 10px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  button.addEventListener("click", toggleTestPanel);

  const panel = document.createElement("div");
  panel.id = "testPanel";
  panel.style.cssText = "position:fixed;top:36px;right:8px;z-index:20;display:none;padding:10px 12px;font:12px monospace;background:rgba(8,12,18,0.92);color:#cfefff;border:1px solid #2c5f7a;";

  const title = document.createElement("div");
  title.textContent = "TEST FEATURES";
  title.style.cssText = "margin-bottom:8px;color:#9ae6ff;";
  panel.appendChild(title);

  TEST_FEATURES.forEach((feature) => {
    const row = document.createElement("label");
    row.style.cssText = "display:block;margin:4px 0;cursor:pointer;";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = feature.on;
    box.addEventListener("change", () => { feature.on = box.checked; });
    row.appendChild(box);
    row.appendChild(document.createTextNode(" " + feature.label));
    panel.appendChild(row);
  });

  const bossRow = document.createElement("div");
  bossRow.style.cssText = "margin-top:10px;";
  const bossLabel = document.createElement("div");
  bossLabel.textContent = "BOSS SPAWNER";
  bossLabel.style.cssText = "color:#9ae6ff;margin-bottom:4px;";
  const select = document.createElement("select");
  select.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
  ["None"].concat(MINIBOSS_DESIGNS.map((d) => d.name), BOSS_DESIGNS.map((d) => d.name)).forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => { testBossName = select.value === "None" ? null : select.value; });
  const spawnBtn = document.createElement("button");
  spawnBtn.textContent = "SPAWN BOSS";
  spawnBtn.style.cssText = "display:block;margin-top:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  spawnBtn.addEventListener("click", spawnTestBoss);
  bossRow.appendChild(bossLabel);
  bossRow.appendChild(select);
  bossRow.appendChild(spawnBtn);
  panel.appendChild(bossRow);

  const waveRow = document.createElement("div");
  waveRow.style.cssText = "margin-top:10px;";
  const waveLabel = document.createElement("div");
  waveLabel.textContent = "WAVE JUMP";
  waveLabel.style.cssText = "color:#9ae6ff;margin-bottom:4px;";
  const waveSelect = document.createElement("select");
  waveSelect.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
  for (let w = 1; w <= 12; w += 1) {
    const opt = document.createElement("option");
    opt.value = String(w);
    opt.textContent = "WAVE " + w;
    waveSelect.appendChild(opt);
  }
  const waveBtn = document.createElement("button");
  waveBtn.textContent = "JUMP TO WAVE";
  waveBtn.style.cssText = "display:block;margin-top:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  waveBtn.addEventListener("click", () => {
    const target = Number(waveSelect.value) || 1;
    const earned = Math.floor((target - 1) / 3);
    if (earned > 0) showUpgradePrompt(target, earned);
    else jumpToWave(target);
  });
  waveRow.appendChild(waveLabel);
  waveRow.appendChild(waveSelect);
  waveRow.appendChild(waveBtn);
  panel.appendChild(waveRow);

  const promptBox = document.createElement("div");
  promptBox.id = "testUpgradePrompt";
  promptBox.style.cssText = "display:none;margin-top:8px;padding:8px;border:1px solid #ffe066;background:rgba(24,18,4,0.9);";
  waveRow.appendChild(promptBox);

  const permaRow = document.createElement("div");
  permaRow.style.cssText = "margin-top:10px;";
  const permaLabel = document.createElement("div");
  permaLabel.textContent = "PERMANENT UPGRADE";
  permaLabel.style.cssText = "color:#9ae6ff;margin-bottom:4px;";
  const permaSelect = document.createElement("select");
  permaSelect.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
  UPGRADE_TREES.forEach((tree) => {
    tree.levels.forEach((lvl, i) => {
      const opt = document.createElement("option");
      opt.value = tree.id + ":" + (i + 1);
      opt.textContent = tree.name + " " + (i + 1) + ": " + lvl.label;
      permaSelect.appendChild(opt);
    });
  });
  const permaBtn = document.createElement("button");
  permaBtn.textContent = "APPLY UPGRADE";
  permaBtn.style.cssText = "display:block;margin-top:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  permaBtn.addEventListener("click", () => {
    const [treeId, lvl] = permaSelect.value.split(":");
    applyUpgrade({ treeId, level: Number(lvl) });
    updateStatus("Applied " + permaSelect.options[permaSelect.selectedIndex].text);
  });
  permaRow.appendChild(permaLabel);
  permaRow.appendChild(permaSelect);
  permaRow.appendChild(permaBtn);
  panel.appendChild(permaRow);

  const loadBtn = document.createElement("button");
  loadBtn.textContent = "LOADOUT: 2 BOMBS, DASH 1, SHIELD 1";
  loadBtn.style.cssText = "display:block;margin-top:8px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  loadBtn.addEventListener("click", applyTestLoadout);
  panel.appendChild(loadBtn);

  const hint = document.createElement("div");
  hint.textContent = "toggle panel: `";
  hint.style.cssText = "margin-top:8px;color:#6a8fa5;";
  panel.appendChild(hint);

  document.body.appendChild(button);
  document.body.appendChild(panel);
}

buildTestPanel();
