import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createRainbowWorld, LANES } from './world.js';
import { RainbowAudio } from './audio.js';

/* ================================================================
   彩虹滑道机 · interactions, camera and ride direction
   ================================================================ */

const $ = (id) => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const damp = THREE.MathUtils.damp;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const isCoarse = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1000;
const params = new URLSearchParams(location.search);
if (params.has('nohud')) document.documentElement.classList.add('nohud');
const still = params.has('still') || params.has('freeze');
const RATE = Math.max(0.25, Math.min(20, Number(params.get('rate')) || 1));

const els = {
  canvas: $('world'),
  loading: $('loading'),
  loadBar: $('loadBar'),
  loadText: $('loadText'),
  topbar: $('topbar'),
  intro: $('intro'),
  enterBtn: $('enterBtn'),
  lookBtn: $('lookBtn'),
  explore: $('explore'),
  laneRows: $('laneRows'),
  laneDots: $('laneDots'),
  laneNo: $('laneNo'),
  laneEn: $('laneEn'),
  laneName: $('laneName'),
  laneNote: $('laneNote'),
  prevLane: $('prevLane'),
  nextLane: $('nextLane'),
  boardBtn: $('boardBtn'),
  rideHud: $('rideHud'),
  rideLaneLabel: $('rideLaneLabel'),
  ridePhase: $('ridePhase'),
  exitRide: $('exitRide'),
  countdown: $('countdown'),
  speedValue: $('speedValue'),
  speedFill: $('speedFill'),
  tokenCount: $('tokenCount'),
  tokenTotal: $('tokenTotal'),
  ridePrompt: $('ridePrompt'),
  ridePromptNote: $('ridePromptNote'),
  progressLabel: $('progressLabel'),
  progressFill: $('progressFill'),
  progressDot: $('progressDot'),
  progressPct: $('progressPct'),
  speedLines: $('speedLines'),
  result: $('result'),
  resultTitle: $('resultTitle'),
  resultSub: $('resultSub'),
  resultTime: $('resultTime'),
  resultSpeed: $('resultSpeed'),
  resultTokens: $('resultTokens'),
  resultBadge: $('resultBadge'),
  againBtn: $('againBtn'),
  changeBtn: $('changeBtn'),
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
  rideFade: $('rideFade'),
  moodFlash: $('moodFlash'),
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
const pixelBudget = isCoarse ? 1_900_000 : 3_600_000;
const PR = Math.max(1, Math.min(window.devicePixelRatio || 1, isCoarse ? 1.4 : 1.65, Math.sqrt(pixelBudget / (window.innerWidth * window.innerHeight))));
renderer.setPixelRatio(PR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.98;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(isCoarse ? 62 : 48, window.innerWidth / window.innerHeight, 0.1, 1200);
camera.rotation.order = 'YXZ';

const world = createRainbowWorld(scene, renderer);
const audio = new RainbowAudio();

const composer = new EffectComposer(renderer);
composer.setPixelRatio(PR);
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.3, 0.6, 0.84);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* ---------------------------------------------------------------- state */

let phase = 'intro';
let elapsed = 0;
let selectedLane = 2;
let hoverLane = -1;
let dragging = false;
let dragMoved = 0;
let pointerDown = null;
let cameraFov = 48;
let toastTimer = 0;
let entered = false;
let lastFrame = performance.now();
let introStartedAt = 0;

const orbit = {
  yaw: 0.3,
  pitch: 0.17,
  radius: 39,
  target: new THREE.Vector3(0, 8.7, 3.0),
};

const ride = {
  lane: 2,
  phase: 'climb',
  time: 0,
  topTime: 0,
  slideProgress: 0,
  slideElapsed: 0,
  speed: 1,
  lateral: 0,
  lateralVel: 0,
  tokens: 0,
  climbCurve: null,
  finishFromPos: new THREE.Vector3(),
  finishFromQuat: new THREE.Quaternion(),
  finishTime: 0,
  lastCount: null,
  tokenFlags: [],
  hitFlash: 0,
  shake: 0,
};

const keys = new Set();
let boostPointer = false;

const CLIMB_END = 8.3;
const TOP_HOLD = 2.7;
const SLIDE_BASE_DURATION = 8.0;

const tmpV = new THREE.Vector3();
const tmpV2 = new THREE.Vector3();
const tmpQ = new THREE.Quaternion();
const tmpM = new THREE.Matrix4();

/* ---------------------------------------------------------------- UI */

const MOOD_LABEL = { dusk: '暮色 · 暖风正好', day: '晴日 · 虹光全开', night: '夜幕 · 灯火巡游' };

function buildLaneUI() {
  LANES.forEach((lane, i) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'lane-row';
    row.dataset.lane = String(i);
    row.innerHTML = `<i style="background:${`#${lane.color.toString(16).padStart(6, '0')}`};color:${`#${lane.glow.toString(16).padStart(6, '0')}`}"></i><span>0${i + 1} ${lane.name}</span><small>${lane.en}</small><em></em>`;
    row.addEventListener('click', () => selectLane(i, true));
    els.laneRows.appendChild(row);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'lane-dot';
    dot.dataset.lane = String(i);
    dot.style.background = `#${lane.color.toString(16).padStart(6, '0')}`;
    dot.style.color = `#${lane.glow.toString(16).padStart(6, '0')}`;
    dot.setAttribute('aria-label', `选择${lane.name}滑道`);
    dot.addEventListener('click', () => selectLane(i, true));
    els.laneDots.appendChild(dot);
  });
  els.tokenTotal.textContent = '14';
}
buildLaneUI();

