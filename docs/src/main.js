import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createWorld, ISLAND_RADIUS } from './world.js';
import { Environment, Fireworks } from './effects.js';
import { AudioEngine } from './audio.js';
import { ATTRACTIONS, STARS, ZONES, PALETTES } from './data.js';

const $ = (id) => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeIn = (t) => t * t;
const isCoarse = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760;
const BASE_FOV = isCoarse ? 68 : 58;
const pixelBudget = isCoarse ? 1_600_000 : 3_200_000;
const PR = Math.max(1, Math.min(window.devicePixelRatio || 1, isCoarse ? 1.35 : 1.7, Math.sqrt(pixelBudget / (window.innerWidth * window.innerHeight))));
const UP = new THREE.Vector3(0, 1, 0);

const canvas = $('world');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: !isCoarse,
  alpha: false,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: true,
});
renderer.setPixelRatio(PR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
renderer.shadowMap.enabled = false;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1800);
camera.rotation.order = 'YXZ';

const environment = new Environment(scene, renderer);
const world = createWorld(scene, renderer);
const fireworks = new Fireworks(scene);
const audio = new AudioEngine();
const rideLight = new THREE.PointLight(0xffd4ad, 0, 34, 2);
scene.add(rideLight);

environment.setPalette(PALETTES.night, true);
fireworks.enabled = true;
fireworks.autoInterval = 26;
fireworks.autoTimer = 14;
fireworks.onBurst = () => audio.firework();

const composer = new EffectComposer(renderer);
composer.setPixelRatio(PR);
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), PALETTES.night.bloom, 0.5, 0.86);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// state
let phase = 'intro';
let mode = 'night';
let started = false;
let uiLocked = true;
let transitioning = false;
let elapsed = 0;
let lastTime = performance.now();
let activeRide = null;
let currentAttraction = null;
let nearestAttraction = null;
let distanceCheckClock = 0;
let minimapClock = 0;
let bigMapClock = 0;
let hoverMapId = null;
let mapHighlight = null;
let mapHighlightTimer = 0;
let introSeconds = 72;
let currentZone = '';
let collectedStars = new Set();
let finaleShown = false;
let introHidden = false;
let titleCardTimer = 0;
let pirateOpen = false;
let parkMutedBeforePirate = null;
let designPortal = null;
let parkMutedBeforeDesign = null;

const player = {
  position: new THREE.Vector3(0, 0, 102),
  yaw: 0,
  pitch: -0.025,
  bob: 0,
  moving: false,
};
const keys = new Set();
const joystick = { x: 0, y: 0, pointer: null };
const rideState = {
  id: null,
  t: 0,
  elapsed: 0,
  duration: 10,
  saved: null,
  ended: false,
  camera: new THREE.Vector3(),
  target: new THREE.Vector3(),
};
let teacupButtonDir = 0;
let teacupInputDir = 0;
let teacupDrag = null;
const teacupCameraPos = new THREE.Vector3();
const teacupCameraLook = new THREE.Vector3();
const tmpV = new THREE.Vector3();
const tmpV2 = new THREE.Vector3();
const tmpColor = new THREE.Color();
const tmpColor2 = new THREE.Color();

const lagoonCamCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(24, 4.5, -47),
  new THREE.Vector3(7, 9.0, -60),
  new THREE.Vector3(0, 14.0, -80),
  new THREE.Vector3(8, 17.0, -101),
  new THREE.Vector3(28, 16.0, -108),
  new THREE.Vector3(46, 11.0, -93),
  new THREE.Vector3(48, 7.0, -70),
  new THREE.Vector3(34, 5.5, -55),
], false, 'catmullrom', 0.4);

// UI references
const els = {
  intro: $('intro'),
  enterBtn: $('enterBtn'),
  introMapBtn: $('introMapBtn'),
  introClock: $('introClock'),
  loadingBar: $('loadingBar'),
  topbar: $('topbar'),
  parkPhase: $('parkPhase'),
  parkTime: $('parkTime'),
  soundBtn: $('soundBtn'),
  timeBtn: $('timeBtn'),
  cameraBtn: $('cameraBtn'),
  helpBtn: $('helpBtn'),
  mapBtn: $('mapBtn'),
  questPanel: $('questPanel'),
  questToggle: $('questToggle'),
  starCount: $('starCount'),
  starPips: $('starPips'),
  starHints: $('starHints'),
  miniWrap: $('miniWrap'),
  minimap: $('minimap'),
  controlHint: $('controlHint'),
  interactPrompt: $('interactPrompt'),
  promptName: $('promptName'),
  ridePanel: $('ridePanel'),
  closeRide: $('closeRide'),
  rideHero: $('rideHero'),
  rideIcon: $('rideIcon'),
  rideKicker: $('rideKicker'),
  rideName: $('rideName'),
  rideEn: $('rideEn'),
  rideDesc: $('rideDesc'),
  rideTags: $('rideTags'),
  rideThrill: $('rideThrill'),
  rideDuration: $('rideDuration'),
  rideHeight: $('rideHeight'),
  rideWait: $('rideWait'),
  rideGo: $('rideGo'),
  rideLocate: $('rideLocate'),
  rideHud: $('rideHud'),
  rideHudLabel: $('rideHudLabel'),
  rideProgressBar: $('rideProgressBar'),
  rideTitleCard: $('rideTitleCard'),
  rtIcon: $('rtIcon'),
  rtName: $('rtName'),
  rtLine: $('rtLine'),
  exitRideBtn: $('exitRideBtn'),
  mapOverlay: $('mapOverlay'),
  closeMap: $('closeMap'),
  bigmap: $('bigmap'),
  mapAttractions: $('mapAttractions'),
  helpOverlay: $('helpOverlay'),
  closeHelp: $('closeHelp'),
  helpStart: $('helpStart'),
  finaleOverlay: $('finaleOverlay'),
  finaleClose: $('finaleClose'),
  toast: $('toast'),
  banner: $('banner'),
  locationName: $('locationName'),
  mobileControls: $('mobileControls'),
  joystick: $('joystick'),
  joystickKnob: document.querySelector('.joystick-knob'),
  fade: $('fade'),
  photoFlash: $('photoFlash'),
  pirateOverlay: $('pirateOverlay'),
  pirateFrame: $('pirateFrame'),
  pirateLoading: $('pirateLoading'),
  closePirate: $('closePirate'),
  balloonOverlay: $('balloonOverlay'),
  balloonFrame: $('balloonFrame'),
  balloonLoading: $('balloonLoading'),
  closeBalloon: $('closeBalloon'),
  rainbowOverlay: $('rainbowOverlay'),
  rainbowFrame: $('rainbowFrame'),
  rainbowLoading: $('rainbowLoading'),
  closeRainbow: $('closeRainbow'),
  teacupRideControls: $('teacupRideControls'),
  teacupRpm: $('teacupRpm'),
  teacupPlatform: $('teacupPlatform'),
  teacupLeft: $('teacupLeft'),
  teacupRight: $('teacupRight'),
};
const markerEls = new Map();
const starEls = new Map();

// initial UI
ATTRACTIONS.forEach((a) => {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'ride-marker';
  el.setAttribute('aria-label', `查看${a.name}`);
  el.innerHTML = `<span class="rm-icon">${a.icon}</span><span class="rm-text"><strong>${a.name}${a.isNew ? '<em class="rm-new">NEW</em>' : ''}</strong><small>${a.kicker.split(' · ')[0]} · ${a.wait}</small></span>`;
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    if (phase !== 'explore' || transitioning) return;
    audio.click();
    openRidePanel(a.id);
  });
  $('app').appendChild(el);
  markerEls.set(a.id, el);
});
STARS.forEach((s) => {
  const el = document.createElement('div');
  el.className = 'star-marker';
  el.textContent = '✦';
  $('app').appendChild(el);
  starEls.set(s.id, el);
});
ATTRACTIONS.forEach((a) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.innerHTML = `<span>${a.icon}</span>${a.name}`;
  b.addEventListener('click', () => {
    mapHighlight = a.id;
    mapHighlightTimer = 2.4;
    closeMap();
    teleportTo(a.id);
  });
  els.mapAttractions.appendChild(b);
});
els.enterBtn.disabled = false;
els.loadingBar.querySelector('span').style.width = '18%';

function updateModeUI() {
  const p = PALETTES[mode];
  els.parkPhase.textContent = p.label;
  els.parkTime.textContent = p.time;
  els.timeBtn.classList.toggle('day', mode !== 'night');
  els.timeBtn.dataset.tip = mode === 'night' ? '切换暮色' : mode === 'dusk' ? '切换晴日' : '切换夜幕';
}
updateModeUI();

// countdown
const introTimer = setInterval(() => {
  if (started && introHidden) return clearInterval(introTimer);
  introSeconds = Math.max(0, introSeconds - 1);
  const mm = String(Math.floor(introSeconds / 60)).padStart(2, '0');
  const ss = String(introSeconds % 60).padStart(2, '0');
  els.introClock.textContent = introSeconds > 0 ? `距灯光巡游 ${mm}:${ss}` : '灯光巡游 · 即将开始';
}, 1000);

// saved quest
try {
  const saved = JSON.parse(localStorage.getItem('astralia-progress') || '{}');
  if (Array.isArray(saved.stars)) {
    saved.stars.forEach((id) => {
      if (id >= 0 && id < 5) collectedStars.add(id);
    });
  }
  finaleShown = !!saved.finale;
} catch (e) { /* ignore */ }
collectedStars.forEach((id) => world.stars.collect(id));
updateQuestUI(false);

// utilities
let toastTimer = 0;
function showToast(message, duration = 2800) {
  els.toast.innerHTML = message;
  els.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), duration);
}

let bannerTimer = 0;
function showBanner(kicker, name) {
  els.banner.querySelector('span').textContent = kicker;
  els.locationName.textContent = name;
  els.banner.classList.add('show');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => els.banner.classList.remove('show'), 2800);
}

function refreshLock() {
  const modal = els.mapOverlay.classList.contains('open') || els.helpOverlay.classList.contains('open') || els.finaleOverlay.classList.contains('open') || els.ridePanel.classList.contains('open');
  uiLocked = modal || transitioning || phase !== 'explore' || pirateOpen || !!designPortal;
  document.body.classList.toggle('modal-open', modal);
  if (uiLocked) els.interactPrompt.classList.add('hidden');
}

