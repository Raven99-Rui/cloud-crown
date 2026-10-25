import * as THREE from 'three';
import { createWorld } from './world.js';
import { BayAudio } from './audio.js';

const $ = (id) => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const rad2deg = THREE.MathUtils.radToDeg;
const deg2rad = THREE.MathUtils.degToRad;

const isCoarse = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 780;
const params = new URLSearchParams(window.location.search);
if (params.has('qa')) document.body.classList.add('qa-mode');
if (params.has('debug')) document.body.classList.add('debug-mode');
const canvas = $('stage');
const fatalEl = $('fatalError');
const fatalText = $('fatalErrorText');
let fatalShown = false;

function showFatal(error) {
  const message = error && (error.stack || error.message) ? (error.stack || error.message) : String(error);
  console.error('[BlackSail]', error);
  if (fatalShown) return;
  fatalShown = true;
  if (fatalEl && fatalText) {
    fatalEl.classList.add('is-open');
    fatalText.textContent = message;
  }
  document.body.dataset.sceneError = message.slice(0, 500);
}
window.addEventListener('error', (e) => showFatal(e.error || e.message));
window.addEventListener('unhandledrejection', (e) => showFatal(e.reason));

/* ---------------- renderer ---------------- */
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
const pixelBudget = isCoarse ? 1_700_000 : 3_300_000;
const pixelRatio = Math.max(1, Math.min(window.devicePixelRatio || 1, isCoarse ? 1.4 : 1.7, Math.sqrt(pixelBudget / (window.innerWidth * window.innerHeight))));
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = !isCoarse;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const BASE_FOV = isCoarse ? 56 : 40;
const RIDE_FOV = isCoarse ? 62 : 51;
const RIDE_DISTANCE = isCoarse ? 33 : 26.5;
const camera = new THREE.PerspectiveCamera(BASE_FOV, window.innerWidth / window.innerHeight, 0.08, 900);
camera.position.set(20.2, 15.7, 33.6);
camera.lookAt(0, 8.7, 0);

const world = createWorld(renderer, { mobile: isCoarse });
const stageScene = world.scene;

/* ---------------- audio ---------------- */
const audio = new BayAudio();
let audioEnabled = false;
let muted = true;

/* ---------------- ui refs ---------------- */
const els = {
  loading: $('loading'),
  loadFill: $('loadFill'),
  loadNote: $('loadNote'),
  topbar: $('topbar'),
  hero: $('hero'),
  viewRail: $('viewRail'),
  console: $('console'),
  hotspots: $('hotspots'),
  focusNote: $('focusNote'),
  focusClose: $('focusClose'),
  focusKicker: $('focusKicker'),
  focusTitle: $('focusTitle'),
  focusCopy: $('focusCopy'),
  focusMeta: $('focusMeta'),
  ampSlider: $('ampSlider'),
  ampValue: $('ampValue'),
  rideBtn: $('rideBtn'),
  tourBtn: $('tourBtn'),
  soundBtn: $('soundBtn'),
  moodBtn: $('moodBtn'),
  helpBtn: $('helpBtn'),
  fullBtn: $('fullBtn'),
  helpModal: $('helpModal'),
  rideHud: $('rideHud'),
  rideAmpLabel: $('rideAmpLabel'),
  rideHint: $('rideHint'),
  exitRide: $('exitRide'),
  boostBtn: $('boostBtn'),
  gaugeNeedle: $('gaugeNeedle'),
  rideAngle: $('rideAngle'),
  rideSide: $('rideSide'),
  statAngle: $('statAngle'),
  statHeight: $('statHeight'),
  statSpeed: $('statSpeed'),
  statG: $('statG'),
  toast: $('toast'),
  clockText: $('clockText'),
};

/* ---------------- orbit camera ---------------- */
class OrbitRig {
  constructor(cam, dom, canOrbit) {
    this.camera = cam;
    this.dom = dom;
    this.canOrbit = canOrbit;
    this.target = new THREE.Vector3(0, 7.5, 0);
    this.radius = 34;
    this.theta = 0.58;
    this.phi = 1.46;
    this.radiusGoal = 34;
    this.autoRotate = false;
    this.dragging = false;
    this.pointers = new Map();
    this.prevPinch = 0;
    this.velocityTheta = 0;
    this.velocityPhi = 0;
    this.lastMove = 0;
    this.tween = null;
    this.enabled = true;
    this.bind();
    this.syncFromCamera();
  }

