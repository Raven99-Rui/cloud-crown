import * as THREE from './vendor/three/three.module.js';
import { CarouselAudio } from './audio.js';
import { PaperCarouselWorld } from './world.js';

const canvas = document.getElementById('scene');
const loader = document.getElementById('loader');
const webglError = document.getElementById('webglError');
const soundBtn = document.getElementById('soundBtn');
const nightBtn = document.getElementById('nightBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const rideBtn = document.getElementById('rideBtn');
const detailBtn = document.getElementById('detailBtn');
const detailPanel = document.getElementById('detailPanel');
const detailClose = document.getElementById('detailClose');
const detailRideBtn = document.getElementById('detailRideBtn');
const endRideBtn = document.getElementById('endRideBtn');
const horseDots = [...document.querySelectorAll('.horse-dot')];
const railSelection = document.getElementById('railSelection');
const rideStatusName = document.getElementById('rideStatusName');
const rideCaptionName = document.getElementById('rideCaptionName');
const toast = document.getElementById('toast');
const rideHud = document.getElementById('rideHud');
const metaTheme = document.querySelector('meta[name="theme-color"]');

const audio = new CarouselAudio();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let world;
try {
  world = new PaperCarouselWorld(canvas);
} catch (error) {
  console.error(error);
  if (loader) loader.classList.add('done');
  if (webglError) webglError.hidden = false;
  throw error;
}

const state = {
  riding: false,
  night: false,
  sound: false,
  detailOpen: false,
  selectedHorse: 0,
  hoveredHorse: -1,
  rideBlend: 0,
  rideYaw: 0,
  ridePitch: 0,
  rideYawTarget: 0,
  ridePitchTarget: 0,
  drag: null,
  pinch: null,
  pointers: new Map(),
  moved: false,
  overviewBaseFov: world.camera.fov,
  cameraReady: false,
};

const orbit = {
  azimuth: 0.47,
  polar: 1.37,
  zoom: 1,
  velAzimuth: 0,
  velPolar: 0,
  targetY: 4.42,
};

const cameraPosition = new THREE.Vector3();
const cameraQuaternion = new THREE.Quaternion();
const targetPosition = new THREE.Vector3();
const targetQuaternion = new THREE.Quaternion();
const overviewPosition = new THREE.Vector3();
const overviewQuaternion = new THREE.Quaternion();
const lookHelper = new THREE.PerspectiveCamera();
const clampedPolar = () => THREE.MathUtils.clamp(orbit.polar, 0.92, 1.49);

let toastTimer = 0;
let lastFrame = performance.now();
let frameCount = 0;
let started = false;

function showToast(message, duration = 2800) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), duration);
}

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

function setRailLabel() {
  if (!railSelection) return;
  if (state.hoveredHorse >= 0) {
    railSelection.textContent = `与${world.getHorseName(state.hoveredHorse)}同行`;
  } else {
    railSelection.textContent = '点击飞马，随圆舞曲启程';
  }
}

function setHovered(index) {
  if (state.hoveredHorse === index) return;
  state.hoveredHorse = index;
  world.setHovered(index);
  canvas.classList.toggle('is-hovering', index >= 0);
  horseDots.forEach((dot, i) => dot.classList.toggle('is-selected', i === index));
  setRailLabel();
}

function updateSoundButton() {
  soundBtn.classList.toggle('is-on', state.sound);
  document.body.classList.toggle('sound-on', state.sound);
  soundBtn.setAttribute('aria-pressed', String(state.sound));
  soundBtn.setAttribute('aria-label', state.sound ? '关闭圆舞曲声音' : '打开圆舞曲声音');
  const label = soundBtn.querySelector('.button-label');
  if (label) label.textContent = state.sound ? '静音' : '声音';
}

async function enableSound({ quiet = false } = {}) {
  if (state.sound) return true;
  const enabled = await audio.enable();
  state.sound = enabled;
  updateSoundButton();
  if (!quiet) {
    showToast(enabled ? '八音盒已上弦 · 纸马开始巡游' : '浏览器暂时没有允许声音');
  }
  return enabled;
}

async function toggleSound() {
  if (state.sound) {
    audio.disable();
    state.sound = false;
    updateSoundButton();
    showToast('圆舞曲暂时静音');
    return;
  }
  await enableSound();
}