function screenTransition(fn) {
  if (transitioning) return false;
  transitioning = true;
  refreshLock();
  els.fade.classList.add('on');
  setTimeout(() => {
    fn();
    setTimeout(() => {
      els.fade.classList.remove('on');
      transitioning = false;
      refreshLock();
    }, 160);
  }, 380);
  return true;
}

function getAttraction(id) {
  return ATTRACTIONS.find((a) => a.id === id);
}

function setPlayerFromAttraction(id) {
  const a = getAttraction(id);
  if (!a) return;
  const { x, z, lookAt } = a.teleport;
  player.position.set(x, 0, z);
  const dx = lookAt[0] - x;
  const dz = lookAt[2] - z;
  player.yaw = Math.atan2(-dx, -dz);
  player.pitch = clamp(Math.atan2(lookAt[1] - 1.7, Math.hypot(dx, dz)), -1.05, 0.78);
  updateExploreCameraImmediate();
}

function updateExploreCameraImmediate() {
  camera.up.set(0, 1, 0);
  camera.rotation.order = 'YXZ';
  camera.rotation.set(player.pitch, player.yaw, 0);
  camera.position.set(player.position.x, 1.7 + player.bob, player.position.z);
  camera.fov = BASE_FOV;
  camera.updateProjectionMatrix();
}

function teleportTo(id) {
  if (phase !== 'explore' || transitioning) return;
  const a = getAttraction(id);
  if (!a) return;
  closeRidePanel();
  closeMap();
  closeHelp();
  audio.click();
  screenTransition(() => {
    setPlayerFromAttraction(id);
    mapHighlight = id;
    mapHighlightTimer = 2.4;
    showBanner('NOW ARRIVING', a.name);
    showToast(`已抵达 <b>${a.name}</b> · ${isCoarse ? '点击设施提示查看' : '靠近后按 E 体验'}`, 3200);
    nearestAttraction = null;
  });
}

function openMap() {
  if (phase === 'intro') {
    enterPark({ openMapAfter: true });
    return;
  }
  if (phase !== 'explore' || transitioning) return;
  closeRidePanel();
  closeHelp();
  closeFinale();
  els.mapOverlay.classList.add('open');
  els.mapOverlay.setAttribute('aria-hidden', 'false');
  els.interactPrompt.classList.add('hidden');
  refreshLock();
  drawMap(els.bigmap, true);
  audio.click();
}
function closeMap() {
  if (!els.mapOverlay.classList.contains('open')) return;
  els.mapOverlay.classList.remove('open');
  els.mapOverlay.setAttribute('aria-hidden', 'true');
  refreshLock();
}

function openHelp() {
  if (phase !== 'explore' || transitioning) return;
  closeMap();
  closeRidePanel();
  closeFinale();
  els.helpOverlay.classList.add('open');
  els.helpOverlay.setAttribute('aria-hidden', 'false');
  refreshLock();
  audio.click();
}
function closeHelp() {
  if (!els.helpOverlay.classList.contains('open')) return;
  els.helpOverlay.classList.remove('open');
  els.helpOverlay.setAttribute('aria-hidden', 'true');
  refreshLock();
}

function closeFinale() {
  if (!els.finaleOverlay.classList.contains('open')) return;
  els.finaleOverlay.classList.remove('open');
  els.finaleOverlay.setAttribute('aria-hidden', 'true');
  refreshLock();
}

function openRidePanel(id) {
  const a = getAttraction(id);
  if (!a || phase !== 'explore') return;
  currentAttraction = id;
  closeMap();
  closeHelp();
  closeFinale();
  els.rideHero.style.background = `linear-gradient(150deg, ${a.colors[0]} 2%, ${a.colors[1]} 100%)`;
  els.rideIcon.textContent = a.icon;
  els.rideKicker.textContent = a.kicker;
  els.rideName.textContent = a.name;
  els.rideEn.textContent = a.en;
  els.rideDesc.textContent = a.desc;
  els.rideTags.innerHTML = a.tags.map((t) => `<span>${t}</span>`).join('');
  els.rideThrill.textContent = `${'●'.repeat(a.thrill)}${'○'.repeat(5 - a.thrill)}`;
  els.rideDuration.textContent = a.duration;
  els.rideHeight.textContent = a.height;
  els.rideWait.textContent = a.wait;
  els.rideGo.querySelector('span').textContent = id === 'teacups' ? '进入茶杯 · 亲手操控' : '开始沉浸体验';
  els.ridePanel.classList.add('open');
  els.ridePanel.setAttribute('aria-hidden', 'false');
  els.interactPrompt.classList.add('hidden');
  refreshLock();
}
function closeRidePanel() {
  if (!els.ridePanel.classList.contains('open')) return;
  els.ridePanel.classList.remove('open');
  els.ridePanel.setAttribute('aria-hidden', 'true');
  currentAttraction = null;
  refreshLock();
}

// intro, transitions
function enterPark({ openMapAfter = false } = {}) {
  if (started) return;
  started = true;
  audio.init();
  els.enterBtn.disabled = true;
  screenTransition(() => {
    els.intro.classList.add('hidden');
    introHidden = true;
    phase = 'explore';
    player.position.set(-19, 0, 23);
    player.yaw = Math.atan2(29, -9);
    player.pitch = 0.16;
    player.bob = 0;
    keys.clear();
    updateExploreCameraImmediate();
    els.topbar.classList.remove('hidden');
    els.questPanel.classList.remove('hidden');
    els.miniWrap.classList.remove('hidden');
    if (!isCoarse) els.controlHint.classList.remove('hidden');
    if (isCoarse) {
      els.mobileControls.classList.remove('hidden');
      els.questPanel.classList.add('collapsed');
      els.questToggle.setAttribute('aria-expanded', 'false');
    }
    currentZone = '星梦广场';
    refreshLock();
    setTimeout(() => {
      if (phase === 'explore' && started) showBanner('THE CAROUSEL IS RUNNING', '星辉旋转木马');
    }, 380);
    showToast(isCoarse ? '木马正在运行 · 点击设施提示开始体验，摇杆自由漫步' : '木马正在运行 · 按 E 开始沉浸体验，WASD 自由漫步', 5200);
    fireworks.autoTimer = 16;
    if (openMapAfter) setTimeout(openMap, 850);
  });
}

function setMode(next, silent = false, instant = false) {
  if (!PALETTES[next] || next === mode) return;
  mode = next;
  environment.setPalette(PALETTES[mode], instant);
  fireworks.enabled = mode !== 'day';
  if (mode !== 'day') fireworks.autoTimer = Math.max(fireworks.autoTimer, 8);
  updateModeUI();
  audio.click();
  if (instant) {
    const p = PALETTES[mode];
    lightState.hemi = p.hemiIntensity;
    lightState.dir = p.dirIntensity;
    world.hemi.intensity = p.hemiIntensity;
    world.hemi.color.setHex(p.hemiSky);
    world.hemi.groundColor.setHex(p.hemiGround);
    world.dirLight.intensity = p.dirIntensity;
    world.dirLight.color.setHex(p.dir);
    world.ambient.intensity = p.ambient ?? 0.62;
    world.ambient.color.setHex(p.ambientColor ?? 0x2c3550);
    bloom.strength = p.bloom;
  }
  if (started && !silent) showToast(`已切换至 <b>${PALETTES[mode].name}</b> · ${mode === 'day' ? '阳光下的乐园同样精彩' : '灯光与焰火已就位'}`, 2600);
}

els.enterBtn.addEventListener('click', () => enterPark());
els.introMapBtn.addEventListener('click', () => enterPark({ openMapAfter: true }));
els.mapBtn.addEventListener('click', () => { if (els.mapOverlay.classList.contains('open')) closeMap(); else openMap(); });
els.miniWrap.addEventListener('click', openMap);
els.closeMap.addEventListener('click', closeMap);
els.closeHelp.addEventListener('click', closeHelp);
els.helpStart.addEventListener('click', closeHelp);
els.helpBtn.addEventListener('click', openHelp);
els.cameraBtn.addEventListener('click', takePhoto);
els.closeRide.addEventListener('click', closeRidePanel);
els.rideLocate.addEventListener('click', () => {
  const id = currentAttraction;
  mapHighlight = id;
  mapHighlightTimer = 2.4;
  closeRidePanel();
  openMap();
});
els.rideGo.addEventListener('click', () => {
  if (!currentAttraction) return;
  const id = currentAttraction;
  closeRidePanel();
  startRide(id);
});
els.timeBtn.addEventListener('click', () => {
  const order = ['night', 'dusk', 'day'];
  setMode(order[(order.indexOf(mode) + 1) % order.length]);
});
els.soundBtn.addEventListener('click', () => {
  audio.init();
  audio.setMuted(!audio.muted);
  els.soundBtn.classList.toggle('muted', audio.muted);
  showToast(audio.muted ? '已静音 · 星夜安静了下来' : '声音已开启 · 建议佩戴耳机', 1800);
  if (!audio.muted) audio.click();
});
els.questToggle.addEventListener('click', () => {
  const collapsed = els.questPanel.classList.toggle('collapsed');
  els.questToggle.setAttribute('aria-expanded', String(!collapsed));
  audio.click();
});
els.exitRideBtn.addEventListener('click', () => endRide(true));
els.finaleClose.addEventListener('click', () => {
  closeFinale();
  audio.collectStar();
});
els.helpStart.addEventListener('click', () => audio.click());
els.bigmap.addEventListener('click', (e) => {
  const hit = mapHitTest(e.clientX, e.clientY);
  if (hit) {
    closeMap();
    teleportTo(hit);
  }
});
els.bigmap.addEventListener('mousemove', (e) => {
  const hit = mapHitTest(e.clientX, e.clientY);
  els.bigmap.style.cursor = hit ? 'pointer' : 'crosshair';
  if (hit !== hoverMapId) {
    hoverMapId = hit;
    drawMap(els.bigmap, true);
  }
});
els.bigmap.addEventListener('mouseleave', () => {
  if (hoverMapId) {
    hoverMapId = null;
    drawMap(els.bigmap, true);
  }
});

