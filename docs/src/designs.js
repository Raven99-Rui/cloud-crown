import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus,
  cylinderBetween, makeCanvasPlaneTexture, makeSign, makeRibbon,
} from './builders.js';

const GOLD = 0xd2a65c;
const GOLD_LIGHT = 0xf2d491;
const CREAM = 0xf1dfc2;
const CREAM_DK = 0xd6bd97;
const CRIMSON = 0x8e2030;
const TEAL = 0x2a7779;
const TEAL_DK = 0x155055;
const WINE = 0xb34a58;
const IRON = 0x2a3038;

const UP = new THREE.Vector3(0, 1, 0);

function addBulb(parent, x, y, z, size, bulbMat) {
  return addSphere(parent, size, 7, x, y, z, 0xffe0a0, { material: bulbMat });
}

/* ---------------------------------------------------------------- Cloud Crown */

function makeBalloonTexture(primary, secondary, accent) {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = secondary;
    ctx.fillRect(0, 0, w, h);
    const cols = 8;
    for (let i = 0; i < cols; i++) {
      ctx.fillStyle = i % 2 ? primary : secondary;
      ctx.fillRect((i / cols) * w, 0, w / cols + 1, h);
      ctx.strokeStyle = 'rgba(247,221,171,.5)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo((i / cols) * w, 0);
      ctx.bezierCurveTo(w * 0.36, h * 0.32, w * 0.64, h * 0.68, (i / cols) * w, h);
      ctx.stroke();
    }
    // painted zodiac blossoms and a belt
    ctx.strokeStyle = accent;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.64);
    ctx.bezierCurveTo(w * 0.28, h * 0.6, w * 0.72, h * 0.7, w, h * 0.62);
    ctx.stroke();
    for (let i = 0; i < 5; i++) {
      const x = w * (0.12 + i * 0.19);
      const y = h * (0.46 + (i % 2) * 0.08);
      ctx.strokeStyle = 'rgba(250,226,178,.7)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.032, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - w * 0.055, y);
      ctx.lineTo(x + w * 0.055, y);
      ctx.moveTo(x, y - w * 0.055);
      ctx.lineTo(x, y + w * 0.055);
      ctx.stroke();
    }
    const shade = ctx.createLinearGradient(0, 0, 0, h);
    shade.addColorStop(0, 'rgba(255,250,226,.25)');
    shade.addColorStop(0.55, 'rgba(0,0,0,0)');
    shade.addColorStop(1, 'rgba(0,0,0,.28)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, w, h);
  }, 512, 512);
}

