# Iron Tide 2.5

A vertical wave-shooter. You defend the bottom of the screen from marching waves of invaders,
bosses and minibosses, collecting powerups and picking permanent upgrades between boss fights.
Clear wave 9 to win.

The mobs, ships, bosses and loot are drawn as **real 3D models** (Three.js, toon ramp + sky rim,
no outline ink) on a WebGL canvas (`stage3d`) layered under the 2D canvas (`game`). Bullets, bombs,
shields, HUD and effects stay on the 2D canvas. See `GAME_SPEC.md` for the full gameplay rules.

Open `index.html` directly — Three.js is vendored and bundled, so `file://` works.

## Run

Open `index.html` in a browser:

```bash
xdg-open index.html
```

Or serve it locally:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Controls

- Move: arrow keys or `A` / `D`
- Fire: `Space` (tap or hold)
- Bomb: `Q`
- Laser (needs laser charges): `E`
- Detonate a launched bomb early: `W` (after Offense II)
- Dash (after Mobility I): `Shift` + arrow
- Pause: `P`
- Toggle SFX: `M`
- Toggle music: `N`
- Toggle all audio: `B`
- Pick an upgrade: `1`, `2`, `3`, up/down + `Enter`, click, or touch
- Start / restart: `Enter` (or `Space` on the title screen)
- After a win: `Enter` opens the leaderboard

## Build (3D bundle)

`js/assets3d.js` imports the Three.js models from `mockups/` (`vendor/three.module.js`,
`toon3d.js`, `toon3d.v2.js`, `banshees3d.js`) and is bundled to `js/assets3d.bundle.js`, which is
what `index.html` loads. After changing any of those sources, rebuild the bundle:

```bash
# from the repo root (needs esbuild; npx fetches it on demand)
npx esbuild js/assets3d.js --bundle --format=iife \
  --target=es2020 --outfile=js/assets3d.bundle.js
```

## Self-test

Open `index.html?selftest` to auto-start a wave with a boss, a UFO and every loot drop. Add
`&level=N` to jump straight to wave `N`. The page title reports a JSON summary:
`{ state, invaders, powerups, boss, ufo, iron3d, meshes, frames, threeLivePct, threePct, twoPct }`.

Press `` ` `` to toggle the test panel. Opening it pauses the run, including between waves, and
closing it resumes exactly the state it froze - a wave break resumes as a wave break - and only
when the panel was the one that paused it, so a `p` pause you made yourself survives. Any entry
you use there marks the run as a test run, which is excluded from the hi-score
and the leaderboard (see Leaderboard below).

## Leaderboard

Scores are stored locally and pushed to a remote board (a Cloudflare Worker, `SCORES_API` in
`js/constants.js`). `leaderboard.html` shows the merged top 100.

A run that takes any test-panel entry is excluded from scoring: it writes no hi-score and posts no
leaderboard entry, and the end screen reads `TEST RUN - not ranked`. The `?boss=` URL parameter
excludes the run the same way. The exclusion covers the whole run and clears on the next start, so
a clean run right after testing still ranks normally.