// exploration controls
function blockedAt(x, z) {
  if (x * x + z * z > (ISLAND_RADIUS - 4) * (ISLAND_RADIUS - 4)) return true;
  for (const c of world.colliders) {
    if (c.type === 'circle') {
      const dx = x - c.x;
      const dz = z - c.z;
      if (dx * dx + dz * dz < (c.r + 0.55) * (c.r + 0.55)) return true;
    } else if (c.type === 'rect') {
      if (Math.abs(x - c.x) < c.hx + 0.55 && Math.abs(z - c.z) < c.hz + 0.55) return true;
    }
  }
  return false;
}

function updatePlayer(dt) {
  if (phase !== 'explore' || uiLocked) {
    player.moving = false;
    return;
  }
  let forward = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  let strafe = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  forward += -joystick.y;
  strafe += joystick.x;
  if (Math.abs(forward) > 1) forward = Math.sign(forward);
  if (Math.abs(strafe) > 1) strafe = Math.sign(strafe);
  const len = Math.hypot(forward, strafe);
  player.moving = len > 0.08;
  if (player.moving) {
    const norm = Math.min(1, len);
    const run = keys.has('ShiftLeft') || keys.has('ShiftRight');
    const speed = (isCoarse ? 7.0 : run ? 14.5 : 8.2) * norm;
    const sin = Math.sin(player.yaw);
    const cos = Math.cos(player.yaw);
    const dx = (-sin * forward + cos * strafe) * speed * dt;
    const dz = (-cos * forward - sin * strafe) * speed * dt;
    const nx = player.position.x + dx;
    const nz = player.position.z + dz;
    if (!blockedAt(nx, player.position.z)) player.position.x = nx;
    if (!blockedAt(player.position.x, nz)) player.position.z = nz;
    player.bob += dt * (run ? 13 : 9.3) * Math.min(1, len);
  } else {
    player.bob += dt * 1.1;
  }
  camera.up.set(0, 1, 0);
  camera.rotation.order = 'YXZ';
  camera.rotation.set(player.pitch, player.yaw, 0);
  camera.position.set(
    player.position.x,
    1.7 + Math.sin(player.bob) * (player.moving ? 0.045 : 0.012),
    player.position.z,
  );
  if (camera.fov !== BASE_FOV) {
    camera.fov = BASE_FOV;
    camera.updateProjectionMatrix();
  }
}

let lookPointer = null;
let lastX = 0;
let lastY = 0;
let dragDistance = 0;
canvas.addEventListener('pointerdown', (e) => {
  if (phase !== 'explore' || uiLocked || e.button !== 0) return;
  lookPointer = e.pointerId;
  lastX = e.clientX;
  lastY = e.clientY;
  dragDistance = 0;
  canvas.setPointerCapture(e.pointerId);
  canvas.classList.add('dragging');
});
canvas.addEventListener('pointermove', (e) => {
  if (lookPointer !== e.pointerId) return;
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  dragDistance += Math.abs(dx) + Math.abs(dy);
  player.yaw -= dx * (isCoarse ? 0.0043 : 0.0032);
  player.pitch -= dy * (isCoarse ? 0.0036 : 0.0027);
  player.pitch = clamp(player.pitch, -1.2, 0.78);
});
function releaseLook(e) {
  if (lookPointer !== e.pointerId) return;
  lookPointer = null;
  canvas.classList.remove('dragging');
}
canvas.addEventListener('pointerup', releaseLook);
canvas.addEventListener('pointercancel', releaseLook);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('keydown', (e) => {
  if (designPortal) {
    if (e.code === 'Escape' || e.key === 'Escape') closeDesignPortal();
    return;
  }
  if (pirateOpen) {
    if (e.code === 'Escape' || e.key === 'Escape') closePirateBay();
    return;
  }
  if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  keys.add(e.code);
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (e.code === 'KeyM') {
    e.preventDefault();
    if (phase === 'intro') { enterPark({ openMapAfter: true }); return; }
    if (els.mapOverlay.classList.contains('open')) closeMap(); else openMap();
  }
  if (e.code === 'Escape') {
    if (phase === 'ride') { endRide(true); return; }
    if (els.mapOverlay.classList.contains('open')) closeMap();
    else if (els.helpOverlay.classList.contains('open')) closeHelp();
    else if (els.finaleOverlay.classList.contains('open')) closeFinale();
    else if (els.ridePanel.classList.contains('open')) closeRidePanel();
  }
  if (e.code === 'KeyE' && phase === 'explore' && !uiLocked && nearestAttraction) {
    startRide(nearestAttraction);
  }
  if (e.code === 'KeyH' && phase === 'explore' && !transitioning) {
    if (els.helpOverlay.classList.contains('open')) closeHelp(); else openHelp();
  }
  if (e.code === 'KeyP') takePhoto();
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());

// teacup ride: hold buttons on touch/desktop
function setTeacupButton(direction) {
  if (phase !== 'ride' || rideState.id !== 'teacups') return;
  teacupButtonDir = direction;
  els.teacupLeft.classList.toggle('is-held', direction < 0);
  els.teacupRight.classList.toggle('is-held', direction > 0);
}
function bindTeacupButton(el, direction) {
  el.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    audio.init();
    el.setPointerCapture?.(e.pointerId);
    setTeacupButton(direction);
    if (phase === 'ride' && rideState.id === 'teacups') {
      world.rides.teacups.spinCup(direction, 1.05);
    }
  });
  el.addEventListener('click', () => {
    if (phase === 'ride' && rideState.id === 'teacups') {
      world.rides.teacups.spinCup(direction, 0.65);
    }
  });
  const stop = (e) => {
    e.preventDefault();
    setTeacupButton(0);
  };
  el.addEventListener('pointerup', stop);
  el.addEventListener('pointercancel', stop);
  el.addEventListener('pointerleave', (e) => {
    if (e.buttons === 0) setTeacupButton(0);
  });
}
bindTeacupButton(els.teacupLeft, -1);
bindTeacupButton(els.teacupRight, 1);
window.addEventListener('pointerup', () => {
  if (teacupButtonDir !== 0) setTeacupButton(0);
});

