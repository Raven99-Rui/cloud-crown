import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus,
  cylinderBetween, makeSign, makeCanvasPlaneTexture, standard,
} from './builders.js';

const GOLD = 0xd8b16a;
const GOLD_LIGHT = 0xf2d79a;
const TEAL = 0x11595b;
const TEAL_DARK = 0x0a3d40;
const CRIMSON = 0x8e2030;
const CREAM = 0xf0dfc2;
const IRON = 0x312d36;
const STONE = 0x6d6052;

const SOUTH = new THREE.Vector3(-44, 0, 98);
const NORTH = new THREE.Vector3(-20, 0, -57);
const CABLE_OFFSET = 2.25;

// The line follows the quiet western edge of the park, giving a clean span
// from the entrance gardens to the lagoon without crossing the castle towers.
const ROUTE = [
  [-44.00, 15.0, 98],
  [-42.14, 21.0, 86],
  [-39.35, 27.5, 68],
  [-36.25, 24.5, 48],
  [-33.46, 23.0, 30],
  [-30.68, 24.0, 12],
  [-27.89, 26.0, -6],
  [-26.35, 28.5, -16],
  [-23.87, 24.0, -32],
  [-21.70, 18.0, -46],
  [-20.00, 15.0, -57],
];

const CLEARINGS = [
  { x: SOUTH.x, z: SOUTH.z, r: 19 },
  { x: NORTH.x, z: NORTH.z, r: 18 },
  { x: -39.35, z: 68, r: 7 },
  { x: -26.35, z: -16, r: 7 },
];

function makeCabinTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#0d4b4d';
    ctx.fillRect(0, 0, w, h);
    const glow = ctx.createLinearGradient(0, 0, 0, h);
    glow.addColorStop(0, 'rgba(255,231,184,.24)');
    glow.addColorStop(0.42, 'rgba(0,0,0,0)');
    glow.addColorStop(1, 'rgba(0,0,0,.26)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
    // gilded pilasters
    for (const x of [16, 132, 248, 364, 480]) {
      ctx.fillStyle = '#c49b55';
      ctx.fillRect(x - 6, 0, 12, h);
      ctx.fillStyle = 'rgba(255,234,184,.52)';
      ctx.fillRect(x - 2, 0, 3, h);
    }
    // luminous arched windows
    for (const x of [40, 156, 272, 388]) {
      const y = 46;
      const ww = 66;
      const hh = 148;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, y + hh);
      ctx.lineTo(x, y + 28);
      ctx.arc(x + ww / 2, y + 28, ww / 2, Math.PI, 0);
      ctx.lineTo(x + ww, y + hh);
      ctx.closePath();
      ctx.clip();
      const wg = ctx.createLinearGradient(0, y, 0, y + hh);
      wg.addColorStop(0, '#fff4d3');
      wg.addColorStop(0.36, '#ffd58a');
      wg.addColorStop(1, '#d48246');
      ctx.fillStyle = wg;
      ctx.fillRect(x, y, ww, hh);
      ctx.fillStyle = 'rgba(60,35,34,.55)';
      ctx.fillRect(x + ww / 2 - 2, y, 4, hh);
      ctx.fillRect(x, y + 60, ww, 3);
      ctx.restore();
      ctx.strokeStyle = '#e6c37d';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x, y + hh);
      ctx.lineTo(x, y + 28);
      ctx.arc(x + ww / 2, y + 28, ww / 2, Math.PI, 0);
      ctx.lineTo(x + ww, y + hh);
      ctx.stroke();
    }
    // painted lower frieze
    ctx.strokeStyle = 'rgba(238,205,134,.6)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.78);
    ctx.lineTo(w, h * 0.78);
    ctx.stroke();
    for (let i = 0; i < 8; i++) {
      const x = 32 + i * 64;
      ctx.fillStyle = i % 2 ? 'rgba(232,187,104,.4)' : 'rgba(125,31,43,.55)';
      ctx.beginPath();
      ctx.arc(x, h * 0.9, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }, 512, 256);
}

function makeCabinEmissive() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);
    for (const x of [40, 156, 272, 388]) {
      const y = 46;
      const ww = 66;
      const hh = 148;
      ctx.beginPath();
      ctx.moveTo(x, y + hh);
      ctx.lineTo(x, y + 28);
      ctx.arc(x + ww / 2, y + 28, ww / 2, Math.PI, 0);
      ctx.lineTo(x + ww, y + hh);
      ctx.closePath();
      const wg = ctx.createLinearGradient(0, y, 0, y + hh);
      wg.addColorStop(0, '#fff1cb');
      wg.addColorStop(0.5, '#ffbf72');
      wg.addColorStop(1, '#5b2a1d');
      ctx.fillStyle = wg;
      ctx.fill();
    }
  }, 512, 256);
}

