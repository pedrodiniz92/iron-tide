const OPTS = {
  A: {
    label: "LONE WAIL — rising siren cry, echo tail",
    make(ctx, dest, t0) {
      const o = ctx.createOscillator();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(240, t0);
      o.frequency.exponentialRampToValueAtTime(920, t0 + 0.75);
      o.frequency.exponentialRampToValueAtTime(420, t0 + 1.3);
      const v = ctx.createOscillator();
      v.frequency.value = 6.5;
      const vg = ctx.createGain();
      vg.gain.value = 34;
      v.connect(vg).connect(o.frequency);
      const f = ctx.createBiquadFilter();
      f.type = "bandpass";
      f.frequency.value = 1100;
      f.Q.value = 1.4;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.5, t0 + 0.09);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.45);
      const dly = ctx.createDelay(0.5);
      dly.delayTime.value = 0.19;
      const fb = ctx.createGain();
      fb.gain.value = 0.38;
      o.connect(f).connect(g);
      g.connect(dest);
      g.connect(dly);
      dly.connect(fb).connect(dly);
      dly.connect(dest);
      o.start(t0); v.start(t0);
      o.stop(t0 + 1.6); v.stop(t0 + 1.6);
    }
  },
  B: {
    label: "CAULD SHRIEK — dissonant double-voice + noise sweep",
    make(ctx, dest, t0) {
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.36, t0 + 0.06);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.1);
      g.connect(dest);
      [660, 698].forEach((fq, i) => {
        const o = ctx.createOscillator();
        o.type = "sawtooth";
        o.frequency.setValueAtTime(fq, t0);
        o.frequency.exponentialRampToValueAtTime(fq * (i ? 0.55 : 1.5), t0 + 1.0);
        o.connect(g);
        o.start(t0); o.stop(t0 + 1.2);
      });
      const n = ctx.createBufferSource();
      const buf = ctx.createBuffer(1, ctx.sampleRate * 1.2, ctx.sampleRate);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < ch.length; i += 1) ch[i] = Math.random() * 2 - 1;
      n.buffer = buf;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.setValueAtTime(300, t0);
      bp.frequency.exponentialRampToValueAtTime(3200, t0 + 0.8);
      bp.Q.value = 6;
      const ng = ctx.createGain();
      ng.gain.setValueAtTime(0.18, t0);
      ng.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.0);
      n.connect(bp).connect(ng).connect(dest);
      n.start(t0); n.stop(t0 + 1.2);
    }
  },
  D: {
    label: "GASLIGHT CRY — the groan raised out of the bass",
    make(ctx, dest, t0) {
      const o = ctx.createOscillator();
      o.type = "triangle";
      o.frequency.setValueAtTime(166, t0);
      o.frequency.linearRampToValueAtTime(262, t0 + 0.5);
      o.frequency.linearRampToValueAtTime(119, t0 + 1.5);
      const sub = ctx.createOscillator();
      sub.frequency.setValueAtTime(132, t0);
      const subG = ctx.createGain();
      subG.gain.value = 0.3;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass";
      f.frequency.setValueAtTime(735, t0);
      f.frequency.linearRampToValueAtTime(1225, t0 + 0.6);
      f.frequency.linearRampToValueAtTime(525, t0 + 1.5);
      f.Q.value = 2.2;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.9, t0 + 0.14);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.7);
      o.connect(f).connect(g);
      sub.connect(subG).connect(g);
      g.connect(dest);
      o.start(t0); sub.start(t0);
      o.stop(t0 + 1.8); sub.stop(t0 + 1.8);
    }
  },
  C: {
    label: "GASLIGHT GROAN — low moan with sub-bass tail",
    make(ctx, dest, t0) {
      const o = ctx.createOscillator();
      o.type = "triangle";
      o.frequency.setValueAtTime(95, t0);
      o.frequency.linearRampToValueAtTime(150, t0 + 0.5);
      o.frequency.linearRampToValueAtTime(68, t0 + 1.5);
      const sub = ctx.createOscillator();
      sub.frequency.setValueAtTime(52, t0);
      const f = ctx.createBiquadFilter();
      f.type = "bandpass";
      f.frequency.setValueAtTime(420, t0);
      f.frequency.linearRampToValueAtTime(700, t0 + 0.6);
      f.frequency.linearRampToValueAtTime(300, t0 + 1.5);
      f.Q.value = 2.2;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.6, t0 + 0.14);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.7);
      o.connect(f).connect(g);
      sub.connect(g);
      g.connect(dest);
      o.start(t0); sub.start(t0);
      o.stop(t0 + 1.8); sub.stop(t0 + 1.8);
    }
  }
};

function analyze(key) {
  const SR = 44100;
  const ctx = new OfflineAudioContext(1, Math.floor(SR * 2), SR);
  const out = { key };
  return new Promise((res) => {
    OPTS[key].make(ctx, ctx.destination, 0.05);
    ctx.startRendering().then((buf) => {
      const d = buf.getChannelData(0);
      let peak = 0;
      let sum = 0;
      let last = -1;
      for (let i = 0; i < d.length; i += 1) {
        const a = Math.abs(d[i]);
        if (a > 0.003) last = i;
        if (a > peak) peak = a;
        sum += a * a;
      }
      out.peak = Number(peak.toFixed(3));
      out.rms = Number(Math.sqrt(sum / d.length).toFixed(4));
      out.durSec = Number((last / SR).toFixed(2));
      res(out);
    });
  });
}

if (typeof window !== "undefined") {
  let ac = null;
  document.querySelectorAll("[data-opt]").forEach((btn) => {
    btn.addEventListener("click", () => {
      ac = ac || new AudioContext();
      OPTS[btn.dataset.opt].make(ac, ac.destination, ac.currentTime + 0.05);
    });
  });
  if (new URLSearchParams(location.search).has("selftest")) {
    Promise.all([analyze("A"), analyze("B"), analyze("C"), analyze("D")]).then((r) => {
      document.title = "SELFTEST " + JSON.stringify(r);
    });
  }
}

export { OPTS, analyze };