// teacup ride: drag the view left/right to turn the cup
canvas.addEventListener('pointerdown', (e) => {
  if (phase !== 'ride' || rideState.id !== 'teacups' || e.button !== 0) return;
  teacupDrag = { id: e.pointerId, x: e.clientX };
  canvas.setPointerCapture?.(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (!teacupDrag || teacupDrag.id !== e.pointerId) return;
  const dx = e.clientX - teacupDrag.x;
  teacupDrag.x = e.clientX;
  if (Math.abs(dx) > 0.5) world.rides.teacups.spinBy(dx * 0.012);
});
function stopTeacupDrag(e) {
  if (!teacupDrag || (e && teacupDrag.id !== e.pointerId)) return;
  teacupDrag = null;
}
canvas.addEventListener('pointerup', stopTeacupDrag);
canvas.addEventListener('pointercancel', stopTeacupDrag);

// joystick
const joyRadius = 32;
function updateJoystick(e) {
  const rect = els.joystick.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  let dx = e.clientX - cx;
  let dy = e.clientY - cy;
  const len = Math.hypot(dx, dy);
  if (len > joyRadius) {
    dx = (dx / len) * joyRadius;
    dy = (dy / len) * joyRadius;
  }
  joystick.x = dx / joyRadius;
  joystick.y = dy / joyRadius;
  els.joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
}
els.joystick.addEventListener('pointerdown', (e) => {
  const driveRide = phase === 'ride' && (rideState.id === 'bumper' || rideState.id === 'planes');
  if (!driveRide && (phase !== 'explore' || uiLocked)) return;
  joystick.pointer = e.pointerId;
  els.joystick.setPointerCapture(e.pointerId);
  updateJoystick(e);
  e.preventDefault();
});
els.joystick.addEventListener('pointermove', (e) => {
  if (joystick.pointer !== e.pointerId) return;
  updateJoystick(e);
  e.preventDefault();
});
function resetJoystick(e) {
  if (joystick.pointer !== e.pointerId) return;
  joystick.pointer = null;
  joystick.x = joystick.y = 0;
  els.joystickKnob.style.transform = 'translate(-50%, -50%)';
}
els.joystick.addEventListener('pointerup', resetJoystick);
els.joystick.addEventListener('pointercancel', resetJoystick);
if (isCoarse) {
  els.controlHint.classList.add('hidden');
  document.body.classList.add('touch');
  const introTip = document.querySelector('.intro-tip');
  if (introTip) introTip.innerHTML = '<span class="key">✦</span> 拖动环顾 · 摇杆漫步';
  document.querySelector('.prompt-key').textContent = '✦';
  document.querySelector('.interact-prompt small').textContent = '点击查看设施';
}
els.interactPrompt.addEventListener('click', () => {
  if (phase === 'explore' && !uiLocked && nearestAttraction) {
    audio.click();
    openRidePanel(nearestAttraction);
  }
});

// proximity / markers / zone
function updateProximity(dt) {
  if (phase !== 'explore' || uiLocked) {
    nearestAttraction = null;
    els.interactPrompt.classList.add('hidden');
    markerEls.forEach((el) => el.classList.remove('near'));
    return;
  }
  distanceCheckClock += dt;
  if (distanceCheckClock < 0.1) return;
  distanceCheckClock = 0;
  let best = null;
  let bestDist = Infinity;
  ATTRACTIONS.forEach((a) => {
    const d = Math.hypot(player.position.x - a.teleport.x, player.position.z - a.teleport.z);
    if (d < bestDist) { bestDist = d; best = a.id; }
  });
  nearestAttraction = bestDist < 14 ? best : null;
  markerEls.forEach((el, id) => {
    el.classList.toggle('near', id === nearestAttraction);
  });
  if (nearestAttraction) {
    els.promptName.textContent = getAttraction(nearestAttraction).name;
    els.interactPrompt.classList.remove('hidden');
  } else {
    els.interactPrompt.classList.add('hidden');
  }
}

function projectPosition(position, el, topOffset = 0) {
  tmpV.copy(position).project(camera);
  const visible = tmpV.z > -1 && tmpV.z < 1;
  if (!visible) {
    el.classList.remove('visible');
    return;
  }
  const x = (tmpV.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-tmpV.y * 0.5 + 0.5) * window.innerHeight + topOffset;
  if (x < -80 || x > window.innerWidth + 80 || y < -50 || y > window.innerHeight + 100) {
    el.classList.remove('visible');
    return;
  }
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.classList.add('visible');
}

function updateMarkers() {
  const explore = phase === 'explore' && !uiLocked;
  markerEls.forEach((el, id) => {
    if (!explore) { el.classList.remove('visible'); return; }
    // When standing at an attraction, the prompt and its real 3D marquee take
    // over; hide the floating label so the two names do not stack.
    if (id === nearestAttraction) { el.classList.remove('visible'); return; }
    const a = getAttraction(id);
    const dist = Math.hypot(player.position.x - a.teleport.x, player.position.z - a.teleport.z);
    if (dist > 105) { el.classList.remove('visible'); return; }
    projectPosition(tmpV2.set(...a.marker), el);
  });
  STARS.forEach((s) => {
    const el = starEls.get(s.id);
    if (!explore || collectedStars.has(s.id)) { el.classList.remove('visible'); return; }
    const dist = Math.hypot(player.position.x - s.position[0], player.position.z - s.position[2]);
    if (dist > 43) { el.classList.remove('visible'); return; }
    projectPosition(tmpV2.set(s.position[0], s.position[1] + 0.35, s.position[2]), el);
  });
}

function updateZone() {
  if (phase !== 'explore' || uiLocked) return;
  let found = null;
  let score = Infinity;
  ZONES.forEach((z) => {
    const d = Math.hypot(player.position.x - z.x, player.position.z - z.z);
    if (d < z.r && d / z.r < score) {
      score = d / z.r;
      found = z.name;
    }
  });
  if (found && found !== currentZone) {
    currentZone = found;
    showBanner(currentZone === '星光大道' ? 'WELCOME BACK' : 'NOW EXPLORING', currentZone);
  }
}

// quest
function updateQuestUI(animate = true) {
  const count = collectedStars.size;
  els.starCount.textContent = count;
  [...els.starPips.children].forEach((p, i) => p.classList.toggle('lit', collectedStars.has(i)));
  [...els.starHints.children].forEach((li, i) => li.classList.toggle('found', collectedStars.has(i)));
  els.starCount.parentElement.classList.toggle('complete', count === 5);
  if (count === 5 && animate) els.questPanel.classList.remove('collapsed');
}

function collectStar(id) {
  if (collectedStars.has(id) || !world.stars.collect(id)) return;
  collectedStars.add(id);
  updateQuestUI();
  audio.collectStar();
  const star = STARS.find((s) => s.id === id);
  const colors = [0xffd27a, 0xffdf9e, 0xffb98c];
  fireworks.burst(new THREE.Vector3(star.position[0], 4.2, star.position[2]), id % 4, 0.35, true);
  showToast(`✦ 收集星光 <b>${collectedStars.size}/5</b> · ${star.hint}`, 3600);
  try {
    localStorage.setItem('astralia-progress', JSON.stringify({ stars: [...collectedStars], finale: finaleShown }));
  } catch (e) { /* ignore */ }
  if (collectedStars.size === 5) {
    setTimeout(() => {
      fireworks.finaleShow();
      audio.rideFanfare();
      showToast('五枚星辉已归位 · 星梦城堡上空正在绽放', 5000);
    }, 900);
    setTimeout(() => {
      if (phase !== 'ride') {
        finaleShown = true;
        els.finaleOverlay.classList.add('open');
        els.finaleOverlay.setAttribute('aria-hidden', 'false');
        refreshLock();
      }
      try {
        localStorage.setItem('astralia-progress', JSON.stringify({ stars: [...collectedStars], finale: true }));
      } catch (e) { /* ignore */ }
    }, 2900);
  }
}

/* ---------------- Black Sail Bay portal ---------------- */
function openPirateBay() {
  if (pirateOpen) return;
  closeRidePanel();
  closeMap();
  closeHelp();
  closeFinale();
  pirateOpen = true;
  parkMutedBeforePirate = audio.muted;
  if (!audio.muted) audio.setMuted(true);
  els.pirateLoading.classList.remove('hidden');
  const time = mode === 'night' ? 'night' : 'dusk';
  els.pirateFrame.src = `/pirate/?embed=1&time=${time}`;
  els.pirateOverlay.classList.add('open');
  els.pirateOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('pirate-open');
}

function closePirateBay() {
  if (!pirateOpen) return;
  pirateOpen = false;
  document.body.classList.remove('pirate-open');
  els.pirateOverlay.classList.remove('open');
  els.pirateOverlay.setAttribute('aria-hidden', 'true');
  if (parkMutedBeforePirate !== null) {
    audio.setMuted(parkMutedBeforePirate);
    parkMutedBeforePirate = null;
  }
  window.setTimeout(() => {
    if (!pirateOpen) els.pirateFrame.src = 'about:blank';
  }, 520);
}

els.closePirate.addEventListener('click', closePirateBay);
els.pirateFrame.addEventListener('load', () => {
  if (pirateOpen) els.pirateLoading.classList.add('hidden');
});

/* ---------------- Cloud Crown and Rainbow Chute portals ---------------- */
const designPortalDefs = {
  balloon: {
    title: '云上星穹', overlay: 'balloonOverlay', frame: 'balloonFrame', loading: 'balloonLoading',
    close: 'closeBalloon', mood: true,
  },
  rainbow: {
    title: '彩虹滑道机', overlay: 'rainbowOverlay', frame: 'rainbowFrame', loading: 'rainbowLoading',
    close: 'closeRainbow', mood: true,
  },
};

function openDesignPortal(kind) {
  if (designPortal || pirateOpen) return;
  const def = designPortalDefs[kind];
  if (!def) return;
  closeRidePanel();
  closeMap();
  closeHelp();
  closeFinale();
  designPortal = kind;
  parkMutedBeforeDesign = audio.muted;
  if (!audio.muted) audio.setMuted(true);
  const mood = mode === 'night' ? 'night' : 'dusk';
  const frame = els[def.frame];
  if (kind === 'balloon') {
    frame.src = `/balloon/?view=explore&skipIntro=1&mood=${mood}&az=0.34&polar=1.24&radius=98`;
  } else {
    frame.src = `/rainbow/?mood=${mood}`;
  }
  els[def.loading].classList.remove('hidden');
  els[def.overlay].classList.add('open');
  els[def.overlay].setAttribute('aria-hidden', 'false');
  document.body.classList.add('pirate-open');
  refreshLock();
}

function closeDesignPortal() {
  if (!designPortal) return;
  const def = designPortalDefs[designPortal];
  designPortal = null;
  document.body.classList.remove('pirate-open');
  els[def.overlay].classList.remove('open');
  els[def.overlay].setAttribute('aria-hidden', 'true');
  if (parkMutedBeforeDesign !== null) {
    audio.setMuted(parkMutedBeforeDesign);
    parkMutedBeforeDesign = null;
  }
  window.setTimeout(() => {
    if (!designPortal) els[def.frame].src = 'about:blank';
  }, 520);
  refreshLock();
}

for (const [kind, def] of Object.entries(designPortalDefs)) {
  const closeBtn = els[def.close];
  const frame = els[def.frame];
  if (closeBtn) closeBtn.addEventListener('click', closeDesignPortal);
  if (frame) frame.addEventListener('load', () => {
    if (designPortal === kind) els[def.loading].classList.add('hidden');
  });
}

// rides
const rideDurations = {
  carousel: 12,
  coaster: 19,
  ferris: 15,
  teacups: 60,
  lagoon: 16,
  skyway: 23,
  swing: 32,
  planes: 30,
  bumper: 40,
};

function startRide(id) {
  if (phase !== 'explore' || transitioning) return;
  if (id === 'lagoon') {
    openPirateBay();
    return;
  }
  if (id === 'balloon') {
    openDesignPortal('balloon');
    return;
  }
  if (id === 'rainbow') {
    openDesignPortal('rainbow');
    return;
  }
  const a = getAttraction(id);
  if (!a) return;
  closeRidePanel();
  closeMap();
  closeHelp();
  closeFinale();
  keys.clear();
  joystick.x = joystick.y = 0;
  audio.init();
  audio.whoosh();
  screenTransition(() => {
    rideState.saved = {
      x: player.position.x,
      z: player.position.z,
      yaw: player.yaw,
      pitch: player.pitch,
    };
    rideState.id = id;
    rideState.elapsed = 0;
    rideState.t = 0;
    rideState.ended = false;
    rideState.duration = rideDurations[id] || 12;
    activeRide = a;
    phase = 'ride';
    document.body.classList.add('ride-mode');
    document.body.classList.toggle('teacup-mode', id === 'teacups');
    els.rideHud.classList.remove('hidden');
    els.rideHudLabel.textContent = a.name;
    els.rtIcon.textContent = a.icon;
    els.rtName.textContent = a.name;
    els.rtLine.textContent = a.tagline;
    els.rideProgressBar.style.width = '0%';
    els.rideTitleCard.classList.add('show');
    clearTimeout(titleCardTimer);
    titleCardTimer = setTimeout(() => els.rideTitleCard.classList.remove('show'), 4200);
    camera.up.set(0, 1, 0);
    camera.fov = id === 'coaster' ? 82
      : id === 'teacups' ? (innerWidth < 620 ? 82 : 70)
        : id === 'bumper' ? 72
          : id === 'planes' ? 66
            : 64;
    camera.updateProjectionMatrix();
    if (id === 'lagoon') world.rides.lagoon.boost = rideState.duration + 2;
    if (id === 'swing') {
      world.rides.swing.setRideActive(true);
      els.rtLine.textContent = '吊椅正在展开 · 把晚风坐成秋千';
      els.rideHud.querySelector('.ride-hud-sub').textContent = '旋转飞行中';
      audio.chime();
    }
    if (id === 'planes') {
      world.rides.planes.startRide();
      if (isCoarse || matchMedia('(hover: none)').matches) els.mobileControls.classList.remove('hidden');
      document.body.classList.add('plane-mode');
      els.rtLine.textContent = '推杆上升 · 拉杆下降，绕钟楼飞行';
      els.rideHud.querySelector('.ride-hud-sub').textContent = '可控制升降';
      audio.chime();
    }
    if (id === 'bumper') {
      world.rides.bumper.startRide();
      if (isCoarse || matchMedia('(hover: none)').matches) els.mobileControls.classList.remove('hidden');
      world.rides.bumper.onBump = (n) => {
        if (phase === 'ride' && rideState.id === 'bumper') {
          els.rideHudLabel.textContent = `复古碰碰车 · 碰撞 ${n} 次`;
          audio.chime();
        }
      };
      document.body.classList.add('bumper-mode');
      els.rideHudLabel.textContent = '复古碰碰车 · 碰撞 0 次';
      els.rtLine.textContent = 'W/S 前进后退 · A/D 转向 · 撞出星屑';
      els.rideHud.querySelector('.ride-hud-sub').textContent = '自由驾驶';
      audio.chime();
    }
    if (id === 'carousel') {
      world.rides.carousel.spin.rotation.y = 0;
      world.rides.carousel.setRideActive(true);
      audio.startCarouselMusic();
    }
    if (id === 'teacups') {
      teacupButtonDir = 0;
      teacupInputDir = 0;
      world.rides.teacups.ride.selectCup(0);
      world.rides.teacups.setRideActive(true);
      els.teacupRideControls.classList.remove('hidden');
      els.teacupRideControls.setAttribute('aria-hidden', 'false');
      els.rtLine.textContent = '按住 ← → 或 A D，亲手转动杯中的铜轮';
      els.rideHud.querySelector('.ride-hud-sub').textContent = '亲手操控';
      audio.chime();
    } else {
      els.teacupRideControls.classList.add('hidden');
      els.teacupRideControls.setAttribute('aria-hidden', 'true');
      if (!['swing', 'planes', 'bumper'].includes(id)) {
        els.rideHud.querySelector('.ride-hud-sub').textContent = '沉浸体验中';
      }
    }
    refreshLock();
    showBanner('NOW BOARDING', a.name);
  });
}

function endRide(aborted = false) {
  if (phase !== 'ride' || rideState.ended) return;
  rideState.ended = true;
  clearTimeout(titleCardTimer);
  els.rideTitleCard.classList.remove('show');
  els.rideHud.classList.add('hidden');
  document.body.classList.remove('ride-mode');
  document.body.classList.remove('teacup-mode');
  document.body.classList.remove('plane-mode');
  document.body.classList.remove('bumper-mode');
  phase = 'transition';
  transitioning = true;
  refreshLock();
  els.fade.classList.add('on');
  setTimeout(() => {
    camera.up.set(0, 1, 0);
    camera.fov = BASE_FOV;
    camera.updateProjectionMatrix();
    if (rideState.saved) {
      player.position.set(rideState.saved.x, 0, rideState.saved.z);
      player.yaw = rideState.saved.yaw;
      player.pitch = rideState.saved.pitch;
    }
    world.rides.carousel.setRideActive(false);
    world.rides.teacups.setRideActive(false);
    world.rides.teacups.spinCup(0, 0);
    world.rides.swing.setRideActive(false);
    world.rides.planes.endRide();
    world.rides.bumper.endRide();
    world.rides.bumper.onBump = null;
    joystick.x = joystick.y = 0;
    els.joystickKnob.style.transform = 'translate(-50%, -50%)';
    teacupButtonDir = 0;
    teacupInputDir = 0;
    teacupDrag = null;
    els.teacupRideControls.classList.add('hidden');
    els.teacupRideControls.setAttribute('aria-hidden', 'true');
    audio.stopCarouselMusic();
    rideLight.intensity = 0;
    rideState.id = null;
    activeRide = null;
    phase = 'explore';
    updateExploreCameraImmediate();
    els.fade.classList.remove('on');
    setTimeout(() => {
      transitioning = false;
      refreshLock();
    }, 260);
    showToast(aborted ? '体验已结束 · 随时可以再次出发' : '体验结束 · 星光会记得你', 2400);
    fireworks.castleShow(false);
  }, 380);
}

const coasterBasis = new THREE.Matrix4();
const coasterRight = new THREE.Vector3();
const coasterUp = new THREE.Vector3();
const coasterBack = new THREE.Vector3();
const coasterTarget = new THREE.Vector3();
const mountPos = new THREE.Vector3();
const mountForward = new THREE.Vector3();
const mountSide = new THREE.Vector3();
const mountTarget = new THREE.Vector3();
const mountQuat = new THREE.Quaternion();

function updateRide(dt) {
  if (phase !== 'ride' || !rideState.id) return;
  rideState.elapsed += dt;
  const raw = rideState.elapsed / rideState.duration;
  rideState.t = clamp(raw, 0, 1);
  const t = rideState.t;
  els.rideProgressBar.style.width = `${Math.min(100, raw * 100)}%`;
  const id = rideState.id;
  const shake = Math.sin(elapsed * 47) * 0.03 + Math.sin(elapsed * 31.7) * 0.02;
  rideLight.intensity = 0;

  if (id === 'carousel') {
    const angle = 0.32 + easeInOut(t) * 2.7;
    const radius = 27.0 - Math.sin(t * Math.PI) * 1.2;
    const y = 4.8 + Math.sin(t * Math.PI) * 5.3 + Math.sin(t * 9) * 0.025;
    camera.position.set(-48 + Math.cos(angle) * radius, y, 32 + Math.sin(angle) * radius);
    camera.up.set(0, 1, 0);
    camera.lookAt(-48, 6.4 + Math.sin(t * Math.PI) * 1.9 + Math.sin(t * 4) * 0.1, 32);
    camera.rotateZ(Math.sin(t * 8) * 0.004);
    camera.fov = 62;
  } else if (id === 'coaster') {
    const ct = clamp(t, 0, 0.999);
    const p = world.rides.coaster.curve.getPointAt(ct);
    const ahead = world.rides.coaster.curve.getPointAt((ct + 0.008) % 1);
    const tangent = tmpV.copy(ahead).sub(p).normalize();
    coasterRight.crossVectors(tangent, UP).normalize();
    coasterUp.crossVectors(coasterRight, tangent).normalize();
    coasterBack.copy(tangent).negate();
    coasterBasis.makeBasis(coasterRight, coasterUp, coasterBack);
    camera.quaternion.setFromRotationMatrix(coasterBasis);
    camera.position.copy(p).addScaledVector(coasterUp, 2.3);
    const vibration = Math.sin(elapsed * 34) * 0.035;
    camera.position.x += shake * 0.5;
    camera.position.y += vibration;
    camera.rotateZ(Math.sin(ct * 20) * 0.035 + shake * 0.16);
    camera.fov = 80 + Math.sin(ct * 12) * 2;
    camera.updateProjectionMatrix();
    rideLight.position.copy(p).addScaledVector(tangent, 7).addScaledVector(coasterUp, 1.2);
    rideLight.intensity = 70;
  } else if (id === 'ferris') {
    const center = world.rides.ferris.center;
    const angle = -Math.PI / 2 + easeInOut(t) * Math.PI * 1.02;
    const r = world.rides.ferris.radius;
    const lift = Math.sin(angle) * r;
    camera.position.set(
      center.x + Math.cos(angle) * r * 0.28,
      center.y + lift + 0.2,
      center.z + 18 + Math.sin(t * 3.2) * 0.25,
    );
    camera.up.set(0, 1, 0);
    coasterTarget.set(
      lerp(2, -10, t),
      lerp(21, 11, t),
      lerp(12, -2, t),
    );
    camera.lookAt(coasterTarget);
    camera.rotateZ(Math.sin(t * 7) * 0.006);
    camera.fov = 64;
  } else if (id === 'teacups') {
    const tc = world.rides.teacups;
    let input = 0;
    if (keys.has('ArrowRight') || keys.has('KeyD')) input = 1;
    else if (keys.has('ArrowLeft') || keys.has('KeyA')) input = -1;
    if (teacupButtonDir !== 0) input = teacupButtonDir;
    if (input !== teacupInputDir) {
      teacupInputDir = input;
      tc.spinCup(input, input ? 0.7 : 0);
    }

    tc.getCupViewPoint(0, teacupCameraPos);
    teacupCameraPos.y -= 0.14;
    let outwardX = teacupCameraPos.x + 62;
    let outwardZ = teacupCameraPos.z - 68;
    const outwardLen = Math.hypot(outwardX, outwardZ);
    if (outwardLen > 0.001) {
      teacupCameraPos.x += (outwardX / outwardLen) * 0.28;
      teacupCameraPos.z += (outwardZ / outwardLen) * 0.28;
    }
    camera.position.copy(teacupCameraPos);
    camera.up.set(0, 1, 0);
    camera.lookAt(-62, 2.1, 68);
    camera.rotateZ(clamp(-tc.ride.cupSpeed * 0.018, -0.08, 0.08));
    camera.fov = innerWidth < 620 ? 82 : 70;

    const rpm = tc.getSpeedRPM();
    els.teacupRpm.textContent = rpm.toFixed(1);
    els.teacupPlatform.textContent = `茶盘 ${tc.getPlatformRPM().toFixed(1)} 圈 / 分`;
  } else if (id === 'lagoon') {
    const p = lagoonCamCurve.getPointAt(easeInOut(t));
    camera.position.copy(p);
    camera.up.set(0, 1, 0);
    world.rides.lagoon.ship.getWorldPosition(tmpV);
    tmpV.y += 7;
    camera.lookAt(tmpV);
    camera.fov = 60;
    camera.position.y += Math.sin(t * 19) * 0.04;
  } else if (id === 'skyway') {
    const view = world.rides.skyway.getRideView(t);
    camera.position.copy(view.position);
    camera.up.set(0, 1, 0);
    camera.lookAt(view.target);
    camera.rotateZ(Math.sin(t * Math.PI * 3.2) * 0.007);
    camera.fov = view.fov;
  } else if (id === 'swing') {
    const c = world.rides.swing.center;
    const angle = 0.55 + easeInOut(t) * Math.PI * 1.32;
    const radius = 42.0 - Math.sin(t * Math.PI) * 2.4;
    camera.position.set(
      c.x + Math.cos(angle) * radius,
      13.6 + Math.sin(t * Math.PI) * 3.2,
      c.z + Math.sin(angle) * radius,
    );
    camera.up.set(0, 1, 0);
    camera.lookAt(c.x, 14.0 + Math.sin(t * Math.PI) * 1.2, c.z);
    camera.rotateZ(Math.sin(t * 9) * 0.006);
    camera.fov = 61;
  } else if (id === 'planes') {
    let vertical = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) vertical += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) vertical -= 1;
    vertical -= joystick.y;
    world.rides.planes.setVertical(vertical);
    const pp = world.rides.planes.playerPlane;
    pp.getWorldPosition(tmpV);
    pp.getWorldDirection(tmpV2);
    camera.position.copy(tmpV).addScaledVector(tmpV2, -6.2);
    camera.position.y = tmpV.y + 2.7;
    camera.up.set(0, 1, 0);
    camera.lookAt(tmpV.x + tmpV2.x * 4.0, tmpV.y + 0.7, tmpV.z + tmpV2.z * 4.0);
    camera.rotateZ(Math.sin(t * 7) * 0.006);
    camera.fov = 68;
  } else if (id === 'bumper') {
    let forward = 0;
    let turn = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) forward += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) forward -= 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) turn -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) turn += 1;
    forward -= joystick.y;
    turn += joystick.x;
    world.rides.bumper.setInput(forward, turn);
    const state = world.rides.bumper.getPlayerState();
    const car = world.rides.bumper.playerCar;
    car.getWorldPosition(tmpV);
    const pulse = world.rides.bumper.bumpPulse;
    camera.position.set(
      tmpV.x - Math.sin(state.heading) * 4.2 + Math.sin(elapsed * 90) * 0.055 * pulse,
      4.15 + Math.sin(elapsed * 70) * 0.035 * pulse,
      tmpV.z - Math.cos(state.heading) * 4.2 + Math.cos(elapsed * 82) * 0.045 * pulse,
    );
    camera.up.set(0, 1, 0);
    camera.lookAt(
      tmpV.x + Math.sin(state.heading) * 3.2,
      1.55 + pulse * 0.03,
      tmpV.z + Math.cos(state.heading) * 3.2,
    );
    camera.fov = 72;
  }
  camera.updateProjectionMatrix();
  if (t >= 1) endRide(false);
}