function selectLane(index, announce = false) {
  const lane = LANES[index];
  if (!lane) return;
  selectedLane = index;
  world.setActiveLane(index);
  if (phase === 'explore' || phase === 'intro') world.setHover(index);
  document.querySelectorAll('.lane-row').forEach((el) => el.classList.toggle('active', Number(el.dataset.lane) === index));
  document.querySelectorAll('.lane-dot').forEach((el) => el.classList.toggle('active', Number(el.dataset.lane) === index));
  els.laneNo.textContent = String(index + 1).padStart(2, '0');
  els.laneEn.textContent = lane.en;
  els.laneName.textContent = `${lane.name} · ${['晚霞风', '正午阳光', '碎金日影', '薄荷树影', '湖心微风', '星屑夜色'][index]}`;
  els.laneNote.textContent = lane.note;
  els.boardBtn.querySelector('small').textContent = `CLIMB TO LANE 0${index + 1}`;
  els.boardBtn.querySelector('strong').textContent = `登上${lane.name}彩虹`;
  if (announce) {
    audio.init();
    audio.click();
    world.setHover(index);
  }
}

function setLaneFromWorld() {
  if (hoverLane < 0 || phase !== 'explore') return;
  if (hoverLane !== selectedLane) {
    selectLane(hoverLane, false);
    document.body.style.cursor = 'pointer';
  }
}

function toast(text, duration = 2200) {
  els.toast.textContent = text;
  els.toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove('show'), duration);
}

function showLoadingDone() {
  els.loadBar.style.width = '100%';
  window.setTimeout(() => {
    els.loading.classList.add('is-done');
    introStartedAt = performance.now();
  }, 320);
}

/* ---------------------------------------------------------------- camera */

function placeOrbit(yaw, pitch, radius, target = orbit.target) {
  const cp = Math.cos(pitch);
  camera.position.set(
    target.x + Math.sin(yaw) * cp * radius,
    target.y + Math.sin(pitch) * radius,
    target.z + Math.cos(yaw) * cp * radius,
  );
  camera.up.set(0, 1, 0);
  camera.lookAt(target);
}

function updateIntroCamera(dt) {
  const t = (performance.now() - introStartedAt) / 1000;
  const yaw = 0.18 + Math.sin(t * 0.055) * 0.1 + t * 0.003;
  const radius = 39 + Math.sin(t * 0.08) * 1.0;
  placeOrbit(yaw, 0.17, radius);
}

