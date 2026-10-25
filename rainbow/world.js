import * as THREE from 'three';

/* ================================================================
   彩虹滑道机 · THE RAINBOW CHUTE
   A Victorian six-lane pleasure slide, built entirely from
   procedural geometry and canvas textures.
   ================================================================ */

export const LANES = [
  { name: '绯红', en: 'CRIMSON', color: 0xc42e37, glow: 0xff7a6c, note: '最轻快的一条。风从耳边掠过时，像有人把晚霞揉成了一条滑梯。', ride: '像一颗刚摘下的樱桃，酸甜、利落、一路带风。' },
  { name: '琥珀', en: 'AMBER', color: 0xcc641d, glow: 0xffb166, note: '午后三点的颜色。滑道里封着一点阳光，越滑越暖。', ride: '落日被装进了滑道，连影子都是暖的。' },
  { name: '鎏金', en: 'GOLDEN', color: 0xd8a01d, glow: 0xffdd7c, note: '最亮的一条。滑道在日光下会泛出细碎金粉，适合第一次滑彩虹的人。', ride: '你正滑过一整条被阳光晒暖的金箔。' },
  { name: '翡翠', en: 'EMERALD', color: 0x2d8a55, glow: 0x7be0a0, note: '树影与薄荷糖的颜色。滑到底部时会有一阵青草味的风。', ride: '像跌进一片会发光的薄荷叶。' },
  { name: '湖蓝', en: 'LAGOON', color: 0x2474a8, glow: 0x7cd6ff, note: '取自习习晚风与星海湖的水色，滑行时最安静。', ride: '一整片湖从你的脚下倒流而过。' },
  { name: '紫晶', en: 'VIOLET', color: 0x5c459c, glow: 0xb9a3ff, note: '夜色最浓时才显出的紫。滑道末端会亮起一小片星屑。', ride: '你把暮色滑成了一条发亮的紫水晶。' },
];

const TOP_Y = 11.75;
const BOTTOM_Y = 0.72;
const TOP_Z = -0.35;
const BOTTOM_Z = 15.6;
const LANE_W = 2.18;
const LANE_CENTERS = [-5.45, -3.27, -1.09, 1.09, 3.27, 5.45];
const X_AXIS = new THREE.Vector3(1, 0, 0);
const TMP = new THREE.Vector3();
const TMP2 = new THREE.Vector3();
const TMP3 = new THREE.Vector3();
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const smoothstep = THREE.MathUtils.smoothstep;
const rand = (a, b) => a + Math.random() * (b - a);

/* ---------------------------------------------------------------- textures */

function canvasTexture(w, h, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function glowTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,244,214,1)');
    g.addColorStop(0.18, 'rgba(255,217,150,.9)');
    g.addColorStop(0.5, 'rgba(255,186,104,.24)');
    g.addColorStop(1, 'rgba(255,170,90,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function starTexture() {
  return canvasTexture(128, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, R = w * 0.45, r = w * 0.12;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const rad = i % 2 === 0 ? R : r;
      const x = cx + Math.cos(a) * rad, y = cy + Math.sin(a) * rad;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    g.addColorStop(0, 'rgba(255,255,246,1)');
    g.addColorStop(0.3, 'rgba(255,234,176,1)');
    g.addColorStop(0.7, 'rgba(255,204,112,.8)');
    g.addColorStop(1, 'rgba(255,190,100,0)');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.globalCompositeOperation = 'lighter';
    const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    halo.addColorStop(0, 'rgba(255,227,159,.55)');
    halo.addColorStop(1, 'rgba(255,200,110,0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, w, h);
  });
}

function cloudTexture() {
  return canvasTexture(256, 128, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const puffs = [
      [0.3, 0.6, 0.24], [0.48, 0.46, 0.3], [0.66, 0.58, 0.23],
      [0.56, 0.7, 0.24], [0.38, 0.72, 0.2], [0.76, 0.68, 0.14], [0.2, 0.7, 0.15],
    ];
    for (const [x, y, r] of puffs) {
      const g = ctx.createRadialGradient(x * w, y * h, 0, x * w, y * h, r * w);
      g.addColorStop(0, 'rgba(255,252,241,.94)');
      g.addColorStop(0.55, 'rgba(255,246,226,.55)');
      g.addColorStop(1, 'rgba(255,240,214,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
  });
}

function plazaTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    ctx.fillStyle = '#e9ddc2';
    ctx.fillRect(0, 0, w, h);
    // stone tiles
    const cx = w / 2, cy = h / 2;
    for (let ring = 0; ring < 9; ring++) {
      const r0 = 70 + ring * 51;
      const n = 16 + ring * 8;
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * Math.PI * 2 + ring * 0.11;
        ctx.beginPath();
        ctx.arc(cx, cy, r0 + 50, a0, a0 + (Math.PI * 2) / n * 0.965);
        ctx.arc(cx, cy, r0, a0 + (Math.PI * 2) / n * 0.965, a0, true);
        ctx.closePath();
        const tone = 231 + ((i + ring) % 3) * 5;
        ctx.fillStyle = `rgb(${tone},${tone - 13},${tone - 42})`;
        ctx.fill();
        ctx.strokeStyle = 'rgba(143,112,65,.16)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
    // gold and teal rings
    [155, 330, 460].forEach((r, i) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = i === 1 ? 'rgba(30,91,89,.48)' : 'rgba(170,126,61,.45)';
      ctx.lineWidth = i === 1 ? 12 : 7;
      ctx.stroke();
    });
    // eight-point star medallions
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const x = cx + Math.cos(a) * 395;
      const y = cy + Math.sin(a) * 395;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(a);
      ctx.strokeStyle = 'rgba(170,126,61,.55)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let i = 0; i < 16; i++) {
        const rr = i % 2 === 0 ? 26 : 10;
        const aa = (i / 16) * Math.PI * 2;
        const px = Math.cos(aa) * rr, py = Math.sin(aa) * rr;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
    // subtle grain
    for (let i = 0; i < 3200; i++) {
      ctx.fillStyle = `rgba(90,75,45,${Math.random() * 0.035})`;
      ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
  });
}

function woodTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#74432c';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 12; i++) {
      const y = (i / 12) * h;
      ctx.fillStyle = i % 2 ? '#7d4930' : '#6d3e29';
      ctx.fillRect(0, y, w, h / 12 - 2);
      ctx.strokeStyle = 'rgba(41,21,14,.45)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y + 3);
      ctx.bezierCurveTo(w * 0.3, y + 7, w * 0.7, y - 5, w, y + 4);
      ctx.stroke();
      for (let k = 0; k < 9; k++) {
        ctx.strokeStyle = `rgba(58,32,20,${0.05 + Math.random() * 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        const yy = y + Math.random() * (h / 12);
        ctx.moveTo(0, yy);
        ctx.bezierCurveTo(w * 0.3, yy + 6, w * 0.6, yy - 4, w, yy + 2);
        ctx.stroke();
      }
    }
  });
}

function signTexture() {
  return canvasTexture(1024, 300, (ctx, w, h) => {
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#164846');
    bg.addColorStop(0.55, '#103a3a');
    bg.addColorStop(1, '#0a2a2b');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(234,198,126,.85)';
    ctx.lineWidth = 6;
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.strokeStyle = 'rgba(234,198,126,.32)';
    ctx.lineWidth = 2;
    ctx.strokeRect(34, 34, w - 68, h - 68);
    // corner flourishes
    ctx.strokeStyle = 'rgba(240,208,143,.9)';
    ctx.lineWidth = 4;
    for (const [x, y, sx, sy] of [[48, 48, 1, 1], [w - 48, 48, -1, 1], [48, h - 48, 1, -1], [w - 48, h - 48, -1, -1]]) {
      ctx.beginPath();
      ctx.moveTo(x, y + sy * 38);
      ctx.quadraticCurveTo(x + sx * 12, y + sy * 12, x + sx * 38, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + sx * 16, y + sy * 16, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#e8c57f';
      ctx.fill();
    }
    // rainbow ribbon
    const colors = ['#d84a4f', '#df8a3a', '#e6bc46', '#4d9d6b', '#3685b4', '#735aa8'];
    colors.forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(w / 2, h * 0.46, 108 - i * 9, Math.PI * 1.05, Math.PI * 1.95);
      ctx.strokeStyle = c;
      ctx.lineWidth = 7;
      ctx.globalAlpha = 0.72;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#f8e8c8';
    ctx.font = '600 104px "STKaiti", "KaiTi", "Songti SC", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('彩 虹 滑 道 机', w / 2, h * 0.56);
    ctx.fillStyle = 'rgba(234,198,126,.8)';
    ctx.font = '400 27px "Cormorant Garamond", Georgia, serif';
    ctx.letterSpacing = '9px';
    ctx.fillText('THE RAINBOW CHUTE · ASTRALIA', w / 2, h * 0.83);
    ctx.fillStyle = 'rgba(248,232,200,.5)';
    ctx.font = '400 20px "Cormorant Garamond", Georgia, serif';
    ctx.fillText('N° 09', w / 2, h * 0.16);
  });
}

function fasciaTexture() {
  return canvasTexture(1024, 256, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#f4e5c8');
    g.addColorStop(1, '#e3cfab');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(157,117,57,.55)';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    for (let i = 0; i < 6; i++) {
      const x = (i + 0.5) * (w / 6);
      ctx.save();
      ctx.translate(x, h * 0.48);
      ctx.scale(1, 1.28);
      ctx.fillStyle = i % 2 ? 'rgba(27,82,79,.72)' : 'rgba(170,122,57,.75)';
      ctx.font = '86px "Segoe UI Symbol", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚜', 0, 0);
      ctx.restore();
      if (i < 5) {
        ctx.strokeStyle = 'rgba(157,117,57,.34)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo((i + 1) * (w / 6), 24);
        ctx.lineTo((i + 1) * (w / 6), h - 24);
        ctx.stroke();
      }
    }
  });
}

function medallionTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 238, 0, Math.PI * 2);
    const bg = ctx.createRadialGradient(cx, cy - 40, 10, cx, cy, 238);
    bg.addColorStop(0, '#205c57');
    bg.addColorStop(0.7, '#0f3c3b');
    bg.addColorStop(1, '#092c2d');
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.strokeStyle = '#e2bb71';
    ctx.lineWidth = 13;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, 218, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(226,187,113,.45)';
    ctx.lineWidth = 3;
    ctx.stroke();
    // rays
    for (let i = 0; i < 32; i++) {
      const a = (i / 32) * Math.PI * 2;
      const r0 = 120, r1 = i % 2 ? 200 : 210;
      ctx.strokeStyle = i % 2 ? 'rgba(232,197,127,.18)' : 'rgba(232,197,127,.32)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      ctx.stroke();
    }
    // rainbow arcs
    const colors = ['#d8494f', '#de8637', '#e5ba43', '#4d9d6a', '#3482b2', '#6f58a7'];
    colors.forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(cx, cy + 112, 176 - i * 13, Math.PI * 1.07, Math.PI * 1.93);
      ctx.strokeStyle = c;
      ctx.lineWidth = 9;
      ctx.globalAlpha = 0.9;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    // central star
    ctx.save();
    ctx.translate(cx, cy + 20);
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 === 0 ? 68 : 26;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    const sg = ctx.createLinearGradient(0, -60, 0, 60);
    sg.addColorStop(0, '#fff5d8');
    sg.addColorStop(0.6, '#eec979');
    sg.addColorStop(1, '#b9853d');
    ctx.fillStyle = sg;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,245,218,.6)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    // lettering
    ctx.fillStyle = '#f4dfb4';
    ctx.font = '600 44px "STKaiti", "KaiTi", serif';
    ctx.textAlign = 'center';
    ctx.fillText('虹 光', cx, cy - 78);
    ctx.fillStyle = 'rgba(232,197,127,.8)';
    ctx.font = '400 18px Georgia, serif';
    ctx.letterSpacing = '5px';
    ctx.fillText('N° 09', cx, cy + 205);
  });
}

function fleurPanelTexture() {
  return canvasTexture(256, 512, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#174e4c');
    g.addColorStop(1, '#0c3536');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(225,186,112,.65)';
    ctx.lineWidth = 4;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.strokeStyle = 'rgba(225,186,112,.24)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.save();
    ctx.translate(w / 2, h * 0.48);
    ctx.scale(1, 1.3);
    ctx.fillStyle = 'rgba(232,195,122,.9)';
    ctx.font = '118px "Segoe UI Symbol", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚜', 0, 0);
    ctx.restore();
    ctx.fillStyle = 'rgba(244,226,191,.74)';
    ctx.font = '600 17px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('R A I N B O W', w / 2, h * 0.83);
  });
}

function pathTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#d9c9aa';
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 64) {
      for (let x = 0; x < w; x += 64) {
        ctx.fillStyle = (x / 64 + y / 64) % 2 ? 'rgba(255,248,229,.32)' : 'rgba(130,108,73,.08)';
        ctx.fillRect(x + 2, y + 2, 60, 60);
      }
    }
    ctx.strokeStyle = 'rgba(123,96,57,.2)';
    ctx.lineWidth = 2;
    for (let y = 0; y <= h; y += 64) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    for (let x = 0; x <= w; x += 64) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
  });
}

/* ---------------------------------------------------------------- materials */

function makeMaterials() {
  const gold = new THREE.MeshStandardMaterial({ color: 0xd8a64c, metalness: 0.92, roughness: 0.26 });
  const goldHot = new THREE.MeshStandardMaterial({ color: 0xffdf9a, metalness: 0.9, roughness: 0.18, emissive: 0xffb84f, emissiveIntensity: 0.7 });
  const goldDark = new THREE.MeshStandardMaterial({ color: 0x9d6f2d, metalness: 0.86, roughness: 0.36 });
  const teal = new THREE.MeshStandardMaterial({ color: 0x12504e, metalness: 0.5, roughness: 0.36 });
  const tealDark = new THREE.MeshStandardMaterial({ color: 0x0a3334, metalness: 0.45, roughness: 0.44 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xf3e3c5, roughness: 0.8, metalness: 0.02 });
  const creamDark = new THREE.MeshStandardMaterial({ color: 0xe1cda9, roughness: 0.86 });
  const red = new THREE.MeshStandardMaterial({ color: 0xb43d48, roughness: 0.48, metalness: 0.18 });
  const redDark = new THREE.MeshStandardMaterial({ color: 0x7c2834, roughness: 0.55, metalness: 0.16 });
  const white = new THREE.MeshStandardMaterial({ color: 0xf7ecd7, roughness: 0.66 });
  const iron = new THREE.MeshStandardMaterial({ color: 0x1b2a2b, roughness: 0.55, metalness: 0.55 });
  return { gold, goldHot, goldDark, teal, tealDark, cream, creamDark, red, redDark, white, iron };
}

function addBox(parent, w, h, d, x, y, z, material, opts = {}) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  if (opts.cast) mesh.castShadow = true;
  if (opts.receive) mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addCylinder(parent, rTop, rBottom, h, seg, x, y, z, material, opts = {}) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, seg), material);
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  if (opts.cast) mesh.castShadow = true;
  if (opts.receive) mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addSphere(parent, r, seg, x, y, z, material, opts = {}) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, Math.floor(seg / 2))), material);
  mesh.position.set(x, y, z);
  if (opts.sx) mesh.scale.x = opts.sx;
  if (opts.sy) mesh.scale.y = opts.sy;
  if (opts.sz) mesh.scale.z = opts.sz;
  if (opts.cast) mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

function addTorus(parent, r, tube, seg, tubeSeg, x, y, z, material, opts = {}) {
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, tube, tubeSeg, seg), material);
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

function tubeBetween(parent, a, b, r, material, seg = 5) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, seg), material);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  parent.add(mesh);
  return mesh;
}

function addTubeCurve(parent, points, r, material, tubular = 48) {
  const curve = new THREE.CatmullRomCurve3(points);
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, tubular, r, 5, false), material);
  parent.add(mesh);
  return mesh;
}

/* ---------------------------------------------------------------- sky / flags */

function makeSky() {
  const uniforms = {
    uTop: { value: new THREE.Color(0x6a9bb0) },
    uHorizon: { value: new THREE.Color(0xffd9ac) },
    uBottom: { value: new THREE.Color(0x9bbda4) },
    uSun: { value: new THREE.Color(0xffdfae) },
    uSunDir: { value: new THREE.Vector3(0.4, 0.48, 0.75).normalize() },
    uHaze: { value: 0.55 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    toneMapped: false,
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uTop, uHorizon, uBottom, uSun, uSunDir;
      uniform float uHaze;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.7, h));
        col = mix(uBottom, col, smoothstep(-0.22, 0.02, h));
        float sun = max(dot(d, normalize(uSunDir)), 0.0);
        col += uSun * pow(sun, 1400.0) * 4.0;
        col += uSun * pow(sun, 18.0) * 0.17 * uHaze;
        col = mix(col, uHorizon, (1.0 - smoothstep(-0.02, 0.22, h)) * 0.15);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(800, 48, 24), material);
  sky.frustumCulled = false;
  return { sky, uniforms };
}

function makeFlag(width, height, color) {
  const geo = new THREE.PlaneGeometry(width, height, 18, 5);
  geo.translate(width / 2, -height / 2, 0);
  const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(color) },
    uWidth: { value: width },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.DoubleSide,
    transparent: true,
    toneMapped: false,
    vertexShader: `
      uniform float uTime;
      uniform float uWidth;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 p = position;
        float k = clamp(p.x / uWidth, 0.0, 1.0);
        p.z += sin(p.x * 4.2 - uTime * 4.2) * 0.13 * k;
        p.z += sin(p.x * 8.0 + p.y * 7.0 - uTime * 6.1) * 0.035 * k;
        p.y += sin(p.x * 3.0 - uTime * 3.4) * 0.025 * k;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      varying vec2 vUv;
      void main() {
        float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
        gl_FragColor = vec4(uColor * (0.9 + 0.15 * edge), 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(geo, mat);
  return { mesh, uniforms };
}

/* ---------------------------------------------------------------- domes */

function makeOnionDome(parent, { x, y, z, radius, height, colorA, colorB, materialGold, materialDark, segments = 14, ribs = true, yaw = 0 }) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  group.rotation.y = yaw;
  parent.add(group);
  const profile = [
    [0, 0], [radius * 0.48, 0.015], [radius * 0.78, 0.08], [radius * 0.95, 0.2],
    [radius, 0.36], [radius * 0.94, 0.53], [radius * 0.75, 0.68], [radius * 0.48, 0.82],
    [radius * 0.23, 0.92], [radius * 0.07, 0.985], [radius * 0.035, 1.0], [0, 1.01],
  ].map(([r, h]) => new THREE.Vector2(r, h * height));
  const matA = new THREE.MeshStandardMaterial({ color: colorA, roughness: 0.46, metalness: 0.22 });
  const matB = new THREE.MeshStandardMaterial({ color: colorB, roughness: 0.58, metalness: 0.12 });
  for (let i = 0; i < segments; i++) {
    const phiStart = (i / segments) * Math.PI * 2;
    const geo = new THREE.LatheGeometry(profile, Math.max(3, Math.round(40 / segments)), phiStart, (Math.PI * 2 / segments) * 0.965);
    const mesh = new THREE.Mesh(geo, i % 2 ? matA : matB);
    mesh.castShadow = true;
    group.add(mesh);
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.96, radius * 0.035, 6, 40), materialGold);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = height * 0.2;
  group.add(ring);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(radius * 1.01, radius * 1.04, height * 0.16, 24), materialDark);
  base.position.y = height * 0.07;
  group.add(base);
  if (ribs) {
    for (let i = 0; i < segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      const pts = profile.map((v) => new THREE.Vector3(Math.cos(a) * (v.x + 0.02), v.y + 0.02, Math.sin(a) * (v.x + 0.02)));
      const rib = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.038, 4, false), materialGold);
      group.add(rib);
    }
  }
  // finial
  const finialY = height * 1.01;
  addSphere(group, radius * 0.085, 10, 0, finialY + radius * 0.04, 0, materialGold);
  addCylinder(group, radius * 0.018, radius * 0.04, radius * 0.3, 6, 0, finialY + radius * 0.16, 0, materialGold);
  addCone(group, radius * 0.055, radius * 0.17, 6, 0, finialY + radius * 0.31, 0, materialGold);
  return group;
}