// day/night lights
const lightState = {
  hemi: PALETTES.night.hemiIntensity,
  dir: PALETTES.night.dirIntensity,
};
function updateDaylight(dt) {
  const p = PALETTES[mode];
  const k = 1 - Math.exp(-dt * 1.8);
  lightState.hemi = lerp(lightState.hemi, p.hemiIntensity, k);
  lightState.dir = lerp(lightState.dir, p.dirIntensity, k);
  world.hemi.intensity = lightState.hemi;
  world.dirLight.intensity = lightState.dir;
  world.hemi.color.lerp(tmpColor.setHex(p.hemiSky), k);
  world.hemi.groundColor.lerp(tmpColor2.setHex(p.hemiGround), k);
  world.dirLight.color.lerp(tmpColor.setHex(p.dir), k);
  world.ambient.intensity = lerp(world.ambient.intensity, p.ambient ?? 0.62, k);
  world.ambient.color.lerp(tmpColor.setHex(p.ambientColor ?? 0x2c3550), k);
  bloom.strength = lerp(bloom.strength, p.bloom, k);
}

// camera intro
function updateIntroCamera(dt) {
  const t = Math.min(elapsed, 180);
  const a = 2.23 + Math.sin(t * 0.03) * 0.018 + t * 0.00045;
  const radius = 61 + Math.sin(t * 0.07) * 1.2;
  camera.position.set(
    -48 + Math.cos(a) * radius,
    19.5 + Math.sin(t * 0.11) * 1.2,
    32 + Math.sin(a) * radius,
  );
  camera.up.set(0, 1, 0);
  camera.lookAt(-56 + Math.sin(t * 0.08) * 1.1, 9.2, 30);
  if (camera.fov !== 45) {
    camera.fov = 45;
    camera.updateProjectionMatrix();
  }
}

