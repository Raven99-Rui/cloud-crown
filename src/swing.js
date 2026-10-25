import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus, cylinderBetween, makeSign,
} from './builders.js';

const GOLD = 0xd8b16a;
const GOLD_LIGHT = 0xffdda0;
const CREAM = 0xf0dfc0;
const TEAL = 0x15545a;
const TEAL_DARK = 0x0c343d;
const WINE = 0x8b2733;
const BLUE = 0x244b83;
const GREEN = 0x2a5b44;
const CHAIR_COUNT = 16;

const CENTER = new THREE.Vector3(100, 0, 88);

function chairColor(i) {
  return [WINE, TEAL, BLUE, CREAM][i % 4];
}

const REST_Y = -11.6;
const FLIGHT_Y = -4.9;

function buildChair(parent, i, bulbMat) {
  const angle = (i / CHAIR_COUNT) * Math.PI * 2;
  const radius = 8.15;
  const hanger = new THREE.Group();
  hanger.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
  hanger.rotation.y = Math.PI / 2 - angle;
  parent.add(hanger);

  // The whole cable + carriage swings around the top attachment.
  const pivot = new THREE.Group();
  hanger.add(pivot);

  // Unit-height cable, scaled vertically each frame as the carriage is hoisted.
  const wire = addCylinder(pivot, 0.035, 0.045, 1, 6, 0, -0.5, 0, GOLD, {
    metalness: 0.55, roughness: 0.32,
  });
  wire.scale.y = 10.3;
  wire.position.y = -5.15;
  addCylinder(pivot, 0.12, 0.12, 0.2, 10, 0, -0.08, 0, GOLD_LIGHT, { metalness: 0.5 });
  addSphere(pivot, 0.14, 8, 0, -0.2, 0, GOLD, { metalness: 0.55 });

  const carriage = new THREE.Group();
  carriage.position.y = REST_Y;
  pivot.add(carriage);

  const color = chairColor(i);
  addBox(carriage, 1.45, 0.17, 1.12, 0, 0, 0, color, { roughness: 0.72 });
  addBox(carriage, 1.23, 0.12, 0.92, 0, 0.14, 0.02, CREAM, { roughness: 0.8 });
  addBox(carriage, 1.24, 1.05, 0.14, 0, 0.52, -0.52, color, { roughness: 0.7 });
  addBox(carriage, 1.05, 0.64, 0.1, 0, 0.54, -0.43, CREAM, { roughness: 0.8 });
  for (const side of [-1, 1]) {
    addBox(carriage, 0.1, 0.56, 0.12, side * 0.63, 0.53, -0.47, GOLD, { metalness: 0.35 });
    addBox(carriage, 0.1, 0.1, 0.86, side * 0.64, 0.68, 0.03, GOLD, { metalness: 0.35 });
    addBox(carriage, 0.09, 0.52, 0.09, side * 0.55, 0.31, 0.47, GOLD, { metalness: 0.35 });
  }
  addBox(carriage, 1.38, 0.13, 0.12, 0, 0.86, 0.55, GOLD_LIGHT, { metalness: 0.4 });
  addBox(carriage, 1.18, 0.07, 0.08, 0, 0.53, 0.35, 0x4a252b, { roughness: 0.8 });
  addBox(carriage, 0.1, 0.48, 0.08, 0, 0.58, 0.34, GOLD, { metalness: 0.35 });
  addStar(carriage, 0.17, 0.04, 0, 0.64, 0.6, 0xffd475, { emissiveIntensity: 0.8 });
  addSphere(carriage, 0.08, 6, -0.48, 0.16, 0.42, 0xffc46c, { material: bulbMat });
  addSphere(carriage, 0.08, 6, 0.48, 0.16, 0.42, 0xffc46c, { material: bulbMat });
  // top suspension yoke and cable clamp
  addCylinder(carriage, 0.09, 0.09, 0.22, 8, 0, 0.93, 0, GOLD_LIGHT, { metalness: 0.5 });
  addTorus(carriage, 0.16, 0.035, 4, 12, 0, 0.91, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });

  return { hanger, pivot, carriage, wire, phase: i * 1.7 };
}

