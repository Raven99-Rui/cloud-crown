import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addPlane, addSphere, addStar, addTorus,
  cylinderBetween, makeCanvasPlaneTexture, makeGlowTexture, makeSign, standard,
} from './builders.js';
import { carouselKit } from './carousel.js';

const {
  makeHorse, makeChariot, makeRiderFigure, mergeGroup, addBulbInstances,
  textureMaterial, makeCanopyTexture, makeValanceTexture, makeInnerCanopyTexture,
  makeDeckTexture, makeBaseTexture, makeColumnTexture, makeFence, makeQueue, makeLamp,
  GOLD, GOLD_LIGHT, GOLD_DARK, CREAM, CRIMSON, WOOD, IRON,
} = carouselKit;

const UPPER_Y = 5.25;
const TOP_LIFT = 1.0;

function angleNear(a, b, width = 0.16) {
  const d = Math.atan2(Math.sin(a - b), Math.cos(a - b));
  return Math.abs(d) < width;
}

function makeMedallionTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const cy = h / 2;
    ctx.fillStyle = '#ecd7ad';
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.43, h * 0.41, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d7af6b';
    ctx.lineWidth = 9;
    ctx.stroke();
    ctx.strokeStyle = '#3f7574';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.35, h * 0.33, 0, 0, Math.PI * 2);
    ctx.stroke();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * w * 0.13, cy + Math.sin(a) * h * 0.1, w * 0.08, h * 0.026, a, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 ? '#f6dfa8' : '#e4bd78';
      ctx.fill();
    }
    ctx.fillStyle = '#fff1c8';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#c9974d';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.075, 0, Math.PI * 2);
    ctx.stroke();
  }, 256, 180);
}

