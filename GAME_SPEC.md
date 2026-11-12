# Iron Tide Game Spec

## Core loop
- The player defends the bottom of the screen from waves of enemies.
- A wave clears when all normal invaders are destroyed and no boss remains alive. On miniboss
  waves the boss spawns once about 10% of the invaders are left.
- Waves 3 and 6 are full bosses. Waves 7 and 8 are minibosses. Wave 9 is the final stage.
- Clearing wave 9 (killing the ABYSSAL SQUID) wins the run and sends the score to the leaderboard.
- Each wave clear awards 150 points.

## Controls
- Move: arrow keys or `A` / `D`.
- Fire: `Space` (tap or hold).
- Bomb: `Q`.
- Laser: `E` (needs stored laser charges).
- Detonate a launched bomb early: `W` (after Offense II, while a bomb is in flight).
- Dash: `Shift` + arrow after Mobility I.
- Pause: `P`.
- Audio: `M` (SFX), `N` (music), `B` (all).
- Upgrade choice: `1`, `2`, `3`, up/down arrows, Enter, click, or touch.
- Start / restart: `Enter` (or `Space` on the title screen). After a win, `Enter` opens the leaderboard.
- The on-screen controls line lists move, fire, bomb, laser, dash, pause, SFX and music.

## Player
- The player has 2 lives, each with 2 HP.
- A hit costs 1 HP and grants a short invulnerability (0.8s grace so volleys cannot chain-kill);
  enemy fire and weapon powerups survive it.
- Losing the last HP costs a life: enemy fire and weapon powerups clear, and after a 1s pause you
  respawn with HP refilled and 1.5s of invulnerability.
- A hit that leaves the ship at 1 HP cracks the hull: green hull chips fly off, the crack draws in
  over 0.2s, and the ship moves 30% slower on the spot, easing back to 15% slower over 2s.
  Mobility I+ negates the cracked-hull slowdown and the ink blight slowdown entirely.
- The hull knits itself back to full HP after 15s at 1 HP (or on any HP gain); the crack fades out
  over 0.55s and the speed returns with it.
- The hull crack is the crab's impact star, drawn at hull scale on the ship's hull plate.
- Losing all lives ends the run. If the invaders march down and reach the ship, the base is overrun
  and the run ends immediately.
- An extra life is awarded every 10,000 points.
- Dash is a short horizontal burst (210px) with a cooldown.

