import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { createCloudWorld, RIDE } from './world.js';
import { CloudAudio } from './audio.js';

/* ================================================================
   云上星穹 · interaction, camera & UI
   ================================================================ */

const $ = (id) => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const damp = THREE.MathUtils.damp;
const params = new URLSearchParams(location.search);

if (params.has('still') || params.has('instant') || params.has('freeze')) {
  document.documentElement.classList.add('no-motion');
}
if (params.has('instant') || params.has('still')) {
  document.documentElement.classList.add('instant');
}
if (params.has('nohud')) {
  document.documentElement.classList.add('nohud');
}

const isCoarse = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1000;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const initialMood = ['dusk', 'night', 'day'].includes(params.get('mood')) ? params.get('mood') : 'dusk';
const initialCloud = clamp((parseInt(params.get('balloon') || '3', 10) || 3) - 1, 0, 7);

const els = {
  canvas: $('world'),
  rideFade: $('rideFade'),
  moodFlash: $('moodFlash'),
  loading: $('loading'),
  loadBar: $('loadBar'),
  loadText: $('loadText'),
  topbar: $('topbar'),
  intro: $('intro'),
  enterBtn: $('enterBtn'),
  lookBtn: $('lookBtn'),
  introHigh: $('introHigh'),
  explore: $('explore'),
  manifestRows: $('manifestRows'),
  prevCloud: $('prevCloud'),
  nextCloud: $('nextCloud'),
  cloudNo: $('cloudNo'),
  cloudName: $('cloudName'),
  cloudAlt: $('cloudAlt'),
  cloudNote: $('cloudNote'),
  cloudDots: $('cloudDots'),
  cloudTag: $('cloudTag'),
  tagNo: $('tagNo'),
  tagName: $('tagName'),
  boardBtn: $('boardBtn'),
  rideHud: $('rideHud'),
  rideCloudLabel: $('rideCloudLabel'),
  exitRide: $('exitRide'),
  viewBtn: $('viewBtn'),
  viewLabel: $('viewLabel'),
  altValue: $('altValue'),
  gaugeFill: $('gaugeFill'),
  gaugeMarker: $('gaugeMarker'),
  rideMotion: $('rideMotion'),
  rideSpeed: $('rideSpeed'),
  rideCloudHeight: $('rideCloudHeight'),
  ascendBtn: $('ascendBtn'),
  descendBtn: $('descendBtn'),
  autoBtn: $('autoBtn'),
  autoModeLabel: $('autoModeLabel'),
  controlHintText: $('controlHintText'),
  rideClock: $('rideClock'),
  soundBtn: $('soundBtn'),
  moodBtn: $('moodBtn'),
  resetBtn: $('resetBtn'),
  helpBtn: $('helpBtn'),
  fullBtn: $('fullBtn'),
  help: $('help'),
  closeHelp: $('closeHelp'),
  helpGo: $('helpGo'),
  toast: $('toast'),
  fallback: $('fallback'),
};

let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    canvas: els.canvas,
    antialias: !isCoarse,
    alpha: false,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true,
  });
} catch (err) {
  console.error(err);
  els.loading.classList.add('is-done');
  els.fallback.classList.remove('is-hidden');
  throw err;
}

