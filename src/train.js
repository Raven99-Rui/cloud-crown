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
const TRACK_R = 157;
const PLATFORM_R = 154.0;

const STATION_DEFS = [
  { name: '南门站', en: 'SOUTH GATE', angle: Math.PI / 2 },
  { name: '东庭站', en: 'EAST GARDEN', angle: Math.PI / 4 },
  { name: '星海站', en: 'STAR LAKE', angle: Math.PI * 1.5 },
  { name: '松泉站', en: 'PINE SPRING', angle: Math.PI * 0.75 },
];
const ORDER = [1, 0, 3, 2];

export const TRAIN_STATIONS = STATION_DEFS.map((s) => ({
  ...s,
  x: Math.cos(s.angle) * PLATFORM_R,
  z: Math.sin(s.angle) * PLATFORM_R,
  trackX: Math.cos(s.angle) * TRACK_R,
  trackZ: Math.sin(s.angle) * TRACK_R,
}));

function clockTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#f3e6c8'; ctx.beginPath(); ctx.arc(w / 2, h / 2, w * 0.43, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#3c2b22'; ctx.lineWidth = w * 0.03; ctx.stroke();
    ctx.strokeStyle = '#5b4938'; ctx.lineWidth = w * 0.016;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(w / 2 + Math.cos(a) * w * 0.33, h / 2 + Math.sin(a) * h * 0.33);
      ctx.lineTo(w / 2 + Math.cos(a) * w * 0.38, h / 2 + Math.sin(a) * h * 0.38);
      ctx.stroke();
    }
    ctx.strokeStyle = '#3a2a21'; ctx.lineWidth = w * 0.03;
    ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2 + w * 0.14, h / 2 - h * 0.2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2 - w * 0.04, h / 2 - h * 0.3); ctx.stroke();
    ctx.fillStyle = '#c59b55'; ctx.beginPath(); ctx.arc(w / 2, h / 2, w * 0.035, 0, Math.PI * 2); ctx.fill();
  }, 256, 256);
}

function wheel(parent, x, y, z, r, color = 0x252a2c) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  addCylinder(g, r, r, 0.24, 14, 0, 0, 0, color, { rz: Math.PI / 2, roughness: 0.72 });
  addTorus(g, r * 0.72, 0.08, 4, 14, 0, 0, 0, GOLD, { ry: Math.PI / 2, metalness: 0.4 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addBox(g, 0.05, r * 1.25, 0.06, 0, Math.cos(a) * r * 0.5, Math.sin(a) * r * 0.5, GOLD, { rx: -a, metalness: 0.35 });
  }
  return g;
}

