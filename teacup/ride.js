import * as THREE from 'three';

/* ================================================================
   瓷梦茶会 —— 3D ride construction
   Everything in this file is generated at runtime: porcelain glazes,
   gilded filigree, velvet swags, the eight cups and the giant teapot.
   ================================================================ */

const TAU = Math.PI * 2;
const V2 = THREE.Vector2;
const V3 = THREE.Vector3;

const PALETTE = {
  cream: 0xf2e3c9,
  creamDeep: 0xe3ceac,
  ivory: 0xfaf1df,
  teal: 0x145759,
  tealDeep: 0x0b3c40,
  tealDark: 0x082f34,
  wine: 0x571322,
  wineDeep: 0x370b17,
  rose: 0xb64a58,
  gold: 0xbd8d42,
  goldLight: 0xe8c780,
  goldDark: 0x79521f,
  bronze: 0x8c642f,
};

const CUP_NAMES = [
  '釉里红 · 折枝牡丹',
  '豆青 · 缠枝莲',
  '霁红 · 石榴花',
  '描金 · 玉兰',
  '青花 · 莲池',
  '粉彩 · 海棠',
  '金地 · 山茶',
  '墨彩 · 兰草',
];

const CUP_SHORT = ['釉里红', '豆青', '霁红', '描金', '青花', '粉彩', '金地', '墨彩'];

const CUP_FLOWERS = [
  { petal: '#9c3140', light: '#c96369', center: '#d8a94e', leaf: '#526b3e' },
  { petal: '#397c78', light: '#75a7a0', center: '#d5ae61', leaf: '#426253' },
  { petal: '#a63c38', light: '#d17964', center: '#e0b35d', leaf: '#5f713d' },
  { petal: '#b1863e', light: '#dfc082', center: '#7d4f25', leaf: '#6c7445' },
  { petal: '#3c6482', light: '#7e9bb2', center: '#d6b268', leaf: '#3f5c55' },
  { petal: '#c06b78', light: '#e7a4ac', center: '#d8b163', leaf: '#5c6f4a' },
  { petal: '#a1782f', light: '#d8b66a', center: '#713f22', leaf: '#6d6f3d' },
  { petal: '#414e56', light: '#7f8b88', center: '#c8a566', leaf: '#53645a' },
];

/* ---------------------------------------------------------------- */
/* canvas helpers                                                    */
/* ---------------------------------------------------------------- */

function canvasTexture(w, h, paint, { repeatX = 1, repeatY = 1, anisotropy = 8 } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  paint(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = anisotropy;
  tex.needsUpdate = true;
  return tex;
}

function softGlowTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,244,212,1)');
    g.addColorStop(0.18, 'rgba(255,225,164,.85)');
    g.addColorStop(0.5, 'rgba(255,190,103,.25)');
    g.addColorStop(1, 'rgba(255,170,80,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function petalTexture() {
  return canvasTexture(96, 96, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createLinearGradient(w * 0.5, 4, w * 0.5, h - 4);
    g.addColorStop(0, 'rgba(255,238,226,.94)');
    g.addColorStop(0.55, 'rgba(241,186,176,.9)');
    g.addColorStop(1, 'rgba(201,113,116,.65)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.06);
    ctx.bezierCurveTo(w * 0.94, h * 0.3, w * 0.84, h * 0.8, w * 0.5, h * 0.95);
    ctx.bezierCurveTo(w * 0.16, h * 0.8, w * 0.06, h * 0.3, w * 0.5, h * 0.06);
    ctx.fill();
    ctx.strokeStyle = 'rgba(161,89,92,.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.15);
    ctx.quadraticCurveTo(w * 0.52, h * 0.5, w * 0.5, h * 0.88);
    ctx.stroke();
  });
}

function drawLeaf(ctx, x, y, s, angle, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  const g = ctx.createLinearGradient(0, 0, s, 0);
  g.addColorStop(0, color);
  g.addColorStop(1, 'rgba(77,95,59,.45)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(s * 0.35, -s * 0.3, s * 0.85, -s * 0.12, s, 0);
  ctx.bezierCurveTo(s * 0.8, s * 0.23, s * 0.3, s * 0.22, 0, 0);
  ctx.fill();
  ctx.strokeStyle = 'rgba(246,228,184,.3)';
  ctx.lineWidth = Math.max(1, s * 0.018);
  ctx.beginPath();
  ctx.moveTo(2, 0);
  ctx.lineTo(s * 0.92, 0);
  ctx.stroke();
  ctx.restore();
}

function drawFlower(ctx, x, y, s, flower, petals = 8, rotation = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  // leaves behind
  drawLeaf(ctx, 0, 0, s * 0.95, -0.4, flower.leaf);
  drawLeaf(ctx, 0, 0, s * 0.85, 2.55, flower.leaf);
  drawLeaf(ctx, 0, 0, s * 0.7, 0.8, flower.leaf);
  for (let i = 0; i < petals; i++) {
    const a = (i / petals) * TAU;
    ctx.save();
    ctx.rotate(a);
    const g = ctx.createRadialGradient(s * 0.26, 0, 0, s * 0.26, 0, s * 0.5);
    g.addColorStop(0, flower.light);
    g.addColorStop(0.7, flower.petal);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(s * 0.16, -s * 0.22, s * 0.56, -s * 0.2, s * 0.5, 0);
    ctx.bezierCurveTo(s * 0.5, s * 0.15, s * 0.18, s * 0.22, 0, 0);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,242,213,.28)';
    ctx.lineWidth = Math.max(1, s * 0.012);
    ctx.stroke();
    ctx.restore();
  }
  // inner petals
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU + 0.4;
    ctx.save();
    ctx.rotate(a);
    ctx.fillStyle = flower.light;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.ellipse(s * 0.17, 0, s * 0.2, s * 0.1, 0, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
  ctx.globalAlpha = 1;
  const cg = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 0.18);
  cg.addColorStop(0, '#fff1be');
  cg.addColorStop(0.45, flower.center);
  cg.addColorStop(1, 'rgba(89,54,21,.8)');
  ctx.fillStyle = cg;
  ctx.beginPath();
  ctx.arc(0, 0, s * 0.12, 0, TAU);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,239,187,.8)';
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU;
    const r = s * (0.09 + (i % 3) * 0.012);
    ctx.beginPath();
    ctx.arc(Math.cos(a) * r, Math.sin(a) * r, s * 0.012, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}

function drawBud(ctx, x, y, s, flower, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.strokeStyle = flower.leaf;
  ctx.lineWidth = Math.max(1, s * 0.04);
  ctx.beginPath();
  ctx.moveTo(0, s * 0.4);
  ctx.quadraticCurveTo(-s * 0.05, 0, 0, -s * 0.4);
  ctx.stroke();
  ctx.fillStyle = flower.petal;
  ctx.beginPath();
  ctx.ellipse(0, -s * 0.52, s * 0.2, s * 0.3, 0, 0, TAU);
  ctx.fill();
  ctx.fillStyle = flower.light;
  ctx.beginPath();
  ctx.ellipse(-s * 0.06, -s * 0.55, s * 0.09, s * 0.2, -0.35, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function drawGoldScroll(ctx, x, y, s, color = 'rgba(178,132,62,.65)') {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1, s * 0.022);
  ctx.beginPath();
  ctx.moveTo(x - s * 0.5, y);
  ctx.bezierCurveTo(x - s * 0.25, y - s * 0.28, x + s * 0.12, y - s * 0.28, x + s * 0.2, y);
  ctx.bezierCurveTo(x + s * 0.3, y + s * 0.3, x - s * 0.1, y + s * 0.28, x - s * 0.06, y + s * 0.06);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + s * 0.2, y, s * 0.12, 0, TAU);
  ctx.stroke();
  ctx.restore();
}

function drawCrackle(ctx, w, h, count = 36) {
  ctx.save();
  ctx.strokeStyle = 'rgba(130,96,53,.07)';
  ctx.lineWidth = 0.7;
  for (let i = 0; i < count; i++) {
    let x = Math.random() * w;
    let y = Math.random() * h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let j = 0; j < 4; j++) {
      x += (Math.random() - 0.5) * 30;
      y += (Math.random() - 0.5) * 30;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.restore();
}

/* ---------------------------------------------------------------- */
/* porcelain textures                                                */
/* ---------------------------------------------------------------- */

function makeCupTexture(index) {
  const flower = CUP_FLOWERS[index % CUP_FLOWERS.length];
  const variant = index % 4;
  return canvasTexture(1024, 512, (ctx, w, h) => {
    // warm porcelain ground
    const base = ctx.createLinearGradient(0, 0, 0, h);
    base.addColorStop(0, '#f8efd9');
    base.addColorStop(0.45, '#f2e4c9');
    base.addColorStop(1, '#ead7b6');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    drawCrackle(ctx, w, h, 28);

    // soft celadon mist at the lower edge
    const shade = ctx.createLinearGradient(0, h * 0.75, 0, h);
    shade.addColorStop(0, 'rgba(71,129,121,0)');
    shade.addColorStop(1, variant === 1 || variant === 4 ? 'rgba(58,112,108,.22)' : 'rgba(128,96,54,.12)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, h * 0.72, w, h * 0.28);

    // gold bands
    const band = (y, height, alpha = 0.85) => {
      const g = ctx.createLinearGradient(0, y, 0, y + height);
      g.addColorStop(0, `rgba(237,205,143,${alpha})`);
      g.addColorStop(0.4, `rgba(172,124,54,${alpha})`);
      g.addColorStop(0.7, `rgba(245,216,158,${alpha})`);
      g.addColorStop(1, `rgba(140,97,39,${alpha})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, y, w, height);
    };
    band(0, 16, 0.75);
    band(36, 4, 0.65);
    band(h - 23, 4, 0.7);
    band(h - 15, 15, 0.85);

    // fine gold diaper border
    ctx.save();
    ctx.strokeStyle = 'rgba(169,124,55,.24)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 44);
      ctx.quadraticCurveTo(x + 16, 54, x + 32, 44);
      ctx.stroke();
    }
    ctx.restore();

    // four floral sprays
    const positions = [
      [w * 0.13, h * 0.51, 100, -0.15],
      [w * 0.38, h * 0.47, 82, 0.24],
      [w * 0.63, h * 0.55, 104, -0.08],
      [w * 0.87, h * 0.46, 76, 0.3],
    ];
    positions.forEach(([x, y, s, rot], i) => {
      if (i % 2 === 0) drawBud(ctx, x + s * 0.7, y - s * 0.45, s * 0.55, flower, 0.8);
      drawFlower(ctx, x, y, s, flower, 8, rot);
      drawGoldScroll(ctx, x + s * 0.52, y + s * 0.43, s * 0.72);
    });

    // variant-specific medallion on one face
    const mx = w * (variant === 1 || variant === 3 ? 0.5 : 0.25);
    const my = h * (variant === 2 ? 0.35 : 0.55);
    ctx.save();
    ctx.translate(mx, my);
    ctx.fillStyle = 'rgba(25,87,89,.88)';
    ctx.beginPath();
    ctx.arc(0, 0, 47, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(233,201,139,.82)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 47, 0, TAU);
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, 39, 0, TAU);
    ctx.stroke();
    ctx.fillStyle = 'rgba(238,208,148,.92)';
    ctx.beginPath();
    ctx.moveTo(0, -30);
    ctx.bezierCurveTo(10, -10, 26, -4, 26, 9);
    ctx.bezierCurveTo(26, 24, 12, 31, 0, 21);
    ctx.bezierCurveTo(-12, 31, -26, 24, -26, 9);
    ctx.bezierCurveTo(-26, -4, -10, -10, 0, -30);
    ctx.fill();
    ctx.restore();

    // tiny gold dots
    ctx.fillStyle = 'rgba(191,143,72,.55)';
    for (let x = 18; x < w; x += 52) {
      ctx.beginPath();
      ctx.arc(x, h * 0.11, 2, 0, TAU);
      ctx.fill();
    }
  });
}

function makeTeapotTexture() {
  return canvasTexture(1024, 512, (ctx, w, h) => {
    const base = ctx.createLinearGradient(0, 0, 0, h);
    base.addColorStop(0, '#f9f0dc');
    base.addColorStop(0.55, '#f2e4c8');
    base.addColorStop(1, '#e8d4b0');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    drawCrackle(ctx, w, h, 36);

    const band = (y, hh, alpha = 0.9) => {
      const g = ctx.createLinearGradient(0, y, 0, y + hh);
      g.addColorStop(0, `rgba(242,211,151,${alpha})`);
      g.addColorStop(0.45, `rgba(166,117,47,${alpha})`);
      g.addColorStop(0.72, `rgba(246,221,167,${alpha})`);
      g.addColorStop(1, `rgba(117,79,30,${alpha})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, y, w, hh);
    };
    band(0, 14, 0.75);
    band(29, 4, 0.55);
    band(h - 18, 4, 0.62);
    band(h - 12, 12, 0.82);

    // central blue-ish lotus star medallion
    ctx.save();
    ctx.translate(w * 0.5, h * 0.49);
    ctx.fillStyle = 'rgba(24,83,87,.9)';
    ctx.beginPath();
    ctx.arc(0, 0, 118, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(236,201,134,.92)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, 118, 0, TAU);
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, 103, 0, TAU);
    ctx.stroke();
    ctx.fillStyle = 'rgba(242,214,155,.92)';
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.rotate((i / 12) * TAU);
      ctx.beginPath();
      ctx.moveTo(0, -16);
      ctx.quadraticCurveTo(14, -56, 0, -92);
      ctx.quadraticCurveTo(-14, -56, 0, -16);
      ctx.fill();
      ctx.restore();
    }
    ctx.fillStyle = 'rgba(92,37,42,.9)';
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(238,205,139,.9)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // floral sprays either side
    drawFlower(ctx, w * 0.17, h * 0.52, 112, CUP_FLOWERS[0], 8, 0.28);
    drawFlower(ctx, w * 0.83, h * 0.48, 108, CUP_FLOWERS[0], 8, -0.3);
    drawBud(ctx, w * 0.06, h * 0.7, 46, CUP_FLOWERS[0], 0.4);
    drawBud(ctx, w * 0.94, h * 0.26, 40, CUP_FLOWERS[0], 2.7);
    drawGoldScroll(ctx, w * 0.25, h * 0.77, 92);
    drawGoldScroll(ctx, w * 0.75, h * 0.24, 82);

    // gilded petal ring around the medallion
    ctx.strokeStyle = 'rgba(189,143,72,.64)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * TAU;
      const r1 = 132, r2 = i % 2 ? 145 : 152;
      ctx.beginPath();
      ctx.moveTo(w * 0.5 + Math.cos(a) * r1, h * 0.49 + Math.sin(a) * r1);
      ctx.lineTo(w * 0.5 + Math.cos(a) * r2, h * 0.49 + Math.sin(a) * r2);
      ctx.stroke();
    }
  });
}

function makeSaucerTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w / 2);
    g.addColorStop(0, '#f4e6ca');
    g.addColorStop(0.62, '#f0dfbf');
    g.addColorStop(0.88, '#e8d1ad');
    g.addColorStop(1, '#dfc49b');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(cx, cy);
    // radial flutes
    ctx.strokeStyle = 'rgba(172,128,61,.22)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 48; i++) {
      const a = (i / 48) * TAU;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 300, Math.sin(a) * 300);
      ctx.lineTo(Math.cos(a) * 488, Math.sin(a) * 488);
      ctx.stroke();
    }
    // rings
    [[478, 7, 'rgba(160,111,46,.55)'], [456, 2, 'rgba(197,150,77,.65)'], [230, 3, 'rgba(169,119,48,.4)'], [220, 1, 'rgba(203,157,83,.55)']].forEach(([r, lw, color]) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lw;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.stroke();
    });
    // six flower sprays
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU + 0.3;
      ctx.save();
      ctx.rotate(a);
      ctx.translate(350, 0);
      drawFlower(ctx, 0, 0, 58, CUP_FLOWERS[i % CUP_FLOWERS.length], 7, 0.2);
      ctx.restore();
    }
    ctx.restore();

    const ring = ctx.createRadialGradient(cx, cy, 480, cx, cy, 512);
    ring.addColorStop(0, 'rgba(108,75,36,0)');
    ring.addColorStop(1, 'rgba(104,69,31,.35)');
    ctx.fillStyle = ring;
    ctx.fillRect(0, 0, w, h);
  }, { anisotropy: 8 });
}

function makeFloorTexture() {
  return canvasTexture(2048, 2048, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    const maxR = w / 2;
    ctx.fillStyle = '#ead7b7';
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(cx, cy);
    // alternating radial fields
    const wedges = 32;
    for (let i = 0; i < wedges; i++) {
      const a0 = (i / wedges) * TAU;
      const a1 = ((i + 1) / wedges) * TAU;
      ctx.fillStyle = i % 2 === 0 ? '#f2e4ca' : '#ecd9b9';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxR, a0, a1);
      ctx.closePath();
      ctx.fill();
    }
    // outer celadon band
    ctx.fillStyle = 'rgba(24,90,91,.83)';
    ctx.beginPath();
    ctx.arc(0, 0, maxR, 0, TAU);
    ctx.arc(0, 0, maxR * 0.935, 0, TAU, true);
    ctx.fill();

    // fine inlaid arcs
    ctx.strokeStyle = 'rgba(150,107,45,.34)';
    ctx.lineWidth = 3;
    [0.28, 0.47, 0.66, 0.83, 0.9].forEach((r) => {
      ctx.beginPath();
      ctx.arc(0, 0, maxR * r, 0, TAU);
      ctx.stroke();
    });
    // radial lines
    ctx.strokeStyle = 'rgba(151,108,46,.23)';
    ctx.lineWidth = 2;
    for (let i = 0; i < wedges; i++) {
      const a = (i / wedges) * TAU;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * maxR * 0.12, Math.sin(a) * maxR * 0.12);
      ctx.lineTo(Math.cos(a) * maxR * 0.93, Math.sin(a) * maxR * 0.93);
      ctx.stroke();
    }

    // eight flower medallions under the cups
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU - Math.PI / 8;
      const r = maxR * 0.685;
      ctx.save();
      ctx.translate(Math.cos(a) * r, Math.sin(a) * r);
      ctx.rotate(a + Math.PI / 2);
      ctx.fillStyle = 'rgba(246,233,209,.85)';
      ctx.beginPath();
      ctx.arc(0, 0, 118, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = 'rgba(159,114,47,.6)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, 118, 0, TAU);
      ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 103, 0, TAU);
      ctx.stroke();
      drawFlower(ctx, 0, 0, 74, CUP_FLOWERS[i], 8, 0);
      ctx.restore();
    }

    // central rosette
    ctx.save();
    ctx.fillStyle = 'rgba(24,84,86,.72)';
    ctx.beginPath();
    ctx.arc(0, 0, maxR * 0.19, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(233,198,130,.8)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 0, maxR * 0.19, 0, TAU);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(235,202,139,.6)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * TAU;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * maxR * 0.12, Math.sin(a) * maxR * 0.12);
      ctx.lineTo(Math.cos(a) * maxR * 0.185, Math.sin(a) * maxR * 0.185);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(236,203,141,.88)';
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.rotate((i / 12) * TAU);
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.quadraticCurveTo(30, -70, 0, -maxR * 0.13);
      ctx.quadraticCurveTo(-30, -70, 0, -18);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
    ctx.restore();

    // warm age marks
    drawCrackle(ctx, w, h, 50);
  }, { anisotropy: 8 });
}

function makeCeilingTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, w / 2);
    g.addColorStop(0, '#e8cf9f');
    g.addColorStop(0.14, '#2a7372');
    g.addColorStop(0.5, '#16575c');
    g.addColorStop(0.88, '#1e6869');
    g.addColorStop(1, '#0c3f43');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(cx, cy);
    // radial ribs
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * TAU;
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(221,184,113,.42)' : 'rgba(221,184,113,.17)';
      ctx.lineWidth = i % 4 === 0 ? 4 : 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 56, Math.sin(a) * 56);
      ctx.lineTo(Math.cos(a) * 505, Math.sin(a) * 505);
      ctx.stroke();
    }
    // concentric gilded bands
    [508, 452, 320, 210, 128, 78].forEach((r, i) => {
      ctx.strokeStyle = i % 2 ? 'rgba(228,195,128,.5)' : 'rgba(111,34,45,.62)';
      ctx.lineWidth = i === 0 ? 6 : 2.5;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, TAU);
      ctx.stroke();
    });
    // alternating painted petals
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      ctx.save();
      ctx.rotate(a);
      ctx.translate(0, -385);
      ctx.fillStyle = i % 2 ? 'rgba(112,28,43,.5)' : 'rgba(230,195,129,.17)';
      ctx.beginPath();
      ctx.moveTo(0, -54);
      ctx.quadraticCurveTo(34, 0, 0, 54);
      ctx.quadraticCurveTo(-34, 0, 0, -54);
      ctx.fill();
      ctx.strokeStyle = 'rgba(225,188,119,.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }
    // central flower
    ctx.fillStyle = 'rgba(232,199,133,.78)';
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.rotate((i / 12) * TAU);
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.quadraticCurveTo(24, -58, 0, -106);
      ctx.quadraticCurveTo(-24, -58, 0, -14);
      ctx.fill();
      ctx.restore();
    }
    ctx.fillStyle = '#6c1c2b';
    ctx.beginPath();
    ctx.arc(0, 0, 43, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(233,199,132,.9)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  });
}

function makeBasePanelTexture() {
  return canvasTexture(2048, 512, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#237071');
    g.addColorStop(0.45, '#18595d');
    g.addColorStop(1, '#0f4146');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const panels = 20;
    const pw = w / panels;
    for (let i = 0; i < panels; i++) {
      const x = i * pw;
      // cream inlay
      ctx.fillStyle = 'rgba(241,228,202,.08)';
      ctx.fillRect(x + 14, 24, pw - 28, h - 48);
      ctx.strokeStyle = 'rgba(216,178,108,.55)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 14, 24, pw - 28, h - 48);
      ctx.strokeStyle = 'rgba(216,178,108,.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 23, 33, pw - 46, h - 66);
      // lotus ornament
      ctx.save();
      ctx.translate(x + pw / 2, h * 0.54);
      ctx.fillStyle = 'rgba(229,193,124,.65)';
      for (let p = 0; p < 8; p++) {
        ctx.save();
        ctx.rotate((p / 8) * TAU);
        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.quadraticCurveTo(20, -35, 0, -63);
        ctx.quadraticCurveTo(-20, -35, 0, -8);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = 'rgba(113,355,0,.2)';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, TAU);
      ctx.fillStyle = 'rgba(29,76,74,.9)';
      ctx.fill();
      ctx.restore();
      // corner scrolls
      drawGoldScroll(ctx, x + pw * 0.5, 77, 65);
      drawGoldScroll(ctx, x + pw * 0.5, h - 71, 55);
    }
    // top/bottom gold rails
    const rail = ctx.createLinearGradient(0, 0, 0, 20);
    rail.addColorStop(0, 'rgba(246,218,160,.95)');
    rail.addColorStop(0.5, 'rgba(153,105,40,.95)');
    rail.addColorStop(1, 'rgba(240,207,145,.95)');
    ctx.fillStyle = rail;
    ctx.fillRect(0, 0, w, 20);
    ctx.fillRect(0, h - 22, w, 22);
  });
}

function makeFasciaTexture() {
  return canvasTexture(2048, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f8ecd5');
    g.addColorStop(0.5, '#f2e2c5');
    g.addColorStop(0.9, '#e6ceaa');
    g.addColorStop(1, '#d8ba91');
    ctx.fillStyle = g;

    const scallops = 20;
    const sw = w / scallops;
    const baseY = h * 0.54;
    const drop = h * 0.4;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(w, baseY);
    for (let i = scallops - 1; i >= 0; i--) {
      const x1 = i * sw;
      const x0 = x1 + sw;
      ctx.quadraticCurveTo(x1 + sw * 0.5, baseY + drop, x1, baseY);
    }
    ctx.closePath();
    ctx.fill();

    // subtle vertical pleats
    ctx.save();
    ctx.globalCompositeOperation = 'source-atop';
    for (let x = 0; x < w; x += 12) {
      const a = 0.03 + (Math.sin(x * 0.05) + 1) * 0.018;
      ctx.fillStyle = `rgba(121,84,40,${a})`;
      ctx.fillRect(x, 0, 5, h);
    }
    // gold linework
    for (let i = 0; i < scallops; i++) {
      const x = i * sw + sw / 2;
      drawGoldScroll(ctx, x, h * 0.36, sw * 0.72, 'rgba(160,114,48,.44)');
      ctx.strokeStyle = 'rgba(152,103,40,.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - sw * 0.18, h * 0.15);
      ctx.quadraticCurveTo(x, h * 0.22, x + sw * 0.18, h * 0.15);
      ctx.stroke();
    }
    ctx.restore();

    // top rail
    const rail = ctx.createLinearGradient(0, 0, 0, 22);
    rail.addColorStop(0, 'rgba(246,219,164,1)');
    rail.addColorStop(0.4, 'rgba(168,120,51,1)');
    rail.addColorStop(0.75, 'rgba(241,207,145,1)');
    rail.addColorStop(1, 'rgba(133,91,33,1)');
    ctx.fillStyle = rail;
    ctx.fillRect(0, 0, w, 22);

    // scallop gold edge
    ctx.strokeStyle = 'rgba(170,120,50,.92)';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, baseY);
    for (let i = 0; i < scallops; i++) {
      ctx.quadraticCurveTo(i * sw + sw * 0.5, baseY + drop, (i + 1) * sw, baseY);
    }
    ctx.stroke();
    ctx.strokeStyle = 'rgba(250,225,173,.75)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // little rose dots along the top
    ctx.fillStyle = 'rgba(113,29,43,.8)';
    for (let i = 0; i < scallops * 2; i++) {
      ctx.beginPath();
      ctx.arc(i * sw * 0.5 + sw * 0.25, 43, 4, 0, TAU);
      ctx.fill();
    }
  }, { anisotropy: 8 });
}