  bind() {
    const dom = this.dom;
    dom.addEventListener('pointerdown', (e) => {
      if (!this.enabled || !this.canOrbit()) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (this.tween) this.cancelTween();
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (this.pointers.size === 1) {
        this.dragging = true;
        this.lastMove = performance.now();
        this.velocityTheta = 0;
        this.velocityPhi = 0;
        dom.classList.add('is-dragging');
      }
      if (this.pointers.size === 2) {
        this.prevPinch = this.pinchDistance();
      }
      try { dom.setPointerCapture(e.pointerId); } catch { /* ignore */ }
    });

    dom.addEventListener('pointermove', (e) => {
      if (!this.pointers.has(e.pointerId)) return;
      const prev = this.pointers.get(e.pointerId);
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (!this.canOrbit()) return;
      if (this.pointers.size === 2) {
        const d = this.pinchDistance();
        if (this.prevPinch > 0) {
          this.radiusGoal = clamp(this.radiusGoal * (this.prevPinch / d), 5.5, 70);
        }
        this.prevPinch = d;
        return;
      }
      if (!this.dragging) return;
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      this.theta -= dx * 0.0041;
      this.phi -= dy * 0.0035;
      this.phi = clamp(this.phi, 0.24, 1.9);
      this.velocityTheta = -dx * 0.0022;
      this.velocityPhi = -dy * 0.0018;
      this.lastMove = performance.now();
      this.setTour(false);
    });

    const end = (e) => {
      if (!this.pointers.has(e.pointerId)) return;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 0) {
        this.dragging = false;
        dom.classList.remove('is-dragging');
        if (performance.now() - this.lastMove > 90) {
          this.velocityTheta = 0;
          this.velocityPhi = 0;
        }
      }
      if (this.pointers.size < 2) this.prevPinch = 0;
    };
    dom.addEventListener('pointerup', end);
    dom.addEventListener('pointercancel', end);
    dom.addEventListener('lostpointercapture', end);
    dom.addEventListener('wheel', (e) => {
      if (!this.enabled || !this.canOrbit()) return;
      e.preventDefault();
      this.radiusGoal = clamp(this.radiusGoal * (1 + clamp(e.deltaY * 0.0011, -0.18, 0.18)), 5.5, 70);
    }, { passive: false });
  }

  pinchDistance() {
    const pts = [...this.pointers.values()];
    if (pts.length < 2) return 0;
    return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
  }

  syncFromCamera() {
    const off = this.camera.position.clone().sub(this.target);
    this.radius = Math.max(1.5, off.length());
    this.radiusGoal = this.radius;
    this.theta = Math.atan2(off.x, off.z);
    this.phi = Math.acos(clamp(off.y / this.radius, -1, 1));
  }

  setView(view, instant = false) {
    if (instant) {
      this.tween = null;
      this.target.copy(view.target);
      this.camera.position.copy(view.pos);
      this.camera.lookAt(this.target);
      this.syncFromCamera();
      return;
    }
    this.flyTo(view.pos, view.target, 1.7);
  }

  flyTo(pos, target, duration = 1.6) {
    this.tween = {
      t: 0,
      duration,
      startPos: this.camera.position.clone(),
      endPos: pos.clone(),
      startTarget: this.target.clone(),
      endTarget: target.clone(),
    };
    this.velocityTheta = 0;
    this.velocityPhi = 0;
    this.autoRotate = false;
  }

  cancelTween() {
    this.tween = null;
    this.syncFromCamera();
  }

  setTour(on) {
    this.autoRotate = on;
    const btn = els.tourBtn;
    if (btn) {
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-label', on ? '停止自动环游' : '自动环游');
    }
  }

  update(dt) {
    if (this.tween) {
      const tw = this.tween;
      tw.t += dt;
      const k = Math.min(1, tw.t / tw.duration);
      const e = easeInOut(k);
      this.camera.position.lerpVectors(tw.startPos, tw.endPos, e);
      this.target.lerpVectors(tw.startTarget, tw.endTarget, e);
      this.camera.lookAt(this.target);
      if (k >= 1) {
        this.tween = null;
        this.syncFromCamera();
      }
      return;
    }

    if (!this.dragging) {
      if (Math.abs(this.velocityTheta) > 0.00001) {
        this.theta += this.velocityTheta;
        this.velocityTheta *= Math.exp(-dt * 4.5);
      }
      if (Math.abs(this.velocityPhi) > 0.00001) {
        this.phi = clamp(this.phi + this.velocityPhi, 0.24, 1.9);
        this.velocityPhi *= Math.exp(-dt * 4.5);
      }
      if (this.autoRotate) this.theta += dt * 0.055;
    }

    this.radiusGoal = clamp(this.radiusGoal, 5.5, 70);
    this.radius += (this.radiusGoal - this.radius) * (1 - Math.exp(-dt * 7));
    this.phi = clamp(this.phi, 0.24, 1.9);

    const sinPhi = Math.sin(this.phi);
    this.camera.position.set(
      this.target.x + this.radius * sinPhi * Math.sin(this.theta),
      this.target.y + this.radius * Math.cos(this.phi),
      this.target.z + this.radius * sinPhi * Math.cos(this.theta),
    );
    this.camera.lookAt(this.target);
  }
}

const state = {
  mode: 'explore',
  night: false,
  dragging: false,
  view: 'overview',
  focus: null,
  amp: 68,
  rideAmp: 68,
  angle: 0,
  speed: 0,
  g: 1,
  height: 0,
  boarding: 0,
  exit: 0,
  energy: 0,
};

// ASTRALIA can open the bay at night so the special attraction matches the park
if (params.get('time') === 'night') {
  state.night = true;
  world.setNight(true, true);
  document.body.classList.add('mode-night');
}

const orbit = new OrbitRig(camera, canvas, () => state.mode === 'explore');
orbit.target.copy(world.views.overview.target);
orbit.camera.position.copy(world.views.overview.pos);
orbit.camera.lookAt(world.views.overview.target);
orbit.syncFromCamera();

