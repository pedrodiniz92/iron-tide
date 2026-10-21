# Iron Tide 2.5

The Iron Tide game with the mobs, ships, bosses and loot drawn as **real 3D models** (Three.js, toon ramp + sky rim,
no outline ink) on a WebGL canvas under the 2D canvas. Bullets, bombs, shields, HUD and effects stay 2D canvas.

Open `index.html` directly — Three.js is vendored and bundled, so `file://` works.

```bash
# after changing js/assets3d.js, mockups/toon3d.js or mockups/toon3d.v2.js:
../invaders-iron-tide-3d/node_modules/.bin/esbuild js/assets3d.js --bundle --format=iife \
  --target=es2020 --outfile=js/assets3d.bundle.js
```

Open `index.html?selftest` to auto-start a wave with a boss, a UFO and every loot drop; the page title reports
`{ invaders, powerups, boss, ufo, iron3d, meshes, threeLivePct }`.

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
- Fire: `Space`
- Bomb: `Q`
- Dash (after Mobility upgrade): `Shift` + arrow
- Pause: `P`
- Toggle SFX: `M`
- Toggle music: `N`
- Toggle all audio: `B`
- Pick upgrade after a boss: `1`, `2`, or `3`
- Start / restart: `Enter`
