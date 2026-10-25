import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addPlane, addSphere, addTorus, addStar,
  cylinderBetween, makeSign, makeGlowTexture, basic, standard, makeRibbon, makeCanvasPlaneTexture,
} from './builders.js';
import { createCarousel as createStarlightCarousel } from './double-carousel.js';
import { createTeaRide } from '../teacup/ride.js';
import { createSkyway } from './skyway.js';
import { createCloudCrown, createRainbowChute } from './designs.js';
import { createParkShip, mergeStaticMeshes as mergeBlackSailShip } from '../pirate/src/world.js';
import { createSwingRide } from './swing.js';
import { createFlyingPlanes } from './planes.js';
import { createBumperCars } from './bumper.js';
import { createRapids } from './rapids.js';
import { createBumperBoats } from './boats.js';
import { createParkTrain } from './train.js';

const TMP_V = new THREE.Vector3();

function makeSailTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.92);
    ctx.bezierCurveTo(w * 0.02, h * 0.58, w * 0.18, h * 0.16, w * 0.38, h * 0.06);
    ctx.bezierCurveTo(w * 0.62, h * 0.14, w * 0.88, h * 0.45, w * 0.84, h * 0.92);
    ctx.quadraticCurveTo(w * 0.64, h * 0.99, w * 0.48, h * 0.93);
    ctx.quadraticCurveTo(w * 0.3, h * 0.99, w * 0.1, h * 0.92);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#f3e3c4');
    grad.addColorStop(0.5, '#d9c49e');
    grad.addColorStop(1, '#a9865c');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(247,211,144,.9)';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.save();
    ctx.clip();
    ctx.strokeStyle = 'rgba(112,80,49,.3)';
    ctx.lineWidth = 2;
    for (let y = h * 0.2; y < h; y += h * 0.18) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.quadraticCurveTo(w * 0.5, y + h * 0.035, w, y - h * 0.01);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(78,64,107,.85)';
    ctx.beginPath();
    const cx = w * 0.48, cy = h * 0.48;
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 === 0 ? w * 0.14 : w * 0.055;
      if (i === 0) ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      else ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'rgba(255,243,208,.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.92);
    ctx.bezierCurveTo(w * 0.02, h * 0.58, w * 0.18, h * 0.16, w * 0.38, h * 0.06);
    ctx.stroke();
  }, 320, 400);
}

function makeJetAlpha() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    const g = ctx.createLinearGradient(0, h, 0, 0);
    g.addColorStop(0, 'rgba(255,255,255,.95)');
    g.addColorStop(0.4, 'rgba(255,255,255,.6)');
    g.addColorStop(0.82, 'rgba(255,255,255,.16)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, 32, 256);
}

function makeHorse(bodyColor, saddleColor) {
  const horse = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.46, 1.2, 4, 8), standard(bodyColor, { roughness: 0.4, metalness: 0.45 }));
  body.rotation.z = Math.PI / 2;
  body.position.y = 2.35;
  body.scale.set(1, 0.9, 1);
  horse.add(body);
  // neck and head
  const neck = addCylinder(horse, 0.28, 0.38, 0.95, 7, 0.95, 2.95, 0, bodyColor, { rz: -0.55, rough: 0.4, metalness: 0.45 });
  const head = addBox(horse, 0.85, 0.48, 0.38, 1.38, 3.37, 0, bodyColor, { rz: -0.18, roughness: 0.4, metalness: 0.45 });
  addBox(horse, 0.3, 0.24, 0.2, 1.08, 3.6, 0, bodyColor, { rz: -0.55 });
  addCone(horse, 0.08, 0.25, 5, 1.02, 3.8, 0.12, 0x4b2730);
  addCone(horse, 0.08, 0.25, 5, 1.02, 3.8, -0.12, 0x4b2730);
  addBox(horse, 0.45, 0.34, 0.5, 1.62, 3.58, 0, 0x3e2029);
  // mane
  for (let i = 0; i < 4; i++) addBox(horse, 0.16, 0.26, 0.16, 0.78 + i * 0.14, 3.22 + i * 0.1, 0, 0x7d3d3c, { rz: -0.4 });
  // saddle
  addBox(horse, 0.9, 0.14, 0.72, -0.1, 2.85, 0, saddleColor);
  addBox(horse, 0.56, 0.2, 0.5, -0.1, 2.95, 0, saddleColor, { emissive: saddleColor, emissiveIntensity: 0.2 });
  // legs
  [[-0.5, 0.62], [0.48, 0.62], [-0.5, -0.62], [0.48, -0.62]].forEach(([x, z], i) => {
    addCylinder(horse, 0.1, 0.13, 1.3, 5, x, 1.6, z, bodyColor, { rx: i > 1 ? 0.2 : -0.25, roughness: 0.4, metalness: 0.4 });
    addBox(horse, 0.25, 0.15, 0.3, x + (i > 1 ? -0.1 : 0.13), 0.98, z, 0xd5a94e);
  });
  // tail
  addBox(horse, 0.25, 0.75, 0.22, -1.05, 2.22, 0, 0x7d3d3c, { rz: 0.4 });
  return horse;
}

