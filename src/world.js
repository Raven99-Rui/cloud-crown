import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  addBox, addCone, addCylinder, addPlane, addSphere, addStar, addTorus,
  basic, cylinderBetween, makeCanvasPlaneTexture, makeClockTexture, makeGlowTexture,
  makeRibbon, makeSign, seededRandom, standard, starShape,
} from './builders.js';
import { createRides } from './rides.js';
import { makeSparkles } from './effects.js';
import { PALETTES } from './data.js';
import { FACILITY_SPOTS, createFacilityKiosk, createParkRestaurant } from './facilities.js';

const UP = new THREE.Vector3(0, 1, 0);
export const ISLAND_RADIUS = 160;

function makeWindowTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const archR = w * 0.31;
    const top = h * 0.08;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(w * 0.16, h * 0.97);
    ctx.lineTo(w * 0.16, h * 0.35);
    ctx.arc(w * 0.5, h * 0.35, w * 0.34, Math.PI, 0);
    ctx.lineTo(w * 0.84, h * 0.97);
    ctx.closePath();
    ctx.clip();
    const g = ctx.createLinearGradient(0, h * 0.1, 0, h);
    g.addColorStop(0, '#ffe1a0');
    g.addColorStop(0.55, '#ffc26c');
    g.addColorStop(1, '#b86a3d');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(45,26,32,.55)';
    for (let i = 1; i < 4; i++) ctx.fillRect(0, (h * i) / 4, w, 2);
    ctx.fillRect(w * 0.49, 0, 2, h);
    ctx.restore();
    ctx.strokeStyle = 'rgba(245,206,128,.85)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.16, h * 0.97);
    ctx.lineTo(w * 0.16, h * 0.35);
    ctx.arc(w * 0.5, h * 0.35, w * 0.34, Math.PI, 0);
    ctx.lineTo(w * 0.84, h * 0.97);
    ctx.stroke();
  }, 128, 256);
}

function makeRoseWindowTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const c = w / 2;
    const g = ctx.createRadialGradient(c, c, 0, c, c, c);
    g.addColorStop(0, '#ffe7af');
    g.addColorStop(0.2, '#efb46b');
    g.addColorStop(0.55, '#9b4f58');
    g.addColorStop(1, '#3d2444');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(c, c, c * 0.94, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#f2cf8b'; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(c, c, c * 0.91, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,224,160,.9)'; ctx.lineWidth = 3;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(c, c); ctx.lineTo(c + Math.cos(a) * c * 0.9, c + Math.sin(a) * c * 0.9); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,235,180,.85)';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + Math.PI / 12;
      ctx.beginPath(); ctx.arc(c + Math.cos(a) * c * 0.63, c + Math.sin(a) * c * 0.63, 8, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#ffe4a2'; ctx.beginPath(); ctx.arc(c, c, c * 0.18, 0, Math.PI * 2); ctx.fill();
  }, 256, 256);
}

function makeGrassTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#1b3123';
    ctx.fillRect(0, 0, w, h);
    const rand = seededRandom(73);
    for (let i = 0; i < 160; i++) {
      const x = rand() * w, y = rand() * h, r = 12 + rand() * 90;
      const colors = ['#1e3828', '#173021', '#223d2b', '#1a3524', '#243f2e'];
      ctx.fillStyle = colors[Math.floor(rand() * colors.length)];
      ctx.globalAlpha = 0.18 + rand() * 0.2;
      ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.55, rand() * 6, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 2600; i++) {
      const x = rand() * w, y = rand() * h;
      ctx.strokeStyle = rand() > 0.5 ? 'rgba(116,145,100,.13)' : 'rgba(12,24,16,.2)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (rand() - 0.5) * 3, y - 3 - rand() * 4); ctx.stroke();
    }
    const g = ctx.createRadialGradient(w * 0.5, h * 0.45, 20, w * 0.5, h * 0.5, w * 0.54);
    g.addColorStop(0, 'rgba(63,84,61,.08)');
    g.addColorStop(1, 'rgba(3,9,10,.4)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, 1024, 1024);
}

