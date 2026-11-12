# TURTLE BULWARK — retired wave-9 boss (design + code archive)

The Turtle Bulwark was the wave-9 boss until v1.7.0, when the game became a 9-wave
run ending on the Abyssal Squid. All turtle-specific code was stripped from the game.
This file documents exactly how it worked, so it can be rebuilt.

The 3D model builders were **not** deleted: they still live in the shared mockup
modules (`mockups/toon3d.js` → `buildTurtle` in `MOBS`, `mockups/toon3d.v2.js` →
`buildTurtleB` in `MOB_V2`), because the mockup catalog pages use them. The game
just no longer references them. The standalone mockup app `mockups/turtle-3d.*`
was deleted; its essentials are below.

## Design entry (js/constants.js, `BOSS_DESIGNS`)

```js
{
  name: "TURTLE BULWARK",
  hp: 26, hpScale: 6, speed: 76, bombTimer: 3.25, color: "#2fc96f", accent: "#ffe066",
  ability: "CARAPACE BARRAGE", bulletCap: 5, bombMax: 1, bombRadius: 72, laserFollow: 0,
  laser: false, bombsPerLaunch: 1, bombShieldDamage: 18,
  shellHp: 1, shellMaxHp: 2, shellRegen: 15,
  carapaceInterval: 9, mineInterval: 0.72, mineShieldDamage: 18
}
```

- Wave HP = `hp + level * hpScale` → 26 + 9×6 = **80 HP on wave 9**.
- It sat in `BOSS_DESIGNS` at index 2, so the `level % 3` boss cycle
  (`currentBossDesign`) gave it wave 9: 3 = Skull Cruiser, 6 = Winged Viper, 9 = Turtle.
- No laser (`laser: false`), slow walker (speed 76), tanky for its slot.
- i18n (js/i18n.js): `"TURTLE BULWARK": "BALUARTE TARTARUGA"`,
  `"BARRAGE BROKEN!": "RAJADA QUEBRADA!"`.

## Kit 1 — SHELL (absorbing carapace with regen)

State on the boss unit: `shellHp`, `shellMaxHp` (2), `shellRegen` (15 s), `shellTimer`.

- Starts with 2 shell charges. **Any hit that lands while `shellHp > 0` is fully
  absorbed** (no HP damage), spends 1 charge, and gives the normal hit reward
  (score + drop roll) so the combo keeps running.
- When the last charge breaks, `shellTimer = shellRegen` starts. The shell is
  **not** damage-reducing while regenerating.
- Regen tick (in `updateBossUnit`): when `shellTimer` reaches 0, `shellHp =
  shellMaxHp` with a green explosion.
- Counterplay: burst it down inside the 15 s shell-down window; chip shots that
  break the shell early just reset the timer.

```js
// damageBoss (js/boss.js) — shell absorption, checked before scrapShield/stagger
if (unit.shellHp > 0) {
  unit.shellHp = Math.max(0, unit.shellHp - 1);
  bossHitReward(unit);
  addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, "#62ffa1");
  addScreenShake(4);
  playShieldHit();
  if (unit.shellHp <= 0) unit.shellTimer = unit.shellRegen || 15;
  return;
}

// updateBossUnit — regen back to full
if (boss.shellMaxHp > 0 && boss.shellHp <= 0 && boss.shellTimer > 0) {
  boss.shellTimer = Math.max(0, boss.shellTimer - dt * bossSlow);
  if (boss.shellTimer <= 0) {
    boss.shellHp = boss.shellMaxHp;
    addExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2, "#62ffa1");
  }
}
```

## Kit 2 — CARAPACE BARRAGE (mine drop with i-frames)

State machine on the unit: `carapaceState` (`idle → slow → windup → drop → idle`),
`carapaceTimer` (first cast at `carapaceInterval` = 9 s), `carapaceT` (phase clock),
`carapaceVx0` (velocity saved at cast start), `carapaceCast` (cast counter),
`carapaceMines`, `carapaceDropT` (drop cadence), `carapaceInvuln` (i-frame timer).

Phases (all scaled by `bossSlow`, i.e. the slow/status factor):