function makeDoubleEntrance(group, bulbMat) {
  const entrance = new THREE.Group();
  group.add(entrance);
  const x = 14.8;

  // shallow stone steps, kept low so the two-storey face stays visible
  addBox(entrance, 2.2, 0.2, 8.0, 13.2, 0.1, 0, 0x817461, { roughness: 0.95 });
  addBox(entrance, 1.5, 0.22, 7.0, 14.0, 0.3, 0, 0x8d7c68, { roughness: 0.95 });
  addBox(entrance, 0.9, 0.24, 5.6, 14.6, 0.52, 0, 0x9a8770, { roughness: 0.9 });
  addBox(entrance, 0.35, 0.22, 4.2, 15.0, 0.72, 0, 0xb09672, { roughness: 0.85 });

  for (const z of [-4.25, 4.25]) {
    addBox(entrance, 0.82, 0.3, 0.82, x, 0.15, z, 0x493138, { roughness: 0.75 });
    addBox(entrance, 0.54, 0.36, 0.54, x, 0.42, z, GOLD_DARK, { roughness: 0.4, metalness: 0.4 });
    addCylinder(entrance, 0.2, 0.25, 2.9, 10, x, 1.88, z, 0x64353b, { roughness: 0.55, metalness: 0.18 });
    addTorus(entrance, 0.33, 0.07, 5, 16, x, 0.72, z, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
    addTorus(entrance, 0.27, 0.055, 5, 16, x, 3.36, z, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
    addBox(entrance, 0.56, 0.22, 0.56, x, 3.55, z, GOLD, { roughness: 0.3, metalness: 0.7 });
    addSphere(entrance, 0.17, 10, x, 3.84, z, GOLD_LIGHT, { roughness: 0.25, metalness: 0.65 });
    addCone(entrance, 0.055, 0.28, 5, x, 4.14, z, 0xf8dd9a, { roughness: 0.25, metalness: 0.6 });
    // side lanterns
    addCylinder(entrance, 0.065, 0.065, 0.35, 6, x + 0.5, 3.15, z, IRON);
    addCone(entrance, 0.2, 0.18, 6, x + 0.5, 3.46, z, GOLD, { roughness: 0.3, metalness: 0.7 });
    addSphere(entrance, 0.18, 9, x + 0.5, 3.0, z, 0xffdfa0, { material: bulbMat });
    addCone(entrance, 0.16, 0.18, 6, x + 0.5, 2.74, z, 0x5f2d34);
  }

  // A small side plaque leaves the two storeys and both staircases visible.
  addBox(entrance, 0.12, 1.02, 3.0, x + 0.28, 2.48, 4.25, 0x2b1b22, { roughness: 0.65 });
  const sign = makeSign({
    text: '星辉旋转木马', sub: 'DOUBLE-DECK CAROUSEL  ·  ASTRALIA 1908',
    worldWidth: 2.8, worldHeight: 0.82, bg: 'rgba(31,15,22,0)', border: null,
    color: '#ffe8b6', subColor: '#e3bd79', accent: '#f0c46c',
    font: '600 81px "Microsoft YaHei", "PingFang SC", Georgia, serif',
    subFont: '500 27px Georgia, "Times New Roman", serif', width: 1024, height: 300,
    star: true, letterSpacing: 4,
  });
  sign.position.set(x + 0.37, 2.48, 4.25);
  sign.rotation.y = Math.PI / 2;
  entrance.add(sign);
  addTorus(entrance, 0.3, 0.035, 4, 14, x + 0.31, 3.04, 4.25, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.65 });
  const bulbs = [];
  for (let i = 0; i < 9; i++) {
    bulbs.push([x + 0.4, 2.08, 2.82 + i * 0.36]);
    bulbs.push([x + 0.4, 2.9, 2.82 + i * 0.36]);
  }
  addBulbInstances(entrance, bulbs, bulbMat, 0.55);
  mergeGroup(entrance);
  return entrance;
}

// A curved staircase that hugs the outer edge of the rotating platform.
function makeStaircase(parent, {
  center,
  dir,
  steps = 22,
  arc = 0.9,
  rMin = 9.9,
  rMax = 11.95,
  yBottom = 0.12,
  yTop = UPPER_Y,
}, bulbPositions) {
  const da = arc / steps;
  const rMid = (rMin + rMax) / 2;
  const rise = (yTop - yBottom) / steps;
  const previous = [null, null];
  for (let i = 0; i < steps; i++) {
    const a0 = center - dir * arc / 2 + dir * i * da;
    const am = a0 + dir * da / 2;
    const top = yBottom + rise * (i + 1);
    const tangent = rMid * Math.abs(da) * 1.08 + 0.035;
    const x = Math.cos(am) * rMid;
    const z = Math.sin(am) * rMid;
    // tread and inlaid carpet runner
    addBox(parent, rMax - rMin, 0.14, tangent, x, top - 0.07, z, 0x6a4a37, { ry: -am, roughness: 0.78 });
    addBox(parent, 0.82, 0.028, tangent * 0.9, x, top + 0.005, z, 0x7c2030, { ry: -am, roughness: 0.9 });
    // a thin riser masks the open underside at the leading edge
    addBox(parent, rMax - rMin, 0.22, 0.08, Math.cos(a0) * rMid, top - 0.2, Math.sin(a0) * rMid, 0x3b2824, { ry: -a0, roughness: 0.8 });
    // curved stringers under both edges; the outer one stays low so the
    // treads, red runner and gilt balusters all remain visible from outside
    for (const [side, rr] of [[0, rMin + 0.12], [1, rMax - 0.12]]) {
      addBox(
        parent,
        0.2,
        side ? 0.2 : 0.38,
        tangent,
        Math.cos(am) * rr,
        top - (side ? 0.32 : 0.31),
        Math.sin(am) * rr,
        side ? 0xd6bd91 : 0x51342a,
        { ry: -am, roughness: 0.72 },
      );
      if (side) {
        addBox(parent, 0.07, 0.05, tangent, Math.cos(am) * rr, top - 0.2, Math.sin(am) * rr, GOLD, { ry: -am, roughness: 0.3, metalness: 0.55 });
      }
    }
    // balustrade: posts, finials, top rail and a lower rail
    for (let side = 0; side < 2; side++) {
      const rr = side === 0 ? rMin + 0.14 : rMax - 0.14;
      const px = Math.cos(am) * rr;
      const pz = Math.sin(am) * rr;
      addCylinder(parent, 0.034, 0.045, 1.0, 6, px, top + 0.5, pz, GOLD, { roughness: 0.3, metalness: 0.65 });
      addSphere(parent, 0.062, 6, px, top + 1.02, pz, GOLD_LIGHT, { roughness: 0.28, metalness: 0.6 });
      const prev = previous[side];
      if (prev) {
        cylinderBetween(parent, new THREE.Vector3(prev.x, prev.y, prev.z), new THREE.Vector3(px, top + 1.0, pz), 0.028, GOLD, { roughness: 0.3, metalness: 0.65 });
        cylinderBetween(parent, new THREE.Vector3(prev.x, prev.y - 0.4, prev.z), new THREE.Vector3(px, top + 0.6, pz), 0.018, GOLD_DARK, { roughness: 0.36, metalness: 0.55 });
      }
      previous[side] = { x: px, y: top + 1.0, z: pz };
    }
    if (i % 3 === 0) {
      const rr = rMid + (rMax - rMin) * 0.28;
      bulbPositions.push([Math.cos(am) * rr, top + 0.3, Math.sin(am) * rr]);
      addCylinder(parent, 0.045, 0.06, Math.max(0.2, top - yBottom), 5, x, yBottom + (top - yBottom) / 2, z, GOLD_DARK, { roughness: 0.4, metalness: 0.45 });
    }
  }
  // larger newel lanterns where the stair meets the lower deck
  const aBottom = center - dir * arc / 2;
  const bx = Math.cos(aBottom) * (rMax + 0.02);
  const bz = Math.sin(aBottom) * (rMax + 0.02);
  addCylinder(parent, 0.1, 0.14, 1.5, 7, bx, yBottom + 0.75, bz, 0x4a3033, { roughness: 0.6 });
  addCone(parent, 0.24, 0.22, 6, bx, yBottom + 1.55, bz, GOLD, { roughness: 0.3, metalness: 0.65 });
  bulbPositions.push([bx, yBottom + 1.32, bz]);
  // a small landing at the top, cantilevered just outside the balcony
  const aTop = center + dir * arc / 2;
  const lx = Math.cos(aTop) * ((rMin + rMax) / 2);
  const lz = Math.sin(aTop) * ((rMin + rMax) / 2);
  addBox(parent, rMax - rMin + 0.4, 0.14, 1.3, lx, yTop - 0.08, lz, 0x6a4a37, { ry: -aTop, roughness: 0.78 });
  addBox(parent, rMax - rMin + 0.32, 0.04, 1.05, lx, yTop + 0.005, lz, 0x7c2030, { ry: -aTop, roughness: 0.9 });
  addCylinder(parent, 0.09, 0.12, 1.2, 7, Math.cos(aTop) * (rMax - 0.15), yTop + 0.6, Math.sin(aTop) * (rMax - 0.15), GOLD, { roughness: 0.3, metalness: 0.65 });
  addCone(parent, 0.2, 0.18, 6, Math.cos(aTop) * (rMax - 0.15), yTop + 1.22, Math.sin(aTop) * (rMax - 0.15), GOLD, { roughness: 0.3, metalness: 0.65 });
  addSphere(parent, 0.12, 7, Math.cos(aTop) * (rMax - 0.15), yTop + 1.24, Math.sin(aTop) * (rMax - 0.15), GOLD_LIGHT, { roughness: 0.28, metalness: 0.6 });
  bulbPositions.push([Math.cos(aTop) * (rMax - 0.15), yTop + 1.0, Math.sin(aTop) * (rMax - 0.15)]);
  return { topAngle: aTop, bottomAngle: aBottom };
}

function makeUpperRailing(parent, openings, y) {
  const count = 48;
  const angles = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    if (openings.some((o) => angleNear(a, o, 0.17))) continue;
    angles.push(a);
    addCylinder(parent, 0.035, 0.045, 1.02, 6, Math.cos(a) * 12.04, y + 0.51, Math.sin(a) * 12.04, GOLD, { roughness: 0.3, metalness: 0.65 });
    addSphere(parent, 0.06, 6, Math.cos(a) * 12.04, y + 1.03, Math.sin(a) * 12.04, GOLD_LIGHT, { roughness: 0.28, metalness: 0.6 });
  }
  for (let i = 0; i < angles.length; i++) {
    const a = angles[i];
    const next = angles[(i + 1) % angles.length];
    let da = Math.atan2(Math.sin(next - a), Math.cos(next - a));
    if (da < 0) da += Math.PI * 2;
    if (da > 0.24) continue;
    const p1 = (rr, yy) => new THREE.Vector3(Math.cos(a) * rr, yy, Math.sin(a) * rr);
    const p2 = (rr, yy) => new THREE.Vector3(Math.cos(next) * rr, yy, Math.sin(next) * rr);
    cylinderBetween(parent, p1(12.04, y + 1.0), p2(12.04, y + 1.0), 0.036, GOLD, { roughness: 0.3, metalness: 0.65 });
    cylinderBetween(parent, p1(12.04, y + 0.56), p2(12.04, y + 0.56), 0.022, GOLD_DARK, { roughness: 0.35, metalness: 0.55 });
  }
}

