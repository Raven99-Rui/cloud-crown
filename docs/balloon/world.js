import * as THREE from 'three';

/* ================================================================
   云上星穹 · THE CLOUD CROWN
   A 72 m gilded balloon-lift pavilion, built entirely at runtime.
   ================================================================ */

export const RIDE = {
  count: 8,
  platformY: 3.55,
  ringRadius: 12.85,
  minAlt: 4.45,
  maxAlt: 38.0,
  envelopeTop: 16.18,
  armY: 54.72,
  armRadius: 15.95,
  totalHeight: 72,
};

const TAU = Math.PI * 2;
const UP = new THREE.Vector3(0, 1, 0);
const clamp = THREE.MathUtils.clamp;
const damp = THREE.MathUtils.damp;

const C = {
  cream: 0xf0e0c4,
  creamLight: 0xf8eedb,
  creamDeep: 0xd7c09b,
  stone: 0xcbbda6,
  stoneDark: 0x8f8372,
  wine: 0x8d2f3b,
  wineDeep: 0x561b26,
  wineLight: 0xb14a54,
  teal: 0x205b60,
  tealDeep: 0x123b41,
  tealLight: 0x377d7e,
  gold: 0xd0a55d,
  goldLight: 0xf0d092,
  goldDeep: 0x8f6833,
  iron: 0x2b3038,
  dark: 0x151c26,
  wicker: 0xb38350,
};

const MOODS = {
  dusk: {
    sky: 'dusk',
    fog: 0x31425d,
    fogDensity: 0.00155,
    hemiSky: 0xb9c9e8,
    hemiGround: 0x4b3330,
    hemiIntensity: 1.02,
    key: 0xffc08d,
    keyIntensity: 2.55,
    keyPos: [56, 72, 46],
    rim: 0x77b7c6,
    rimIntensity: 1.0,
    ambient: 0x687691,
    ambientIntensity: 0.38,
    env: 0.68,
    exposure: 0.94,
    bloom: 0.34,
    bulb: 1.4,
    cloud: 0xe6dce8,
    cloudOpacity: 0.38,
    star: 0.32,
    baseGlow: 48,
    crownGlow: 120,
    dust: 0.58,
    shadow: 1.05,
  },
  night: {
    sky: 'night',
    fog: 0x131c31,
    fogDensity: 0.0017,
    hemiSky: 0x7089bc,
    hemiGround: 0x241d25,
    hemiIntensity: 0.8,
    key: 0xc0d4ff,
    keyIntensity: 1.9,
    keyPos: [-48, 84, 38],
    rim: 0x5d97b2,
    rimIntensity: 0.68,
    ambient: 0x364363,
    ambientIntensity: 0.38,
    env: 0.58,
    exposure: 0.98,
    bloom: 0.52,
    bulb: 1.82,
    cloud: 0x8998b9,
    cloudOpacity: 0.24,
    star: 1,
    baseGlow: 82,
    crownGlow: 170,
    dust: 1,
    shadow: 0.85,
  },
  day: {
    sky: 'day',
    fog: 0xb8cbd9,
    fogDensity: 0.00115,
    hemiSky: 0xe9f4ff,
    hemiGround: 0x68705b,
    hemiIntensity: 1.6,
    key: 0xfff2d3,
    keyIntensity: 3.1,
    keyPos: [64, 96, 54],
    rim: 0x9bd0da,
    rimIntensity: 0.8,
    ambient: 0xffe8cc,
    ambientIntensity: 0.6,
    env: 1.02,
    exposure: 0.88,
    bloom: 0.14,
    bulb: 0.22,
    cloud: 0xfff7ea,
    cloudOpacity: 0.44,
    star: 0,
    baseGlow: 10,
    crownGlow: 22,
    dust: 0.12,
    shadow: 1.2,
  },
};

const BALLOON_DATA = [
  { name: '绛云 · 初见航线', short: '绛云', accent: '#8d2f3b', note: '绛红与奶油色球囊，篮身编号 01。第一次升空的人，适合从它开始。' },
  { name: '青岚 · 云脊航线', short: '青岚', accent: '#1f5b60', note: '孔雀青与象牙白球囊，编号 02。它喜欢在云层最高处多停一会儿。' },
  { name: '金桂 · 暮色航线', short: '金桂', accent: '#8d2f3b', note: '绛红与奶油色球囊，篮身编号 03。适合第一次升空的人。' },
  { name: '月白 · 星河航线', short: '月白', accent: '#1f5b60', note: '月光白与深青色球囊，编号 04。夜里，它的金线会最先亮起来。' },
  { name: '绯霞 · 风信航线', short: '绯霞', accent: '#8d2f3b', note: '落日绯与奶油色球囊，编号 05。风从西南来的时候，它升得最轻。' },
  { name: '松烟 · 慢云航线', short: '松烟', accent: '#1f5b60', note: '松烟青与暖白球囊，编号 06。它的升降最慢，适合看很远的地方。' },
  { name: '星砂 · 夜航航线', short: '星砂', accent: '#8d2f3b', note: '酒红星砂与奶油色球囊，编号 07。入夜后，篮沿会亮起四盏小灯。' },
  { name: '夜昙 · 月升航线', short: '夜昙', accent: '#1f5b60', note: '深青夜昙与象牙白球囊，编号 08。它是星冠下最高的一朵。' },
];

/* ------------------------------------------------------------------
   little utilities
   ------------------------------------------------------------------ */

let rngSeed = 0x51f15e;
function rnd() {
  rngSeed = (rngSeed * 1664525 + 1013904223) >>> 0;
  return rngSeed / 4294967296;
}

function makeCanvasTexture(w, h, draw, opts = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tx = new THREE.CanvasTexture(canvas);
  tx.colorSpace = opts.noColorSpace ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tx.wrapS = opts.wrapS ?? THREE.ClampToEdgeWrapping;
  tx.wrapT = opts.wrapT ?? THREE.ClampToEdgeWrapping;
  if (opts.repeat) tx.repeat.set(opts.repeat[0], opts.repeat[1]);
  tx.anisotropy = Math.min(8, opts.anisotropy ?? 8);
  tx.needsUpdate = true;
  return tx;
}

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function makeGlowTexture(size = 128) {
  return makeCanvasTexture(size, size, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.18, 'rgba(255,244,214,.92)');
    g.addColorStop(0.45, 'rgba(255,206,130,.34)');
    g.addColorStop(0.78, 'rgba(255,180,90,.05)');
    g.addColorStop(1, 'rgba(255,170,80,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeCloudTexture(size = 512) {
  return makeCanvasTexture(size, size / 2, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 18; i++) {
      const x = w * (0.16 + rnd() * 0.68);
      const y = h * (0.3 + rnd() * 0.42);
      const r = h * (0.1 + rnd() * 0.28);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(255,255,255,${0.24 + rnd() * 0.2})`);
      g.addColorStop(0.45, `rgba(255,255,255,${0.1 + rnd() * 0.12})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, TAU);
      ctx.fill();
    }
    for (let i = 0; i < 8; i++) {
      const x = w * (0.1 + rnd() * 0.8);
      const y = h * (0.55 + rnd() * 0.25);
      const rx = w * (0.1 + rnd() * 0.2);
      const ry = h * (0.03 + rnd() * 0.06);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
      g.addColorStop(0, 'rgba(255,255,255,.15)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
  });
}

/* --- sky ---------------------------------------------------------- */

function makeSkyTexture(mood) {
  const w = 2048, h = 1024;
  return makeCanvasTexture(w, h, (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    if (mood === 'night') {
      gradient.addColorStop(0, '#030611');
      gradient.addColorStop(0.32, '#0b1430');
      gradient.addColorStop(0.48, '#222947');
      gradient.addColorStop(0.54, '#5c4357');
      gradient.addColorStop(0.60, '#9c655e');
      gradient.addColorStop(0.67, '#2b2c42');
      gradient.addColorStop(1, '#060a15');
    } else if (mood === 'day') {
      gradient.addColorStop(0, '#4b8fc8');
      gradient.addColorStop(0.25, '#82b8d9');
      gradient.addColorStop(0.47, '#d4e7ee');
      gradient.addColorStop(0.53, '#f5e9ce');
      gradient.addColorStop(0.61, '#d9d2c0');
      gradient.addColorStop(1, '#9c9f93');
    } else {
      gradient.addColorStop(0, '#26325e');
      gradient.addColorStop(0.26, '#4c5b86');
      gradient.addColorStop(0.42, '#9b869d');
      gradient.addColorStop(0.48, '#e0a488');
      gradient.addColorStop(0.53, '#f3cfa6');
      gradient.addColorStop(0.57, '#c98a77');
      gradient.addColorStop(0.63, '#68536c');
      gradient.addColorStop(0.78, '#33415e');
      gradient.addColorStop(1, '#171d2e');
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    if (mood !== 'day') {
      // a soft milky-way veil
      ctx.save();
      ctx.translate(w * 0.64, h * 0.27);
      ctx.rotate(-0.31);
      const veil = ctx.createLinearGradient(0, -80, 0, 80);
      veil.addColorStop(0, 'rgba(150,170,220,0)');
      veil.addColorStop(0.48, mood === 'night' ? 'rgba(188,190,230,.12)' : 'rgba(255,223,205,.08)');
      veil.addColorStop(1, 'rgba(150,170,220,0)');
      ctx.fillStyle = veil;
      ctx.fillRect(-w * 0.45, -100, w * 0.9, 200);
      for (let i = 0; i < 540; i++) {
        const x = (rnd() - 0.5) * w * 0.9;
        const y = (rnd() - 0.5) * 190;
        const a = Math.max(0, 1 - Math.abs(y) / 100) * (0.12 + rnd() * 0.4);
        ctx.fillStyle = `rgba(235,236,255,${a})`;
        ctx.beginPath();
        ctx.arc(x, y, rnd() * 1.05 + 0.2, 0, TAU);
        ctx.fill();
      }
      ctx.restore();

      // stars
      for (let i = 0; i < (mood === 'night' ? 1180 : 420); i++) {
        const x = rnd() * w;
        const y = rnd() * h * 0.54;
        const bright = Math.pow(rnd(), 3);
        const radius = 0.25 + bright * 1.65;
        const alpha = 0.18 + bright * 0.78;
        ctx.fillStyle = `rgba(${mood === 'night' ? '236,240,255' : '255,241,221'},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, TAU);
        ctx.fill();
        if (bright > 0.62) {
          ctx.strokeStyle = `rgba(255,246,224,${alpha * 0.32})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(x - radius * 3.2, y);
          ctx.lineTo(x + radius * 3.2, y);
          ctx.moveTo(x, y - radius * 3.2);
          ctx.lineTo(x, y + radius * 3.2);
          ctx.stroke();
        }
      }
    }

    // sun / moon glow near the horizon
    const sunX = mood === 'night' ? w * 0.735 : w * 0.755;
    const sunY = mood === 'night' ? h * 0.35 : mood === 'dusk' ? h * 0.535 : h * 0.24;
    const glowR = mood === 'night' ? 190 : mood === 'dusk' ? 250 : 235;
    const glow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, glowR);
    if (mood === 'night') {
      glow.addColorStop(0, 'rgba(245,241,224,.72)');
      glow.addColorStop(0.045, 'rgba(240,238,224,.55)');
      glow.addColorStop(0.2, 'rgba(185,201,237,.12)');
      glow.addColorStop(0.6, 'rgba(135,164,220,.025)');
      glow.addColorStop(1, 'rgba(120,155,220,0)');
    } else if (mood === 'dusk') {
      glow.addColorStop(0, 'rgba(255,229,178,.56)');
      glow.addColorStop(0.05, 'rgba(255,209,145,.38)');
      glow.addColorStop(0.22, 'rgba(255,174,116,.12)');
      glow.addColorStop(0.62, 'rgba(255,142,100,.025)');
      glow.addColorStop(1, 'rgba(255,130,90,0)');
    } else {
      glow.addColorStop(0, 'rgba(255,252,230,.72)');
      glow.addColorStop(0.06, 'rgba(255,246,208,.46)');
      glow.addColorStop(0.24, 'rgba(255,238,191,.11)');
      glow.addColorStop(0.7, 'rgba(255,233,185,.018)');
      glow.addColorStop(1, 'rgba(255,231,180,0)');
    }
    ctx.fillStyle = glow;
    ctx.fillRect(sunX - glowR, sunY - glowR, glowR * 2, glowR * 2);

    // a disc
    ctx.beginPath();
    ctx.arc(sunX, sunY, mood === 'night' ? 28 : mood === 'dusk' ? 27 : 34, 0, TAU);
    ctx.fillStyle = mood === 'night' ? 'rgba(244,241,224,.8)' : mood === 'dusk' ? 'rgba(255,225,171,.72)' : 'rgba(255,253,236,.92)';
    ctx.fill();
    if (mood === 'night') {
      ctx.beginPath();
      ctx.arc(sunX + 13, sunY - 9, 26, 0, TAU);
      ctx.fillStyle = 'rgba(10,17,38,.72)';
      ctx.fill();
    }

    // horizon cloud bands
    const cloudColor = mood === 'night' ? '120,138,178' : mood === 'dusk' ? '247,197,165' : '255,251,239';
    for (let i = 0; i < 58; i++) {
      const y = h * (0.44 + rnd() * 0.23);
      const x = rnd() * w;
      const rx = w * (0.025 + rnd() * 0.15);
      const ry = h * (0.008 + rnd() * 0.035);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
      const alpha = 0.035 + rnd() * 0.13;
      g.addColorStop(0, `rgba(${cloudColor},${alpha})`);
      g.addColorStop(0.42, `rgba(${cloudColor},${alpha * 0.6})`);
      g.addColorStop(1, `rgba(${cloudColor},0)`);
      ctx.fillStyle = g;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, TAU);
      ctx.fill();
      ctx.restore();
    }
    // a higher, thinner veil of cirrus
    for (let i = 0; i < 20; i++) {
      const x = rnd() * w;
      const y = h * (0.25 + rnd() * 0.18);
      const rx = w * (0.08 + rnd() * 0.18);
      const ry = h * (0.003 + rnd() * 0.009);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
      g.addColorStop(0, `rgba(${cloudColor},${0.018 + rnd() * 0.04})`);
      g.addColorStop(1, `rgba(${cloudColor},0)`);
      ctx.fillStyle = g;
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, TAU);
      ctx.fill();
      ctx.restore();
    }

    // a constellation, just for the night
    if (mood === 'night') {
      const stars = [
        [w * 0.22, h * 0.15], [w * 0.27, h * 0.2], [w * 0.33, h * 0.18],
        [w * 0.37, h * 0.25], [w * 0.34, h * 0.31],
      ];
      ctx.strokeStyle = 'rgba(210,220,255,.16)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      stars.forEach(([x, y], i) => { if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
      ctx.stroke();
      stars.forEach(([x, y]) => {
        ctx.fillStyle = 'rgba(245,239,210,.8)';
        ctx.beginPath();
        ctx.arc(x, y, 1.4, 0, TAU);
        ctx.fill();
      });
    }

    // a warm horizon haze
    const haze = ctx.createLinearGradient(0, h * 0.47, 0, h * 0.58);
    haze.addColorStop(0, 'rgba(255,178,125,0)');
    haze.addColorStop(0.55, mood === 'night' ? 'rgba(183,143,150,.12)' : 'rgba(255,208,158,.18)');
    haze.addColorStop(1, 'rgba(255,174,118,0)');
    ctx.fillStyle = haze;
    ctx.fillRect(0, h * 0.47, w, h * 0.12);

    // vignette
    const edge = ctx.createLinearGradient(0, 0, 0, h);
    edge.addColorStop(0, 'rgba(0,0,0,.12)');
    edge.addColorStop(0.45, 'rgba(0,0,0,0)');
    edge.addColorStop(1, 'rgba(0,0,0,.18)');
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, w, h);
  });
}