function addBulb(parent, x, y, z, size, bulbMat) {
  const b = addSphere(parent, size, 7, x, y, z, 0xffe2a3, { material: bulbMat });
  b.renderOrder = 2;
  return b;
}

function stripedRoof(parent, x, y, z, radius, height, bulbMat, segments = 14) {
  for (let i = 0; i < segments; i++) {
    addCone(parent, radius, height, 1, x, y + height / 2, z, i % 2 ? CREAM : CRIMSON, {
      thetaStart: (i / segments) * Math.PI * 2,
      thetaLength: (Math.PI * 2) / segments,
      openEnded: true, side: THREE.DoubleSide, roughness: 0.72, flat: true,
    });
  }
  const rim = addTorus(parent, radius * 0.99, 0.07, 4, segments * 2, x, y, z, GOLD, {
    rx: Math.PI / 2, metalness: 0.35, roughness: 0.34,
  });
  rim.rotation.z = 0.02;
  addSphere(parent, 0.24, 8, x, y + height + 0.22, z, GOLD_LIGHT, {
    emissive: 0xffc46a, emissiveIntensity: 1.3, metalness: 0.4, roughness: 0.3,
  });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    addBulb(parent, x + Math.cos(a) * radius * 0.99, y - 0.04, z + Math.sin(a) * radius * 0.99, 0.1, bulbMat);
  }
}