function makeCabin(color) {
  const cabin = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 12), standard(color, { roughness: 0.45, metalness: 0.18 }));
  body.scale.set(1, 1.1, 0.95);
  cabin.add(body);
  const bottom = addSphere(cabin, 1.04, 12, 0, -0.75, 0, 0xc9a964, { sy: 0.35, roughness: 0.4, metalness: 0.5 });
  const window = new THREE.Mesh(
    new THREE.CircleGeometry(0.55, 18),
    new THREE.MeshBasicMaterial({ color: 0xffdda0, transparent: true, opacity: 0.9, toneMapped: false }),
  );
  window.position.set(0, 0.22, 1.15);
  cabin.add(window);
  addTorus(cabin, 0.58, 0.06, 5, 20, 0, 0.22, 1.16, 0xe7c47c, { metalness: 0.5, roughness: 0.35 });
  addBox(cabin, 0.35, 0.7, 0.24, 0, 1.65, 0, 0x2e2d43);
  addTorus(cabin, 0.3, 0.06, 5, 12, 0, 2.02, 0, 0xd2ad64, { rx: Math.PI / 2, metalness: 0.5 });
  addBox(cabin, 1.42, 0.12, 0.16, 0, -1.15, 0, 0x332a32);
  return cabin;
}

function createCarousel(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(-48, 0, 32);
  scene.add(group);

  addCylinder(group, 12.4, 13.1, 0.7, 32, 0, 0.35, 0, 0x5a3f3e, { roughness: 0.85 });
  addCylinder(group, 12.0, 12.0, 0.35, 32, 0, 0.82, 0, 0xcba46a, { roughness: 0.5, metalness: 0.35 });
  addCylinder(group, 12.9, 12.9, 0.2, 32, 0, 0.12, 0, 0x2a2333);

  const spin = new THREE.Group();
  spin.position.y = 0.85;
  group.add(spin);
  addCylinder(spin, 11.7, 11.7, 0.28, 32, 0, 0.12, 0, 0x75554a, { roughness: 0.7 });
  addCylinder(spin, 0.55, 0.75, 8.6, 10, 0, 4.5, 0, 0xd7b46e, { metalness: 0.4, roughness: 0.45 });
  addTorus(spin, 0.8, 0.16, 6, 16, 0, 8.9, 0, 0xe9cc8d, { rx: Math.PI / 2, metalness: 0.45 });

  const stripes = [0xd8666b, 0xf3e3c7];
  const canopyY = 9.0;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    addCylinder(spin, 1.05, 12.9, 3.4, 1, 0, canopyY, 0, stripes[i % 2], {
      openEnded: true, thetaStart: a, thetaLength: (Math.PI * 2) / 12, side: THREE.DoubleSide,
      roughness: 0.7, flat: true,
    });
  }
  addTorus(spin, 12.82, 0.18, 5, 48, 0, canopyY - 1.72, 0, 0xe4bd73, { rx: Math.PI / 2, metalness: 0.45, roughness: 0.32 });
  addTorus(spin, 12.95, 0.07, 4, 48, 0, canopyY - 1.48, 0, 0xffdda0, { rx: Math.PI / 2, emissive: 0xffb45c, emissiveIntensity: 0.6 });
  addCylinder(spin, 1.25, 1.05, 0.4, 12, 0, canopyY + 2.0, 0, 0x5b3d46);
  addCone(spin, 1.0, 2.2, 8, 0, canopyY + 3.2, 0, 0xd9b367, { metalness: 0.35 });
  const topStar = addStar(spin, 0.72, 0.25, 0, canopyY + 4.9, 0, 0xffd574, { emissiveIntensity: 1.8, ry: 0.2 });
  addSphere(spin, 0.1, 8, 0, canopyY + 5.9, 0, 0xfff1bd, { emissive: 0xffc35c, emissiveIntensity: 3 });
  const bulbs = new THREE.Group();
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const b = addSphere(bulbs, 0.14, 6, Math.cos(a) * 12.4, canopyY - 1.95, Math.sin(a) * 12.4, 0xffe2a3, { material: bulbMat });
    b.renderOrder = 2;
  }
  spin.add(bulbs);

  const horses = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const r = 7.25;
    const holder = new THREE.Group();
    holder.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    holder.rotation.y = -a - Math.PI / 2;
    const bodyColor = i % 2 === 0 ? 0xf1d9a6 : 0xd9b46b;
    const saddleColor = [0xd85868, 0x4f8f87, 0x7c6ab0, 0xd68b62][i % 4];
    const horse = makeHorse(bodyColor, saddleColor);
    holder.add(horse);
    addCylinder(holder, 0.075, 0.075, 7.4, 6, 0, 4.5, 0, 0xe2c17e, { metalness: 0.4, roughness: 0.35 });
    spin.add(holder);
    horses.push({ holder, horse, phase: i * 0.9, baseY: 0 });
  }

  // entrance steps and sign
  addBox(group, 5.2, 0.18, 2.1, 0, 0.1, 13.1, 0xc8ab7a);
  addBox(group, 4.2, 0.18, 1.3, 0, 0.26, 13.7, 0xd2b786);
  const sign = makeSign({
    text: '星辉旋转木马', sub: 'STARLIGHT CAROUSEL', worldWidth: 8.6, worldHeight: 2.0,
    bg: 'rgba(37,23,30,.86)', border: 'rgba(240,196,108,.7)', color: '#ffe9b7', subColor: '#d8ae6b', width: 1024, height: 250,
  });
  sign.position.set(0, 5.0, 13.6);
  group.add(sign);
  // fence
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    if (Math.abs(Math.sin(a / 2)) < 0.16 && Math.cos(a) > 0) continue;
    const r = 13.8;
    addCylinder(group, 0.08, 0.1, 1.1, 5, Math.cos(a) * r, 0.55, Math.sin(a) * r, 0xb7935c, { metalness: 0.3 });
    if (i < 29) {
      const a2 = ((i + 1) / 30) * Math.PI * 2;
      if (!(Math.abs(Math.sin(a2 / 2)) < 0.16 && Math.cos(a2) > 0)) {
        cylinderBetween(group, new THREE.Vector3(Math.cos(a) * r, 0.85, Math.sin(a) * r), new THREE.Vector3(Math.cos(a2) * r, 0.85, Math.sin(a2) * r), 0.035, 0xd0af73);
      }
    }
  }
  // lamp posts at the entrance
  [-4.6, 4.6].forEach((x) => {
    addCylinder(group, 0.09, 0.13, 2.9, 6, x, 1.45, 14.9, 0x202438);
    addSphere(group, 0.22, 8, x, 3.05, 14.9, 0xffe6ac, { material: bulbMat });
  });
  return {
    group, spin, horses, topStar,
    center: new THREE.Vector3(-48, 0, 32),
    collider: { type: 'circle', x: -48, z: 32, r: 14.2 },
    update(dt, elapsed, speed = 1) {
      spin.rotation.y += dt * 0.26 * speed;
      horses.forEach(({ horse, phase }) => {
        horse.position.y = Math.sin(elapsed * 2.7 + phase) * 0.18;
        horse.rotation.x = Math.sin(elapsed * 2.7 + phase) * 0.035;
      });
      topStar.rotation.y = elapsed * 0.7;
    },
  };
}