function updateExploreCamera(dt) {
  if (!dragging) orbit.yaw += dt * 0.012;
  placeOrbit(orbit.yaw, orbit.pitch, orbit.radius);
}

function climbPoints(lane) {
  const x = LANES.length ? LANE_CENTER(lane) : 0;
  return [
    new THREE.Vector3(x * 0.15, 2.5, 26.5),
    new THREE.Vector3(4.8, 2.55, 20.0),
    new THREE.Vector3(10.9, 2.65, 13.0),
    new THREE.Vector3(11.95, 3.25, 8.3),
    new THREE.Vector3(11.95, 7.2, 4.4),
    new THREE.Vector3(11.95, 11.1, 0.75),
    new THREE.Vector3(10.8, 12.55, -0.55),
    new THREE.Vector3(8.5, 12.98, -1.0),
    new THREE.Vector3(x, 12.95, 0.3),
  ];
}

function LANE_CENTER(lane) {
  return world.laneCenters[lane];
}

function startRide() {
  if (phase === 'riding') return;
  selectLane(selectedLane, false);
  audio.init();
  audio.startAmbience();
  phase = 'riding';
  ride.lane = selectedLane;
  ride.phase = 'climb';
  ride.time = 0;
  ride.topTime = 0;
  ride.slideProgress = 0;
  ride.slideElapsed = 0;
  ride.speed = 1;
  ride.lateral = 0;
  ride.lateralVel = 0;
  ride.tokens = 0;
  ride.lastCount = null;
  ride.tokenFlags = Array(14).fill(false);
  ride.shake = 0;
  ride.climbCurve = new THREE.CatmullRomCurve3(climbPoints(ride.lane), false, 'catmullrom', 0.28);
  ride.finishTime = 0;

  els.rideLaneLabel.textContent = `${String(ride.lane + 1).padStart(2, '0')} 道 · ${LANES[ride.lane].name}`;
  els.ridePhase.textContent = '登顶中';
  els.tokenCount.textContent = '0';
  els.speedValue.textContent = '0';
  els.speedFill.style.width = '0%';
  els.progressFill.style.width = '0%';
  els.progressDot.style.left = '0%';
  els.progressPct.textContent = '0%';
  els.progressLabel.textContent = '正在登顶';
  els.ridePrompt.classList.add('hide');
  els.ridePromptNote.textContent = '松开也不会停下';
  els.countdown.classList.add('is-hidden');
  els.rideHud.classList.remove('is-hidden');
  els.result.classList.add('is-hidden');
  els.explore.classList.add('is-hidden');
  els.topbar.classList.add('is-hidden');
  els.speedLines.classList.remove('on');
  document.body.classList.add('ride-mode');
  cameraFov = isCoarse ? 64 : 55;
  camera.fov = cameraFov;
  camera.updateProjectionMatrix();

  world.closeGates();
  world.activateTokens(ride.lane);
  world.hideTokens();
  world.setActiveLane(ride.lane);

  els.rideFade.classList.add('on');
  window.setTimeout(() => els.rideFade.classList.remove('on'), 460);
  audio.whoosh(0.45);

  // position camera instantly at the start of the promenade
  const p0 = ride.climbCurve.getPointAt(0);
  camera.position.copy(p0);
  camera.up.set(0, 1, 0);
  camera.lookAt(0, 8.4, -1);
}

function returnToExplore(showToast = true) {
  phase = 'explore';
  els.rideHud.classList.add('is-hidden');
  els.result.classList.add('is-hidden');
  els.countdown.classList.add('is-hidden');
  els.speedLines.classList.remove('on');
  els.explore.classList.remove('is-hidden');
  els.topbar.classList.remove('is-hidden');
  els.rideFade.classList.remove('on');
  document.body.classList.remove('ride-mode');
  world.closeGates();
  world.hideTokens();
  world.setHover(selectedLane);
  audio.setWind(0);
  orbit.yaw = 0.3;
  orbit.pitch = 0.17;
  orbit.radius = 39;
  camera.up.set(0, 1, 0);
  cameraFov = isCoarse ? 62 : 48;
  camera.fov = cameraFov;
  camera.updateProjectionMatrix();
  updateExploreCamera(0);
  if (showToast) toast('已回到滑道前 · 随时可以再选一条彩虹');
}