function makeDome(parent, x, y, z, radius, bulbMat) {
  addSphere(parent, radius, 18, x, y + radius * 0.46, z, CRIMSON, {
    sy: 0.62, roughness: 0.48, metalness: 0.18,
  });
  addCylinder(parent, radius * 0.98, radius * 0.98, 0.18, 18, x, y + radius * 0.04, z, GOLD, { metalness: 0.45 });
  addTorus(parent, radius * 0.78, 0.08, 4, 24, x, y + radius * 0.33, z, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  addCylinder(parent, 0.09, 0.13, 1.3, 6, x, y + radius * 0.92, z, GOLD, { metalness: 0.55 });
  const star = addStar(parent, 0.56, 0.16, x, y + radius * 0.92 + 0.85, z, 0xffd16b, {
    emissiveIntensity: 1.9, metalness: 0.42,
  });
  addBulb(parent, x, y + radius * 0.05, z + radius * 0.97, 0.12, bulbMat);
  return star;
}

function createStation(scene, bulbMat, { x, z, face, title, sub, stationName }) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  scene.add(g);
  const east = face === 'east';
  const deckY = 2.4;

  // Stone landing, oval skirt and inlaid deck.
  const base = addCylinder(g, 14.2, 15.0, 0.9, 32, 0, 0.45, 0, STONE, { roughness: 0.94 });
  base.scale.set(1.08, 1, 0.82);
  addCylinder(g, 13.2, 14.0, 1.25, 32, 0, 1.45, 0, TEAL_DARK, { roughness: 0.8 })
    .scale.set(1.06, 1, 0.82);
  addCylinder(g, 13.0, 13.0, 0.26, 32, 0, 2.15, 0, CREAM, { roughness: 0.78 })
    .scale.set(1.06, 1, 0.82);
  addCylinder(g, 13.25, 13.25, 0.14, 32, 0, 2.3, 0, GOLD, { metalness: 0.4, roughness: 0.34 })
    .scale.set(1.06, 1, 0.82);

  // Steps descend toward the park.
  for (let i = 0; i < 5; i++) {
    const w = 9.4 - i * 0.4;
    if (east) {
      addBox(g, 1.1, 0.34, w, 13.2 + i * 0.95, 0.17 + i * 0.3, 0, i % 2 ? CREAM : 0xd5c5aa);
      addBox(g, 1.05, 0.1, w + 0.1, 13.2 + i * 0.95, 0.35 + i * 0.3, 0, GOLD, { metalness: 0.32 });
    } else {
      addBox(g, w, 0.34, 1.1, 0, 0.17 + i * 0.3, 10.8 + i * 0.95, i % 2 ? CREAM : 0xd5c5aa);
      addBox(g, w + 0.1, 0.1, 1.05, 0, 0.35 + i * 0.3, 10.8 + i * 0.95, GOLD, { metalness: 0.32 });
    }
  }
  // Gold cheek walls beside the stair.
  for (const side of [-1, 1]) {
    if (east) {
      addBox(g, 5.2, 0.8, 0.28, 15.2, 0.7, side * 5.0, GOLD, { metalness: 0.38, roughness: 0.34 });
      addSphere(g, 0.25, 8, 17.8, 1.15, side * 5.0, GOLD_LIGHT, { metalness: 0.4 });
    } else {
      addBox(g, 0.28, 0.8, 5.2, side * 5.0, 0.7, 13.2, GOLD, { metalness: 0.38, roughness: 0.34 });
      addSphere(g, 0.25, 8, side * 5.0, 1.15, 15.8, GOLD_LIGHT, { metalness: 0.4 });
    }
  }

  // A jewel-box entrance at ground level, so the pavilion reads as a place to
  // enter even when seen from the promenade.
  if (east) {
    const warm = new THREE.MeshStandardMaterial({
      color: 0x3f2a21, emissive: 0xffb970, emissiveIntensity: 0.78, roughness: 0.42,
    });
    for (let i = 0; i < 5; i++) {
      addBox(g, 0.82, 0.035, 2.6, 13.2 + i * 0.95, 0.37 + i * 0.3, 0, CRIMSON, { roughness: 0.62 });
      addBox(g, 0.86, 0.03, 3.0, 13.2 + i * 0.95, 0.365 + i * 0.3, 0, GOLD, { metalness: 0.32 });
    }
    for (const zz of [-2.2, 0, 2.2]) {
      addBox(g, 0.12, 1.28, 1.85, 13.82, 1.6, zz, 0, { material: warm });
      addBox(g, 0.16, 0.1, 2.1, 13.86, 1.02, zz, GOLD, { metalness: 0.4 });
      addBox(g, 0.16, 0.1, 2.1, 13.86, 2.2, zz, GOLD, { metalness: 0.4 });
    }
    addStar(g, 0.44, 0.12, 13.95, 2.5, 0, 0xffd27a, { ry: Math.PI / 2, emissiveIntensity: 1.4 });
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        addCylinder(g, 0.04, 0.05, 1.0, 5, 13.6 + i * 1.15, 0.82 + i * 0.3, side * 3.7, GOLD, { metalness: 0.45 });
        addSphere(g, 0.09, 6, 13.6 + i * 1.15, 1.38 + i * 0.3, side * 3.7, GOLD_LIGHT, { metalness: 0.3 });
      }
      cylinderBetween(
        g,
        new THREE.Vector3(13.45, 1.38, side * 3.7),
        new THREE.Vector3(17.4, 2.28, side * 3.7),
        0.045, GOLD, { segments: 5, metalness: 0.42 },
      );
    }
    // warm low lanterns flank the red carpet
    for (const side of [-1, 1]) {
      addCylinder(g, 0.08, 0.11, 2.2, 6, 18.1, 1.1, side * 4.3, TEAL_DARK, { metalness: 0.2 });
      addSphere(g, 0.23, 8, 18.1, 2.28, side * 4.3, 0xffe0a3, { material: bulbMat });
      addCone(g, 0.34, 0.5, 6, 18.1, 2.6, side * 4.3, GOLD, { metalness: 0.35 });
    }
  }

  // Red damask panels and gold ribs around the plinth.
  const panels = 18;
  for (let i = 0; i < panels; i++) {
    const a = (i / panels) * Math.PI * 2;
    const px = Math.cos(a) * 13.9;
    const pz = Math.sin(a) * 11.1;
    const panel = addBox(g, 2.1, 1.15, 0.16, px, 1.55, pz, i % 3 === 0 ? CRIMSON : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.65, metalness: 0.08,
    });
    if (i % 3 === 0) {
      addBox(g, 1.85, 0.08, 0.2, px, 2.12, pz, GOLD, { ry: -a + Math.PI / 2, metalness: 0.35 });
      addBox(g, 1.85, 0.08, 0.2, px, 1.02, pz, GOLD, { ry: -a + Math.PI / 2, metalness: 0.35 });
    }
  }

  // Perimeter railing with lit finials.
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const px = Math.cos(a) * 12.4;
    const pz = Math.sin(a) * 9.9;
    if (east && Math.abs(pz) < 5.1 && px > 11.8) continue;
    if (!east && Math.abs(px) < 5.1 && pz > 8.0) continue;
    addCylinder(g, 0.06, 0.09, 1.0, 5, px, 3.0, pz, GOLD, { metalness: 0.42 });
    addSphere(g, 0.11, 6, px, 3.55, pz, 0xffe0a3, { material: bulbMat });
  }
  addTorus(g, 12.35, 0.055, 4, 52, 0, 2.95, 0, GOLD, {
    rx: Math.PI / 2, metalness: 0.45, roughness: 0.34,
  }).scale.set(1, 0.80, 1);

  // Two striped garden pavilions flank the cable hall.
  for (const dz of [-6.3, 6.3]) {
    const pz = dz;
    for (const px of [-3.7, 3.7]) {
      for (const zoff of [-2.15, 2.15]) {
        addCylinder(g, 0.16, 0.23, 4.3, 8, px, 4.65, pz + zoff, CREAM, { roughness: 0.52 });
        addCylinder(g, 0.31, 0.23, 0.2, 8, px, 6.72, pz + zoff, GOLD, { metalness: 0.4, roughness: 0.34 });
        addBulb(g, px, 7.03, pz + zoff, 0.12, bulbMat);
      }
    }
    // low rail and crimson swag under each pavilion
    for (const zz of [pz - 2.2, pz + 2.2]) {
      addBox(g, 7.6, 0.07, 0.07, 0, 3.35, zz, GOLD, { metalness: 0.4 });
    }
    for (const xx of [-3.7, 3.7]) addBox(g, 0.07, 0.07, 4.4, xx, 3.35, pz, GOLD, { metalness: 0.4 });
    addBox(g, 6.5, 0.72, 0.18, 0, 2.95, pz + Math.sign(pz) * 2.23, CRIMSON, { roughness: 0.58 });
    for (let i = 0; i < 7; i++) {
      addSphere(g, 0.11, 6, -2.7 + i * 0.9, 3.0, pz + Math.sign(pz) * 2.35, GOLD_LIGHT, { metalness: 0.35 });
    }
    stripedRoof(g, 0, 6.72, pz, 4.7, 2.35, bulbMat, 14);
    // hanging chandelier under the pavilion
    addCylinder(g, 0.04, 0.04, 1.8, 5, 0, 6.0, pz, GOLD);
    addSphere(g, 0.24, 8, 0, 5.05, pz, 0xffe1a0, { material: bulbMat });
    addTorus(g, 0.42, 0.04, 4, 12, 0, 5.12, pz, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  }

  // The tall open portal frames the traveling cable.
  const portalY = 16.6;
  for (const px of [-4.8, 4.8]) {
    for (const pz of [-3.6, 3.6]) {
      addCylinder(g, 0.28, 0.46, 14.2, 8, px, 9.35, pz, TEAL, { roughness: 0.58 });
      addCylinder(g, 0.48, 0.38, 0.28, 8, px, 5.1, pz, GOLD, { metalness: 0.42 });
      addCylinder(g, 0.38, 0.48, 0.28, 8, px, 15.85, pz, GOLD, { metalness: 0.42 });
      addBulb(g, px, 12.0, pz, 0.14, bulbMat);
      addBox(g, 0.08, 8.4, 0.08, px + Math.sign(px) * 0.27, 10.2, pz, GOLD, { metalness: 0.36 });
    }
  }
  for (const pz of [-3.6, 3.6]) {
    addBox(g, 10.6, 0.44, 0.38, 0, portalY, pz, GOLD, { metalness: 0.4 });
    addBox(g, 10.6, 0.22, 0.24, 0, portalY - 0.62, pz, TEAL, { metalness: 0.16 });
  }
  for (const px of [-4.8, 4.8]) {
    addBox(g, 0.38, 0.44, 7.9, px, portalY, 0, GOLD, { metalness: 0.4 });
    addBox(g, 0.24, 0.22, 7.9, px, portalY - 0.62, 0, TEAL, { metalness: 0.16 });
  }
  // central ridge and crown
  addBox(g, 10.9, 0.26, 8.1, 0, portalY + 0.45, 0, TEAL_DARK);
  addBox(g, 7.4, 0.18, 5.2, 0, portalY + 0.7, 0, GOLD, { metalness: 0.36 });
  makeDome(g, 0, portalY + 1.1, 0, 2.0, bulbMat);
  // finials at the four corners
  for (const px of [-4.8, 4.8]) {
    for (const pz of [-3.6, 3.6]) {
      addCone(g, 0.48, 1.5, 6, px, portalY + 1.35, pz, CRIMSON, { roughness: 0.55 });
      addSphere(g, 0.13, 6, px, portalY + 2.15, pz, GOLD_LIGHT, { emissive: 0xffc363, emissiveIntensity: 1.2 });
    }
  }
  // Cable bullwheel under the portal crown.
  addTorus(g, 2.2, 0.1, 5, 32, 0, 15.05, 0, GOLD, { rx: Math.PI / 2, metalness: 0.5, roughness: 0.3 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addCylinder(g, 0.045, 0.045, 2.05, 4, Math.cos(a) * 1.05, 15.05, Math.sin(a) * 1.05, GOLD, {
      rz: Math.PI / 2 - a, metalness: 0.4,
    });
  }
  // a crown of warm lamps under the upper beams
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    addBulb(g, Math.cos(a) * 5.5, 16.0, Math.sin(a) * 4.2, 0.12, bulbMat);
  }

  // free-standing entrance arch with the attraction name
  const archX = east ? 11.1 : 0;
  const archZ = east ? 0 : 9.6;
  if (east) {
    for (const zz of [-4.8, 4.8]) {
      addCylinder(g, 0.12, 0.2, 6.8, 6, archX, 3.4, zz, GOLD, { metalness: 0.38 });
      addCone(g, 0.4, 0.8, 6, archX, 7.0, zz, CRIMSON);
    }
    addBox(g, 0.16, 0.18, 9.9, archX, 6.7, 0, GOLD, { metalness: 0.4 });
  } else {
    for (const xx of [-4.8, 4.8]) {
      addCylinder(g, 0.12, 0.2, 6.8, 6, xx, 3.4, archZ, GOLD, { metalness: 0.38 });
      addCone(g, 0.4, 0.8, 6, xx, 7.0, archZ, CRIMSON);
    }
    addBox(g, 9.9, 0.18, 0.16, 0, 6.7, archZ, GOLD, { metalness: 0.4 });
  }
  const sign = makeSign({
    text: title, sub, worldWidth: 8.4, worldHeight: 1.65,
    bg: 'rgba(11,31,35,.9)', border: 'rgba(229,190,111,.66)', color: '#fff0cc',
    subColor: '#d7b174', width: 1024, height: 220,
    font: '600 82px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 30px "Avenir Next", "Segoe UI", sans-serif',
  });
  if (east) {
    sign.position.set(archX + 0.12, 5.75, 0);
    sign.rotation.y = Math.PI / 2;
  } else {
    sign.position.set(0, 5.75, archZ + 0.12);
  }
  g.add(sign);

  const stationSign = makeSign({
    text: stationName, sub: 'ASTRALIA SKYWAY STATION', worldWidth: 4.2, worldHeight: 0.9,
    bg: 'rgba(78,26,34,.84)', border: 'rgba(226,186,108,.48)', color: '#ffe9c6', subColor: '#d5b274',
    width: 700, height: 150, star: false,
    font: '600 58px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 22px "Avenir Next", sans-serif',
  });
  stationSign.position.set(east ? archX + 0.1 : 0, 4.0, east ? 0 : archZ + 0.1);
  stationSign.rotation.y = east ? Math.PI / 2 : 0;
  g.add(stationSign);

  // Queue standards in the forecourt.
  for (const side of [-1, 1]) {
    const qx = east ? 15.4 : side * 3.6;
    const qz = east ? side * 4.0 : 15.3;
    for (let i = 0; i < 4; i++) {
      const px = east ? qx + i * 1.2 : qx;
      const pz = east ? qz : qz + i * 1.1;
      addCylinder(g, 0.05, 0.07, 1.0, 5, px, 0.5, pz, GOLD, { metalness: 0.45 });
      addSphere(g, 0.12, 6, px, 1.08, pz, GOLD_LIGHT, { metalness: 0.4 });
    }
  }
  // Garden lamps outside the deck.
  for (const [lx, lz] of [[-11, -8], [-11, 8], [11, -8], [11, 8]]) {
    const px = east ? lx : lx;
    const pz = east ? lz : lz;
    if (!east && lz > 8) continue;
    addCylinder(g, 0.09, 0.13, 3.2, 6, px, 1.6, pz, TEAL_DARK, { metalness: 0.25 });
    addSphere(g, 0.25, 8, px, 3.3, pz, 0xffe2a6, { material: bulbMat });
    addCone(g, 0.35, 0.45, 6, px, 3.55, pz, GOLD, { metalness: 0.35 });
  }

  // A rope of small lamps around the portal base.
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    addBulb(g, Math.cos(a) * 7.2, 2.65, Math.sin(a) * 5.4, 0.1, bulbMat);
  }

  return {
    group: g,
    x, z, face,
    marker: new THREE.Vector3(x, 22.5, z),
    collider: { type: 'rect', x, z, hx: 15.2, hz: 12.4 },
    stairs: { east, x, z },
  };
}

