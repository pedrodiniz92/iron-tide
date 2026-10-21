const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlaySub = document.getElementById("overlaySub");

const W = canvas.width;
const H = canvas.height;

const SLOW_FACTORS = { enemy: 0.42, ufo: 0.42, boss: 0.71 };

const COLORS = {
  player: "#78ff78",
  hud: "#66ff66",
  bullet: "#ffffff",
  enemyBullet: "#ff8888",
  ufo: "#ff55aa",
  squid: "#99d4ff",
  crab: "#ffd26b",
  octopus: "#9fffc9",
  explosion: "#ff9c2b",
  shield: "#286b28"
};

const SPRITES = {
  squid: [
    "..1111..",
    ".111111.",
    "11111111",
    "11.11.11",
    "11111111",
    "..1..1..",
    ".11.11.1",
    ".1....1."
  ],
  crab: [
    "..1111..",
    ".111111.",
    "111..111",
    "11111111",
    ".111111.",
    "..1..1..",
    ".1.11.1.",
    "1.1..1.1"
  ],
  stinger: [
    "...11...",
    "..1111..",
    ".111111.",
    "11111111",
    "..1111..",
    "..1111..",
    "...11...",
    "...11..."
  ],
  banshee: [
    "...11...",
    "..1111..",
    ".111111.",
    ".1.11.1.",
    "..1111..",
    "..1111..",
    "...11...",
    "..1..1.."
  ],
  ghost: [
    "..1111..",
    ".111111.",
    "11111111",
    "11.11.11",
    "11111111",
    "11111111",
    "11111111",
    "1.11.11."
  ],
  octopus: [
    "...11...",
    "..1111..",
    ".111111.",
    "11111111",
    "11111111",
    ".111111.",
    ".11..11.",
    "11....11"
  ]
};

const INVADER_TYPES = [
  { rows: [0, 1], name: "squid", score: 30, sprite: SPRITES.squid, color: COLORS.squid },
  { rows: [2, 3], name: "crab", score: 20, sprite: SPRITES.crab, color: COLORS.crab },
  { rows: [4], name: "octopus", score: 10, sprite: SPRITES.octopus, color: COLORS.octopus },
  { rows: [], name: "banshee", score: 25, sprite: SPRITES.banshee, color: "#c4a8ff" },
  { rows: [], name: "ghost", score: 40, sprite: SPRITES.ghost, color: "#dfe9ff" },
  { rows: [], name: "stinger", score: 20, sprite: SPRITES.stinger, color: "#ffb04c" }
];

const POWERUP_NAMES = {
  rapid: "RAPID FIRE",
  double: "DOUBLE SHOT",
  laser: "LASER",
  shield: "SHIELD",
  slow: "TIME WARP",
  bomb: "BOMB",
  loot: "LOOT CRATE"
};

const POWERUP_TYPES = [
  { id: "rapid", label: "R", name: POWERUP_NAMES.rapid, color: "#ff6655", duration: 7 },
  { id: "double", label: "D", name: POWERUP_NAMES.double, color: "#ffb04c", duration: 7 },
  { id: "laser", label: "L", name: POWERUP_NAMES.laser, color: "#6fdcff", duration: 4 },
  { id: "shield", label: "S", name: POWERUP_NAMES.shield, color: "#62ffa1", duration: 16 },
  { id: "slow", label: "Z", name: POWERUP_NAMES.slow, color: "#bf9cff", duration: 5 },
  { id: "bomb", label: "B", name: POWERUP_NAMES.bomb, color: "#ffe66a", duration: 0 },
  { id: "loot", label: "C", name: POWERUP_NAMES.loot, color: "#ffd166", duration: 0 }
];

const MINIBOSS_DESIGNS = [
  {
    name: "SCRAPLING",
    hp: 8, hpScale: 2, speed: 76, bombTimer: 999, color: "#99d4ff", accent: "#ffe066",
    ability: "RAPID STREAM", bulletCap: 4, bombMax: 0, bombRadius: 34, laserFollow: 0,
    laser: false, bombsPerLaunch: 0, bombShieldDamage: 0
  },
  {
    name: "SPINE SENTRY",
    hp: 11, hpScale: 3, speed: 64, bombTimer: 5.2, color: "#9fffc9", accent: "#62ffa1",
    ability: "MINE SEED", bulletCap: 4, bombMax: 1, bombRadius: 42, laserFollow: 0,
    laser: false, bombsPerLaunch: 1, bombShieldDamage: 14,
    mineInterval: 1.7, mineShieldDamage: 14
  }
];

