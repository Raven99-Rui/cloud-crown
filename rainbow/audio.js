/* ================================================================
   彩虹滑道机 · a small live Web Audio band
   Calliope, glass bells, wind, distant crowd.
   ================================================================ */

export class RainbowAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.ambienceOn = false;
    this.wind = { gain: null, filter: null, source: null };
    this.timer = null;
    this.step = 0;
    this.noiseBuffer = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.7;
    this.master.connect(ctx.destination);

    // gentle reverb-ish delay bus
    const delay = ctx.createDelay(1.2);
    delay.delayTime.value = 0.34;
    const fb = ctx.createGain();
    fb.gain.value = 0.26;
    const wet = ctx.createGain();
    wet.gain.value = 0.2;
    this.bus = ctx.createGain();
    this.bus.gain.value = 0.5;
    this.bus.connect(this.master);
    this.bus.connect(delay);
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(wet);
    wet.connect(this.master);

    this.noiseBuffer = this.makeNoise(2.4);
    this.makeWind();
    if (this.ambienceOn) this.startAmbience();
  }

  makeNoise(seconds) {
    const ctx = this.ctx;
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  makeWind() {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 420;
    filter.Q.value = 0.75;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    this.wind = { source: src, filter, gain };
  }

  setMuted(muted) {
    this.muted = muted;
    if (!this.ctx) return;
    this.master.gain.setTargetAtTime(muted ? 0 : 0.7, this.ctx.currentTime, 0.15);
  }

  toggleMuted() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  tone({ freq = 440, dur = 0.5, type = 'triangle', gain = 0.12, when = 0, attack = 0.01, release = 0.3, pan = 0, detune = 0 }) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + when;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    osc.detune.value = detune;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + release);
    let node = osc;
    if (pan && ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      node.connect(p);
      node = p;
    }
    node.connect(g);
    g.connect(this.bus || this.master);
    osc.start(t0);
    osc.stop(t0 + dur + release + 0.05);
  }

  chord(freqs, dur = 0.8, gain = 0.05) {
    freqs.forEach((f, i) => this.tone({ freq: f, dur, type: 'sine', gain, when: i * 0.01, release: 0.9 }));
  }

  click() {
    this.init();
    this.tone({ freq: 880, dur: 0.06, type: 'sine', gain: 0.05, release: 0.08 });
    this.tone({ freq: 1320, dur: 0.05, type: 'sine', gain: 0.025, when: 0.03, release: 0.06 });
  }

  bell(index = 0, gain = 0.08) {
    if (!this.ctx) return;
    const scale = [659.25, 783.99, 987.77, 1174.66, 1318.51, 1567.98];
    const f = scale[index % scale.length];
    this.tone({ freq: f, dur: 0.32, type: 'sine', gain, release: 0.65 });
    this.tone({ freq: f * 2.01, dur: 0.18, type: 'sine', gain: gain * 0.36, release: 0.45 });
    this.tone({ freq: f * 3.02, dur: 0.12, type: 'sine', gain: gain * 0.16, release: 0.3 });
  }

  startAmbience() {
    this.ambienceOn = true;
    if (!this.ctx) return;
    if (this.timer) return;
    this.step = 0;
    // 3/4 carousel waltz, very soft, in C
    const chords = [
      [130.81, 164.81, 196.0], [174.61, 220.0, 261.63],
      [196.0, 246.94, 293.66], [164.81, 207.65, 246.94],
      [130.81, 164.81, 196.0], [196.0, 246.94, 293.66],
      [174.61, 220.0, 261.63], [130.81, 164.81, 196.0],
    ];
    const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 523.25, 493.88, 523.25];
    const tick = () => {
      if (!this.ambienceOn || this.muted) return;
      const chord = chords[this.step % chords.length];
      this.chord(chord, 0.9, 0.022);
      if (this.step % 3 === 0) {
        this.tone({ freq: melody[(this.step / 3) % melody.length], dur: 0.55, type: 'triangle', gain: 0.028, release: 1.3, pan: -0.12 });
        this.tone({ freq: melody[(this.step / 3) % melody.length] * 2, dur: 0.35, type: 'sine', gain: 0.012, release: 0.8, pan: 0.18 });
      }
      if (this.step % 6 === 2) {
        this.tone({ freq: 1567.98, dur: 0.3, type: 'sine', gain: 0.015, release: 0.8, pan: 0.3 });
      }
      this.step++;
    };
    tick();
    this.timer = window.setInterval(tick, 940);
  }

  stopAmbience() {
    this.ambienceOn = false;
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  setWind(level) {
    if (!this.ctx || !this.wind.gain) return;
    const now = this.ctx.currentTime;
    this.wind.gain.gain.setTargetAtTime(level * 0.11, now, 0.3);
    this.wind.filter.frequency.setTargetAtTime(380 + level * 680, now, 0.4);
  }

  whoosh(strength = 1) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 1.1;
    filter.frequency.setValueAtTime(280, t0);
    filter.frequency.exponentialRampToValueAtTime(1900 * strength, t0 + 0.5);
    filter.frequency.exponentialRampToValueAtTime(420, t0 + 1.4);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.16 * strength, t0 + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.5);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(t0);
    src.stop(t0 + 1.6);
  }

  boost() {
    if (!this.ctx || this.muted) return;
    this.whoosh(0.55);
    this.tone({ freq: 220, dur: 0.22, type: 'sawtooth', gain: 0.025, release: 0.2 });
    this.tone({ freq: 330, dur: 0.25, type: 'triangle', gain: 0.02, when: 0.04, release: 0.25 });
  }

  countdown(step) {
    this.bell(step, 0.06);
    this.tone({ freq: step === 1 ? 1046.5 : 523.25, dur: 0.14, type: 'sine', gain: 0.05, release: 0.25 });
  }

  go() {
    this.chord([261.63, 329.63, 392.0, 523.25], 1.1, 0.045);
    this.whoosh(1.0);
  }

  splash() {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, t0);
    filter.frequency.exponentialRampToValueAtTime(300, t0 + 0.7);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.13, t0 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.85);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(t0);
    src.stop(t0 + 0.9);
  }

  cheer() {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime;
    // small crowd: filtered noise, tremolo, plus bells
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 0.6;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.07, t0 + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.2);
    const trem = ctx.createOscillator();
    trem.frequency.value = 7;
    const tremGain = ctx.createGain();
    tremGain.gain.value = 0.02;
    trem.connect(tremGain).connect(gain.gain);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(t0);
    src.stop(t0 + 2.3);
    trem.start(t0);
    trem.stop(t0 + 2.3);
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone({ freq: f, dur: 0.4, type: 'sine', gain: 0.03, when: 0.14 + i * 0.09, release: 0.8 }));
  }

  finishFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((f, i) => {
      this.tone({ freq: f, dur: 0.5, type: 'triangle', gain: 0.045, when: i * 0.1, release: 1.0 });
      this.tone({ freq: f * 2, dur: 0.24, type: 'sine', gain: 0.016, when: i * 0.1 + 0.02, release: 0.6 });
    });
    this.cheer();
  }
}