function createPylon(scene, bulbMat, x, z, height) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  scene.add(g);
  addCylinder(g, 4.4, 5.2, 0.9, 10, 0, 0.45, 0, STONE, { roughness: 0.95 });
  addCylinder(g, 3.5, 4.1, 0.4, 10, 0, 1.0, 0, GOLD, { metalness: 0.35, roughness: 0.4 });
  addCylinder(g, 2.0, 2.6, 2.0, 8, 0, 2.0, 0, TEAL_DARK, { roughness: 0.7 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addBox(g, 1.8, 1.2, 0.12, Math.cos(a) * 3.6, 1.7, Math.sin(a) * 3.6, i % 2 ? CRIMSON : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.62,
    });
  }
  // Tapered four-legged pylon with gold lacing.
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      cylinderBetween(
        g,
        new THREE.Vector3(sx * 2.1, 1.2, sz * 2.1),
        new THREE.Vector3(sx * 0.62, height - 2.0, sz * 0.62),
        0.18, TEAL, { segments: 6, roughness: 0.55 },
      );
      cylinderBetween(
        g,
        new THREE.Vector3(sx * 1.95, 1.4, sz * 1.95),
        new THREE.Vector3(sx * 0.58, height - 2.2, sz * 0.58),
        0.075, GOLD, { segments: 5, metalness: 0.42 },
      );
    }
  }
  for (let y = 5; y < height - 2; y += 4.4) {
    const shrink = 1 - (y / height) * 0.48;
    for (const sz of [-1, 1]) {
      addBox(g, 3.8 * shrink, 0.11, 0.11, 0, y, sz * 2.2 * shrink, GOLD, { metalness: 0.35 });
    }
    for (const sx of [-1, 1]) {
      addBox(g, 0.11, 0.11, 3.8 * shrink, sx * 2.2 * shrink, y, 0, GOLD, { metalness: 0.35 });
    }
  }
  addCylinder(g, 0.58, 0.95, 4.2, 8, 0, height - 1.3, 0, TEAL, { roughness: 0.5 });
  addCylinder(g, 2.8, 2.2, 0.35, 8, 0, height + 0.5, 0, GOLD, { metalness: 0.4 });
  addBox(g, 6.2, 0.26, 0.34, 0, height + 0.55, 0, GOLD, { metalness: 0.42, roughness: 0.32 });
  for (const sx of [-1, 1]) {
    addCylinder(g, 0.07, 0.07, 0.7, 5, sx * 2.25, height + 0.78, 0, GOLD, { metalness: 0.45 });
    addTorus(g, 0.52, 0.08, 5, 14, sx * 2.25, height + 1.0, 0, GOLD, {
      ry: Math.PI / 2, metalness: 0.42,
    });
    addBulb(g, sx * 2.25, height + 0.15, 0, 0.11, bulbMat);
  }
  addSphere(g, 0.3, 8, 0, height + 1.35, 0, GOLD_LIGHT, { emissive: 0xffc05c, emissiveIntensity: 1.8 });
  addCylinder(g, 0.06, 0.08, 4.6, 5, 0, height + 3.3, 0, GOLD, { metalness: 0.4 });
  addCone(g, 0.48, 1.3, 6, 0, height + 3.0, 0, CRIMSON, { roughness: 0.6 });
  // Lamps mid-way up the tower.
  for (const sx of [-1, 1]) {
    addBulb(g, sx * 2.0, height * 0.52, 0, 0.16, bulbMat);
    addBulb(g, 0, height * 0.52, sx * 2.0, 0.16, bulbMat);
  }
  return { group: g, x, z, height, collider: { type: 'circle', x, z, r: 4.1 } };
}