function makeOvalFascia(parent, stairAreas) {
  const medallionMat = new THREE.MeshBasicMaterial({
    map: makeMedallionTexture(), transparent: true, side: THREE.DoubleSide, toneMapped: true,
  });
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.13;
    if (stairAreas.some(([lo, hi]) => {
      const d = Math.atan2(Math.sin(a - (lo + hi) / 2), Math.cos(a - (lo + hi) / 2));
      return Math.abs(d) < (hi - lo) / 2 + 0.1;
    })) continue;
    addPlane(parent, 0.84, 0.58, Math.cos(a) * 12.52, 4.9, Math.sin(a) * 12.52, 0xffffff, {
      material: medallionMat, ry: Math.PI / 2 - a, side: THREE.DoubleSide,
    });
    const frame = addTorus(parent, 0.44, 0.038, 4, 16, Math.cos(a) * 12.54, 4.9, Math.sin(a) * 12.54, GOLD, {
      ry: Math.PI / 2 - a, roughness: 0.3, metalness: 0.6,
    });
    frame.scale.y = 0.68;
  }
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
  const lowerCeilMat = textureMaterial(innerTex, {
    color: 0xa8cbc3, roughness: 0.78, metalness: 0.04, side: THREE.DoubleSide,
    emissive: 0x142c29, emissiveIntensity: 0.25,
  });
  const columnMat = textureMaterial(columnTex, { roughness: 0.3, metalness: 0.58, emissive: 0x180b05, emissiveIntensity: 0.25 });
  columnMat.emissiveMap = columnTex;
  columnMat.emissive.setHex(0x9f7c52);
  columnMat.emissiveIntensity = 0.28;

  // ground plinth and static steps
  addCylinder(group, 15.25, 15.7, 0.24, 48, 0, 0.12, 0, 0x655c50, { roughness: 0.96 });
  addCylinder(group, 14.7, 15.0, 0.26, 48, 0, 0.35, 0, 0x746956, { roughness: 0.95 });
  addCylinder(group, 14.15, 14.4, 0.25, 48, 0, 0.58, 0, 0x82745f, { roughness: 0.94 });
  addCylinder(group, 13.4, 13.6, 0.22, 48, 0, 0.8, 0, 0x9a805d, { roughness: 0.88 });
  addCylinder(group, 13.05, 13.5, 0.72, 48, 0, 0.94, 0, 0xffffff, { material: baseMat });
  addTorus(group, 13.16, 0.12, 5, 48, 0, 1.26, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
  addTorus(group, 13.55, 0.09, 4, 48, 0, 0.57, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.35, metalness: 0.6 });
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
  const spinBulbs = [];

  // --- lower level ---------------------------------------------------------
  const lowerDeck = new THREE.Mesh(new THREE.CircleGeometry(12.35, 64), deckMat);
  lowerDeck.rotation.x = -Math.PI / 2;
  lowerDeck.position.y = 0.08;
  staticOrnaments.add(lowerDeck);
  const lowerRim = new THREE.Mesh(new THREE.CylinderGeometry(12.38, 12.38, 0.48, 64, 1, true), baseMat);
  lowerRim.position.y = 0.3;
  staticOrnaments.add(lowerRim);
  addTorus(staticOrnaments, 12.4, 0.11, 5, 64, 0, 0.57, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });
  addTorus(staticOrnaments, 12.38, 0.06, 4, 64, 0, 0.1, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.35, metalness: 0.6 });

  // central pier, continuous from plinth to the upper canopy
  addCylinder(staticOrnaments, 2.3, 2.55, 0.62, 24, 0, 1.28, 0, 0x7a2230, { roughness: 0.55, metalness: 0.16 });
  addTorus(staticOrnaments, 2.35, 0.13, 5, 32, 0, 1.6, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  addTorus(staticOrnaments, 2.12, 0.08, 4, 32, 0, 1.02, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.06, 1.22, 8.4, 24, 1), columnMat);
  shaft.position.y = 5.75;
  staticOrnaments.add(shaft);
  for (const y of [2.42, 4.2, 6.2, 8.1, 9.35]) {
    addTorus(staticOrnaments, 1.17, 0.075, 4, 24, 0, y, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.75 });
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addCylinder(staticOrnaments, 0.05, 0.075, 8.2, 5, Math.cos(a) * 1.15, 5.7, Math.sin(a) * 1.15, GOLD, { roughness: 0.28, metalness: 0.75 });
  }
  // upper-level central drum
  addCylinder(staticOrnaments, 2.45, 2.2, 0.9, 24, 0, UPPER_Y, 0, 0x75202d, { roughness: 0.5, metalness: 0.2 });
  addTorus(staticOrnaments, 2.43, 0.1, 5, 32, 0, UPPER_Y + 0.42, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  addTorus(staticOrnaments, 2.2, 0.07, 4, 32, 0, UPPER_Y - 0.42, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });

  // --- upper deck ----------------------------------------------------------
  const upperDeck = new THREE.Mesh(new THREE.CircleGeometry(12.3, 64), deckMat);
  upperDeck.rotation.x = -Math.PI / 2;
  upperDeck.position.y = UPPER_Y;
  staticOrnaments.add(upperDeck);
  addTorus(staticOrnaments, 12.32, 0.1, 5, 64, 0, UPPER_Y + 0.02, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });

  // painted mezzanine fascia with a low valance and a line of bulbs
  const fasciaMat = new THREE.MeshStandardMaterial({
    color: 0x3f817e, roughness: 0.5, metalness: 0.15, side: THREE.DoubleSide,
    emissive: 0x1b4642, emissiveIntensity: 0.52,
  });
  const upperFascia = new THREE.Mesh(new THREE.CylinderGeometry(12.36, 12.38, 0.56, 64, 1, true), fasciaMat);
  upperFascia.position.y = 4.98;
  staticOrnaments.add(upperFascia);
  addTorus(staticOrnaments, 12.38, 0.085, 4, 64, 0, 4.7, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
  addTorus(staticOrnaments, 12.38, 0.07, 4, 64, 0, 5.25, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2 + 0.02;
    addBox(staticOrnaments, 0.05, 0.5, 0.05, Math.cos(a) * 12.4, 4.98, Math.sin(a) * 12.4, GOLD_DARK, { roughness: 0.34, metalness: 0.55 });
  }
  const mezzFabric = new THREE.MeshStandardMaterial({
    color: 0x6f1d2a, roughness: 0.7, metalness: 0.1, side: THREE.DoubleSide,
    emissive: 0x1f090c, emissiveIntensity: 0.38,
  });
  const mezzValance = new THREE.Mesh(new THREE.CylinderGeometry(12.45, 12.45, 0.64, 64, 1, true), mezzFabric);
  mezzValance.position.y = 4.38;
  staticOrnaments.add(mezzValance);
  addTorus(staticOrnaments, 12.47, 0.06, 4, 64, 0, 4.04, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2 + 0.15;
    addSphere(staticOrnaments, 0.06, 6, Math.cos(a) * 12.47, 4.06, Math.sin(a) * 12.47, GOLD, { roughness: 0.3, metalness: 0.6 });
    addCone(staticOrnaments, 0.055, 0.3, 5, Math.cos(a) * 12.47, 3.88, Math.sin(a) * 12.47, 0x6f1d2a, { roughness: 0.65 });
  }

  // the underside of the upper floor becomes the lower-level ceiling
  const lowerCeiling = new THREE.Mesh(new THREE.CircleGeometry(12.2, 64), lowerCeilMat);
  lowerCeiling.rotation.x = Math.PI / 2;
  lowerCeiling.position.y = UPPER_Y - 0.08;
  staticOrnaments.add(lowerCeiling);
  addTorus(staticOrnaments, 12.14, 0.07, 4, 64, 0, UPPER_Y - 0.1, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  addTorus(staticOrnaments, 2.16, 0.07, 4, 32, 0, UPPER_Y - 0.1, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.6 });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    cylinderBetween(
      staticOrnaments,
      new THREE.Vector3(Math.cos(a) * 2.1, UPPER_Y - 0.13, Math.sin(a) * 2.1),
      new THREE.Vector3(Math.cos(a) * 12.1, UPPER_Y - 0.13, Math.sin(a) * 12.1),
      0.02, 0xb88a52, { roughness: 0.4, metalness: 0.4 },
    );
  }

  // outer colonnade rising uninterrupted through both levels
  const stairOpenings = [];
  const supportColumns = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 + Math.PI / 32;
    const inStair = Math.abs(Math.atan2(Math.sin(a - 0.85), Math.cos(a - 0.85))) < 0.62
      || Math.abs(Math.atan2(Math.sin(a + 0.85), Math.cos(a + 0.85))) < 0.62;
    if (inStair) continue;
    supportColumns.push(a);
    const x = Math.cos(a) * 12.22;
    const z = Math.sin(a) * 12.22;
    addCylinder(staticOrnaments, 0.1, 0.16, 10.15, 8, x, 5.15, z, 0xe2c99f, { roughness: 0.44, metalness: 0.18 });
    addBox(staticOrnaments, 0.46, 0.18, 0.46, x, 0.2, z, 0x4f3034, { roughness: 0.6 });
    addBox(staticOrnaments, 0.4, 0.16, 0.4, x, UPPER_Y + 0.08, z, GOLD_DARK, { roughness: 0.35, metalness: 0.5 });
    addSphere(staticOrnaments, 0.12, 7, x, UPPER_Y + 0.25, z, GOLD_LIGHT, { roughness: 0.28, metalness: 0.6 });
    addBox(staticOrnaments, 0.42, 0.16, 0.42, x, 10.13, z, GOLD_DARK, { roughness: 0.35, metalness: 0.5 });
    addSphere(staticOrnaments, 0.13, 7, x, 10.28, z, GOLD_LIGHT, { roughness: 0.28, metalness: 0.6 });
  }

  // --- two grand spiral staircases ----------------------------------------
  const stairA = makeStaircase(staticOrnaments, {
    center: 0.85, dir: 1, steps: 22, arc: 0.85, rMin: 10.8, rMax: 13.28,
  }, spinBulbs);
  const stairB = makeStaircase(staticOrnaments, {
    center: -0.85, dir: -1, steps: 22, arc: 0.85, rMin: 10.8, rMax: 13.28,
  }, spinBulbs);
  stairOpenings.push(stairA.topAngle, stairB.topAngle);
  const stairAreas = [
    [Math.min(stairB.bottomAngle, stairB.topAngle), Math.max(stairB.bottomAngle, stairB.topAngle)],
    [Math.min(stairA.bottomAngle, stairA.topAngle), Math.max(stairA.bottomAngle, stairA.topAngle)],
  ];
  makeUpperRailing(staticOrnaments, stairOpenings, UPPER_Y);
  makeOvalFascia(staticOrnaments, stairAreas);

  // upper fascia bulbs
  for (let i = 0; i < 52; i++) {
    const a = (i / 52) * Math.PI * 2;
    spinBulbs.push([Math.cos(a) * 12.42, 4.83, Math.sin(a) * 12.42]);
  }
  // lower-level ceiling bulbs
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    spinBulbs.push([Math.cos(a) * 11.3, 4.98, Math.sin(a) * 11.3]);
  }

  // --- horse poles ---------------------------------------------------------
  const lowerOuterCount = 14;
  const lowerInnerCount = 4;
  const upperOuterCount = 8;
  const upperInnerCount = 2;
  const lowerOuterRadius = 8.95;
  const lowerInnerRadius = 5.35;
  const upperOuterRadius = 8.7;
  const upperInnerRadius = 5.0;
  const lowerPoles = [];
  const upperPoles = [];
  for (let i = 0; i < lowerOuterCount; i++) lowerPoles.push({ a: -Math.PI / 2 + (i / lowerOuterCount) * Math.PI * 2, r: lowerOuterRadius });
  for (let i = 0; i < lowerInnerCount; i++) lowerPoles.push({ a: -Math.PI / 2 + Math.PI / 4 + (i / lowerInnerCount) * Math.PI * 2, r: lowerInnerRadius });
  for (let i = 0; i < upperOuterCount; i++) upperPoles.push({ a: -Math.PI / 2 + Math.PI / 8 + (i / upperOuterCount) * Math.PI * 2, r: upperOuterRadius });
  for (let i = 0; i < upperInnerCount; i++) upperPoles.push({ a: -Math.PI / 2 + (i / upperInnerCount) * Math.PI * 2, r: upperInnerRadius });

  for (const { a, r } of lowerPoles) {
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    addCylinder(staticOrnaments, 0.065, 0.085, 5.0, 7, x, 2.6, z, 0xe0bd7b, { roughness: 0.24, metalness: 0.7 });
    addTorus(staticOrnaments, 0.15, 0.03, 4, 12, x, 0.22, z, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
    addSphere(staticOrnaments, 0.12, 8, x, 5.12, z, 0xe3c184, { roughness: 0.4, metalness: 0.25, emissive: 0x39220c, emissiveIntensity: 0.55 });
  }
  for (const { a, r } of upperPoles) {
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    addCylinder(staticOrnaments, 0.06, 0.08, 5.0, 7, x, 7.88, z, 0xe0bd7b, { roughness: 0.24, metalness: 0.7 });
    addTorus(staticOrnaments, 0.14, 0.03, 4, 12, x, UPPER_Y + 0.12, z, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
    addSphere(staticOrnaments, 0.115, 8, x, 10.38, z, 0xe3c184, { roughness: 0.4, metalness: 0.25, emissive: 0x39220c, emissiveIntensity: 0.55 });
  }

  // --- roof / main canopy --------------------------------------------------
  const roof = new THREE.Group();
  roof.position.y = TOP_LIFT;
  staticOrnaments.add(roof);

  // capital and radial brackets, deliberately raised as one crown group
  addCylinder(roof, 2.05, 1.12, 0.95, 24, 0, 8.9, 0, 0x6d1e2b, { roughness: 0.48, metalness: 0.25 });
  addTorus(roof, 2.08, 0.12, 5, 32, 0, 9.34, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.75 });
  addTorus(roof, 1.6, 0.07, 4, 28, 0, 9.52, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const inner = new THREE.Vector3(Math.cos(a) * 1.4, 8.65, Math.sin(a) * 1.4);
    const outer = new THREE.Vector3(Math.cos(a) * 5.7, 9.55, Math.sin(a) * 5.7);
    cylinderBetween(roof, inner, outer, 0.07, GOLD, { roughness: 0.26, metalness: 0.75 });
    const curl = new THREE.Vector3(Math.cos(a) * 4.4, 9.12, Math.sin(a) * 4.4);
    addSphere(roof, 0.09, 7, curl.x, curl.y, curl.z, GOLD_LIGHT, { roughness: 0.26, metalness: 0.75 });
  }

  const ceiling = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 13.0, 3.0, 64, 1, true), innerMat);
  ceiling.position.y = 10.96;
  roof.add(ceiling);
  addTorus(roof, 12.98, 0.1, 5, 64, 0, 9.48, 0, GOLD, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.7 });
  addTorus(roof, 1.05, 0.09, 4, 24, 0, 12.5, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.7 });
  const canopy = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 13.2, 3.12, 64, 1, true), canopyMat);
  canopy.position.y = 11.02;
  roof.add(canopy);
  addTorus(roof, 13.22, 0.14, 5, 64, 0, 9.46, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });
  addTorus(roof, 12.96, 0.025, 4, 64, 0, 9.4, 0, 0x9b6d38, { rx: Math.PI / 2, roughness: 0.4, metalness: 0.5 });
  const valance = new THREE.Mesh(new THREE.CylinderGeometry(13.12, 13.12, 1.62, 64, 1, true), valanceMat);
  valance.position.y = 8.65;
  roof.add(valance);
  addTorus(roof, 13.13, 0.065, 4, 64, 0, 9.46, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.72 });
  addTorus(roof, 13.08, 0.07, 4, 64, 0, 7.92, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const p1 = new THREE.Vector3(Math.cos(a) * 1.1, 12.58, Math.sin(a) * 1.1);
    const p2 = new THREE.Vector3(Math.cos(a) * 13.16, 9.49, Math.sin(a) * 13.16);
    cylinderBetween(roof, p1, p2, 0.055, GOLD_LIGHT, { roughness: 0.25, metalness: 0.7 });
    cylinderBetween(
      roof,
      new THREE.Vector3(Math.cos(a) * 1.0, 12.4, Math.sin(a) * 1.0),
      new THREE.Vector3(Math.cos(a) * 12.85, 9.52, Math.sin(a) * 12.85),
      0.022, 0xb88b4d, { roughness: 0.38, metalness: 0.55 },
    );
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.16;
    addSphere(roof, 0.11, 7, Math.cos(a) * 13.11, 7.88, Math.sin(a) * 13.11, GOLD, { roughness: 0.28, metalness: 0.65 });
    addCone(roof, 0.06, 0.38, 5, Math.cos(a) * 13.11, 7.62, Math.sin(a) * 13.11, 0x7a1d2b, { roughness: 0.6 });
  }
  // crown
  addCylinder(roof, 1.52, 1.0, 0.45, 24, 0, 12.68, 0, 0x70202c, { roughness: 0.48, metalness: 0.22 });
  addTorus(roof, 1.55, 0.1, 4, 24, 0, 12.92, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.75 });
  addCylinder(roof, 0.8, 1.2, 0.8, 18, 0, 13.3, 0, GOLD, { roughness: 0.28, metalness: 0.72 });
  addSphere(roof, 0.65, 18, 0, 13.9, 0, 0xd7ad61, { sy: 1.2, roughness: 0.26, metalness: 0.75 });
  addTorus(roof, 0.5, 0.07, 4, 18, 0, 14.08, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.25, metalness: 0.75 });
  addCone(roof, 0.5, 1.1, 12, 0, 14.65, 0, 0x77212e, { roughness: 0.45, metalness: 0.18 });
  addTorus(roof, 0.28, 0.055, 4, 16, 0, 15.13, 0, GOLD, { rx: Math.PI / 2, roughness: 0.26, metalness: 0.7 });

  // chandelier under the top canopy
  addTorus(roof, 2.35, 0.06, 4, 32, 0, 7.62, 0, GOLD, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.7 });
  addTorus(roof, 1.3, 0.045, 4, 24, 0, 8.2, 0, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.3, metalness: 0.65 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    cylinderBetween(roof, new THREE.Vector3(0, 9.45, 0), new THREE.Vector3(Math.cos(a) * 2.35, 7.62, Math.sin(a) * 2.35), 0.018, GOLD_DARK, { roughness: 0.35, metalness: 0.6 });
  }
  addCylinder(roof, 1.9, 1.9, 0.16, 32, 0, 12.34, 0, 0x7a2230, { roughness: 0.45, metalness: 0.18 });
  addTorus(roof, 1.92, 0.08, 4, 32, 0, 12.44, 0, GOLD_LIGHT, { rx: Math.PI / 2, roughness: 0.28, metalness: 0.55 });
  addSphere(roof, 1.08, 20, 0, 12.38, 0, 0xd9b16d, { sy: 0.25, roughness: 0.34, metalness: 0.35, emissive: 0x3a2108, emissiveIntensity: 0.45 });
  addCylinder(roof, 0.28, 0.28, 0.42, 12, 0, 12.16, 0, GOLD, { roughness: 0.32, metalness: 0.42 });
  addSphere(roof, 0.18, 10, 0, 11.9, 0, 0xffdd94, { material: bulbMat });

  // roof light strings feed the single instanced bulb batch below
  for (let i = 0; i < 44; i++) {
    const a = (i / 44) * Math.PI * 2;
    spinBulbs.push([Math.cos(a) * 13.22, 9.54 + TOP_LIFT, Math.sin(a) * 13.22]);
    if (i % 2 === 0) spinBulbs.push([Math.cos(a) * 12.45, 8.96 + TOP_LIFT, Math.sin(a) * 12.45]);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    for (let k = 1; k <= 3; k++) {
      spinBulbs.push([Math.cos(a) * (2.2 + k * 1.15), 8.2 + TOP_LIFT - k * 0.18, Math.sin(a) * (2.2 + k * 1.15)]);
    }
  }

  // --- entrance / forecourt ------------------------------------------------
  makeDoubleEntrance(group, bulbMat);
  makeFence(group);
  makeQueue(group);
  group.userData.bulbMat = bulbMat;
  makeLamp(group, 18.2, 6.4, 3.5);
  makeLamp(group, 18.2, -6.4, 3.5);
  for (const z of [-7.2, 7.2]) {
    addBox(group, 4.0, 0.55, 1.15, 17.3, 0.28, z, 0x294934, { roughness: 0.94 });
    for (let i = 0; i < 7; i++) {
      addSphere(group, 0.24, 7, 15.6 + i * 0.54, 0.62, z + (i % 2 ? 0.22 : -0.2), i % 2 ? 0x365a3b : 0x2c4d34, { roughness: 0.9 });
    }
  }
  for (const z of [-8.7, 8.7]) {
    addCylinder(group, 0.56, 0.42, 0.95, 10, 18.6, 0.48, z, 0x75644f, { roughness: 0.9 });
    addTorus(group, 0.58, 0.07, 4, 14, 18.6, 0.98, z, GOLD_DARK, { rx: Math.PI / 2, roughness: 0.4, metalness: 0.45 });
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      addSphere(group, 0.16, 6, 18.6 + Math.cos(a) * 0.35, 1.1 + Math.sin(i * 2.4) * 0.12, z + Math.sin(a) * 0.3, [0xe79aa7, 0xf2ce8c, 0xc4afe0][i % 3], { roughness: 0.8 });
    }
  }

  // --- practical lights ----------------------------------------------------
  const upperLight = new THREE.PointLight(0xffbf7c, 58, 34, 2);
  upperLight.position.set(3.6, 9.1, 2.4);
  group.add(upperLight);
  const lowerLight = new THREE.PointLight(0xffb87b, 32, 25, 2);
  lowerLight.position.set(-3.1, 3.45, -2.2);
  group.add(lowerLight);
  const lowerLight2 = new THREE.PointLight(0xffc18a, 22, 22, 2);
  lowerLight2.position.set(3.0, 3.1, 2.0);
  group.add(lowerLight2);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,242,211,.9)', 'rgba(255,161,75,0)'),
    color: 0xffc47d, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false,
  }));
  glow.position.set(0, 7.7, 0);
  glow.scale.set(22, 22, 1);
  group.add(glow);

  // batch static geometry, then add the independently animated horses
  mergeGroup(staticOrnaments);
  addBulbInstances(spin, spinBulbs, bulbMat, 0.95);

  const topStar = addStar(roof, 0.8, 0.22, 0, 15.72, 0, 0xffd97c, {
    emissive: 0xffc45c, emissiveIntensity: 2.4, roughness: 0.24, metalness: 0.48, ry: 0.2,
  });
  topStar.userData.noMerge = true;
  const starGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,246,214,1)', 'rgba(255,190,87,0)'),
    color: 0xffd88a, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false,
  }));
  starGlow.position.set(0, 15.72, 0);
  starGlow.scale.set(8, 8, 1);
  roof.add(starGlow);

  // --- horses --------------------------------------------------------------
  const coatSet = [0xf0dfc0, 0xd7b47b, 0xa96b48, 0x35303a, 0xbfb6a6, 0xf0dfc0];
  const maneSet = [0x712734, 0x3e2d31, 0xd1a263, 0x2e4646, 0x7c6a63, 0x563f78];
  const saddleSet = [0x9c2d3c, 0x266a6a, 0x69447f, 0xb55e39, 0x315d86, 0x9c2d3c];
  const blanketSet = [0x2d6a70, 0x8e2537, 0x6b4d88, 0xb86b3d, 0x315f87, 0xc39a4b];

  const horses = [];
  const makeHorseAt = (a, r, scale, index, inner, baseY) => {
    const holder = new THREE.Group();
    holder.position.set(Math.cos(a) * r, baseY, Math.sin(a) * r);
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
      baseY, scale, inner, level: baseY > 1 ? 'upper' : 'lower', isMount: index === 0,
    };
    horses.push(entry);
    return entry;
  };

  let horseIndex = 0;
  for (let i = 0; i < lowerOuterCount; i++, horseIndex++) {
    makeHorseAt(-Math.PI / 2 + (i / lowerOuterCount) * Math.PI * 2, lowerOuterRadius, 0.8, horseIndex, false, 0.1);
  }
  for (let i = 0; i < lowerInnerCount; i++, horseIndex++) {
    makeHorseAt(-Math.PI / 2 + Math.PI / 4 + (i / lowerInnerCount) * Math.PI * 2, lowerInnerRadius, 0.62, horseIndex, true, 0.1);
  }
  for (let i = 0; i < upperOuterCount; i++, horseIndex++) {
    makeHorseAt(-Math.PI / 2 + Math.PI / 8 + (i / upperOuterCount) * Math.PI * 2, upperOuterRadius, 0.62, horseIndex, false, UPPER_Y + 0.1);
  }
  for (let i = 0; i < upperInnerCount; i++, horseIndex++) {
    makeHorseAt(-Math.PI / 2 + (i / upperInnerCount) * Math.PI * 2, upperInnerRadius, 0.54, horseIndex, true, UPPER_Y + 0.1);
  }

  // Two lower chariots and one on the upper balcony.
  for (const [i, a] of [-Math.PI / 2, Math.PI / 2].entries()) {
    const chariot = makeChariot({ swan: i === 1, accent: i === 0 ? 0x8f2233 : 0x225b5d });
    chariot.position.set(Math.cos(a) * 5.35, 0.13, Math.sin(a) * 5.35);
    chariot.rotation.y = -a + Math.PI / 2;
    chariot.scale.setScalar(0.78);
    spin.add(chariot);
  }
  const upperChariot = makeChariot({ swan: true, accent: 0x225b5d });
  upperChariot.position.set(Math.cos(Math.PI) * 5.0, UPPER_Y + 0.13, Math.sin(Math.PI) * 5.0);
  upperChariot.rotation.y = -Math.PI + Math.PI / 2;
  upperChariot.scale.setScalar(0.64);
  spin.add(upperChariot);

  const rideMount = horses[0];
  rideMount.isMount = true;

  // A small rider on the mount, plus scattered guests on both levels.
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

  const guestRiders = [
    [2, { jacket: 0x3b5e7a, hat: 0xdfbf7d, scarf: 0xa52e3e, skin: 0xe7b893 }],
    [5, { jacket: 0x6a447d, hat: 0xe0c98c, scarf: 0x2e6d6d, skin: 0xd4a078 }],
    [8, { jacket: 0x2f6f68, hat: 0xc59a5b, scarf: 0xd6a54c, skin: 0xf0d0ae }],
    [11, { jacket: 0x8c4b3c, hat: 0x2f3c4a, scarf: 0x466c85, skin: 0x9f6c4d }],
    [16, { jacket: 0x4f5d87, hat: 0xe6d0a4, scarf: 0x9d3c4f, skin: 0xedc6a3 }],
    [19, { jacket: 0x7c4f64, hat: 0xdfbd7d, scarf: 0x315d77, skin: 0xe8b994 }],
    [22, { jacket: 0x345d50, hat: 0xe0c58c, scarf: 0x943547, skin: 0xc99572 }],
    [25, { jacket: 0x4d4b79, hat: 0xd8b16f, scarf: 0x2f6c69, skin: 0xf0cdaa }],
  ];
  for (const [index, palette] of guestRiders) {
    if (!horses[index]) continue;
    horses[index].horse.add(makeRiderFigure(palette));
  }

  const photoHorse = makeHorse({ coat: 0xf0dfc0, mane: 0x712734, saddle: 0x9c2d3c, blanket: 0xe8c684, pose: 3, scale: 0.48 });
  photoHorse.position.set(19.4, 0.05, 1.4);
  photoHorse.rotation.y = Math.PI * 0.82;
  group.add(photoHorse);

  const collider = { type: 'circle', x: -48, z: 32, r: 14.55 };

  let currentSpeed = 1;
  let targetSpeed = 1;
  const baseSpinSpeed = 0.18;
  return {
    group, spin, horses, topStar, rideMount, rider,
    underLight: upperLight, upperLight, lowerLight, lowerLight2, rimLight: lowerLight, glow,
    center: new THREE.Vector3(-48, 0, 32),
    collider,
    setRideActive(active) {
      targetSpeed = active ? 1.55 : 1;
      rider.visible = true;
    },
    update(dt, elapsed, speed = 1, lamp = 2.3) {
      targetSpeed = speed;
      currentSpeed += (targetSpeed - currentSpeed) * (1 - Math.exp(-dt * 1.6));
      spin.rotation.y += dt * baseSpinSpeed * currentSpeed;
      horses.forEach((entry) => {
        const amp = entry.level === 'upper' ? (entry.inner ? 0.045 : 0.07) : (entry.inner ? 0.075 : 0.12);
        const bob = Math.sin(elapsed * 2.75 + entry.phase) * amp;
        entry.holder.position.y = entry.baseY + bob;
        entry.horse.rotation.x = Math.sin(elapsed * 2.75 + entry.phase) * 0.025;
        entry.horse.rotation.z = Math.sin(elapsed * 1.4 + entry.phase) * 0.008;
      });
      topStar.rotation.y = elapsed * 0.6;
      starGlow.material.opacity = 0.56 + Math.sin(elapsed * 1.7) * 0.14;
      glow.material.opacity = 0.13 + lamp * 0.022 + Math.sin(elapsed * 1.1) * 0.016;
      upperLight.intensity = 22 + lamp * 19;
      lowerLight.intensity = 8 + lamp * 11;
      lowerLight2.intensity = 4 + lamp * 8;
    },
  };
}
