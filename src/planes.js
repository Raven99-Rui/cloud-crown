import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus,
  cylinderBetween, makeCanvasPlaneTexture, makeSign,
} from './builders.js';

const GOLD = 0xd8b16a;
const GOLD_LIGHT = 0xffdda0;
const CREAM = 0xf0dfc0;
const TEAL = 0x15545a;
const TEAL_DARK = 0x0c343d;
const WINE = 0x8b2733;
const BLUE = 0x244b83;
const GREEN = 0x2a5b44;

const CENTER = new THREE.Vector3(76, 0, 108);
const PLANE_COLORS = [WINE, BLUE, GREEN, CREAM, WINE, BLUE];

function clockTexture() {
  return makeCanvasPlaneTexture((ctx, w, h) => {
    ctx.fillStyle = '#f3e6c8'; ctx.beginPath(); ctx.arc(w / 2, h / 2, w * 0.44, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#3c2b22'; ctx.lineWidth = w * 0.025; ctx.stroke();
    ctx.strokeStyle = '#5b4938'; ctx.lineWidth = w * 0.014;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(w / 2 + Math.cos(a) * w * 0.34, h / 2 + Math.sin(a) * h * 0.34);
      ctx.lineTo(w / 2 + Math.cos(a) * w * 0.39, h / 2 + Math.sin(a) * h * 0.39);
      ctx.stroke();
    }
    ctx.strokeStyle = '#3a2a21'; ctx.lineWidth = w * 0.028;
    ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2 + w * 0.16, h / 2 - h * 0.18); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w / 2, h / 2); ctx.lineTo(w / 2 - w * 0.04, h / 2 - h * 0.29); ctx.stroke();
    ctx.fillStyle = '#c59b55'; ctx.beginPath(); ctx.arc(w / 2, h / 2, w * 0.035, 0, Math.PI * 2); ctx.fill();
  }, 256, 256);
}