function makeRoofTexture() {
  return canvasTexture(2048, 1024, (ctx, w, h) => {
    const base = ctx.createLinearGradient(0, h, 0, 0);
    base.addColorStop(0, '#f7ecd8');
    base.addColorStop(0.55, '#f3e3c7');
    base.addColorStop(1, '#ecd8b6');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);

    // painted celadon border just above the valance
    const band = ctx.createLinearGradient(0, h * 0.035, 0, h * 0.115);
    band.addColorStop(0, '#d8b26e');
    band.addColorStop(0.08, '#1b5f60');
    band.addColorStop(0.5, '#174f53');
    band.addColorStop(0.92, '#1b5f60');
    band.addColorStop(1, '#d8b26e');
    ctx.fillStyle = band;
    ctx.fillRect(0, h * 0.035, w, h * 0.08);

    // gilded pin stripes
    ctx.strokeStyle = 'rgba(154,108,44,.55)';
    ctx.lineWidth = 3;
    [0.025, 0.125, 0.17, 0.82, 0.91].forEach((v) => {
      ctx.beginPath();
      ctx.moveTo(0, h * v);
      ctx.lineTo(w, h * v);
      ctx.stroke();
    });

    // faint radial brush lines
    for (let x = 0; x < w; x += 32) {
      ctx.strokeStyle = `rgba(145,103,48,${0.035 + (x % 96 === 0 ? 0.03 : 0)})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // scattered gilt flower sprays
    for (let i = 0; i < 56; i++) {
      const x = ((i + 0.5) / 56) * w;
      const y = h * (0.24 + ((i * 7) % 9) * 0.065);
      ctx.save();
      ctx.globalAlpha = 0.34;
      for (let p = 0; p < 6; p++) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((p / 6) * TAU);
        ctx.fillStyle = 'rgba(185,137,64,.75)';
        ctx.beginPath();
        ctx.ellipse(0, -17, 9, 19, 0, 0, TAU);
        ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = 'rgba(109,29,43,.55)';
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, TAU);
      ctx.fill();
      ctx.restore();
    }

    // a few delicate scrolls at the broad mid-field
    for (let i = 0; i < 24; i++) {
      const x = ((i + 0.3) / 24) * w;
      const y = h * (0.5 + (i % 3) * 0.07);
      ctx.save();
      ctx.globalAlpha = 0.28;
      drawGoldScroll(ctx, x, y, 86);
      ctx.restore();
    }

    // soft radial shading
    for (let i = 0; i < 3; i++) {
      const g = ctx.createLinearGradient(0, i * h * 0.28, 0, (i + 1) * h * 0.28);
      g.addColorStop(0, 'rgba(122,89,49,0)');
      g.addColorStop(1, `rgba(122,89,49,${0.018 + i * 0.008})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, i * h * 0.28, w, h * 0.28);
    }
    drawCrackle(ctx, w, h, 20);
  }, { anisotropy: 8 });
}

function makeLotusMedallionTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.48);
    g.addColorStop(0, '#287b79');
    g.addColorStop(0.7, '#15595d');
    g.addColorStop(1, '#0b3e43');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.48, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = '#d8b77c';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.46, 0, TAU);
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.4, 0, TAU);
    ctx.stroke();
    // petals
    ctx.fillStyle = 'rgba(236,206,147,.9)';
    for (let i = 0; i < 12; i++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((i / 12) * TAU);
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.quadraticCurveTo(30, -72, 0, -142);
      ctx.quadraticCurveTo(-30, -72, 0, -18);
      ctx.fill();
      ctx.strokeStyle = 'rgba(110,72,29,.45)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }
    ctx.fillStyle = '#6d1b2b';
    ctx.beginPath();
    ctx.arc(cx, cy, 29, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(249,220,159,.9)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,236,186,.85)';
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * TAU;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * 15, cy + Math.sin(a) * 15, 2.6, 0, TAU);
      ctx.fill();
    }
  });
}

function makeNumberTexture(number) {
  return canvasTexture(256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    ctx.fillStyle = 'rgba(245,231,203,.95)';
    ctx.beginPath();
    ctx.arc(cx, cy, 94, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(143,100,39,.9)';
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.strokeStyle = 'rgba(143,100,39,.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 80, 0, TAU);
    ctx.stroke();
    ctx.fillStyle = '#204f50';
    ctx.font = '600 78px "Baskerville", "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(number).padStart(2, '0'), cx, cy + 5);
    ctx.fillStyle = 'rgba(138,94,36,.65)';
    ctx.beginPath();
    ctx.arc(cx, cy - 70, 4, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy + 70, 4, 0, TAU);
    ctx.fill();
  });
}

function makeSignTexture() {
  return canvasTexture(1024, 320, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f7ebd5');
    g.addColorStop(0.55, '#efe0c3');
    g.addColorStop(1, '#dfc49c');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(137,94,36,.9)';
    ctx.lineWidth = 10;
    ctx.strokeRect(12, 12, w - 24, h - 24);
    ctx.strokeStyle = 'rgba(137,94,36,.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, w - 64, h - 64);
    // corner scrolls
    drawGoldScroll(ctx, 123, 74, 100);
    drawGoldScroll(ctx, w - 123, h - 74, 100);
    // lotus
    ctx.save();
    ctx.translate(w / 2, 102);
    ctx.fillStyle = 'rgba(27,95,95,.9)';
    ctx.beginPath();
    ctx.arc(0, 0, 42, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = 'rgba(238,204,140,.9)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = 'rgba(239,208,147,.92)';
    for (let i = 0; i < 8; i++) {
      ctx.save();
      ctx.rotate((i / 8) * TAU);
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.quadraticCurveTo(12, -21, 0, -36);
      ctx.quadraticCurveTo(-12, -21, 0, -5);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#1b4c4d';
    ctx.font = '400 76px "Songti SC", "STSong", "SimSun", serif';
    ctx.fillText('瓷 梦 茶 会', w / 2, 206);
    ctx.fillStyle = 'rgba(139,99,40,.9)';
    ctx.font = '400 21px "Baskerville", "Times New Roman", serif';
    ctx.fillText('T H E   P O R C E L A I N   T E A   P A R T Y', w / 2, 247);
    ctx.fillStyle = 'rgba(27,76,77,.5)';
    ctx.font = '400 16px "Songti SC", "SimSun", serif';
    ctx.fillText('星 梦 奇 境 · 东 庭 茶 席', w / 2, 281);
  });
}

function makeGroundTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    ctx.fillStyle = '#cdbb9e';
    ctx.fillRect(0, 0, w, h);
    const tile = 128;
    for (let y = 0; y < h; y += tile) {
      for (let x = 0; x < w; x += tile) {
        const offset = (Math.floor(y / tile) % 2) * tile * 0.5;
        const px = (x + offset) % w;
        const shade = 0.92 + Math.random() * 0.12;
        ctx.fillStyle = `rgba(${226 * shade},${209 * shade},${181 * shade},1)`;
        ctx.fillRect(px + 3, y + 3, tile - 6, tile - 6);
        ctx.strokeStyle = 'rgba(121,99,68,.22)';
        ctx.lineWidth = 2;
        ctx.strokeRect(px + 3, y + 3, tile - 6, tile - 6);
        // tiny inlay diamond
        ctx.fillStyle = 'rgba(164,135,91,.17)';
        ctx.beginPath();
        ctx.moveTo(px + tile / 2, y + 31);
        ctx.lineTo(px + tile - 34, y + tile / 2);
        ctx.lineTo(px + tile / 2, y + tile - 31);
        ctx.lineTo(px + 34, y + tile / 2);
        ctx.closePath();
        ctx.fill();
      }
    }
    // soft stains
    for (let i = 0; i < 12; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = 50 + Math.random() * 130;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(102,83,55,.055)');
      g.addColorStop(1, 'rgba(102,83,55,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
  }, { repeatX: 9, repeatY: 9, anisotropy: 8 });
}

function makeApronTexture() {
  return canvasTexture(2048, 2048, (ctx, w, h) => {
    const cx = w / 2, cy = h / 2;
    ctx.fillStyle = '#e4cfad';
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    ctx.translate(cx, cy);
    const max = w / 2;
    const rings = 7;
    for (let ring = 0; ring < rings; ring++) {
      const r0 = max * (0.4 + ring * 0.085);
      const r1 = max * (0.4 + (ring + 1) * 0.085);
      const count = 26 + ring * 7;
      for (let i = 0; i < count; i++) {
        const a0 = (i / count) * TAU;
        const a1 = ((i + 1) / count) * TAU;
        const shade = (ring + i) % 2 === 0 ? '#ebd9ba' : '#e1cba7';
        ctx.fillStyle = shade;
        ctx.beginPath();
        ctx.arc(0, 0, r1, a0, a1);
        ctx.arc(0, 0, r0, a1, a0, true);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(132,105,67,.18)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    ctx.strokeStyle = 'rgba(24,83,84,.7)';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(0, 0, max * 0.395, 0, TAU);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(180,138,75,.7)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, max * 0.41, 0, TAU);
    ctx.stroke();
    ctx.restore();
  }, { anisotropy: 8 });
}

/* ---------------------------------------------------------------- */
/* material helpers                                                  */
/* ---------------------------------------------------------------- */

function physical(opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    roughness: 0.35,
    metalness: 0.02,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
    ...opts,
  });
}

function standard(opts = {}) {
  return new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05, ...opts });
}

function makeMaterials() {
  const porcelain = physical({ color: PALETTE.cream, clearcoat: 0.95, clearcoatRoughness: 0.12, roughness: 0.22 });
  const porcelainWarm = physical({ color: PALETTE.creamDeep, clearcoat: 0.9, clearcoatRoughness: 0.15, roughness: 0.25 });
  const ivory = physical({ color: PALETTE.ivory, clearcoat: 0.7, roughness: 0.32 });
  const gold = standard({ color: PALETTE.gold, metalness: 0.88, roughness: 0.27 });
  const goldBright = standard({ color: PALETTE.goldLight, metalness: 0.78, roughness: 0.2 });
  const goldAntique = standard({ color: PALETTE.goldDark, metalness: 0.68, roughness: 0.42 });
  const teal = standard({ color: PALETTE.teal, roughness: 0.36, metalness: 0.18 });
  const tealDeep = standard({ color: PALETTE.tealDeep, roughness: 0.42, metalness: 0.14 });
  const wine = physical({
    color: PALETTE.wine,
    roughness: 0.82,
    metalness: 0,
    sheen: 1,
    sheenRoughness: 0.5,
    sheenColor: new THREE.Color(0xc45862),
    side: THREE.DoubleSide,
  });
  const wineDark = physical({
    color: PALETTE.wineDeep,
    roughness: 0.88,
    sheen: 1,
    sheenColor: new THREE.Color(0x9f3a49),
    side: THREE.DoubleSide,
  });
  const interior = physical({ color: 0x711d2d, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08, side: THREE.DoubleSide });
  const stone = standard({ color: 0xd9c5a4, roughness: 0.88 });
  const stoneLight = standard({ color: 0xeddcc0, roughness: 0.78 });
  const darkGreen = standard({ color: 0x1d423c, roughness: 0.9 });
  const leaf = standard({ color: 0x2d5745, roughness: 0.88 });
  const leafLight = standard({ color: 0x49735b, roughness: 0.86 });
  const glass = physical({
    color: 0xffe0a7,
    emissive: new THREE.Color(0xffb45f),
    emissiveIntensity: 1.4,
    roughness: 0.15,
    transparent: true,
    opacity: 0.82,
    clearcoat: 1,
  });
  const bulb = new THREE.MeshBasicMaterial({ color: 0xffe7b6, toneMapped: false });
  return {
    porcelain, porcelainWarm, ivory, gold, goldBright, goldAntique, teal, tealDeep,
    wine, wineDark, interior, stone, stoneLight, darkGreen, leaf, leafLight, glass, bulb,
  };
}

/* ---------------------------------------------------------------- */
/* geometry helpers                                                  */
/* ---------------------------------------------------------------- */

function mesh(geo, mat, position, rotation, scale) {
  const m = new THREE.Mesh(geo, mat);
  if (position) m.position.set(position[0], position[1], position[2]);
  if (rotation) m.rotation.set(rotation[0], rotation[1], rotation[2]);
  if (scale) m.scale.set(scale[0], scale[1], scale[2]);
  return m;
}

function addCyl(group, rTop, rBot, height, segments, pos, mat, opts = {}) {
  const geo = new THREE.CylinderGeometry(rTop, rBot, height, segments, opts.heightSegments || 1, opts.openEnded || false, opts.thetaStart || 0, opts.thetaLength || TAU);
  const m = mesh(geo, mat, pos, opts.rotation, opts.scale);
  m.castShadow = opts.castShadow ?? true;
  m.receiveShadow = opts.receiveShadow ?? true;
  group.add(m);
  return m;
}

function addTorus(group, radius, tube, radialSeg, tubularSeg, pos, mat, rotation) {
  const m = mesh(new THREE.TorusGeometry(radius, tube, radialSeg, tubularSeg), mat, pos, rotation);
  m.castShadow = true;
  m.receiveShadow = true;
  group.add(m);
  return m;
}

function addSphere(group, radius, ws, hs, pos, mat, scale) {
  const m = mesh(new THREE.SphereGeometry(radius, ws, hs), mat, pos, null, scale);
  m.castShadow = true;
  m.receiveShadow = true;
  group.add(m);
  return m;
}