function openResult() {
  phase = 'result';
  els.rideHud.classList.add('is-hidden');
  els.speedLines.classList.remove('on');
  els.result.classList.remove('is-hidden');
  document.body.classList.remove('ride-mode');

  const lane = LANES[ride.lane];
  const time = ride.slideElapsed;
  const speed = Math.round(49 + ride.speed * 18 + ride.tokens * 1.25);
  els.resultTitle.textContent = ['一路绯红', '琥珀色的风', '滑入金色', '薄荷色的夏天', '湖心飞渡', '紫色星屑'][ride.lane];
  els.resultSub.textContent = `${lane.name} · 0${ride.lane + 1} 道 · ${lane.ride}`;
  els.resultTime.innerHTML = `${time.toFixed(1)}<small>s</small>`;
  els.resultSpeed.innerHTML = `${speed}<small>km/h</small>`;
  els.resultTokens.innerHTML = `${ride.tokens}<small>/ 14</small>`;
  if (ride.tokens >= 13) els.resultBadge.textContent = '本场称号 · 虹光收集家';
  else if (ride.tokens >= 9) els.resultBadge.textContent = '本场称号 · 追光的人';
  else if (ride.tokens >= 5) els.resultBadge.textContent = '本场称号 · 风的孩子';
  else els.resultBadge.textContent = '本场称号 · 第一次滑彩虹';
  audio.finishFanfare();
  els.rideFade.classList.remove('on');
}

/* ---------------------------------------------------------------- input */

function ensureAudio() {
  audio.init();
  if (!audio.ambienceOn) audio.startAmbience();
}

function enterExplore() {
  if (entered) return;
  entered = true;
  phase = 'explore';
  els.intro.classList.add('is-hidden');
  els.topbar.classList.remove('is-hidden');
  els.explore.classList.remove('is-hidden');
  selectLane(selectedLane, false);
  world.setHover(selectedLane);
  ensureAudio();
  audio.click();
  updateExploreCamera(0);
}

els.enterBtn.addEventListener('click', enterExplore);
els.lookBtn.addEventListener('click', enterExplore);
els.prevLane.addEventListener('click', () => selectLane((selectedLane + LANES.length - 1) % LANES.length, true));
els.nextLane.addEventListener('click', () => selectLane((selectedLane + 1) % LANES.length, true));
els.boardBtn.addEventListener('click', () => { audio.click(); startRide(); });
els.againBtn.addEventListener('click', () => { els.result.classList.add('is-hidden'); startRide(); });
els.changeBtn.addEventListener('click', () => returnToExplore(false));

els.exitRide.addEventListener('click', () => {
  audio.click();
  returnToExplore(false);
  toast('已离开滑道 · 想滑的时候再来');
});

els.soundBtn.addEventListener('click', () => {
  ensureAudio();
  const muted = audio.toggleMuted();
  els.soundBtn.classList.toggle('sound-off', muted);
  toast(muted ? '声音已静音' : '声音已开启');
});

els.moodBtn.addEventListener('click', () => {
  const mood = world.cycleMood();
  els.moodBtn.classList.remove('mood-dusk', 'mood-day', 'mood-night');
  els.moodBtn.classList.add(`mood-${mood.name}`);
  els.moodFlash.classList.remove('flash');
  void els.moodFlash.offsetWidth;
  els.moodFlash.classList.add('flash');
  toast(MOOD_LABEL[mood.name]);
});

els.resetBtn.addEventListener('click', () => {
  orbit.yaw = 0.3;
  orbit.pitch = 0.17;
  orbit.radius = 39;
  updateExploreCamera(0);
  toast('已回到滑道前的全景');
});

els.helpBtn.addEventListener('click', () => { audio.click(); els.help.classList.remove('is-hidden'); });
els.closeHelp.addEventListener('click', () => { audio.click(); els.help.classList.add('is-hidden'); });
els.helpGo.addEventListener('click', () => { audio.click(); els.help.classList.add('is-hidden'); });
els.help.addEventListener('click', (e) => { if (e.target === els.help) els.help.classList.add('is-hidden'); });

