# Iron Tide Game Spec

## Core loop
- The player defends the bottom of the screen from waves of enemies.
- Each wave clears when all normal invaders are destroyed and no boss remains alive.
- Waves 3, 6, and 9 are full bosses. Waves 7 and 8 are minibosses. Wave 10 is the final stage.
- Clearing wave 10 wins the run and sends the score to the leaderboard.

## Controls
- Move: arrow keys or `A` / `D`.
- Fire: `Space`.
- Bomb: `Q`.
- Laser: `E`.
- Dash: `Shift` + arrow after Mobility.
- Detonate launched bomb: `W` after Offense II.
- Pause: `P`.
- Audio: `M`, `N`, `B`.
- Upgrade choice: `1`, `2`, `3`, arrows, Enter, click, or touch.

## Player
- The player has 3 lives.
- Death clears enemy fire and weapon powerups, then respawns with short invulnerability.
- Losing all lives ends the run.
- Dash is a short horizontal burst with cooldown.

## Shooting
- Normal fire shoots upward.
- Rapid Fire increases fire rate.
- Double Shot fires two parallel bullets.
- Bomb powerups add stored bombs. Bombs fly upward, stick to targets, explode, and can be detonated early after Offense II.
- Laser powerups add stored laser charges. Laser charges stack, show as `LASER xN`, and fire only with `E`.
- Shield powerups absorb hits. Defense upgrades can restore shields after a delay.

## Enemies
- Basic invaders march in formation and shoot downward.
- Stingers and ghosts use limited predictive aiming.
- Crabs have armor and award 40 points.
- Stingers award 35 points.
- Ghosts phase through bullets and award 60 points.
- Enemy aim is limited to about 260px from the shooter.

## Bosses and minibosses
- SCRAPLING is a swarm printer: it spits scrap drones, fires scrap bursts, and sheds fragments when shielded.
- SPINE SENTRY is zone denial: it drops armed spike mines, pulses aimed shots near the player, and makes armored rolls.
- SKULL CRUISER is the laser boss.
- WINGED VIPER uses green shots and bombs.
- TURTLE BULWARK uses shell, burrow, and mines.
- Minibosses never offer permanent upgrades.
- Full bosses offer permanent upgrades after defeat.
- Defeated bosses and minibosses do not respawn.

## Drops
- Normal enemies drop powerups at a modest wave-scaled rate.
- Bosses and minibosses drop more often than normal enemies.
- Boss kills drop a persistent bomb plus extra loot.
- Loot crates can contain powerups, bombs, shields, lasers, and quality tiers.

## Upgrades
- Offense improves firing, damage, and bomb handling.
- Defense improves shield capacity and recovery.
- Mobility improves dash distance, cooldown, and invulnerability.
- Drop Rate improves powerup frequency.
- Starting upgrade is chosen at the beginning of each run.

## UI rules
- On-screen messages only appear when they add information.
- Powerup messages appear near the powerup.
- Extra life shows `+1 life` with points below it, not total lives.
- Upgrade selection uses only up/down arrows.
- The leaderboard stores local and remote scores.
