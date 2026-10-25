import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus,
  makeCanvasPlaneTexture, makeSign,
} from './builders.js';

const GOLD = 0xd8b16a;
const GOLD_LIGHT = 0xffdda0;
const CREAM = 0xf0dfc0;
const TEAL = 0x15545a;
const TEAL_DARK = 0x0c343d;
const WINE = 0x8b2733;
const BLUE = 0x244b83;
const GREEN = 0x2a5b44;
const STONE = 0x736b5c;
const STONE_DARK = 0x4b4b43;
const MOSS = 0x456447;

const CENTER = new THREE.Vector3(-92, 0, 88);
const INNER_R = 8.6;
const OUTER_R = 15.3;
const RAFT_R = 11.7;
const RAFT_Y = 0.88;

function waterTexture() {
  const tex = makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#246f82'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(176,235,229,.42)'; ctx.lineWidth = 2;
    for (let i = 0; i < 40; i++) {
      const y = (i / 40) * h + Math.sin(i * 2.1) * 8;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= w; x += 22) {
        ctx.lineTo(x, y + Math.sin(x * 0.035 + i * 1.7) * 5);
      }
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,255,255,.2)';
    for (let i = 0; i < 60; i++) {
      const x = (i * 97) % w, y = (i * 53) % h;
      ctx.beginPath(); ctx.arc(x, y, 1.2 + (i % 3), 0, Math.PI * 2); ctx.fill();
    }
  }, 512, 512);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3.2, 3.2);
  return tex;
}

function fallTexture() {
  const tex = makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(189,245,244,.25)');
    grad.addColorStop(0.35, 'rgba(154,233,240,.8)');
    grad.addColorStop(1, 'rgba(225,255,255,.92)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(255,255,255,.8)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 9; i++) {
      ctx.beginPath();
      const x = 24 + i * 28;
      ctx.moveTo(x, 0);
      ctx.bezierCurveTo(x - 12, h * 0.3, x + 18, h * 0.65, x + 4, h);
      ctx.stroke();
    }
  }, 256, 512);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 1);
  return tex;
}

function buildRaft(color, index) {
  const group = new THREE.Group();
  const spin = new THREE.Group();
  group.add(spin);
  addTorus(spin, 1.5, 0.42, 8, 24, 0, 0.3, 0, color, {
    rx: Math.PI / 2, roughness: 0.68, emissive: color, emissiveIntensity: 0.3,
  });
  addTorus(spin, 1.52, 0.09, 4, 24, 0, 0.62, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.4 });
  addCylinder(spin, 1.38, 1.32, 0.18, 24, 0, 0.02, 0, 0x2a3b3b, { roughness: 0.9 });
  addTorus(spin, 1.34, 0.06, 4, 24, 0, 0.12, 0, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const x = Math.cos(a) * 0.9;
    const z = Math.sin(a) * 0.9;
    addBox(spin, 0.66, 0.16, 0.62, x, 0.22, z, 0x211c1f, { ry: -a, roughness: 0.82 });
    addBox(spin, 0.62, 0.62, 0.12, x, 0.5, z - 0.25, color, { ry: -a, roughness: 0.7 });
    addBox(spin, 0.1, 0.34, 0.1, x - 0.31, 0.45, z, GOLD, { metalness: 0.35 });
    addBox(spin, 0.1, 0.34, 0.1, x + 0.31, 0.45, z, GOLD, { metalness: 0.35 });
    addBox(spin, 0.12, 0.42, 0.12, x, 0.48, z + 0.28, GOLD, { metalness: 0.35 });
  }
  addCylinder(spin, 0.22, 0.28, 0.6, 8, 0, 0.62, 0, GOLD, { metalness: 0.4 });
  addSphere(spin, 0.18, 8, 0, 0.96, 0, i_color(index), { emissiveIntensity: 0.4 });
  addTorus(spin, 1.08, 0.05, 4, 24, 0, 0.8, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.42 });
  const wake = new THREE.Mesh(
    new THREE.RingGeometry(1.45, 2.3, 32),
    new THREE.MeshBasicMaterial({
      color: 0xc8f8ef, transparent: true, opacity: 0.2, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending,
    }),
  );
  wake.rotation.x = -Math.PI / 2;
  wake.position.y = -0.02;
  group.add(wake);
  return { group, spin, wake, index };
}