/* ---------------- views + details ---------------- */
const focusConfig = {
  figurehead: { anchor: 'figurehead', offset: [7.9, -1.2, 12.6], target: [0, 0.25, 0.1] },
  wheel: { anchor: 'wheel', offset: [4.6, 2.1, 3.4], target: [0, 0.15, 0] },
  flag: { anchor: 'flag', offset: [9.4, -4.1, 12.6], target: [0, 0.15, 0] },
  gate: { static: { pos: [4.6, 7.0, 23.0], target: [-6.2, 5.5, 6.7] } },
};
const focusContent = {
  figurehead: {
    kicker: 'DETAIL 02 / FIGUREHEAD',
    title: '鎏金骷髅船首',
    copy: '船首的鎏金骷髅迎着潮风，眼窝里盛着一点旧船灯的光。它不只是装饰——老水手说，它会替整船人记住回航的方向。',
    meta: '复刻自 1908 年黑帆号首航船首像',
  },
  wheel: {
    kicker: 'DETAIL 03 / SHIP’S WHEEL',
    title: '航海舵轮',
    copy: '八根铜柄，一圈被手掌磨亮的木缘。船长会在这里数着浪，等下一次摆荡越过最高点，再把船头交还给风。',
    meta: '柚木与黄铜 · 直径 1.5 m',
  },
  flag: {
    kicker: 'DETAIL 04 / JOLLY ROGER',
    title: '黑帆海盗旗',
    copy: '主桅顶上的黑帆旗被风撕出缺口，骷髅与交叉骨仍看得清。入夜以后，旗面会接住最后一盏码头灯，在桅顶发亮。',
    meta: '手工缝制 · 5.8 m² 做旧帆布',
  },
  gate: {
    kicker: 'DETAIL 05 / THE GATE',
    title: '黑帆湾入口牌坊',
    copy: '蓝绿漆木、鎏金卷草，和一块写着「海盗船」的旧牌匾。站在门下抬头，能看见桅顶的旗正从暮色里掠过。',
    meta: '黑帆湾码头 · 登船口',
  },
};

function resolveView(name) {
  if (name === 'overview') {
    return { pos: world.views.overview.pos.clone(), target: world.views.overview.target.clone() };
  }
  const cfg = focusConfig[name];
  if (!cfg) return null;
  if (cfg.static) {
    return { pos: new THREE.Vector3(...cfg.static.pos), target: new THREE.Vector3(...cfg.static.target) };
  }
  const anchor = world.getLandmarkWorld(cfg.anchor);
  if (!anchor) return null;
  return {
    pos: anchor.clone().add(new THREE.Vector3(...cfg.offset)),
    target: anchor.clone().add(new THREE.Vector3(...cfg.target)),
  };
}

const viewButtons = [...document.querySelectorAll('.view-btn')];

function setFocus(name, openNote = true, instant = false) {
  if (state.mode !== 'explore') return;
  const view = resolveView(name);
  if (!view) return;
  orbit.setView(view, instant);
  state.view = name;
  viewButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.view === name));
  if (name === 'overview') {
    els.focusNote.classList.remove('is-open');
    state.focus = null;
    document.body.classList.remove('has-focus');
    return;
  }
  document.body.classList.add('has-focus');
  if (openNote) {
    const c = focusContent[name];
    if (c) {
      els.focusKicker.textContent = c.kicker;
      els.focusTitle.textContent = c.title;
      els.focusCopy.textContent = c.copy;
      els.focusMeta.textContent = c.meta;
      els.focusNote.classList.add('is-open');
    }
  }
}

function closeFocusNote(returnToOverview = true) {
  els.focusNote.classList.remove('is-open');
  state.focus = null;
  document.body.classList.remove('has-focus');
  if (returnToOverview && state.mode === 'explore' && state.view !== 'overview') {
    const view = resolveView('overview');
    if (view) orbit.setView(view);
    state.view = 'overview';
    viewButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.view === 'overview'));
  }
}

viewButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    orbit.setTour(false);
    setFocus(btn.dataset.view, btn.dataset.view !== 'overview');
  });
});

els.focusClose.addEventListener('click', () => closeFocusNote(true));

/* ---------------- 3D hotspots ---------------- */
const hotspotData = [
  { name: 'figurehead', label: '船首骨雕', index: '02', offset: [0, 0] },
  { name: 'wheel', label: '航海舵轮', index: '03', offset: [0, 0] },
  { name: 'flag', label: '海盗旗', index: '04', offset: [0, 0] },
  { name: 'gate', label: '入口牌坊', index: '05', offset: [0, 0] },
];
for (const h of hotspotData) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'hotspot';
  btn.dataset.view = h.name;
  btn.innerHTML = `<span class="hs-pin"><b>${h.index}</b></span><span class="hs-label"><small>${h.index}</small>${h.label}</span>`;
  btn.setAttribute('aria-label', `查看${h.label}`);
  btn.addEventListener('click', () => {
    orbit.setTour(false);
    setFocus(h.name, true);
  });
  els.hotspots.appendChild(btn);
  h.el = btn;
  h.world = new THREE.Vector3();
}
const projected = new THREE.Vector3();