function createFerris(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(58, 0, 18);
  scene.add(group);
  const centerY = 27;
  const radius = 22;

  addCylinder(group, 9.8, 11.2, 0.8, 24, 0, 0.4, 0, 0x252438, { roughness: 0.8 });
  addCylinder(group, 8.4, 8.8, 0.4, 32, 0, 0.95, 0, 0x3e3b51);
  addBox(group, 5.4, 1.2, 3.4, 0, 1.6, 8.4, 0x38384e);
  addBox(group, 4.0, 0.25, 2.1, 0, 2.35, 9.0, 0xb99b66);
  addBox(group, 3.0, 0.3, 1.6, 0, 2.6, 9.5, 0xcfb073);

  const wheel = new THREE.Group();
  wheel.position.y = centerY;
  group.add(wheel);

  const steel = standard(0x979bb2, { roughness: 0.28, metalness: 0.32 });
  const lightSteel = standard(0xc4c7d6, { roughness: 0.24, metalness: 0.3 });
  for (const z of [-1.05, 1.05]) {
    addTorus(wheel, radius, 0.3, 6, 80, 0, 0, z, 0x000000, { material: steel });
    addTorus(wheel, radius - 2.3, 0.1, 4, 64, 0, 0, z, 0x000000, { material: lightSteel });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      addCylinder(wheel, 0.09, 0.09, radius, 5, Math.cos(a) * radius / 2, Math.sin(a) * radius / 2, z, 0xa5a8be, {
        rz: a - Math.PI / 2, metalness: 0.3, roughness: 0.36,
      });
    }
    for (let i = 0; i < 16; i++) {
      const a = ((i + 0.5) / 16) * Math.PI * 2;
      cylinderBetween(wheel, new THREE.Vector3(Math.cos(a) * 5, Math.sin(a) * 5, z), new THREE.Vector3(Math.cos(a) * (radius - 0.4), Math.sin(a) * (radius - 0.4), z), 0.06, 0x868a9e);
    }
  }
  // cross bracing
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    cylinderBetween(wheel, new THREE.Vector3(Math.cos(a) * 9, Math.sin(a) * 9, -1.05), new THREE.Vector3(Math.cos(a + 0.8) * 9, Math.sin(a + 0.8) * 9, 1.05), 0.055, 0x72768a);
  }

  const cabins = [];
  const cabinColors = [0xe88b91, 0xf2c978, 0x72b8bf, 0x9987ca, 0xe6a06d, 0x87bf9e, 0xa8c9e5];
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const pivot = new THREE.Group();
    pivot.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
    const arm = addBox(pivot, 0.14, 0.75, 0.14, 0, -0.36, 0, 0x3c394d);
    const cabin = makeCabin(cabinColors[i % cabinColors.length]);
    cabin.position.y = -1.75;
    pivot.add(cabin);
    wheel.add(pivot);
    cabins.push({ pivot, cabin, angle: a });
  }

  // rim bulbs (front + back)
  for (const z of [-1.3, 1.3]) {
    for (let i = 0; i < 42; i++) {
      const a = (i / 42) * Math.PI * 2;
      const b = addSphere(wheel, 0.16, 6, Math.cos(a) * radius, Math.sin(a) * radius, z, 0xffe3a1, { material: bulbMat });
      b.renderOrder = 2;
    }
  }
  addCylinder(wheel, 2.3, 2.6, 2.9, 12, 0, 0, 0, 0x363448, { rx: Math.PI / 2 });
  addCylinder(wheel, 1.2, 1.2, 3.3, 12, 0, 0, 0, 0xd9b56b, { rx: Math.PI / 2, metalness: 0.5 });
  addStar(wheel, 1.3, 0.35, 0, 0, 1.9, 0xffd26f, { emissiveIntensity: 1.7 });

  // A-frame supports
  for (const z of [-8.5, 8.5]) {
    for (const x of [-14.5, 14.5]) {
      cylinderBetween(group, new THREE.Vector3(x, 0.9, z), new THREE.Vector3(0, centerY - 2.0, z * 0.2), 0.3, 0x55556b, { segments: 8, metalness: 0.55, roughness: 0.45 });
    }
    cylinderBetween(group, new THREE.Vector3(-9.8, 9.5, z), new THREE.Vector3(9.8, 9.5, z), 0.16, 0x696a7d);
    cylinderBetween(group, new THREE.Vector3(-4.5, 18, z), new THREE.Vector3(4.5, 18, z), 0.12, 0x696a7d);
  }

  const sign = makeSign({
    text: '天际之眼', sub: 'THE SKY EYE · 58M', worldWidth: 8.0, worldHeight: 1.9,
    bg: 'rgba(19,42,52,.9)', border: 'rgba(134,220,224,.52)', color: '#e6ffff', subColor: '#8fd7d8', width: 1024, height: 250,
  });
  sign.position.set(0, 5.0, 9.6);
  group.add(sign);
  for (let i = 0; i < 10; i++) {
    const x = -7 + i * 1.55;
    addSphere(group, 0.12, 6, x, 3.7, 9.5, 0xffe6ad, { material: bulbMat });
  }
  const star = addStar(group, 0.55, 0.2, 0, 7.2, 9.4, 0xffd87b, { emissiveIntensity: 1.8 });
  const queue = [];
  for (let i = 0; i < 5; i++) {
    queue.push(addBox(group, 0.15, 1.0, 0.15, -7 + i * 2.5, 0.5, 11.5, 0x545267));
    if (i < 4) addBox(group, 2.4, 0.08, 0.1, -5.75 + i * 2.5, 0.9, 11.5, 0xa78b5d);
  }
  addCylinder(group, 6.5, 7.2, 0.18, 24, 0, 0.15, 0, 0xc3a679);

  return {
    group, wheel, cabins, star,
    center: new THREE.Vector3(58, centerY, 18),
    radius,
    collider: { type: 'circle', x: 58, z: 18, r: 9.2 },
    update(dt, elapsed, speed = 1) {
      wheel.rotation.z += dt * 0.045 * speed;
      cabins.forEach(({ pivot }) => { pivot.rotation.z = -wheel.rotation.z; });
      star.rotation.y = elapsed * 0.5;
    },
  };
}