function createSky(scene) {
  const geo = new THREE.SphereGeometry(430, 56, 36);
  const mat = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    toneMapped: false,
  });
  const dome = new THREE.Mesh(geo, mat);
  dome.renderOrder = -20;
  scene.add(dome);

  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(280 * 3);
  for (let i = 0; i < 280; i++) {
    const az = rnd() * TAU;
    const el = 0.06 + rnd() * 1.25;
    const r = 400 + rnd() * 16;
    starPos[i * 3] = Math.cos(el) * Math.sin(az) * r;
    starPos[i * 3 + 1] = Math.sin(el) * r;
    starPos[i * 3 + 2] = Math.cos(el) * Math.cos(az) * r;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xfff3d7,
    size: 1.05,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    map: makeGlowTexture(64),
    fog: false,
    toneMapped: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  stars.renderOrder = -19;
  scene.add(stars);

  let current = null;
  const mapCache = new Map();
  function setMood(mood) {
    current = mood;
    if (!mapCache.has(mood)) mapCache.set(mood, makeSkyTexture(mood));
    mat.map = mapCache.get(mood);
    mat.needsUpdate = true;
    starMat.opacity = mood === 'night' ? 0.52 : mood === 'dusk' ? 0.18 : 0;
  }
  return {
    dome, stars, setMood,
    update(t) {
      starMat.opacity = (current === 'night' ? 0.46 : current === 'dusk' ? 0.16 : 0) + Math.sin(t * 0.8) * (current === 'night' ? 0.05 : 0.015);
      stars.rotation.y = t * 0.002;
    },
  };
}

/* --- clouds & floating dust --------------------------------------- */

function createCloudBank(scene) {
  const tex = makeCloudTexture();
  const group = new THREE.Group();
  scene.add(group);
  const clouds = [];
  for (let i = 0; i < 34; i++) {
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      opacity: 0.2,
      color: 0xdfd6e2,
      blending: THREE.NormalBlending,
      fog: true,
      toneMapped: false,
    });
    const s = new THREE.Sprite(mat);
    const angle = (i / 34) * TAU + rnd() * 0.22;
    const radius = 48 + rnd() * 150;
    s.position.set(Math.sin(angle) * radius, 2 + rnd() * 42, Math.cos(angle) * radius);
    const scale = 28 + rnd() * 62;
    s.scale.set(scale * 1.65, scale * 0.55, 1);
    s.userData = {
      angle, radius, baseY: s.position.y, drift: 0.002 + rnd() * 0.006,
      phase: rnd() * TAU, baseOpacity: 0.12 + rnd() * 0.18,
    };
    group.add(s);
    clouds.push(s);
  }
  // mid-air wisps around the pavilion
  for (let i = 0; i < 16; i++) {
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      opacity: 0.3,
      color: 0xe4d6de,
      fog: true,
      toneMapped: false,
    });
    const s = new THREE.Sprite(mat);
    const a = (i / 16) * TAU + rnd() * 0.35;
    const r = 36 + rnd() * 42;
    s.position.set(Math.sin(a) * r, 7 + rnd() * 24, Math.cos(a) * r);
    s.scale.set(24 + rnd() * 42, 7 + rnd() * 14, 1);
    s.userData = { angle: a, radius: r, baseY: s.position.y, drift: 0.0018, phase: rnd() * TAU, baseOpacity: 0.2 };
    group.add(s);
    clouds.push(s);
  }
  // a near bank beneath the pavilion, for altitude
  for (let i = 0; i < 20; i++) {
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      opacity: 0.26,
      color: 0xd7d4de,
      fog: true,
      toneMapped: false,
    });
    const s = new THREE.Sprite(mat);
    const a = (i / 20) * TAU + 0.3;
    const r = 28 + rnd() * 38;
    s.position.set(Math.sin(a) * r, 0.4 + rnd() * 3.8, Math.cos(a) * r);
    s.scale.set(20 + rnd() * 34, 7 + rnd() * 12, 1);
    s.userData = { angle: a, radius: r, baseY: s.position.y, drift: 0.0015, phase: rnd() * TAU, baseOpacity: 0.2 };
    group.add(s);
    clouds.push(s);
  }
  return {
    group, clouds,
    setMood(mood, cfg) {
      clouds.forEach((s, i) => {
        s.material.color.setHex(cfg.cloud);
        s.material.opacity = (i < 34 ? cfg.cloudOpacity : cfg.cloudOpacity * 0.9) * (1 + (i % 3) * 0.18);
        s.userData.baseOpacity = s.material.opacity;
      });
    },
    update(dt, t) {
      clouds.forEach((s) => {
        const u = s.userData;
        u.angle += dt * u.drift;
        s.position.x = Math.sin(u.angle) * u.radius;
        s.position.z = Math.cos(u.angle) * u.radius;
        s.position.y = u.baseY + Math.sin(t * 0.12 + u.phase) * 0.5;
        s.material.opacity = u.baseOpacity * (0.85 + Math.sin(t * 0.22 + u.phase) * 0.15);
      });
    },
  };
}

function createSkyLanterns(scene) {
  const group = new THREE.Group();
  scene.add(group);
  const tex = makeGlowTexture(64);
  const lanterns = [];
  for (let i = 0; i < 20; i++) {
    const mat = new THREE.SpriteMaterial({
      map: tex,
      color: 0xffc27b,
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
      fog: true,
    });
    const s = new THREE.Sprite(mat);
    const angle = (i / 20) * TAU + rnd() * 0.3;
    const radius = 27 + rnd() * 48;
    const y = 5 + rnd() * 44;
    s.position.set(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
    s.scale.setScalar(1.2 + rnd() * 1.8);
    s.userData = {
      angle, radius, baseY: y, phase: rnd() * TAU, drift: 0.003 + rnd() * 0.005,
      baseScale: s.scale.x, baseOpacity: 0.22 + rnd() * 0.25, moodScale: 1.05,
    };
    group.add(s);
    lanterns.push(s);
  }
  return {
    group, lanterns,
    setMood(mood, cfg) {
      lanterns.forEach((s) => {
        s.userData.moodScale = mood === 'day' ? 0.22 : mood === 'night' ? 1.5 : 1.05;
      });
    },
    update(dt, t) {
      lanterns.forEach((s) => {
        const u = s.userData;
        u.angle += dt * u.drift;
        s.position.x = Math.sin(u.angle) * u.radius;
        s.position.z = Math.cos(u.angle) * u.radius;
        s.position.y = u.baseY + Math.sin(t * 0.3 + u.phase) * 1.1;
        const k = 0.86 + Math.sin(t * 1.1 + u.phase) * 0.14;
        s.scale.setScalar(u.baseScale * k);
        s.material.opacity = u.baseOpacity * u.moodScale * (0.8 + Math.sin(t * 1.4 + u.phase) * 0.2);
      });
    },
  };
}

function makeMiniEnvelopeTexture(accent) {
  return makeCanvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#f2e2c5';
    ctx.fillRect(0, 0, w, h);
    const n = 12;
    const sw = w / n;
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        ctx.fillStyle = accent;
        ctx.fillRect(i * sw, 0, sw, h);
      }
      ctx.strokeStyle = 'rgba(194,155,87,.7)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(i * sw, 0);
      ctx.lineTo(i * sw, h);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(198,155,87,.8)';
    ctx.fillRect(0, h * 0.08, w, 5);
    ctx.fillRect(0, h * 0.9, w, 5);
  });
}

function createDistantBalloons(scene) {
  const group = new THREE.Group();
  scene.add(group);
  const profile = [
    [0.7, -5.0], [2.5, -3.8], [4.3, -1.5], [4.6, 1.0], [3.7, 3.5], [2.0, 5.1], [0.2, 5.4],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const geo = new THREE.LatheGeometry(profile, 20);
  const mats = [
    new THREE.MeshStandardMaterial({ map: makeMiniEnvelopeTexture('#8d2f3b'), side: THREE.DoubleSide, roughness: 0.82, metalness: 0.02 }),
    new THREE.MeshStandardMaterial({ map: makeMiniEnvelopeTexture('#1f5b60'), side: THREE.DoubleSide, roughness: 0.82, metalness: 0.02 }),
    new THREE.MeshStandardMaterial({ map: makeMiniEnvelopeTexture('#d4ad69'), side: THREE.DoubleSide, roughness: 0.82, metalness: 0.02 }),
  ];
  const basketMat = new THREE.MeshStandardMaterial({ color: 0x9b6d42, roughness: 0.9 });
  const items = [];
  for (let i = 0; i < 6; i++) {
    const root = new THREE.Group();
    const angle = (i / 6) * TAU + 0.37 + rnd() * 0.2;
    const radius = 88 + rnd() * 54;
    const y = 21 + rnd() * 36;
    const scale = 0.16 + rnd() * 0.12;
    root.position.set(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
    root.rotation.y = rnd() * TAU;
    root.scale.setScalar(scale);
    const env = new THREE.Mesh(geo, mats[i % mats.length]);
    env.position.y = 10.8;
    root.add(env);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.1, 1.3, 8, 1, true), basketMat);
    b.position.y = 0.8;
    root.add(b);
    const ropeGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1.2, 1.4, 0), new THREE.Vector3(-0.6, 5.7, 0),
      new THREE.Vector3(1.2, 1.4, 0), new THREE.Vector3(0.6, 5.7, 0),
    ]);
    root.add(new THREE.LineSegments(ropeGeo, new THREE.LineBasicMaterial({ color: 0xd5b477, transparent: true, opacity: 0.36 })));
    group.add(root);
    items.push({ root, angle, radius, baseY: y, phase: rnd() * TAU, drift: 0.0015 + rnd() * 0.002, scale });
  }
  return {
    group, items,
    update(dt, t) {
      items.forEach((it) => {
        it.angle += dt * it.drift;
        it.root.position.x = Math.sin(it.angle) * it.radius;
        it.root.position.z = Math.cos(it.angle) * it.radius;
        it.root.position.y = it.baseY + Math.sin(t * 0.18 + it.phase) * 0.8;
        it.root.rotation.y += dt * 0.005;
      });
    },
  };
}

function createDust(scene) {
  const count = 190;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const a = rnd() * TAU;
    const r = 8 + rnd() * 46;
    positions[i * 3] = Math.sin(a) * r;
    positions[i * 3 + 1] = 1 + rnd() * 56;
    positions[i * 3 + 2] = Math.cos(a) * r;
    seeds[i] = rnd() * TAU;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xffd89a,
    size: 0.42,
    transparent: true,
    opacity: 0.42,
    map: makeGlowTexture(64),
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: true,
    toneMapped: false,
  });
  const points = new THREE.Points(geo, mat);
  points.renderOrder = 4;
  scene.add(points);
  return {
    points,
    setMood(mood, cfg) { mat.opacity = 0.38 * cfg.dust; },
    update(dt, t) {
      const p = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        p[i * 3 + 1] += dt * (0.18 + (i % 5) * 0.035);
        if (p[i * 3 + 1] > 60) p[i * 3 + 1] = 1.4;
        p[i * 3] += Math.sin(t * 0.33 + seeds[i]) * dt * 0.05;
        p[i * 3 + 2] += Math.cos(t * 0.27 + seeds[i]) * dt * 0.05;
      }
      geo.attributes.position.needsUpdate = true;
      mat.opacity = 0.26 + Math.sin(t * 0.7) * 0.05;
    },
  };
}

/* --- procedural textures ------------------------------------------ */