function makePathTexture() {
  const tex = makeCanvasPlaneTexture((ctx, w, h) => {
    const rand = seededRandom(12);
    ctx.fillStyle = '#5d554b';
    ctx.fillRect(0, 0, w, h);
    const cell = 64;
    const tones = ['#8f8273', '#978a78', '#877a6c', '#9c8f7d', '#8a7d6f', '#938675'];
    for (let row = 0; row < h / cell; row++) {
      const offset = row % 2 ? -cell / 2 : 0;
      for (let col = -1; col <= w / cell; col++) {
        const x = col * cell + offset;
        const y = row * cell;
        const gap = 2.5 + rand() * 1.6;
        ctx.fillStyle = tones[Math.floor(rand() * tones.length)];
        ctx.fillRect(x + gap, y + gap, cell - gap * 2, cell - gap * 2);
        ctx.fillStyle = `rgba(60,51,43,${0.04 + rand() * 0.08})`;
        ctx.fillRect(x + gap, y + cell * 0.55, cell - gap * 2, cell * 0.22);
        ctx.strokeStyle = 'rgba(255,244,222,.055)';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(x + gap + 1, y + gap + 1, cell - gap * 2 - 2, cell - gap * 2 - 2);
      }
    }
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(${45 + rand() * 50},${40 + rand() * 42},${34 + rand() * 35},${0.04 + rand() * 0.1})`;
      ctx.beginPath();
      ctx.arc(rand() * w, rand() * h, 0.5 + rand() * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < 24; i++) {
      ctx.strokeStyle = 'rgba(67,57,46,.18)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      let x = rand() * w;
      let y = rand() * h;
      ctx.moveTo(x, y);
      for (let s = 0; s < 3; s++) {
        x += (rand() - 0.5) * 24;
        y += (rand() - 0.5) * 24;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }, 512, 512);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function windowMesh(parent, mat, w, h, x, y, z, ry = 0) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}

function createCastle(scene, bulbMat, warmWindowMat) {
  const group = new THREE.Group();
  group.position.set(0, 0, 0);
  scene.add(group);
  const stone = 0xe3d4c5;
  const stoneDark = 0xc8b39f;
  const roof = 0x383462;
  const roofLight = 0x4e437f;
  const gold = 0xd6ad68;

  addCylinder(group, 24.5, 26.5, 2.0, 40, 0, 1.0, 0, 0x5a4754, { roughness: 0.9 });
  addCylinder(group, 23.3, 23.3, 0.35, 40, 0, 2.1, 0, 0xb99a7d, { roughness: 0.65 });
  // grand steps
  for (let i = 0; i < 4; i++) {
    addBox(group, 18 - i * 1.1, 0.55, 2.0 + i * 1.15, 0, 1.15 - i * 0.28, 24.6 + i * 0.95, i % 2 ? 0xcbb89f : 0xd8c6ae);
  }
  // main block
  addBox(group, 25, 18, 18, 0, 11, -1, stone, { roughness: 0.82 });
  addBox(group, 25.4, 1.1, 18.4, 0, 20.0, -1, stoneDark);
  addBox(group, 26.2, 0.28, 19.0, 0, 20.65, -1, gold, { metalness: 0.45, roughness: 0.38 });
  // side wings
  for (const x of [-16.5, 16.5]) {
    addBox(group, 9, 12, 13, x, 7, 1, stoneDark, { roughness: 0.82 });
    addBox(group, 9.6, 0.45, 13.6, x, 13.1, 1, gold, { metalness: 0.4 });
    addCone(group, 7.3, 5.5, 4, x, 15.9, 1, roof, { ry: Math.PI / 4, roughness: 0.55, metalness: 0.18 });
    // windows on wings
    for (const z of [-1.8, 2.7]) windowMesh(group, warmWindowMat, 1.35, 2.6, x + (x < 0 ? 4.56 : -4.56), 7.8, z + 1, x < 0 ? Math.PI / 2 : -Math.PI / 2);
  }
  // crenellations on main block
  for (let x = -11; x <= 11; x += 2.2) {
    for (const z of [-9.6, 7.6]) {
      addBox(group, 1.2, 1.6, 1.0, x, 21.0, z, stone, { roughness: 0.82 });
    }
  }
  for (const x of [-12.6, 12.6]) {
    for (let z = -8; z <= 7; z += 2.2) {
      addBox(group, 1.0, 1.5, 1.2, x, 21.0, z, stone, { roughness: 0.82 });
    }
  }
  // facade details
  addBox(group, 25.8, 0.32, 0.5, 0, 11.3, 8.1, gold, { metalness: 0.4, roughness: 0.4 });
  addBox(group, 25.8, 0.24, 0.35, 0, 6.8, 8.1, 0xb89b72);
  // front windows, lower + upper
  for (const x of [-9.2, -6.3, 6.3, 9.2]) {
    windowMesh(group, warmWindowMat, 1.45, 3.1, x, 7.3, 8.15);
    windowMesh(group, warmWindowMat, 1.45, 3.3, x, 14.7, 8.15);
  }
  for (const x of [-10, 10]) {
    windowMesh(group, warmWindowMat, 1.1, 2.5, x, 14.7, 8.15);
  }
  // side windows
  for (const x of [-12.52, 12.52]) {
    for (const z of [-4, 1.4, 5.2]) {
      windowMesh(group, warmWindowMat, 1.25, 2.6, x, 8.1, z, x < 0 ? -Math.PI / 2 : Math.PI / 2);
    }
  }

  // entrance arch
  addBox(group, 6.9, 10.5, 1.3, 0, 7.2, 8.4, 0x362b38);
  addBox(group, 7.3, 0.6, 1.5, 0, 12.6, 8.4, gold);
  for (const x of [-3.35, 3.35]) {
    addCylinder(group, 0.65, 0.8, 10.2, 10, x, 6.4, 8.95, 0xdfcab6, { roughness: 0.6 });
    addCylinder(group, 0.9, 0.95, 0.5, 10, x, 11.7, 8.95, gold, { metalness: 0.35 });
  }
  addTorus(group, 3.45, 0.38, 6, 20, 0, 11.4, 8.95, 0xdfcab6, { arc: Math.PI, metalness: 0.1 });
  addStar(group, 1.25, 0.35, 0, 15.0, 9.2, 0xffd372, { emissiveIntensity: 1.8 });
  // door light
  addPlane(group, 5.4, 8.0, 0, 6.4, 9.02, 0xffd28a, {
    material: new THREE.MeshBasicMaterial({ color: 0x8d5736, transparent: true, opacity: 0.36, toneMapped: false }),
  });
  addBox(group, 7.5, 0.5, 2.2, 0, 2.25, 9.6, 0xd9c6ac);

  // central tower
  addCylinder(group, 7.1, 8.2, 20, 14, 0, 30.4, 0, stone, { roughness: 0.76 });
  addTorus(group, 7.6, 0.28, 5, 24, 0, 23.2, 0, gold, { rx: Math.PI / 2, metalness: 0.45 });
  addTorus(group, 7.35, 0.23, 5, 24, 0, 34.9, 0, gold, { rx: Math.PI / 2, metalness: 0.45 });
  addCylinder(group, 8.0, 8.0, 1.8, 14, 0, 36.9, 0, stoneDark);
  // balcony
  addCylinder(group, 8.4, 8.4, 0.32, 24, 0, 37.8, 0, 0xc8a878);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    addCylinder(group, 0.11, 0.13, 1.2, 5, Math.cos(a) * 8.1, 38.6, Math.sin(a) * 8.1, 0xd4ba8d);
  }
  addTorus(group, 8.1, 0.1, 4, 32, 0, 39.2, 0, 0xd4ba8d, { rx: Math.PI / 2 });
  // rose window
  const roseMat = new THREE.MeshBasicMaterial({
    map: makeRoseWindowTexture(), transparent: true, side: THREE.DoubleSide, toneMapped: false,
  });
  const rose = new THREE.Mesh(new THREE.CircleGeometry(3.0, 32), roseMat);
  rose.position.set(0, 30.1, 7.92);
  group.add(rose);
  addTorus(group, 3.1, 0.16, 5, 32, 0, 30.1, 8.0, gold);
  // tower windows
  for (let side = 0; side < 4; side++) {
    const a = side * Math.PI / 2;
    const x = Math.sin(a) * 7.48;
    const z = Math.cos(a) * 7.48;
    windowMesh(group, warmWindowMat, 1.15, 2.5, x, 25.4, z, a);
  }
  // roof
  addCylinder(group, 6.6, 10.4, 1.2, 14, 0, 40.5, 0, roof);
  addCone(group, 10.4, 18.2, 14, 0, 50.1, 0, roof, { roughness: 0.5, metalness: 0.18 });
  addCylinder(group, 0.2, 0.3, 4.6, 6, 0, 61.4, 0, gold, { metalness: 0.6 });
  addSphere(group, 0.7, 10, 0, 63.7, 0, 0xffd474, { emissive: 0xffb84e, emissiveIntensity: 2.1 });
  const castleStar = addStar(group, 2.6, 0.6, 0, 66.0, 0, 0xffd573, { emissiveIntensity: 1.9, scale: 1.15 });
  const starGlowMat = new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0xffcf7d, transparent: true, opacity: 0.42,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  });
  const starGlow = new THREE.Sprite(starGlowMat);
  starGlow.scale.setScalar(16);
  starGlow.position.set(0, 66, 0);
  group.add(starGlow);
  // roof accents
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addBox(group, 0.7, 1.8, 0.3, Math.cos(a) * 9.4, 44.2, Math.sin(a) * 9.4, gold, { ry: -a });
  }

  // front turrets
  for (const x of [-12.4, 12.4]) {
    for (const z of [6.4]) {
      const h = 25;
      addCylinder(group, 3.8, 4.6, h, 12, x, h / 2 + 2.5, z, stone, { roughness: 0.77 });
      addTorus(group, 4.0, 0.2, 4, 20, x, 16.0, z, gold, { rx: Math.PI / 2, metalness: 0.45 });
      addCylinder(group, 4.7, 4.7, 1.0, 12, x, h + 2.7, z, roof);
      addCone(group, 5.4, 10.5, 12, x, h + 8.3, z, roofLight, { roughness: 0.45, metalness: 0.16 });
      addSphere(group, 0.28, 8, x, h + 14.1, z, gold, { metalness: 0.6 });
      addCylinder(group, 0.06, 0.08, 3.2, 5, x, h + 15.7, z, gold);
      windowMesh(group, warmWindowMat, 1.1, 2.3, x, 12.0, z + 4.59);
      windowMesh(group, warmWindowMat, 1.1, 2.3, x, 19.3, z + 4.59);
      windowMesh(group, warmWindowMat, 1.1, 2.3, x, 12.0, z - 4.59, Math.PI);
    }
  }
  // rear towers (silhouette)
  for (const x of [-9.5, 9.5]) {
    addCylinder(group, 3.3, 4.0, 29, 10, x, 14.5, -9, stoneDark, { roughness: 0.8 });
    addCone(group, 4.8, 10, 10, x, 34.0, -9, roof, { roughness: 0.5 });
    addSphere(group, 0.2, 6, x, 39.5, -9, gold, { metalness: 0.6 });
    for (let yy = 9; yy <= 24; yy += 7) windowMesh(group, warmWindowMat, 0.85, 1.8, x, yy, -5.0);
  }

  // flags
  const flags = [];
  const flagPositions = [[-12.4, 42.4, 6.4], [12.4, 42.4, 6.4], [-9.5, 40.2, -9], [9.5, 40.2, -9]];
  flagPositions.forEach(([x, y, z], idx) => {
    const pole = addCylinder(group, 0.05, 0.06, 5.0, 5, x, y, z, 0xd8b87e);
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); shape.lineTo(2.4, -0.65); shape.lineTo(0, -1.3); shape.closePath();
    const geo = new THREE.ShapeGeometry(shape);
    const mat = new THREE.MeshStandardMaterial({ color: idx % 2 ? 0x9c4e63 : 0x4e5f9a, side: THREE.DoubleSide, roughness: 0.7, emissive: idx % 2 ? 0x451d2b : 0x1b2448, emissiveIntensity: 0.4 });
    const flag = new THREE.Mesh(geo, mat);
    flag.position.set(x + 0.04, y + 2.3, z);
    group.add(flag);
    flags.push(flag);
  });

  // hedge garden and flowerbeds
  for (let i = 0; i < 2; i++) {
    const x = i === 0 ? -1 : 1;
    addBox(group, 16, 1.1, 1.4, x * 17, 0.75, 20.5, 0x27452e, { roughness: 0.95 });
  }
  // entry lanterns
  for (const x of [-8.4, 8.4]) {
    addCylinder(group, 0.18, 0.24, 3.4, 8, x, 3.2, 15.2, 0x433946);
    addBox(group, 0.7, 0.9, 0.7, x, 5.0, 15.2, 0x3b3141);
    addSphere(group, 0.27, 8, x, 4.95, 15.2, 0xffdca0, { material: bulbMat });
    addCone(group, 0.72, 0.8, 4, x, 5.7, 15.2, 0x2e2636, { ry: Math.PI / 4 });
  }

  return {
    group, castleStar, starGlow, rose, flags,
    collider: { type: 'circle', x: 0, z: 0, r: 25.6 },
    update(dt, elapsed) {
      castleStar.rotation.y = elapsed * 0.35;
      castleStar.position.y = 66.0 + Math.sin(elapsed * 0.9) * 0.12;
      starGlow.material.opacity = 0.38 + Math.sin(elapsed * 1.2) * 0.05;
      flags.forEach((flag, i) => {
        flag.rotation.y = Math.sin(elapsed * 2.1 + i) * 0.16;
      });
    },
  };
}

function createShop(scene, bulbMat, { x, z, w = 11, d = 10, h = 9.2, color, roofColor, awningA, awningB, name, en, side }) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  scene.add(group);
  const face = side === 'left' ? 1 : -1;
  addBox(group, d, h, w, 0, h / 2, 0, color, { roughness: 0.78 });
  addBox(group, d + 1.1, 0.55, w + 0.8, 0, h + 0.25, 0, roofColor, { roughness: 0.65 });
  addBox(group, d + 0.8, 0.18, w + 0.5, 0, h * 0.55, 0, 0xb49369, { metalness: 0.25 });
  // cornice and roof blocks
  addBox(group, d - 0.4, 2.1, w - 1.5, 0, h + 1.2, 0, roofColor, { roughness: 0.7 });
  addBox(group, d - 2.0, 1.2, w - 3.2, 0, h + 2.8, 0, roofColor, { roughness: 0.7 });
  addBox(group, 0.9, 1.1, 0.9, -d * 0.2, h + 3.6, -w * 0.2, 0x9b7860);
  addCone(group, 1.4, 2.2, 4, -d * 0.2, h + 5.0, -w * 0.2, 0x4a3a4d, { ry: Math.PI / 4 });
  // facade trim
  const facadeX = face * (d / 2 + 0.03);
  addBox(group, 0.32, h + 0.2, 0.45, face * (d / 2 - 0.1), h / 2, -w / 2 + 0.55, 0xcaa773, { metalness: 0.25 });
  addBox(group, 0.32, h + 0.2, 0.45, face * (d / 2 - 0.1), h / 2, w / 2 - 0.55, 0xcaa773, { metalness: 0.25 });
  // door
  addBox(group, 0.16, 3.4, 2.2, facadeX + face * 0.02, 1.7, -1.3, 0x2a2230);
  addBox(group, 0.14, 3.55, 0.18, facadeX + face * 0.04, 1.78, -2.45, 0xb98e58);
  addBox(group, 0.14, 3.55, 0.18, facadeX + face * 0.04, 1.78, -0.15, 0xb98e58);
  addSphere(group, 0.08, 6, facadeX + face * 0.14, 1.7, -0.5, 0xd7af69);
  // shop windows
  for (const [zPos, ww, hh, yy] of [[2.7, 2.4, 2.7, 2.2], [-3.1, 1.7, 2.2, 2.35], [2.8, 1.4, 2.2, h - 2.5], [-2.9, 1.4, 2.2, h - 2.5]]) {
    const frame = addBox(group, 0.18, hh + 0.35, ww + 0.35, facadeX + face * 0.02, yy, zPos, 0x4b3440);
    const warm = new THREE.MeshBasicMaterial({ color: 0xffc777, transparent: true, opacity: 0.72, toneMapped: false });
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(ww, hh), warm);
    pane.position.set(facadeX + face * 0.14, yy, zPos);
    pane.rotation.y = face > 0 ? Math.PI / 2 : -Math.PI / 2;
    group.add(pane);
    // window cross
    addBox(group, 0.12, hh, 0.09, facadeX + face * 0.17, yy, zPos, 0x573e47);
    addBox(group, 0.12, 0.09, ww, facadeX + face * 0.17, yy, zPos, 0x573e47);
  }
  // awning
  for (let i = 0; i < 7; i++) {
    const zPos = -w / 2 + 1.2 + i * ((w - 2.4) / 6);
    const awning = addBox(group, 2.5, 0.16, (w - 2.4) / 6 + 0.03, facadeX + face * 1.15, 4.05, zPos, i % 2 ? awningA : awningB, {
      roughness: 0.65, rz: face * -0.12,
    });
    addSphere(group, 0.11, 5, facadeX + face * 2.36, 3.8, zPos, i % 2 ? awningA : awningB, { sy: 1.3 });
  }
  // sign
  const sign = makeSign({
    text: name, sub: en, worldWidth: Math.min(w - 2, 7.8), worldHeight: 1.55,
    bg: 'rgba(25,19,30,.86)', border: 'rgba(226,190,126,.5)', color: '#ffedcc', subColor: '#d9ae77',
    width: 896, height: 210, font: '600 76px "Microsoft YaHei", sans-serif', subFont: '500 27px "Avenir Next", sans-serif',
  });
  sign.position.set(facadeX + face * 0.23, h - 0.3, 0);
  sign.rotation.y = face > 0 ? Math.PI / 2 : -Math.PI / 2;
  group.add(sign);
  // warm hanging lamps
  for (const zPos of [-w * 0.33, w * 0.33]) {
    addCylinder(group, 0.04, 0.04, 0.8, 4, facadeX + face * 0.65, h - 2.0, zPos, 0x473a3f);
    addSphere(group, 0.16, 6, facadeX + face * 0.65, h - 2.5, zPos, 0xffdfa1, { material: bulbMat });
  }
  return group;
}

function createGate(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(0, 0, 107);
  scene.add(group);
  const frame = 0x242537;
  const trim = 0xc59d63;
  for (const x of [-13.0, 13.0]) {
    addBox(group, 7.2, 19.5, 7.4, x, 9.75, 0, frame, { roughness: 0.78 });
    addBox(group, 7.8, 0.4, 8.0, x, 4.0, 0, trim, { metalness: 0.3 });
    addBox(group, 7.8, 0.32, 8.0, x, 12.4, 0, trim, { metalness: 0.3 });
    for (const z of [-3.72, 3.72]) {
      addBox(group, 0.32, 18, 0.25, x - 2.5, 9.8, z, trim, { metalness: 0.25 });
      addBox(group, 0.32, 18, 0.25, x + 2.5, 9.8, z, trim, { metalness: 0.25 });
    }
    addCone(group, 5.5, 6.8, 4, x, 22.8, 0, 0x3c2e4a, { ry: Math.PI / 4, roughness: 0.5 });
    addCylinder(group, 0.07, 0.09, 4.4, 5, x, 27.5, 0, trim);
    addStar(group, 0.7, 0.2, x, 30.0, 0, 0xffd274, { emissiveIntensity: 1.5 });
    // ticket arch details
    addBox(group, 1.0, 12, 0.6, x - 3.5, 7.0, 3.72, 0x6f5660);
    addBox(group, 1.0, 12, 0.6, x + 3.5, 7.0, 3.72, 0x6f5660);
  }
  addBox(group, 26.5, 5.2, 5.0, 0, 16.9, 0, frame, { roughness: 0.72 });
  addBox(group, 27.2, 0.4, 5.4, 0, 14.2, 0, trim, { metalness: 0.3 });
  addBox(group, 27.2, 0.4, 5.4, 0, 19.5, 0, trim, { metalness: 0.3 });
  addBox(group, 9.2, 5.0, 5.4, 0, 21.0, 0, 0x2a2a40);
  addCone(group, 6.4, 5.0, 4, 0, 25.8, 0, 0x3c2e4a, { ry: Math.PI / 4 });
  const clockTex = makeClockTexture();
  for (const [z, ry] of [[2.83, 0], [-2.83, Math.PI]]) {
    const clock = new THREE.Mesh(new THREE.CircleGeometry(2.7, 40), new THREE.MeshBasicMaterial({ map: clockTex, transparent: true, toneMapped: false, side: THREE.DoubleSide }));
    clock.position.set(0, 21.1, z);
    clock.rotation.y = ry;
    group.add(clock);
    addTorus(group, 2.76, 0.1, 5, 32, 0, 21.1, z, trim, { zoom: 1 });
  }
  const frontSign = makeSign({
    text: 'ASTRALIA', sub: '星 梦 奇 境  ·  EST. 2026', worldWidth: 19.0, worldHeight: 3.3,
    bg: 'rgba(12,12,23,.78)', border: 'rgba(242,203,122,.55)', color: '#fff0ca', subColor: '#d8ae6b',
    width: 1400, height: 242, font: '500 126px Georgia, serif', subFont: '500 38px "Microsoft YaHei", sans-serif', letterSpacing: 14,
  });
  frontSign.position.set(0, 16.9, 2.62);
  group.add(frontSign);
  const backSign = makeSign({
    text: 'ASTRALIA', sub: '愿 每 一 颗 星 都 被 看 见', worldWidth: 18.0, worldHeight: 3.1,
    bg: 'rgba(12,12,23,.78)', border: 'rgba(242,203,122,.48)', color: '#fff0ca', subColor: '#d8ae6b',
    width: 1400, height: 242, font: '500 126px Georgia, serif', subFont: '500 36px "Microsoft YaHei", sans-serif', letterSpacing: 14,
  });
  backSign.position.set(0, 16.9, -2.62);
  backSign.rotation.y = Math.PI;
  group.add(backSign);
  // string lights at the arch
  for (let i = 0; i < 21; i++) {
    const x = -10.5 + i * 1.05;
    const y = 14.9 - Math.sin((i / 20) * Math.PI) * 1.1;
    addSphere(group, 0.12, 6, x, y, 2.7, 0xffdfa1, { material: bulbMat });
  }
  // side lanterns
  for (const x of [-16.5, 16.5]) {
    for (const z of [-3.7, 3.7]) {
      addCylinder(group, 0.1, 0.16, 3.2, 6, x, 1.6, z, 0x3b3445);
      addBox(group, 0.65, 0.8, 0.65, x, 3.5, z, 0x2a2635);
      addSphere(group, 0.24, 7, x, 3.48, z, 0xffdc9f, { material: bulbMat });
    }
  }
  // ticket booths
  for (const x of [-24.5, 24.5]) {
    const booth = new THREE.Group();
    booth.position.set(x, 0, 4.2);
    group.add(booth);
    addBox(booth, 6.0, 4.0, 5.0, 0, 2.0, 0, 0x303149);
    addBox(booth, 6.6, 0.3, 5.5, 0, 4.1, 0, trim, { metalness: 0.25 });
    addCone(booth, 4.4, 3.0, 4, 0, 5.4, 0, 0x3b2d49, { ry: Math.PI / 4 });
    for (let i = 0; i < 4; i++) addBox(booth, 0.7, 1.5, 0.1, -2 + i * 1.3, 2.4, 2.52, 0xffc879, { emissive: 0xffa951, emissiveIntensity: 1 });
    const s = makeSign({
      text: '售票处', sub: 'TICKETS', worldWidth: 3.8, worldHeight: 0.95,
      bg: 'rgba(18,16,28,.9)', border: 'rgba(214,181,118,.45)', color: '#ffedc9', subColor: '#d5ad6b',
      width: 512, height: 150, font: '600 62px "Microsoft YaHei", sans-serif', subFont: '500 24px sans-serif',
    });
    s.position.set(0, 4.25, 2.66);
    booth.add(s);
    addSphere(booth, 0.17, 7, 0, 3.75, 2.6, 0xffdda1, { material: bulbMat });
  }
  return { group };
}

function createTheater(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.set(82, 0, -28);
  scene.add(group);
  addBox(group, 16, 13, 24, 0, 6.5, 0, 0x2e2944, { roughness: 0.74 });
  addBox(group, 17, 0.5, 25, 0, 13.1, 0, 0xc2a16b);
  addCylinder(group, 8.0, 10.5, 4.0, 24, 0, 15.4, 0, 0x403656);
  const dome = addSphere(group, 8.4, 20, 0, 17.2, 0, 0x4b3d67, { sy: 0.75, roughness: 0.55 });
  for (let i = 0; i < 3; i++) addTorus(group, 8.5 - i * 1.2, 0.12, 4, 28, 0, 15.2 + i * 1.7, 0, 0xb99563, { rx: Math.PI / 2, metalness: 0.4 });
  addStar(group, 1.4, 0.3, 0, 24.7, 0, 0xffd67c, { emissiveIntensity: 1.5 });
  // facade facing the park (-x)
  const sign = makeSign({
    text: '月影剧场', sub: 'MOONLIT THEATRE', worldWidth: 12.5, worldHeight: 2.5,
    bg: 'rgba(21,15,33,.9)', border: 'rgba(227,189,118,.5)', color: '#ffedc4', subColor: '#d5aa6c',
    width: 1024, height: 230, font: '600 84px "Microsoft YaHei", sans-serif', fontSize: 60,
  });
  sign.position.set(-8.06, 11.2, 0);
  sign.rotation.y = -Math.PI / 2;
  group.add(sign);
  addBox(group, 2.0, 0.35, 14.5, -9.3, 8.8, 0, 0x3b304e);
  for (let i = 0; i < 14; i++) {
    addSphere(group, 0.12, 6, -10.1, 8.4, -6.4 + i * 0.98, 0xffe2a7, { material: bulbMat });
  }
  for (const z of [-7.8, 7.8]) {
    addBox(group, 0.45, 10, 0.45, -8.2, 5, z, 0xc5a874, { metalness: 0.3 });
    addSphere(group, 0.28, 8, -8.5, 10.2, z, 0xffd98f, { material: bulbMat });
  }
  // entrance
  addBox(group, 0.3, 6.0, 8.2, -8.15, 3.0, 0, 0x171426);
  for (let i = 0; i < 5; i++) addBox(group, 0.14, 0.22, 7.2, -8.36, 0.5 + i * 1.15, 0, 0xbe9a65);
  for (let i = 0; i < 3; i++) {
    addCone(group, 1.8, 9, 4, -9.0, 16.4, -5.5 + i * 5.5, 0x2b2742, { rx: Math.PI / 2.8 });
  }
  return {
    group,
    collider: { type: 'rect', x: 82, z: -28, hx: 8.5, hz: 12.5 },
  };
}

function createLamp(scene, bulbMat, x, z, h = 3.5, color = 0xffdda1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  scene.add(g);
  addCylinder(g, 0.1, 0.17, h, 6, 0, h / 2, 0, 0x272638);
  addSphere(g, 0.3, 8, 0, h + 0.05, 0, color, { material: bulbMat });
  addCone(g, 0.42, 0.44, 8, 0, h + 0.45, 0, 0x272638);
  addCylinder(g, 0.24, 0.3, 0.2, 8, 0, h - 0.25, 0, 0x373145);
  return g;
}

function makeBench(x, z, ry = 0) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = ry;
  const wood = standard(0x8b6242, { roughness: 0.82 });
  for (let i = 0; i < 3; i++) addBox(g, 2.6, 0.12, 0.3, 0, 0.55, -0.3 + i * 0.3, 0x000000, { material: wood });
  for (let i = 0; i < 2; i++) addBox(g, 2.6, 0.12, 0.2, 0, 0.95 + i * 0.28, 0.45, 0x000000, { material: wood });
  for (const sx of [-0.95, 0.95]) {
    addBox(g, 0.1, 0.55, 0.1, sx, 0.28, -0.2, 0x34303b);
    addBox(g, 0.1, 0.55, 0.1, sx, 0.28, 0.3, 0x34303b);
    addBox(g, 0.1, 0.9, 0.1, sx, 0.95, 0.46, 0x34303b);
  }
  return g;
}

function createProps(scene, bulbMat, warmWindowMat) {
  const rand = seededRandom(561);
  const props = new THREE.Group();
  scene.add(props);
  // benches
  const benches = [
    [-11.6, 61, Math.PI / 2], [11.6, 68, -Math.PI / 2], [-11.6, 86, Math.PI / 2], [11.6, 94, -Math.PI / 2],
    [-27, 40, 0.35], [26, 41, -0.4], [38, 46, 0.3], [-10, 19, -1.1], [30, -30, -1.6],
    [4, -46, 0.2],
  ];
  benches.forEach(([x, z, ry]) => {
    const b = makeBench(x, z, ry);
    props.add(b);
  });
  // pop corn cart
  const popcorn = new THREE.Group();
  popcorn.position.set(9.5, 0, 55);
  // superseded by the detailed soda & snack kiosk
  // props.add(popcorn);
  addBox(popcorn, 2.8, 1.3, 1.7, 0, 1.0, 0, 0xa73243, { roughness: 0.6 });
  addBox(popcorn, 2.4, 0.5, 1.4, 0, 1.85, 0, 0xf2e2c3);
  for (let i = 0; i < 24; i++) addSphere(popcorn, 0.1 + rand() * 0.06, 5, (rand() - 0.5) * 2.0, 2.1 + rand() * 0.28, (rand() - 0.5) * 1.05, 0xffe7b0);
  addBox(popcorn, 3.6, 0.2, 2.4, 0, 3.15, 0, 0x7e2d3d);
  for (let i = 0; i < 8; i++) {
    addBox(popcorn, 0.9, 0.13, 2.4, -1.55 + i * 0.44, 3.0, 0, i % 2 ? 0xf3dfc0 : 0xa73243, { rz: 0.1 });
  }
  for (const x of [-1.0, 1.0]) {
    addCylinder(popcorn, 0.4, 0.4, 0.18, 10, x, 0.3, 0.9, 0x36252a, { rx: Math.PI / 2 });
    addCylinder(popcorn, 0.16, 0.16, 2.9, 5, x, 1.5, -0.75, 0xeee1c8);
  }
  let pSign = makeSign({ text: '爆米花', sub: 'POPCORN', worldWidth: 2.4, worldHeight: 0.65, bg: 'rgba(60,24,33,.9)', border: 'rgba(242,208,147,.55)', color: '#ffe9c6', subColor: '#e8c58c', width: 512, height: 140, font: '600 58px "Microsoft YaHei", sans-serif', subFont: '500 22px sans-serif' });
  pSign.position.set(0, 2.6, 0.9);
  popcorn.add(pSign);
  // balloon cart
  const balloons = new THREE.Group();
  balloons.position.set(-9.2, 0, 60);
  // superseded by the detailed clown balloon stall
  // props.add(balloons);
  addBox(balloons, 2.4, 1.2, 1.6, 0, 0.85, 0, 0x334b63, { roughness: 0.7 });
  for (const x of [-0.75, 0.75]) addCylinder(balloons, 0.3, 0.3, 0.14, 10, x, 0.25, 0.8, 0x262331, { rx: Math.PI / 2 });
  addBox(balloons, 2.8, 0.16, 2.0, 0, 1.55, 0, 0xb58d5c);
  const balloonColors = [0xff7e9c, 0xffcc6c, 0x87d8d3, 0xb49cff, 0xff9e78, 0x9cd8ff];
  for (let i = 0; i < 15; i++) {
    const a = (i / 15) * Math.PI * 2 + rand() * 0.2;
    const r = 0.25 + rand() * 1.5;
    const bx = Math.cos(a) * r;
    const bz = Math.sin(a) * r * 0.65;
    const by = 3.0 + rand() * 1.9;
    const b = addSphere(balloons, 0.32 + rand() * 0.1, 10, bx, by, bz, balloonColors[i % balloonColors.length], { roughness: 0.25, metalness: 0.1 });
    b.scale.y = 1.22;
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(bx, by - 0.36, bz), new THREE.Vector3(0.1, 1.6, 0)]);
    balloons.add(new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0xd6c1a5, transparent: true, opacity: 0.35 })));
    addSphere(balloons, 0.05, 5, bx, by - 0.45, bz, balloonColors[i % balloonColors.length]);
  }
  // churro stand
  const churro = new THREE.Group();
  churro.position.set(34, 0, 44);
  props.add(churro);
  addBox(churro, 3.2, 2.0, 2.0, 0, 1.0, 0, 0x775038);
  addBox(churro, 3.6, 0.18, 2.4, 0, 2.4, 0, 0xb68652);
  for (let i = 0; i < 5; i++) addBox(churro, 0.55, 0.16, 2.4, -1.4 + i * 0.7, 2.3, 0, i % 2 ? 0xe5c89f : 0x98464d);
  for (let i = 0; i < 5; i++) addCylinder(churro, 0.08, 0.09, 1.6, 5, -1.3 + i * 0.6, 1.6, 1.05, 0xe6c28a, { rz: 0.25 });
  // wishing well
  const well = new THREE.Group();
  well.position.set(11, 0, 35);
  props.add(well);
  addCylinder(well, 2.15, 2.4, 1.1, 16, 0, 0.55, 0, 0x6e655e, { roughness: 0.9 });
  addCylinder(well, 1.7, 1.7, 0.15, 16, 0, 1.02, 0, 0x18303c);
  addTorus(well, 2.2, 0.17, 5, 24, 0, 1.12, 0, 0xb39365, { rx: Math.PI / 2 });
  for (const x of [-1.5, 1.5]) addCylinder(well, 0.13, 0.17, 3.7, 6, x, 2.8, 0, 0x53423f);
  addCone(well, 2.4, 1.5, 4, 0, 5.0, 0, 0x413448, { ry: Math.PI / 4 });
  addStar(well, 0.4, 0.12, 0, 5.9, 0, 0xffd477, { emissiveIntensity: 1.4 });
  addSphere(well, 0.12, 6, 0, 3.4, 0, 0xffdb97, { material: bulbMat });
  // photo spot rings
  for (const [x, z] of [[-20, 48], [31, 46]]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.7, 1.85, 32), new THREE.MeshBasicMaterial({ color: 0xf0c875, transparent: true, opacity: 0.24, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.08, z);
    props.add(ring);
  }
  return { group: props, well };
}

function createMascot(type, x, z, ry = 0, colors = {}) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = ry;
  const bodyColor = colors.body ?? 0xf3dcc3;
  const accent = colors.accent ?? 0xd36c75;
  addSphere(g, 0.65, 14, 0, 1.25, 0, bodyColor, { sy: 1.15 });
  addSphere(g, 0.57, 14, 0, 2.25, 0, bodyColor);
  addSphere(g, 0.35, 10, -0.32, 2.95, 0, bodyColor);
  addSphere(g, 0.35, 10, 0.32, 2.95, 0, bodyColor);
  addSphere(g, 0.08, 6, -0.2, 2.28, 0.51, 0x292134);
  addSphere(g, 0.08, 6, 0.2, 2.28, 0.51, 0x292134);
  addSphere(g, 0.1, 6, 0, 2.12, 0.56, accent);
  addSphere(g, 0.2, 8, -0.83, 1.35, 0.1, bodyColor);
  addSphere(g, 0.2, 8, 0.83, 1.35, 0.1, bodyColor);
  addSphere(g, 0.24, 8, -0.5, 0.38, 0.1, accent);
  addSphere(g, 0.24, 8, 0.5, 0.38, 0.1, accent);
  if (type === 'star') {
    addStar(g, 0.65, 0.2, 0, 2.95, 0.1, 0xffd567, { emissiveIntensity: 1.15 });
    const cape = addCone(g, 1.0, 1.8, 5, 0, 1.25, -0.35, 0x5b629e, { rx: -Math.PI / 1.75, openEnded: true });
  } else if (type === 'bear') {
    addCone(g, 0.8, 1.7, 6, 0, 1.35, -0.3, 0x9d7d58, { rx: -Math.PI / 1.9 });
    addBox(g, 0.7, 0.5, 0.2, 0, 1.55, 0.58, accent);
  } else {
    addCone(g, 0.8, 1.9, 6, 0, 1.3, -0.3, 0x88b7a3, { rx: -Math.PI / 1.9 });
  }
  return g;
}

function createCrowd(scene) {
  const count = 46;
  const visitors = [];
  const rand = seededRandom(9901);
  const bodyGeo = new THREE.CapsuleGeometry(0.23, 0.56, 3, 6);
  const headGeo = new THREE.SphereGeometry(0.23, 8, 6);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.82 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 });
  const bodies = new THREE.InstancedMesh(bodyGeo, bodyMat, count);
  const heads = new THREE.InstancedMesh(headGeo, headMat, count);
  bodies.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  heads.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const palette = [0xd36c75, 0x607f9a, 0xc5a45e, 0x6f9b86, 0x8f77a8, 0xd28b5f, 0xd6d1c3, 0x4f6e88, 0xb25568, 0x7d6f56];
  const skin = [0xf2d2b6, 0xd6a17d, 0xa96f4c, 0x7b4b34, 0xe8bd9c];
  for (let i = 0; i < count; i++) {
    const scale = 0.82 + rand() * 0.32;
    const type = i % 5;
    let route;
    if (type === 0 || type === 1) {
      const side = rand() > 0.5 ? 1 : -1;
      route = { kind: 'street', x: side * (3.6 + rand() * 4.2), z: 54 + rand() * 48, range: 4 + rand() * 10, speed: 0.11 + rand() * 0.13, phase: rand() * 8 };
    } else if (type === 2) {
      route = { kind: 'orbit', cx: -48, cz: 32, r: 16.5 + rand() * 3.5, speed: 0.045 + rand() * 0.06, phase: rand() * 8 };
    } else if (type === 3) {
      route = { kind: 'orbit', cx: 58, cz: 18, r: 11.5 + rand() * 4, speed: -0.04 - rand() * 0.05, phase: rand() * 8 };
    } else {
      route = { kind: 'orbit', cx: 24, cz: -45, r: 2.5 + rand() * 7.5, speed: 0.035 + rand() * 0.04, phase: rand() * 8 };
    }
    const bodyColor = new THREE.Color(palette[Math.floor(rand() * palette.length)]);
    const headColor = new THREE.Color(skin[Math.floor(rand() * skin.length)]);
    bodies.setColorAt(i, bodyColor);
    heads.setColorAt(i, headColor);
    visitors.push({ scale, route, x: 0, z: 0, bodyColor });
  }
  bodies.instanceColor.needsUpdate = true;
  heads.instanceColor.needsUpdate = true;
  scene.add(bodies, heads);
  const dummy = new THREE.Object3D();
  let accum = 0;
  return {
    bodies, heads, visitors,
    update(dt, elapsed, playerX = 0, playerZ = 0) {
      accum += dt;
      visitors.forEach((v, i) => {
        const r = v.route;
        let x, z;
        if (r.kind === 'street') {
          x = r.x + Math.sin(elapsed * r.speed * 2.2 + r.phase) * 1.1;
          z = r.z + Math.sin(elapsed * r.speed + r.phase) * r.range;
        } else {
          const a = r.phase + elapsed * r.speed;
          x = r.cx + Math.cos(a) * r.r;
          z = r.cz + Math.sin(a) * r.r;
        }
        v.x = x; v.z = z;
        const s = v.scale;
        const away = Math.hypot(x - playerX, z - playerZ) < 3.9;
        if (away) {
          dummy.position.set(x, -30, z);
          dummy.scale.setScalar(0);
          dummy.updateMatrix();
          bodies.setMatrixAt(i, dummy.matrix);
          heads.setMatrixAt(i, dummy.matrix);
          return;
        }
        dummy.position.set(x, 0.62 * s, z);
        dummy.scale.set(s, s, s);
        dummy.rotation.y = Math.sin(elapsed * 0.4 + i) * 0.3;
        dummy.updateMatrix();
        bodies.setMatrixAt(i, dummy.matrix);
        dummy.position.y = 1.34 * s;
        dummy.scale.set(s * 1.02, s, s * 1.02);
        dummy.updateMatrix();
        heads.setMatrixAt(i, dummy.matrix);
      });
      bodies.instanceMatrix.needsUpdate = true;
      heads.instanceMatrix.needsUpdate = true;
    },
  };
}

function buildParade(scene, bulbMat) {
  const route = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-5, 0, 48), new THREE.Vector3(-5, 0, 78), new THREE.Vector3(-4, 0, 98),
    new THREE.Vector3(-1, 0, 109), new THREE.Vector3(4, 0, 100), new THREE.Vector3(5, 0, 72),
    new THREE.Vector3(5, 0, 48), new THREE.Vector3(2, 0, 37),
  ], true, 'catmullrom', 0.4);
  const colors = [
    { base: 0x4b3b6b, trim: 0xe8bf72, accent: 0xff7b92, theme: 'star' },
    { base: 0x294d57, trim: 0xdda75f, accent: 0x83e0d2, theme: 'moon' },
    { base: 0x5b3342, trim: 0xefc984, accent: 0xb6a0ff, theme: 'flower' },
  ];
  const floats = [];
  colors.forEach((c, idx) => {
    const g = new THREE.Group();
    scene.add(g);
    addBox(g, 5.0, 0.8, 3.4, 0, 0.85, 0, c.base, { roughness: 0.5, metalness: 0.2 });
    addBox(g, 4.8, 0.18, 3.2, 0, 1.38, 0, c.trim, { metalness: 0.35 });
    for (const x of [-1.6, 1.6]) for (const z of [-1.2, 1.2]) addCylinder(g, 0.34, 0.34, 0.18, 10, x, 0.45, z, 0x201b27, { rz: Math.PI / 2 });
    addBox(g, 4.2, 0.15, 0.15, 0, 1.8, 1.55, c.accent, { emissive: c.accent, emissiveIntensity: 1.8 });
    addBox(g, 4.2, 0.15, 0.15, 0, 1.8, -1.55, c.accent, { emissive: c.accent, emissiveIntensity: 1.8 });
    for (let i = 0; i < 7; i++) {
      addSphere(g, 0.12, 6, -2.0 + i * 0.66, 2.0, 1.68, 0xffe2a6, { material: bulbMat });
      addSphere(g, 0.12, 6, -2.0 + i * 0.66, 2.0, -1.68, 0xffe2a6, { material: bulbMat });
    }
    if (c.theme === 'star') {
      const star = addStar(g, 1.45, 0.35, 0, 3.9, 0, c.accent, { emissiveIntensity: 1.4 });
      addCylinder(g, 0.1, 0.1, 2.0, 5, 0, 2.35, 0, c.trim);
      g.userData.spin = star;
    } else if (c.theme === 'moon') {
      addTorus(g, 1.35, 0.3, 6, 32, 0, 4.0, 0, c.accent, { arc: Math.PI * 1.5, emissive: c.accent, emissiveIntensity: 0.6 });
      addSphere(g, 1.05, 18, 0.1, 4.0, 0, 0xf2dab1, { emissive: 0x9a7444, emissiveIntensity: 0.35 });
      addCylinder(g, 0.1, 0.1, 2.0, 5, 0, 2.35, 0, c.trim);
      g.userData.spin = g.children[g.children.length - 1];
    } else {
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        addSphere(g, 0.45, 8, Math.cos(a) * 1.1, 3.6 + Math.sin(i) * 0.3, Math.sin(a) * 1.1, i % 2 ? c.accent : 0xf1c8a3, { sy: 0.55 });
      }
      addCylinder(g, 0.1, 0.1, 2.8, 5, 0, 2.5, 0, 0x52786a);
      g.userData.spin = g.children[g.children.length - 1];
    }
    const sign = makeSign({
      text: ['星月号', '花火号', '梦境号'][idx], sub: ['STARLIGHT FLOAT', 'FIREWORK FLOAT', 'DREAM FLOAT'][idx],
      worldWidth: 3.0, worldHeight: 0.8, bg: 'rgba(20,16,30,.82)', border: 'rgba(237,204,143,.4)', color: '#ffedc8', subColor: '#d8b176',
      width: 512, height: 140, font: '600 62px "Microsoft YaHei", sans-serif', subFont: '500 22px sans-serif',
    });
    sign.position.set(0, 1.8, idx === 1 ? -1.72 : 1.72);
    if (idx === 1) sign.rotation.y = Math.PI;
    g.add(sign);
    // dancers
    for (let j = 0; j < 3; j++) {
      const dancer = new THREE.Group();
      dancer.position.set(-1.55 + j * 1.55, 1.55, 0.7);
      addSphere(dancer, 0.26, 8, 0, 0.85, 0, idx === 0 ? 0xf4c9b1 : 0xe7b896);
      addCylinder(dancer, 0.2, 0.29, 0.75, 7, 0, 0.35, 0, [0xffc9ce, 0xc4b6ed, 0x9bdbce][j], { roughness: 0.5 });
      addCylinder(dancer, 0.07, 0.08, 0.4, 5, 0.22, 0.8, 0, 0xf4c9b1, { rz: -0.8 });
      g.add(dancer);
      dancer.userData.phase = Math.random() * 6;
    }
    scene.add(g);
    floats.push({ group: g, offset: idx * 0.13, wobble: idx * 2.2 });
  });
  return {
    group: floats[0].group, route, floats,
    update(dt, elapsed) {
      floats.forEach(({ group, offset, wobble }, i) => {
        const t = (elapsed * 0.0045 + offset) % 1;
        const p = route.getPointAt(t);
        const tangent = route.getTangentAt(t).normalize();
        group.position.set(p.x, 0.04 + Math.sin(elapsed * 1.1 + wobble) * 0.04, p.z);
        group.lookAt(p.x + tangent.x, group.position.y, p.z + tangent.z);
        if (group.userData.spin) group.userData.spin.rotation.y = elapsed * (0.6 + i * 0.1);
        group.children.forEach((child) => {
          if (child.userData.phase != null) {
            child.position.y = 1.6 + Math.abs(Math.sin(elapsed * 2 + child.userData.phase)) * 0.14;
            child.rotation.z = Math.sin(elapsed * 1.8 + child.userData.phase) * 0.08;
          }
        });
      });
    },
  };
}

function buildLandscape(scene, colliders, flowerBeds) {
  const rand = seededRandom(11239);
  const broad = [];
  const pines = [];
  // perimeter broadleaf trees
  for (let i = 0; i < 58; i++) {
    const a = rand() * Math.PI * 2;
    const r = 86 + rand() * 33;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (z > 92 && Math.abs(x) < 29) continue;
    if (x > 58 && z < -35) continue;
    if (x > 40 && z > 40) continue;
    broad.push({ x, z, s: 0.8 + rand() * 0.8, rot: rand() * 6 });
  }
  // new outer grove for the expanded island
  for (let i = 0; i < 42; i++) {
    const a = rand() * Math.PI * 2;
    const r = 118 + rand() * 34;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (z > 112 && x > -10 && x < 62) continue;
    if (x > 62 && z > 15 && z < 95) continue;
    broad.push({ x, z, s: 0.85 + rand() * 0.85, rot: rand() * 6 });
  }
  // inner clusters
  const inner = [
    [-28, 14], [-30, 10], [34, 4], [40, 4], [31, 34],
    [47, -26], [37, -24], [72, 36], [26, -52], [-18, -50], [50, -64],
    [-25, 3], [34, 24], [78, 4], [76, 2], [14, -48],
  ];
  inner.forEach(([x, z]) => broad.push({ x, z, s: 0.7 + rand() * 0.6, rot: rand() * 6 }));
  // pines around the coaster valley
  const pineSpots = [
    [-95, -72], [-86, -88], [-66, -95], [-48, -98], [-31, -89], [-90, -48], [-101, -28],
    [-83, -18], [-27, -22], [-14, -64], [-103, -62], [-58, -103], [-45, -16], [-104, -10],
    [-72, -104], [-20, -85], [-17, -38], [12, -66], [38, -58], [47, -48],
  ];
  pineSpots.forEach(([x, z]) => pines.push({ x: x + (rand() - 0.5) * 6, z: z + (rand() - 0.5) * 6, s: 0.8 + rand() * 0.7, rot: rand() * 6 }));
  // Keep the skyway, new landmarks, and the expanded courts clear of tree trunks.
  const skywayClear = [
    [-44, 98, 19], [-20, -57, 18], [-39.35, 68, 7], [-26.35, -16, 7],
    [82, 56, 26], [38, 138, 24], [14, 132, 23], [114, 48, 14],
    [100, 88, 21], [76, 108, 21], [-30, 132, 21], [-92, 88, 27],
    [-60, 94, 14], [-73, 90, 11],
    [0, 57, 18], [0, 74, 18], [0, 91, 18],
    [-20.5, 57, 12], [20.5, 57, 12], [-20.5, 74, 12], [20.5, 74, 12],
    [-20.5, 91, 12], [20.5, 91, 12], [82, -28, 20],
    [-18, -118, 27], [-16, -84, 13], [-12, -94, 10],
    [0, 154, 14], [108.9, 108.9, 13], [-108.9, 108.9, 13], [0, -154, 13],
  ];
  const clearOfSkyway = (t) => skywayClear.some(([cx, cz, cr]) => Math.hypot(t.x - cx, t.z - cz) < cr);
  const clearOfTeacups = (t) => Math.hypot(t.x + 62, t.z - 68) < 18;
  for (let i = broad.length - 1; i >= 0; i--) if (clearOfSkyway(broad[i]) || clearOfTeacups(broad[i])) broad.splice(i, 1);
  for (let i = pines.length - 1; i >= 0; i--) if (clearOfSkyway(pines[i]) || clearOfTeacups(pines[i])) pines.splice(i, 1);
  // build instanced trees
  const dummy = new THREE.Object3D();
  const trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, 4.2, 6);
  const trunkMat = standard(0x4b3b31, { roughness: 0.95 });
  const broadTrunks = new THREE.InstancedMesh(trunkGeo, trunkMat, broad.length);
  const broadCanopyGeo = new THREE.IcosahedronGeometry(1, 0);
  const canopyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, flatShading: true, emissive: 0x0a1d12, emissiveIntensity: 0.75 });
  const canopy1 = new THREE.InstancedMesh(broadCanopyGeo, canopyMat, broad.length);
  const canopy2 = new THREE.InstancedMesh(broadCanopyGeo, canopyMat, broad.length);
  const canopy3 = new THREE.InstancedMesh(broadCanopyGeo, canopyMat, broad.length);
  const greens = [0x2f5137, 0x355b3c, 0x294a33, 0x3d6143, 0x284330];
  broad.forEach((t, i) => {
    const s = t.s;
    dummy.position.set(t.x, 2.2 * s, t.z);
    dummy.scale.set(s, s, s);
    dummy.rotation.y = t.rot;
    dummy.updateMatrix();
    broadTrunks.setMatrixAt(i, dummy.matrix);
    for (const [mesh, off, sc] of [[canopy1, [0, 5.0, 0], 2.4], [canopy2, [1.1, 4.4, 0.35], 1.6], [canopy3, [-0.9, 4.2, -0.4], 1.5]]) {
      dummy.position.set(t.x + off[0] * s, (off[1] + (rand() - 0.5) * 0.7) * s, t.z + off[2] * s);
      dummy.scale.set(sc * s, sc * 0.88 * s, sc * s);
      dummy.rotation.set(rand() * 0.3, t.rot, rand() * 0.2);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, new THREE.Color(greens[Math.floor(rand() * greens.length)]).multiplyScalar(0.7 + rand() * 0.35));
    }
    colliders.push({ type: 'circle', x: t.x, z: t.z, r: 0.75 * s });
  });
  [canopy1, canopy2, canopy3].forEach((m) => { m.instanceColor.needsUpdate = true; });
  scene.add(broadTrunks, canopy1, canopy2, canopy3);

  const pineTrunks = new THREE.InstancedMesh(trunkGeo, trunkMat, pines.length);
  const pineGeo = new THREE.ConeGeometry(1, 1, 7);
  const pineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, flatShading: true, emissive: 0x081a14, emissiveIntensity: 0.7 });
  const pine1 = new THREE.InstancedMesh(pineGeo, pineMat, pines.length);
  const pine2 = new THREE.InstancedMesh(pineGeo, pineMat, pines.length);
  const pine3 = new THREE.InstancedMesh(pineGeo, pineMat, pines.length);
  const pineGreens = [0x1e3c31, 0x244735, 0x19332a, 0x2b4c38];
  pines.forEach((t, i) => {
    const s = t.s;
    dummy.position.set(t.x, 2.2 * s, t.z);
    dummy.scale.set(s, s, s);
    dummy.rotation.y = t.rot;
    dummy.updateMatrix();
    pineTrunks.setMatrixAt(i, dummy.matrix);
    for (const [mesh, y, sc, h] of [[pine1, 3.9, 2.5, 4.8], [pine2, 6.0, 1.95, 3.9], [pine3, 7.7, 1.35, 3.0]]) {
      dummy.position.set(t.x, y * s, t.z);
      dummy.scale.set(sc * s, h * s, sc * s);
      dummy.rotation.set(0, t.rot, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, new THREE.Color(pineGreens[Math.floor(rand() * pineGreens.length)]).multiplyScalar(0.7 + rand() * 0.3));
    }
    colliders.push({ type: 'circle', x: t.x, z: t.z, r: 0.75 * s });
  });
  [pine1, pine2, pine3].forEach((m) => { m.instanceColor.needsUpdate = true; });
  scene.add(pineTrunks, pine1, pine2, pine3);

  // shrubs along the plaza
  const shrubGeo = new THREE.IcosahedronGeometry(1, 0);
  const shrubMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.94, flatShading: true });
  const shrubs = new THREE.InstancedMesh(shrubGeo, shrubMat, 46);
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * Math.PI * 2;
    const r = 36 + rand() * 7;
    const x = Math.cos(a) * r;
    const z = 18 + Math.sin(a) * r;
    if (z > 46 && Math.abs(x) < 31) {
      dummy.position.set(0, -80, 0);
      dummy.scale.setScalar(0.001);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      shrubs.setMatrixAt(i, dummy.matrix);
      continue;
    }
    const s = 0.7 + rand() * 1.1;
    dummy.position.set(x, 0.5 * s, z);
    dummy.scale.set(s * 1.4, s * 0.8, s * 1.2);
    dummy.rotation.set(rand(), rand() * 6, 0);
    dummy.updateMatrix();
    shrubs.setMatrixAt(i, dummy.matrix);
    shrubs.setColorAt(i, new THREE.Color(greens[Math.floor(rand() * greens.length)]));
    colliders.push({ type: 'circle', x, z, r: 0.8 * s });
  }
  shrubs.instanceColor.needsUpdate = true;
  scene.add(shrubs);

  // flowers from beds and add color
  const flowers = [];
  flowerBeds.forEach((bed) => {
    for (let i = 0; i < bed.count; i++) {
      const a = rand() * Math.PI * 2;
      const r = Math.sqrt(rand());
      const x = bed.x + Math.cos(a) * r * bed.rx;
      const z = bed.z + Math.sin(a) * r * bed.rz;
      flowers.push({ x, z, y: 0.34 + rand() * 0.22, color: bed.colors[Math.floor(rand() * bed.colors.length)], scale: 0.7 + rand() * 0.8 });
    }
  });
  const flowerGeo = new THREE.SphereGeometry(0.075, 5, 4);
  const flowerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, emissive: 0x221711, emissiveIntensity: 0.15 });
  const flowerMesh = new THREE.InstancedMesh(flowerGeo, flowerMat, flowers.length);
  const stemGeo = new THREE.CylinderGeometry(0.012, 0.018, 0.3, 3);
  const stemMat = standard(0x35543a, { roughness: 1 });
  const stems = new THREE.InstancedMesh(stemGeo, stemMat, flowers.length);
  flowers.forEach((f, i) => {
    dummy.position.set(f.x, f.y, f.z);
    dummy.scale.setScalar(f.scale);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    flowerMesh.setMatrixAt(i, dummy.matrix);
    flowerMesh.setColorAt(i, new THREE.Color(f.color));
    dummy.position.y = f.y - 0.2;
    dummy.scale.setScalar(f.scale);
    dummy.updateMatrix();
    stems.setMatrixAt(i, dummy.matrix);
  });
  flowerMesh.instanceColor.needsUpdate = true;
  scene.add(flowerMesh, stems);

  // boulders near shoreline
  const boulderGeo = new THREE.IcosahedronGeometry(1, 0);
  const boulderMat = standard(0x5b554b, { roughness: 0.96, flat: true });
  const boulders = new THREE.InstancedMesh(boulderGeo, boulderMat, 22);
  for (let i = 0; i < 22; i++) {
    const a = rand() * Math.PI * 2;
    const r = 118 + rand() * 9;
    const s = 0.8 + rand() * 1.8;
    dummy.position.set(Math.cos(a) * r, 0.25 * s, Math.sin(a) * r);
    dummy.scale.set(s, s * 0.55, s * 0.8);
    dummy.rotation.set(rand(), rand() * 6, rand());
    dummy.updateMatrix();
    boulders.setMatrixAt(i, dummy.matrix);
  }
  scene.add(boulders);
}

function createStars(scene, bulbMat) {
  const starData = [
    [-11, 1.35, 101], [-37.5, 1.35, 45.5], [-76, 1.35, -66], [2.5, 1.35, -55], [15.5, 1.35, 38],
  ];
  const groups = [];
  const glowMap = makeGlowTexture();
  for (let i = 0; i < starData.length; i++) {
    const [x, y, z] = starData[i];
    const g = new THREE.Group();
    g.position.set(x, y, z);
    const star = addStar(g, 0.46, 0.12, 0, 0, 0, 0xffc95e, { emissiveIntensity: 0.95 });
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowMap, color: 0xffc86c, transparent: true, opacity: 0.24,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
    }));
    glow.scale.setScalar(1.55);
    g.add(glow);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.05, 32), new THREE.MeshBasicMaterial({
      color: 0xffd47a, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.85;
    g.add(ring);
    for (let j = 0; j < 4; j++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowMap, color: 0xffe1a1, transparent: true, opacity: 0.32,
        blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
      }));
      s.position.set((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.1, (Math.random() - 0.5) * 1.5);
      s.scale.setScalar(0.13 + Math.random() * 0.15);
      g.add(s);
    }
    scene.add(g);
    groups.push({ group: g, star, glow, ring, collected: false });
  }
  return {
    groups,
    collect(id) {
      const star = groups[id];
      if (!star || star.collected) return false;
      star.collected = true;
      star.group.visible = false;
      return true;
    },
    update(dt, elapsed) {
      groups.forEach((s, i) => {
        if (s.collected) return;
        s.star.rotation.y = elapsed * 1.2 + i;
        s.group.position.y = 1.35 + Math.sin(elapsed * 1.8 + i * 1.7) * 0.16;
        s.ring.rotation.z = elapsed * 0.5;
        s.ring.scale.setScalar(1 + Math.sin(elapsed * 2 + i) * 0.12);
      });
    },
  };
}

function clampLamp(value) {
  return Math.max(0, Math.min(1, value / 2.3));
}

// Freeze every non-animated standard-material mesh into one draw call per material.
// This is the difference between a beautiful toy and a park you can actually walk through.
function mergeStaticWorld(scene, dynamicRoots) {
  const skip = new Set();
  dynamicRoots.filter(Boolean).forEach((root) => {
    root.traverse((o) => skip.add(o));
  });
  scene.updateMatrixWorld(true);
  const buckets = new Map();
  scene.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || skip.has(o)) return;
    const material = o.material;
    if (!material || Array.isArray(material)) return;
    if (!material.isMeshStandardMaterial) return;
    if (material.transparent || material.map || material.alphaMap || material.emissiveMap || material.vertexColors) return;
    if (!o.geometry?.attributes?.position) return;
    if (!buckets.has(material)) buckets.set(material, []);
    buckets.get(material).push(o);
  });

  let removed = 0;
  let added = 0;
  buckets.forEach((meshes, material) => {
    if (meshes.length < 2) return;
    const geometries = [];
    for (const mesh of meshes) {
      try {
        let geo = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
        for (const name of Object.keys(geo.attributes)) {
          if (name !== 'position' && name !== 'normal' && name !== 'uv') geo.deleteAttribute(name);
        }
        if (!geo.attributes.normal) geo.computeVertexNormals();
        if (!geo.attributes.uv) {
          geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
        }
        geo.applyMatrix4(mesh.matrixWorld);
        geometries.push(geo);
      } catch (e) { /* keep the original mesh if a geometry cannot be normalized */ }
    }
    if (geometries.length < 2) return;
    let merged;
    try {
      merged = mergeGeometries(geometries, false);
    } catch (e) {
      merged = null;
    }
    if (!merged) return;
    merged.computeBoundingSphere();
    const mergedMesh = new THREE.Mesh(merged, material);
    mergedMesh.matrixAutoUpdate = false;
    mergedMesh.frustumCulled = false;
    mergedMesh.name = 'static-merged';
    scene.add(mergedMesh);
    meshes.forEach((mesh) => {
      mesh.parent?.remove(mesh);
      removed++;
    });
    added++;
  });
  return { removed, added };
}

export function createWorld(scene, renderer) {
  scene.fog = new THREE.FogExp2(0x0a1428, 0.0035);
  const colliders = [];
  const bulbMat = new THREE.MeshStandardMaterial({
    color: 0xfff1c8, emissive: 0xffbd66, emissiveIntensity: 2.0, roughness: 0.35, metalness: 0.2, toneMapped: false,
  });
  const warmWindowMat = new THREE.MeshBasicMaterial({
    map: makeWindowTexture(), transparent: true, side: THREE.DoubleSide, toneMapped: false,
    depthWrite: false,
  });

  // water and island
  const ocean = new THREE.Mesh(
    new THREE.PlaneGeometry(1700, 1700),
    new THREE.MeshStandardMaterial({ color: 0x020b14, roughness: 0.2, metalness: 0.78 }),
  );
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = -1.4;
  scene.add(ocean);

  const cliff = new THREE.Mesh(
    new THREE.CylinderGeometry(ISLAND_RADIUS, ISLAND_RADIUS + 4, 3.2, 96, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x3c3430, roughness: 0.98, side: THREE.DoubleSide }),
  );
  cliff.position.y = -1.55;
  scene.add(cliff);
  addTorus(scene, ISLAND_RADIUS + 0.2, 0.5, 5, 96, 0, -0.15, 0, 0x776a58, { rx: Math.PI / 2, roughness: 0.9 });

  const grassTexture = makeGrassTexture();
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  const island = new THREE.Mesh(
    new THREE.CircleGeometry(ISLAND_RADIUS, 128),
    new THREE.MeshStandardMaterial({ map: grassTexture, color: 0xffffff, roughness: 0.96, metalness: 0.01 }),
  );
  island.rotation.x = -Math.PI / 2;
  island.position.y = 0;
  scene.add(island);
  addTorus(scene, ISLAND_RADIUS - 3.5, 0.8, 5, 96, 0, 0.0, 0, 0x303b2b, { rx: Math.PI / 2, roughness: 1 });

  // fake distant shoreline reflection
  const horizonGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,228,175,.9)'), color: 0x8d8aa0, transparent: true,
    opacity: 0.23, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  }));
  horizonGlow.scale.set(640, 150, 1);
  horizonGlow.position.set(-160, 20, -400);
  scene.add(horizonGlow);

  // paths
  const pathMat = new THREE.MeshStandardMaterial({
    map: makePathTexture(), color: 0x9c907e, roughness: 0.94, metalness: 0.02,
    side: THREE.DoubleSide, emissive: 0x1a140d, emissiveIntensity: 0.08,
  });
  function addPath(points, width, colorLight = 0xbfae94) {
    const border = makeRibbon(points, width + 1.4, 0x736a58, { y: 0.013, samples: 100 });
    border.material = standard(0x6f6857, { roughness: 1 });
    scene.add(border);
    const mesh = makeRibbon(points, width, colorLight, { y: 0.032, samples: 100 });
    mesh.material = pathMat;
    scene.add(mesh);
    return mesh;
  }
  addPath([[0, 151], [0, 128], [0, 112], [0, 46], [0, 38]], 20);
  addPath([[-12, 46], [-28, 48], [-46, 47], [-49, 44]], 7);
  addPath([[-18, 48], [-38, 61], [-56, 77], [-60, 82]], 6);
  addPath([[16, 45], [34, 47], [52, 44], [58, 38]], 7);
  addPath([[25, 44], [45, 56], [60, 77], [62, 80]], 6);
  addPath([[-20, 34], [-35, 23], [-45, 8], [-50, -8]], 6.5);
  addPath([[24, 38], [27, 12], [31, -20], [26, -42], [24, -49]], 7);
  addPath([[-16, 40], [-28, 40], [-39, 42]], 5.5);
  addPath([[12, 43], [18, 44], [24, 48]], 5);
  // skyway promenades
  addPath([[-9, 98], [-16, 97.6], [-22, 98], [-26.4, 98.4], [-24, 100]], 4.2);
  addPath([[-24, 100], [-34, 99], [-44, 98], [-56, 95], [-66, 92], [-73, 90]], 5.2);
  // West-shore path from Black Sail Bay to the harbor bumper pool
  addPath([[24, -49], [-2, -54], [-14, -72], [-16, -84], [-16, -88], [-12, -94], [-8, -97]], 5.2);
  // Branch walks from the park to the four ring-train stations
  addPath([[0, 151], [0, 154]], 7.0);
  addPath([[100, 102], [106, 105], [109, 107]], 5.0);
  addPath([[-73, 90], [-88, 98], [-102, 104], [-107, 107]], 5.0);
  addPath([[-8, -97], [-4, -118], [-2, -142], [0, -151]], 5.0);
  addPath([[24, -42], [12, -44], [0, -45], [-14, -43.6], [-20, -42.8]], 4.2);
  // South Court and the expanded Cloud District
  addPath([[0, 151], [0, 140], [0, 132]], 18);
  addPath([[0, 132], [12, 128], [22, 124], [30, 124]], 6);
  // South Court west branch to the bumper pavilion
  addPath([[0, 132], [-8, 132], [-12, 132], [-15, 132]], 5.2);
  // East garden loop: flying planes, swings, and back to South Court
  addPath([[30, 124], [46, 124], [60, 122], [70, 122], [78, 122], [88, 118], [96, 110], [100, 102]], 5.2);
  addPath([[78, 122], [77, 128], [76, 134]], 4.4);
  addPath([[100, 102], [100, 110], [100, 116]], 4.4);
  addPath([[58, 38], [70, 44], [78, 52], [82, 57]], 6);
  addPath([[60, 77], [71, 68], [80, 60], [82, 57]], 5.5);
  addPath([[82, 57], [98, 57], [114, 48]], 4.5);
  // plaza
  const plazaBorder = new THREE.Mesh(new THREE.CircleGeometry(35.8, 72), standard(0x655b4a, { roughness: 1 }));
  plazaBorder.rotation.x = -Math.PI / 2;
  plazaBorder.position.set(0, 0.018, 20);
  scene.add(plazaBorder);
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(34.5, 72), pathMat);
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.set(0, 0.03, 20);
  scene.add(plaza);
  for (const r of [13.5, 20, 27.5]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.12, 72), new THREE.MeshBasicMaterial({ color: 0x8f7554, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.045, 20);
    scene.add(ring);
  }
  // plaza star inlay
  const inlay = new THREE.Mesh(new THREE.ShapeGeometry(starShape(5.2, 2.2, 8)), new THREE.MeshBasicMaterial({ color: 0xb4935e, transparent: true, opacity: 0.37, side: THREE.DoubleSide, depthWrite: false }));
  inlay.rotation.x = -Math.PI / 2;
  inlay.position.set(0, 0.052, 41);
  scene.add(inlay);
  const compass = new THREE.Mesh(new THREE.RingGeometry(3.1, 3.3, 40), new THREE.MeshBasicMaterial({ color: 0xbf9c62, transparent: true, opacity: 0.28, side: THREE.DoubleSide }));
  compass.rotation.x = -Math.PI / 2;
  compass.position.set(0, 0.05, 104);
  scene.add(compass);

  // South Court and the east Cloud forecourt
  const southBorder = new THREE.Mesh(new THREE.CircleGeometry(21, 64), standard(0x655b4a, { roughness: 1 }));
  southBorder.rotation.x = -Math.PI / 2;
  southBorder.position.set(14, 0.018, 132);
  scene.add(southBorder);
  const southCourt = new THREE.Mesh(new THREE.CircleGeometry(19.8, 64), pathMat);
  southCourt.rotation.x = -Math.PI / 2;
  southCourt.position.set(14, 0.032, 132);
  scene.add(southCourt);
  for (const r of [7.5, 13.2, 18.4]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.11, 64), new THREE.MeshBasicMaterial({ color: 0x8f7554, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(14, 0.05, 132);
    scene.add(ring);
  }
  const cloudBorder = new THREE.Mesh(new THREE.CircleGeometry(17, 64), standard(0x4d5148, { roughness: 1 }));
  cloudBorder.rotation.x = -Math.PI / 2;
  cloudBorder.position.set(76, 0.018, 48);
  scene.add(cloudBorder);
  const cloudCourt = new THREE.Mesh(new THREE.CircleGeometry(15.8, 64), pathMat);
  cloudCourt.rotation.x = -Math.PI / 2;
  cloudCourt.position.set(76, 0.032, 48);
  scene.add(cloudCourt);

  // flower beds
  const flowerBeds = [
    { x: -11, z: 101, rx: 3.5, rz: 2.5, count: 42, colors: [0xf2a0a8, 0xf6d187, 0xd8b7ef, 0xfff1ca] },
    { x: -25, z: 41, rx: 4.2, rz: 1.6, count: 32, colors: [0xe78c96, 0xf4ce92, 0xb6d7b1] },
    { x: 26, z: 41, rx: 4.2, rz: 1.6, count: 32, colors: [0xf0b39a, 0xe4d28d, 0xaacbe8] },
    { x: 11, z: 35, rx: 3.0, rz: 2.4, count: 20, colors: [0xe8a1c0, 0xf8dd9d] },
    { x: -45, z: 49, rx: 4.5, rz: 2.0, count: 26, colors: [0xe896a7, 0xf5d28f, 0xd2b6eb] },
    { x: 60, z: 40, rx: 4.0, rz: 2.0, count: 24, colors: [0x99d4db, 0xefd599, 0xe5a7b7] },
    { x: 4, z: -51, rx: 5.5, rz: 1.8, count: 22, colors: [0xe0b4d9, 0xadd9cd, 0xf2d298] },
    { x: -62, z: 84, rx: 4.8, rz: 1.8, count: 24, colors: [0xeaa3b1, 0xf5d49b, 0xcabddf] },
    { x: 0, z: 148, rx: 6.0, rz: 1.6, count: 28, colors: [0xe9b1c2, 0xf7dea2, 0xb7dbc6] },
    { x: 28, z: 131, rx: 3.2, rz: 1.4, count: 22, colors: [0xe7a0b8, 0xf2ce93, 0xa9cfe3] },
    { x: 92, z: 42, rx: 3.3, rz: 1.5, count: 22, colors: [0xecc1a1, 0xf2daa0, 0xa8d3d2] },
  ];
  flowerBeds.forEach((bed) => {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.18, 24), standard(0x392f26, { roughness: 1 }));
    base.scale.set(bed.rx, 1, bed.rz);
    base.position.set(bed.x, 0.11, bed.z);
    scene.add(base);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.055, 4, 28), standard(0x817459, { roughness: 0.9 }));
    rim.rotation.x = -Math.PI / 2;
    rim.scale.set(bed.rx, bed.rz, 1);
    rim.position.set(bed.x, 0.22, bed.z);
    scene.add(rim);
  });
  buildLandscape(scene, colliders, flowerBeds);

  // big structures
  const castle = createCastle(scene, bulbMat, warmWindowMat);
  colliders.push(castle.collider);
  const gate = createGate(scene, bulbMat);
  colliders.push(
    { type: 'rect', x: -13, z: 107, hx: 3.8, hz: 3.9 },
    { type: 'rect', x: 13, z: 107, hx: 3.8, hz: 3.9 },
    { type: 'rect', x: -24.5, z: 111.2, hx: 3.2, hz: 2.7 },
    { type: 'rect', x: 24.5, z: 111.2, hx: 3.2, hz: 2.7 },
  );
  const restaurant = createParkRestaurant(scene, bulbMat);
  colliders.push(restaurant.collider);

  // seven refined service kiosks along the main street
  FACILITY_SPOTS.filter((def) => def.kind !== 'restaurant').forEach((def) => {
    const fac = createFacilityKiosk(scene, bulbMat, def);
    colliders.push(fac.collider);
  });

  const props = createProps(scene, bulbMat, warmWindowMat);
  colliders.push(
    { type: 'circle', x: 11, z: 35, r: 2.5 },
    { type: 'circle', x: 34, z: 44, r: 2.2 },
  );

  // lights
  const hemi = new THREE.HemisphereLight(0x536796, 0x1b1412, 0.48);
  scene.add(hemi);
  const dirLight = new THREE.DirectionalLight(0x8aa0d2, 0.55);
  dirLight.position.set(-80, 120, 60);
  scene.add(dirLight);
  const pointLights = [];
  function point(color, intensity, distance, x, y, z) {
    const l = new THREE.PointLight(color, intensity, distance, 2);
    l.position.set(x, y, z);
    scene.add(l);
    pointLights.push({ light: l, base: intensity });
    return l;
  }
  point(0xffc086, 190, 58, 0, 8, 102);
  point(0xffc28a, 170, 55, 0, 7, 68);
  point(0xffc787, 380, 70, 0, 13, 31);
  point(0xffa77f, 170, 45, -48, 7, 32);
  point(0x83dcff, 250, 55, 58, 26, 18);
  point(0xffb15e, 170, 50, 62, 33, 65);
  point(0x61e0d0, 240, 62, 24, 6, -78);
  point(0x9d82ff, 140, 50, 76, 12, -28);

  // rides
  const rides = createRides(scene, { bulbMat, renderer });
  colliders.push(...rides.colliders);
  colliders.push({ type: 'circle', x: -2, z: -58, r: 2.4 });

  // lamp posts along street / plaza
  const lamps = [];
  [55, 70, 85, 100].forEach((z) => {
    lamps.push(createLamp(scene, bulbMat, -12.1, z));
    lamps.push(createLamp(scene, bulbMat, 12.1, z));
  });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    lamps.push(createLamp(scene, bulbMat, Math.cos(a) * 33.5, 20 + Math.sin(a) * 33.5, 3.2));
  }
  [[-52, 47], [-56, 17], [67, 38], [73, 54], [17, -48], [-8, 49], [49, 2], [-28, 44]].forEach(([x, z]) => lamps.push(createLamp(scene, bulbMat, x, z, 3.4)));
  [115, 130, 145].forEach((z) => {
    lamps.push(createLamp(scene, bulbMat, -12.1, z, 3.2));
    lamps.push(createLamp(scene, bulbMat, 12.1, z, 3.2));
  });
  [[20, 142], [32, 128], [52, 134], [74, 36], [92, 46], [114, 48]].forEach(([x, z]) => lamps.push(createLamp(scene, bulbMat, x, z, 3.3)));
  // strings of light across the street
  const bulbGeo = new THREE.SphereGeometry(0.115, 6, 5);
  const stringBulbs = [];
  [55, 69, 83, 97].forEach((z, idx) => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-14.8, 8.7, z),
      new THREE.Vector3(0, 6.9 - (idx % 2) * 0.3, z),
      new THREE.Vector3(14.8, 8.7, z),
    );
    const pts = curve.getPoints(40);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
    scene.add(new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0x4a3b38, transparent: true, opacity: 0.6 })));
    for (let i = 0; i < 24; i++) {
      const p = curve.getPoint(i / 23);
      const b = new THREE.Mesh(bulbGeo, bulbMat);
      b.position.copy(p);
      b.position.y -= 0.12;
      scene.add(b);
      stringBulbs.push(b);
    }
    // pennants
    const colors = [0xb9505e, 0xd5a055, 0x4f7b78, 0x705785];
    for (let i = 0; i < 9; i++) {
      const p = curve.getPoint((i + 0.5) / 9);
      const shape = new THREE.Shape();
      shape.moveTo(0, 0); shape.lineTo(0.55, 0); shape.lineTo(0.275, -0.85); shape.closePath();
      const flag = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], side: THREE.DoubleSide, roughness: 0.8 }));
      flag.position.copy(p).add(new THREE.Vector3(-0.2, -0.2, 0));
      scene.add(flag);
    }
  });

  // string lights around the plaza trees
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const p = new THREE.Vector3(Math.cos(a) * 31, 4.2, 20 + Math.sin(a) * 31);
    const tree = new THREE.Group();
    tree.position.copy(p);
    scene.add(tree);
    addCylinder(tree, 0.12, 0.16, 3.2, 5, 0, 1.6, 0, 0x3f3532);
    addSphere(tree, 0.26, 8, -0.5, 2.8, 0.1, 0xffe0a1, { material: bulbMat });
    addSphere(tree, 0.26, 8, 0.5, 2.8, -0.1, 0xffe0a1, { material: bulbMat });
    addBox(tree, 1.1, 0.06, 0.06, 0, 3.2, 0, 0x4d3c36);
  }

  // mascots
  const mascots = [
    createMascot('star', 8, 101, -0.4, { body: 0xf5e2c6, accent: 0xd45f74 }),
    createMascot('bear', -20.5, 58.5, 0.5, { body: 0xcda981, accent: 0xb04f5d }),
    createMascot('rabbit', 12, -52, 0.2, { body: 0xe8e0d5, accent: 0x9d7db8 }),
  ];
  scene.add(...mascots);

  // crowd, parade, stars
  const crowd = createCrowd(scene);
  const parade = buildParade(scene, bulbMat);
  const stars = createStars(scene, bulbMat);

  const castleSparkles = makeSparkles({ count: 260, center: [0, 28, 6], spread: [36, 44, 26], size: 0.62, color: 0xffd47a });
  scene.add(castleSparkles);
  const lakeSparkles = makeSparkles({ count: 90, center: [24, 2.8, -57], spread: [48, 5, 12], size: 0.38, color: 0x88e3b7 });
  scene.add(lakeSparkles);
  const plazaSparkles = makeSparkles({ count: 150, center: [0, 4, 28], spread: [52, 8, 42], size: 0.3, color: 0xffe1a2 });
  scene.add(plazaSparkles);
  const sparkleMats = [castleSparkles.material, lakeSparkles.material, plazaSparkles.material];
  const sparkleBases = sparkleMats.map((m) => m.opacity ?? 0.88);

  const mergeStats = mergeStaticWorld(scene, [
    rides.carousel.spin,
    rides.ferris.wheel,
    ...rides.coaster.cars,
    rides.teacups.spin,
    rides.lagoon.shipPivot,
    ...rides.lagoon.jets,
    ...rides.lagoon.ripples,
    ...rides.skyway.gondolas.map((g) => g.root),
    ...rides.balloon.balloons,
    rides.rainbow.slider,
    rides.swing.rotor,
    rides.planes.rotor,
    ...rides.bumper.cars.map((c) => c.group),
    rides.bumper.burst,
    ...rides.rapids.rafts.map((r) => r.group),
    ...rides.rapids.effects,
    ...rides.boats.boats.map((b) => b.group),
    ...rides.boats.effects,
    ...rides.train.dynamic,
    castle.castleStar,
    castle.starGlow,
    ...castle.flags,
    ...stars.groups.map((s) => s.group),
    ...parade.floats.map((f) => f.group),
    ...mascots,
  ]);

  // soft night fill so architecture and walkways keep their shape
  const ambient = new THREE.AmbientLight(PALETTES.night.ambientColor ?? 0x2c3550, PALETTES.night.ambient ?? 0.6);
  scene.add(ambient);
  const moonFill = new THREE.DirectionalLight(0x687fba, 0.42);
  moonFill.position.set(70, 90, -110);
  scene.add(moonFill);

  const world = {
    colliders,
    rides,
    stars,
    castle,
    gate,
    restaurant,
    props,
    crowd,
    parade,
    mascots,
    bulbMat,
    hemi,
    dirLight,
    ambient,
    pointLights,
    sparkleMats,
    mergeStats,
    envState: { lamp: 1, fireflies: 1, night: 1 },
    update(dt, elapsed, state = {}) {
      const lamp = clampLamp(state.lamp ?? 2.3);
      const fireflies = state.fireflies ?? 1;
      this.envState = { lamp, fireflies };
      bulbMat.emissiveIntensity = 0.28 + lamp * 1.9;
      pointLights.forEach(({ light, base }) => {
        light.intensity = base * (0.09 + lamp * 0.91);
      });
      castle.update(dt, elapsed);
      rides.update(dt, elapsed, state);
      crowd.update(dt, elapsed, state.playerX ?? 0, state.playerZ ?? 0);
      parade.update(dt, elapsed);
      stars.update(dt, elapsed);
      mascots.forEach((m, i) => {
        m.position.y = Math.sin(elapsed * 1.6 + i * 1.4) * 0.04;
        m.rotation.z = Math.sin(elapsed * 1.1 + i) * 0.012;
      });
      sparkleMats.forEach((mat, i) => {
        const base = sparkleBases[i] * (0.18 + fireflies * 0.82);
        mat.opacity = base * (0.8 + Math.sin(elapsed * 1.3 + i) * 0.2);
      });
      castleSparkles.rotation.y = elapsed * 0.005;
      lakeSparkles.position.y = Math.sin(elapsed * 0.35) * 0.1;
      plazaSparkles.rotation.y = -elapsed * 0.003;
      // animate windows / light show hue very subtly
      const horizonPulse = 0.5 + Math.sin(elapsed * 0.3) * 0.04;
      horizonGlow.material.opacity = 0.16 + horizonPulse * 0.1;
    },
  };
  return world;
}

