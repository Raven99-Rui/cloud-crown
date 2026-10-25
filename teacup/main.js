import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { createTeaRide } from './ride.js';
import { TeaAudio } from './audio.js';

/* ================================================================
   瓷梦茶会 · interactions, camera and UI
   ================================================================ */

const $ = (id) => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const damp = THREE.MathUtils.damp;
const isCoarse = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1000;
const params = new URLSearchParams(location.search);
if (params.has('embedded')) document.body.classList.add('is-embedded');
if (params.has('still') || params.has('instant') || params.has('freeze')) {
  document.documentElement.classList.add('no-motion');
}
if (params.has('nohud')) {
  document.documentElement.classList.add('nohud');
}

const els = {
  canvas: $('world'),
  rideFade: $('rideFade'),
  loading: $('loading'),
  loadBar: $('loadBar'),
  loadText: $('loadText'),
  topbar: $('topbar'),
  intro: $('intro'),
  enterBtn: $('enterBtn'),
  lookBtn: $('lookBtn'),
  explore: $('explore'),
  cupPin: $('cupPin'),
  cupPinNo: $('cupPinNo'),
  prevCup: $('prevCup'),
  nextCup: $('nextCup'),
  cupNo: $('cupNo'),
  cupName: $('cupName'),
  cupDots: $('cupDots'),
  rideBtn: $('rideBtn'),
  rideHud: $('rideHud'),
  rideCupLabel: $('rideCupLabel'),
  exitRide: $('exitRide'),
  spinLeft: $('spinLeft'),
  spinRight: $('spinRight'),
  speedValue: $('speedValue'),
  speedDial: $('speedDial'),
  dialNeedle: $('dialNeedle'),
  platformSpeed: $('platformSpeed'),
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
    preserveDrawingBuffer: false,
  });
} catch (err) {
  console.error(err);
  els.loading.classList.add('is-done');
  els.fallback.classList.remove('is-hidden');
  throw err;
}

const pixelBudget = isCoarse ? 1_850_000 : 3_400_000;
const PR = Math.max(1, Math.min(window.devicePixelRatio || 1, isCoarse ? 1.4 : 1.7, Math.sqrt(pixelBudget / (window.innerWidth * window.innerHeight))));
renderer.setPixelRatio(PR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(isCoarse ? 62 : 54, window.innerWidth / window.innerHeight, 0.1, 260);
camera.rotation.order = 'YXZ';

/* procedural environment map: warm windows and a cool sky */
function makeEnvironmentMap() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const sky = ctx.createLinearGradient(0, 0, 0, 512);
  sky.addColorStop(0, '#608f9f');
  sky.addColorStop(0.42, '#f0dcba');
  sky.addColorStop(0.52, '#c6aa7f');
  sky.addColorStop(1, '#4c3c2d');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 1024, 512);
  // sun
  const sun = ctx.createRadialGradient(682, 196, 0, 682, 196, 150);
  sun.addColorStop(0, 'rgba(255,247,217,1)');
  sun.addColorStop(0.08, 'rgba(255,224,162,.96)');
  sun.addColorStop(0.4, 'rgba(255,191,105,.25)');
  sun.addColorStop(1, 'rgba(255,180,90,0)');
  ctx.fillStyle = sun;
  ctx.fillRect(500, 20, 380, 380);
  // soft window highlights
  [130, 340, 820].forEach((x, i) => {
    const g = ctx.createLinearGradient(x, 200, x, 470);
    g.addColorStop(0, 'rgba(255,248,224,.0)');
    g.addColorStop(0.3, `rgba(255,239,198,${0.65 + i * 0.08})`);
    g.addColorStop(0.9, 'rgba(255,218,158,.12)');
    g.addColorStop(1, 'rgba(255,218,158,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, 200, 42 + i * 14, 240);
  });
  // darker ground band for reflections
  ctx.fillStyle = 'rgba(50,42,32,.3)';
  ctx.fillRect(0, 500, 1024, 12);
  const tex = new THREE.CanvasTexture(canvas);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const rt = pmrem.fromEquirectangular(tex);
  tex.dispose();
  pmrem.dispose();
  return rt.texture;
}

scene.environment = makeEnvironmentMap();
scene.environmentIntensity = 0.42;

