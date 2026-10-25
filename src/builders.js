import * as THREE from 'three';

const standardCache = new Map();
const basicCache = new Map();

function materialKey(color, opts) {
  return `${color}|${opts.roughness ?? ''}|${opts.metalness ?? ''}|${opts.emissive ?? ''}|${opts.emissiveIntensity ?? ''}|${opts.flat ?? ''}|${opts.transparent ?? ''}|${opts.opacity ?? ''}|${opts.side ?? ''}|${opts.depthWrite ?? ''}`;
}

export function standard(color, opts = {}) {
  const key = materialKey(color, opts);
  if (standardCache.has(key)) return standardCache.get(key);
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.72,
    metalness: opts.metalness ?? 0.08,
    flatShading: opts.flat ?? false,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    depthWrite: opts.depthWrite ?? true,
    side: opts.side ?? THREE.FrontSide,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
  });
  if (opts.map) mat.map = opts.map;
  standardCache.set(key, mat);
  return mat;
}

export function basic(color, opts = {}) {
  const key = `${color}|${opts.transparent ?? ''}|${opts.opacity ?? ''}|${opts.side ?? ''}|${opts.blending ?? ''}|${opts.map ? 'map' : ''}|${opts.toneMapped ?? ''}`;
  if (basicCache.has(key)) return basicCache.get(key);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    blending: opts.blending ?? THREE.NormalBlending,
    depthWrite: opts.depthWrite ?? true,
    toneMapped: opts.toneMapped ?? true,
    map: opts.map ?? null,
  });
  basicCache.set(key, mat);
  return mat;
}

export function addBox(parent, w, h, d, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    opts.material ?? standard(color, opts),
  );
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

export function addCylinder(parent, radiusTop, radiusBottom, height, radialSegments, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, 1, opts.openEnded ?? false, opts.thetaStart ?? 0, opts.thetaLength ?? Math.PI * 2),
    opts.material ?? standard(color, opts),
  );
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

export function addCone(parent, radius, height, segments, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(
    new THREE.ConeGeometry(radius, height, segments, 1, opts.openEnded ?? false, opts.thetaStart ?? 0, opts.thetaLength ?? Math.PI * 2),
    opts.material ?? standard(color, opts),
  );
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

export function addSphere(parent, radius, segments, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(
    opts.geometry ?? new THREE.SphereGeometry(radius, segments, Math.max(6, Math.round(segments * 0.66))),
    opts.material ?? standard(color, opts),
  );
  mesh.position.set(x, y, z);
  if (opts.sx || opts.sy || opts.sz) mesh.scale.set(opts.sx ?? 1, opts.sy ?? 1, opts.sz ?? 1);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

export function addTorus(parent, radius, tube, radialSeg, tubularSeg, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(
    new THREE.TorusGeometry(radius, tube, radialSeg, tubularSeg, opts.arc ?? Math.PI * 2),
    opts.material ?? standard(color, opts),
  );
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

export function addPlane(parent, w, h, x, y, z, color, opts = {}) {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    opts.material ?? standard(color, opts),
  );
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

export function cylinderBetween(parent, a, b, radius, color, opts = {}) {
  const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, len, opts.segments ?? 6),
    opts.material ?? standard(color, opts),
  );
  mesh.position.copy(mid);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  parent.add(mesh);
  return mesh;
}

export function rectShape(w, h) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, -h / 2);
  shape.lineTo(w / 2, -h / 2);
  shape.lineTo(w / 2, h / 2);
  shape.lineTo(-w / 2, h / 2);
  shape.closePath();
  return shape;
}