function createBalloonCar(parent, bulbMat, texture, index) {
  const g = new THREE.Group();
  g.position.set(0, 0, 0);
  parent.add(g);
  const mat = new THREE.MeshStandardMaterial({
    map: texture, color: 0xffffff, roughness: 0.54, metalness: 0.1,
    emissiveMap: texture, emissive: 0xffb070, emissiveIntensity: 0.52,
    side: THREE.DoubleSide,
  });
  const envelope = new THREE.Mesh(new THREE.SphereGeometry(3.55, 24, 18), mat);
  envelope.scale.set(1, 1.38, 1);
  envelope.position.y = 7.2;
  g.add(envelope);
  // neck and gilded crown
  addCylinder(g, 2.0, 1.1, 1.2, 16, 0, 4.0, 0, IRON, { roughness: 0.7, metalness: 0.25 });
  addCylinder(g, 0.8, 0.5, 1.0, 10, 0, 3.3, 0, WINE, { roughness: 0.55 });
  addTorus(g, 3.1, 0.075, 4, 28, 0, 6.5, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  addTorus(g, 2.2, 0.055, 4, 24, 0, 3.85, 0, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  addSphere(g, 0.28, 8, 0, 11.7, 0, GOLD_LIGHT, { emissive: 0xffc55e, emissiveIntensity: 1.6, metalness: 0.35 });
  addCylinder(g, 0.04, 0.06, 0.9, 5, 0, 12.2, 0, GOLD, { metalness: 0.5 });
  addCylinder(g, 0.028, 0.032, 10.0, 4, 0, 17.0, 0, GOLD, { metalness: 0.45, roughness: 0.3 });
  // basket and warm cabin
  addCylinder(g, 1.65, 1.35, 0.22, 14, 0, 1.3, 0, GOLD, { metalness: 0.4, roughness: 0.35 });
  addCylinder(g, 1.35, 1.12, 1.5, 12, 0, 0.55, 0, 0x5b3c28, { roughness: 0.82 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addCylinder(g, 0.04, 0.05, 1.6, 4, Math.cos(a) * 1.25, 0.55, Math.sin(a) * 1.25, GOLD, { metalness: 0.35 });
  }
  addTorus(g, 1.35, 0.06, 4, 20, 0, 1.33, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.45 });
  addSphere(g, 0.16, 7, 0, 1.35, 0, 0xffd58a, { material: bulbMat });
  for (const sx of [-1, 1]) {
    cylinderBetween(
      g,
      new THREE.Vector3(sx * 0.9, 2.2, 0),
      new THREE.Vector3(sx * 2.2, 3.7, 0),
      0.035, GOLD, { segments: 4, metalness: 0.4 },
    );
  }
  g.userData.index = index;
  g.userData.baseY = 0;
  return g;
}

export function createCloudCrown(scene, bulbMat) {
  const center = new THREE.Vector3(82, 0, 56);
  const g = new THREE.Group();
  g.position.copy(center);
  scene.add(g);

  // stone terrace and stair
  const base = addCylinder(g, 18.2, 19.4, 0.95, 32, 0, 0.5, 0, 0x65584b, { roughness: 0.94 });
  base.scale.z = 0.9;
  addCylinder(g, 17.0, 18.0, 1.25, 32, 0, 1.55, 0, TEAL_DK, { roughness: 0.8 });
  addCylinder(g, 16.7, 16.7, 0.25, 32, 0, 2.2, 0, CREAM, { roughness: 0.7 });
  addCylinder(g, 17.0, 17.0, 0.12, 32, 0, 2.35, 0, GOLD, { metalness: 0.35 });
  for (let i = 0; i < 5; i++) {
    addBox(g, 1.0, 0.32, 9.0, -17.8 - i * 0.95, 0.16 + i * 0.3, 0, i % 2 ? CREAM : CREAM_DK);
    addBox(g, 0.96, 0.06, 9.1, -17.8 - i * 0.95, 0.33 + i * 0.3, 0, GOLD, { metalness: 0.3 });
  }
  for (const sz of [-1, 1]) {
    addBox(g, 5.2, 0.8, 0.22, -18.8, 0.74, sz * 4.7, GOLD, { metalness: 0.35 });
  }

  // perimeter columns, banners and pavilions
  const pavilions = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + Math.PI / 12;
    const x = Math.cos(a) * 13.4;
    const z = Math.sin(a) * 12.1;
    addCylinder(g, 0.16, 0.24, 4.8, 8, x, 4.8, z, CREAM, { roughness: 0.55 });
    addSphere(g, 0.13, 6, x, 7.25, z, 0xffe0a2, { material: bulbMat });
    if (i % 3 === 0) {
      addBox(g, 1.7, 0.8, 0.12, x, 3.4, z, WINE, { ry: -a, roughness: 0.6 });
    }
  }
  addTorus(g, 13.35, 0.06, 4, 56, 0, 3.7, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 }).scale.set(1, 0.9, 1);
  for (const a of [Math.PI * 0.25, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75]) {
    const x = Math.cos(a) * 10.8;
    const z = Math.sin(a) * 9.7;
    for (const [ox, oz] of [[-2.2, -1.5], [2.2, -1.5], [-2.2, 1.5], [2.2, 1.5]]) {
      addCylinder(g, 0.11, 0.17, 3.6, 6, x + ox, 4.0, z + oz, CREAM, { roughness: 0.55 });
    }
    // striped pavilion tent
    for (let k = 0; k < 10; k++) {
      addCone(g, 3.9, 2.0, 1, x, 6.6, z, k % 2 ? CREAM : WINE, {
        thetaStart: (k / 10) * Math.PI * 2, thetaLength: Math.PI * 0.2,
        openEnded: true, side: THREE.DoubleSide, roughness: 0.72, flat: true,
      });
    }
    addSphere(g, 0.24, 8, x, 7.8, z, GOLD_LIGHT, { emissive: 0xffc45e, emissiveIntensity: 1.4 });
    pavilions.push({ x, z });
  }

  // central tower shaft
  addCylinder(g, 5.4, 6.3, 3.2, 16, 0, 4.0, 0, TEAL, {
    roughness: 0.6, emissive: 0x0a3032, emissiveIntensity: 0.5,
  });
  addCylinder(g, 4.1, 5.2, 8.0, 16, 0, 9.4, 0, CREAM, { roughness: 0.55 });
  addCylinder(g, 3.0, 4.1, 13.0, 16, 0, 19.9, 0, TEAL, {
    roughness: 0.55, emissive: 0x0a3032, emissiveIntensity: 0.5,
  });
  addCylinder(g, 1.6, 2.7, 15.0, 12, 0, 33.9, 0, CREAM, { roughness: 0.5 });
  for (const y of [6.2, 13.4, 21.2, 29.0, 36.4, 43.0]) {
    addCylinder(g, 4.5 - (y / 72) * 2.2, 4.7 - (y / 72) * 2.2, 0.22, 16, 0, y, 0, GOLD, { metalness: 0.4 });
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      cylinderBetween(
        g,
        new THREE.Vector3(sx * 3.8, 5.1, sz * 3.8),
        new THREE.Vector3(sx * 1.1, 48.0, sz * 1.1),
        0.11, GOLD, { segments: 5, metalness: 0.38 },
      );
    }
  }
  // star crest facing the main path
  addStar(g, 1.4, 0.3, 0, 12.0, 5.6, 0xffd06b, { emissiveIntensity: 1.4, metalness: 0.4 });
  addCylinder(g, 0.4, 0.4, 2.6, 8, 0, 51.0, 0, GOLD, { metalness: 0.45 });

  // Great striped canopy where the eight cloud ropes are tied.
  const canopyBase = 29.4;
  const canopyRadius = 17.2;
  const canopyHeight = 8.2;
  for (let i = 0; i < 16; i++) {
    const color = i % 4 === 0 ? CRIMSON : i % 4 === 2 ? TEAL : CREAM;
    addCone(g, canopyRadius, canopyHeight, 1, 0, canopyBase + canopyHeight / 2, 0, color, {
      thetaStart: (i / 16) * Math.PI * 2, thetaLength: Math.PI / 8,
      openEnded: true, side: THREE.DoubleSide, roughness: 0.7, flat: true,
      emissive: color, emissiveIntensity: i % 2 ? 0.22 : 0.38,
    });
  }
  addTorus(g, canopyRadius * 0.99, 0.22, 5, 64, 0, canopyBase, 0, GOLD, {
    rx: Math.PI / 2, metalness: 0.45, roughness: 0.3,
  });
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    addBulb(g, Math.cos(a) * canopyRadius * 0.99, canopyBase + 0.05, Math.sin(a) * canopyRadius * 0.99, 0.11, bulbMat);
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    addBox(g, 1.8, 0.55, 0.1, Math.cos(a) * 16.5, canopyBase - 0.35, Math.sin(a) * 16.5, i % 2 ? CRIMSON : WINE, {
      ry: -a + Math.PI / 2, roughness: 0.58,
    });
  }
  addCylinder(g, 3.6, 2.5, 3.0, 12, 0, canopyBase + canopyHeight + 0.8, 0, TEAL, {
    roughness: 0.55, emissive: 0x0a3032, emissiveIntensity: 0.4,
  });
  addCylinder(g, 2.7, 3.5, 0.4, 12, 0, canopyBase + canopyHeight + 2.5, 0, GOLD, { metalness: 0.4 });
  addSphere(g, 1.5, 14, 0, canopyBase + canopyHeight + 3.6, 0, WINE, { sy: 0.7, roughness: 0.5 });
  addSphere(g, 0.27, 8, 0, canopyBase + canopyHeight + 5.0, 0, GOLD_LIGHT, { emissive: 0xffc363, emissiveIntensity: 1.6 });
  addStar(g, 0.95, 0.22, 0, canopyBase + canopyHeight + 5.7, 0, 0xffd16b, { emissiveIntensity: 1.7 });

  // crown ring and eight arms
  addCylinder(g, 3.8, 3.8, 0.5, 28, 0, 50.8, 0, GOLD, { metalness: 0.38 });
  addTorus(g, 13.8, 0.24, 5, 56, 0, 51.4, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  addTorus(g, 15.8, 0.12, 4, 56, 0, 51.4, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = Math.cos(a) * 8.0;
    const z = Math.sin(a) * 8.0;
    cylinderBetween(
      g,
      new THREE.Vector3(Math.cos(a) * 4.2, 51.0, Math.sin(a) * 4.2),
      new THREE.Vector3(Math.cos(a) * 16.1, 51.4, Math.sin(a) * 16.1),
      0.16, GOLD, { segments: 6, metalness: 0.42 },
    );
    addBulb(g, Math.cos(a) * 16.0, 51.0, Math.sin(a) * 16.0, 0.14, bulbMat);
    addStar(g, 0.48, 0.12, Math.cos(a) * 16.0, 52.4, Math.sin(a) * 16.0, 0xffd16b, {
      emissiveIntensity: 1.3, ry: -a,
    });
  }
  // spire and beacon
  addCylinder(g, 0.12, 0.9, 14.0, 8, 0, 57.8, 0, GOLD, { metalness: 0.45 });
  addTorus(g, 3.6, 0.09, 4, 32, 0, 55.5, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addCone(g, 0.9, 2.3, 6, Math.cos(a) * 3.2, 56.2, Math.sin(a) * 3.2, i % 2 ? GOLD : GOLD_LIGHT, {
      ry: -a, metalness: 0.4,
    });
  }
  addStar(g, 2.2, 0.6, 0, 64.8, 0, 0xffd274, { emissiveIntensity: 2.2, metalness: 0.42 });
  addSphere(g, 0.65, 10, 0, 67.3, 0, GOLD_LIGHT, { emissive: 0xffc45e, emissiveIntensity: 2.1 });

  // signage
  const sign = makeSign({
    text: '云上星穹', sub: 'THE CLOUD CROWN · ATTRACTION 08', worldWidth: 9.0, worldHeight: 1.7,
    bg: 'rgba(18,47,48,.92)', border: 'rgba(229,190,111,.66)', color: '#fff0cc', subColor: '#dfbd7b',
    width: 1024, height: 220, font: '600 82px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 28px "Avenir Next", sans-serif',
  });
  sign.position.set(-15.6, 5.8, 0);
  sign.rotation.y = -Math.PI / 2;
  g.add(sign);
  const routeSign = makeSign({
    text: '八朵云舟 · 各自升空', sub: 'EIGHT CLOUDS · EIGHT ALTITUDES', worldWidth: 5.2, worldHeight: 1.0,
    bg: 'rgba(84,31,42,.84)', border: 'rgba(226,186,108,.5)', color: '#ffe9c6', subColor: '#d5b274',
    width: 720, height: 150, star: false, font: '500 54px "Microsoft YaHei", sans-serif',
    subFont: '500 20px "Avenir Next", sans-serif',
  });
  routeSign.position.set(-16.3, 3.9, 0);
  routeSign.rotation.y = -Math.PI / 2;
  g.add(routeSign);

  // garden lamps and bulbs
  for (const [x, z] of [[-14, -8], [-14, 8], [14, -8], [14, 8], [0, -14], [0, 14]]) {
    addCylinder(g, 0.08, 0.12, 3.2, 6, x, 1.6, z, TEAL_DK);
    addBulb(g, x, 3.3, z, 0.2, bulbMat);
    addCone(g, 0.3, 0.4, 6, x, 3.55, z, GOLD, { metalness: 0.3 });
  }
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    addBulb(g, Math.cos(a) * 16.6, 2.55, Math.sin(a) * 15.0, 0.1, bulbMat);
  }

  const balloonTextures = [
    makeBalloonTexture('#a9374a', '#f1dfc1', '#f0c778'),
    makeBalloonTexture('#1d5f63', '#efd8b2', '#d9b15d'),
    makeBalloonTexture('#7d5a91', '#f0ddbe', '#eac074'),
    makeBalloonTexture('#9f7c3e', '#f3e5ca', '#b33a46'),
  ];
  const balloons = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const car = createBalloonCar(g, bulbMat, balloonTextures[i % balloonTextures.length], i);
    car.position.set(Math.cos(a) * 15.6, 7.4 + (i % 4) * 1.6, Math.sin(a) * 15.6);
    car.rotation.y = -a + Math.PI;
    car.userData.homeY = car.position.y;
    balloons.push(car);
  }

  return {
    group: g,
    center,
    balloons,
    colliders: [{ type: 'circle', x: center.x, z: center.z, r: 20.5 }],
    marker: new THREE.Vector3(center.x, 60, center.z),
    update(dt, elapsed) {
      for (const car of balloons) {
        const i = car.userData.index;
        car.position.y = car.userData.homeY + Math.sin(elapsed * 0.32 + i * 1.7) * 1.15;
        car.rotation.y += dt * 0.008;
        car.rotation.z = Math.sin(elapsed * 0.45 + i) * 0.012;
      }
    },
  };
}

