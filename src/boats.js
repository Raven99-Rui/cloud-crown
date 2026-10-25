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

const CENTER = new THREE.Vector3(-18, 0, -118);
const POOL_R = 13.0;
const FENCE_R = 14.8;
const PLAY_R = 11.35;

function waterTexture() {
  const tex = makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#2b8fa2'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(166,240,238,.38)'; ctx.lineWidth = 2;
    for (let i = 0; i < 36; i++) {
      const y = (i / 36) * h + Math.sin(i * 1.9) * 9;
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= w; x += 24) ctx.lineTo(x, y + Math.sin(x * 0.03 + i * 1.3) * 6);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,255,255,.18)';
    for (let i = 0; i < 50; i++) ctx.fillRect((i * 101) % w, (i * 61) % h, 2 + (i % 3), 1);
  }, 512, 512);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3.4, 3.4);
  return tex;
}

function anchor(parent, x, y, z, scale = 1, ry = 0) {
  addCylinder(parent, 0.035 * scale, 0.045 * scale, 0.9 * scale, 5, x, y + 0.15 * scale, z, GOLD, { metalness: 0.4 });
  addTorus(parent, 0.24 * scale, 0.035 * scale, 4, 16, x, y - 0.18 * scale, z, GOLD, { ry, arc: Math.PI * 1.25, metalness: 0.4 });
  addBox(parent, 0.5 * scale, 0.045 * scale, 0.05 * scale, x, y + 0.52 * scale, z, GOLD, { ry, metalness: 0.4 });
  addSphere(parent, 0.06 * scale, 6, x, y + 0.86 * scale, z, GOLD_LIGHT, { metalness: 0.4 });
}

