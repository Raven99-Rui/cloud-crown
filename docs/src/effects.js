import * as THREE from 'three';

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const TMP_COLOR = new THREE.Color();
const TMP_COLOR_2 = new THREE.Color();

function radialTexture(size = 128, inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.24, 'rgba(255,248,219,.9)');
  g.addColorStop(0.55, 'rgba(255,219,148,.28)');
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function starTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.translate(48, 48);
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 45);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.16, 'rgba(255,243,196,.95)');
  g.addColorStop(0.45, 'rgba(255,207,120,.22)');
  g.addColorStop(1, 'rgba(255,190,80,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, 45, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,250,230,.95)';
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 ? 4 : 26;
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fill();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Environment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.skyUniforms = {
      topColor: { value: new THREE.Color(0x020713) },
      bottomColor: { value: new THREE.Color(0x22365c) },
      glowColor: { value: new THREE.Color(0x4e6a9e) },
      sunDir: { value: new THREE.Vector3(-0.32, 0.22, -0.92).normalize() },
    };
    const skyGeo = new THREE.SphereGeometry(800, 40, 24);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform vec3 glowColor;
        uniform vec3 sunDir;
        varying vec3 vWorld;
        void main() {
          vec3 dir = normalize(vWorld);
          float h = clamp(dir.y * 1.18 + 0.08, 0.0, 1.0);
          vec3 col = mix(bottomColor, topColor, pow(h, 0.72));
          float glow = pow(max(dot(dir, normalize(sunDir)), 0.0), 14.0);
          float horizon = pow(max(0.0, 1.0 - abs(dir.y) * 5.6), 3.0);
          col += glowColor * glow * 0.3;
          col += glowColor * horizon * 0.028;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(skyGeo, skyMat);
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    const glowTex = radialTexture(256);
    this.glowTex = glowTex;
    this.celestialMat = new THREE.MeshBasicMaterial({ color: 0xfff0c8, fog: false, toneMapped: false });
    this.celestial = new THREE.Mesh(new THREE.SphereGeometry(10, 24, 16), this.celestialMat);
    this.celestial.position.copy(this.skyUniforms.sunDir.value).multiplyScalar(620);
    this.celestial.position.y = Math.max(145, this.celestial.position.y);
    scene.add(this.celestial);
    this.haloMat = new THREE.SpriteMaterial({
      map: glowTex, color: 0xffe0a0, transparent: true, opacity: 0.58,
      blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false,
    });
    this.halo = new THREE.Sprite(this.haloMat);
    this.halo.scale.setScalar(130);
    this.halo.position.copy(this.celestial.position);
    scene.add(this.halo);

    this.stars = this.createStars();
    scene.add(this.stars);
    this.clouds = this.createClouds();
    scene.add(this.clouds.group);
    this.mountains = this.createMountains();
    scene.add(this.mountains.group);

    this.current = {
      top: new THREE.Color(0x020612),
      bottom: new THREE.Color(0x132444),
      fog: new THREE.Color(0x0a1428),
      fogDensity: 0.0035,
      starOpacity: 1,
      scrub: 0,
    };
    this.target = { ...this.current, top: this.current.top.clone(), bottom: this.current.bottom.clone(), fog: this.current.fog.clone() };
    this.time = 0;
  }

  createStars() {
    const count = 1600;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const y = 0.06 + Math.random() * 0.94;
      const r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(theta) * r * 700;
      pos[i * 3 + 1] = y * 700 - 40;
      pos[i * 3 + 2] = Math.sin(theta) * r * 700;
      const warm = Math.random();
      const c = new THREE.Color().setHSL(warm > 0.78 ? 0.09 : 0.58, 0.28 * Math.random(), 0.7 + Math.random() * 0.3);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const starMap = radialTexture(64, 'rgba(255,255,255,1)', 'rgba(255,255,255,0)');
    const mat = new THREE.PointsMaterial({
      size: 1.45, map: starMap, alphaTest: 0.015, vertexColors: true, transparent: true, opacity: 1, depthWrite: false,
      blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false, toneMapped: false,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    return points;
  }

  createClouds() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 192;
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < 20; i++) {
      const x = 70 + Math.random() * 372;
      const y = 60 + Math.random() * 70;
      const rx = 50 + Math.random() * 95;
      const ry = 16 + Math.random() * 38;
      const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
      g.addColorStop(0, 'rgba(255,244,228,.26)');
      g.addColorStop(0.5, 'rgba(255,224,207,.12)');
      g.addColorStop(1, 'rgba(255,210,190,0)');
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, ry / Math.max(rx, ry));
      ctx.translate(-x, -y);
      ctx.fillStyle = g;
      ctx.fillRect(x - rx, y - rx, rx * 2, rx * 2);
      ctx.restore();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const group = new THREE.Group();
    const materials = [];
    const configs = [
      [-300, 118, -420, 250, 0.5], [220, 150, -460, 300, 0.4], [-440, 110, -120, 210, 0.36],
      [410, 136, -180, 280, 0.38], [80, 165, -560, 330, 0.28], [-140, 145, 430, 260, 0.22],
    ];
    configs.forEach(([x, y, z, s, op]) => {
      const mat = new THREE.SpriteMaterial({
        map: tex, transparent: true, opacity: op * 0.42, depthWrite: false, fog: false,
        color: 0xc8d4e8, toneMapped: false,
      });
      materials.push({ mat, base: op * 0.42 });
      const sprite = new THREE.Sprite(mat);
      sprite.position.set(x, y, z);
      sprite.scale.set(s, s * 0.36, 1);
      group.add(sprite);
    });
    return { group, materials };
  }

  createMountains() {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x15243a, roughness: 1, metalness: 0, fog: true });
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2 + Math.random() * 0.2;
      const r = 390 + Math.random() * 150;
      const h = 14 + Math.random() * 30;
      const geo = new THREE.ConeGeometry(48 + Math.random() * 60, h, 5 + Math.floor(Math.random() * 4), 1);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(Math.cos(a) * r, h / 2 - 3, Math.sin(a) * r);
      mesh.rotation.y = Math.random() * Math.PI;
      group.add(mesh);
    }
    return { group, material };
  }

  setPalette(palette, instant = false) {
    this.target.top = new THREE.Color(palette.top);
    this.target.bottom = new THREE.Color(palette.bottom);
    this.target.fog = new THREE.Color(palette.fog);
    this.target.fogDensity = palette.fogDensity;
    this.target.starOpacity = palette.starOpacity;
    this.target.lamp = palette.lamp;
    this.target.bloom = palette.bloom;
    this.target.exposure = palette.exposure;
    this.target.sunVisible = palette.sunVisible;
    this.target.skyGlow = new THREE.Color(palette.skyGlow ?? 0xffcf91);
    this.target.celestialColor = new THREE.Color(palette.celestial ?? 0xfff2d4);
    if (instant) {
      this.current.top.copy(this.target.top);
      this.current.bottom.copy(this.target.bottom);
      this.current.fog.copy(this.target.fog);
      this.current.fogDensity = this.target.fogDensity;
      this.current.starOpacity = this.target.starOpacity;
      this.current.lamp = this.target.lamp;
      this.current.bloom = this.target.bloom;
      this.current.exposure = this.target.exposure;
      this.skyUniforms.topColor.value.copy(this.target.top);
      this.skyUniforms.bottomColor.value.copy(this.target.bottom);
      this.skyUniforms.glowColor.value.copy(this.target.skyGlow);
      this.scene.fog.color.copy(this.target.fog);
      this.scene.fog.density = this.target.fogDensity;
      this.stars.material.opacity = this.target.starOpacity;
      this.renderer.toneMappingExposure = this.target.exposure;
    }
  }

  update(dt, elapsed) {
    this.time += dt;
    const k = 1 - Math.exp(-dt * 1.6);
    this.current.top.lerp(this.target.top, k);
    this.current.bottom.lerp(this.target.bottom, k);
    this.current.fog.lerp(this.target.fog, k);
    this.current.fogDensity = THREE.MathUtils.lerp(this.current.fogDensity, this.target.fogDensity, k);
    this.current.starOpacity = THREE.MathUtils.lerp(this.current.starOpacity, this.target.starOpacity, k);
    this.skyUniforms.topColor.value.copy(this.current.top);
    this.skyUniforms.bottomColor.value.copy(this.current.bottom);
    this.scene.fog.color.copy(this.current.fog);
    this.scene.fog.density = this.current.fogDensity;
    this.stars.material.opacity = this.current.starOpacity;
    this.stars.rotation.y = elapsed * 0.003;
    this.stars.rotation.x = Math.sin(elapsed * 0.01) * 0.015;
    this.renderer.toneMappingExposure = THREE.MathUtils.lerp(this.renderer.toneMappingExposure, this.target.exposure, k);

    const cloudColor = TMP_COLOR.copy(this.current.bottom).lerp(new THREE.Color(0xc9d5ea), 0.5);
    this.clouds.materials.forEach(({ mat, base }) => {
      mat.color.lerp(cloudColor, k * 0.35);
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, base * (0.55 + this.current.starOpacity * 0.45), k);
    });
    this.mountains.material.color.copy(this.current.fog).multiplyScalar(0.55).lerp(new THREE.Color(0x18263e), 0.5);

    const sunColor = this.target.celestialColor || new THREE.Color(0xfff0c8);
    this.celestialMat.color.lerp(sunColor, k);
    this.haloMat.color.lerp(this.target.skyGlow || sunColor, k);
    this.celestialMat.opacity = this.target.sunVisible ? 1 : 0.86;
    this.celestialMat.transparent = true;
    this.haloMat.opacity = this.target.sunVisible ? 0.4 : 0.22;
    this.halo.scale.setScalar(this.target.sunVisible ? 118 : 85);
    this.skyUniforms.glowColor.value.lerp(this.target.skyGlow || sunColor, k);
  }
}