function updateHotspots() {
  const show = state.mode === 'explore';
  const w = window.innerWidth;
  const hgt = window.innerHeight;
  const narrow = w < 620;
  for (const h of hotspotData) {
    if (!show) {
      h.el.classList.remove('is-visible');
      continue;
    }
    const p = world.getLandmarkWorld(h.name);
    if (!p) {
      h.el.classList.remove('is-visible');
      continue;
    }
    projected.copy(p).project(camera);
    const x = (projected.x * 0.5 + 0.5) * w;
    const y = (-projected.y * 0.5 + 0.5) * hgt;
    const inFrame = projected.z > -1 && projected.z < 1
      && x > (narrow ? 22 : 42) && x < w - (narrow ? 22 : 56)
      && y > (narrow ? 92 : 88) && y < hgt - (narrow ? 178 : 160);
    if (!inFrame) {
      h.el.classList.remove('is-visible');
      continue;
    }
    h.el.style.left = `${x}px`;
    h.el.style.top = `${y}px`;
    h.el.classList.add('is-visible');
  }
}

/* ---------------- loading reveal ---------------- */
let loadProgress = 10;
els.loadFill.style.width = '10%';
function setLoad(p, text) {
  loadProgress = p;
  els.loadFill.style.width = `${p}%`;
  if (text) els.loadNote.textContent = text;
}

// Give the first couple of frames a moment; the scene itself is already built.
let bootTimer = null;
function finishLoading() {
  setLoad(100, '黑帆升起，码头放行。');
  window.clearInterval(bootTimer);
  window.setTimeout(() => {
    els.loading.classList.add('is-done');
    document.body.classList.add('ui-ready');
    window.setTimeout(() => {
      els.loading.style.display = 'none';
    }, 1000);
    window.setTimeout(() => {
      if (!params.has('qa')) showToast('拖动环视 · 调整摆幅 · 点击「登上黑帆号」起航', 4200);
      // small, deliberate hooks for visual regression captures
      if (params.has('view')) {
        window.setTimeout(() => {
          setFocus(params.get('view'), params.get('view') !== 'overview', true);
          updateHotspots();
          renderNow();
        }, 500);
      }
      if (params.get('night') === '1') {
        window.setTimeout(() => {
          state.night = true;
          world.setNight(true, true);
          document.body.classList.add('mode-night');
          renderNow();
        }, 500);
      }
      if (params.get('ride') === '1') {
        window.setTimeout(() => {
          boardRide();
          if (params.get('pose') !== '0') poseRideForCapture();
          renderNow();
        }, 700);
      }
      if (params.get('exit') === '1') {
        window.setTimeout(() => {
          beginExit();
          renderNow();
        }, 3600);
      }
      if (params.get('help') === '1') window.setTimeout(openHelp, 700);
    }, 950);
  }, 520);
}

bootTimer = window.setInterval(() => {
  if (loadProgress >= 93) return;
  const add = loadProgress < 55 ? 8 : 4;
  setLoad(Math.min(93, loadProgress + add), loadProgress > 66 ? '正在点亮船灯与码头旗……' : undefined);
}, 140);

window.setTimeout(finishLoading, 1250);

/* ---------------- toast ---------------- */
let toastTimer = 0;
function showToast(text, ms = 2400) {
  els.toast.textContent = text;
  els.toast.classList.add('is-show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => els.toast.classList.remove('is-show'), ms);
}

/* ---------------- audio controls ---------------- */
els.soundBtn.classList.add('is-muted');
els.soundBtn.setAttribute('aria-label', '打开声音');

async function toggleSound() {
  if (!audioEnabled) {
    const ok = await audio.enable();
    if (!ok) {
      showToast('当前浏览器不支持实时音频');
      return;
    }
    audioEnabled = true;
    muted = false;
    els.soundBtn.classList.remove('is-muted');
    els.soundBtn.setAttribute('aria-label', '静音');
    showToast('海风、木桅与远处鸥鸣已开启', 2800);
    if (state.mode === 'ride' || state.mode === 'boarding') audio.setRide(true);
    return;
  }
  muted = !muted;
  audio.setMuted(muted);
  els.soundBtn.classList.toggle('is-muted', muted);
  els.soundBtn.setAttribute('aria-label', muted ? '打开声音' : '静音');
  showToast(muted ? '已静音' : '声音已开启', 1500);
}
els.soundBtn.addEventListener('click', toggleSound);

/* ---------------- mood ---------------- */
els.moodBtn.addEventListener('click', () => {
  state.night = !state.night;
  world.setNight(state.night);
  document.body.classList.toggle('mode-night', state.night);
  showToast(state.night ? '夜航模式 · 码头灯与星子亮了' : '暮色模式 · 金色时刻', 2200);
});

/* ---------------- help ---------------- */
function openHelp() {
  els.helpModal.classList.add('is-open');
  els.helpModal.setAttribute('aria-hidden', 'false');
}
function closeHelp() {
  els.helpModal.classList.remove('is-open');
  els.helpModal.setAttribute('aria-hidden', 'true');
}
els.helpBtn.addEventListener('click', openHelp);
els.helpModal.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', closeHelp));

/* ---------------- fullscreen ---------------- */
els.fullBtn.addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch {
    showToast('当前窗口无法进入全屏');
  }
});

