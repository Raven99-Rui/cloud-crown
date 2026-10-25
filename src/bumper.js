import * as THREE from 'three';
import {
  addBox, addCone, addCylinder, addSphere, addStar, addTorus,
  makeCanvasPlaneTexture, makeGlowTexture, makeSign,
} from './builders.js';

const GOLD = 0xd8b26a;
const GOLD_LIGHT = 0xffdda0;
const CREAM = 0xf0dfc0;
const TEAL = 0x17545b;
const TEAL_DARK = 0x0c343d;
const WINE = 0x972b35;
const BLUE = 0x2e559c;
const GREEN = 0x2c6849;

const CENTER = new THREE.Vector3(-30, 0, 132);
const RINK_HX = 9.4;
const RINK_HZ = 6.8;

function checkerTexture() {
  const tex = makeCanvasPlaneTexture((ctx, w, h) => {
    const cols = 10, rows = 7;
    const cw = w / cols, ch = h / rows;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        ctx.fillStyle = (x + y) % 2 ? '#d8c6a4' : '#173843';
        ctx.fillRect(x * cw, y * ch, cw + 1, ch + 1);
      }
    }
    ctx.strokeStyle = 'rgba(215,178,104,.32)';
    ctx.lineWidth = 3;
    for (let x = 0; x <= cols; x++) { ctx.beginPath(); ctx.moveTo(x * cw, 0); ctx.lineTo(x * cw, h); ctx.stroke(); }
    for (let y = 0; y <= rows; y++) { ctx.beginPath(); ctx.moveTo(0, y * ch); ctx.lineTo(w, y * ch); ctx.stroke(); }
  }, 640, 448);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1.2, 1.2);
  return tex;
}

function buildCar(color, accent, isPlayer) {
  const car = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(1.0, 18, 12), new THREE.MeshStandardMaterial({
    color, roughness: 0.4, metalness: 0.3, emissive: color, emissiveIntensity: 0.34,
  }));
  body.scale.set(1.0, 0.52, 1.28);
  body.position.y = 0.55;
  car.add(body);
  addTorus(car, 1.16, 0.11, 5, 28, 0, 0.38, 0, 0x22272e, { rx: Math.PI / 2, roughness: 0.75, metalness: 0.2 });
  addTorus(car, 1.06, 0.07, 4, 28, 0, 0.64, 0, accent, { rx: Math.PI / 2, metalness: 0.55, roughness: 0.3 });
  addBox(car, 1.12, 0.12, 1.0, 0, 0.77, -0.05, 0x241d1b, { roughness: 0.8 });
  addBox(car, 0.84, 0.16, 0.72, 0, 0.8, 0.05, accent, { roughness: 0.65 });
  addBox(car, 0.92, 0.62, 0.16, 0, 1.03, -0.48, color, { roughness: 0.5 });
  addBox(car, 0.7, 0.08, 0.16, 0, 1.36, -0.48, GOLD, { roughness: 0.4, metalness: 0.35 });
  addCylinder(car, 0.3, 0.3, 0.08, 12, 0, 0.94, 0.34, 0x27211d, { rx: Math.PI / 2, roughness: 0.65 });
  addCylinder(car, 0.065, 0.065, 0.42, 6, 0, 0.84, 0.38, 0xbda77c, { rx: 0.72, metalness: 0.35 });
  for (const side of [-1, 1]) {
    addBox(car, 0.1, 0.28, 0.12, side * 0.62, 1.02, 0.02, GOLD, { metalness: 0.4 });
    addBox(car, 0.1, 0.08, 0.45, side * 0.65, 1.16, 0.04, GOLD, { metalness: 0.4 });
    addSphere(car, 0.14, 8, side * 0.64, 0.63, 1.03, 0xffd48a, { material: new THREE.MeshStandardMaterial({ color: 0xffe5b0, emissive: 0xffa63d, emissiveIntensity: 1.5, roughness: 0.3 }) });
    addCylinder(car, 0.23, 0.23, 0.18, 10, side * 0.78, 0.21, 0.7, 0x1b1c20, { rz: Math.PI / 2, roughness: 0.9 });
    addCylinder(car, 0.23, 0.23, 0.18, 10, side * 0.78, 0.21, -0.7, 0x1b1c20, { rz: Math.PI / 2, roughness: 0.9 });
    addCylinder(car, 0.12, 0.12, 0.07, 8, side * 0.78, 0.21, 0.7, GOLD, { rz: Math.PI / 2, metalness: 0.4 });
    addCylinder(car, 0.12, 0.12, 0.07, 8, side * 0.78, 0.21, -0.7, GOLD, { rz: Math.PI / 2, metalness: 0.4 });
  }
  addStar(car, 0.2, 0.06, 0, 0.7, 1.2, isPlayer ? 0xffdb74 : 0xffefc4, { emissiveIntensity: isPlayer ? 1.2 : 0.5 });
  if (isPlayer) {
    addCylinder(car, 0.028, 0.035, 0.95, 5, 0.72, 1.2, -0.55, GOLD, { metalness: 0.45 });
    addBox(car, 0.05, 0.36, 0.56, 0.72, 1.65, -0.62, 0x5d1c28, { roughness: 0.7 });
    addSphere(car, 0.16, 8, 0.72, 1.57, -0.62, 0xffd373, { material: new THREE.MeshStandardMaterial({ color: 0xffe3a6, emissive: 0xffb84a, emissiveIntensity: 2.2, roughness: 0.3 }) });
  }
  return car;
}

