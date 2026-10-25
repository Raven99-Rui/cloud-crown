/* ================================================================
   Tea-room soundscape, synthesised in the browser.
   A slow 3/4 music-box waltz, a porcelain tick, and a soft spin whir.
   ================================================================ */

const NOTE = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

export class TeaAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.fxBus = null;
    this.reverb = null;
    this.spinGain = null;
    this.spinFilter = null;
    this.started = false;
    this.muted = localStorage.getItem('teacup-muted') === '1';
    this.bar = 0;
    this.nextBarTime = 0;
    this.timer = null;
  }

  async init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') await this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    this.ctx = ctx;

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.72;
    this.master.connect(ctx.destination);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.38;
    this.fxBus = ctx.createGain();
    this.fxBus.gain.value = 0.48;

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(2.4, 2.2);
    const wet = ctx.createGain();
    wet.gain.value = 0.26;
    this.reverb.connect(wet).connect(this.master);

    this.musicBus.connect(this.master);
    this.musicBus.connect(this.reverb);
    this.fxBus.connect(this.master);
    this.fxBus.connect(this.reverb);

    this.makeSpinBus();
    this.started = true;
    this.nextBarTime = ctx.currentTime + 0.35;
    this.timer = window.setInterval(() => this.scheduler(), 120);
    this.scheduler();
  }

  makeImpulse(seconds, decay) {
    const ctx = this.ctx;
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const data = buffer.getChannelData(c);
      for (let i = 0; i < length; i++) {
        const t = i / length;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (i < 40 ? i / 40 : 1);
      }
    }
    return buffer;
  }

  makeSpinBus() {
    const ctx = this.ctx;
    const len = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.92 + white * 0.08;
      data[i] = last * 2.4;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    this.spinFilter = ctx.createBiquadFilter();
    this.spinFilter.type = 'bandpass';
    this.spinFilter.frequency.value = 220;
    this.spinFilter.Q.value = 0.8;
    this.spinGain = ctx.createGain();
    this.spinGain.gain.value = 0;
    src.connect(this.spinFilter).connect(this.spinGain).connect(this.fxBus);
    src.start();

    const hum = ctx.createOscillator();
    hum.type = 'sine';
    hum.frequency.value = 58;
    const humGain = ctx.createGain();
    humGain.gain.value = 0.018;
    hum.connect(humGain).connect(this.fxBus);
    hum.start();
  }

  setSpin(rpm) {
    if (!this.ctx || !this.spinGain) return;
    const now = this.ctx.currentTime;
    const level = Math.min(0.17, Math.abs(rpm) / 340);
    this.spinGain.gain.setTargetAtTime(level, now, 0.18);
    this.spinFilter.frequency.setTargetAtTime(180 + Math.min(rpm, 50) * 12, now, 0.25);
  }

  setRide(active) {
    if (!this.ctx) return;
    // A warm low pad as the stage starts to turn.
    const now = this.ctx.currentTime;
    if (active) {
      this.ridePad = this.ctx.createOscillator();
      this.ridePad.type = 'sine';
      this.ridePad.frequency.value = NOTE(36);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.028, now + 1.4);
      this.ridePad.connect(gain).connect(this.musicBus);
      this.ridePad.start();
      this.ridePadGain = gain;
    } else if (this.ridePad) {
      this.ridePadGain.gain.setTargetAtTime(0, now, 0.4);
      const pad = this.ridePad;
      window.setTimeout(() => {
        try { pad.stop(); } catch { /* already stopped */ }
      }, 1600);
      this.ridePad = null;
      this.setSpin(0);
    }
  }

  scheduler() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    while (this.nextBarTime < now + 0.55) {
      this.scheduleBar(this.nextBarTime, this.bar);
      this.nextBarTime += 60 / 72 * 3;
      this.bar = (this.bar + 1) % 8;
    }
  }

  scheduleBar(t, bar) {
    const progressions = [
      { bass: 36, chord: [60, 64, 67], color: 72 },
      { bass: 45, chord: [57, 60, 64], color: 69 },
      { bass: 41, chord: [53, 57, 60], color: 65 },
      { bass: 43, chord: [55, 59, 62], color: 67 },
      { bass: 36, chord: [60, 64, 67], color: 72 },
      { bass: 38, chord: [50, 57, 62], color: 69 },
      { bass: 41, chord: [53, 57, 60], color: 65 },
      { bass: 43, chord: [55, 59, 62], color: 67 },
    ];
    const p = progressions[bar];
    const beat = 60 / 72;

    this.pluck(NOTE(p.bass), t, beat * 1.8, 0.14, 'bass');

    // waltz oom-pah-pah
    [1, 2].forEach((b, i) => {
      p.chord.forEach((n, j) => {
        this.pluck(NOTE(n + (i === 1 ? 12 : 0)), t + beat * b + j * 0.004, beat * 0.55, 0.028, 'string');
      });
    });

    // wandering music-box melody
    const melody = [
      [p.color, 0], [p.color + 4, 0.75], [p.color + 7, 1.5],
      [p.color + 2, 2.0], [p.color + 5, 2.5],
    ];
    melody.forEach(([n, offset], i) => {
      this.pluck(NOTE(n + (bar > 3 && i % 2 ? 12 : 0)), t + offset * beat, 1.25, 0.055, 'box');
    });

    if (bar === 0 || bar === 4) {
      this.pluck(NOTE(p.color + 12), t + beat * 2.75, 2.6, 0.028, 'box');
    }
  }

  pluck(freq, time, dur, volume, type = 'box') {
    const ctx = this.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const partial = ctx.createOscillator();
    const partialGain = ctx.createGain();
    const pan = ctx.createStereoPanner();
    pan.pan.value = (Math.random() - 0.5) * 0.35;

    if (type === 'bass') {
      osc.type = 'sine';
      partial.type = 'triangle';
      partialGain.gain.value = 0.15;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(volume, time + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
      partial.frequency.value = freq * 2;
    } else if (type === 'string') {
      osc.type = 'triangle';
      partial.type = 'sine';
      partialGain.gain.value = 0.2;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(volume, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
      partial.frequency.value = freq * 2.01;
    } else {
      osc.type = 'sine';
      partial.type = 'sine';
      partialGain.gain.value = 0.28;
      partial.frequency.value = freq * 3.005;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(volume, time + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    }
    osc.frequency.value = freq;
    osc.connect(gain);
    partial.connect(partialGain).connect(gain);
    gain.connect(pan).connect(this.musicBus);
    osc.start(time);
    partial.start(time);
    osc.stop(time + dur + 0.05);
    partial.stop(time + dur + 0.05);
  }

  chime(kind = 'select') {
    if (!this.ctx) return;
    const now = this.ctx.currentTime + 0.01;
    if (kind === 'select') {
      [NOTE(76), NOTE(81)].forEach((f, i) => this.pluck(f, now + i * 0.055, 0.8, 0.05));
    } else if (kind === 'ride') {
      [NOTE(72), NOTE(76), NOTE(79), NOTE(84), NOTE(88)].forEach((f, i) => {
        this.pluck(f, now + i * 0.07, 1.6, 0.045);
      });
    } else if (kind === 'exit') {
      [NOTE(79), NOTE(74), NOTE(69)].forEach((f, i) => this.pluck(f, now + i * 0.085, 1.1, 0.04));
    } else {
      [NOTE(84)].forEach((f) => this.pluck(f, now, 0.5, 0.03));
    }
  }

  async toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('teacup-muted', this.muted ? '1' : '0');
    if (this.master && this.ctx) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.72, this.ctx.currentTime, 0.12);
    }
    if (!this.muted) await this.init();
    return this.muted;
  }

  setMuted(value) {
    if (value === this.muted) return;
    this.toggleMute();
  }
}
