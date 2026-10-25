import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  addBox, addCone, addCylinder, addPlane, addSphere, addStar, addTorus,
  basic, cylinderBetween, makeCanvasPlaneTexture, makeGlowTexture, makeSign,
  standard,
} from './builders.js';

const GOLD = 0xd9b66f;
const GOLD_LIGHT = 0xf2d597;
const GOLD_DARK = 0x9c7138;
const CREAM = 0xf3e3c7;
const CRIMSON = 0x8f2030;
const WOOD = 0x6b4632;
const IRON = 0x25202a;

const SPHERE = new THREE.SphereGeometry(1, 18, 12);
const BULB_GEO = new THREE.SphereGeometry(0.105, 7, 5);

function textureMaterial(map, opts = {}) {
  return new THREE.MeshStandardMaterial({
    map,
    color: opts.color ?? 0xffffff,
    roughness: opts.roughness ?? 0.6,
    metalness: opts.metalness ?? 0.05,
    side: opts.side ?? THREE.FrontSide,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    alphaTest: opts.alphaTest ?? 0,
    depthWrite: opts.depthWrite ?? true,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    toneMapped: opts.toneMapped ?? true,
  });
}

function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function makeCanopyTexture() {
  return canvasTexture(2048, 512, (ctx, w, h) => {
    const stripes = 20;
    const sw = w / stripes;
    for (let i = 0; i < stripes; i++) {
      const cream = i % 2 === 0;
      const g = ctx.createLinearGradient(0, 0, 0, h);
      if (cream) {
        g.addColorStop(0, '#fff5df');
        g.addColorStop(0.52, '#efddc0');
        g.addColorStop(1, '#c9aa82');
      } else {
        g.addColorStop(0, '#b4313d');
        g.addColorStop(0.46, '#8e1e2e');
        g.addColorStop(1, '#5d1524');
      }
      ctx.fillStyle = g;
      ctx.fillRect(i * sw, 0, sw + 1, h);
      // golden seams and a subtle hand-painted fabric shadow
      ctx.fillStyle = 'rgba(246,209,140,.7)';
      ctx.fillRect(i * sw, 0, 3, h);
      ctx.fillStyle = 'rgba(33,8,14,.24)';
      ctx.fillRect(i * sw + 3, 0, 7, h);
      if (!cream) {
        ctx.fillStyle = 'rgba(255,201,129,.12)';
        for (let x = i * sw + 22; x < (i + 1) * sw - 12; x += 34) {
          ctx.fillRect(x, 0, 2, h);
        }
      }
    }
    // A thin ornamental arc where the canopy meets the crown
    const shade = ctx.createLinearGradient(0, h * 0.8, 0, h);
    shade.addColorStop(0, 'rgba(25,5,10,0)');
    shade.addColorStop(1, 'rgba(25,5,10,.38)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, h * 0.8, w, h * 0.2);
  });
}

function makeValanceTexture() {
  const tex = canvasTexture(512, 300, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    // Scalloped crimson panel with woven border, antique star crest
    const bottom = h * 0.74;
    const scallop = h * 0.96;
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, 0);
      ctx.lineTo(w, bottom);
      ctx.quadraticCurveTo(w * 0.76, scallop, w * 0.5, scallop);
      ctx.quadraticCurveTo(w * 0.24, scallop, 0, bottom);
      ctx.closePath();
    };
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#a62a38');
    g.addColorStop(0.6, '#7e1928');
    g.addColorStop(1, '#5a1220');
    path();
    ctx.fillStyle = g;
    ctx.fill();
    ctx.save();
    path();
    ctx.clip();
    // fabric folds
    for (let x = 22; x < w; x += 42) {
      ctx.fillStyle = 'rgba(255,222,166,.055)';
      ctx.fillRect(x, 0, 15, h);
      ctx.fillStyle = 'rgba(35,6,12,.12)';
      ctx.fillRect(x + 26, 0, 13, h);
    }
    ctx.strokeStyle = 'rgba(241,205,139,.85)';
    ctx.lineWidth = 4;
    for (let y = 18; y < h; y += 18) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.quadraticCurveTo(w / 2, y + 8, w, y);
      ctx.stroke();
      if (y > 60) break;
    }
    ctx.restore();
    // border and fringe
    ctx.strokeStyle = '#e7c27d';
    ctx.lineWidth = 7;
    path();
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,241,202,.65)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(12, 14);
    ctx.lineTo(w - 12, 14);
    ctx.stroke();
    // painted medallion: cream oval with a teal pinstripe and gilt rosette
    const cx = w / 2;
    const cy = 88;
    ctx.fillStyle = '#efdcb8';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 72, 43, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d7ad68';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.strokeStyle = '#3f7574';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 60, 34, 0, 0, Math.PI * 2);
    ctx.stroke();
    // a gilded eight-petal rosette, kept light so it reads as painting rather than an eye
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * 22, cy + Math.sin(a) * 12, 13, 4.2, a, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 ? '#f5d99c' : '#e6bd76';
      ctx.fill();
    }
    ctx.fillStyle = '#fff1c8';
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#c9974d';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#3f7574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 102, cy + 34);
    ctx.quadraticCurveTo(cx - 82, cy + 54, cx - 50, cy + 28);
    ctx.moveTo(cx + 102, cy + 34);
    ctx.quadraticCurveTo(cx + 82, cy + 54, cx + 50, cy + 28);
    ctx.stroke();
    // a tiny gilt cartouche under the painting
    ctx.fillStyle = 'rgba(248,224,172,.9)';
    ctx.beginPath();
    ctx.ellipse(cx, 154, 34, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    // hanging tassel
    ctx.strokeStyle = '#d9b66f';
    ctx.lineWidth = 2;
    for (let x = 6; x < w; x += 13) {
      ctx.beginPath();
      ctx.moveTo(x, bottom);
      ctx.lineTo(x + 2, h - 2);
      ctx.stroke();
    }
    ctx.fillStyle = '#e8c888';
    ctx.beginPath();
    ctx.arc(cx, scallop - 6, 7, 0, Math.PI * 2);
    ctx.fill();
  });
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.repeat.x = 20;
  return tex;
}

function makeCeilingTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    const c = w / 2;
    const g = ctx.createRadialGradient(c, c, 10, c, c, c);
    g.addColorStop(0, '#fff1cf');
    g.addColorStop(0.2, '#f0d8a8');
    g.addColorStop(0.75, '#d3ad74');
    g.addColorStop(1, '#8d633d');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.save();
    ctx.translate(c, c);
    // 20 radial ribs matching the canopy stripes
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      ctx.strokeStyle = i % 2 ? 'rgba(127,80,40,.55)' : 'rgba(255,244,214,.5)';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * c, Math.sin(a) * c);
      ctx.stroke();
    }
    for (const r of [0.34, 0.58, 0.82]) {
      ctx.strokeStyle = 'rgba(113,68,33,.52)';
      ctx.lineWidth = r === 0.58 ? 8 : 4;
      ctx.beginPath();
      ctx.arc(0, 0, c * r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(255,246,220,.52)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, c * r + 6, 0, Math.PI * 2);
      ctx.stroke();
    }
    // painted medallions between rings
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.15;
      const rr = c * 0.7;
      const x = Math.cos(a) * rr;
      const y = Math.sin(a) * rr;
      ctx.fillStyle = i % 2 ? 'rgba(122,38,46,.75)' : 'rgba(31,88,86,.72)';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#e9c681';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = '#f6e2b3';
      ctx.beginPath();
      for (let k = 0; k < 10; k++) {
        const aa = (k / 10) * Math.PI * 2;
        const rad = k % 2 ? 6 : 16;
        if (k === 0) ctx.moveTo(x + Math.cos(aa) * rad, y + Math.sin(aa) * rad);
        else ctx.lineTo(x + Math.cos(aa) * rad, y + Math.sin(aa) * rad);
      }
      ctx.closePath();
      ctx.fill();
    }
    // central painted rose, hidden partly by the column but glowing through
    ctx.fillStyle = '#7a1d2b';
    ctx.beginPath();
    ctx.arc(0, 0, c * 0.23, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f1d08c';
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.fillStyle = '#f6dfaa';
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(Math.cos(a) * c * 0.11, Math.sin(a) * c * 0.11, c * 0.055, c * 0.022, a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    // vignette
    const v = ctx.createRadialGradient(c, c, c * 0.45, c, c, c);
    v.addColorStop(0, 'rgba(0,0,0,0)');
    v.addColorStop(1, 'rgba(45,22,8,.35)');
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeInnerCanopyTexture() {
  return canvasTexture(2048, 512, (ctx, w, h) => {
    const stripes = 20;
    const sw = w / stripes;
    for (let i = 0; i < stripes; i++) {
      const warm = i % 2 === 0;
      const g = ctx.createLinearGradient(0, 0, 0, h);
      if (warm) {
        g.addColorStop(0, '#f8ebd2');
        g.addColorStop(0.55, '#e7d0aa');
        g.addColorStop(1, '#b78f5d');
      } else {
        g.addColorStop(0, '#e3c4b3');
        g.addColorStop(0.55, '#c99f8c');
        g.addColorStop(1, '#8d5a50');
      }
      ctx.fillStyle = g;
      ctx.fillRect(i * sw, 0, sw + 1, h);
      ctx.fillStyle = 'rgba(247,214,151,.65)';
      ctx.fillRect(i * sw, 0, 3, h);
      ctx.fillStyle = 'rgba(90,53,28,.22)';
      ctx.fillRect(i * sw + 3, 0, 6, h);
      // fine painted pin lines and a little woven texture
      ctx.fillStyle = warm ? 'rgba(255,249,230,.4)' : 'rgba(255,232,210,.3)';
      ctx.fillRect(i * sw + sw * 0.44, 0, 2, h);
      ctx.fillStyle = 'rgba(92,50,28,.3)';
      ctx.fillRect(i * sw + sw * 0.47, 0, 1.5, h);
      for (let x = i * sw + 20; x < (i + 1) * sw - 10; x += 31) {
        ctx.fillStyle = 'rgba(255,235,198,.04)';
        ctx.fillRect(x, 0, 10, h);
      }
    }
    // a painted border near the rim with tiny gold rosettes
    for (let i = 0; i < 20; i++) {
      const cx = i * sw + sw / 2;
      ctx.fillStyle = 'rgba(108,25,35,.72)';
      ctx.beginPath();
      ctx.arc(cx, h * 0.9, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#efd092';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = '#f8e5b8';
      ctx.beginPath();
      ctx.arc(cx, h * 0.9, 5, 0, Math.PI * 2);
      ctx.fill();
    }
    const shade = ctx.createLinearGradient(0, 0, 0, h);
    shade.addColorStop(0, 'rgba(255,255,255,.08)');
    shade.addColorStop(1, 'rgba(57,25,12,.28)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, w, h);
  });
}

function makeDeckTexture() {
  return canvasTexture(1024, 1024, (ctx, w, h) => {
    const c = w / 2;
    ctx.fillStyle = '#4a2d21';
    ctx.fillRect(0, 0, w, h);
    // concentric oak boards
    const rings = 23;
    for (let i = rings; i >= 0; i--) {
      const r = (i / rings) * c;
      const tone = ['#8e6749', '#7d583f', '#9a7151', '#755039', '#916a4c'][i % 5];
      ctx.strokeStyle = tone;
      ctx.lineWidth = c / rings + 1;
      ctx.beginPath();
      ctx.arc(c, c, r, 0, Math.PI * 2);
      ctx.stroke();
      if (i > 0) {
        ctx.strokeStyle = 'rgba(42,24,16,.65)';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(c, c, Math.max(0.5, r - (c / rings) * 0.5), 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    // radial joints, staggered like a real parquet deck
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2 + (i % 2) * 0.035;
      ctx.strokeStyle = 'rgba(47,28,18,.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(c + Math.cos(a) * c * 0.12, c + Math.sin(a) * c * 0.12);
      ctx.lineTo(c + Math.cos(a) * c, c + Math.sin(a) * c);
      ctx.stroke();
    }
    // fine grain
    for (let i = 0; i < 900; i++) {
      const a = Math.random() * Math.PI * 2;
      const rr = Math.sqrt(Math.random()) * c;
      ctx.strokeStyle = `rgba(255,220,173,${0.015 + Math.random() * 0.045})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(c, c, rr, a, a + 0.1 + Math.random() * 0.4);
      ctx.stroke();
    }
    // center inlay and brass compass ring
    ctx.strokeStyle = '#d8b36d';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(c, c, c * 0.2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(245,218,160,.9)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(c + Math.cos(a) * c * 0.12, c + Math.sin(a) * c * 0.12);
      ctx.lineTo(c + Math.cos(a) * c * 0.2, c + Math.sin(a) * c * 0.2);
      ctx.stroke();
    }
    // dark polished border
    ctx.strokeStyle = 'rgba(35,20,13,.65)';
    ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.arc(c, c, c - 15, 0, Math.PI * 2);
    ctx.stroke();
  });
}

function makeBaseTexture() {
  const tex = canvasTexture(2048, 256, (ctx, w, h) => {
    const panels = 20;
    const pw = w / panels;
    ctx.fillStyle = '#301d1e';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < panels; i++) {
      const x = i * pw;
      const dark = i % 2 === 0;
      ctx.fillStyle = dark ? '#6f1d2a' : '#224f50';
      ctx.fillRect(x + 5, 7, pw - 10, h - 14);
      ctx.strokeStyle = '#d8b36d';
      ctx.lineWidth = 3;
      ctx.strokeRect(x + 9, 11, pw - 18, h - 22);
      ctx.strokeStyle = 'rgba(255,238,195,.32)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 15, 17, pw - 30, h - 34);
      const cx = x + pw / 2;
      const cy = h / 2;
      ctx.fillStyle = '#e9c681';
      ctx.beginPath();
      for (let k = 0; k < 10; k++) {
        const a = (k / 10) * Math.PI * 2 - Math.PI / 2;
        const r = k % 2 ? 10 : 24;
        if (k === 0) ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        else ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = dark ? '#6f1d2a' : '#224f50';
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.x = 1;
  return tex;
}

function makeColumnTexture() {
  return canvasTexture(2048, 1024, (ctx, w, h) => {
    ctx.fillStyle = '#4d191f';
    ctx.fillRect(0, 0, w, h);
    const panels = 8;
    const pw = w / panels;
    for (let i = 0; i < panels; i++) {
      const x = i * pw;
      ctx.fillStyle = i % 2 ? '#1e4a4d' : '#5f1826';
      ctx.fillRect(x + 20, 40, pw - 40, h - 80);
      const glass = ctx.createLinearGradient(x, 0, x + pw, h);
      glass.addColorStop(0, 'rgba(222,246,242,.5)');
      glass.addColorStop(0.35, 'rgba(132,193,194,.2)');
      glass.addColorStop(0.66, 'rgba(255,221,166,.18)');
      glass.addColorStop(1, 'rgba(232,247,242,.4)');
      ctx.fillStyle = glass;
      ctx.fillRect(x + 38, 62, pw - 76, h - 124);
      ctx.strokeStyle = '#e5c27c';
      ctx.lineWidth = 7;
      ctx.strokeRect(x + 26, 48, pw - 52, h - 96);
      ctx.strokeStyle = 'rgba(255,242,204,.55)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 42, 64, pw - 84, h - 128);
      // gilded scroll flourishes
      ctx.strokeStyle = '#d8b36d';
      ctx.lineWidth = 5;
      for (const sy of [h * 0.27, h * 0.73]) {
        ctx.beginPath();
        ctx.arc(x + pw / 2, sy, 42, Math.PI * 0.2, Math.PI * 1.25);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x + pw / 2, sy, 22, Math.PI * 1.1, Math.PI * 2.2);
        ctx.stroke();
      }
      // star crest in the middle of each panel
      const cx = x + pw / 2;
      const cy = h * 0.5;
      ctx.fillStyle = '#f1d28e';
      ctx.beginPath();
      for (let k = 0; k < 10; k++) {
        const a = (k / 10) * Math.PI * 2 - Math.PI / 2;
        const r = k % 2 ? 22 : 56;
        if (k === 0) ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        else ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#6b1a28';
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#f4d89a';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    // vertical gilded ribs
    for (let i = 0; i < panels; i++) {
      ctx.fillStyle = '#c59b56';
      ctx.fillRect(i * pw, 0, 9, h);
      ctx.fillStyle = 'rgba(255,238,194,.5)';
      ctx.fillRect(i * pw + 3, 0, 2, h);
    }
  });
}

function addEllipsoid(parent, x, y, z, sx, sy, sz, color, opts = {}) {
  const mesh = new THREE.Mesh(SPHERE, opts.material ?? standard(color, opts));
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  if (opts.rx) mesh.rotation.x = opts.rx;
  if (opts.ry) mesh.rotation.y = opts.ry;
  if (opts.rz) mesh.rotation.z = opts.rz;
  parent.add(mesh);
  return mesh;
}

function addLimb(parent, ax, ay, az, bx, by, bz, r1, r2, color, opts = {}) {
  const a = new THREE.Vector3(ax, ay, az);
  const b = new THREE.Vector3(bx, by, bz);
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(r2, r1, len, 8),
    opts.material ?? standard(color, opts),
  );
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  parent.add(mesh);
  return mesh;
}

function addBulbInstances(parent, positions, bulbMat, scale = 1) {
  if (!positions.length) return null;
  const mesh = new THREE.InstancedMesh(BULB_GEO, bulbMat, positions.length);
  const dummy = new THREE.Object3D();
  positions.forEach((p, i) => {
    dummy.position.set(p[0], p[1], p[2]);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  parent.add(mesh);
  return mesh;
}

// Merge static ornamentation into a handful of material batches while keeping
// each moving horse as its own small, independently animated group.
function mergeGroup(root) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const meshes = [];
  root.traverse((o) => {
    if (o.isMesh && !o.isInstancedMesh && !o.userData.noMerge) meshes.push(o);
  });
  for (const mesh of meshes) {
    const material = mesh.material;
    if (!material || Array.isArray(material) || !mesh.geometry?.attributes?.position) continue;
    let geo;
    try {
      geo = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      for (const name of Object.keys(geo.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'uv') geo.deleteAttribute(name);
      }
      if (!geo.attributes.normal) geo.computeVertexNormals();
      if (!geo.attributes.uv) {
        geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
      }
      const matrix = new THREE.Matrix4().multiplyMatrices(inv, mesh.matrixWorld);
      geo.applyMatrix4(matrix);
    } catch {
      continue;
    }
    if (!buckets.has(material)) buckets.set(material, []);
    buckets.get(material).push({ geo, mesh });
  }
  let mergedCount = 0;
  for (const [material, items] of buckets) {
    if (items.length < 2) continue;
    let merged;
    try {
      merged = mergeGeometries(items.map((it) => it.geo), false);
    } catch {
      merged = null;
    }
    if (!merged) continue;
    merged.computeBoundingSphere();
    const out = new THREE.Mesh(merged, material);
    out.name = 'carousel-static-batch';
    out.frustumCulled = false;
    root.add(out);
    items.forEach(({ mesh }) => mesh.parent?.remove(mesh));
    mergedCount++;
  }
  return mergedCount;
}

function makeHorse({
  coat, mane, saddle, blanket, pose = 0, scale = 1,
}) {
  const g = new THREE.Group();
  const bodyOpts = { roughness: 0.42, metalness: 0.2 };
  const goldOpts = { roughness: 0.28, metalness: 0.72 };
  const saddleOpts = { roughness: 0.52, metalness: 0.08 };
  const darkOpts = { roughness: 0.6, metalness: 0.1 };
  const eyeColor = 0x160f13;

  // Barrel, chest and haunch: carved-wood volumes rather than a single tube.
  addEllipsoid(g, 0, 2.22, 0, 1.45, 0.55, 0.52, coat, bodyOpts);
  addEllipsoid(g, 0.62, 2.2, 0, 0.58, 0.52, 0.5, coat, bodyOpts);
  addEllipsoid(g, -0.66, 2.23, 0, 0.58, 0.55, 0.5, coat, bodyOpts);
  addEllipsoid(g, -0.55, 2.08, 0, 0.5, 0.4, 0.48, coat, bodyOpts);

  // Arched neck
  addCylinder(g, 0.32, 0.48, 1.18, 12, 0.9, 2.98, 0, coat, { rz: -0.62, roughness: 0.42, metalness: 0.2 });
  addEllipsoid(g, 1.2, 3.28, 0, 0.35, 0.4, 0.35, coat, bodyOpts);

  // Head and muzzle, angled proudly forward
  const headTilt = -0.16 + pose * 0.04;
  addEllipsoid(g, 1.54, 3.4, 0, 0.62, 0.34, 0.35, coat, { ...bodyOpts, rz: headTilt });
  addEllipsoid(g, 1.98, 3.26, 0, 0.36, 0.26, 0.28, coat, { ...bodyOpts, rz: headTilt });
  addEllipsoid(g, 2.16, 3.18, 0, 0.19, 0.17, 0.22, coat, { ...bodyOpts, rz: -0.1 });
  // ears
  for (const z of [-0.14, 0.14]) {
    addCone(g, 0.09, 0.34, 7, 1.53, 3.8, z, coat, { rz: -0.2, roughness: 0.42, metalness: 0.2 });
  }
  // eyes and nostrils
  for (const z of [-0.3, 0.3]) {
    addSphere(g, 0.065, 8, 1.67, 3.47, z, eyeColor, { roughness: 0.25 });
    addTorus(g, 0.095, 0.018, 4, 10, 1.67, 3.47, z, GOLD, { ry: Math.PI / 2, ...goldOpts });
    addSphere(g, 0.038, 6, 2.2, 3.16, z * 0.44, 0x2b1719, darkOpts);
  }

  // Mane: alternating carved locks along the crest, with a few gilded ribbons.
  for (let i = 0; i < 7; i++) {
    const t = i / 6;
    const x = 0.66 + t * 0.72;
    const y = 3.18 + t * 0.53;
    addEllipsoid(g, x, y, 0, 0.15, 0.28, 0.18, mane, { rz: -0.48, roughness: 0.55, metalness: 0.06 });
  }
  addEllipsoid(g, 1.4, 3.84, 0, 0.12, 0.22, 0.25, mane, { rz: -0.8, roughness: 0.55 });
  for (const z of [-0.18, 0.18]) {
    addCone(g, 0.055, 0.28, 5, 1.38, 3.68, z, GOLD, { rz: -0.55, ...goldOpts });
  }

  // Tail: a sweeping carved plume, with fine strands and a gilt band.
  const tailBase = new THREE.Vector3(-1.05, 2.38, 0);
  const tailPoints = [
    tailBase,
    new THREE.Vector3(-1.36, 2.2, 0.09),
    new THREE.Vector3(-1.54, 1.83, 0.13),
    new THREE.Vector3(-1.58, 1.42, 0.1),
    new THREE.Vector3(-1.48, 1.02, 0.04),
  ];
  for (let i = 0; i < tailPoints.length - 1; i++) {
    addLimb(g, tailPoints[i].x, tailPoints[i].y, tailPoints[i].z, tailPoints[i + 1].x, tailPoints[i + 1].y, tailPoints[i + 1].z, 0.17 - i * 0.025, 0.14 - i * 0.022, mane, { roughness: 0.55 });
    if (i > 0) {
      addLimb(g, tailPoints[i].x - 0.03, tailPoints[i].y, tailPoints[i].z + 0.14, tailPoints[i + 1].x + 0.08, tailPoints[i + 1].y - 0.04, tailPoints[i + 1].z + 0.2, 0.055, 0.03, mane, { roughness: 0.6 });
    }
  }
  addTorus(g, 0.19, 0.04, 4, 12, -1.07, 2.4, 0, GOLD, { rx: Math.PI / 2, ...goldOpts });

  // Legs in a balanced gallop. Near-side legs lift, far-side legs reach down.
  const legs = [
    // front near
    { a: [0.68, 2.08, 0.32], k: [1.02, 1.42, 0.36], h: [1.2, 0.68, 0.38], lift: true },
    // front far
    { a: [0.68, 2.08, -0.32], k: [0.87, 1.25, -0.35], h: [0.98, 0.34, -0.37], lift: false },
    // rear near
    { a: [-0.62, 2.08, 0.34], k: [-0.98, 1.48, 0.37], h: [-1.22, 0.86, 0.39], lift: true },
    // rear far
    { a: [-0.62, 2.08, -0.34], k: [-0.83, 1.34, -0.37], h: [-1.04, 0.4, -0.39], lift: false },
  ];
  for (const leg of legs) {
    addEllipsoid(g, leg.a[0], leg.a[1], leg.a[2], 0.17, 0.2, 0.15, coat, bodyOpts);
    addLimb(g, leg.a[0], leg.a[1], leg.a[2], leg.k[0], leg.k[1], leg.k[2], 0.14, 0.1, coat, { roughness: 0.42, metalness: 0.2 });
    addEllipsoid(g, leg.k[0], leg.k[1], leg.k[2], 0.12, 0.12, 0.12, coat, bodyOpts);
    addLimb(g, leg.k[0], leg.k[1], leg.k[2], leg.h[0], leg.h[1], leg.h[2], 0.1, 0.062, coat, { roughness: 0.42, metalness: 0.2 });
    addEllipsoid(g, leg.h[0], leg.h[1] - 0.03, leg.h[2], 0.135, 0.1, 0.145, leg.lift ? GOLD : 0x3a2520, { roughness: 0.38, metalness: leg.lift ? 0.55 : 0.25 });
    addTorus(g, 0.115, 0.024, 4, 10, leg.h[0], leg.h[1] + 0.045, leg.h[2], GOLD, { rx: Math.PI / 2, ...goldOpts });
  }

  // Saddle blanket, brocade saddle, girth and stirrups. The side drapes are
  // shaped panels with a scalloped lower edge, not boxes, so they read as cloth.
  addBox(g, 1.15, 0.08, 0.92, -0.1, 2.69, 0, blanket, { roughness: 0.6, metalness: 0.04 });
  const drape = new THREE.Shape();
  drape.moveTo(-0.58, 0.24);
  drape.lineTo(0.58, 0.24);
  drape.quadraticCurveTo(0.6, 0.0, 0.49, -0.27);
  drape.quadraticCurveTo(0.32, -0.43, 0.12, -0.33);
  drape.quadraticCurveTo(-0.02, -0.25, -0.18, -0.36);
  drape.quadraticCurveTo(-0.38, -0.46, -0.52, -0.25);
  drape.quadraticCurveTo(-0.61, -0.02, -0.58, 0.24);
  const drapeGeo = new THREE.ShapeGeometry(drape);
  for (const z of [-0.52, 0.52]) {
    const cloth = new THREE.Mesh(drapeGeo, standard(blanket, { roughness: 0.66, metalness: 0.04, side: THREE.DoubleSide }));
    cloth.position.set(-0.08, 2.5, z);
    g.add(cloth);
    addBox(g, 0.92, 0.035, 0.045, -0.06, 2.18, z, GOLD, { ...goldOpts, side: THREE.DoubleSide });
    // a row of small gilt studs follows the drape's lower edge
    for (let i = 0; i < 4; i++) {
      addSphere(g, 0.028, 5, -0.4 + i * 0.27, 2.22 + Math.abs(i - 1.5) * 0.035, z, GOLD_LIGHT, goldOpts);
    }
    addTorus(g, 0.2, 0.035, 4, 12, -0.1, 2.2, z * 1.16, GOLD, { ry: Math.PI / 2, ...goldOpts });
  }
  addEllipsoid(g, -0.12, 2.86, 0, 0.56, 0.2, 0.43, saddle, saddleOpts);
  addBox(g, 0.18, 0.25, 0.48, -0.56, 2.9, 0, GOLD, goldOpts);
  addBox(g, 0.16, 0.32, 0.52, 0.24, 2.9, 0, saddle, saddleOpts);
  addTorus(g, 0.25, 0.05, 5, 14, -0.5, 3.02, 0, GOLD, { rx: Math.PI / 2, ...goldOpts });
  addBox(g, 0.12, 0.75, 0.12, -0.08, 1.92, 0, 0x3e1d23, { roughness: 0.7 });
  // breast collar, gilt bells and tassels
  addTorus(g, 0.57, 0.035, 4, 20, 0.74, 2.3, 0, GOLD, { ry: Math.PI / 2, ...goldOpts });
  for (const z of [-0.4, 0, 0.4]) {
    addSphere(g, 0.06, 6, 0.97, 2.16, z, GOLD, goldOpts);
    addCone(g, 0.055, 0.22, 5, 0.97, 1.99, z, saddle, { roughness: 0.5 });
  }
  // jewel accents
  const jewel = [0xcf4b58, 0x3a8d8a, 0x71529a][pose % 3];
  for (const z of [-0.24, 0.24]) {
    addSphere(g, 0.06, 8, -0.35, 2.94, z, jewel, { emissive: jewel, emissiveIntensity: 0.4, roughness: 0.25 });
  }
  addSphere(g, 0.07, 8, 1.54, 3.82, 0, jewel, { emissive: jewel, emissiveIntensity: 0.45, roughness: 0.25 });

  // Bridle and reins
  addTorus(g, 0.3, 0.025, 4, 14, 2.02, 3.24, 0, GOLD, { ry: Math.PI / 2, ...goldOpts });
  addTorus(g, 0.37, 0.025, 4, 16, 1.46, 3.44, 0, GOLD, { ry: Math.PI / 2, ...goldOpts });
  for (const z of [-0.26, 0.26]) {
    addLimb(g, 2.0, 3.24, z, 0.1, 2.73, z, 0.022, 0.018, 0x4a2a25, { roughness: 0.65 });
    addSphere(g, 0.04, 6, 2.0, 3.22, z, GOLD, goldOpts);
  }
  // browband jewel
  addSphere(g, 0.05, 8, 1.59, 3.72, 0, 0xf4dda6, { emissive: 0xffd57c, emissiveIntensity: 0.6, roughness: 0.25 });

  mergeGroup(g);
  g.scale.setScalar(scale);
  return g;
}

function makeRiderFigure({ jacket = 0x315a72, hat = 0xd3ae6b, scarf = 0x8f2b39, skin = 0xebc4a3 } = {}) {
  const r = new THREE.Group();
  const cloth = standard(jacket, { roughness: 0.78, metalness: 0.02 });
  addCylinder(r, 0.16, 0.21, 0.52, 8, 0, 0.27, 0, 0x000000, { material: cloth });
  addSphere(r, 0.17, 10, 0, 0.64, 0, skin, { roughness: 0.7 });
  addSphere(r, 0.165, 10, 0, 0.77, -0.02, hat, { sy: 0.48, roughness: 0.62 });
  addTorus(r, 0.15, 0.028, 4, 12, 0, 0.54, 0, scarf, { rx: Math.PI / 2, roughness: 0.82 });
  // arms reach forward to the reins
  for (const z of [-0.17, 0.17]) {
    cylinderBetween(r, new THREE.Vector3(0, 0.43, z), new THREE.Vector3(0.3, 0.28, z * 1.15), 0.045, jacket, { roughness: 0.8 });
    addSphere(r, 0.05, 6, 0.31, 0.28, z * 1.15, skin, { roughness: 0.72 });
  }
  // seated legs, one on each side of the horse
  for (const z of [-0.16, 0.16]) {
    cylinderBetween(r, new THREE.Vector3(0, 0.03, z), new THREE.Vector3(0.12, -0.25, z * 1.8), 0.07, jacket, { roughness: 0.8 });
    cylinderBetween(r, new THREE.Vector3(0.12, -0.25, z * 1.8), new THREE.Vector3(0.34, -0.42, z * 1.95), 0.055, 0x3a2c34, { roughness: 0.8 });
    addBox(r, 0.22, 0.09, 0.1, 0.36, -0.44, z * 1.95, 0x241b21, { roughness: 0.8 });
  }
  r.position.set(-0.16, 2.9, 0);
  return r;
}

function makeChariot({ swan = false, accent = 0x8e2233 } = {}) {
  const g = new THREE.Group();
  const velvet = standard(accent, { roughness: 0.75, metalness: 0.03 });
  const gold = standard(GOLD, { roughness: 0.3, metalness: 0.7 });
  const darkWood = standard(0x3d2725, { roughness: 0.65, metalness: 0.08 });

  // carriage base and gilded scrollwork
  addBox(g, 2.6, 0.22, 1.65, 0, 0.76, 0, 0x5d3135, { roughness: 0.65 });
  addBox(g, 2.8, 0.12, 1.82, 0, 0.64, 0, GOLD, { roughness: 0.32, metalness: 0.65 });
  addTorus(g, 0.5, 0.07, 5, 16, 0.1, 0.58, 0, GOLD, { rx: Math.PI / 2, metalness: 0.65 });
  // footboard
  addBox(g, 0.8, 1.0, 1.35, 1.35, 0.62, 0, darkWood);
  addBox(g, 0.12, 0.22, 1.55, 1.72, 1.08, 0, GOLD, { roughness: 0.32, metalness: 0.65 });
  // curved red velvet seat with buttoned back
  addBox(g, 1.2, 0.35, 1.48, -0.3, 1.1, 0, accent, { roughness: 0.78 });
  addEllipsoid(g, -0.3, 1.32, 0, 0.58, 0.2, 0.7, accent, { roughness: 0.8 });
  addBox(g, 0.26, 1.52, 1.42, -0.94, 1.72, 0, accent, { roughness: 0.78 });
  addTorus(g, 0.66, 0.055, 5, 18, -0.94, 2.53, 0, GOLD, { rx: Math.PI / 2, metalness: 0.65 });
  addBox(g, 0.12, 0.42, 1.3, -1.1, 1.15, 0, GOLD, { roughness: 0.32, metalness: 0.65 });
  // button tufting
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      addSphere(g, 0.035, 5, -0.82 + j * 0.07, 1.42 + i * 0.29, -0.48 + i * 0.14, GOLD, { roughness: 0.3, metalness: 0.6 });
    }
  }
  // gilt crest star on the back
  addStar(g, 0.44, 0.12, -1.12, 2.62, 0, GOLD_LIGHT, { emissive: 0xc58b34, emissiveIntensity: 0.7, ry: Math.PI / 2 });
  addCylinder(g, 0.06, 0.06, 0.62, 6, 0, 0.58, 0, GOLD, { roughness: 0.3, metalness: 0.65 });
  // side scrolls
  for (const z of [-0.89, 0.89]) {
    addTorus(g, 0.38, 0.055, 5, 14, 0.3, 0.98, z, GOLD, { rz: Math.PI / 2, metalness: 0.65 });
    addTorus(g, 0.26, 0.045, 5, 14, -0.5, 1.16, z, GOLD, { rz: Math.PI / 2, metalness: 0.65 });
    addSphere(g, 0.07, 7, 0.55, 1.3, z, GOLD, { roughness: 0.3, metalness: 0.7 });
  }
  // swan necks framing the seat
  if (swan) {
    for (const z of [-0.7, 0.7]) {
      addLimb(g, -0.72, 1.8, z, -0.18, 2.48, z, 0.12, 0.15, 0xf0dfc1, { roughness: 0.45, metalness: 0.1 });
      addLimb(g, -0.18, 2.48, z, 0.38, 2.42, z, 0.12, 0.08, 0xf0dfc1, { roughness: 0.45, metalness: 0.1 });
      addEllipsoid(g, 0.55, 2.42, z, 0.22, 0.16, 0.13, 0xf0dfc1, { roughness: 0.45, metalness: 0.1 });
      addCone(g, 0.055, 0.18, 5, 0.72, 2.39, z, GOLD, { rz: -Math.PI / 2, ...{ roughness: 0.3, metalness: 0.7 } });
      addSphere(g, 0.025, 5, 0.59, 2.49, z + 0.09, 0x1a1214);
    }
  }
  // hanging lanterns
  for (const z of [-1.02, 1.02]) {
    addCylinder(g, 0.025, 0.025, 0.7, 5, 1.05, 1.98, z, GOLD, { roughness: 0.3, metalness: 0.65 });
    addSphere(g, 0.14, 8, 1.05, 1.55, z, 0xffe0a3, { emissive: 0xffb95c, emissiveIntensity: 1.8, roughness: 0.35 });
    addCone(g, 0.18, 0.14, 6, 1.05, 1.7, z, GOLD, { roughness: 0.3, metalness: 0.65 });
  }
  mergeGroup(g);
  return g;
}

function makeEntrance(group, bulbMat) {
  const entrance = new THREE.Group();
  group.add(entrance);
  const x = 14.8;
  // curved stone steps
  addBox(entrance, 2.2, 0.2, 8.0, 13.2, 0.1, 0, 0x817461, { roughness: 0.95 });
  addBox(entrance, 1.5, 0.22, 7.0, 14.0, 0.3, 0, 0x8d7c68, { roughness: 0.95 });
  addBox(entrance, 0.9, 0.24, 5.6, 14.6, 0.52, 0, 0x9a8770, { roughness: 0.9 });
  addBox(entrance, 0.35, 0.22, 4.2, 15.0, 0.72, 0, 0xb09672, { roughness: 0.85 });
  // gilded entry columns
  for (const z of [-4.25, 4.25]) {
    addBox(entrance, 0.8, 0.3, 0.8, x, 0.15, z, 0x493138, { roughness: 0.75 });
    addBox(entrance, 0.52, 0.36, 0.52, x, 0.42, z, GOLD_DARK, { roughness: 0.4, metalness: 0.4 });
    addCylinder(entrance, 0.21, 0.26, 4.6, 10, x, 2.9, z, 0x64353b, { roughness: 0.55, metalness: 0.18 });
    addTorus(entrance, 0.34, 0.08, 5, 16, x, 0.72, z, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
    addTorus(entrance, 0.3, 0.06, 5, 16, x, 4.55, z, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
    addBox(entrance, 0.62, 0.24, 0.62, x, 5.28, z, GOLD, { roughness: 0.3, metalness: 0.7 });
    addSphere(entrance, 0.2, 10, x, 5.58, z, GOLD_LIGHT, { roughness: 0.25, metalness: 0.7 });
    addCone(entrance, 0.065, 0.34, 5, x, 5.96, z, 0xf8dd9a, { roughness: 0.25, metalness: 0.6 });
    // lantern on each column
    addCylinder(entrance, 0.07, 0.07, 0.4, 6, x + 0.55, 4.4, z, IRON);
    addCone(entrance, 0.23, 0.2, 6, x + 0.55, 4.73, z, GOLD, { roughness: 0.3, metalness: 0.7 });
    addSphere(entrance, 0.2, 9, x + 0.55, 4.25, z, 0xffdfa0, { material: bulbMat });
    addCone(entrance, 0.18, 0.2, 6, x + 0.55, 3.96, z, 0x5f2d34);
  }
  // marquee board, raised so the horses stay visible beneath it
  addBox(entrance, 0.32, 1.72, 8.7, x - 0.16, 6.12, 0, 0x2b1b22, { roughness: 0.65 });
  addBox(entrance, 0.18, 1.48, 8.3, x + 0.03, 6.12, 0, 0x4f1d2a, { roughness: 0.55 });
  const sign = makeSign({
    text: '星辉旋转木马', sub: 'THE STARLIGHT CAROUSEL  ·  ASTRALIA 1908',
    worldWidth: 8.7, worldHeight: 2.0, bg: 'rgba(31,15,22,0)', border: null,
    color: '#ffe8b6', subColor: '#e3bd79', accent: '#f0c46c',
    font: '600 88px "Microsoft YaHei", "PingFang SC", Georgia, serif',
    subFont: '500 26px Georgia, "Times New Roman", serif', width: 1360, height: 310,
    star: true, letterSpacing: 6,
  });
  sign.position.set(x + 0.15, 6.12, 0);
  sign.rotation.y = Math.PI / 2;
  entrance.add(sign);
  // The reverse of the marquee is seen from the carousel itself, so give it a
  // finished inner face rather than a blank backing board.
  const innerSign = makeSign({
    text: 'ASTRALIA  ·  1908', sub: 'THE STARLIGHT CAROUSEL  ·  RIDE IN SPLENDOUR',
    worldWidth: 8.0, worldHeight: 1.55, bg: 'rgba(35,18,22,.92)', border: 'rgba(226,190,124,.55)',
    color: '#f5dfb4', subColor: '#d5b276', width: 1280, height: 260, star: true, letterSpacing: 5,
    font: '600 74px Georgia, "Times New Roman", serif', subFont: '500 25px Georgia, serif',
  });
  innerSign.position.set(x - 0.36, 6.13, 0);
  innerSign.rotation.y = -Math.PI / 2;
  entrance.add(innerSign);
  // marquee crown
  addBox(entrance, 0.5, 0.22, 9.2, x - 0.08, 7.09, 0, GOLD, { roughness: 0.28, metalness: 0.7 });
  addCone(entrance, 0.46, 1.0, 8, x - 0.08, 7.68, 0, 0x67212d, { roughness: 0.5 });
  addTorus(entrance, 0.34, 0.05, 4, 16, x - 0.08, 7.16, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  addStar(entrance, 0.28, 0.08, x - 0.08, 8.25, 0, 0xf9dd9c, { emissive: 0xffc967, emissiveIntensity: 1.2, ry: Math.PI / 2 });
  // bulb border around the board
  const archBulbs = [];
  for (let i = 0; i < 22; i++) {
    archBulbs.push([x + 0.32, 6.96 - (i % 2) * 0.1, -4.45 + i * (8.9 / 21)]);
    archBulbs.push([x + 0.32, 5.26, -4.45 + i * (8.9 / 21)]);
  }
  for (let i = 0; i < 6; i++) {
    archBulbs.push([x + 0.32, 5.55 + i * 0.28, -4.15]);
    archBulbs.push([x + 0.32, 5.55 + i * 0.28, 4.15]);
  }
  addBulbInstances(entrance, archBulbs, bulbMat, 0.9);
  mergeGroup(entrance);
  return entrance;
}

function makeQueue(group) {
  const q = new THREE.Group();
  group.add(q);
  const posts = [
    [17.0, -3.3], [17.0, 3.3], [19.5, -3.3], [19.5, 3.3], [22.0, -3.3], [22.0, 3.3],
  ];
  const gold = { roughness: 0.3, metalness: 0.68 };
  for (const [x, z] of posts) {
    addCylinder(q, 0.065, 0.09, 0.96, 8, x, 0.48, z, GOLD, gold);
    addSphere(q, 0.12, 8, x, 1.0, z, GOLD_LIGHT, gold);
    addCylinder(q, 0.2, 0.22, 0.09, 10, x, 0.045, z, GOLD_DARK, gold);
  }
  // velvet ropes: simple sagging curves made of two thin segments per bay
  const ropeMat = standard(0x7e2030, { roughness: 0.92, metalness: 0 });
  for (let row = 0; row < 2; row++) {
    const z = row === 0 ? -3.3 : 3.3;
    for (let i = 0; i < 2; i++) {
      const x0 = posts[i * 2][0];
      const x1 = posts[i * 2 + 2][0];
      const mid = new THREE.Vector3((x0 + x1) / 2, 0.68, z);
      const a = new THREE.Vector3(x0, 0.9, z);
      const b = new THREE.Vector3(x1, 0.9, z);
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const pts = curve.getPoints(10);
      for (let j = 0; j < pts.length - 1; j++) {
        const seg = cylinderBetween(q, pts[j], pts[j + 1], 0.028, 0x7e2030, { roughness: 0.92 });
        seg.material = ropeMat;
      }
    }
  }
  mergeGroup(q);
  return q;
}

function makeFence(group) {
  const fence = new THREE.Group();
  group.add(fence);
  const radius = 15.25;
  const count = 34;
  const gap = 0.36;
  const posts = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    if (Math.abs(Math.atan2(Math.sin(a), Math.cos(a))) < gap) continue;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    posts.push([x, z, a]);
    addCylinder(fence, 0.065, 0.09, 1.35, 6, x, 0.68, z, 0x2f262d);
    addSphere(fence, 0.11, 7, x, 1.42, z, GOLD, { roughness: 0.3, metalness: 0.65 });
    addCone(fence, 0.075, 0.22, 5, x, 1.62, z, GOLD_LIGHT, { roughness: 0.3, metalness: 0.65 });
  }
  // rails
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const a2 = ((i + 1) / count) * Math.PI * 2;
    const inGap = (v) => Math.abs(Math.atan2(Math.sin(v), Math.cos(v))) < gap;
    if (inGap(a) || inGap(a2)) continue;
    for (const y of [0.42, 0.98]) {
      const p1 = new THREE.Vector3(Math.cos(a) * radius, y, Math.sin(a) * radius);
      const p2 = new THREE.Vector3(Math.cos(a2) * radius, y, Math.sin(a2) * radius);
      cylinderBetween(fence, p1, p2, 0.026, GOLD_DARK, { roughness: 0.35, metalness: 0.55 });
    }
  }
  mergeGroup(fence);
  return fence;
}

function makeLamp(parent, x, z, height = 3.4) {
  addCylinder(parent, 0.075, 0.12, height, 7, x, height / 2, z, 0x201c26);
  addCylinder(parent, 0.2, 0.25, 0.12, 8, x, 0.08, z, 0x141118);
  addBox(parent, 0.48, 0.08, 0.48, x, height + 0.15, z, GOLD_DARK, { roughness: 0.3, metalness: 0.6 });
  addCone(parent, 0.3, 0.22, 6, x, height + 0.25, z, 0x2a2026);
  addSphere(parent, 0.22, 9, x, height + 0.52, z, 0xffe0a3, { material: parent.userData.bulbMat });
  addCone(parent, 0.2, 0.3, 6, x, height + 0.82, z, GOLD_DARK, { roughness: 0.25, metalness: 0.6 });
  addCylinder(parent, 0.045, 0.045, 0.45, 5, x, height + 1.08, z, 0x201c26);
}

export function createCarousel(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(-48, 0, 32);
  group.rotation.y = -0.28;
  group.userData.bulbMat = bulbMat;
  scene.add(group);

  const baseTex = makeBaseTexture();
  const deckTex = makeDeckTexture();
  const canopyTex = makeCanopyTexture();
  const valanceTex = makeValanceTexture();
  const innerTex = makeInnerCanopyTexture();
  const columnTex = makeColumnTexture();

  const baseMat = textureMaterial(baseTex, { roughness: 0.62, metalness: 0.18, emissive: 0x1d0a08, emissiveIntensity: 0.22 });
  const deckMat = textureMaterial(deckTex, { roughness: 0.58, metalness: 0.12, emissive: 0x160a05, emissiveIntensity: 0.16 });
  const canopyMat = textureMaterial(canopyTex, { roughness: 0.56, metalness: 0.07, emissive: 0x2a0b0d, emissiveIntensity: 0.28 });
  const valanceMat = textureMaterial(valanceTex, {
    roughness: 0.62, metalness: 0.06, transparent: true, alphaTest: 0.42,
    side: THREE.DoubleSide, emissive: 0x2a0a0e, emissiveIntensity: 0.25, depthWrite: false,
  });
  const innerMat = textureMaterial(innerTex, { roughness: 0.74, metalness: 0.05, side: THREE.BackSide, emissive: 0x2f1609, emissiveIntensity: 0.24 });
  const columnMat = textureMaterial(columnTex, { roughness: 0.3, metalness: 0.58, emissive: 0x180b05, emissiveIntensity: 0.25 });
  columnMat.emissiveMap = columnTex;
  columnMat.emissive.setHex(0x9f7c52);
  columnMat.emissiveIntensity = 0.28;

  // Stone steps up to the rotating wooden deck
  addCylinder(group, 15.25, 15.7, 0.24, 48, 0, 0.12, 0, 0x655c50, { roughness: 0.96 });
  addCylinder(group, 14.7, 15.0, 0.26, 48, 0, 0.35, 0, 0x746956, { roughness: 0.95 });
  addCylinder(group, 14.15, 14.4, 0.25, 48, 0, 0.58, 0, 0x82745f, { roughness: 0.94 });
  addCylinder(group, 13.4, 13.6, 0.22, 48, 0, 0.8, 0, 0x9a805d, { roughness: 0.88 });
  // static lower drum, painted with panels and a band of warm lights
  const drum = addCylinder(group, 13.05, 13.5, 0.72, 48, 0, 0.94, 0, 0xffffff, { material: baseMat, roughness: 0.62, metalness: 0.18 });
  addTorus(group, 13.16, 0.12, 5, 48, 0, 1.26, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
  addTorus(group, 13.55, 0.09, 4, 48, 0, 0.57, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.35, metalness: 0.6 });
  // little ground-level marquee bulbs
  const baseBulbs = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    baseBulbs.push([Math.cos(a) * 13.35, 0.7, Math.sin(a) * 13.35]);
  }
  addBulbInstances(group, baseBulbs, bulbMat, 0.7);

  const spin = new THREE.Group();
  spin.position.y = 0.9;
  group.add(spin);

  const staticOrnaments = new THREE.Group();
  spin.add(staticOrnaments);

  // Rotating deck with parquet texture and a gilded rim
  const deck = new THREE.Mesh(new THREE.CircleGeometry(12.35, 64), deckMat);
  deck.rotation.x = -Math.PI / 2;
  deck.position.y = 0.08;
  staticOrnaments.add(deck);
  const deckRim = new THREE.Mesh(new THREE.CylinderGeometry(12.38, 12.38, 0.48, 64, 1, true), baseMat);
  deckRim.position.y = 0.3;
  staticOrnaments.add(deckRim);
  addTorus(staticOrnaments, 12.4, 0.11, 5, 64, 0, 0.57, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });
  addTorus(staticOrnaments, 12.38, 0.06, 4, 64, 0, 0.1, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.35, metalness: 0.6 });

  // Central mirrored column with carved capitals.
  addCylinder(staticOrnaments, 2.3, 2.55, 0.62, 24, 0, 1.28, 0, 0x7a2230, { roughness: 0.55, metalness: 0.16 });
  addTorus(staticOrnaments, 2.35, 0.13, 5, 32, 0, 1.6, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  addTorus(staticOrnaments, 2.12, 0.08, 4, 32, 0, 1.02, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.06, 1.22, 7.2, 24, 1), columnMat);
  shaft.position.y = 5.25;
  staticOrnaments.add(shaft);
  for (const y of [2.42, 4.2, 6.0, 7.9]) {
    addTorus(staticOrnaments, 1.17, 0.075, 4, 24, 0, y, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.75 });
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addCylinder(staticOrnaments, 0.055, 0.08, 7.1, 5, Math.cos(a) * 1.15, 5.2, Math.sin(a) * 1.15, GOLD, { roughness: 0.28, metalness: 0.75 });
  }
  addCylinder(staticOrnaments, 2.05, 1.12, 0.95, 24, 0, 8.9, 0, 0x6d1e2b, { roughness: 0.48, metalness: 0.25 });
  addTorus(staticOrnaments, 2.08, 0.12, 5, 32, 0, 9.34, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.75 });
  addTorus(staticOrnaments, 1.6, 0.07, 4, 28, 0, 9.52, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  // radial brackets under the canopy
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const inner = new THREE.Vector3(Math.cos(a) * 1.4, 8.65, Math.sin(a) * 1.4);
    const outer = new THREE.Vector3(Math.cos(a) * 5.7, 9.55, Math.sin(a) * 5.7);
    cylinderBetween(staticOrnaments, inner, outer, 0.075, GOLD, { roughness: 0.26, metalness: 0.75 });
    const curl = new THREE.Vector3(Math.cos(a) * 4.4, 9.12, Math.sin(a) * 4.4);
    addSphere(staticOrnaments, 0.105, 7, curl.x, curl.y, curl.z, GOLD_LIGHT, { roughness: 0.26, metalness: 0.75 });
  }

  // Under-canopy ceiling: a shallow striped tent, not a flat disc, so the
  // radial panels remain readable from below.
  const ceiling = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 13.0, 3.0, 64, 1, true), innerMat);
  ceiling.position.y = 10.96;
  staticOrnaments.add(ceiling);
  addTorus(staticOrnaments, 12.98, 0.1, 5, 64, 0, 9.48, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
  addTorus(staticOrnaments, 1.05, 0.09, 4, 24, 0, 12.5, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.7 });
  const canopy = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 13.2, 3.12, 64, 1, true), canopyMat);
  canopy.position.y = 11.02;
  staticOrnaments.add(canopy);
  addTorus(staticOrnaments, 13.22, 0.14, 5, 64, 0, 9.46, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });
  addTorus(staticOrnaments, 12.96, 0.025, 4, 64, 0, 9.4, 0, 0x9b6d38, { rx: Math.PI / 2, roughness: 0.4, metalness: 0.5 });
  // scalloped valance and fringe
  const valance = new THREE.Mesh(new THREE.CylinderGeometry(13.12, 13.12, 1.48, 64, 1, true), valanceMat);
  valance.position.y = 8.72;
  staticOrnaments.add(valance);
  addTorus(staticOrnaments, 13.13, 0.065, 4, 64, 0, 9.46, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.72 });
  addTorus(staticOrnaments, 13.08, 0.07, 4, 64, 0, 8.06, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  // gilded ribs follow the canopy's slope
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const p1 = new THREE.Vector3(Math.cos(a) * 1.1, 12.58, Math.sin(a) * 1.1);
    const p2 = new THREE.Vector3(Math.cos(a) * 13.16, 9.49, Math.sin(a) * 13.16);
    cylinderBetween(staticOrnaments, p1, p2, 0.055, GOLD_LIGHT, { roughness: 0.25, metalness: 0.7 });
    // corresponding ribs on the visible underside
    cylinderBetween(
      staticOrnaments,
      new THREE.Vector3(Math.cos(a) * 1.0, 12.4, Math.sin(a) * 1.0),
      new THREE.Vector3(Math.cos(a) * 12.85, 9.52, Math.sin(a) * 12.85),
      0.022, 0xb88b4d, { roughness: 0.38, metalness: 0.55 },
    );
  }
  // hanging tassels around the valance
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.16;
    addSphere(staticOrnaments, 0.11, 7, Math.cos(a) * 13.11, 8.02, Math.sin(a) * 13.11, GOLD, { roughness: 0.28, metalness: 0.65 });
    addCone(staticOrnaments, 0.06, 0.38, 5, Math.cos(a) * 13.11, 7.76, Math.sin(a) * 13.11, 0x7a1d2b, { roughness: 0.6 });
  }
  // Crown / finial
  addCylinder(staticOrnaments, 1.52, 1.0, 0.45, 24, 0, 12.68, 0, 0x70202c, { roughness: 0.48, metalness: 0.22 });
  addTorus(staticOrnaments, 1.55, 0.1, 4, 24, 0, 12.92, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.75 });
  addCylinder(staticOrnaments, 0.8, 1.2, 0.8, 18, 0, 13.3, 0, GOLD, { roughness: 0.28, metalness: 0.72 });
  addSphere(staticOrnaments, 0.65, 18, 0, 13.9, 0, 0xd7ad61, { sy: 1.2, roughness: 0.26, metalness: 0.75 });
  addTorus(staticOrnaments, 0.5, 0.07, 4, 18, 0, 14.08, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });
  addCone(staticOrnaments, 0.5, 1.1, 12, 0, 14.65, 0, 0x77212e, { roughness: 0.45, metalness: 0.18 });
  addTorus(staticOrnaments, 0.28, 0.055, 4, 16, 0, 15.13, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.7 });

  // Chandelier under the canopy
  addTorus(staticOrnaments, 2.35, 0.06, 4, 32, 0, 7.62, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  addTorus(staticOrnaments, 1.3, 0.045, 4, 24, 0, 8.2, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    cylinderBetween(staticOrnaments, new THREE.Vector3(0, 9.45, 0), new THREE.Vector3(Math.cos(a) * 2.35, 7.62, Math.sin(a) * 2.35), 0.018, GOLD_DARK, { roughness: 0.35, metalness: 0.6 });
  }
  // Ceiling boss closes the apex and gives the lantern a proper crown.
  addCylinder(staticOrnaments, 1.9, 1.9, 0.16, 32, 0, 12.34, 0, 0x7a2230, { roughness: 0.45, metalness: 0.18 });
  addTorus(staticOrnaments, 1.92, 0.08, 4, 32, 0, 12.44, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.55 });
  addSphere(staticOrnaments, 1.08, 20, 0, 12.38, 0, 0xd9b16d, { sy: 0.25, roughness: 0.34, metalness: 0.35, emissive: 0x3a2108, emissiveIntensity: 0.45 });
  addCylinder(staticOrnaments, 0.28, 0.28, 0.42, 12, 0, 12.16, 0, GOLD, { roughness: 0.32, metalness: 0.42 });
  addSphere(staticOrnaments, 0.18, 10, 0, 11.9, 0, 0xffdd94, { material: bulbMat });

  // Poles: stationary brass shafts the horses glide on.
  const poleAngles = [];
  const outerCount = 14;
  const outerRadius = 8.95;
  for (let i = 0; i < outerCount; i++) poleAngles.push({ a: -Math.PI / 2 + (i / outerCount) * Math.PI * 2, r: outerRadius, inner: false });
  const innerCount = 4;
  for (let i = 0; i < innerCount; i++) poleAngles.push({ a: -Math.PI / 2 + Math.PI / 4 + (i / innerCount) * Math.PI * 2, r: 5.35, inner: true });
  for (const { a, r } of poleAngles) {
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    addCylinder(staticOrnaments, 0.075, 0.09, 8.25, 8, x, 4.35, z, 0xe0bd7b, { roughness: 0.24, metalness: 0.72 });
    addTorus(staticOrnaments, 0.16, 0.035, 4, 12, x, 1.4, z, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
    addSphere(staticOrnaments, 0.13, 8, x, 8.48, z, 0xe3c184, { roughness: 0.4, metalness: 0.25, emissive: 0x39220c, emissiveIntensity: 0.55 });
  }

  // Entrance, fence, lamps, queue. These sit outside the rotating deck.
  makeEntrance(group, bulbMat);
  makeFence(group);
  makeQueue(group);
  group.userData.bulbMat = bulbMat;
  makeLamp(group, 18.2, 6.4, 3.5);
  makeLamp(group, 18.2, -6.4, 3.5);
  // low clipped hedges frame the approach without hiding the platform
  for (const z of [-7.2, 7.2]) {
    addBox(group, 4.0, 0.55, 1.15, 17.3, 0.28, z, 0x294934, { roughness: 0.94 });
    for (let i = 0; i < 7; i++) {
      addSphere(group, 0.24, 7, 15.6 + i * 0.54, 0.62, z + (i % 2 ? 0.22 : -0.2), i % 2 ? 0x365a3b : 0x2c4d34, { roughness: 0.9 });
    }
  }
  // flower urns
  for (const z of [-8.7, 8.7]) {
    addCylinder(group, 0.56, 0.42, 0.95, 10, 18.6, 0.48, z, 0x75644f, { roughness: 0.9 });
    addTorus(group, 0.58, 0.07, 4, 14, 18.6, 0.98, z, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.4, metalness: 0.45 });
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      addSphere(group, 0.16, 6, 18.6 + Math.cos(a) * 0.35, 1.1 + Math.sin(i * 2.4) * 0.12, z + Math.sin(a) * 0.3, [0xe79aa7, 0xf2ce8c, 0xc4afe0][i % 3], { roughness: 0.8 });
    }
  }

  // Warm practical light under the canopy, independent of the bulb material.
  const underLight = new THREE.PointLight(0xffbf7c, 52, 30, 2);
  underLight.position.set(3.8, 7.2, 2.4);
  group.add(underLight);
  const rimLight = new THREE.PointLight(0xffc27e, 18, 22, 2);
  rimLight.position.set(-3.6, 3.8, -2.8);
  group.add(rimLight);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,242,211,.9)', 'rgba(255,161,75,0)'),
    color: 0xffc47d, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false,
  }));
  glow.position.set(0, 6.9, 0);
  glow.scale.set(21, 21, 1);
  group.add(glow);

  // Static ornament batching (poles, fence, canopy, valance, signage frames...)
  mergeGroup(staticOrnaments);

  // Light strings on the canopy and entrance. Instanced to keep draw calls low.
  const canopyBulbs = [];
  for (let i = 0; i < 44; i++) {
    const a = (i / 44) * Math.PI * 2;
    canopyBulbs.push([Math.cos(a) * 13.22, 9.54, Math.sin(a) * 13.22]);
    if (i % 2 === 0) canopyBulbs.push([Math.cos(a) * 12.45, 8.96, Math.sin(a) * 12.45]);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    for (let k = 1; k <= 3; k++) {
      canopyBulbs.push([Math.cos(a) * (2.2 + k * 1.15), 8.2 - k * 0.18, Math.sin(a) * (2.2 + k * 1.15)]);
    }
  }
  addBulbInstances(spin, canopyBulbs, bulbMat, 1.0);

  // The star finial is animated independently so it can turn slowly.
  const topStar = addStar(spin, 0.8, 0.22, 0, 15.72, 0, 0xffd97c, {
    emissive: 0xffc45c, emissiveIntensity: 2.4, roughness: 0.24, metalness: 0.48, ry: 0.2,
  });
  topStar.userData.noMerge = true;
  const starGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,246,214,1)', 'rgba(255,190,87,0)'),
    color: 0xffd88a, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false,
  }));
  starGlow.position.set(0, 15.72, 0);
  starGlow.scale.set(8, 8, 1);
  spin.add(starGlow);

  // Horse coats and trappings, in a classic hand-carved palette.
  const coatSet = [0xf0dfc0, 0xd7b47b, 0xa96b48, 0x35303a, 0xbfb6a6, 0xf0dfc0];
  const maneSet = [0x712734, 0x3e2d31, 0xd1a263, 0x2e4646, 0x7c6a63, 0x563f78];
  const saddleSet = [0x9c2d3c, 0x266a6a, 0x69447f, 0xb55e39, 0x315d86, 0x9c2d3c];
  const blanketSet = [0x2d6a70, 0x8e2537, 0x6b4d88, 0xb86b3d, 0x315f87, 0xc39a4b];

  const horses = [];
  const mountHorse = { a: -Math.PI / 2, r: outerRadius, inner: false };
  const makeHorseAt = (a, r, scale, index, inner) => {
    const holder = new THREE.Group();
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    holder.position.set(x, 0, z);
    holder.rotation.y = -a + Math.PI / 2;
    const horse = makeHorse({
      coat: coatSet[index % coatSet.length],
      mane: maneSet[index % maneSet.length],
      saddle: saddleSet[index % saddleSet.length],
      blanket: blanketSet[index % blanketSet.length],
      pose: index,
      scale,
    });
    holder.add(horse);
    spin.add(holder);
    const entry = {
      holder, horse, a, r, phase: index * 0.82 + (inner ? 1.2 : 0),
      baseY: 0.1, scale, inner, isMount: !inner && index === 0,
    };
    horses.push(entry);
    return entry;
  };

  for (let i = 0; i < outerCount; i++) makeHorseAt(-Math.PI / 2 + (i / outerCount) * Math.PI * 2, outerRadius, 0.8, i, false);
  for (let i = 0; i < innerCount; i++) makeHorseAt(-Math.PI / 2 + Math.PI / 4 + (i / innerCount) * Math.PI * 2, 5.35, 0.62, i + outerCount, true);

  // Two carved chariots complete the classic troupe.
  for (const [i, a] of [-Math.PI / 2, Math.PI / 2].entries()) {
    const chariot = makeChariot({ swan: i === 1, accent: i === 0 ? 0x8f2233 : 0x225b5d });
    const x = Math.cos(a) * 5.35;
    const z = Math.sin(a) * 5.35;
    chariot.position.set(x, 0.13, z);
    chariot.rotation.y = -a + Math.PI / 2;
    chariot.scale.setScalar(0.82);
    spin.add(chariot);
  }

  const rideMount = horses[0];
  rideMount.isMount = true;

  // Small riding figure on the mount, a silhouette of a child in a scarf.
  const rider = new THREE.Group();
  addSphere(rider, 0.17, 10, 0, 0.36, 0, 0xeac4a2);
  addCylinder(rider, 0.16, 0.22, 0.56, 8, 0, 0.05, 0, 0x3c5070);
  addBox(rider, 0.34, 0.12, 0.16, 0, 0.32, 0, 0x8f2b39);
  addCylinder(rider, 0.06, 0.07, 0.45, 5, 0, 0.42, 0, 0x3c5070, { rz: -0.3 });
  addCylinder(rider, 0.06, 0.07, 0.45, 5, 0, 0.42, 0, 0x3c5070, { rz: 0.3 });
  addSphere(rider, 0.18, 10, 0, 0.54, 0, 0x8f2b39, { sy: 0.5 });
  rider.position.set(-0.18, 2.88, 0);
  rider.scale.setScalar(1.0);
  rideMount.horse.add(rider);
  rider.visible = true;

  // A handful of other guests make the operating carousel feel alive.
  const guestRiders = [
    [2, { jacket: 0x3b5e7a, hat: 0xdfbf7d, scarf: 0xa52e3e, skin: 0xe7b893 }],
    [5, { jacket: 0x6a447d, hat: 0xe0c98c, scarf: 0x2e6d6d, skin: 0xd4a078 }],
    [8, { jacket: 0x2f6f68, hat: 0xc59a5b, scarf: 0xd6a54c, skin: 0xf0d0ae }],
    [11, { jacket: 0x8c4b3c, hat: 0x2f3c4a, scarf: 0x466c85, skin: 0x9f6c4d }],
    [16, { jacket: 0x4f5d87, hat: 0xe6d0a4, scarf: 0x9d3c4f, skin: 0xedc6a3 }],
  ];
  for (const [index, palette] of guestRiders) {
    if (!horses[index]) continue;
    horses[index].horse.add(makeRiderFigure(palette));
  }

  // A second decorative horse's head at the entrance, a vintage photo spot.
  const photoHorse = makeHorse({ coat: 0xf0dfc0, mane: 0x712734, saddle: 0x9c2d3c, blanket: 0xe8c684, pose: 3, scale: 0.48 });
  photoHorse.position.set(19.4, 0.05, 1.4);
  photoHorse.rotation.y = Math.PI * 0.82;
  group.add(photoHorse);

  // Collider keeps visitors outside the rotating platform but lets them walk
  // right up to the horses and the glowing marquee.
  const collider = { type: 'circle', x: -48, z: 32, r: 14.55 };

  let currentSpeed = 1;
  let targetSpeed = 1;
  const baseSpinSpeed = 0.21;
  return {
    group, spin, horses, topStar, rideMount, rider, underLight, rimLight, glow,
    center: new THREE.Vector3(-48, 0, 32),
    collider,
    setRideActive(active) {
      targetSpeed = active ? 1.65 : 1;
      rider.visible = true;
    },
    update(dt, elapsed, speed = 1, lamp = 2.3) {
      targetSpeed = speed;
      currentSpeed += (targetSpeed - currentSpeed) * (1 - Math.exp(-dt * 1.6));
      spin.rotation.y += dt * baseSpinSpeed * currentSpeed;
      horses.forEach((entry) => {
        const amp = entry.inner ? 0.075 : 0.12;
        const bob = Math.sin(elapsed * 2.75 + entry.phase) * amp;
        entry.holder.position.y = entry.baseY + bob;
        entry.horse.rotation.x = Math.sin(elapsed * 2.75 + entry.phase) * 0.025;
        entry.horse.rotation.z = Math.sin(elapsed * 1.4 + entry.phase) * 0.008;
      });
      topStar.rotation.y = elapsed * 0.6;
      starGlow.material.opacity = 0.58 + Math.sin(elapsed * 1.7) * 0.14;
      glow.material.opacity = 0.15 + lamp * 0.025 + Math.sin(elapsed * 1.1) * 0.018;
      underLight.intensity = 18 + lamp * 17;
      rimLight.intensity = 4 + lamp * 7;
    },
  };
}

// Internal building blocks shared with the two-storey carousel.
export const carouselKit = {
  makeHorse,
  makeChariot,
  makeRiderFigure,
  mergeGroup,
  addBulbInstances,
  textureMaterial,
  makeCanopyTexture,
  makeValanceTexture,
  makeInnerCanopyTexture,
  makeDeckTexture,
  makeBaseTexture,
  makeColumnTexture,
  makeFence,
  makeQueue,
  makeLamp,
  GOLD,
  GOLD_LIGHT,
  GOLD_DARK,
  CREAM,
  CRIMSON,
  WOOD,
  IRON,
};
