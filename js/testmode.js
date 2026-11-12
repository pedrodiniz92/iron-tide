const TEST_FEATURES = [
  { id: "laserKey", label: "Press L = laser powerup", on: false },
  { id: "dropPower", label: "Shift+P = drop random powerup above you", on: false }
];

let testBossName = null;
// The ?boss= URL param is a page-session facility: startGame() restores this
// into testBossName so the URL keeps working across restarts.
let urlBossName = null;

// Any test-panel entry that touches the run makes it ineligible for the
// leaderboard and the stored hi-score. The taint is one-way: it persists for
// the rest of the run and is cleared by the next startGame().
let runTainted = false;

function taintRun() {
  const fresh = !runTainted;
  runTainted = true;
  if (fresh && runIsLive()) showGameMessage(t("TEST RUN: NO SCORES SAVED"), 2.4, "#ff9a6a");
}

const qBoss = new URLSearchParams(location.search).get("boss");
if (qBoss) {
  testBossName = qBoss;
  urlBossName = qBoss;
  runTainted = true;
}

function spawnTestBoss() {
  if (state !== "playing" || bosses.length) return;
  taintRun();
  spawnBoss();
}

let testPanelOpen = false;
// The state the panel froze (null when it froze nothing), so closing it resumes
// exactly that pause: never a run the player paused with `p`, and a wave break
// resumes as a wave break.
let panelPausedFrom = null;

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
    taintRun();
    laserCharges += 1;
    showFloatingMessage(t("LASER x{n}", { n: laserCharges }), player.x + player.w / 2, player.y - 18, 1.0, "#6fdcff");
    return true;
  }

  if (key === "p" && event.shiftKey && !repeat && state === "playing" && testFeatureOn("dropPower")) {
    taintRun();
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
  if (testPanelOpen) {
    // Freeze the run while the panel is open, including between waves, and
    // remember which state it froze. "playing" is not a safe answer for a wave
    // break: the break leaves waveClearing set, and checkWaveClear() ignores a
    // "playing" run flagged that way, so the run would sit in an empty field
    // with no wave to come.
    if (state === "playing" || state === "waveBreak") {
      panelPausedFrom = state;
      state = "paused";
    }
  } else if (panelPausedFrom) {
    state = panelPausedFrom;
    panelPausedFrom = null;
  }
}

function runIsLive() {
  return state === "playing" || state === "paused" || state === "waveBreak" || state === "choices";
}

function jumpToWave(target) {
  taintRun();
  const prompt = document.getElementById("testUpgradePrompt");
  if (prompt) prompt.style.display = "none";
  if (!runIsLive()) {
    testJumpLevel = target;
    startGame(true);
  } else {
    level = target;
    testJumpLevel = 0;
    newWave();
  }
  nextWaveIsBoss = isFullBossWave(level);
  if (nextWaveIsBoss) {
    spawnBoss();
    nextWaveIsBoss = false;
  }
  // startGame() above clears the taint, so re-arm it on every path that
  // starts or jumps a run: a wave jump is a test facility and must never rank.
  taintRun();
  // A jump starts a fresh wave, so the wave-clear flag left behind by the wave
  // being skipped must not carry over: newWave() does not clear it, and a
  // "playing" run flagged as clearing can never advance to the next wave.
  waveClearing = false;
  state = "playing";
  updateStatus(t("Jumped to wave {n}", { n: level }));
}

