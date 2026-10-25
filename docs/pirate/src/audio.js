/* ================================================================
   A tiny synthesized soundscape for Black Sail Bay.
   No samples, no external files — just the harbour in Web Audio.
   ================================================================ */

export class BayAudio {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.muted = true;
    this.rideActive = false;
    this.energy = 0;
    this.nextCreak = 0;
    this.nextGull = 4;
    this.lastNow = 0;
  }

  async enable() {
    if (!this.ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      this.ctx = new Ctx();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0;
      this.master.connect(this.ctx.destination);

      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 18;
      comp.ratio.value = 3;
      comp.attack.value = 0.01;
      comp.release.value = 0.3;
      comp.connect(this.master);
      this.bus = this.ctx.createGain();
      this.bus.connect(comp);

      this.noiseBuffer = this.makeNoise(4.0);
      this.buildSea();
      this.buildWind();
      this.buildDrone();
      this.started = true;
    }
    await this.ctx.resume();
    this.muted = false;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.setTargetAtTime(0.7, this.ctx.currentTime, 0.8);
    this.chime();
    return true;
  }

  makeNoise(seconds = 3) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(2, len, this.ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      let last = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        // slightly brown noise: warmer and more like water
        last = (last + 0.018 * white) / 1.018;
        data[i] = last * 3.2 + white * 0.15;
      }
    }
    return buf;
  }

  loopNoise(buffer, rate = 1) {
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.playbackRate.value = rate;
    src.start();
    return src;
  }

  buildSea() {
    const src = this.loopNoise(this.noiseBuffer, 0.8);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 440;
    filter.Q.value = 0.35;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.12;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);

    // slow swell
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.09;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 170;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    const lfo2 = this.ctx.createOscillator();
    lfo2.frequency.value = 0.14;
    const lfo2Gain = this.ctx.createGain();
    lfo2Gain.gain.value = 0.032;
    lfo2.connect(lfo2Gain);
    lfo2Gain.connect(gain.gain);
    lfo2.start();

    this.seaGain = gain;
  }

  buildWind() {
    const src = this.loopNoise(this.noiseBuffer, 1.17);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 760;
    filter.Q.value = 0.55;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.018;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    this.windGain = gain;
    this.windFilter = filter;
  }

  buildDrone() {
    const gain = this.ctx.createGain();
    gain.gain.value = 0.0;
    gain.connect(this.bus);
    this.droneGain = gain;
    const notes = [73.42, 110.0, 146.83];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      const g = this.ctx.createGain();
      g.gain.value = [0.045, 0.018, 0.012][i];
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 380;
      osc.connect(filter);
      filter.connect(g);
      g.connect(gain);
      osc.start();
    });
  }

  setMuted(muted) {
    if (!this.ctx) return;
    this.muted = muted;
    this.master.gain.setTargetAtTime(muted ? 0 : 0.7, this.ctx.currentTime, 0.25);
  }

  setRide(active) {
    this.rideActive = active;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (active) {
      this.droneGain.gain.setTargetAtTime(0.5, t, 1.2);
      this.horn();
      this.nextCreak = t + 0.7;
    } else {
      this.droneGain.gain.setTargetAtTime(0, t, 1.4);
    }
  }

  setEnergy(value) {
    this.energy = Math.max(0, Math.min(1, value));
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.windGain.gain.setTargetAtTime(0.018 + this.energy * 0.12, t, 0.22);
    this.windFilter.frequency.setTargetAtTime(680 + this.energy * 1100, t, 0.3);
    this.seaGain.gain.setTargetAtTime(0.115 + this.energy * 0.035, t, 0.5);
  }

  chime() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    [523.25, 783.99, 1046.5].forEach((f, i) => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.035 / (i + 1), t + 0.02 + i * 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1 + i * 0.14);
      o.connect(g);
      g.connect(this.bus);
      o.start(t + i * 0.05);
      o.stop(t + 1.4);
    });
  }

  horn() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    [92.5, 138.6, 185].forEach((f, i) => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(f * 0.93, t);
      o.frequency.linearRampToValueAtTime(f, t + 0.18);
      filter.type = 'lowpass';
      filter.frequency.value = 700;
      filter.Q.value = 1.2;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.055 / (i + 1), t + 0.12);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
      o.connect(filter);
      filter.connect(g);
      g.connect(this.bus);
      o.start(t);
      o.stop(t + 2.8);
    });
  }

  boost() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    this.creak();
    [392, 587.33].forEach((f, i) => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'triangle';
      o.frequency.value = f;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.025, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
      o.connect(g);
      g.connect(this.bus);
      o.start(t + i * 0.06);
      o.stop(t + 1);
    });
  }

  creak() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime + Math.random() * 0.06;
    const dur = 0.65 + Math.random() * 0.9;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(44 + Math.random() * 18, t);
    osc.frequency.linearRampToValueAtTime(30 + Math.random() * 10, t + dur);
    filter.type = 'bandpass';
    filter.frequency.value = 220 + Math.random() * 180;
    filter.Q.value = 6;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.045, t + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    osc.start(t);
    osc.stop(t + dur + 0.1);

    // rope / timber tick
    const tick = this.ctx.createBufferSource();
    tick.buffer = this.noiseBuffer;
    tick.playbackRate.value = 1.8;
    const tf = this.ctx.createBiquadFilter();
    tf.type = 'highpass';
    tf.frequency.value = 800;
    const tg = this.ctx.createGain();
    tg.gain.setValueAtTime(0.02, t);
    tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    tick.connect(tf);
    tf.connect(tg);
    tg.connect(this.bus);
    tick.start(t);
    tick.stop(t + 0.3);
  }

  gull() {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      const f = this.ctx.createBiquadFilter();
      o.type = 'sine';
      const base = 1300 + Math.random() * 480;
      o.frequency.setValueAtTime(base, t + i * 0.18);
      o.frequency.exponentialRampToValueAtTime(base * 0.64, t + 0.14 + i * 0.18);
      f.type = 'bandpass';
      f.frequency.value = 1400;
      f.Q.value = 2.2;
      g.gain.setValueAtTime(0, t + i * 0.18);
      g.gain.linearRampToValueAtTime(0.012, t + 0.025 + i * 0.18);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4 + i * 0.18);
      o.connect(f);
      f.connect(g);
      g.connect(this.bus);
      o.start(t + i * 0.18);
      o.stop(t + i * 0.18 + 0.5);
    }
  }

  update(dt) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    if (this.rideActive) {
      if (t >= this.nextCreak) {
        this.creak();
        this.nextCreak = t + 1.4 + Math.random() * 1.8 - this.energy * 0.5;
      }
    }
    if (t >= this.nextGull) {
      this.gull();
      this.nextGull = t + 11 + Math.random() * 17;
    }
  }
}