const pixelBudget = isCoarse ? 1_750_000 : 3_400_000;
const PR = Math.max(1, Math.min(window.devicePixelRatio || 1, isCoarse ? 1.35 : 1.7, Math.sqrt(pixelBudget / (window.innerWidth * window.innerHeight))));
renderer.setPixelRatio(PR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(isCoarse ? 58 : 50, window.innerWidth / window.innerHeight, 0.08, 1200);
camera.rotation.order = 'YXZ';

const composer = new EffectComposer(renderer);
composer.setPixelRatio(PR);
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.35, 0.52, 0.87);
composer.addPass(bloom);
composer.addPass(new OutputPass());

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSaturation: { value: 1.16 },
    uContrast: { value: 1.075 },
    uWarmth: { value: 0.01 },
    uVignette: { value: 0.25 },
    uTealShadow: { value: 0.024 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uWarmth;
    uniform float uVignette;
    uniform float uTealShadow;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      float lum = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 col = mix(vec3(lum), tex.rgb, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;
      col += vec3(uWarmth, uWarmth * 0.3, -uWarmth * 0.6);
      col -= vec3(uTealShadow, uTealShadow * 0.1, -uTealShadow) * (1.0 - smoothstep(0.0, 0.44, lum));
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.38, 0.82, d);
      col *= mix(1.0, 1.0 - uVignette, vig);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), tex.a);
    }
  `,
};
composer.addPass(new ShaderPass(GradeShader));

/* ---------------------------------------------------------------- */
/* 3D world + sound                                                  */
/* ---------------------------------------------------------------- */

const world = createCloudWorld({ scene, renderer, bloom, isMobile: isCoarse });
const audio = new CloudAudio();

const state = {
  mode: 'intro',
  introOpen: true,
  helpOpen: false,
  mood: initialMood,
  soundOn: !audio.muted,
  ready: false,
  transitioning: false,
  selected: initialCloud,
  time: 0,
  idleTime: 0,
  hudClock: 0,
  manifestClock: 0,
  up: false,
  down: false,
  topChime: false,
  rideYaw: 0,
  ridePitch: 0.045,
  rideTargetYaw: 0,
  rideTargetPitch: 0.045,
  rideRoll: 0,
  rideCameraMode: 'chase',
  chaseSnap: true,
  chasePos: new THREE.Vector3(),
  chaseLook: new THREE.Vector3(),
  fov: camera.fov,
  pointer: {
    down: false,
    id: null,
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    moved: 0,
    mode: null,
  },
  orbit: {
    azimuth: 0.34,
    polar: 1.47,
    radius: isCoarse ? 112 : 102,
    targetAzimuth: 0.34,
    targetPolar: 1.47,
    targetRadius: isCoarse ? 112 : 102,
    focus: new THREE.Vector3(isCoarse ? 0 : -8.5, 33.5, 0),
    targetFocus: new THREE.Vector3(isCoarse ? 0 : -8.5, 33.5, 0),
    intro: true,
  },
  touch: new Map(),
  pinchDistance: 0,
};

const tmpPos = new THREE.Vector3();
const chaseTarget = new THREE.Vector3();
const chaseDesired = new THREE.Vector3();
const tagAnchor = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
const pointerNdc = new THREE.Vector2();

world.setSelected(state.selected);
world.setMood(state.mood);
document.body.classList.add(`mood-${state.mood}`);

/* ---------------------------------------------------------------- */
/* UI helpers                                                        */
/* ---------------------------------------------------------------- */

let toastTimer = 0;
function toast(message, length = 2400) {
  if (params.has('freeze') || params.has('nohud')) return;
  els.toast.textContent = message;
  els.toast.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove('is-on'), length);
}

function setSoundUI() {
  els.soundBtn.classList.toggle('is-muted', !state.soundOn);
  els.soundBtn.setAttribute('aria-label', state.soundOn ? '关闭声音' : '打开声音');
  els.soundBtn.dataset.tip = state.soundOn ? '声音已开' : '声音已关';
}

function setMoodUI() {
  document.body.classList.remove('mood-dusk', 'mood-night', 'mood-day');
  document.body.classList.add(`mood-${state.mood}`);
  const labels = {
    dusk: { label: '暮色', time: '18:56', theme: '#1a2031', tip: '切换夜幕' },
    night: { label: '夜幕', time: '21:42', theme: '#070b14', tip: '切换晴日' },
    day: { label: '晴日', time: '14:20', theme: '#b8cbd9', tip: '切换暮色' },
  };
  const p = labels[state.mood];
  els.moodBtn.dataset.tip = p.tip;
  els.moodBtn.setAttribute('aria-label', p.tip);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', p.theme);
  els.rideClock.textContent = `${p.label} ${p.time}`;
}

function applyMood(mood, announce = true) {
  state.mood = mood;
  world.setMood(mood);
  setMoodUI();
  if (announce) {
    els.moodFlash.classList.remove('is-on');
    void els.moodFlash.offsetWidth;
    els.moodFlash.classList.add('is-on');
    const copy = {
      dusk: '暮色漫上来，云海变成一层薄薄的金',
      night: '夜幕降临，星冠的灯一盏一盏亮起',
      day: '云开日出，整座星冠落在阳光里',
    };
    toast(copy[mood], 2600);
  }
}

function nextMood() {
  const order = ['dusk', 'night', 'day'];
  const i = order.indexOf(state.mood);
  applyMood(order[(i + 1) % 3]);
  audio.chime('tick');
}

async function ensureAudio() {
  try {
    await audio.init();
    state.soundOn = !audio.muted;
    setSoundUI();
  } catch (err) {
    console.warn('Audio unavailable', err);
  }
}

/* ---------------------------------------------------------------- */
/* manifest + cloud selection                                        */
/* ---------------------------------------------------------------- */

function buildManifest() {
  els.manifestRows.innerHTML = '';
  const data = world.getBalloonData();
  data.forEach((d, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'manifest-row';
    b.dataset.index = String(i);
    b.innerHTML = `<span class="manifest-no">${String(i + 1).padStart(2, '0')}</span><span class="manifest-track"><i></i></span><span class="manifest-alt">—</span>`;
    b.setAttribute('aria-label', `选择第 ${i + 1} 号云舟：${d.name}`);
    b.addEventListener('click', () => {
      if (state.mode === 'ride' || state.transitioning) return;
      selectCloud(i, true);
    });
    b.addEventListener('pointerenter', () => {
      if (state.mode !== 'ride') world.setHover(i);
    });
    b.addEventListener('pointerleave', () => {
      if (state.mode !== 'ride') world.setHover(-1);
    });
    els.manifestRows.appendChild(b);
  });
}

function buildCloudDots() {
  els.cloudDots.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cloud-dot';
    b.textContent = String(i + 1).padStart(2, '0');
    b.setAttribute('aria-label', `选择第 ${i + 1} 朵云舟`);
    b.addEventListener('click', () => {
      if (state.mode === 'ride' || state.transitioning) return;
      selectCloud(i, true);
    });
    els.cloudDots.appendChild(b);
  }
}

function updateSelectionUI() {
  const data = world.getBalloonData()[state.selected];
  const no = String(state.selected + 1).padStart(2, '0');
  els.cloudNo.textContent = no;
  els.cloudName.textContent = data.name;
  els.cloudNote.textContent = data.note;
  els.cloudAlt.textContent = `${world.getBalloonAltitudes()[state.selected].toFixed(1)} m`;
  if (els.tagNo) els.tagNo.textContent = no;
  if (els.tagName) els.tagName.textContent = data.short;
  els.boardBtn.querySelector('.board-copy small').textContent = `BOARD CLOUD ${no}`;
  els.boardBtn.querySelector('.board-copy strong').textContent = '登上这朵云舟';
  [...els.cloudDots.children].forEach((dot, i) => {
    dot.classList.toggle('is-active', i === state.selected);
    dot.setAttribute('aria-pressed', i === state.selected ? 'true' : 'false');
  });
  [...els.manifestRows.children].forEach((row, i) => row.classList.toggle('is-active', i === state.selected));
}

function selectCloud(index, announce = false) {
  state.selected = world.setSelected(index);
  updateSelectionUI();
  if (announce) {
    const data = world.getBalloonData()[state.selected];
    toast(`已选 ${String(state.selected + 1).padStart(2, '0')} 号云舟 · ${data.short}`);
  }
  audio.chime('select');
}

/* ---------------------------------------------------------------- */
/* intro / mode transitions                                          */
/* ---------------------------------------------------------------- */

function dismissIntro(showExplore = true) {
  if (!state.introOpen) {
    if (showExplore && state.mode !== 'ride') {
      state.mode = 'explore';
      els.explore.style.display = '';
      els.explore.classList.remove('is-hidden');
    }
    return;
  }
  state.introOpen = false;
  els.intro.classList.add('is-leaving');
  els.topbar.classList.remove('is-hidden');
  state.orbit.intro = false;
  state.orbit.targetFocus.set(0, 33, 0);
  state.orbit.targetRadius = isCoarse ? 102 : 94;
  state.orbit.targetPolar = 1.45;
  window.setTimeout(() => {
    if (state.mode !== 'ride') {
      state.mode = 'explore';
      els.explore.style.display = '';
      els.explore.classList.remove('is-hidden');
    }
  }, reduceMotion ? 30 : 700);
  if (showExplore) state.idleTime = 0;
}

function enterExplore() {
  if (!state.ready) return;
  ensureAudio();
  dismissIntro(true);
  audio.chime('board');
  window.setTimeout(() => {
    if (state.mode === 'explore') toast('点击任意一朵云舟，或使用底部箭头换一只');
  }, 900);
}

function updateViewUI() {
  const chase = state.rideCameraMode === 'chase';
  els.viewLabel.textContent = chase ? '跟随镜头' : '吊篮视角';
  els.viewBtn.setAttribute('aria-label', chase ? '切换到吊篮视角' : '切换到跟随镜头');
}

function setRideCameraMode(mode, announce = true, snap = true) {
  state.rideCameraMode = mode === 'pov' ? 'pov' : 'chase';
  if (state.rideCameraMode === 'chase') {
    state.rideYaw = 0.58;
    state.ridePitch = 0.14;
  } else {
    state.rideYaw = -Math.PI + 0.7;
    state.ridePitch = 0.07;
  }
  state.rideTargetYaw = state.rideYaw;
  state.rideTargetPitch = state.ridePitch;
  state.chaseSnap = snap;
  if (world.riding) world.setRiderDecorVisible(state.rideCameraMode === 'chase');
  updateViewUI();
  if (announce) {
    audio.chime('tick');
    toast(state.rideCameraMode === 'chase' ? '已切回跟随镜头 · 看得见整朵云舟' : '已进入吊篮视角 · 拖动画面环顾云海');
  }
}

async function startRide({ instant = false } = {}) {
  if (!state.ready || state.transitioning) return;
  state.transitioning = true;
  ensureAudio();
  if (state.introOpen) dismissIntro(false);
  state.mode = 'ride';
  document.body.classList.add('riding');
  els.explore.classList.add('is-hidden');
  els.explore.style.display = 'none';
  if (!instant) {
    els.rideFade.classList.add('is-on');
    await new Promise((r) => window.setTimeout(r, 330));
  }
  world.board(state.selected);
  if (params.has('alt')) {
    const alt = clamp(parseFloat(params.get('alt')) || 12, RIDE.minAlt, RIDE.maxAlt);
    world.setPlayerAltitude(alt);
    if (params.has('noauto') || params.has('alt')) world.setAuto(false);
  }
  state.up = false;
  state.down = false;
  state.rideCameraMode = params.get('camera') === 'pov' ? 'pov' : 'chase';
  setRideCameraMode(state.rideCameraMode, false);
  if (params.has('ry')) {
    state.rideYaw = parseFloat(params.get('ry')) || 0;
    state.rideTargetYaw = state.rideYaw;
  }
  if (params.has('rp')) {
    state.ridePitch = clamp(parseFloat(params.get('rp')) || 0, -0.62, 1.18);
    state.rideTargetPitch = state.ridePitch;
  }
  state.rideRoll = 0;
  state.topChime = false;
  const data = world.getBalloonData()[state.selected];
  els.rideCloudLabel.textContent = `${String(state.selected + 1).padStart(2, '0')} 号云舟 · ${data.short}`;
  els.rideHud.classList.remove('is-hidden');
  els.canvas.classList.add('is-riding');
  els.autoBtn.classList.toggle('is-active', world.auto);
  els.autoBtn.setAttribute('aria-pressed', world.auto ? 'true' : 'false');
  els.autoModeLabel.textContent = world.auto ? '自动巡游' : '手动驾驶';
  audio.setRide(true);
  audio.chime('board');
  if (!instant) {
    window.setTimeout(() => {
      els.rideFade.classList.remove('is-on');
      state.transitioning = false;
    }, 280);
  } else {
    state.transitioning = false;
  }
  window.setTimeout(() => {
    if (state.mode === 'ride') toast('按住 ↑ / 空格升空，松手后会像降落伞一样缓降');
  }, 1600);
}

function exitRide(instant = false) {
  if (state.mode !== 'ride' || state.transitioning) return;
  state.transitioning = true;
  state.up = false;
  state.down = false;
  world.setManual(false, false);
  els.ascendBtn.classList.remove('is-held');
  els.descendBtn.classList.remove('is-held');
  if (!instant) els.rideFade.classList.add('is-on');
  window.setTimeout(() => {
    world.leave();
    els.rideHud.classList.add('is-hidden');
    els.canvas.classList.remove('is-riding');
    document.body.classList.remove('riding');
    state.mode = 'explore';
    els.explore.style.display = '';
    els.explore.classList.remove('is-hidden');
    state.orbit.azimuth = world.balloons[state.selected].angle + 0.42;
    state.orbit.targetAzimuth = state.orbit.azimuth;
    state.orbit.targetPolar = isCoarse ? 1.48 : 1.44;
    state.orbit.targetRadius = isCoarse ? 104 : 94;
    state.orbit.focus.set(0, 33, 0);
    state.orbit.targetFocus.set(0, 33, 0);
    audio.setRide(false);
    audio.chime('exit');
    updateSelectionUI();
    if (!instant) {
      window.setTimeout(() => {
        els.rideFade.classList.remove('is-on');
        state.transitioning = false;
      }, 300);
    } else {
      state.transitioning = false;
    }
    toast('回到月台。云舟还悬在那里，随时可以再升空');
  }, instant ? 0 : 330);
}

function toggleHelp(open = !state.helpOpen) {
  state.helpOpen = open;
  els.help.classList.toggle('is-hidden', !open);
  els.help.setAttribute('aria-hidden', open ? 'false' : 'true');
  if (open) {
    state.idleTime = 0;
    audio.chime('tick');
  }
}

/* ---------------------------------------------------------------- */
/* picking & pointer                                                 */
/* ---------------------------------------------------------------- */

function setPointerNdc(clientX, clientY) {
  const rect = els.canvas.getBoundingClientRect();
  pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
}

function pickCloud(clientX, clientY) {
  setPointerNdc(clientX, clientY);
  raycaster.setFromCamera(pointerNdc, camera);
  const hits = raycaster.intersectObjects(world.pickObjects, true);
  for (const hit of hits) {
    let obj = hit.object;
    while (obj) {
      if (obj.userData && Number.isInteger(obj.userData.balloonIndex)) return obj.userData.balloonIndex;
      obj = obj.parent;
    }
  }
  return -1;
}

function onPointerDown(e) {
  if (e.button !== undefined && e.button !== 0) return;
  ensureAudio();
  state.touch.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (state.mode === 'intro') return;
  state.pointer.down = true;
  state.pointer.id = e.pointerId;
  state.pointer.x = e.clientX;
  state.pointer.y = e.clientY;
  state.pointer.startX = e.clientX;
  state.pointer.startY = e.clientY;
  state.pointer.lastX = e.clientX;
  state.pointer.lastY = e.clientY;
  state.pointer.moved = 0;
  state.pointer.mode = state.mode === 'ride' ? 'look' : 'orbit';
  els.canvas.setPointerCapture?.(e.pointerId);
  els.canvas.classList.add('is-dragging');
  state.idleTime = 0;
}

function onPointerMove(e) {
  if (state.touch.has(e.pointerId)) state.touch.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (state.mode === 'ride' && state.pointer.down && state.pointer.mode === 'look') {
    const dx = e.clientX - state.pointer.lastX;
    const dy = e.clientY - state.pointer.lastY;
    state.rideTargetYaw -= dx * 0.0032;
    if (state.rideCameraMode === 'chase') {
      state.rideTargetPitch = clamp(state.rideTargetPitch - dy * 0.0024, -0.1, 0.78);
    } else {
      state.rideTargetPitch = clamp(state.rideTargetPitch - dy * 0.0028, -0.62, 1.18);
    }
    state.pointer.lastX = e.clientX;
    state.pointer.lastY = e.clientY;
    state.pointer.moved += Math.abs(dx) + Math.abs(dy);
    return;
  }

  if (state.mode === 'explore' && state.pointer.down && state.pointer.mode === 'orbit') {
    const dx = e.clientX - state.pointer.x;
    const dy = e.clientY - state.pointer.y;
    state.pointer.moved += Math.abs(dx) + Math.abs(dy);
    state.orbit.targetAzimuth -= dx * 0.0044;
    state.orbit.targetPolar = clamp(state.orbit.targetPolar - dy * 0.0034, 0.66, 1.5);
    state.pointer.x = e.clientX;
    state.pointer.y = e.clientY;
    state.idleTime = 0;
    return;
  }

  if (state.mode === 'explore' && !isCoarse) {
    const hit = pickCloud(e.clientX, e.clientY);
    world.setHover(hit);
    els.canvas.style.cursor = hit >= 0 ? 'pointer' : 'grab';
  }
}

function onPointerUp(e) {
  if (state.touch.size >= 2) {
    state.touch.delete(e.pointerId);
    state.pinchDistance = 0;
  } else {
    state.touch.delete(e.pointerId);
  }
  if (!state.pointer.down) return;
  const wasMode = state.pointer.mode;
  const moved = state.pointer.moved;
  state.pointer.down = false;
  state.pointer.mode = null;
  state.pointer.id = null;
  els.canvas.classList.remove('is-dragging');
  try {
    if (e && e.pointerId !== undefined) els.canvas.releasePointerCapture?.(e.pointerId);
  } catch { /* already released */ }

  if (wasMode === 'orbit' && moved < 7) {
    const hit = pickCloud(e.clientX, e.clientY);
    if (hit >= 0) selectCloud(hit, true);
    else world.setHover(-1);
  }
}

function onPointerCancel(e) {
  state.touch.delete(e.pointerId);
  state.pointer.down = false;
  state.pointer.mode = null;
  state.pinchDistance = 0;
  els.canvas.classList.remove('is-dragging');
}

function onWheel(e) {
  if (state.mode !== 'explore') return;
  e.preventDefault();
  state.orbit.targetRadius = clamp(state.orbit.targetRadius * Math.exp(e.deltaY * 0.0011), 42, 135);
  state.idleTime = 0;
}

els.canvas.addEventListener('pointerdown', onPointerDown);
els.canvas.addEventListener('pointermove', onPointerMove);
els.canvas.addEventListener('pointerup', onPointerUp);
els.canvas.addEventListener('pointercancel', onPointerCancel);
els.canvas.addEventListener('wheel', onWheel, { passive: false });
els.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

/* pinch-to-zoom on touch devices */
els.canvas.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2 && state.mode === 'explore') {
    const [a, b] = e.touches;
    state.pinchDistance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }
}, { passive: true });
els.canvas.addEventListener('touchmove', (e) => {
  if (e.touches.length === 2 && state.mode === 'explore' && state.pinchDistance) {
    const [a, b] = e.touches;
    const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    if (d > 0) {
      state.orbit.targetRadius = clamp(state.orbit.targetRadius * (state.pinchDistance / d), 42, 135);
      state.pinchDistance = d;
    }
    e.preventDefault();
  }
}, { passive: false });
els.canvas.addEventListener('touchend', () => { state.pinchDistance = 0; });

/* ---------------------------------------------------------------- */
/* lift controls                                                     */
/* ---------------------------------------------------------------- */

function setAuto(on) {
  if (!world.riding) return;
  world.setAuto(on);
  state.up = false;
  state.down = false;
  setLiftHeld(false, false);
  els.autoBtn.classList.toggle('is-active', on);
  els.autoBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  els.autoModeLabel.textContent = on ? '自动巡游' : '手动驾驶';
  els.controlHintText.textContent = on
    ? '星冠替你安排了一条航线。想自己飞，就按住升空或缓降。'
    : '松开按键后，球囊会像降落伞一样缓缓回落。';
  toast(on ? '已交还给自动巡游' : '手动驾驶已接管 · 按住 ↑ / 空格升空', 2000);
  audio.chime(on ? 'select' : 'tick');
}

function setLiftHeld(up, down) {
  const wasAuto = world.auto;
  state.up = up;
  state.down = down;
  world.setManual(up, down);
  els.ascendBtn.classList.toggle('is-held', up);
  els.descendBtn.classList.toggle('is-held', down);
  if ((up || down) && wasAuto) {
    world.setAuto(false);
    els.autoBtn.classList.remove('is-active');
    els.autoBtn.setAttribute('aria-pressed', 'false');
    els.autoModeLabel.textContent = '手动驾驶';
  }
  els.controlHintText.textContent = up
    ? '正在升空。松开按键，球囊会在风中缓缓回落。'
    : down
      ? '正在缓降。松开按键，降落伞会在半空轻轻接住你。'
      : '按住升空，松手缓降。想看看风景，就交给自动巡游。';
}

function holdButton(el, setter) {
  let active = false;
  const on = (e) => {
    if (state.mode !== 'ride') return;
    e.preventDefault();
    active = true;
    ensureAudio();
    setter(true);
    el.setPointerCapture?.(e.pointerId);
  };
  const off = (e) => {
    if (!active) return;
    active = false;
    setter(false);
    e.preventDefault();
  };
  el.addEventListener('pointerdown', on);
  el.addEventListener('pointerup', off);
  el.addEventListener('pointercancel', off);
  el.addEventListener('pointerleave', (e) => {
    if (active && e.buttons === 0) off(e);
  });
}

holdButton(els.ascendBtn, (on) => {
  setLiftHeld(on, on ? false : state.down);
  if (on) audio.chime('tick');
});
holdButton(els.descendBtn, (on) => {
  setLiftHeld(on ? false : state.up, on);
  if (on) audio.chime('low');
});

/* ---------------------------------------------------------------- */
/* UI wiring                                                         */
/* ---------------------------------------------------------------- */

buildManifest();
buildCloudDots();
updateSelectionUI();
applyMood(initialMood, false);
setSoundUI();
updateHUD(1);

els.enterBtn.addEventListener('click', () => {
  if (!state.ready) return;
  ensureAudio();
  dismissIntro(false);
  startRide();
});
els.lookBtn.addEventListener('click', enterExplore);
els.prevCloud.addEventListener('click', () => {
  if (state.mode === 'ride' || state.transitioning) return;
  selectCloud((state.selected + 7) % 8);
});
els.nextCloud.addEventListener('click', () => {
  if (state.mode === 'ride' || state.transitioning) return;
  selectCloud((state.selected + 1) % 8);
});
els.boardBtn.addEventListener('click', () => {
  if (state.mode === 'ride' || state.transitioning || !state.ready) return;
  ensureAudio();
  startRide();
});
els.exitRide.addEventListener('click', () => exitRide());
els.viewBtn.addEventListener('click', () => {
  if (state.mode !== 'ride') return;
  setRideCameraMode(state.rideCameraMode === 'chase' ? 'pov' : 'chase', true, false);
});
els.autoBtn.addEventListener('click', () => setAuto(!world.auto));
els.soundBtn.addEventListener('click', async () => {
  const muted = await audio.toggleMute();
  state.soundOn = !muted;
  setSoundUI();
  if (!muted) audio.chime('select');
});
els.moodBtn.addEventListener('click', nextMood);
els.resetBtn.addEventListener('click', () => {
  if (state.mode !== 'explore') return;
  state.orbit.targetRadius = isCoarse ? 104 : 94;
  state.orbit.targetPolar = 1.45;
  state.orbit.targetAzimuth = 0.34;
  toast('回到星冠全景');
  audio.chime('tick');
});
els.helpBtn.addEventListener('click', () => toggleHelp(true));
els.closeHelp.addEventListener('click', () => toggleHelp(false));
els.helpGo.addEventListener('click', () => toggleHelp(false));
els.help.addEventListener('click', (e) => {
  if (e.target === els.help) toggleHelp(false);
});
els.fullBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
});

/* keyboard -------------------------------------------------------- */

window.addEventListener('keydown', (e) => {
  if (e.repeat && !['ArrowUp', 'ArrowDown', 'KeyW', 'KeyS', 'Space'].includes(e.code)) return;
  const key = e.code;

  if (key === 'Escape') {
    e.preventDefault();
    if (state.helpOpen) toggleHelp(false);
    else if (state.mode === 'ride') exitRide();
    return;
  }
  if (state.helpOpen) return;

  if (key === 'KeyM') {
    els.soundBtn.click();
    return;
  }
  if (key === 'KeyF') {
    els.fullBtn.click();
    return;
  }
  if (key === 'KeyH') {
    toggleHelp(true);
    return;
  }

  if (state.mode === 'intro' && (key === 'Enter' || key === 'Space' || key === 'KeyE')) {
    e.preventDefault();
    enterExplore();
    return;
  }

  if (state.mode === 'explore') {
    if (key === 'ArrowLeft') {
      e.preventDefault();
      selectCloud((state.selected + 7) % 8, true);
    } else if (key === 'ArrowRight') {
      e.preventDefault();
      selectCloud((state.selected + 1) % 8, true);
    } else if (key === 'KeyE' || key === 'Enter') {
      e.preventDefault();
      startRide();
    }
    return;
  }

  if (state.mode === 'ride') {
    if (key === 'ArrowUp' || key === 'KeyW' || key === 'Space') {
      e.preventDefault();
      if (!state.up) setLiftHeld(true, false);
    } else if (key === 'ArrowDown' || key === 'KeyS') {
      e.preventDefault();
      if (!state.down) setLiftHeld(false, true);
    } else if (key === 'KeyA') {
      e.preventDefault();
      setAuto(!world.auto);
    } else if (key === 'KeyV') {
      e.preventDefault();
      setRideCameraMode(state.rideCameraMode === 'chase' ? 'pov' : 'chase', true, false);
    }
  }
});

window.addEventListener('keyup', (e) => {
  if (state.mode !== 'ride') return;
  if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space' || e.code === 'ArrowDown' || e.code === 'KeyS') {
    const wasUp = e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space';
    setLiftHeld(wasUp ? false : state.up, wasUp ? state.down : false);
  }
});

window.addEventListener('blur', () => {
  if (state.mode === 'ride') setLiftHeld(false, false);
});

/* resize --------------------------------------------------------- */

function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  bloom.setSize(w, h);
}
window.addEventListener('resize', onResize);

/* ---------------------------------------------------------------- */
/* camera                                                            */
/* ---------------------------------------------------------------- */

function computeOrbitPosition(out, o) {
  const sp = Math.sin(o.polar);
  out.set(
    o.focus.x + o.radius * sp * Math.sin(o.azimuth),
    o.focus.y + o.radius * Math.cos(o.polar),
    o.focus.z + o.radius * sp * Math.cos(o.azimuth),
  );
  return out;
}

function updateCamera(dt) {
  if (state.mode === 'ride') {
    state.rideYaw = damp(state.rideYaw, state.rideTargetYaw, 10, dt);
    state.ridePitch = damp(state.ridePitch, state.rideTargetPitch, 10, dt);

    if (state.rideCameraMode === 'chase') {
      const anchor = world.getChaseAnchor();
      const narrow = window.innerWidth < 760;
      chaseTarget.set(anchor.x, anchor.y + 7.8, anchor.z);
      const az = anchor.angle + state.rideYaw;
      const elev = clamp(state.ridePitch, -0.1, 0.78);
      const dist = narrow ? 34.5 : 24.5;
      chaseDesired.set(
        chaseTarget.x + Math.sin(az) * Math.cos(elev) * dist,
        chaseTarget.y + Math.sin(elev) * dist,
        chaseTarget.z + Math.cos(az) * Math.cos(elev) * dist,
      );
      if (state.chaseSnap) {
        state.chasePos.copy(chaseDesired);
        state.chaseLook.copy(chaseTarget);
        state.chaseSnap = false;
      } else {
        state.chasePos.lerp(chaseDesired, 1 - Math.exp(-dt * 5.2));
        state.chaseLook.lerp(chaseTarget, 1 - Math.exp(-dt * 8));
      }
      camera.position.copy(state.chasePos);
      camera.lookAt(state.chaseLook);
      state.rideRoll = damp(state.rideRoll, 0, 2, dt);
      const targetFov = narrow ? 66 : 56;
      state.fov = damp(state.fov, targetFov, 4, dt);
      camera.fov = state.fov;
      camera.updateProjectionMatrix();
      return;
    }

    const view = world.getRideView();
    camera.position.copy(view.position);
    camera.rotation.set(state.ridePitch, view.outwardYaw + state.rideYaw, state.rideRoll, 'YXZ');
    const targetFov = isCoarse ? 76 : 70;
    state.fov = damp(state.fov, targetFov, 4, dt);
    camera.fov = state.fov;
    camera.updateProjectionMatrix();
    return;
  }

  const o = state.orbit;
  if (state.introOpen) {
    const drift = reduceMotion ? 0 : Math.sin(state.time * 0.035) * 0.055;
    o.targetAzimuth = 0.34 + drift;
    o.targetPolar = 1.47 + (reduceMotion ? 0 : Math.sin(state.time * 0.026) * 0.008);
    if (!isCoarse) {
      o.targetFocus.set(-8.5, 33.5 + (reduceMotion ? 0 : Math.sin(state.time * 0.04) * 0.25), 0);
    } else {
      o.targetFocus.set(0, 33.5, 0);
    }
  } else {
    const selectedAlt = world.getBalloonAltitudes()[state.selected] || 0;
    o.targetFocus.set(0, 33.0 + Math.max(0, selectedAlt - 16) * 0.1, 0);
    if (state.idleTime > 22 && !reduceMotion) {
      o.targetAzimuth += dt * 0.018;
    }
  }

  o.azimuth = damp(o.azimuth, o.targetAzimuth, 3.2, dt);
  o.polar = damp(o.polar, o.targetPolar, 3.2, dt);
  o.radius = damp(o.radius, o.targetRadius, 3.0, dt);
  o.focus.x = damp(o.focus.x, o.targetFocus.x, 2.2, dt);
  o.focus.y = damp(o.focus.y, o.targetFocus.y, 2.2, dt);
  o.focus.z = damp(o.focus.z, o.targetFocus.z, 2.2, dt);

  computeOrbitPosition(tmpPos, o);
  camera.position.copy(tmpPos);
  camera.lookAt(o.focus);
  const targetFov = isCoarse ? 58 : 50;
  state.fov = damp(state.fov, targetFov, 3, dt);
  camera.fov = state.fov;
  camera.updateProjectionMatrix();
}

/* ---------------------------------------------------------------- */
/* HUD update                                                        */
/* ---------------------------------------------------------------- */

function updateSelectionTag() {
  if (!els.cloudTag) return;
  if (state.mode !== 'explore') {
    els.cloudTag.classList.remove('is-on');
    return;
  }
  world.getSelectionAnchor(tagAnchor);
  tagAnchor.project(camera);
  if (tagAnchor.z > 1 || tagAnchor.z < -1) {
    els.cloudTag.classList.remove('is-on');
    return;
  }
  const rect = els.canvas.getBoundingClientRect();
  const x = (tagAnchor.x * 0.5 + 0.5) * rect.width;
  const y = (-tagAnchor.y * 0.5 + 0.5) * rect.height;
  if (x < 50 || x > rect.width - 50 || y < 34 || y > rect.height - 4) {
    els.cloudTag.classList.remove('is-on');
    return;
  }
  els.cloudTag.style.left = `${x}px`;
  els.cloudTag.style.top = `${y}px`;
  els.cloudTag.classList.add('is-on');
}

function updateHUD(dt) {
  state.hudClock += dt;
  state.manifestClock += dt;
  if (state.manifestClock > 0.12) {
    state.manifestClock = 0;
    const alts = world.getBalloonAltitudes();
    const rows = els.manifestRows.children;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const alt = alts[i];
      const bar = row.querySelector('.manifest-track i');
      const label = row.querySelector('.manifest-alt');
      if (bar) bar.style.width = `${clamp((alt / RIDE.maxAlt) * 100, 2, 100)}%`;
      if (label) label.textContent = `${alt.toFixed(1)}m`;
    }
    if (els.introHigh) {
      const high = Math.max(...alts);
      els.introHigh.textContent = `${high.toFixed(1)} m`;
    }
    if (state.mode !== 'ride') {
      const alt = alts[state.selected];
      if (els.cloudAlt) els.cloudAlt.textContent = `${alt.toFixed(1)} m`;
    }
  }

  if (state.mode !== 'ride') return;
  if (state.hudClock < 0.065) return;
  state.hudClock = 0;

  const alt = world.playerAltitude;
  const vel = world.playerVelocity;
  const auto = world.auto;
  els.altValue.textContent = alt.toFixed(1);
  const pct = clamp((alt / 40) * 100, 0, 100);
  els.gaugeFill.style.height = `${pct}%`;
  els.gaugeMarker.style.bottom = `${pct}%`;
  els.rideSpeed.innerHTML = `${Math.abs(vel).toFixed(1)} <i>m/s</i>`;

  let motion;
  if (auto) motion = '自动巡游';
  else if (state.up) motion = '手动升空';
  else if (state.down) motion = '手动缓降';
  else if (vel > 0.35) motion = '上升中';
  else if (vel < -0.35) motion = '缓降中';
  else motion = '悬停';
  els.rideMotion.textContent = motion;
  els.rideCloudHeight.textContent = `云层 ${Math.round(420 + alt * 6)} m`;
  audio.setAltitude(alt, vel);

  if (alt > 36.8 && !state.topChime) {
    state.topChime = true;
    audio.chime('top');
    toast('已抵达星冠最高处 · 38 m');
  } else if (alt < 8) {
    state.topChime = false;
  }

  if (auto) {
    els.autoBtn.classList.add('is-active');
    els.autoBtn.setAttribute('aria-pressed', 'true');
    els.autoModeLabel.textContent = '自动巡游';
  } else {
    els.autoBtn.classList.remove('is-active');
    els.autoBtn.setAttribute('aria-pressed', 'false');
    els.autoModeLabel.textContent = '手动驾驶';
  }
}

/* ---------------------------------------------------------------- */
/* loading / boot                                                    */
/* ---------------------------------------------------------------- */

function finishLoading() {
  state.ready = true;
  els.loadBar.style.width = '100%';
  els.loadText.textContent = '星冠已点亮，缆绳已解开。';
  els.enterBtn.disabled = false;
  window.setTimeout(() => {
    els.loading.classList.add('is-done');
    const wantsRide = params.get('view') === 'ride' || params.has('ride');
    const wantsExplore = params.get('view') === 'explore' || params.has('skipIntro');
    if (wantsRide || wantsExplore) {
      state.introOpen = false;
      els.intro.classList.add('is-leaving');
      els.topbar.classList.remove('is-hidden');
      state.orbit.intro = false;
      state.orbit.focus.set(0, 33.5, 0);
      state.orbit.targetFocus.set(0, 33, 0);
      state.orbit.targetRadius = isCoarse ? 108 : 98;
      state.orbit.targetPolar = 1.45;
      if (params.get('az')) {
        state.orbit.azimuth = parseFloat(params.get('az')) || 0.34;
        state.orbit.targetAzimuth = state.orbit.azimuth;
      }
      if (params.get('polar')) {
        state.orbit.polar = clamp(parseFloat(params.get('polar')) || 1.47, 0.66, 1.5);
        state.orbit.targetPolar = state.orbit.polar;
      }
      if (params.get('radius')) {
        state.orbit.radius = clamp(parseFloat(params.get('radius')) || 80, 42, 135);
        state.orbit.targetRadius = state.orbit.radius;
      }
      if (wantsRide) {
        state.mode = 'ride';
        els.explore.classList.add('is-hidden');
        els.topbar.classList.remove('is-hidden');
        startRide({ instant: true });
      } else {
        state.mode = 'explore';
        els.explore.style.display = '';
        els.explore.classList.remove('is-hidden');
      }
    }
  }, params.has('instant') || params.has('still') ? 40 : 780);
}

function boot() {
  els.loadBar.style.width = '22%';
  els.loadText.textContent = '正在点亮星冠…';
  window.setTimeout(() => {
    els.loadBar.style.width = '64%';
    els.loadText.textContent = '正在为八朵云舟系上缆绳…';
  }, 260);
  window.setTimeout(() => {
    els.loadBar.style.width = '88%';
    els.loadText.textContent = '正在铺开云海…';
  }, 680);
  window.setTimeout(finishLoading, params.has('instant') || params.has('still') ? 120 : 1180);
}

/* ---------------------------------------------------------------- */
/* render loop                                                       */
/* ---------------------------------------------------------------- */

const clock = new THREE.Clock();
let firstFrame = true;

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);
  state.time += dt;
  state.idleTime += dt;

  if (!params.has('freeze')) {
    world.update(dt);
  }

  updateCamera(dt);
  updateHUD(dt);
  updateSelectionTag();

  if (state.mode === 'ride' && !state.up && !state.down && !world.auto) {
    state.rideRoll = damp(state.rideRoll, Math.sin(state.time * 0.7) * 0.0022, 2, dt);
  } else {
    state.rideRoll = damp(state.rideRoll, 0, 2, dt);
  }

  composer.render();
  if (firstFrame) {
    firstFrame = false;
    document.body.classList.add('is-ready');
  }
  requestAnimationFrame(animate);
}

camera.position.set(-30, 50, 92);
computeOrbitPosition(camera.position, state.orbit);
camera.lookAt(state.orbit.focus);
requestAnimationFrame(animate);
boot();

/* debug / preview hook */
window.__cloudCrown = {
  world, state, camera, renderer, composer, bloom, audio,
  startRide, exitRide, enterExplore, selectCloud, applyMood,
  setAuto,
  get ready() { return state.ready; },
};