function createCoaster(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(0, 0, 0);
  scene.add(group);
  const pts = [
    [-82, 3.0, -34], [-93, 4.8, -58], [-76, 11, -78], [-48, 9.5, -87],
    [-25, 15, -71], [-23, 27, -49], [-41, 31, -32], [-59, 23, -19],
    [-59, 10, -38], [-39, 4, -44], [-28, 3.2, -24], [-48, 2.8, -11], [-68, 2.6, -17],
  ].map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.35);
  curve.arcLengthDivisions = 600;
  const N = 420;
  const samples = [];
  for (let i = 0; i < N; i++) {
    const t = i / N;
    const p = curve.getPointAt(t);
    const tan = curve.getTangentAt(t).normalize();
    const right = new THREE.Vector3().crossVectors(tan, new THREE.Vector3(0, 1, 0)).normalize();
    samples.push({ t, p, tan, right });
  }
  const railPtsL = samples.map(({ p, right }) => p.clone().addScaledVector(right, 0.83).add(new THREE.Vector3(0, 0.05, 0)));
  const railPtsR = samples.map(({ p, right }) => p.clone().addScaledVector(right, -0.83).add(new THREE.Vector3(0, 0.05, 0)));
  const railL = new THREE.CatmullRomCurve3(railPtsL, true);
  const railR = new THREE.CatmullRomCurve3(railPtsR, true);
  const railMat = new THREE.MeshStandardMaterial({ color: 0xe39a82, roughness: 0.32, metalness: 0.55, emissive: 0x8a3f31, emissiveIntensity: 1.05 });
  for (const c of [railL, railR]) {
    const tube = new THREE.Mesh(new THREE.TubeGeometry(c, 500, 0.1, 5, true), railMat);
    group.add(tube);
  }
  const tieMat = standard(0x3c2932, { roughness: 0.7, metalness: 0.25 });
  const tieGeo = new THREE.BoxGeometry(2.05, 0.1, 0.34);
  for (let i = 0; i < N; i += 5) {
    const s = samples[i];
    const tie = new THREE.Mesh(tieGeo, tieMat);
    tie.position.copy(s.p);
    tie.lookAt(TMP_V.copy(s.p).add(s.tan));
    group.add(tie);
  }
  // spine
  const spineCurve = new THREE.CatmullRomCurve3(samples.map(({ p }) => p.clone().add(new THREE.Vector3(0, -0.6, 0))), true);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(spineCurve, 420, 0.17, 5, true), standard(0x54414a, { metalness: 0.55, roughness: 0.4 })));
  // supports
  const supportMat = standard(0x6d5a51, { metalness: 0.35, roughness: 0.65 });
  for (let i = 0; i < N; i += 18) {
    const s = samples[i];
    if (s.p.y < 1.8) continue;
    cylinderBetween(group, new THREE.Vector3(s.p.x, 0.1, s.p.z), new THREE.Vector3(s.p.x, s.p.y - 0.4, s.p.z), 0.22, 0x000000, { material: supportMat, segments: 6 });
    const foot = addCylinder(group, 0.65, 0.85, 0.35, 8, s.p.x, 0.15, s.p.z, 0x6c5c51, { material: supportMat });
    foot.scale.set(1, 1, 1);
    // diagonal stabilizer
    if (s.p.y > 8) {
      cylinderBetween(group, new THREE.Vector3(s.p.x + 2.1, 0.2, s.p.z + 2.1), new THREE.Vector3(s.p.x, s.p.y * 0.55, s.p.z), 0.1, 0x000000, { material: supportMat });
    }
  }
  // beacon lights on high points
  [7, 8].forEach((idx) => {
    const s = samples[Math.floor(N * idx / 10)];
    const b = addSphere(group, 0.18, 6, s.p.x, s.p.y + 0.4, s.p.z, 0xffd88b, { material: bulbMat });
    b.renderOrder = 2;
  });
  // small running lights make the track readable at night
  for (let i = 0; i < N; i += 21) {
    const s = samples[i];
    const b = addSphere(group, 0.14, 6, s.p.x, s.p.y + 0.58, s.p.z, 0xffe1a0, { material: bulbMat });
    b.renderOrder = 2;
    if (s.p.y > 7) {
      const side = s.right.clone().multiplyScalar(1.25);
      addSphere(group, 0.08, 5, s.p.x + side.x, s.p.y + 0.1, s.p.z + side.z, 0xffb9a0, { material: bulbMat });
    }
  }

  const station = new THREE.Group();
  station.position.set(-61, 0, -8);
  group.add(station);
  addBox(station, 9, 0.5, 8, 0, 0.25, 0, 0x3b3142);
  addBox(station, 8, 3.8, 0.5, 0, 2.2, -3.8, 0x241d30);
  addBox(station, 8, 0.4, 0.6, 0, 4.2, -3.8, 0xc59e5f);
  for (let i = 0; i < 4; i++) {
    addCylinder(station, 0.12, 0.14, 4.0, 6, -3 + i * 2, 2, 2.9, 0x332a3d);
  }
  addBox(station, 9.2, 0.3, 5.8, 0, 4.2, 0.5, 0x563b45);
  const stationSign = makeSign({
    text: '彗星飞车', sub: 'COMET RUN', worldWidth: 7.4, worldHeight: 1.8,
    bg: 'rgba(35,20,36,.92)', border: 'rgba(242,145,143,.55)', color: '#ffe7d0', subColor: '#ee9d8f', width: 1024, height: 250,
  });
  stationSign.position.set(0, 4.7, 3.0);
  station.add(stationSign);
  for (let i = 0; i < 13; i++) addSphere(station, 0.12, 6, -4.8 + i * 0.8, 3.45, 3.0, 0xffd9a0, { material: bulbMat });

  function makeCar(index) {
    const car = new THREE.Group();
    addBox(car, 1.7, 0.8, 3.1, 0, 0, 0, index === 0 ? 0xa82f42 : 0x7e2839, { roughness: 0.42, metalness: 0.4 });
    addBox(car, 1.35, 0.25, 2.4, 0, 0.55, 0.1, 0x2a202c);
    addSphere(car, 0.82, 12, 0, 0.2, 1.65, 0xa82f42, { sx: 1, sy: 0.55, sz: 1.3, roughness: 0.42, metalness: 0.4 });
    addBox(car, 1.18, 0.5, 0.18, 0, 0.4, -1.6, 0x3a2532);
    addBox(car, 0.16, 0.32, 3.6, 0.82, -0.25, 0, 0xe8b86c, { metalness: 0.5, roughness: 0.35 });
    addBox(car, 0.16, 0.32, 3.6, -0.82, -0.25, 0, 0xe8b86c, { metalness: 0.5, roughness: 0.35 });
    for (const z of [-0.95, 0.95]) {
      for (const x of [-0.82, 0.82]) {
        addCylinder(car, 0.26, 0.26, 0.2, 10, x, -0.48, z, 0x1a1520, { rz: Math.PI / 2 });
      }
    }
    addSphere(car, 0.12, 6, 0, 0.25, 2.25, 0xffe4a0, { material: bulbMat });
    addBox(car, 1.1, 0.12, 0.2, 0, 0.5, 2.35, 0xffe1a0, { emissive: 0xffa94d, emissiveIntensity: 2 });
    return car;
  }
  const cars = [makeCar(0), makeCar(1), makeCar(2)];
  cars.forEach((c) => group.add(c));
  let trainT = 0;

  return {
    group, curve, cars, station,
    collider: { type: 'rect', x: -61, z: -8, hx: 6.5, hz: 6 },
    getTrainT: () => trainT,
    setTrainT: (t) => { trainT = t; },
    update(dt, elapsed, speed = 1) {
      trainT = (trainT + dt * 0.033 * speed) % 1;
      cars.forEach((car, i) => {
        const t = (trainT - i * 0.011 + 1) % 1;
        const p = curve.getPointAt(t);
        const tan = curve.getTangentAt(t).normalize();
        car.position.copy(p).add(new THREE.Vector3(0, 0.72, 0));
        car.lookAt(TMP_V.copy(p).add(tan).add(new THREE.Vector3(0, 0.72, 0)));
        car.rotateZ(-tan.x * 0.09);
      });
    },
  };
}