els.fullBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    if (!els.help.classList.contains('is-hidden')) { els.help.classList.add('is-hidden'); return; }
    if (phase === 'riding') { returnToExplore(false); return; }
    if (phase === 'result') { returnToExplore(false); return; }
  }
  if (phase === 'riding') {
    keys.add(e.code);
    if (['KeyW', 'ArrowUp', 'Space', 'KeyA', 'KeyD', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  }
  if (e.code === 'Enter' && phase === 'intro') enterExplore();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => { keys.clear(); boostPointer = false; });

els.canvas.addEventListener('pointerdown', (e) => {
  ensureAudio();
  pointerDown = { x: e.clientX, y: e.clientY, time: performance.now() };
  dragMoved = 0;
  boostPointer = true;
  if (phase === 'explore') {
    dragging = true;
    els.canvas.setPointerCapture?.(e.pointerId);
  }
});
window.addEventListener('pointermove', (e) => {
  if (!pointerDown) return;
  const dx = e.clientX - pointerDown.x;
  const dy = e.clientY - pointerDown.y;
  pointerDown.x = e.clientX;
  pointerDown.y = e.clientY;
  dragMoved += Math.abs(dx) + Math.abs(dy);
  if (phase === 'explore' && dragging) {
    orbit.yaw -= dx * 0.0042;
    orbit.pitch = clamp(orbit.pitch + dy * 0.0026, 0.03, 0.55);
  } else if (phase === 'riding' && ride.phase === 'slide') {
    ride.lateralVel += dx * 0.0008;
  }
});
window.addEventListener('pointerup', (e) => {
  const wasMoved = dragMoved > 8;
  const wasExplore = phase === 'explore';
  pointerDown = null;
  dragging = false;
  boostPointer = false;
  if (wasExplore && !wasMoved) {
    const lane = pickLane(e.clientX, e.clientY);
    if (lane >= 0) selectLane(lane, true);
  }
});
els.canvas.addEventListener('pointerleave', () => { boostPointer = false; });
els.canvas.addEventListener('wheel', (e) => {
  if (phase !== 'explore') return;
  e.preventDefault();
  orbit.radius = clamp(orbit.radius + e.deltaY * 0.018, 34, 62);
}, { passive: false });

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
function pickLane(clientX, clientY) {
  pointer.x = (clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(world.slideMeshes, false);
  return hits.length ? hits[0].object.userData.lane : -1;
}
els.canvas.addEventListener('pointermove', (e) => {
  if (phase !== 'explore' || pointerDown) return;
  const lane = pickLane(e.clientX, e.clientY);
  if (lane !== hoverLane) {
    hoverLane = lane;
    if (lane >= 0) world.setHover(lane);
    els.canvas.style.cursor = lane >= 0 ? 'pointer' : 'grab';
  }
});

window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(PR);
  renderer.setSize(w, h);
  composer.setSize(w, h);
});

/* ---------------------------------------------------------------- ride update */

function activeBoost() {
  return keys.has('KeyW') || keys.has('ArrowUp') || boostPointer;
}

function updateCountdown() {
  const remain = TOP_HOLD - ride.topTime;
  let value;
  if (remain > 1.8) value = 3;
  else if (remain > 0.9) value = 2;
  else value = 1;
  if (value !== ride.lastCount) {
    ride.lastCount = value;
    els.countdown.classList.remove('is-hidden', 'pop');
    els.countdown.innerHTML = `<span>${value}</span><small>${value === 1 ? 'HOLD ON' : 'READY'}</small>`;
    void els.countdown.offsetWidth;
    els.countdown.classList.add('pop');
    audio.countdown(value);
  }
}