function setNight(on) {
  state.night = on;
  world.setNight(on);
  document.body.classList.toggle('night', on);
  nightBtn.setAttribute('aria-pressed', String(on));
  nightBtn.setAttribute('aria-label', on ? '切回日间纸剧场' : '点亮夜灯');
  const label = nightBtn.querySelector('.button-label');
  if (label) label.textContent = on ? '日间' : '点灯';
  if (metaTheme) metaTheme.setAttribute('content', on ? '#1a0d15' : '#f1e3ce');
  showToast(on ? '暖灯亮起 · 纸剧场进入夜色' : '晨光回到纸剧场');
}

function updateFullscreenButton() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenBtn.setAttribute('aria-label', isFullscreen ? '退出全屏' : '进入全屏');
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    showToast('当前浏览器没有开放全屏');
  }
  updateFullscreenButton();
}

function setHorseNames(index) {
  const name = world.getHorseName(index);
  rideStatusName.textContent = `${name} · 巡游中`;
  rideCaptionName.textContent = name;
  railSelection.textContent = `与${name}同行`;
  horseDots.forEach((dot, i) => dot.classList.toggle('is-selected', i === index));
}

function openDetail() {
  if (state.detailOpen) return;
  state.detailOpen = true;
  document.body.classList.add('is-detail');
  detailPanel.setAttribute('aria-hidden', 'false');
  detailBtn.setAttribute('aria-expanded', 'true');
  setHovered(-1);
}

function closeDetail({ restoreFocus = false } = {}) {
  if (!state.detailOpen) return;
  state.detailOpen = false;
  document.body.classList.remove('is-detail');
  detailPanel.setAttribute('aria-hidden', 'true');
  detailBtn.setAttribute('aria-expanded', 'false');
  if (restoreFocus) detailBtn.focus({ preventScroll: true });
}

async function startRide(index = state.selectedHorse) {
  if (state.riding) return;
  closeDetail();
  state.selectedHorse = index;
  state.riding = true;
  state.rideYaw = 0;
  state.ridePitch = 0;
  state.rideYawTarget = 0;
  state.ridePitchTarget = 0;
  state.moved = false;
  setHorseNames(index);
  setHovered(-1);
  document.body.classList.add('is-riding');
  rideHud.setAttribute('aria-hidden', 'false');
  world.setRiding(true);
  audio.setRide(true);
  if (!state.sound) await enableSound({ quiet: true });
}

function endRide() {
  if (!state.riding) return;
  state.riding = false;
  document.body.classList.remove('is-riding');
  rideHud.setAttribute('aria-hidden', 'true');
  world.setRiding(false);
  audio.setRide(false);
  setHovered(-1);
  endRideBtn.blur();
  showToast('巡游结束 · 纸剧场仍为你亮着灯');
}

function computeOverviewPose() {
  const radius = world.defaultRadius() * orbit.zoom;
  const polar = clampedPolar();
  const sinPolar = Math.sin(polar);
  overviewPosition.set(
    Math.sin(orbit.azimuth) * sinPolar * radius,
    orbit.targetY + Math.cos(polar) * radius,
    Math.cos(orbit.azimuth) * sinPolar * radius,
  );
  lookHelper.position.copy(overviewPosition);
  lookHelper.up.set(0, 1, 0);
  lookHelper.lookAt(0, orbit.targetY, 0);
  overviewQuaternion.copy(lookHelper.quaternion);
  return { position: overviewPosition, quaternion: overviewQuaternion, fov: state.overviewBaseFov };
}