export function starShape(outer = 1, inner = 0.42, points = 5) {
  const shape = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

export function addStar(parent, outer, depth, x, y, z, color, opts = {}) {
  const geo = new THREE.ExtrudeGeometry(starShape(outer, outer * 0.43, opts.points ?? 5), {
    depth,
    bevelEnabled: true,
    bevelSize: depth * 0.22,
    bevelThickness: depth * 0.3,
    bevelSegments: 2,
  });
  geo.center();
  const mesh = new THREE.Mesh(geo, opts.material ?? standard(color, { emissive: opts.emissive ?? color, emissiveIntensity: opts.emissiveIntensity ?? 1.3, roughness: 0.4, metalness: 0.45, toneMapped: opts.toneMapped }));
  mesh.position.set(x, y, z);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  if (opts.scale) mesh.scale.setScalar(opts.scale);
  parent.add(mesh);
  return mesh;
}

export function makeTextTexture({
  text = '',
  sub = '',
  width = 1024,
  height = 280,
  bg = null,
  border = null,
  color = '#f6e7c8',
  subColor = '#d9ae66',
  accent = '#f0c46c',
  star = true,
  font = '600 92px "Microsoft YaHei", "PingFang SC", sans-serif',
  subFont = '500 30px "Avenir Next", "Segoe UI", sans-serif',
  letterSpacing = 8,
  radius = 12,
} = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  if (bg) {
    ctx.fillStyle = bg;
    roundRect(ctx, 8, 8, width - 16, height - 16, radius);
    ctx.fill();
  }
  if (border) {
    ctx.strokeStyle = border;
    ctx.lineWidth = 3;
    roundRect(ctx, 18, 18, width - 36, height - 36, Math.max(2, radius - 6));
    ctx.stroke();
  }
  if (star) {
    ctx.fillStyle = accent;
    ctx.font = `400 ${Math.round(height * 0.22)}px Georgia, serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', width * 0.055, height * 0.5);
    ctx.textAlign = 'right';
    ctx.fillText('✦', width * 0.945, height * 0.5);
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  try { ctx.letterSpacing = `${letterSpacing}px`; } catch (e) { /* older canvas */ }
  ctx.shadowColor = 'rgba(255,209,118,.35)';
  ctx.shadowBlur = 24;
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, width / 2, sub ? height * 0.43 : height * 0.53);
  ctx.shadowBlur = 0;
  if (sub) {
    ctx.fillStyle = subColor;
    ctx.font = subFont;
    ctx.fillText(sub, width / 2, height * 0.68);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeSign({
  text, sub, worldWidth = 7, worldHeight = 1.9, ...opts
}) {
  const texture = makeTextTexture({ text, sub, ...opts });
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(worldWidth, worldHeight),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, toneMapped: false, side: THREE.FrontSide, depthWrite: false }),
  );
  return mesh;
}

export function makeClockTexture() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const c = size / 2;
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.translate(c, c);
  const g = ctx.createRadialGradient(0, 0, 40, 0, 0, 245);
  g.addColorStop(0, '#241c26');
  g.addColorStop(0.82, '#171422');
  g.addColorStop(1, '#0a0911');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(0, 0, 246, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#d9b16a'; ctx.lineWidth = 8;
  ctx.beginPath(); ctx.arc(0, 0, 239, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,234,184,.35)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(0, 0, 206, 0, Math.PI * 2); ctx.stroke();
  for (let i = 0; i < 60; i++) {
    const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
    const major = i % 5 === 0;
    ctx.strokeStyle = major ? '#f4d495' : 'rgba(244,212,149,.36)';
    ctx.lineWidth = major ? 6 : 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * (major ? 184 : 195), Math.sin(a) * (major ? 184 : 195));
    ctx.lineTo(Math.cos(a) * 211, Math.sin(a) * 211);
    ctx.stroke();
  }
  ctx.fillStyle = '#f4d495';
  ctx.font = '600 28px Georgia, serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ASTRALIA', 0, -108);
  ctx.font = '400 21px Georgia, serif';
  ctx.fillText('EST. 2026', 0, 112);
  ctx.strokeStyle = '#f6e7c8';
  ctx.lineCap = 'round';
  ctx.lineWidth = 13;
  ctx.beginPath(); ctx.moveTo(0, 18); ctx.lineTo(-66, -70); ctx.stroke();
  ctx.lineWidth = 8;
  ctx.beginPath(); ctx.moveTo(0, 18); ctx.lineTo(92, -110); ctx.stroke();
  ctx.fillStyle = '#d9b16a';
  ctx.beginPath(); ctx.arc(0, 18, 18, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeGlowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.3, 'rgba(255,245,210,.7)');
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

export function seededRandom(seed = 20261025) {
  let t = seed >>> 0;
  return function random() {
    t += 0x6D2B79F5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRibbon(points, width, color, opts = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, z]) => new THREE.Vector3(x, opts.y ?? 0.04, z)), false, 'catmullrom', 0.3);
  const samples = opts.samples ?? 90;
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t);
    const side = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
    const half = width / 2;
    positions.push(p.x + side.x * half, p.y, p.z + side.z * half);
    positions.push(p.x - side.x * half, p.y, p.z - side.z * half);
    uvs.push(0, t * 8, 1, t * 8);
    if (i < samples) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, standard(color, { roughness: 0.94, metalness: 0.01, side: THREE.DoubleSide }));
  mesh.material.side = THREE.DoubleSide;
  return mesh;
}

export function makeCanvasPlaneTexture(draw, width = 512, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext('2d'), width, height);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