function buildPlane(parent, index, color, bulbMat) {
  const plane = new THREE.Group();
  const a = (index / 6) * Math.PI * 2;
  plane.position.set(Math.cos(a) * 7.2, 0, Math.sin(a) * 7.2);
  // The rotor turns clockwise.  With -a the local +Z nose pointed against
  // the tangent, so every plane flew tail-first.  PI - a puts the nose on the
  // clockwise tangent while keeping the wings radial.
  plane.rotation.y = Math.PI - a;
  plane.scale.setScalar(1.38);
  parent.add(plane);

  addCylinder(plane, 0.38, 0.46, 3.4, 10, 0, 0.12, 0, color, { rx: Math.PI / 2, roughness: 0.55 });
  addCylinder(plane, 0.22, 0.34, 0.9, 8, 0, 0.1, 1.95, CREAM, { rx: Math.PI / 2, roughness: 0.55 });
  addSphere(plane, 0.24, 8, 0, 0.1, 2.42, GOLD, { metalness: 0.5 });
  addBox(plane, 3.8, 0.12, 0.95, 0, 0.55, 0.28, color, { roughness: 0.5 });
  addBox(plane, 3.4, 0.1, 0.7, 0, -0.24, 0.18, color, { roughness: 0.5 });
  addBox(plane, 3.95, 0.045, 0.11, 0, 0.62, 0.79, GOLD_LIGHT, { metalness: 0.4 });
  addBox(plane, 3.55, 0.045, 0.09, 0, -0.17, 0.55, GOLD, { metalness: 0.4 });
  for (const side of [-1, 1]) {
    addCylinder(plane, 0.035, 0.04, 0.8, 5, side * 1.35, 0.16, 0.25, GOLD, { metalness: 0.4 });
    addCylinder(plane, 0.035, 0.04, 0.8, 5, side * 1.35, 0.16, 0.75, GOLD, { metalness: 0.4 });
    cylinderBetween(
      plane,
      new THREE.Vector3(side * 1.3, 0.56, 0.35),
      new THREE.Vector3(side * 0.78, -0.2, 0.32),
      0.018, GOLD, { segments: 4, metalness: 0.42 },
    );
    addSphere(plane, 0.1, 6, side * 1.62, 0.58, 0.28, 0xffd186, { material: bulbMat });
    // cream roundel with a crimson star on the upper wing
    addCylinder(plane, 0.24, 0.24, 0.014, 16, side * 1.38, 0.628, 0.28, CREAM, { roughness: 0.62 });
    addTorus(plane, 0.24, 0.018, 4, 16, side * 1.38, 0.637, 0.28, GOLD, { rx: Math.PI / 2, metalness: 0.42 });
    addStar(plane, 0.12, 0.018, side * 1.38, 0.645, 0.28, WINE, {
      rx: Math.PI / 2, emissiveIntensity: 0.55,
    });
    // landing gear
    cylinderBetween(
      plane,
      new THREE.Vector3(side * 1.16, 0.42, 0.48),
      new THREE.Vector3(side * 0.68, -0.78, 0.38),
      0.03, GOLD, { segments: 4, metalness: 0.4 },
    );
    addCylinder(plane, 0.18, 0.18, 0.1, 10, side * 0.66, -0.82, 0.38, 0x1b1c20, { rz: Math.PI / 2, roughness: 0.86 });
    addCylinder(plane, 0.065, 0.065, 0.3, 6, side * 0.66, -0.82, 0.38, GOLD, { rz: Math.PI / 2, metalness: 0.4 });
  }
  addTorus(plane, 0.31, 0.045, 4, 16, 0, 0.1, 1.58, GOLD, { metalness: 0.45 });
  addBox(plane, 0.05, 0.12, 0.3, 0.24, -0.24, 1.3, 0x2b2b2d, { roughness: 0.8 });
  addCylinder(plane, 0.035, 0.035, 0.5, 5, 0, -0.44, -1.9, GOLD, { rx: 0.35, metalness: 0.4 });
  addBox(plane, 1.55, 0.12, 0.78, 0, 0.35, -1.55, color, { roughness: 0.55 });
  addBox(plane, 0.12, 1.0, 0.8, 0, 0.74, -1.72, color, { roughness: 0.55 });
  addBox(plane, 1.12, 0.1, 0.16, 0, 0.18, -1.95, GOLD, { metalness: 0.4 });
  addBox(plane, 0.78, 0.03, 0.62, 0, 0.64, 0.04, 0x1c2024, { roughness: 0.9 });
  addBox(plane, 0.58, 0.34, 0.1, 0, 0.55, -0.36, CREAM, { roughness: 0.75 });
  addBox(plane, 0.08, 0.34, 0.48, 0.34, 0.48, -0.06, GOLD, { metalness: 0.4 });
  addBox(plane, 0.08, 0.34, 0.48, -0.34, 0.48, -0.06, GOLD, { metalness: 0.4 });
  addCylinder(plane, 0.36, 0.36, 0.12, 12, 0, 0.1, 2.45, GOLD, { rx: Math.PI / 2, metalness: 0.4 });
  const propeller = new THREE.Group();
  propeller.position.set(0, 0.1, 2.75);
  plane.add(propeller);
  addBox(propeller, 0.09, 0.09, 1.45, 0, 0, 0, 0x141a20, { metalness: 0.3 });
  addBox(propeller, 1.45, 0.09, 0.09, 0, 0, 0, 0x141a20, { metalness: 0.3 });
  addSphere(propeller, 0.11, 6, 0, 0, 0, GOLD, { metalness: 0.4 });
  // pilot scarf and goggles
  addSphere(plane, 0.18, 8, 0, 0.83, -0.22, 0xe5c29f, { roughness: 0.9 });
  addSphere(plane, 0.2, 8, 0, 0.94, -0.2, 0x5b3a2c, { sy: 0.55, roughness: 0.9 });
  addBox(plane, 0.3, 0.06, 0.26, 0, 0.84, -0.02, 0x24201e, { roughness: 0.8 });

  // Lift the enamel colours out of the night without washing out the tower.
  plane.traverse((o) => {
    if (o.isMesh && o.material?.emissive && o.material.color) {
      o.material.emissive.copy(o.material.color).multiplyScalar(0.55);
      o.material.emissiveIntensity = 0.3;
    }
  });

  return { plane, propeller, index, phase: index * 1.9 };
}

