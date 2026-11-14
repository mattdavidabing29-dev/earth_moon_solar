import * as THREE from 'three';
const frames = new WeakMap();
const offsets = new WeakMap();
const desktopOffsets = new WeakMap();
const reducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)') ?? { matches: false };

export function mobileStage() {
  return globalThis.window?.__mobileGlobe || null;
}

function isDetailOpen() {
  return document.documentElement.classList.contains('site-location-open')
      || document.querySelector('.world-shell')?.classList.contains('site-location-open');
}

export function mobileCamera(camera, { radius = 2.55, zoom = 0, orbitalDistance = null } = {}) {
  const target = mobileStage();
  const detailOpen = isDetailOpen();

  // ---------- DESKTOP ----------
  if (!target) {
    if (camera.view?.enabled) { camera.clearViewOffset(); camera.updateProjectionMatrix(); }
    frames.delete(camera);

    // Horizontal push right on desktop. The globe is already shifted left by
    // group.position.x, so we push it back toward center-right via the
    // projection matrix (which does NOT fight group.position).
    const narrow = innerWidth < 1100;
    const baseMax = narrow ? innerWidth * 0.10 : innerWidth * 0.14;
    const targetOffset = detailOpen ? 0 : baseMax * 0.35;

    const prev = desktopOffsets.get(camera) ?? targetOffset;
    const a = reducedMotion.matches ? 1 : 1 - Math.exp(-1 / 60 * 10); // ~60fps ease
    const smoothed = reducedMotion.matches ? targetOffset : prev + (targetOffset - prev) * a;
    desktopOffsets.set(camera, smoothed);

    if (smoothed > 0.5) {
      camera.setViewOffset(innerWidth, innerHeight, smoothed, 0, innerWidth, innerHeight);
    } else if (camera.view?.enabled) {
      camera.clearViewOffset();
      camera.updateProjectionMatrix();
    }
    return null;
  }

  // ---------- MOBILE ----------
  const now = performance.now();
  const previous = frames.get(camera);
  const a = reducedMotion.matches ? 1 : 1 - Math.exp(-Math.min((now - (previous?.time ?? now)) / 1000, .1) * 10);
  const stage = {
    top:    previous ? previous.top    + (target.top    - previous.top)    * a : target.top,
    bottom: previous ? previous.bottom + (target.bottom - previous.bottom) * a : target.bottom,
    time: now,
  };
  frames.set(camera, stage);

  const available = Math.max(140, stage.bottom - stage.top);
  const diameter = Math.min(innerWidth * .90, available * .90);
  const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  const distance = radius * Math.sqrt(1 + (innerHeight / (diameter * tan)) ** 2);

  const fill = diameter / innerWidth;
  const maxPush = innerWidth * 0.22;
  const targetOffset = detailOpen ? 0 : maxPush * (1 - fill) * 0.55;

  const prevOffset = offsets.get(camera) ?? targetOffset;
  const smoothed = reducedMotion.matches ? targetOffset : prevOffset + (targetOffset - prevOffset) * a;
  offsets.set(camera, smoothed);

  const vertical = innerHeight / 2 - (stage.top + stage.bottom) / 2;
  camera.setViewOffset(innerWidth, innerHeight, smoothed, vertical, innerWidth, innerHeight);

  const nearFloor = radius + 0.10;
  const fitted = distance * (1 - zoom * 0.88);
  return orbitalDistance === null ? Math.max(nearFloor, fitted) : distance * orbitalDistance / 10.5;
}

export function mobileOffset(camera, y) {
  if (y) {
    camera.setViewOffset(innerWidth, innerHeight, 0, y, innerWidth, innerHeight);
  } else if (camera.view?.enabled) {
    camera.clearViewOffset();
  }
}