function buildEngine() {
  const engine = new THREE.Group();
  const wheels = [];
  addBox(engine, 1.9, 0.24, 6.2, 0, 0.62, 0, 0x262d2d, { roughness: 0.78 });
  addCylinder(engine, 0.84, 0.98, 4.0, 16, 0, 1.76, 0.55, WINE, {
    rx: Math.PI / 2, roughness: 0.5, metalness: 0.25, emissive: WINE, emissiveIntensity: 0.2,
  });
  addCylinder(engine, 0.88, 0.88, 0.22, 16, 0, 1.76, 2.55, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  addCylinder(engine, 0.72, 0.82, 0.75, 16, 0, 1.76, 2.9, TEAL_DARK, { rx: Math.PI / 2, roughness: 0.55 });
  addCylinder(engine, 0.28, 0.34, 1.35, 10, 0, 3.0, 1.55, TEAL_DARK, { roughness: 0.6 });
  addCylinder(engine, 0.44, 0.48, 0.22, 10, 0, 3.72, 1.55, GOLD, { metalness: 0.4 });
  addCone(engine, 0.36, 0.55, 10, 0, 3.9, 1.55, WINE, { roughness: 0.7 });
  addBox(engine, 1.55, 1.35, 1.8, 0, 1.85, -2.1, WINE, {
    roughness: 0.55, emissive: WINE, emissiveIntensity: 0.2,
  });
  addBox(engine, 1.28, 0.62, 1.83, 0, 2.15, -2.1, CREAM, { roughness: 0.72 });
  addBox(engine, 0.58, 0.22, 0.1, -0.35, 4.1, -2.5, 0x2b1b1d, { roughness: 0.8 });
  addBox(engine, 0.58, 0.22, 0.1, 0.35, 4.1, -2.5, 0x2b1b1d, { roughness: 0.8 });
  addTorus(engine, 0.8, 0.055, 4, 20, 0, 2.6, 1.6, GOLD, { metalness: 0.42 });
  for (const z of [-1.55, 0.0, 1.55]) {
    addTorus(engine, 0.85, 0.05, 4, 20, 0, 1.76, z, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.4 });
  }
  // round headlamp
  addCylinder(engine, 0.32, 0.36, 0.25, 12, 0, 2.5, 3.05, 0x2a2420, { rx: Math.PI / 2, roughness: 0.6 });
  addSphere(engine, 0.24, 10, 0, 2.5, 3.22, 0xffd87a, { emissive: 0xffb13f, emissiveIntensity: 1.7, roughness: 0.25 });
  addTorus(engine, 0.37, 0.055, 4, 16, 0, 2.5, 3.18, GOLD, { metalness: 0.42 });
  const headLight = new THREE.PointLight(0xffd995, 42, 12, 2);
  headLight.position.set(0, 2.5, 3.25);
  engine.add(headLight);
  // cowcatcher
  for (let i = 0; i < 7; i++) {
    addBox(engine, 0.16, 0.8, 1.1, -0.78 + i * 0.26, 0.58, 3.15, GOLD, { rx: 0.32, metalness: 0.4 });
  }
  addBox(engine, 1.5, 0.5, 0.1, 0, 1.05, 3.35, WINE, { roughness: 0.65 });
  addBox(engine, 1.2, 0.32, 0.08, 0, 1.4, 2.72, GOLD, { metalness: 0.4 });
  addBox(engine, 0.5, 0.26, 0.06, 0, 1.4, 2.67, 0x151b1c, { roughness: 0.6 });
  // gold name plate
  addBox(engine, 1.25, 0.25, 0.06, 0, 1.1, 2.58, GOLD_LIGHT, { metalness: 0.42 });
  for (const side of [-1, 1]) {
    for (const z of [-1.6, 0, 1.6]) {
      wheels.push(wheel(engine, side * 0.94, 0.94, z, 0.54));
    }
    addBox(engine, 0.12, 0.22, 4.1, side * 0.98, 0.72, 0.2, GOLD, { metalness: 0.4 });
    addBox(engine, 0.1, 0.1, 1.2, side * 0.98, 0.72, 1.6, 0xc9944b, { metalness: 0.4 });
  }
  // couplers
  addBox(engine, 0.35, 0.22, 0.75, 0, 0.65, 3.55, GOLD, { metalness: 0.4 });
  addBox(engine, 0.35, 0.22, 0.75, 0, 0.65, -3.15, GOLD, { metalness: 0.4 });
  return { group: engine, wheels };
}