function makeBoat(parent, index, color, variant) {
  const group = new THREE.Group();
  const spin = new THREE.Group();
  group.add(spin);
  parent.add(group);

  addSphere(spin, 1.0, 14, 0, 0.36, 0, color, {
    sx: 1.05, sy: 0.34, sz: 1.55, roughness: 0.55, emissive: color, emissiveIntensity: 0.2,
  });
  addCylinder(spin, 0.92, 1.1, 0.28, 16, 0, 0.54, 0, color, { roughness: 0.62, emissive: color, emissiveIntensity: 0.18 });
  addCylinder(spin, 0.9, 0.92, 0.08, 16, 0, 0.7, 0, CREAM, { roughness: 0.75 });
  addCylinder(spin, 1.12, 1.22, 0.3, 16, 0, 0.82, 0, color, {
    roughness: 0.58, emissive: color, emissiveIntensity: 0.24,
  });
  addTorus(spin, 1.18, 0.055, 4, 24, 0, 1.0, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.42 });
  addTorus(spin, 1.26, 0.2, 5, 24, 0, 0.38, 0, 0x27292b, { rx: Math.PI / 2, roughness: 0.82 });
  addTorus(spin, 1.29, 0.07, 4, 24, 0, 0.52, 0, GOLD, { rx: Math.PI / 2, metalness: 0.42 });
  addBox(spin, 1.15, 0.12, 1.7, 0, 0.7, -0.05, 0x3d2d26, { roughness: 0.85 });
  for (const side of [-1, 1]) {
    addBox(spin, 0.16, 0.08, 1.8, side * 0.62, 0.9, 0.1, GOLD, { metalness: 0.4 });
    addSphere(spin, 0.1, 6, side * 0.62, 0.85, 1.48, 0xffd48b, { material: new THREE.MeshStandardMaterial({ color: 0xffe1a9, emissive: 0xffa53c, emissiveIntensity: 1.4, roughness: 0.3 }) });
  }
  // seat and wheel
  addBox(spin, 0.7, 0.16, 0.62, 0, 0.92, 0.55, 0x211c1f, { roughness: 0.85 });
  addBox(spin, 0.64, 0.66, 0.12, 0, 1.22, 0.76, color, { roughness: 0.7 });
  addCylinder(spin, 0.27, 0.27, 0.08, 12, 0, 1.0, -0.23, 0x2a211e, { rx: Math.PI / 2, roughness: 0.67 });
  addCylinder(spin, 0.055, 0.055, 0.38, 6, 0, 0.9, -0.2, GOLD, { rx: 0.75, metalness: 0.4 });
  // variant superstructure with a shared footprint
  if (variant === 'steam') {
    addCylinder(spin, 0.22, 0.3, 0.9, 8, 0, 1.1, -0.45, 0x262b2c, { roughness: 0.7 });
    addCylinder(spin, 0.31, 0.31, 0.18, 8, 0, 1.58, -0.45, GOLD, { metalness: 0.4 });
    addSphere(spin, 0.12, 6, 0, 1.74, -0.45, 0xffd48b, { material: new THREE.MeshStandardMaterial({ color: 0xffe1aa, emissive: 0xffa63c, emissiveIntensity: 1.5 }) });
    addCylinder(spin, 0.05, 0.05, 1.6, 4, 0.55, 1.0, -1.0, GOLD, { rz: Math.PI / 2, metalness: 0.4 });
  } else if (variant === 'sail') {
    addCylinder(spin, 0.055, 0.08, 2.3, 5, 0, 1.7, 0.15, GOLD, { metalness: 0.4 });
    const sail = new THREE.Mesh(
      new THREE.ConeGeometry(0.9, 2.0, 3, 1, true),
      new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.85, side: THREE.DoubleSide, emissive: 0x392b1b, emissiveIntensity: 0.15 }),
    );
    sail.position.set(0, 2.0, 0.2);
    sail.rotation.y = Math.PI / 2;
    spin.add(sail);
    addTorus(spin, 0.18, 0.035, 4, 12, 0, 2.3, 0.15, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  } else {
    addCylinder(spin, 0.78, 0.9, 0.38, 12, 0, 1.06, -0.3, color, { roughness: 0.62 });
    addSphere(spin, 0.82, 12, 0, 1.2, -0.3, color, { sy: 0.38, roughness: 0.62 });
    addCylinder(spin, 0.06, 0.06, 0.7, 4, 0, 1.8, -0.3, GOLD, { metalness: 0.4 });
  }
  // name pennant
  addCylinder(spin, 0.025, 0.035, 1.15, 4, 0.9, 1.45, -0.9, GOLD, { metalness: 0.4 });
  addBox(spin, 0.05, 0.34, 0.55, 0.94, 1.8, -0.9, index % 2 ? WINE : TEAL, { roughness: 0.68 });

  const wake = new THREE.Mesh(
    new THREE.RingGeometry(1.1, 2.2, 32),
    new THREE.MeshBasicMaterial({ color: 0xd2fff4, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }),
  );
  wake.rotation.x = -Math.PI / 2;
  wake.position.y = -0.04;
  group.add(wake);
  return { group, spin, wake, index, variant };
}

