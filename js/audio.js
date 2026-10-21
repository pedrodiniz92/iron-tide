function playBombLaunch() {
  playTone({ start: 520, end: 1200, duration: 0.12, gain: 0.14 });
}

function playBombExplosion() {
  playNoise({ duration: 0.34, gain: 0.22, frequency: 900 });
  playTone({ start: 220, end: 40, duration: 0.32, type: "sawtooth", gain: 0.18 });
}

function initAudio() {
  if (audioCtx) {
    if (audioCtx.state === "suspended") audioCtx.resume();
    return;
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  audioCtx = new AudioContext();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = muted ? 0 : 0.34;
  masterGain.connect(audioCtx.destination);

  sfxGain = audioCtx.createGain();
  sfxGain.gain.value = sfxOn ? 1 : 0;
  sfxGain.connect(masterGain);

  musicGain = audioCtx.createGain();
  musicGain.gain.value = musicOn ? 0.58 : 0;
  musicGain.connect(masterGain);

  updateAudioUI();
}

function applyMute() {
  if (!masterGain) return;
  masterGain.gain.value = muted ? 0 : 0.34;
  updateAudioUI();
}

function playTone({ start, end, duration = 0.12, type = "square", gain = 0.13, delay = 0 }) {
  if (!ensureSfxAudio()) return;

  const now = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(start, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(30, end), now + duration);

  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.linearRampToValueAtTime(gain, now + 0.006);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(amp);
  amp.connect(sfxGain);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playNoise({ duration = 0.16, gain = 0.16, frequency = 1200, delay = 0 }) {
  if (!ensureSfxAudio()) return;

  const now = audioCtx.currentTime + delay;
  const frames = Math.max(1, Math.floor(audioCtx.sampleRate * duration));
  const buffer = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < frames; i += 1) {
    const fade = 1 - i / frames;
    data[i] = (Math.random() * 2 - 1) * fade;
  }

  const source = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const amp = audioCtx.createGain();

  source.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.value = frequency;
  amp.gain.setValueAtTime(gain, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  source.connect(filter);
  filter.connect(amp);
  amp.connect(sfxGain);
  source.start(now);
  source.stop(now + duration + 0.02);
}

function ensureAudio() {
  if (!audioCtx || !masterGain) return false;
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx.state !== "closed" && masterGain.gain.value > 0;
}

function ensureSfxAudio() {
  return ensureAudio() && sfxGain && sfxOn;
}

function ensureMusicAudio() {
  return ensureAudio() && musicGain && musicOn;
}

function playShoot() {
  playTone({ start: 920, end: 180, duration: 0.08, gain: 0.12 });
}

function playDash() {
  playTone({ start: 200, end: 900, duration: 0.12, type: "triangle", gain: 0.12 });
}

function playHit() {
  playNoise({ duration: 0.16, gain: 0.2, frequency: 1500 });
  playTone({ start: 260, end: 50, duration: 0.11, type: "sawtooth", gain: 0.12 });
}

function playScream() {
  initAudio();
  if (!audioCtx || !sfxGain) return;
  const t0 = audioCtx.currentTime + 0.02;
  const o = audioCtx.createOscillator();
  o.type = "triangle";
  o.frequency.setValueAtTime(166, t0);
  o.frequency.linearRampToValueAtTime(262, t0 + 0.5);
  o.frequency.linearRampToValueAtTime(119, t0 + 1.5);
  const sub = audioCtx.createOscillator();
  sub.frequency.setValueAtTime(132, t0);
  const subG = audioCtx.createGain();
  subG.gain.value = 0.3;
  const f = audioCtx.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.setValueAtTime(735, t0);
  f.frequency.linearRampToValueAtTime(1225, t0 + 0.6);
  f.frequency.linearRampToValueAtTime(525, t0 + 1.5);
  f.Q.value = 2.2;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(0.85, t0 + 0.14);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.7);
  o.connect(f).connect(g);
  sub.connect(subG).connect(g);
  g.connect(sfxGain);
  o.start(t0);
  sub.start(t0);
  o.stop(t0 + 1.8);
  sub.stop(t0 + 1.8);
}

function playShieldHit() {
  playNoise({ duration: 0.09, gain: 0.13, frequency: 1100 });
  playTone({ start: 900, end: 420, duration: 0.12, type: "triangle", gain: 0.09 });
}

function playPlayerDeath() {
  playTone({ start: 420, end: 55, duration: 0.5, type: "sawtooth", gain: 0.16 });
  playNoise({ duration: 0.38, gain: 0.13, frequency: 900, delay: 0.02 });
}

function playLevelClear() {
  [440, 587, 740, 988].forEach((freq, index) => {
    playTone({ start: freq, end: freq, duration: 0.1, gain: 0.13, delay: index * 0.085 });
  });
}

function playGameOver() {
  [330, 247, 196, 110].forEach((freq, index) => {
    playTone({ start: freq, end: Math.max(40, freq * 0.45), duration: 0.26, type: "sawtooth", gain: 0.15, delay: index * 0.17 });
  });
}

function playShieldCharge() {
  if (!ensureSfxAudio()) return;
  playTone({ start: 180, end: 640, duration: 0.55, type: "sine", gain: 0.16 });
}

function playDashCharge() {
  if (!ensureSfxAudio()) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(420, now + 0.45);
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.linearRampToValueAtTime(0.05, now + 0.02);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
  const lfo = audioCtx.createOscillator();
  const lfoAmp = audioCtx.createGain();
  lfo.frequency.value = 11;
  lfoAmp.gain.value = 0.025;
  lfo.connect(lfoAmp);
  lfoAmp.connect(amp.gain);
  lfo.start(now);
  lfo.stop(now + 0.5);
  osc.connect(amp);
  amp.connect(sfxGain);
  osc.start(now);
  osc.stop(now + 0.5);
  playTone({ start: 140, end: 90, duration: 0.4, type: "sine", gain: 0.045 });
}

function playExtraLife() {
  [330, 392, 494, 660].forEach((freq, index) => {
    playTone({ start: freq, end: freq, duration: 0.11, type: "square", gain: 0.07, delay: index * 0.09 });
  });
  playTone({ start: 220, end: 110, duration: 0.4, type: "triangle", gain: 0.08 });
}

function playComboScore(points) {
  const scale = [392, 440, 494, 587, 659, 784, 880, 988, 1176, 1318];
  const tier = Math.min(scale.length - 1, Math.floor((comboMultiplier - 1) / 1));
  const freq = scale[tier];
  const gain = 0.018 + Math.min(0.034, comboMultiplier * 0.004 + points / 1800);
  playTone({
    start: freq,
    end: freq * 1.18,
    duration: 0.055 + tier * 0.004,
    type: "sine",
    gain,
    delay: 0.008
  });
}

function playPowerup() {
  [880, 1120, 1320, 1560].forEach((freq, index) => {
    playTone({ start: freq, end: freq * 1.15, duration: 0.09, gain: 0.15, delay: index * 0.06 });
  });
  playNoise({ duration: 0.1, gain: 0.12, frequency: 1900 });
}

function playUfoKill() {
  playTone({ start: 1100, end: 150, duration: 0.22, type: "square", gain: 0.16 });
  playNoise({ duration: 0.2, gain: 0.18, frequency: 2200 });
}

function toggleSfx() {
  sfxOn = !sfxOn;
  if (sfxGain) sfxGain.gain.value = sfxOn ? 1 : 0;
  updateAudioUI();
  updateStatus(`SFX ${sfxOn ? "on" : "off"}`);
}

function toggleMusic() {
  musicOn = !musicOn;
  if (musicGain) musicGain.gain.value = musicOn ? 0.58 : 0;
  if (musicOn && state === "playing") startMusic();
  updateAudioUI();
  updateStatus(`Music ${musicOn ? "on" : "off"}`);
}

function toggleBoth() {
  const target = !sfxOn || !musicOn;
  sfxOn = target;
  musicOn = target;
  if (sfxGain) sfxGain.gain.value = target ? 1 : 0;
  if (musicGain) musicGain.gain.value = target ? 0.58 : 0;
  if (musicOn && state === "playing") startMusic();
  updateAudioUI();
  updateStatus(`Audio ${target ? "on" : "off"}`);
}

function updateAudioUI() {
  if (btnSound) {
    btnSound.textContent = `SFX: ${sfxOn ? "on" : "off"}`;
    btnSound.setAttribute("aria-pressed", String(sfxOn));
  }
  if (btnMusic) {
    btnMusic.textContent = `Music: ${musicOn ? "on" : "off"}`;
    btnMusic.setAttribute("aria-pressed", String(musicOn));
  }
  if (btnBoth) {
    const on = sfxOn && musicOn;
    btnBoth.textContent = `Audio: ${on ? "on" : "off"}`;
    btnBoth.setAttribute("aria-pressed", String(on));
  }
  if (btnPauseSfx) {
    btnPauseSfx.textContent = `SFX: ${sfxOn ? "on" : "off"}`;
    btnPauseSfx.setAttribute("aria-pressed", String(sfxOn));
  }
  if (btnPauseMusic) {
    btnPauseMusic.textContent = `Music: ${musicOn ? "on" : "off"}`;
    btnPauseMusic.setAttribute("aria-pressed", String(musicOn));
  }
}

function startMusic() {
  musicTimer = 0;
  musicStep = 0;
  musicPending = null;
  musicFade = 0;
  if (musicGain && audioCtx && musicOn) {
    const now = audioCtx.currentTime;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(0.58, now);
  }
}

function stopMusic() {
  musicTimer = 0;
  musicStep = 0;
  musicPending = null;
  musicFade = 0;
  if (musicGain && audioCtx) {
    const now = audioCtx.currentTime;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(musicGain.gain.value, now);
    musicGain.gain.linearRampToValueAtTime(0, now + 0.5);
  }
}

function setMusic(index, instant = false) {
  if (index === musicTrack && musicPending === null) return;
  if (instant || !musicOn || !audioCtx || !musicGain) {
    musicTrack = index;
    musicPending = null;
    musicFade = 0;
    musicTimer = 0;
    musicStep = 0;
    if (musicGain && audioCtx && musicOn) {
      const now = audioCtx.currentTime;
      musicGain.gain.cancelScheduledValues(now);
      musicGain.gain.setValueAtTime(0.58, now);
    }
    return;
  }
  musicPending = index;
  musicFade = 0.7;
  musicTimer = Math.min(musicTimer, 0.7);
  const now = audioCtx.currentTime;
  musicGain.gain.cancelScheduledValues(now);
  musicGain.gain.setValueAtTime(musicGain.gain.value, now);
  musicGain.gain.linearRampToValueAtTime(0, now + musicFade);
}

function updateMusic(dt) {
  if (!musicOn || !audioCtx) return;

  if (musicFade > 0) {
    musicFade -= dt;
    if (musicFade <= 0 && musicPending !== null) {
      musicTrack = musicPending;
      musicPending = null;
      musicTimer = 0;
      musicStep = 0;
      if (musicGain) {
        const now = audioCtx.currentTime;
        musicGain.gain.cancelScheduledValues(now);
        musicGain.gain.setValueAtTime(0, now);
        musicGain.gain.linearRampToValueAtTime(0.58, now + 0.8);
      }
    }
  }

  if (state !== "playing" && state !== "waveBreak" && state !== "choices") return;

  const stepDur = 60 / MUSIC_TRACKS[musicTrack].bpm / 4;
  musicTimer -= dt;
  while (musicTimer <= 0) {
    scheduleMusicStep(musicStep);
    musicStep = (musicStep + 1) % 64;
    musicTimer += stepDur;
  }
}

function scheduleMusicStep(step) {
  const track = MUSIC_TRACKS[musicTrack] || MUSIC_TRACKS[0];
  const lead = track.melody[step % track.melody.length];
  const low = track.bass[step % track.bass.length];
  const pulse = track.arp[step % track.arp.length];

  if (lead) playMusicTone({ midi: lead, duration: 0.10, type: "square", gain: 0.078, detune: 12 });
  if (low) playMusicTone({ midi: low, duration: 0.13, type: "sawtooth", gain: 0.135, detune: -9 });
  if (pulse) playMusicTone({ midi: pulse, duration: 0.055, type: "square", gain: 0.044, detune: -18 });

  if (step % 2 === 0) playMusicNoise({ duration: 0.025, gain: 0.062, frequency: 10500 });
  if (step % 16 === 0 || step % 16 === 6) playMusicKick();
  if (step % 16 === 4 || step % 16 === 12) playMusicNoise({ duration: 0.13, gain: 0.13, frequency: 2200 });
  if (step % 16 === 14) playMusicNoise({ duration: 0.24, gain: 0.09, frequency: 4800 });
}

function playMusicTone({ midi, duration, type = "square", gain = 0.08, detune = 0 }) {
  if (!ensureMusicAudio()) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(midiHz(midi), now);
  osc.detune.setValueAtTime(detune, now);

  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.linearRampToValueAtTime(gain, now + 0.008);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(amp);
  amp.connect(musicGain);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playMusicNoise({ duration = 0.12, gain = 0.08, frequency = 4000 }) {
  if (!ensureMusicAudio()) return;
  const now = audioCtx.currentTime;
  const frames = Math.max(1, Math.floor(audioCtx.sampleRate * duration));
  const buffer = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < frames; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  }

  const source = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const amp = audioCtx.createGain();

  source.buffer = buffer;
  filter.type = "highpass";
  filter.frequency.value = frequency;
  amp.gain.setValueAtTime(gain, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  source.connect(filter);
  filter.connect(amp);
  amp.connect(musicGain);
  source.start(now);
  source.stop(now + duration + 0.02);
}

function playMusicKick() {
  if (!ensureMusicAudio()) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(42, now + 0.13);
  amp.gain.setValueAtTime(0.16, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

  osc.connect(amp);
  amp.connect(musicGain);
  osc.start(now);
  osc.stop(now + 0.18);
}

function midiHz(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

if (btnSound) {
  btnSound.addEventListener("click", () => {
    initAudio();
    toggleSfx();
  });
}

if (btnMusic) {
  btnMusic.addEventListener("click", () => {
    initAudio();
    toggleMusic();
  });
}

if (btnPauseSfx) {
  btnPauseSfx.addEventListener("click", () => {
    initAudio();
    toggleSfx();
  });
}

if (btnPauseMusic) {
  btnPauseMusic.addEventListener("click", () => {
    initAudio();
    toggleMusic();
  });
}

if (btnBoth) {
  btnBoth.addEventListener("click", () => {
    initAudio();
    toggleBoth();
  });
}

updateAudioUI();