function makeGondola(scene, bulbMat, cabinMat, cabinEmissiveMat, index) {
  const root = new THREE.Group();
  scene.add(root);
  const swing = new THREE.Group();
  root.add(swing);
  // cable carriage
  addBox(root, 0.34, 0.28, 0.9, 0, 0.03, 0, GOLD, { metalness: 0.48, roughness: 0.3 });
  for (const sx of [-1, 1]) {
    addCylinder(root, 0.22, 0.22, 0.14, 10, sx * 0.28, 0.16, 0, IRON, { rz: Math.PI / 2, roughness: 0.35 });
    addTorus(root, 0.22, 0.035, 4, 12, sx * 0.28, 0.16, 0, GOLD, { ry: Math.PI / 2, metalness: 0.45 });
  }
  // hanger
  addCylinder(swing, 0.055, 0.075, 1.4, 6, 0, -0.72, 0, GOLD, { metalness: 0.45, roughness: 0.3 });
  for (const sx of [-1, 1]) {
    cylinderBetween(
      swing,
      new THREE.Vector3(0, -1.24, 0),
      new THREE.Vector3(sx * 0.76, -1.58, 0.06),
      0.04, GOLD, { segments: 5, metalness: 0.4 },
    );
  }
  addTorus(swing, 0.38, 0.055, 5, 16, 0, -1.28, 0, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  // onion roof
  addSphere(swing, 1.05, 16, 0, -1.78, 0, index % 2 ? 0x9d2737 : 0x7f202f, {
    sy: 0.66, roughness: 0.38, metalness: 0.2,
  });
  addTorus(swing, 1.47, 0.075, 4, 24, 0, -1.96, 0, GOLD, { rx: Math.PI / 2, metalness: 0.5, roughness: 0.3 });
  addTorus(swing, 0.93, 0.055, 4, 20, 0, -1.32, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  addCylinder(swing, 0.035, 0.045, 1.1, 5, 0, -1.16, 0, GOLD, { metalness: 0.45 });
  addStar(swing, 0.25, 0.075, 0, -0.85, 0, 0xffd574, { emissiveIntensity: 1.55, metalness: 0.35 });
  // glass cabin with a brightly lit window band; slim gold rims instead of heavy discs
  const cabin = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.36, 1.78, 24, 1, false), cabinMat);
  cabin.position.y = -2.82;
  swing.add(cabin);
  addTorus(swing, 1.46, 0.06, 4, 24, 0, -3.7, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45, roughness: 0.32 });
  addCylinder(swing, 1.02, 0.82, 0.3, 16, 0, -3.84, 0, TEAL_DARK, { roughness: 0.6 });
  addSphere(swing, 0.12, 8, 0, -4.04, 0, 0xffd08a, { material: bulbMat });
  // Four gilded ribs bridge the cabin panels.
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addCylinder(swing, 0.027, 0.027, 1.82, 4, Math.cos(a) * 1.46, -2.82, Math.sin(a) * 1.46, GOLD, {
      metalness: 0.4, roughness: 0.32,
    });
  }
  // small painted pennant
  addBox(swing, 0.06, 0.65, 0.45, 0.84, -1.55, 0, CRIMSON, { rx: 0.2 });
  return {
    root, swing, cabin,
    t: index / 8,
    index,
    speed: 0.0115,
    phase: (index / 8) * Math.PI * 2,
  };
}