// photo mode
function takePhoto() {
  if (phase !== 'explore' || uiLocked) return;
  document.body.classList.add('photo-mode');
  els.photoFlash.classList.remove('flash');
  void els.photoFlash.offsetWidth;
  els.photoFlash.classList.add('flash');
  audio.click();
  setTimeout(() => {
    composer.render();
    const src = renderer.domElement;
    const out = document.createElement('canvas');
    out.width = src.width;
    out.height = src.height;
    const ctx = out.getContext('2d');
    ctx.drawImage(src, 0, 0);
    const g = ctx.createLinearGradient(0, out.height * 0.7, 0, out.height);
    g.addColorStop(0, 'rgba(3,5,12,0)');
    g.addColorStop(1, 'rgba(3,5,12,.66)');
    ctx.fillStyle = g;
    ctx.fillRect(0, out.height * 0.7, out.width, out.height * 0.3);
    const pad = Math.max(26, out.width * 0.032);
    ctx.fillStyle = 'rgba(255,242,214,.9)';
    ctx.font = `500 ${Math.max(17, out.width * 0.013)}px Georgia, serif`;
    ctx.fillText('ASTRALIA  ·  星梦奇境', pad, out.height - pad * 1.65);
    ctx.fillStyle = 'rgba(255,241,212,.5)';
    ctx.font = `400 ${Math.max(10, out.width * 0.0065)}px "Avenir Next", "Microsoft YaHei", sans-serif`;
    ctx.fillText(`${PALETTES[mode].name}  ·  NIGHT AT THE PARK  ·  ASTRALIA PARK`, pad, out.height - pad * 1.1);
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(255,215,140,.9)';
    ctx.font = `400 ${Math.max(22, out.width * 0.016)}px Georgia, serif`;
    ctx.fillText('✦', out.width - pad, out.height - pad * 1.45);
    const link = document.createElement('a');
    link.download = `astralia-${Date.now()}.png`;
    link.href = out.toDataURL('image/png');
    link.click();
    document.body.classList.remove('photo-mode');
    showToast('明信片已保存 · 愿星光留在你的相册里', 2800);
  }, 220);
}

// map drawing
const mapRoutes = [
  [[0, 151], [0, 124], [0, 46], [0, 38]],
  [[-12, 46], [-28, 48], [-46, 47], [-49, 44]],
  [[-18, 48], [-38, 61], [-56, 77], [-60, 82]],
  [[16, 45], [34, 47], [52, 44], [58, 38]],
  [[25, 44], [45, 56], [60, 77], [62, 80]],
  [[-20, 34], [-35, 23], [-45, 8], [-50, -8]],
  [[24, 38], [27, 12], [31, -20], [26, -42], [24, -49]],
  [[-16, 40], [-28, 40], [-39, 42]],
  [[12, 43], [18, 44], [24, 48]],
  [[-9, 98], [-16, 97.6], [-22, 98], [-26.4, 98.4], [-24, 100]],
  [[24, -42], [12, -44], [0, -45], [-14, -43.6], [-20, -42.8]],
  [[0, 132], [12, 128], [22, 124], [30, 124]],
  [[58, 38], [70, 44], [78, 52], [82, 57]],
  [[60, 77], [71, 68], [80, 60], [82, 57]],
  [[82, 57], [98, 57], [114, 48]],
  [[0, 132], [-8, 132], [-12, 132], [-15, 132]],
  [[30, 124], [46, 124], [60, 122], [70, 122], [78, 122], [88, 118], [96, 110], [100, 102]],
  [[78, 122], [77, 128], [76, 134]],
  [[100, 102], [100, 110], [100, 116]],
];
const mapRouteWidths = [20, 7, 6, 7, 6, 6.5, 7, 5.5, 5, 4.2, 4.2, 6, 6, 5.5, 4.5, 5.2, 5.2, 4.4, 4.4];
const labelOffsets = {
  carousel: [0, 35],
  coaster: [0, -33],
  ferris: [0, 35],
  balloon: [0, 35],
  teacups: [0, -33],
  lagoon: [0, 35],
  skyway: [0, -34],
  rainbow: [0, -34],
  swing: [0, 35],
  planes: [0, 35],
  bumper: [0, -34],
};
let mapHitAreas = [];

function worldToMap(x, z, size) {
  const scale = (size * 0.415) / ISLAND_RADIUS;
  return [size / 2 + x * scale, size / 2 + z * scale, scale];
}