export class Fireworks {
  constructor(scene, max = 2600) {
    this.max = max;
    this.cursor = 0;
    this.scene = scene;
    this.positions = new Float32Array(max * 3);
    this.colors = new Float32Array(max * 3);
    this.velocities = new Float32Array(max * 3);
    this.baseColors = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.active = 0;
    for (let i = 0; i < max; i++) this.positions[i * 3 + 1] = -999;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage));
    const mat = new THREE.PointsMaterial({
      size: 0.55, map: starTexture(), vertexColors: true, transparent: true, opacity: 1,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, toneMapped: false,
      alphaTest: 0.02,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
    this.geo = geo;
    this.onBurst = null;
    this.enabled = true;
    this.autoTimer = 0;
    this.autoInterval = 28;
    this.finale = 0;
    this.finaleTimer = 0;
    this.palettes = [
      ['#ffd27a', '#ff9d76', '#fff5d4'],
      ['#7de3d2', '#9bdcff', '#fff6d6'],
      ['#ff8fab', '#ffc4d6', '#fff1b8'],
      ['#b9a2ff', '#7ed6ff', '#fff6dd'],
    ];
  }

  burst(origin, paletteIndex = -1, power = 1, sound = true) {
    if (!this.enabled) return;
    const palette = this.palettes[paletteIndex >= 0 ? paletteIndex % this.palettes.length : Math.floor(Math.random() * this.palettes.length)];
    const count = Math.floor(150 * power);
    for (let i = 0; i < count; i++) {
      const idx = this.cursor % this.max;
      this.cursor++;
      const theta = Math.random() * Math.PI * 2;
      const z = Math.random() * 2 - 1;
      const r = Math.sqrt(1 - z * z);
      const speed = (4.2 + Math.random() * 10.5) * power;
      const j = idx * 3;
      this.positions[j] = origin.x;
      this.positions[j + 1] = origin.y;
      this.positions[j + 2] = origin.z;
      this.velocities[j] = Math.cos(theta) * r * speed;
      this.velocities[j + 1] = z * speed + 1.8;
      this.velocities[j + 2] = Math.sin(theta) * r * speed;
      const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      const l = 0.8 + Math.random() * 0.5;
      this.baseColors[j] = c.r * l;
      this.baseColors[j + 1] = c.g * l;
      this.baseColors[j + 2] = c.b * l;
      this.colors[j] = c.r;
      this.colors[j + 1] = c.g;
      this.colors[j + 2] = c.b;
      const life = 1.3 + Math.random() * 1.4;
      this.life[idx] = life;
      this.maxLife[idx] = life;
    }
    this.active = Math.min(this.max, this.active + count);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    if (sound && this.onBurst) this.onBurst();
  }

  castleShow(big = false) {
    const now = performance.now();
    if (now - (this._lastShow || 0) < 900) return;
    this._lastShow = now;
    const spots = big ? 9 : 4;
    for (let i = 0; i < spots; i++) {
      setTimeout(() => {
        const a = Math.random() * Math.PI * 2;
        const r = 10 + Math.random() * 28;
        this.burst(new THREE.Vector3(Math.cos(a) * r, 48 + Math.random() * 28, Math.sin(a) * r - 8), -1, big ? 1.25 : 1);
      }, i * (big ? 260 : 420));
    }
  }

  finaleShow() {
    this.finale = 9;
    this.finaleTimer = 0;
    this.castleShow(true);
  }

  update(dt, elapsed) {
    if (this.enabled) {
      this.autoTimer += dt;
      if (this.autoTimer > this.autoInterval) {
        this.autoTimer = 0;
        this.castleShow(false);
      }
      if (this.finale > 0) {
        this.finaleTimer -= dt;
        if (this.finaleTimer <= 0) {
          this.finale--;
          this.finaleTimer = 0.55 + Math.random() * 0.5;
          this.castleShow(true);
        }
      }
    }

    const pos = this.positions;
    const col = this.colors;
    const base = this.baseColors;
    const vel = this.velocities;
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      const j = i * 3;
      if (this.life[i] <= 0) {
        pos[j + 1] = -999;
        col[j] = col[j + 1] = col[j + 2] = 0;
        continue;
      }
      const drag = Math.pow(0.987, dt * 60);
      vel[j] *= drag;
      vel[j + 1] = vel[j + 1] * drag - 3.2 * dt;
      vel[j + 2] *= drag;
      pos[j] += vel[j] * dt;
      pos[j + 1] += vel[j + 1] * dt;
      pos[j + 2] += vel[j + 2] * dt;
      const k = Math.min(1, this.life[i] / this.maxLife[i]);
      const fade = Math.pow(k, 0.55) * (0.7 + 0.3 * Math.sin(elapsed * 30 + i));
      col[j] = base[j] * fade;
      col[j + 1] = base[j + 1] * fade;
      col[j + 2] = base[j + 2] * fade;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
}

export function makeSparkles({ count = 240, center = [0, 10, 0], spread = [20, 20, 20], size = 0.55, color = 0xffd47a } = {}) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const c = new THREE.Color(color);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = center[0] + (Math.random() - 0.5) * spread[0];
    pos[i * 3 + 1] = center[1] + (Math.random() - 0.5) * spread[1];
    pos[i * 3 + 2] = center[2] + (Math.random() - 0.5) * spread[2];
    const tint = c.clone().lerp(new THREE.Color(0xfff5d8), Math.random() * 0.7);
    col[i * 3] = tint.r;
    col[i * 3 + 1] = tint.g;
    col[i * 3 + 2] = tint.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    map: starTexture(), size, vertexColors: true, transparent: true, opacity: 0.88,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, toneMapped: false,
  });
  const points = new THREE.Points(geo, mat);
  points.userData.baseOpacity = 0.88;
  return points;
}

export function makeGlowSprite(color = 0xffd47a, size = 1, opacity = 0.5) {
  const mat = new THREE.SpriteMaterial({
    map: radialTexture(128), color, transparent: true, opacity,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.setScalar(size);
  return sprite;
}

export { starTexture, radialTexture };