const BOSS_DESIGNS = [
  {
    name: "SKULL CRUISER",
    hp: 22, hpScale: 5, speed: 95, bombTimer: 2.15, color: "#ff3366", accent: "#ffe066",
    ability: "SPREAD SHOTS", bulletCap: 6, bombMax: 2, bombRadius: 70, laserFollow: 0.95,
    laser: true, bombsPerLaunch: 1, bombShieldDamage: 24
  },
  {
    name: "WINGED VIPER",
    hp: 18, hpScale: 4, speed: 122, bombTimer: 3.35, color: "#2fc96f", accent: "#7dff66",
    ability: "TRIPLE BOMBS", bulletCap: 8, bombMax: 3, bombRadius: 34, laserFollow: 0,
    laser: false, bombsPerLaunch: 3, bombShieldDamage: 16,
    bombDirect: true, bombPlayerDamage: 1, bombBarrierDamage: 16
  },
  {
    name: "TURTLE BULWARK",
    hp: 26, hpScale: 6, speed: 62, bombTimer: 3.25, color: "#2fc96f", accent: "#ffe066",
    ability: "SHELL BURROW", bulletCap: 5, bombMax: 1, bombRadius: 72, laserFollow: 0,
    laser: false, bombsPerLaunch: 1, bombShieldDamage: 30,
    shellHp: 1, shellMaxHp: 2, shellRegen: 15,
    burrowInterval: 7.2, burrowDuration: 3.8, shellRegenBoost: 2.4, mineInterval: 0.72, mineShieldDamage: 18,
    burrowShellHits: 2, mineBurst: 3
  }
];

function isMinibossWave(level) {
  return false;
}

function isFullBossWave(level) {
  return level % 3 === 0;
}

function pickWaveMusic(level) {
  const pool = level % 3 === 0 ? [5, 2, 3] : [1, 2, 3, 4, 6];
  const options = pool.filter((index) => index !== musicTrack);
  const list = options.length ? options : pool;
  return list[Math.floor(Math.random() * list.length)];
}

function currentBossDesign(level) {
  const cycle = level % 3;
  if (cycle === 1) return MINIBOSS_DESIGNS[Math.floor((level - 1) / 3) * 2 % MINIBOSS_DESIGNS.length];
  if (cycle === 2) return MINIBOSS_DESIGNS[(Math.floor((level - 2) / 3) * 2 + 1) % MINIBOSS_DESIGNS.length];
  return BOSS_DESIGNS[Math.floor((level - 3) / 3) % BOSS_DESIGNS.length];
}

const UPGRADE_TREES = [
  {
    id: "offense",
    name: "OFFENSE",
    levels: [
      { label: "RAPID I", desc: "Faster firing + W detonates your bomb" },
      { label: "RAPID II", desc: "Faster permanent firing" },
      { label: "DOUBLE CORE", desc: "Permanent double firing" },
      { label: "OVERCHARGE", desc: "+1 damage, laser stays rare" }
    ]
  },
  {
    id: "defense",
    name: "SHIELD",
    levels: [
      { label: "RESTORE SHIELD", desc: "Broken shield returns after 12s" },
      { label: "QUICK REPAIR", desc: "Shield restore drops to 9s" },
      { label: "TWIN SHIELDS", desc: "Shield stack increases to 2" },
      { label: "ARMORED CORE", desc: "Shield stack 3, restore 6s" }
    ]
  },
  {
    id: "mobility",
    name: "MOBILITY",
    levels: [
      { label: "QUICK DASH", desc: "Shift+Arrow dashes far, 3.5s reload" },
      { label: "LONG DASH", desc: "Dash covers more ground, 3s reload" },
      { label: "SHARP DASH", desc: "Invulnerable while dashing, 2.5s reload" },
      { label: "PHASE DASH", desc: "Dash reload drops to 1.75s" }
    ]
  }
];

const btnSound = document.getElementById("btnSound");
const btnPauseSfx = document.getElementById("btnPauseSfx");
const btnPauseMusic = document.getElementById("btnPauseMusic");
const pauseToggles = document.getElementById("pauseToggles");
const CONTROLS_HTML = "<kbd>←</kbd>/<kbd>→</kbd> move · <kbd>Space</kbd> fire · <kbd>Q</kbd> bomb · " +
  "<kbd>P</kbd> pause · <kbd>M</kbd> SFX · <kbd>N</kbd> music";
function controlsText() {
  const dash = (typeof upgradeLevels !== "undefined" && upgradeLevels.mobility >= 1)
    ? "<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd> dash · "
    : "";
  return "<kbd>←</kbd>/<kbd>→</kbd> move · <kbd>Space</kbd> fire · <kbd>Q</kbd> bomb · " + dash +
    "<kbd>P</kbd> pause · <kbd>M</kbd> SFX · <kbd>N</kbd> music";
}
const btnMusic = document.getElementById("btnMusic");
const btnBoth = document.getElementById("btnBoth");