function buildCabinMaterials() {
  const map = makeCabinTexture();
  const emissiveMap = makeCabinEmissive();
  const mat = new THREE.MeshStandardMaterial({
    map, emissiveMap, color: 0xffffff, roughness: 0.42, metalness: 0.34,
    emissive: 0xffb568, emissiveIntensity: 0.9,
  });
  return mat;
}

function createRouteGeometry() {
  const upper = ROUTE.map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const forward = upper.map((p) => new THREE.Vector3(p.x + CABLE_OFFSET, p.y, p.z));
  const backward = [...upper].reverse().map((p) => new THREE.Vector3(p.x - CABLE_OFFSET, p.y, p.z));
  const northTurn = new THREE.Vector3(NORTH.x, 15.0, NORTH.z - 1.6);
  const southTurn = new THREE.Vector3(SOUTH.x, 15.0, SOUTH.z + 1.8);
  const loopPoints = [...forward, northTurn, ...backward, southTurn];
  const loop = new THREE.CatmullRomCurve3(loopPoints, true, 'catmullrom', 0.25);
  loop.arcLengthDivisions = 900;
  const rideCurve = new THREE.CatmullRomCurve3(upper, false, 'catmullrom', 0.3);
  rideCurve.arcLengthDivisions = 500;
  return { loop, rideCurve, upper };
}