1. **slow** (0.8 s) — eases `vx` toward 0 from `carapaceVx0`.
2. **windup** (0.9 s) — frozen in place, `vx = 0`, constant `screenShake >= 3`,
   green "WINDING UP" bar under the boss.
3. **drop** (1.6 s) — moves at 50% of `carapaceVx0`; every 0.22 s drops one spike
   mine via `fireSpikeMine(boss, 1.2, offset)`, fanned around the drop path:
   `offset = (dropped - (mines + 1) / 2) * 26`.
   Mine count grows per cast: `mines = min(2 + castNumber, 5)` → 3, 4, 5, capped 5.
   At cast start: `carapaceInvuln = 1.6` (full damage immunity, see below).
4. **idle** — resumes moving at full design speed; next cast after
   `max(3.4, carapaceInterval - (phase - 1) * 0.6)` → faster each phase.

The mines are the shared spike-mine system (also used by SPINE SENTRY): armed 1.2 s,
`mineShieldDamage: 18`, pulse-detonate near the player.

```js
// updateBossUnit (js/boss.js) — the full state machine, keyed on
// boss.ability === "CARAPACE BARRAGE"
boss.carapaceInvuln = Math.max(0, boss.carapaceInvuln - dt);
if (boss.carapaceState === "idle") {
  boss.carapaceTimer -= dt * bossSlow;
  if (boss.carapaceTimer <= 0) {
    boss.carapaceState = "slow"; boss.carapaceT = 0.8; boss.carapaceVx0 = boss.vx;
  }
} else if (boss.carapaceState === "slow") {
  boss.carapaceT -= dt * bossSlow;
  boss.vx = boss.carapaceVx0 * Math.max(0, boss.carapaceT / 0.8);
  if (boss.carapaceT <= 0) {
    boss.carapaceState = "windup"; boss.carapaceT = 0.9; boss.vx = 0; addScreenShake(4);
  }
} else if (boss.carapaceState === "windup") {
  boss.carapaceT -= dt * bossSlow;
  boss.vx = 0; screenShake = Math.max(screenShake, 3);
  if (boss.carapaceT <= 0) {
    boss.carapaceState = "drop"; boss.carapaceT = 1.6; boss.carapaceDropT = 0.1;
    boss.carapaceDropped = 0;
    boss.carapaceCast = (boss.carapaceCast || 0) + 1;
    boss.carapaceMines = Math.min(2 + boss.carapaceCast, 5);
    boss.carapaceInvuln = 1.6; addScreenShake(6);
  }
} else if (boss.carapaceState === "drop") {
  boss.carapaceT -= dt * bossSlow; boss.carapaceDropT -= dt * bossSlow;
  boss.vx = boss.carapaceVx0 * 0.5;
  if (boss.carapaceDropT <= 0 && boss.carapaceDropped < boss.carapaceMines) {
    boss.carapaceDropped += 1; boss.carapaceDropT = 0.22;
    fireSpikeMine(boss, 1.2, (boss.carapaceDropped - (boss.carapaceMines + 1) / 2) * 26);
  }
  if (boss.carapaceT <= 0) {
    boss.carapaceState = "idle";
    boss.carapaceTimer = Math.max(3.4, (boss.designData.carapaceInterval || 5.4) - (boss.phase - 1) * 0.6);
    boss.vx = (boss.carapaceVx0 >= 0 ? 1 : -1) * (boss.designData.speed + level * 8);
  }
}
```

### I-frames during the drop

```js
// damageBoss — every hit during carapaceInvuln is a green spark, no damage
if (unit.carapaceInvuln > 0) {
  addExplosion(unit.x + unit.w / 2, unit.y + unit.h / 2, "#62ffa1");
  playShieldHit();
  return;
}
```

A stagger clears them: `triggerBossStagger` set `unit.carapaceInvuln = 0` for every boss.

### Bomb interrupt ("BARRAGE BROKEN!")

The player's BOMB powerup cancels a cast mid-windup/drop (js/powerups.js, bomb blast):