function tubeFromPoints(points, radius, material, tubularSegments = 32, radialSegments = 6) {
  const curve = new THREE.CatmullRomCurve3(points);
  const geo = new THREE.TubeGeometry(curve, tubularSegments, radius, radialSegments, false);
  const m = new THREE.Mesh(geo, material);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function lathe(points, mat, segments = 64, phiStart = 0, phiLength = TAU, side) {
  const geo = new THREE.LatheGeometry(points, segments, phiStart, phiLength);
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  if (side) mat.side = side;
  return m;
}

function flatCircle(radius, mat, y, segments = 64, x = 0, z = 0) {
  const m = mesh(new THREE.CircleGeometry(radius, segments), mat, [x, y, z], [-Math.PI / 2, 0, 0]);
  m.receiveShadow = true;
  return m;
}

function makeSwag(radius, a0, a1, topY, depth, clothMat, trimMat, outward = 0.02) {
  const group = new THREE.Group();
  const cols = 26;
  const rows = 7;
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let j = 0; j <= rows; j++) {
    const v = j / rows;
    for (let i = 0; i <= cols; i++) {
      const u = i / cols;
      const a = THREE.MathUtils.lerp(a0, a1, u);
      const droop = Math.sin(Math.PI * u);
      const r = radius + Math.sin(Math.PI * u) * Math.sin(v * Math.PI) * outward;
      const y = topY - v * depth * droop;
      positions.push(Math.cos(a) * r, y, Math.sin(a) * r);
      uvs.push(u, 1 - v);
    }
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const a = j * (cols + 1) + i;
      const b = a + 1;
      const c = a + cols + 1;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const cloth = new THREE.Mesh(geo, clothMat);
  cloth.castShadow = true;
  cloth.receiveShadow = true;
  group.add(cloth);

  // heavy gold fringe along the scalloped hem
  const fringePoints = [];
  for (let i = 0; i <= 16; i++) {
    const u = i / 16;
    const a = THREE.MathUtils.lerp(a0, a1, u);
    const droop = Math.sin(Math.PI * u);
    fringePoints.push(new THREE.Vector3(
      Math.cos(a) * (radius + Math.sin(Math.PI * u) * 0.02),
      topY - depth * droop - 0.012,
      Math.sin(a) * (radius + Math.sin(Math.PI * u) * 0.02),
    ));
  }
  const trim = tubeFromPoints(fringePoints, 0.018, trimMat, 28, 4);
  group.add(trim);

  // tassel at the centre
  if (depth > 0.5) {
    const a = (a0 + a1) / 2;
    const r = radius;
    const top = topY - depth;
    const bead = addSphere(group, 0.045, 8, 8, [Math.cos(a) * r, top - 0.09, Math.sin(a) * r], trimMat);
    bead.castShadow = false;
    const drop = addCyl(group, 0.008, 0.012, 0.18, 4, [Math.cos(a) * r, top - 0.22, Math.sin(a) * r], trimMat);
    drop.castShadow = false;
    addSphere(group, 0.035, 7, 7, [Math.cos(a) * r, top - 0.33, Math.sin(a) * r], clothMat, [0.8, 1.3, 0.8]);
  }
  return group;
}

function makeColumns(group, mats, count = 10, radius = 9.75, baseY = 1.1, topY = 6.83) {
  const shaftGeo = new THREE.CylinderGeometry(0.075, 0.1, topY - baseY - 0.5, 10, 1);
  const plinthGeo = new THREE.CylinderGeometry(0.24, 0.34, 0.24, 10);
  const capGeo = new THREE.CylinderGeometry(0.24, 0.16, 0.2, 10);
  for (let i = 0; i < count; i++) {
    const a = (i / count) * TAU;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    const col = new THREE.Group();
    col.position.set(x, 0, z);
    addCyl(col, 0.36, 0.42, 0.2, 12, [0, baseY + 0.1, 0], mats.goldAntique);
    addCyl(col, 0.26, 0.31, 0.16, 12, [0, baseY + 0.27, 0], mats.gold);
    const shaft = new THREE.Mesh(shaftGeo, mats.gold);
    shaft.position.y = baseY + 0.42 + (topY - baseY - 0.5) / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    col.add(shaft);
    addTorus(col, 0.11, 0.022, 5, 16, [0, baseY + 0.45, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
    addCyl(col, 0.18, 0.26, 0.18, 12, [0, topY - 0.31, 0], mats.gold);
    addTorus(col, 0.25, 0.06, 6, 24, [0, topY - 0.19, 0], mats.goldAntique, [Math.PI / 2, 0, 0]);
    const cap = new THREE.Mesh(capGeo, mats.gold);
    cap.position.y = topY - 0.06;
    cap.castShadow = true;
    col.add(cap);
    // little leaf curls at the capital
    for (let s = 0; s < 4; s++) {
      const sa = (s / 4) * TAU;
      const curl = addTorus(col, 0.09, 0.018, 4, 10, [Math.cos(sa) * 0.2, topY - 0.13, Math.sin(sa) * 0.2], mats.goldBright, [Math.PI / 2, 0, sa]);
      curl.castShadow = false;
    }
    group.add(col);
  }
}

/* ---------------------------------------------------------------- */
/* the teacup                                                        */
/* ---------------------------------------------------------------- */

function makeCup(index, mats, cupTexture, numberTexture, saucerMaterial) {
  const group = new THREE.Group();

  // saucer
  const saucerPts = [
    new V2(0.0, 0.0),
    new V2(0.34, 0.0),
    new V2(0.62, 0.015),
    new V2(0.94, 0.04),
    new V2(1.22, 0.075),
    new V2(1.44, 0.13),
    new V2(1.53, 0.18),
    new V2(1.51, 0.22),
    new V2(1.42, 0.21),
    new V2(1.18, 0.16),
    new V2(0.88, 0.125),
  ];
  const saucer = lathe(saucerPts, mats.porcelainWarm, 64);
  saucer.position.y = 0;
  group.add(saucer);
  addTorus(group, 1.5, 0.026, 5, 64, [0, 0.19, 0], mats.gold, [Math.PI / 2, 0, 0]);

  const saucerTop = flatCircle(1.42, saucerMaterial, 0.215);
  group.add(saucerTop);
  addTorus(group, 1.29, 0.013, 4, 64, [0, 0.226, 0], mats.teal, [Math.PI / 2, 0, 0]);
  addTorus(group, 1.17, 0.009, 3, 56, [0, 0.228, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    addSphere(group, 0.022, 6, 5, [Math.cos(a) * 1.355, 0.228, Math.sin(a) * 1.355], mats.goldBright);
  }

  // cup body
  const bodyPts = [
    new V2(0.0, 0.0),
    new V2(0.35, 0.005),
    new V2(0.51, 0.035),
    new V2(0.6, 0.1),
    new V2(0.69, 0.26),
    new V2(0.79, 0.5),
    new V2(0.88, 0.78),
    new V2(0.95, 1.06),
    new V2(1.0, 1.3),
    new V2(1.02, 1.4),
    new V2(1.015, 1.44),
  ];
  const cupMat = physical({
    map: cupTexture,
    roughness: 0.2,
    metalness: 0.02,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    color: 0xffffff,
  });
  const body = lathe(bodyPts, cupMat, 72);
  body.position.y = 0.22;
  group.add(body);

  // inner wine-coloured bowl
  const innerPts = [
    new V2(1.01, 1.43),
    new V2(0.96, 1.3),
    new V2(0.9, 1.03),
    new V2(0.8, 0.72),
    new V2(0.66, 0.42),
    new V2(0.46, 0.22),
    new V2(0.24, 0.14),
    new V2(0.0, 0.12),
  ];
  const inner = lathe(innerPts, mats.interior, 64);
  inner.position.y = 0.22;
  inner.castShadow = false;
  group.add(inner);

  // gilded lip and foot
  addTorus(group, 1.02, 0.047, 6, 72, [0, 1.66, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
  addTorus(group, 1.0, 0.018, 4, 72, [0, 1.59, 0], mats.gold, [Math.PI / 2, 0, 0]);
  addTorus(group, 0.96, 0.014, 4, 64, [0, 1.53, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
  addTorus(group, 0.55, 0.032, 5, 48, [0, 0.27, 0], mats.gold, [Math.PI / 2, 0, 0]);
  addTorus(group, 0.84, 0.018, 4, 60, [0, 0.78, 0], mats.gold, [Math.PI / 2, 0, 0]);

  // outward handle
  const handle = tubeFromPoints([
    new V3(0.96, 1.37, 0),
    new V3(1.28, 1.4, 0),
    new V3(1.46, 1.22, 0),
    new V3(1.43, 0.94, 0),
    new V3(1.25, 0.78, 0),
    new V3(0.96, 0.8, 0),
  ], 0.075, mats.gold, 40, 7);
  group.add(handle);
  // handle gold rims
  addTorus(group, 0.1, 0.022, 4, 16, [1.02, 1.37, 0], mats.goldBright, [0, 0, 0]);
  addTorus(group, 0.1, 0.022, 4, 16, [1.02, 0.8, 0], mats.goldBright, [0, 0, 0]);
  const scroll = addTorus(group, 0.075, 0.016, 4, 14, [1.47, 1.08, 0], mats.goldBright, [0, 0.45, 0]);
  scroll.castShadow = false;

  // number seal on the saucer
  const number = mesh(
    new THREE.CircleGeometry(0.155, 32),
    new THREE.MeshBasicMaterial({ map: numberTexture, transparent: true, depthWrite: false, toneMapped: false }),
    [0.92, 0.225, 0.94],
    [-Math.PI / 2, 0, 0],
  );
  number.renderOrder = 2;
  group.add(number);

  // cushioned seat
  const cushion = mesh(new THREE.CylinderGeometry(0.5, 0.55, 0.09, 24), mats.wine, [0, 0.38, 0]);
  cushion.castShadow = false;
  group.add(cushion);
  addTorus(group, 0.48, 0.02, 4, 28, [0, 0.43, 0], mats.gold, [Math.PI / 2, 0, 0]);

  // operating wheel — the interactive part
  const wheel = new THREE.Group();
  wheel.position.y = 0.7;
  const wheelRing = mesh(new THREE.TorusGeometry(0.3, 0.032, 6, 30), mats.goldBright, null, [Math.PI / 2, 0, 0]);
  wheel.add(wheelRing);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU;
    const spoke = mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.58, 4), mats.gold, null, [0, 0, 0]);
    spoke.rotation.z = Math.PI / 2;
    spoke.rotation.y = a;
    spoke.position.set(Math.cos(a) * 0.29, 0, Math.sin(a) * 0.29);
    wheel.add(spoke);
  }
  addSphere(wheel, 0.075, 10, 8, [0, 0, 0], mats.goldBright);
  const hub = mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.11, 12), mats.porcelain, [0, 0.07, 0]);
  wheel.add(hub);
  group.add(wheel);

  // little rim flowers (physical, so they catch the light)
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const bead = addSphere(group, 0.022, 6, 5, [Math.cos(a) * 1.028, 1.67, Math.sin(a) * 1.028], mats.goldBright);
    bead.castShadow = false;
  }

  group.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = child.castShadow !== false;
      child.receiveShadow = true;
    }
  });

  return { group, wheel, inner, body };
}

/* ---------------------------------------------------------------- */
/* teapot                                                           */
/* ---------------------------------------------------------------- */