function updateRide(dt) {
  ride.time += dt;

  if (ride.phase === 'climb') {
    const t = clamp(ride.time / CLIMB_END, 0, 1);
    const e = easeInOut(t);
    const p = ride.climbCurve.getPointAt(e);
    const ahead = ride.climbCurve.getPointAt(Math.min(1, e + 0.035));
    camera.position.copy(p);
    camera.position.y += Math.sin(ride.time * 9.4) * 0.018 * (1 - t * 0.5);
    camera.up.set(0, 1, 0);
    camera.lookAt(ahead.x, ahead.y + 0.55, ahead.z);
    cameraFov = damp(cameraFov, 58, 2, dt);
    camera.fov = cameraFov;
    camera.updateProjectionMatrix();

    els.ridePhase.textContent = t > 0.72 ? '塔顶就在前面' : '沿着鎏金阶梯登顶';
    els.progressLabel.textContent = t < 0.55 ? '正在登顶' : '登上塔顶';
    const pct = Math.round(e * 36);
    els.progressFill.style.width = `${pct}%`;
    els.progressDot.style.left = `${pct}%`;
    els.progressPct.textContent = `${pct}%`;
    if (t >= 1) {
      ride.phase = 'top';
      ride.topTime = 0;
      ride.lastCount = null;
      world.openGate(ride.lane);
      els.ridePhase.textContent = '塔顶 · 准备出发';
      els.progressLabel.textContent = '塔顶待发';
      els.progressFill.style.width = '42%';
      els.progressDot.style.left = '42%';
      els.progressPct.textContent = '42%';
      audio.bell(0, 0.05);
    }
  } else if (ride.phase === 'top') {
    ride.topTime += dt;
    const p = new THREE.Vector3(LANE_CENTER(ride.lane), 13.05, 1.55 + Math.sin(ride.topTime * 0.8) * 0.015);
    camera.position.copy(p);
    camera.up.set(0, 1, 0);
    const lip = world.lanePoint(ride.lane, 0.3, new THREE.Vector3());
    lip.y += 0.45;
    camera.lookAt(lip);
    cameraFov = damp(cameraFov, 66, 2.5, dt);
    camera.fov = cameraFov;
    camera.updateProjectionMatrix();
    updateCountdown();
    if (ride.topTime >= TOP_HOLD) {
      ride.phase = 'slide';
      ride.slideProgress = 0;
      ride.slideElapsed = 0;
      ride.speed = 1;
      ride.lateral = 0;
      ride.lateralVel = 0;
      els.countdown.classList.add('is-hidden');
      els.ridePhase.textContent = '滑行中 · 虹光滑道';
      els.progressLabel.textContent = '正在滑行';
      els.ridePrompt.classList.remove('hide');
      els.ridePromptNote.textContent = '按住 W / ↑ 加速';
      els.speedLines.classList.add('on');
      audio.go();
      world.activateTokens(ride.lane);
      camera.up.set(0, 1, 0);
    }
  } else if (ride.phase === 'slide') {
    const boost = activeBoost();
    ride.speed = damp(ride.speed, boost ? 1.3 : 1.0, 3.2, dt);
    ride.slideElapsed += dt;
    ride.slideProgress += (dt / SLIDE_BASE_DURATION) * ride.speed;
    if (boost) ride.shake = Math.min(1, ride.shake + dt * 2.2);
    else ride.shake = Math.max(0, ride.shake - dt * 1.6);

    // lateral steering
    const steer = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
    ride.lateralVel += steer * dt * 1.9;
    ride.lateralVel *= Math.pow(0.02, dt);
    ride.lateral = clamp(ride.lateral + ride.lateralVel, -0.62, 0.62);
    if (!steer) ride.lateral = damp(ride.lateral, 0, 0.8, dt);

    const prog = clamp(ride.slideProgress, 0, 1);
    const p = world.lanePoint(ride.lane, prog, new THREE.Vector3());
    const tan = world.laneTangent(ride.lane, prog, new THREE.Vector3());
    const n = world.laneNormal(ride.lane, prog, new THREE.Vector3());
    const side = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), tan).normalize();
    const camPos = p.clone().addScaledVector(n, 1.58).addScaledVector(side, ride.lateral * 0.92);
    const aheadProg = Math.min(1, prog + 0.05);
    const ahead = world.lanePoint(ride.lane, aheadProg, new THREE.Vector3())
      .addScaledVector(world.laneNormal(ride.lane, aheadProg, new THREE.Vector3()), 1.45)
      .addScaledVector(side, ride.lateral * 0.8);
    const shake = (0.012 + ride.speed * 0.008) * ride.shake + 0.003;
    camPos.x += Math.sin(ride.slideElapsed * 39.1) * shake;
    camPos.y += Math.sin(ride.slideElapsed * 47.7) * shake;
    camPos.z += Math.sin(ride.slideElapsed * 43.3) * shake;
    camera.position.copy(camPos);
    camera.up.set(0, 1, 0);
    camera.lookAt(ahead);
    camera.rotateZ(Math.sin(ride.slideElapsed * 3.4) * 0.012 * ride.speed);
    cameraFov = damp(cameraFov, 68 + (ride.speed - 1) * 22, 4, dt);
    camera.fov = cameraFov;
    camera.updateProjectionMatrix();

    // tokens
    for (let i = 0; i < 14; i++) {
      if (ride.tokenFlags[i]) continue;
      const tok = world.tokensByLane[ride.lane][i];
      if (!tok || tok.taken) continue;
      if (Math.abs(tok.t - prog) < 0.017 && Math.abs(tok.offset - ride.lateral) < 0.56) {
        if (world.collectToken(ride.lane, i)) {
          ride.tokenFlags[i] = true;
          ride.tokens++;
          els.tokenCount.textContent = String(ride.tokens);
          audio.bell(i % 6, 0.075);
          ride.hitFlash = 1;
        }
      }
    }
    ride.hitFlash = Math.max(0, ride.hitFlash - dt * 2.5);

    const pct = Math.round(42 + prog * 58);
    els.progressFill.style.width = `${pct}%`;
    els.progressDot.style.left = `${pct}%`;
    els.progressPct.textContent = `${pct}%`;
    els.speedValue.textContent = String(Math.round(34 + ride.speed * 22 + ride.shake * 5));
    els.speedFill.style.width = `${Math.min(100, (ride.speed - 0.82) / 0.55 * 100)}%`;
    audio.setWind(0.25 + ride.speed * 0.45);

    if (prog >= 1) {
      ride.phase = 'finish';
      ride.finishTime = 0;
      ride.finishFromPos.copy(camera.position);
      ride.finishFromQuat.copy(camera.quaternion);
      els.speedLines.classList.remove('on');
      els.ridePrompt.classList.add('hide');
      els.ridePhase.textContent = '到达 · 虹光终点';
      els.progressLabel.textContent = '已到达';
      els.progressFill.style.width = '100%';
      els.progressDot.style.left = '100%';
      els.progressPct.textContent = '100%';
      audio.setWind(0.12);
      audio.splash();
      els.rideFade.classList.add('on');
      window.setTimeout(() => els.rideFade.classList.remove('on'), 900);
    }
  } else if (ride.phase === 'finish') {
    ride.finishTime += dt;
    const e = easeOut(clamp(ride.finishTime / 2.4, 0, 1));
    const endPos = new THREE.Vector3(LANE_CENTER(ride.lane) * 0.25, 5.6, 27.5);
    camera.position.lerpVectors(ride.finishFromPos, endPos, e);
    tmpM.lookAt(camera.position, new THREE.Vector3(0, 8.6, 0.4), new THREE.Vector3(0, 1, 0));
    tmpQ.setFromRotationMatrix(tmpM);
    camera.quaternion.slerpQuaternions(ride.finishFromQuat, tmpQ, e);
    camera.up.set(0, 1, 0);
    cameraFov = damp(cameraFov, 54, 2, dt);
    camera.fov = cameraFov;
    camera.updateProjectionMatrix();

    if (ride.finishTime > 2.5) openResult();
  }
}