/* ---------------- amplitude ---------------- */
function syncAmpUi() {
  const val = Number(els.ampSlider.value);
  state.amp = val;
  els.ampValue.textContent = `${val}°`;
  const pct = ((val - 30) / (78 - 30)) * 100;
  els.ampSlider.style.setProperty('--fill', `${pct}%`);
}
els.ampSlider.addEventListener('input', syncAmpUi);
syncAmpUi();

/* ---------------- ride camera ----------------
   A close, banked tracking camera follows the ship through its arc.
   The rider can drag to orbit the vessel while the ride is in motion.  */
const rideWorldPos = new THREE.Vector3();
const desiredQuat = new THREE.Quaternion();
const bankQuat = new THREE.Quaternion();
const rideLookCam = new THREE.PerspectiveCamera();
const camForwardAxis = new THREE.Vector3(0, 0, 1);
const chaseTarget = new THREE.Vector3();
const hubPoint = new THREE.Vector3();
const rideCam = {
  theta: 0.32,
  phi: 1.34,
  radius: RIDE_DISTANCE,
  pointer: null,
  lastX: 0,
  lastY: 0,
};
let exitStart = null;
let savedView = null;
let startPos = new THREE.Vector3();
let startQuat = new THREE.Quaternion();
let startFov = BASE_FOV;
let endPos = new THREE.Vector3();
let endQuat = new THREE.Quaternion();
let endFov = BASE_FOV;
let endViewPos = new THREE.Vector3();
let endViewTarget = new THREE.Vector3();
let rideAmpGoal = 68;

function computeChasePose(outPos, outQuat, outTarget) {
  // Orbit the fixed axle rather than the hull centre, so the entire vessel
  // remains framed while it wheels through the arc.
  chaseTarget.set(Math.sin(state.angle) * 1.1, 13.65, 0.2);
  if (outTarget) outTarget.copy(chaseTarget);

  const theta = rideCam.theta + Math.sin(elapsed * 0.16) * 0.02 + state.angle * 0.075;
  const phi = clamp(rideCam.phi + Math.abs(state.angle) * 0.012, 0.45, 1.43);
  const radius = rideCam.radius;
  const sinPhi = Math.sin(phi);
  outPos.set(
    chaseTarget.x + radius * sinPhi * Math.sin(theta),
    chaseTarget.y + radius * Math.cos(phi),
    chaseTarget.z + radius * sinPhi * Math.cos(theta),
  );

  rideLookCam.position.copy(outPos);
  rideLookCam.up.set(0, 1, 0);
  rideLookCam.lookAt(chaseTarget);
  outQuat.copy(rideLookCam.quaternion);
  // a subtle bank so the turn feels physical without disorienting the guest
  bankQuat.setFromAxisAngle(camForwardAxis, -state.angle * 0.055 - state.speed * 0.0025);
  outQuat.multiply(bankQuat);
}

function boardRide() {
  if (state.mode !== 'explore') return;
  const wasFocused = state.view !== 'overview' || document.body.classList.contains('has-focus');
  closeFocusNote(false);
  orbit.setTour(false);
  savedView = wasFocused
    ? { pos: world.views.overview.pos.clone(), target: world.views.overview.target.clone(), fov: BASE_FOV }
    : { pos: camera.position.clone(), target: orbit.target.clone(), fov: camera.fov };
  if (wasFocused) {
    state.view = 'overview';
    viewButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.view === 'overview'));
  }
  startPos.copy(camera.position);
  startQuat.copy(camera.quaternion);
  startFov = camera.fov;
  rideAmpGoal = Number(els.ampSlider.value);
  state.rideAmp = rideAmpGoal;
  state.mode = 'boarding';
  state.boarding = 0;
  rideCam.theta = 0.32;
  rideCam.phi = 1.34;
  rideCam.radius = RIDE_DISTANCE;
  rideCam.pointer = null;
  document.body.classList.add('is-riding');
  canvas.classList.add('is-riding');
  els.rideAmpLabel.textContent = `${rideAmpGoal}° 摆幅`;
  els.rideHint.textContent = '拖动画面，环绕黑帆号';
  audio.setRide(true);
}

function beginExit() {
  if (state.mode !== 'ride' && state.mode !== 'boarding') return;
  state.mode = 'exiting';
  state.exit = 0;
  exitStart = {
    pos: camera.position.clone(),
    quat: camera.quaternion.clone(),
    fov: camera.fov,
  };
  endViewPos.copy(savedView ? savedView.pos : world.views.overview.pos);
  endViewTarget.copy(savedView ? savedView.target : world.views.overview.target);
  const lookCam = new THREE.PerspectiveCamera();
  lookCam.position.copy(endViewPos);
  lookCam.lookAt(endViewTarget);
  endQuat.copy(lookCam.quaternion);
  endPos.copy(endViewPos);
  endFov = savedView ? savedView.fov : BASE_FOV;
  audio.setRide(false);
  rideCam.pointer = null;
}

els.rideBtn.addEventListener('click', boardRide);
els.exitRide.addEventListener('click', beginExit);
els.boostBtn.addEventListener('click', boostRide);