/* --------------------------------------------------------------- Rainbow Chute */

function makeSlideGeometry(points, width) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.35);
  const segments = 48;
  const positions = [];
  const uvs = [];
  const indices = [];
  const lefts = [];
  const rights = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const side = new THREE.Vector3().crossVectors(tangent, UP).normalize();
    const half = width * 0.5;
    const l = p.clone().addScaledVector(side, -half);
    const r = p.clone().addScaledVector(side, half);
    lefts.push(l);
    rights.push(r);
    positions.push(l.x, l.y, l.z, r.x, r.y, r.z);
    uvs.push(0, t * 3, 1, t * 3);
    if (i < segments) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return { geo, curve, lefts, rights };
}

function createSlider(parent, bulbMat, index) {
  const g = new THREE.Group();
  parent.add(g);
  addBox(g, 1.1, 0.16, 0.65, 0, 0.05, 0, GOLD, { metalness: 0.45, roughness: 0.3 });
  addBox(g, 0.8, 0.2, 0.48, 0, 0.18, 0, 0x6b2940, { roughness: 0.55 });
  addSphere(g, 0.1, 6, 0, 0.1, 0.3, 0xffd38a, { material: bulbMat });
  addBox(g, 0.06, 0.6, 0.06, -0.46, 0.4, 0, GOLD, { metalness: 0.4 });
  addBox(g, 0.06, 0.6, 0.06, 0.46, 0.4, 0, GOLD, { metalness: 0.4 });
  g.visible = index === 0;
  return g;
}