function addFenceAndLamps(group, x, z) {
  // cream stone balustrade around the pool
  addCylinder(group, FENCE_R + 1.2, FENCE_R + 1.6, 0.45, 32, x, 0.22, z, 0xb7a284, { roughness: 0.92 });
  addTorus(group, FENCE_R + 1.05, 0.18, 4, 64, x, 0.52, z, CREAM, { rx: Math.PI / 2, roughness: 0.85 });
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    if (Math.abs(Math.sin(a) - 1) < 0.24) continue; // south entrance gap
    const px = x + Math.cos(a) * (FENCE_R + 0.92);
    const pz = z + Math.sin(a) * (FENCE_R + 0.92);
    addBox(group, 2.8, 1.25, 0.16, px, 1.15, pz, i % 4 === 0 ? WINE : TEAL, { ry: -a + Math.PI / 2, roughness: 0.7 });
    addBox(group, 2.55, 0.08, 0.18, px, 1.82, pz, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
    addBox(group, 2.55, 0.32, 0.08, px, 0.65, pz, CREAM, { ry: -a + Math.PI / 2, roughness: 0.85 });
    if (i % 4 === 0) anchor(group, px, 1.15, pz, 0.42, -a + Math.PI / 2);
  }
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const px = x + Math.cos(a) * (FENCE_R + 1.05);
    const pz = z + Math.sin(a) * (FENCE_R + 1.05);
    addCylinder(group, 0.18, 0.28, 2.0, 8, px, 1.2, pz, CREAM, { roughness: 0.82 });
    addCylinder(group, 0.2, 0.2, 0.25, 8, px, 2.3, pz, GOLD, { metalness: 0.4 });
    addSphere(group, 0.2, 8, px, 2.55, pz, 0xffd48b, { material: new THREE.MeshStandardMaterial({ color: 0xffe3ab, emissive: 0xffa93f, emissiveIntensity: 1.8, roughness: 0.28 }) });
    if (i % 3 === 0) {
      addCylinder(group, 0.025, 0.035, 1.1, 4, px, 3.2, pz, GOLD, { metalness: 0.4 });
      addBox(group, 0.05, 0.4, 0.58, px + 0.2, 3.55, pz, WINE, { roughness: 0.7 });
    }
  }
  addTorus(group, FENCE_R + 1.02, 0.09, 4, 64, x, 2.0, z, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.4 });
}

