const HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "content-type"
};

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: Object.assign({ "content-type": "application/json", "cache-control": "no-store" }, HEADERS)
  });
}

async function read(env) {
  try { return JSON.parse((await env.BOARD.get("scores")) || "[]"); } catch (e) { return []; }
}

function clean(e) {
  const name = String((e && e.name) || "").replace(/[^a-zA-Z0-9 _.-]/g, "").trim().slice(0, 12).toUpperCase();
  const score = Math.floor(Number(e && e.score));
  const time = Math.floor(Number(e && e.time));
  const date = /^\d{4}-\d{2}-\d{2}$/.test((e && e.date) || "") ? e.date : new Date().toISOString().slice(0, 10);
  if (!name || !Number.isFinite(score) || score < 1 || score > 5000000) return null;
  if (!Number.isFinite(time) || time < 1 || time > 72000) return null;
  return { name: name, score: score, time: time, date: date, win: (e && e.win) === true };
}

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: HEADERS });
    const url = new URL(req.url);
    if (url.pathname === "/scores" && req.method === "GET") {
      return json({ scores: await read(env) });
    }
    if (url.pathname === "/scores" && req.method === "POST") {
      const entry = clean(await req.json().catch(() => null));
      if (!entry) return json({ error: "invalid entry" }, 400);
      const list = await read(env);
      list.push(entry);
      list.sort((a, b) => b.score - a.score || a.time - b.time);
      const trimmed = list.slice(0, 100);
      await env.BOARD.put("scores", JSON.stringify(trimmed));
      return json({ rank: trimmed.indexOf(entry) + 1 });
    }
    return json({ error: "not found" }, 404);
  }
};