export function createRainbowChute(scene, bulbMat) {
  const center = new THREE.Vector3(38, 0, 138);
  const g = new THREE.Group();
  g.position.copy(center);
  scene.add(g);
  const laneColors = [0xc42e37, 0xcc641d, 0xd8a01d, 0x2d8a55, 0x2474a8, 0x5c459c];
  const laneGlow = [0xff7a6c, 0xffb166, 0xffdd7c, 0x7be0a0, 0x7cd6ff, 0xb9a3ff];
  const laneOffset = [-5.45, -3.27, -1.09, 1.09, 3.27, 5.45];

  // raised stone court
  const base = addCylinder(g, 15.8, 17.0, 0.8, 28, 0, 0.4, 0, 0x66594b, { roughness: 0.94 });
  base.scale.z = 0.88;
  addCylinder(g, 14.9, 15.8, 0.32, 28, 0, 0.95, 0, CREAM, { roughness: 0.75 });
  addCylinder(g, 15.2, 15.2, 0.1, 28, 0, 1.14, 0, GOLD, { metalness: 0.35 });
  for (let i = 0; i < 4; i++) {
    addBox(g, 1.0, 0.3, 7.2, -15.6 - i * 0.95, 0.15 + i * 0.28, 0, i % 2 ? CREAM : CREAM_DK);
  }

  // tower body at the back of the court
  const tz = 6.1;
  addCylinder(g, 7.2, 8.1, 1.2, 8, 0, 1.5, tz, TEAL_DK, { roughness: 0.7 });
  addCylinder(g, 6.1, 6.8, 4.0, 8, 0, 4.0, tz, CREAM, { roughness: 0.55 });
  addCylinder(g, 5.2, 6.0, 10.0, 8, 0, 11.0, tz, TEAL, {
    roughness: 0.55, emissive: 0x0a3032, emissiveIntensity: 0.55,
  });
  for (const y of [6.2, 9.0, 12.0, 15.0]) {
    addCylinder(g, 5.9, 5.9, 0.17, 8, 0, y, tz, GOLD, { metalness: 0.4 });
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      addCylinder(g, 0.17, 0.24, 13.0, 7, sx * 4.5, 8.2, tz + sz * 3.6, CREAM, { roughness: 0.5 });
      cylinderBetween(
        g,
        new THREE.Vector3(sx * 5.0, 1.8, tz + sz * 4.1),
        new THREE.Vector3(sx * 4.0, 17.0, tz + sz * 3.2),
        0.08, GOLD, { segments: 5, metalness: 0.4 },
      );
    }
  }
  // top gallery and striped domes
  addCylinder(g, 7.2, 6.0, 0.5, 8, 0, 16.2, tz, GOLD, { metalness: 0.35 });
  addCylinder(g, 5.7, 6.3, 1.3, 8, 0, 17.2, tz, CREAM, { roughness: 0.6 });
  for (let i = 0; i < 12; i++) {
    const domeColor = i % 2 ? WINE : CREAM;
    addCone(g, 6.2, 2.4, 1, 0, 19.0, tz, domeColor, {
      thetaStart: (i / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
      openEnded: true, side: THREE.DoubleSide, roughness: 0.68, flat: true,
      emissive: domeColor, emissiveIntensity: i % 2 ? 0.55 : 0.22,
    });
  }
  addSphere(g, 0.34, 8, 0, 21.1, tz, GOLD_LIGHT, { emissive: 0xffc45e, emissiveIntensity: 1.6 });
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      addCylinder(g, 1.5, 1.8, 1.2, 8, sx * 4.8, 16.0, tz + sz * 3.2, CREAM, { roughness: 0.6 });
      for (let k = 0; k < 8; k++) {
        addCone(g, 2.0, 1.1, 1, sx * 4.8, 17.8, tz + sz * 3.2, k % 2 ? CREAM : WINE, {
          thetaStart: (k / 8) * Math.PI * 2, thetaLength: Math.PI / 4,
          openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.7,
          emissive: k % 2 ? CREAM : WINE, emissiveIntensity: 0.7,
        });
      }
      addSphere(g, 0.16, 6, sx * 4.8, 18.5, tz + sz * 3.2, GOLD_LIGHT, { emissive: 0xffc45e, emissiveIntensity: 1.2 });
    }
  }
  // central medallion
  addCylinder(g, 1.8, 1.8, 0.18, 20, 0, 12.0, tz - 4.0, GOLD, { metalness: 0.4 });
  addStar(g, 1.2, 0.14, 0, 12.0, tz - 4.12, 0xffd071, { ry: Math.PI, emissiveIntensity: 1.3 });

  // six chutes and gold lips
  const slides = [];
  const topZ = tz - 1.0;
  for (let i = 0; i < 6; i++) {
    const x = laneOffset[i];
    const pts = [
      new THREE.Vector3(x * 0.84, 15.6, topZ + 1.1),
      new THREE.Vector3(x * 0.88, 14.8, topZ - 0.6),
      new THREE.Vector3(x * 1.02, 12.3, topZ - 3.2),
      new THREE.Vector3(x * 1.12, 8.6, topZ - 6.0),
      new THREE.Vector3(x * 1.18, 4.5, topZ - 9.1),
      new THREE.Vector3(x * 1.24, 1.4, topZ - 12.0),
      new THREE.Vector3(x * 1.28, 0.72, topZ - 13.8),
    ];
    const { geo, curve, lefts, rights } = makeSlideGeometry(pts, 1.65);
    const mat = new THREE.MeshStandardMaterial({
      color: laneColors[i], roughness: 0.16, metalness: 0.22, transparent: true, opacity: 0.82,
      emissive: laneGlow[i], emissiveIntensity: 0.16, side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 1;
    g.add(mesh);
    for (const side of [lefts, rights]) {
      const edge = new THREE.CatmullRomCurve3(side);
      const edgeMesh = new THREE.Mesh(
        new THREE.TubeGeometry(edge, 32, 0.075, 5, false),
        new THREE.MeshStandardMaterial({ color: GOLD, roughness: 0.3, metalness: 0.58 }),
      );
      g.add(edgeMesh);
    }
    // little warm garland above each run
    for (let k = 1; k < 8; k++) {
      const p = curve.getPointAt(k / 8);
      addBulb(g, p.x, p.y + 0.28, p.z, 0.075, bulbMat);
    }
    slides.push({ curve, mesh, index: i });
  }

  // stairs up the west side
  for (let i = 0; i < 17; i++) {
    addBox(g, 2.4, 0.7, 1.08, -8.0, 0.45 + i * 0.92, tz - 4.4 + i * 0.72, i % 2 ? CREAM : CREAM_DK);
    if (i % 2 === 0) addBulb(g, -9.3, 1.05 + i * 0.92, tz - 4.2 + i * 0.72, 0.08, bulbMat);
  }
  for (const sx of [-1, 1]) {
    cylinderBetween(
      g,
      new THREE.Vector3(-8.0 + sx * 1.45, 1.1, tz - 5.0),
      new THREE.Vector3(-8.0 + sx * 1.45, 17.2, tz + 7.1),
      0.06, GOLD, { segments: 5, metalness: 0.4 },
    );
  }

  // entrance arch and signs facing the central avenue
  for (const sx of [-1, 1]) {
    addCylinder(g, 0.12, 0.2, 6.0, 6, sx * 4.8, 3.0, tz - 14.2, GOLD, { metalness: 0.35 });
    addCone(g, 0.32, 0.7, 6, sx * 4.8, 6.25, tz - 14.2, WINE);
  }
  addBox(g, 9.8, 0.15, 0.2, 0, 5.9, tz - 14.2, GOLD, { metalness: 0.4 });
  const sign = makeSign({
    text: '彩虹滑道机', sub: 'THE RAINBOW CHUTE · SOUTH COURT 09', worldWidth: 8.0, worldHeight: 1.5,
    bg: 'rgba(24,61,58,.9)', border: 'rgba(229,190,111,.64)', color: '#fff0cc', subColor: '#dfbd7b',
    width: 1024, height: 210, font: '600 82px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 27px "Avenir Next", sans-serif',
  });
  sign.position.set(0, 5.0, tz - 14.05);
  sign.rotation.y = Math.PI;
  g.add(sign);
  const towerSign = makeSign({
    text: '彩虹滑道机', sub: 'THE RAINBOW CHUTE', worldWidth: 7.0, worldHeight: 1.35,
    bg: 'rgba(19,55,52,.88)', border: 'rgba(232,196,121,.7)', color: '#fff0cc', subColor: '#e0bd7d',
    width: 900, height: 190, font: '600 78px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 26px "Avenir Next", sans-serif',
  });
  towerSign.position.set(0, 15.6, tz - 6.1);
  towerSign.rotation.y = Math.PI;
  g.add(towerSign);
  const routeSign = makeSign({
    text: '六条琉璃滑道 · 选一条夏天', sub: 'SIX LANES OF SUMMER', worldWidth: 4.8, worldHeight: 0.9,
    bg: 'rgba(87,30,39,.82)', border: 'rgba(226,186,108,.5)', color: '#ffe9c6', subColor: '#d5b274',
    width: 720, height: 150, star: false, font: '500 48px "Microsoft YaHei", sans-serif',
    subFont: '500 20px "Avenir Next", sans-serif',
  });
  routeSign.position.set(0, 3.6, tz - 14.1);
  routeSign.rotation.y = Math.PI;
  g.add(routeSign);

  // gardens and lamps
  for (const [x, z] of [[-12, -10], [12, -10], [-12, 8], [12, 8], [0, -15]]) {
    addCylinder(g, 0.08, 0.12, 3.0, 6, x, 1.5, z, TEAL_DK);
    addBulb(g, x, 3.15, z, 0.18, bulbMat);
    addCone(g, 0.28, 0.4, 6, x, 3.4, z, GOLD, { metalness: 0.3 });
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    addBulb(g, Math.cos(a) * 14.8, 1.45, Math.sin(a) * 13.0, 0.09, bulbMat);
  }

  const slider = createSlider(g, bulbMat, 0);
  slider.position.copy(slides[0].curve.getPointAt(0));
  let sliderT = 0;

  return {
    group: g,
    center,
    slides,
    colliders: [
      { type: 'rect', x: 38, z: 140, hx: 11, hz: 8 },
      { type: 'rect', x: 38, z: 130, hx: 9, hz: 7 },
    ],
    marker: new THREE.Vector3(center.x, 26, center.z),
    slider,
    update(dt, elapsed) {
      sliderT = (sliderT + dt * 0.11) % 1;
      const lane = slides[3];
      const p = lane.curve.getPointAt(sliderT);
      slider.position.copy(p);
      slider.position.y += 0.28;
      const ahead = lane.curve.getPointAt(Math.min(0.999, sliderT + 0.01));
      slider.lookAt(ahead);
      slider.rotation.y += Math.PI / 2;
      slider.visible = sliderT < 0.92;
    },
  };
}