function buildCarriage(index) {
  const car = new THREE.Group();
  const wheels = [];
  addBox(car, 1.9, 0.22, 6.2, 0, 0.62, 0, 0x262d2d, { roughness: 0.8 });
  addBox(car, 1.82, 0.8, 5.8, 0, 1.08, 0, index % 2 ? TEAL_DARK : WINE, { roughness: 0.58 });
  addBox(car, 1.9, 0.12, 5.9, 0, 1.52, 0, GOLD, { metalness: 0.4 });
  addBox(car, 1.7, 1.75, 4.9, 0, 2.18, 0, index % 2 ? WINE : TEAL_DARK, {
    roughness: 0.58, emissive: index % 2 ? WINE : TEAL_DARK, emissiveIntensity: 0.22,
  });
  for (let i = 0; i < 5; i++) {
    for (const side of [-1, 1]) {
      addBox(car, 0.06, 0.8, 0.64, side * 0.88, 2.3, -1.8 + i * 0.92, 0xffe5b6, {
        roughness: 0.32, emissive: 0xffb65c, emissiveIntensity: 0.22,
      });
      addBox(car, 0.09, 1.0, 0.1, side * 0.9, 2.25, -2.12 + i * 0.92, GOLD, { metalness: 0.4 });
    }
  }
  for (const z of [-1.8, 1.8]) {
    for (const side of [-1, 1]) {
      wheels.push(wheel(car, side * 0.8, 0.92, z, 0.48));
      addBox(car, 0.05, 0.5, 0.05, side * 0.94, 0.95, z, GOLD, { metalness: 0.4 });
    }
    addBox(car, 1.65, 0.18, 0.18, 0, 0.55, z * 1.18, GOLD, { metalness: 0.4 });
  }
  // striped roof segments
  for (let i = 0; i < 10; i++) {
    addBox(car, 1.9, 0.18, 0.5, 0, 3.32 + Math.sin((i / 9) * Math.PI) * 0.22, -2.25 + i * 0.5, i % 2 ? CREAM : WINE, {
      roughness: 0.68, rz: Math.cos((i / 9) * Math.PI) * 0.05,
    });
  }
  addBox(car, 1.95, 0.1, 4.9, 0, 3.48, 0, GOLD, { metalness: 0.4 });
  for (const z of [-2.3, 2.3]) {
    addCylinder(car, 0.1, 0.12, 0.7, 6, 0.6, 2.8, z, GOLD, { metalness: 0.4 });
    addBox(car, 0.28, 0.2, 0.7, 0, 0.75, z, GOLD, { metalness: 0.4 });
  }
  // roof flags and lanterns
  addBox(car, 0.05, 0.06, 0.55, 0.94, 3.2, 2.15, WINE, { roughness: 0.7 });
  addSphere(car, 0.1, 6, -0.82, 2.7, 2.4, 0xffd48b, { emissive: 0xffa53c, emissiveIntensity: 1.4 });
  return { group: car, wheels };
}