/* composer with a restrained bloom for the lamps */
const composer = new EffectComposer(renderer);
composer.setPixelRatio(PR);
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.22,
  0.48,
  0.82,
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* A final porcelain grade: slightly richer pigment, softer highlights,
   and a gentle tea-stained vignette. Kept subtle so the 3D still reads. */
const TeaGradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSaturation: { value: 1.22 },
    uContrast: { value: 1.075 },
    uWarmth: { value: 0.018 },
    uVignette: { value: 0.3 },
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
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      float lum = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 col = mix(vec3(lum), tex.rgb, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;
      col += vec3(uWarmth, uWarmth * 0.35, -uWarmth * 0.5);
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.38, 0.78, d);
      col *= mix(1.0, 1.0 - uVignette, vig);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), tex.a);
    }
  `,
};
const gradePass = new ShaderPass(TeaGradeShader);
composer.addPass(gradePass);

/* ---------------------------------------------------------------- */
/* ride + audio                                                      */
/* ---------------------------------------------------------------- */

const ride = createTeaRide({ scene, renderer, bloom, isMobile: isCoarse });
const audio = new TeaAudio();

/* ---------------------------------------------------------------- */
/* state                                                             */
/* ---------------------------------------------------------------- */

const state = {
  mode: 'intro',            // intro | explore | ride
  introOpen: true,
  helpOpen: false,
  mood: params.get('mood') === 'night' ? 'night' : 'day',
  soundOn: !audio.muted,
  transitioning: false,
  idleTime: 0,
  time: 0,
  hudClock: 0,
  spinInput: 0,
  dragSpin: 0,
  selected: clamp(parseInt(params.get('cup') || '3', 10) - 1 || 0, 0, 7),
  pointer: {
    down: false,
    id: null,
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    moved: 0,
    mode: null,
    lastX: 0,
  },
  pinch: null,
  orbit: {
    azimuth: 0.63,
    polar: 1.43,
    radius: isCoarse ? 29.8 : 25.8,
    targetAzimuth: 0.63,
    targetPolar: 1.43,
    targetRadius: isCoarse ? 29.8 : 25.8,
    focus: new THREE.Vector3(0, 4.05, 0),
  },
  cameraTarget: new THREE.Vector3(0, 4.1, 0),
  rideTarget: new THREE.Vector3(0, 3.0, 0),
  cameraPos: new THREE.Vector3(),
  cameraLook: new THREE.Vector3(0, 4.05, 0),
  rideRoll: 0,
  fov: isCoarse ? 62 : 54,
  selectedForRide: 0,
};

state.selected = clamp(state.selected, 0, 7);

const tmpPos = new THREE.Vector3();
const tmpLook = new THREE.Vector3();
const tmpOutside = new THREE.Vector3();
const pinWorld = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
const pointerNdc = new THREE.Vector2();

/* initial camera */
function computeOrbitPosition(out, orbit) {
  const sp = Math.sin(orbit.polar);
  out.set(
    orbit.focus.x + orbit.radius * sp * Math.sin(orbit.azimuth),
    orbit.focus.y + orbit.radius * Math.cos(orbit.polar),
    orbit.focus.z + orbit.radius * sp * Math.cos(orbit.azimuth),
  );
  return out;
}
computeOrbitPosition(state.cameraPos, state.orbit);
state.cameraLook.copy(state.orbit.focus);
camera.position.copy(state.cameraPos);
camera.lookAt(state.cameraLook);

/* ---------------------------------------------------------------- */
/* UI helpers                                                        */
/* ---------------------------------------------------------------- */

let toastTimer = 0;
function toast(message, length = 2400) {
  if (params.has('freeze') || params.has('still')) return;
  els.toast.textContent = message;
  els.toast.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove('is-on'), length);
}

function setSoundUI() {
  els.soundBtn.classList.toggle('is-muted', !state.soundOn);
  els.soundBtn.setAttribute('aria-label', state.soundOn ? '关闭声音' : '打开声音');
}

function setMoodUI() {
  const night = state.mood === 'night';
  els.moodBtn.classList.toggle('is-night', night);
  els.moodBtn.setAttribute('aria-label', night ? '切换到晴日' : '切换到夜幕');
  els.moodBtn.dataset.tip = night ? '晴日' : '夜幕';
  document.body.classList.toggle('is-night', night);
}

function updateSelectionUI() {
  const index = state.selected;
  const cupNo = String(index + 1).padStart(2, '0');
  const name = ride.CUP_NAMES[index];
  const short = ride.CUP_SHORT[index];
  els.cupNo.textContent = cupNo;
  els.cupName.textContent = name;
  els.cupPinNo.textContent = cupNo;
  els.rideCupLabel.textContent = `${cupNo} 号杯 · ${short}`;
  els.rideBtn.querySelector('.ride-button-text small').textContent = `STEP INTO CUP ${cupNo}`;
  els.rideBtn.querySelector('.ride-button-text strong').textContent = '登上这只茶杯';
  [...els.cupDots.children].forEach((dot, i) => {
    dot.classList.toggle('is-active', i === index);
    dot.setAttribute('aria-pressed', i === index ? 'true' : 'false');
  });
}

function buildCupDots() {
  els.cupDots.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const b = document.createElement('button');
    b.className = 'cup-dot';
    b.type = 'button';
    b.textContent = String(i + 1).padStart(2, '0');
    b.setAttribute('aria-label', `选择第 ${i + 1} 号茶杯：${ride.CUP_NAMES[i]}`);
    b.addEventListener('click', () => {
      if (state.mode === 'ride') return;
      selectCup(i);
      audio.chime('select');
    });
    els.cupDots.appendChild(b);
  }
}

function selectCup(index, announce = false) {
  state.selected = ride.setSelected(index);
  updateSelectionUI();
  if (announce) {
    toast(`已选 ${String(state.selected + 1).padStart(2, '0')} 号茶席 · ${ride.CUP_SHORT[state.selected]}`);
  }
  audio.chime('select');
}

/* ---------------------------------------------------------------- */
/* intro / modes                                                     */
/* ---------------------------------------------------------------- */

function hideIntro() {
  if (!state.introOpen) return;
  state.introOpen = false;
  els.intro.classList.add('is-leaving');
  els.topbar.classList.remove('is-hidden');
  window.setTimeout(() => {
    if (state.mode !== 'ride') {
      els.explore.classList.remove('is-hidden');
      state.mode = 'explore';
    }
  }, 530);
}

function revealExploreInstant() {
  state.introOpen = false;
  state.mode = 'explore';
  els.intro.classList.add('is-leaving');
  els.explore.classList.remove('is-hidden');
  els.topbar.classList.remove('is-hidden');
}

async function ensureAudio() {
  try {
    await audio.init();
    if (audio.muted !== !state.soundOn) {
      // keep state from localStorage / explicit button state in sync
    }
  } catch (err) {
    console.warn('Audio unavailable', err);
  }
}

async function enterRide() {
  if (state.transitioning) return;
  state.transitioning = true;
  state.selectedForRide = state.selected;
  hideIntro();
  els.rideFade.classList.add('is-on');
  // Never let a suspended AudioContext block the ride from starting.
  ensureAudio();
  await new Promise((resolve) => window.setTimeout(resolve, 300));
  audio.chime('ride');
  audio.setRide(true);
  els.explore.classList.add('is-hidden');
  els.rideHud.classList.remove('is-hidden');
  els.canvas.classList.add('is-riding');
  els.canvas.style.cursor = 'ew-resize';
  state.mode = 'ride';
  ride.setSelected(state.selectedForRide);
  ride.setRiding(true);
  if (params.has('spin')) {
    const direction = params.get('spin') === '-1' ? -1 : 1;
    state.spinInput = direction;
    ride.spin(direction, 1);
  }
  state.rideRoll = 0;
  state.spinInput = 0;
  window.setTimeout(() => {
    els.rideFade.classList.remove('is-on');
    state.transitioning = false;
  }, 250);
  window.setTimeout(() => toast('向左或向右拖动画面，转动杯中的铜轮'), 900);
}

function exitRide() {
  if (state.mode !== 'ride' || state.transitioning) return;
  state.transitioning = true;
  els.rideFade.classList.add('is-on');
  els.rideHud.classList.add('is-hidden');
  els.canvas.classList.remove('is-riding');
  els.canvas.style.cursor = 'grab';
  state.spinInput = 0;
  els.spinLeft.classList.remove('is-held');
  els.spinRight.classList.remove('is-held');
  ride.setRiding(false);
  ride.selectCup(state.selectedForRide);
  audio.setRide(false);
  audio.chime('exit');
  window.setTimeout(() => {
    state.mode = 'explore';
    els.explore.classList.remove('is-hidden');
    window.setTimeout(() => {
      els.rideFade.classList.remove('is-on');
      state.transitioning = false;
    }, 260);
    toast('茶还温着，随时再坐一圈');
  }, 260);
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
/* pointer / orbit / cup picking                                     */
/* ---------------------------------------------------------------- */

function updatePointerNdc(clientX, clientY) {
  const rect = els.canvas.getBoundingClientRect();
  pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
}

function pickCup(clientX, clientY) {
  updatePointerNdc(clientX, clientY);
  raycaster.setFromCamera(pointerNdc, camera);
  const objects = ride.getCupObjects();
  const hits = raycaster.intersectObjects(objects, true);
  for (const hit of hits) {
    let obj = hit.object;
    while (obj) {
      if (obj.userData && Number.isInteger(obj.userData.cupIndex)) return obj.userData.cupIndex;
      obj = obj.parent;
    }
  }
  return -1;
}

function onPointerDown(e) {
  if (e.button !== undefined && e.button !== 0) return;
  ensureAudio();

  if (state.mode === 'ride') {
    state.pointer.down = true;
    state.pointer.id = e.pointerId;
    state.pointer.x = e.clientX;
    state.pointer.y = e.clientY;
    state.pointer.lastX = e.clientX;
    state.pointer.moved = 0;
    state.pointer.mode = 'spin';
    els.canvas.setPointerCapture?.(e.pointerId);
    return;
  }

  state.pointer.down = true;
  state.pointer.id = e.pointerId;
  state.pointer.x = e.clientX;
  state.pointer.y = e.clientY;
  state.pointer.startX = e.clientX;
  state.pointer.startY = e.clientY;
  state.pointer.lastX = e.clientX;
  state.pointer.moved = 0;
  state.pointer.mode = 'orbit';
  els.canvas.setPointerCapture?.(e.pointerId);
  els.canvas.classList.add('is-dragging');
  state.idleTime = 0;
}

function onPointerMove(e) {
  if (state.mode === 'ride' && state.pointer.down && state.pointer.mode === 'spin') {
    const dx = e.clientX - state.pointer.lastX;
    if (Math.abs(dx) > 0.4) {
      ride.spinBy(dx * 0.011);
      state.pointer.lastX = e.clientX;
      audio.setSpin(ride.getSpeedRPM());
    }
    return;
  }

  if (state.pointer.down && state.pointer.mode === 'orbit') {
    const dx = e.clientX - state.pointer.x;
    const dy = e.clientY - state.pointer.y;
    state.pointer.moved += Math.abs(dx) + Math.abs(dy);
    state.orbit.targetAzimuth -= dx * 0.0045;
    state.orbit.targetPolar = clamp(state.orbit.targetPolar - dy * 0.0036, 0.58, 1.47);
    state.pointer.x = e.clientX;
    state.pointer.y = e.clientY;
    state.idleTime = 0;
    return;
  }

  // hover cursor over cups
  if (!isCoarse && state.mode !== 'ride') {
    const hit = pickCup(e.clientX, e.clientY);
    ride.setHover(hit);
    els.canvas.style.cursor = hit >= 0 ? 'pointer' : 'grab';
  }
}

function onPointerUp(e) {
  if (!state.pointer.down) return;
  const wasMode = state.pointer.mode;
  const moved = state.pointer.moved;
  state.pointer.down = false;
  state.pointer.id = null;
  state.pointer.mode = null;
  els.canvas.classList.remove('is-dragging');
  try {
    if (e && e.pointerId !== undefined) els.canvas.releasePointerCapture?.(e.pointerId);
  } catch { /* pointer may already be lost */ }

  if (wasMode === 'spin') {
    state.spinInput = 0;
    return;
  }

  if (wasMode === 'orbit' && moved < 7) {
    const hit = pickCup(e.clientX, e.clientY);
    if (hit >= 0) {
      selectCup(hit, true);
      state.idleTime = 0;
    }
  }
}

function onPointerCancel() {
  state.pointer.down = false;
  state.pointer.mode = null;
  els.canvas.classList.remove('is-dragging');
  state.spinInput = 0;
}

function onWheel(e) {
  if (state.mode === 'ride' || state.mode === 'intro') return;
  e.preventDefault();
  state.orbit.targetRadius = clamp(state.orbit.targetRadius * Math.exp(e.deltaY * 0.00105), 12.8, 38);
  state.idleTime = 0;
}

els.canvas.addEventListener('pointerdown', onPointerDown);
els.canvas.addEventListener('pointermove', onPointerMove);
els.canvas.addEventListener('pointerup', onPointerUp);
els.canvas.addEventListener('pointercancel', onPointerCancel);
els.canvas.addEventListener('wheel', onWheel, { passive: false });
els.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

/* ---------------------------------------------------------------- */
/* spin controls                                                     */
/* ---------------------------------------------------------------- */

function setSpinInput(direction) {
  if (state.mode !== 'ride') return;
  state.spinInput = direction;
  if (direction !== 0) {
    ride.spin(direction, 0.7);
    audio.setSpin(ride.getSpeedRPM());
  }
  els.spinLeft.classList.toggle('is-held', direction < 0);
  els.spinRight.classList.toggle('is-held', direction > 0);
}

function bindSpinButton(el, direction) {
  el.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    ensureAudio();
    el.setPointerCapture?.(e.pointerId);
    setSpinInput(direction);
  });
  const stop = (e) => {
    e.preventDefault();
    setSpinInput(0);
  };
  el.addEventListener('pointerup', stop);
  el.addEventListener('pointercancel', stop);
  el.addEventListener('pointerleave', (e) => {
    if (e.buttons === 0) setSpinInput(0);
  });
}
bindSpinButton(els.spinLeft, -1);
bindSpinButton(els.spinRight, 1);

/* ---------------------------------------------------------------- */
/* keyboard                                                          */
/* ---------------------------------------------------------------- */

const keys = new Set();
function updateKeyboardSpin() {
  if (state.mode !== 'ride') return;
  const left = keys.has('ArrowLeft') || keys.has('KeyA');
  const right = keys.has('ArrowRight') || keys.has('KeyD');
  if (left && !right) setSpinInput(-1);
  else if (right && !left) setSpinInput(1);
  else setSpinInput(0);
}

window.addEventListener('keydown', (e) => {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
  if (e.repeat && !['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].includes(e.code)) return;

  if (e.code === 'Escape') {
    if (state.helpOpen) {
      toggleHelp(false);
    } else if (state.mode === 'ride') {
      exitRide();
    } else if (state.introOpen) {
      hideIntro();
    }
    return;
  }
  if (state.helpOpen) return;

  if (e.code === 'Enter' || e.code === 'Space') {
    if (state.introOpen) {
      enterRide();
      return;
    }
    if (state.mode === 'explore') {
      enterRide();
      return;
    }
  }
  if (e.code === 'KeyE') {
    if (state.introOpen) hideIntro();
    if (state.mode === 'explore') enterRide();
    return;
  }
  if (e.code === 'KeyR') {
    if (state.mode === 'ride') exitRide();
    else enterRide();
    return;
  }
  if (e.code === 'KeyM') {
    toggleSound();
    return;
  }
  if (e.code === 'KeyF') {
    toggleFullscreen();
    return;
  }
  if (e.code === 'KeyH') {
    toggleHelp();
    return;
  }
  if (e.code === 'KeyQ' || e.code === 'BracketLeft') {
    if (state.mode !== 'ride') selectCup(state.selected - 1, true);
    return;
  }
  if (e.code === 'KeyZ' || e.code === 'BracketRight') {
    if (state.mode !== 'ride') selectCup(state.selected + 1, true);
    return;
  }
  if (['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].includes(e.code)) {
    keys.add(e.code);
    if (state.mode === 'ride') updateKeyboardSpin();
  }
});

window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (state.mode === 'ride') updateKeyboardSpin();
});

window.addEventListener('blur', () => {
  keys.clear();
  state.spinInput = 0;
  els.spinLeft.classList.remove('is-held');
  els.spinRight.classList.remove('is-held');
});

/* ---------------------------------------------------------------- */
/* buttons                                                           */
/* ---------------------------------------------------------------- */

els.enterBtn.addEventListener('click', () => enterRide());
els.lookBtn.addEventListener('click', () => {
  ensureAudio();
  hideIntro();
  audio.chime('tick');
});
els.rideBtn.addEventListener('click', () => enterRide());
els.exitRide.addEventListener('click', () => exitRide());
els.prevCup.addEventListener('click', () => selectCup(state.selected - 1, true));
els.nextCup.addEventListener('click', () => {
  if (state.mode === 'ride') return;
  selectCup(state.selected + 1, true);
});
els.resetBtn.addEventListener('click', () => {
  if (state.mode === 'ride') return;
  state.orbit.targetAzimuth = 0.63;
  state.orbit.targetPolar = 1.43;
  state.orbit.targetRadius = isCoarse ? 29.8 : 25.8;
  state.idleTime = 0;
  toast('回到茶席前的最佳位置');
});
els.helpBtn.addEventListener('click', () => toggleHelp(true));
els.closeHelp.addEventListener('click', () => toggleHelp(false));
els.helpGo.addEventListener('click', () => toggleHelp(false));
els.help.addEventListener('click', (e) => {
  if (e.target === els.help) toggleHelp(false);
});

async function toggleSound() {
  await ensureAudio();
  const muted = await audio.toggleMute();
  state.soundOn = !muted;
  setSoundUI();
  toast(muted ? '已静音 · 茶会只剩旋转的轻响' : '声音已开启 · 八音盒正在温壶');
}
els.soundBtn.addEventListener('click', toggleSound);

els.moodBtn.addEventListener('click', () => {
  ensureAudio();
  state.mood = state.mood === 'day' ? 'night' : 'day';
  ride.setMood(state.mood);
  setMoodUI();
  audio.chime('tick');
  toast(state.mood === 'night' ? '入夜了 · 檐下灯盏一盏盏亮起' : '天光回来了 · 瓷面上的描金醒了过来');
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {
      toast('浏览器没有允许全屏');
    });
  } else {
    document.exitFullscreen?.();
  }
}
els.fullBtn.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
  els.fullBtn.style.opacity = document.fullscreenElement ? '0.5' : '';
});

/* ---------------------------------------------------------------- */
/* resize                                                            */
/* ---------------------------------------------------------------- */

function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.fov = w < 800 ? 66 : 54;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
  if (w < 800) {
    state.orbit.targetRadius = Math.max(state.orbit.targetRadius, 29);
    state.orbit.targetPolar = Math.max(state.orbit.targetPolar, 1.31);
  }
}
window.addEventListener('resize', onResize);

/* ---------------------------------------------------------------- */
/* animation                                                         */
/* ---------------------------------------------------------------- */

function updateOrbit(dt) {
  state.orbit.azimuth = damp(state.orbit.azimuth, state.orbit.targetAzimuth, 9, dt);
  state.orbit.polar = damp(state.orbit.polar, state.orbit.targetPolar, 9, dt);
  state.orbit.radius = damp(state.orbit.radius, state.orbit.targetRadius, 7, dt);
}

function computeRideCamera(outPos, outLook) {
  const index = state.selectedForRide;
  ride.getCupViewPoint(index, outPos);
  // sit slightly to the back of the cup, looking across the rim
  tmpOutside.set(outPos.x, 0, outPos.z);
  if (tmpOutside.lengthSq() > 0.001) {
    tmpOutside.normalize().multiplyScalar(0.3);
    outPos.add(tmpOutside);
  }
  const bob = Math.sin(state.time * 2.2) * 0.018 + Math.sin(state.time * 1.1) * 0.012;
  outPos.y += bob;
  outLook.set(0, 2.1, 0);
  // make the view breathe and lean with the cup
  const cup = ride.cups[index];
  const lead = cup ? Math.sin(cup.spinAngle * 0.55) * 0.15 : 0;
  outLook.x += lead;
  const leanYaw = clamp(ride.cupSpeed * 0.035, -0.2, 0.2);
  if (Math.abs(leanYaw) > 0.0001) {
    const dx = outLook.x;
    const dz = outLook.z;
    outLook.x = dx * Math.cos(leanYaw) - dz * Math.sin(leanYaw);
    outLook.z = dx * Math.sin(leanYaw) + dz * Math.cos(leanYaw);
  }
  return outPos;
}

function updateCamera(dt) {
  tmpPos.set(0, 0, 0);
  tmpLook.set(0, 0, 0);

  if (state.mode === 'ride') {
    computeRideCamera(tmpPos, tmpLook);
    camera.position.copy(tmpPos);
    state.cameraLook.copy(tmpLook);
    state.fov = damp(state.fov, (isCoarse ? 72 : 66) + clamp(Math.abs(ride.cupSpeed) * 1.3, 0, 6), 4, dt);
    const cup = ride.cups[state.selectedForRide];
    const targetRoll = clamp(-(cup ? ride.cupSpeed : 0) * 0.019, -0.1, 0.1);
    state.rideRoll = damp(state.rideRoll, targetRoll, 4, dt);
  } else {
    updateOrbit(dt);
    computeOrbitPosition(tmpPos, state.orbit);
    tmpLook.copy(state.orbit.focus);
    camera.position.copy(tmpPos);
    state.cameraLook.copy(tmpLook);
    state.fov = damp(state.fov, isCoarse ? 62 : 54, 3.5, dt);
    state.rideRoll = damp(state.rideRoll, 0, 3, dt);
  }

  camera.up.set(0, 1, 0);
  camera.lookAt(state.cameraLook);
  if (Math.abs(state.rideRoll) > 0.0002) camera.rotateZ(state.rideRoll);
  if (Math.abs(camera.fov - state.fov) > 0.001) {
    camera.fov = state.fov;
    camera.updateProjectionMatrix();
  }
}

function updateCupPin() {
  if (state.mode !== 'explore' || !els.cupPin) {
    els.cupPin?.classList.add('is-hidden');
    return;
  }
  ride.getCupWorldPosition(state.selected, pinWorld);
  pinWorld.y += 2.45;
  camera.updateMatrixWorld();
  pinWorld.project(camera);
  const x = (pinWorld.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-pinWorld.y * 0.5 + 0.5) * window.innerHeight;
  const behind = pinWorld.z > 1 || pinWorld.z < -1 || x < 32 || x > window.innerWidth - 32 || y < 120 || y > window.innerHeight - 110;
  els.cupPin.classList.toggle('is-hidden', behind);
  if (!behind) {
    els.cupPin.style.left = `${x}px`;
    els.cupPin.style.top = `${y}px`;
  }
}

function updateHUD(dt) {  if (state.mode !== 'ride') {
    state.idleTime += dt;
    if (state.idleTime > 10 && state.mode === 'explore') {
      state.orbit.targetAzimuth += dt * 0.012;
    }
    return;
  }
  state.idleTime = 0;
  const rpm = ride.getSpeedRPM();
  const platformRpm = ride.getPlatformRPM();
  state.hudClock += dt;
  if (state.hudClock > 0.055) {
    state.hudClock = 0;
    els.speedValue.textContent = rpm.toFixed(1);
    const ratio = clamp(rpm / 42, 0, 1);
    els.dialNeedle.style.transform = `translateX(-50%) rotate(${-118 + ratio * 236}deg)`;
    els.platformSpeed.textContent = `茶盘速 ${platformRpm.toFixed(1)}`;
    audio.setSpin(rpm);
  }
}

let last = null;
let rafId = 0;
let frameCount = 0;
const stillMode = params.has('still');
const freezeMode = params.has('freeze');
const freezeAt = parseFloat(params.get('freezeAt') || '1.7') || 1.7;
const stillFrames = Math.max(4, parseInt(params.get('frames') || '8', 10) || 8);
const debugEl = params.has('debug') ? (() => {
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;left:12px;top:110px;z-index:999;background:#000c;color:#9fe;padding:10px 12px;font:11px/1.5 monospace;white-space:pre;pointer-events:none;';
  document.body.appendChild(el);
  return el;
})() : null;

function frame(now) {
  rafId = requestAnimationFrame(frame);
  if (last === null) last = now;
  const dt = Math.max(0, Math.min((now - last) / 1000, 0.05));
  last = now;
  state.time += dt;
  frameCount++;

  if (state.mode === 'intro' && !state.introOpen) {
    // handled by timers
  }
  if (state.mode === 'intro') {
    state.orbit.targetAzimuth += dt * 0.006;
  }

  if (freezeMode && state.time > freezeAt) {
    composer.render();
    return;
  }

  ride.update(dt, state.time);
  updateCamera(dt);
  updateCupPin();
  updateHUD(dt);

  if (debugEl) {
    document.documentElement.dataset.ride = `${state.time.toFixed(2)}|${Math.max(...ride.cups.map((c) => Math.abs(c.tilt.rotation.z))).toFixed(3)}|${ride.cups[state.selected].spinAngle.toFixed(2)}|${ride.platformSpeed.toFixed(3)}`;
    debugEl.textContent = [
      `frame ${frameCount}  dt ${dt.toFixed(3)}  mode ${state.mode}`,
      `fov ${camera.fov.toFixed(1)} aspect ${camera.aspect.toFixed(3)}`,
      `cam ${camera.position.x.toFixed(2)} ${camera.position.y.toFixed(2)} ${camera.position.z.toFixed(2)}`,
      `look ${state.cameraLook.x.toFixed(2)} ${state.cameraLook.y.toFixed(2)} ${state.cameraLook.z.toFixed(2)}`,
      `want ${tmpPos.x.toFixed(2)} ${tmpPos.y.toFixed(2)} ${tmpPos.z.toFixed(2)}`,
      `orbit r ${state.orbit.radius.toFixed(2)} polar ${state.orbit.polar.toFixed(2)} az ${state.orbit.azimuth.toFixed(2)}`,
      `parent ${camera.parent ? camera.parent.type : 'none'}`,
      `cup tilt ${Math.max(...ride.cups.map((c) => Math.abs(c.tilt.rotation.z))).toFixed(3)} spin ${ride.cups[state.selected].spinAngle.toFixed(2)}`,
      `draw ${renderer.info.render.calls}  tris ${renderer.info.render.triangles}`,
      `canvas ${els.canvas.width}x${els.canvas.height}`,
    ].join('\n');
  }

  composer.render();

  if (stillMode && frameCount > stillFrames) {
    cancelAnimationFrame(rafId);
  }
}

/* ---------------------------------------------------------------- */
/* boot                                                              */
/* ---------------------------------------------------------------- */

function boot() {
  els.loadBar.style.width = '24%';
  buildCupDots();
  updateSelectionUI();
  setSoundUI();
  setMoodUI();
  ride.setMood(state.mood);
  ride.selectCup(state.selected);
  if (params.has('instant')) {
    for (let i = 0; i < 160; i++) ride.update(0.05, i * 0.05);
  }

  els.loadText.textContent = '摆好八只描金瓷杯…';
  els.loadBar.style.width = '58%';

  // first render before revealing the invitation
  renderer.compile(scene, camera);
  composer.render();
  els.loadBar.style.width = '86%';

  window.setTimeout(() => {
    els.loadBar.style.width = '100%';
    els.loadText.textContent = '茶已沏好，请入席';
  }, 260);

  window.setTimeout(() => {
    els.loading.classList.add('is-done');
    els.topbar.classList.remove('is-hidden');
    els.intro.classList.remove('is-hidden');

    if (params.has('skipIntro') || params.has('ride')) {
      revealExploreInstant();
    }
    if (params.get('mood') === 'night') {
      ride.setMood('night');
      setMoodUI();
    }
    if (params.get('ride') === '1') {
      state.selected = clamp(parseInt(params.get('cup') || '1', 10) - 1 || 0, 0, 7);
      ride.setSelected(state.selected);
      updateSelectionUI();
      window.setTimeout(() => enterRide(), 650);
    }
  }, 900);

  rafId = requestAnimationFrame(frame);

  if (params.has('snapshot')) {
    window.setTimeout(() => {
      cancelAnimationFrame(rafId);
      ride.update(0.016, state.time);
      updateCamera(0.016);
      updateCupPin();
      composer.render();
    }, 1700);
  }
}

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    last = performance.now();
  }
});

window.addEventListener('beforeunload', () => {
  cancelAnimationFrame(rafId);
});

/* expose a tiny control surface for debugging and museum labels */
window.__teacup = {
  ride,
  state,
  camera,
  scene,
  renderer,
  composer,
  bloom,
  enterRide,
  exitRide,
  selectCup,
  setMood: (m) => {
    state.mood = m;
    ride.setMood(m);
    setMoodUI();
  },
  debugMood: () => state.mood,
};

boot();