const MUSIC_TRACKS = [
  { name: "IRON TIDE THEME", bpm: 144,
    melody: [64,0,67,0,71,0,76,0,71,0,67,0,64,0,60,0,
             64,0,67,0,71,0,79,0,74,0,71,0,67,0,64,0,
             64,0,69,0,72,0,76,0,72,0,69,0,64,0,62,0,
             67,0,71,0,74,0,79,0,83,0,79,74,71,0,67,0,64,0],
    bass: [28,40,28,28,31,43,31,31,26,38,26,26,28,40,28,28,
           31,43,31,31,28,40,28,28,26,38,26,26,24,36,24,24,
           28,40,28,28,31,43,31,31,26,38,26,26,28,40,28,28,
           31,43,31,31,28,40,28,28,26,38,26,26,31,28,26,24],
    arp: [52,55,60,64,60,55,52,55,60,64,67,64,60,55,52,48,
          45,48,52,55,52,48,45,48,52,55,60,55,52,48,45,43,
          48,52,55,60,55,52,48,52,57,60,64,60,57,52,48,45,
          50,55,59,62,59,55,50,55,59,62,67,62,59,55,50,47] },
  { name: "CAVERN MARCH", bpm: 96,
    melody: [69,0,0,0,72,0,0,0,71,0,72,0,69,0,68,0,
             69,0,0,0,72,0,0,0,74,0,72,0,71,0,69,0,
             68,0,0,0,71,0,0,0,72,0,71,0,68,0,64,0,
             69,0,68,0,66,0,68,0,69,0,0,0,64,0,0,0],
    bass: [33,33,45,33,33,33,45,33,29,29,41,29,29,29,41,29,
           33,33,45,33,33,33,45,33,31,31,43,31,31,31,43,31,
           28,28,40,28,28,28,40,28,29,29,41,29,29,29,41,29,
           33,33,45,33,33,33,45,33,28,32,28,24,21,21,33,21],
    arp: [57,0,60,0,64,0,60,0,53,0,57,0,61,0,57,0,
          57,0,60,0,64,0,67,0,55,0,59,0,62,0,59,0,
          52,0,56,0,60,0,56,0,53,0,57,0,61,0,60,0,
          57,0,64,0,60,0,57,0,52,0,55,0,49,0,52,0] },
  { name: "NEON DRIFT", bpm: 170,
    melody: [76,0,79,0,83,0,79,0,76,0,74,0,71,0,74,0,
             76,0,79,0,81,0,79,0,83,0,86,0,83,0,79,0,
             74,0,76,0,79,0,76,0,74,0,71,0,69,0,71,0,
             76,0,79,0,83,0,86,0,88,0,86,0,83,0,79,0],
    bass: [40,52,40,52,40,52,40,52,36,48,36,48,36,48,36,48,
           41,53,41,53,41,53,41,53,38,50,38,50,38,50,38,50,
           40,52,40,52,40,52,40,52,36,48,36,48,36,48,36,48,
           43,55,43,55,43,55,43,55,38,50,43,55,38,50,36,48],
    arp: [64,67,71,74,71,67,64,67,60,64,67,72,67,64,60,64,
          65,69,72,77,72,69,65,69,62,66,69,74,69,66,62,66,
          64,67,71,74,76,71,67,64,60,64,67,72,72,67,64,60,
          67,71,74,79,74,71,67,71,76,79,83,79,76,71,67,64] },
  { name: "SIEGE GROOVE", bpm: 118,
    melody: [69,0,70,0,69,0,0,72,70,0,69,0,67,0,66,0,
             69,0,70,0,74,0,72,0,70,0,69,0,0,67,0,66,
             64,0,66,0,67,0,69,0,70,0,69,0,67,0,64,0,
             62,0,64,0,66,0,67,0,69,0,66,0,64,0,0,0],
    bass: [33,33,0,45,33,0,41,0,33,33,0,45,33,0,29,0,
           33,33,0,45,31,0,39,0,31,0,43,0,31,33,0,0,
           29,29,0,41,29,0,37,0,29,29,0,41,28,0,40,0,
           33,0,33,0,45,0,33,0,29,0,41,0,28,32,33,35],
    arp: [57,0,61,0,64,0,61,0,57,0,61,0,53,0,57,0,
          57,0,61,0,66,0,64,0,61,0,57,0,55,0,53,0,
          53,0,57,0,60,0,64,0,57,0,53,0,52,0,49,0,
          50,0,54,0,57,0,59,0,61,0,57,0,52,0,45,0] },
  { name: "STARFIELD WALTZ", bpm: 128,
    melody: [62,0,0,66,0,0,69,0,0,66,0,0,62,0,0,0,
             64,0,0,68,0,0,71,0,0,68,0,0,64,0,0,0,
             66,0,0,69,0,0,73,0,0,69,0,0,66,0,0,0,
             69,0,0,73,0,0,76,0,0,73,0,0,69,0,71,0],
    bass: [38,0,0,0,50,0,0,0,38,0,0,0,50,0,0,0,
           36,0,0,0,48,0,0,0,36,0,0,0,48,0,0,0,
           34,0,0,0,46,0,0,0,34,0,0,0,46,0,0,0,
           31,0,0,0,43,0,0,0,38,0,0,0,43,0,38,0],
    arp: [62,66,69,74,69,66,62,66,69,74,78,74,69,66,62,58,
          60,64,67,72,67,64,60,64,67,72,76,72,67,64,60,56,
          58,62,65,70,65,62,58,62,65,70,74,70,65,62,58,54,
          55,59,62,67,62,59,55,59,62,67,71,67,62,59,55,51] },
  { name: "CRUISER ATTACK", bpm: 152,
    melody: [69,0,69,70,69,0,66,0,64,0,66,0,69,0,72,0,
             70,0,69,70,72,0,69,0,66,0,64,0,62,0,66,0,
             69,0,72,0,75,0,72,0,69,0,66,0,64,0,62,0,
             57,0,61,0,64,0,66,0,69,0,64,0,57,0,0,0],
    bass: [33,45,33,45,33,45,33,45,29,41,29,41,29,41,29,41,
           33,45,33,45,34,46,34,46,33,45,33,45,31,43,31,43,
           28,40,28,40,28,40,28,40,33,45,33,45,34,46,34,46,
           33,45,33,45,29,41,29,41,28,40,31,43,33,33,33,33],
    arp: [69,70,71,72,73,72,71,70,65,66,67,68,69,68,67,66,
          69,70,71,72,74,72,71,70,66,67,68,69,70,69,68,67,
          64,65,66,67,68,67,66,65,69,70,71,72,73,72,71,72,
          61,64,66,69,72,69,66,64,57,61,64,66,69,66,64,61] },
  { name: "SILENT PATROL", bpm: 84,
    melody: [69,0,0,0,0,0,0,0,76,0,0,0,0,0,0,0,
             72,0,0,0,0,0,0,0,69,0,0,0,0,0,0,0,
             64,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,
             69,0,0,0,72,0,0,0,76,0,0,0,79,0,0,0],
    bass: [33,0,33,0,0,33,0,0,33,0,33,0,0,29,0,0,
           31,0,31,0,0,31,0,0,31,0,28,0,0,28,0,0,
           29,0,29,0,0,29,0,0,29,0,26,0,0,26,0,0,
           28,0,28,0,0,31,0,0,33,0,33,0,35,0,33,0],
    arp: [0,57,0,60,0,64,0,60,0,57,0,53,0,57,0,60,
          0,55,0,59,0,62,0,59,0,55,0,52,0,55,0,59,
          0,53,0,57,0,61,0,57,0,53,0,49,0,53,0,57,
          0,52,0,55,0,59,0,62,0,55,0,52,0,48,0,52,0] },
  { name: "VICTORY LAP", bpm: 160,
    melody: [76,0,79,0,83,0,83,81,79,0,76,0,79,0,83,0,
             81,0,79,0,76,0,74,0,71,0,74,0,76,0,79,0,
             83,0,86,0,88,0,86,0,83,0,79,0,76,0,79,0,
             88,0,86,0,83,0,79,0,76,0,79,0,83,0,88,0],
    bass: [36,48,36,48,43,55,43,55,41,53,41,53,43,55,43,55,
           36,48,36,48,41,53,41,53,38,50,38,50,43,55,43,55,
           36,48,36,48,45,57,45,57,43,55,43,55,41,53,41,53,
           36,48,36,48,41,53,41,53,43,55,45,57,36,48,36,48],
    arp: [60,64,67,72,67,64,60,64,71,74,79,74,71,68,64,68,
          65,69,72,77,72,69,65,69,68,72,76,81,76,72,68,72,
          60,64,67,72,76,72,67,64,65,69,72,77,72,69,65,62,
          60,64,67,72,69,65,60,57,65,69,72,77,81,77,72,69] }
];
const STAGGER_WINDOW = 2.4;
const STAGGER_COOLDOWN = 10;
const STAGGER_DURATION = 1.8;
const hudScoreEl = document.getElementById("score");
const hudHiEl = document.getElementById("hi");
const hudWaveEl = document.getElementById("wave");
const hudLivesEl = document.getElementById("lives");

