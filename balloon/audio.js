/* ================================================================
   Cloud Crown soundscape — an airy music-box waltz, high wind,
   a distant cable creak, and the soft roar of the burner.
   Everything is synthesised in the browser.
   ================================================================ */

const NOTE = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

export class CloudAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.fxBus = null;
    this.reverb = null;
    this.windGain = null;
    this.windFilter = null;
    this.burnerGain = null;
    this.burnerFilter = null;
    this.creakGain = null;
    this.started = false;
    this.muted = localStorage.getItem('cloud-crown-muted') === '1';
    this.bar = 0;
    this.nextBarTime = 0;
    this.timer = null;
    this.rideActive = false;
    this.altitude = 0;
    this.velocity = 0;
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
    this.master.gain.value = this.muted ? 0 : 0.62;
    this.master.connect(ctx.destination);

    this.musicBus = ctx.createGain();
    this.musicBus.gain.value = 0.32;
    this.fxBus = ctx.createGain();
    this.fxBus.gain.value = 0.42;

    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(4.2, 2.0);
    const wet = ctx.createGain();
    wet.gain.value = 0.42;
    this.reverb.connect(wet).connect(this.master);

    this.musicBus.connect(this.master);
    this.musicBus.connect(this.reverb);
    this.fxBus.connect(this.master);
    this.fxBus.connect(this.reverb);

    this.makeWind();
    this.makeBurner();
    this.started = true;
    this.nextBarTime = ctx.currentTime + 0.45;
    this.timer = window.setInterval(() => this.scheduler(), 140);
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
        const early = i < 90 ? i / 90 : 1;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * early * (0.9 + Math.sin(i * 0.001) * 0.1);
      }
    }
    return buffer;
  }

  makeNoiseBuffer(seconds = 3) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.92 + white * 0.08;
      data[i] = last * 2.1;
    }
    return buffer;
  }

  makeWind() {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.makeNoiseBuffer(3.2);
    src.loop = true;
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.value = 480;
    this.windFilter.Q.value = 0.55;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0.014;
    src.connect(this.windFilter).connect(this.windGain).connect(this.fxBus);
    src.start();

    // a thinner whistling layer
    const whistle = ctx.createBufferSource();
    whistle.buffer = this.makeNoiseBuffer(2.4);
    whistle.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 860;
    bp.Q.value = 2.4;
    const wg = ctx.createGain();
    wg.gain.value = 0.0055;
    whistle.connect(bp).connect(wg).connect(this.fxBus);
    whistle.start();
    this.whistle = wg;
  }

  makeBurner() {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.makeNoiseBuffer(1.7);
    src.loop = true;
    this.burnerFilter = ctx.createBiquadFilter();
    this.burnerFilter.type = 'bandpass';
    this.burnerFilter.frequency.value = 340;
    this.burnerFilter.Q.value = 0.7;
    this.burnerGain = ctx.createGain();
    this.burnerGain.gain.value = 0;
    src.connect(this.burnerFilter).connect(this.burnerGain).connect(this.fxBus);
    src.start();

    // low metal creak bus, used for departure / arrival
    const creak = ctx.createOscillator();
    creak.type = 'sawtooth';
    creak.frequency.value = 63;
    this.creakFilter = ctx.createBiquadFilter();
    this.creakFilter.type = 'bandpass';
    this.creakFilter.frequency.value = 180;
    this.creakFilter.Q.value = 3;
    this.creakGain = ctx.createGain();
    this.creakGain.gain.value = 0;
    creak.connect(this.creakFilter).connect(this.creakGain).connect(this.fxBus);
    creak.start();
    this.creakOsc = creak;
  }

  setRide(active) {
    if (!this.ctx) return;
    this.rideActive = active;
    const now = this.ctx.currentTime;
    if (active) {
      this.ridePad = this.ctx.createOscillator();
      this.ridePad.type = 'sine';
      this.ridePad.frequency.value = NOTE(36);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.032, now + 1.8);
      this.ridePad.connect(gain).connect(this.musicBus);
      this.ridePad.start();
      this.ridePadGain = gain;
      this.creak();
    } else if (this.ridePad) {
      this.ridePadGain.gain.setTargetAtTime(0, now, 0.5);
      const pad = this.ridePad;
      window.setTimeout(() => { try { pad.stop(); } catch { /* stopped */ } }, 1800);
      this.ridePad = null;
      this.setAltitude(0, 0);
    }
    this.updateFlight();
  }

  setAltitude(altitude, velocity) {
    this.altitude = altitude;
    this.velocity = velocity;
    this.updateFlight();
  }

  updateFlight() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const alt = this.rideActive ? this.altitude : 0;
    const vel = this.rideActive ? this.velocity : 0;
    const wind = this.rideActive ? 0.022 + Math.min(0.045, alt * 0.0011) + Math.min(0.024, Math.abs(vel) * 0.0028) : 0.010;
    this.windGain.gain.setTargetAtTime(wind, now, 0.6);
    this.windFilter.frequency.setTargetAtTime(380 + alt * 8.5 + Math.abs(vel) * 55, now, 0.8);
    this.whistle.gain.setTargetAtTime(this.rideActive ? 0.004 + Math.min(0.012, Math.abs(vel) * 0.001) : 0.003, now, 0.7);
    const burner = this.rideActive ? (vel > 0.35 ? 0.022 + Math.min(0.02, vel * 0.005) : 0.0035) : 0;
    this.burnerGain.gain.setTargetAtTime(burner, now, 0.28);
    this.burnerFilter.frequency.setTargetAtTime(280 + Math.abs(vel) * 36, now, 0.4);
  }

  creak() {
    if (!this.ctx || !this.creakGain) return;
    const now = this.ctx.currentTime;
    this.creakGain.gain.cancelScheduledValues(now);
    this.creakGain.gain.setValueAtTime(0.0001, now);
    this.creakGain.gain.linearRampToValueAtTime(0.024, now + 0.12);
    this.creakGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
    this.creakOsc.frequency.cancelScheduledValues(now);
    this.creakOsc.frequency.setValueAtTime(58, now);
    this.creakOsc.frequency.linearRampToValueAtTime(42, now + 1.7);
  }

  scheduler() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    while (this.nextBarTime < now + 0.65) {
      this.scheduleBar(this.nextBarTime, this.bar);
      this.nextBarTime += 60 / 62 * 3;
      this.bar = (this.bar + 1) % 8;
    }
  }

  scheduleBar(t, bar) {
    const beat = 60 / 62;
    const progression = [
      { bass: 41, chord: [53, 57, 60, 64], color: 76 }, // Fmaj7
      { bass: 45, chord: [57, 60, 64, 67], color: 79 }, // Am7
      { bass: 36, chord: [48, 55, 59, 64], color: 76 }, // Cmaj7
      { bass: 43, chord: [55, 59, 62, 67], color: 74 }, // G
      { bass: 41, chord: [53, 57, 60, 64], color: 76 },
      { bass: 38, chord: [50, 57, 62, 65], color: 74 }, // Dm7
      { bass: 43, chord: [55, 59, 62, 66], color: 78 }, // G7
      { bass: 36, chord: [48, 55, 59, 64], color: 76 },
    ];
    const p = progression[bar];

    // warm string pad
    p.chord.forEach((n, i) => {
      this.pad(NOTE(n + 12), t + i * 0.012, beat * 3.0, 0.011 + i * 0.0015);
    });
    this.pad(NOTE(p.bass), t, beat * 3.2, 0.018);

    // a sparse music-box melody, floating above
    const motif = [
      [p.color, 0.0], [p.color + 4, 0.75], [p.color + 7, 1.5],
      [p.color + 9, 2.05], [p.color + 7, 2.55],
    ];
    motif.forEach(([n, off], i) => {
      this.bell(NOTE(n + (bar > 4 && i % 2 ? 12 : 0)), t + off * beat, 1.4, 0.036);
    });
    if (bar === 2 || bar === 6) {
      this.bell(NOTE(p.color + 12), t + beat * 2.62, 2.6, 0.022);
    }

    // distant low pulse, like the pavilion breathing
    if (bar % 2 === 0) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = NOTE(p.bass - 12);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.021, t + 0.7);
      g.gain.exponentialRampToValueAtTime(0.0001, t + beat * 2.8);
      osc.connect(g).connect(this.musicBus);
      osc.start(t);
      osc.stop(t + beat * 2.9);
    }
  }

  pad(freq, time, dur, volume) {
    const ctx = this.ctx;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1200;
    osc.type = 'triangle';
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, time);
    g.gain.linearRampToValueAtTime(volume, time + 0.7);
    g.gain.setValueAtTime(volume, time + dur * 0.66);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(filter).connect(g).connect(this.musicBus);
    osc.start(time);
    osc.stop(time + dur + 0.1);
  }

  bell(freq, time, dur, volume) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const carrier = ctx.createOscillator();
    const partial = ctx.createOscillator();
    const gain = ctx.createGain();
    const pan = ctx.createStereoPanner();
    pan.pan.value = (Math.random() - 0.5) * 0.38;
    carrier.type = 'sine';
    carrier.frequency.value = freq;
    partial.type = 'sine';
    partial.frequency.value = freq * 2.004;
    const partialGain = ctx.createGain();
    partialGain.gain.value = 0.22;
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(volume, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    carrier.connect(gain);
    partial.connect(partialGain).connect(gain);
    gain.connect(pan).connect(this.musicBus);
    carrier.start(time);
    partial.start(time);
    carrier.stop(time + dur + 0.06);
    partial.stop(time + dur + 0.06);
  }

  chime(kind = 'select') {
    if (!this.ctx) return;
    const now = this.ctx.currentTime + 0.02;
    const notes = {
      select: [79, 84],
      next: [81, 86],
      board: [72, 76, 79, 84, 88],
      exit: [79, 74, 69],
      top: [84, 88, 91, 96],
      low: [72, 67],
      tick: [86],
    }[kind] || [84];
    notes.forEach((n, i) => this.bell(NOTE(n), now + i * 0.075, kind === 'board' ? 1.9 : 1.0, 0.035));
  }

  async toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('cloud-crown-muted', this.muted ? '1' : '0');
    if (this.master && this.ctx) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.62, this.ctx.currentTime, 0.12);
    }
    if (!this.muted) await this.init();
    return this.muted;
  }
}