/* ---------------------------------------------------------------- intro / loading */

const moods = params.get('mood');
if (moods === 'day' || moods === 'night' || moods === 'dusk') {
  const idx = { dusk: 0, day: 1, night: 2 }[moods];
  world.setMood(idx);
  els.moodBtn.classList.add(`mood-${moods}`);
} else {
  els.moodBtn.classList.add('mood-dusk');
}
const laneParam = params.has('lane') ? Number(params.get('lane')) : 2;
if (Number.isInteger(laneParam) && laneParam >= 0 && laneParam < 6) selectLane(laneParam, false);
else selectLane(2, false);

setTimeout(() => showLoadingDone(), 700);

if (params.has('explore') && !params.has('ride')) {
  window.setTimeout(() => enterExplore(), 1500);
}

if (params.has('ride')) {
  window.setTimeout(() => {
    if (!entered) {
      entered = true;
      els.intro.classList.add('is-hidden');
      els.loading.classList.add('is-done');
      els.topbar.classList.add('is-hidden');
      els.explore.classList.add('is-hidden');
    }
    startRide();
  }, 1400);
}

if (params.has('seek')) {
  const target = Number(params.get('seek'));
  if (Number.isFinite(target)) {
    window.setTimeout(() => {
      if (!entered) { entered = true; els.intro.classList.add('is-hidden'); els.loading.classList.add('is-done'); }
      startRide();
      if (target > CLIMB_END) {
        ride.time = CLIMB_END;
        ride.phase = 'slide';
        ride.slideProgress = clamp((target - CLIMB_END - TOP_HOLD) / SLIDE_BASE_DURATION, 0, 1);
        ride.lateral = 0;
      } else {
        ride.time = clamp(target, 0, CLIMB_END);
      }
    }, 1500);
  }
}

