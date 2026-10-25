import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus,
  makeSign,
} from './builders.js';

const GOLD = 0xd8b16a;
const GOLD_LIGHT = 0xffdda0;
const CREAM = 0xf0dfc0;
const TEAL = 0x15545a;
const TEAL_DARK = 0x0c343d;
const WINE = 0x8b2733;
const BLUE = 0x244b83;
const PINK = 0xe6a6b7;

export const FACILITY_SPOTS = [
  { id: 'cotton', kind: 'cotton', x: -20.5, z: 57, face: 1, label: '棉花糖贩卖亭', en: 'COTTON CANDY', icon: '🍬' },
  { id: 'soda', kind: 'soda', x: 20.5, z: 57, face: -1, label: '汽水小食贩卖亭', en: 'SODA & SNACK', icon: '🥤' },
  { id: 'balloon', kind: 'balloon', x: -20.5, z: 74, face: 1, label: '小丑气球摊位', en: 'BALLOON', icon: '🎈' },
  { id: 'toilet', kind: 'toilet', x: 20.5, z: 74, face: -1, label: '厕所', en: 'TOILET', icon: '🚻' },
  { id: 'hotdog', kind: 'hotdog', x: -20.5, z: 91, face: 1, label: '热狗摊', en: 'HOT DOG', icon: '🌭' },
  { id: 'burger', kind: 'burger', x: 20.5, z: 91, face: -1, label: '汉堡摊', en: 'HAMBURGER', icon: '🍔' },
  { id: 'restaurant', kind: 'restaurant', x: 82, z: -28, face: -1, label: '公园餐厅', en: 'PARK RESTAURANT', icon: '🍽️' },
];