function i_color(i) {
  return [WINE, BLUE, GREEN, 0xc18a3d][i % 4];
}

function buildPavilion(parent, x, z, scale, bulbMat) {
  addCylinder(parent, 2.2 * scale, 2.5 * scale, 0.65 * scale, 8, x, 0.7 * scale, z, TEAL_DARK, { roughness: 0.78 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addCylinder(parent, 0.1 * scale, 0.14 * scale, 3.0 * scale, 6, x + Math.cos(a) * 1.7 * scale, 2.1 * scale, z + Math.sin(a) * 1.7 * scale, GOLD, { metalness: 0.42 });
    addSphere(parent, 0.12 * scale, 6, x + Math.cos(a) * 1.7 * scale, 3.62 * scale, z + Math.sin(a) * 1.7 * scale, 0xffd38a, { material: bulbMat });
  }
  addCylinder(parent, 2.0 * scale, 2.3 * scale, 0.35 * scale, 8, x, 3.6 * scale, z, GOLD, { metalness: 0.38 });
  for (let i = 0; i < 12; i++) {
    const color = i % 2 ? CREAM : WINE;
    addCone(parent, 3.2 * scale, 3.0 * scale, 1, x, 5.2 * scale, z, color, {
      thetaStart: (i / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
      openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.7,
      emissive: color, emissiveIntensity: 0.22,
    });
  }
  addCylinder(parent, 0.06 * scale, 0.06 * scale, 2.0 * scale, 4, x, 7.2 * scale, z, GOLD, { metalness: 0.5 });
  addCone(parent, 0.6 * scale, 1.0 * scale, 4, x + 0.3 * scale, 8.1 * scale, z, WINE, { rz: Math.PI / 2.4 });
  addStar(parent, 0.75 * scale, 0.18 * scale, x, 7.7 * scale, z, 0xffd275, { emissiveIntensity: 1.5 });
}

function buildPine(parent, x, y, z, s, color = GREEN) {
  addCylinder(parent, 0.16 * s, 0.24 * s, 3.0 * s, 6, x, y + 1.5 * s, z, 0x4c3c2d, { roughness: 0.9 });
  for (let i = 0; i < 3; i++) {
    addCone(parent, (2.1 - i * 0.5) * s, 2.3 * s, 7, x, y + (2.3 + i * 1.25) * s, z, color, {
      roughness: 0.88, flat: true, emissive: 0x0a1c12, emissiveIntensity: 0.5,
    });
  }
}

export function createRapids(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.copy(CENTER);
  scene.add(group);

  const waterMap = waterTexture();
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x3fa9b8, map: waterMap, roughness: 0.2, metalness: 0.3,
    emissive: 0x146a7a, emissiveIntensity: 0.8, transparent: true, opacity: 0.96,
  });
  const water = new THREE.Mesh(new THREE.RingGeometry(INNER_R, OUTER_R, 96, 1), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.55;
  group.add(water);

  // stone channel banks and low gold railings
  addTorus(group, INNER_R, 0.45, 5, 64, 0, 0.55, 0, STONE_DARK, { rx: Math.PI / 2, roughness: 1 });
  addTorus(group, OUTER_R, 0.45, 5, 72, 0, 0.56, 0, STONE, { rx: Math.PI / 2, roughness: 0.95 });
  addTorus(group, OUTER_R + 0.25, 0.1, 4, 72, 0, 0.96, 0, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    if (Math.cos(a) > 0.84) continue;
    addBox(group, 3.3, 1.15, 0.15, Math.cos(a) * (OUTER_R + 1.0), 1.5, Math.sin(a) * (OUTER_R + 1.0), i % 4 === 0 ? WINE : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.72,
    });
    addBox(group, 3.1, 0.08, 0.17, Math.cos(a) * (OUTER_R + 1.0), 2.12, Math.sin(a) * (OUTER_R + 1.0), GOLD, {
      ry: -a + Math.PI / 2, metalness: 0.4,
    });
    if (i % 4 === 0) addStar(group, 0.28, 0.06, Math.cos(a) * (OUTER_R + 1.08), 1.55, Math.sin(a) * (OUTER_R + 1.08), 0xffd478, {
      ry: -a + Math.PI / 2, emissiveIntensity: 0.7,
    });
  }
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    if (Math.cos(a) > 0.84) continue;
    addCylinder(group, 0.13, 0.17, 2.25, 7, Math.cos(a) * (OUTER_R + 1.2), 1.95, Math.sin(a) * (OUTER_R + 1.2), GOLD, { metalness: 0.42 });
    addSphere(group, 0.16, 7, Math.cos(a) * (OUTER_R + 1.2), 3.1, Math.sin(a) * (OUTER_R + 1.2), 0xffd38a, { material: bulbMat });
  }
  addTorus(group, OUTER_R + 1.1, 0.13, 4, 72, 0, 3.0, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.45 });

  // rocky island
  addCylinder(group, INNER_R + 0.2, INNER_R + 0.8, 1.2, 20, 0, 0.6, 0, STONE_DARK, { roughness: 1, flat: true });
  addCylinder(group, 7.8, 8.4, 2.4, 16, 0, 2.0, 0, STONE, { roughness: 1, flat: true });
  const rockSeeds = [
    [5.2, 2.9, 1.1, 1.8, 2.0, 1.4], [-5.4, 3.1, 2.2, 2.3, 1.8, 1.7],
    [3.0, 4.6, -4.4, 1.9, 2.2, 1.7], [-2.5, 5.2, 4.1, 1.8, 2.0, 1.8],
    [0.2, 6.4, 0.4, 2.4, 1.6, 2.0], [-6.5, 1.5, -4.8, 1.7, 1.4, 1.5],
    [6.0, 1.8, -3.2, 1.5, 1.8, 1.3], [0.1, 3.2, -6.4, 2.0, 1.5, 1.5],
  ];
  rockSeeds.forEach(([x, y, z, sx, sy, sz], i) => {
    addSphere(group, 1, 5, x, y, z, i % 3 === 0 ? STONE_DARK : STONE, {
      sx, sy, sz, roughness: 1, flat: true, emissive: 0x161813, emissiveIntensity: 0.2,
    });
    if (i % 2 === 0) {
      addSphere(group, 0.65, 5, x + 0.8, y + 0.5, z + 0.6, MOSS, {
        sx: 1.1, sy: 0.45, sz: 0.8, roughness: 0.95, flat: true,
      });
    }
  });
  // jagged inner cliffs break up the smooth island silhouette
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + 0.13;
    const r = 7.15 + Math.sin(i * 2.7) * 0.55;
    const y = 1.5 + (i % 4) * 0.85;
    addSphere(group, 0.8, 5, Math.cos(a) * r, y, Math.sin(a) * r, i % 4 === 0 ? STONE_DARK : STONE, {
      sx: 0.8 + (i % 3) * 0.22, sy: 1.15 + (i % 4) * 0.35, sz: 0.8 + ((i + 1) % 3) * 0.18,
      roughness: 1, flat: true,
    });
    if (i % 3 === 0) {
      addSphere(group, 0.58, 5, Math.cos(a + 0.08) * (r - 0.1), y + 0.75, Math.sin(a + 0.08) * (r - 0.1), MOSS, {
        sx: 1.2, sy: 0.32, sz: 0.8, roughness: 1, flat: true,
      });
    }
    if (i % 4 === 2) {
      addCone(group, 0.85, 2.5 + (i % 3), 6, Math.cos(a) * (r - 0.4), 4.3, Math.sin(a) * (r - 0.4), STONE, {
        roughness: 1, flat: true,
      });
    }
  }
  // summit and a dark cave mouth
  addCone(group, 4.7, 3.3, 8, 0, 7.4, 0, STONE, { roughness: 1, flat: true });
  addCylinder(group, 0.7, 0.7, 2.2, 5, 0.3, 8.4, 0.2, STONE_DARK, { roughness: 1 });
  addCone(group, 3.1, 2.2, 8, 0, 9.0, 0, MOSS, { roughness: 1, flat: true });
  addBox(group, 2.2, 2.7, 0.35, 7.05, 3.1, 0, 0x141b19, { ry: Math.PI / 2, roughness: 1 });
  addTorus(group, 1.3, 0.22, 5, 18, 7.2, 3.0, 0, STONE_DARK, { ry: Math.PI / 2, roughness: 0.95 });
  addTorus(group, 1.3, 0.12, 4, 18, 7.2, 3.0, 0, GOLD, { ry: Math.PI / 2, metalness: 0.4 });

  // cascades
  const falls = [];
  for (const [a, width] of [[0.1, 2.65], [2.25, 2.15], [4.3, 2.45]]) {
    const tex = fallTexture();
    const mat = new THREE.MeshBasicMaterial({
      map: tex, color: 0xd9ffff, transparent: true, opacity: 0.82,
      depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, 5.1, 1, 24), mat);
    mesh.position.set(Math.cos(a) * 8.36, 3.55, Math.sin(a) * 8.36);
    mesh.rotation.y = a + Math.PI / 2;
    group.add(mesh);
    falls.push({ mat, tex });
    addSphere(group, 0.5, 8, Math.cos(a) * 9.0, 0.85, Math.sin(a) * 9.0, 0xc9ffff, {
      sx: 1.8, sy: 0.3, sz: 1.8, transparent: true, opacity: 0.22, depthWrite: false,
    });
  }

  // rock shoulders frame the main cascade
  for (const a of [-0.24, 0.4]) {
    addSphere(group, 1.0, 5, Math.cos(a) * 7.95, 2.8, Math.sin(a) * 7.95, STONE, {
      sx: 1.1, sy: 2.0, sz: 0.9, roughness: 1, flat: true,
    });
    addSphere(group, 0.5, 5, Math.cos(a) * 7.7, 5.4, Math.sin(a) * 7.7, MOSS, {
      sx: 1.0, sy: 0.35, sz: 0.8, roughness: 1, flat: true,
    });
  }

  // arched bridges
  function bridge(a) {
    const x = Math.cos(a) * 12.0;
    const z = Math.sin(a) * 12.0;
    addBox(group, 7.0, 0.35, 2.8, x, 3.75, z, STONE, { ry: -a, roughness: 0.95 });
    addBox(group, 6.6, 0.12, 2.5, x, 3.98, z, 0xc0a477, { ry: -a, roughness: 0.9 });
    for (const side of [-1, 1]) {
      addTorus(group, 2.7, 0.3, 5, 18, x + Math.cos(a + Math.PI / 2) * side * 1.1, 1.35, z + Math.sin(a + Math.PI / 2) * side * 1.1, STONE_DARK, {
        ry: -a, arc: Math.PI, roughness: 0.98,
      });
      addBox(group, 7.0, 0.09, 0.12, x + Math.cos(a + Math.PI / 2) * side * 1.3, 4.5, z + Math.sin(a + Math.PI / 2) * side * 1.3, GOLD, {
        ry: -a, metalness: 0.4,
      });
      for (let i = 0; i < 5; i++) {
        const t = -3 + i * 1.5;
        addCylinder(group, 0.06, 0.08, 0.7, 5, x + Math.cos(a) * t + Math.cos(a + Math.PI / 2) * side * 1.3, 4.25, z + Math.sin(a) * t + Math.sin(a + Math.PI / 2) * side * 1.3, GOLD, { metalness: 0.4 });
      }
    }
    addSphere(group, 0.16, 7, x + Math.cos(a) * 2.7, 4.65, z + Math.sin(a) * 2.7, 0xffd38a, { material: bulbMat });
    addSphere(group, 0.16, 7, x - Math.cos(a) * 2.7, 4.65, z - Math.sin(a) * 2.7, 0xffd38a, { material: bulbMat });
  }
  bridge(Math.PI * 0.55);
  bridge(Math.PI * 1.28);
  bridge(Math.PI * 0.18);

  // pavilions on the outer ring
  buildPavilion(group, -15.6, -11.4, 1.0, bulbMat);
  buildPavilion(group, 12.4, -15.6, 0.9, bulbMat);
  buildPavilion(group, -16.1, 10.9, 0.9, bulbMat);
  buildPavilion(group, 13.1, 11.7, 0.78, bulbMat);

  // plants on the island and around the rim
  for (const [x, z, s] of [[-5.3, 5.1, 0.7], [4.7, 4.9, 0.62], [-3.2, -5.8, 0.58], [5.9, -4.7, 0.66], [0.2, -6.8, 0.58], [7.0, 1.1, 0.5]]) {
    buildPine(group, x, 5.8, z, s);
  }
  for (const [x, z, s] of [[15.0, 5.0, 0.62], [-15.6, 4.1, 0.6], [13.8, -6.6, 0.5], [-14.0, -7.4, 0.55], [17.2, -4.0, 0.46], [-17.2, -2.0, 0.48], [6.0, 14.2, 0.44]]) {
    buildPine(group, x, 1.1, z, s, GREEN);
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.22;
    const r = 8.0 + (i % 3) * 0.8;
    addSphere(group, 0.62, 5, Math.cos(a) * r, 2.0 + (i % 2) * 0.5, Math.sin(a) * r, i % 2 ? MOSS : GREEN, {
      sx: 1.35, sy: 0.8, sz: 1.1, roughness: 1, flat: true,
    });
  }

  // rapids boulders and foam inside the channel
  for (let i = 0; i < 8; i++) {
    const a = [0.45, 1.18, 1.9, 2.72, 3.6, 4.35, 5.1, 5.82][i];
    const r = 13.7 + (i % 3) * 0.35;
    addSphere(group, 0.65 + (i % 2) * 0.25, 5, Math.cos(a) * r, 0.75, Math.sin(a) * r, STONE_DARK, {
      sx: 1.1, sy: 0.65, sz: 0.8, roughness: 1, flat: true,
    });
    const foam = new THREE.Mesh(
      new THREE.RingGeometry(0.55, 0.95, 24),
      new THREE.MeshBasicMaterial({ color: 0xc9fff4, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
    foam.rotation.x = -Math.PI / 2;
    foam.position.set(Math.cos(a) * r, 0.7, Math.sin(a) * r);
    group.add(foam);
  }

  // entrance and queue on the east side
  for (let i = 0; i < 4; i++) {
    addBox(group, 1.0, 0.2, 4.4, 17.0 + i * 0.75, 0.16 + i * 0.18, 0, 0xb89a6e, { roughness: 0.9 });
  }
  for (const side of [-1, 1]) {
    addCylinder(group, 0.14, 0.2, 4.5, 8, 16.6, 2.25, side * 2.8, GOLD, { metalness: 0.42 });
    addSphere(group, 0.18, 8, 16.6, 4.55, side * 2.8, 0xffd48a, { material: bulbMat });
    addBox(group, 3.2, 0.08, 0.1, 18.0, 1.0, side * 2.8, GOLD, { metalness: 0.4 });
    for (let i = 0; i < 3; i++) addCylinder(group, 0.06, 0.08, 0.9, 5, 18.1 + i * 1.5, 0.65, side * 2.8, GOLD, { metalness: 0.35 });
  }
  const warm = new THREE.PointLight(0xffcf9b, 470, 32, 2);
  warm.position.set(0, 8.2, 0);
  group.add(warm);
  const cool = new THREE.PointLight(0x8fe7df, 280, 24, 2);
  cool.position.set(0, 2.6, 0);
  group.add(cool);
  const gateLight = new THREE.PointLight(0xffd5a2, 130, 15, 2);
  gateLight.position.set(18.0, 4.0, 0);
  group.add(gateLight);

  const sign = makeSign({
    text: '急流泛舟', sub: 'THE RAPIDS · ATTRACTION 12', worldWidth: 6.2, worldHeight: 1.25,
    bg: 'rgba(12,46,48,.92)', border: 'rgba(224,184,102,.65)', color: '#ffefca', subColor: '#dfba78',
    width: 960, height: 205, font: '600 74px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 25px "Avenir Next", sans-serif',
  });
  sign.position.set(18.4, 2.9, -4.5);
  sign.rotation.y = Math.PI / 2;
  group.add(sign);

  // closed raft path with a slight inner/outer wander
  const pts = [];
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * (RAFT_R + Math.sin(a * 3) * 0.55), RAFT_Y, Math.sin(a) * (RAFT_R + Math.sin(a * 3) * 0.55)));
  }
  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
  const raftColors = [WINE, BLUE, GREEN, 0xc18a3d];
  const rafts = raftColors.map((color, i) => {
    const raft = buildRaft(color, i);
    group.add(raft.group);
    raft.offset = i / 4;
    raft.phase = i * 1.8;
    return raft;
  });
  const player = rafts[0];

  // animated foam rings and splash clusters
  const ripples = new THREE.Group();
  group.add(ripples);
  const rippleRings = [];
  for (let i = 0; i < 12; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: 0xc8fff4, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.7, 0.82, 40), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(Math.cos(i * 2.1) * (INNER_R + 2 + (i % 3)), 0.72, Math.sin(i * 2.1) * (INNER_R + 2 + (i % 3)));
    ring.userData.phase = (i * 0.13) % 1;
    ripples.add(ring);
    rippleRings.push(ring);
  }
  const splashes = new THREE.Group();
  group.add(splashes);
  const splashBits = [];
  for (let s = 0; s < 3; s++) {
    const a = [0.1, 2.25, 4.3][s];
    const cx = Math.cos(a) * 8.9;
    const cz = Math.sin(a) * 8.9;
    for (let i = 0; i < 9; i++) {
      const bit = addSphere(splashes, 0.1 + (i % 3) * 0.04, 5, cx + Math.cos(i * 2.1) * 0.8, 0.9 + (i % 4) * 0.25, cz + Math.sin(i * 2.1) * 0.8, 0xe7ffff, {
        transparent: true, opacity: 0.5, depthWrite: false,
      });
      bit.userData.baseY = bit.position.y;
      bit.userData.phase = i * 0.8 + s;
      splashBits.push(bit);
    }
  }

  let active = false;
  let progress = 0;
  const api = {
    group,
    center: CENTER.clone(),
    rafts,
    playerRaft: player,
    effects: [ripples, splashes],
    colliders: [{ type: 'circle', x: CENTER.x, z: CENTER.z, r: 18.4 }],
    marker: new THREE.Vector3(CENTER.x, 22, CENTER.z),
    setRideActive(v) { active = v; },
    startRide() { active = true; },
    endRide() { active = false; },
    getPlayerPose() {
      return player.group.getWorldPosition(new THREE.Vector3());
    },
    update(dt, elapsed) {
      progress = (progress + dt * (active ? 0.034 : 0.009)) % 1;
      rafts.forEach((r, i) => {
        const u = (progress + r.offset) % 1;
        const p = curve.getPointAt(u);
        const tangent = curve.getTangentAt(u);
        r.group.position.copy(p);
        r.group.rotation.y = Math.atan2(tangent.x, tangent.z);
        r.spin.rotation.y += dt * (active ? 0.3 : 0.06) + Math.sin(elapsed * 0.7 + r.phase) * 0.0005;
        r.group.position.y = RAFT_Y + Math.sin(elapsed * 2.4 + r.phase) * 0.035;
        r.wake.material.opacity = 0.13 + Math.sin(elapsed * 3.2 + i) * 0.045;
        r.wake.scale.setScalar(1 + Math.sin(elapsed * 2.1 + i) * 0.06);
      });
      waterMap.offset.x += dt * 0.018;
      waterMap.offset.y -= dt * 0.025;
      falls.forEach((f, i) => {
        f.tex.offset.y -= dt * (0.22 + i * 0.03);
        f.mat.opacity = 0.7 + Math.sin(elapsed * 3 + i) * 0.12;
      });
      rippleRings.forEach((r) => {
        const p = (elapsed * 0.22 + r.userData.phase) % 1;
        r.scale.setScalar(0.7 + p * 2.0);
        r.material.opacity = (1 - p) * 0.2;
      });
      splashBits.forEach((b) => {
        b.position.y = b.userData.baseY + Math.abs(Math.sin(elapsed * 2.5 + b.userData.phase)) * 0.8;
        b.material.opacity = 0.24 + Math.abs(Math.sin(elapsed * 2.5 + b.userData.phase)) * 0.34;
      });
    },
  };
  return api;
}