function createTeacups(scene, bulbMat, renderer) {
  const ride = createTeaRide({
    scene,
    renderer,
    isMobile: window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1000,
    park: {
      position: [-62, 0, 68],
      scale: 1,
      bulbMat,
    },
  });

  return {
    group: ride.root,
    spin: ride.rotating,
    cups: ride.cups,
    ride,
    collider: { type: 'circle', x: -62, z: 68, r: 13.0 },
    getCupViewPoint(index, target) { return ride.getCupViewPoint(index, target); },
    getCupWorldPosition(index, target) { return ride.getCupWorldPosition(index, target); },
    setRideActive(active) { ride.setRiding(active); },
    spinCup(direction, amount = 1) { ride.spin(direction, amount); },
    spinBy(delta) { ride.spinBy(delta); },
    getSpeedRPM() { return ride.getSpeedRPM(); },
    getPlatformRPM() { return ride.getPlatformRPM(); },
    update(dt, elapsed, speed = 1, lamp = 1) {
      ride.update(dt, elapsed, speed, THREE.MathUtils.clamp(lamp / 2.3, 0, 1));
    },
  };
}

function createLagoon(scene, bulbMat, renderer) {
  const group = new THREE.Group();
  group.position.set(24, 0, -83);
  scene.add(group);

  const water = new THREE.Mesh(
    new THREE.CircleGeometry(27.5, 64),
    new THREE.MeshStandardMaterial({
      color: 0x0a3141, roughness: 0.16, metalness: 0.55, transparent: true, opacity: 0.94,
      emissive: 0x072a33, emissiveIntensity: 0.65,
    }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.055;
  group.add(water);
  addTorus(group, 27.6, 0.45, 5, 72, 0, 0.02, 0, 0x6d6356, { rx: Math.PI / 2, roughness: 0.9 });
  addTorus(group, 28.2, 0.16, 4, 72, 0, 0.06, 0, 0x9a875f, { rx: Math.PI / 2, roughness: 0.75 });

  // little animated ripples
  const ripples = [];
  for (let i = 0; i < 7; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: 0x89e8dd, transparent: true, opacity: 0.15, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const ring = new THREE.Mesh(new THREE.RingGeometry(1, 1.08, 48), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.12;
    const a = Math.random() * Math.PI * 2;
    ring.position.x = Math.cos(a) * (8 + Math.random() * 15);
    ring.position.z = Math.sin(a) * (8 + Math.random() * 15);
    ring.userData.phase = Math.random();
    group.add(ring);
    ripples.push(ring);
  }
  // shoreline rocks
  const rockMat = standard(0x4f4a42, { roughness: 0.95, flat: true });
  for (let i = 0; i < 22; i++) {
    const a = (i / 22) * Math.PI * 2;
    const r = 29.5 + Math.random() * 1.8;
    const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9 + Math.random() * 1.2, 0), rockMat);
    rock.position.set(Math.cos(a) * r, 0.45, Math.sin(a) * r);
    rock.scale.set(1, 0.65 + Math.random() * 0.6, 0.8 + Math.random() * 0.6);
    rock.rotation.set(Math.random(), Math.random() * 3, Math.random());
    group.add(rock);
  }

  // boardwalk on the south shore
  const boardwalk = new THREE.Group();
  for (let i = 0; i < 13; i++) {
    const a = Math.PI * 0.18 + (i / 12) * Math.PI * 0.64;
    const r = 30.4;
    const plank = addBox(boardwalk, 4.3, 0.22, 2.5, Math.cos(a) * r, 0.2, Math.sin(a) * r, i % 2 ? 0x8b6849 : 0x7c5c40, { ry: -a + Math.PI / 2, roughness: 0.88 });
    plank.material = standard(i % 2 ? 0x8b6849 : 0x7c5c40, { roughness: 0.88 });
  }
  for (let i = 0; i < 8; i++) {
    const a = Math.PI * 0.18 + (i / 7) * Math.PI * 0.64;
    const r = 31.8;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    addCylinder(boardwalk, 0.08, 0.1, 1.2, 5, x, 0.75, z, 0x9a7b54);
    addBox(boardwalk, 0.1, 0.1, 1.25, x, 1.25, z, 0xb99b66, { ry: -a });
    if (i % 2 === 0) {
      addCylinder(boardwalk, 0.1, 0.12, 2.8, 5, x, 1.4, z, 0x4c3b34);
      addSphere(boardwalk, 0.18, 8, x, 2.85, z, 0xffe2ab, { material: bulbMat });
    }
  }
  group.add(boardwalk);

  // The actual Black Sail Bay galleon, reused from the standalone project.
  const shipPivot = new THREE.Group();
  group.add(shipPivot);
  const ship = new THREE.Group();
  shipPivot.add(ship);
  const blackSail = createParkShip(renderer);
  const vessel = blackSail.vessel;
  vessel.removeFromParent();
  vessel.rotation.y = -Math.PI / 2;
  vessel.scale.setScalar(0.84);
  ship.add(vessel);
  vessel.updateMatrixWorld(true);
  const vesselBounds = new THREE.Box3().setFromObject(vessel);
  vessel.position.y = -vesselBounds.min.y - 0.42;
  mergeBlackSailShip(vessel);
  const shipLamp = new THREE.PointLight(0xffc37a, 420, 34, 2);
  shipLamp.position.set(0, 8.5, 0);
  ship.add(shipLamp);
  const shipGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0xffc47a, transparent: true, opacity: 0.34,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  }));
  shipGlow.scale.setScalar(14);
  shipGlow.position.set(0, 7.0, 0);
  ship.add(shipGlow);
  // fountain jets
  const jets = [];
  const jetAlpha = makeJetAlpha();
  const jetMat = new THREE.MeshBasicMaterial({
    color: 0x8edbd4, transparent: true, opacity: 0.16, alphaMap: jetAlpha,
    blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
  });
  const jetGlowMat = new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0x69d9ca, transparent: true, opacity: 0.28,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.2;
    const r = 4.8 + Math.random() * 2.8;
    const geo = new THREE.CylinderGeometry(0.04, 0.32, 8, 6, 1, true);
    const jet = new THREE.Mesh(geo, jetMat.clone());
    jet.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    jet.userData.phase = Math.random() * Math.PI * 2;
    jet.userData.baseHeight = 3.5 + Math.random() * 3;
    const glow = new THREE.Sprite(jetGlowMat);
    glow.position.set(Math.cos(a) * r, 0.4, Math.sin(a) * r);
    glow.scale.setScalar(2.8);
    group.add(glow);
    group.add(jet);
    jets.push(jet);
  }

  // lighthouse
  const lighthouse = new THREE.Group();
  lighthouse.position.set(-26, 0, 25);
  group.add(lighthouse);
  addCylinder(lighthouse, 2.5, 3.4, 1.0, 10, 0, 0.5, 0, 0x5c554f);
  addCylinder(lighthouse, 1.3, 2.0, 15, 12, 0, 8.0, 0, 0xe9ddc9, { roughness: 0.8 });
  for (let i = 0; i < 3; i++) {
    addCylinder(lighthouse, 1.48 - i * 0.13, 1.7 - i * 0.13, 2.4, 12, 0, 3.6 + i * 4.0, 0, i % 2 ? 0xb8524d : 0xf2e6d3, { roughness: 0.8 });
  }
  addCylinder(lighthouse, 1.95, 1.95, 0.3, 12, 0, 15.8, 0, 0x2d2b35);
  addCylinder(lighthouse, 0.9, 0.9, 0.2, 8, 0, 17.2, 0, 0x2d2b35);
  addCylinder(lighthouse, 1.4, 1.4, 2.2, 8, 0, 16.5, 0, 0x4c4650, { transparent: true, opacity: 0.55 });
  const lamp = addSphere(lighthouse, 0.62, 12, 0, 16.6, 0, 0xffe3a1, { material: bulbMat });
  addCone(lighthouse, 1.65, 1.6, 8, 0, 18.4, 0, 0x4b3145);
  addSphere(lighthouse, 0.12, 6, 0, 19.35, 0, 0xffd47d, { material: bulbMat });
  const glowMat = new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffd38a, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const glow = new THREE.Sprite(glowMat);
  glow.scale.setScalar(9);
  glow.position.set(0, 16.6, 0);
  lighthouse.add(glow);

  return {
    group, ship, shipPivot, jets, ripples, lighthouse, water, blackSail,
    collider: { type: 'circle', x: 24, z: -83, r: 28.2 },
    boost: 0,
    update(dt, elapsed, speed = 1) {
      shipPivot.rotation.y = Math.sin(elapsed * 0.085) * 0.18;
      ship.position.y = Math.sin(elapsed * 0.55) * 0.13;
      ship.rotation.z = Math.sin(elapsed * 0.46) * 0.018;
      ship.rotation.x = Math.sin(elapsed * 0.37 + 1) * 0.012;
      ripples.forEach((ring, i) => {
        let p = (elapsed * 0.12 + ring.userData.phase) % 1;
        ring.scale.setScalar(0.4 + p * 8.2);
        ring.material.opacity = (1 - p) * 0.17;
        ring.position.y = 0.13;
      });
      this.boost = Math.max(0, this.boost - dt);
      const show = this.boost > 0;
      jets.forEach((jet, i) => {
        const h = Math.min(show ? 8.5 : 6.5, (1.1 + Math.abs(Math.sin(elapsed * (0.9 + i * 0.03) + jet.userData.phase)) * 0.7) * jet.userData.baseHeight * (show ? 1.25 : 1));
        jet.scale.y = h / 8;
        jet.position.y = h / 2;
        jet.material.opacity = (show ? 0.085 : 0.045) + Math.sin(elapsed * 2 + i) * 0.014;
        jet.rotation.y = elapsed * 0.12 + i;
      });
      blackSail.update(elapsed, dt, 0.25 + (show ? 0.5 : 0));
      glow.material.opacity = 0.4 + Math.sin(elapsed * 1.4) * 0.13;
    },
  };
}