function cameraNudge(dt) {
  if (state.riding) {
    state.rideYaw = damp(state.rideYaw, state.rideYawTarget, 9, dt);
    state.ridePitch = damp(state.ridePitch, state.ridePitchTarget, 9, dt);
  }
  const overview = computeOverviewPose();

  if (state.rideBlend > 0.001) {
    const rig = world.getRidePose(state.selectedHorse, state.rideYaw, state.ridePitch);
    const smoothBlend = state.rideBlend * state.rideBlend * (3 - 2 * state.rideBlend);
    targetPosition.copy(overview.position).lerp(rig.position, smoothBlend);
    targetQuaternion.copy(overview.quaternion).slerp(rig.quaternion, smoothBlend);
    const targetFov = THREE.MathUtils.lerp(state.overviewBaseFov, rig.fov, smoothBlend);
    if (Math.abs(world.camera.fov - targetFov) > 0.01) {
      world.camera.fov = damp(world.camera.fov, targetFov, 8, dt);
      world.camera.updateProjectionMatrix();
    }
  } else {
    targetPosition.copy(overview.position);
    targetQuaternion.copy(overview.quaternion);
    if (Math.abs(world.camera.fov - state.overviewBaseFov) > 0.01) {
      world.camera.fov = damp(world.camera.fov, state.overviewBaseFov, 8, dt);
      world.camera.updateProjectionMatrix();
    }
  }

  const follow = state.rideBlend > 0.98 ? 18 : 8.5;
  if (!state.cameraReady) {
    cameraPosition.copy(targetPosition);
    cameraQuaternion.copy(targetQuaternion);
    world.camera.position.copy(cameraPosition);
    world.camera.quaternion.copy(cameraQuaternion);
    state.cameraReady = true;
  } else {
    cameraPosition.lerp(targetPosition, 1 - Math.exp(-follow * dt));
    cameraQuaternion.slerp(targetQuaternion, 1 - Math.exp(-follow * dt));
    world.camera.position.copy(cameraPosition);
    world.camera.quaternion.copy(cameraQuaternion);
  }
}

function animate(now) {
  const dt = Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000));
  lastFrame = now;

  if (!state.drag && !state.riding) {
    const autoSpeed = reduceMotion ? 0 : 0.0045;
    orbit.azimuth += autoSpeed * dt;
  }
  orbit.azimuth += orbit.velAzimuth * dt;
  orbit.polar = clampedPolar() + orbit.velPolar * dt;
  orbit.polar = clampedPolar();
  orbit.velAzimuth *= Math.exp(-4.5 * dt);
  orbit.velPolar *= Math.exp(-4.5 * dt);

  state.rideBlend = damp(state.rideBlend, state.riding ? 1 : 0, state.riding ? 2.15 : 2.9, dt);
  world.update(dt, now / 1000);
  cameraNudge(dt);
  world.render();

  frameCount += 1;
  if (!started && frameCount >= 2) {
    started = true;
    window.setTimeout(() => {
      document.body.classList.add('ready');
      loader.classList.add('done');
      loader.setAttribute('aria-hidden', 'true');
    }, 480);
  }

  requestAnimationFrame(animate);
}

/* ------------------------------------------------------------------ pointer */
function pointerDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

canvas.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  canvas.setPointerCapture?.(event.pointerId);
  state.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  state.moved = false;

  if (state.pointers.size === 2) {
    const [a, b] = [...state.pointers.values()];
    state.pinch = {
      startDistance: Math.max(1, pointerDistance(a, b)),
      startZoom: orbit.zoom,
    };
    state.drag = null;
    state.moved = true;
    canvas.classList.add('is-dragging');
    return;
  }

  if (state.detailOpen) closeDetail();
  state.drag = {
    id: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    x: event.clientX,
    y: event.clientY,
    riding: state.riding,
  };
  orbit.velAzimuth = 0;
  orbit.velPolar = 0;
  canvas.classList.add('is-dragging');
});

canvas.addEventListener('pointermove', (event) => {
  const pointer = state.pointers.get(event.pointerId);
  if (pointer) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }

  if (state.pointers.size === 2 && state.pinch) {
    const [a, b] = [...state.pointers.values()];
    const distance = Math.max(1, pointerDistance(a, b));
    orbit.zoom = THREE.MathUtils.clamp(
      state.pinch.startZoom * (state.pinch.startDistance / distance),
      0.66,
      1.32,
    );
    state.moved = true;
    return;
  }

  if (!state.drag) {
    if (!state.riding) {
      const index = world.raycastHorse(event.clientX, event.clientY);
      setHovered(index);
    }
    return;
  }

  const dx = event.clientX - state.drag.x;
  const dy = event.clientY - state.drag.y;
  state.drag.x = event.clientX;
  state.drag.y = event.clientY;
  if (Math.abs(event.clientX - state.drag.startX) + Math.abs(event.clientY - state.drag.startY) > 5) {
    state.moved = true;
  }

  if (state.riding) {
    state.rideYawTarget = THREE.MathUtils.clamp(state.rideYawTarget + dx * 0.005, -0.7, 0.7);
    state.ridePitchTarget = THREE.MathUtils.clamp(state.ridePitchTarget - dy * 0.0032, -0.58, 0.55);
  } else {
    orbit.azimuth -= dx * 0.0047;
    orbit.polar = clampedPolar() - dy * 0.0034;
    orbit.polar = clampedPolar();
    orbit.velAzimuth = -dx * 0.0047 * 5;
    orbit.velPolar = -dy * 0.0034 * 5;
    setHovered(-1);
  }
});