if (params.has('pose')) {
  const pose = params.get('pose');
  window.setTimeout(() => {
    if (!entered) {
      entered = true;
      els.intro.classList.add('is-hidden');
      els.loading.classList.add('is-done');
      els.topbar.classList.add('is-hidden');
      els.explore.classList.add('is-hidden');
    }
    startRide();
    if (pose === 'climb') {
      ride.time = 5.2;
    } else if (pose === 'top') {
      ride.time = CLIMB_END;
      ride.phase = 'top';
      ride.topTime = 1.1;
      world.openGate(ride.lane);
      els.countdown.classList.remove('is-hidden');
      els.countdown.innerHTML = '<span>2</span><small>READY</small>';
    } else if (pose === 'slide') {
      ride.time = CLIMB_END;
      ride.phase = 'slide';
      ride.slideProgress = 0.52;
      ride.tokens = 6;
      world.openGate(ride.lane);
      els.speedLines.classList.add('on');
      els.ridePhase.textContent = '滑行中 · 虹光滑道';
      els.progressLabel.textContent = '正在滑行';
      els.ridePrompt.classList.remove('hide');
      els.tokenCount.textContent = '6';
    } else if (pose === 'result') {
      ride.slideElapsed = 8.6;
      ride.tokens = 10;
      ride.speed = 1.2;
      openResult();
    }
    updateRide(0);
  }, 1700);
}

window.addEventListener('pointerdown', ensureAudio, { once: true });

/* ---------------------------------------------------------------- render loop */

function frame(now) {
  requestAnimationFrame(frame);
  const raw = (now - lastFrame) / 1000;
  const dt = still ? 0 : Math.min(0.1, raw) * RATE;
  lastFrame = now;
  if (!still) elapsed += dt;

  if (phase === 'intro') updateIntroCamera(dt);
  else if (phase === 'explore') updateExploreCamera(dt);
  else if (phase === 'riding' || phase === 'result') {
    if (phase === 'riding') updateRide(dt);
  }

  world.update(dt, still ? 12.0 : elapsed, { time: still ? 12.0 : elapsed, hideSleds: phase === 'riding' });
  composer.render();
}

requestAnimationFrame((t) => {
  lastFrame = t;
  introStartedAt = performance.now();
  frame(t);
});

// debug / integration hook
window.__rainbow = {
  startRide,
  enterExplore,
  selectLane,
  setMood: (i) => world.setMood(i),
  returnToExplore,
  world,
  ride,
  get phase() { return phase; },
};