function addCone(parent, r, h, seg, x, y, z, material) {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), material);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

/* ---------------------------------------------------------------- world */

export function createRainbowWorld(scene, renderer) {
  const group = new THREE.Group();
  group.name = 'rainbow-chute';
  scene.add(group);

  const M = makeMaterials();
  const woodTex = woodTexture();
  woodTex.wrapS = woodTex.wrapT = THREE.RepeatWrapping;
  woodTex.repeat.set(3, 2);
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.72, metalness: 0.05, color: 0xb98b66 });

  // ---------- ground / plaza
  const lawn = new THREE.Mesh(new THREE.CircleGeometry(600, 96), new THREE.MeshStandardMaterial({ color: 0x8faa76, roughness: 0.98 }));
  lawn.rotation.x = -Math.PI / 2;
  lawn.position.y = -0.04;
  lawn.receiveShadow = true;
  group.add(lawn);

  const plazaMap = plazaTexture();
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(26.5, 96), new THREE.MeshStandardMaterial({ map: plazaMap, roughness: 0.86, metalness: 0.02 }));
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.y = 0.02;
  plaza.receiveShadow = true;
  group.add(plaza);
  addTorus(group, 26.6, 0.22, 96, 6, 0, 0.06, 0, M.creamDark, { rx: Math.PI / 2 });
  addTorus(group, 27.1, 0.08, 96, 5, 0, 0.1, 0, M.gold, { rx: Math.PI / 2 });

  const pathTex = pathTexture();
  pathTex.wrapS = pathTex.wrapT = THREE.RepeatWrapping;
  pathTex.repeat.set(2, 14);
  const path = new THREE.Mesh(new THREE.PlaneGeometry(9, 46), new THREE.MeshStandardMaterial({ map: pathTex, roughness: 0.9 }));
  path.rotation.x = -Math.PI / 2;
  path.position.set(0, 0.035, 38);
  path.receiveShadow = true;
  group.add(path);

  // low hedges around plaza
  const hedgeMat = new THREE.MeshStandardMaterial({ color: 0x45704e, roughness: 0.95 });
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const r = 28.6 + Math.sin(i * 2.1) * 0.5;
    if (Math.abs(a - Math.PI / 2) < 0.17) continue;
    const hedge = new THREE.Mesh(new THREE.IcosahedronGeometry(rand(0.7, 1.15), 1), hedgeMat);
    hedge.position.set(Math.cos(a) * r, 0.5, Math.sin(a) * r);
    hedge.scale.y = 0.75;
    hedge.castShadow = true;
    group.add(hedge);
  }
  const flowerColors = [0xe9bc58, 0xd96161, 0xf4e2d6, 0x8d74b8, 0xe598ba];
  for (let i = 0; i < 90; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = rand(27.3, 30.3);
    if (Math.abs(a - Math.PI / 2) < 0.16) continue;
    const f = new THREE.Mesh(new THREE.SphereGeometry(rand(0.05, 0.11), 5, 4), new THREE.MeshStandardMaterial({ color: flowerColors[i % flowerColors.length], roughness: 0.72, emissive: flowerColors[i % flowerColors.length], emissiveIntensity: 0.08 }));
    f.position.set(Math.cos(a) * r, rand(0.18, 0.55), Math.sin(a) * r);
    group.add(f);
  }

  // ---------- sky, clouds, hills
  const { sky, uniforms: skyU } = makeSky();
  group.add(sky);
  // soft painted cyclorama behind the pavilion, blending from lawn to warm haze
  const cycGeo = new THREE.PlaneGeometry(420, 190, 1, 10);
  const cycPos = cycGeo.attributes.position;
  const cycColors = [];
  for (let i = 0; i < cycPos.count; i++) cycColors.push(0, 0, 0);
  cycGeo.setAttribute('color', new THREE.Float32BufferAttribute(cycColors, 3));
  function paintCyc(bottomHex, midHex, topHex) {
    const cB = new THREE.Color(bottomHex);
    const cM = new THREE.Color(midHex);
    const cT = new THREE.Color(topHex);
    const c = new THREE.Color();
    const arr = cycGeo.attributes.color;
    for (let i = 0; i < cycPos.count; i++) {
      const f = clamp((cycPos.getY(i) + 95) / 190, 0, 1);
      if (f < 0.22) c.copy(cB).lerp(cM, smoothstep(f, 0.0, 0.22));
      else c.copy(cM).lerp(cT, smoothstep(f, 0.22, 0.7));
      arr.setXYZ(i, c.r, c.g, c.b);
    }
    arr.needsUpdate = true;
  }
  paintCyc(0x8faa76, 0xd9dec5, 0xf0e3cc);
  const cyc = new THREE.Mesh(
    cycGeo,
    new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, side: THREE.DoubleSide, toneMapped: false }),
  );
  cyc.position.set(0, 94, -72);
  group.add(cyc);
  scene.fog = new THREE.FogExp2(0xeadfc9, 0.0045);

  const cloudTex = cloudTexture();
  const clouds = [];
  for (let i = 0; i < 11; i++) {
    const mat = new THREE.SpriteMaterial({ map: cloudTex, transparent: true, opacity: rand(0.18, 0.34), depthWrite: false, color: 0xfff3dc, fog: false });
    const sp = new THREE.Sprite(mat);
    const angle = rand(-1.0, 1.0);
    const dist = rand(36, 54);
    sp.position.set(Math.sin(angle) * dist + rand(-24, 24), rand(17, 36), -Math.cos(angle) * dist);
    sp.scale.set(rand(18, 36), rand(10, 19), 1);
    group.add(sp);
    clouds.push({ sp, speed: rand(0.1, 0.3), baseX: sp.position.x, phase: rand(0, 6.28), baseOpacity: mat.opacity });
  }

  // ---------- slide surface
  const slideGroup = new THREE.Group();
  group.add(slideGroup);
  const slideMeshes = [];
  const laneCurves = [];
  const laneMaterials = [];
  const edgeTubes = [];

  function lanePoint(lane, t, out = new THREE.Vector3()) {
    const tt = clamp(t, 0, 1);
    const z = lerp(TOP_Z, BOTTOM_Z, tt) + Math.pow(tt, 3) * 1.4;
    const y = BOTTOM_Y + (TOP_Y - BOTTOM_Y) * (1 - smoothstep(tt, 0.045, 0.95));
    const x = LANE_CENTERS[lane] + Math.sin(tt * Math.PI * 1.35 + lane * 0.24) * 0.18;
    return out.set(x, y, z);
  }
  function laneTangent(lane, t, out = new THREE.Vector3()) {
    const a = lanePoint(lane, Math.max(0, t - 0.004), TMP);
    const b = lanePoint(lane, Math.min(1, t + 0.004), TMP2);
    return out.subVectors(b, a).normalize();
  }
  function laneNormal(lane, t, out = new THREE.Vector3()) {
    laneTangent(lane, t, TMP3);
    return out.crossVectors(TMP3, X_AXIS).normalize();
  }

  function buildLane(lane) {
    const laneDef = LANES[lane];
    const segments = 58;
    const cross = [-1, -0.62, 0, 0.62, 1];
    const lift = [0.3, 0.07, 0.015, 0.07, 0.3];
    const positions = [];
    const uvs = [];
    const indices = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const p = lanePoint(lane, t, new THREE.Vector3());
      const tan = laneTangent(lane, t, new THREE.Vector3());
      const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
      for (let c = 0; c < cross.length; c++) {
        const q = p.clone().addScaledVector(side, cross[c] * LANE_W / 2);
        q.y += lift[c];
        positions.push(q.x, q.y, q.z);
        uvs.push((cross[c] + 1) / 2, t * 8);
      }
    }
    for (let i = 0; i < segments; i++) {
      for (let c = 0; c < cross.length - 1; c++) {
        const a = i * cross.length + c;
        const b = a + 1;
        const d = a + cross.length;
        const e = d + 1;
        indices.push(a, d, b, b, d, e);
      }
    }
    // side skirts
    const base = positions.length / 3;
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const p = lanePoint(lane, t, new THREE.Vector3());
      const tan = laneTangent(lane, t, new THREE.Vector3());
      const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
      for (const s of [-1, 1]) {
        const q = p.clone().addScaledVector(side, s * LANE_W / 2);
        q.y += 0.3;
        positions.push(q.x, q.y, q.z);
        positions.push(q.x, q.y - 0.38, q.z);
        uvs.push(0, t * 8, 1, t * 8);
      }
    }
    for (let i = 0; i < segments; i++) {
      for (let s = 0; s < 2; s++) {
        const a = base + i * 4 + s * 2;
        const b = a + 1;
        const d = a + 4;
        const e = d + 1;
        indices.push(a, b, d, b, e, d);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    const mat = new THREE.MeshPhysicalMaterial({
      color: laneDef.color,
      roughness: 0.22,
      metalness: 0.16,
      clearcoat: 0.5,
      clearcoatRoughness: 0.12,
      sheen: 0.2,
      sheenColor: new THREE.Color(laneDef.glow),
      sheenRoughness: 0.45,
      emissive: new THREE.Color(laneDef.color),
      emissiveIntensity: 0.1,
      side: THREE.DoubleSide,
    });
    laneMaterials[lane] = mat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.lane = lane;
    slideGroup.add(mesh);
    slideMeshes.push(mesh);

    // outer gold rails + dividers
    for (let s = -1; s <= 1; s += 2) {
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const p = lanePoint(lane, t, new THREE.Vector3());
        const tan = laneTangent(lane, t, new THREE.Vector3());
        const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
        p.addScaledVector(side, s * LANE_W / 2);
        p.y += 0.34;
        pts.push(p);
      }
      edgeTubes.push({ mesh: addTubeCurve(slideGroup, pts, 0.075, M.gold, 64), lane });
    }
    // glossy centre strip
    const stripGeo = new THREE.BufferGeometry();
    const sp = [], si = [];
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const p = lanePoint(lane, t, new THREE.Vector3());
      const tan = laneTangent(lane, t, new THREE.Vector3());
      const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
      for (const s of [-0.09, 0.09]) {
        const q = p.clone().addScaledVector(side, s * LANE_W / 2);
        q.y += 0.21;
        sp.push(q.x, q.y, q.z);
      }
    }
    for (let i = 0; i < 40; i++) {
      const a = i * 2;
      si.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
    stripGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    stripGeo.setIndex(si);
    const strip = new THREE.Mesh(stripGeo, new THREE.MeshBasicMaterial({ color: 0xfff8e8, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    slideGroup.add(strip);

    const curve = new THREE.CatmullRomCurve3(Array.from({ length: 64 }, (_, i) => lanePoint(lane, i / 63, new THREE.Vector3())));
    laneCurves[lane] = curve;
  }
  for (let i = 0; i < 6; i++) buildLane(i);
  // raised gold dividers between the six channels
  for (let i = 0; i < 5; i++) {
    const pts = [];
    for (let k = 0; k <= 40; k++) {
      const t = k / 40;
      const p = lanePoint(i, t, new THREE.Vector3());
      const tan = laneTangent(i, t, new THREE.Vector3());
      const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
      p.addScaledVector(side, LANE_W / 2);
      p.y += 0.33;
      pts.push(p);
    }
    const divider = addTubeCurve(slideGroup, pts, 0.055, M.gold, 60);
    edgeTubes.push({ mesh: divider, lane: i });
    edgeTubes.push({ mesh: divider, lane: i + 1 });
  }

  // slide underside ribs
  for (let lane = 0; lane < 6; lane += 2) {
    for (let k = 1; k < 7; k++) {
      const t = k / 7;
      const p = lanePoint(lane, t, new THREE.Vector3());
      const tan = laneTangent(lane, t, new THREE.Vector3());
      const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
      const q = p.clone().addScaledVector(side, 6.4);
      tubeBetween(slideGroup, new THREE.Vector3(-6.4, p.y - 0.7, p.z), new THREE.Vector3(6.4, p.y - 0.7, p.z), 0.09, M.tealDark);
      if (k % 2 === 1) {
        tubeBetween(slideGroup, new THREE.Vector3(0, p.y - 0.6, p.z), new THREE.Vector3(q.x, 0.1, q.z), 0.11, M.goldDark);
      }
    }
  }
  // low support arcade under the ramp sides
  for (let i = 0; i < 4; i++) {
    const z = 3.5 + i * 3.4;
    for (const s of [-1, 1]) {
      addCylinder(group, 0.15, 0.2, 8.4, 6, s * 7.1, 4.2, z, M.teal, { cast: true });
      addCylinder(group, 0.3, 0.34, 0.3, 8, s * 7.1, 0.25, z, M.gold);
    }
  }

  // ---------- lower base & fence
  addBox(group, 22, 0.55, 20, 0, 0.3, 1.6, M.creamDark, { receive: true });
  addBox(group, 21, 0.14, 19, 0, 0.62, 1.6, M.cream);
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const x = Math.cos(a) * 10.4;
    const z = 1.6 + Math.sin(a) * 9.3;
    addCylinder(group, 0.15, 0.18, 0.7, 8, x, 0.7, z, M.gold, { cast: true });
  }

  const fenceZ = 18.4;
  const fenceSegs = [[-11.2, -6.8], [-6.6, -2.8], [2.8, 6.6], [6.8, 11.2]];
  const panelTex = fleurPanelTexture();
  const panelMat = new THREE.MeshStandardMaterial({ map: panelTex, roughness: 0.62, metalness: 0.2, color: 0xffffff, emissive: 0x0d2e2e, emissiveIntensity: 0.1 });
  for (const [x0, x1] of fenceSegs) {
    const width = x1 - x0;
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.28, 1.15), panelMat);
    panel.position.set((x0 + x1) / 2, 0.95, fenceZ);
    group.add(panel);
    addBox(group, width, 0.08, 0.12, (x0 + x1) / 2, 1.58, fenceZ, M.gold);
    addBox(group, width, 0.06, 0.1, (x0 + x1) / 2, 0.35, fenceZ, M.gold);
    addCylinder(group, 0.14, 0.17, 1.5, 8, x0, 0.8, fenceZ, M.teal);
    addSphere(group, 0.12, 8, x0, 1.67, fenceZ, M.gold);
  }
  for (const x of [-11.2, -6.8, -2.8, 2.8, 6.8, 11.2]) {
    addCylinder(group, 0.06, 0.09, 2.9, 6, x, 1.55, fenceZ - 0.1, M.gold);
    const bulbMatLocal = new THREE.MeshStandardMaterial({ color: 0xffebbe, emissive: 0xffca72, emissiveIntensity: 2.2, toneMapped: false });
    addSphere(group, 0.18, 10, x, 3.0, fenceZ - 0.1, bulbMatLocal);
  }

  // entrance sign
  const signTex = signTexture();
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 1.6), new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.55, metalness: 0.18, emissive: 0x123a38, emissiveIntensity: 0.45, side: THREE.DoubleSide }));
  sign.position.set(0, 2.9, fenceZ + 0.08);
  group.add(sign);
  for (const x of [-2.75, 2.75]) addCylinder(group, 0.08, 0.1, 3.5, 5, x, 1.75, fenceZ + 0.03, M.gold);

  // flower planters at bottom
  for (const s of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const x = s * (7.5 + i * 1.4);
      addCylinder(group, 0.65, 0.48, 0.55, 10, x, 0.28, 14.6, M.creamDark);
      const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.65, 1), hedgeMat);
      bush.position.set(x, 0.9, 14.6);
      bush.castShadow = true;
      group.add(bush);
      for (let k = 0; k < 5; k++) {
        const f = new THREE.Mesh(new THREE.SphereGeometry(0.07, 5, 4), new THREE.MeshStandardMaterial({ color: flowerColors[(i + k) % flowerColors.length], roughness: 0.6 }));
        f.position.set(x + rand(-0.4, 0.4), rand(1.0, 1.4), 14.6 + rand(-0.4, 0.4));
        group.add(f);
      }
    }
  }

  // ---------- tower / pavilion
  const tower = new THREE.Group();
  group.add(tower);
  addBox(tower, 18.6, 0.45, 10.2, 0, 11.35, -3.2, M.creamDark, { cast: true });
  addBox(tower, 18.2, 0.12, 9.8, 0, 11.6, -3.2, woodMat, { receive: true });
  addBox(tower, 18.8, 0.24, 10.4, 0, 11.15, -3.2, M.gold);

  const columnXs = [-8.35, -4.3, 4.3, 8.35];
  const columnZs = [0.0, -7.0];
  const columns = [];
  columnXs.forEach((x) => {
    columnZs.forEach((z) => {
      // skip front centre columns, the slide passes through
      if (z === 0 && Math.abs(x) < 5) return;
      const col = new THREE.Group();
      col.position.set(x, 0, z);
      tower.add(col);
      addCylinder(col, 0.29, 0.35, 11.1, 10, 0, 5.7, 0, M.teal, { cast: true });
      addCylinder(col, 0.48, 0.53, 0.35, 10, 0, 0.38, 0, M.gold);
      addCylinder(col, 0.44, 0.48, 0.26, 10, 0, 11.05, 0, M.gold);
      addTorus(col, 0.34, 0.06, 10, 6, 0, 8.0, 0, M.gold, { rx: Math.PI / 2 });
      addSphere(col, 0.36, 10, 0, 0.9, 0, M.gold, { sy: 0.48 });
      columns.push(col);
    });
  });
  // gold arches between columns on the sides/back
  for (const z of columnZs) {
    for (const x of [-6.32, 0, 6.32]) {
      if (z === 0 && Math.abs(x) < 5) continue;
      addTorus(tower, 2.02, 0.1, 24, 6, x, 7.4, z, M.gold, { rz: 0 });
    }
  }
  // cross bracing
  for (const s of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const y0 = 1.3 + i * 3.0;
      tubeBetween(tower, new THREE.Vector3(s * 8.35, y0, 0), new THREE.Vector3(s * 8.35, y0 + 2.9, -7.0), 0.07, M.red);
      tubeBetween(tower, new THREE.Vector3(s * 8.35, y0 + 2.9, 0), new THREE.Vector3(s * 8.35, y0, -7.0), 0.07, M.red);
      tubeBetween(tower, new THREE.Vector3(s * 8.35, y0, -7.0), new THREE.Vector3(s * 4.3, y0 + 2.9, -7.0), 0.065, M.red);
      tubeBetween(tower, new THREE.Vector3(s * 8.35, y0 + 2.9, -7.0), new THREE.Vector3(s * 4.3, y0, -7.0), 0.065, M.red);
    }
  }
  // back wall with arched openings
  const wallShape = new THREE.Shape();
  wallShape.moveTo(-8.4, 0);
  wallShape.lineTo(8.4, 0);
  wallShape.lineTo(8.4, 10.8);
  wallShape.lineTo(-8.4, 10.8);
  wallShape.lineTo(-8.4, 0);
  const archCenters = [-4.9, 0, 4.9];
  for (const x of archCenters) {
    const hole = new THREE.Path();
    hole.moveTo(x - 1.35, 0.9);
    hole.lineTo(x - 1.35, 4.7);
    hole.absarc(x, 4.7, 1.35, Math.PI, 0, true);
    hole.lineTo(x + 1.35, 0.9);
    hole.lineTo(x - 1.35, 0.9);
    wallShape.holes.push(hole);
  }
  const wallGeo = new THREE.ExtrudeGeometry(wallShape, { depth: 0.3, bevelEnabled: false });
  const wall = new THREE.Mesh(wallGeo, M.tealDark);
  wall.position.set(0, 0.55, -7.35);
  wall.castShadow = true;
  tower.add(wall);
  for (const x of archCenters) {
    addTorus(tower, 1.42, 0.08, 24, 6, x, 4.7, -7.2, M.gold, {});
    addBox(tower, 2.9, 0.14, 0.18, x, 0.9, -7.18, M.gold);
  }

  // upper railing around deck
  function railing(parent, points, height = 1.15, spacing = 1.25) {
    let total = 0;
    for (let i = 1; i < points.length; i++) total += points[i].distanceTo(points[i - 1]);
    const count = Math.max(2, Math.ceil(total / spacing));
    const posts = [];
    for (let i = 0; i <= count; i++) {
      const s = i / count;
      const segF = s * (points.length - 1);
      const seg = Math.min(points.length - 2, Math.floor(segF));
      const f = segF - seg;
      const p = new THREE.Vector3().lerpVectors(points[seg], points[seg + 1], f);
      posts.push(p);
      addCylinder(parent, 0.045, 0.055, height, 6, p.x, p.y + height / 2, p.z, M.gold);
    }
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i], b = points[i + 1];
      addBox(parent, a.distanceTo(b), 0.06, 0.06, (a.x + b.x) / 2, a.y + height, (a.z + b.z) / 2, M.gold, { ry: Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2 });
      addBox(parent, a.distanceTo(b), 0.035, 0.035, (a.x + b.x) / 2, a.y + height * 0.52, (a.z + b.z) / 2, M.gold, { ry: Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2 });
    }
    return posts;
  }
  const deckY = 11.66;
  railing(tower, [
    new THREE.Vector3(-9.2, deckY, 1.35),
    new THREE.Vector3(-6.9, deckY, 1.35),
  ]);
  railing(tower, [
    new THREE.Vector3(6.9, deckY, 1.35),
    new THREE.Vector3(9.2, deckY, 1.35),
  ]);
  railing(tower, [
    new THREE.Vector3(-9.2, deckY, 1.35),
    new THREE.Vector3(-9.2, deckY, -7.9),
    new THREE.Vector3(9.2, deckY, -7.9),
    new THREE.Vector3(9.2, deckY, 1.35),
  ], 1.15, 1.4);

  // lane gates
  const gates = [];
  for (let lane = 0; lane < 6; lane++) {
    const x = LANE_CENTERS[lane];
    const z = 0.55;
    for (const s of [-1, 1]) {
      addBox(tower, 0.18, 1.65, 0.22, x + s * 1.02, deckY + 0.82, z, M.teal);
      addBox(tower, 0.28, 0.16, 0.3, x + s * 1.02, deckY + 1.66, z, M.gold);
      addSphere(tower, 0.1, 8, x + s * 1.02, deckY + 1.82, z, M.gold);
    }
    addBox(tower, 2.25, 0.16, 0.18, x, deckY + 1.64, z, M.gold);
    const gate = new THREE.Group();
    gate.position.set(x - 0.98, deckY + 0.32, z);
    tower.add(gate);
    addBox(gate, 1.96, 0.09, 0.09, 0.98, 0.78, 0, M.gold);
    for (let k = 1; k < 4; k++) addBox(gate, 0.055, 0.7, 0.055, k * 0.48, 0.38, 0, M.gold);
    addBox(gate, 1.96, 0.06, 0.06, 0.98, 0.05, 0, M.goldDark);
    addSphere(gate, 0.09, 8, 0.03, 0.78, 0, M.gold);
    const plaqueTex = canvasTexture(128, 128, (ctx, w, h) => {
      ctx.fillStyle = '#0d3435';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#e0b86e';
      ctx.lineWidth = 5;
      ctx.strokeRect(7, 7, w - 14, h - 14);
      ctx.fillStyle = '#f4dfb4';
      ctx.font = '600 62px Georgia, serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(lane + 1).padStart(2, '0'), w / 2, h / 2 + 3);
    });
    const plaque = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.58), new THREE.MeshStandardMaterial({ map: plaqueTex, roughness: 0.6, metalness: 0.2 }));
    plaque.position.set(x, deckY + 1.38, z + 0.12);
    tower.add(plaque);
    gates.push({ group: gate, lane, open: 0, target: 0 });
  }

  // pavilion ring on the roof
  const pavY = 12.0;
  const pavilion = new THREE.Group();
  tower.add(pavilion);
  const pavCols = [];
  for (const x of [-8.6, -4.4, 4.4, 8.6]) {
    for (const z of [-7.3, -3.1, 0.8]) {
      if (z > 0 && Math.abs(x) < 5) continue;
      addCylinder(pavilion, 0.2, 0.26, 3.4, 8, x, pavY + 1.7, z, M.teal, { cast: true });
      addCylinder(pavilion, 0.34, 0.37, 0.22, 8, x, pavY + 0.16, z, M.gold);
      addCylinder(pavilion, 0.31, 0.35, 0.18, 8, x, pavY + 3.35, z, M.gold);
      pavCols.push([x, z]);
    }
  }
  // entablature
  addBox(pavilion, 18.2, 0.5, 9.6, 0, pavY + 3.55, -3.2, M.cream);
  addBox(pavilion, 18.4, 0.12, 9.8, 0, pavY + 3.84, -3.2, M.gold);
  addBox(pavilion, 18.0, 0.22, 9.4, 0, pavY + 3.3, -3.2, M.tealDark);
  const fasciaTex = fasciaTexture();
  const fasciaMat = new THREE.MeshStandardMaterial({ map: fasciaTex, roughness: 0.68, metalness: 0.1, emissive: 0x244a3c, emissiveIntensity: 0.06 });
  for (const [w, x, z, ry] of [[17.6, 0, 1.65, 0], [17.6, 0, -7.75, Math.PI], [9.2, -8.95, -3.05, -Math.PI / 2], [9.2, 8.95, -3.05, Math.PI / 2]]) {
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.86), fasciaMat);
    panel.position.set(x, pavY + 2.9, z);
    panel.rotation.y = ry;
    pavilion.add(panel);
  }

  // central medallion on the front
  const medTex = medallionTexture();
  const medallion = new THREE.Mesh(new THREE.CircleGeometry(1.55, 48), new THREE.MeshStandardMaterial({ map: medTex, transparent: true, roughness: 0.44, metalness: 0.28, emissive: 0x184a45, emissiveIntensity: 0.55, side: THREE.DoubleSide }));
  medallion.position.set(0, pavY + 2.5, 1.78);
  pavilion.add(medallion);
  addTorus(pavilion, 1.62, 0.1, 48, 8, 0, pavY + 2.5, 1.76, M.gold);

  // domes
  makeOnionDome(pavilion, { x: 0, y: pavY + 3.9, z: -3.2, radius: 5.6, height: 5.35, colorA: 0x9f2f38, colorB: 0xf2dfc2, materialGold: M.gold, materialDark: M.redDark, segments: 16 });
  const turretPositions = [
    [-8.3, pavY + 3.8, -7.0], [8.3, pavY + 3.8, -7.0],
    [-8.3, pavY + 3.8, 0.5], [8.3, pavY + 3.8, 0.5],
  ];
  for (const [x, y, z] of turretPositions) {
    addCylinder(pavilion, 1.55, 1.75, 0.65, 10, x, y - 0.3, z, M.creamDark);
    makeOnionDome(pavilion, { x, y, z, radius: 1.55, height: 3.15, colorA: 0xa83742, colorB: 0xf1e1c6, materialGold: M.gold, materialDark: M.redDark, segments: 10 });
  }

  // tall corner finials + flags
  const flags = [];
  function flagPole(parent, x, y, z, height, color, yaw = 0) {
    addCylinder(parent, 0.035, 0.05, height, 6, x, y + height / 2, z, M.gold);
    const { mesh, uniforms } = makeFlag(1.35, 0.52, color);
    mesh.position.set(x, y + height - 0.05, z);
    mesh.rotation.y = yaw;
    parent.add(mesh);
    flags.push(uniforms);
    addSphere(parent, 0.075, 8, x, y + height + 0.04, z, M.gold);
  }
  flagPole(pavilion, 0, pavY + 8.2, -3.2, 2.4, 0xb23640, Math.PI / 4);
  for (const [x, y, z] of turretPositions) flagPole(pavilion, x, y + 2.55, z, 1.35, 0xb23640, rand(-0.4, 0.4));

  // ---------- side stairs
  const stairs = new THREE.Group();
  group.add(stairs);
  const stairData = [];
  for (const s of [-1, 1]) {
    const x = s * 11.6;
    const z0 = 7.6;
    const z1 = -0.2;
    const steps = 32;
    const rise = (TOP_Y - 0.62) / steps;
    const run = (z0 - z1) / steps;
    for (let i = 0; i < steps; i++) {
      const step = addBox(stairs, 2.65, rise + 0.04, run + 0.03, x, 0.62 + (i + 0.5) * rise, z0 - (i + 0.5) * run, M.cream);
      step.castShadow = true;
      step.receiveShadow = true;
    }
    // red runner
    const runner = addBox(stairs, 0.9, 0.03, Math.hypot(z0 - z1, TOP_Y - 0.6), x, (TOP_Y + 0.6) / 2 + 0.04, (z0 + z1) / 2, M.red, { rx: Math.atan2(TOP_Y - 0.6, z0 - z1) });
    runner.castShadow = false;
    // solid staircase spine under the treads
    addBox(stairs, 2.92, 0.7, Math.hypot(z0 - z1, TOP_Y - 0.6), x, (TOP_Y + 0.6) / 2 - 0.43, (z0 + z1) / 2, M.tealDark, { rx: Math.atan2(TOP_Y - 0.6, z0 - z1), cast: true });
    // stringers
    for (const side of [-1.45, 1.45]) {
      const beam = addBox(stairs, 0.22, 0.55, Math.hypot(z0 - z1, TOP_Y - 0.6), x + side, (TOP_Y + 0.6) / 2 - 0.1, (z0 + z1) / 2, M.teal, { rx: Math.atan2(TOP_Y - 0.6, z0 - z1), cast: true });
    }
    // railings / posts
    for (let i = 0; i <= 8; i++) {
      const f = i / 8;
      const z = lerp(z0, z1, f);
      const y = lerp(0.65, TOP_Y, f);
      for (const side of [-1.42, 1.42]) {
        addCylinder(stairs, 0.045, 0.06, 1.05, 6, x + side, y + 0.52, z, M.gold);
        if (i < 8) {
          const z2 = lerp(z0, z1, (i + 1) / 8);
          const y2 = lerp(0.65, TOP_Y, (i + 1) / 8);
          tubeBetween(stairs, new THREE.Vector3(x + side, y + 1.02, z), new THREE.Vector3(x + side, y2 + 1.02, z2), 0.045, M.gold);
        }
      }
      if (i % 2 === 0) addSphere(stairs, 0.13, 8, x + 1.42, y + 1.12, z, M.gold);
    }
    // newel lamps at base
    for (const side of [-1, 1]) {
      addCylinder(stairs, 0.15, 0.2, 2.1, 8, x + side * 1.5, 1.05, z0 + 0.4, M.gold);
      const lampMat = new THREE.MeshStandardMaterial({ color: 0xffedc4, emissive: 0xffcb73, emissiveIntensity: 2.4, toneMapped: false });
      addSphere(stairs, 0.25, 12, x + side * 1.5, 2.25, z0 + 0.4, lampMat);
    }
    // top landing bridge to deck
    addBox(stairs, 3.1, 0.24, 2.4, x - s * 1.2, TOP_Y + 0.02, -1.15, woodMat);
    addBox(stairs, 3.1, 0.12, 2.4, x - s * 1.2, TOP_Y - 0.1, -1.15, M.gold);
    stairData.push({ x, z0, z1 });
  }

  // ---------- side garden pavilions
  for (const s of [-1, 1]) {
    const side = new THREE.Group();
    side.position.set(s * 15.9, 0, 7.0);
    side.scale.setScalar(0.86);
    group.add(side);
    addCylinder(side, 2.35, 2.55, 0.4, 10, 0, 0.2, 0, M.creamDark);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      addCylinder(side, 0.13, 0.18, 3.7, 8, Math.cos(a) * 1.7, 2.25, Math.sin(a) * 1.7, M.teal);
      addCylinder(side, 0.25, 0.28, 0.18, 8, Math.cos(a) * 1.7, 4.12, Math.sin(a) * 1.7, M.gold);
    }
    addCylinder(side, 1.95, 2.0, 0.42, 6, 0, 4.35, 0, M.cream);
    makeOnionDome(side, { x: 0, y: 4.55, z: 0, radius: 2.1, height: 2.8, colorA: 0xb64249, colorB: 0xf2e2c7, materialGold: M.gold, materialDark: M.redDark, segments: 12 });
    flagPole(side, 0, 7.35, 0, 1.15, 0xb23640, Math.PI / 6);
    const bannerMat = new THREE.MeshStandardMaterial({ map: fleurPanelTexture(), roughness: 0.6, side: THREE.DoubleSide });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.8), bannerMat);
    banner.position.set(s * 0.95, 2.4, 1.75);
    banner.rotation.y = -s * 0.35;
    side.add(banner);
  }

  // ---------- bulbs & string lights
  const bulbPositions = [];
  function bulb(x, y, z) { bulbPositions.push(new THREE.Vector3(x, y, z)); }
  // around lower columns
  columnXs.forEach((x) => columnZs.forEach((z) => {
    if (z === 0 && Math.abs(x) < 5) return;
    for (let i = 0; i < 4; i++) bulb(x, 2.2 + i * 2.2, z + 0.42);
  }));
  // under top deck edge
  for (let x = -8.8; x <= 8.8; x += 1.35) bulb(x, 11.0, 1.55);
  // pavilion eaves
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    bulb(Math.cos(a) * 9.0, pavY + 3.95, -3.2 + Math.sin(a) * 4.8);
  }
  // fence and stairs
  for (let x = -11; x <= 11; x += 2.2) if (Math.abs(x) > 3) bulb(x, 1.85, 18.25);
  for (const s of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      const f = i / 8;
      bulb(s * 10.2, lerp(1.3, TOP_Y + 1.3, f), lerp(7.7, 0.0, f));
    }
  }
  const bulbGeo = new THREE.SphereGeometry(0.11, 8, 6);
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff0c8, emissive: 0xffc66c, emissiveIntensity: 2.4, toneMapped: false });
  const bulbMesh = new THREE.InstancedMesh(bulbGeo, bulbMat, bulbPositions.length);
  const dummy = new THREE.Object3D();
  bulbPositions.forEach((p, i) => {
    dummy.position.copy(p);
    dummy.updateMatrix();
    bulbMesh.setMatrixAt(i, dummy.matrix);
  });
  group.add(bulbMesh);

  const glowMat = new THREE.PointsMaterial({
    map: glowTexture(), color: 0xffd18a, size: 1.3, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, toneMapped: false,
  });
  const glowPositions = new Float32Array(bulbPositions.length * 3);
  bulbPositions.forEach((p, i) => { glowPositions[i * 3] = p.x; glowPositions[i * 3 + 1] = p.y; glowPositions[i * 3 + 2] = p.z; });
  const glowGeo = new THREE.BufferGeometry();
  glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
  const glows = new THREE.Points(glowGeo, glowMat);
  group.add(glows);

  // string lights along top deck front
  for (let i = 0; i < 22; i++) {
    const f = i / 21;
    const x = lerp(-8.7, 8.7, f);
    const sag = Math.sin(f * Math.PI) * 0.38;
    const s = addSphere(group, 0.09, 8, x, 14.05 - sag, 1.86, bulbMat);
    s.material = bulbMat;
  }

  // ---------- queue guests
  const guests = [];
  const skin = [0xe4b28b, 0xd39a72, 0x9a6748, 0xf0c9a4];
  const clothes = [0xd55b53, 0xe1a94d, 0x4d8b87, 0x7d6a9e, 0xd9859b, 0x5e8fba, 0xe4d0a8];
  for (let i = 0; i < 12; i++) {
    const g = new THREE.Group();
    const scale = rand(0.86, 1.04);
    g.scale.setScalar(scale);
    const x = i < 6 ? rand(-12.8, -8.2) : rand(8.2, 12.8);
    const z = rand(12.0, 17.2);
    g.position.set(x, 0, z);
    g.rotation.y = rand(-0.7, 0.7);
    group.add(g);
    const cloth = clothes[i % clothes.length];
    addCylinder(g, 0.25, 0.37, 1.1, 7, 0, 1.0, 0, new THREE.MeshStandardMaterial({ color: cloth, roughness: 0.8 }));
    addCylinder(g, 0.1, 0.12, 0.65, 5, -0.11, 0.35, 0, new THREE.MeshStandardMaterial({ color: 0x3b3430, roughness: 0.9 }));
    addCylinder(g, 0.1, 0.12, 0.65, 5, 0.11, 0.35, 0, new THREE.MeshStandardMaterial({ color: 0x3b3430, roughness: 0.9 }));
    addSphere(g, 0.21, 10, 0, 1.72, 0, new THREE.MeshStandardMaterial({ color: skin[i % skin.length], roughness: 0.85 }));
    if (i % 3 === 0) {
      addCylinder(g, 0.34, 0.42, 0.1, 10, 0, 1.94, 0, M.cream);
      addCylinder(g, 0.26, 0.32, 0.18, 10, 0, 2.05, 0, new THREE.MeshStandardMaterial({ color: cloth, roughness: 0.8 }));
    } else {
      addSphere(g, 0.22, 8, 0, 1.9, 0, new THREE.MeshStandardMaterial({ color: 0x6b4a35, roughness: 0.9 }), { sy: 0.45 });
    }
    if (i % 4 === 1) {
      addCylinder(g, 0.008, 0.012, 1.25, 4, 0.6, 1.9, 0, M.gold);
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), new THREE.MeshStandardMaterial({ color: [0xd84d52, 0xe1b247, 0x4c9c98, 0x7f64ac][i % 4], roughness: 0.35, metalness: 0.1 }));
      b.position.set(0.6, 2.5, 0);
      g.add(b);
    }
    guests.push({ group: g, phase: rand(0, 6.28), baseY: 0, baseRot: g.rotation.y });
  }

  // ---------- tokens
  const starTex = starTexture();
  const tokenGroups = [];
  const tokensByLane = [];
  for (let lane = 0; lane < 6; lane++) {
    const tg = new THREE.Group();
    group.add(tg);
    const items = [];
    for (let i = 0; i < 14; i++) {
      const t = 0.12 + i * 0.059;
      const offset = Math.sin(i * 1.7 + lane * 1.2) * 0.52;
      const p = lanePoint(lane, t, new THREE.Vector3());
      const n = laneNormal(lane, t, new THREE.Vector3());
      const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), laneTangent(lane, t, new THREE.Vector3())).normalize();
      p.addScaledVector(n, 1.28).addScaledVector(side, offset);
      const mat = new THREE.SpriteMaterial({ map: starTex, color: LANES[lane].glow, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, opacity: 0.92 });
      const sp = new THREE.Sprite(mat);
      sp.position.copy(p);
      sp.scale.setScalar(0.48);
      sp.userData.base = 0.48;
      sp.userData.phase = i * 0.6 + lane;
      tg.add(sp);
      items.push({ sprite: sp, t, offset, taken: false });
    }
    tg.visible = false;
    tokenGroups[lane] = tg;
    tokensByLane[lane] = items;
  }

  // ---------- test sleds
  const sleds = [];
  for (let i = 0; i < 4; i++) {
    const lane = (i * 2 + 1) % 6;
    const g = new THREE.Group();
    group.add(g);
    const spriteMat = new THREE.SpriteMaterial({ map: starTex, color: LANES[lane].glow, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const sp = new THREE.Sprite(spriteMat);
    sp.scale.setScalar(1.0);
    g.add(sp);
    const haloMat = new THREE.SpriteMaterial({ map: glowTexture(), color: LANES[lane].glow, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
    const halo = new THREE.Sprite(haloMat);
    halo.scale.setScalar(2.4);
    g.add(halo);
    sleds.push({ group: g, lane, t: i / 4, speed: rand(0.055, 0.075), phase: rand(0, 6.28) });
  }

  // ---------- mist at the bottom
  const mistTex = glowTexture();
  const mists = [];
  for (let i = 0; i < 9; i++) {
    const mat = new THREE.SpriteMaterial({ map: mistTex, color: 0xdff4e7, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false });
    const sp = new THREE.Sprite(mat);
    const s = i % 2 ? 1 : -1;
    sp.position.set(s * rand(6.8, 9.4), 0.65, rand(14.6, 17.6));
    sp.scale.set(rand(2.6, 4.8), rand(1.2, 2.2), 1);
    group.add(sp);
    mists.push({ sp, phase: rand(0, 6.28), baseX: sp.position.x, baseOpacity: mat.opacity });
  }

  // ---------- lights
  const hemi = new THREE.HemisphereLight(0xdfe9d8, 0x7d8a61, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe0b1, 1.6);
  sun.position.set(19, 31, 24);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -34;
  sun.shadow.camera.right = 34;
  sun.shadow.camera.top = 38;
  sun.shadow.camera.bottom = -12;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 90;
  sun.shadow.bias = -0.0006;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xa9d1d0, 0.34);
  fill.position.set(-24, 14, 18);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffc48b, 0.28);
  rim.position.set(-10, 20, -28);
  scene.add(rim);
  const lampWarm = new THREE.PointLight(0xffbd70, 34, 26, 2);
  lampWarm.position.set(0, 8, 12);
  scene.add(lampWarm);
  const lampTop = new THREE.PointLight(0xffd79a, 26, 22, 2);
  lampTop.position.set(0, 15.5, 2);
  scene.add(lampTop);
  const lampStair = new THREE.PointLight(0xffc77d, 18, 16, 2);
  lampStair.position.set(11, 5, 4);
  scene.add(lampStair);

  // environment map
  function makeEnv() {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, '#8cb9cf');
    g.addColorStop(0.46, '#fff0d0');
    g.addColorStop(0.55, '#e2cba6');
    g.addColorStop(1, '#6f7957');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 512);
    const sunG = ctx.createRadialGradient(690, 180, 0, 690, 180, 160);
    sunG.addColorStop(0, 'rgba(255,252,236,1)');
    sunG.addColorStop(0.12, 'rgba(255,235,180,.9)');
    sunG.addColorStop(0.45, 'rgba(255,205,130,.28)');
    sunG.addColorStop(1, 'rgba(255,190,100,0)');
    ctx.fillStyle = sunG;
    ctx.fillRect(450, 0, 480, 380);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const rt = pmrem.fromEquirectangular(tex);
    tex.dispose();
    pmrem.dispose();
    return rt.texture;
  }
  scene.environment = makeEnv();
  scene.environmentIntensity = 0.33;

  // ---------- moods
  const MOODS = [
    {
      name: 'dusk', top: 0x6d9db3, horizon: 0xffd8a8, bottom: 0xe9ddc7, sunColor: 0xffdda6, sunDir: [0.4, 0.42, 0.8],
      hemiSky: 0xdfe7d4, hemiGround: 0x7e8b63, hemiInt: 0.9, sun: 0xffd8a2, sunInt: 1.6, fill: 0.34,
      fog: 0xeadfc9, fogDensity: 0.0045, bulbs: 2.2, glow: 0.75, exposure: 1.0, env: 0.33,
    },
    {
      name: 'day', top: 0x5a9fca, horizon: 0xd7ecf0, bottom: 0xd7e5d6, sunColor: 0xfff4d2, sunDir: [0.3, 0.8, 0.5],
      hemiSky: 0xe8f4ff, hemiGround: 0x8ba778, hemiInt: 1.2, sun: 0xfff2cf, sunInt: 2.05, fill: 0.42,
      fog: 0xd9e4d7, fogDensity: 0.0038, bulbs: 0.35, glow: 0.18, exposure: 1.0, env: 0.4,
    },
    {
      name: 'night', top: 0x07162f, horizon: 0x30536c, bottom: 0x0d2930, sunColor: 0xffe1aa, sunDir: [-0.3, 0.3, 0.9],
      hemiSky: 0x7288b5, hemiGround: 0x24312e, hemiInt: 0.7, sun: 0x9fb1db, sunInt: 0.9, fill: 0.24,
      fog: 0x132b35, fogDensity: 0.0075, bulbs: 2.9, glow: 1.0, exposure: 1.1, env: 0.28,
    },
  ];
  let moodIndex = 0;
  function setMood(i, immediate = true) {
    moodIndex = ((i % MOODS.length) + MOODS.length) % MOODS.length;
    const m = MOODS[moodIndex];
    skyU.uTop.value.setHex(m.top);
    skyU.uHorizon.value.setHex(m.horizon);
    skyU.uBottom.value.setHex(m.bottom);
    skyU.uSun.value.setHex(m.sunColor);
    skyU.uSunDir.value.set(...m.sunDir).normalize();
    hemi.color.setHex(m.hemiSky);
    hemi.groundColor.setHex(m.hemiGround);
    hemi.intensity = m.hemiInt;
    sun.color.setHex(m.sun);
    sun.intensity = m.sunInt;
    fill.intensity = m.fill;
    scene.fog.color.setHex(m.fog);
    scene.fog.density = m.fogDensity;
    bulbMat.emissiveIntensity = m.bulbs;
    glowMat.opacity = m.glow;
    lampWarm.intensity = moodIndex === 2 ? 55 : moodIndex === 0 ? 30 : 10;
    lampTop.intensity = moodIndex === 2 ? 44 : moodIndex === 0 ? 24 : 7;
    lampStair.intensity = moodIndex === 2 ? 30 : moodIndex === 0 ? 16 : 4;
    laneMaterials.forEach((mat) => { mat.emissiveIntensity = moodIndex === 2 ? 0.22 : 0.08; });
    if (moodIndex === 2) paintCyc(0x1a3331, 0x102b35, 0x081924);
    else if (moodIndex === 1) paintCyc(0x9bb385, 0xdbe6d8, 0xeaf0ec);
    else paintCyc(0x8faa76, 0xd9dec5, 0xf0e3cc);
    clouds.forEach((c) => {
      c.sp.material.color.setHex(moodIndex === 2 ? 0x708997 : moodIndex === 1 ? 0xfffbf0 : 0xfff0d3);
      c.sp.material.opacity = c.baseOpacity * (moodIndex === 2 ? 0.35 : moodIndex === 1 ? 0.9 : 1.15);
    });
    return m;
  }
  setMood(0);

  // ---------- gate / tokens API
  let activeLane = 2;
  let activeTokensVisible = false;
  function showTokens(lane) {
    tokenGroups.forEach((tg, i) => { tg.visible = i === lane && activeTokensVisible; });
  }
  function activateTokens(lane) {
    activeLane = lane;
    activeTokensVisible = true;
    tokenGroups.forEach((tg, i) => { tg.visible = i === lane; });
    tokensByLane[lane].forEach((tok) => {
      tok.taken = false;
      tok.sprite.visible = true;
      tok.sprite.material.opacity = 1;
    });
  }
  function hideTokens() {
    activeTokensVisible = false;
    tokenGroups.forEach((tg) => { tg.visible = false; });
  }
  function openGate(lane) {
    gates.forEach((g) => { g.target = g.lane === lane ? 1 : 0; });
  }
  function closeGates() { gates.forEach((g) => { g.target = 0; }); }

  function setHover(lane) {
    laneMaterials.forEach((mat, i) => {
      if (i === lane) {
        mat.emissiveIntensity = 0.3;
        mat.clearcoatRoughness = 0.02;
      } else {
        mat.emissiveIntensity = moodIndex === 2 ? 0.22 : 0.08;
        mat.clearcoatRoughness = 0.06;
      }
    });
    edgeTubes.forEach((entry) => {
      entry.mesh.material = entry.lane === lane ? M.goldHot : M.gold;
    });
  }

  const tokenCounter = { count: 0 };
  function collectToken(lane, index) {
    const tok = tokensByLane[lane]?.[index];
    if (!tok || tok.taken) return false;
    tok.taken = true;
    tok.sprite.visible = false;
    tokenCounter.count++;
    return true;
  }

  // ---------- update
  let hoverLane = -1;
  function update(dt, elapsed, state = {}) {
    const tm = state.time ?? elapsed;
    flags.forEach((u, i) => { u.uTime.value = tm + i * 0.7; });
    clouds.forEach((c) => {
      c.sp.position.x = c.baseX + Math.sin(tm * c.speed * 0.12 + c.phase) * 4.2;
      c.sp.position.y += Math.sin(tm * 0.06 + c.phase) * 0.0008;
    });
    // guests shuffle
    guests.forEach((g, i) => {
      g.group.position.y = Math.sin(tm * 1.2 + g.phase) * 0.016;
      g.group.rotation.y = g.baseRot + Math.sin(tm * 0.45 + i) * 0.05;
    });
    // gate animation
    gates.forEach((g) => {
      g.open += (g.target - g.open) * Math.min(1, dt * 3.2);
      g.group.rotation.z = -g.open * 1.35;
    });
    // token bob
    if (activeTokensVisible) {
      tokensByLane[activeLane].forEach((tok) => {
        if (tok.taken) return;
        const s = 0.46 + Math.sin(tm * 3.1 + tok.sprite.userData.phase) * 0.05;
        tok.sprite.scale.setScalar(s);
      });
    }
    // test sleds
    sleds.forEach((s) => {
      s.t += dt * s.speed;
      if (s.t > 1.08) {
        s.t = -0.08;
        s.lane = Math.floor(Math.random() * 6);
      }
      const t = clamp(s.t, 0, 1);
      const p = lanePoint(s.lane, t, new THREE.Vector3());
      const n = laneNormal(s.lane, t, new THREE.Vector3());
      s.group.position.copy(p).addScaledVector(n, 0.7);
      s.group.visible = s.t > 0 && s.t < 1 && !state.hideSleds;
    });
    // mist
    mists.forEach((m) => {
      m.sp.material.opacity = m.baseOpacity * (0.55 + Math.sin(tm * 0.7 + m.phase) * 0.35);
      m.sp.position.x = m.baseX + Math.sin(tm * 0.3 + m.phase) * 0.5;
      m.sp.position.y = 0.7 + Math.sin(tm * 0.5 + m.phase) * 0.12;
    });
    // bulbs breathe
    if (moodIndex !== 1) {
      const pulse = 1 + Math.sin(tm * 1.7) * 0.04;
      bulbMat.emissiveIntensity = (moodIndex === 2 ? 2.9 : 2.2) * pulse;
      glowMat.opacity = (moodIndex === 2 ? 1 : 0.75) * (0.92 + Math.sin(tm * 1.7) * 0.06);
    }
  }

  return {
    group, lanes: LANES, laneCenters: LANE_CENTERS, laneWidth: LANE_W,
    topY: TOP_Y, bottomY: BOTTOM_Y, topZ: TOP_Z, bottomZ: BOTTOM_Z,
    slideMeshes, laneCurves, laneMaterials, gates, flags,
    lanePoint, laneTangent, laneNormal,
    get moodIndex() { return moodIndex; },
    getMoodName() { return MOODS[moodIndex].name; },
    setMood,
    cycleMood() { setMood(moodIndex + 1); return MOODS[moodIndex]; },
    setHover,
    activateTokens, hideTokens, collectToken, tokenCounter,
    openGate, closeGates,
    tokensByLane,
    get activeLane() { return activeLane; },
    setActiveLane(lane) { activeLane = lane; },
    update,
    get focusTarget() { return new THREE.Vector3(0, 8.1, -1); },
  };
}
