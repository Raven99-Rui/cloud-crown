import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* ================================================================
   BLACKSAIL BAY — procedural world
   Everything here is built from primitives and canvas textures.
   ================================================================ */

const TAU = Math.PI * 2;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;

const COL = {
  navy: 0x143f55,
  navyDeep: 0x0c2c3d,
  teal: 0x1b6168,
  tealDeep: 0x0c3b43,
  tealLight: 0x3f8b89,
  red: 0xa63a2d,
  redDeep: 0x71251f,
  orange: 0xca7942,
  gold: 0xcda052,
  goldLight: 0xefd59a,
  brass: 0x9c6b32,
  wood: 0x7d5638,
  woodDark: 0x3f2b20,
  woodLight: 0xb18457,
  cream: 0xeddbb7,
  bone: 0xe6d4ae,
  black: 0x15171a,
  rope: 0x6f5636,
  stone: 0x837c6d,
  stoneDark: 0x5d5a51,
  sand: 0xd7bd91,
  leaf: 0x3f6541,
  leafLight: 0x78905b,
  leafDark: 0x27493a,
  velvet: 0x8e2d28,
};

let ANISO = 4;

/* ---------------- utils ---------------- */
function canvasTexture(w, h, draw, opts = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = opts.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tex.anisotropy = ANISO;
  if (opts.repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  return tex;
}

function standard(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.72,
    metalness: opts.metalness ?? 0.08,
    flatShading: opts.flat ?? false,
    side: opts.side ?? THREE.FrontSide,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    map: opts.map ?? null,
    alphaTest: opts.alphaTest ?? 0,
    depthWrite: opts.depthWrite ?? true,
    envMapIntensity: opts.envMapIntensity ?? 0.65,
  });
}

function basic(color, opts = {}) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    blending: opts.blending ?? THREE.NormalBlending,
    depthWrite: opts.depthWrite ?? true,
    toneMapped: opts.toneMapped ?? true,
  });
}

function addMesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position[0], position[1], position[2]);
  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  mesh.scale.set(scale[0], scale[1], scale[2]);
  parent.add(mesh);
  return mesh;
}

const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const UNIT_SPHERE = new THREE.SphereGeometry(1, 12, 8);
const UNIT_LOWSPHERE = new THREE.SphereGeometry(1, 8, 6);
const UNIT_CYL = new THREE.CylinderGeometry(1, 1, 1, 12);
const UNIT_CYL6 = new THREE.CylinderGeometry(1, 1, 1, 6);
const UNIT_CONE = new THREE.ConeGeometry(1, 1, 10);

function box(parent, w, h, d, material, x = 0, y = 0, z = 0, ry = 0) {
  return addMesh(parent, UNIT_BOX, material, [x, y, z], [0, ry, 0], [w, h, d]);
}

function sphere(parent, r, material, x, y, z, sx = 1, sy = 1, sz = 1) {
  const m = addMesh(parent, UNIT_SPHERE, material, [x, y, z], [0, 0, 0], [r * sx, r * sy, r * sz]);
  return m;
}

function lowSphere(parent, r, material, x, y, z, sx = 1, sy = 1, sz = 1) {
  return addMesh(parent, UNIT_LOWSPHERE, material, [x, y, z], [0, 0, 0], [r * sx, r * sy, r * sz]);
}

function cyl(parent, rTop, rBottom, h, material, x, y, z, segments = 12) {
  const geo = new THREE.CylinderGeometry(rTop, rBottom, h, segments);
  return addMesh(parent, geo, material, [x, y, z]);
}

function cone(parent, r, h, material, x, y, z, segments = 10) {
  return addMesh(parent, new THREE.ConeGeometry(r, h, segments), material, [x, y, z]);
}

function torus(parent, r, tube, material, x, y, z, rx = Math.PI / 2, ry = 0, rz = 0, seg = 24) {
  return addMesh(parent, new THREE.TorusGeometry(r, tube, 8, seg), material, [x, y, z], [rx, ry, rz]);
}

function beamBetween(parent, a, b, w, d, material, cap = null) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(UNIT_BOX, material);
  mesh.position.copy(a).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize());
  mesh.scale.set(w, len, d);
  parent.add(mesh);
  if (cap) {
    sphere(parent, w * 0.55, cap, a.x, a.y, a.z);
    sphere(parent, w * 0.55, cap, b.x, b.y, b.z);
  }
  return mesh;
}

function tube(parent, points, radius, material, segments = 40, radial = 6, closed = false) {
  const curve = points instanceof THREE.Curve ? points : new THREE.CatmullRomCurve3(points, closed, 'catmullrom', 0.35);
  const geo = new THREE.TubeGeometry(curve, segments, radius, radial, closed);
  return addMesh(parent, geo, material, [0, 0, 0]);
}

function addRopeLine(parent, a, b, color = 0x2b2119, opacity = 0.8) {
  const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
  const line = new THREE.Line(geo, mat);
  parent.add(line);
  return line;
}

function seeded(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* Merge static, opaque detail meshes by material once at load time.
   Animated branches are marked userData.dynamic and left untouched. */
function mergeStaticMeshes(root) {
  if (!root) return 0;
  root.updateWorldMatrix(true, true);
  const rootInverse = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const remove = [];
  let merged = 0;

  function visit(obj) {
    if (obj !== root && obj.userData?.dynamic) return;
    if (obj.isInstancedMesh || obj.isSprite || obj.isLine || obj.isPoints) return;
    if (obj.isMesh) {
      if (obj.children.length > 0) return;
      const geo = obj.geometry;
      if (!geo?.attributes?.position || !geo?.attributes?.normal || !geo?.attributes?.uv) return;
      if (obj.material && Array.isArray(obj.material)) return;
      let prepared;
      try {
        prepared = geo.index ? geo.toNonIndexed() : geo.clone();
      } catch {
        return;
      }
      const attrs = Object.keys(prepared.attributes).sort().join(',');
      const mat = obj.material;
      const key = `${mat.uuid}|${obj.castShadow ? 1 : 0}|${obj.receiveShadow ? 1 : 0}|${attrs}`;
      if (!buckets.has(key)) buckets.set(key, { material: mat, cast: obj.castShadow, receive: obj.receiveShadow, items: [] });
      const m = new THREE.Matrix4().multiplyMatrices(rootInverse, obj.matrixWorld);
      prepared.applyMatrix4(m);
      buckets.get(key).items.push({ obj, geo: prepared });
      return;
    }
    for (const child of [...obj.children]) visit(child);
  }

  visit(root);

  for (const bucket of buckets.values()) {
    if (bucket.items.length < 2) {
      bucket.items.forEach(({ geo }) => geo.dispose());
      continue;
    }
    const mergedGeo = mergeGeometries(bucket.items.map((it) => it.geo), false);
    if (!mergedGeo) {
      bucket.items.forEach(({ geo }) => geo.dispose());
      continue;
    }
    mergedGeo.computeBoundingSphere();
    const mesh = new THREE.Mesh(mergedGeo, bucket.material);
    mesh.castShadow = bucket.cast;
    mesh.receiveShadow = bucket.receive;
    root.add(mesh);
    bucket.items.forEach(({ obj, geo }) => {
      remove.push(obj);
      geo.dispose();
    });
    merged += bucket.items.length;
  }

  for (const obj of remove) {
    if (obj.parent) obj.parent.remove(obj);
  }
  return merged;
}

/* ---------------- textures ---------------- */
function makeHullTexture() {
  return canvasTexture(1024, 512, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#2f6f80');
    grad.addColorStop(0.2, '#225a6c');
    grad.addColorStop(0.68, '#184358');
    grad.addColorStop(1, '#0c3044');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // lacquer grain
    for (let i = 0; i < 900; i++) {
      const x = seeded(i * 3.1) * w;
      const y = seeded(i * 8.7) * h;
      const len = 12 + seeded(i * 2.3) * 100;
      ctx.strokeStyle = seeded(i) > 0.45 ? 'rgba(78,135,145,.09)' : 'rgba(2,18,28,.12)';
      ctx.lineWidth = 1 + seeded(i * 4.2) * 1.3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + len, y + (seeded(i * 1.7) - 0.5) * 5);
      ctx.stroke();
    }

    // horizontal plank seams
    for (let y = 80; y < h; y += 37) {
      ctx.strokeStyle = 'rgba(4,19,28,.33)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y + Math.sin(y) * 2);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(120,170,167,.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, y + 3);
      ctx.lineTo(w, y + 3);
      ctx.stroke();
    }

    // painted red ribbon under the gunwale
    const ribbon = ctx.createLinearGradient(0, 25, 0, 84);
    ribbon.addColorStop(0, '#8f342b');
    ribbon.addColorStop(0.55, '#a94433');
    ribbon.addColorStop(1, '#68251f');
    ctx.fillStyle = ribbon;
    ctx.fillRect(0, 30, w, 45);
    ctx.strokeStyle = 'rgba(234,196,122,.85)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 31);
    ctx.lineTo(w, 31);
    ctx.moveTo(0, 74);
    ctx.lineTo(w, 74);
    ctx.stroke();

    // gold pinline
    ctx.strokeStyle = 'rgba(214,169,89,.5)';
    ctx.lineWidth = 2;
    for (const y of [106, 111]) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // gilded filigree at both ends
    function curl(cx, cy, flip) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(flip, 1);
      ctx.strokeStyle = 'rgba(233,193,113,.66)';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(55, -38, 137, 28, 92, 76);
      ctx.bezierCurveTo(62, 108, 8, 60, 38, 30);
      ctx.bezierCurveTo(52, 15, 78, 30, 66, 44);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(98, 78);
      ctx.bezierCurveTo(144, 104, 170, 48, 130, 19);
      ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255,226,163,.35)';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(24 + i * 14, 48 + i * 6, 2.2, 0, TAU);
        ctx.stroke();
      }
      ctx.restore();
    }
    curl(46, 194, 1);
    curl(978, 194, -1);
    curl(66, 343, 1);
    curl(958, 343, -1);

    // subtle skull watermark near the stern
    ctx.save();
    ctx.globalAlpha = 0.09;
    ctx.fillStyle = '#e9d6ad';
    ctx.beginPath();
    ctx.arc(870, 150, 39, 0, TAU);
    ctx.fill();
    ctx.fillRect(845, 170, 50, 32);
    ctx.fillStyle = '#12384e';
    ctx.beginPath();
    ctx.arc(857, 146, 10, 0, TAU);
    ctx.arc(886, 146, 10, 0, TAU);
    ctx.fill();
    ctx.restore();

    // bottom tar band
    const tar = ctx.createLinearGradient(0, h - 76, 0, h);
    tar.addColorStop(0, 'rgba(4,22,29,0)');
    tar.addColorStop(1, 'rgba(3,18,24,.9)');
    ctx.fillStyle = tar;
    ctx.fillRect(0, h - 80, w, 80);
  });
}

function makeDeckTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#a1744a';
    ctx.fillRect(0, 0, w, h);
    const plank = 54;
    for (let x = 0; x < w; x += plank) {
      const shade = (seeded(x) - 0.5) * 24;
      ctx.fillStyle = `rgb(${154 + shade},${110 + shade},${68 + shade})`;
      ctx.fillRect(x + 2, 0, plank - 3, h);
      ctx.strokeStyle = 'rgba(47,30,18,.38)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
      for (let i = 0; i < 22; i++) {
        const yy = seeded(x * 3 + i) * h;
        ctx.strokeStyle = 'rgba(67,43,24,.12)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + 5, yy);
        ctx.lineTo(x + plank - 8, yy + (seeded(i) - 0.5) * 4);
        ctx.stroke();
      }
    }
    // dark caulking flecks
    for (let i = 0; i < 160; i++) {
      ctx.fillStyle = 'rgba(57,36,20,.16)';
      ctx.fillRect(seeded(i * 2) * w, seeded(i * 5) * h, 2, 1.5);
    }
  }, { repeat: [1, 1] });
}

function makeWoodTexture(base = '#6b4a31') {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 85; i++) {
      const y = (i / 85) * h + (seeded(i) - 0.5) * 7;
      ctx.strokeStyle = seeded(i * 2) > 0.5 ? 'rgba(30,17,9,.2)' : 'rgba(190,146,94,.12)';
      ctx.lineWidth = 0.7 + seeded(i * 7) * 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(w * 0.28, y - 3, w * 0.64, y + 4, w, y - 1);
      ctx.stroke();
    }
    for (let i = 0; i < 10; i++) {
      const x = seeded(i * 4) * w;
      const y = seeded(i * 8) * h;
      ctx.strokeStyle = 'rgba(40,24,12,.3)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(x, y, 12 + seeded(i) * 16, 4, seeded(i * 9) * 3, 0, TAU);
      ctx.stroke();
    }
  }, { repeat: [1.5, 2] });
}

function makePavingTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    ctx.fillStyle = '#b7ae98';
    ctx.fillRect(0, 0, w, h);
    const bg = ctx.createRadialGradient(cx, cy, 20, cx, cy, w * 0.55);
    bg.addColorStop(0, '#cfc1a5');
    bg.addColorStop(0.7, '#b7ac94');
    bg.addColorStop(1, '#9b9b87');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // concentric flagstone courses
    const rings = [106, 168, 238, 318, 402, 478];
    const ringCols = ['#9c9583', '#b6aa91', '#a29b87', '#b0a28a', '#999580', '#b2a58c'];
    rings.forEach((r, ri) => {
      const n = 16 + ri * 5;
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * TAU + (ri % 2) * 0.03;
        const a1 = ((i + 1) / n) * TAU;
        const rr = r;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, a0 + 0.004, a1 - 0.004);
        ctx.arc(cx, cy, rr - 55, a1 - 0.004, a0 + 0.004, true);
        ctx.closePath();
        ctx.fillStyle = i % 5 === 0 ? '#8a8675' : ringCols[ri];
        ctx.fill();
        ctx.strokeStyle = 'rgba(84,77,62,.3)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    });

    // inlaid brass compass rose
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = 'rgba(191,147,75,.92)';
    ctx.fillStyle = 'rgba(17,52,59,.88)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 126, 0, TAU);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, 114, 0, TAU);
    ctx.stroke();
    ctx.fillStyle = 'rgba(211,167,88,.95)';
    for (let i = 0; i < 8; i++) {
      ctx.rotate(TAU / 8);
      ctx.beginPath();
      ctx.moveTo(0, -16);
      ctx.lineTo(20, 0);
      ctx.lineTo(0, -100);
      ctx.lineTo(-20, 0);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = '#ead8b2';
    ctx.beginPath();
    ctx.arc(0, 0, 21, 0, TAU);
    ctx.fill();
    ctx.fillStyle = '#8d5f28';
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, TAU);
    ctx.fill();
    ctx.restore();

    // letters along the outer ring
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = 'rgba(67,68,58,.55)';
    ctx.font = '600 17px "Palatino Linotype", serif';
    ctx.textAlign = 'center';
    const text = 'B L A C K S A I L   B A Y   ·   R I D E   N O . 0 0 4   ·   ';
    const chars = text.split('');
    const radius = 452;
    chars.forEach((ch, i) => {
      const a = (i / chars.length) * TAU - Math.PI / 2;
      ctx.save();
      ctx.rotate(a);
      ctx.translate(0, -radius);
      ctx.fillText(ch, 0, 0);
      ctx.restore();
    });
    ctx.restore();

    // moss and chips
    for (let i = 0; i < 420; i++) {
      const x = seeded(i * 4.3) * w;
      const y = seeded(i * 7.8) * h;
      const a = 0.02 + seeded(i * 2.2) * 0.07;
      ctx.fillStyle = i % 3 === 0 ? `rgba(81,96,63,${a})` : `rgba(48,40,29,${a})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.5 + seeded(i) * 2.5, 0, TAU);
      ctx.fill();
    }
    // outer shadow gradient
    const edge = ctx.createRadialGradient(cx, cy, 380, cx, cy, 520);
    edge.addColorStop(0, 'rgba(57,47,30,0)');
    edge.addColorStop(1, 'rgba(42,35,24,.26)');
    ctx.fillStyle = edge;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeSignTexture() {
  return canvasTexture(1024, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#164b57');
    g.addColorStop(0.55, '#0c333e');
    g.addColorStop(1, '#092932');
    ctx.fillStyle = g;
    ctx.fillRect(14, 14, w - 28, h - 28);
    ctx.strokeStyle = '#b98b48';
    ctx.lineWidth = 7;
    ctx.strokeRect(26, 26, w - 52, h - 52);
    ctx.strokeStyle = 'rgba(236,204,141,.55)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(39, 39, w - 78, h - 78);

    // corner scrolls
    ctx.strokeStyle = 'rgba(232,193,113,.7)';
    ctx.lineWidth = 4;
    const corner = (x, y, sx, sy) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(sx, sy);
      ctx.beginPath();
      ctx.moveTo(0, 68);
      ctx.bezierCurveTo(0, 24, 24, 0, 70, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(16, 54);
      ctx.bezierCurveTo(16, 31, 32, 16, 58, 16);
      ctx.stroke();
      ctx.fillStyle = 'rgba(232,193,113,.7)';
      ctx.beginPath();
      ctx.arc(37, 37, 4, 0, TAU);
      ctx.fill();
      ctx.restore();
    };
    corner(56, 56, 1, 1);
    corner(w - 56, 56, -1, 1);
    corner(56, h - 56, 1, -1);
    corner(w - 56, h - 56, -1, -1);

    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(232,200,136,.72)';
    ctx.font = '500 25px "Palatino Linotype", "Times New Roman", serif';
    ctx.fillText('R I D E   N O .   0 0 4', w / 2, 116);

    const gold = ctx.createLinearGradient(0, 150, 0, 340);
    gold.addColorStop(0, '#fff1cf');
    gold.addColorStop(0.46, '#eacb8b');
    gold.addColorStop(1, '#bc8741');

    // large chinese title, drawn character by character for spacing
    ctx.font = '600 176px "Songti SC", "STSong", "SimSun", serif';
    ctx.fillStyle = gold;
    const glyphs = ['海', '盗', '船'];
    const widths = glyphs.map((ch) => ctx.measureText(ch).width);
    const gap = 38;
    const total = widths.reduce((a, b) => a + b, 0) + gap * (glyphs.length - 1);
    let gx = (w - total) / 2;
    glyphs.forEach((ch, i) => {
      ctx.fillText(ch, gx + widths[i] / 2, 320);
      gx += widths[i] + gap;
    });

    ctx.fillStyle = 'rgba(231,201,141,.78)';
    ctx.font = '500 26px "Palatino Linotype", "Times New Roman", serif';
    ctx.fillText('T H E   B L A C K   S A I L', w / 2, 387);
    ctx.fillStyle = 'rgba(227,196,132,.35)';
    ctx.font = '400 19px "Songti SC", "STSong", serif';
    ctx.fillText('黑 帆 湾  ·  复 古 纸 艺 机 动 游 戏', w / 2, 429);

    // little stars flanking the title
    ctx.fillStyle = 'rgba(236,202,132,.85)';
    for (const sx of [111, w - 111]) {
      ctx.save();
      ctx.translate(sx, 293);
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * TAU - Math.PI / 2;
        const r = i % 2 ? 5 : 13;
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  });
}

function makePlaqueTexture(text = '黑帆号', sub = 'BLACK SAIL') {
  return canvasTexture(640, 220, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(10,40,48,.95)';
    ctx.fillRect(10, 10, w - 20, h - 20);
    ctx.strokeStyle = '#d3a75c';
    ctx.lineWidth = 4;
    ctx.strokeRect(19, 19, w - 38, h - 38);
    ctx.strokeStyle = 'rgba(239,210,154,.35)';
    ctx.lineWidth = 1;
    ctx.strokeRect(28, 28, w - 56, h - 56);
    ctx.textAlign = 'center';
    const gold = ctx.createLinearGradient(0, 50, 0, 130);
    gold.addColorStop(0, '#fff3d4');
    gold.addColorStop(1, '#c6934b');
    ctx.fillStyle = gold;
    ctx.font = '600 74px "Songti SC", "STSong", "SimSun", serif';
    ctx.fillText(text, w / 2, 112);
    ctx.fillStyle = 'rgba(231,200,140,.72)';
    ctx.font = '500 24px "Palatino Linotype", serif';
    ctx.fillText(sub, w / 2, 158);
    ctx.fillStyle = 'rgba(232,199,133,.8)';
    for (const x of [80, w - 80]) {
      ctx.beginPath();
      ctx.moveTo(x, 80);
      ctx.lineTo(x + 12, 90);
      ctx.lineTo(x, 100);
      ctx.lineTo(x - 12, 90);
      ctx.closePath();
      ctx.fill();
    }
  });
}

function makeBannerTexture(background = '#8f2f27') {
  return canvasTexture(512, 1024, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(26, 12);
    ctx.lineTo(w - 26, 12);
    ctx.lineTo(w - 32, 78);
    ctx.lineTo(w - 20, 160);
    ctx.lineTo(w - 38, 260);
    ctx.lineTo(w - 20, 390);
    ctx.lineTo(w - 35, 530);
    ctx.lineTo(w - 14, 670);
    ctx.lineTo(w - 32, 810);
    ctx.lineTo(w - 48, 902);
    ctx.lineTo(w - 130, 944);
    ctx.lineTo(w - 198, 916);
    ctx.lineTo(w - 272, 970);
    ctx.lineTo(w - 338, 922);
    ctx.lineTo(w - 424, 954);
    ctx.lineTo(w - 470, 890);
    ctx.lineTo(w - 486, 742);
    ctx.lineTo(w - 458, 612);
    ctx.lineTo(w - 484, 486);
    ctx.lineTo(w - 454, 372);
    ctx.lineTo(w - 480, 246);
    ctx.lineTo(w - 458, 140);
    ctx.lineTo(w - 484, 68);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, background);
    grad.addColorStop(0.52, background);
    grad.addColorStop(1, '#5f211d');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(224, 178, 91, .65)';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.strokeStyle = 'rgba(232, 192, 110, .48)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(76, 88);
    ctx.lineTo(w - 76, 88);
    ctx.stroke();

    const gold = ctx.createLinearGradient(0, 200, 0, 560);
    gold.addColorStop(0, '#ffe9b3');
    gold.addColorStop(0.6, '#dca958');
    gold.addColorStop(1, '#a8752f');
    ctx.strokeStyle = gold;
    ctx.fillStyle = gold;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(w / 2, 392, 112, 0, TAU);
    ctx.stroke();
    ctx.beginPath();
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU - Math.PI / 2;
      const r = i % 2 === 0 ? 83 : 29;
      const x = w / 2 + Math.cos(a) * r;
      const y = 392 + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();

    // small skull above the compass
    ctx.save();
    ctx.translate(w / 2, 218);
    ctx.fillStyle = '#e8d5af';
    ctx.beginPath();
    ctx.ellipse(0, -4, 39, 44, 0, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(-25, 28, 50, 30, 9);
    ctx.fill();
    ctx.fillStyle = '#4c221d';
    ctx.beginPath();
    ctx.ellipse(-15, -7, 10, 13, -0.1, 0, TAU);
    ctx.ellipse(15, -7, 10, 13, 0.1, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(-6, 22);
    ctx.lineTo(6, 22);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(247, 224, 180, .86)';
    ctx.font = '500 30px "Palatino Linotype", "Times New Roman", serif';
    ctx.fillText('B L A C K   S A I L', w / 2, 590);
    ctx.fillStyle = 'rgba(236, 202, 139, .55)';
    ctx.font = '400 18px "Songti SC", "SimSun", serif';
    ctx.fillText('黑 帆 号 · 1 9 0 8', w / 2, 640);

    for (const y of [712, 764]) {
      ctx.strokeStyle = 'rgba(229, 190, 117, .24)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(104, y);
      ctx.lineTo(w - 104, y);
      ctx.stroke();
    }
  });
}

function makeJollyTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    // tattered flag silhouette
    ctx.beginPath();
    ctx.moveTo(16, 20);
    ctx.lineTo(474, 20);
    ctx.lineTo(492, 72);
    ctx.lineTo(467, 104);
    ctx.lineTo(488, 158);
    ctx.lineTo(455, 190);
    ctx.lineTo(477, 255);
    ctx.lineTo(438, 277);
    ctx.lineTo(458, 343);
    ctx.lineTo(424, 356);
    ctx.lineTo(443, 427);
    ctx.lineTo(394, 434);
    ctx.lineTo(409, 478);
    ctx.lineTo(332, 468);
    ctx.lineTo(297, 491);
    ctx.lineTo(253, 463);
    ctx.lineTo(212, 492);
    ctx.lineTo(169, 466);
    ctx.lineTo(118, 485);
    ctx.lineTo(95, 448);
    ctx.lineTo(41, 455);
    ctx.lineTo(29, 397);
    ctx.lineTo(44, 351);
    ctx.lineTo(19, 313);
    ctx.lineTo(49, 256);
    ctx.lineTo(21, 218);
    ctx.lineTo(44, 168);
    ctx.lineTo(18, 126);
    ctx.lineTo(42, 82);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#11191c');
    grad.addColorStop(0.55, '#0b1114');
    grad.addColorStop(1, '#172125');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(191,155,92,.28)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // crossbones
    ctx.save();
    ctx.translate(256, 300);
    ctx.rotate(0.66);
    ctx.fillStyle = '#e8d9bb';
    ctx.beginPath();
    ctx.roundRect(-116, -17, 232, 34, 17);
    ctx.fill();
    for (const x of [-118, 118]) {
      for (const y of [-20, 20]) {
        ctx.beginPath();
        ctx.arc(x, y, 22, 0, TAU);
        ctx.fill();
      }
    }
    ctx.restore();
    ctx.save();
    ctx.translate(256, 300);
    ctx.rotate(-0.66);
    ctx.fillStyle = '#dccaa9';
    ctx.beginPath();
    ctx.roundRect(-112, -15, 224, 30, 15);
    ctx.fill();
    for (const x of [-114, 114]) {
      for (const y of [-18, 18]) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, TAU);
        ctx.fill();
      }
    }
    ctx.restore();

    // skull
    ctx.save();
    ctx.translate(256, 232);
    ctx.fillStyle = '#f0e3c5';
    ctx.beginPath();
    ctx.ellipse(0, -8, 102, 112, 0, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(-64, 70, 128, 74, 26);
    ctx.fill();
    ctx.fillStyle = '#0e1517';
    ctx.beginPath();
    ctx.ellipse(-40, -14, 28, 34, -0.12, 0, TAU);
    ctx.ellipse(40, -14, 28, 34, 0.12, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, 26);
    ctx.lineTo(-14, 48);
    ctx.lineTo(12, 48);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#8d8069';
    ctx.lineWidth = 4;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 22 - 28, 76);
      ctx.lineTo(i * 22 - 28, 136);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(-30, 110);
    ctx.lineTo(30, 110);
    ctx.stroke();
    ctx.restore();

    // small corner flourish
    ctx.strokeStyle = 'rgba(201,165,99,.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(256, 260, 152, 0.3, Math.PI - 0.3);
    ctx.stroke();
  });
}

function makeSkyEnvTexture() {
  return canvasTexture(1024, 512, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#4b8fa4');
    g.addColorStop(0.34, '#8abcc3');
    g.addColorStop(0.5, '#f0d6aa');
    g.addColorStop(0.56, '#bd9065');
    g.addColorStop(0.76, '#5d5445');
    g.addColorStop(1, '#23352f');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const sun = ctx.createRadialGradient(w * 0.76, h * 0.31, 1, w * 0.76, h * 0.31, 150);
    sun.addColorStop(0, 'rgba(255,250,226,1)');
    sun.addColorStop(0.08, 'rgba(255,229,176,.95)');
    sun.addColorStop(0.3, 'rgba(244,188,112,.34)');
    sun.addColorStop(1, 'rgba(244,188,112,0)');
    ctx.fillStyle = sun;
    ctx.fillRect(0, 0, w, h * 0.55);
  });
}

function makeGlowTexture(inner = 'rgba(255,244,214,1)', outer = 'rgba(255,189,93,0)') {
  return canvasTexture(128, 128, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, inner);
    g.addColorStop(0.18, 'rgba(255,226,167,.75)');
    g.addColorStop(0.5, 'rgba(255,178,84,.22)');
    g.addColorStop(1, outer);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeFoamTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 140; i++) {
      const a = seeded(i) * TAU;
      const r = 165 + seeded(i * 2.4) * 72;
      const x = w / 2 + Math.cos(a) * r;
      const y = h / 2 + Math.sin(a) * r;
      ctx.strokeStyle = `rgba(235,247,235,${0.035 + seeded(i * 8) * 0.16})`;
      ctx.lineWidth = 1 + seeded(i * 3) * 3;
      ctx.beginPath();
      ctx.arc(x, y, 3 + seeded(i * 9) * 18, a, a + 0.5 + seeded(i) * 1.2);
      ctx.stroke();
    }
  });
}

function makeWaterNormal() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    const img = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const nx = Math.sin(x * 0.18 + Math.sin(y * 0.09) * 2.2) * 0.55 + Math.sin(x * 0.41 - y * 0.22) * 0.22;
        const ny = Math.cos(y * 0.16 + Math.sin(x * 0.07) * 1.8) * 0.5 + Math.cos(y * 0.33 + x * 0.12) * 0.24;
        const i = (y * w + x) * 4;
        img.data[i] = 128 + nx * 60;
        img.data[i + 1] = 128 + ny * 60;
        img.data[i + 2] = 255;
        img.data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, { linear: true, repeat: [15, 15] });
}

/* ---------------- little ornament builders ---------------- */
function createSkull(opts = {}) {
  const g = new THREE.Group();
  const bone = opts.material ?? M.bone;
  const dark = opts.eye ?? M.black;
  const s = opts.scale ?? 1;
  const cap = sphere(g, 0.5, bone, 0, 0.18, 0, 1, 1.04, 0.9);
  cap.scale.multiplyScalar(s);
  cap.position.multiplyScalar(s);
  // brow ridge
  const brow = box(g, 0.78, 0.16, 0.3, bone, 0, 0.22, 0.38);
  brow.scale.multiplyScalar(s);
  brow.position.multiplyScalar(s);
  // eye sockets
  for (const side of [-1, 1]) {
    const eye = addMesh(g, UNIT_SPHERE, dark, [side * 0.2 * s, 0.15 * s, 0.38 * s], [0, 0, 0], [0.16 * s, 0.19 * s, 0.1 * s]);
    eye.renderOrder = 1;
  }
  // nose cavity
  addMesh(g, UNIT_CONE, dark, [0, -0.04 * s, 0.44 * s], [Math.PI / 2, 0, 0], [0.09 * s, 0.18 * s, 0.08 * s]);
  // cheekbones
  sphere(g, 0.21 * s, bone, -0.3 * s, -0.05 * s, 0.28 * s, 1, 0.72, 0.76);
  sphere(g, 0.21 * s, bone, 0.3 * s, -0.05 * s, 0.28 * s, 1, 0.72, 0.76);
  // jaw
  box(g, 0.5 * s, 0.3 * s, 0.38 * s, bone, 0, -0.3 * s, 0.14 * s);
  box(g, 0.62 * s, 0.12 * s, 0.3 * s, bone, 0, -0.45 * s, 0.16 * s);
  // teeth
  for (let i = -2; i <= 2; i++) {
    box(g, 0.075 * s, 0.13 * s, 0.07 * s, M.cream, i * 0.09 * s, -0.3 * s, 0.356 * s);
  }
  if (opts.crossbones) {
    for (const dir of [-1, 1]) {
      const bone1 = new THREE.Group();
      const shaft = cyl(bone1, 0.045 * s, 0.045 * s, 1.42 * s, M.bone, 0, 0, 0, 8);
      shaft.rotation.z = Math.PI / 2;
      bone1.rotation.z = dir * 0.65;
      bone1.position.set(0, -0.18 * s, -0.25 * s);
      g.add(bone1);
      for (const x of [-0.7, 0.7]) {
        sphere(bone1, 0.095 * s, M.bone, x * s, 0, 0.02, 1, 0.9, 0.9);
      }
    }
  }
  if (opts.wings) {
    for (const side of [-1, 1]) {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        pts.push(V(side * (0.5 + i * 0.18) * s, (0.32 - i * 0.02) * s, (0.1 - i * 0.02) * s));
      }
      tube(g, pts, 0.035 * s, M.gold, 18, 5);
      for (let i = 0; i < 4; i++) {
        const a = 0.22 + i * 0.2;
        tube(g, [
          V(side * 0.58 * s, 0.28 * s, 0.08 * s),
          V(side * (0.7 + i * 0.17) * s, (0.25 + Math.sin(a) * 0.22) * s, 0.03),
          V(side * (0.86 + i * 0.18) * s, (0.12 + Math.sin(a) * 0.3) * s, -0.01),
        ], 0.022 * s, M.gold, 10, 4);
      }
    }
  }
  g.scale.setScalar(1);
  return g;
}

function createCompassStar(radius = 1, depth = 0.12) {
  const shape = new THREE.Shape();
  const points = 16;
  for (let i = 0; i < points; i++) {
    const a = (i / points) * TAU - Math.PI / 2;
    const r = i % 2 === 0 ? radius : radius * 0.34;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: radius * 0.025,
    bevelThickness: radius * 0.02,
  });
  geo.center();
  const g = new THREE.Group();
  addMesh(g, geo, M.gold);
  torus(g, radius * 0.82, radius * 0.025, M.brass, 0, 0, depth * 0.8, 0, 0, 0, 36);
  sphere(g, radius * 0.09, M.goldLight, 0, 0, depth * 0.62);
  return g;
}

function createWheel(radius = 0.8) {
  const g = new THREE.Group();
  torus(g, radius, radius * 0.07, M.gold, 0, 0, 0, 0, 0, 0, 32);
  torus(g, radius * 0.88, radius * 0.018, M.brass, 0, 0, 0.03, 0, 0, 0, 32);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    const len = radius * 1.2;
    const spoke = new THREE.Mesh(UNIT_BOX, M.gold);
    spoke.position.set(dx * len * 0.38, dy * len * 0.38, 0);
    spoke.rotation.z = a;
    spoke.scale.set(radius * 0.05, len, radius * 0.05);
    g.add(spoke);
    const handle = cyl(g, radius * 0.045, radius * 0.05, radius * 0.33, M.wood, 0, 0, 0, 8);
    handle.position.set(dx * (radius + radius * 0.13), dy * (radius + radius * 0.13), 0);
    handle.rotation.z = a - Math.PI / 2;
    sphere(g, radius * 0.06, M.brass, dx * (radius + radius * 0.3), dy * (radius + radius * 0.3), 0);
  }
  const hub = cyl(g, radius * 0.15, radius * 0.15, radius * 0.19, M.brass, 0, 0, 0, 10);
  hub.rotation.x = Math.PI / 2;
  sphere(g, radius * 0.075, M.goldLight, 0, 0, radius * 0.13);
  return g;
}

function createLantern(scale = 1, glowMaterial = null) {
  const g = new THREE.Group();
  const h = 0.7 * scale;
  cyl(g, 0.08 * scale, 0.12 * scale, 0.08 * scale, M.brass, 0, h * 0.56, 0, 8);
  addMesh(g, new THREE.CylinderGeometry(0.16 * scale, 0.2 * scale, h * 0.62, 6, 1, true), M.brass, [0, 0, 0]);
  const glass = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12 * scale, 0.15 * scale, h * 0.58, 6),
    glowMaterial ?? M.lanternGlass,
  );
  glass.position.y = 0;
  g.add(glass);
  cone(g, 0.23 * scale, 0.18 * scale, M.brass, 0, h * 0.45, 0, 6);
  torus(g, 0.1 * scale, 0.02 * scale, M.brass, 0, h * 0.57, 0, Math.PI / 2, 0, 0, 10);
  sphere(g, 0.035 * scale, M.goldLight, 0, h * 0.62, 0);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex,
    color: 0xffc572,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  glow.scale.setScalar(1.1 * scale);
  g.add(glow);
  g.userData.glow = glow;
  g.userData.glass = glass;
  return g;
}

function createPalm(height = 8, lean = 0.8, twist = 0, leafSeed = 1) {
  const group = new THREE.Group();
  const segments = 8;
  const base = V(0, 0, 0);
  const top = V(lean, height, Math.sin(twist) * lean * 0.7);
  const mid = V(lean * 0.27, height * 0.48, Math.sin(twist + 0.6) * lean * 0.3);
  const curve = new THREE.CatmullRomCurve3([base, mid, V(lean * 0.9, height * 0.92, Math.sin(twist + 0.2) * lean * 0.8), top]);
  const trunk = tube(group, curve, 0.23, M.palmWood, 30, 7);
  trunk.scale.x = 1.05;

  // trunk rings
  for (let i = 1; i < segments; i++) {
    const p = curve.getPoint(i / segments);
    const ring = torus(group, 0.235 - i * 0.008, 0.028, M.palmRing, p.x, p.y, p.z, Math.PI / 2, 0, 0, 10);
    ring.rotation.z = Math.sin(twist + i) * 0.1;
  }

  const crown = new THREE.Group();
  crown.position.copy(top);
  crown.userData.dynamic = true;
  group.add(crown);
  const leafMatA = M.palmLeaf;
  const leafMatB = M.palmLeafLight;

  const leafGeos = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU + twist * 0.7;
    const len = 2.35 + seeded(i + leafSeed) * 1.55;
    const droop = 1.1 + seeded(i * 3 + leafSeed) * 0.95;
    const w = 0.57;
    const segs = 8;
    const pos = [];
    const uv = [];
    const idx = [];
    for (let s = 0; s <= segs; s++) {
      const t = s / segs;
      const x = Math.cos(a) * len * t;
      const z = Math.sin(a) * len * t;
      const y = Math.sin(t * Math.PI * 0.55) * 0.5 - Math.pow(t, 1.7) * droop;
      const width = Math.sin(t * Math.PI) * w * (1 - t * 0.28);
      pos.push(x - Math.sin(a) * width, y, z + Math.cos(a) * width);
      pos.push(x + Math.sin(a) * width, y, z - Math.cos(a) * width);
      uv.push(0, t, 1, t);
      if (s < segs) {
        const b = s * 2;
        idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mat = i % 3 === 0 ? leafMatB : leafMatA;
    const leaf = new THREE.Mesh(geo, mat);
    leaf.castShadow = false;
    leaf.userData.phase = seeded(i * 7 + leafSeed) * TAU;
    crown.add(leaf);
    leafGeos.push(leaf);
    const veinPts = [];
    for (let s = 0; s <= 5; s++) {
      const t = s / 5;
      veinPts.push(V(Math.cos(a) * len * t, Math.sin(t * Math.PI * 0.55) * 0.5 - Math.pow(t, 1.7) * droop + 0.01, Math.sin(a) * len * t));
    }
    tube(crown, veinPts, 0.015, M.palmVein, 10, 4);
  }
  // coconuts
  for (let i = 0; i < 3; i++) {
    const a = i * 2.1 + twist;
    sphere(crown, 0.15, M.coconut, Math.cos(a) * 0.3, -0.2 - i * 0.05, Math.sin(a) * 0.3);
  }
  // small hanging vine
  const vinePts = [];
  for (let i = 0; i < 7; i++) {
    const t = i / 6;
    vinePts.push(V(0.2 + t * 0.1, -t * 1.3, 0.1 + Math.sin(t * 4) * 0.15));
  }
  tube(crown, vinePts, 0.017, M.palmVein, 12, 4);
  group.userData.crown = crown;
  group.userData.leaves = leafGeos;
  return group;
}

function createBarrel(r = 0.34, h = 0.8) {
  const g = new THREE.Group();
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    const bulge = Math.sin(t * Math.PI) * 0.07;
    pts.push(new THREE.Vector2(r + bulge, (t - 0.5) * h));
  }
  const geo = new THREE.LatheGeometry(pts, 16);
  addMesh(g, geo, M.woodBarrel);
  for (const y of [-h * 0.35, h * 0.35]) {
    torus(g, r + 0.04, 0.022, M.iron, 0, y, 0, Math.PI / 2, 0, 0, 18);
  }
  cyl(g, r * 0.7, r * 0.7, 0.03, M.woodBarrel, 0, h * 0.5, 0, 16);
  return g;
}

function createCrate(size = 1) {
  const g = new THREE.Group();
  box(g, size, size * 0.74, size * 0.9, M.crate, 0, 0, 0);
  const bar = M.crateTrim;
  for (const z of [-size * 0.46, size * 0.46]) {
    box(g, size * 1.03, size * 0.09, 0.055, bar, 0, size * 0.28, z);
    box(g, size * 1.03, size * 0.09, 0.055, bar, 0, -size * 0.28, z);
  }
  box(g, size * 0.08, size * 0.76, size * 0.93, bar, -size * 0.48, 0, 0);
  box(g, size * 0.08, size * 0.76, size * 0.93, bar, size * 0.48, 0, 0);
  return g;
}

function createTreasureChest() {
  const g = new THREE.Group();
  box(g, 1.2, 0.52, 0.72, M.woodDarkMat, 0, 0.26, 0);
  box(g, 1.24, 0.12, 0.76, M.brass, 0, 0.51, 0);
  const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 1.2, 16, 1, false, 0, Math.PI), M.woodDarkMat);
  lid.rotation.z = Math.PI / 2;
  lid.rotation.x = Math.PI / 2;
  lid.position.set(0, 0.55, 0);
  lid.scale.z = 0.95;
  g.add(lid);
  for (const x of [-0.45, 0.45]) {
    box(g, 0.1, 0.58, 0.79, M.brass, x, 0.28, 0);
  }
  box(g, 0.15, 0.18, 0.08, M.brass, 0, 0.42, 0.38);
  for (let i = 0; i < 8; i++) {
    const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.018, 10), M.gold);
    coin.position.set(-0.42 + seeded(i) * 0.85, 0.36 + seeded(i * 2) * 0.12, -0.2 + seeded(i * 3) * 0.4);
    coin.rotation.set(seeded(i * 4) * 0.5, 0, seeded(i * 5) * 0.5);
    g.add(coin);
  }
  return g;
}

/* ---------------- materials ---------------- */
const M = {};

function initMaterials() {
  M.navy = standard(COL.navy, { roughness: 0.58, metalness: 0.18 });
  M.navyDeep = standard(COL.navyDeep, { roughness: 0.62, metalness: 0.16 });
  M.teal = standard(COL.teal, { roughness: 0.62, metalness: 0.1 });
  M.tealDeep = standard(COL.tealDeep, { roughness: 0.7, metalness: 0.12 });
  M.tealLight = standard(COL.tealLight, { roughness: 0.65 });
  M.red = standard(COL.red, { roughness: 0.7 });
  M.redDeep = standard(COL.redDeep, { roughness: 0.78 });
  M.orange = standard(COL.orange, { roughness: 0.74 });
  M.gold = standard(COL.gold, { roughness: 0.28, metalness: 0.76, envMapIntensity: 1.35 });
  M.goldLight = standard(COL.goldLight, { roughness: 0.25, metalness: 0.6, emissive: 0x4c2c0a, emissiveIntensity: 0.12 });
  M.brass = standard(COL.brass, { roughness: 0.34, metalness: 0.7, envMapIntensity: 1.15 });
  M.wood = standard(COL.wood, { roughness: 0.84, map: makeWoodTexture('#6f4b31') });
  M.woodDarkMat = standard(COL.woodDark, { roughness: 0.88, map: makeWoodTexture('#4b3323') });
  M.woodBarrel = standard(0x7d5739, { roughness: 0.85, map: makeWoodTexture('#7d5739') });
  M.crate = standard(0x9c764b, { roughness: 0.86, map: makeWoodTexture('#9c764b') });
  M.crateTrim = standard(0x4c3523, { roughness: 0.8 });
  M.deck = standard(0xffffff, { roughness: 0.8, map: makeDeckTexture() });
  M.hull = standard(0xffffff, { roughness: 0.66, metalness: 0.1, map: makeHullTexture(), side: THREE.DoubleSide });
  M.cream = standard(COL.cream, { roughness: 0.82, side: THREE.DoubleSide });
  M.sail = standard(0xe8d5ad, { roughness: 0.92, side: THREE.DoubleSide });
  M.bone = standard(COL.bone, { roughness: 0.52, metalness: 0.06 });
  M.black = standard(COL.black, { roughness: 0.58, metalness: 0.25 });
  M.iron = standard(0x323437, { roughness: 0.42, metalness: 0.7 });
  M.rope = standard(COL.rope, { roughness: 0.94 });
  M.velvet = standard(COL.velvet, { roughness: 0.94 });
  M.velvetLight = standard(0xb84b3d, { roughness: 0.82 });
  M.stone = standard(COL.stone, { roughness: 0.94, map: makeWoodTexture('#898271') });
  M.stoneDark = standard(COL.stoneDark, { roughness: 0.96, map: makeWoodTexture('#605d52') });
  M.sand = standard(COL.sand, { roughness: 1, map: makeWoodTexture('#c6ae83') });
  M.leafDark = standard(COL.leafDark, { roughness: 0.9, side: THREE.DoubleSide });
  M.palmWood = standard(0x75553a, { roughness: 0.92, map: makeWoodTexture('#72543a') });
  M.palmRing = standard(0x4c3828, { roughness: 0.96 });
  M.palmLeaf = standard(COL.leaf, { roughness: 0.82, side: THREE.DoubleSide, flatShading: true });
  M.palmLeafLight = standard(COL.leafLight, { roughness: 0.82, side: THREE.DoubleSide, flatShading: true });
  M.palmVein = standard(0x5d714a, { roughness: 0.9 });
  M.coconut = standard(0x493426, { roughness: 0.92 });
  M.cliff = standard(0x6c6a5d, { roughness: 0.95, flatShading: true });
  M.cliffDark = standard(0x4f5149, { roughness: 0.97, flatShading: true });
  M.moss = standard(0x5e7044, { roughness: 0.95, flatShading: true });
  M.cloud = basic(0xf7ebd7);
  M.cloud.fog = false;
  M.cloudPink = basic(0xefdabe);
  M.cloudPink.fog = false;
  M.lanternGlass = standard(0xffd28a, {
    roughness: 0.32,
    metalness: 0.12,
    emissive: 0xffa744,
    emissiveIntensity: 1.9,
    transparent: true,
    opacity: 0.9,
  });
  M.porthole = standard(0xffbb63, {
    roughness: 0.4,
    emissive: 0xff9b32,
    emissiveIntensity: 1.5,
  });
  M.foam = basic(0xe7f2ea, { transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false });
  M.water = null;
  M.flagCloth = standard(0xe4d1ad, { roughness: 0.9, side: THREE.DoubleSide });
}

let glowTex;
let foamTex;
let skyEnvTexture;
let jollyTexture;
let signTexture;
let plaqueTexture;
let bannerTextureRed;
let bannerTextureTeal;

/* ================================================================
   THE SHIP
   ================================================================ */
const PIVOT_Y = 13.15;
const HULL_STATIONS = [
  { x: -8.2, w: 2.2, top: -1.82, keel: -4.2 },
  { x: -7.35, w: 2.58, top: -2.06, keel: -5.35 },
  { x: -6.0, w: 2.86, top: -2.46, keel: -6.45 },
  { x: -4.1, w: 2.98, top: -2.78, keel: -7.2 },
  { x: -1.2, w: 3.0, top: -3.0, keel: -7.56 },
  { x: 1.6, w: 2.92, top: -2.96, keel: -7.5 },
  { x: 4.0, w: 2.7, top: -2.68, keel: -6.9 },
  { x: 6.0, w: 2.26, top: -2.3, keel: -5.95 },
  { x: 7.5, w: 1.7, top: -1.95, keel: -4.9 },
  { x: 8.4, w: 0.82, top: -1.8, keel: -3.7 },
  { x: 8.67, w: 0.08, top: -1.96, keel: -3.0 },
];

function hullAt(x) {
  if (x <= HULL_STATIONS[0].x) return { ...HULL_STATIONS[0] };
  if (x >= HULL_STATIONS[HULL_STATIONS.length - 1].x) return { ...HULL_STATIONS[HULL_STATIONS.length - 1] };
  for (let i = 0; i < HULL_STATIONS.length - 1; i++) {
    const a = HULL_STATIONS[i];
    const b = HULL_STATIONS[i + 1];
    if (x >= a.x && x <= b.x) {
      const t = (x - a.x) / (b.x - a.x);
      return {
        x,
        w: lerp(a.w, b.w, t),
        top: lerp(a.top, b.top, t),
        keel: lerp(a.keel, b.keel, t),
      };
    }
  }
  return { ...HULL_STATIONS[0] };
}

function buildHullGeometry() {
  const half = [
    { f: 1, v: 0 },
    { f: 1, v: 0.1 },
    { f: 0.992, v: 0.21 },
    { f: 0.96, v: 0.34 },
    { f: 0.88, v: 0.5 },
    { f: 0.73, v: 0.66 },
    { f: 0.51, v: 0.81 },
    { f: 0.25, v: 0.93 },
    { f: 0.07, v: 0.988 },
    { f: 0, v: 1 },
  ];
  const profile = [...half, ...half.slice(0, -1).reverse().map((p) => ({ f: -p.f, v: p.v }))];
  // the station table is intentionally low-res; subdivide it for a clean skin
  const stations = [];
  for (let i = 0; i < HULL_STATIONS.length - 1; i++) {
    const a = HULL_STATIONS[i];
    const b = HULL_STATIONS[i + 1];
    for (let k = 0; k < 3; k++) {
      const t = k / 3;
      stations.push({
        x: lerp(a.x, b.x, t),
        w: lerp(a.w, b.w, t),
        top: lerp(a.top, b.top, t),
        keel: lerp(a.keel, b.keel, t),
      });
    }
  }
  stations.push({ ...HULL_STATIONS[HULL_STATIONS.length - 1] });
  const positions = [];
  const uvs = [];
  const indices = [];
  const n = profile.length;
  const minX = stations[0].x;
  const maxX = stations[stations.length - 1].x;

  for (let i = 0; i < stations.length; i++) {
    const s = stations[i];
    for (let j = 0; j < n; j++) {
      const p = profile[j];
      const y = lerp(s.keel, s.top, 1 - p.v);
      positions.push(s.x, y + Math.sin(p.v * Math.PI) * 0.06, p.f * s.w);
      const u = (s.x - minX) / (maxX - minX);
      const v = clamp((y - s.keel) / Math.max(0.001, s.top - s.keel), 0, 1);
      uvs.push(u * 0.999 + 0.0005, v * 0.996 + 0.002);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const a = i * n + j;
      const b = (i + 1) * n + j;
      const c = (i + 1) * n + j + 1;
      const d = i * n + j + 1;
      indices.push(a, b, d, b, c, d);
    }
  }
  // close bow and stern below the transom with simple fans
  for (const end of [0, 1]) {
    const i = end === 0 ? 0 : stations.length - 1;
    const s = stations[i];
    const centerIndex = positions.length / 3;
    positions.push(s.x, (s.top + s.keel) * 0.5, 0);
    uvs.push(0.5, 0.5);
    for (let j = 0; j < n - 1; j++) {
      if (end === 0) indices.push(centerIndex, i * n + j, i * n + j + 1);
      else indices.push(centerIndex, i * n + j + 1, i * n + j);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function buildDeckGeometry() {
  const stations = HULL_STATIONS.slice(1, 10);
  const deckY = -3.2;
  const positions = [];
  const uvs = [];
  const indices = [];
  const n = 2;
  const minX = stations[0].x;
  const maxX = stations[stations.length - 1].x;
  for (let i = 0; i < stations.length; i++) {
    const s = stations[i];
    const inner = s.w * 0.91;
    const u = (s.x - minX) / (maxX - minX);
    positions.push(s.x, deckY, -inner, s.x, deckY, inner);
    uvs.push(u * 2.5, 0, u * 2.5, 1.6);
    if (i < stations.length - 1) {
      const a = i * n;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function createRigging(parent, mastTop, points, material = M.rope) {
  for (const p of points) addRopeLine(parent, mastTop, p, 0x2d231a, 0.72);
}

function createPennantString(parent, start, end, sag, count, palette, seed = 1) {
  const mid = V(
    (start.x + end.x) / 2,
    Math.min(start.y, end.y) - sag,
    (start.z + end.z) / 2,
  );
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const pts = curve.getPoints(20);
  const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
  const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0x2b2119, transparent: true, opacity: 0.68 }));
  parent.add(line);

  const tri = new THREE.BufferGeometry();
  tri.setAttribute('position', new THREE.Float32BufferAttribute([
    0, 0, 0,
    -0.235, -0.44, 0,
    0.235, -0.44, 0,
  ], 3));
  tri.setAttribute('uv', new THREE.Float32BufferAttribute([0.5, 1, 0, 0, 1, 0], 2));
  tri.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.8,
    side: THREE.DoubleSide,
    vertexColors: false,
  });
  const mesh = new THREE.InstancedMesh(tri, mat, count);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const flags = [];
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const t = (i + 0.45) / count;
    const p = curve.getPoint(t);
    const tangent = curve.getTangent(t);
    const phase = seeded(i * 7.3 + seed) * TAU;
    const color = palette[i % palette.length];
    mesh.setColorAt(i, new THREE.Color(color));
    flags.push({ t, p, tangent, phase, scale: 0.8 + seeded(i * 3 + seed) * 0.35 });
    dummy.position.copy(p);
    dummy.rotation.set(0, Math.atan2(-tangent.z, tangent.x), 0);
    dummy.scale.setScalar(flags[i].scale);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceColor.needsUpdate = true;
  parent.add(mesh);
  return {
    mesh,
    flags,
    update(time, wind) {
      const d = new THREE.Object3D();
      for (let i = 0; i < flags.length; i++) {
        const f = flags[i];
        d.position.copy(f.p);
        d.rotation.set(
          Math.sin(time * 2.2 + f.phase) * 0.06 * wind,
          Math.atan2(-f.tangent.z, f.tangent.x) + Math.sin(time * 2.8 + f.phase) * 0.12 * wind,
          Math.sin(time * 3.1 + f.phase) * 0.1 * wind,
        );
        d.scale.setScalar(f.scale);
        d.updateMatrix();
        mesh.setMatrixAt(i, d.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

function createClothFlag(width, height, texture, materialOpts = {}) {
  const geo = new THREE.PlaneGeometry(width, height, 12, 6);
  geo.translate(-width / 2, -height / 2, 0);
  const base = geo.attributes.position.array.slice();
  const mat = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
    alphaTest: 0.18,
    roughness: 0.86,
    metalness: 0,
    ...materialOpts,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.base = base;
  mesh.userData.width = width;
  mesh.userData.dynamic = true;
  mesh.frustumCulled = false;
  return {
    mesh,
    update(time, wind = 1) {
      const arr = geo.attributes.position.array;
      for (let i = 0; i < arr.length; i += 3) {
        const x = base[i];
        const y = base[i + 1];
        const t = clamp(-x / width, 0, 1);
        arr[i + 2] = Math.sin(x * 4.6 + time * 5.2) * 0.13 * t * wind + Math.sin(y * 3.1 + time * 4.0) * 0.05 * t * wind;
      }
      geo.attributes.position.needsUpdate = true;
      geo.computeVertexNormals();
    },
  };
}

function createShip() {
  const rig = new THREE.Group();
  rig.position.set(0, PIVOT_Y, 0);
  const vessel = new THREE.Group();
  rig.add(vessel);

  // ---------------- hull ----------------
  const hullGeo = buildHullGeometry();
  const hull = new THREE.Mesh(hullGeo, M.hull);
  hull.castShadow = true;
  hull.receiveShadow = true;
  vessel.add(hull);

  const deckGeo = buildDeckGeometry();
  const deck = new THREE.Mesh(deckGeo, M.deck);
  deck.receiveShadow = true;
  vessel.add(deck);

  // inner bulwark strips make the deck feel enclosed
  for (const side of [-1, 1]) {
    for (let i = 0; i < HULL_STATIONS.length - 2; i++) {
      const a = HULL_STATIONS[i];
      const b = HULL_STATIONS[i + 1];
      if (a.x < -6.4 || a.x > 7.0) continue;
      const p1 = V(a.x, a.top - 0.18, side * a.w * 0.96);
      const p2 = V(b.x, b.top - 0.18, side * b.w * 0.96);
      const p3 = V(b.x, -3.12, side * b.w * 0.84);
      const p4 = V(a.x, -3.12, side * a.w * 0.84);
      const geo = new THREE.BufferGeometry().setFromPoints([]);
      const vertices = new Float32Array([
        p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z,
        p1.x, p1.y, p1.z, p3.x, p3.y, p3.z, p4.x, p4.y, p4.z,
      ]);
      geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geo.computeVertexNormals();
      const strip = new THREE.Mesh(geo, M.woodDarkMat);
      strip.material.side = THREE.DoubleSide;
      strip.receiveShadow = true;
      vessel.add(strip);
    }
  }

  // gold sheer line and carved ribs
  for (const side of [-1, 1]) {
    const pts = [];
    for (const s of HULL_STATIONS) pts.push(V(s.x, s.top - 0.05, side * s.w * 0.995));
    tube(vessel, pts, 0.062, M.gold, 44, 5);
    const wale = [];
    for (const s of HULL_STATIONS) wale.push(V(s.x, s.top - 0.92, side * s.w * 0.985));
    tube(vessel, wale, 0.037, M.gold, 44, 4);
    for (const x of [-5.9, -3.55, -1.2, 1.15, 3.5, 5.9]) {
      const h = hullAt(x);
      tube(vessel, [
        V(x, h.top - 0.12, side * h.w * 0.965),
        V(x, h.top - 1.05, side * h.w * 0.985),
        V(x, h.keel + 2.2, side * h.w * 0.71),
        V(x, h.keel + 0.65, side * h.w * 0.28),
        V(x, h.keel + 0.02, side * 0.015),
      ], 0.024, M.brass, 24, 4);
    }
  }
  // gilded keel
  const keelPts = [];
  for (const s of HULL_STATIONS) keelPts.push(V(s.x, s.keel - 0.015, 0));
  tube(vessel, keelPts, 0.075, M.brass, 40, 5);
  // rudder and sternpost
  box(vessel, 0.24, 1.5, 0.62, M.woodDarkMat, -8.2, -5.4, 0);
  box(vessel, 0.3, 0.1, 0.7, M.gold, -8.2, -4.68, 0);

  // rail posts and handrail
  for (const side of [-1, 1]) {
    for (let x = -7.3; x <= 7.7; x += 0.92) {
      const h = hullAt(x);
      const y0 = h.top - 0.02;
      const z = side * h.w * 0.97;
      cyl(vessel, 0.038, 0.05, 0.62, M.gold, x, y0 + 0.28, z, 6);
      sphere(vessel, 0.065, M.brass, x, y0 + 0.61, z);
    }
    const pts = [];
    for (const s of HULL_STATIONS) if (s.x > -7.8 && s.x < 8.1) pts.push(V(s.x, s.top + 0.58, side * s.w * 0.97));
    tube(vessel, pts, 0.042, M.gold, 40, 5);
  }

  // portholes with warm interiors
  const portGlowMats = [];
  for (const side of [-1, 1]) {
    for (const x of [-4.9, -2.5, -0.1, 2.3, 4.7]) {
      const h = hullAt(x);
      const y = h.keel + 2.35;
      const z = side * h.w * 0.932;
      const g = new THREE.Group();
      g.position.set(x, y, z);
      g.rotation.y = side > 0 ? 0 : Math.PI;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.045, 8, 20), M.brass);
      g.add(ring);
      const inner = new THREE.Mesh(new THREE.CircleGeometry(0.23, 20), M.porthole.clone());
      inner.position.z = 0.01;
      g.add(inner);
      portGlowMats.push(inner.material);
      // little star ornament above
      sphere(g, 0.04, M.gold, 0, 0.36, 0.01);
      vessel.add(g);
    }
  }

  // gilded side flourishes
  for (const side of [-1, 1]) {
    const centerX = 6.1;
    const h = hullAt(centerX);
    const z = side * h.w * 0.992;
    for (let k = 0; k < 2; k++) {
      const pts = [];
      for (let i = 0; i < 11; i++) {
        const t = i / 10;
        const a = t * Math.PI * 1.8;
        const r = 0.62 * (1 - t * 0.62);
        pts.push(V(centerX - 0.35 + Math.cos(a) * r, -3.55 + Math.sin(a) * r + k * 0.5, z));
      }
      tube(vessel, pts, 0.025, M.gold, 26, 4);
    }
  }

  // name plaques on both sides
  for (const side of [-1, 1]) {
    const h = hullAt(-5.7);
    const plaque = new THREE.Mesh(
      new THREE.PlaneGeometry(2.35, 0.8),
      new THREE.MeshStandardMaterial({
        map: plaqueTexture,
        transparent: true,
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.15,
      }),
    );
    plaque.position.set(-5.7, -3.65, side * (h.w * 0.94 + 0.02));
    plaque.rotation.y = side > 0 ? 0 : Math.PI;
    vessel.add(plaque);
  }

  // ---------------- stern ----------------
  const stern = new THREE.Group();
  stern.position.set(-8.28, -2.9, 0);
  vessel.add(stern);
  box(stern, 0.32, 2.8, 4.15, M.navyDeep, 0, 0, 0);
  box(stern, 0.4, 0.2, 4.5, M.gold, 0, 1.38, 0);
  box(stern, 0.4, 0.16, 4.5, M.gold, 0, -1.37, 0);
  for (const z of [-2.03, 2.03]) box(stern, 0.4, 2.7, 0.16, M.gold, 0, 0, z);
  // stern windows
  for (const z of [-1.25, 0, 1.25]) {
    box(stern, 0.08, 1.0, 0.78, M.gold, -0.2, 0.22, z);
    box(stern, 0.09, 0.82, 0.6, M.porthole, -0.25, 0.22, z);
    box(stern, 0.11, 0.82, 0.06, M.gold, -0.3, 0.22, z);
  }
  // transom crest
  const crest = createSkull({ material: M.gold, eye: M.black, scale: 0.55, crossbones: true });
  crest.rotation.y = -Math.PI / 2;
  crest.position.set(-0.32, 0.84, 0);
  stern.add(crest);

  // stern lanterns
  for (const z of [-1.95, 1.95]) {
    const lan = createLantern(0.9);
    lan.position.set(-0.35, 1.8, z);
    stern.add(lan);
  }
  // gallery balcony
  box(stern, 1.1, 0.18, 4.7, M.woodDarkMat, -0.6, 1.3, 0);
  for (const z of [-2.2, 2.2]) {
    cyl(stern, 0.05, 0.06, 0.6, M.gold, -0.65, 1.62, z, 6);
  }

  // quarter deck and stairs
  box(vessel, 2.6, 0.22, 4.15, M.deck, -6.7, -1.72, 0);
  box(vessel, 2.5, 0.2, 4.05, M.woodDarkMat, -6.7, -1.85, 0);
  for (let i = 0; i < 3; i++) {
    box(vessel, 0.35, 0.16, 4.1, M.wood, -5.25 - i * 0.32, -1.9 - i * 0.22, 0);
  }
  for (const z of [-2.0, 2.0]) {
    for (let i = 0; i < 4; i++) {
      cyl(vessel, 0.045, 0.055, 0.6, M.gold, -7.4 + i * 0.5, -1.3, z, 6);
    }
    tube(vessel, [V(-7.6, -0.98, z), V(-5.4, -0.98, z)], 0.04, M.gold, 12, 4);
  }

  // forecastle
  box(vessel, 1.9, 0.22, 3.6, M.deck, 7.2, -2.25, 0);
  box(vessel, 1.9, 0.28, 3.5, M.woodDarkMat, 7.2, -2.4, 0);
  for (let i = 0; i < 3; i++) {
    box(vessel, 0.3, 0.15, 3.3, M.wood, 6.2 + i * 0.33, -2.55 - i * 0.2, 0);
  }

  // ---------------- bow ----------------
  const stemPts = [
    V(8.35, -3.8, 0), V(8.62, -3.0, 0), V(8.78, -2.05, 0),
    V(8.72, -1.1, 0), V(9.05, -0.15, 0), V(9.75, 0.35, 0),
  ];
  tube(vessel, stemPts, 0.16, M.woodDarkMat, 32, 6);
  const bowspritStart = V(8.55, -1.3, 0);
  const bowspritEnd = V(12.15, 1.18, 0);
  beamBetween(vessel, bowspritStart, bowspritEnd, 0.24, 0.24, M.woodDarkMat, M.brass);
  for (const t of [0.26, 0.62, 0.9]) {
    const p = bowspritStart.clone().lerp(bowspritEnd, t);
    torus(vessel, 0.15, 0.028, M.gold, p.x, p.y, p.z, 0, 0, Math.PI / 2, 12);
  }

  // figurehead
  const figurehead = createSkull({ material: M.gold, eye: M.black, scale: 1.08, crossbones: true, wings: true });
  figurehead.position.set(8.7, -2.25, 0);
  figurehead.rotation.y = Math.PI / 2;
  figurehead.rotation.z = -0.08;
  vessel.add(figurehead);

  // ---------------- masts ----------------
  const mast = new THREE.Group();
  mast.position.set(0.7, 0, 0);
  vessel.add(mast);
  cyl(mast, 0.16, 0.27, 10.2, M.woodDarkMat, 0, 1.4, 0, 10);
  cyl(mast, 0.29, 0.33, 0.6, M.brass, 0, -2.8, 0, 10);
  for (const y of [-2.2, 0.1, 2.2, 4.25, 5.95, 6.75]) {
    torus(mast, 0.23 - (y + 3) * 0.005, 0.035, M.gold, 0, y, 0, Math.PI / 2, 0, 0, 12);
  }
  // crow's nest
  const nestY = 3.15;
  cyl(mast, 0.55, 0.42, 0.3, M.woodDarkMat, 0, nestY, 0, 8);
  torus(mast, 0.52, 0.035, M.brass, 0, nestY + 0.15, 0, Math.PI / 2, 0, 0, 12);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU;
    cyl(mast, 0.022, 0.022, 0.42, M.gold, Math.cos(a) * 0.52, nestY + 0.31, Math.sin(a) * 0.52, 5);
  }
  // yards and furled sails
  const yardY = 4.35;
  beamBetween(mast, V(0, yardY, -4.2), V(0, yardY, 4.2), 0.11, 0.11, M.woodDarkMat, M.brass);
  const sailCurve = new THREE.CatmullRomCurve3([
    V(0, yardY - 0.3, -3.85), V(0, yardY - 0.55, -2.1), V(0, yardY - 0.72, 0),
    V(0, yardY - 0.55, 2.1), V(0, yardY - 0.3, 3.85),
  ]);
  const sail = addMesh(mast, new THREE.TubeGeometry(sailCurve, 28, 0.34, 8, false), M.sail, [0, 0, 0]);
  sail.scale.y = 0.7;
  for (const z of [-2.8, -0.9, 1.0, 2.9]) {
    torus(mast, 0.35, 0.03, M.rope, 0, yardY - 0.35, z, Math.PI / 2, 0, 0, 10);
  }
  // top pennant and jolly roger
  cyl(mast, 0.035, 0.045, 1.15, M.gold, 0, 7.05, 0, 6);
  const flag = createClothFlag(2.55, 1.6, jollyTexture);
  flag.mesh.position.set(0.1, 7.35, 0);
  flag.mesh.rotation.y = 0.04;
  mast.add(flag.mesh);

  // foremast
  const fore = new THREE.Group();
  fore.position.set(4.75, 0, 0);
  vessel.add(fore);
  cyl(fore, 0.12, 0.22, 6.2, M.woodDarkMat, 0, 0.1, 0, 8);
  for (const y of [-2.4, -0.7, 1.5, 2.85]) torus(fore, 0.18, 0.03, M.gold, 0, y, 0, Math.PI / 2, 0, 0, 12);
  beamBetween(fore, V(0, 2.42, -3.3), V(0, 2.42, 3.3), 0.09, 0.09, M.woodDarkMat, M.brass);
  const sail2Curve = new THREE.CatmullRomCurve3([
    V(0, 2.14, -3.0), V(0, 1.95, 0), V(0, 2.14, 3.0),
  ]);
  addMesh(fore, new THREE.TubeGeometry(sail2Curve, 20, 0.26, 8, false), M.sail);
  cyl(fore, 0.03, 0.04, 0.7, M.gold, 0, 3.65, 0, 6);
  const redPennant = createClothFlag(1.6, 0.36, null, { map: null, color: 0x9c3229, transparent: false, alphaTest: 0 });
  redPennant.mesh.position.set(0.02, 3.86, 0);
  fore.add(redPennant.mesh);

  // mizzen flagpole at the stern
  cyl(vessel, 0.035, 0.05, 2.2, M.gold, -7.75, -0.7, 0, 6);
  const sternFlag = createClothFlag(1.1, 0.55, null, { map: null, color: 0x1e6167, transparent: false, alphaTest: 0 });
  sternFlag.mesh.position.set(-7.76, 0.3, 0);
  vessel.add(sternFlag.mesh);

  // ---------------- rigging ----------------
  const mastTop = V(0.7, 6.9, 0);
  const rigPoints = [
    V(8.5, -1.25, 0),
    V(12.0, 0.9, 0),
    V(7.3, -0.1, 1.9),
    V(7.3, -0.1, -1.9),
    V(5.4, -0.2, 2.7),
    V(5.4, -0.2, -2.7),
    V(-4.8, -0.95, 2.3),
    V(-4.8, -0.95, -2.3),
    V(-7.0, -0.9, 0),
  ];
  createRigging(vessel, mastTop, rigPoints);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const x = 3.4 - i * 0.7;
      const h = hullAt(x);
      addRopeLine(vessel, V(0.7, 2.6 + i * 0.2, side * 0.17), V(x, h.top + 0.4, side * h.w * 0.94), 0x2b2119, 0.42);
    }
    for (let i = 0; i < 4; i++) {
      const x = 3.3 - i * 0.55;
      const h = hullAt(x);
      addRopeLine(vessel, V(4.75, 2.0 + i * 0.15, side * 0.12), V(x, h.top + 0.3, side * h.w * 0.94), 0x2b2119, 0.32);
    }
  }
  addRopeLine(vessel, V(0.7, 6.6, 0), V(8.6, -1.0, 0), 0x2b2119, 0.55);
  addRopeLine(vessel, V(0.7, 6.5, 0), V(-7.4, -1.0, 0), 0x2b2119, 0.5);

  // festoon of little pennants fore and aft
  const pennants = [];
  const palette = [0xb54634, 0xe4c174, 0x2e7379, 0xefe0bf, 0x985432];
  pennants.push(createPennantString(vessel, V(0.72, 6.75, 0), V(4.72, 3.4, 0), 1.15, 12, palette, 2.2));
  pennants.push(createPennantString(vessel, V(0.72, 6.65, 0), V(-3.8, 0.0, 0), 1.2, 12, palette, 4.1));
  pennants.push(createPennantString(vessel, V(4.75, 3.55, 0), V(8.35, -1.1, 0), 0.55, 8, palette, 7.4));
  // side bunting from mast to gunwales
  pennants.push(createPennantString(vessel, V(0.7, 5.7, 0), V(-4.4, -0.25, 2.5), 0.9, 10, palette, 9.2));
  pennants.push(createPennantString(vessel, V(0.7, 5.7, 0), V(-4.4, -0.25, -2.5), 0.9, 10, palette, 11.3));

  // two large heraldic banners hanging from the main yard
  const bannerRed = createClothFlag(1.95, 3.35, bannerTextureRed, { alphaTest: 0.22, roughness: 0.9 });
  bannerRed.mesh.position.set(0.7, 4.05, 2.34);
  vessel.add(bannerRed.mesh);
  const bannerTeal = createClothFlag(1.7, 2.9, bannerTextureTeal, { alphaTest: 0.22, roughness: 0.9 });
  bannerTeal.mesh.position.set(0.7, 4.05, -2.34);
  bannerTeal.mesh.rotation.y = Math.PI;
  vessel.add(bannerTeal.mesh);

  // ---------------- seats, riders ----------------
  const seats = new THREE.Group();
  vessel.add(seats);
  const riders = [];
  const benchX = [-3.05, -1.35, 0.35, 2.05, 3.75];
  for (let row = 0; row < benchX.length; row++) {
    for (const side of [-1, 1]) {
      const b = new THREE.Group();
      const z = side * 1.35;
      b.position.set(benchX[row], -2.91, z);
      box(b, 0.72, 0.16, 1.5, M.velvet, 0, 0.0, 0);
      box(b, 0.22, 0.72, 1.5, M.velvet, -0.3, 0.32, 0);
      box(b, 0.78, 0.08, 1.58, M.gold, 0, 0.12, 0);
      box(b, 0.13, 0.85, 0.13, M.gold, -0.3, 0.43, 0.71);
      box(b, 0.13, 0.85, 0.13, M.gold, -0.3, 0.43, -0.71);
      box(b, 0.26, 0.07, 1.72, M.gold, 0.18, 0.52, 0);
      // tufted back buttons
      for (let i = -1; i <= 1; i++) sphere(b, 0.035, M.gold, -0.43, 0.44 + i * 0.01, i * 0.3);
      seats.add(b);
      // riders
      const nRiders = row === 4 ? 1 : 2;
      for (let r = 0; r < nRiders; r++) {
        const rg = new THREE.Group();
        const rz = (r - (nRiders - 1) / 2) * 0.5;
        rg.position.set(benchX[row] + 0.02, -2.74, z + rz);
        const coat = [0x8f3d2f, 0x275e63, 0xc08448, 0x5f6250, 0xa95c3b][(row + r + (side > 0 ? 1 : 0)) % 5];
        const skin = [0xd8ad83, 0xb9774f, 0xe2bf9a][(row + r) % 3];
        const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.28, 4, 8), standard(coat, { roughness: 0.9 }));
        body.position.y = 0.28;
        rg.add(body);
        sphere(rg, 0.145, standard(skin, { roughness: 0.9 }), 0, 0.61, 0.02);
        const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.18, 0.08, 10), standard(0x2a2320, { roughness: 0.9 }));
        hat.position.y = 0.73;
        rg.add(hat);
        const arms = [];
        for (const as of [-1, 1]) {
          const arm = new THREE.Group();
          arm.position.set(0, 0.46, as * 0.16);
          const limb = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.26, 3, 6), standard(coat, { roughness: 0.9 }));
          limb.position.y = -0.15;
          arm.add(limb);
          sphere(arm, 0.05, standard(skin, { roughness: 0.9 }), 0, -0.32, 0);
          rg.add(arm);
          arms.push({ arm, side: as });
        }
        b.add(rg);
        rg.userData.dynamic = true;
        riders.push({ group: rg, arms, phase: seeded(row * 5 + r + side) * TAU });
      }
    }
  }

  // helm, captain and deck props
  const helm = createWheel(0.74);
  helm.position.set(-6.45, -1.05, 0.35);
  helm.rotation.y = Math.PI / 2;
  vessel.add(helm);
  beamBetween(vessel, V(-6.5, -1.8, 0.35), V(-6.5, -1.02, 0.35), 0.16, 0.16, M.woodDarkMat);
  // captain silhouette
  const captain = new THREE.Group();
  captain.position.set(-7.15, -1.78, -1.25);
  const capCoat = new THREE.Mesh(new THREE.CapsuleGeometry(0.21, 0.58, 4, 8), standard(0x2c4d58, { roughness: 0.92 }));
  capCoat.position.y = 0.6;
  captain.add(capCoat);
  sphere(captain, 0.2, standard(0xc69a73, { roughness: 0.92 }), 0, 1.17, 0);
  const tricorn = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.18, 3), standard(0x1b2222, { roughness: 0.9 }));
  tricorn.position.set(0, 1.34, 0);
  tricorn.rotation.y = Math.PI / 2;
  captain.add(tricorn);
  captain.rotation.y = 0.55;
  vessel.add(captain);

  // lanterns on the ship
  const shipLanterns = [];
  for (const [x, z, s] of [[-4.45, 2.2, 0.75], [4.2, 2.15, 0.7], [7.0, -2.0, 0.65], [-7.85, 1.4, 0.62]]) {
    const h = hullAt(x);
    const lan = createLantern(s);
    lan.position.set(x, Math.min(-0.5, h.top + 0.9), z);
    vessel.add(lan);
    shipLanterns.push(lan);
  }

  // cannons
  for (const side of [-1, 1]) {
    for (const x of [-4.0, 0.6, 4.7]) {
      const g = new THREE.Group();
      g.position.set(x, -2.75, side * 2.1);
      const barrel = cyl(g, 0.1, 0.16, 0.85, M.iron, 0, 0.08, side * 0.38, 12);
      barrel.rotation.x = Math.PI / 2;
      box(g, 0.5, 0.22, 0.38, M.woodDarkMat, 0, -0.12, 0);
      for (const wx of [-0.23, 0.23]) {
        const wheel = cyl(g, 0.13, 0.13, 0.08, M.woodDarkMat, wx, -0.22, 0, 10);
        wheel.rotation.z = Math.PI / 2;
      }
      vessel.add(g);
    }
  }

  // ropes and a bucket
  torus(vessel, 0.42, 0.07, M.rope, 3.2, -3.03, -1.7, Math.PI / 2, 0, 0, 22);
  torus(vessel, 0.3, 0.06, M.rope, 3.25, -2.99, -1.7, Math.PI / 2, 0, 0, 22);
  cyl(vessel, 0.17, 0.13, 0.32, M.woodBarrel, 2.4, -3.0, 2.0, 10);

  // hanger arms: rigid gilded brackets from axle to hull
  for (const x of [-2.25, 2.25]) {
    beamBetween(rig, V(x, -0.2, 0), V(x * 1.08, -3.05, 0), 0.22, 0.36, M.gold);
    sphere(rig, 0.23, M.brass, x, -0.2, 0);
    sphere(rig, 0.18, M.brass, x * 1.08, -3.05, 0);
    // rope wrapping
    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      torus(rig, 0.17, 0.025, M.rope, lerp(x, x * 1.08, t), lerp(-0.22, -3.05, t), 0, Math.PI / 2, 0, 0, 10);
    }
  }
  // axle collars
  for (const z of [-0.55, 0.55]) {
    const col = cyl(rig, 0.42, 0.42, 0.18, M.brass, 0, 0, z, 16);
    col.rotation.x = Math.PI / 2;
  }

  return {
    rig,
    vessel,
    hull,
    mast,
    fore,
    helm,
    figurehead,
    riders,
    shipLanterns,
    flags: [flag, redPennant, sternFlag, bannerRed, bannerTeal, ...pennants],
    portGlowMats,
    anchor: {
      figurehead: V(8.65, -2.25, 0),
      wheel: V(-6.4, -1.05, 0.35),
      flag: V(0.75, 6.8, 0),
    },
    update(time, dt, energy) {
      flag.update(time, 0.8 + energy * 0.8);
      redPennant.update(time, 0.7 + energy);
      sternFlag.update(time, 0.6 + energy);
      bannerRed.update(time, 0.45 + energy * 0.45);
      bannerTeal.update(time + 1.7, 0.45 + energy * 0.45);
      pennants.forEach((p, i) => p.update(time + i * 0.3, 0.7 + energy));
      for (const r of riders) {
        const raise = clamp(energy, 0, 1);
        for (const a of r.arms) {
          const target = lerp(0.9, -2.1, raise * (0.7 + 0.3 * Math.sin(time * 3 + r.phase)));
          a.arm.rotation.x = lerp(a.arm.rotation.x, target, Math.min(1, dt * 3.2));
          a.arm.rotation.z = a.side * (0.1 + raise * 0.18);
        }
        r.group.rotation.z = Math.sin(time * 5 + r.phase) * 0.01 * energy;
      }
      shipLanterns.forEach((lan, i) => {
        const flicker = 0.86 + Math.sin(time * 8.7 + i * 2.1) * 0.08 + Math.sin(time * 21 + i) * 0.04;
        lan.userData.glow.material.opacity = 0.62 * flicker;
        lan.userData.glow.scale.setScalar(1.06 * flicker);
      });
    },
  };
}

/* ================================================================
   THE BAY
   ================================================================ */
function createSky(scene) {
  const uniforms = {
    topColor: { value: new THREE.Color(0x4d91a4) },
    horizonColor: { value: new THREE.Color(0xf2d7aa) },
    bottomColor: { value: new THREE.Color(0xa27e5c) },
    sunColor: { value: new THREE.Color(0xffe1ae) },
    sunDirection: { value: new THREE.Vector3(0.15, 0.36, -0.92).normalize() },
    night: { value: 0 },
    offset: { value: 12 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 bottomColor;
      uniform vec3 sunColor;
      uniform vec3 sunDirection;
      uniform float night;
      uniform float offset;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld);
        float h = dir.y;
        float upper = smoothstep(-0.035, 0.29, h);
        vec3 col = mix(horizonColor, topColor, pow(upper, 0.78));
        col = mix(bottomColor, col, smoothstep(-0.26, 0.012, h));
        float sun = pow(max(dot(dir, sunDirection), 0.0), 160.0);
        float halo = pow(max(dot(dir, sunDirection), 0.0), 7.0);
        col += sunColor * (sun * 1.25 + halo * 0.16) * (1.0 - night * 0.75);
        // faint painted cloud bands near the horizon
        float band = sin(dir.x * 8.0 + dir.z * 3.0 + offset) * 0.5 + 0.5;
        band *= smoothstep(0.02, 0.22, h) * (1.0 - smoothstep(0.24, 0.5, h));
        col += vec3(0.045, 0.048, 0.042) * band * (1.0 - night * 0.8);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    toneMapped: true,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(420, 40, 24), mat);
  sky.renderOrder = -10;
  scene.add(sky);

  const sunDir = uniforms.sunDirection.value.clone();
  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,253,241,1)', 'rgba(255,219,160,0)'),
    color: 0xffe7ba,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  }));
  sunSprite.position.copy(sunDir).multiplyScalar(350);
  sunSprite.scale.setScalar(56);
  scene.add(sunSprite);

  // stars
  const starCount = 900;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const a = seeded(i * 4.2) * TAU;
    const y = 0.16 + seeded(i * 2.7) * 0.82;
    const r = Math.sqrt(1 - y * y);
    const radius = 385;
    starPos[i * 3] = Math.cos(a) * r * radius;
    starPos[i * 3 + 1] = y * radius;
    starPos[i * 3 + 2] = Math.sin(a) * r * radius;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    color: 0xffebc9,
    size: 1.15,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    fog: false,
  }));
  scene.add(stars);

  return { sky, uniforms, sunSprite, stars };
}

function createOcean(scene) {
  const waterNormal = makeWaterNormal();
  const mat = new THREE.MeshStandardMaterial({
    color: 0x237c89,
    roughness: 0.33,
    metalness: 0.14,
    normalMap: waterNormal,
    normalScale: new THREE.Vector2(0.2, 0.2),
    envMapIntensity: 1.2,
    transparent: false,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(900, 900, 1, 1), mat);
  water.rotation.x = -Math.PI / 2;
  water.position.y = -1.32;
  water.receiveShadow = true;
  scene.add(water);

  const foam = new THREE.Mesh(
    new THREE.RingGeometry(13.3, 16.2, 96, 1),
    new THREE.MeshBasicMaterial({
      map: foamTex,
      transparent: true,
      opacity: 0.34,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  foam.rotation.x = -Math.PI / 2;
  foam.position.y = -1.27;
  scene.add(foam);
  const foam2 = foam.clone();
  foam2.scale.setScalar(1.17);
  foam2.material = foam.material.clone();
  foam2.material.opacity = 0.14;
  foam2.position.y = -1.26;
  scene.add(foam2);

  return { water, mat, normalMap: waterNormal, foam, foam2 };
}

function createIsland(scene) {
  const island = new THREE.Group();
  scene.add(island);

  // submerged rock mass
  const rockBase = new THREE.Mesh(new THREE.CylinderGeometry(14.1, 11.6, 2.4, 72), M.cliffDark);
  rockBase.position.y = -1.6;
  rockBase.receiveShadow = true;
  island.add(rockBase);
  cyl(island, 13.6, 13.9, 0.8, M.sand, 0, -0.12, 0, 72).receiveShadow = true;

  // layered shoreline
  const shore = new THREE.Mesh(new THREE.CylinderGeometry(13.6, 14.0, 0.22, 72), M.moss);
  shore.position.y = 0.22;
  island.add(shore);

  // fallen stone rim
  const rim = new THREE.Mesh(new THREE.TorusGeometry(13.5, 0.18, 8, 80), M.stone);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.34;
  island.add(rim);

  // central stone promenade, raised in two shallow steps
  cyl(island, 10.8, 11.2, 0.26, M.stoneDark, 0, 0.39, 0, 96).receiveShadow = true;
  cyl(island, 10.2, 10.5, 0.22, M.stone, 0, 0.57, 0, 96).receiveShadow = true;
  const pavingMat = new THREE.MeshStandardMaterial({
    map: makePavingTexture(),
    roughness: 0.88,
    metalness: 0.04,
  });
  const paving = new THREE.Mesh(new THREE.CircleGeometry(10.1, 96), pavingMat);
  paving.rotation.x = -Math.PI / 2;
  paving.position.y = 0.69;
  paving.receiveShadow = true;
  island.add(paving);
  const goldRing = new THREE.Mesh(new THREE.TorusGeometry(10.08, 0.055, 6, 100), M.brass);
  goldRing.rotation.x = Math.PI / 2;
  goldRing.position.y = 0.71;
  island.add(goldRing);

  // little access path and stairs to the gate
  for (let i = 0; i < 4; i++) {
    box(island, 4.0 - i * 0.25, 0.16, 0.66, M.stone, 0, 0.7 - i * 0.16, 10.6 + i * 0.65).receiveShadow = true;
  }

  // shoreline rocks
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * TAU + 0.1;
    const r = 13.7 + seeded(i) * 1.1;
    const s = 0.55 + seeded(i * 3) * 1.6;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), i % 3 === 0 ? M.cliff : M.cliffDark);
    rock.position.set(Math.cos(a) * r, 0.1 + seeded(i * 4) * 0.25, Math.sin(a) * r);
    rock.scale.set(0.85 + seeded(i * 7) * 0.5, 0.6 + seeded(i * 9) * 0.5, 0.8 + seeded(i * 2) * 0.5);
    rock.rotation.set(seeded(i) * 2, seeded(i * 2) * 3, seeded(i * 5) * 2);
    rock.castShadow = true;
    island.add(rock);
  }

  // grass tufts and little flowers on the sandy edge
  for (let i = 0; i < 110; i++) {
    const a = seeded(i * 4.1) * TAU;
    const r = 10.8 + seeded(i * 7.3) * 2.2;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (z > 9.6 && Math.abs(x) < 4.6) continue;
    const blade = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.32 + seeded(i) * 0.35, 4), i % 4 === 0 ? M.leafDark : M.moss);
    blade.position.set(x, 0.43, z);
    blade.rotation.z = (seeded(i * 2) - 0.5) * 0.5;
    island.add(blade);
    if (i % 13 === 0) {
      sphere(island, 0.06, i % 2 ? M.orange : M.cream, x + 0.1, 0.65, z);
    }
  }

  return island;
}

function createSupport(scene) {
  const g = new THREE.Group();
  scene.add(g);
  const baseY = 0.68;
  const apexY = 12.55;
  const zFront = 4.55;
  const zBack = -4.55;

  for (const z of [zFront, zBack]) {
    // main A-frame legs
    for (const side of [-1, 1]) {
      const bottom = V(side * 5.65, baseY, z);
      const top = V(side * 0.66, apexY, z);
      beamBetween(g, bottom, top, 0.44, 0.36, M.navyDeep, M.gold);
      // gold edge
      const dir = new THREE.Vector3().subVectors(top, bottom).normalize();
      const off = V(0, 0, 0.22);
      beamBetween(g, bottom.clone().add(off), top.clone().add(off), 0.055, 0.04, M.gold);
      // red accent stripes
      for (let i = 0; i < 3; i++) {
        const t = 0.22 + i * 0.23;
        const p = bottom.clone().lerp(top, t);
        const band = new THREE.Mesh(UNIT_BOX, M.red);
        band.position.copy(p);
        band.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
        band.scale.set(0.52, 0.12, 0.4);
        g.add(band);
      }
      // foot
      box(g, 1.05, 0.34, 1.1, M.stoneDark, side * 5.65, baseY + 0.16, z);
      sphere(g, 0.36, M.gold, side * 5.65, baseY + 0.38, z);
      // lanterns partway up
      const lan = createLantern(1.1);
      lan.position.copy(bottom.clone().lerp(top, 0.46)).add(V(side * 0.42, 0, 0));
      g.add(lan);
      // rope wrapping
      for (let i = 0; i < 4; i++) {
        const t = 0.28 + i * 0.07;
        const p = bottom.clone().lerp(top, t);
        const wrap = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.035, 5, 12), M.rope);
        wrap.position.copy(p);
        wrap.quaternion.setFromUnitVectors(V(0, 0, 1), dir);
        g.add(wrap);
      }
    }
    // crossbar and ornamental X braces
    beamBetween(g, V(-3.0, 7.0, z), V(3.0, 7.0, z), 0.3, 0.22, M.navyDeep);
    beamBetween(g, V(-1.9, 9.6, z), V(1.9, 9.6, z), 0.22, 0.18, M.navyDeep);
    beamBetween(g, V(-2.55, 6.85, z), V(2.55, 6.85, z), 0.06, 0.05, M.gold);
    beamBetween(g, V(-1.55, 9.46, z), V(1.55, 9.46, z), 0.06, 0.05, M.gold);
    // decorative curved braces
    for (const side of [-1, 1]) {
      const pts = [
        V(side * 4.6, 2.2, z), V(side * 4.0, 3.4, z), V(side * 3.2, 4.1, z), V(side * 2.8, 5.9, z),
      ];
      tube(g, pts, 0.08, M.gold, 20, 4);
      const lan = createLantern(0.8);
      lan.position.set(side * 4.9, 3.0, z + (z > 0 ? 0.35 : -0.35));
      g.add(lan);
    }
    // crest above crossbar
    const star = createCompassStar(0.62, 0.1);
    star.position.set(0, 8.35, z + (z > 0 ? 0.25 : -0.25));
    if (z < 0) star.rotation.y = Math.PI;
    g.add(star);
  }

  // axle housing
  const axle = cyl(g, 0.33, 0.33, 9.6, M.brass, 0, 13.15, 0, 16);
  axle.rotation.x = Math.PI / 2;
  for (const z of [-4.9, -4.35, 4.35, 4.9]) {
    const ring = cyl(g, 0.42, 0.42, 0.14, M.gold, 0, 13.15, z, 18);
    ring.rotation.x = Math.PI / 2;
  }
  // central crest facing the bay
  const crest = new THREE.Group();
  crest.position.set(0, 13.35, 4.93);
  crest.userData.dynamic = true;
  const star = createCompassStar(1.24, 0.18);
  crest.add(star);
  torus(crest, 1.5, 0.08, M.gold, 0, 0, 0.05, 0, 0, 0, 40);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    sphere(crest, 0.07, M.goldLight, Math.cos(a) * 1.5, Math.sin(a) * 1.5, 0.13);
  }
  g.add(crest);

  // crowning mast and pennant on the support
  cyl(g, 0.1, 0.18, 6.4, M.woodDarkMat, 0, 15.2, 0, 8);
  for (const y of [15.9, 17.2, 18.15]) torus(g, 0.18, 0.025, M.gold, 0, y, 0, Math.PI / 2, 0, 0, 12);
  const supportFlag = createClothFlag(1.45, 0.42, null, { map: null, color: 0xb33d2d, transparent: false, alphaTest: 0 });
  supportFlag.mesh.position.set(0.04, 18.35, 0);
  g.add(supportFlag.mesh);
  const starTop = createCompassStar(0.4, 0.08);
  starTop.position.set(0, 18.8, 0);
  starTop.userData.dynamic = true;
  g.add(starTop);

  // support rope stays to ground
  for (const [x, z] of [[-8.7, 4.4], [8.7, 4.4], [-8.7, -4.4], [8.7, -4.4], [0, 9.0], [0, -9.0]]) {
    addRopeLine(g, V(0, 13.4, 0), V(x, 0.8, z), 0x2b2119, 0.4);
    cyl(g, 0.07, 0.1, 0.45, M.brass, x, 0.9, z, 6);
  }

  // festive bunting from the support to the sides
  const buntPal = [0xb54634, 0xe3bc70, 0x2e7379, 0xefe0bf, 0x985432];
  const buntings = [];
  buntings.push(createPennantString(g, V(0, 12.9, 4.55), V(8.5, 0.8, 4.6), 1.8, 15, buntPal, 1.1));
  buntings.push(createPennantString(g, V(0, 12.9, 4.55), V(-8.5, 0.8, 4.6), 1.8, 15, buntPal, 3.2));
  buntings.push(createPennantString(g, V(0, 12.9, -4.55), V(8.5, 0.8, -4.6), 1.8, 15, buntPal, 5.3));

  return {
    group: g,
    crest,
    supportFlag,
    buntings,
    update(time, dt, energy, nightness) {
      supportFlag.update(time, 0.8);
      buntings.forEach((b, i) => b.update(time + i * 0.2, 0.8));
      crest.rotation.z = Math.sin(time * 0.15) * 0.012;
      starTop.rotation.z += dt * 0.08;
    },
  };
}

function createGate(scene) {
  const g = new THREE.Group();
  g.position.set(-6.55, 0.64, 6.55);
  g.rotation.y = 0.33;
  g.scale.setScalar(0.92);
  scene.add(g);
  const z = 0;
  for (const side of [-1, 1]) {
    box(g, 1.4, 0.3, 1.5, M.stoneDark, side * 3.55, 0.15, z);
    box(g, 1.1, 0.28, 1.25, M.stone, side * 3.55, 0.43, z);
    cyl(g, 0.36, 0.43, 3.9, M.tealDeep, side * 3.55, 2.52, z, 12);
    for (const y of [0.8, 1.9, 3.2, 4.3]) {
      torus(g, 0.44, 0.055, M.gold, side * 3.55, y, z, Math.PI / 2, 0, 0, 16);
    }
    // fluting
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU;
      cyl(g, 0.035, 0.035, 3.1, M.gold, side * 3.55 + Math.cos(a) * 0.36, 2.5, z + Math.sin(a) * 0.36, 5);
    }
    // capital
    box(g, 1.1, 0.34, 1.05, M.gold, side * 3.55, 4.55, z);
    box(g, 1.4, 0.16, 1.28, M.brass, side * 3.55, 4.78, z);
    // lanterns
    const lan = createLantern(1.15);
    lan.position.set(side * 3.55, 3.6, z + 0.55);
    g.add(lan);
    // rope knots
    for (let i = 0; i < 3; i++) {
      torus(g, 0.48, 0.04, M.rope, side * 3.55, 1.1 + i * 0.08, z, Math.PI / 2, 0, 0, 14);
    }
  }

  // arch band
  const shape = new THREE.Shape();
  shape.moveTo(-4.6, 0);
  shape.lineTo(-4.6, 1.25);
  shape.quadraticCurveTo(-4.2, 3.45, 0, 3.45);
  shape.quadraticCurveTo(4.2, 3.45, 4.6, 1.25);
  shape.lineTo(4.6, 0);
  shape.lineTo(3.25, 0);
  shape.lineTo(3.25, 0.95);
  shape.quadraticCurveTo(3.0, 2.35, 0, 2.35);
  shape.quadraticCurveTo(-3.0, 2.35, -3.25, 0.95);
  shape.lineTo(-3.25, 0);
  shape.closePath();
  const archGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.7, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 2, steps: 1 });
  archGeo.translate(0, 0, -0.35);
  addMesh(g, archGeo, M.navyDeep, [0, 4.78, z]);
  const archGold = new THREE.Mesh(archGeo, M.gold);
  archGold.scale.set(1.008, 1.004, 0.4);
  archGold.position.set(0, 4.79, z);
  g.add(archGold);

  // hanging sign board
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(6.65, 3.15), new THREE.MeshStandardMaterial({
    map: signTexture,
    roughness: 0.6,
    metalness: 0.12,
    side: THREE.DoubleSide,
  }));
  sign.position.set(0, 6.55, 0.38);
  g.add(sign);
  box(g, 6.9, 3.4, 0.18, M.woodDarkMat, 0, 6.55, 0.2);
  box(g, 6.95, 0.11, 0.26, M.gold, 0, 8.22, 0.22);
  box(g, 6.95, 0.11, 0.26, M.gold, 0, 4.88, 0.22);
  for (const x of [-3.45, 3.45]) box(g, 0.11, 3.4, 0.26, M.gold, x, 6.55, 0.22);
  const signSkull = createSkull({ material: M.gold, eye: M.black, scale: 0.55, crossbones: true, wings: true });
  signSkull.position.set(0, 8.75, 0.36);
  signSkull.rotation.z = 0.03;
  g.add(signSkull);

  // roof crest
  const crest = createCompassStar(0.56, 0.1);
  crest.position.set(0, 9.35, 0.35);
  g.add(crest);

  // turnstile posts and red ropes
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const x = side * (1.95 + i * 1.0);
      cyl(g, 0.07, 0.09, 1.05, M.brass, x, 0.52, 2.8, 8);
      sphere(g, 0.09, M.gold, x, 1.1, 2.8);
    }
    for (let i = 0; i < 2; i++) {
      const x1 = side * (1.95 + i * 1.0);
      const x2 = side * (1.95 + (i + 1) * 1.0);
      tube(g, [V(x1, 0.88, 2.8), V((x1 + x2) / 2, 0.7, 2.8), V(x2, 0.88, 2.8)], 0.028, M.rope, 12, 4);
    }
  }

  // bunting across the gate
  const bunting = createPennantString(g, V(-3.55, 4.55, 0.4), V(3.55, 4.55, 0.4), 1.0, 16, [0xb54634, 0xe3bc70, 0x2e7379, 0xefe0bf], 6.2);
  return { group: g, signSkull, crest, bunting, update(time) { bunting.update(time, 0.75); } };
}

function createTicketBooth() {
  const g = new THREE.Group();
  const side = new THREE.Group();
  side.position.set(-8.1, 0.42, 7.6);
  side.rotation.y = 0.38;
  g.add(side);
  box(side, 2.1, 1.8, 1.6, M.cream, 0, 0.9, 0);
  box(side, 2.2, 0.18, 1.7, M.woodDarkMat, 0, 0.08, 0);
  // striped canopy
  for (let i = 0; i < 6; i++) {
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.12, 3, 1, true, (i / 6) * TAU, (1 / 6) * TAU), i % 2 ? M.red : M.parchmentMat);
    stripe.position.y = 2.1;
    stripe.material.side = THREE.DoubleSide;
    side.add(stripe);
  }
  box(side, 2.35, 0.22, 1.9, M.woodDarkMat, 0, 2.02, 0);
  cone(side, 1.2, 0.8, M.teal, 0, 2.5, 0, 8);
  // window
  box(side, 1.2, 0.7, 0.07, M.navyDeep, 0, 1.26, 0.82);
  box(side, 1.0, 0.52, 0.05, M.porthole, 0, 1.26, 0.87);
  box(side, 1.25, 0.09, 0.12, M.gold, 0, 1.64, 0.84);
  for (const x of [-0.9, 0.9]) box(side, 0.12, 2.0, 0.12, M.gold, x, 0.95, 0.8);
  const signMat = new THREE.MeshStandardMaterial({ map: makePlaqueTexture('售票处', 'TICKETS · 004'), roughness: 0.7, transparent: true });
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.52), signMat);
  sign.position.set(0, 1.9, 0.9);
  side.add(sign);
  return g;
}

function createProps(scene) {
  const g = new THREE.Group();
  scene.add(g);
  const props = [];

  function place(obj, x, y, z, ry = 0, s = 1) {
    obj.position.set(x, y, z);
    obj.rotation.y = ry;
    obj.scale.setScalar(s);
    g.add(obj);
    props.push(obj);
    return obj;
  }

  place(createBarrel(0.42, 1.0), -8.15, 0.9, 4.35, 0.2, 1.1);
  place(createBarrel(0.34, 0.8), -7.2, 0.82, 5.1, -0.3, 1.0);
  place(createBarrel(0.34, 0.85), 8.2, 0.82, 4.8, 0.8, 0.9);
  place(createCrate(0.85), 7.45, 0.9, 5.35, -0.2, 1.0);
  place(createCrate(0.55), 8.15, 1.08, 5.8, 0.45, 0.85);
  place(createCrate(0.65), -7.7, 1.0, 6.0, 0.1, 0.9);
  place(createTreasureChest(), 8.6, 0.76, 7.2, -0.65, 1.0);

  // anchor
  const anchor = new THREE.Group();
  cyl(anchor, 0.1, 0.12, 2.4, M.iron, 0, 1.2, 0, 8);
  torus(anchor, 0.33, 0.06, M.iron, 0, 2.4, 0, 0, 0, 0, 16);
  const bar = cyl(anchor, 0.07, 0.07, 1.8, M.iron, 0, 1.65, 0, 8);
  bar.rotation.z = Math.PI / 2;
  for (const side of [-1, 1]) {
    const pts = [V(0, 0.15, 0), V(side * 0.55, 0.0, 0), V(side * 0.78, 0.35, 0)];
    tube(anchor, pts, 0.09, M.iron, 18, 5);
    const fluke = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.55, 4), M.iron);
    fluke.position.set(side * 0.82, 0.15, 0);
    fluke.rotation.z = side > 0 ? -0.75 : 0.75;
    anchor.add(fluke);
  }
  place(anchor, 7.1, 0.7, 7.9, 0.45, 0.95);

  // cannon by the water
  const cannon = new THREE.Group();
  const barrel = cyl(cannon, 0.16, 0.26, 1.6, M.iron, 0, 0.55, 0, 14);
  barrel.rotation.z = Math.PI / 2;
  for (const x of [-0.45, 0.35]) {
    const wheel = cyl(cannon, 0.28, 0.28, 0.12, M.woodDarkMat, x, 0.22, 0.3, 12);
    wheel.rotation.x = Math.PI / 2;
    const wheel2 = wheel.clone();
    wheel2.position.z = -0.3;
    cannon.add(wheel2);
  }
  box(cannon, 1.18, 0.3, 0.58, M.woodDarkMat, 0, 0.37, 0);
  place(cannon, -8.4, 0.72, -2.0, 1.3, 1.1);

  // rope coils
  const coils = new THREE.Group();
  coils.position.set(-7.8, 0.88, 1.4);
  for (let i = 0; i < 3; i++) {
    torus(coils, 0.34 + i * 0.04, 0.055, M.rope, 0.3 + i * 0.1, 0.12 + i * 0.06, 0.3, Math.PI / 2, 0, 0, 20);
  }
  g.add(coils);

  return { group: g, props };
}

function createPalms(scene) {
  const palms = [];
  const data = [
    [-11.9, 2.9, 7.1, 1.5, 0.2, 1],
    [12.2, -1.8, 6.8, -1.5, 1.0, 2],
    [-9.7, -7.8, 7.8, 0.9, 2.1, 3],
    [9.2, -8.0, 8.0, -0.7, 3.0, 4],
    [-4.1, -11.9, 6.4, 0.2, 4.1, 5],
    [4.9, -11.6, 6.9, -0.2, 5.0, 6],
    [11.4, 8.7, 4.9, -0.8, 5.6, 7],
  ];
  for (const [x, z, h, lean, tw, seed] of data) {
    const palm = createPalm(h, lean, tw, seed);
    palm.position.set(x, 0.42, z);
    palm.rotation.y = tw;
    scene.add(palm);
    palms.push(palm);
  }
  return palms;
}

function createDistantLand(scene) {
  const land = new THREE.Group();
  scene.add(land);
  const isl = new THREE.Group();
  isl.position.set(-45, -3.5, -105);
  const rock = new THREE.Mesh(new THREE.CylinderGeometry(24, 32, 16, 24), standard(0x5e756e, { roughness: 1, flatShading: true }));
  rock.scale.set(1, 0.55, 0.7);
  isl.add(rock);
  // towers
  for (let i = 0; i < 4; i++) {
    const h = 8 + i * 5;
    const x = (i - 1.5) * 6.5;
    cyl(isl, 2.1, 2.5, h, standard(0x677f77, { roughness: 1 }), x, h / 2 + 4, 0, 8);
    cone(isl, 2.6, 4, standard(0x496b6a, { roughness: 1 }), x, h + 5.5, 0, 8);
  }
  isl.rotation.y = 0.3;
  land.add(isl);

  const isl2 = new THREE.Group();
  isl2.position.set(92, -2.2, -130);
  const rock2 = new THREE.Mesh(new THREE.ConeGeometry(22, 30, 7), standard(0x5e7772, { roughness: 1, flatShading: true }));
  rock2.position.y = 8;
  isl2.add(rock2);
  for (let i = 0; i < 3; i++) {
    cyl(isl2, 1.2, 1.8, 10 + i * 2, standard(0x647d74, { roughness: 1 }), -4 + i * 4.5, 19 + i, 0, 7);
    cone(isl2, 1.8, 3, standard(0x51706b, { roughness: 1 }), -4 + i * 4.5, 24 + i, 0, 7);
  }
  land.add(isl2);
  return land;
}

function createClouds(scene) {
  const groups = [];
  const cloudMat = M.cloud;
  const pinkMat = M.cloudPink;
  const data = [
    [-138, 46, -184, 1.55], [111, 38, -168, 1.45], [-24, 76, -246, 2.0],
    [192, 29, -126, 1.15], [-201, 31, -118, 1.2], [46, 88, -260, 2.2],
  ];
  for (const [x, y, z, s] of data) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    for (let i = 0; i < 6; i++) {
      const puff = lowSphere(g, 4.2 + seeded(i + x) * 5.2, i % 3 === 0 ? pinkMat : cloudMat,
        (i - 2.5) * 4.6, Math.sin(i * 1.7) * 1.7, (seeded(i * 3 + z) - 0.5) * 4.5,
        1, 0.42 + seeded(i) * 0.22, 0.8);
      puff.rotation.set(seeded(i) * 2, seeded(i * 2) * 2, seeded(i * 3) * 2);
    }
    g.scale.setScalar(s);
    scene.add(g);
    groups.push({ group: g, phase: seeded(x + z) * TAU });
  }
  return groups;
}

function createBirds(scene) {
  const birds = [];
  const mat = new THREE.LineBasicMaterial({ color: 0x22312f, transparent: true, opacity: 0.6 });
  for (let i = 0; i < 7; i++) {
    const geo = new THREE.BufferGeometry();
    const points = new Float32Array([-0.4, 0, 0, 0, 0.09, 0, 0.4, 0, 0, 0, 0.09, 0, 0, -0.11, 0]);
    geo.setAttribute('position', new THREE.BufferAttribute(points, 3));
    const bird = new THREE.Line(geo, mat);
    bird.userData = { r: 22 + i * 7, y: 17 + i * 3, speed: 0.05 + i * 0.007, phase: i * 1.4, dir: i % 2 ? 1 : -1 };
    scene.add(bird);
    birds.push(bird);
  }
  return birds;
}

function createParticles(scene) {
  const count = 160;
  const positions = new Float32Array(count * 3);
  const seeds = [];
  for (let i = 0; i < count; i++) {
    const a = seeded(i * 3) * TAU;
    const r = 3 + seeded(i * 5) * 12;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = 1 + seeded(i * 7) * 13;
    positions[i * 3 + 2] = Math.sin(a) * r;
    seeds.push({ a, r, y: positions[i * 3 + 1], speed: 0.2 + seeded(i * 9) * 0.4, phase: seeded(i) * TAU });
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    map: makeGlowTexture('rgba(255,236,184,.95)', 'rgba(255,196,102,0)'),
    color: 0xffd58e,
    size: 0.14,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);
  return { points, seeds };
}

/* ================================================================
   WORLD
   ================================================================ */
export function createWorld(renderer, options = {}) {
  ANISO = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const isMobile = options.mobile ?? false;
  initMaterials();
  glowTex = makeGlowTexture();
  foamTex = makeFoamTexture();
  skyEnvTexture = makeSkyEnvTexture();
  jollyTexture = makeJollyTexture();
  signTexture = makeSignTexture();
  plaqueTexture = makePlaqueTexture('黑帆号', 'BLACK SAIL');
  bannerTextureRed = makeBannerTexture('#8c2e28');
  bannerTextureTeal = makeBannerTexture('#1b5962');
  M.parchmentMat = standard(0xe7d2aa, { roughness: 0.9 });

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8eb5b5);
  scene.fog = new THREE.FogExp2(0xa9b3a0, 0.0042);

  // environment reflection map
  const pmrem = new THREE.PMREMGenerator(renderer);
  skyEnvTexture.mapping = THREE.EquirectangularReflectionMapping;
  const envRT = pmrem.fromEquirectangular(skyEnvTexture);
  scene.environment = envRT.texture;
  scene.environmentIntensity = 0.72;
  pmrem.dispose();

  // lights
  const hemi = new THREE.HemisphereLight(0xc5e2df, 0x5e4a36, 0.88);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffddb0, 3.05);
  sun.position.set(17, 27, 19);
  sun.castShadow = !isMobile;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -23;
  sun.shadow.camera.right = 23;
  sun.shadow.camera.top = 28;
  sun.shadow.camera.bottom = -10;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 70;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x79b9cc, 0.54);
  fill.position.set(-22, 13, -18);
  scene.add(fill);
  const frontFill = new THREE.DirectionalLight(0xffe3bf, 1.28);
  frontFill.position.set(22, 9, 30);
  scene.add(frontFill);
  const rim = new THREE.DirectionalLight(0xffbd85, 0.62);
  rim.position.set(-4, 13, -24);
  scene.add(rim);

  // sky & water
  const sky = createSky(scene);
  const ocean = createOcean(scene);
  const island = createIsland(scene);

  // main set
  const support = createSupport(scene);
  const ship = createShip();
  scene.add(ship.rig);
  const gate = createGate(scene);
  const props = createProps(scene);
  const palms = createPalms(scene);
  const ticketBooth = createTicketBooth();
  scene.add(ticketBooth);
  const distant = createDistantLand(scene);
  const clouds = createClouds(scene);
  const birds = createBirds(scene);
  const particles = createParticles(scene);

  // warm lights on the promenade
  const lampLights = [];
  for (const [x, z] of [[-8.3, 8.2], [8.4, 8.3], [-7.6, -5.6], [7.9, -5.8]]) {
    const post = new THREE.Group();
    post.position.set(x, 0.65, z);
    cyl(post, 0.09, 0.13, 3.2, M.iron, 0, 1.6, 0, 8);
    torus(post, 0.25, 0.04, M.gold, 0, 2.3, 0, Math.PI / 2, 0, 0, 12);
    const lan = createLantern(1.15);
    lan.position.set(0, 3.35, 0);
    post.add(lan);
    scene.add(post);
    const light = new THREE.PointLight(0xffb86c, 2.2, 10, 2);
    light.position.set(x, 3.35, z);
    scene.add(light);
    lampLights.push({ light, lantern: lan, base: 2.2 });
  }

  // ship lanterns actually illuminate the deck
  const deckLight = new THREE.PointLight(0xffb76b, 2.4, 9, 2);
  deckLight.position.set(0, 9.8, 0);
  scene.add(deckLight);

  // additional fill under the ship
  const underLight = new THREE.PointLight(0xffd096, 1.0, 14, 2);
  underLight.position.set(0, 4.5, 3.2);
  scene.add(underLight);

  // anchor objects for UI projections
  const anchors = {
    figurehead: new THREE.Object3D(),
    wheel: new THREE.Object3D(),
    flag: new THREE.Object3D(),
    gate: new THREE.Object3D(),
  };
  anchors.figurehead.position.copy(ship.anchor.figurehead);
  anchors.wheel.position.copy(ship.anchor.wheel);
  anchors.flag.position.copy(ship.anchor.flag);
  ship.rig.add(anchors.figurehead, anchors.wheel, anchors.flag);
  anchors.gate.position.set(-6.35, 6.7, 6.9);
  scene.add(anchors.gate);

  // Collapse static detail into a few merged draw calls; animated branches
  // (flags, riders, pennants, lantern glows, palm crowns) stay live.
  scene.updateMatrixWorld(true);
  mergeStaticMeshes(ship.vessel);
  mergeStaticMeshes(support.group);
  mergeStaticMeshes(gate.group);
  mergeStaticMeshes(island);
  mergeStaticMeshes(props.group);
  mergeStaticMeshes(ticketBooth);
  mergeStaticMeshes(distant);
  palms.forEach((palm) => mergeStaticMeshes(palm));
  clouds.forEach((cloud) => mergeStaticMeshes(cloud.group));

  let nightness = 0.22;
  let targetNight = 0.22;
  let time = 0;
  let energy = 0;
  const dayPal = {
    top: new THREE.Color(0x3c88a3),
    horizon: new THREE.Color(0xf3d4a3),
    bottom: new THREE.Color(0xa27b5c),
    fog: new THREE.Color(0xa9b5a4),
    water: new THREE.Color(0x1b7080),
    sun: new THREE.Color(0xffddb0),
    hemiSky: new THREE.Color(0xc5e2df),
    hemiGround: new THREE.Color(0x5e4a36),
    sunIntensity: 3.05,
    hemiIntensity: 0.88,
    fillIntensity: 0.54,
    frontFill: 1.28,
    env: 0.72,
  };
  const nightPal = {
    top: new THREE.Color(0x061923),
    horizon: new THREE.Color(0x163b46),
    bottom: new THREE.Color(0x0a2025),
    fog: new THREE.Color(0x0a222a),
    water: new THREE.Color(0x092e3b),
    sun: new THREE.Color(0x9bcaec),
    hemiSky: new THREE.Color(0x4e8b9f),
    hemiGround: new THREE.Color(0x261c16),
    sunIntensity: 0.6,
    hemiIntensity: 0.55,
    fillIntensity: 0.3,
    frontFill: 0.42,
    env: 0.3,
  };
  const dayCache = {
    top: dayPal.top.clone(), horizon: dayPal.horizon.clone(), bottom: dayPal.bottom.clone(),
    fog: dayPal.fog.clone(), water: dayPal.water.clone(), sun: dayPal.sun.clone(),
    hemiSky: dayPal.hemiSky.clone(), hemiGround: dayPal.hemiGround.clone(),
  };

  function applyNight(immediate = false) {
    if (immediate) nightness = targetNight;
    const t = nightness;
    const mix = (a, b, out) => out.copy(a).lerp(b, t);
    mix(dayPal.top, nightPal.top, sky.uniforms.topColor.value);
    mix(dayPal.horizon, nightPal.horizon, sky.uniforms.horizonColor.value);
    mix(dayPal.bottom, nightPal.bottom, sky.uniforms.bottomColor.value);
    mix(dayPal.fog, nightPal.fog, scene.fog.color);
    mix(dayPal.water, nightPal.water, ocean.mat.color);
    mix(dayPal.sun, nightPal.sun, sun.color);
    mix(dayPal.hemiSky, nightPal.hemiSky, hemi.color);
    mix(dayPal.hemiGround, nightPal.hemiGround, hemi.groundColor);
    sun.intensity = lerp(dayPal.sunIntensity, nightPal.sunIntensity, t);
    hemi.intensity = lerp(dayPal.hemiIntensity, nightPal.hemiIntensity, t);
    fill.intensity = lerp(dayPal.fillIntensity, nightPal.fillIntensity, t);
    frontFill.intensity = lerp(dayPal.frontFill, nightPal.frontFill, t);
    scene.environmentIntensity = lerp(dayPal.env, nightPal.env, t);
    sky.uniforms.night.value = t;
    sky.stars.material.opacity = Math.pow(Math.max(0, (t - 0.45) / 0.55), 1.3) * 0.9;
    sky.sunSprite.material.opacity = lerp(0.85, 0.35, t);
    sky.sunSprite.material.color.copy(sun.color);
    M.lanternGlass.emissiveIntensity = lerp(1.1, 3.3, t);
    M.porthole.emissiveIntensity = lerp(0.5, 2.2, t);
    M.cloud.color.set(0xeee4cf).lerp(new THREE.Color(0x3f5962), t);
    M.cloudPink.color.set(0xe6cbb2).lerp(new THREE.Color(0x4a5a60), t);
    for (const l of lampLights) l.light.intensity = l.base * lerp(0.5, 2.3, t);
    deckLight.intensity = lerp(0.9, 3.0, t);
    underLight.intensity = lerp(0.4, 1.6, t);
  }

  // initial palette
  applyNight(true);

  // focus shots: live look-at points, tuned cameras
  const views = {
    overview: {
      pos: V(20.2, 15.7, 33.6), target: V(0, 8.7, 0),
    },
    figurehead: {
      pos: V(14.2, 8.3, 7.4), target: V(8.5, 10.7, 0.4),
    },
    wheel: {
      pos: V(-12.3, 8.2, 9.8), target: V(-5.9, 12.0, 0.3),
    },
    flag: {
      pos: V(9.8, 16.2, 12.5), target: V(0.6, 19.7, 0),
    },
    gate: {
      pos: V(5.8, 4.5, 20.6), target: V(0, 6.2, 9.8),
    },
  };

  const dummyOcean = new THREE.Color();
  return {
    scene,
    sky,
    ocean,
    island,
    support,
    ship,
    gate,
    anchors,
    views,
    palms,
    clouds,
    birds,
    particles,
    sun,
    hemi,
    fill,
    lampLights,
    get nightness() { return nightness; },
    setNight(on, immediate = false) {
      targetNight = on ? 1 : 0.22;
      if (immediate) {
        nightness = targetNight;
        applyNight(true);
      }
    },
    setEnergy(value) {
      energy = clamp(value, 0, 1);
    },
    update(dt, elapsed) {
      time = elapsed;
      if (Math.abs(targetNight - nightness) > 0.001) {
        nightness += (targetNight - nightness) * Math.min(1, dt * 1.1);
        applyNight(false);
      }

      ship.update(time, dt, energy);
      support.update(time, dt, energy, nightness);
      gate.update(time);

      // palm sway
      for (let i = 0; i < palms.length; i++) {
        const p = palms[i];
        p.rotation.z = Math.sin(time * 0.6 + i) * 0.018;
        p.rotation.x = Math.sin(time * 0.48 + i * 1.7) * 0.014;
        const crown = p.userData.crown;
        crown.rotation.z = Math.sin(time * 1.1 + i) * 0.028;
        crown.rotation.x = Math.cos(time * 0.9 + i) * 0.022;
        for (let j = 0; j < p.userData.leaves.length; j++) {
          const leaf = p.userData.leaves[j];
          leaf.rotation.y = Math.sin(time * 1.5 + leaf.userData.phase + j * 0.2) * 0.055;
        }
      }

      // water normal drift
      ocean.normalMap.offset.x = time * 0.011;
      ocean.normalMap.offset.y = time * 0.006;
      ocean.foam.material.opacity = 0.26 + Math.sin(time * 0.7) * 0.06;
      ocean.foam.rotation.z = time * 0.01;
      ocean.foam2.material.opacity = 0.1 + Math.sin(time * 0.55 + 2) * 0.03;
      ocean.foam2.rotation.z = -time * 0.008;

      // lamp flicker
      for (let i = 0; i < lampLights.length; i++) {
        const l = lampLights[i];
        const flicker = 0.9 + Math.sin(time * 9.2 + i * 2.3) * 0.05 + Math.sin(time * 21.1 + i) * 0.025;
        l.light.intensity = l.base * lerp(0.5, 2.3, nightness) * flicker;
        l.lantern.userData.glow.material.opacity = (0.45 + nightness * 0.35) * flicker;
      }

      // ambient motes
      const pos = particles.points.geometry.attributes.position.array;
      for (let i = 0; i < particles.seeds.length; i++) {
        const s = particles.seeds[i];
        const a = s.a + time * 0.018 * s.speed;
        pos[i * 3] = Math.cos(a) * s.r;
        pos[i * 3 + 1] = s.y + Math.sin(time * s.speed + s.phase) * 0.8;
        pos[i * 3 + 2] = Math.sin(a) * s.r;
      }
      particles.points.geometry.attributes.position.needsUpdate = true;

      // far clouds, slow traffic
      for (let i = 0; i < clouds.length; i++) {
        const c = clouds[i];
        c.group.position.x += Math.sin(time * 0.03 + c.phase) * dt * 0.04;
      }

      // gulls
      for (let i = 0; i < birds.length; i++) {
        const b = birds[i];
        const u = b.userData;
        const a = time * u.speed * u.dir + u.phase;
        b.position.set(Math.cos(a) * u.r, u.y + Math.sin(time * 0.7 + u.phase) * 1.5, Math.sin(a) * u.r);
        b.rotation.y = -a + (u.dir > 0 ? Math.PI : 0);
        b.rotation.z = Math.sin(time * 4.2 + u.phase) * 0.22;
        b.scale.setScalar(0.9 + Math.sin(time * 2 + u.phase) * 0.04);
      }

      // subtle support star glimmer
      ship.portGlowMats.forEach((m) => {
        m.emissiveIntensity = lerp(0.35, 2.1, nightness) + Math.sin(time * 3.1) * 0.06;
      });
    },
    getLandmarkWorld(name) {
      const a = anchors[name];
      if (!a) return null;
      return a.getWorldPosition(new THREE.Vector3());
    },
  };
}

/*
 * Reuse the exact Black Sail vessel in the main ASTRALIA park.  The standalone
 * world keeps its own sky/water/support; this entry point initializes just the
 * ship materials and textures (the same path createWorld uses) and returns the
 * unmerged rig, so the park can place the vessel on its lagoon.
 */
export function createParkShip(renderer) {
  ANISO = Math.min(8, renderer?.capabilities?.getMaxAnisotropy?.() ?? 4);
  initMaterials();
  glowTex = makeGlowTexture();
  jollyTexture = makeJollyTexture();
  plaqueTexture = makePlaqueTexture('黑帆号', 'BLACK SAIL');
  bannerTextureRed = makeBannerTexture('#8c2e28');
  bannerTextureTeal = makeBannerTexture('#1b5962');
  return createShip();
}

export { mergeStaticMeshes };