function drawMap(canvasEl, big = false) {
  const ctx = canvasEl.getContext('2d');
  const S = canvasEl.width;
  const center = S / 2;
  ctx.clearRect(0, 0, S, S);
  // parchment ocean
  const bg = ctx.createRadialGradient(center, center, S * 0.1, center, center, S * 0.6);
  bg.addColorStop(0, big ? '#1a2134' : '#101522');
  bg.addColorStop(0.7, big ? '#101523' : '#0b0f1c');
  bg.addColorStop(1, big ? '#070a13' : '#070a12');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, S, S);
  // subtle water rings
  ctx.strokeStyle = big ? 'rgba(151,176,187,.06)' : 'rgba(151,176,187,.04)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(center, center, S * 0.445 + i * S * 0.019, 0, Math.PI * 2);
    ctx.stroke();
  }

  const radius = S * 0.415;
  // island shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.55)';
  ctx.shadowBlur = S * 0.04;
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#223528';
  ctx.fill();
  ctx.restore();
  // grass texture dots
  const rand = seededMapRandom(42);
  for (let i = 0; i < (big ? 230 : 70); i++) {
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(rand()) * radius * 0.97;
    const x = center + Math.cos(a) * r;
    const y = center + Math.sin(a) * r;
    ctx.fillStyle = i % 3 ? 'rgba(83,116,82,.16)' : 'rgba(20,40,27,.35)';
    ctx.beginPath();
    ctx.arc(x, y, (big ? 1.3 : 0.8) + rand() * (big ? 2.5 : 1.4), 0, Math.PI * 2);
    ctx.fill();
  }
  // island border
  ctx.strokeStyle = 'rgba(183,164,124,.5)';
  ctx.lineWidth = Math.max(2, S * 0.003);
  ctx.beginPath(); ctx.arc(center, center, radius, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(100,91,65,.5)';
  ctx.lineWidth = Math.max(1, S * 0.002);
  ctx.beginPath(); ctx.arc(center, center, radius * 0.985, 0, Math.PI * 2); ctx.stroke();

  // paths
  const drawRoute = (points, width) => {
    ctx.beginPath();
    points.forEach(([x, z], i) => {
      const [mx, my] = worldToMap(x, z, S);
      if (i === 0) ctx.moveTo(mx, my); else ctx.lineTo(mx, my);
    });
    ctx.lineWidth = width * (S * 0.415 / ISLAND_RADIUS) + (big ? 4 : 1.4);
    ctx.strokeStyle = '#6e6451';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    ctx.lineWidth = width * (S * 0.415 / ISLAND_RADIUS);
    ctx.strokeStyle = big ? '#ad9b7d' : '#94866d';
    ctx.stroke();
  };
  mapRoutes.forEach((r, i) => drawRoute(r, mapRouteWidths[i]));
  // plaza
  const [px, py, ps] = worldToMap(0, 20, S);
  ctx.beginPath(); ctx.arc(px, py, 34.5 * ps, 0, Math.PI * 2);
  ctx.fillStyle = big ? '#a79578' : '#91846c';
  ctx.fill();
  ctx.strokeStyle = 'rgba(94,82,64,.7)';
  ctx.lineWidth = big ? 2 : 1;
  ctx.stroke();
  ctx.beginPath(); ctx.arc(px, py, 20 * ps, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(84,68,52,.3)';
  ctx.stroke();

  // lagoon
  const [lx, ly, ls] = worldToMap(24, -83, S);
  ctx.beginPath(); ctx.arc(lx, ly, 28 * ls, 0, Math.PI * 2);
  const water = ctx.createRadialGradient(lx, ly, 2, lx, ly, 28 * ls);
  water.addColorStop(0, '#245a63');
  water.addColorStop(0.7, '#163f49');
  water.addColorStop(1, '#0f2833');
  ctx.fillStyle = water;
  ctx.fill();
  ctx.strokeStyle = 'rgba(133,188,183,.38)';
  ctx.lineWidth = big ? 2 : 1;
  ctx.stroke();
  // tiny ship on lagoon
  ctx.save();
  ctx.translate(lx, ly);
  ctx.rotate(-0.2);
  ctx.strokeStyle = 'rgba(236,216,173,.65)';
  ctx.lineWidth = Math.max(1, 1.2 * (S / 1100));
  ctx.beginPath(); ctx.moveTo(-4 * ls, 0); ctx.lineTo(4 * ls, 0); ctx.lineTo(2.5 * ls, 2.8 * ls); ctx.lineTo(-2.5 * ls, 2.8 * ls); ctx.closePath(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -6 * ls); ctx.stroke();
  ctx.restore();

  // South Court and the enlarged Cloud forecourt
  const [sx, sy, ss] = worldToMap(14, 132, S);
  ctx.beginPath(); ctx.arc(sx, sy, 20.5 * ss, 0, Math.PI * 2);
  ctx.fillStyle = big ? '#a79578' : '#91846c';
  ctx.fill();
  ctx.strokeStyle = 'rgba(104,88,62,.7)';
  ctx.lineWidth = big ? 2 : 1;
  ctx.stroke();
  ctx.beginPath(); ctx.arc(sx, sy, 12 * ss, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(86,70,50,.32)';
  ctx.stroke();
  const [cx, cy, csc] = worldToMap(76, 48, S);
  ctx.beginPath(); ctx.arc(cx, cy, 16 * csc, 0, Math.PI * 2);
  ctx.fillStyle = big ? '#98957f' : '#858475';
  ctx.fill();
  ctx.strokeStyle = 'rgba(94,96,81,.6)';
  ctx.stroke();

  // shops
  ctx.fillStyle = 'rgba(99,82,81,.8)';
  [57, 74, 91].forEach((z) => {
    for (const x of [-20.5, 20.5]) {
      const [mx, my, sc] = worldToMap(x, z, S);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(Math.PI / 4);
      const w = 8 * sc;
      ctx.fillRect(-w / 2, -w / 2, w, w);
      ctx.restore();
    }
  });
  // theater
  const [tx, ty, ts] = worldToMap(82, -28, S);
  ctx.fillStyle = 'rgba(89,78,111,.82)';
  ctx.fillRect(tx - 7 * ts, ty - 10 * ts, 14 * ts, 20 * ts);
  ctx.beginPath();
  ctx.moveTo(tx - 9 * ts, ty - 10 * ts);
  ctx.lineTo(tx, ty - 17 * ts);
  ctx.lineTo(tx + 9 * ts, ty - 10 * ts);
  ctx.closePath();
  ctx.fill();

  // coaster curve
  ctx.beginPath();
  const cp = world.rides.coaster.curve;
  for (let i = 0; i <= 160; i++) {
    const p = cp.getPointAt(i / 160);
    const [mx, my] = worldToMap(p.x, p.z, S);
    if (i === 0) ctx.moveTo(mx, my); else ctx.lineTo(mx, my);
  }
  ctx.closePath();
  ctx.strokeStyle = 'rgba(210,112,112,.72)';
  ctx.lineWidth = big ? 3 : 1.5;
  ctx.setLineDash(big ? [8, 7] : [3, 4]);
  ctx.stroke();
  ctx.setLineDash([]);

  // skyway line — a small aerial route stitched across the west side of the map
  const skyway = world.rides.skyway;
  if (skyway) {
    ctx.save();
    const pts = skyway.routeXZ;
    const trace = () => {
      ctx.beginPath();
      pts.forEach(([x, z], i) => {
        const [mx, my] = worldToMap(x, z, S);
        if (i === 0) ctx.moveTo(mx, my); else ctx.lineTo(mx, my);
      });
    };
    trace();
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(5,13,19,.82)';
    ctx.lineWidth = big ? 7 : 3;
    ctx.stroke();
    trace();
    ctx.strokeStyle = 'rgba(104,224,208,.74)';
    ctx.lineWidth = big ? 2.2 : 1.2;
    ctx.setLineDash(big ? [9, 7] : [3, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    // moving-car beads
    for (let i = 0; i < 5; i++) {
      const idx = Math.min(pts.length - 1, 1 + i * 2);
      const [mx, my] = worldToMap(pts[idx][0], pts[idx][1], S);
      ctx.fillStyle = 'rgba(255,213,127,.9)';
      ctx.beginPath();
      ctx.arc(mx, my, big ? 3.4 : 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    // two terminal lozenges
    for (const [x, z] of [[-44, 98], [-20, -57]]) {
      const [mx, my] = worldToMap(x, z, S);
      ctx.save();
      ctx.translate(mx, my);
      ctx.rotate(Math.PI / 4);
      const size = big ? 8 : 3.2;
      ctx.fillStyle = 'rgba(244,215,151,.9)';
      ctx.fillRect(-size / 2, -size / 2, size, size);
      ctx.restore();
    }
    if (big) {
      const [nx, ny] = worldToMap(-20, -57, S);
      ctx.fillStyle = 'rgba(228,204,158,.78)';
      ctx.font = `500 ${Math.round(15 * S / 1100)}px "Microsoft YaHei", "PingFang SC", sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('湖畔站', nx + 12 * (S / 1100), ny + 1);
    }
    ctx.restore();
  }

  // ferris wheel icon
  const [fx, fy, fs] = worldToMap(58, 18, S);
  const wheelR = 14 * fs;
  ctx.strokeStyle = 'rgba(198,220,221,.7)';
  ctx.lineWidth = big ? 2 : 1;
  ctx.beginPath(); ctx.arc(fx, fy, wheelR, 0, Math.PI * 2); ctx.stroke();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx + Math.cos(a) * wheelR, fy + Math.sin(a) * wheelR); ctx.stroke();
  }

  // castle icon
  drawCastleMap(ctx, 0, 0, S, big);

  // attraction dots
  // Only the large map owns click targets. The minimap is redrawn every frame;
  // rebuilding the hit list there used to overwrite the big map's coordinates.
  const buildHits = big && canvasEl === els.bigmap;
  if (buildHits) mapHitAreas = [];
  ATTRACTIONS.forEach((a) => {
    const [mx, my, sc] = worldToMap(a.map[0], a.map[1], S);
    const active = a.id === hoverMapId || a.id === mapHighlight;
    const r = (big ? 13 : 4.5) * (active ? 1.4 : 1);
    ctx.save();
    ctx.shadowColor = a.colors[1];
    ctx.shadowBlur = active ? (big ? 24 : 8) : (big ? 8 : 3);
    ctx.beginPath();
    ctx.arc(mx, my, r + (big ? 3 : 1.4), 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(9,12,22,.9)';
    ctx.fill();
    ctx.strokeStyle = active ? '#ffe1a3' : 'rgba(255,239,211,.62)';
    ctx.lineWidth = active ? 2.5 : 1.2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(mx, my, r, 0, Math.PI * 2);
    ctx.fillStyle = a.colors[1];
    ctx.fill();
    if (big) {
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#10121c';
      ctx.font = `${Math.round(18 * S / 1100)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(a.icon, mx, my + 1);
      // label
      const off = labelOffsets[a.id] || [0, 32];
      const ly2 = my + off[1] * (S / 1100) * 1.2;
      ctx.font = `600 ${Math.round(19 * S / 1100)}px "Microsoft YaHei", "PingFang SC", sans-serif`;
      const tw = ctx.measureText(a.name).width;
      const pillW = tw + 26 * (S / 1100);
      const pillH = 31 * (S / 1100);
      ctx.fillStyle = active ? 'rgba(244,201,109,.18)' : 'rgba(8,11,20,.78)';
      roundRect(ctx, mx - pillW / 2, ly2 - pillH / 2, pillW, pillH, pillH / 2);
      ctx.fill();
      ctx.strokeStyle = active ? 'rgba(244,201,109,.65)' : 'rgba(255,239,211,.14)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = active ? '#ffe7b2' : 'rgba(255,245,227,.8)';
      ctx.fillText(a.name, mx, ly2 + 1);
      // The label itself is clickable too, not only the small dot.
      if (buildHits) {
        mapHitAreas.push({
          id: a.id, x: mx, y: ly2, rx: pillW / 2 + 10, ry: pillH / 2 + 9,
        });
      }
    }
    ctx.restore();
    if (buildHits) mapHitAreas.push({ id: a.id, x: mx, y: my, r: Math.max(26, r * 3) });
  });

  // stars
  STARS.forEach((s) => {
    if (collectedStars.has(s.id)) return;
    const [mx, my, sc] = worldToMap(s.position[0], s.position[2], S);
    if (big) {
      const pulse = 1 + Math.sin(elapsed * 2.2 + s.id) * 0.15;
      ctx.save();
      ctx.shadowColor = '#ffd471';
      ctx.shadowBlur = 22;
      ctx.fillStyle = '#ffd471';
      ctx.beginPath();
      drawStarPath(ctx, mx, my, 10 * pulse, 3.2 * pulse, 4);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fillStyle = 'rgba(255,213,116,.9)';
      ctx.beginPath();
      drawStarPath(ctx, mx, my, 3.2, 1.2, 4);
      ctx.fill();
    }
  });

  // player
  const [plx, ply] = worldToMap(player.position.x, player.position.z, S);
  ctx.save();
  ctx.translate(plx, ply);
  ctx.rotate(-player.yaw);
  ctx.shadowColor = '#92f0dd';
  ctx.shadowBlur = big ? 20 : 8;
  ctx.fillStyle = '#a4f4e3';
  ctx.beginPath();
  ctx.moveTo(0, -10 * (S / 1100) - (big ? 3 : 0));
  ctx.lineTo(7 * (S / 1100) + (big ? 2 : 0), 8 * (S / 1100) + (big ? 2 : 0));
  ctx.lineTo(0, 4 * (S / 1100));
  ctx.lineTo(-7 * (S / 1100) - (big ? 2 : 0), 8 * (S / 1100) + (big ? 2 : 0));
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(8,16,23,.8)';
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.restore();

  if (big) {
    ctx.fillStyle = 'rgba(255,246,227,.37)';
    ctx.font = `500 ${Math.round(13 * S / 1100)}px "Avenir Next", sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillText('A S T R A L I A   P A R K   G U I D E', S * 0.048, S * 0.055);
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(255,246,227,.55)';
    ctx.font = `600 ${Math.round(15 * S / 1100)}px Georgia, serif`;
    ctx.fillText('N', S * 0.952, S * 0.06);
    ctx.beginPath();
    ctx.moveTo(S * 0.946, S * 0.075);
    ctx.lineTo(S * 0.952, S * 0.058);
    ctx.lineTo(S * 0.958, S * 0.075);
    ctx.strokeStyle = 'rgba(244,201,109,.7)';
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }
}

function drawCastleMap(ctx, x, z, S, big) {
  const [mx, my, sc] = worldToMap(x, z, S);
  ctx.save();
  ctx.translate(mx, my);
  const w = 22 * sc;
  const h = 18 * sc;
  ctx.fillStyle = 'rgba(21,17,33,.55)';
  ctx.beginPath(); ctx.ellipse(0, 0, w * 1.4, h * 0.9, 0, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(240,206,144,.7)';
  ctx.fillStyle = '#d9c8b2';
  // base
  ctx.fillRect(-w, -h * 0.4, w * 2, h * 0.8);
  ctx.fillStyle = '#c2aa93';
  ctx.fillRect(-w, -h * 0.4, w * 0.6, h * 0.8);
  ctx.fillRect(w * 0.4, -h * 0.4, w * 0.6, h * 0.8);
  // central tower
  ctx.fillStyle = '#e5d5c2';
  ctx.fillRect(-w * 0.22, -h, w * 0.44, h * 1.35);
  // roofs
  ctx.fillStyle = '#5b5088';
  ctx.beginPath(); ctx.moveTo(-w * 1.08, -h * 0.4); ctx.lineTo(-w * 0.55, -h * 0.88); ctx.lineTo(-w * 0.02, -h * 0.4); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(w * 0.02, -h * 0.4); ctx.lineTo(w * 0.55, -h * 0.88); ctx.lineTo(w * 1.08, -h * 0.4); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(-w * 0.3, -h); ctx.lineTo(0, -h * 1.65); ctx.lineTo(w * 0.3, -h); ctx.closePath(); ctx.fill();
  // windows
  ctx.fillStyle = 'rgba(255,208,127,.95)';
  for (let i = -1; i <= 1; i++) {
    ctx.fillRect(i * w * 0.28 - w * 0.035, -h * 0.2, w * 0.07, h * 0.16);
  }
  ctx.fillRect(-w * 0.04, -h * 0.8, w * 0.08, h * 0.18);
  // star
  ctx.fillStyle = '#ffd47a';
  ctx.beginPath();
  drawStarPath(ctx, 0, -h * 1.85, 6 * sc, 2 * sc, 5);
  ctx.fill();
  ctx.strokeStyle = 'rgba(240,206,144,.8)';
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.restore();
  if (big) {
    ctx.fillStyle = 'rgba(255,238,204,.82)';
    ctx.font = `600 ${Math.round(17 * S / 1100)}px "Microsoft YaHei", sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('星梦城堡', mx, my + 31 * sc);
  }
}

function seededMapRandom(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function drawStarPath(ctx, x, y, outer, inner, points) {
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outer : inner;
    const px = x + Math.cos(a) * r;
    const py = y + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function mapHitTest(clientX, clientY) {
  const rect = els.bigmap.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const x = ((clientX - rect.left) / rect.width) * els.bigmap.width;
  const y = ((clientY - rect.top) / rect.height) * els.bigmap.height;
  // Scale the touch target with the rendered map. On phones the canvas is
  // shrunk a lot, so a fixed 52-canvas-pixel radius becomes almost unhittable.
  const displayScale = els.bigmap.width / rect.width;
  const dotPad = Math.max(52, 24 * displayScale);
  const labelPad = 6 * displayScale;
  let best = null;
  let bestD = dotPad;
  for (const h of mapHitAreas) {
    if (h.rx != null) {
      if (Math.abs(x - h.x) <= h.rx + labelPad && Math.abs(y - h.y) <= h.ry + labelPad) return h.id;
      continue;
    }
    const d = Math.hypot(x - h.x, y - h.y);
    if (d < bestD) { bestD = d; best = h.id; }
  }
  return best;
}

// resize / tick
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
window.addEventListener('orientationchange', () => setTimeout(onResize, 220));

// click canvas is reserved for looking, but a short tap while near does nothing
canvas.addEventListener('click', () => {
  if (phase === 'explore' && !uiLocked && nearestAttraction && dragDistance < 5) {
    // Tap-friendly shortcut for touch / mouse: only opens the card.
    openRidePanel(nearestAttraction);
  }
});

function updateMinimap(dt) {
  minimapClock += dt;
  if (minimapClock < 0.11) return;
  minimapClock = 0;
  drawMap(els.minimap, false);
  if (els.mapOverlay.classList.contains('open')) {
    bigMapClock += 0.11;
    if (bigMapClock > 0.2) {
      bigMapClock = 0;
      drawMap(els.bigmap, true);
    }
  }
}

function updateStarCollection() {
  if (phase !== 'explore' || uiLocked) return;
  for (const s of STARS) {
    if (collectedStars.has(s.id)) continue;
    const dx = player.position.x - s.position[0];
    const dz = player.position.z - s.position[2];
    if (dx * dx + dz * dz < 2.9 * 2.9) {
      collectStar(s.id);
    }
  }
}

function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.05, Math.max(0, (now - lastTime) / 1000));
  lastTime = now;
  if (pirateOpen || designPortal) return;
  elapsed += dt;

  if (phase === 'intro') updateIntroCamera(dt);
  else if (phase === 'ride') updateRide(dt);
  else if (phase === 'explore') updatePlayer(dt);

  updateDaylight(dt);
  environment.update(dt, elapsed);
  world.update(dt, elapsed, {
    lamp: environment.current.lamp,
    fireflies: environment.current.starOpacity,
    rideId: phase === 'ride' ? rideState.id : null,
    playerX: player.position.x,
    playerZ: player.position.z,
  });
  fireworks.update(dt, elapsed);

  if (phase === 'explore') {
    updateProximity(dt);
    updateStarCollection();
    updateZone();
  } else {
    nearestAttraction = null;
    els.interactPrompt.classList.add('hidden');
  }
  updateMarkers();
  updateMinimap(dt);
  if (mapHighlightTimer > 0) {
    mapHighlightTimer -= dt;
    if (mapHighlightTimer <= 0) mapHighlight = null;
  }

  composer.render();
}

// direct links: /?pirate=1, /?portal=balloon, /?portal=rainbow, /?visit=rainbow
const bootQuery = new URLSearchParams(window.location.search);
if (bootQuery.has('pirate')) {
  window.setTimeout(() => openPirateBay(), 900);
}
if (bootQuery.get('portal') === 'balloon' || bootQuery.has('balloon')) {
  window.setTimeout(() => openDesignPortal('balloon'), 900);
}
if (bootQuery.get('portal') === 'rainbow' || bootQuery.has('rainbow')) {
  window.setTimeout(() => openDesignPortal('rainbow'), 900);
}
const visitTarget = bootQuery.get('visit');
if (visitTarget) {
  const tryVisit = () => {
    if (els.enterBtn.disabled) {
      window.setTimeout(tryVisit, 280);
      return;
    }
    enterPark();
    window.setTimeout(() => {
      if (phase === 'explore') teleportTo(visitTarget);
    }, 3000);
  };
  window.setTimeout(tryVisit, 500);
}
const rideTarget = bootQuery.get('ride');
if (rideTarget && ATTRACTIONS.some((a) => a.id === rideTarget)) {
  const tryRide = () => {
    if (els.enterBtn.disabled) {
      window.setTimeout(tryRide, 280);
      return;
    }
    enterPark();
    window.setTimeout(() => {
      if (phase === 'explore') startRide(rideTarget);
    }, 1200);
  };
  window.setTimeout(tryRide, 500);
}

// boot
updateExploreCameraImmediate();
camera.up.set(0, 1, 0);
camera.position.set(120, 55, 110);
camera.lookAt(-22, 23, 0);
requestAnimationFrame(animate);

// initial loading
requestAnimationFrame(() => {
  els.loadingBar.querySelector('span').style.width = '70%';
  setTimeout(() => {
    els.loadingBar.querySelector('span').style.width = '100%';
    els.enterBtn.disabled = false;
    setTimeout(() => els.loadingBar.classList.add('hidden'), 700);
  }, 420);
});

// expose a tiny debug handle for QA; harmless in production
window.__ASTRALIA__ = {
  player, startRide, teleportTo, collectStar, setMode, rideState, fireworks, audio,
  phase: () => phase, scene, camera, renderer, world,
};