function stripedDome(parent, radius, height, y, segments = 12, x = 0, z = 0) {
  for (let i = 0; i < segments; i++) {
    const color = i % 2 ? CREAM : WINE;
    addCone(parent, radius, height, 1, x, y, z, color, {
      thetaStart: (i / segments) * Math.PI * 2,
      thetaLength: Math.PI / segments,
      openEnded: true, side: THREE.DoubleSide, flat: true,
      roughness: 0.66, emissive: color, emissiveIntensity: 0.15,
    });
  }
  addTorus(parent, radius * 0.98, 0.09, 4, 32, x, y - height * 0.06, z, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
}

function bulb(parent, x, y, z, bulbMat, r = 0.13) {
  addSphere(parent, r, 7, x, y, z, 0xffd48b, { material: bulbMat });
}

function fleurPanel(parent, x, y, z, w = 2.1, h = 1.6, ry = 0) {
  addBox(parent, w, h, 0.12, x, y, z, TEAL, { ry, roughness: 0.7 });
  addBox(parent, w - 0.22, 0.07, 0.15, x, y + h / 2 - 0.08, z, GOLD, { ry, metalness: 0.4 });
  addBox(parent, w - 0.22, 0.07, 0.15, x, y - h / 2 + 0.08, z, GOLD, { ry, metalness: 0.4 });
  addStar(parent, 0.25, 0.06, x, y, z + 0.1, GOLD_LIGHT, { ry, emissiveIntensity: 0.8 });
}

function ropeBarrier(parent) {
  for (const [x, z] of [[-4.4, 4.8], [-2.5, 5.35], [2.5, 5.35], [4.4, 4.8]]) {
    addCylinder(parent, 0.1, 0.14, 1.2, 6, x, 0.82, z, GOLD, { metalness: 0.4 });
    addSphere(parent, 0.13, 7, x, 1.48, z, GOLD_LIGHT, { metalness: 0.4 });
  }
  addBox(parent, 1.9, 0.075, 0.06, -3.45, 1.1, 5.1, WINE, { rz: -0.08, roughness: 0.7 });
  addBox(parent, 1.9, 0.075, 0.06, 0, 1.12, 5.38, WINE, { roughness: 0.7 });
  addBox(parent, 1.9, 0.075, 0.06, 3.45, 1.1, 5.1, WINE, { rz: 0.08, roughness: 0.7 });
}

function kioskShell(group, def, bulbMat) {
  addCylinder(group, 4.9, 5.1, 0.32, 16, 0, 0.16, 0, 0xb38b5d, { roughness: 0.88 });
  addTorus(group, 4.75, 0.12, 4, 32, 0, 0.38, 0, CREAM, { rx: Math.PI / 2, roughness: 0.82 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = Math.cos(a) * 4.0;
    const z = Math.sin(a) * 4.0;
    if (Math.abs(a - Math.PI / 2) < 0.35) continue;
    addBox(group, 2.7, 1.25, 0.22, x, 1.12, z, i % 3 === 0 ? WINE : TEAL, { ry: -a + Math.PI / 2, roughness: 0.68 });
    addBox(group, 2.5, 0.08, 0.24, x, 1.82, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
    addBox(group, 2.5, 0.08, 0.24, x, 0.5, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = Math.cos(a) * 3.65;
    const z = Math.sin(a) * 3.65;
    addCylinder(group, 0.15, 0.2, 4.5, 8, x, 2.5, z, TEAL_DARK, { roughness: 0.7 });
    addCylinder(group, 0.22, 0.22, 0.18, 8, x, 4.78, z, GOLD, { metalness: 0.42 });
    bulb(group, x, 4.98, z, bulbMat);
  }
  addCylinder(group, 4.6, 5.0, 0.3, 16, 0, 4.75, 0, GOLD, { roughness: 0.5 });
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    bulb(group, Math.cos(a) * 4.65, 4.5, Math.sin(a) * 4.65, bulbMat, 0.11);
  }
  stripedDome(group, 5.3, 2.7, 6.55, 14);
  addCylinder(group, 0.36, 0.42, 0.6, 8, 0, 8.55, 0, GOLD, { metalness: 0.45 });
  addCone(group, 0.5, 0.9, 4, 0.24, 9.3, 0, WINE, { rz: Math.PI / 2.5 });
  addSphere(group, 0.16, 7, 0, 9.15, 0, GOLD_LIGHT, { metalness: 0.4 });
  // front counter
  addBox(group, 5.5, 1.25, 1.15, 0, 1.12, 4.55, TEAL, { roughness: 0.65 });
  addBox(group, 5.8, 0.16, 1.25, 0, 1.82, 4.55, GOLD, { metalness: 0.4 });
  addBox(group, 5.5, 0.5, 0.8, 0, 0.55, 4.6, TEAL_DARK, { roughness: 0.8 });
  fleurPanel(group, 0, 1.12, 5.14, 2.0, 1.05, 0);
  // sign
  const sign = makeSign({
    text: def.kind === 'cotton' ? 'COTTON CANDY'
      : def.kind === 'soda' ? 'SODA & SNACK'
        : def.kind === 'balloon' ? 'BALLOON'
          : def.kind === 'toilet' ? 'TOILET'
            : def.kind === 'hotdog' ? 'HOT DOG' : 'HAMBURGER',
    sub: 'ASTRALIA PARK · REFRESHMENTS', worldWidth: 4.8, worldHeight: 0.86,
    bg: 'rgba(72,18,31,.92)', border: 'rgba(231,193,111,.75)', color: '#ffe9b0', subColor: '#e7c786',
    width: 900, height: 180, font: '700 68px Georgia, "Microsoft YaHei", serif', subFont: '500 19px "Avenir Next", sans-serif',
  });
  sign.position.set(0, 6.25, 4.82);
  group.add(sign);
  ropeBarrier(group);
  const warm = new THREE.PointLight(0xffcf9b, 48, 10, 2);
  warm.position.set(0, 3.4, 3.5);
  group.add(warm);
}

function cottonCandy(group, bulbMat) {
  addCylinder(group, 0.45, 0.55, 0.65, 10, 0, 2.15, 1.8, 0x8d8a80, { roughness: 0.45, metalness: 0.35 });
  addCylinder(group, 0.72, 0.7, 0.26, 12, 0, 2.55, 1.8, 0xc9c5ba, { roughness: 0.35, metalness: 0.3 });
  addCylinder(group, 0.06, 0.06, 1.0, 5, 0, 2.95, 1.8, GOLD, { metalness: 0.4 });
  for (let i = 0; i < 6; i++) {
    const x = -3.0 + i * 1.2;
    addCylinder(group, 0.035, 0.04, 1.1, 4, x, 3.35, 4.1, CREAM, {});
    const c = [PINK, 0x9fd8e2, 0xf1d59d, 0xcbb7e6][i % 4];
    addSphere(group, 0.38, 8, x, 3.9, 4.1, c, { sy: 1.25, roughness: 0.9 });
    addSphere(group, 0.28, 8, x + 0.05, 3.65, 4.1, 0xfff3e5, { sy: 1.1, roughness: 0.9 });
  }
  for (let i = 0; i < 4; i++) {
    addBox(group, 0.4, 0.5, 0.18, -2.3 + i * 0.55, 2.15, 3.4, i % 2 ? PINK : 0xb8dfe7, { roughness: 0.8 });
  }
  bulbm(group, bulbMat);
}
function bulbm(group, bulbMat) {
  bulb(group, -4.3, 3.5, 4.1, bulbMat);
  bulb(group, 4.3, 3.5, 4.1, bulbMat);
}

function sodaSnack(group, bulbMat) {
  addBox(group, 4.7, 1.1, 0.8, 0, 2.15, 2.0, 0x39433e, { roughness: 0.55 });
  for (let i = 0; i < 8; i++) {
    addCylinder(group, 0.1, 0.12, 0.55, 6, -2.0 + i * 0.56, 3.0, 2.0, [0xd85b57, 0xe3b85b, 0x5b9ec3, 0x6aac76][i % 4], { roughness: 0.45 });
  }
  addBox(group, 1.3, 1.4, 0.9, 2.0, 2.35, 2.2, 0x9f3e3c, { roughness: 0.55 });
  addCylinder(group, 0.5, 0.5, 0.2, 12, 2.0, 2.9, 2.2, 0xffd77f, { roughness: 0.5 });
  for (let i = 0; i < 6; i++) addSphere(group, 0.16, 5, 1.5 + (i % 3) * 0.35, 3.15 + Math.floor(i / 3) * 0.25, 2.2, 0xffdf8f, { roughness: 0.8 });
  for (const x of [-2.2, 0, 2.2]) {
    addBox(group, 1.15, 1.1, 0.1, x, 4.0, 3.85, CREAM, { roughness: 0.8 });
    addBox(group, 0.95, 0.07, 0.12, x, 4.25, 3.9, WINE, { metalness: 0.2 });
    addCylinder(group, 0.08, 0.1, 0.65, 6, x - 0.3, 3.75, 3.8, 0xd85b57, {});
    addBox(group, 0.2, 0.4, 0.1, x + 0.2, 3.7, 3.82, 0xe7b95d, {});
  }
}

function balloonDog(group, x, y, z, color) {
  addSphere(group, 0.24, 8, x, y, z, color, { sx: 0.8, sy: 1.4, sz: 0.7, roughness: 0.5 });
  addSphere(group, 0.17, 8, x + 0.28, y + 0.42, z, color, { sx: 1.2, sy: 0.7, sz: 0.8, roughness: 0.5 });
  addCylinder(group, 0.07, 0.08, 0.65, 5, x - 0.16, y - 0.42, z - 0.12, color, { rz: 0.35, roughness: 0.5 });
  addCylinder(group, 0.07, 0.08, 0.65, 5, x + 0.16, y - 0.42, z + 0.12, color, { rz: -0.35, roughness: 0.5 });
  addCylinder(group, 0.05, 0.06, 0.55, 5, x - 0.42, y + 0.32, z, color, { rz: 0.9, roughness: 0.5 });
}
function balloonFlower(group, x, y, z, color) {
  addCylinder(group, 0.035, 0.04, 0.9, 4, x, y - 0.1, z, 0x4f8451, {});
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    addSphere(group, 0.18, 7, x + Math.cos(a) * 0.2, y + 0.45 + Math.sin(a) * 0.14, z, color, { sx: 1.2, sy: 0.7, roughness: 0.45 });
  }
  addSphere(group, 0.12, 6, x, y + 0.45, z, 0xffe1a0, { roughness: 0.4 });
}
function balloonSword(group, x, y, z, color) {
  addCylinder(group, 0.05, 0.06, 1.8, 5, x, y + 0.7, z, color, { roughness: 0.45 });
  addBox(group, 0.5, 0.08, 0.08, x, y - 0.15, z, GOLD, {});
  addBox(group, 0.12, 0.08, 0.8, x, y - 0.15, z, GOLD, {});
}
function balloonStar(group, x, y, z, color) {
  addStar(group, 0.38, 0.1, x, y + 0.4, z, color, { emissive: color, emissiveIntensity: 0.1 });
  addCylinder(group, 0.035, 0.04, 0.8, 4, x, y - 0.1, z, 0x4f8451, {});
}
function balloonCrown(group, x, y, z, color) {
  addCylinder(group, 0.38, 0.42, 0.22, 8, x, y - 0.1, z, GOLD, { roughness: 0.5 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    addCone(group, 0.13, 0.45, 5, x + Math.cos(a) * 0.3, y + 0.25, z + Math.sin(a) * 0.3, color, { roughness: 0.5 });
  }
}
function balloonRabbit(group, x, y, z, color) {
  addSphere(group, 0.24, 8, x, y + 0.1, z, color, { sy: 1.2, roughness: 0.5 });
  addSphere(group, 0.16, 8, x, y + 0.5, z, color, { sy: 1.15, roughness: 0.5 });
  addCylinder(group, 0.06, 0.08, 0.5, 5, x - 0.12, y + 0.85, z, color, { rx: -0.2, roughness: 0.5 });
  addCylinder(group, 0.06, 0.08, 0.5, 5, x + 0.12, y + 0.85, z, color, { rx: 0.2, roughness: 0.5 });
}

function clown(group, bulbMat) {
  addSphere(group, 0.72, 12, 0, 6.9, 4.7, 0xf2d3b6, { sy: 1.05, roughness: 0.8 });
  addSphere(group, 0.2, 8, 0, 6.9, 5.42, 0xd7504c, { roughness: 0.6 });
  for (const x of [-0.25, 0.25]) {
    addSphere(group, 0.08, 7, x, 7.18, 5.32, 0x2b2522, { roughness: 0.7 });
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addSphere(group, 0.26, 7, Math.cos(a) * 0.6, 7.4 + Math.sin(a) * 0.18, 4.75, 0xc84b37, { roughness: 0.8 });
  }
  addCone(group, 0.42, 1.1, 6, 0, 7.95, 4.7, BLUE, { roughness: 0.65 });
  addSphere(group, 0.12, 7, 0, 8.55, 4.7, GOLD_LIGHT, { metalness: 0.4 });
}

function hotDogRoof(group) {
  addCylinder(group, 0.55, 0.6, 3.1, 12, 0, 7.15, -0.2, 0xd9a55a, { rz: Math.PI / 2, roughness: 0.75 });
  addCylinder(group, 0.52, 0.56, 3.0, 12, 0, 7.72, -0.2, 0xd9a55a, { rz: Math.PI / 2, roughness: 0.75 });
  addCylinder(group, 0.4, 0.44, 3.45, 12, 0, 7.48, -0.2, 0x9e3d35, { rz: Math.PI / 2, roughness: 0.6 });
  addBox(group, 0.12, 0.12, 2.0, 0.8, 7.9, -0.2, 0xe1b84f, { ry: 0.4, roughness: 0.6 });
  for (let i = 0; i < 6; i++) addSphere(group, 0.045, 5, -1.2 + i * 0.5, 8.05, -0.2, 0xf4d99b, {});
}

function burgerRoof(group) {
  addSphere(group, 1.55, 14, 0, 7.3, -0.1, 0xd9a65a, { sy: 0.38, roughness: 0.75 });
  addSphere(group, 1.55, 14, 0, 8.15, -0.1, 0xd9a65a, { sy: 0.45, roughness: 0.75 });
  addCylinder(group, 1.5, 1.5, 0.18, 16, 0, 7.5, -0.1, 0x4d7a45, { roughness: 0.8 });
  addCylinder(group, 1.45, 1.45, 0.22, 16, 0, 7.68, -0.1, 0x7a3a2c, { roughness: 0.8 });
  addBox(group, 1.8, 0.06, 1.2, 0, 7.84, -0.1, 0xe7bd52, { roughness: 0.6 });
  for (let i = 0; i < 7; i++) addSphere(group, 0.055, 5, -0.8 + i * 0.27, 8.55, -0.1 + Math.sin(i) * 0.45, 0xf5e8c8, {});
}

export function createFacilityKiosk(scene, bulbMat, def) {
  const group = new THREE.Group();
  group.position.set(def.x, 0, def.z);
  group.rotation.y = def.face > 0 ? Math.PI / 2 : -Math.PI / 2;
  scene.add(group);
  kioskShell(group, def, bulbMat);
  if (def.kind === 'cotton') cottonCandy(group, bulbMat);
  if (def.kind === 'soda') sodaSnack(group, bulbMat);
  if (def.kind === 'balloon') {
    clown(group, bulbMat);
    const colors = [0xd85657, 0x5e9ec8, 0x6aa76a, 0xe1b74f, 0xc77ab0];
    for (let i = 0; i < 5; i++) {
      const x = -3.4 + i * 1.65;
      const y = 2.6 + (i % 2) * 0.5;
      if (i === 0) balloonDog(group, x, y, 4.2, colors[i]);
      else if (i === 1) balloonSword(group, x, y, 4.2, colors[i]);
      else if (i === 2) balloonFlower(group, x, y, 4.2, colors[i]);
      else if (i === 3) balloonCrown(group, x, y, 4.2, colors[i]);
      else balloonRabbit(group, x, y, 4.2, colors[i]);
    }
    balloonStar(group, -4.0, 2.8, 4.2, 0xe1b74f);
  }
  if (def.kind === 'toilet') {
    addBox(group, 2.2, 3.3, 0.16, -1.6, 1.85, 4.95, 0x7b222b, { roughness: 0.6 });
    addBox(group, 2.2, 3.3, 0.16, 1.6, 1.85, 4.95, 0x254b7b, { roughness: 0.6 });
    for (const [x, c] of [[-1.6, 0xfff0d4], [1.6, 0xfff0d4]]) {
      addBox(group, 0.08, 2.0, 0.05, x, 1.8, 5.06, c, {});
    }
    addCylinder(group, 0.2, 0.24, 0.9, 6, -4.2, 1.0, 4.3, GOLD, { metalness: 0.4 });
    addCylinder(group, 0.2, 0.24, 0.9, 6, 4.2, 1.0, 4.3, GOLD, { metalness: 0.4 });
    for (let i = 0; i < 4; i++) {
      addSphere(group, 0.24, 6, -4.2 + (i % 2) * 0.5, 1.6 + (i > 1 ? 0.4 : 0), 4.3 + Math.floor(i / 2) * 0.5, i % 2 ? PINK : 0xe5c675, {});
      addSphere(group, 0.2, 6, 4.2 + (i % 2) * 0.4, 1.6 + (i > 1 ? 0.4 : 0), 4.3 + Math.floor(i / 2) * 0.5, i % 2 ? PINK : 0xe5c675, {});
    }
  }
  if (def.kind === 'hotdog') {
    hotDogRoof(group);
    addBox(group, 3.6, 1.2, 0.6, 0, 1.85, 4.1, 0x3a3430, { roughness: 0.6 });
    for (let i = 0; i < 6; i++) addCylinder(group, 0.16, 0.18, 0.5, 7, -1.5 + i * 0.6, 2.55, 4.1, 0xd9a85f, { rx: 0.3, roughness: 0.7 });
    for (let i = 0; i < 3; i++) addBox(group, 0.35, 0.6, 0.1, 2.5, 2.2, 4.4 + i * 0.01, [0xb9473e, 0xe4bf62, 0x6a9e68][i], {});
  }
  if (def.kind === 'burger') {
    burgerRoof(group);
    addBox(group, 3.8, 1.1, 0.65, 0, 1.85, 4.1, 0x3a3430, { roughness: 0.6 });
    for (let i = 0; i < 7; i++) {
      addCylinder(group, 0.18, 0.18, 0.12, 8, -1.8 + i * 0.6, 2.58, 4.1, 0xd6a757, { roughness: 0.7 });
      addSphere(group, 0.1, 5, -1.8 + i * 0.6, 2.7, 4.1, 0x6f3b2c, { sy: 0.4, roughness: 0.7 });
    }
    for (let i = 0; i < 4; i++) addBox(group, 0.28, 0.5, 0.1, 2.3, 2.2, 4.4 + i * 0.01, [0xb9473e, 0xe4bf62, 0x6a9e68, 0xd8a15e][i], {});
  }
  return {
    group,
    collider: { type: 'rect', x: def.x, z: def.z, hx: 5.4, hz: 5.4 },
  };
}

export function createParkRestaurant(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(82, 0, -28);
  group.rotation.y = -Math.PI / 2;
  scene.add(group);

  addBox(group, 15.0, 8.4, 10.2, 0, 4.2, 0, CREAM, { roughness: 0.82 });
  addBox(group, 15.4, 0.6, 10.6, 0, 8.6, 0, TEAL_DARK, { roughness: 0.7 });
  addBox(group, 15.1, 0.22, 10.3, 0, 4.7, 0, GOLD, { metalness: 0.38 });
  addBox(group, 15.6, 2.9, 10.8, 0, 10.1, 0, TEAL, { roughness: 0.7 });
  addBox(group, 15.9, 0.24, 11.0, 0, 11.55, 0, GOLD, { metalness: 0.4 });
  // centre and corner domes
  stripedDome(group, 4.3, 3.4, 13.8, 14);
  addCylinder(group, 0.4, 0.5, 0.9, 8, 0, 16.7, 0, GOLD, { metalness: 0.45 });
  addCone(group, 0.55, 1.1, 4, 0.3, 17.6, 0, WINE, { rz: Math.PI / 2.5 });
  for (const [x, z] of [[-5.6, -3.8], [5.6, -3.8], [-5.6, 3.8], [5.6, 3.8]]) {
    addCylinder(group, 1.65, 1.9, 2.0, 10, x, 12.2, z, TEAL, { roughness: 0.7 });
    stripedDome(group, 2.1, 2.0, 13.6, 10, x, z);
    addSphere(group, 0.26, 7, x, 15.7, z, GOLD, {});
  }
  // facade facing park (-x after rotation, local +z)
  const facadeZ = 5.06;
  addBox(group, 8.8, 3.2, 0.3, 0, 10.8, 5.06, TEAL_DARK, { roughness: 0.7 });
  for (const x of [-6.9, 6.9]) {
    addCylinder(group, 0.24, 0.3, 8.4, 8, x, 4.2, 5.2, GOLD, { metalness: 0.42 });
    addSphere(group, 0.2, 7, x, 8.5, 5.2, GOLD_LIGHT, { metalness: 0.4 });
  }
  // teal facade panels and gold pilasters
  for (const x of [-5.2, -1.8, 1.8, 5.2]) {
    addBox(group, 1.45, 5.1, 0.2, x, 3.75, 5.12, TEAL, { roughness: 0.7 });
    addBox(group, 1.18, 4.8, 0.16, x, 3.75, 5.19, TEAL_DARK, { roughness: 0.68 });
    addBox(group, 0.09, 5.0, 0.24, x - 0.72, 3.75, 5.2, GOLD, { metalness: 0.4 });
    addBox(group, 0.09, 5.0, 0.24, x + 0.72, 3.75, 5.2, GOLD, { metalness: 0.4 });
  }
  addBox(group, 2.6, 3.8, 0.26, 0, 1.9, 5.28, 0x63252d, { roughness: 0.55 });
  addBox(group, 2.1, 2.9, 0.08, 0, 1.65, 5.42, 0x2a1a18, { roughness: 0.8 });
  addBox(group, 0.1, 0.6, 0.08, 0.65, 1.4, 5.48, GOLD, { metalness: 0.5 });
  addSphere(group, 0.08, 6, 0.65, 1.4, 5.5, GOLD_LIGHT, { metalness: 0.4 });
  const sign = makeSign({
    text: 'PARK RESTAURANT', sub: 'ASTRALIA DINING ROOM', worldWidth: 9.4, worldHeight: 1.65,
    bg: 'rgba(15,54,58,.95)', border: 'rgba(228,189,105,.75)', color: '#ffedc4', subColor: '#d9b174',
    width: 1024, height: 220, font: '700 78px Georgia, "Microsoft YaHei", serif', subFont: '500 23px "Avenir Next", sans-serif',
  });
  sign.position.set(0, 7.35, 5.28);
  group.add(sign);
  // warm arched windows and doors
  for (let i = 0; i < 3; i++) {
    const x = -3.6 + i * 3.6;
    if (i !== 1) {
      addBox(group, 2.1, 3.3, 0.18, x, 3.5, 5.15, 0xffca7a, { roughness: 0.35, emissive: 0xffb55e, emissiveIntensity: 0.45 });
      addBox(group, 2.4, 0.18, 0.24, x, 5.2, 5.22, GOLD, { metalness: 0.4 });
      addTorus(group, 1.05, 0.08, 4, 18, x, 5.2, 5.22, GOLD, { arc: Math.PI, metalness: 0.4 });
    }
  }
  // striped awnings
  for (const x of [-5.0, 0, 5.0]) {
    for (let i = 0; i < 8; i++) {
      addBox(group, 1.0, 0.25, 1.6, x - 3.5 + i * 0.48, 6.55, 6.1, i % 2 ? WINE : CREAM, { rz: 0.12, roughness: 0.68 });
    }
    addBox(group, 4.6, 0.1, 0.2, x, 6.9, 6.8, GOLD, { metalness: 0.4 });
    addCylinder(group, 0.06, 0.06, 0.8, 4, x - 2.1, 6.45, 6.8, GOLD, {});
    addCylinder(group, 0.06, 0.06, 0.8, 4, x + 2.1, 6.45, 6.8, GOLD, {});
  }
  for (const x of [-3.6, 3.6]) {
    for (let i = 0; i < 8; i++) {
      addBox(group, 0.66, 0.18, 0.95, x - 2.2 + i * 0.63, 5.15, 5.8, i % 2 ? WINE : CREAM, { rz: 0.2, roughness: 0.7 });
    }
    addBox(group, 4.8, 0.08, 0.16, x, 5.38, 6.2, GOLD, { metalness: 0.4 });
    addSphere(group, 0.14, 6, x - 2.35, 5.0, 6.2, 0xffd48b, { material: bulbMat });
    addSphere(group, 0.14, 6, x + 2.35, 5.0, 6.2, 0xffd48b, { material: bulbMat });
  }
  for (const x of [-6.9, 6.9]) {
    addBox(group, 1.1, 0.6, 0.8, x, 0.45, 6.1, 0xb36b54, { roughness: 0.85 });
    for (let i = 0; i < 4; i++) addSphere(group, 0.22, 6, x - 0.35 + (i % 2) * 0.3, 0.82, 5.8 + Math.floor(i / 2) * 0.3, i % 2 ? PINK : 0xf3ddb0, {});
  }
  // planters and benches
  for (const x of [-5.8, 5.8]) {
    addBox(group, 2.0, 0.7, 1.0, x, 0.5, 6.4, CREAM, { roughness: 0.85 });
    for (let i = 0; i < 4; i++) addSphere(group, 0.3, 6, x - 0.7 + i * 0.45, 0.95, 6.4, i % 2 ? PINK : 0xf1e0b0, { sy: 0.8 });
  }
  // outdoor tables and umbrellas
  for (let i = 0; i < 3; i++) {
    const x = -4.8 + i * 4.8;
    const z = 8.0;
    addCylinder(group, 0.9, 0.9, 0.12, 16, x, 1.15, z, CREAM, { roughness: 0.8 });
    addCylinder(group, 0.08, 0.1, 1.1, 6, x, 0.55, z, GOLD, {});
    addCylinder(group, 0.05, 0.06, 2.4, 4, x, 2.1, z, GOLD, {});
    for (let k = 0; k < 12; k++) {
      addCone(group, 1.5, 0.65, 1, x, 3.15, z, k % 2 ? WINE : CREAM, {
        thetaStart: (k / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
        openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.7,
      });
    }
    addSphere(group, 0.12, 6, x, 3.55, z, GOLD_LIGHT, { metalness: 0.4 });
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2;
      addCylinder(group, 0.32, 0.32, 0.08, 10, x + Math.cos(a) * 1.8, 0.95, z + Math.sin(a) * 1.8, 0x7d5037, {});
      addCylinder(group, 0.06, 0.06, 0.8, 4, x + Math.cos(a) * 1.8, 0.5, z + Math.sin(a) * 1.8, GOLD, {});
    }
  }
  const warm = new THREE.PointLight(0xffc98d, 150, 22, 2);
  warm.position.set(0, 6.5, 4.0);
  group.add(warm);
  const terraceLight = new THREE.PointLight(0xffd49e, 70, 12, 2);
  terraceLight.position.set(0, 3.2, 8.0);
  group.add(terraceLight);
  return {
    group,
    collider: { type: 'rect', x: 82, z: -28, hx: 8.6, hz: 12.0 },
  };
}