function boostRide() {
  if (state.mode !== 'ride' && state.mode !== 'boarding') return;
  if (rideAmpGoal >= 78) {
    showToast('已经到最高摆幅 · 78° 是黑帆号的极限', 1800);
    return;
  }
  rideAmpGoal = Math.min(78, rideAmpGoal + 6);
  state.rideAmp = rideAmpGoal;
  els.ampSlider.value = String(rideAmpGoal);
  syncAmpUi();
  els.rideAmpLabel.textContent = `${rideAmpGoal}° 摆幅`;
  els.boostBtn.classList.remove('is-pulse');
  void els.boostBtn.offsetWidth;
  els.boostBtn.classList.add('is-pulse');
  audio.boost();
  if (rideAmpGoal > 76) showToast('黑帆号正在挑战 80° 摆幅', 1600);
}

/* ---------------- tour ---------------- */
els.tourBtn.addEventListener('click', () => {
  if (state.mode !== 'explore') return;
  const on = !orbit.autoRotate;
  if (on) {
    closeFocusNote(true);
    viewButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.view === 'overview'));
    state.view = 'overview';
    showToast('自动环游 · 拖动画面可随时接管', 2200);
  }
  orbit.setTour(on);
});

/* ---------------- ride camera drag ---------------- */
canvas.addEventListener('pointerdown', (e) => {
  if (state.mode !== 'ride') return;
  rideCam.pointer = e.pointerId;
  rideCam.lastX = e.clientX;
  rideCam.lastY = e.clientY;
  try { canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
});
canvas.addEventListener('pointermove', (e) => {
  if (state.mode !== 'ride' || rideCam.pointer !== e.pointerId) return;
  const dx = e.clientX - rideCam.lastX;
  const dy = e.clientY - rideCam.lastY;
  rideCam.lastX = e.clientX;
  rideCam.lastY = e.clientY;
  rideCam.theta -= dx * 0.0036;
  rideCam.phi = clamp(rideCam.phi - dy * 0.0028, 0.55, 1.44);
});
const endRideLook = (e) => {
  if (rideCam.pointer === e.pointerId) rideCam.pointer = null;
};
canvas.addEventListener('pointerup', endRideLook);
canvas.addEventListener('pointercancel', endRideLook);
canvas.addEventListener('wheel', (e) => {
  if (state.mode !== 'ride') return;
  e.preventDefault();
  rideCam.radius = clamp(rideCam.radius * (1 + clamp(e.deltaY * 0.0008, -0.12, 0.12)), 15, 34);
}, { passive: false });

/* ---------------- keyboard ---------------- */
window.addEventListener('keydown', (e) => {
  if (els.helpModal.classList.contains('is-open')) {
    if (e.key === 'Escape') closeHelp();
    return;
  }
  const tag = e.target && e.target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') {
    if (e.key === 'Escape') {
      if (els.helpModal.classList.contains('is-open')) closeHelp();
      else if (state.mode === 'ride' || state.mode === 'boarding') beginExit();
      else closeFocusNote(true);
    }
    return;
  }
  if (e.code === 'Space') {
    e.preventDefault();
    if (state.mode === 'ride' || state.mode === 'boarding') boostRide();
    else if (state.mode === 'explore') boardRide();
  } else if (e.key === 'Escape') {
    if (els.helpModal.classList.contains('is-open')) closeHelp();
    else if (state.mode === 'ride' || state.mode === 'boarding') beginExit();
    else if (els.focusNote.classList.contains('is-open')) closeFocusNote(true);
  } else if (e.key.toLowerCase() === 'm') {
    toggleSound();
  } else if (e.key.toLowerCase() === 'r') {
    if (state.mode === 'explore') {
      orbit.setTour(false);
      setFocus('overview', false);
    }
  } else if (e.key.toLowerCase() === 'f') {
    els.fullBtn.click();
  } else if (e.key.toLowerCase() === 'h') {
    openHelp();
  } else if (e.key >= '1' && e.key <= '5' && state.mode === 'explore') {
    const names = ['overview', 'figurehead', 'wheel', 'flag', 'gate'];
    setFocus(names[Number(e.key) - 1], Number(e.key) > 1);
  }
});

/* ---------------- swing physics ---------------- */
const swing = {
  phase: 0.75,
  amp: deg2rad(3.2),
  maxAmp: deg2rad(78),
  speed: 0,
  angle: 0,
};
const L = 6.8;

function updateSwing(dt) {
  const active = state.mode === 'ride' || state.mode === 'boarding';
  const target = active ? deg2rad(rideAmpGoal) : deg2rad(3.2);
  const rate = active ? 0.68 : 0.8;
  swing.amp += (target - swing.amp) * (1 - Math.exp(-dt * rate));

  const norm = swing.amp / swing.maxAmp;
  const angularSpeed = active ? 1.08 + norm * 0.13 : 0.58;
  swing.phase += dt * angularSpeed;
  const angle = swing.amp * Math.sin(swing.phase);
  swing.angle = angle;
  swing.speed = swing.amp * angularSpeed * Math.cos(swing.phase);

  const rig = world.ship.rig;
  rig.rotation.z = angle;
  rig.rotation.x = Math.sin(swing.phase * 2 + 0.4) * 0.008 * norm;
  rig.rotation.y = Math.sin(swing.phase * 0.7 + 1.2) * 0.006 * norm;
  rig.updateWorldMatrix(true, true);

  state.angle = angle;
  state.speed = Math.abs(swing.speed) * L;
  state.g = 1 + (L * swing.speed * swing.speed) / 9.81;
  state.energy = clamp(norm * 1.05, 0, 1);

  world.setEnergy(state.energy);
}