function makeGroundTexture() {
  return makeCanvasTexture(2048, 2048, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 30, w / 2, h / 2, w * 0.52);
    g.addColorStop(0, '#d7cab4');
    g.addColorStop(0.38, '#c9bca6');
    g.addColorStop(0.72, '#ad9f8a');
    g.addColorStop(1, '#81786b');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // broad stone tiles
    ctx.strokeStyle = 'rgba(79,65,49,.12)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 22; i++) {
      const y = (i / 22) * h;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    for (let i = 0; i < 22; i++) {
      const x = (i / 22) * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // concentric inlay rings
    const rings = [
      [0.148, 'rgba(206,170,103,.46)', 5],
      [0.154, 'rgba(39,63,66,.36)', 2],
      [0.238, 'rgba(39,63,66,.3)', 3],
      [0.244, 'rgba(206,170,103,.32)', 2],
      [0.357, 'rgba(206,170,103,.2)', 2],
      [0.455, 'rgba(39,63,66,.2)', 2],
      [0.463, 'rgba(206,170,103,.18)', 1],
    ];
    rings.forEach(([r, color, lw]) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lw;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, w * r, 0, TAU);
      ctx.stroke();
    });

    // radial lines
    ctx.save();
    ctx.translate(w / 2, h / 2);
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * TAU;
      ctx.strokeStyle = i % 4 === 0 ? 'rgba(206,170,103,.18)' : 'rgba(39,63,66,.1)';
      ctx.lineWidth = i % 4 === 0 ? 3 : 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.sin(a) * w * 0.155, Math.cos(a) * w * 0.155);
      ctx.lineTo(Math.sin(a) * w * 0.47, Math.cos(a) * w * 0.47);
      ctx.stroke();
    }
    ctx.restore();

    // eight compass stars around the platform
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + Math.PI / 8;
      const x = w / 2 + Math.sin(a) * w * 0.292;
      const y = h / 2 + Math.cos(a) * w * 0.292;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-a);
      ctx.strokeStyle = 'rgba(206,170,103,.36)';
      ctx.fillStyle = 'rgba(39,63,66,.15)';
      ctx.lineWidth = 3;
      const R = w * 0.035;
      ctx.beginPath();
      for (let k = 0; k < 16; k++) {
        const ang = (k / 16) * TAU - Math.PI / 2;
        const rr = k % 2 ? R * 0.36 : R;
        const px = Math.cos(ang) * rr;
        const py = Math.sin(ang) * rr;
        if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // central cartographic flower (mostly hidden under the pavilion)
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.strokeStyle = 'rgba(206,170,103,.28)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      ctx.beginPath();
      ctx.ellipse(Math.sin(a) * w * 0.1, Math.cos(a) * w * 0.1, w * 0.055, w * 0.022, -a, 0, TAU);
      ctx.stroke();
    }
    ctx.restore();

    // dark outer edge
    const edge = ctx.createRadialGradient(w / 2, h / 2, w * 0.4, w / 2, h / 2, w * 0.52);
    edge.addColorStop(0, 'rgba(5,9,14,0)');
    edge.addColorStop(1, 'rgba(5,9,14,.42)');
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeFacadeTexture() {
  return makeCanvasTexture(2048, 512, (ctx, w, h) => {
    ctx.fillStyle = '#163d42';
    ctx.fillRect(0, 0, w, h);
    const panels = 16;
    const pw = w / panels;
    for (let i = 0; i < panels; i++) {
      const x = i * pw;
      ctx.fillStyle = i % 2 ? '#1d5055' : '#153b41';
      ctx.fillRect(x, 0, pw, h);
      ctx.strokeStyle = 'rgba(208,165,93,.45)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 7, 12, pw - 14, h - 24);
      // arch
      const cw = pw * 0.58;
      ctx.save();
      ctx.translate(x + pw / 2, h * 0.58);
      ctx.beginPath();
      ctx.moveTo(-cw / 2, h * 0.3);
      ctx.lineTo(-cw / 2, -h * 0.02);
      ctx.arc(0, -h * 0.02, cw / 2, Math.PI, 0);
      ctx.lineTo(cw / 2, h * 0.3);
      ctx.closePath();
      const ag = ctx.createLinearGradient(0, -h * 0.2, 0, h * 0.3);
      ag.addColorStop(0, 'rgba(255,208,142,.64)');
      ag.addColorStop(0.35, 'rgba(190,103,71,.4)');
      ag.addColorStop(1, 'rgba(28,36,42,.84)');
      ctx.fillStyle = ag;
      ctx.fill();
      ctx.strokeStyle = 'rgba(234,196,127,.72)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
      // little drape
      if (i % 2 === 0) {
        ctx.fillStyle = i % 4 === 0 ? 'rgba(126,37,51,.78)' : 'rgba(92,30,43,.7)';
        ctx.beginPath();
        ctx.moveTo(x + 20, 38);
        ctx.lineTo(x + pw - 20, 38);
        ctx.quadraticCurveTo(x + pw - 28, 120, x + pw / 2, 132);
        ctx.quadraticCurveTo(x + 28, 120, x + 20, 38);
        ctx.fill();
        ctx.strokeStyle = 'rgba(240,208,146,.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      // gold rosette
      ctx.beginPath();
      ctx.arc(x + pw / 2, h * 0.88, 10, 0, TAU);
      ctx.fillStyle = 'rgba(232,196,125,.55)';
      ctx.fill();
    }
    // horizontal gold moldings
    ctx.fillStyle = 'rgba(216,177,104,.75)';
    ctx.fillRect(0, 0, w, 7);
    ctx.fillRect(0, h - 10, w, 6);
    ctx.fillStyle = 'rgba(8,22,26,.45)';
    ctx.fillRect(0, h - 34, w, 24);
  });
}

function makeTowerTexture() {
  return makeCanvasTexture(2048, 2048, (ctx, w, h) => {
    ctx.fillStyle = '#22585d';
    ctx.fillRect(0, 0, w, h);
    const panels = 8;
    const pw = w / panels;
    for (let i = 0; i < panels; i++) {
      const x = i * pw;
      ctx.fillStyle = i % 2 ? '#2a6669' : '#7a2734';
      ctx.fillRect(x, 0, pw, h);
      ctx.fillStyle = i % 2 ? 'rgba(14,41,46,.24)' : 'rgba(56,15,26,.19)';
      ctx.fillRect(x + 24, 0, pw - 48, h);
      ctx.strokeStyle = 'rgba(235,194,119,.56)';
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 12, 0, pw - 24, h);
      ctx.strokeStyle = 'rgba(255,239,207,.14)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x + 20, 9, pw - 40, h - 18);
      // long filigree stripes
      for (let k = 0; k < 3; k++) {
        const sx = x + pw * (0.3 + k * 0.2);
        ctx.strokeStyle = 'rgba(232,196,128,.18)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let y = 0; y < h; y += 38) {
          ctx.moveTo(sx - 5, y);
          ctx.quadraticCurveTo(sx + 8, y + 19, sx - 5, y + 38);
        }
        ctx.stroke();
      }
      // medallions
      for (let k = 0; k < 5; k++) {
        const y = h * (0.12 + k * 0.19);
        const R = 23;
        ctx.save();
        ctx.translate(x + pw / 2, y);
        ctx.strokeStyle = 'rgba(236,201,132,.52)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, R, 0, TAU);
        ctx.stroke();
        ctx.beginPath();
        for (let p = 0; p < 16; p++) {
          const a = (p / 16) * TAU - Math.PI / 2;
          const rr = p % 2 ? R * 0.38 : R * 0.82;
          const px = Math.cos(a) * rr;
          const py = Math.sin(a) * rr;
          if (p === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(236,201,132,.22)';
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
      // tall lancet glows
      if (i % 2 === 0) {
        ctx.save();
        ctx.translate(x + pw / 2, h * 0.69);
        const cw = pw * 0.34;
        const ch = h * 0.13;
        const g = ctx.createLinearGradient(0, -ch, 0, ch);
        g.addColorStop(0, 'rgba(255,214,151,.5)');
        g.addColorStop(0.5, 'rgba(220,139,92,.22)');
        g.addColorStop(1, 'rgba(40,30,31,.08)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(-cw / 2, ch);
        ctx.lineTo(-cw / 2, -ch * 0.35);
        ctx.arc(0, -ch * 0.35, cw / 2, Math.PI, 0);
        ctx.lineTo(cw / 2, ch);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(235,197,127,.35)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    }
    // horizontal moldings
    for (let y = 64; y < h; y += 170) {
      ctx.fillStyle = 'rgba(223,181,107,.4)';
      ctx.fillRect(0, y, w, 4);
      ctx.fillStyle = 'rgba(7,22,25,.28)';
      ctx.fillRect(0, y + 4, w, 8);
    }
    const shade = ctx.createLinearGradient(0, 0, w, 0);
    shade.addColorStop(0, 'rgba(0,0,0,.18)');
    shade.addColorStop(0.5, 'rgba(255,255,255,.04)');
    shade.addColorStop(1, 'rgba(0,0,0,.2)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeEnvelopeTexture(accentHex) {
  return makeCanvasTexture(2048, 1024, (ctx, w, h) => {
    const base = '#f2e2c5';
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    const stripes = 16;
    const sw = w / stripes;
    for (let i = 0; i < stripes; i++) {
      const x = i * sw;
      if (i % 2 === 0) {
        ctx.fillStyle = accentHex;
        ctx.fillRect(x, 0, sw, h);
      }
      const fold = ctx.createLinearGradient(x, 0, x + sw, 0);
      fold.addColorStop(0, 'rgba(36,20,20,.18)');
      fold.addColorStop(0.16, 'rgba(255,250,236,.08)');
      fold.addColorStop(0.5, 'rgba(255,255,255,.03)');
      fold.addColorStop(0.84, 'rgba(255,247,232,.08)');
      fold.addColorStop(1, 'rgba(30,18,20,.22)');
      ctx.fillStyle = fold;
      ctx.fillRect(x, 0, sw, h);
      // gold seams
      ctx.strokeStyle = 'rgba(191,150,83,.75)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255,236,195,.26)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + 5, 0);
      ctx.lineTo(x + 5, h);
      ctx.stroke();
      // tiny stars along the seam
      for (let s = 0; s < 7; s++) {
        const sy = h * (0.11 + s * 0.13);
        ctx.fillStyle = 'rgba(228,191,122,.34)';
        ctx.beginPath();
        ctx.arc(x + sw / 2, sy, 1.8, 0, TAU);
        ctx.fill();
      }
    }
    // scrolled bands near the crown and neck
    for (const yy of [h * 0.085, h * 0.905]) {
      ctx.fillStyle = 'rgba(199,155,87,.72)';
      ctx.fillRect(0, yy, w, 7);
      ctx.fillStyle = 'rgba(110,72,34,.24)';
      ctx.fillRect(0, yy + 7, w, 4);
      ctx.strokeStyle = 'rgba(255,238,201,.38)';
      ctx.lineWidth = 2;
      for (let x = 0; x < w; x += 42) {
        ctx.beginPath();
        ctx.arc(x + 21, yy + 3, 10, Math.PI, 0);
        ctx.stroke();
      }
    }
    // delicate diagonal gold ribs
    ctx.strokeStyle = 'rgba(215,176,107,.2)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 18; i++) {
      const x = (i / 18) * w;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.18);
      ctx.quadraticCurveTo(x + 30, h * 0.5, x - 8, h * 0.82);
      ctx.stroke();
    }
    // subtle age
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(86,62,38,${0.012 + rnd() * 0.025})`;
      ctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  }, { anisotropy: 8 });
}

function makeMedallionTexture(accentHex) {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 220);
    g.addColorStop(0, '#fbefd8');
    g.addColorStop(0.62, '#efdcb9');
    g.addColorStop(1, '#c6a367');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, 224, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = '#b18444';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, 225, 0, TAU);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,246,222,.9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 211, 0, TAU);
    ctx.stroke();
    // filigree
    ctx.strokeStyle = accentHex;
    ctx.lineWidth = 3;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * 172, cy + Math.sin(a) * 172, 38, a - 0.9, a + 0.9);
      ctx.stroke();
    }
    // star
    ctx.save();
    ctx.translate(cx, cy);
    ctx.beginPath();
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU - Math.PI / 2;
      const r = i % 2 ? 42 : 118;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    const sg = ctx.createLinearGradient(-100, -100, 100, 100);
    sg.addColorStop(0, '#8f6430');
    sg.addColorStop(0.5, '#d4ab65');
    sg.addColorStop(1, '#f3d596');
    ctx.fillStyle = sg;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,248,226,.7)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = accentHex;
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, TAU);
    ctx.fill();
    ctx.fillStyle = '#f5e3c6';
    ctx.beginPath();
    ctx.arc(cx, cy, 9, 0, TAU);
    ctx.fill();
  });
}

function makeBasketTexture() {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#a87643';
    ctx.fillRect(0, 0, w, h);
    const rows = 18;
    for (let i = 0; i < rows; i++) {
      const y = (i / rows) * h;
      const band = i % 2 ? '#c19058' : '#b07c49';
      ctx.fillStyle = band;
      ctx.fillRect(0, y, w, h / rows - 2);
      ctx.fillStyle = 'rgba(60,34,17,.24)';
      ctx.fillRect(0, y + h / rows - 2, w, 2);
      ctx.fillStyle = 'rgba(255,222,172,.14)';
      ctx.fillRect(0, y + 2, w, 1);
    }
    for (let x = 0; x < w; x += 19) {
      ctx.fillStyle = 'rgba(80,45,22,.3)';
      ctx.fillRect(x, 0, 4, h);
      ctx.fillStyle = 'rgba(255,221,170,.14)';
      ctx.fillRect(x + 4, 0, 2, h);
    }
    for (let i = 0; i < 500; i++) {
      ctx.strokeStyle = `rgba(60,34,17,${0.04 + rnd() * 0.06})`;
      ctx.lineWidth = 1;
      const x = rnd() * w;
      const y = rnd() * h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 8 + rnd() * 10, y + 2);
      ctx.stroke();
    }
  }, { wrapS: THREE.RepeatWrapping, wrapT: THREE.RepeatWrapping, repeat: [3, 2] });
}

function makeNumberPlate(index, accentHex) {
  return makeCanvasTexture(512, 220, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, '#163c41');
    g.addColorStop(1, '#0c282d');
    ctx.fillStyle = g;
    roundRect(ctx, 12, 12, w - 24, h - 24, 8);
    ctx.fill();
    ctx.strokeStyle = 'rgba(235,196,122,.8)';
    ctx.lineWidth = 4;
    roundRect(ctx, 12, 12, w - 24, h - 24, 8);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(235,196,122,.24)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, 25, 25, w - 50, h - 50, 4);
    ctx.stroke();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = accentHex;
    ctx.font = '500 24px Georgia, serif';
    ctx.letterSpacing = '7px';
    ctx.fillText('CLOUD CROWN', w / 2, h * 0.34);
    ctx.fillStyle = '#f3d89f';
    ctx.font = '400 82px Georgia, serif';
    ctx.fillText(String(index + 1).padStart(2, '0'), w / 2, h * 0.68);
  });
}

function makeArchTexture() {
  return makeCanvasTexture(256, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(34, h - 20);
    ctx.lineTo(34, h * 0.34);
    ctx.arc(w / 2, h * 0.34, w / 2 - 34, Math.PI, 0);
    ctx.lineTo(w - 34, h - 20);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, 'rgba(255,229,181,.95)');
    g.addColorStop(0.24, 'rgba(255,199,131,.72)');
    g.addColorStop(0.7, 'rgba(162,82,57,.26)');
    g.addColorStop(1, 'rgba(24,28,34,.12)');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(239,205,144,.9)';
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,244,215,.32)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(51, h - 32);
    ctx.lineTo(51, h * 0.35);
    ctx.arc(w / 2, h * 0.35, w / 2 - 51, Math.PI, 0);
    ctx.lineTo(w - 51, h - 32);
    ctx.stroke();
    // mullions
    ctx.strokeStyle = 'rgba(48,27,26,.3)';
    ctx.lineWidth = 2;
    for (let i = 1; i < 4; i++) {
      const x = (w / 4) * i;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.2);
      ctx.lineTo(x, h - 25);
      ctx.stroke();
    }
  });
}

function makeSignTexture(text, sub, opts = {}) {
  const w = opts.width ?? 1024;
  const h = opts.height ?? 300;
  return makeCanvasTexture(w, h, (ctx) => {
    ctx.clearRect(0, 0, w, h);
    roundRect(ctx, 12, 12, w - 24, h - 24, 10);
    ctx.fillStyle = opts.bg ?? 'rgba(12,30,35,.9)';
    ctx.fill();
    ctx.strokeStyle = opts.border ?? 'rgba(231,193,119,.72)';
    ctx.lineWidth = 3;
    ctx.stroke();
    roundRect(ctx, 26, 26, w - 52, h - 52, 4);
    ctx.strokeStyle = 'rgba(231,193,119,.18)';
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = opts.accent ?? '#e5bf7a';
    ctx.font = '400 27px Georgia, serif';
    ctx.fillText('✦', w * 0.055, h * 0.5);
    ctx.fillText('✦', w * 0.945, h * 0.5);
    try { ctx.letterSpacing = '6px'; } catch (e) { /* ignore */ }
    ctx.fillStyle = opts.color ?? '#f7eacf';
    ctx.font = `500 ${opts.mainSize ?? 76}px "Songti SC", "STSong", Georgia, serif`;
    ctx.fillText(text, w / 2, h * (sub ? 0.42 : 0.52));
    if (sub) {
      ctx.fillStyle = opts.subColor ?? '#d4b16e';
      ctx.font = '500 26px "Avenir Next", "Segoe UI", sans-serif';
      ctx.letterSpacing = '8px';
      ctx.fillText(sub, w / 2, h * 0.68);
    }
  });
}

function makeTowerSignTexture() {
  return makeCanvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(234,198,129,.7)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 225, 0, TAU);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(234,198,129,.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 210, 0, TAU);
    ctx.stroke();
    ctx.fillStyle = '#f1ddba';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '500 54px "Songti SC", "STSong", Georgia, serif';
    try { ctx.letterSpacing = '10px'; } catch (e) { /* ignore */ }
    ctx.fillText('云上', w / 2, h * 0.42);
    ctx.fillText('星穹', w / 2, h * 0.58);
    ctx.fillStyle = '#d3ad68';
    ctx.font = '400 20px Georgia, serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('THE CLOUD CROWN', w / 2, h * 0.73);
  });
}

/* ------------------------------------------------------------------
   primitives
   ------------------------------------------------------------------ */

const M = {
  gold: new THREE.MeshStandardMaterial({ color: C.gold, metalness: 0.68, roughness: 0.27 }),
  goldLight: new THREE.MeshStandardMaterial({ color: C.goldLight, metalness: 0.55, roughness: 0.22 }),
  goldDeep: new THREE.MeshStandardMaterial({ color: C.goldDeep, metalness: 0.55, roughness: 0.4 }),
  cream: new THREE.MeshStandardMaterial({ color: C.cream, roughness: 0.72, metalness: 0.04 }),
  creamLight: new THREE.MeshStandardMaterial({ color: C.creamLight, roughness: 0.65, metalness: 0.04 }),
  creamDeep: new THREE.MeshStandardMaterial({ color: C.creamDeep, roughness: 0.76, metalness: 0.04 }),
  stone: new THREE.MeshStandardMaterial({ color: C.stone, roughness: 0.78, metalness: 0.04 }),
  stoneDark: new THREE.MeshStandardMaterial({ color: C.stoneDark, roughness: 0.9, metalness: 0.03 }),
  wine: new THREE.MeshStandardMaterial({ color: C.wine, roughness: 0.72, metalness: 0.05 }),
  wineDeep: new THREE.MeshStandardMaterial({ color: C.wineDeep, roughness: 0.78, metalness: 0.05 }),
  wineLight: new THREE.MeshStandardMaterial({ color: C.wineLight, roughness: 0.7, metalness: 0.05 }),
  teal: new THREE.MeshStandardMaterial({ color: C.teal, roughness: 0.66, metalness: 0.08 }),
  tealDeep: new THREE.MeshStandardMaterial({ color: C.tealDeep, roughness: 0.72, metalness: 0.08 }),
  tealLight: new THREE.MeshStandardMaterial({ color: C.tealLight, roughness: 0.64, metalness: 0.08 }),
  iron: new THREE.MeshStandardMaterial({ color: C.iron, roughness: 0.56, metalness: 0.42 }),
  dark: new THREE.MeshStandardMaterial({ color: C.dark, roughness: 0.82, metalness: 0.2 }),
  wicker: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.86, metalness: 0.02 }),
  glassGlow: new THREE.MeshBasicMaterial({ color: 0xffd49a, transparent: true, opacity: 0.72, toneMapped: false, side: THREE.DoubleSide }),
  warmGlow: new THREE.MeshBasicMaterial({ color: 0xffbd72, toneMapped: false }),
  flame: new THREE.MeshBasicMaterial({ color: 0xff9d43, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false }),
  rope: new THREE.LineBasicMaterial({ color: 0xd7b76f, transparent: true, opacity: 0.58, toneMapped: false }),
  ropeCylinder: new THREE.MeshStandardMaterial({ color: 0xd9bc80, metalness: 0.34, roughness: 0.47, emissive: 0x3a2b16, emissiveIntensity: 0.35 }),
  cable: new THREE.MeshStandardMaterial({ color: 0xcda45f, metalness: 0.6, roughness: 0.35 }),
  starGold: new THREE.MeshStandardMaterial({ color: 0xd9b36d, metalness: 0.58, roughness: 0.3, emissive: 0x5b3d1a, emissiveIntensity: 0.55 }),
  cloth: new THREE.MeshStandardMaterial({ color: C.wine, roughness: 0.82, metalness: 0.02, side: THREE.DoubleSide }),
};

M.flagWine = M.wine.clone();
M.flagWine.side = THREE.DoubleSide;
M.flagTeal = M.teal.clone();
M.flagTeal.side = THREE.DoubleSide;
M.flagCream = M.cream.clone();
M.flagCream.side = THREE.DoubleSide;
M.roofWine = M.wine.clone();
M.roofWine.side = THREE.DoubleSide;
M.roofWine.emissive = new THREE.Color(0x3c1a1d);
M.roofWine.emissiveIntensity = 0.35;
M.roofCream = M.cream.clone();
M.roofCream.side = THREE.DoubleSide;
M.roofCream.emissive = new THREE.Color(0x3a2a17);
M.roofCream.emissiveIntensity = 0.25;
M.roofTeal = M.teal.clone();
M.roofTeal.side = THREE.DoubleSide;
M.roofTeal.emissive = new THREE.Color(0x0e2c2c);
M.roofTeal.emissiveIntensity = 0.32;

const glowTexture = makeGlowTexture(128);
const basketTexture = makeBasketTexture();
M.wicker.map = basketTexture;
M.wicker.side = THREE.DoubleSide;
M.wicker.needsUpdate = true;

function makeStarGeometry(outer = 1, inner = 0.43, points = 5, depth = 0.1) {
  const shape = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * TAU - Math.PI / 2;
    const r = i % 2 ? inner : outer;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSize: 0.035,
    bevelThickness: 0.035,
    bevelSegments: 2,
    curveSegments: 2,
  });
  geo.center();
  return geo;
}
const medallionStarGeo = makeStarGeometry(1, 0.43, 5, 0.13);

function addMesh(parent, geo, mat, x = 0, y = 0, z = 0, opts = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  if (opts.rx) m.rotation.x = opts.rx;
  if (opts.ry) m.rotation.y = opts.ry;
  if (opts.rz) m.rotation.z = opts.rz;
  if (opts.sx || opts.sy || opts.sz) m.scale.set(opts.sx ?? 1, opts.sy ?? 1, opts.sz ?? 1);
  if (opts.cast) m.castShadow = true;
  if (opts.receive) m.receiveShadow = true;
  parent.add(m);
  return m;
}

function box(parent, w, h, d, x, y, z, mat, opts = {}) {
  return addMesh(parent, new THREE.BoxGeometry(w, h, d), mat, x, y, z, opts);
}

function cyl(parent, rt, rb, h, seg, x, y, z, mat, opts = {}) {
  return addMesh(parent, new THREE.CylinderGeometry(rt, rb, h, seg, 1, opts.open ?? false, opts.thetaStart ?? 0, opts.thetaLength ?? TAU), mat, x, y, z, opts);
}

function sphere(parent, radius, seg, x, y, z, mat, opts = {}) {
  return addMesh(parent, new THREE.SphereGeometry(radius, seg, Math.max(6, Math.round(seg * 0.62))), mat, x, y, z, opts);
}

function torus(parent, radius, tube, radialSeg, tubularSeg, x, y, z, mat, opts = {}) {
  return addMesh(parent, new THREE.TorusGeometry(radius, tube, radialSeg, tubularSeg, opts.arc ?? TAU), mat, x, y, z, opts);
}

function cylinderBetween(parent, a, b, radius, mat, seg = 6) {
  const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, seg), mat);
  m.position.copy(mid);
  m.quaternion.setFromUnitVectors(UP, dir.normalize());
  parent.add(m);
  return m;
}

function pAt(angle, radius) {
  return new THREE.Vector3(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
}

function glowSprite(parent, color, scale, x, y, z, opacity = 0.55) {
  const mat = new THREE.SpriteMaterial({
    map: glowTexture,
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const s = new THREE.Sprite(mat);
  s.position.set(x, y, z);
  s.scale.setScalar(scale);
  parent.add(s);
  return s;
}

/* ------------------------------------------------------------------
   flags
   ------------------------------------------------------------------ */

class WavingFlag {
  constructor(parent, { width = 1.2, height = 0.55, x = 0, y = 0, z = 0, material = M.wine, phase = 0, pole = 0 }) {
    this.group = new THREE.Group();
    this.group.position.set(x, y, z);
    parent.add(this.group);
    this.phase = phase;
    if (pole > 0) {
      cyl(this.group, 0.035, 0.045, pole, 6, 0, pole / 2, 0, M.gold);
    }
    const geo = new THREE.PlaneGeometry(width, height, 9, 2);
    geo.translate(width / 2, -height / 2, 0);
    this.base = geo.attributes.position.array.slice();
    this.width = width;
    this.height = height;
    this.mesh = new THREE.Mesh(geo, material);
    this.mesh.position.set(0, pole > 0 ? pole - 0.05 : 0, 0);
    this.group.add(this.mesh);
    this.mesh.castShadow = false;
  }

  update(t) {
    const pos = this.mesh.geometry.attributes.position;
    const arr = pos.array;
    const base = this.base;
    for (let i = 0; i < arr.length; i += 3) {
      const bx = base[i];
      const by = base[i + 1];
      const k = bx / this.width;
      arr[i] = bx;
      arr[i + 1] = by + Math.sin(t * 1.8 + this.phase + k * 3.2) * 0.04 * k;
      arr[i + 2] = Math.sin(t * 2.1 + this.phase + k * 4.6) * 0.11 * k;
    }
    pos.needsUpdate = true;
  }
}

/* ------------------------------------------------------------------
   bulb field
   ------------------------------------------------------------------ */

class BulbField {
  constructor(parent) {
    this.parent = parent;
    this.items = [];
    this.meshes = [];
    this.materials = [];
    this.scale = 1;
  }

  add(x, y, z, scale = 1) {
    this.items.push({ x, y, z, scale });
  }

  finalize() {
    const geo = new THREE.SphereGeometry(0.105, 8, 6);
    for (let g = 0; g < 3; g++) {
      const list = this.items.filter((_, i) => i % 3 === g);
      if (!list.length) continue;
      const mat = new THREE.MeshBasicMaterial({ color: 0xffd79b, toneMapped: false });
      const inst = new THREE.InstancedMesh(geo, mat, list.length);
      const dummy = new THREE.Object3D();
      list.forEach((it, i) => {
        dummy.position.set(it.x, it.y, it.z);
        dummy.scale.setScalar(it.scale);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
        const c = new THREE.Color(0xffd79b);
        c.multiplyScalar(0.78 + (i % 5) * 0.06);
        inst.setColorAt(i, c);
      });
      inst.instanceMatrix.needsUpdate = true;
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
      inst.frustumCulled = false;
      this.parent.add(inst);
      this.meshes.push(inst);
      this.materials.push(mat);
    }
  }

  update(t, strength) {
    const k = strength;
    this.materials.forEach((mat, i) => {
      const pulse = 0.82 + Math.sin(t * 1.25 + i * 2.1) * 0.16;
      mat.color.setRGB(1.55 * k * pulse, 1.03 * k * pulse, 0.53 * k * pulse);
    });
  }

  setMood(strength) { this.scale = strength; }
}

/* ------------------------------------------------------------------
   world
   ------------------------------------------------------------------ */

export function createCloudWorld({ scene, renderer, bloom, isMobile = false }) {
  const root = new THREE.Group();
  scene.add(root);

  const sky = createSky(scene);
  const clouds = createCloudBank(scene);
  const dust = createDust(scene);
  const skyLanterns = createSkyLanterns(scene);
  const distantBalloons = createDistantBalloons(scene);
  const bulbField = new BulbField(root);
  const flags = [];
  const lampSprites = [];

  const hemi = new THREE.HemisphereLight(0xb9c9e8, 0x4b3330, 1.2);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffc08d, 2.2);
  key.position.set(56, 72, 46);
  key.castShadow = false;
  scene.add(key);
  scene.add(key.target);

  const rim = new THREE.DirectionalLight(0x77b7c6, 1.0);
  rim.position.set(-52, 38, -46);
  scene.add(rim);
  const ambient = new THREE.AmbientLight(0x687691, 0.46);
  scene.add(ambient);

  const baseGlow = new THREE.PointLight(0xffbd82, 54, 38, 2);
  baseGlow.position.set(0, 6.2, 4);
  scene.add(baseGlow);
  const crownGlow = new THREE.PointLight(0xffd49a, 130, 48, 2);
  crownGlow.position.set(0, 51, 0);
  scene.add(crownGlow);
  const balloonLight = new THREE.PointLight(0xffb674, 16, 9, 2);
  scene.add(balloonLight);
  const deckGlow = new THREE.PointLight(0xffbd7e, 60, 30, 2);
  deckGlow.position.set(0, 6.2, 12.5);
  scene.add(deckGlow);
  const towerWash = new THREE.PointLight(0xffc38c, 32, 28, 2);
  towerWash.position.set(0, 27.0, 7.4);
  scene.add(towerWash);
  const facadeLights = [];
  for (const [x, z] of [[-11, 14], [11, 14], [-14, -6], [14, -6]]) {
    const light = new THREE.PointLight(0xffb06e, 26, 23, 2);
    light.position.set(x, 2.7, z);
    scene.add(light);
    facadeLights.push(light);
  }

  scene.fog = new THREE.FogExp2(0x31425d, 0.00155);

  /* environment map ------------------------------------------------ */
  const envCanvas = document.createElement('canvas');
  envCanvas.width = 1024;
  envCanvas.height = 512;
  {
    const ctx = envCanvas.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, '#667fa4');
    g.addColorStop(0.42, '#ecd3b7');
    g.addColorStop(0.55, '#a57863');
    g.addColorStop(0.62, '#3d3b4b');
    g.addColorStop(1, '#161b27');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 512);
    const sun = ctx.createRadialGradient(760, 215, 0, 760, 215, 180);
    sun.addColorStop(0, 'rgba(255,248,221,.95)');
    sun.addColorStop(0.18, 'rgba(255,215,161,.5)');
    sun.addColorStop(1, 'rgba(255,190,130,0)');
    ctx.fillStyle = sun;
    ctx.fillRect(540, 0, 440, 400);
    for (let i = 0; i < 16; i++) {
      const x = 40 + i * 62;
      const ww = 16 + rnd() * 22;
      const wg = ctx.createLinearGradient(x, 250, x, 500);
      wg.addColorStop(0, 'rgba(255,228,177,0)');
      wg.addColorStop(0.4, `rgba(255,213,151,${0.06 + rnd() * 0.09})`);
      wg.addColorStop(1, 'rgba(255,200,140,0)');
      ctx.fillStyle = wg;
      ctx.fillRect(x, 240, ww, 200);
    }
    ctx.fillStyle = 'rgba(10,16,24,.28)';
    ctx.fillRect(0, 492, 1024, 20);
  }
  const envTex = new THREE.CanvasTexture(envCanvas);
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  envTex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const envRT = pmrem.fromEquirectangular(envTex);
  scene.environment = envRT.texture;
  envTex.dispose();
  pmrem.dispose();

  /* ground --------------------------------------------------------- */
  const groundTex = makeGroundTexture();
  const groundMat = new THREE.MeshStandardMaterial({
    map: groundTex,
    color: 0xffffff,
    roughness: 0.63,
    metalness: 0.14,
    envMapIntensity: 0.55,
  });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(86, 128), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.04;
  ground.receiveShadow = true;
  root.add(ground);

  const plazaEdge = torus(root, 85.2, 0.4, 6, 128, 0, 0.02, 0, M.stoneDark, { rx: -Math.PI / 2 });
  plazaEdge.receiveShadow = true;
  torus(root, 72, 0.12, 4, 96, 0, 0.05, 0, M.goldDeep, { rx: -Math.PI / 2 });
  torus(root, 56, 0.1, 4, 96, 0, 0.04, 0, M.goldDeep, { rx: -Math.PI / 2 });
  torus(root, 38, 0.07, 4, 96, 0, 0.03, 0, M.goldDeep, { rx: -Math.PI / 2 });

  // warm garden planters
  const flowerMats = [M.wineLight, M.goldLight, M.creamLight, M.tealLight];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const p = pAt(a, 27.5);
    const planter = new THREE.Group();
    planter.position.set(p.x, 0, p.z);
    root.add(planter);
    cyl(planter, 3.0, 3.3, 0.42, 20, 0, 0.21, 0, M.stone, { receive: true });
    cyl(planter, 2.8, 2.9, 0.12, 20, 0, 0.47, 0, M.creamDeep, {});
    torus(planter, 2.86, 0.045, 4, 40, 0, 0.54, 0, M.gold, { rx: Math.PI / 2 });
    const hedge = sphere(planter, 2.3, 12, 0, 1.18, 0, M.tealDeep, { sy: 0.52, sz: 0.86, sx: 0.92, cast: true });
    hedge.scale.multiplyScalar(1);
    // soft flowering dots
    for (let k = 0; k < 7; k++) {
      const aa = (k / 7) * TAU + i;
      const rr = 1.2 + rnd() * 0.9;
      sphere(planter, 0.07 + rnd() * 0.04, 5, Math.sin(aa) * rr, 1.55 + rnd() * 0.25, Math.cos(aa) * rr * 0.7, flowerMats[(i + k) % flowerMats.length], {});
    }
    bulbField.add(p.x + Math.sin(a) * 2.15, 1.55, p.z + Math.cos(a) * 2.15, 0.8);
    if (i % 2 === 0) {
      cyl(planter, 0.06, 0.09, 2.9, 6, 2.4, 1.45, 0, M.iron);
      sphere(planter, 0.2, 8, 2.4, 2.95, 0, M.warmGlow, {});
      bulbField.add(p.x + 2.4 * Math.sin(a + Math.PI / 2), 2.95, p.z + 2.4 * Math.cos(a + Math.PI / 2), 1.1);
      lampSprites.push(glowSprite(root, 0xffc27d, 2.5, p.x + 2.4 * Math.sin(a + Math.PI / 2), 2.95, p.z + 2.4 * Math.cos(a + Math.PI / 2), 0.35));
    }
  }

  /* pavilion ------------------------------------------------------- */
  const pavilion = new THREE.Group();
  root.add(pavilion);
  const archMat = new THREE.MeshBasicMaterial({
    map: makeArchTexture(), transparent: true, depthWrite: false, toneMapped: false, opacity: 0.94,
  });

  // foundation
  cyl(pavilion, 22.2, 23.2, 0.42, 64, 0, 0.21, 0, M.stoneDark, { receive: true });
  cyl(pavilion, 20.7, 21.5, 0.45, 64, 0, 0.64, 0, M.stone, { receive: true });
  torus(pavilion, 22.25, 0.08, 4, 80, 0, 0.45, 0, M.goldDeep, { rx: Math.PI / 2 });
  torus(pavilion, 20.75, 0.06, 4, 80, 0, 0.88, 0, M.goldDeep, { rx: Math.PI / 2 });

  const facadeTex = makeFacadeTexture();
  const facadeMat = new THREE.MeshStandardMaterial({
    map: facadeTex,
    roughness: 0.7,
    metalness: 0.08,
    emissive: 0x4b2a18,
    emissiveMap: facadeTex,
    emissiveIntensity: 0.22,
  });
  cyl(pavilion, 17.15, 17.65, 2.52, 64, 0, 2.16, 0, facadeMat, { open: true });
  cyl(pavilion, 17.5, 17.5, 0.16, 64, 0, 3.47, 0, M.goldDeep, {});
  cyl(pavilion, 17.15, 17.15, 0.3, 64, 0, 3.62, 0, M.stone, { receive: true });
  torus(pavilion, 17.17, 0.1, 4, 96, 0, 3.78, 0, M.gold, { rx: Math.PI / 2 });
  cyl(pavilion, 16.0, 16.0, 0.06, 64, 0, 3.8, 0, M.tealDeep, {});

  // facade pilasters
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const p = pAt(a, 17.46);
    box(pavilion, 0.34, 2.5, 0.3, p.x, 2.12, p.z, M.goldDeep, { ry: a });
    sphere(pavilion, 0.19, 6, p.x, 3.44, p.z, M.gold, {});
    // arched light at every other bay
    if (i % 2 === 0) {
      const arch = addMesh(pavilion, new THREE.PlaneGeometry(2.1, 3.3), archMat, Math.sin(a) * 17.48, 2.2, Math.cos(a) * 17.48, { ry: a });
      arch.renderOrder = 2;
    }
  }

  // underside ribs
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const p = pAt(a, 17.2);
    box(pavilion, 0.18, 1.9, 0.2, p.x, 1.25, p.z, M.goldDeep, { ry: a });
  }

  // parapet panels, posts and rail
  const panelAngles = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    if (Math.abs(((a + Math.PI) % TAU) - Math.PI) < 0.18) continue; // stair gap
    panelAngles.push(a);
    const p = pAt(a, 16.82);
    const panel = box(pavilion, 5.3, 0.92, 0.11, p.x, 4.24, p.z, M.tealDeep, { ry: a });
    panel.receiveShadow = true;
    // gold frame
    box(pavilion, 5.38, 0.07, 0.14, p.x, 4.71, p.z, M.gold, { ry: a });
    box(pavilion, 5.38, 0.07, 0.14, p.x, 3.79, p.z, M.goldDeep, { ry: a });
    // creamy swag
    const swag = addMesh(pavilion, new THREE.PlaneGeometry(3.6, 0.65), M.cloth, Math.sin(a) * 16.73, 4.16, Math.cos(a) * 16.73, { ry: a });
    // rosette
    const ros = addMesh(pavilion, new THREE.CircleGeometry(0.24, 12), M.goldLight, Math.sin(a) * 16.74, 4.24, Math.cos(a) * 16.74, { ry: a });
    ros.material = M.goldLight;
    // posts
    const pp = pAt(a + Math.PI / 16, 16.82);
    cyl(pavilion, 0.075, 0.11, 1.2, 6, pp.x, 4.28, pp.z, M.gold);
    sphere(pavilion, 0.15, 7, pp.x, 4.94, pp.z, M.warmGlow, {});
    bulbField.add(pp.x, 4.94, pp.z, 1.1);
  }
  // continuous gold rail over the gaps
  const sorted = panelAngles.slice().sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i];
    const b = sorted[(i + 1) % sorted.length];
    let d = b - a;
    if (d < 0) d += TAU;
    if (d > 0.5) continue;
    const pa = pAt(a + Math.PI / 16, 16.82);
    const pb = pAt(b + Math.PI / 16, 16.82);
    if (pa.distanceTo(pb) > 8) continue;
    cylinderBetween(pavilion, new THREE.Vector3(pa.x, 4.94, pa.z), new THREE.Vector3(pb.x, 4.94, pb.z), 0.045, M.gold);
    cylinderBetween(pavilion, new THREE.Vector3(pa.x, 3.93, pa.z), new THREE.Vector3(pb.x, 3.93, pb.z), 0.03, M.goldDeep);
  }

  // deck medallions at the eight lift berths
  const medallionTex = makeMedallionTexture('#8d2f3b');
  const medallionMat = new THREE.MeshStandardMaterial({ map: medallionTex, transparent: true, roughness: 0.5, metalness: 0.3, side: THREE.DoubleSide });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const p = pAt(a, RIDE.ringRadius);
    const disc = addMesh(pavilion, new THREE.CircleGeometry(1.45, 32), medallionMat, p.x, 3.8, p.z, { rx: -Math.PI / 2 });
    disc.renderOrder = 1;
    torus(pavilion, 1.52, 0.035, 4, 32, p.x, 3.81, p.z, M.gold, { rx: Math.PI / 2 });
    // a modest boarding step
    const sp = pAt(a, RIDE.ringRadius + 1.9);
    box(pavilion, 2.2, 0.28, 1.25, sp.x, 3.86, sp.z, M.stoneDark, { ry: a });
    box(pavilion, 2.0, 0.06, 1.05, sp.x, 4.02, sp.z, M.goldDeep, { ry: a });
  }

  // stairs
  const stairGroup = new THREE.Group();
  pavilion.add(stairGroup);
  const stairSteps = 9;
  const stairRise = RIDE.platformY / stairSteps;
  const stairRun = 0.82;
  for (let i = 0; i < stairSteps; i++) {
    const y = (i + 0.5) * stairRise;
    const z = 16.9 + (stairSteps - 1 - i) * stairRun;
    box(stairGroup, 8.8, stairRise, stairRun + 0.05, 0, y, z, i % 2 ? M.stone : M.creamDeep, { receive: true });
    box(stairGroup, 9.0, 0.045, 0.12, 0, y + stairRise / 2, z - stairRun / 2, M.goldDeep);
  }
  // stair banisters
  for (const x of [-4.55, 4.55]) {
    for (let i = 0; i < 6; i++) {
      const z = 17.1 + i * 1.15;
      const y = 0.6 + (i * 1.15 / (stairSteps * stairRun)) * RIDE.platformY;
      cyl(stairGroup, 0.055, 0.075, 1.0, 6, x, Math.min(RIDE.platformY + 0.45, y), z, M.gold);
    }
    const a = new THREE.Vector3(x, 0.85, 24.9);
    const b = new THREE.Vector3(x, RIDE.platformY + 0.82, 16.8);
    cylinderBetween(stairGroup, a, b, 0.055, M.gold);
  }
  // entrance pylons and sign
  for (const x of [-5.2, 5.2]) {
    cyl(stairGroup, 0.24, 0.36, 4.1, 8, x, RIDE.platformY + 2.05, 16.4, M.goldDeep);
    cyl(stairGroup, 0.35, 0.35, 0.16, 8, x, RIDE.platformY + 0.1, 16.4, M.gold);
    sphere(stairGroup, 0.3, 8, x, RIDE.platformY + 4.22, 16.4, M.goldLight, {});
    bulbField.add(x, RIDE.platformY + 4.25, 16.4, 1.25);
  }
  const entranceSign = addMesh(
    stairGroup,
    new THREE.PlaneGeometry(9.2, 2.55),
    new THREE.MeshBasicMaterial({
      map: makeSignTexture('云 上 星 穹', 'THE CLOUD CROWN  ·  72 M', { width: 1024, height: 300 }),
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    }),
    0, RIDE.platformY + 3.2, 16.75,
  );
  entranceSign.renderOrder = 3;
  for (let i = 0; i < 9; i++) {
    bulbField.add(-4.2 + i * 1.05, RIDE.platformY + 2.05, 16.7, 0.85);
  }
  // queue stanchions
  for (let i = 0; i < 8; i++) {
    const x = -4.4 + i * 1.25;
    cyl(stairGroup, 0.055, 0.07, 1.0, 5, x, 0.5, 27.2, M.goldDeep);
    if (i < 7) {
      const nextX = x + 1.25;
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(x, 0.82, 27.2),
        new THREE.Vector3((x + nextX) / 2, 0.66, 27.2),
        new THREE.Vector3(nextX, 0.82, 27.2),
      );
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.018, 4, false), M.wineDeep);
      stairGroup.add(tube);
    }
  }
  // base lamp sprites
  for (const x of [-5.2, 5.2]) {
    lampSprites.push(glowSprite(root, 0xffc47f, 4.2, x, RIDE.platformY + 4.25, 16.4, 0.6));
  }

  /* tower ---------------------------------------------------------- */
  const tower = new THREE.Group();
  root.add(tower);
  const towerTex = makeTowerTexture();
  const towerMat = new THREE.MeshStandardMaterial({
    map: towerTex,
    roughness: 0.57,
    metalness: 0.18,
    emissive: 0x3a2619,
    emissiveMap: towerTex,
    emissiveIntensity: 0.22,
  });

  // base drum
  cyl(tower, 5.55, 5.9, 6.2, 32, 0, RIDE.platformY + 3.1, 0, towerMat, { cast: true, receive: true });
  torus(tower, 5.7, 0.16, 5, 64, 0, 9.62, 0, M.goldDeep, { rx: Math.PI / 2 });
  torus(tower, 5.78, 0.09, 4, 64, 0, 3.73, 0, M.gold, { rx: Math.PI / 2 });
  // eight columns
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const p = pAt(a, 5.55);
    cyl(tower, 0.17, 0.21, 6.0, 7, p.x, RIDE.platformY + 3.0, p.z, M.gold);
    sphere(tower, 0.26, 7, p.x, RIDE.platformY + 6.08, p.z, M.goldLight);
    box(tower, 0.5, 0.18, 0.5, p.x, RIDE.platformY + 0.1, p.z, M.goldDeep, { ry: a });
  }
  // base doors and lights
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * TAU + Math.PI / 4;
    const arch = addMesh(tower, new THREE.PlaneGeometry(2.35, 3.9), archMat, Math.sin(a) * 5.72, RIDE.platformY + 2.55, Math.cos(a) * 5.72, { ry: a });
    arch.renderOrder = 2;
  }
  // balcony at the base
  cyl(tower, 6.35, 6.65, 0.28, 32, 0, 9.9, 0, M.stone, { cast: true });
  torus(tower, 6.45, 0.08, 4, 64, 0, 10.1, 0, M.gold, { rx: Math.PI / 2 });
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU;
    const p = pAt(a, 6.25);
    cyl(tower, 0.045, 0.06, 0.8, 5, p.x, 10.55, p.z, M.gold);
    if (i % 3 === 0) {
      sphere(tower, 0.11, 6, p.x, 11.0, p.z, M.warmGlow);
      bulbField.add(p.x, 11.0, p.z, 0.9);
    }
  }
  torus(tower, 6.25, 0.035, 4, 64, 0, 10.95, 0, M.gold, { rx: Math.PI / 2 });

  // tapering main shaft
  cyl(tower, 2.8, 4.1, 33.0, 32, 0, 27.0, 0, towerMat, { cast: true, receive: true });
  // eight gold ribs, each strung with small lamps
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const pb = pAt(a, 4.02);
    const pt = pAt(a, 2.86);
    cylinderBetween(tower, new THREE.Vector3(pb.x, 10.8, pb.z), new THREE.Vector3(pt.x, 43.2, pt.z), 0.055, M.gold, 5);
    for (let y = 13.0; y < 42.5; y += 2.45) {
      const t = (y - 10.8) / 32.4;
      const r = 4.08 + (2.9 - 4.08) * t;
      const p = pAt(a, r);
      bulbField.add(p.x, y, p.z, 0.55);
    }
  }
  // slender windows between the medallions
  for (const [y, ww, hh] of [[21.6, 0.85, 2.2], [34.4, 0.78, 2.0]]) {
    const t = (y - 10.8) / 32.4;
    const r = 4.04 + (2.88 - 4.04) * t;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + Math.PI / 8;
      const p = pAt(a, r);
      const win = addMesh(tower, new THREE.PlaneGeometry(ww, hh), archMat, p.x, y, p.z, { ry: a });
      win.renderOrder = 2;
    }
  }
  // shaft rings
  for (const [y, r, tube] of [[18.2, 3.65, 0.08], [25.4, 3.37, 0.07], [32.8, 3.08, 0.08], [39.6, 2.86, 0.07]]) {
    torus(tower, r, tube, 4, 48, 0, y, 0, M.gold, { rx: Math.PI / 2 });
  }
  // mid balcony
  cyl(tower, 4.7, 4.85, 0.22, 28, 0, 32.45, 0, M.stone, { cast: true });
  torus(tower, 4.73, 0.06, 4, 48, 0, 32.6, 0, M.gold, { rx: Math.PI / 2 });
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * TAU;
    const p = pAt(a, 4.62);
    cyl(tower, 0.04, 0.05, 0.72, 5, p.x, 33.0, p.z, M.gold);
    if (i % 4 === 0) bulbField.add(p.x, 33.38, p.z, 0.8);
  }
  torus(tower, 4.62, 0.03, 4, 48, 0, 33.36, 0, M.gold, { rx: Math.PI / 2 });
  // decorative medallions on the tower
  for (const [y, s] of [[17.0, 1.62], [27.0, 1.42], [38.5, 1.22]]) {
    const rr = 4.02 - (y - 10.8) * 0.038;
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU;
      const p = pAt(a, rr);
      const m = addMesh(tower, new THREE.CircleGeometry(s, 28), medallionMat, p.x, y, p.z, { ry: a });
      m.renderOrder = 2;
      const star = addMesh(tower, medallionStarGeo, M.starGold, p.x * 1.015, y, p.z * 1.015, { ry: a });
      star.scale.setScalar(s * 0.5);
      star.renderOrder = 3;
    }
  }
  // front vertical cartouche
  for (let i = 0; i < 7; i++) {
    const y = 12.2 + i * 4.4;
    const r = 4.42 - i * 0.13;
    const p = pAt(0, r);
    box(tower, 0.22, 1.5, 0.3, p.x, y, p.z, M.gold, { ry: 0 });
    sphere(tower, 0.13, 6, p.x, y + 0.9, p.z, M.goldLight);
  }

  // flared crown cornice
  cyl(tower, 4.85, 3.5, 0.8, 24, 0, 42.95, 0, M.goldDeep, { cast: true });
  cyl(tower, 4.55, 4.85, 0.25, 24, 0, 43.38, 0, M.cream, {});
  torus(tower, 4.8, 0.1, 4, 48, 0, 43.55, 0, M.gold, { rx: Math.PI / 2 });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const p = pAt(a, 4.82);
    bulbField.add(p.x, 43.62, p.z, 0.82);
  }
  // crown drum
  cyl(tower, 4.55, 3.6, 8.4, 24, 0, 47.0, 0, towerMat, { cast: true, receive: true });
  for (const [y, r] of [[43.4, 3.15], [47.9, 3.75], [51.1, 4.4]]) {
    torus(tower, r, 0.11, 4, 48, 0, y, 0, M.gold, { rx: Math.PI / 2 });
  }
  // eight glowing crown arches
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const p = pAt(a, 4.35);
    const arch = addMesh(tower, new THREE.PlaneGeometry(2.25, 4.3), archMat, p.x, 48.15, p.z, { ry: a });
    arch.renderOrder = 2;
    bulbField.add(Math.sin(a + 0.25) * 4.55, 50.6, Math.cos(a + 0.25) * 4.55, 0.8);
  }
  cyl(tower, 6.25, 6.0, 0.28, 40, 0, 53.15, 0, M.stone, { cast: true });
  torus(tower, 6.22, 0.1, 4, 72, 0, 53.35, 0, M.gold, { rx: Math.PI / 2 });
  // crown balcony rail
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * TAU;
    const p = pAt(a, 6.05);
    cyl(tower, 0.04, 0.05, 0.82, 5, p.x, 53.75, p.z, M.gold);
    if (i % 2 === 0) bulbField.add(p.x, 54.2, p.z, 0.75);
  }
  torus(tower, 6.05, 0.03, 4, 64, 0, 54.2, 0, M.gold, { rx: Math.PI / 2 });

  // star dial on crown
  const dialTex = makeTowerSignTexture();
  const dial = addMesh(tower, new THREE.CircleGeometry(2.1, 40), new THREE.MeshBasicMaterial({
    map: dialTex, transparent: true, depthWrite: false, toneMapped: false,
  }), 0, 50.2, 4.55);
  dial.renderOrder = 3;

  // lantern cupola
  cyl(tower, 3.25, 3.5, 0.4, 16, 0, 53.55, 0, M.goldDeep);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const p = pAt(a, 1.75);
    cyl(tower, 0.08, 0.1, 2.4, 6, p.x, 60.5, p.z, M.gold);
  }
  cyl(tower, 1.65, 1.65, 2.2, 16, 0, 60.5, 0, M.glassGlow, { open: true });
  torus(tower, 1.74, 0.06, 4, 32, 0, 59.6, 0, M.gold, { rx: Math.PI / 2 });
  torus(tower, 1.74, 0.06, 4, 32, 0, 61.4, 0, M.gold, { rx: Math.PI / 2 });
  cyl(tower, 2.85, 2.4, 1.1, 16, 0, 62.9, 0, M.goldDeep);
  cyl(tower, 2.45, 2.85, 2.5, 16, 0, 64.6, 0, M.wine, { cast: true });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const p = pAt(a, 2.73);
    cylinderBetween(tower, new THREE.Vector3(p.x, 65.8, p.z), new THREE.Vector3(0, 68.0, 0), 0.035, M.gold, 4);
  }
  sphere(tower, 1.05, 14, 0, 66.3, 0, M.gold, { sy: 0.72 });
  sphere(tower, 0.55, 12, 0, 67.4, 0, M.goldLight, { sy: 0.8 });
  const topStar = new THREE.Mesh(new THREE.OctahedronGeometry(0.6, 0), M.goldLight);
  topStar.position.set(0, 68.45, 0);
  tower.add(topStar);
  cyl(tower, 0.06, 0.06, 3.4, 6, 0, 70.6, 0, M.gold);
  const topFlag = new WavingFlag(tower, { width: 2.9, height: 1.15, y: 72.2, material: M.flagWine, phase: 0.7 });
  flags.push(topFlag);
  topFlag.mesh.position.set(0, 0, 0);
  topFlag.group.position.set(0, 71.5, 0);
  topFlag.mesh.position.y = 0.55;

  /* canopy and radial arms ----------------------------------------- */
  const roof = new THREE.Group();
  tower.add(roof);
  const roofSegments = 16;
  const roofMats = [M.roofWine, M.roofCream, M.roofCream];
  for (let i = 0; i < roofSegments; i++) {
    const a = (i / roofSegments) * TAU;
    const theta = TAU / roofSegments;
    const panelMat = i % 8 === 2 ? M.roofTeal : roofMats[i % 3];
    const seg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.26, 16.55, 7.2, 2, 1, true, a, theta),
      panelMat,
    );
    seg.position.y = 58.55;
    seg.castShadow = true;
    roof.add(seg);
    const pa = pAt(a, 16.55);
    cylinderBetween(roof, new THREE.Vector3(0.3, 62.15, 0), new THREE.Vector3(pa.x, 54.95, pa.z), 0.09, M.gold, 5);
  }
  // canopy edge rail and bulbs
  torus(roof, 16.55, 0.13, 4, 96, 0, 54.95, 0, M.gold, { rx: Math.PI / 2 });
  torus(roof, 16.18, 0.06, 4, 96, 0, 55.02, 0, M.goldDeep, { rx: Math.PI / 2 });
  for (let i = 0; i < 48; i++) {
    const a = (i / 48) * TAU;
    const p = pAt(a, 16.62);
    bulbField.add(p.x, 55.04, p.z, 1.02);
  }
  // a warm, visible underside for the great canopy
  torus(roof, 14.55, 0.09, 4, 96, 0, 54.72, 0, M.warmGlow, { rx: Math.PI / 2 });
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * TAU;
    const p = pAt(a, 14.55);
    bulbField.add(p.x, 54.64, p.z, 0.78);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const p = pAt(a, 11.2);
    cyl(roof, 0.03, 0.04, 1.7, 5, p.x, 53.95, p.z, M.gold);
    sphere(roof, 0.24, 9, p.x, 53.05, p.z, M.warmGlow);
    torus(roof, 0.31, 0.035, 4, 16, p.x, 53.05, p.z, M.gold, { rx: Math.PI / 2 });
    bulbField.add(p.x, 53.02, p.z, 1.15);
  }
  // scalloped fabric valance, alternating wine / cream / teal
  const valanceTex = makeCanvasTexture(256, 160, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(w, h * 0.32);
    ctx.quadraticCurveTo(w * 0.74, h * 0.96, w * 0.5, h * 0.55);
    ctx.quadraticCurveTo(w * 0.26, h * 0.96, 0, h * 0.32);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,.96)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(222,184,109,.98)';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,245,215,.36)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(5, 7);
    ctx.lineTo(w - 5, 7);
    ctx.stroke();
  });
  const valanceMats = [
    new THREE.MeshStandardMaterial({ map: valanceTex, color: 0x8d2f3b, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide, roughness: 0.82 }),
    new THREE.MeshStandardMaterial({ map: valanceTex, color: 0xf2e2c4, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide, roughness: 0.82 }),
    new THREE.MeshStandardMaterial({ map: valanceTex, color: 0x1f5b60, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide, roughness: 0.82 }),
  ];
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU;
    const p = pAt(a, 16.56);
    const v = addMesh(roof, new THREE.PlaneGeometry(2.15, 1.5), valanceMats[i % 3], p.x, 54.16, p.z, { ry: a });
    v.renderOrder = 2;
    sphere(roof, 0.08, 5, Math.sin(a) * 16.58, 53.38, Math.cos(a) * 16.58, M.goldLight);
  }
  // warm glow tucked under the canopy, above the crown
  glowSprite(tower, 0xffcc86, 17, 0, 53.2, 0, 0.2);
  // arms
  const armTips = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const inner = pAt(a, 4.9);
    const outer = pAt(a, 15.82);
    cylinderBetween(tower, new THREE.Vector3(inner.x, 54.72, inner.z), new THREE.Vector3(outer.x, 54.72, outer.z), 0.12, M.gold, 6);
    cylinderBetween(tower, new THREE.Vector3(inner.x, 53.86, inner.z), new THREE.Vector3(outer.x, 54.46, outer.z), 0.055, M.goldDeep, 5);
    const mid = pAt(a, 10.5);
    cylinderBetween(tower, new THREE.Vector3(mid.x, 54.72, mid.z), new THREE.Vector3(mid.x, 53.9, mid.z), 0.04, M.gold, 4);
    for (let k = 1; k < 5; k++) {
      const p = pAt(a, 5.3 + k * 2.2);
      bulbField.add(p.x, 54.79, p.z, 0.7);
      if (k % 2 === 0) {
        const drop = pAt(a, 5.3 + k * 2.2);
        sphere(tower, 0.13, 6, drop.x, 53.55, drop.z, M.warmGlow);
      }
    }
    // winch ring at the tip
    const tip = pAt(a, RIDE.armRadius);
    torus(tower, 0.65, 0.08, 4, 20, tip.x, 54.6, tip.z, M.gold, { rx: Math.PI / 2 });
    cyl(tower, 0.32, 0.32, 0.24, 10, tip.x, 54.46, tip.z, M.goldDeep, { rx: 0 });
    sphere(tower, 0.24, 8, tip.x, 54.28, tip.z, M.warmGlow);
    bulbField.add(tip.x, 54.28, tip.z, 1.3);
    lampSprites.push(glowSprite(tower, 0xffc77f, 2.6, tip.x, 54.28, tip.z, 0.4));
    armTips.push(new THREE.Vector3(tip.x, 54.6, tip.z));
  }
  // eight flags on the crown rim
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const p = pAt(a, 16.1);
    const f = new WavingFlag(tower, {
      width: 1.25, height: 0.55, x: p.x, y: 55.55, z: p.z,
      material: i % 2 ? M.flagTeal : M.flagWine, phase: i * 0.77, pole: 1.6,
    });
    f.group.rotation.y = a;
    flags.push(f);
  }

  // roof underside ribs
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const p = pAt(a, 9.5);
    cylinderBetween(tower, new THREE.Vector3(0.4, 60.45, 0), new THREE.Vector3(p.x, 57.1, p.z), 0.028, M.goldDeep, 4);
  }

  bulbField.finalize();

  /* balloons ------------------------------------------------------- */
  const balloonRoot = new THREE.Group();
  root.add(balloonRoot);
  const balloons = [];
  const pickObjects = [];
  const accentTex = new Map();

  function createBalloon(index) {
    const data = BALLOON_DATA[index];
    const accent = data.accent;
    if (!accentTex.has(accent)) {
      const medallion = makeMedallionTexture(accent);
      accentTex.set(accent, {
        envelope: makeEnvelopeTexture(accent),
        medallion,
        medallionMat: new THREE.MeshStandardMaterial({ map: medallion, transparent: true, roughness: 0.48, metalness: 0.32, side: THREE.DoubleSide }),
      });
    }
    const texs = accentTex.get(accent);
    const plateTex = makeNumberPlate(index, accent);
    const angle = (index / 8) * TAU + Math.PI / 8;
    const rootGroup = new THREE.Group();
    rootGroup.position.set(Math.sin(angle) * RIDE.ringRadius, 0, Math.cos(angle) * RIDE.ringRadius);
    rootGroup.rotation.y = angle;
    balloonRoot.add(rootGroup);

    const lift = new THREE.Group();
    lift.position.y = RIDE.minAlt;
    rootGroup.add(lift);

    // envelope
    const envGroup = new THREE.Group();
    envGroup.position.y = 10.78;
    lift.add(envGroup);
    const profile = [
      [0.72, -5.02], [1.32, -4.72], [2.45, -3.98], [3.62, -2.86], [4.32, -1.54],
      [4.67, -0.2], [4.72, 1.05], [4.48, 2.4], [3.95, 3.47], [3.0, 4.42],
      [1.85, 5.1], [0.72, 5.42], [0.18, 5.48],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    const envMat = new THREE.MeshPhysicalMaterial({
      map: texs.envelope,
      roughness: 0.52,
      metalness: 0.02,
      clearcoat: 0.22,
      clearcoatRoughness: 0.54,
      side: THREE.DoubleSide,
    });
    const envelope = new THREE.Mesh(new THREE.LatheGeometry(profile, isMobile ? 40 : 64), envMat);
    envelope.castShadow = true;
    envGroup.add(envelope);
    // crown cap and neck
    sphere(envGroup, 0.42, 10, 0, 5.48, 0, M.gold);
    cyl(envGroup, 0.26, 0.34, 0.25, 10, 0, 5.72, 0, M.goldLight);
    cyl(envGroup, 0.72, 0.96, 0.42, 16, 0, -5.18, 0, M.goldDeep, { open: true });
    torus(envGroup, 0.92, 0.055, 4, 24, 0, -5.33, 0, M.gold, { rx: Math.PI / 2 });
    torus(envGroup, 4.71, 0.065, 4, 64, 0, 1.05, 0, M.gold, { rx: Math.PI / 2 });
    torus(envGroup, 3.62, 0.045, 4, 48, 0, -2.84, 0, M.goldDeep, { rx: Math.PI / 2 });
    // medallions
    const medallionGeo = new THREE.CircleGeometry(1.32, 32);
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * TAU;
      const r = 4.86;
      const x = Math.sin(a) * r;
      const z = Math.cos(a) * r;
      const med = addMesh(envGroup, medallionGeo, texs.medallionMat, x, 0.85, z, { ry: a });
      med.renderOrder = 2;
      torus(envGroup, 1.36, 0.05, 4, 28, x, 0.85, z, M.gold, { ry: a });
      const star = addMesh(envGroup, medallionStarGeo, M.starGold, x * 1.012, 0.85, z * 1.012, { ry: a });
      star.scale.setScalar(0.62);
      star.renderOrder = 3;
    }
    // gold scroll tassels around the lower skirt
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * TAU;
      const p = new THREE.Vector3(Math.sin(a) * 3.55, -2.88, Math.cos(a) * 3.55);
      sphere(envGroup, 0.055, 5, p.x, p.y, p.z, M.goldLight);
      sphere(envGroup, 0.04, 4, p.x, p.y - 0.2, p.z, M.gold);
    }

    // basket
    const basket = new THREE.Group();
    lift.add(basket);
    const basketBody = new THREE.Mesh(new THREE.CylinderGeometry(1.59, 1.36, 1.45, 20, 1, true), M.wicker);
    basketBody.position.y = 0.82;
    basketBody.castShadow = true;
    basket.add(basketBody);
    const floor = cyl(basket, 1.38, 1.38, 0.12, 20, 0, 0.1, 0, M.wicker, {});
    floor.receiveShadow = true;
    torus(basket, 1.56, 0.075, 5, 32, 0, 1.5, 0, M.gold, { rx: Math.PI / 2 });
    torus(basket, 1.43, 0.045, 4, 32, 0, 0.18, 0, M.goldDeep, { rx: Math.PI / 2 });
    // wine padded rim
    torus(basket, 1.54, 0.085, 5, 32, 0, 1.58, 0, M.wine, { rx: Math.PI / 2 });
    torus(basket, 1.59, 0.025, 4, 32, 0, 1.61, 0, M.goldLight, { rx: Math.PI / 2 });
    // basket ribs
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * TAU;
      const x = Math.sin(a) * 1.53;
      const z = Math.cos(a) * 1.53;
      box(basket, 0.075, 1.4, 0.06, x, 0.82, z, M.goldDeep, { ry: a });
    }
    // interior bench
    box(basket, 2.15, 0.24, 0.56, 0, 0.55, -0.72, M.wineDeep);
    box(basket, 2.3, 0.12, 0.66, 0, 0.7, -0.72, M.wineLight);
    for (let k = 0; k < 4; k++) {
      sphere(basket, 0.055, 5, -0.75 + k * 0.5, 0.78, -0.72, M.goldLight);
    }
    // brass console at the front
    const console = new THREE.Group();
    console.position.set(0, 0.9, 1.04);
    console.rotation.x = -0.34;
    basket.add(console);
    box(console, 1.5, 0.62, 0.22, 0, 0, 0, M.goldDeep);
    box(console, 1.38, 0.48, 0.16, 0, 0, 0.06, M.tealDeep);
    const dialGeo = new THREE.CircleGeometry(0.16, 18);
    for (const x of [-0.36, 0, 0.36]) {
      addMesh(console, dialGeo, M.glassGlow, x, 0.08, 0.155);
      torus(console, 0.18, 0.02, 3, 16, x, 0.08, 0.16, M.gold, {});
    }
    // handwheel on the side
    const wheel = torus(basket, 0.36, 0.035, 4, 20, 1.35, 1.0, 0.28, M.gold, { rz: Math.PI / 2 });
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * TAU;
      cylinderBetween(basket, new THREE.Vector3(0.98, 1.0, 0.28), new THREE.Vector3(0.98 + Math.cos(a) * 0.36, 1.0 + Math.sin(a) * 0.36, 0.28), 0.014, M.gold, 4);
    }
    // four posts and lanterns
    const lanternOrbs = [];
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * TAU + Math.PI / 4;
      const x = Math.sin(a) * 1.56;
      const z = Math.cos(a) * 1.56;
      cyl(basket, 0.045, 0.055, 0.8, 5, x, 1.95, z, M.gold);
      lanternOrbs.push(sphere(basket, 0.12, 7, x, 2.4, z, M.warmGlow));
      glowSprite(basket, 0xffc17a, 0.7, x, 2.4, z, 0.45);
    }
    // number plate
    const plate = addMesh(basket, new THREE.PlaneGeometry(1.35, 0.58), new THREE.MeshBasicMaterial({
      map: plateTex, transparent: true, depthWrite: false, toneMapped: false,
    }), 0, 0.78, 1.605);
    plate.renderOrder = 3;
    // burner
    cyl(basket, 0.26, 0.32, 0.14, 12, 0, 1.62, 0, M.goldDeep);
    cyl(basket, 0.1, 0.14, 0.3, 8, 0, 1.78, 0, M.gold);
    const flameMaterial = M.flame.clone();
    const flame = addMesh(basket, new THREE.ConeGeometry(0.12, 0.7, 8, 1, true), flameMaterial, 0, 1.98, 0);
    flame.renderOrder = 5;
    const flameGlow = glowSprite(basket, 0xffa752, 0.65, 0, 1.92, 0, 0.28);
    // suspension cords
    const cordGeo = new THREE.CylinderGeometry(0.012, 0.012, 1, 4);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * TAU + Math.PI / 8;
      const topR = 0.7;
      const from = new THREE.Vector3(Math.sin(a) * 1.56, 1.46, Math.cos(a) * 1.56);
      const to = new THREE.Vector3(Math.sin(a) * topR, 5.56, Math.cos(a) * topR);
      const mid = from.clone().add(to).multiplyScalar(0.5);
      const dir = to.clone().sub(from);
      const cord = new THREE.Mesh(cordGeo, M.ropeCylinder);
      cord.position.copy(mid);
      cord.quaternion.setFromUnitVectors(UP, dir.clone().normalize());
      cord.scale.y = dir.length();
      lift.add(cord);
    }

    // top flag
    const flag = new WavingFlag(lift, {
      width: 0.8, height: 0.34, x: 0, y: 15.9, z: 0,
      material: index % 2 ? M.flagTeal : M.flagWine, phase: index * 0.9, pole: 0.45,
    });
    flags.push(flag);

    // selection halo
    const halo = new THREE.Group();
    halo.visible = false;
    lift.add(halo);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffd991, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending,
      depthWrite: false, toneMapped: false,
    });
    torus(halo, 2.24, 0.022, 3, 48, 0, 0.16, 0, haloMat, { rx: Math.PI / 2 });
    torus(halo, 2.6, 0.015, 3, 48, 0, 1.26, 0, haloMat, { rx: Math.PI / 2 });
    const marker = new THREE.Mesh(new THREE.OctahedronGeometry(0.15, 0), new THREE.MeshBasicMaterial({ color: 0xffe4a8, toneMapped: false }));
    marker.position.y = 2.9;
    halo.add(marker);

    // a tall beacon above the envelope, so the chosen cloud reads at a distance
    const beacon = new THREE.Group();
    beacon.visible = false;
    beacon.position.y = 16.55;
    lift.add(beacon);
    const beaconDiamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.26, 0), new THREE.MeshBasicMaterial({ color: 0xffe3a6, toneMapped: false }));
    beacon.add(beaconDiamond);
    glowSprite(beacon, 0xffd18a, 2.2, 0, 0, 0, 0.45);

    // selection and picking
    rootGroup.userData.balloonIndex = index;
    lift.userData.balloonIndex = index;
    basket.userData.balloonIndex = index;
    pickObjects.push(rootGroup);

    return {
      index, data, angle,
      root: rootGroup, lift, envelopeGroup: envGroup, envelope,
      basket, flag, flame, flameGlow, halo, marker, beacon, lanternOrbs,
      medallionMat: texs.medallionMat,
      cableMesh: null,
      phase: (index / 8) * 42 + index * 1.73,
      cycle: 42 + (index % 4) * 2.4,
      high: 31.0 + (index % 4) * 2.1,
      mid: 18.0 + (index % 3) * 2.4,
      altitude: RIDE.minAlt,
      selected: false,
      hover: false,
      swayPhase: index * 1.91,
    };
  }

  for (let i = 0; i < 8; i++) {
    const b = createBalloon(i);
    b.altitude = altitudeForBalloon(b, b.phase);
    b.lift.position.y = b.altitude;
    // cable from arm tip to envelope crown
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1, 4), M.cable);
    cable.matrixAutoUpdate = false;
    tower.add(cable);
    b.cableMesh = cable;
    balloons.push(b);
  }

  function altitudeForBalloon(b, phaseTime) {
    const cycle = b.cycle;
    const p = ((phaseTime % cycle) + cycle) % cycle / cycle;
    // low - wait - rise - high - hover - drop - hover - rise - long descent
    const keys = [
      [0.00, RIDE.minAlt],
      [0.095, RIDE.minAlt],
      [0.36, b.high],
      [0.43, b.high + 0.35],
      [0.56, b.mid],
      [0.62, b.mid],
      [0.70, b.high - 4.2],
      [0.76, b.high - 4.2],
      [0.96, RIDE.minAlt],
      [1.00, RIDE.minAlt],
    ];
    let i = 0;
    while (i < keys.length - 2 && p > keys[i + 1][0]) i++;
    const [t0, y0] = keys[i];
    const [t1, y1] = keys[i + 1];
    const u = clamp((p - t0) / (t1 - t0 || 1), 0, 1);
    const e = u * u * (3 - 2 * u);
    return y0 + (y1 - y0) * e;
  }

  function updateCables() {
    const topY = RIDE.armY;
    balloons.forEach((b) => {
      const tip = new THREE.Vector3(Math.sin(b.angle) * RIDE.armRadius, topY, Math.cos(b.angle) * RIDE.armRadius);
      const end = new THREE.Vector3(
        b.root.position.x,
        b.lift.position.y + RIDE.envelopeTop,
        b.root.position.z,
      );
      const mid = tip.clone().add(end).multiplyScalar(0.5);
      const dir = end.clone().sub(tip);
      const len = dir.length();
      b.cableMesh.position.copy(mid);
      b.cableMesh.quaternion.setFromUnitVectors(UP, dir.normalize());
      b.cableMesh.scale.set(1, len, 1);
      b.cableMesh.updateMatrix();
    });
  }

  /* player / ride state ------------------------------------------- */
  const player = {
    riding: false,
    index: 0,
    altitude: RIDE.minAlt,
    velocity: 0,
    auto: true,
    autoTime: 0,
    inputUp: false,
    inputDown: false,
    topAnnounced: false,
    bottomAnnounced: false,
  };
  let selected = 2;
  let hovered = -1;
  let elapsed = 0;
  let mood = 'dusk';
  let moodCfg = MOODS.dusk;

  function setSelected(index) {
    selected = clamp(index | 0, 0, 7);
    balloons.forEach((b, i) => {
      b.selected = i === selected;
      b.halo.visible = b.selected || b.hover;
      b.beacon.visible = b.selected;
      b.halo.scale.setScalar(1);
    });
    return selected;
  }

  function setHover(index) {
    hovered = index;
    balloons.forEach((b, i) => {
      b.hover = i === hovered;
      b.halo.visible = b.selected || b.hover;
      if (b.selected) b.halo.visible = true;
    });
  }

  function board(index) {
    player.riding = true;
    player.index = clamp(index | 0, 0, 7);
    player.altitude = RIDE.minAlt;
    player.velocity = 0;
    player.auto = true;
    player.autoTime = 0;
    player.inputUp = false;
    player.inputDown = false;
    player.topAnnounced = false;
    player.bottomAnnounced = false;
    const b = balloons[player.index];
    b.lift.position.y = player.altitude;
    b.phase = 0;
    b.halo.visible = false;
    b.beacon.visible = false;
    b.hiddenSprites = [];
    b.basket.traverse((o) => {
      if (o.isSprite) {
        b.hiddenSprites.push(o);
        o.visible = false;
      }
    });
    b.lanternOrbs.forEach((o) => { o.visible = false; });
    b.flame.visible = false;
    return b;
  }

  function leave() {
    if (!player.riding) return;
    const b = balloons[player.index];
    b.phase = 0;
    b.altitude = RIDE.minAlt;
    b.lift.position.y = RIDE.minAlt;
    b.halo.visible = b.selected;
    b.beacon.visible = b.selected;
    if (b.hiddenSprites) {
      b.hiddenSprites.forEach((s) => { s.visible = true; });
      b.hiddenSprites = null;
    }
    b.lanternOrbs.forEach((o) => { o.visible = true; });
    b.flame.visible = true;
    player.riding = false;
    player.velocity = 0;
  }

  function setManual(inputUp, inputDown) {
    player.inputUp = !!inputUp;
    player.inputDown = !!inputDown;
    if (player.riding && (inputUp || inputDown)) player.auto = false;
  }

  function setAuto(value) {
    player.auto = !!value;
    if (player.auto) {
      player.autoTime = 0;
      player.inputUp = false;
      player.inputDown = false;
    }
  }

  function autoTarget(time) {
    // 58 second loop, with a gentle drop in the middle
    const keys = [
      [0, RIDE.minAlt],
      [2.5, 9.0],
      [12.5, 28.0],
      [16.0, 30.0],
      [21.5, 37.8],
      [26.0, 37.8],
      [33.0, 22.0],
      [36.0, 23.5],
      [41.0, 31.0],
      [45.0, 30.0],
      [55.0, RIDE.minAlt],
      [58.0, RIDE.minAlt],
    ];
    const t = ((time % 58) + 58) % 58;
    let i = 0;
    while (i < keys.length - 2 && t > keys[i + 1][0]) i++;
    const [t0, y0] = keys[i];
    const [t1, y1] = keys[i + 1];
    const u = clamp((t - t0) / (t1 - t0 || 1), 0, 1);
    const e = u * u * (3 - 2 * u);
    return y0 + (y1 - y0) * e;
  }

  function updatePlayer(dt) {
    if (!player.riding) return;
    if (player.auto) {
      player.autoTime += dt;
      const target = autoTarget(player.autoTime);
      const desired = clamp((target - player.altitude) * 0.42, -5.2, 3.7);
      player.velocity = damp(player.velocity, desired, 1.6, dt);
    } else {
      let targetVel = -1.08;
      if (player.inputUp) targetVel = 4.0;
      if (player.inputDown) targetVel = -7.0;
      if (player.altitude <= RIDE.minAlt + 0.05 && targetVel < 0) targetVel = 0;
      if (player.altitude >= RIDE.maxAlt - 0.05 && targetVel > 0) targetVel = 0;
      player.velocity = damp(player.velocity, targetVel, player.inputUp || player.inputDown ? 0.95 : 1.2, dt);
    }
    player.altitude += player.velocity * dt;
    if (player.altitude < RIDE.minAlt) {
      player.altitude = RIDE.minAlt;
      player.velocity = Math.max(0, player.velocity);
    }
    if (player.altitude > RIDE.maxAlt) {
      player.altitude = RIDE.maxAlt;
      player.velocity = Math.min(0, player.velocity);
    }
    const b = balloons[player.index];
    b.altitude = player.altitude;
    b.lift.position.y = player.altitude;
  }

  function updateBalloons(dt) {
    balloons.forEach((b) => {
      if (player.riding && b.index === player.index) return;
      b.phase = (b.phase + dt) % b.cycle;
      b.altitude = altitudeForBalloon(b, b.phase);
      // barely perceptible breathing, so the whole pavilion feels alive
      b.lift.position.y = b.altitude;
      b.lift.rotation.z = Math.sin(elapsed * 0.44 + b.swayPhase) * 0.0045;
      b.lift.rotation.x = Math.cos(elapsed * 0.37 + b.swayPhase) * 0.0038;
    });
  }

  function updateSelection(dt) {
    balloons.forEach((b) => {
      if (!b.halo.visible) return;
      const targetScale = b.selected ? 1 : 0.86;
      b.halo.scale.setScalar(damp(b.halo.scale.x, targetScale, 7, dt));
      b.halo.rotation.y = elapsed * (b.selected ? 0.36 : 0.16);
      const mat = b.halo.children[0].material;
      if (mat) mat.opacity = (b.selected ? 0.52 : 0.2) + Math.sin(elapsed * 2.1 + b.index) * 0.1;
      b.marker.position.y = 2.9 + Math.sin(elapsed * 1.6 + b.index) * 0.12;
      b.marker.rotation.y = elapsed * 1.2;
      if (b.beacon.visible) {
        b.beacon.position.y = 16.55 + Math.sin(elapsed * 1.5 + b.index) * 0.1;
        b.beacon.rotation.y = elapsed * 1.4;
      }
    });
  }

  /* mood ----------------------------------------------------------- */
  function setMood(m) {
    if (!MOODS[m]) m = 'dusk';
    mood = m;
    moodCfg = MOODS[m];
    sky.setMood(moodCfg.sky);
    clouds.setMood(mood, moodCfg);
    dust.setMood(mood, moodCfg);
    skyLanterns.setMood(mood, moodCfg);
    hemi.color.setHex(moodCfg.hemiSky);
    hemi.groundColor.setHex(moodCfg.hemiGround);
    hemi.intensity = moodCfg.hemiIntensity;
    key.color.setHex(moodCfg.key);
    key.intensity = moodCfg.keyIntensity;
    key.position.set(...moodCfg.keyPos);
    rim.color.setHex(moodCfg.rim);
    rim.intensity = moodCfg.rimIntensity;
    ambient.color.setHex(moodCfg.ambient);
    ambient.intensity = moodCfg.ambientIntensity;
    baseGlow.intensity = moodCfg.baseGlow;
    crownGlow.intensity = moodCfg.crownGlow;
    balloonLight.intensity = mood === 'day' ? 4 : 16;
    facadeLights.forEach((light) => {
      light.intensity = mood === 'day' ? 5 : mood === 'night' ? 44 : 27;
    });
    deckGlow.intensity = mood === 'day' ? 6 : mood === 'night' ? 72 : 46;
    deckGlow.color.setHex(mood === 'day' ? 0xffe7c0 : 0xffb97a);
    towerWash.intensity = mood === 'day' ? 4 : mood === 'night' ? 48 : 34;
    towerWash.color.setHex(mood === 'day' ? 0xffe8ca : 0xffbb7f);
    facadeMat.emissiveIntensity = mood === 'day' ? 0.07 : mood === 'night' ? 0.34 : 0.24;
    towerMat.emissiveIntensity = mood === 'day' ? 0.05 : mood === 'night' ? 0.34 : 0.24;
    scene.environmentIntensity = moodCfg.env;
    scene.fog.color.setHex(moodCfg.fog);
    scene.fog.density = moodCfg.fogDensity;
    renderer.toneMappingExposure = moodCfg.exposure;
    if (bloom) bloom.strength = moodCfg.bloom;
    groundMat.color.setHex(mood === 'night' ? 0x8f8578 : mood === 'day' ? 0xf5e8d4 : 0xd2c3ae);
    baseGlow.color.setHex(mood === 'day' ? 0xffe4b5 : 0xffb576);
    crownGlow.color.setHex(mood === 'night' ? 0xffd49a : 0xffcf90);
    glowSpritesSet();
    bulbField.update(elapsed, moodCfg.bulb);
  }

  function glowSpritesSet() {
    lampSprites.forEach((s) => {
      s.material.opacity = mood === 'day' ? 0.06 : mood === 'night' ? 0.55 : 0.36;
    });
  }

  setMood('dusk');
  setSelected(selected);
  updateCables();

  /* public API ------------------------------------------------------ */
  return {
    root, balloons, pavilion, tower, ground, envTexture: envRT.texture,
    RIDE,
    setMood,
    get mood() { return mood; },
    get moodConfig() { return moodCfg; },
    setSelected,
    get selected() { return selected; },
    setHover,
    get hovered() { return hovered; },
    board,
    leave,
    setManual,
    setAuto,
    get auto() { return player.auto; },
    get riding() { return player.riding; },
    get playerAltitude() { return player.altitude; },
    get playerVelocity() { return player.velocity; },
    get playerIndex() { return player.index; },
    get mode() { return player.riding ? 'ride' : 'explore'; },
    get pickObjects() { return pickObjects; },
    getBalloonAltitudes() { return balloons.map((b) => b.altitude); },
    getBalloonData() { return BALLOON_DATA; },
    setPlayerAltitude(value) {
      player.altitude = clamp(value, RIDE.minAlt, RIDE.maxAlt);
      player.velocity = 0;
      const b = balloons[player.index];
      b.altitude = player.altitude;
      b.lift.position.y = player.altitude;
    },
    getRideView() {
      const b = balloons[player.index];
      b.root.updateWorldMatrix(true, true);
      const eye = new THREE.Vector3(0, 2.48, -0.26);
      b.lift.localToWorld(eye);
      return {
        position: eye,
        outwardYaw: b.angle + Math.PI,
        altitude: player.altitude,
        index: player.index,
      };
    },
    getChaseAnchor() {
      const b = balloons[player.index];
      return {
        x: b.root.position.x,
        z: b.root.position.z,
        y: b.altitude,
        angle: b.angle,
        index: player.index,
      };
    },
    setRiderDecorVisible(visible) {
      if (!player.riding) return;
      const b = balloons[player.index];
      if (b.hiddenSprites) b.hiddenSprites.forEach((s) => { s.visible = visible; });
      b.lanternOrbs.forEach((o) => { o.visible = visible; });
      b.flame.visible = visible;
    },
    getSelectedFocus(out = new THREE.Vector3()) {
      const b = balloons[selected];
      return out.set(b.root.position.x, b.altitude + 7.5, b.root.position.z);
    },
    getSelectionAnchor(out = new THREE.Vector3()) {
      const b = balloons[selected];
      return out.set(b.root.position.x, b.altitude + RIDE.envelopeTop + 0.65, b.root.position.z);
    },
    update(dt) {
      elapsed += dt;
      sky.update(elapsed);
      clouds.update(dt, elapsed);
      dust.update(dt, elapsed);
      skyLanterns.update(dt, elapsed);
      distantBalloons.update(dt, elapsed);
      updatePlayer(dt);
      updateBalloons(dt);
      updateSelection(dt);
      updateCables();
      bulbField.update(elapsed, moodCfg.bulb);
      flags.forEach((f) => f.update(elapsed));
      // flames breathe only when lifting, and faintly at rest
      balloons.forEach((b) => {
        if (player.riding && b.index === player.index) {
          const liftK = clamp(0.22 + Math.abs(player.velocity) * 0.16 + Math.sin(elapsed * 10.5) * 0.06, 0.08, 0.72);
          b.flame.material.opacity = liftK;
          b.flame.scale.set(1, 0.8 + liftK * 1.2, 1);
          b.flame.position.y = 1.92 + liftK * 0.16;
          b.flameGlow.material.opacity = liftK * 0.55;
        } else {
          const u = (b.phase / b.cycle);
          const lifting = u > 0.1 && u < 0.36 || u > 0.62 && u < 0.7;
          const k = lifting ? 0.26 + Math.sin(elapsed * 9 + b.index) * 0.06 : 0.06;
          b.flame.material.opacity = k;
          b.flame.scale.set(1, 0.7 + k * 1.1, 1);
          b.flameGlow.material.opacity = k * 0.45;
        }
        b.flag.update(elapsed);
        const breathe = 1 + Math.sin(elapsed * 0.7 + b.index) * 0.0035;
        b.envelope.scale.set(breathe, 1, breathe);
      });
      topStar.rotation.y = elapsed * 0.4;
      dial.material.opacity = 0.8 + Math.sin(elapsed * 1.2) * 0.08;
      if (player.riding) {
        const b = balloons[player.index];
        balloonLight.position.set(b.root.position.x, b.altitude + 0.45, b.root.position.z);
        balloonLight.intensity = mood === 'day' ? 1.5 : 5;
      } else {
        const b = balloons[player.riding ? player.index : selected];
        balloonLight.position.set(b.root.position.x, b.altitude + 2.0, b.root.position.z);
        balloonLight.intensity = mood === 'day' ? 2 : 8;
      }
    },
  };
}