## Shooting
- Normal fire shoots upward.
- Rapid Fire increases fire rate.
- Double Shot fires two parallel bullets.
- Bomb powerups add stored bombs. Bombs fly upward and explode on contact (about a 180px blast
  radius), clearing enemy bullets, bombs and spike mines in the blast, damaging bosses, killing any
  zealot or idol caught in it (4 HP ends both, so a bomb is how you break the idol's heal), gouging
  any barrier the blast touches, and breaking a Venom Dive or Carapace Barrage. Barrier erosion is HP
  out of a barrier's 54 (18 cells x 3 HP), landing on the cells nearest the impact and spilling
  outward within 40px: 30 for a player bomb (10 cells gone, 56%), 16-24 for an enemy bomb (30-44%),
  12-18 for a spike mine (22-33%). One blast cannot clear a barrier, so a bomb detonating on a
  barrier punches a hole in your own and two clear it. `Q` launches; `W` detonates a launched bomb
  early after Offense II.
- Laser powerups add stored laser charges. Laser charges stack, show as `LASER xN`, and fire only
  with `E`. The beam tracks the ship and damages the topmost target in a narrow column every 0.5s,
  and it collects powerups it passes over. Targets are invaders, bosses, minions, the UFO and enemy
  fire, so a zealot or the idol parked in the column blocks the beam and burns instead of the boss
  behind it (1 HP per tick: 4 ticks for a zealot, 3 for the idol).
- Shield powerups absorb hits. Defense upgrades can restore shields after a delay.
- A shield is its own layer: picking one up never restores HP. HP comes back only from the hull
  knitting at 1 HP (see Player) or from respawning on a new life.
- Time Warp slows enemies, the UFO and bosses for a few seconds.

## Powerups
- Seven types: RAPID FIRE, DOUBLE SHOT, LASER, SHIELD, TIME WARP, BOMB, LOOT CRATE.
- Timed powerups stack their remaining time; the Mobility LONG DASH upgrade doubles their duration.
- Normal enemies drop powerups at a wave-scaled rate (capped at 16%).
- Loot crates have quality tiers (1/2/3) with richer loot tables at higher tiers.
- Uncollected drops keep falling and disappear off the bottom of the screen. Nothing parks on
  screen waiting to be picked up, including boss kills, loot crates and stagger drops.

## Enemies
- Six invader types: octopus (10 pts), squid (30 pts), banshee (25 pts), stinger (35 pts),
  crab (40 pts, 2 HP armor), ghost (60 pts).
- Formation: crabs and squids appear every wave, stingers from wave 2, banshees from wave 4,
  ghosts from wave 5.
- Basic invaders march in formation, drop a row when they hit a screen edge, and shoot downward.
- Stingers, ghosts, crabs and the front row (from wave 2) use limited predictive aiming.
- Enemy aim is limited to about 260px from the shooter.
- Foe shots fly slower in the opening waves: 15% slower on wave 1, 10% on waves 2 and 3, 5% on
  wave 4, full speed from wave 5. The vertical and horizontal components are scaled together, so
  the shot is slower along exactly the same line of fire.
- Ghosts phase through bullets on a cycle; bullets pass through them, but bombs and lasers still
  kill them while phased.
- Banshees periodically scream, opening a frenzy zone that makes nearby invaders fire in bursts.

## Bosses and minibosses
- Minibosses:
  - SCRAPLING is a swarm printer: it spits scrap drones, fires scrap bursts, and sheds fragments
    when its scrap shield is up.
  - SPINE SENTRY is zone denial: it drops armed spike mines, pulses aimed shots near the player,
    and makes armored rolls.
- Full bosses:
  - SKULL CRUISER is the laser boss: spread shots plus a piercing beam.
  - WINGED VIPER uses green shots, bombs, and a telegraphed venom dive. It fires 25% less often
    than the other bosses (`shotMul`).
  - ABYSSAL SQUID is the wave-9 final boss (158 HP at wave 9), with the lowest base speed of any
    boss. THE CALLING is
    telegraphed: it eases to a stop, then holds a frozen windup behind a filling
    charge bar, radiating rings and a "SUMMONING" label. 0.5s into the channel the squid raises the
    ABYSSAL WARD - a violet bubble ("WARD x1/2") that halves all damage it takes until the cast
    resolves, so single shots land for 0.5. Each call summons 2 zealots (never more
    than 2 alive), and every 3rd call raises the healing idol instead. If the idol is already on
    screen, that call fills with zealots instead, so the windup never promises a summon and
    delivers nothing. The SIREN BELL freezes every
    enemy shot for 1.6s, then re-aims up to 8 of the shots that are above the ship at the player;
    shots level with or below the ship are released, never recruited, and every released shot gets a
    fresh 2.4s life, so nothing lingers. Every 15-18s the squid also fires INK BLIGHT: an ink blob
    aimed at the ship's position at launch (dodgeable), growing from a small muzzle blob into a
    64px one as it closes, then blooming into a 5s cloud that drifts down and follows the ship's
    column in slow pursuit (45px/s vs the ship's 290). The cloud blacks out shots inside it, and
    standing in it fires 20% slower and moves 10% slower on entry, ramping to 20% slower after 2.5s
    inside (the slow wears off 0.5s after you leave, and the cloud itself dies after 5s).
    Mobility I+ ignores all of it.
    Zealots (4 HP, 40 pts) and the idol (3 HP, 60 pts) are
    shootable and each drops loot; one bomb blast kills either, so the idol's heal can be broken.
    Zealots roam with a tendency to drift toward the player's column, and in phase 3 zealots that
    stay within 150px of the squid fire 40% faster. Its minions die with it.
- Bosses have three phases (at 66% and 33% HP) and a stagger meter; a staggered boss takes extra
  damage for a short window.
- Minibosses never offer permanent upgrades. Full bosses offer a permanent upgrade after defeat.
- Defeated bosses and minibosses do not respawn.

## Drops
- Normal enemies drop powerups at a modest wave-scaled rate.
- Bosses and minibosses drop loot more often as they take hits.
- Boss and miniboss kills drop a persistent bomb plus extra loot; full bosses drop a third item
  most of the time. Higher-tier loot comes from full bosses and from UFO crates.
- Killing a UFO drops a loot crate whose quality scales with the UFO's HP.
- Loot crates can contain powerups, bombs, shields, lasers, and quality tiers.

## Upgrades
- Three trees, each with three levels. The starting upgrade is chosen at the beginning of each run,
  and a permanent upgrade is offered after every full boss.
- A maxed tree stays on the picker card list, drawn greyed with a "MAXED" tag, and cannot be
  picked (click, number key and Enter all refuse; up/down skip it).
- OFFENSE: RAPID I (fires 1.39x faster), RAPID II (fires 2x faster, unlocks `W` to detonate your
  bomb), DOUBLE CORE (permanent double firing; a DOUBLE SHOT pickup on top of it fires a triple -
  glass cannon: it costs 1 max HP, 2 to 1, for the rest of the run).
- SHIELD (defense): RESTORE SHIELD (broken shield returns after 15s; respawn refills 1 charge),
  QUICK REPAIR (shield stack 2, restore 10s), TWIN SHIELDS (shield stack 2, restore 7s).
- UTILITY (mobility): QUICK DASH (`Shift`+arrow dashes 210px, 3.5s reload; cracked-hull and ink
  blight slowdowns cannot touch you), LONG DASH (3s reload;
  powerups last 2x longer), SHARP DASH (invulnerable while dashing, 210px, 2.5s reload).

## UI rules
- On-screen messages only appear when they add information.
- Powerup messages appear near the powerup.
- Extra life shows `+1 life` with points below it, not total lives.
- Upgrade selection uses up/down arrows (plus `1`/`2`/`3`, Enter, click, or touch).
- The HUD shows SCORE, HI, WAVE, and `LIVES n · HP x/2`.
- Text is bilingual (English / Brazilian Portuguese), switchable live and remembered.
- The leaderboard stores local and remote scores (top 100).
- The test panel freezes the run while it is open, including during a wave break, and `p` cannot
  unfreeze it. Closing the panel resumes exactly the state it froze - a wave break resumes as a
  wave break - and never a run you paused yourself with `p`, so the wave after a panel-opened
  break still starts.
- A run that takes any test-panel entry is a test run: it writes no hi-score and no leaderboard
  entry, and the end screen reads `TEST RUN - not ranked`. The taint lasts the whole run and is
  cleared by the next start. A test boss picked in the panel, the `?boss=` URL parameter and
  `?selftest` all mark the run the same way.