/* ---------------- hud ---------------- */
function updateHud(dt) {
  if (state.mode !== 'ride' && state.mode !== 'boarding' && state.mode !== 'exiting') return;
  const angleDeg = Math.abs(rad2deg(state.angle));
  const sign = state.angle >= 0 ? 1 : -1;
  const side = angleDeg < 1.2 ? '正中' : sign > 0 ? '左摆' : '右摆';
  hubPoint.set(0, -7.35, 0);
  world.ship.rig.localToWorld(hubPoint);
  const height = Math.max(0, hubPoint.y - 0.7);
  const speed = state.speed;
  const g = state.g;

  els.gaugeNeedle.style.transform = `rotate(${angleDeg * 0.92 * sign}deg)`;
  els.rideAngle.textContent = `${Math.round(angleDeg)}°`;
  els.rideSide.textContent = side;
  els.statAngle.textContent = `${Math.round(angleDeg)}°`;
  els.statHeight.innerHTML = `${Math.max(0, height).toFixed(1)}<em>m</em>`;
  els.statSpeed.innerHTML = `${speed.toFixed(1)}<em>m/s</em>`;
  els.statG.innerHTML = `${g.toFixed(2)}<em>g</em>`;
  const rush = clamp((speed / 12) * 0.75 + (angleDeg / 78) * 0.22, 0, 1);
  document.documentElement.style.setProperty('--rush', rush.toFixed(2));
  if (state.mode === 'ride') {
    els.rideHint.textContent = speed > 7 ? '风从耳边过去了' : speed > 3 ? '船头正在抬高' : '拖动画面，环绕黑帆号';
  }
}

/* ---------------- elapsed + update loop ---------------- */
let elapsed = 0;
const clock = new THREE.Clock();
let frames = 0;
let fpsStamp = 0;
let fps = 0;

function tick() {
  const dt = Math.min(clock.getDelta(), 1 / 24);
  elapsed += dt;

  updateSwing(dt);
  world.update(dt, elapsed);

  if (state.mode === 'boarding') {
    state.boarding += dt;
    const k = easeInOut(Math.min(1, state.boarding / 2.15));
    computeChasePose(rideWorldPos, desiredQuat, chaseTarget);
    camera.position.lerpVectors(startPos, rideWorldPos, k);
    camera.quaternion.copy(startQuat).slerp(desiredQuat, k);
    camera.fov = lerp(startFov, RIDE_FOV, k);
    camera.updateProjectionMatrix();
    if (state.boarding >= 2.15) {
      state.mode = 'ride';
      camera.fov = RIDE_FOV;
      camera.updateProjectionMatrix();
    }
  } else if (state.mode === 'ride') {
    computeChasePose(rideWorldPos, desiredQuat, chaseTarget);
    const smooth = 1 - Math.exp(-dt * 6.5);
    camera.position.lerp(rideWorldPos, smooth);
    camera.quaternion.slerp(desiredQuat, 1 - Math.exp(-dt * 7.5));
    const shake = Math.min(1, state.speed / 12);
    if (shake > 0.08) {
      camera.position.x += (Math.sin(elapsed * 31.7) + Math.sin(elapsed * 17.3)) * 0.009 * shake;
      camera.position.y += Math.cos(elapsed * 23.1) * 0.006 * shake;
    }
    const targetFov = RIDE_FOV + Math.min(2.2, state.speed * 0.16);
    camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-dt * 5));
    camera.updateProjectionMatrix();
  } else if (state.mode === 'exiting') {
    state.exit += dt;
    const k = easeInOut(Math.min(1, state.exit / 2.0));
    camera.position.lerpVectors(exitStart.pos, endPos, k);
    camera.quaternion.copy(exitStart.quat).slerp(endQuat, k);
    camera.fov = lerp(exitStart.fov, endFov, k);
    camera.updateProjectionMatrix();
    if (state.exit >= 2.0) {
      state.mode = 'explore';
      document.body.classList.remove('is-riding');
      canvas.classList.remove('is-riding');
      orbit.target.copy(endViewTarget);
      orbit.camera.position.copy(endPos);
      orbit.syncFromCamera();
      camera.fov = endFov;
      camera.updateProjectionMatrix();
      state.energy = 0;
      document.documentElement.style.setProperty('--rush', '0');
      rideCam.pointer = null;
    }
  } else {
    orbit.update(dt);
    if (camera.fov !== BASE_FOV) {
      camera.fov += (BASE_FOV - camera.fov) * (1 - Math.exp(-dt * 6));
      if (Math.abs(camera.fov - BASE_FOV) < 0.05) camera.fov = BASE_FOV;
      camera.updateProjectionMatrix();
    }
  }

  updateHotspots();
  updateHud(dt);

  renderer.render(stageScene, camera);
  audio.update(dt);

  frames++;
  const now = performance.now();
  if (now - fpsStamp > 1000) {
    fps = Math.round((frames * 1000) / (now - fpsStamp));
    frames = 0;
    fpsStamp = now;
  }
}