function makeTeapot(mats, texture) {
  const group = new THREE.Group();
  const ceramic = physical({
    map: texture,
    roughness: 0.17,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    color: 0xffffff,
  });

  // stepped tea-podium
  addCyl(group, 1.82, 1.9, 0.12, 48, [0, 0.07, 0], mats.stone, { castShadow: true });
  addCyl(group, 1.62, 1.74, 0.3, 48, [0, 0.28, 0], mats.tealDeep);
  addTorus(group, 1.68, 0.035, 5, 64, [0, 0.44, 0], mats.gold, [Math.PI / 2, 0, 0]);
  addCyl(group, 1.4, 1.55, 0.36, 48, [0, 0.62, 0], mats.teal);
  addTorus(group, 1.42, 0.028, 5, 64, [0, 0.81, 0], mats.gold, [Math.PI / 2, 0, 0]);
  addCyl(group, 1.34, 1.34, 0.08, 48, [0, 0.86, 0], mats.cream || mats.porcelainWarm);
  // lotus plaques on podium
  const lotusTex = makeLotusMedallionTexture();
  const medMat = new THREE.MeshBasicMaterial({ map: lotusTex, transparent: true, toneMapped: false, side: THREE.DoubleSide });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const disc = mesh(new THREE.CircleGeometry(0.22, 24), medMat, [Math.cos(a) * 1.56, 0.64, Math.sin(a) * 1.56], [0, Math.PI / 2 - a, 0]);
    disc.renderOrder = 2;
    group.add(disc);
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    addSphere(group, 0.04, 6, 5, [Math.cos(a) * 1.42, 0.835, Math.sin(a) * 1.42], mats.goldBright);
  }

  // body
  const bodyPts = [
    new V2(0.0, 0.0),
    new V2(0.58, 0.0),
    new V2(0.78, 0.08),
    new V2(0.98, 0.32),
    new V2(1.14, 0.68),
    new V2(1.18, 1.0),
    new V2(1.1, 1.33),
    new V2(0.93, 1.56),
    new V2(0.7, 1.69),
    new V2(0.54, 1.72),
  ];
  const body = lathe(bodyPts, ceramic, 80);
  body.position.y = 1.02;
  group.add(body);

  addTorus(group, 1.08, 0.04, 5, 72, [0, 1.99, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
  addTorus(group, 0.62, 0.028, 4, 56, [0, 1.08, 0], mats.gold, [Math.PI / 2, 0, 0]);

  // lid
  addCyl(group, 0.66, 0.74, 0.1, 48, [0, 2.76, 0], mats.porcelainWarm);
  addTorus(group, 0.67, 0.03, 4, 56, [0, 2.81, 0], mats.gold, [Math.PI / 2, 0, 0]);
  const lidDome = mesh(new THREE.SphereGeometry(0.62, 32, 16, 0, TAU, 0, Math.PI / 2), mats.porcelainWarm, [0, 2.8, 0], [0, 0, 0], [1, 0.44, 1]);
  lidDome.castShadow = true;
  group.add(lidDome);
  addTorus(group, 0.2, 0.025, 4, 24, [0, 3.04, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
  addSphere(group, 0.16, 16, 12, [0, 3.18, 0], mats.goldBright, [0.8, 1.25, 0.8]);
  addCyl(group, 0.02, 0.04, 0.2, 8, [0, 3.4, 0], mats.gold);
  addSphere(group, 0.05, 10, 8, [0, 3.53, 0], mats.goldBright);

  // spout
  const spout = tubeFromPoints([
    new V3(1.02, 1.76, 0),
    new V3(1.46, 1.84, 0),
    new V3(1.84, 2.1, 0),
    new V3(2.02, 2.48, 0),
    new V3(2.08, 2.72, 0),
  ], 0.15, ceramic, 46, 12);
  group.add(spout);
  // taper the spout visually with a tip cone and gold mouth
  addCyl(group, 0.13, 0.17, 0.18, 20, [2.08, 2.79, 0], ceramic);
  addTorus(group, 0.115, 0.028, 4, 20, [2.08, 2.88, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
  // gold band around the base of the spout
  addTorus(group, 0.16, 0.022, 4, 20, [1.16, 1.78, 0], mats.gold, [0, 0, Math.PI / 2]);

  // handle
  const handle = tubeFromPoints([
    new V3(-1.05, 1.68, 0),
    new V3(-1.72, 1.56, 0),
    new V3(-2.04, 1.95, 0),
    new V3(-1.9, 2.45, 0),
    new V3(-1.26, 2.5, 0),
    new V3(-0.92, 2.22, 0),
  ], 0.105, mats.gold, 52, 10);
  group.add(handle);
  addSphere(group, 0.13, 12, 10, [-1.05, 1.68, 0], mats.goldBright, [1, 0.8, 1]);
  addSphere(group, 0.11, 12, 10, [-0.94, 2.24, 0], mats.goldBright, [1, 0.8, 1]);
  const handleCurl = addTorus(group, 0.16, 0.025, 4, 24, [-1.92, 2.2, 0], mats.goldBright, [0, Math.PI / 2, 0]);
  handleCurl.castShadow = false;

  // tiny porcelain flowers around the lid
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    addSphere(group, 0.035, 6, 5, [Math.cos(a) * 0.55, 2.9, Math.sin(a) * 0.55], i % 2 ? mats.goldBright : mats.porcelain);
  }

  group.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return { group, spoutTip: new V3(2.08, 2.96, 0) };
}

/* ---------------------------------------------------------------- */
/* environment                                                       */
/* ---------------------------------------------------------------- */

function makeSky(scene) {
  const uniforms = {
    topColor: { value: new THREE.Color(0x8fb7c4) },
    bottomColor: { value: new THREE.Color(0xf6e3c1) },
    sunColor: { value: new THREE.Color(0xffe0a3) },
    sunDir: { value: new THREE.Vector3(-0.4, 0.42, -0.8).normalize() },
    intensity: { value: 1.0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: /* glsl */`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      uniform float intensity;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld);
        float h = smoothstep(-0.12, 0.7, dir.y);
        vec3 col = mix(bottomColor, topColor, h);
        float sun = pow(max(dot(dir, normalize(sunDir)), 0.0), 36.0);
        float haze = pow(1.0 - max(dir.y, 0.0), 4.0) * 0.18;
        col += sunColor * sun * 0.42 * intensity;
        col += sunColor * haze * 0.35 * intensity;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(120, 48, 32), mat);
  dome.frustumCulled = false;
  scene.add(dome);
  return { dome, uniforms };
}

function makeStars(scene) {
  const count = 420;
  const pos = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * TAU;
    const y = 0.18 + Math.random() * 0.75;
    const r = Math.sqrt(1 - y * y);
    const radius = 95;
    pos[i * 3] = Math.cos(a) * r * radius;
    pos[i * 3 + 1] = y * radius;
    pos[i * 3 + 2] = Math.sin(a) * r * radius;
    sizes[i] = 0.4 + Math.random() * 1.4;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  const mat = new THREE.PointsMaterial({
    color: 0xffeccb,
    size: 0.24,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    toneMapped: false,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);
  return points;
}

function makeCelestialSprite(scene, glowTex) {
  const mat = new THREE.SpriteMaterial({
    map: glowTex,
    color: 0xfff0c9,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(10, 10, 1);
  sprite.position.set(-36, 40, -55);
  scene.add(sprite);

  const core = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, color: 0xfff7df, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  }));
  core.scale.set(2.6, 2.6, 1);
  core.position.copy(sprite.position);
  scene.add(core);
  return { sprite, core };
}

function makeEnvironment(scene, mats) {
  const env = new THREE.Group();

  const groundMat = new THREE.MeshStandardMaterial({
    map: makeGroundTexture(), roughness: 0.95, metalness: 0,
    color: 0xd3c0a0,
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(170, 170), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  ground.receiveShadow = true;
  env.add(ground);

  const apronMat = new THREE.MeshStandardMaterial({
    map: makeApronTexture(), roughness: 0.82, metalness: 0.02,
    color: 0xf0ddbd, transparent: true,
  });
  const apron = new THREE.Mesh(new THREE.RingGeometry(10.8, 25.5, 96, 1), apronMat);
  apron.rotation.x = -Math.PI / 2;
  apron.position.y = 0.012;
  apron.receiveShadow = true;
  env.add(apron);
  const apronEdge = new THREE.Mesh(
    new THREE.TorusGeometry(25.5, 0.045, 4, 120),
    mats.goldAntique,
  );
  apronEdge.rotation.x = Math.PI / 2;
  apronEdge.position.y = 0.03;
  env.add(apronEdge);

  // low hedges, kept away from the front aisle
  const hedgeGeo = new THREE.SphereGeometry(1, 10, 7);
  for (let i = 0; i < 34; i++) {
    const a = (i / 34) * TAU;
    if (Math.sin(a) > 0.72) continue;
    const r = 15.4 + Math.sin(i * 2.7) * 0.5;
    const hedge = new THREE.Mesh(hedgeGeo, i % 3 ? mats.darkGreen : mats.leaf);
    hedge.scale.set(1.25 + (i % 4) * 0.16, 0.55 + (i % 3) * 0.1, 0.9);
    hedge.position.set(Math.cos(a) * r, 0.48, Math.sin(a) * r);
    hedge.rotation.y = -a;
    hedge.castShadow = true;
    hedge.receiveShadow = true;
    env.add(hedge);
    if (i % 5 === 0) {
      const topiary = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), mats.leafLight);
      topiary.position.set(Math.cos(a) * r, 1.2, Math.sin(a) * r);
      topiary.scale.y = 1.3;
      topiary.castShadow = true;
      env.add(topiary);
    }
  }

  // distant topiary trees for depth
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU + 0.17;
    const r = 30 + (i % 4) * 3.2;
    if (Math.sin(a) > 0.82) continue;
    const tree = new THREE.Group();
    tree.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    addCyl(tree, 0.22, 0.3, 3.2, 6, [0, 1.6, 0], standard({ color: 0x5b432c, roughness: 0.9 }), { castShadow: false });
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 1), i % 2 ? mats.leaf : mats.darkGreen);
    crown.position.y = 4.1;
    crown.scale.set(1, 1.25, 1);
    crown.castShadow = true;
    tree.add(crown);
    if (i % 3 === 0) {
      const crown2 = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), mats.leafLight);
      crown2.position.set(0.8, 5.15, 0.3);
      tree.add(crown2);
    }
    env.add(tree);
  }

  return { group: env, ground, apron };
}

function makeParkEnvironmentMap(renderer) {
  if (!renderer) return null;
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const sky = ctx.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0, '#111d31');
  sky.addColorStop(0.38, '#5e5b62');
  sky.addColorStop(0.52, '#e3c493');
  sky.addColorStop(0.62, '#7d5f42');
  sky.addColorStop(1, '#17151a');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 1024, 512);
  // warm fairground lights reflected in porcelain and brass
  const lights = [
    [220, 235, 130, '#ffcf88'],
    [520, 205, 180, '#ffd9a0'],
    [815, 260, 150, '#ffbd7a'],
  ];
  lights.forEach(([x, y, r, color]) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(0.12, 'rgba(255,223,168,.78)');
    g.addColorStop(0.5, 'rgba(255,188,113,.22)');
    g.addColorStop(1, 'rgba(255,170,80,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  });
  // cool moonlit band above
  const cool = ctx.createRadialGradient(700, 90, 0, 700, 90, 260);
  cool.addColorStop(0, 'rgba(163,191,235,.55)');
  cool.addColorStop(1, 'rgba(120,150,210,0)');
  ctx.fillStyle = cool;
  ctx.fillRect(400, 0, 620, 360);

  const tex = new THREE.CanvasTexture(canvas);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const rt = pmrem.fromEquirectangular(tex);
  tex.dispose();
  pmrem.dispose();
  return rt.texture;
}

function makeLampPosts(group, mats, glowTex) {
  const positions = [];
  const glassMat = mats.glass;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    if (Math.sin(a) > 0.82) continue;
    const r = 13.4;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const post = new THREE.Group();
    post.position.set(x, 0, z);
    addCyl(post, 0.14, 0.2, 0.2, 10, [0, 0.1, 0], mats.goldAntique);
    addCyl(post, 0.055, 0.075, 3.0, 8, [0, 1.58, 0], mats.gold);
    addTorus(post, 0.13, 0.02, 4, 14, [0, 0.69, 0], mats.goldBright, [Math.PI / 2, 0, 0]);
    addCyl(post, 0.16, 0.1, 0.12, 10, [0, 3.1, 0], mats.gold);
    const globe = addSphere(post, 0.25, 16, 12, [0, 3.36, 0], glassMat, [1, 1.22, 1]);
    globe.castShadow = false;
    addCyl(post, 0.18, 0.06, 0.15, 10, [0, 3.69, 0], mats.gold);
    addSphere(post, 0.035, 8, 6, [0, 3.8, 0], mats.goldBright);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: 0xffd49a, transparent: true, opacity: 0.65, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    glow.scale.set(1.7, 1.7, 1);
    glow.position.set(0, 3.37, 0);
    post.add(glow);
    positions.push(new V3(x, 3.37, z));
    group.add(post);
  }
  return positions;
}

function makeEntrance(group, mats) {
  const signTex = makeSignTexture();
  const signMat = new THREE.MeshBasicMaterial({ map: signTex, toneMapped: false });
  const placard = new THREE.Group();
  placard.position.set(-9.5, 0, 10.3);
  placard.rotation.y = 0.36;
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1.38), signMat);
  sign.position.set(0, 2.95, 0.02);
  placard.add(sign);
  const back = new THREE.Mesh(new THREE.BoxGeometry(4.58, 1.56, 0.16), mats.goldAntique);
  back.position.set(0, 2.95, -0.08);
  back.castShadow = true;
  placard.add(back);
  // two posts and a little canopy rail
  for (const dx of [-2.25, 2.25]) {
    addCyl(placard, 0.07, 0.1, 3.4, 8, [dx, 1.7, -0.1], mats.gold);
    addCyl(placard, 0.16, 0.22, 0.16, 10, [dx, 0.08, -0.1], mats.goldAntique);
    addSphere(placard, 0.11, 10, 8, [dx, 3.47, -0.1], mats.goldBright);
    addCyl(placard, 0.022, 0.022, 0.2, 5, [dx, 3.67, -0.1], mats.goldBright);
  }
  addTorus(placard, 2.25, 0.028, 4, 32, [0, 3.58, -0.1], mats.gold, [0, 0, Math.PI / 2]);
  group.add(placard);

  // three proper stone steps, with a burgundy runner
  const stepMat = mats.stoneLight;
  const runnerMat = new THREE.MeshPhysicalMaterial({ color: 0x571322, roughness: 0.82, sheen: 1, sheenColor: new THREE.Color(0xa53e4b) });
  const steps = [
    { z: 11.9, y: 0.16, w: 5.8, d: 0.8 },
    { z: 11.25, y: 0.46, w: 5.3, d: 0.65 },
    { z: 10.65, y: 0.76, w: 4.8, d: 0.65 },
  ];
  steps.forEach((s) => {
    addBoxStep(group, s.w, 0.26, s.d, [0, s.y, s.z], stepMat);
    addBoxStep(group, s.w + 0.12, 0.035, s.d + 0.06, [0, s.y + 0.15, s.z], mats.gold);
    addBoxStep(group, 2.3, 0.036, s.d + 0.02, [0, s.y + 0.175, s.z], runnerMat);
  });
  // brass handrails beside the steps
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const s = steps[i];
      addCyl(group, 0.026, 0.035, 0.82, 6, [side * (s.w / 2 + 0.06), s.y + 0.56, s.z], mats.gold);
    }
    const rail = tubeFromPoints([
      new V3(side * 3.02, 0.83, 12.25),
      new V3(side * 2.78, 1.08, 11.25),
      new V3(side * 2.52, 1.33, 10.25),
    ], 0.03, mats.gold, 16, 4);
    group.add(rail);
  }

  // queue posts and a low velvet rope to one side
  const ropePts = [];
  for (let i = 0; i < 5; i++) {
    const x = 4.4 + i * 1.55;
    addCyl(group, 0.045, 0.06, 0.9, 8, [x, 0.45, 12.7], mats.gold);
    addSphere(group, 0.075, 8, 7, [x, 0.93, 12.7], mats.goldBright);
    ropePts.push(new V3(x, 0.78, 12.7));
  }
  const ropeCurve = new THREE.CatmullRomCurve3(ropePts);
  const rope = new THREE.Mesh(new THREE.TubeGeometry(ropeCurve, 40, 0.022, 4, false), mats.wine);
  rope.castShadow = false;
  group.add(rope);
}

function addBoxStep(group, w, h, d, pos, mat) {
  const step = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  step.position.set(pos[0], pos[1], pos[2]);
  step.castShadow = true;
  step.receiveShadow = true;
  group.add(step);
  return step;
}

/* ---------------------------------------------------------------- */
/* main ride                                                         */
/* ---------------------------------------------------------------- */

export function createTeaRide({ scene, renderer, bloom, isMobile = false, park = null }) {
  const parkMode = Boolean(park);
  const mats = makeMaterials();
  const root = new THREE.Group();
  if (parkMode) {
    const p = park.position || [0, 0, 0];
    root.position.set(p[0], p[1], p[2]);
    root.scale.setScalar(park.scale ?? 1);
  }
  scene.add(root);

  const glowTex = softGlowTexture();
  let sky = null;
  let stars = null;
  let celestial = null;
  let environment = null;
  let lights;
  if (!parkMode) {
    sky = makeSky(scene);
    stars = makeStars(scene);
    celestial = makeCelestialSprite(scene, glowTex);
    environment = makeEnvironment(scene, mats);
    root.add(environment.group);

    scene.fog = new THREE.FogExp2(0xe2d0b3, 0.0035);

    lights = {
      hemi: new THREE.HemisphereLight(0xacc8d4, 0x6e5540, 1.15),
      key: new THREE.DirectionalLight(0xffe4b8, 2.4),
      fill: new THREE.DirectionalLight(0xbcd1dd, 0.6),
      inner: new THREE.PointLight(0xffc078, 22, 21, 2),
      front: new THREE.PointLight(0xffd9a1, 12, 15, 2),
    };
    lights.key.position.set(16, 26, 14);
    lights.key.castShadow = true;
    lights.key.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048);
    lights.key.shadow.camera.left = -20;
    lights.key.shadow.camera.right = 20;
    lights.key.shadow.camera.top = 24;
    lights.key.shadow.camera.bottom = -16;
    lights.key.shadow.camera.near = 1;
    lights.key.shadow.camera.far = 65;
    lights.key.shadow.bias = -0.0004;
    lights.key.shadow.normalBias = 0.025;
    scene.add(lights.hemi, lights.key, lights.key.target, lights.fill);
    lights.fill.position.set(-18, 13, -12);
    lights.inner.position.set(0, 6.45, 0);
    lights.front.position.set(4, 3.1, 11.5);
    scene.add(lights.inner, lights.front);
  } else {
    lights = {
      inner: new THREE.PointLight(0xffc98f, 82, 28, 2),
      front: new THREE.PointLight(0xffd7a6, 22, 18, 2),
    };
    lights.inner.position.set(0, 6.2, 2.5);
    lights.front.position.set(3.5, 3.2, 11.5);
    root.add(lights.inner, lights.front);
  }

  /* ---------- static base ---------- */
  const staticGroup = new THREE.Group();
  root.add(staticGroup);

  // outer stone dais
  addCyl(staticGroup, 10.55, 10.8, 0.26, 80, [0, 0.13, 0], mats.stone);
  addTorus(staticGroup, 10.72, 0.07, 5, 96, [0, 0.27, 0], mats.goldAntique, [Math.PI / 2, 0, 0]);
  const basePanelMat = new THREE.MeshStandardMaterial({
    map: makeBasePanelTexture(), roughness: 0.42, metalness: 0.18, side: THREE.DoubleSide,
  });
  const basePanel = new THREE.Mesh(new THREE.CylinderGeometry(10.52, 10.56, 0.82, 96, 1, true), basePanelMat);
  basePanel.position.y = 0.68;
  basePanel.receiveShadow = true;
  staticGroup.add(basePanel);

  // base pilasters and swags
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * TAU;
    const x = Math.cos(a) * 10.56;
    const z = Math.sin(a) * 10.56;
    addCyl(staticGroup, 0.045, 0.05, 0.94, 6, [x, 0.7, z], mats.gold);
    addSphere(staticGroup, 0.065, 8, 6, [x, 1.16, z], mats.goldBright);
  }
  for (let i = 0; i < 20; i++) {
    const a0 = (i / 20) * TAU + 0.025;
    const a1 = ((i + 1) / 20) * TAU - 0.025;
    const swag = makeSwag(10.58, a0, a1, 1.04, 0.45, mats.wine, mats.goldBright, 0.025);
    staticGroup.add(swag);
  }
  addTorus(staticGroup, 10.55, 0.055, 4, 96, [0, 1.23, 0], mats.gold, [Math.PI / 2, 0, 0]);
  addTorus(staticGroup, 10.55, 0.035, 4, 96, [0, 0.29, 0], mats.gold, [Math.PI / 2, 0, 0]);

  // outer landing ring
  const landing = new THREE.Mesh(
    new THREE.RingGeometry(9.1, 10.54, 96, 1),
    new THREE.MeshPhysicalMaterial({ color: 0xe8d3b2, roughness: 0.5, metalness: 0.05, clearcoat: 0.25 }),
  );
  landing.rotation.x = -Math.PI / 2;
  landing.position.y = 1.095;
  landing.receiveShadow = true;
  staticGroup.add(landing);
  addTorus(staticGroup, 9.12, 0.035, 4, 96, [0, 1.1, 0], mats.gold, [Math.PI / 2, 0, 0]);

  // columns and canopy
  makeColumns(staticGroup, mats, 10, 9.72, 1.12, 6.92);

  // canopy roof
  const roofPts = [
    new V2(10.58, 6.86),
    new V2(10.6, 7.04),
    new V2(10.1, 7.18),
    new V2(9.1, 7.55),
    new V2(7.5, 8.03),
    new V2(5.5, 8.54),
    new V2(3.4, 9.02),
    new V2(1.85, 9.38),
    new V2(0.9, 9.58),
    new V2(0.0, 9.68),
  ];
  const roofMat = physical({
    map: makeRoofTexture(),
    color: 0xffffff,
    roughness: 0.56,
    metalness: 0.02,
    clearcoat: 0.34,
    clearcoatRoughness: 0.46,
  });
  const roof = lathe(roofPts, roofMat, 96);
  roof.castShadow = false;
  staticGroup.add(roof);

  // gold ribs on the roof
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * TAU;
    const ribPts = [];
    for (let j = 2; j < roofPts.length; j++) {
      const p = roofPts[j];
      ribPts.push(new V3(Math.cos(a) * (p.x + 0.012), p.y + 0.012, Math.sin(a) * (p.x + 0.012)));
    }
    const rib = tubeFromPoints(ribPts, 0.022, mats.gold, 28, 4);
    rib.castShadow = false;
    staticGroup.add(rib);
  }
  addTorus(staticGroup, 10.57, 0.075, 5, 120, [0, 6.94, 0], mats.gold, [Math.PI / 2, 0, 0]);
  // gilded inlay rings on the painted roof
  addTorus(staticGroup, 8.55, 0.018, 4, 120, [0, 7.76, 0], mats.goldAntique, [Math.PI / 2, 0, 0]);
  addTorus(staticGroup, 3.55, 0.015, 4, 96, [0, 9.02, 0], mats.goldAntique, [Math.PI / 2, 0, 0]);
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * TAU;
    addSphere(staticGroup, 0.055, 7, 5, [Math.cos(a) * 8.55, 7.79, Math.sin(a) * 8.55], mats.goldBright);
  }
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * TAU + 0.09;
    const r = 9.55;
    const med = mesh(new THREE.CircleGeometry(0.17, 20), new THREE.MeshBasicMaterial({ color: 0x1d6566, toneMapped: false }), [Math.cos(a) * r, 7.35, Math.sin(a) * r], [-Math.PI / 2, 0, 0]);
    staticGroup.add(med);
    const ring = addTorus(staticGroup, 0.18, 0.012, 3, 18, [Math.cos(a) * r, 7.36, Math.sin(a) * r], mats.goldBright, [Math.PI / 2, 0, 0]);
    ring.castShadow = false;
  }


  // teal band and painted medallion frieze below roof
  const fasciaMat = new THREE.MeshStandardMaterial({
    map: makeFasciaTexture(), transparent: true, alphaTest: 0.22, side: THREE.DoubleSide,
    roughness: 0.58, metalness: 0.06,
  });
  const fascia = new THREE.Mesh(new THREE.CylinderGeometry(10.55, 10.62, 1.22, 128, 1, true), fasciaMat);
  fascia.position.y = 6.33;
  fascia.castShadow = false;
  fascia.receiveShadow = true;
  staticGroup.add(fascia);

  const medallionTex = makeLotusMedallionTexture();
  const medMat = new THREE.MeshBasicMaterial({ map: medallionTex, transparent: true, toneMapped: false, side: THREE.DoubleSide });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU + Math.PI / 10;
    const g = new THREE.Group();
    g.position.set(Math.cos(a) * 10.635, 6.4, Math.sin(a) * 10.635);
    g.rotation.y = Math.PI / 2 - a;
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.58, 32), medMat);
    disc.position.z = 0.018;
    g.add(disc);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.026, 4, 40), mats.gold);
    ring.position.z = 0.025;
    g.add(ring);
    staticGroup.add(g);
  }

  // crimson swags just inside the scalloped valance
  for (let i = 0; i < 20; i++) {
    const a0 = (i / 20) * TAU + 0.03;
    const a1 = ((i + 1) / 20) * TAU - 0.03;
    const swag = makeSwag(10.32, a0, a1, 6.16, 0.62, mats.wine, mats.goldBright, 0.04);
    swag.position.y = 0;
    staticGroup.add(swag);
  }

  // hanging tassel lanterns under the canopy edge
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU + Math.PI / 8;
    const x = Math.cos(a) * 7.7;
    const z = Math.sin(a) * 7.7;
    const lantern = new THREE.Group();
    lantern.position.set(x, 0, z);
    addCyl(lantern, 0.012, 0.012, 0.5, 4, [0, 6.42, 0], mats.gold, { castShadow: false });
    addCyl(lantern, 0.14, 0.08, 0.1, 10, [0, 6.16, 0], mats.gold);
    const glass = addSphere(lantern, 0.23, 12, 10, [0, 5.9, 0], mats.glass, [1, 1.45, 1]);
    glass.castShadow = false;
    addCyl(lantern, 0.07, 0.12, 0.08, 10, [0, 5.57, 0], mats.gold);
    const tassel = addCyl(lantern, 0.012, 0.095, 0.28, 8, [0, 5.38, 0], mats.wine);
    tassel.castShadow = false;
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: 0xffc27d, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    glow.scale.set(1.4, 1.9, 1);
    glow.position.set(0, 5.9, 0);
    lantern.add(glow);
    staticGroup.add(lantern);
  }

  // painted underside
  const ceilingMat = new THREE.MeshStandardMaterial({ map: makeCeilingTexture(), roughness: 0.72, metalness: 0.06, side: THREE.DoubleSide });
  const ceiling = new THREE.Mesh(new THREE.CircleGeometry(9.15, 128), ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = 6.78;
  ceiling.receiveShadow = true;
  staticGroup.add(ceiling);
  addTorus(staticGroup, 8.98, 0.06, 4, 96, [0, 6.75, 0], mats.gold, [Math.PI / 2, 0, 0]);
  // ceiling ribs
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * TAU;
    const pts = [];
    for (let j = 0; j <= 5; j++) {
      const t = j / 5;
      const r = 0.7 + t * 8.25;
      const y = 6.77 - Math.sin(t * Math.PI) * 0.1;
      pts.push(new V3(Math.cos(a) * r, y, Math.sin(a) * r));
    }
    const rib = tubeFromPoints(pts, 0.018, mats.gold, 20, 3);
    rib.castShadow = false;
    staticGroup.add(rib);
  }
  // central hanging medallion under the ceiling
  const centreMed = new THREE.Mesh(
    new THREE.CircleGeometry(0.7, 40),
    new THREE.MeshBasicMaterial({ map: medallionTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }),
  );
  centreMed.rotation.x = Math.PI / 2;
  centreMed.position.y = 6.7;
  staticGroup.add(centreMed);
  addTorus(staticGroup, 0.7, 0.035, 4, 48, [0, 6.69, 0], mats.gold, [Math.PI / 2, 0, 0]);

  // roof cupola
  const domePts = [
    new V2(0.0, 9.64),
    new V2(0.9, 9.65),
    new V2(1.55, 9.8),
    new V2(1.82, 10.05),
    new V2(1.7, 10.34),
    new V2(1.2, 10.62),
    new V2(0.55, 10.82),
    new V2(0.0, 10.9),
  ];
  const cupolaMat = physical({
    color: PALETTE.wine, roughness: 0.62, clearcoat: 0.25, sheen: 1, sheenColor: new THREE.Color(0xb44450), side: THREE.DoubleSide,
  });
  const cupola = lathe(domePts, cupolaMat, 64);
  cupola.castShadow = false;
  staticGroup.add(cupola);
  addTorus(staticGroup, 1.7, 0.055, 5, 72, [0, 10.03, 0], mats.gold, [Math.PI / 2, 0, 0]);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * TAU;
    const pts = [
      new V3(Math.cos(a) * 1.7, 10.05, Math.sin(a) * 1.7),
      new V3(Math.cos(a) * 1.72, 10.32, Math.sin(a) * 1.72),
      new V3(Math.cos(a) * 1.3, 10.55, Math.sin(a) * 1.3),
      new V3(Math.cos(a) * 0.5, 10.82, Math.sin(a) * 0.5),
      new V3(0, 10.9, 0),
    ];
    const rib = tubeFromPoints(pts, 0.021, mats.gold, 20, 4);
    rib.castShadow = false;
    staticGroup.add(rib);
  }
  addCyl(staticGroup, 0.24, 0.34, 0.28, 12, [0, 10.97, 0], mats.gold);
  addSphere(staticGroup, 0.24, 16, 12, [0, 11.18, 0], mats.goldBright, [0.85, 1.2, 0.85]);
  addCyl(staticGroup, 0.02, 0.05, 0.42, 8, [0, 11.5, 0], mats.gold);
  addSphere(staticGroup, 0.075, 10, 8, [0, 11.75, 0], mats.goldBright);
  addCyl(staticGroup, 0.0, 0.2, 0.42, 8, [0, 11.95, 0], mats.goldBright);
  addSphere(staticGroup, 0.055, 8, 6, [0, 12.22, 0], mats.goldBright);

  makeEntrance(staticGroup, mats);

  // gold rail around the outer landing
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU;
    if (Math.sin(a) > 0.68) continue;
    const x = Math.cos(a) * 12.85;
    const z = Math.sin(a) * 12.85;
    addCyl(staticGroup, 0.028, 0.038, 0.75, 6, [x, 0.375, z], mats.goldAntique);
    addSphere(staticGroup, 0.045, 6, 5, [x, 0.77, z], mats.goldBright);
  }
  const railPts = [];
  for (let i = 0; i <= 88; i++) {
    const a = (-0.15 + (i / 88) * (TAU + 0.3));
    if (Math.sin(a) > 0.68) continue;
    railPts.push(new V3(Math.cos(a) * 12.85, 0.64, Math.sin(a) * 12.85));
  }
  if (railPts.length > 2) {
    // build disconnected rail segments to leave the entrance clear
    let current = [railPts[0]];
    for (let i = 1; i < railPts.length; i++) {
      const prev = railPts[i - 1];
      const p = railPts[i];
      if (prev.distanceTo(p) > 1.2) {
        if (current.length > 2) staticGroup.add(tubeFromPoints(current, 0.018, mats.gold, 24, 3));
        current = [p];
      } else {
        current.push(p);
      }
    }
    if (current.length > 2) staticGroup.add(tubeFromPoints(current, 0.018, mats.gold, 24, 3));
  }

  /* ---------- rotating stage ---------- */
  const rotating = new THREE.Group();
  rotating.position.y = 0;
  root.add(rotating);

  addCyl(rotating, 9.14, 9.22, 0.34, 96, [0, 0.94, 0], mats.stone);
  addTorus(rotating, 9.18, 0.055, 4, 120, [0, 1.09, 0], mats.gold, [Math.PI / 2, 0, 0]);
  const floorMat = new THREE.MeshPhysicalMaterial({
    map: makeFloorTexture(), roughness: 0.36, metalness: 0.05, clearcoat: 0.7, clearcoatRoughness: 0.2,
  });
  const stageFloor = new THREE.Mesh(new THREE.CircleGeometry(9.13, 128), floorMat);
  stageFloor.rotation.x = -Math.PI / 2;
  stageFloor.position.y = 1.115;
  stageFloor.receiveShadow = true;
  rotating.add(stageFloor);

  // under-stage gold skirt
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU;
    const x = Math.cos(a) * 9.12;
    const z = Math.sin(a) * 9.12;
    addCyl(rotating, 0.024, 0.04, 0.2, 5, [x, 1.02, z], mats.gold);
  }

  // central teapot
  const teapot = makeTeapot(mats, makeTeapotTexture());
  teapot.group.position.y = 1.115;
  teapot.group.scale.set(1.38, 1.08, 1.38);
  teapot.group.rotation.y = Math.PI - 0.16;
  rotating.add(teapot.group);

  // cups
  const cups = [];
  const cupRadius = 6.32;
  const saucerMaterial = new THREE.MeshPhysicalMaterial({
    map: makeSaucerTexture(), roughness: 0.3, clearcoat: 0.85, clearcoatRoughness: 0.2,
  });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU - Math.PI / 8;
    const holder = new THREE.Group();
    holder.position.set(Math.cos(a) * cupRadius, 1.12, Math.sin(a) * cupRadius);
    holder.rotation.y = -a;
    const tilt = new THREE.Group();
    holder.add(tilt);
    const spin = new THREE.Group();
    tilt.add(spin);
    const cupTexture = makeCupTexture(i);
    const numberTexture = makeNumberTexture(i + 1);
    const cup = makeCup(i, mats, cupTexture, numberTexture, saucerMaterial);
    spin.add(cup.group);
    rotating.add(holder);
    holder.userData.cupIndex = i;
    cup.group.userData.cupIndex = i;
    cups.push({
      holder, tilt, spin, wheel: cup.wheel, group: cup.group,
      angle: a, index: i,
      localAngle: (i % 2 ? -1 : 1) * 0.12,
      spinAngle: i * 1.7,
      baseDir: i % 2 ? -1 : 1,
      wheelAngle: 0,
    });
  }

  // selection ring
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffdda0, transparent: true, opacity: 0.55, side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  });
  const selectionRing = new THREE.Mesh(new THREE.RingGeometry(1.67, 1.78, 64), ringMat);
  selectionRing.rotation.x = -Math.PI / 2;
  selectionRing.position.y = 1.14;
  rotating.add(selectionRing);
  const selectionHalo = new THREE.Mesh(
    new THREE.RingGeometry(1.69, 1.74, 64),
    new THREE.MeshBasicMaterial({ color: 0xffd27d, transparent: true, opacity: 0.2, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
  );
  selectionHalo.rotation.x = -Math.PI / 2;
  selectionHalo.position.y = 1.142;
  rotating.add(selectionHalo);

  /* ---------- bulbs ---------- */
  const bulbPositions = [];
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * TAU;
    bulbPositions.push(new V3(Math.cos(a) * 10.78, 7.05, Math.sin(a) * 10.78));
  }
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * TAU;
    bulbPositions.push(new V3(Math.cos(a) * 8.66, 6.62, Math.sin(a) * 8.66));
  }
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * TAU;
    bulbPositions.push(new V3(Math.cos(a) * 10.805, 5.8, Math.sin(a) * 10.805));
  }
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU;
    bulbPositions.push(new V3(Math.cos(a) * 10.61, 1.31, Math.sin(a) * 10.61));
  }
  // strings between columns
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU + Math.PI / 10;
    for (let j = 1; j < 5; j++) {
      const t = j / 5;
      const a2 = a + t * (TAU / 10);
      bulbPositions.push(new V3(Math.cos(a2) * 9.9, 6.7 - Math.sin(t * Math.PI) * 0.18, Math.sin(a2) * 9.9));
    }
  }
  const lampBulbs = makeLampPosts(staticGroup, mats, glowTex);
  lampBulbs.forEach((p) => bulbPositions.push(p));

  // thin gilded wires behind the two rings of festoon lamps
  for (const yy of [5.8, 7.05]) {
    const pts = [];
    const rr = yy < 6 ? 10.81 : 10.785;
    for (let i = 0; i < 96; i++) {
      const a = (i / 96) * TAU;
      pts.push(new V3(Math.cos(a) * rr, yy + 0.08, Math.sin(a) * rr));
    }
    const wireGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const wire = new THREE.LineLoop(wireGeo, new THREE.LineBasicMaterial({ color: 0x71502a, transparent: true, opacity: 0.55 }));
    root.add(wire);
  }

  const bulbGeo = new THREE.SphereGeometry(0.082, 8, 6);
  const bulbField = new THREE.InstancedMesh(bulbGeo, mats.bulb, bulbPositions.length);
  const dummy = new THREE.Object3D();
  bulbPositions.forEach((p, i) => {
    dummy.position.copy(p);
    dummy.scale.setScalar(i % 7 === 0 ? 1.18 : 1);
    dummy.updateMatrix();
    bulbField.setMatrixAt(i, dummy.matrix);
  });
  bulbField.instanceMatrix.needsUpdate = true;
  root.add(bulbField);

  const glowPositions = new Float32Array(bulbPositions.length * 3);
  bulbPositions.forEach((p, i) => {
    glowPositions[i * 3] = p.x;
    glowPositions[i * 3 + 1] = p.y;
    glowPositions[i * 3 + 2] = p.z;
  });
  const glowGeo = new THREE.BufferGeometry();
  glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
  const glowMat = new THREE.PointsMaterial({
    map: glowTex, color: 0xffc986, size: 1.02, transparent: true, opacity: 0.78,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, toneMapped: false,
  });
  const bulbGlow = new THREE.Points(glowGeo, glowMat);
  root.add(bulbGlow);

  /* ---------- petals & steam ---------- */
  const petalTex = petalTexture();
  const petalCount = isMobile ? 55 : 90;
  const petalPos = new Float32Array(petalCount * 3);
  const petalMeta = [];
  for (let i = 0; i < petalCount; i++) {
    const a = Math.random() * TAU;
    const r = 2 + Math.random() * 15;
    petalPos[i * 3] = Math.cos(a) * r;
    petalPos[i * 3 + 1] = 1.5 + Math.random() * 8;
    petalPos[i * 3 + 2] = Math.sin(a) * r;
    petalMeta.push({ speed: 0.12 + Math.random() * 0.2, drift: 0.25 + Math.random() * 0.5, phase: Math.random() * TAU, baseY: 1.5 + Math.random() * 8 });
  }
  const petalGeo = new THREE.BufferGeometry();
  petalGeo.setAttribute('position', new THREE.BufferAttribute(petalPos, 3));
  const petalMat = new THREE.PointsMaterial({
    map: petalTex, color: 0xffd9cf, size: 0.22, transparent: true, opacity: 0.55,
    depthWrite: false, alphaTest: 0.08, sizeAttenuation: true,
  });
  const petals = new THREE.Points(petalGeo, petalMat);
  petals.frustumCulled = false;
  root.add(petals);

  // steam at the spout
  const steamCount = 26;
  const steamPos = new Float32Array(steamCount * 3);
  const steamMeta = [];
  for (let i = 0; i < steamCount; i++) {
    steamMeta.push({ t: Math.random(), speed: 0.09 + Math.random() * 0.08, sway: Math.random() * TAU });
  }
  const steamGeo = new THREE.BufferGeometry();
  steamGeo.setAttribute('position', new THREE.BufferAttribute(steamPos, 3));
  const steamMat = new THREE.PointsMaterial({
    map: glowTex, color: 0xfff7e6, size: 0.34, transparent: true, opacity: 0.22,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, toneMapped: false,
  });
  const steam = new THREE.Points(steamGeo, steamMat);
  steam.frustumCulled = false;
  teapot.group.add(steam);
  const spoutTip = new V3(2.12, 2.96, 0);

  if (parkMode) {
    const envMap = makeParkEnvironmentMap(renderer);
    if (envMap) {
      root.traverse((obj) => {
        const material = obj.material;
        if (!material) return;
        const list = Array.isArray(material) ? material : [material];
        list.forEach((mat) => {
          if (mat.isMeshStandardMaterial) {
            mat.envMap = envMap;
            mat.envMapIntensity = 0.68;
            mat.needsUpdate = true;
          }
        });
      });
    }
  }

  /* ---------- mood ---------- */
  const MOODS = {
    day: {
      top: new THREE.Color(0x88b2c3),
      bottom: new THREE.Color(0xf7e4c2),
      fog: new THREE.Color(0xe7d4b5),
      hemiSky: new THREE.Color(0xb8d1db),
      hemiGround: new THREE.Color(0x6f5942),
      key: new THREE.Color(0xffe0ad),
      fill: new THREE.Color(0xc7dce4),
      hemiIntensity: 0.47,
      keyIntensity: 1.72,
      fillIntensity: 0.16,
      innerIntensity: 11,
      frontIntensity: 5,
      exposure: 0.79,
      bloom: 0.24,
      glowOpacity: 0.44,
      bulbColor: new THREE.Color(0xffe7b6),
      skyIntensity: 1.0,
      starOpacity: 0,
      celestialColor: new THREE.Color(0xfff2d2),
      celestialOpacity: 0.34,
      fogDensity: 0.0035,
    },
    night: {
      top: new THREE.Color(0x061625),
      bottom: new THREE.Color(0x273b4d),
      fog: new THREE.Color(0x10242e),
      hemiSky: new THREE.Color(0x647f9b),
      hemiGround: new THREE.Color(0x262124),
      key: new THREE.Color(0xaebfe2),
      fill: new THREE.Color(0x557aa4),
      hemiIntensity: 0.36,
      keyIntensity: 0.5,
      fillIntensity: 0.18,
      innerIntensity: 30,
      frontIntensity: 20,
      exposure: 1.06,
      bloom: 0.6,
      glowOpacity: 0.92,
      bulbColor: new THREE.Color(0xffdd9b),
      skyIntensity: 0.34,
      starOpacity: 1,
      celestialColor: new THREE.Color(0xcfe1ff),
      celestialOpacity: 0.72,
      fogDensity: 0.0062,
    },
  };

  let mood = 'day';
  let moodTarget = MOODS.day;
  let ambientTime = 0;
  let platformAngle = 0;
  let platformSpeed = 0.045;
  let platformTarget = 0.045;
  let cupSpeed = 0;
  let cupInput = -1;
  let selected = 0;
  let riding = false;
  let hovered = -1;
  let elapsed = 0;
  let nightFactor = 0;

  const tmpMatrix = new THREE.Matrix4();
  const tmpV = new V3();
  const tmpV2 = new V3();
  const cupWorld = new V3();
  const up = new V3(0, 1, 0);

  function selectCup(index) {
    selected = ((index % 8) + 8) % 8;
    selectionRing.position.x = cups[selected].holder.position.x;
    selectionRing.position.z = cups[selected].holder.position.z;
    selectionHalo.position.x = selectionRing.position.x;
    selectionHalo.position.z = selectionRing.position.z;
    cupSpeed = 0;
    return selected;
  }
  selectCup(0);

  function setRiding(value) {
    riding = value;
    platformTarget = value ? 0.33 : 0.045;
    if (value) {
      cupInput = 0;
      cupSpeed = 0;
    }
  }

  function setMood(name) {
    mood = name;
    moodTarget = MOODS[name] || MOODS.day;
    return mood;
  }

  function spin(dir, amount = 1) {
    cupInput = dir;
    cupSpeed += dir * amount * 1.15;
    cupSpeed = THREE.MathUtils.clamp(cupSpeed, -4.4, 4.4);
  }

  function spinBy(delta) {
    cupSpeed += delta;
    cupSpeed = THREE.MathUtils.clamp(cupSpeed, -4.4, 4.4);
  }

  function update(dt, time, motion = 1, lightLevel = 1) {
    dt = Math.min(dt, 0.05);
    elapsed += dt;
    ambientTime += dt;

    if (!parkMode) {
      // smooth mood
      const k = 1 - Math.exp(-dt * 1.25);
      nightFactor += ((mood === 'night' ? 1 : 0) - nightFactor) * k;
      sky.uniforms.topColor.value.lerp(moodTarget.top, k);
      sky.uniforms.bottomColor.value.lerp(moodTarget.bottom, k);
      sky.uniforms.intensity.value = THREE.MathUtils.lerp(sky.uniforms.intensity.value, moodTarget.skyIntensity, k);
      scene.fog.color.lerp(moodTarget.fog, k);
      scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, moodTarget.fogDensity, k);
      lights.hemi.color.lerp(moodTarget.hemiSky, k);
      lights.hemi.groundColor.lerp(moodTarget.hemiGround, k);
      lights.hemi.intensity = THREE.MathUtils.lerp(lights.hemi.intensity, moodTarget.hemiIntensity, k);
      lights.key.color.lerp(moodTarget.key, k);
      lights.key.intensity = THREE.MathUtils.lerp(lights.key.intensity, moodTarget.keyIntensity, k);
      lights.fill.color.lerp(moodTarget.fill, k);
      lights.fill.intensity = THREE.MathUtils.lerp(lights.fill.intensity, moodTarget.fillIntensity, k);
      lights.inner.intensity = THREE.MathUtils.lerp(lights.inner.intensity, moodTarget.innerIntensity, k);
      lights.front.intensity = THREE.MathUtils.lerp(lights.front.intensity, moodTarget.frontIntensity, k);
      renderer.toneMappingExposure = THREE.MathUtils.lerp(renderer.toneMappingExposure, moodTarget.exposure, k);
      if (bloom) bloom.strength = THREE.MathUtils.lerp(bloom.strength, moodTarget.bloom, k);
      glowMat.opacity = THREE.MathUtils.lerp(glowMat.opacity, moodTarget.glowOpacity, k);
      mats.bulb.color.lerp(moodTarget.bulbColor, k);
      stars.material.opacity = THREE.MathUtils.lerp(stars.material.opacity, moodTarget.starOpacity, k);
      celestial.sprite.material.color.lerp(moodTarget.celestialColor, k);
      celestial.core.material.color.lerp(moodTarget.celestialColor, k);
      celestial.sprite.material.opacity = THREE.MathUtils.lerp(celestial.sprite.material.opacity, moodTarget.celestialOpacity, k);
      celestial.core.material.opacity = THREE.MathUtils.lerp(celestial.core.material.opacity, Math.min(1, moodTarget.celestialOpacity + 0.3), k);
    } else {
      // Follow the park's own day/night light level with a warm, local rig.
      const warm = THREE.MathUtils.clamp(lightLevel, 0, 1);
      const k = 1 - Math.exp(-dt * 1.8);
      lights.inner.intensity = THREE.MathUtils.lerp(lights.inner.intensity, 18 + 64 * warm, k);
      lights.front.intensity = THREE.MathUtils.lerp(lights.front.intensity, 6 + 15 * warm, k);
      glowMat.opacity = THREE.MathUtils.lerp(glowMat.opacity, 0.45 + 0.33 * warm, k);
    }

    // stage motion
    const motionTarget = parkMode
      ? 0.075 * motion
      : platformTarget + (riding ? 0 : 0.004 * Math.sin(ambientTime * 0.35));
    platformSpeed = THREE.MathUtils.damp(platformSpeed, motionTarget, 1.8, dt);
    platformAngle += platformSpeed * dt;
    rotating.rotation.y = platformAngle;

    // cup spin
    if (riding) {
      if (cupInput !== 0) {
        cupSpeed += cupInput * 4.6 * dt;
      }
      cupSpeed *= Math.exp(-0.65 * dt);
    } else {
      cupSpeed *= Math.exp(-2.2 * dt);
    }
    cupSpeed = THREE.MathUtils.clamp(cupSpeed, -4.4, 4.4);

    cups.forEach((cup, i) => {
      const isSelected = i === selected;
      const baseSpin = (0.12 + Math.sin(ambientTime * 0.23 + i * 1.3) * 0.04 + Math.abs(platformSpeed) * 0.12) * (parkMode ? motion * 0.9 : 1);
      const localBase = parkMode
        ? (riding && isSelected ? cupSpeed : cup.baseDir * baseSpin)
        : riding && isSelected
          ? cupSpeed
          : cup.baseDir * baseSpin;
      cup.localSpeed = localBase;
      cup.spinAngle += localBase * dt;
      cup.spin.rotation.y = cup.spinAngle;
      cup.wheelAngle += localBase * dt * 1.35;
      cup.wheel.rotation.y = cup.wheelAngle;
      const lean = Math.min(0.16, Math.abs(localBase) * 0.028 + Math.abs(platformSpeed) * 0.06);
      cup.tilt.rotation.z = THREE.MathUtils.damp(cup.tilt.rotation.z, -lean * Math.sign(localBase || 1), 4.5, dt);
      cup.tilt.rotation.x = Math.sin(ambientTime * 1.7 + i * 1.2) * 0.006;
      cup.spin.position.y = Math.sin(ambientTime * 1.9 + i * 0.8) * 0.006;
    });

    // selection ring follow + breathing
    if (!parkMode) {
      const targetCup = cups[selected];
      selectionRing.position.x = targetCup.holder.position.x;
      selectionRing.position.z = targetCup.holder.position.z;
      selectionHalo.position.x = targetCup.holder.position.x;
      selectionHalo.position.z = targetCup.holder.position.z;
      const pulse = 0.62 + Math.sin(ambientTime * 2.2) * 0.16;
      ringMat.opacity = riding ? 0 : pulse;
      selectionHalo.material.opacity = riding ? 0 : 0.16 + Math.sin(ambientTime * 2.2) * 0.08;
      selectionHalo.rotation.z -= dt * 0.25;
    } else {
      ringMat.opacity = 0;
      selectionHalo.material.opacity = 0;
    }

    // hover highlight subtle
    cups.forEach((cup, i) => {
      if (i === hovered && i !== selected) {
        cup.tilt.position.y = Math.sin(ambientTime * 3) * 0.01 + 0.02;
      } else {
        cup.tilt.position.y = 0;
      }
    });

    // steam
    const attr = steam.geometry.attributes.position;
    steamMeta.forEach((s, i) => {
      s.t += dt * s.speed;
      if (s.t > 1) s.t -= 1;
      const t = s.t;
      const rise = t * 2.7;
      attr.array[i * 3] = spoutTip.x + Math.cos(s.sway + t * 8) * 0.06 + t * 0.42;
      attr.array[i * 3 + 1] = spoutTip.y + rise;
      attr.array[i * 3 + 2] = spoutTip.z + Math.sin(s.sway + t * 7) * 0.08 + t * 0.1;
    });
    attr.needsUpdate = true;
    steamMat.opacity = 0.16 + Math.sin(ambientTime * 0.8) * 0.03;

    // falling petals
    const pa = petals.geometry.attributes.position;
    for (let i = 0; i < petalCount; i++) {
      const m = petalMeta[i];
      let y = pa.array[i * 3 + 1] - m.speed * dt;
      if (y < 0.35) {
        y = 9 + Math.random() * 3;
        const a = Math.random() * TAU;
        const r = 2 + Math.random() * 15;
        pa.array[i * 3] = Math.cos(a) * r;
        pa.array[i * 3 + 2] = Math.sin(a) * r;
      }
      pa.array[i * 3 + 1] = y;
      pa.array[i * 3] += Math.sin(ambientTime * 0.7 + m.phase) * m.drift * dt;
      pa.array[i * 3 + 2] += Math.cos(ambientTime * 0.5 + m.phase) * m.drift * dt;
    }
    pa.needsUpdate = true;

    // stars and sun/moon drift
    if (!parkMode) {
      stars.rotation.y += dt * 0.003;
      celestial.sprite.position.y = 40 + Math.sin(ambientTime * 0.08) * 0.25;
      celestial.core.position.copy(celestial.sprite.position);
    }

    // little light flicker
    lights.inner.intensity *= 1 + Math.sin(ambientTime * 7.3) * 0.008 + Math.sin(ambientTime * 17.4) * 0.004;
  }

  function getCupWorldPosition(index, target = new V3()) {
    const cup = cups[index] || cups[selected];
    cup.holder.getWorldPosition(target);
    return target;
  }

  function getCupWorldQuaternion(index, target = new THREE.Quaternion()) {
    const cup = cups[index] || cups[selected];
    cup.holder.getWorldQuaternion(target);
    return target;
  }

  function getCupViewPoint(index, target = new V3()) {
    const cup = cups[index] || cups[selected];
    cup.holder.getWorldPosition(target);
    target.y += 2.18;
    return target;
  }

  function getSelection() {
    return {
      index: selected,
      name: CUP_NAMES[selected],
      shortName: CUP_SHORT[selected],
    };
  }

  function getSpeedRPM() {
    return Math.abs(cupSpeed) * 60 / TAU;
  }

  function getPlatformRPM() {
    return Math.abs(platformSpeed) * 60 / TAU;
  }

  function setSelected(index) {
    return selectCup(index);
  }

  function setHover(index) {
    hovered = index;
  }

  function getCupObjects() {
    return cups.map((c) => c.group);
  }

  function setNight(isNight) {
    setMood(isNight ? 'night' : 'day');
  }

  return {
    root,
    cups,
    lights,
    sky,
    stars,
    environment,
    teapot,
    rotating,
    platformAngle,
    get platformSpeed() { return platformSpeed; },
    get cupSpeed() { return cupSpeed; },
    get nightFactor() { return nightFactor; },
    update,
    selectCup,
    setSelected,
    getSelection,
    setRiding,
    spin,
    spinBy,
    setHover,
    setMood,
    setNight,
    getCupWorldPosition,
    getCupWorldQuaternion,
    getCupViewPoint,
    getCupObjects,
    getSpeedRPM,
    getPlatformRPM,
    get riding() { return riding; },
    get selectedIndex() { return selected; },
    CUP_NAMES,
    CUP_SHORT,
  };
}


