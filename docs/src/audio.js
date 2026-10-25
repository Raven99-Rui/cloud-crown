// A tiny generative soundtrack — no audio files, every note is synthesized live.
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.muted = false;
    this.master = null;
    this.musicBus = null;
    this.sfxBus = null;
    this.reverb = null;
    this.step = 0;
    this.nextBell = 0;
    this.nextChord = 0;
    this.chordIndex = 0;
    this.timer = null;
    this.noiseBuffer = null;
    this.calliope = false;
    this.calliopeBus = null;
    this.calliopeStep = 0;
    this.nextCalliope = 0;
  }

  init() {
    if (this.started) {
      this.ctx?.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.started = true;

    this.master = this.ctx.createGain();
    this.master.gain.value = 0.7;
    this.master.connect(this.ctx.destination);

    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 18;
    comp.ratio.value = 3;
    comp.attack.value = 0.02;
    comp.release.value = 0.35;
    comp.connect(this.master);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.48;
    this.musicBus.connect(comp);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = 0.62;
    this.sfxBus.connect(comp);

    this.calliopeBus = this.ctx.createGain();
    this.calliopeBus.gain.value = 0.82;
    this.calliopeBus.connect(comp);

    this.reverb = this.ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(2.8, 2.4);
    const wet = this.ctx.createGain();
    wet.gain.value = 0.34;
    this.reverb.connect(wet);
    wet.connect(comp);

    this.noiseBuffer = this.makeNoise(2.5);

    this.createBreeze();
    this.nextChord = this.ctx.currentTime + 0.2;
    this.nextBell = this.ctx.currentTime + 1.4;
    this.timer = setInterval(() => this.schedule(), 120);
    setTimeout(() => this.rideFanfare(), 700);
  }

  makeImpulse(seconds, decay) {
    const rate = this.ctx.sampleRate;
    const len = Math.floor(rate * seconds);
    const impulse = this.ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const data = impulse.getChannelData(c);
      for (let i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
    }
    return impulse;
  }

  makeNoise(seconds) {
    const rate = this.ctx.sampleRate;
    const len = Math.floor(rate * seconds);
    const buffer = this.ctx.createBuffer(1, len, rate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.018 * white) / 1.018;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  createBreeze() {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 780;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.018;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start();
  }

  schedule() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    if (now >= this.nextChord - 0.1) {
      this.playChord(now + 0.1);
      this.nextChord = now + 7.2;
    }
    if (now >= this.nextBell - 0.15) {
      this.playBell(now + 0.15);
      this.nextBell = now + 0.58 + Math.random() * 1.35;
    }
    if (this.calliope && this.calliopeBus) {
      if (now >= this.nextCalliope - 0.08) {
        this.playCalliopeStep(this.nextCalliope + 0.05);
        this.nextCalliope += 0.3;
        this.calliopeStep++;
      }
    }
  }

  // A tiny fairground calliope waltz, synthesized live for the carousel ride.
  playCalliopeStep(when) {
    const melody = [
      523.25, 659.25, 783.99, 659.25, 523.25, 392.0,
      440.0, 523.25, 659.25, 523.25, 440.0, 392.0,
      493.88, 587.33, 698.46, 587.33, 493.88, 349.23,
      392.0, 493.88, 587.33, 493.88, 392.0, 329.63,
    ];
    const basses = [130.81, 98.0, 110.0, 87.31];
    const step = this.calliopeStep % melody.length;
    const note = melody[step];
    this.calliopeNote(note, when, 0.42, 0.032, 'triangle');
    this.calliopeNote(note * 2, when, 0.2, 0.008, 'sine');
    if (step % 3 === 0) {
      const bass = basses[Math.floor(step / 6) % basses.length];
      this.calliopeNote(bass, when, 0.5, 0.035, 'sine');
      this.calliopeNote(bass * 1.5, when + 0.01, 0.32, 0.014, 'triangle');
    } else if (step % 3 === 1) {
      this.calliopeNote(note * 0.75, when, 0.24, 0.012, 'sine');
    }
  }

  calliopeNote(freq, when, duration, volume, type) {
    if (!this.ctx || !this.calliopeBus) return;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2.01;
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3100, when);
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(volume, when + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    const overtone = this.ctx.createGain();
    overtone.gain.value = 0.22;
    osc.connect(filter);
    osc2.connect(overtone);
    overtone.connect(filter);
    filter.connect(gain);
    gain.connect(this.calliopeBus);
    gain.connect(this.reverb);
    osc.start(when);
    osc2.start(when);
    osc.stop(when + duration + 0.05);
    osc2.stop(when + duration + 0.05);
  }

  startCarouselMusic() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    this.calliope = true;
    this.calliopeStep = 0;
    this.nextCalliope = this.ctx.currentTime + 0.1;
  }

  stopCarouselMusic() {
    this.calliope = false;
  }

  playChord(when) {
    const chords = [
      [130.81, 196.0, 246.94, 329.63],
      [110.0, 164.81, 220.0, 293.66],
      [87.31, 174.61, 220.0, 329.63],
      [98.0, 146.83, 246.94, 293.66],
    ];
    const notes = chords[this.chordIndex % chords.length];
    this.chordIndex++;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(620, when);
    filter.frequency.linearRampToValueAtTime(1350, when + 2.8);
    filter.frequency.linearRampToValueAtTime(600, when + 7);
    filter.Q.value = 0.8;
    const bus = this.ctx.createGain();
    bus.gain.setValueAtTime(0.0001, when);
    bus.gain.exponentialRampToValueAtTime(0.036, when + 2.6);
    bus.gain.exponentialRampToValueAtTime(0.0001, when + 7.4);
    filter.connect(bus);
    bus.connect(this.musicBus);
    bus.connect(this.reverb);

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = i === 0 ? 'sine' : i % 2 ? 'triangle' : 'sine';
      osc.frequency.value = freq;
      osc.detune.value = (i - 1.5) * 4;
      const g = this.ctx.createGain();
      g.gain.value = i === 0 ? 0.55 : 0.3;
      osc.connect(g);
      g.connect(filter);
      osc.start(when);
      osc.stop(when + 7.8);
    });
  }

  playBell(when) {
    const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51, 1567.98];
    const freq = scale[Math.floor(Math.random() * scale.length)];
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2.01;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(0.028, when + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + 2.6);
    const gain2 = this.ctx.createGain();
    gain2.gain.value = 0.2;
    osc.connect(gain);
    osc2.connect(gain2);
    gain2.connect(gain);
    gain.connect(this.musicBus);
    gain.connect(this.reverb);
    osc.start(when);
    osc2.start(when);
    osc.stop(when + 2.8);
    osc2.stop(when + 2.8);
  }

  tone(freq, duration = 0.2, type = 'sine', volume = 0.2, delay = 0, slide = 0) {
    if (!this.ctx) return;
    const when = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, when);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), when + duration);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(volume, when + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    osc.connect(gain);
    gain.connect(this.sfxBus);
    gain.connect(this.reverb);
    osc.start(when);
    osc.stop(when + duration + 0.05);
  }

  noise(duration = 1, volume = 0.2, freq = 1800, type = 'bandpass', delay = 0) {
    if (!this.ctx) return;
    const when = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, when);
    filter.frequency.exponentialRampToValueAtTime(Math.max(100, freq * 0.2), when + duration);
    filter.Q.value = 1.1;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(volume, when + 0.07);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxBus);
    src.start(when);
    src.stop(when + duration + 0.1);
  }

  click() {
    this.tone(740, 0.12, 'sine', 0.06, 0, 180);
  }

  chime() {
    [1046.5, 1318.5, 1568, 2093].forEach((f, i) => {
      this.tone(f, 1.6, 'sine', 0.13 - i * 0.018, i * 0.09);
    });
    this.tone(523.25, 2.4, 'triangle', 0.055, 0.02);
  }

  collectStar() {
    this.chime();
    setTimeout(() => this.tone(2093, 1.8, 'sine', 0.06, 0), 180);
  }

  whoosh() {
    this.noise(1.8, 0.23, 2600, 'bandpass');
    this.tone(90, 1.5, 'sawtooth', 0.035, 0, -40);
  }

  rideFanfare() {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
      this.tone(f, 0.9, 'triangle', 0.055, i * 0.13, 30);
    });
  }

  firework(delay = 0) {
    this.noise(1.5, 0.28, 190, 'lowpass', delay);
    this.tone(70, 1.2, 'sine', 0.13, delay, -35);
    this.tone(1200, 0.35, 'sine', 0.018, delay + 0.05, -500);
  }

  setMuted(muted) {
    this.muted = muted;
    if (!this.ctx) return;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.7, this.ctx.currentTime + 0.3);
  }
}