function animate() {
  try {
    tick();
  } catch (err) {
    showFatal(err);
    renderer.setAnimationLoop(null);
  }
}

function renderNow() {
  renderer.render(stageScene, camera);
}

function poseRideForCapture() {
  if (state.mode !== 'boarding' && state.mode !== 'ride') return;
  state.mode = 'ride';
  state.boarding = 2.15;
  rideAmpGoal = Number(els.ampSlider.value);
  state.rideAmp = rideAmpGoal;
  const previewAngle = Math.min(deg2rad(30), deg2rad(rideAmpGoal));
  swing.amp = deg2rad(rideAmpGoal);
  swing.phase = Math.asin(previewAngle / swing.amp);
  const rig = world.ship.rig;
  rig.rotation.z = previewAngle;
  rig.rotation.x = 0;
  rig.rotation.y = 0;
  rig.updateWorldMatrix(true, true);
  state.angle = previewAngle;
  state.speed = 6.4;
  state.g = 1.65;
  state.energy = 0.9;
  world.setEnergy(state.energy);
  computeChasePose(rideWorldPos, desiredQuat, chaseTarget);
  camera.position.copy(rideWorldPos);
  camera.quaternion.copy(desiredQuat);
  camera.fov = RIDE_FOV;
  camera.updateProjectionMatrix();
  els.rideAmpLabel.textContent = `${rideAmpGoal}° 摆幅`;
  updateHud(0.016);
}

/* ---------------- resize ---------------- */
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(w, h);
}
window.addEventListener('resize', onResize);

/* ---------------- initial compile ---------------- */
try {
  renderer.compile(stageScene, camera);
} catch (err) {
  showFatal(err);
}
renderer.setAnimationLoop(animate);

window.setInterval(() => {
  if (!document.body.classList.contains('debug-mode')) return;
  const dbg = $('debugState');
  if (!dbg) return;
  dbg.textContent = JSON.stringify({
    fps,
    mode: state.mode,
    frames,
    ride: { amp: state.rideAmp, angle: Number(rad2deg(state.angle).toFixed(1)), energy: Number(state.energy.toFixed(2)) },
    render: renderer.info.render,
    memory: renderer.info.memory,
    error: fatalShown ? fatalText?.textContent : null,
    hasFocus: document.body.classList.contains('has-focus'),
    viewport: [window.innerWidth, window.innerHeight],
    layout: (() => {
      const r = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const b = el.getBoundingClientRect();
        return [Math.round(b.left), Math.round(b.top), Math.round(b.width), Math.round(b.height)];
      };
      const cs = (sel, props) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const s = getComputedStyle(el);
        return Object.fromEntries(props.map((p) => [p, s.getPropertyValue(p)]));
      };
      return {
        ids: [...document.querySelectorAll('button.icon-btn')].map((el) => el.id),
        toolCount: document.querySelectorAll('.tools .icon-btn').length,
        sheets: [...document.styleSheets].map((s) => s.href),
        computed: {
          tools: cs('.tools', ['width', 'flex', 'min-width', 'display', 'gap']),
          console: cs('.console', ['width', 'left', 'right', 'max-width', 'transform', 'display']),
          inner: cs('.console-inner', ['grid-template-columns', 'grid-template-areas', 'width']),
          actions: cs('.console-actions', ['width', 'display', 'min-width']),
          board: cs('.btn-board', ['width', 'flex', 'min-width']),
        },
        topbar: r('.topbar'),
        brand: r('.brand'),
        tools: r('.tools'),
        toolButtons: [...document.querySelectorAll('.tools .icon-btn')].map((el) => {
          const b = el.getBoundingClientRect();
          return [Math.round(b.left), Math.round(b.width), getComputedStyle(el).display, getComputedStyle(el).opacity];
        }),
        console: r('.console'),
        actions: r('.console-actions'),
        board: r('.btn-board'),
        amp: r('.amp-control'),
      };
    })(),
    children: stageScene.children.length,
    camera: camera.position.toArray().map((v) => Number(v.toFixed(2))),
  });
}, 1200);

/* ---------------- debug hook / QA ---------------- */
window.__pirate = {
  ready: true,
  world,
  scene: stageScene,
  camera,
  renderer,
  orbit,
  state,
  fps: () => fps,
  board: boardRide,
  exit: beginExit,
  boost: boostRide,
  setView: setFocus,
  setAmp: (v) => {
    els.ampSlider.value = String(clamp(v, 30, 78));
    syncAmpUi();
    if (state.mode === 'ride' || state.mode === 'boarding') {
      rideAmpGoal = state.amp;
      els.rideAmpLabel.textContent = `${rideAmpGoal}° 摆幅`;
    }
  },
  setNight: (on) => {
    state.night = on;
    world.setNight(on);
    document.body.classList.toggle('mode-night', on);
  },
  getInfo: () => ({
    mode: state.mode,
    angle: rad2deg(state.angle),
    energy: state.energy,
    fps,
    shipY: world.ship.rig.position.y,
    camera: camera.position.toArray(),
    view: state.view,
  }),
};