export function createRides(scene, shared) {
  const bulbMat = shared.bulbMat;
  const carousel = createStarlightCarousel(scene, bulbMat);
  const ferris = createFerris(scene, bulbMat);
  const coaster = createCoaster(scene, bulbMat);
  const teacups = createTeacups(scene, bulbMat, shared.renderer);
  const lagoon = createLagoon(scene, bulbMat, shared.renderer);
  const skyway = createSkyway(scene, bulbMat);
  const balloon = createCloudCrown(scene, bulbMat);
  const rainbow = createRainbowChute(scene, bulbMat);
  const swing = createSwingRide(scene, bulbMat);
  const planes = createFlyingPlanes(scene, bulbMat);
  const bumper = createBumperCars(scene, bulbMat);
  const rapids = createRapids(scene, bulbMat);
  const boats = createBumperBoats(scene, bulbMat);
  const train = createParkTrain(scene, bulbMat);

  return {
    carousel, ferris, coaster, teacups, lagoon, skyway, balloon, rainbow, swing, planes, bumper, rapids, boats, train,
    colliders: [
      carousel.collider, ferris.collider, coaster.collider,
      teacups.collider, lagoon.collider, ...skyway.colliders,
      ...balloon.colliders, ...rainbow.colliders,
      ...swing.colliders, ...planes.colliders, ...bumper.colliders, ...rapids.colliders,
      ...boats.colliders,
    ],
    update(dt, elapsed, state = {}) {
      const rideId = state.rideId;
      carousel.update(dt, elapsed, rideId === 'carousel' ? 1.65 : 1, state.lamp ?? 2.3);
      ferris.update(dt, elapsed, rideId === 'ferris' ? 0.2 : 1);
      coaster.update(dt, elapsed, 1);
      teacups.update(dt, elapsed, rideId === 'teacups' ? 2.1 : 1, state.lamp ?? 1);
      lagoon.update(dt, elapsed, 1);
      skyway.update(dt, elapsed);
      balloon.update(dt, elapsed);
      rainbow.update(dt, elapsed);
      swing.update(dt, elapsed);
      planes.update(dt, elapsed);
      bumper.update(dt, elapsed);
      rapids.update(dt, elapsed);
      boats.update(dt, elapsed);
      train.update(dt, elapsed);
    },
  };
}
