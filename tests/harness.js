// Headless harness: loads the game's 2D layer in a vm context with DOM/canvas stubs.
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const FILES = ["i18n", "constants", "helpers", "state", "audio", "invaders", "player",
  "powerups", "boss", "silhouettes", "drawing", "testmode", "main"];

function makeCtx() {
  const target = {};
  return new Proxy(target, {
    get(t, k) {
      if (k in t) return t[k];
      return function () { return undefined; };
    },
    set(t, k, v) { t[k] = v; return true; },
    has() { return true; }
  });
}

function makeEl(id) {
  const el = {
    id,
    width: id === "game" ? 900 : 900,
    height: id === "game" ? 640 : 640,
    style: {},
    classList: { add() {}, remove() {}, contains() { return false; } },
    textContent: "",
    innerHTML: "",
    value: "",
    checked: false,
    children: [],
    appendChild() {},
    addEventListener() {},
    setAttribute() {},
    getBoundingClientRect() { return { left: 0, top: 0, width: 900, height: 640 }; },
    focus() {},
    blur() {},
    getContext() { return makeCtx(); },
    options: [],
    dataset: {}
  };
  return el;
}

const els = new Map();
function getEl(id) {
  if (!els.has(id)) els.set(id, makeEl(id));
  return els.get(id);
}

const sandbox = {
  console,
  Math,
  JSON,
  Number,
  String,
  Boolean,
  Array,
  Object,
  Set,
  Map,
  Date,
  Promise,
  URLSearchParams,
  isNaN,
  isFinite,
  parseInt,
  parseFloat,
  performance: { now: () => Date.now() },
  requestAnimationFrame() { return 0; },
  setTimeout: () => 0,
  clearTimeout() {},
  localStorage: {
    store: {},
    getItem(k) { return k in this.store ? this.store[k] : null; },
    setItem(k, v) { this.store[k] = String(v); },
    removeItem(k) { delete this.store[k]; }
  },
  location: { search: "" },
  document: {
    getElementById: (id) => getEl(id),
    createElement: (tag) => makeEl(tag),
    createTextNode: () => ({}),
    addEventListener() {},
    querySelectorAll() { return []; },
    querySelector() { return null; },
    documentElement: { lang: "" },
    body: { appendChild() {} },
    activeElement: null,
    title: ""
  },
  navigator: { language: "en" },
  fetch: () => Promise.resolve({ ok: false, json: () => Promise.resolve(null) }),
  getComputedStyle: () => ({})
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
sandbox.self = sandbox;
const context = vm.createContext(sandbox);

for (const f of FILES) {
  const src = fs.readFileSync(path.join(ROOT, "js", f + ".js"), "utf8");
  try {
    vm.runInContext(src, context, { filename: "js/" + f + ".js" });
  } catch (e) {
    console.log("LOAD FAIL " + f + ": " + e.message);
    throw e;
  }
}

module.exports = { context, sandbox, getEl };