function buildStation(parent, station, index, bulbMat) {
  const g = new THREE.Group();
  g.position.set(station.x, 0, station.z);
  g.rotation.y = -station.angle;
  parent.add(g);
  addBox(g, 14.0, 0.38, 5.0, 0, 0.25, 0, CREAM, { roughness: 0.86 });
  addBox(g, 14.2, 0.1, 5.2, 0, 0.48, 0, GOLD, { metalness: 0.4 });
  for (let i = 0; i < 3; i++) {
    const x = -5.1 + i * 5.1;
    addCylinder(g, 0.16, 0.22, 4.8, 8, x, 2.7, -1.7, TEAL_DARK, { roughness: 0.7 });
    addCylinder(g, 0.16, 0.22, 4.8, 8, x, 2.7, 1.7, TEAL_DARK, { roughness: 0.7 });
    addSphere(g, 0.14, 7, x, 5.15, 1.7, 0xffd48b, { material: bulbMat });
  }
  // red / cream striped canopy with a shallow arched profile
  for (let i = 0; i < 14; i++) {
    const arch = Math.sin((i / 13) * Math.PI) * 0.62;
    const stripe = i % 2 ? CREAM : WINE;
    addBox(g, 1.0, 0.26, 5.6, -6.5 + i * 1.0, 5.0 + arch, 0, stripe, {
      roughness: 0.68, rz: Math.cos((i / 13) * Math.PI) * 0.08,
      emissive: stripe, emissiveIntensity: 0.24,
    });
    addBox(g, 0.88, 0.32, 0.06, -6.5 + i * 1.0, 4.62 + arch, 2.72, i % 2 ? WINE : CREAM, {
      roughness: 0.7, emissive: i % 2 ? WINE : CREAM, emissiveIntensity: 0.2,
    });
  }
  addBox(g, 14.2, 0.16, 0.3, 0, 5.55, 2.65, GOLD, { metalness: 0.4 });
  addBox(g, 14.2, 0.16, 0.3, 0, 5.55, -2.65, GOLD, { metalness: 0.4 });
  const stationLight = new THREE.PointLight(0xffcf9b, 110, 22, 2);
  stationLight.position.set(0, 5.4, 0.6);
  g.add(stationLight);
  // clock pediment
  addBox(g, 4.4, 2.1, 0.5, 0, 6.25, 2.55, TEAL_DARK, { roughness: 0.68 });
  const clock = new THREE.Mesh(
    new THREE.CircleGeometry(0.72, 28),
    new THREE.MeshStandardMaterial({ map: clockTexture(), roughness: 0.6 }),
  );
  clock.position.set(0, 6.35, 2.82);
  g.add(clock);
  addTorus(g, 0.8, 0.09, 4, 24, 0, 6.35, 2.84, GOLD, { metalness: 0.45 });
  addCylinder(g, 0.045, 0.045, 1.8, 4, 0, 8.0, 2.55, GOLD, { metalness: 0.45 });
  addBox(g, 0.05, 0.35, 0.7, 0.2, 8.4, 2.55, WINE, { roughness: 0.7 });
  addStar(g, 0.52, 0.14, 0, 7.45, 2.6, 0xffd578, { emissiveIntensity: 1.3 });
  // sign
  const sign = makeSign({
    text: station.name, sub: `${station.en} · ASTRALIA EXPRESS`, worldWidth: 4.6, worldHeight: 0.86,
    bg: 'rgba(12,42,44,.94)', border: 'rgba(226,187,102,.7)', color: '#ffefca', subColor: '#dfba78',
    width: 800, height: 160, font: '600 64px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 22px "Avenir Next", sans-serif',
  });
  sign.position.set(0, 3.85, 2.85);
  g.add(sign);
  // benches and lamps
  for (const x of [-4.7, 4.7]) {
    addBox(g, 2.0, 0.18, 0.7, x, 0.95, -0.8, 0x6f4a2e, { roughness: 0.9 });
    addBox(g, 2.0, 0.7, 0.14, x, 1.35, -1.12, 0x6f4a2e, { roughness: 0.9 });
    for (const sx of [-0.8, 0.8]) addBox(g, 0.1, 0.7, 0.1, x + sx, 0.7, -0.8, GOLD, { metalness: 0.35 });
    addCylinder(g, 0.1, 0.14, 3.0, 6, x, 2.1, 1.55, GOLD, { metalness: 0.42 });
    addSphere(g, 0.16, 8, x, 3.65, 1.55, 0xffd48b, { material: bulbMat });
  }
  // railing along platform edge, leaving a boarding gap
  for (const x of [-6.5, -3.4, 3.4, 6.5]) {
    addCylinder(g, 0.06, 0.08, 1.1, 5, x, 0.95, 2.2, GOLD, { metalness: 0.4 });
  }
  addBox(g, 2.0, 0.06, 0.08, -5.0, 1.4, 2.2, GOLD, { metalness: 0.4 });
  addBox(g, 2.0, 0.06, 0.08, 5.0, 1.4, 2.2, GOLD, { metalness: 0.4 });
  // red flags at platform ends
  for (const x of [-6.8, 6.8]) {
    addCylinder(g, 0.04, 0.05, 1.5, 4, x, 4.9, 2.4, GOLD, { metalness: 0.4 });
    addBox(g, 0.05, 0.4, 0.7, x + 0.25, 5.35, 2.4, WINE, { roughness: 0.7 });
  }
}