function roofTriangle(a, b, apex, color) {
  const geo = new THREE.BufferGeometry();
  const verts = new Float32Array([
    apex.x, apex.y, apex.z,
    a.x, a.y, a.z,
    b.x, b.y, b.z,
  ]);
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    color, roughness: 0.68, metalness: 0.06, side: THREE.DoubleSide,
    emissive: color, emissiveIntensity: color === WINE ? 0.18 : 0.08,
  }));
  return mesh;
}

export function createBumperCars(scene, bulbMat) {
  const group = new THREE.Group();
  group.position.copy(CENTER);
  scene.add(group);

  // raised pavilion floor
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(24.0, 1.0, 17.2),
    new THREE.MeshStandardMaterial({ color: 0x112f36, roughness: 0.72, metalness: 0.16 }),
  );
  floor.position.y = 0.5;
  group.add(floor);
  const checker = new THREE.Mesh(
    new THREE.PlaneGeometry(RINK_HX * 2, RINK_HZ * 2),
    new THREE.MeshStandardMaterial({ map: checkerTexture(), roughness: 0.58, metalness: 0.1 }),
  );
  checker.rotation.x = -Math.PI / 2;
  checker.position.y = 1.02;
  group.add(checker);
  addTorus(group, 10.6, 0.2, 5, 64, 0, 1.08, 0, GOLD, { rx: Math.PI / 2, metalness: 0.42, sy: 0.82 });

  // low ornate walls and posts
  const wallY = 1.85;
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    if (Math.cos(a) > 0.38) continue;
    const x = Math.cos(a) * 11.4;
    const z = Math.sin(a) * 8.0;
    addBox(group, 3.5, 1.2, 0.16, x, wallY, z, i % 3 === 0 ? WINE : TEAL, {
      ry: -a + Math.PI / 2, roughness: 0.68,
    });
    addBox(group, 3.2, 0.09, 0.18, x, 2.48, z, GOLD, { ry: -a + Math.PI / 2, metalness: 0.4 });
    if (i % 3 === 0) addStar(group, 0.28, 0.06, x, 1.92, z, 0xffd47b, { ry: -a + Math.PI / 2, emissiveIntensity: 0.7 });
  }
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    if (Math.cos(a) > 0.38) continue;
    const x = Math.cos(a) * 11.15;
    const z = Math.sin(a) * 7.8;
    addCylinder(group, 0.15, 0.2, 5.5, 8, x, 4.35, z, GOLD, { metalness: 0.44 });
    addTorus(group, 0.24, 0.06, 4, 12, x, 2.5, z, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.5 });
    addSphere(group, 0.17, 8, x, 7.05, z, 0xffd48a, { material: bulbMat });
  }
  addTorus(group, 11.45, 0.13, 5, 64, 0, 2.72, 0, GOLD_LIGHT, { rx: Math.PI / 2, metalness: 0.45, sy: 0.72 });

  // entrance on the east side
  for (let i = 0; i < 4; i++) {
    addBox(group, 0.9, 0.2, 4.2, 12.4 + i * 0.7, 0.18 + i * 0.18, 0, 0xb6976d, { roughness: 0.88 });
  }
  for (const side of [-1, 1]) {
    addCylinder(group, 0.14, 0.2, 4.2, 8, 12.2, 2.1, side * 2.5, GOLD, { metalness: 0.4 });
    addSphere(group, 0.18, 8, 12.2, 4.25, side * 2.5, 0xffd48a, { material: bulbMat });
  }
  addBox(group, 0.2, 1.0, 5.4, 12.3, 4.25, 0, GOLD, { metalness: 0.4 });

  // fascia and tent roof
  addCylinder(group, 10.4, 10.9, 0.8, 4, 0, 6.85, 0, TEAL_DARK, { ry: Math.PI / 4, roughness: 0.68, sy: 0.72 });
  addTorus(group, 11.1, 0.2, 5, 64, 0, 7.15, 0, GOLD, { rx: Math.PI / 2, metalness: 0.45, sy: 0.7 });
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    addSphere(group, 0.13, 6, Math.cos(a) * 11.0, 6.9, Math.sin(a) * 7.6, 0xffd188, { material: bulbMat });
  }
  const apex = new THREE.Vector3(0, 14.1, 0);
  const corners = [
    new THREE.Vector3(-12.4, 7.2, -8.6), new THREE.Vector3(12.4, 7.2, -8.6),
    new THREE.Vector3(12.4, 7.2, 8.6), new THREE.Vector3(-12.4, 7.2, 8.6),
  ];
  for (let side = 0; side < 4; side++) {
    const a = corners[side], b = corners[(side + 1) % 4];
    for (let k = 0; k < 4; k++) {
      const p1 = a.clone().lerp(b, k / 4);
      const p2 = a.clone().lerp(b, (k + 1) / 4);
      group.add(roofTriangle(p1, p2, apex, (side + k) % 2 ? CREAM : WINE));
    }
    addBox(group, 0.11, 0.11, 0.11, a.x, a.y, a.z, GOLD, { metalness: 0.4 });
  }
  for (const c of corners) {
    addCylinder(group, 0.1, 0.13, 7.0, 7, c.x, 3.7, c.z, GOLD, { metalness: 0.4 });
    addSphere(group, 0.16, 7, c.x, 7.25, c.z, 0xffd48a, { material: bulbMat });
    addCylinder(group, 0.04, 0.04, 2.0, 4, c.x * 0.9, 8.0, c.z * 0.9, GOLD, { metalness: 0.5 });
    addCone(group, 0.42, 0.7, 4, c.x * 0.9 + 0.25, 9.1, c.z * 0.9, WINE, { rz: Math.PI / 2.4 });
  }
  // central cupola
  addCylinder(group, 2.5, 2.9, 1.3, 8, 0, 14.5, 0, CREAM, { roughness: 0.7 });
  for (let i = 0; i < 12; i++) {
    addCone(group, 3.0, 2.6, 1, 0, 16.1, 0, i % 2 ? CREAM : WINE, {
      thetaStart: (i / 12) * Math.PI * 2, thetaLength: Math.PI / 6,
      openEnded: true, side: THREE.DoubleSide, flat: true, roughness: 0.68,
      emissive: i % 2 ? 0x3c2b1f : 0x42171c, emissiveIntensity: 0.2,
    });
  }
  addSphere(group, 1.55, 12, 0, 17.55, 0, WINE, { sy: 1.1, roughness: 0.52 });
  addCylinder(group, 0.05, 0.05, 2.7, 4, 0, 19.4, 0, GOLD, { metalness: 0.5 });
  addCone(group, 0.5, 0.9, 4, 0.35, 20.4, 0, WINE, { rz: Math.PI / 2.4 });
  addStar(group, 0.9, 0.22, 0, 20.55, 0, 0xffd578, { emissiveIntensity: 1.7 });

  const sign = makeSign({
    text: '复古碰碰车', sub: 'THE STARLIGHT BUMPERS · ATTRACTION 12', worldWidth: 6.0, worldHeight: 1.25,
    bg: 'rgba(48,19,25,.93)', border: 'rgba(224,184,102,.65)', color: '#ffefce', subColor: '#e1bc78',
    width: 920, height: 200, font: '600 76px "Microsoft YaHei", "PingFang SC", sans-serif',
    subFont: '500 24px "Avenir Next", sans-serif',
  });
  sign.position.set(12.9, 4.4, 4.8);
  sign.rotation.y = Math.PI / 2;
  group.add(sign);
  const warm = new THREE.PointLight(0xffc98d, 85, 18, 2);
  warm.position.set(0, 6.0, 0);
  group.add(warm);

  // parked cars ready to bump
  const carColors = [
    [WINE, GOLD_LIGHT], [TEAL, GOLD], [GREEN, CREAM], [BLUE, GOLD_LIGHT],
    [CREAM, WINE], [0x744b81, GOLD], [0xc06a35, CREAM],
  ];
  const cars = [];
  carColors.forEach(([color, accent], i) => {
    const car = buildCar(color, accent, i === 0);
    group.add(car);
    cars.push({
      group: car,
      index: i,
      x: i === 0 ? 4.2 : Math.cos(i * 1.9) * 7.6,
      z: i === 0 ? 3.3 : Math.sin(i * 1.9) * 5.2,
      heading: i === 0 ? -Math.PI / 2 : i * 1.9,
      speed: 0,
      vx: Math.cos(i * 2.3) * 0.5,
      vz: Math.sin(i * 2.3) * 0.5,
      phase: i * 1.7,
      baseY: 1.08,
    });
  });
  cars.forEach((c) => {
    c.group.position.set(c.x, c.baseY, c.z);
    c.group.rotation.y = c.heading;
  });

  // charging / parking bay beside the east entrance
  const chargeBay = new THREE.Group();
  group.add(chargeBay);
  addBox(chargeBay, 5.6, 0.12, 3.4, 14.4, 0.15, -5.0, 0x22383b, { roughness: 0.85 });
  const chargeCar = buildCar(CREAM, GOLD, false);
  chargeCar.position.set(14.4, 1.08, -5.0);
  chargeCar.rotation.y = -Math.PI / 2;
  chargeCar.scale.setScalar(0.88);
  group.add(chargeCar);
  for (const z of [-3.6, -6.4]) {
    addCylinder(group, 0.16, 0.22, 1.5, 8, 16.4, 0.85, z, TEAL_DARK, { metalness: 0.35 });
    addCylinder(group, 0.26, 0.16, 0.4, 8, 16.4, 1.65, z, GOLD, { metalness: 0.45 });
    addSphere(group, 0.12, 6, 16.4, 1.92, z, 0x8fe8c9, {
      material: new THREE.MeshStandardMaterial({ color: 0xbaffdf, emissive: 0x52e0b0, emissiveIntensity: 1.8, roughness: 0.3 }),
    });
    addBox(group, 1.7, 0.035, 0.035, 15.55, 1.18, z, 0x45433d, { metalness: 0.2 });
  }
  const chargeSign = makeSign({
    text: '充电区', sub: 'CHARGE BAY · PARKING', worldWidth: 3.4, worldHeight: 0.8,
    bg: 'rgba(15,42,45,.9)', border: 'rgba(130,220,190,.45)', color: '#d8fff0', subColor: '#8bd7c0',
    width: 620, height: 150, star: false, font: '500 58px "Microsoft YaHei", sans-serif',
    subFont: '500 20px "Avenir Next", sans-serif',
  });
  chargeSign.position.set(16.1, 2.8, -5.0);
  chargeSign.rotation.y = Math.PI / 2;
  group.add(chargeSign);

  // star burst for collisions
  const burst = new THREE.Group();
  burst.visible = false;
  group.add(burst);
  for (let i = 0; i < 7; i++) {
    const s = addStar(burst, 0.2, 0.04, 0, 0, 0, 0xffd56f, {
      emissive: 0xffb84a, emissiveIntensity: 2.2, metalness: 0.2,
    });
    s.userData.dir = (i / 7) * Math.PI * 2;
  }

  let active = false;
  let score = 0;
  let bumpPulse = 0;
  let burstLife = 0;
  let input = { forward: 0, turn: 0 };
  let playerSpeed = 0;
  let playerHeading = cars[0].heading;
  const player = cars[0];

  function reset() {
    const spots = [
      [4.2, 3.3, -Math.PI / 2], [-5.0, 2.6, Math.PI * 0.15],
      [5.2, -3.1, Math.PI * 0.72], [-4.2, -2.9, Math.PI * 1.2],
      [0.2, 4.1, Math.PI * 0.85], [-6.2, 0.2, Math.PI * 0.35],
      [1.4, -4.4, Math.PI * 0.55],
    ];
    cars.forEach((c, i) => {
      const [x, z, h] = spots[i];
      c.x = x; c.z = z; c.heading = h; c.speed = 0;
      c.vx = Math.cos(i * 2.3) * 0.55; c.vz = Math.sin(i * 2.3) * 0.55;
      c.group.position.set(x, c.baseY, z);
      c.group.rotation.y = h;
    });
    playerSpeed = 0;
    playerHeading = cars[0].heading;
    input = { forward: 0, turn: 0 };
  }

  function startBump(localX, localZ) {
    score += 1;
    bumpPulse = 1;
    burst.position.set(localX, 1.9, localZ);
    burst.visible = true;
    burst.userData.life = 0.58;
  }

  const api = {
    group,
    center: CENTER.clone(),
    cars,
    burst,
    playerCar: player.group,
    colliders: [{ type: 'rect', x: CENTER.x, z: CENTER.z, hx: 12.8, hz: 9.2 }],
    marker: new THREE.Vector3(CENTER.x, 21, CENTER.z),
    onBump: null,
    get score() { return score; },
    get bumpPulse() { return bumpPulse; },
    startRide() {
      active = true;
      score = 0;
      bumpPulse = 0;
      reset();
    },
    endRide() {
      active = false;
      input = { forward: 0, turn: 0 };
      playerSpeed = 0;
      burst.visible = false;
    },
    setInput(forward, turn) {
      input.forward = THREE.MathUtils.clamp(forward, -1, 1);
      input.turn = THREE.MathUtils.clamp(turn, -1, 1);
    },
    update(dt, elapsed) {
      bumpPulse = Math.max(0, bumpPulse - dt * 2.5);
      if (burst.visible) {
        burst.userData.life -= dt;
        burstLife = Math.max(0, burst.userData.life / 0.58);
        burst.scale.setScalar(0.8 + (1 - burstLife) * 1.4);
        burst.children.forEach((s, i) => {
          s.position.set(Math.cos(s.userData.dir) * (0.4 + (1 - burstLife) * 1.4), (1 - burstLife) * 1.5, Math.sin(s.userData.dir) * (0.4 + (1 - burstLife) * 1.4));
          s.visible = burstLife > 0;
        });
        if (burstLife <= 0) burst.visible = false;
      }

      if (!active) {
        cars.forEach((c) => {
          c.group.position.y = c.baseY + Math.sin(elapsed * 1.2 + c.phase) * 0.025;
          c.group.rotation.y += dt * 0.08;
        });
        return;
      }

      playerSpeed += input.forward * 8.0 * dt;
      playerSpeed *= Math.pow(0.9, dt * 60);
      playerSpeed = THREE.MathUtils.clamp(playerSpeed, -3.4, 7.0);
      if (Math.abs(input.forward) < 0.05) playerSpeed *= Math.pow(0.965, dt * 60);
      const steer = input.turn * (1.5 + Math.abs(playerSpeed) * 0.055) * (playerSpeed >= 0 ? 1 : -1);
      playerHeading += steer * dt;
      player.x += Math.sin(playerHeading) * playerSpeed * dt;
      player.z += Math.cos(playerHeading) * playerSpeed * dt;

      if (Math.abs(player.x) > RINK_HX - 1.25) {
        player.x = Math.sign(player.x) * (RINK_HX - 1.25);
        playerSpeed *= -0.35;
      }
      if (Math.abs(player.z) > RINK_HZ - 1.25) {
        player.z = Math.sign(player.z) * (RINK_HZ - 1.25);
        playerSpeed *= -0.35;
      }

      for (let i = 1; i < cars.length; i++) {
        const c = cars[i];
        c.vx += Math.sin(elapsed * 0.7 + c.phase) * 0.3 * dt;
        c.vz += Math.cos(elapsed * 0.6 + c.phase) * 0.3 * dt;
        c.x += c.vx * dt;
        c.z += c.vz * dt;
        if (Math.abs(c.x) > RINK_HX - 1.25) { c.x = Math.sign(c.x) * (RINK_HX - 1.25); c.vx *= -1; }
        if (Math.abs(c.z) > RINK_HZ - 1.25) { c.z = Math.sign(c.z) * (RINK_HZ - 1.25); c.vz *= -1; }
        if (Math.hypot(c.x - player.x, c.z - player.z) < 2.35) {
          const dx = player.x - c.x, dz = player.z - c.z;
          const len = Math.hypot(dx, dz) || 1;
          player.x = c.x + (dx / len) * 2.4;
          player.z = c.z + (dz / len) * 2.4;
          playerSpeed *= -0.4;
          c.vx *= -0.7; c.vz *= -0.7;
          startBump(player.x, player.z);
          if (api.onBump) api.onBump(score);
        }
        c.heading = Math.atan2(c.vx, c.vz);
        c.group.position.set(c.x, c.baseY + Math.sin(elapsed * 2.2 + c.phase) * 0.02, c.z);
        c.group.rotation.y = c.heading;
      }

      player.group.position.set(player.x, player.baseY + Math.sin(elapsed * 2.8) * 0.018, player.z);
      player.group.rotation.y = playerHeading;
      player.group.rotation.z = Math.sin(elapsed * 4.2) * Math.min(0.04, Math.abs(playerSpeed) * 0.008);
    },
    getPlayerState() {
      return { x: player.x, z: player.z, heading: playerHeading, speed: playerSpeed };
    },
  };
  return api;
}