function buildHarborPavilion(parent, bulbMat) {
  // south entrance pavilion, facing the pool (north)
  addBox(parent, 14.5, 0.55, 5.0, 0, 0.28, 16.3, CREAM, { roughness: 0.88 });
  for (let i = 0; i < 3; i++) {
    addCylinder(parent, 0.18, 0.24, 4.0, 8, -5.3 + i * 5.3, 2.3, 15.2, TEAL_DARK, { roughness: 0.7 });
    addCylinder(parent, 0.18, 0.24, 4.0, 8, -5.3 + i * 5.3, 2.3, 17.6, TEAL_DARK, { roughness: 0.7 });
    addBox(parent, 14.8, 0.35, 0.2, 0, 4.45, 16.4, GOLD, { metalness: 0.4 });
  }
  for (let i = 0; i < 3; i++) {
    const x = -5.3 + i * 5.3;
    addCylinder(parent, 2.1, 2.6, 0.35, 12, x, 4.5, 16.4, GOLD, { metalness: 0.4 });
    for (let k = 0; k < 12; k++) {
      const color = k % 2 ? CREAM : WINE;
      addCone(parent, 2.4, 2.2, 1, x, 5.75, 16.4, color, {
        thetaStart: (k / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
        openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.7,
        emissive: color, emissiveIntensity: 0.22,
      });
    }
    addCylinder(parent, 0.05, 0.05, 1.3, 4, x, 7.4, 16.4, GOLD, { metalness: 0.5 });
    addBox(parent, 0.06, 0.4, 0.72, x + 0.25, 7.8, 16.4, WINE, { roughness: 0.7 });
  }
  // raised central dome and side turrets
  addCylinder(parent, 1.55, 1.85, 1.1, 8, 0, 6.55, 16.45, CREAM, { roughness: 0.8 });
  for (let i = 0; i < 12; i++) {
    const color = i % 2 ? CREAM : WINE;
    addCone(parent, 2.15, 2.5, 1, 0, 8.05, 16.45, color, {
      thetaStart: (i / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
      openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.68,
      emissive: color, emissiveIntensity: 0.25,
    });
  }
  addCylinder(parent, 0.05, 0.05, 1.7, 4, 0, 9.5, 16.45, GOLD, { metalness: 0.5 });
  addBox(parent, 0.06, 0.46, 0.9, 0.3, 9.95, 16.45, WINE, { roughness: 0.7 });
  addStar(parent, 0.7, 0.16, 0, 9.35, 16.45, 0xffd578, { emissiveIntensity: 1.5 });
  for (const side of [-1, 1]) {
    addCylinder(parent, 0.9, 1.1, 1.0, 8, side * 5.3, 6.9, 16.45, CREAM, { roughness: 0.8 });
    for (let i = 0; i < 8; i++) {
      const color = i % 2 ? CREAM : WINE;
      addCone(parent, 1.25, 1.55, 1, side * 5.3, 7.75, 16.45, color, {
        thetaStart: (i / 8) * Math.PI * 2, thetaLength: Math.PI / 4,
        openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.7,
        emissive: color, emissiveIntensity: 0.2,
      });
    }
    addCylinder(parent, 0.04, 0.04, 1.1, 4, side * 5.3, 8.85, 16.45, GOLD, { metalness: 0.45 });
    addBox(parent, 0.05, 0.3, 0.62, side * 5.3 + 0.22, 9.1, 16.45, WINE, { roughness: 0.7 });
  }

  // central pediment and wheel/anchor emblem
  addBox(parent, 8.2, 2.0, 0.35, 0, 5.5, 18.65, TEAL_DARK, { roughness: 0.7 });
  addTorus(parent, 0.85, 0.16, 5, 24, 0, 5.8, 18.85, GOLD, { metalness: 0.45 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addBox(parent, 0.12, 0.5, 0.1, Math.cos(a) * 1.05, 5.8 + Math.sin(a) * 1.05, 18.86, GOLD, { rz: a, metalness: 0.4 });
  }
  addSphere(parent, 0.22, 8, 0, 5.8, 18.9, GOLD_LIGHT, { metalness: 0.4 });
  // red/cream scalloped awnings
  for (const x of [-5.3, 0, 5.3]) {
    for (let i = 0; i < 8; i++) {
      addBox(parent, 2.3, 0.32, 0.08, x - 2.15 + i * 0.62, 3.8, 14.05, i % 2 ? WINE : CREAM, {
        ry: 0, roughness: 0.7,
      });
    }
    addBox(parent, 5.2, 0.12, 0.45, x, 3.98, 14.2, GOLD, { metalness: 0.4 });
  }
  // stairs and lamps
  for (let i = 0; i < 4; i++) {
    addBox(parent, 7.2, 0.2, 1.1, 0, 0.12 + i * 0.18, 20.0 + i * 0.7, 0xb89a6e, { roughness: 0.9 });
  }
  for (const side of [-1, 1]) {
    addCylinder(parent, 0.12, 0.18, 3.6, 8, side * 5.2, 2.0, 19.6, GOLD, { metalness: 0.4 });
    addSphere(parent, 0.18, 8, side * 5.2, 3.9, 19.6, 0xffd48b, { material: bulbMat });
  }
  const sign = makeSign({
    text: '水上碰碰船', sub: 'THE HARBOR BUMPERS · ATTRACTION 13', worldWidth: 7.0, worldHeight: 1.35,
    bg: 'rgba(12,46,48,.93)', border: 'rgba(224,184,102,.65)', color: '#ffefca', subColor: '#dfba78',
    width: 1024, height: 215, font: '600 72px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 24px "Avenir Next", sans-serif',
  });
  sign.position.set(0, 5.9, 19.9);
  parent.add(sign);
}

export function createBumperBoats(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.copy(CENTER);
  scene.add(group);

  const map = waterTexture();
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x3aa4b5, map, roughness: 0.24, metalness: 0.28,
    emissive: 0x0c586a, emissiveIntensity: 0.58,
  });
  const water = new THREE.Mesh(new THREE.CircleGeometry(POOL_R, 72), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.52;
  group.add(water);
  addCylinder(group, POOL_R + 1.4, POOL_R + 1.5, 0.45, 64, 0, 0.2, 0, 0xb8a487, { roughness: 0.9 });
  addTorus(group, POOL_R + 0.02, 0.32, 5, 64, 0, 0.5, 0, CREAM, { rx: Math.PI / 2, roughness: 0.85 });

  // boarding dock, bollards, and a short queue lane
  addBox(group, 5.4, 0.22, 2.2, 0, 0.38, 12.35, 0xb89a6e, { roughness: 0.88 });
  addBox(group, 5.2, 0.08, 2.0, 0, 0.54, 12.35, GOLD, { metalness: 0.4 });
  for (const side of [-1, 1]) {
    addCylinder(group, 0.18, 0.22, 0.8, 8, side * 2.35, 0.82, 13.0, GOLD, { metalness: 0.42 });
    addTorus(group, 0.16, 0.04, 4, 10, side * 2.35, 1.18, 13.0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.4 });
    for (let i = 0; i < 2; i++) {
      addCylinder(group, 0.08, 0.1, 1.0, 6, side * 3.2, 0.8, 20.6 + i * 2.0, GOLD, { metalness: 0.4 });
      addSphere(group, 0.11, 7, side * 3.2, 1.35, 20.6 + i * 2.0, 0xffd48b, { material: bulbMat });
    }
    addBox(group, 0.08, 0.06, 3.8, side * 3.2, 0.95, 21.5, WINE, { roughness: 0.7 });
  }
  addFenceAndLamps(group, 0, 0);
  buildHarborPavilion(group, bulbMat);

  // plants and red flags along the balustrade
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.2;
    if (Math.abs(Math.sin(a) - 1) < 0.3) continue;
    const x = Math.cos(a) * 15.7;
    const z = Math.sin(a) * 15.7;
    addSphere(group, 0.55, 5, x, 0.9, z, GREEN, { sx: 1.2, sy: 0.7, sz: 1.0, flat: true, roughness: 1 });
    addCylinder(group, 0.03, 0.04, 1.3, 4, x, 2.6, z, GOLD, { metalness: 0.4 });
    addBox(group, 0.05, 0.45, 0.6, x + 0.24, 3.1, z, WINE, { roughness: 0.7 });
  }

  const specs = [
    [WINE, 'steam'], [BLUE, 'round'], [GREEN, 'sail'], [CREAM, 'steam'], [0xb47a39, 'round'],
  ];
  const boats = specs.map(([color, variant], i) => {
    const boat = makeBoat(group, i, color, variant);
    boat.x = [0, -4.2, 4.6, -7.2, 7.0][i];
    boat.z = [-5.0, 2.0, 4.2, -2.6, 3.4][i];
    boat.heading = [0, 1.8, -1.2, 2.4, -2.6][i];
    boat.speed = 0;
    boat.vx = 0;
    boat.vz = 0;
    boat.phase = i * 1.4;
    boat.radius = 1.35;
    boat.group.position.set(boat.x, 0.72, boat.z);
    boat.group.rotation.y = boat.heading;
    return boat;
  });
  const player = boats[0];

  // floating gold buoys / targets
  const pickups = [];
  const pickupSpots = [[0, -8.0], [8.0, 1.5], [-8.2, -1.7], [4.8, 8.7], [-5.0, 7.8]];
  pickupSpots.forEach(([x, z], i) => {
    const g = new THREE.Group();
    g.position.set(x, 0.86, z);
    addTorus(g, 0.48, 0.11, 4, 16, 0, 0, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
    addCylinder(g, 0.08, 0.1, 0.8, 6, 0, 0.35, 0, 0xc59ed0, { roughness: 0.6 });
    addStar(g, 0.28, 0.07, 0, 0.82, 0, 0xffd673, { emissiveIntensity: 1.5 });
    addSphere(g, 0.1, 6, 0, 0.32, 0, GOLD_LIGHT, { material: bulbMat });
    g.userData.index = i;
    group.add(g);
    pickups.push(g);
  });

  const rippleGroup = new THREE.Group();
  group.add(rippleGroup);
  const ripples = [];
  for (let i = 0; i < 10; i++) {
    const m = new THREE.MeshBasicMaterial({ color: 0xc8fff4, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const r = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.0, 32), m);
    r.rotation.x = -Math.PI / 2;
    r.position.set(Math.cos(i * 2.2) * 7, 0.67, Math.sin(i * 2.2) * 7);
    r.userData.phase = (i * 0.17) % 1;
    rippleGroup.add(r);
    ripples.push(r);
  }

  const warm = new THREE.PointLight(0xffcf9b, 235, 28, 2);
  warm.position.set(0, 7.2, 0);
  group.add(warm);
  const cool = new THREE.PointLight(0x8fe7df, 145, 20, 2);
  cool.position.set(0, 2.4, 0);
  group.add(cool);

  let active = false;
  let score = 0;
  let bumpPulse = 0;
  let input = { forward: 0, turn: 0 };
  let playerSpeed = 0;
  let playerHeading = player.heading;
  const tmpRipple = [];
  function splashRipple(x, z) {
    const m = new THREE.MeshBasicMaterial({ color: 0xd9ffff, transparent: true, opacity: 0.42, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const r = new THREE.Mesh(new THREE.RingGeometry(0.25, 0.38, 24), m);
    r.rotation.x = -Math.PI / 2;
    r.position.set(x, 0.7, z);
    r.userData.life = 0.65;
    group.add(r);
    tmpRipple.push(r);
  }
  function reset() {
    const spots = [[0, -5.0, 0], [-4.2, 2.0, 1.8], [4.6, 4.2, -1.2], [-7.2, -2.6, 2.4], [7.0, 3.4, -2.6]];
    boats.forEach((b, i) => {
      const [x, z, h] = spots[i];
      b.x = x; b.z = z; b.heading = h; b.speed = 0; b.vx = 0; b.vz = 0;
      b.group.position.set(x, 0.72, z);
      b.group.rotation.y = h;
    });
    playerSpeed = 0;
    playerHeading = player.heading;
    input = { forward: 0, turn: 0 };
    score = 0;
    pickups.forEach((p) => { p.visible = true; });
  }

  const api = {
    group,
    center: CENTER.clone(),
    boats,
    playerBoat: player,
    effects: [rippleGroup, ...pickups],
    colliders: [{ type: 'circle', x: CENTER.x, z: CENTER.z, r: 16.6 }],
    marker: new THREE.Vector3(CENTER.x, 18, CENTER.z),
    onScore: null,
    onBump: null,
    get score() { return score; },
    get bumpPulse() { return bumpPulse; },
    startRide() { active = true; reset(); },
    endRide() { active = false; input = { forward: 0, turn: 0 }; playerSpeed = 0; },
    setInput(forward, turn) {
      input.forward = THREE.MathUtils.clamp(forward, -1, 1);
      input.turn = THREE.MathUtils.clamp(turn, -1, 1);
    },
    getPlayerState() {
      return { x: player.x, z: player.z, heading: playerHeading, speed: playerSpeed };
    },
    getPlayerBoat() { return player.group; },
    update(dt, elapsed) {
      bumpPulse = Math.max(0, bumpPulse - dt * 2.5);
      map.offset.x += dt * 0.012;
      map.offset.y -= dt * 0.016;
      pickups.forEach((p) => {
        if (!p.visible) return;
        p.rotation.y += dt * 0.55;
        p.position.y = 0.86 + Math.sin(elapsed * 1.8 + p.userData.index) * 0.07;
      });
      ripples.forEach((r) => {
        const p = (elapsed * 0.2 + r.userData.phase) % 1;
        r.scale.setScalar(0.7 + p * 2.4);
        r.material.opacity = (1 - p) * 0.24;
      });
      for (let i = tmpRipple.length - 1; i >= 0; i--) {
        const r = tmpRipple[i];
        r.userData.life -= dt;
        r.scale.setScalar(1 + (0.65 - r.userData.life) * 3);
        r.material.opacity = Math.max(0, r.userData.life * 0.65);
        if (r.userData.life <= 0) {
          group.remove(r);
          r.geometry.dispose(); r.material.dispose();
          tmpRipple.splice(i, 1);
        }
      }
      if (!active) {
        boats.forEach((b, i) => {
          b.group.position.y = 0.72 + Math.sin(elapsed * 1.2 + b.phase) * 0.025;
          b.spin.rotation.y += dt * 0.04;
        });
        return;
      }
      playerSpeed += input.forward * 5.8 * dt;
      playerSpeed *= Math.pow(0.915, dt * 60);
      playerSpeed = THREE.MathUtils.clamp(playerSpeed, -2.2, 5.2);
      if (Math.abs(input.forward) < 0.05) playerSpeed *= Math.pow(0.97, dt * 60);
      playerHeading += input.turn * (1.5 + Math.abs(playerSpeed) * 0.06) * (playerSpeed >= 0 ? 1 : -1) * dt;
      player.x += Math.sin(playerHeading) * playerSpeed * dt;
      player.z += Math.cos(playerHeading) * playerSpeed * dt;
      const pd = Math.hypot(player.x, player.z);
      if (pd > PLAY_R) {
        player.x = (player.x / pd) * PLAY_R;
        player.z = (player.z / pd) * PLAY_R;
        playerSpeed *= -0.35;
        splashRipple(player.x, player.z);
      }
      for (let i = 1; i < boats.length; i++) {
        const b = boats[i];
        b.vx += Math.sin(elapsed * 0.6 + b.phase) * 0.25 * dt;
        b.vz += Math.cos(elapsed * 0.5 + b.phase) * 0.25 * dt;
        b.x += b.vx * dt;
        b.z += b.vz * dt;
        const bd = Math.hypot(b.x, b.z);
        if (bd > PLAY_R - 0.2) {
          b.x = (b.x / bd) * (PLAY_R - 0.2);
          b.z = (b.z / bd) * (PLAY_R - 0.2);
          b.vx *= -0.8; b.vz *= -0.8;
        }
        if (Math.hypot(b.x - player.x, b.z - player.z) < 2.65) {
          const dx = player.x - b.x, dz = player.z - b.z;
          const len = Math.hypot(dx, dz) || 1;
          player.x = b.x + (dx / len) * 2.75;
          player.z = b.z + (dz / len) * 2.75;
          playerSpeed *= -0.45;
          b.vx *= -0.7; b.vz *= -0.7;
          bumpPulse = 1;
          splashRipple(player.x, player.z);
          if (api.onBump) api.onBump();
        }
        b.group.position.set(b.x, 0.72 + Math.sin(elapsed * 2.1 + b.phase) * 0.02, b.z);
        b.group.rotation.y = Math.atan2(b.vx, b.vz);
        b.spin.rotation.y += dt * (0.1 + Math.hypot(b.vx, b.vz) * 0.05);
      }
      player.group.position.set(player.x, 0.72 + Math.sin(elapsed * 2.6) * 0.025, player.z);
      player.group.rotation.y = playerHeading;
      player.spin.rotation.y += dt * 0.14;
      player.wake.material.opacity = 0.14 + Math.abs(playerSpeed) * 0.025;
      player.wake.scale.setScalar(1 + Math.abs(playerSpeed) * 0.08);
      // collect floating stars
      pickups.forEach((p) => {
        if (!p.visible) return;
        if (Math.hypot(p.position.x - player.x, p.position.z - player.z) < 1.75) {
          p.visible = false;
          score += 1;
          splashRipple(player.x, player.z);
          if (api.onScore) api.onScore(score);
        }
      });
    },
  };
  return api;
}