export function createParkTrain(scene, bulbMat) {
  const group = new THREE.Group();
  scene.add(group);

  // track bed
  const bed = new THREE.Mesh(
    new THREE.RingGeometry(155.4, 158.6, 160, 1),
    new THREE.MeshStandardMaterial({ color: 0x493f38, roughness: 0.98 }),
  );
  bed.rotation.x = -Math.PI / 2;
  bed.position.y = 0.09;
  group.add(bed);
  addTorus(group, 156.9, 0.08, 5, 160, 0, 0.24, 0, 0xc2a16c, { rx: Math.PI / 2, metalness: 0.4 });
  addTorus(group, 157.35, 0.08, 5, 160, 0, 0.24, 0, 0xc2a16c, { rx: Math.PI / 2, metalness: 0.4 });
  addTorus(group, 158.1, 0.08, 4, 160, 0, 0.24, 0, 0x6c5b48, { rx: Math.PI / 2, roughness: 0.85 });
  for (let i = 0; i < 150; i++) {
    const a = (i / 150) * Math.PI * 2;
    addBox(group, 3.0, 0.12, 0.5, Math.cos(a) * 157, 0.18, Math.sin(a) * 157, 0x5a4431, {
      ry: -a, roughness: 0.9,
    });
  }
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2 + 0.1;
    addCylinder(group, 0.08, 0.1, 2.0, 5, Math.cos(a) * 158.7, 1.1, Math.sin(a) * 158.7, GOLD, { metalness: 0.35 });
    addSphere(group, 0.13, 6, Math.cos(a) * 158.7, 2.2, Math.sin(a) * 158.7, 0xffd48b, { material: bulbMat });
  }

  TRAIN_STATIONS.forEach((s, i) => buildStation(group, s, i, bulbMat));

  const train = new THREE.Group();
  group.add(train);
  const engine = buildEngine();
  train.add(engine.group);
  const cars = [];
  for (let i = 0; i < 3; i++) {
    const c = buildCarriage(i);
    c.offset = 0.055 + i * 0.054;
    train.add(c.group);
    cars.push(c);
  }
  const allCars = [{ group: engine.group, wheels: engine.wheels, offset: 0 }, ...cars];
  let angle = TRAIN_STATIONS[0].angle;
  let dwell = 0;
  let next = 1;
  let currentStation = 0;
  let active = false;
  let speed = 0.055;
  const state = () => {
    const curr = dwell > 0 ? currentStation : (next + 3) % 4;
    const nextStation = TRAIN_STATIONS[ORDER[next]];
    return {
      angle,
      currentIndex: currentStation,
      currentName: TRAIN_STATIONS[currentStation].name,
      nextName: nextStation.name,
      dwelling: dwell > 0,
      nextIndex: ORDER[next],
    };
  };
  const api = {
    group,
    stations: TRAIN_STATIONS,
    getState: state,
    getEnginePosition() {
      return engine.group.getWorldPosition(new THREE.Vector3());
    },
    startRideAt(index) {
      const orderPos = ORDER.indexOf(index);
      angle = TRAIN_STATIONS[index].angle;
      currentStation = index;
      next = (orderPos + 1 + 4) % 4;
      dwell = 4.8;
      active = true;
    },
    endRide() { active = false; },
    update(dt, elapsed) {
      if (dwell > 0) {
        dwell -= dt;
        if (dwell <= 0) dwell = 0;
      } else {
        const target = TRAIN_STATIONS[ORDER[next]].angle;
        let diff = (target - angle + Math.PI * 2) % (Math.PI * 2);
        if (diff < 0.0015 || diff < speed * dt + 0.001) {
          angle = target;
          currentStation = ORDER[next];
          dwell = 4.8;
          next = (next + 1) % 4;
        } else {
          angle = (angle + speed * dt) % (Math.PI * 2);
        }
      }
      allCars.forEach((c) => {
        const a = angle - c.offset;
        c.group.position.set(Math.cos(a) * TRACK_R, 0.22, Math.sin(a) * TRACK_R);
        const tangent = new THREE.Vector3(-Math.sin(a), 0, Math.cos(a));
        c.group.rotation.y = Math.atan2(tangent.x, tangent.z);
        const wheelSpeed = dwell > 0 ? 0 : speed * TRACK_R / 0.55;
        c.wheels.forEach((w) => { w.rotation.x += wheelSpeed * dt; });
      });
      if (elapsed < 0.1) {
        // initialize pose immediately
        allCars.forEach((c) => {
          const a = angle - c.offset;
          c.group.position.set(Math.cos(a) * TRACK_R, 0.22, Math.sin(a) * TRACK_R);
          c.group.rotation.y = Math.atan2(-Math.sin(a), Math.cos(a));
        });
      }
    },
  };
  function audioStop() { /* cosmetic hook */ }
  api.dynamic = allCars.map((c) => c.group);
  return api;
}
