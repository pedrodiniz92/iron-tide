let audioCtx = null;
let masterGain = null;
let muted = false;

let state = "ready";
let score = 0;
let highScore = loadHighScore();
let level = 1;
let runTime = 0;
let playerName = "";
let victoryRank = 0;
let testJumpLevel = 0;
let lives = 2;
let maxPlayerHp = 2;
let playerHp = maxPlayerHp;
let hpSlowTimer = 0;
let crackFade = 0;
let hullChips = [];
let extraLivesAwarded = 0;

let player;
let playerBullets = [];
let enemyBullets = [];
let bombShots = [];
let laserBeams = [];
let enemyBombs = [];
let spikeMines = [];
let powerups = [];
let bombInventory = 0;
let fireCooldown = 0;
let lastShotFast = false;
let ghostPhaseT = 0;
// SHIMMER clock: a wounded (1 HP) ghost flickers; this drives the sine
let ghostFlickerT = 0;
let screamTimer = 6;
// The designated NEXT screamer (a living banshee). Crowned the instant the
// previous wail ends; glows as it charges (drawScreamerCharge). Kill it before
// the wail and the scream is cancelled + the kill pays 3x (registerInvaderKill).
let screamNext = null;
let frenzyZones = [];
let upgradeSel = 0;
let effects = { rapid: 0, double: 0, laser: 0, slow: 0, shield: 0 };
let laserCharges = 0;
let shieldHits = 0;
let invaders = [];
let explosions = [];
let shockwaves = [];
let shields = [];
let ufo = null;
let boss = null;
let bosses = [];
let minions = [];
let bellEffect = null;
let bossSpawned = false;

let invaderDirection = 1;
let enemyFireTimer = 1.2;
let ufoTimer = 14;
let combo = 0;
let comboMultiplier = 1;
let comboTimer = 0;
let comboMeter = 0;
let screenShake = 0;
let waveTime = 0;
let scorePopups = [];
let staggerDamage = 0;
let staggerWindow = 0;
let staggerGrace = 0;
let staggerDecayDiv = 5;
let staggerThresholdEff = 0;
let staggerCooldown = 0;
let bossStagger = 0;
let lastTime = performance.now();
let keys = new Set();
let sfxGain = null;
let musicGain = null;
let sfxOn = true;
// Music is OFF by default: the game opens quiet (SFX only). The player can turn
// it on with the Music button.
let musicOn = false;
let musicTimer = 0;
let musicStep = 0;
let musicTrack = 0;
let musicPending = null;
let musicFade = 0;
let invulnerabilityTimer = 0;
let respawnTimer = 0;
let waveBreakTimer = 0;
let waveClearing = false;
let nextWaveIsBoss = false;
let gameMessages = [];
let upgradeChoices = [];
let upgradePrompt = "CHOOSE A PERMANENT UPGRADE";
let upgradeLevels = { offense: 0, defense: 0, mobility: 0 };
let dashTimer = 0;
let dashCooldown = 0;
let dashFrom = 0;
let dashTo = 0;
let dashGrace = 0;
let dashGraceMax = 0;   // grace window of the CURRENT dash (glow intensity = grace/max)
let dashRingT = 9;      // shockwave ring age (>= 0.35 = dormant)
let dodgePopupT = 0;    // "DODGE!" spam gate (min 0.25s between callouts)
let counterFanT = 0;    // OFFENSE II counter-fan gate (0.5s between volleys)
let dashGhosts = [];
let bombSpeedMultiplier = 1;
let bombRadiusBonus = 0;
let dropRateBonus = 0;
let permanentDoubleShots = false;
let permanentFireRateBonus = 0;
let permanentDamage = 0;
let permanentLongPowerups = false;
// UTI II (LONG DASH): powerup drop chance multiplier (1.5 = +50%).
let permanentDropRateMult = 1;
// INK BLIGHT (ABYSSAL SQUID): { phase: "fly" | "cloud", ... } or null.
let inkBlight = null;
// Seconds spent inside the ink cloud (drives the -10% -> -20% move-slow ramp).
let inkSlowT = 0;
// VENOM POOLS (WINGED VIPER): floor puddles left by direct bombs.
let venomPools = [];
// SPLIT GHOST: fledglings spawned by ghost kills. They flee upward; killing
// one pays 40 and drops a 5-shot fan. Escaping off the top costs nothing.
let fledglings = [];
let fledglingSeq = 0;
let maxShieldHits = 1;
let itemShieldHits = 0;
let shieldWeakTtl = 0;
let shieldRestoreDelay = 0;
let shieldRestoreTimer = 0;
let clearEnemyFirePending = false;
let clearPlayerBulletsPending = false;