export function createSwingRide(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.copy(CENTER);
  scene.add(group);

  // base terrace
  addCylinder(group, 10.9, 11.4, 0.8, 32, 0, 0.4, 0, TEAL_DARK, { roughness: 0.82 });
  addTorus(group, 10.8, 0.18, 5, 48, 0, 0.82, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  addCylinder(group, 10.3, 10.6, 0.16, 32, 0, 0.88, 0, 0xcaa77d, { roughness: 0.9 });
  addTorus(group, 10.28, 0.09, 4, 48, 0, 0.98, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });

  // glazed panels and rails around the platform
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const x = Math.cos(a) * 10.12;
    const z = Math.sin(a) * 10.12;
    addBox(group, 3.0, 1.22, 0.13, x, 1.55, z, i % 4 === 0 ? WINE : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.7,
    });
    addBox(group, 2.7, 0.08, 0.16, x, 2.17, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
    addBox(group, 2.35, 0.06, 0.15, x, 1.14, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.38 });
    if (i % 4 === 0) {
      addStar(group, 0.3, 0.07, x, 1.58, z, 0xffd37a, { ry: -a + Math.PI / 2, emissiveIntensity: 0.7 });
    }
  }
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    addCylinder(group, 0.11, 0.14, 2.2, 8, Math.cos(a) * 10.38, 1.9, Math.sin(a) * 10.38, GOLD, { metalness: 0.4 });
    addSphere(group, 0.16, 8, Math.cos(a) * 10.38, 3.04, Math.sin(a) * 10.38, 0xffd48b, { material: bulbMat });
  }
  addTorus(group, 10.4, 0.12, 5, 56, 0, 2.92, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.45 });

  // south steps and entrance
  for (let i = 0; i < 4; i++) {
    addBox(group, 4.5 + i * 0.7, 0.22, 0.9, 0, 0.18 + i * 0.18, 11.1 + i * 0.62, 0xb5976d, { roughness: 0.88 });
  }
  addBox(group, 4.9, 0.32, 0.8, 0, 0.16, 13.1, TEAL_DARK, { roughness: 0.8 });
  for (const side of [-1, 1]) {
    addCylinder(group, 0.12, 0.17, 3.6, 8, side * 2.5, 1.8, 12.5, GOLD, { metalness: 0.4 });
    addSphere(group, 0.18, 8, side * 2.5, 3.66, 12.5, 0xffd48b, { material: bulbMat });
  }

  // central tower
  addCylinder(group, 4.2, 4.8, 1.2, 12, 0, 1.5, 0, TEAL_DARK, { roughness: 0.7 });
  addCylinder(group, 3.3, 3.7, 1.4, 12, 0, 2.7, 0, TEAL, { roughness: 0.62 });
  addTorus(group, 3.45, 0.13, 5, 24, 0, 3.42, 0, GOLD, { rx: Math.PI / 2, metalness: 0.5 });
  addCylinder(group, 1.85, 2.4, 9.6, 12, 0, 8.2, 0, TEAL, { roughness: 0.65 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = Math.cos(a) * 2.05;
    const z = Math.sin(a) * 2.05;
    addCylinder(group, 0.12, 0.12, 9.6, 6, x, 8.2, z, GOLD, { metalness: 0.45 });
    addBox(group, 0.7, 1.5, 0.09, x * 0.92, 8.1, z * 1.06, i % 2 ? WINE : CREAM, {
      ry: -a, roughness: 0.68,
    });
    addSphere(group, 0.12, 6, x, 12.9, z, 0xffd37a, { material: bulbMat });
  }
  for (const y of [3.7, 5.2, 7.4, 9.6, 11.8, 12.7]) {
    addTorus(group, 2.15, 0.08, 4, 20, 0, y, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  }
  addCylinder(group, 3.0, 2.2, 0.6, 12, 0, 13.15, 0, GOLD, { metalness: 0.4 });

  // The canopy is cantilevered from the central mast.  There are deliberately
  // no landing columns around the flight path: the chairs must swing free.
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    const x = Math.cos(a) * 2.1;
    const z = Math.sin(a) * 2.1;
    const rx = Math.cos(a) * 9.6;
    const rz = Math.sin(a) * 9.6;
    cylinderBetween(
      group,
      new THREE.Vector3(x, 12.35, z),
      new THREE.Vector3(rx, 16.14, rz),
      0.085, GOLD, { segments: 5, metalness: 0.42 },
    );
    addSphere(group, 0.13, 7, rx, 16.18, rz, 0xffd38a, { material: bulbMat });
  }
  // Short mast finials and pennants sit above the roof, never on the ride floor.
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const x = Math.cos(a) * 10.65;
    const z = Math.sin(a) * 10.65;
    addCylinder(group, 0.045, 0.065, 3.1, 5, x, 17.85, z, GOLD, { metalness: 0.45 });
    addSphere(group, 0.11, 6, x, 19.46, z, 0xffd38a, { material: bulbMat });
    addBox(group, 0.04, 0.9, 0.7, x + 0.26, 19.1, z, i % 2 ? WINE : TEAL, {
      ry: -a, roughness: 0.68,
    });
  }

  // rotating crown and hanging chairs
  const rotor = new THREE.Group();
  rotor.position.y = 12.75;
  group.add(rotor);
  addCylinder(rotor, 9.3, 9.3, 0.32, 32, 0, 0, 0, GOLD, { metalness: 0.4, roughness: 0.38 });
  addTorus(rotor, 9.32, 0.14, 5, 56, 0, 0.13, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  addTorus(rotor, 7.7, 0.08, 4, 48, 0, -0.15, 0, 0xb8904f, { rx: Math.PI / 2, metalness: 0.4 });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    addBox(rotor, 8.1, 0.06, 0.11, Math.cos(a) * 4.55, -0.2, Math.sin(a) * 4.55, i % 2 ? GOLD : TEAL, {
      ry: -a, metalness: 0.35, roughness: 0.55,
    });
  }
  addCylinder(rotor, 1.35, 1.35, 0.22, 16, 0, -0.26, 0, TEAL_DARK, { roughness: 0.6 });
  addStar(rotor, 0.55, 0.12, 0, -0.4, 0, 0xffd16a, { emissiveIntensity: 1.2, rx: Math.PI / 2 });
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    addSphere(rotor, 0.12, 6, Math.cos(a) * 9.1, -0.02, Math.sin(a) * 9.1, 0xffd28a, { material: bulbMat });
  }
  const chairs = [];
  for (let i = 0; i < CHAIR_COUNT; i++) chairs.push(buildChair(rotor, i, bulbMat));

  // The decorated underside of the canopy.  From ground level this is the
  // surface guests actually see, so it carries the red/cream stripes too.
  const ceilingY = 16.1;
  const ceilingR = 11.05;
  for (let i = 0; i < 16; i++) {
    const a0 = (i / 16) * Math.PI * 2;
    const a1 = ((i + 1) / 16) * Math.PI * 2;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
      0, ceilingY, 0,
      Math.cos(a0) * ceilingR, ceilingY, Math.sin(a0) * ceilingR,
      Math.cos(a1) * ceilingR, ceilingY, Math.sin(a1) * ceilingR,
    ]), 3));
    geo.computeVertexNormals();
    const color = i % 2 ? CREAM : WINE;
    group.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color, roughness: 0.72, metalness: 0.04, side: THREE.DoubleSide,
      emissive: color, emissiveIntensity: i % 2 ? 0.28 : 0.34,
    })));
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    cylinderBetween(
      group,
      new THREE.Vector3(0, ceilingY - 0.04, 0),
      new THREE.Vector3(Math.cos(a) * ceilingR, ceilingY - 0.04, Math.sin(a) * ceilingR),
      0.045, GOLD, { segments: 4, metalness: 0.4 },
    );
  }
  addCylinder(group, 1.35, 1.35, 0.18, 16, 0, ceilingY - 0.08, 0, TEAL_DARK, { roughness: 0.6 });
  addStar(group, 0.62, 0.12, 0, ceilingY - 0.2, 0, 0xffd16a, {
    emissiveIntensity: 1.25, rx: Math.PI / 2,
  });

  // canopy fascia, scalloped valance and lamps
  addCylinder(group, 10.2, 10.5, 0.8, 24, 0, 15.95, 0, TEAL_DARK, { roughness: 0.65 });
  addTorus(group, 10.68, 0.23, 5, 64, 0, 16.3, 0, GOLD, { rx: Math.PI / 2, metalness: 0.48 });
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    addSphere(group, 0.14, 6, Math.cos(a) * 10.58, 16.06, Math.sin(a) * 10.58, 0xffd188, { material: bulbMat });
  }
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    addBox(group, 1.7, 0.62, 0.08, Math.cos(a) * 10.3, 16.12, Math.sin(a) * 10.3, i % 4 === 0 ? WINE : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.7,
    });
  }
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    addBox(group, 1.5, 0.58, 0.06, Math.cos(a) * 10.22, 15.48, Math.sin(a) * 10.22, i % 2 ? CREAM : WINE, {
      ry: -a + Math.PI / 2, roughness: 0.72,
    });
    addSphere(group, 0.075, 5, Math.cos(a) * 10.16, 15.12, Math.sin(a) * 10.16, GOLD_LIGHT, {
      material: bulbMat,
    });
  }
  addTorus(group, 10.28, 0.08, 4, 64, 0, 15.1, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    addStar(group, 0.28, 0.06, Math.cos(a) * 10.34, 16.11, Math.sin(a) * 10.34, 0xffd378, {
      ry: -a + Math.PI / 2, emissiveIntensity: 0.6,
    });
  }

  // striped tent roof
  for (let i = 0; i < 16; i++) {
    const color = i % 2 ? CREAM : WINE;
    addCone(group, 11.2, 4.8, 1, 0, 18.7, 0, color, {
      thetaStart: (i / 16) * Math.PI * 2, thetaLength: Math.PI / 8,
      openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.72,
      emissive: color, emissiveIntensity: i % 2 ? 0.46 : 0.6,
    });
  }
  addTorus(group, 11.25, 0.16, 4, 64, 0, 16.4, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    cylinderBetween(
      group,
      new THREE.Vector3(0, 21.2, 0),
      new THREE.Vector3(Math.cos(a) * 11.2, 16.33, Math.sin(a) * 11.2),
      0.06, GOLD, { segments: 4, metalness: 0.4 },
    );
  }
  // little corner pagodas
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const x = Math.cos(a) * 7.3;
    const z = Math.sin(a) * 7.3;
    const y = 18.0;
    addCylinder(group, 0.8, 1.3, 1.2, 8, x, y, z, CREAM, { roughness: 0.7 });
    addCone(group, 1.45, 1.35, 8, x, y + 1.35, z, i % 2 ? WINE : TEAL, { roughness: 0.65 });
    addCylinder(group, 0.04, 0.04, 2.2, 4, x, y + 2.8, z, GOLD, { metalness: 0.5 });
    addCone(group, 0.4, 0.7, 3, x + 0.25, y + 3.65, z, WINE, { rz: Math.PI / 2.5 });
  }
  // central cupola
  addCylinder(group, 2.3, 2.5, 1.35, 12, 0, 21.5, 0, CREAM, { roughness: 0.7 });
  addCylinder(group, 2.1, 2.3, 0.6, 12, 0, 22.45, 0, GOLD, { metalness: 0.42 });
  addSphere(group, 2.2, 14, 0, 23.6, 0, WINE, { sy: 1.1, roughness: 0.55 });
  addTorus(group, 2.25, 0.08, 4, 24, 0, 22.7, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
  addCylinder(group, 0.06, 0.06, 3.2, 4, 0, 26.1, 0, GOLD, { metalness: 0.5 });
  addCone(group, 0.55, 1.0, 4, 0.38, 27.4, 0, WINE, { rz: Math.PI / 2.4 });
  addStar(group, 1.0, 0.24, 0, 27.9, 0, 0xffd477, { emissiveIntensity: 1.8 });

  // warm perimeter lamps
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    addCylinder(group, 0.08, 0.11, 2.8, 6, Math.cos(a) * 10.9, 1.4, Math.sin(a) * 10.9, GOLD, { metalness: 0.35 });
    addSphere(group, 0.16, 8, Math.cos(a) * 10.9, 2.86, Math.sin(a) * 10.9, 0xffd38a, { material: bulbMat });
  }

  const sign = makeSign({
    text: '复古飞椅', sub: 'THE STARLIGHT SWINGS · ATTRACTION 10', worldWidth: 6.2, worldHeight: 1.25,
    bg: 'rgba(12,45,48,.92)', border: 'rgba(224,184,102,.65)', color: '#ffefc9', subColor: '#e0bb78',
    width: 900, height: 200, font: '600 78px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 26px "Avenir Next", sans-serif',
  });
  sign.position.set(-5.4, 4.4, 12.8);
  group.add(sign);
  const warm = new THREE.PointLight(0xffc98d, 190, 26, 2);
  warm.position.set(0, 13.0, 0);
  group.add(warm);

  let active = false;
  let lift = 0;
  let tilt = 0;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const api = {
    group,
    center: CENTER.clone(),
    chairs,
    rotor,
    colliders: [{ type: 'circle', x: CENTER.x, z: CENTER.z, r: 12.8 }],
    marker: new THREE.Vector3(CENTER.x, 25, CENTER.z),
    setRideActive(v) { active = v; },
    getLift() { return lift; },
    update(dt, elapsed) {
      // Boarding: the carriages rest on the platform.  On start they are
      // hoisted up first; only after they clear the floor does the crown spin.
      const targetLift = active ? 1 : 0;
      lift += (targetLift - lift) * Math.min(1, dt * (active ? 0.62 : 0.55));
      lift = clamp01(lift);
      const easedLift = lift * lift * (3 - 2 * lift);
      const spinAmount = clamp01((lift - 0.55) / 0.45);
      if (active && spinAmount > 0) rotor.rotation.y += dt * 1.15 * spinAmount;

      const targetTilt = 0.62 * easedLift;
      tilt += (targetTilt - tilt) * Math.min(1, dt * 1.6);
      chairs.forEach((c) => {
        const carriageY = REST_Y + (FLIGHT_Y - REST_Y) * easedLift;
        c.carriage.position.y = carriageY;
        const cableLength = Math.max(0.4, -(carriageY + 0.9));
        c.wire.scale.y = cableLength;
        c.wire.position.y = -cableLength / 2;
        c.pivot.rotation.x = -tilt - Math.sin(elapsed * 1.4 + c.phase) * 0.035 * easedLift;
        c.pivot.rotation.z = Math.sin(elapsed * 1.8 + c.phase) * 0.025 * easedLift;
      });
    },
  };
  return api;
}