export function createSkyway(scene, bulbMat) {
  const group = new THREE.Group();
  scene.add(group);
  const { loop, rideCurve, upper } = createRouteGeometry();
  const stations = [
    createStation(scene, bulbMat, {
      x: SOUTH.x, z: SOUTH.z, face: 'east',
      title: '星梦空中缆车', sub: 'STARLIGHT SKYWAY', stationName: '星港站',
    }),
    createStation(scene, bulbMat, {
      x: NORTH.x, z: NORTH.z, face: 'south',
      title: '星梦空中缆车', sub: 'STARLIGHT SKYWAY', stationName: '湖畔站',
    }),
  ];
  const pylons = [
    createPylon(scene, bulbMat, -39.35, 68, 27.5),
    createPylon(scene, bulbMat, -26.35, -16, 28.5),
  ];

  // Continuous loop of dark steel cable, wrapped around the station bullwheels.
  const cableMat = new THREE.MeshStandardMaterial({
    color: 0x443d38, roughness: 0.38, metalness: 0.72, emissive: 0x140b08, emissiveIntensity: 0.3,
  });
  const cable = new THREE.Mesh(new THREE.TubeGeometry(loop, 720, 0.065, 5, true), cableMat);
  cable.name = 'skyway-cable';
  group.add(cable);

  // A thin gilded running line and warm marker bulbs make the span read at night.
  const runningPts = [];
  for (let i = 0; i <= 500; i++) {
    const p = loop.getPointAt(i / 500);
    runningPts.push(new THREE.Vector3(p.x, p.y - 0.1, p.z));
  }
  const runningCurve = new THREE.CatmullRomCurve3(runningPts, true);
  const running = new THREE.Mesh(
    new THREE.TubeGeometry(runningCurve, 500, 0.018, 4, true),
    new THREE.MeshStandardMaterial({ color: 0xa07c4d, roughness: 0.35, metalness: 0.55, emissive: 0x3b2411, emissiveIntensity: 0.25 }),
  );
  running.name = 'skyway-running-line';
  group.add(running);
  for (let i = 0; i < 46; i++) {
    const p = loop.getPointAt(i / 46);
    addBulb(group, p.x, p.y - 0.2, p.z, 0.075, bulbMat);
  }

  const cabinMat = buildCabinMaterials();
  const gondolas = [];
  for (let i = 0; i < 8; i++) {
    const g = makeGondola(scene, bulbMat, cabinMat, null, i);
    gondolas.push(g);
  }

  const tmpP = new THREE.Vector3();
  const tmpAhead = new THREE.Vector3();
  const tmpTan = new THREE.Vector3();
  const tmpRight = new THREE.Vector3();
  const viewPos = new THREE.Vector3();
  const viewTarget = new THREE.Vector3();

  function update(dt, elapsed) {
    for (const car of gondolas) {
      car.t = (car.t + dt * car.speed) % 1;
      const p = loop.getPointAt(car.t);
      const ahead = loop.getPointAt((car.t + 0.0016) % 1);
      car.root.position.copy(p);
      car.root.lookAt(tmpAhead.copy(ahead));
      const sway = Math.sin(elapsed * 1.45 + car.phase);
      car.swing.rotation.z = sway * 0.025;
      car.swing.rotation.x = Math.cos(elapsed * 1.08 + car.phase) * 0.012;
      car.swing.rotation.y = Math.sin(elapsed * 0.65 + car.phase) * 0.02;
    }
  }

  return {
    group,
    loop,
    curve: loop,
    rideCurve,
    routePoints: upper,
    routeXZ: upper.map((p) => [p.x, p.z]),
    stations,
    pylons,
    gondolas,
    cable,
    colliders: [...stations.map((s) => s.collider), ...pylons.map((p) => p.collider)],
    markerStation: stations[0].marker,
    clearings: CLEARINGS,
    update,
    getRideView(t) {
      const c = THREE.MathUtils.clamp(t, 0, 1);
      const smooth = c * c * (3 - 2 * c);
      // Stay outside both station envelopes; the stations are beautiful from
      // the air, but flying through their roofs is not part of the ride.
      const u = 0.11 + smooth * 0.78;
      const p = rideCurve.getPointAt(u);
      const ahead = rideCurve.getPointAt(Math.min(0.999, u + 0.012));
      const tangent = tmpTan.copy(ahead).sub(p).normalize();
      tmpRight.crossVectors(tangent, new THREE.Vector3(0, 1, 0)).normalize();
      const lift = 1.3 + Math.sin(t * Math.PI * 2.3) * 0.14;
      viewPos.copy(p).addScaledVector(tmpRight, 8.6).addScaledVector(new THREE.Vector3(0, 1, 0), lift);
      viewTarget.copy(p).addScaledVector(tangent, 30).addScaledVector(tmpRight, 1.4).addScaledVector(new THREE.Vector3(0, 1, 0), -4.4);
      return { position: viewPos, target: viewTarget, fov: 64 };
    },
  };
}

export { CLEARINGS };
