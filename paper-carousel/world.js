import * as THREE from './vendor/three/three.module.js';

const TAU = Math.PI * 2;
const DEG = Math.PI / 180;

const PALETTE = {
  cream: 0xedddc4,
  creamLight: 0xf7ecd9,
  creamDeep: 0xd7bd98,
  ivory: 0xf3e7d5,
  wine: 0x5f0e22,
  wineDeep: 0x3c0715,
  wineLight: 0x8d2440,
  emerald: 0x123c2d,
  emeraldDeep: 0x09261c,
  emeraldLight: 0x2a5a44,
  gold: 0xb7843f,
  goldLight: 0xe4c17f,
  goldDeep: 0x805528,
  blue: 0x386a84,
  blueDeep: 0x264b60,
  rose: 0xa34f59,
  brown: 0x332018,
  ink: 0x211510,
  paperShadow: 0x6d4232,
};

const HORSES = [
  {
    id: 'bleu', name: '蓝鞍飞马', latin: 'BLEU',
    coat: 0xeadbc5, mane: 0xdcb977, tail: 0xe0bd7e,
    blanket: 0x457b94, blanketDark: 0x2e566d, saddle: 0x274656,
    trim: 0xa93648, bridle: 0x4b7c96, jewel: 0xe4b665,
    pose: 0,
  },
  {
    id: 'claret', name: '绛红衣飞马', latin: 'CLARET',
    coat: 0xe6d7c2, mane: 0x482b23, tail: 0x482b23,
    blanket: 0x7d1c32, blanketDark: 0x561023, saddle: 0x3e0c18,
    trim: 0x1f5b49, bridle: 0x8d2a41, jewel: 0x32705a,
    pose: 1,
  },
  {
    id: 'verdant', name: '翡翠鞍飞马', latin: 'VERDANT',
    coat: 0xf1e4d1, mane: 0xd0a965, tail: 0xd7b372,
    blanket: 0x275c49, blanketDark: 0x183e32, saddle: 0x102e26,
    trim: 0x8e2b3e, bridle: 0x336b56, jewel: 0xc74653,
    pose: 2,
  },
  {
    id: 'rose', name: '玫瑰金飞马', latin: 'ROSE',
    coat: 0xd8bea2, mane: 0xead6b4, tail: 0xe6ceaa,
    blanket: 0xa5525c, blanketDark: 0x78353f, saddle: 0x54252e,
    trim: 0x2f6854, bridle: 0xb06c72, jewel: 0xe4b46f,
    pose: 3,
  },
  {
    id: 'nuit', name: '墨棕鞍飞马', latin: 'NUIT',
    coat: 0xe7d8c2, mane: 0x3e2b24, tail: 0x3b2821,
    blanket: 0x4f3b2e, blanketDark: 0x35261e, saddle: 0x2c1d17,
    trim: 0xb78b4e, bridle: 0x5c4333, jewel: 0x942d3d,
    pose: 4,
  },
  {
    id: 'or', name: '鎏金鞍飞马', latin: 'OR',
    coat: 0xe2d0b5, mane: 0xceaa68, tail: 0xd8b979,
    blanket: 0xb68a48, blanketDark: 0x896431, saddle: 0x5f431f,
    trim: 0x2c5c4b, bridle: 0x9f783d, jewel: 0x811c32,
    pose: 5,
  },
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function random() {
    t += 0x6D2B79F5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function starShape(outer = 1, inner = 0.45, points = 5) {
  const shape = new THREE.Shape();
  for (let i = 0; i < points * 2; i += 1) {
    const angle = (i / (points * 2)) * TAU - Math.PI / 2;
    const radius = i % 2 === 0 ? outer : inner;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

function roundedRectShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const r = Math.min(radius, width / 2, height / 2);
  const s = new THREE.Shape();
  s.moveTo(x + r, y);
  s.lineTo(x + width - r, y);
  s.quadraticCurveTo(x + width, y, x + width, y + r);
  s.lineTo(x + width, y + height - r);
  s.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  s.lineTo(x + r, y + height);
  s.quadraticCurveTo(x, y + height, x, y + height - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  s.closePath();
  return s;
}

function shieldShape(width, height) {
  const s = new THREE.Shape();
  s.moveTo(0, -height / 2);
  s.bezierCurveTo(width * 0.25, -height * 0.26, width * 0.5, -height * 0.08, width * 0.5, height * 0.18);
  s.lineTo(width * 0.5, height * 0.36);
  s.quadraticCurveTo(width * 0.5, height * 0.5, width * 0.38, height * 0.5);
  s.lineTo(-width * 0.38, height * 0.5);
  s.quadraticCurveTo(-width * 0.5, height * 0.5, -width * 0.5, height * 0.36);
  s.lineTo(-width * 0.5, height * 0.18);
  s.bezierCurveTo(-width * 0.5, -height * 0.08, -width * 0.25, -height * 0.26, 0, -height / 2);
  s.closePath();
  return s;
}

function lambrequinShape(width, height, lobes = 3) {
  const s = new THREE.Shape();
  const top = height / 2;
  const shoulder = height * 0.12;
  const bottom = -height / 2;
  s.moveTo(-width / 2, top);
  s.lineTo(width / 2, top);
  s.lineTo(width / 2, shoulder);
  for (let i = 0; i < lobes; i += 1) {
    const x0 = width / 2 - (i * width) / lobes;
    const x1 = width / 2 - ((i + 1) * width) / lobes;
    s.quadraticCurveTo(x0 - width / (lobes * 2.1), bottom - height * 0.08, x1, shoulder - height * 0.03);
  }
  s.lineTo(-width / 2, top);
  s.closePath();
  return s;
}

function cartoucheShape(width, height) {
  const s = new THREE.Shape();
  s.moveTo(-width * 0.43, -height * 0.16);
  s.bezierCurveTo(-width * 0.54, height * 0.1, -width * 0.5, height * 0.36, -width * 0.32, height * 0.32);
  s.bezierCurveTo(-width * 0.25, height * 0.48, -width * 0.12, height * 0.5, 0, height * 0.4);
  s.bezierCurveTo(width * 0.12, height * 0.5, width * 0.25, height * 0.48, width * 0.32, height * 0.32);
  s.bezierCurveTo(width * 0.5, height * 0.36, width * 0.54, height * 0.1, width * 0.43, -height * 0.16);
  s.bezierCurveTo(width * 0.38, -height * 0.4, width * 0.2, -height * 0.42, 0, -height * 0.38);
  s.bezierCurveTo(-width * 0.2, -height * 0.42, -width * 0.38, -height * 0.4, -width * 0.43, -height * 0.16);
  s.closePath();
  return s;
}

function leafShape(width, height) {
  const s = new THREE.Shape();
  s.moveTo(0, -height / 2);
  s.bezierCurveTo(width * 0.5, -height * 0.16, width * 0.48, height * 0.42, 0, height / 2);
  s.bezierCurveTo(-width * 0.48, height * 0.42, -width * 0.5, -height * 0.16, 0, -height / 2);
  s.closePath();
  return s;
}

function mergeGeometrySet(geometries) {
  let total = 0;
  for (const geometry of geometries) total += geometry.getAttribute('position').count;
  const positions = new Float32Array(total * 3);
  const normals = new Float32Array(total * 3);
  const uvs = new Float32Array(total * 2);
  let vertexOffset = 0;
  for (const geometry of geometries) {
    const position = geometry.getAttribute('position');
    const normal = geometry.getAttribute('normal');
    const uv = geometry.getAttribute('uv');
    positions.set(position.array, vertexOffset * 3);
    normals.set(normal.array, vertexOffset * 3);
    uvs.set(uv.array, vertexOffset * 2);
    vertexOffset += position.count;
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  merged.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  merged.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  merged.computeBoundingSphere();
  return merged;
}

function mergeOpaqueGroup(root) {
  root.updateWorldMatrix(true, true);
  const inverseRoot = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map();
  const toRemove = [];

  root.traverse((object) => {
    if (!object.isMesh || object.isInstancedMesh || object.userData.noMerge) return;
    if (!object.material || Array.isArray(object.material) || object.material.transparent) return;
    if (!object.visible) return;
    const material = object.material;
    const source = object.geometry.index ? object.geometry.toNonIndexed() : object.geometry.clone();
    for (const attribute of Object.keys(source.attributes)) {
      if (!['position', 'normal', 'uv'].includes(attribute)) source.deleteAttribute(attribute);
    }
    if (!source.getAttribute('normal')) source.computeVertexNormals();
    if (!source.getAttribute('uv')) {
      const count = source.getAttribute('position').count;
      source.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
    }
    const matrix = new THREE.Matrix4().multiplyMatrices(inverseRoot, object.matrixWorld);
    source.applyMatrix4(matrix);
    let bucket = buckets.get(material.uuid);
    if (!bucket) {
      bucket = { material, geometries: [], castShadow: false, receiveShadow: false };
      buckets.set(material.uuid, bucket);
    }
    bucket.geometries.push(source);
    bucket.castShadow = bucket.castShadow || object.castShadow;
    bucket.receiveShadow = bucket.receiveShadow || object.receiveShadow;
    toRemove.push(object);
  });

  for (const bucket of buckets.values()) {
    const geometry = mergeGeometrySet(bucket.geometries);
    const mesh = new THREE.Mesh(geometry, bucket.material);
    mesh.castShadow = bucket.castShadow;
    mesh.receiveShadow = bucket.receiveShadow;
    mesh.userData.merged = true;
    root.add(mesh);
    for (const geometryPart of bucket.geometries) geometryPart.dispose();
  }
  for (const mesh of toRemove) mesh.parent?.remove(mesh);
  return buckets.size;
}

export class PaperCarouselWorld {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0xf2e4ce, 22, 42);
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.1, 120);
    this.camera.position.set(12, 8.5, 18);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    this.maxAnisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());

    this.clockTime = 0;
    this.spin = 0;
    this.spinSpeed = 0.065;
    this.targetSpinSpeed = 0.065;
    this.riding = false;
    this.nightTarget = 0;
    this.nightAmount = 0;
    this.hovered = -1;
    this.hoverAmounts = [];
    this.pulse = 0;
    this.bulbMarkers = [];
    this.bulbNodes = [];
    this.floatingStars = [];
    this.dust = null;
    this.dustBase = null;

    this.materialCache = new Map();
    this.themeFogDay = new THREE.Color(0xf2e4ce);
    this.themeFogNight = new THREE.Color(0x180c13);
    this.themeFloorDay = new THREE.Color(0xffffff);
    this.themeFloorNight = new THREE.Color(0x654942);
    this.tmpVec = new THREE.Vector3();
    this.tmpVec2 = new THREE.Vector3();
    this.tmpQuat = new THREE.Quaternion();
    this.tmpCam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.rideOffsets = {
      camera: new THREE.Vector3(5.0, 4.3, 5.6),
      look: new THREE.Vector3(0.6, 2.8, 0.0),
      fov: 50,
    };
    this.raycaster = new THREE.Raycaster();
    this.rayNdc = new THREE.Vector2();
    this.rayHits = [];

    this.createTextures();
    this.createMaterials();
    this.setupEnvironment();
    this.setupLights();
    this.buildGround();
    this.buildCarousel();
    this.buildAtmosphere();
    this.resize(window.innerWidth, window.innerHeight);
    this.applyTheme(true);
  }

  /* --------------------------------------------------------------- textures */
  makeCanvas(width, height = width) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  makeTexture(canvas, { srgb = true, repeat = null, anisotropy = true } = {}) {
    const texture = new THREE.CanvasTexture(canvas);
    if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
    if (repeat) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(repeat[0], repeat[1]);
    }
    if (anisotropy) texture.anisotropy = this.maxAnisotropy;
    return texture;
  }

  addPaperFibers(ctx, width, height, random, amount = 0.5) {
    ctx.save();
    ctx.globalAlpha = 0.2 * amount;
    for (let i = 0; i < Math.floor((width * height) / 900); i += 1) {
      const x = random() * width;
      const y = random() * height;
      const light = random() > 0.48;
      ctx.fillStyle = light ? 'rgba(255,255,255,.6)' : 'rgba(66,34,23,.45)';
      ctx.fillRect(x, y, random() * 1.25 + 0.2, random() * 1.25 + 0.2);
    }
    ctx.globalAlpha = 0.1 * amount;
    ctx.lineWidth = 0.55;
    for (let i = 0; i < Math.floor((width + height) / 8); i += 1) {
      const x = random() * width;
      const y = random() * height;
      const length = 2 + random() * 16;
      ctx.strokeStyle = random() > 0.5 ? 'rgba(255,255,255,.65)' : 'rgba(64,34,22,.32)';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + length * 0.4, y + (random() - 0.5) * 2, x + length, y + (random() - 0.5) * 1.4);
      ctx.stroke();
    }
    ctx.restore();
  }

  createTextures() {
    const random = mulberry32(19071907);

    // Fine, almost invisible paper tooth for all matte surfaces.
    const bumpCanvas = this.makeCanvas(512);
    const bctx = bumpCanvas.getContext('2d');
    const bumpImage = bctx.createImageData(512, 512);
    for (let i = 0; i < bumpImage.data.length; i += 4) {
      const value = 128 + Math.floor((random() - 0.5) * 30);
      bumpImage.data[i] = value;
      bumpImage.data[i + 1] = value;
      bumpImage.data[i + 2] = value;
      bumpImage.data[i + 3] = 255;
    }
    bctx.putImageData(bumpImage, 0, 0);
    this.addPaperFibers(bctx, 512, 512, random, 0.2);
    this.paperBump = this.makeTexture(bumpCanvas, { srgb: false, repeat: [3, 3] });

    // Sixteen hand-cut canopy stripes.
    const roofCanvas = this.makeCanvas(2048, 512);
    const rc = roofCanvas.getContext('2d');
    const stripes = 16;
    const stripeWidth = 2048 / stripes;
    for (let i = 0; i < stripes; i += 1) {
      const cream = i % 2 === 0;
      const gradient = rc.createLinearGradient(0, 0, 0, 512);
      if (cream) {
        gradient.addColorStop(0, '#fbf0dc');
        gradient.addColorStop(0.5, '#ebd6b5');
        gradient.addColorStop(1, '#cbaa7e');
      } else {
        gradient.addColorStop(0, '#a42f44');
        gradient.addColorStop(0.45, '#811c32');
        gradient.addColorStop(1, '#4e0e20');
      }
      rc.fillStyle = gradient;
      rc.fillRect(i * stripeWidth, 0, stripeWidth + 1, 512);
      // Painted shading along each panel, like sun on folded card.
      const sheen = rc.createLinearGradient(i * stripeWidth, 0, (i + 1) * stripeWidth, 0);
      sheen.addColorStop(0, 'rgba(255,245,216,.16)');
      sheen.addColorStop(0.3, 'rgba(255,255,255,0)');
      sheen.addColorStop(0.78, 'rgba(45,10,19,.12)');
      sheen.addColorStop(1, 'rgba(20,5,10,.33)');
      rc.fillStyle = sheen;
      rc.fillRect(i * stripeWidth, 0, stripeWidth, 512);
      // Gilt rib shadow and gold hairline at all seams.
      rc.fillStyle = 'rgba(36,9,16,.55)';
      rc.fillRect(i * stripeWidth, 0, 7, 512);
      rc.fillStyle = 'rgba(242,206,137,.95)';
      rc.fillRect(i * stripeWidth + 7, 0, 4, 512);
      rc.fillStyle = 'rgba(255,244,213,.32)';
      rc.fillRect(i * stripeWidth + 11, 0, 1, 512);
    }
    const shade = rc.createLinearGradient(0, 300, 0, 512);
    shade.addColorStop(0, 'rgba(49,12,18,0)');
    shade.addColorStop(1, 'rgba(49,12,18,.34)');
    rc.fillStyle = shade;
    rc.fillRect(0, 0, 2048, 512);
    this.addPaperFibers(rc, 2048, 512, random, 0.8);
    this.roofMap = this.makeTexture(roofCanvas);

    // Ceiling rose seen from beneath the canopy.
    const ceilingCanvas = this.makeCanvas(1024);
    const cc = ceilingCanvas.getContext('2d');
    const cg = cc.createRadialGradient(512, 512, 20, 512, 512, 512);
    cg.addColorStop(0, '#f8e9ca');
    cg.addColorStop(0.22, '#ead3ad');
    cg.addColorStop(0.66, '#b96762');
    cg.addColorStop(0.83, '#7e2336');
    cg.addColorStop(1, '#4c1020');
    cc.fillStyle = cg;
    cc.fillRect(0, 0, 1024, 1024);
    cc.save();
    cc.translate(512, 512);
    for (let i = 0; i < 16; i += 1) {
      cc.save();
      cc.rotate((i / 16) * TAU);
      cc.beginPath();
      cc.moveTo(0, 0);
      cc.lineTo(-32, -430);
      cc.lineTo(34, -430);
      cc.closePath();
      cc.fillStyle = i % 2 ? 'rgba(68,13,27,.28)' : 'rgba(255,244,218,.16)';
      cc.fill();
      cc.restore();
    }
    for (const radius of [132, 250, 346, 438]) {
      cc.strokeStyle = 'rgba(238,202,133,.75)';
      cc.lineWidth = radius === 250 ? 8 : 4;
      cc.beginPath();
      cc.arc(0, 0, radius, 0, TAU);
      cc.stroke();
      cc.strokeStyle = 'rgba(70,15,28,.38)';
      cc.lineWidth = 2;
      cc.beginPath();
      cc.arc(0, 0, radius + 8, 0, TAU);
      cc.stroke();
    }
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * TAU;
      const radius = 296;
      cc.save();
      cc.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
      cc.rotate(angle);
      cc.fillStyle = i % 2 ? '#edd09a' : '#d5a969';
      cc.beginPath();
      cc.ellipse(0, 0, 32, 10, 0, 0, TAU);
      cc.fill();
      cc.restore();
    }
    cc.fillStyle = 'rgba(243,207,139,.8)';
    cc.beginPath();
    cc.arc(0, 0, 54, 0, TAU);
    cc.fill();
    cc.restore();
    this.addPaperFibers(cc, 1024, 1024, random, 0.45);
    this.ceilingMap = this.makeTexture(ceilingCanvas);

    // Deck surface with a compass of thin brass inlay.
    const deckCanvas = this.makeCanvas(1024);
    const dc = deckCanvas.getContext('2d');
    const deckGradient = dc.createRadialGradient(512, 512, 20, 512, 512, 512);
    deckGradient.addColorStop(0, '#f9eedb');
    deckGradient.addColorStop(0.55, '#efdec6');
    deckGradient.addColorStop(0.9, '#e2c9a7');
    deckGradient.addColorStop(1, '#b98d5b');
    dc.fillStyle = deckGradient;
    dc.fillRect(0, 0, 1024, 1024);
    dc.save();
    dc.translate(512, 512);
    for (let i = 0; i < 32; i += 1) {
      dc.save();
      dc.rotate((i / 32) * TAU);
      dc.strokeStyle = i % 4 === 0 ? 'rgba(157,112,57,.3)' : 'rgba(157,112,57,.12)';
      dc.lineWidth = i % 4 === 0 ? 3 : 1.2;
      dc.beginPath();
      dc.moveTo(0, 126);
      dc.lineTo(0, 496);
      dc.stroke();
      dc.restore();
    }
    for (const radius of [120, 218, 318, 420, 492]) {
      dc.strokeStyle = radius === 492 ? 'rgba(130,82,40,.52)' : 'rgba(172,126,66,.46)';
      dc.lineWidth = radius === 492 ? 5 : 2;
      dc.beginPath();
      dc.arc(0, 0, radius, 0, TAU);
      dc.stroke();
      dc.strokeStyle = 'rgba(255,248,228,.42)';
      dc.lineWidth = 1;
      dc.beginPath();
      dc.arc(0, 0, radius + 5, 0, TAU);
      dc.stroke();
    }
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * TAU + Math.PI / 16;
      const radius = 384;
      dc.save();
      dc.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
      dc.rotate(angle);
      dc.fillStyle = i % 2 ? 'rgba(117,27,46,.72)' : 'rgba(29,74,58,.72)';
      dc.beginPath();
      dc.moveTo(0, -18);
      dc.lineTo(13, 0);
      dc.lineTo(0, 18);
      dc.lineTo(-13, 0);
      dc.closePath();
      dc.fill();
      dc.strokeStyle = 'rgba(224,189,123,.8)';
      dc.lineWidth = 2;
      dc.stroke();
      dc.restore();
    }
    dc.restore();
    this.addPaperFibers(dc, 1024, 1024, random, 0.55);
    this.deckMap = this.makeTexture(deckCanvas);

    // A giant scalloped paper doily drawn into the floor.
    const floorCanvas = this.makeCanvas(2048);
    const fc = floorCanvas.getContext('2d');
    const floorGradient = fc.createRadialGradient(1024, 1024, 60, 1024, 1024, 1450);
    floorGradient.addColorStop(0, '#f9eedc');
    floorGradient.addColorStop(0.36, '#f2e3cc');
    floorGradient.addColorStop(0.65, '#ecd9bf');
    floorGradient.addColorStop(1, '#e5d0b4');
    fc.fillStyle = floorGradient;
    fc.fillRect(0, 0, 2048, 2048);
    fc.save();
    fc.translate(1024, 1024);
    const pxPerUnit = 1024 / 36;
    // 24-petal cut-paper rosette around the carousel.
    for (let i = 0; i < 24; i += 1) {
      fc.save();
      fc.rotate((i / 24) * TAU);
      fc.beginPath();
      fc.moveTo(0, 6.3 * pxPerUnit);
      fc.bezierCurveTo(1.9 * pxPerUnit, 6.5 * pxPerUnit, 3.2 * pxPerUnit, 8.4 * pxPerUnit, 0, 10.2 * pxPerUnit);
      fc.bezierCurveTo(-3.2 * pxPerUnit, 8.4 * pxPerUnit, -1.9 * pxPerUnit, 6.5 * pxPerUnit, 0, 6.3 * pxPerUnit);
      fc.fillStyle = i % 2 ? 'rgba(116,26,45,.09)' : 'rgba(255,250,238,.2)';
      fc.fill();
      fc.strokeStyle = 'rgba(145,97,49,.18)';
      fc.lineWidth = 2;
      fc.stroke();
      fc.restore();
    }
    for (const radius of [6.45, 8.9, 13.5, 17.8]) {
      fc.strokeStyle = 'rgba(148,102,52,.17)';
      fc.lineWidth = radius === 8.9 ? 3 : 1.4;
      fc.beginPath();
      fc.arc(0, 0, radius * pxPerUnit, 0, TAU);
      fc.stroke();
    }
    // Sparse gilt stars drift across the paper floor.
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * TAU + 0.12;
      const radius = (11.6 + (i % 4) * 1.6) * pxPerUnit;
      fc.save();
      fc.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
      fc.rotate(angle * 0.6);
      fc.fillStyle = 'rgba(161,115,59,.16)';
      const star = starShape(16, 7, 5);
      const points = star.getPoints(10);
      fc.beginPath();
      points.forEach((point, index) => (index ? fc.lineTo(point.x, point.y) : fc.moveTo(point.x, point.y)));
      fc.closePath();
      fc.fill();
      fc.restore();
    }
    fc.restore();
    this.addPaperFibers(fc, 2048, 2048, random, 1.05);
    this.floorMap = this.makeTexture(floorCanvas);

    // Damask bands around the two lower layers.
    this.wineBandMap = this.makeTexture(this.makeBandCanvas('wine'), { repeat: [16, 1] });
    this.greenBandMap = this.makeTexture(this.makeBandCanvas('green'), { repeat: [16, 1] });

    // Painted acanthus backing behind each canopy cartouche.
    this.filigreeMap = this.makeTexture(this.makeFiligreeCanvas());

    this.glowMap = this.makeTexture(this.makeGlowCanvas());

    this.contactMap = this.makeTexture(this.makeContactCanvas());

    this.environmentMap = this.makeTexture(this.makeEnvironmentCanvas());
    this.environmentMap.mapping = THREE.EquirectangularReflectionMapping;
  }

  makeBandCanvas(kind) {
    const canvas = this.makeCanvas(512, 256);
    const ctx = canvas.getContext('2d');
    const random = mulberry32(kind === 'wine' ? 1103 : 2207);
    const wine = kind === 'wine';
    const bg = ctx.createLinearGradient(0, 0, 0, 256);
    if (wine) {
      bg.addColorStop(0, '#8e2339');
      bg.addColorStop(0.55, '#6d172c');
      bg.addColorStop(1, '#4a0b1d');
    } else {
      bg.addColorStop(0, '#2c5b47');
      bg.addColorStop(0.55, '#1d4939');
      bg.addColorStop(1, '#102f26');
    }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 512, 256);
    ctx.strokeStyle = wine ? 'rgba(235,199,132,.18)' : 'rgba(235,199,132,.16)';
    ctx.lineWidth = 1;
    for (let y = 16; y < 256; y += 22) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(130, y + 7, 380, y - 7, 512, y + 2);
      ctx.stroke();
    }
    for (let x = 32; x < 512; x += 64) {
      ctx.strokeStyle = 'rgba(238,208,150,.12)';
      ctx.beginPath();
      ctx.moveTo(x, 18);
      ctx.lineTo(x, 238);
      ctx.stroke();
    }
    // Central diamond and winding leaf.
    ctx.save();
    ctx.translate(256, 128);
    ctx.strokeStyle = 'rgba(229,192,125,.55)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -66);
    ctx.lineTo(46, 0);
    ctx.lineTo(0, 66);
    ctx.lineTo(-46, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,241,207,.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -52);
    ctx.lineTo(34, 0);
    ctx.lineTo(0, 52);
    ctx.lineTo(-34, 0);
    ctx.closePath();
    ctx.stroke();
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.scale(side, 1);
      ctx.strokeStyle = 'rgba(223,184,113,.38)';
      ctx.beginPath();
      ctx.moveTo(36, 0);
      ctx.bezierCurveTo(70, -32, 122, -35, 148, -7);
      ctx.bezierCurveTo(164, 13, 145, 38, 121, 28);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(96, -23, 17, 7, -0.45, 0, TAU);
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
    ctx.strokeStyle = 'rgba(233,201,139,.52)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 8);
    ctx.lineTo(512, 8);
    ctx.moveTo(0, 248);
    ctx.lineTo(512, 248);
    ctx.stroke();
    this.addPaperFibers(ctx, 512, 256, random, 0.75);
    return canvas;
  }

  makeFiligreeCanvas() {
    const canvas = this.makeCanvas(512, 256);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 256);
    ctx.save();
    ctx.translate(256, 150);
    const drawSide = (side) => {
      ctx.save();
      ctx.scale(side, 1);
      // A curling acanthus in deep emerald with a brass edge.
      ctx.beginPath();
      ctx.moveTo(4, 30);
      ctx.bezierCurveTo(34, 2, 78, -3, 112, 27);
      ctx.bezierCurveTo(142, 54, 118, 92, 83, 80);
      ctx.bezierCurveTo(56, 70, 57, 35, 86, 34);
      ctx.bezierCurveTo(107, 34, 111, 53, 96, 59);
      ctx.strokeStyle = 'rgba(224,188,119,.9)';
      ctx.lineWidth = 7;
      ctx.stroke();
      ctx.strokeStyle = 'rgba(20,58,44,.95)';
      ctx.lineWidth = 3;
      ctx.stroke();
      for (const [x, y, rx, ry, a] of [[44, 20, 27, 10, -0.52], [88, 12, 28, 9, 0.52], [127, 46, 23, 8, 0.78], [75, 66, 27, 10, 0.18]]) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, TAU);
        ctx.fillStyle = '#285642';
        ctx.fill();
        ctx.strokeStyle = 'rgba(224,188,119,.75)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.strokeStyle = 'rgba(241,211,151,.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-rx * 0.6, 0);
        ctx.lineTo(rx * 0.6, 0);
        ctx.stroke();
        ctx.restore();
      }
      // A few curled gold tendrils.
      ctx.strokeStyle = 'rgba(236,203,141,.72)';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(8, -19);
      ctx.bezierCurveTo(47, -49, 92, -59, 133, -36);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(144, -33, 12, 0.3, Math.PI * 1.6);
      ctx.stroke();
      ctx.restore();
    };
    drawSide(1);
    drawSide(-1);
    ctx.strokeStyle = 'rgba(236,203,141,.55)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-36, 16);
    ctx.quadraticCurveTo(0, 33, 36, 16);
    ctx.stroke();
    for (const [x, y, r] of [[0, 32, 4], [-20, 24, 2.5], [20, 24, 2.5], [-36, 16, 2], [36, 16, 2]]) {
      ctx.fillStyle = 'rgba(238,205,143,.82)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, TAU);
      ctx.fill();
    }
    ctx.restore();
    return canvas;
  }

  makeGlowCanvas() {
    const canvas = this.makeCanvas(128);
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255,247,217,1)');
    gradient.addColorStop(0.16, 'rgba(255,229,167,.95)');
    gradient.addColorStop(0.42, 'rgba(255,197,103,.42)');
    gradient.addColorStop(1, 'rgba(255,180,80,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    return canvas;
  }

  makeContactCanvas() {
    const canvas = this.makeCanvas(512);
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(256, 256, 14, 256, 256, 252);
    gradient.addColorStop(0, 'rgba(58,28,22,.58)');
    gradient.addColorStop(0.35, 'rgba(68,33,25,.33)');
    gradient.addColorStop(0.7, 'rgba(76,38,28,.13)');
    gradient.addColorStop(1, 'rgba(76,38,28,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    return canvas;
  }

  makeEnvironmentCanvas() {
    const canvas = this.makeCanvas(1024, 512);
    const ctx = canvas.getContext('2d');
    const base = ctx.createLinearGradient(0, 0, 0, 512);
    base.addColorStop(0, '#fffaf0');
    base.addColorStop(0.34, '#f8ebd5');
    base.addColorStop(0.52, '#e8cfaa');
    base.addColorStop(0.72, '#b98a5c');
    base.addColorStop(1, '#573b2d');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 1024, 512);
    // Warm softboxes make the brass and gold read as polished metal.
    const softbox = (x, y, rx, ry, alpha) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
      g.addColorStop(0, `rgba(255,252,238,${alpha})`);
      g.addColorStop(0.45, `rgba(255,241,211,${alpha * 0.55})`);
      g.addColorStop(1, 'rgba(255,236,201,0)');
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / rx);
      ctx.translate(-x, -y);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, rx, 0, TAU);
      ctx.fill();
      ctx.restore();
    };
    softbox(240, 150, 160, 90, 0.92);
    softbox(730, 100, 120, 70, 0.75);
    softbox(520, 230, 220, 45, 0.55);
    const warm = ctx.createLinearGradient(0, 315, 0, 400);
    warm.addColorStop(0, 'rgba(255,208,139,0)');
    warm.addColorStop(0.48, 'rgba(255,194,112,.34)');
    warm.addColorStop(1, 'rgba(86,25,28,0)');
    ctx.fillStyle = warm;
    ctx.fillRect(0, 300, 1024, 130);
    return canvas;
  }

  /* -------------------------------------------------------------- materials */
  materialKey(color, opts) {
    return [
      color,
      opts.roughness ?? '',
      opts.metalness ?? '',
      opts.side ?? '',
      opts.transparent ?? '',
      opts.opacity ?? '',
      opts.emissive ?? '',
      opts.emissiveIntensity ?? '',
      opts.envMapIntensity ?? '',
      opts.bump ?? '',
      opts.depthWrite ?? '',
      opts.map ? opts.map.uuid : '',
    ].join('|');
  }

  material(color, opts = {}) {
    const key = this.materialKey(color, opts);
    const cached = this.materialCache.get(key);
    if (cached) return cached;
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.78,
      metalness: opts.metalness ?? 0.02,
      side: opts.side ?? THREE.FrontSide,
      transparent: opts.transparent ?? false,
      opacity: opts.opacity ?? 1,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 1,
      envMapIntensity: opts.envMapIntensity ?? 0.52,
      depthWrite: opts.depthWrite ?? true,
    });
    if (opts.map) mat.map = opts.map;
    if (opts.bump !== false) {
      mat.bumpMap = this.paperBump;
      mat.bumpScale = opts.bumpScale ?? 0.012;
    }
    mat.name = opts.name ?? `paper-${color.toString(16)}`;
    this.materialCache.set(key, mat);
    return mat;
  }

  gold(opts = {}) {
    return this.material(opts.color ?? PALETTE.gold, {
      roughness: opts.roughness ?? 0.27,
      metalness: opts.metalness ?? 0.9,
      envMapIntensity: opts.envMapIntensity ?? 1.35,
      bump: opts.bump ?? true,
      bumpScale: 0.004,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 0,
      name: 'gilt',
    });
  }

  createMaterials() {
    this.mats = {
      cream: this.material(PALETTE.cream, { roughness: 0.84, bumpScale: 0.016 }),
      creamLight: this.material(PALETTE.creamLight, { roughness: 0.82 }),
      creamDeep: this.material(PALETTE.creamDeep, { roughness: 0.9 }),
      ivory: this.material(PALETTE.ivory, { roughness: 0.82 }),
      wine: this.material(PALETTE.wine, { roughness: 0.78, bumpScale: 0.013 }),
      wineDeep: this.material(PALETTE.wineDeep, { roughness: 0.82 }),
      wineLight: this.material(PALETTE.wineLight, { roughness: 0.76 }),
      emerald: this.material(PALETTE.emerald, { roughness: 0.72 }),
      emeraldDeep: this.material(PALETTE.emeraldDeep, { roughness: 0.78 }),
      emeraldLight: this.material(PALETTE.emeraldLight, { roughness: 0.76 }),
      blue: this.material(PALETTE.blue, { roughness: 0.72 }),
      blueDeep: this.material(PALETTE.blueDeep, { roughness: 0.74 }),
      rose: this.material(PALETTE.rose, { roughness: 0.76 }),
      brown: this.material(PALETTE.brown, { roughness: 0.74 }),
      ink: this.material(PALETTE.ink, { roughness: 0.46, metalness: 0.05 }),
      gold: this.gold(),
      goldLight: this.gold({ color: PALETTE.goldLight, roughness: 0.24 }),
      goldDeep: this.gold({ color: PALETTE.goldDeep, roughness: 0.38 }),
      floor: new THREE.MeshStandardMaterial({
        map: this.floorMap,
        color: 0xffffff,
        roughness: 0.94,
        metalness: 0,
        envMapIntensity: 0.26,
      }),
      deck: this.material(0xffffff, { map: this.deckMap, roughness: 0.86, bumpScale: 0.01 }),
      wineBand: this.material(0xffffff, { map: this.wineBandMap, roughness: 0.82, bumpScale: 0.012 }),
      greenBand: this.material(0xffffff, { map: this.greenBandMap, roughness: 0.8, bumpScale: 0.012 }),
      roof: new THREE.MeshStandardMaterial({
        map: this.roofMap,
        color: 0xffffff,
        roughness: 0.82,
        metalness: 0.02,
        side: THREE.DoubleSide,
        envMapIntensity: 0.4,
        bumpMap: this.paperBump,
        bumpScale: 0.008,
      }),
      ceiling: new THREE.MeshStandardMaterial({
        map: this.ceilingMap,
        color: 0xffffff,
        roughness: 0.84,
        side: THREE.DoubleSide,
        emissive: 0x6b2b20,
        emissiveIntensity: 0.06,
        envMapIntensity: 0.3,
      }),
      filigree: new THREE.MeshStandardMaterial({
        map: this.filigreeMap,
        transparent: true,
        alphaTest: 0.02,
        depthWrite: false,
        roughness: 0.7,
        metalness: 0.12,
        side: THREE.DoubleSide,
        envMapIntensity: 0.4,
      }),
      bulb: new THREE.MeshStandardMaterial({
        color: 0xffe9b8,
        emissive: 0xffb958,
        emissiveIntensity: 2.2,
        roughness: 0.22,
        metalness: 0.1,
        toneMapped: true,
      }),
    };
    this.bulbMaterial = this.mats.bulb;
    this.bulbGlowMaterial = new THREE.PointsMaterial({
      size: 0.95,
      map: this.glowMap,
      color: 0xffcf83,
      transparent: true,
      opacity: 0.82,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      toneMapped: false,
    });
  }

  setupEnvironment() {
    this.scene.environment = this.environmentMap;
    this.scene.environmentIntensity = 0.66;
  }

  setupLights() {
    this.hemi = new THREE.HemisphereLight(0xfff6e5, 0x641f30, 0.5);
    this.scene.add(this.hemi);

    this.ambient = new THREE.AmbientLight(0xffe2bd, 0.13);
    this.scene.add(this.ambient);

    this.keyLight = new THREE.DirectionalLight(0xffefd5, 2.55);
    this.keyLight.position.set(9, 13, 10);
    this.keyLight.target.position.set(0, 3.8, 0);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    this.keyLight.shadow.camera.left = -11;
    this.keyLight.shadow.camera.right = 11;
    this.keyLight.shadow.camera.top = 13;
    this.keyLight.shadow.camera.bottom = -4;
    this.keyLight.shadow.camera.near = 1;
    this.keyLight.shadow.camera.far = 40;
    this.keyLight.shadow.bias = -0.00045;
    this.keyLight.shadow.normalBias = 0.035;
    this.keyLight.shadow.radius = 3.5;
    this.scene.add(this.keyLight);
    this.scene.add(this.keyLight.target);

    this.fillLight = new THREE.DirectionalLight(0xffd0ad, 0.58);
    this.fillLight.position.set(-8, 6, 8);
    this.fillLight.target.position.set(0, 3, 0);
    this.scene.add(this.fillLight);
    this.scene.add(this.fillLight.target);

    this.rimLight = new THREE.DirectionalLight(0xffbc6d, 1.65);
    this.rimLight.position.set(-5, 9, -9);
    this.rimLight.target.position.set(0, 4, 0);
    this.scene.add(this.rimLight);
    this.scene.add(this.rimLight.target);

    this.displaySpot = new THREE.SpotLight(0xffcb86, 75, 32, 0.48, 0.85, 1.55);
    this.displaySpot.position.set(8, 15, 12);
    this.displaySpot.target.position.set(0, 4, 0);
    this.scene.add(this.displaySpot);
    this.scene.add(this.displaySpot.target);

    this.underLight = new THREE.PointLight(0xffc479, 22, 10, 2);
    this.underLight.position.set(0, 4.25, 0);
    this.scene.add(this.underLight);

    this.underLightWarm = new THREE.PointLight(0xffb463, 12, 8, 2);
    this.underLightWarm.position.set(0, 2.8, 0);
    this.scene.add(this.underLightWarm);
  }

  /* ---------------------------------------------------------------- ground */
  buildGround() {
    const floorGeometry = new THREE.CircleGeometry(36, 128);
    const floor = new THREE.Mesh(floorGeometry, this.mats.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.floor = floor;
    this.scene.add(floor);

    const contact = new THREE.Mesh(
      new THREE.CircleGeometry(9.8, 64),
      new THREE.MeshBasicMaterial({
        map: this.contactMap,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    contact.rotation.x = -Math.PI / 2;
    contact.position.y = 0.012;
    contact.renderOrder = 1;
    this.contactShadow = contact;
    this.scene.add(contact);
  }

  /* ------------------------------------------------------------- carousel  */
  buildCarousel() {
    this.carousel = new THREE.Group();
    this.carousel.position.y = 0;
    this.spinning = new THREE.Group();
    this.carousel.add(this.spinning);
    this.scene.add(this.carousel);

    this.structure = new THREE.Group();
    this.spinning.add(this.structure);

    this.buildBase();
    this.buildColumn();
    this.buildCanopy();
    this.buildPoles();

    // Keep bulb glow positions relative to the spinning deck before merging.
    this.spinning.updateMatrixWorld(true);
    const inverseSpin = new THREE.Matrix4().copy(this.spinning.matrixWorld).invert();
    const glowPositions = [];
    for (const node of this.bulbMarkers) {
      const point = new THREE.Vector3();
      node.getWorldPosition(point).applyMatrix4(inverseSpin);
      glowPositions.push(point.x, point.y, point.z);
    }
    const glowGeometry = new THREE.BufferGeometry();
    glowGeometry.setAttribute('position', new THREE.Float32BufferAttribute(glowPositions, 3));
    this.glowPoints = new THREE.Points(glowGeometry, this.bulbGlowMaterial);
    this.glowPoints.frustumCulled = false;
    this.glowPoints.renderOrder = 4;
    this.spinning.add(this.glowPoints);

    mergeOpaqueGroup(this.structure);
    this.structure.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.userData.structure = true;
      }
    });

    this.buildHorses();
  }

  addBox(parent, width, height, depth, x, y, z, color, opts = {}) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      opts.material ?? this.material(color, opts),
    );
    mesh.position.set(x, y, z);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addCylinder(parent, radiusTop, radiusBottom, height, segments, x, y, z, color, opts = {}) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(
        radiusTop,
        radiusBottom,
        height,
        segments,
        1,
        opts.openEnded ?? false,
        opts.thetaStart ?? 0,
        opts.thetaLength ?? TAU,
      ),
      opts.material ?? this.material(color, opts),
    );
    mesh.position.set(x, y, z);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addCone(parent, radius, height, segments, x, y, z, color, opts = {}) {
    const mesh = new THREE.Mesh(
      new THREE.ConeGeometry(radius, height, segments, 1, opts.openEnded ?? false),
      opts.material ?? this.material(color, opts),
    );
    mesh.position.set(x, y, z);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addSphere(parent, radius, x, y, z, color, opts = {}) {
    const geometry = opts.geometry ?? new THREE.SphereGeometry(radius, opts.segments ?? 16, opts.rings ?? 12);
    const mesh = new THREE.Mesh(geometry, opts.material ?? this.material(color, opts));
    mesh.position.set(x, y, z);
    if (opts.sx || opts.sy || opts.sz) mesh.scale.set(opts.sx ?? 1, opts.sy ?? 1, opts.sz ?? 1);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addTorus(parent, radius, tube, x, y, z, color, opts = {}) {
    const mesh = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, opts.radialSegments ?? 8, opts.tubularSegments ?? 64, opts.arc ?? TAU),
      opts.material ?? this.material(color, opts),
    );
    mesh.position.set(x, y, z);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addExtrude(parent, shape, depth, x, y, z, color, opts = {}) {
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth,
      steps: 1,
      bevelEnabled: opts.bevel ?? true,
      bevelSegments: opts.bevelSegments ?? 2,
      bevelSize: opts.bevelSize ?? 0.012,
      bevelThickness: opts.bevelThickness ?? 0.012,
      curveSegments: opts.curveSegments ?? 10,
    });
    geometry.center();
    const mesh = new THREE.Mesh(geometry, opts.material ?? this.material(color, opts));
    mesh.position.set(x, y, z);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addShape(parent, shape, x, y, z, color, opts = {}) {
    const geometry = new THREE.ShapeGeometry(shape, opts.curveSegments ?? 12);
    const mesh = new THREE.Mesh(geometry, opts.material ?? this.material(color, opts));
    mesh.position.set(x, y, z);
    if (opts.rx) mesh.rotation.x = opts.rx;
    if (opts.ry) mesh.rotation.y = opts.ry;
    if (opts.rz) mesh.rotation.z = opts.rz;
    mesh.castShadow = opts.castShadow ?? false;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addLimb(parent, start, end, radiusStart, radiusEnd, color, opts = {}) {
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    if (length < 0.0001) return null;
    const geometry = new THREE.CylinderGeometry(radiusEnd, radiusStart, length, opts.segments ?? 9, 1);
    const mesh = new THREE.Mesh(geometry, opts.material ?? this.material(color, opts));
    mesh.position.copy(start).add(end).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addTube(parent, points, radius, color, opts = {}) {
    const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.35);
    const geometry = new THREE.TubeGeometry(curve, opts.segments ?? 48, radius, opts.radialSegments ?? 5, false);
    const mesh = new THREE.Mesh(geometry, opts.material ?? this.material(color, opts));
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = opts.receiveShadow ?? true;
    parent.add(mesh);
    return mesh;
  }

  addBulb(parent, x, y, z, scale = 1) {
    const socket = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06 * scale, 0.075 * scale, 0.08 * scale, 10),
      this.mats.gold,
    );
    socket.position.set(x, y + 0.075 * scale, z);
    socket.castShadow = false;
    socket.receiveShadow = false;
    parent.add(socket);

    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.088 * scale, 14, 10), this.mats.bulb);
    bulb.position.set(x, y, z);
    bulb.castShadow = false;
    bulb.receiveShadow = false;
    parent.add(bulb);

    const marker = new THREE.Object3D();
    marker.position.set(x, y, z);
    parent.add(marker);
    this.bulbMarkers.push(marker);
    return bulb;
  }

  addGoldBead(parent, x, y, z, radius = 0.055, mat = this.mats.goldLight) {
    return this.addSphere(parent, radius, x, y, z, 0xffffff, {
      material: mat,
      segments: 10,
      rings: 8,
      castShadow: false,
    });
  }

  addPost(parent, angle, radius, bottom, height, width = 0.11) {
    const group = new THREE.Group();
    group.position.set(Math.sin(angle) * radius, bottom + height / 2, Math.cos(angle) * radius);
    group.rotation.y = angle;
    parent.add(group);
    this.addBox(group, width, height, width * 0.85, 0, 0, 0, 0xffffff, { material: this.mats.cream });
    this.addBox(group, width * 1.8, 0.045, width * 1.5, 0, -height / 2 + 0.02, 0, 0xffffff, { material: this.mats.goldDeep });
    this.addBox(group, width * 1.7, 0.055, width * 1.45, 0, height / 2 - 0.02, 0, 0xffffff, { material: this.mats.gold });
    this.addSphere(group, width * 0.72, 0, height / 2 + 0.07, 0, 0xffffff, { material: this.mats.goldLight, segments: 12, rings: 8 });
    return group;
  }

  addShield(parent, angle, radius, y, width = 0.68, height = 0.9) {
    const group = new THREE.Group();
    group.position.set(Math.sin(angle) * radius, y, Math.cos(angle) * radius);
    group.rotation.y = angle;
    parent.add(group);

    this.addExtrude(group, shieldShape(width, height), 0.05, 0, 0, 0, 0xffffff, {
      material: this.mats.gold, bevelSize: 0.015, bevelThickness: 0.015,
    });
    this.addExtrude(group, shieldShape(width * 0.86, height * 0.86), 0.045, 0, 0.01, 0.033, 0xffffff, {
      material: this.mats.creamLight, bevelSize: 0.01, bevelThickness: 0.008,
    });
    this.addExtrude(group, shieldShape(width * 0.61, height * 0.62), 0.035, 0, -0.01, 0.062, 0xffffff, {
      material: this.mats.wine, bevelSize: 0.008, bevelThickness: 0.006,
    });
    const diamond = new THREE.Shape();
    const dw = width * 0.25;
    const dh = height * 0.24;
    diamond.moveTo(0, -dh);
    diamond.lineTo(dw, 0);
    diamond.lineTo(0, dh);
    diamond.lineTo(-dw, 0);
    diamond.closePath();
    this.addExtrude(group, diamond, 0.025, 0, 0.02, 0.086, 0xffffff, {
      material: this.mats.goldLight, bevelSize: 0.006, bevelThickness: 0.005,
    });
    for (const offset of [-1, 0, 1]) {
      this.addGoldBead(group, offset * 0.12, height * 0.4, 0.09, 0.026);
    }
    return group;
  }

  buildBase() {
    const root = this.structure;
    // Stepped paper foundation.
    this.addCylinder(root, 6.04, 6.14, 0.18, 80, 0, 0.09, 0, 0xffffff, {
      material: this.mats.creamLight,
    });
    this.addTorus(root, 6.07, 0.045, 0, 0.185, 0, 0xffffff, {
      material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 96,
    });
    this.addCylinder(root, 5.91, 5.99, 0.42, 80, 0, 0.41, 0, 0xffffff, {
      material: this.mats.wineBand,
    });
    this.addTorus(root, 5.95, 0.04, 0, 0.2, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 96 });
    this.addTorus(root, 5.91, 0.04, 0, 0.62, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 96 });
    this.addCylinder(root, 5.72, 5.79, 0.3, 80, 0, 0.78, 0, 0xffffff, {
      material: this.mats.greenBand,
    });
    this.addTorus(root, 5.79, 0.035, 0, 0.93, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 96 });
    this.addCylinder(root, 5.6, 5.68, 0.15, 80, 0, 1.0, 0, 0xffffff, {
      material: this.mats.creamLight,
    });
    // Deck inlay.
    const deck = new THREE.Mesh(new THREE.CircleGeometry(5.59, 96), this.mats.deck);
    deck.rotation.x = -Math.PI / 2;
    deck.position.y = 1.079;
    deck.receiveShadow = true;
    root.add(deck);

    // Railing / waist band.
    this.addCylinder(root, 5.38, 5.4, 0.27, 96, 0, 1.25, 0, 0xffffff, {
      material: this.mats.greenBand,
      openEnded: true,
    });
    this.addTorus(root, 5.4, 0.025, 0, 1.1, 0, 0xffffff, { material: this.mats.goldDeep, rx: Math.PI / 2, tubularSegments: 96 });
    this.addTorus(root, 5.37, 0.035, 0, 1.41, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 96 });
    this.addTorus(root, 5.37, 0.02, 0, 1.53, 0, 0xffffff, { material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 96 });

    const railingCount = 16;
    for (let i = 0; i < railingCount; i += 1) {
      const angle = (i / railingCount) * TAU;
      this.addPost(root, angle, 5.37, 1.09, 0.45, 0.105);
      const mid = angle + Math.PI / railingCount;
      const diamond = new THREE.Shape();
      diamond.moveTo(0, -0.1);
      diamond.lineTo(0.075, 0);
      diamond.lineTo(0, 0.1);
      diamond.lineTo(-0.075, 0);
      diamond.closePath();
      const g = new THREE.Group();
      g.position.set(Math.sin(mid) * 5.41, 1.25, Math.cos(mid) * 5.41);
      g.rotation.y = mid;
      root.add(g);
      this.addExtrude(g, diamond, 0.02, 0, 0, 0.018, 0xffffff, {
        material: this.mats.gold, bevelSize: 0.005, bevelThickness: 0.004,
      });
    }

    // Gilt beads and end-of-the-pier shields.
    const beadCount = 24;
    for (let i = 0; i < beadCount; i += 1) {
      const angle = (i / beadCount) * TAU;
      this.addGoldBead(root, Math.sin(angle) * 5.96, 0.405, Math.cos(angle) * 5.96, 0.085);
    }
    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * TAU;
      this.addShield(root, angle, 5.5, 0.88, 0.66, 0.88);
    }

    // A brass maker's plaque on the wine band.
    const plaqueCanvas = this.makeCanvas(768, 220);
    const pc = plaqueCanvas.getContext('2d');
    pc.clearRect(0, 0, 768, 220);
    pc.fillStyle = 'rgba(244,228,199,.95)';
    pc.fillRect(12, 12, 744, 196);
    pc.strokeStyle = 'rgba(132,87,42,.8)';
    pc.lineWidth = 5;
    pc.strokeRect(20, 20, 728, 180);
    pc.strokeStyle = 'rgba(187,143,80,.8)';
    pc.lineWidth = 1.5;
    pc.strokeRect(32, 32, 704, 156);
    pc.fillStyle = '#5d3122';
    pc.font = '500 54px Georgia, "Times New Roman", serif';
    pc.textAlign = 'center';
    pc.textBaseline = 'middle';
    pc.fillText('LE CARROUSEL D’OR', 384, 92);
    pc.fillStyle = '#946e41';
    pc.font = '400 24px Georgia, serif';
    pc.fillText('PAPIER · LAITON · MERVEILLE  ·  1897', 384, 143);
    const plaqueMap = this.makeTexture(plaqueCanvas);
    const plaque = new THREE.Mesh(
      new THREE.PlaneGeometry(2.0, 0.57),
      new THREE.MeshStandardMaterial({ map: plaqueMap, transparent: true, roughness: 0.7, metalness: 0.05 }),
    );
    plaque.position.set(0, 0.46, 6.026);
    plaque.castShadow = false;
    root.add(plaque);
    const plaqueFrame = new THREE.Group();
    plaqueFrame.position.set(0, 0.46, 6.0);
    root.add(plaqueFrame);
    this.addBox(plaqueFrame, 2.14, 0.7, 0.04, 0, 0, 0, 0xffffff, { material: this.mats.goldDeep });
  }

  /* ---------------------------------------------------------------- column */
  buildColumn() {
    const root = this.structure;

    // Pedestal.
    this.addCylinder(root, 1.16, 1.26, 0.17, 32, 0, 1.14, 0, 0xffffff, { material: this.mats.creamLight });
    this.addTorus(root, 1.2, 0.035, 0, 1.23, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 64 });
    this.addCylinder(root, 1.02, 1.13, 0.18, 24, 0, 1.29, 0, 0xffffff, { material: this.mats.emerald });
    this.addTorus(root, 1.03, 0.04, 0, 1.38, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 64 });
    this.addCylinder(root, 0.89, 0.98, 0.13, 24, 0, 1.44, 0, 0xffffff, { material: this.mats.cream });
    this.addTorus(root, 0.9, 0.03, 0, 1.51, 0, 0xffffff, { material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 64 });

    // Lacquered emerald trunk.
    this.addCylinder(root, 0.72, 0.84, 3.68, 32, 0, 3.36, 0, 0xffffff, { material: this.mats.emerald });
    this.addCylinder(root, 0.62, 0.72, 3.38, 32, 0, 3.34, 0, 0xffffff, { material: this.mats.emeraldDeep });
    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * TAU;
      this.addCylinder(
        root, 0.026, 0.034, 3.35, 8,
        Math.sin(angle) * 0.79, 3.3, Math.cos(angle) * 0.79,
        0xffffff, { material: i % 2 ? this.mats.goldDeep : this.mats.gold },
      );
      this.addSphere(root, 0.055, Math.sin(angle) * 0.82, 1.59, Math.cos(angle) * 0.82, 0xffffff, {
        material: this.mats.goldLight, segments: 10, rings: 8,
      });
    }
    this.addTorus(root, 0.84, 0.045, 0, 1.56, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 64 });
    this.addTorus(root, 0.84, 0.045, 0, 5.12, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 64 });

    // Four cream hand-painted medallions.
    for (let i = 0; i < 4; i += 1) {
      const angle = (i / 4) * TAU;
      const g = new THREE.Group();
      g.position.set(Math.sin(angle) * 0.855, 3.38, Math.cos(angle) * 0.855);
      g.rotation.y = angle;
      root.add(g);
      const ellipse = (w, h) => {
        const s = new THREE.Shape();
        s.absellipse(0, 0, w / 2, h / 2, 0, TAU, false, 0);
        return s;
      };
      this.addExtrude(g, ellipse(1.04, 1.92), 0.035, 0, 0, 0, 0xffffff, {
        material: this.mats.gold, bevelSize: 0.008, bevelThickness: 0.006,
      });
      this.addExtrude(g, ellipse(0.9, 1.78), 0.035, 0, 0, 0.03, 0xffffff, {
        material: this.mats.creamLight, bevelSize: 0.007, bevelThickness: 0.005,
      });
      const innerEllipse = (w, h) => {
        const s = new THREE.Shape();
        s.absellipse(0, 0, w / 2, h / 2, 0, TAU, false, 0);
        return s;
      };
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.5, 0.013, 6, 48),
        this.mats.goldDeep,
      );
      ring.scale.set(0.84, 1.54, 1);
      ring.position.set(0, 0, 0.068);
      g.add(ring);
      const star = new THREE.Mesh(
        new THREE.ExtrudeGeometry(starShape(0.16, 0.068, 5), {
          depth: 0.018, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.005, bevelThickness: 0.004,
        }),
        this.mats.gold,
      );
      star.position.set(0, 0.28, 0.075);
      g.add(star);
      const smallDiamond = new THREE.Shape();
      smallDiamond.moveTo(0, -0.08);
      smallDiamond.lineTo(0.08, 0);
      smallDiamond.lineTo(0, 0.08);
      smallDiamond.lineTo(-0.08, 0);
      smallDiamond.closePath();
      this.addExtrude(g, smallDiamond, 0.018, 0, -0.45, 0.075, 0xffffff, {
        material: this.mats.goldLight, bevelSize: 0.004, bevelThickness: 0.003,
      });
    }

    // Gilt capital and a ring of low-hanging lamps.
    this.addCylinder(root, 0.98, 0.73, 0.3, 32, 0, 5.16, 0, 0xffffff, { material: this.mats.gold });
    this.addCylinder(root, 1.11, 0.94, 0.18, 32, 0, 5.32, 0, 0xffffff, { material: this.mats.cream });
    this.addTorus(root, 1.12, 0.035, 0, 5.4, 0, 0xffffff, { material: this.mats.goldDeep, rx: Math.PI / 2, tubularSegments: 64 });
    this.addTorus(root, 0.95, 0.03, 0, 5.04, 0, 0xffffff, { material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 64 });

    const lampCount = 12;
    for (let i = 0; i < lampCount; i += 1) {
      const angle = (i / lampCount) * TAU;
      const x = Math.sin(angle) * 1.72;
      const z = Math.cos(angle) * 1.72;
      const arm = new THREE.Group();
      arm.position.set(0, 0, 0);
      root.add(arm);
      this.addLimb(arm, new THREE.Vector3(0, 5.2, 0), new THREE.Vector3(x, 5.14, z), 0.018, 0.018, 0xffffff, {
        material: this.mats.gold, segments: 6,
      });
      this.addCylinder(arm, 0.05, 0.026, 0.19, 8, x, 5.04, z, 0xffffff, { material: this.mats.gold });
      this.addBulb(arm, x, 4.91, z, 0.82);
    }
  }

  /* ---------------------------------------------------------------- canopy */
  buildCanopy() {
    const root = this.structure;

    // Painted ceiling, just above the horses' heads.
    const ceiling = new THREE.Mesh(new THREE.CircleGeometry(5.48, 96), this.mats.ceiling);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 5.71;
    ceiling.receiveShadow = true;
    root.add(ceiling);
    this.addTorus(root, 5.47, 0.045, 0, 5.7, 0, 0xffffff, {
      material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 112,
    });
    this.addTorus(root, 1.18, 0.035, 0, 5.68, 0, 0xffffff, {
      material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 72,
    });
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * TAU;
      this.addLimb(
        root,
        new THREE.Vector3(Math.sin(angle) * 1.2, 5.69, Math.cos(angle) * 1.2),
        new THREE.Vector3(Math.sin(angle) * 5.42, 5.69, Math.cos(angle) * 5.42),
        0.018, 0.014, 0xffffff, { material: this.mats.goldDeep, segments: 5 },
      );
    }

    // 16 alternating paper gores form the tent.
    const roof = new THREE.Mesh(new THREE.ConeGeometry(5.7, 2.15, 64, 1, true), this.mats.roof);
    roof.position.y = 6.85;
    roof.castShadow = true;
    roof.receiveShadow = true;
    root.add(roof);
    this.addTorus(root, 5.675, 0.055, 0, 5.78, 0, 0xffffff, {
      material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 128,
    });
    this.addTorus(root, 5.52, 0.028, 0, 5.88, 0, 0xffffff, {
      material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 112,
    });

    // Gilded ribs, bowed very slightly outward so they read as wirework.
    for (let i = 0; i < 16; i += 1) {
      const angle = (i / 16) * TAU;
      const points = [
        new THREE.Vector3(0, 7.94, 0),
        new THREE.Vector3(Math.sin(angle) * 1.7, 7.28, Math.cos(angle) * 1.7),
        new THREE.Vector3(Math.sin(angle) * 3.75, 6.5, Math.cos(angle) * 3.75),
        new THREE.Vector3(Math.sin(angle) * 5.68, 5.77, Math.cos(angle) * 5.68),
      ];
      this.addTube(root, points, 0.031, 0xffffff, { material: this.mats.gold, segments: 34, radialSegments: 5 });
      this.addGoldBead(root, Math.sin(angle) * 5.7, 5.77, Math.cos(angle) * 5.7, 0.065);
    }

    // A hanging valance of twelve scalloped paper cartouches.
    const panelCount = 12;
    const panelWidth = 2.68;
    const panelHeight = 1.4;
    const panelRadius = 5.43;
    for (let i = 0; i < panelCount; i += 1) {
      const angle = (i / panelCount) * TAU;
      const g = new THREE.Group();
      g.position.set(Math.sin(angle) * panelRadius, 5.52, Math.cos(angle) * panelRadius);
      g.rotation.y = angle;
      root.add(g);

      this.addExtrude(g, lambrequinShape(panelWidth, panelHeight, 3), 0.048, 0, 0, 0, 0xffffff, {
        material: this.mats.gold,
        bevelSize: 0.018,
        bevelThickness: 0.014,
      });
      this.addExtrude(g, lambrequinShape(panelWidth - 0.075, panelHeight - 0.07, 3), 0.042, 0, -0.012, 0.045, 0xffffff, {
        material: this.mats.wine,
        bevelSize: 0.01,
        bevelThickness: 0.008,
      });

      // Painted acanthus behind the cream name card.
      const filigree = new THREE.Mesh(new THREE.PlaneGeometry(2.28, 1.14), this.mats.filigree);
      filigree.position.set(0, -0.36, 0.098);
      g.add(filigree);

      // The cartouche sits below the roof rim, so the brass rim never cuts it.
      this.addExtrude(g, cartoucheShape(1.55, 0.79), 0.038, 0, -0.2, 0.085, 0xffffff, {
        material: this.mats.gold,
        bevelSize: 0.012,
        bevelThickness: 0.008,
      });
      this.addExtrude(g, cartoucheShape(1.41, 0.66), 0.032, 0, -0.19, 0.112, 0xffffff, {
        material: this.mats.creamLight,
        bevelSize: 0.008,
        bevelThickness: 0.006,
      });
      const star = new THREE.Mesh(
        new THREE.ExtrudeGeometry(starShape(0.075, 0.031, 5), {
          depth: 0.014, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.004, bevelThickness: 0.003,
        }),
        this.mats.goldDeep,
      );
      star.position.set(0, -0.2, 0.148);
      g.add(star);

      // Three warm lamps in each scalloped hem.
      for (const offset of [-0.7, 0, 0.7]) {
        this.addBulb(g, offset, -0.54, 0.14, 0.98);
      }

      // Little brass drops at the meeting points of the scallops.
      this.addGoldBead(g, 0, -0.68, 0.08, 0.046);
      this.addGoldBead(g, -0.89, -0.5, 0.07, 0.032);
      this.addGoldBead(g, 0.89, -0.5, 0.07, 0.032);
    }

    // Crown drum and onion finial.
    this.addCylinder(root, 0.78, 0.86, 0.46, 24, 0, 8.08, 0, 0xffffff, { material: this.mats.emerald });
    this.addTorus(root, 0.79, 0.045, 0, 7.87, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 64 });
    this.addTorus(root, 0.79, 0.045, 0, 8.3, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 64 });
    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * TAU;
      this.addSphere(root, 0.115, Math.sin(angle) * 0.91, 8.08, Math.cos(angle) * 0.91, 0xffffff, {
        material: this.mats.goldLight, segments: 14, rings: 10,
      });
    }
    this.addCylinder(root, 0.72, 0.62, 0.2, 24, 0, 8.41, 0, 0xffffff, { material: this.mats.gold });
    this.addCone(root, 0.57, 0.44, 24, 0, 8.64, 0, 0xffffff, { material: this.mats.goldDeep });
    this.addCylinder(root, 0.18, 0.26, 0.17, 16, 0, 8.89, 0, 0xffffff, { material: this.mats.emerald });
    this.addTorus(root, 0.25, 0.035, 0, 8.98, 0, 0xffffff, { material: this.mats.gold, rx: Math.PI / 2, tubularSegments: 48 });
    this.addSphere(root, 0.22, 0, 9.16, 0, 0xffffff, { material: this.mats.goldLight, segments: 22, rings: 16 });
    this.addCone(root, 0.055, 0.32, 10, 0, 9.44, 0, 0xffffff, { material: this.mats.goldLight });
    this.addSphere(root, 0.055, 0, 9.62, 0, 0xffffff, { material: this.mats.goldLight, segments: 12, rings: 8 });

  }

  /* ----------------------------------------------------------------- poles */
  buildPoles() {
    const count = HORSES.length;
    const radius = 3.84;
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * TAU;
      const g = new THREE.Group();
      g.position.set(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
      this.structure.add(g);

      this.addCylinder(g, 0.045, 0.052, 4.55, 12, 0, 3.37, 0, 0xffffff, { material: this.mats.goldDeep });
      this.addCylinder(g, 0.11, 0.16, 0.16, 12, 0, 1.15, 0, 0xffffff, { material: this.mats.gold });
      this.addTorus(g, 0.13, 0.028, 0, 1.25, 0, 0xffffff, { material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 32 });
      this.addTorus(g, 0.11, 0.025, 0, 5.55, 0, 0xffffff, { material: this.mats.goldLight, rx: Math.PI / 2, tubularSegments: 32 });
      this.addCylinder(g, 0.1, 0.075, 0.1, 12, 0, 5.65, 0, 0xffffff, { material: this.mats.gold });

      for (let strand = 0; strand < 2; strand += 1) {
        const phase = strand * Math.PI;
        const points = [];
        const turns = 8;
        const steps = 100;
        const height = 4.42;
        for (let s = 0; s <= steps; s += 1) {
          const t = s / steps;
          const theta = t * TAU * turns + phase;
          const r = 0.058;
          points.push(new THREE.Vector3(
            Math.sin(theta) * r,
            1.18 + t * height,
            Math.cos(theta) * r,
          ));
        }
        this.addTube(g, points, 0.013, 0xffffff, {
          material: strand ? this.mats.goldLight : this.mats.gold,
          segments: 180,
          radialSegments: 4,
        });
      }

      this.addSphere(g, 0.085, 0, 5.71, 0, 0xffffff, { material: this.mats.goldLight, segments: 14, rings: 10 });
    }
  }

  /* ---------------------------------------------------------------- horses */
  buildHorses() {
    this.horses = [];
    this.pickMeshes = [];
    this.hoverRings = [];
    const ringGeometry = new THREE.RingGeometry(0.48, 0.61, 56);
    const count = HORSES.length;

    for (let i = 0; i < count; i += 1) {
      const config = HORSES[i];
      const angle = (i / count) * TAU + 0.03;
      const radius = 3.84;
      const horse = this.buildHorseModel(config, i);

      horse.scale.setScalar(0.9);
      horse.position.set(Math.sin(angle) * radius, 0.78, Math.cos(angle) * radius);
      horse.rotation.y = angle;
      horse.userData.horseIndex = i;
      horse.traverse((object) => {
        if (object.isMesh) {
          object.userData.horseIndex = i;
          this.pickMeshes.push(object);
        }
      });
      this.spinning.add(horse);

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffd69b,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        toneMapped: false,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(Math.sin(angle) * radius, 1.1, Math.cos(angle) * radius);
      ring.renderOrder = 2;
      ring.userData.noPick = true;
      this.spinning.add(ring);
      this.hoverRings.push(ring);

      this.horses.push({
        root: horse,
        ring,
        ringMaterial,
        baseY: 0.78,
        phase: i * 1.17 + 0.4,
        bob: 0.075 + (i % 3) * 0.012,
        angle,
        config,
      });
      this.hoverAmounts.push(0);
    }

    this.spinning.updateWorldMatrix(true, true);
  }

  buildHorseModel(config, index) {
    const g = new THREE.Group();
    const darkCoat = new THREE.Color(config.coat).multiplyScalar(0.88).getHex();
    const coat = this.material(config.coat, { roughness: 0.65, bumpScale: 0.011 });
    const coatShade = this.material(darkCoat, { roughness: 0.69, bumpScale: 0.011 });
    const mane = this.material(config.mane, { roughness: 0.76, bumpScale: 0.008 });
    const tail = this.material(config.tail, { roughness: 0.78, bumpScale: 0.008 });
    const blanket = this.material(config.blanket, { roughness: 0.72, bumpScale: 0.013 });
    const blanketSide = this.material(config.blanket, { roughness: 0.72, side: THREE.DoubleSide, bumpScale: 0.013 });
    const saddle = this.material(config.saddle, { roughness: 0.65 });
    const trim = this.material(config.trim, { roughness: 0.72 });
    const bridle = this.material(config.bridle, { roughness: 0.62 });
    const leather = this.material(0x3e2520, { roughness: 0.62 });
    const jewel = this.material(config.jewel, {
      roughness: 0.28,
      metalness: 0.18,
      emissive: config.jewel,
      emissiveIntensity: 0.22,
      bump: false,
    });
    const gold = this.mats.gold;
    const goldLight = this.mats.goldLight;
    const goldDeep = this.mats.goldDeep;
    const eyeMat = this.mats.ink;
    const hoof = this.mats.brown;

    // Rounded paper volumes: chest, barrel and haunch.
    this.addSphere(g, 1, 0.02, 2.33, 0, 0xffffff, { material: coat, sx: 1.42, sy: 0.54, sz: 0.49, segments: 24, rings: 16 });
    this.addSphere(g, 1, 0.6, 2.35, 0, 0xffffff, { material: coat, sx: 0.57, sy: 0.49, sz: 0.47, segments: 20, rings: 14 });
    this.addSphere(g, 1, -0.67, 2.36, 0, 0xffffff, { material: coat, sx: 0.59, sy: 0.53, sz: 0.47, segments: 22, rings: 14 });
    this.addSphere(g, 1, -0.52, 2.15, 0, 0xffffff, { material: coatShade, sx: 0.48, sy: 0.37, sz: 0.42, segments: 18, rings: 12 });

    // Arched neck.
    this.addLimb(
      g,
      new THREE.Vector3(0.55, 2.42, 0),
      new THREE.Vector3(1.3, 3.38, 0),
      0.38, 0.25, 0xffffff,
      { material: coat, segments: 14 },
    );
    this.addSphere(g, 1, 1.23, 3.39, 0, 0xffffff, { material: coat, sx: 0.35, sy: 0.31, sz: 0.31, rz: -0.28, segments: 16, rings: 12 });

    // Head, cheek, muzzle and velvet nose.
    this.addSphere(g, 1, 1.56, 3.5, 0, 0xffffff, { material: coat, sx: 0.54, sy: 0.31, sz: 0.31, rz: -0.08, segments: 20, rings: 14 });
    this.addSphere(g, 1, 1.62, 3.3, 0, 0xffffff, { material: coat, sx: 0.4, sy: 0.23, sz: 0.26, rz: -0.06, segments: 16, rings: 12 });
    this.addSphere(g, 1, 1.98, 3.35, 0, 0xffffff, { material: coat, sx: 0.34, sy: 0.23, sz: 0.24, rz: -0.18, segments: 16, rings: 12 });
    this.addSphere(g, 1, 2.16, 3.27, 0, 0xffffff, { material: coatShade, sx: 0.16, sy: 0.14, sz: 0.18, rz: -0.12, segments: 14, rings: 10 });

    // Ears and inner blush.
    for (const z of [-0.14, 0.14]) {
      this.addCone(g, 0.073, 0.25, 8, 1.43, 3.8, z, 0xffffff, {
        material: coat, rz: -0.1, segments: 8,
      });
      this.addCone(g, 0.037, 0.14, 7, 1.45, 3.79, z, 0xffffff, {
        material: this.material(0xb77b74, { roughness: 0.82 }), rz: -0.1,
      });
    }

    // Eyes with gilt rims and a tiny highlight.
    for (const z of [-0.295, 0.295]) {
      this.addSphere(g, 0.06, 1.69, 3.53, z, 0xffffff, { material: eyeMat, segments: 12, rings: 8 });
      this.addTorus(g, 0.086, 0.012, 1.69, 3.53, z, 0xffffff, {
        material: goldDeep, radialSegments: 5, tubularSegments: 24,
      });
      this.addSphere(g, 0.015, 1.71, 3.56, z > 0 ? z + 0.034 : z - 0.034, 0xffffff, {
        material: this.material(0xfff8e8, { roughness: 0.2, emissive: 0xfff0cd, emissiveIntensity: 0.4, bump: false }),
        segments: 8, rings: 6, castShadow: false,
      });
      this.addSphere(g, 0.026, 2.17, 3.25, z * 0.36, 0xffffff, { material: eyeMat, segments: 8, rings: 6 });
    }
    this.addSphere(g, 0.03, 2.2, 3.24, 0.11, 0xffffff, { material: eyeMat, segments: 8, rings: 6 });

    // Layered paper mane.
    for (let i = 0; i < 8; i += 1) {
      const t = i / 7;
      const x = 0.68 + t * 0.78;
      const y = 3.06 + t * 0.58;
      for (const z of [-0.09, 0.09]) {
        this.addSphere(g, 1, x, y, z, 0xffffff, {
          material: mane, sx: 0.17, sy: 0.27, sz: 0.13, rz: -0.5, segments: 10, rings: 8,
        });
      }
    }
    this.addSphere(g, 1, 1.36, 3.73, 0, 0xffffff, { material: mane, sx: 0.13, sy: 0.24, sz: 0.25, rz: -0.65, segments: 12, rings: 8 });
    for (const z of [-0.18, 0.18]) {
      this.addCone(g, 0.045, 0.23, 6, 1.45, 3.72, z, 0xffffff, { material: gold, rz: -0.65 });
    }

    // Sweeping tail strands, tied with a brass band.
    const tailBase = -1.08;
    const tailPoints = [
      new THREE.Vector3(tailBase, 2.45, 0),
      new THREE.Vector3(-1.36, 2.23, 0.02),
      new THREE.Vector3(-1.61, 1.82, 0.05),
      new THREE.Vector3(-1.64, 1.28, 0.03),
      new THREE.Vector3(-1.47, 0.93, 0),
    ];
    for (let strand = -1; strand <= 1; strand += 1) {
      const points = tailPoints.map((point, i) => new THREE.Vector3(
        point.x + Math.abs(strand) * 0.035,
        point.y - Math.abs(strand) * 0.06,
        point.z + strand * 0.1,
      ));
      this.addTube(g, points, 0.1 - Math.abs(strand) * 0.015, 0xffffff, {
        material: config.tail === config.mane ? mane : tail,
        segments: 26,
        radialSegments: 6,
      });
    }
    this.addTorus(g, 0.18, 0.035, -1.08, 2.46, 0, 0xffffff, {
      material: gold, radialSegments: 6, tubularSegments: 24, ry: Math.PI / 2,
    });
    for (let i = 0; i < 3; i += 1) {
      this.addSphere(g, 0.035, -1.2 - i * 0.1, 2.28 - i * 0.22, 0.16, 0xffffff, { material: goldLight, segments: 8, rings: 6 });
    }

    // Four legs held in a light gallop. Each horse gets one small pose change.
    const legDefinitions = [
      { a: [0.62, 2.1, 0.31], k: [1.0, 1.45, 0.35], h: [1.22, 0.83, 0.37], front: true, near: true },
      { a: [0.62, 2.06, -0.31], k: [0.82, 1.22, -0.36], h: [0.93, 0.41, -0.38], front: true, near: false },
      { a: [-0.62, 2.12, 0.32], k: [-1.0, 1.51, 0.36], h: [-1.27, 0.97, 0.38], rear: true, near: true },
      { a: [-0.62, 2.07, -0.32], k: [-0.82, 1.31, -0.36], h: [-1.03, 0.44, -0.38], rear: true, near: false },
    ];
    for (const leg of legDefinitions) {
      if (leg.front && leg.near && config.pose % 3 === 0) {
        leg.h[1] += 0.23;
        leg.k[1] += 0.08;
      } else if (leg.front && leg.near) {
        leg.h[1] += 0.07;
      }
      if (leg.front && !leg.near && config.pose % 3 === 2) {
        leg.h[1] += 0.25;
        leg.k[1] += 0.1;
      }
      const a = new THREE.Vector3(...leg.a);
      const k = new THREE.Vector3(...leg.k);
      const h = new THREE.Vector3(...leg.h);
      this.addSphere(g, 1, a.x, a.y, a.z, 0xffffff, {
        material: coat, sx: 0.17, sy: 0.2, sz: 0.15, segments: 12, rings: 8,
      });
      this.addLimb(g, a, k, 0.14, 0.1, 0xffffff, { material: coat, segments: 10 });
      this.addSphere(g, 0.12, k.x, k.y, k.z, 0xffffff, { material: coat, segments: 10, rings: 8 });
      this.addLimb(g, k, h, 0.1, 0.062, 0xffffff, { material: coat, segments: 9 });
      this.addSphere(g, 1, h.x, h.y, h.z, 0xffffff, {
        material: hoof, sx: 0.15, sy: 0.1, sz: 0.14, segments: 12, rings: 8,
      });
      this.addTorus(g, 0.11, 0.018, h.x, h.y + 0.07, h.z, 0xffffff, {
        material: gold, radialSegments: 5, tubularSegments: 20, rx: Math.PI / 2,
      });
      this.addSphere(g, 0.026, h.x + 0.1, h.y - 0.035, h.z, 0xffffff, { material: goldLight, segments: 8, rings: 6 });
    }

    // Scalloped saddle blanket, layered like cut paper.
    const drapeShape = (scale = 1) => {
      const s = new THREE.Shape();
      s.moveTo(-0.62 * scale, 0.28 * scale);
      s.lineTo(0.62 * scale, 0.28 * scale);
      s.quadraticCurveTo(0.65 * scale, 0.04 * scale, 0.51 * scale, -0.24 * scale);
      s.quadraticCurveTo(0.36 * scale, -0.42 * scale, 0.17 * scale, -0.3 * scale);
      s.quadraticCurveTo(0, -0.22 * scale, -0.17 * scale, -0.36 * scale);
      s.quadraticCurveTo(-0.38 * scale, -0.46 * scale, -0.53 * scale, -0.23 * scale);
      s.quadraticCurveTo(-0.65 * scale, 0.02 * scale, -0.62 * scale, 0.28 * scale);
      s.closePath();
      return s;
    };

    for (const side of [-1, 1]) {
      const drapeGroup = new THREE.Group();
      drapeGroup.position.set(-0.06, 2.51, side * 0.515);
      if (side < 0) drapeGroup.rotation.y = Math.PI;
      g.add(drapeGroup);
      this.addExtrude(drapeGroup, drapeShape(1.045), 0.025, 0, 0, 0, 0xffffff, {
        material: goldDeep, bevelSize: 0.007, bevelThickness: 0.005,
      });
      this.addExtrude(drapeGroup, drapeShape(0.96), 0.028, 0, 0.005, 0.026, 0xffffff, {
        material: blanketSide, bevelSize: 0.006, bevelThickness: 0.004,
      });
      this.addBox(drapeGroup, 0.98, 0.03, 0.026, 0, -0.23, 0.062, 0xffffff, { material: gold });
      for (let stud = 0; stud < 4; stud += 1) {
        const x = -0.38 + stud * 0.255;
        const y = -0.23 - Math.abs(stud - 1.5) * 0.014;
        this.addSphere(drapeGroup, 0.031, x, y, 0.072, 0xffffff, {
          material: goldLight, segments: 8, rings: 6,
        });
      }
      for (let fringe = 0; fringe < 5; fringe += 1) {
        this.addCone(drapeGroup, 0.025, 0.12, 5, -0.38 + fringe * 0.19, -0.36, 0.052, 0xffffff, {
          material: goldDeep, rx: Math.PI,
        });
      }
      // Stirrup leather and hoop.
      this.addLimb(
        drapeGroup,
        new THREE.Vector3(0.06, -0.08, 0.08),
        new THREE.Vector3(0.06, -0.52, 0.1),
        0.028, 0.028, 0xffffff,
        { material: leather, segments: 6 },
      );
      this.addTorus(drapeGroup, 0.13, 0.024, 0.06, -0.63, 0.1, 0xffffff, {
        material: gold, radialSegments: 5, tubularSegments: 24,
      });
    }

    // Girth and saddle.
    this.addTorus(g, 0.56, 0.03, 0.02, 2.31, 0, 0xffffff, {
      material: leather, radialSegments: 6, tubularSegments: 40, ry: Math.PI / 2,
    });
    this.addSphere(g, 1, -0.13, 2.82, 0, 0xffffff, {
      material: saddle, sx: 0.57, sy: 0.18, sz: 0.43, segments: 20, rings: 12,
    });
    this.addSphere(g, 1, -0.56, 2.91, 0, 0xffffff, {
      material: saddle, sx: 0.12, sy: 0.29, sz: 0.43, rz: 0.22, segments: 12, rings: 8,
    });
    this.addSphere(g, 1, 0.25, 2.93, 0, 0xffffff, {
      material: saddle, sx: 0.12, sy: 0.24, sz: 0.4, rz: -0.16, segments: 12, rings: 8,
    });
    this.addTorus(g, 0.25, 0.03, 0.26, 2.95, 0, 0xffffff, {
      material: gold, rx: Math.PI / 2, radialSegments: 5, tubularSegments: 26,
    });
    this.addSphere(g, 0.055, 0.25, 3.1, 0, 0xffffff, { material: goldLight, segments: 10, rings: 8 });
    this.addSphere(g, 0.05, -0.55, 3.16, 0, 0xffffff, { material: goldLight, segments: 10, rings: 8 });

    // Gilt rosette on the blanket.
    const rosette = new THREE.Mesh(
      new THREE.ExtrudeGeometry(starShape(0.16, 0.062, 8), {
        depth: 0.015, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.005, bevelThickness: 0.004,
      }),
      gold,
    );
    rosette.position.set(-0.5, 2.55, 0.56);
    g.add(rosette);
    this.addSphere(g, 0.04, -0.5, 2.55, 0.58, 0xffffff, { material: jewel, segments: 10, rings: 8 });

    // Breast collar and little bells.
    const collarPoints = [
      new THREE.Vector3(1.04, 2.6, -0.42),
      new THREE.Vector3(1.19, 2.46, -0.24),
      new THREE.Vector3(1.24, 2.41, 0),
      new THREE.Vector3(1.19, 2.46, 0.24),
      new THREE.Vector3(1.04, 2.6, 0.42),
    ];
    this.addTube(g, collarPoints, 0.035, 0xffffff, { material: trim, segments: 28, radialSegments: 5 });
    for (const z of [-0.28, 0, 0.28]) {
      this.addSphere(g, 0.055, 1.16, 2.34, z, 0xffffff, { material: gold, segments: 10, rings: 8 });
      this.addCone(g, 0.045, 0.18, 5, 1.16, 2.2, z, 0xffffff, { material: trim, rx: Math.PI });
    }

    // Bridle, bit and reins.
    this.addTorus(g, 0.255, 0.018, 2.02, 3.33, 0, 0xffffff, {
      material: bridle, ry: Math.PI / 2, radialSegments: 5, tubularSegments: 32,
    });
    this.addTorus(g, 0.29, 0.015, 1.54, 3.48, 0, 0xffffff, {
      material: leather, ry: Math.PI / 2, radialSegments: 4, tubularSegments: 28,
    });
    for (const z of [-0.245, 0.245]) {
      this.addLimb(
        g,
        new THREE.Vector3(2.02, 3.3, z),
        new THREE.Vector3(1.51, 3.47, z * 1.08),
        0.018, 0.015, 0xffffff,
        { material: bridle, segments: 6 },
      );
      this.addCylinder(g, 0.022, 0.022, 0.12, 8, 2.04, 3.27, z * 1.2, 0xffffff, {
        material: gold, rx: Math.PI / 2,
      });
      this.addTube(g, [
        new THREE.Vector3(2.04, 3.25, z * 1.2),
        new THREE.Vector3(1.45, 2.94, z * 1.5),
        new THREE.Vector3(0.62, 2.88, z * 1.35),
        new THREE.Vector3(0.06, 2.98, z * 1.1),
      ], 0.012, 0xffffff, { material: leather, segments: 22, radialSegments: 4 });
    }
    this.addSphere(g, 0.05, 1.55, 3.71, 0, 0xffffff, { material: jewel, segments: 10, rings: 8 });
    this.addTorus(g, 0.07, 0.014, 1.55, 3.71, 0, 0xffffff, {
      material: goldLight, radialSegments: 5, tubularSegments: 20,
    });

    // Embroidered shoulder dots, a signature of the atelier.
    for (let dot = 0; dot < 5; dot += 1) {
      this.addSphere(g, 0.021, 0.78 + dot * 0.05, 2.76 - dot * 0.04, dot % 2 ? 0.48 : -0.48, 0xffffff, {
        material: goldLight, segments: 6, rings: 5,
      });
    }

    mergeOpaqueGroup(g);
    return g;
  }

  /* ------------------------------------------------------------- atmosphere */
  buildAtmosphere() {
    const random = mulberry32(26082026);
    const count = 220;
    const positions = new Float32Array(count * 3);
    this.dustBase = [];
    for (let i = 0; i < count; i += 1) {
      const angle = random() * TAU;
      const radius = 6.8 + random() * 15.5;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const y = 0.5 + random() * 11.5;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      this.dustBase.push({ x, y, z, phase: random() * TAU, speed: 0.18 + random() * 0.35, drift: 0.12 + random() * 0.48 });
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      map: this.glowMap,
      color: 0xffdfa8,
      size: 0.11,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      toneMapped: false,
    });
    this.dust = new THREE.Points(geometry, material);
    this.dust.frustumCulled = false;
    this.scene.add(this.dust);

    const starMaterials = [
      this.material(PALETTE.creamLight, { roughness: 0.82 }),
      this.material(PALETTE.goldLight, { roughness: 0.3, metalness: 0.7 }),
      this.material(PALETTE.wineLight, { roughness: 0.76 }),
      this.material(PALETTE.creamDeep, { roughness: 0.88 }),
    ];
    for (let i = 0; i < 10; i += 1) {
      const angle = random() * TAU;
      const radius = 13.5 + random() * 8.5;
      const size = 0.08 + random() * 0.1;
      const shape = i % 5 === 0 ? starShape(size, size * 0.2, 4) : starShape(size, size * 0.42, 5);
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.025,
        bevelEnabled: true,
        bevelSegments: 1,
        bevelSize: 0.008,
        bevelThickness: 0.006,
      });
      geometry.center();
      const star = new THREE.Mesh(geometry, starMaterials[i % starMaterials.length]);
      star.position.set(
        Math.sin(angle) * radius,
        2.1 + random() * 8.5,
        Math.cos(angle) * radius,
      );
      star.rotation.set(random() * TAU, random() * TAU, random() * TAU);
      star.castShadow = false;
      star.receiveShadow = false;
      star.userData.phase = random() * TAU;
      star.userData.baseY = star.position.y;
      star.userData.speed = 0.04 + random() * 0.09;
      star.userData.drift = 0.045 + random() * 0.12;
      this.floatingStars.push(star);
      this.scene.add(star);
    }
  }

  /* ----------------------------------------------------------------- update */
  setRiding(riding) {
    this.riding = riding;
    this.targetSpinSpeed = riding ? 0.52 : 0.065;
  }

  setNight(on, instant = false) {
    this.nightTarget = on ? 1 : 0;
    if (instant) this.nightAmount = this.nightTarget;
    this.applyTheme(instant);
  }

  applyTheme(instant = false, dt = 0.016) {
    if (instant) {
      this.nightAmount = this.nightTarget;
    } else {
      this.nightAmount = damp(this.nightAmount, this.nightTarget, 2.1, dt);
    }
    const n = clamp(this.nightAmount, 0, 1);
    this.scene.fog.color.copy(this.themeFogDay).lerp(this.themeFogNight, n);
    this.scene.fog.near = 22 - n * 4;
    this.scene.fog.far = 42 - n * 8;

    this.keyLight.intensity = THREE.MathUtils.lerp(2.55, 0.55, n);
    this.fillLight.intensity = THREE.MathUtils.lerp(0.58, 0.26, n);
    this.rimLight.intensity = THREE.MathUtils.lerp(1.65, 2.4, n);
    this.hemi.intensity = THREE.MathUtils.lerp(0.5, 0.16, n);
    this.ambient.intensity = THREE.MathUtils.lerp(0.13, 0.055, n);
    this.displaySpot.intensity = THREE.MathUtils.lerp(75, 205, n);
    this.underLight.intensity = THREE.MathUtils.lerp(22, 38, n);
    this.underLightWarm.intensity = THREE.MathUtils.lerp(12, 24, n);
    this.scene.environmentIntensity = THREE.MathUtils.lerp(0.66, 0.5, n);
    this.renderer.toneMappingExposure = THREE.MathUtils.lerp(1.02, 0.98, n);

    if (this.floor) {
      this.floor.material.color.copy(this.themeFloorDay).lerp(this.themeFloorNight, n);
    }
    if (this.contactShadow) this.contactShadow.material.opacity = THREE.MathUtils.lerp(0.5, 0.58, n);
    if (this.contactShadow) this.contactShadow.material.color.setHex(n > 0.5 ? 0x1b0b0c : 0xffffff);
    if (this.mats.ceiling) this.mats.ceiling.emissiveIntensity = THREE.MathUtils.lerp(0.06, 0.2, n);
    this.bulbMaterial.emissiveIntensity = THREE.MathUtils.lerp(2.2, 4.0, n);
    this.bulbGlowMaterial.opacity = THREE.MathUtils.lerp(0.62, 0.94, n);
    this.bulbGlowMaterial.size = THREE.MathUtils.lerp(0.95, 1.2, n);
  }

  update(dt, time) {
    this.clockTime = time;
    this.spinSpeed = damp(this.spinSpeed, this.targetSpinSpeed, 1.35, dt);
    this.spin += dt * this.spinSpeed;
    this.spinning.rotation.y = this.spin;

    for (const horse of this.horses) {
      const bob = Math.sin(time * 2.05 + horse.phase);
      horse.root.position.y = horse.baseY + bob * horse.bob;
      horse.root.rotation.z = Math.sin(time * 1.12 + horse.phase) * 0.011;
      horse.root.rotation.x = Math.cos(time * 1.55 + horse.phase) * 0.006;
    }

    for (let i = 0; i < this.hoverRings.length; i += 1) {
      const ring = this.hoverRings[i];
      const target = this.hovered === i ? 0.72 : 0;
      this.hoverAmounts[i] = damp(this.hoverAmounts[i], target, 11, dt);
      ring.material.opacity = this.hoverAmounts[i];
      const scale = 1 + Math.sin(time * 3.1 + i) * 0.025;
      ring.scale.setScalar(scale);
    }

    this.pulse = 0.5 + 0.5 * Math.sin(time * 2.3);
    const night = this.nightAmount;
    this.bulbMaterial.emissiveIntensity = THREE.MathUtils.lerp(2.2, 4.0, night) + this.pulse * 0.2;
    this.bulbGlowMaterial.opacity = THREE.MathUtils.lerp(0.62, 0.94, night) + this.pulse * 0.04;
    this.bulbGlowMaterial.size = THREE.MathUtils.lerp(0.95, 1.2, night) + this.pulse * 0.04;

    for (const star of this.floatingStars) {
      star.rotation.y += dt * star.userData.speed;
      star.rotation.z += dt * star.userData.speed * 0.38;
      star.position.y = star.userData.baseY + Math.sin(time * 0.25 + star.userData.phase) * star.userData.drift;
    }

    if (this.dust) {
      const positions = this.dust.geometry.getAttribute('position');
      for (let i = 0; i < this.dustBase.length; i += 1) {
        const base = this.dustBase[i];
        const angle = time * base.speed * 0.17 + base.phase;
        positions.setXYZ(
          i,
          base.x + Math.sin(angle) * 0.34,
          base.y + Math.sin(time * base.speed + base.phase) * base.drift,
          base.z + Math.cos(angle * 0.83) * 0.3,
        );
      }
      positions.needsUpdate = true;
    }

    this.applyTheme(false, dt);
  }

  /* ------------------------------------------------------------- interaction */
  raycastHorse(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    this.rayNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.rayNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.rayNdc, this.camera);
    const hits = this.raycaster.intersectObjects(this.spinning.children, true);
    for (const hit of hits) {
      const object = hit.object;
      if (!object.isMesh || object.userData.noPick) continue;
      if (object.userData.horseIndex !== undefined) return object.userData.horseIndex;
      if (object.userData.structure) return -1;
    }
    return -1;
  }

  setHovered(index) {
    if (this.hovered === index) return;
    this.hovered = index;
  }

  getHorseName(index) {
    return HORSES[index]?.name ?? '旋转木马';
  }

  getHorseLatin(index) {
    return HORSES[index]?.latin ?? 'CARROUSEL';
  }

  defaultRadius() {
    const aspect = this.camera.aspect;
    if (aspect < 0.7) return 28.8;
    if (aspect < 1.05) return 27.0;
    return 25.0;
  }

  getRidePose(index, yaw = 0, pitch = 0) {
    const horse = this.horses[index] ?? this.horses[0];
    const root = horse.root;
    root.updateWorldMatrix(true, false);
    const portrait = this.camera.aspect < 0.8;
    const camLocal = this.rideOffsets.camera.clone();
    const lookLocal = this.rideOffsets.look.clone();
    camLocal.y += Math.sin(this.clockTime * 0.78) * 0.045;
    camLocal.x += Math.sin(this.clockTime * 0.44) * 0.1;
    camLocal.z += Math.cos(this.clockTime * 0.37) * 0.08;
    if (portrait) {
      camLocal.x *= 1.6;
      camLocal.z *= 1.6;
    }
    lookLocal.y += pitch * 3.7;
    lookLocal.z += yaw * 4.8;
    const position = root.localToWorld(camLocal);
    const lookAt = root.localToWorld(lookLocal);
    this.tmpCam.position.copy(position);
    this.tmpCam.up.set(0, 1, 0);
    this.tmpCam.lookAt(lookAt);
    return {
      position,
      quaternion: this.tmpCam.quaternion.clone(),
      fov: portrait ? 40 : this.rideOffsets.fov,
    };
  }

  resize(width, height) {
    const safeWidth = Math.max(1, width);
    const safeHeight = Math.max(1, height);
    const aspect = safeWidth / safeHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, aspect < 0.8 ? 2 : 1.8));
    this.renderer.setSize(safeWidth, safeHeight, false);
    this.camera.aspect = aspect;
    this.camera.fov = aspect < 0.7 ? 50 : aspect < 1.05 ? 40 : 34;
    const shift = safeWidth >= 900 && aspect > 1.1 ? -safeWidth * 0.12 : 0;
    this.camera.setViewOffset(safeWidth, safeHeight, shift, 0, safeWidth, safeHeight);
    this.camera.updateProjectionMatrix();
    this.viewport = { width: safeWidth, height: safeHeight, aspect };
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
