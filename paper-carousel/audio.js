/**
 * A tiny, fully procedural carousel waltz.
 * No samples, no dependencies: a paper-theatre calliope, plucked strings,
 * sleigh bells and a warm mechanical room.
 */
export class CarouselAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.reverbSend = null;
    this.compressor = null;
    this.enabled = false;
    this.started = false;
    this.timer = 0;
    this.nextBarTime = 0;
    this.barIndex = 0;
    this.ride = false;
    this.rideGain = null;
    this.whir = null;
    this.tempo = 94;
    this.beat = 60 / this.tempo;
    this.barDuration = this.beat * 3;
    this.harmony = [
      [48, 55, 60, 64],
      [43, 50, 55, 59],
      [45, 52, 57, 60],
      [40, 47, 52, 55],
      [41, 48, 53, 57],
      [48, 55, 60, 64],
      [43, 50, 55, 59],
      [48, 55, 64, 67],
    ];
    this.melody = [
      [[0, 76, 1], [1, 79, 1], [2, 84, 1]],
      [[0, 83, 1.5], [1.5, 79, 0.5], [2, 76, 1]],
      [[0, 81, 1], [1, 84, 1], [2, 88, 1]],
      [[0, 86, 1], [1, 84, 1], [2, 81, 1]],
      [[0, 77, 1], [1, 81, 1], [2, 84, 1]],
      [[0, 88, 1], [1, 86, 1], [2, 84, 1]],
      [[0, 79, 1], [1, 83, 1], [2, 86, 1]],
      [[0, 84, 1.5], [1.5, 83, 0.5], [2, 79, 1]],
    ];
    this.melodyBell = [
      [[2, 96]],
      [[0, 95]],
      [[2, 100]],
      [[0, 98]],
      [[1, 96]],
      [[2, 100]],
      [[1, 98]],
      [[0, 96]],
    ];
  }

  midiToHz(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  }

  ensure() {
    if (this.ctx) return this.ctx;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;

    this.ctx = new AudioCtx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.0001;

    this.compressor = this.ctx.createDynamicsCompressor();
    this.compressor.threshold.value = -21;
    this.compressor.knee.value = 18;
    this.compressor.ratio.value = 3;
    this.compressor.attack.value = 0.008;
    this.compressor.release.value = 0.24;

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.55;
    this.musicBus.connect(this.compressor);
    this.compressor.connect(this.master);
    this.master.connect(this.ctx.destination);

    this.reverbSend = this.ctx.createGain();
    this.reverbSend.gain.value = 0.32;
    this.reverbSend.connect(this.makeReverb());

    this.buildRoom();
    return this.ctx;
  }

  makeReverb() {
    const duration = 2.35;
    const rate = this.ctx.sampleRate;
    const length = Math.floor(rate * duration);
    const impulse = this.ctx.createBuffer(2, length, rate);
    for (let channel = 0; channel < 2; channel += 1) {
      const data = impulse.getChannelData(channel);
      let last = 0;
      for (let i = 0; i < length; i += 1) {
        const t = i / length;
        const noise = Math.random() * 2 - 1;
        last = last * 0.86 + noise * 0.14;
        data[i] = last * Math.pow(1 - t, 2.4) * (channel ? 0.86 : 1);
      }
    }
    const convolver = this.ctx.createConvolver();
    convolver.buffer = impulse;
    const wet = this.ctx.createGain();
    wet.gain.value = 0.48;
    convolver.connect(wet);
    wet.connect(this.compressor);
    return convolver;
  }

  buildRoom() {
    // A barely-there mechanical purr, like a brass turntable under the deck.
    const seconds = 2;
    const rate = this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, seconds * rate, rate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i += 1) {
      const n = Math.random() * 2 - 1;
      last = last * 0.995 + n * 0.005;
      data[i] = last * 0.8;
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 280;
    filter.Q.value = 0.55;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.014;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicBus);
    source.start();
    this.whir = gain;
  }

  note(time, midi, duration, gain, type = 'triangle', cutoff = 2600, send = 0.12) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const amp = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoff, time);
    filter.Q.value = 0.7;

    osc.type = type;
    osc.frequency.setValueAtTime(this.midiToHz(midi), time);

    const attack = Math.min(0.035, duration * 0.18);
    const release = Math.min(0.26, duration * 0.7);
    amp.gain.setValueAtTime(0.0001, time);
    amp.gain.exponentialRampToValueAtTime(Math.max(0.00015, gain), time + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, time + duration + release);

    osc.connect(filter);
    filter.connect(amp);
    amp.connect(this.musicBus);
    if (send > 0) {
      const sendGain = this.ctx.createGain();
      sendGain.gain.value = send;
      amp.connect(sendGain);
      sendGain.connect(this.reverbSend);
    }

    osc.start(time);
    osc.stop(time + duration + release + 0.05);
  }

  bell(time, midi, volume = 0.013) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const shimmer = this.ctx.createOscillator();
    const amp = this.ctx.createGain();
    osc.type = 'sine';
    shimmer.type = 'sine';
    osc.frequency.value = this.midiToHz(midi);
    shimmer.frequency.value = this.midiToHz(midi + 12);
    const hz = this.midiToHz(midi);
    const g = this.ctx.createGain();
    g.gain.value = 0.22;
    osc.connect(g);
    shimmer.connect(g);
    g.connect(amp);
    amp.connect(this.musicBus);
    const send = this.ctx.createGain();
    send.gain.value = 0.45;
    amp.connect(send);
    send.connect(this.reverbSend);

    const now = time;
    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.exponentialRampToValueAtTime(volume, now + 0.006);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    osc.start(now);
    shimmer.start(now);
    osc.stop(now + 1.0);
    shimmer.stop(now + 1.0);
  }

  scheduleBar(time, index) {
    const chord = this.harmony[index];
    const beat = this.beat;

    // Oom.
    this.note(time, chord[0] - 12, beat * 0.9, 0.075, 'triangle', 380, 0.04);
    // Pah-pah, with a soft paper-muted attack.
    for (const offset of [1, 2]) {
      for (let i = 1; i < chord.length; i += 1) {
        this.note(time + offset * beat, chord[i], beat * 0.56, 0.018, 'triangle', 1280, 0.08);
      }
    }

    // Calliope melody, doubled an octave down very quietly for body.
    for (const [offset, midi, duration] of this.melody[index]) {
      const t = time + offset * beat;
      this.note(t, midi, duration * beat, 0.052, 'triangle', 3000, 0.23);
      this.note(t, midi - 12, duration * beat, 0.009, 'sine', 1500, 0.16);
      this.bell(t + 0.015, midi + 12, 0.008);
    }

    for (const [offset, midi] of this.melodyBell[index]) {
      this.bell(time + offset * beat, midi, 0.006);
    }

    // A tiny cymbal swell at the top of each four-bar phrase.
    if (index % 4 === 0) this.shimmer(time, 0.014);
  }

  shimmer(time, volume) {
    if (!this.ctx) return;
    const rate = this.ctx.sampleRate;
    const length = Math.floor(rate * 0.65);
    const buffer = this.ctx.createBuffer(1, length, rate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 3.1);
    }
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5200;
    const gain = this.ctx.createGain();
    gain.gain.value = volume;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicBus);
    source.start(time);
  }

  startSequencer() {
    if (this.started || !this.ctx) return;
    this.started = true;
    this.nextBarTime = this.ctx.currentTime + 0.14;
    this.barIndex = 0;
    this.tick();
    this.timer = window.setInterval(() => this.tick(), 90);
  }

  tick() {
    if (!this.ctx || !this.enabled) return;
    while (this.nextBarTime < this.ctx.currentTime + 0.45) {
      this.scheduleBar(this.nextBarTime, this.barIndex);
      this.nextBarTime += this.barDuration;
      this.barIndex = (this.barIndex + 1) % this.harmony.length;
    }
  }

  async enable() {
    const ctx = this.ensure();
    if (!ctx) return false;
    try {
      if (ctx.state === 'suspended') await ctx.resume();
    } catch {
      return false;
    }
    this.enabled = true;
    const now = ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(Math.max(0.0001, this.master.gain.value), now);
    this.master.gain.exponentialRampToValueAtTime(0.42, now + 0.9);
    this.startSequencer();
    if (this.nextBarTime < ctx.currentTime - 0.2) {
      this.nextBarTime = ctx.currentTime + 0.12;
    }
    return true;
  }

  disable() {
    if (!this.ctx) return;
    this.enabled = false;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(Math.max(0.0001, this.master.gain.value), now);
    this.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  }

  async toggle() {
    if (this.enabled) {
      this.disable();
      return false;
    }
    return this.enable();
  }

  setRide(riding) {
    this.ride = riding;
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.rideGain) {
      this.rideGain.gain.cancelScheduledValues(now);
      this.rideGain.gain.linearRampToValueAtTime(riding ? 1 : 0.72, now + 0.8);
    }
    if (this.whir) {
      this.whir.gain.cancelScheduledValues(now);
      this.whir.gain.linearRampToValueAtTime(riding ? 0.022 : 0.012, now + 1.1);
    }
  }
}