function showUpgradePrompt(target, earned) {
  const box = document.getElementById("testUpgradePrompt");
  box.innerHTML = "";
  const title = document.createElement("div");
  title.textContent = t("WAVE {n}: you'd have {m} upgrade{s} from killed bosses. Pick them:", { n: target, m: earned, s: earned > 1 ? "s" : "" });
  title.style.cssText = "color:#ffe066;margin-bottom:6px;";
  box.appendChild(title);

  const rows = [];
  const trees = UPGRADE_TREES.slice(0, earned);
  const totalPoints = () => rows.reduce((sum, row) => sum + Number(row.lvlSel.value), 0);
  trees.forEach((tree) => {
    const row = document.createElement("div");
    row.style.cssText = "margin:4px 0;";
    const name = document.createElement("span");
    name.textContent = t(tree.name) + " ";
    name.style.cssText = "display:inline-block;width:80px;color:#9ae6ff;";
    const lvlSel = document.createElement("select");
    lvlSel.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
    const none = document.createElement("option");
    none.value = "0";
    none.textContent = t("none");
    lvlSel.appendChild(none);
    for (let l = 1; l <= tree.levels.length; l += 1) {
      const opt = document.createElement("option");
      opt.value = String(l);
      opt.textContent = t("lvl {n} {label}", { n: l, label: t(tree.levels[l - 1].label) });
      lvlSel.appendChild(opt);
    }
    lvlSel.value = "1";
    lvlSel.addEventListener("change", () => {
      const over = totalPoints() - earned;
      if (over > 0) lvlSel.value = String(Math.max(0, Number(lvlSel.value) - over));
    });
    row.appendChild(name);
    row.appendChild(lvlSel);
    box.appendChild(row);
    rows.push({ tree, lvlSel });
  });

  const startBtn = document.createElement("button");
  startBtn.textContent = t("START WAVE {n}", { n: target });
  startBtn.style.cssText = "display:block;margin-top:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#ffe066;border:1px solid #ffe066;cursor:pointer;";
  startBtn.addEventListener("click", () => {
    if (testPanelOpen) toggleTestPanel();
    jumpToWave(target);
    upgradeLevels = { offense: 0, defense: 0, mobility: 0 };
    rows.forEach(({ tree, lvlSel }) => {
      const level = Math.min(Number(lvlSel.value), tree.levels.length);
      if (level < 1) return;
      applyUpgrade({ treeId: tree.id, level, text: `${t(tree.name)} ${level}: ${t(tree.levels[level - 1].label)}` });
    });
  });
  box.appendChild(startBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = t("CANCEL");
  cancelBtn.style.cssText = "display:block;margin-top:4px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  cancelBtn.addEventListener("click", () => { box.style.display = "none"; });
  box.appendChild(cancelBtn);

  box.style.display = "block";
}

function buildTestPanel() {
  const button = document.createElement("button");
  button.id = "testModeButton";
  button.setAttribute("data-i18n", "TEST"); button.textContent = t("TEST");
  button.style.cssText = "position:fixed;top:8px;right:8px;z-index:20;padding:4px 10px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  button.addEventListener("click", toggleTestPanel);

  const panel = document.createElement("div");
  panel.id = "testPanel";
  panel.style.cssText = "position:fixed;top:36px;right:8px;z-index:20;display:none;padding:10px 12px;font:12px monospace;background:rgba(8,12,18,0.92);color:#cfefff;border:1px solid #2c5f7a;";

  const title = document.createElement("div");
  title.setAttribute("data-i18n", "TEST FEATURES"); title.textContent = t("TEST FEATURES");
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
    row.appendChild(document.createTextNode(" " + t(feature.label)));
    panel.appendChild(row);
  });

  const bossRow = document.createElement("div");
  bossRow.style.cssText = "margin-top:10px;";
  const bossLabel = document.createElement("div");
  bossLabel.setAttribute("data-i18n", "BOSS SPAWNER"); bossLabel.textContent = t("BOSS SPAWNER");
  bossLabel.style.cssText = "color:#9ae6ff;margin-bottom:4px;";
  const select = document.createElement("select");
  select.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
  ["None"].concat(MINIBOSS_DESIGNS.map((d) => d.name), BOSS_DESIGNS.map((d) => d.name)).forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.setAttribute("data-i18n", name);
    opt.textContent = t(name);
    select.appendChild(opt);
  });
  select.addEventListener("change", () => {
    testBossName = select.value === "None" ? null : select.value;
    if (testBossName) taintRun();
  });
  const spawnBtn = document.createElement("button");
  spawnBtn.setAttribute("data-i18n", "SPAWN BOSS"); spawnBtn.textContent = t("SPAWN BOSS");
  spawnBtn.style.cssText = "display:block;margin-top:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  spawnBtn.addEventListener("click", spawnTestBoss);
  bossRow.appendChild(bossLabel);
  bossRow.appendChild(select);
  bossRow.appendChild(spawnBtn);
  panel.appendChild(bossRow);

  const waveRow = document.createElement("div");
  waveRow.style.cssText = "margin-top:10px;";
  const waveLabel = document.createElement("div");
  waveLabel.setAttribute("data-i18n", "WAVE JUMP"); waveLabel.textContent = t("WAVE JUMP");
  waveLabel.style.cssText = "color:#9ae6ff;margin-bottom:4px;";
  const waveSelect = document.createElement("select");
  waveSelect.style.cssText = "background:#101820;color:#cfe8d4;border:1px solid #2c5f7a;font:12px monospace;";
  for (let w = 1; w <= FINAL_STAGE_LEVEL; w += 1) {
    const opt = document.createElement("option");
    opt.value = String(w);
    opt.textContent = t("WAVE {n}", { n: w });
    waveSelect.appendChild(opt);
  }
  const waveBtn = document.createElement("button");
  waveBtn.setAttribute("data-i18n", "JUMP TO WAVE"); waveBtn.textContent = t("JUMP TO WAVE");
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

  const bombRow = document.createElement("div");
  bombRow.style.cssText = "margin-top:10px;";
  const bombLabel = document.createElement("div");
  bombLabel.setAttribute("data-i18n", "GIVE YOURSELF"); bombLabel.textContent = t("GIVE YOURSELF");
  bombLabel.style.cssText = "color:#9ae6ff;margin-bottom:4px;";
  const bombBtn = document.createElement("button");
  bombBtn.setAttribute("data-i18n", "+1 BOMB"); bombBtn.textContent = t("+1 BOMB");
  bombBtn.style.cssText = "display:inline-block;margin-right:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#9ae6ff;border:1px solid #2c5f7a;cursor:pointer;";
  bombBtn.addEventListener("click", () => { taintRun(); bombInventory += 1; updateStatus(t("+1 bomb")); });
  const laserBtn = document.createElement("button");
  laserBtn.setAttribute("data-i18n", "+1 LASER"); laserBtn.textContent = t("+1 LASER");
  laserBtn.style.cssText = "display:inline-block;margin-right:6px;padding:3px 8px;font:12px monospace;background:#101820;color:#6fdcff;border:1px solid #2c5f7a;cursor:pointer;";
  laserBtn.addEventListener("click", () => { taintRun(); laserCharges += 1; updateStatus(t("+1 laser")); });
  const lifeBtn = document.createElement("button");
  lifeBtn.setAttribute("data-i18n", "+1 LIFE"); lifeBtn.textContent = t("+1 LIFE");
  lifeBtn.style.cssText = "display:inline-block;padding:3px 8px;font:12px monospace;background:#101820;color:#78ff78;border:1px solid #2c5f7a;cursor:pointer;";
  lifeBtn.addEventListener("click", () => { taintRun(); lives += 1; updateStatus(t("+1 life")); });
  bombRow.appendChild(bombLabel);
  bombRow.appendChild(bombBtn);
  bombRow.appendChild(laserBtn);
  bombRow.appendChild(lifeBtn);
  panel.appendChild(bombRow);

  const hint = document.createElement("div");
  hint.textContent = t("toggle panel: `");
  hint.style.cssText = "margin-top:8px;color:#6a8fa5;";
  panel.appendChild(hint);

  document.body.appendChild(button);
  document.body.appendChild(panel);
}

buildTestPanel();
