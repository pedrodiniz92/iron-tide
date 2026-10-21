import { GAME_COLOR as BASE_GAME_COLOR, MOB_LABEL as BASE_LABEL, MOBS as BASE_MOBS, MOCKUP_COLOR, BASE_PINK, BASE_BLUE } from "./toon3d.js";
import { COLOR_V2, LABEL_V2, MOB_V2 } from "./toon3d.v2.js";

export { BASE_PINK, BASE_BLUE, MOCKUP_COLOR };
export { SURF_VS, SURF_FS, HULL_VS, HULL_FS, EDGE_FS, DIL_FS, POST_VS, POST_FS } from "./toon3d.js";

export const MOB_LABEL = Object.assign({}, BASE_LABEL, LABEL_V2, {
  crab: "CRAB (A: CURRENT, SQUAT)"
});

export const MOBS = Object.assign({}, BASE_MOBS, MOB_V2);

export const GAME_COLOR = Object.assign({}, BASE_GAME_COLOR, COLOR_V2, {
  player_b: "#78ff78", crab_b: "#ffd26b", crab_c: "#ffd26b"
});

export const FAMILIES = {
  fam_crab: { keys: ["crab", "crab_b", "crab_c"], tag: "CRAB" },
  fam_player: { keys: ["player", "player_b"], tag: "PLAYER SHIP" }
};

export const MOB_GROUPS = [
  { name: "Invaders", keys: ["squid", "fam_crab", "ufo"] },
  { name: "Player ship", keys: ["fam_player"] },
  { name: "Minibosses", keys: ["scrap", "sentry"] },
  { name: "Bosses", keys: ["skull", "viper", "turtle"] },
  { name: "Loot drops", keys: ["drop_rapid", "drop_double", "drop_laser", "drop_shield", "drop_slow", "drop_bomb", "drop_loot"] }
];

export const MOB_KEYS = MOB_GROUPS.reduce((all, grp) => all.concat(grp.keys), []);

MOB_KEYS.forEach((key) => {
  if (!MOBS[key] && !FAMILIES[key]) throw new Error("catalog lists unknown mob: " + key);
});

export function mobLabel(key) {
  const fam = FAMILIES[key];
  if (fam) return fam.tag + " - " + fam.keys.length + " DESIGNS (one per cell)";
  return MOB_LABEL[key] || key;
}
