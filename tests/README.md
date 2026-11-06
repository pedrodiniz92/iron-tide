# tests/ — headless harnesses for Iron Tide 2.5

There is no browser in this repo, so every gameplay change is checked two ways: these
harnesses, and a live check by hand (see HANDOFF.md for the live-check list).

Run everything from the repo root:

```
node tests/bomb_minions_harness.js      # 13 checks
node tests/laser_minions_harness.js     # 10 checks
node tests/wave_speed_harness.js        # 24 checks
node tests/idol_cast_harness.js         #  9 checks
node tests/panel_pause_harness.js       # 18 checks
node tests/scoring_gate_harness.js      # 15 checks
node tests/smoke_harness.js             # 11 checks, ~27,000 frames, takes a few minutes
node tests/squid_fight_probe.js         # 120s squid fight, prints invariant violations
node tests/squid_fight_probe_strict.js  # same, player kept alive: idol heal + clamps
node tests/squid_state_dump.js          # 150s squid fight, snapshot per state change (debug)
```

Each harness prints `PASS`/`FAIL` lines and ends with `ALL CHECKS PASSED` or `FAILURES: n`.
They exit non-zero on failure, so they chain in CI: `for h in tests/*_harness.js; do node "$h" || exit 1; done`.

## The two loaders

- `harness.js` — loads the **whole 2D layer** (all 14 scripts from index.html, in load order)
  into a `vm` context with DOM/canvas/`localStorage`/`fetch` stubbed, and exports
  `{ context, sandbox, getEl }`. Everything the game declares is reachable from
  `vm.runInContext(code, sandbox)`, so a harness drives the real functions.
- `sim.js` — a thin helper over it: `run(code)`, `start(level)`, `step(dt)`.

## What each harness pins

| file | the rule it protects |
|---|---|
| `bomb_minions_harness.js` | a bomb blast kills minions (4 HP, nearest-impact-first) and clears the zealot's death volley in the same blast |
| `laser_minions_harness.js` | the player laser stops on minions (`minion` kind in `findLaserTarget`/`damageLaserTarget`, 1 HP per 0.5s tick) |
| `wave_speed_harness.js` | foe shot speed −15% wave 1, −10% waves 2–3, −5% wave 4, full from wave 5, applied at the one choke point `pushEnemyBullet` with `vx` scaled together with `speed` (line of fire preserved) |
| `idol_cast_harness.js` | the squid's every-4th cast raises the healing idol, and fills with zealots when the idol is already up (the 1.7s telegraph never promises a summon and delivers nothing) |
| `panel_pause_harness.js` | the test panel pauses the run including between waves, resumes the exact state it froze, never a `p` pause, and leaves every wave able to clear |
| `scoring_gate_harness.js` | any test entry (`?boss=`, panel jump, panel boss pick, `?selftest`) writes no hi-score and no board row; a clean run writes both; the taint is one-way inside a run |
| `smoke_harness.js` | 27,000 real `update()` frames across waves 1–10: no exception, no NaN in minion/bullet/bomb/powerup state, zealot cap 2, minion cap 3, the scoring gate (a panel-jumped run is tainted and writes no hi-score; a clean run still does) |

## Gotchas, learned the hard way

- **Pin baselines to a pre-fix commit, never `HEAD`.** The harnesses diff the current file
  against `fe5174c` (v1.8.1) to prove the old bug existed. Diffing against `HEAD` breaks the
  moment the fix ships — that produced 10 bogus failures once already.
- **The loader's Proxy auto-stubs every unknown global** (`has: () => true`, `get` returns a
  no-op function). A global you forget to seed is silently swallowed instead of throwing —
  that hid `pushEnemyBullet` in two harnesses. Seed real builtins, every mutable array global,
  and `level`.
- Pass the **proxy** to `runInContext`, not the target.
- `bullet.speed` is the **vertical** component and `bullet.vx` the horizontal; `atan2(dx, dy)`
  is measured from vertical, so `speed = cos(a)`, `vx = sin(a)` is correct. Do not "fix" it.
- `killMinion` rebinds `minions` and `damageShieldArea` rebinds `shields`, so callers must
  iterate `.slice()`. `registerInvaderKill` rebinds nothing. `level` is 1-based.
- Boss waves (`level % 3 === 0`) spawn **no invaders** (js/invaders.js:11), so "the field is alive"
  is the wrong assertion after clearing into one — assert invaders **or** a boss.
- `startGame()` **clears** `runTainted`; `taintRun()` sets it. Hi-score key:
  `invadersIronTideHighScore`.
- Give each harness block its own `startGame()` reset: a soft-lock found in one block leaves
  `waveClearing` set and poisons the next block.

## Syntax checks (no test runner needed)

```
for f in js/*.js; do node --check "$f" || echo "FAIL $f"; done
```

The 14 scripts share one global scope, so also check them concatenated in index.html load
order — that catches a duplicate top-level `const`/`let` across files:

```
grep -o 'js/[a-z0-9]*\.js' index.html | awk '!seen[$0]++' > /tmp/loadorder.txt
cat $(cat /tmp/loadorder.txt) > /tmp/bundle_check.js && node --check /tmp/bundle_check.js
```

## notes/

Local working notes and data backups (git-excluded): the pending panel-pause fix
(`notes/panel-pause-fix.md`), the archived long handoff, and leaderboard KV backups.