export function createFlyingPlanes(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.copy(CENTER);
  scene.add(group);

  // base terrace
  addCylinder(group, 10.5, 11.2, 0.8, 32, 0, 0.4, 0, TEAL_DARK, { roughness: 0.8 });
  addTorus(group, 10.45, 0.18, 5, 48, 0, 0.82, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  addCylinder(group, 10.0, 10.3, 0.14, 32, 0, 0.9, 0, 0xcaa980, { roughness: 0.9 });
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const x = Math.cos(a) * 10.0;
    const z = Math.sin(a) * 10.0;
    addBox(group, 2.9, 1.18, 0.12, x, 1.58, z, i % 4 === 0 ? WINE : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.7,
    });
    addBox(group, 2.65, 0.08, 0.15, x, 2.18, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
    addBox(group, 2.7, 0.34, 0.07, x, 1.02, z, i % 4 === 0 ? CREAM : WINE, {
      ry: -a + Math.PI / 2, roughness: 0.72,
    });
    addBox(group, 2.62, 0.055, 0.09, x, 0.85, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
    if (i % 4 === 0) addStar(group, 0.26, 0.06, x, 1.6, z, 0xffd373, { ry: -a + Math.PI / 2, emissiveIntensity: 0.6 });
    addCylinder(group, 0.1, 0.13, 2.1, 7, Math.cos(a + 0.1) * 10.25, 1.8, Math.sin(a + 0.1) * 10.25, GOLD, { metalness: 0.4 });
    addSphere(group, 0.15, 7, Math.cos(a + 0.1) * 10.25, 2.9, Math.sin(a + 0.1) * 10.25, 0xffd38a, { material: bulbMat });
  }
  addTorus(group, 10.22, 0.1, 4, 56, 0, 2.92, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.45 });
  for (let i = 0; i < 4; i++) {
    addBox(group, 4.8 + i * 0.6, 0.22, 0.9, 0, 0.18 + i * 0.18, 11.0 + i * 0.6, 0xb6976f, { roughness: 0.88 });
  }

  // central control tower
  addCylinder(group, 3.7, 4.4, 1.0, 12, 0, 1.4, 0, TEAL_DARK, { roughness: 0.7 });
  addCylinder(group, 2.9, 3.2, 1.5, 12, 0, 2.55, 0, TEAL, { roughness: 0.65 });
  addCylinder(group, 2.0, 2.5, 5.6, 12, 0, 6.0, 0, TEAL, { roughness: 0.62 });
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addCylinder(group, 0.09, 0.12, 5.7, 6, Math.cos(a) * 2.12, 6.0, Math.sin(a) * 2.12, GOLD, { metalness: 0.44 });
    addBox(group, 0.66, 1.15, 0.07, Math.cos(a) * 2.02, 5.7, Math.sin(a) * 2.02, i % 2 ? WINE : CREAM, {
      ry: -a, roughness: 0.68,
    });
  }
  for (const y of [2.8, 4.2, 6.3, 8.2, 9.0]) {
    addTorus(group, 2.1, 0.08, 4, 20, 0, y, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45 });
  }

  // four clock faces and layered gold aviator wings
  const clockMap = clockTexture();
  const clockMat = new THREE.MeshStandardMaterial({ map: clockMap, roughness: 0.6, metalness: 0.06 });
  for (const angle of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
    const cx = Math.sin(angle) * 2.24;
    const cz = Math.cos(angle) * 2.24;
    const clock = new THREE.Mesh(new THREE.CircleGeometry(1.12, 32), clockMat);
    clock.position.set(cx, 6.35, cz);
    clock.rotation.y = angle;
    group.add(clock);
    addTorus(group, 1.23, 0.11, 5, 32, cx, 6.35, cz, GOLD, {
      ry: angle, metalness: 0.5, roughness: 0.32,
    });
  }
  for (const facing of [0, Math.PI]) {
    const z = Math.cos(facing) * 2.12;
    for (const side of [-1, 1]) {
      addBox(group, 1.8, 0.58, 0.12, side * 1.7, 5.0, z, GOLD, {
        rz: side * 0.18, ry: facing, metalness: 0.4,
      });
      addBox(group, 1.25, 0.3, 0.14, side * 2.55, 5.15, z, GOLD_LIGHT, {
        rz: side * 0.28, ry: facing, metalness: 0.4,
      });
      addBox(group, 0.85, 0.16, 0.16, side * 3.15, 5.3, z, GOLD, {
        rz: side * 0.38, ry: facing, metalness: 0.4,
      });
      addSphere(group, 0.17, 8, side * 2.0, 6.95, z, 0xffd38a, { material: bulbMat });
    }
  }
  // gilt gear ornaments on the sides of the control house
  for (const side of [-1, 1]) {
    addTorus(group, 0.55, 0.075, 4, 20, side * 2.15, 4.25, 0, GOLD, {
      ry: Math.PI / 2, metalness: 0.45,
    });
    for (let i = 0; i < 8; i++) {
      const ga = (i / 8) * Math.PI * 2;
      addBox(group, 0.08, 0.16, 0.12, side * 2.17, 4.25 + Math.cos(ga) * 0.62, Math.sin(ga) * 0.62, GOLD, {
        rx: ga, metalness: 0.4,
      });
    }
  }

  // decorative banners
  for (const side of [-1, 1]) {
    addCylinder(group, 0.07, 0.08, 5.2, 5, side * 2.55, 9.4, 1.2, GOLD, { metalness: 0.4 });
    addBox(group, 1.2, 1.55, 0.08, side * 2.55, 10.4, 1.2, side < 0 ? WINE : BLUE, { roughness: 0.65 });
    addStar(group, 0.3, 0.06, side * 2.55, 10.4, 1.25, 0xffd273, { emissiveIntensity: 0.7 });
  }

  // striped control-tower cupola
  addCylinder(group, 2.7, 3.1, 0.7, 12, 0, 9.35, 0, GOLD, { metalness: 0.38 });
  for (let i = 0; i < 12; i++) {
    addCone(group, 3.0, 3.4, 1, 0, 10.9, 0, i % 2 ? CREAM : WINE, {
      thetaStart: (i / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
      openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.7,
      emissive: i % 2 ? 0x3c2b1f : 0x40151b, emissiveIntensity: 0.18,
    });
  }
  addCylinder(group, 1.25, 1.55, 0.9, 10, 0, 12.65, 0, CREAM, { roughness: 0.7 });
  addSphere(group, 1.4, 12, 0, 13.5, 0, WINE, { sy: 0.9, roughness: 0.55 });
  addCylinder(group, 0.05, 0.05, 2.8, 4, 0, 15.1, 0, GOLD, { metalness: 0.5 });
  addCone(group, 0.55, 0.9, 4, 0.35, 16.2, 0, WINE, { rz: Math.PI / 2.4 });
  addStar(group, 0.8, 0.2, 0, 16.0, 0, 0xffd578, { emissiveIntensity: 1.7 });

  // rotating arms with six little pilots
  const rotor = new THREE.Group();
  rotor.position.y = 5.9;
  group.add(rotor);
  addCylinder(rotor, 2.4, 2.4, 0.38, 16, 0, 0, 0, GOLD, { metalness: 0.4 });
  addTorus(rotor, 2.45, 0.15, 4, 24, 0, 0.13, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.45 });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addBox(rotor, 5.0, 0.16, 0.22, Math.cos(a) * 4.65, 0, Math.sin(a) * 4.65, i % 2 ? TEAL : GOLD, {
      ry: -a, metalness: 0.35, roughness: 0.55,
    });
    addCylinder(rotor, 0.12, 0.12, 0.7, 6, Math.cos(a) * 7.0, -0.25, Math.sin(a) * 7.0, GOLD, { metalness: 0.4 });
  }
  const planes = [];
  PLANE_COLORS.forEach((color, i) => planes.push(buildPlane(rotor, i, color, bulbMat)));

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + Math.PI / 8;
    addCylinder(group, 0.08, 0.11, 2.7, 6, Math.cos(a) * 10.4, 1.35, Math.sin(a) * 10.4, GOLD, { metalness: 0.35 });
    addSphere(group, 0.15, 7, Math.cos(a) * 10.4, 2.8, Math.sin(a) * 10.4, 0xffd38a, { material: bulbMat });
  }

  const sign = makeSign({
    text: '迷你飞行器', sub: 'THE SKY SCOUTS · ATTRACTION 11', worldWidth: 6.4, worldHeight: 1.3,
    bg: 'rgba(12,46,56,.93)', border: 'rgba(224,184,102,.65)', color: '#ffefca', subColor: '#dfba78',
    width: 960, height: 205, font: '600 74px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 25px "Avenir Next", sans-serif',
  });
  sign.position.set(5.4, 4.1, 12.6);
  group.add(sign);
  const warm = new THREE.PointLight(0xffc98d, 185, 20, 2);
  warm.position.set(0, 7.2, 0);
  group.add(warm);

  let active = false;
  let vertical = 0;
  let targetVertical = 0;
  const api = {
    group,
    center: CENTER.clone(),
    rotor,
    planes,
    playerPlane: planes[0].plane,
    playerIndex: 0,
    colliders: [{ type: 'circle', x: CENTER.x, z: CENTER.z, r: 12.6 }],
    marker: new THREE.Vector3(CENTER.x, 19, CENTER.z),
    setRideActive(v) { active = v; if (!v) { targetVertical = 0; vertical = 0; } },
    setVertical(v) { targetVertical = THREE.MathUtils.clamp(v, -1, 1); },
    startRide() {
      active = true;
      vertical = 0;
      targetVertical = 0;
      planes.forEach((p, i) => { p.plane.position.y = 0; p.plane.rotation.z = 0; p.plane.userData.ride = i === 0; });
    },
    endRide() {
      active = false;
      targetVertical = 0;
      vertical = 0;
      planes.forEach((p) => { p.plane.position.y = 0; p.plane.rotation.z = 0; });
    },
    update(dt, elapsed) {
      rotor.rotation.y += dt * (active ? 0.74 : 0.1);
      vertical += (targetVertical - vertical) * Math.min(1, dt * 3.2);
      planes.forEach((p, i) => {
        const isPlayer = active && i === 0;
        const lift = isPlayer ? vertical * 2.5 : Math.sin(elapsed * 1.3 + p.phase) * 0.22;
        p.plane.position.y += (lift - p.plane.position.y) * Math.min(1, dt * (isPlayer ? 3.2 : 1.4));
        p.plane.rotation.z = Math.sin(elapsed * 1.7 + p.phase) * (active ? 0.07 : 0.025);
        p.plane.rotation.x = Math.sin(elapsed * 1.2 + p.phase) * 0.015;
        p.propeller.rotation.z += dt * (active ? 9.0 : 2.2);
      });
    },
  };
  return api;
}