```js
if (unit.carapaceState === "windup" || unit.carapaceState === "drop") {
  unit.carapaceState = "idle";
  unit.carapaceInvuln = 0;
  unit.carapaceTimer = Math.max(3.4, (unit.designData.carapaceInterval || 5.4) - (unit.phase - 1) * 0.6);
  unit.vx = (unit.vx >= 0 ? 1 : -1) * (unit.designData.speed + level * 8);
  showGameMessage(t("BARRAGE BROKEN!"), 1.0, "#ffe066");
  damageBoss(unit, bombShotDamage(unit, 18 + level * 1.5 + unit.maxHp * 0.09), { staggerMul: 0.5 });
}
```

Interrupting paid a bonus: 18 + 1.5/level + 9% max HP (vs the normal 12 + level + 6%).

## Kit 3 — shots and bombs

`fireBossBullet` pattern (keyed on `design.ability === "CARAPACE BARRAGE"`),
narrow side fans, slower than baseline (0.76–0.86 × speed):

```js
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
```

Bomb fan spread was tight (`fanSpread = 22` vs 58 default, 116 for viper's direct
bombs) — `fireBossBomb` keyed on the ability name.

## Visuals (2D, js/boss.js)

- Silhouette (`js/silhouettes.js`, `SIL.turtle`, bb 80×50):
  ```js
  turtle: { bb:{x:-40,y:-28,w:80,h:50}, path(c){
    c.beginPath(); c.moveTo(-38,10); c.quadraticCurveTo(-40,-26,0,-28);
    c.quadraticCurveTo(40,-26,38,10); c.quadraticCurveTo(20,22,0,22);
    c.quadraticCurveTo(-20,22,-38,10); c.closePath(); } }
  ```
- Shell ring (`drawBossUnit`): solid green circle (r = w/2+10) + `SHELL 2/2` label
  while up; dashed circle + progress arc + `SHELL 7s` countdown label while regenerating.
- Windup: green outline box under the boss + "WINDING UP" text.
- I-frames: solid green circle (r = w/2+14) around the boss.
- `drawBossDesignShape` mapped `design.name === "TURTLE BULWARK"` → shapeName
  `"turtle"` (drove `neon()` silhouette + eyes + 3D key).

## 3D models (kept in the mockup modules)

- `mockups/toon3d.js` → `buildTurtle` (in `MOBS.turtle`, label "BOSS: TURTLE BULWARK",
  color `#2fc96f`): extruded shell shape, 4 shell ribs, cream head, dark eyes,
  two flipper "feet" in `g.userData.claws`.
- `mockups/toon3d.v2.js` → `buildTurtleB` (in `MOB_V2.turtle`): the toon v2 rebuild —
  dome shell with plate-ring skin texture (1.25×0.8×1.05 scale), flat belly lid,
  rim band, cream belly plate, neck + head group with eyes/brow/mouth, 4 animated
  paddles (`userData.claws`), tail cone.
- Game wiring that was removed: `js/assets3d.js` `FIT_KEY.turtle = 1.12` and
  `KEY.turtle = "turtle"` (bundle rebuilt).
- The deleted standalone mockup `mockups/turtle-3d.{html,app.js,bundle.js}` was a
  turntable viewer for `buildTurtleB` with `plateRings` / `flatBelly` sliders.

## How to bring it back

1. Re-add the design entry to `BOSS_DESIGNS` (index 2 = wave 9 slot; with the
   9-wave finale, `isFinalStage(9)` wins over the cycle, so put it at index 2 and
   it takes wave 6/9 rotation only if the finale moves, or extend the game to 10 waves).
2. Restore the `CARAPACE BARRAGE` block in `updateBossUnit`, the shell regen block,
   the two `damageBoss` guards, the stagger i-frame clear, the `fireBossBullet`
   pattern, the `fireBossBomb` fanSpread branch, the bomb-interrupt branch in
   `js/powerups.js`, and the unit fields in `createBossFromDesign`.
3. Restore the visuals in `drawBossUnit`/`drawBossDesignShape`, `SIL.turtle` in
   `js/silhouettes.js`, and the `turtle` keys in `js/assets3d.js` (rebuild the bundle).
4. Restore the i18n keys `TURTLE BULWARK` and `BARRAGE BROKEN!`.
5. The test-panel boss spawner picks it up automatically from `BOSS_DESIGNS`.