function finishPointer(event, { allowClick = true } = {}) {
  const hadPointers = state.pointers.size > 0;
  state.pointers.delete(event.pointerId);

  if (state.pointers.size < 2) {
    state.pinch = null;
  }

  if (state.drag && state.drag.id === event.pointerId) {
    const shouldSelect = allowClick && !state.moved && Math.abs(event.clientX - state.drag.startX) + Math.abs(event.clientY - state.drag.startY) < 6;
    state.drag = null;
    if (shouldSelect) {
      if (state.riding) {
        // A tap while riding is simply a soft look back to centre.
        state.rideYawTarget = 0;
        state.ridePitchTarget = 0;
      } else {
        const index = world.raycastHorse(event.clientX, event.clientY);
        if (index >= 0) {
          state.selectedHorse = index;
          startRide(index);
        }
      }
    }
  }

  if (!hadPointers || state.pointers.size === 0) {
    state.drag = null;
    state.pinch = null;
    canvas.classList.remove('is-dragging');
  }
}

canvas.addEventListener('pointerup', (event) => finishPointer(event));
canvas.addEventListener('pointercancel', (event) => finishPointer(event, { allowClick: false }));
canvas.addEventListener('pointerleave', () => {
  if (!state.drag && !state.riding) setHovered(-1);
});
canvas.addEventListener('wheel', (event) => {
  if (state.riding) return;
  event.preventDefault();
  orbit.zoom = THREE.MathUtils.clamp(orbit.zoom * Math.exp(event.deltaY * 0.00085), 0.66, 1.32);
}, { passive: false });

/* --------------------------------------------------------------------- UI */
soundBtn.addEventListener('click', toggleSound);
nightBtn.addEventListener('click', () => setNight(!state.night));
fullscreenBtn.addEventListener('click', toggleFullscreen);
rideBtn.addEventListener('click', () => startRide(state.selectedHorse));
detailBtn.addEventListener('click', openDetail);
detailClose.addEventListener('click', () => closeDetail({ restoreFocus: true }));
detailRideBtn.addEventListener('click', () => startRide(state.selectedHorse));
endRideBtn.addEventListener('click', endRide);

horseDots.forEach((dot, index) => {
  dot.addEventListener('pointerenter', () => {
    if (state.riding) return;
    setHovered(index);
    railSelection.textContent = `与${world.getHorseName(index)}同行`;
  });
  dot.addEventListener('pointerleave', () => {
    if (state.riding) return;
    setHovered(-1);
  });
  dot.addEventListener('focus', () => {
    if (!state.riding) setHovered(index);
  });
  dot.addEventListener('blur', () => {
    if (!state.riding) setHovered(-1);
  });
  dot.addEventListener('click', () => {
    state.selectedHorse = index;
    startRide(index);
  });
});

document.addEventListener('fullscreenchange', updateFullscreenButton);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (state.riding) {
      endRide();
    } else if (state.detailOpen) {
      closeDetail({ restoreFocus: true });
    }
  }
});

window.addEventListener('resize', () => {
  world.resize(window.innerWidth, window.innerHeight);
  state.overviewBaseFov = window.innerWidth / window.innerHeight < 0.7 ? 50 : window.innerWidth / window.innerHeight < 1.05 ? 40 : 34;
  if (!state.riding) {
    world.camera.fov = state.overviewBaseFov;
    world.camera.updateProjectionMatrix();
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    window.clearTimeout(toastTimer);
    toast.classList.remove('is-visible');
  }
});

// Warm, non-blocking initial composition.
cameraNudge(0.016);
world.render();
updateSoundButton();
updateFullscreenButton();
setHorseNames(state.selectedHorse);
setRailLabel();

window.__paperCarousel = { world, state, orbit, audio, startRide, endRide };
requestAnimationFrame(animate);
