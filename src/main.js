import { shell, $, bindZoom, reduced } from "./exploration-shell.js";
import { createScene } from "./scene.js";
import { EARTH_ANALOG_SITES } from "./analog-data.js";
import "./analog.css";
const views = [
  {
    kicker: "PLANET EARTH",
    title: "A world<br> worth exploring.",
    body: "Clouds, oceans, mountains, and the glow of cities. Turn the Earth in your hands and see our home from a different perspective.",
  },
  {
    kicker: "THE PACIFIC",
    title: "An ocean<br> of blue.",
    body: "Look across the largest ocean on Earth. Drag to explore its islands and coastlines.",
    lat: 0,
    lon: -155,
  },
  {
    kicker: "THE HIMALAYAS",
    title: "Where continents<br> meet the sky.",
    body: "Follow the mountain ranges across Asia. Approach the surface to explore the photographic mosaic.",
    lat: 29,
    lon: 85,
  },
  {
    kicker: "AFTER SUNSET",
    title: "Another kind<br> of light.",
    body: "A static night-light composite reveals patterns of human settlement as day gives way to night.",
    lat: 35,
    lon: 15,
  },
];
const ui = shell({
  id: "planet",
  ...views[0],
  chapters: ["Whole Earth", "Pacific", "Himalayas", "Night lights"],
  rangeLabel: "Sunlight",
  note: "NASA-derived imagery · Illustrative lighting · Drag to rotate · Scroll to zoom",
  legend: "<span>6,371 km mean radius</span>",
  sources:
    '<p>Earth surface, relief, water, and cloud maps use NASA-derived imagery distributed through <a href="https://github.com/turban/webgl-earth" target="_blank" rel="noopener">WebGL Earth</a>. Night imagery is distributed through <a href="https://github.com/vasturiano/three-globe" target="_blank" rel="noopener">three-globe</a>.</p><p>These are static composites, not live weather or observations. Sunlight, cloud motion, terrain shading, and city brightness are adjusted for exploration. The star background uses the HYG catalog, credited to David Nash / Astronomy Nexus under CC BY-SA 4.0.</p><p>See the repository’s CREDITS.md for source links and asset terms.</p>',
});
const scene = createScene($("#earth-canvas"), {
  exposure: 1.28,
  daylight: [-0.4, 0.32, 1],
  onInteract: () => spin(false),
});
const detail = $(".ex-detail");
const terrainImage = new Image();
let terrainImageState = "loading";
let selectedTerrainCanvas = null;
let selectedTerrainSite = null;
<<<<<<< HEAD
let selectedPreviewCanvas = null;
let selectedSiteName = null;
function showTerrainError() {
  if (selectedTerrainCanvas) {
    selectedTerrainCanvas.parentElement.textContent =
      "The 2D surface view is unavailable.";
    selectedTerrainCanvas = null;
  }
  if (selectedPreviewCanvas) {
    selectedPreviewCanvas.parentElement.textContent =
      "The surface image is unavailable.";
    selectedPreviewCanvas = null;
  }
=======
function showTerrainError() {
  if (!selectedTerrainCanvas) return;
  selectedTerrainCanvas.parentElement.textContent =
    "The 2D surface view is unavailable.";
  selectedTerrainCanvas = null;
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
}
function drawTerrainMap(canvas, site) {
  const context = canvas.getContext("2d");
  if (!context) {
    console.error(new Error("Could not create a 2D surface map canvas"));
    showTerrainError();
    return;
  }
  const mapWidth = terrainImage.naturalWidth;
  const mapHeight = terrainImage.naturalHeight;
  const cropWidth = mapWidth / 12;
  const cropHeight = cropWidth / (canvas.width / canvas.height);
  const centerX = ((site.longitude + 180) / 360) * mapWidth;
  const centerY = ((90 - site.latitude) / 180) * mapHeight;
  const sourceLeft =
    ((centerX - cropWidth / 2) % mapWidth + mapWidth) % mapWidth;
  const sourceTop = centerY - cropHeight / 2;
  const visibleTop = Math.max(0, sourceTop);
  const visibleBottom = Math.min(mapHeight, sourceTop + cropHeight);
  const visibleHeight = visibleBottom - visibleTop;
  const scaleX = canvas.width / cropWidth;
  const scaleY = canvas.height / cropHeight;
  const firstWidth = Math.min(cropWidth, mapWidth - sourceLeft);
  context.fillStyle = "#07131b";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.drawImage(
    terrainImage,
    sourceLeft,
    visibleTop,
    firstWidth,
    visibleHeight,
    0,
    (visibleTop - sourceTop) * scaleY,
    firstWidth * scaleX,
    visibleHeight * scaleY,
  );
  if (firstWidth < cropWidth) {
    context.drawImage(
      terrainImage,
      0,
      visibleTop,
      cropWidth - firstWidth,
      visibleHeight,
      firstWidth * scaleX,
      (visibleTop - sourceTop) * scaleY,
      (cropWidth - firstWidth) * scaleX,
      visibleHeight * scaleY,
    );
  }
}
terrainImage.onload = () => {
  terrainImageState = "ready";
  if (selectedTerrainCanvas && selectedTerrainSite)
    drawTerrainMap(selectedTerrainCanvas, selectedTerrainSite);
<<<<<<< HEAD
  if (selectedPreviewCanvas && selectedTerrainSite)
    drawTerrainMap(selectedPreviewCanvas, selectedTerrainSite);
=======
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
};
terrainImage.onerror = (error) => {
  terrainImageState = "error";
  showTerrainError();
  console.error("Earth surface texture failed to load", error);
};
terrainImage.src = "/textures/earth.jpg";
function showSite(site) {
  detail.replaceChildren();
  detail.setAttribute("aria-live", "polite");
  const back = document.createElement("button");
  back.className = "ex-close earth-site-back";
  back.setAttribute("aria-label", "Back to the globe");
  back.textContent = "‹";
  back.onclick = () => {
    detail.hidden = true;
    selectedTerrainCanvas = null;
<<<<<<< HEAD
    selectedPreviewCanvas = null;
    selectedTerrainSite = null;
    selectedSiteName = null;
    sitePreviewOpen = false;
    sitePopover.hidden = true;
=======
    selectedTerrainSite = null;
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
    $(".world-shell").classList.remove("site-location-open");
    siteMarkers.forEach(({ button }) =>
      button.setAttribute("aria-pressed", "false"),
    );
    scene.setCompositionOffsetX(0);
    scene.clearFocusRotation();
    scene.setTerrainDetail(false);
    scene.setClouds(true);
    scene.home();
    scene.mode("day");
    ui.active(0);
    ui.copy("0", views[0]);
    if (sunlightControl)
      sunlightControl.value = 0.5 + Math.atan2(-0.4, 1) / (2 * Math.PI);
    spin(!reduced());
  };
  detail.append(back);
  const kicker = document.createElement("span");
  kicker.className = "eyebrow";
  kicker.textContent = "EARTH ANALOG SITE";
  detail.append(kicker);
  const heading = document.createElement("h2");
  heading.textContent = site.name;
  detail.append(heading);
  const location = document.createElement("p");
  location.textContent = `${site.region} · ${Math.abs(site.latitude).toFixed(4)}° ${site.latitude < 0 ? "S" : "N"}, ${Math.abs(site.longitude).toFixed(4)}° ${site.longitude < 0 ? "W" : "E"}`;
  detail.append(location);
  const terrain = document.createElement("div");
  terrain.className = "earth-site-terrain";
  terrain.setAttribute("role", "img");
  terrain.setAttribute(
    "aria-label",
    `2D surface map centered on ${site.name}`,
  );
  const terrainCanvas = document.createElement("canvas");
  terrainCanvas.width = 800;
  terrainCanvas.height = 350;
  terrain.append(terrainCanvas);
  const terrainPin = document.createElement("span");
  terrainPin.className = "earth-site-terrain-pin";
  terrainPin.setAttribute("aria-hidden", "true");
  terrain.append(terrainPin);
  const terrainCaption = document.createElement("p");
  terrainCaption.className = "earth-site-terrain-caption";
  terrainCaption.textContent =
    "2D regional surface crop · The globe’s 3D relief is illustrative, not site-specific survey data.";
  detail.append(terrain, terrainCaption);
  selectedTerrainCanvas = terrainCanvas;
  selectedTerrainSite = site;
  if (terrainImageState === "ready") drawTerrainMap(terrainCanvas, site);
  if (terrainImageState === "error") showTerrainError();
  for (const [title, text] of [
    ["Planetary target", site.target],
    ["Why it is an analog", site.factors],
    ["What it helps test", site.works],
    ["Where the analogy breaks down", site.limits],
    ["Sources noted in the assessment", site.sources],
  ]) {
    const section = document.createElement("section");
    const subheading = document.createElement("h3");
    subheading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    section.append(subheading, paragraph);
    detail.append(section);
  }
<<<<<<< HEAD
  detail.hidden = true;
=======
  detail.hidden = false;
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
  siteMarkers.forEach(({ site: markerSite, button }) =>
    button.setAttribute(
      "aria-pressed",
      String(markerSite.name === site.name),
    ),
  );
}
const siteMarkers = [];
<<<<<<< HEAD
let sitePopover;
let sitePreviewOpen = false;
=======
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
scene.attachLayer(({ group, camera, geographic, radius, globe }) => {
  const overlay = document.createElement("div");
  overlay.className = "earth-sites";
  overlay.setAttribute("role", "group");
  overlay.setAttribute("aria-label", "Earth analog locations");
  $(".world-shell").append(overlay);
  const markers = EARTH_ANALOG_SITES.map((site) => {
    const button = document.createElement("button");
    button.className = "earth-site-marker";
    button.type = "button";
    button.setAttribute("aria-label", `Open ${site.name} analog site details`);
    button.setAttribute("aria-pressed", "false");
    button.title = site.name;
    const icon = document.createElement("i");
    icon.setAttribute("aria-hidden", "true");
    const label = document.createElement("span");
    label.textContent = site.name;
    button.append(icon, label);
    button.onclick = () => {
      showSite(site);
<<<<<<< HEAD
      selectedSiteName = site.name;
      sitePreviewOpen = true;
      selectedPreviewCanvas = null;
      sitePopover.replaceChildren();
      const close = document.createElement("button");
      close.className = "earth-site-preview-close";
      close.type = "button";
      close.setAttribute("aria-label", "Close site preview");
      close.textContent = "✕";
      close.onclick = () => detail.querySelector(".earth-site-back").click();
      const image = document.createElement("div");
      image.className = "earth-site-preview-image";
      image.setAttribute("role", "img");
      image.setAttribute("aria-label", `Surface map around ${site.name}`);
      const previewCanvas = document.createElement("canvas");
      previewCanvas.width = 720;
      previewCanvas.height = 315;
      image.append(previewCanvas);
      selectedPreviewCanvas = previewCanvas;
      const kicker = document.createElement("span");
      kicker.className = "eyebrow";
      kicker.textContent = "EARTH ANALOG SITE";
      const heading = document.createElement("h2");
      heading.textContent = site.name;
      const region = document.createElement("p");
      region.className = "earth-site-preview-region";
      region.textContent = site.region;
      const target = document.createElement("p");
      target.className = "earth-site-preview-target";
      target.textContent = site.target;
      const summary = document.createElement("p");
      summary.textContent = site.factors;
      const more = document.createElement("button");
      more.className = "earth-site-preview-more";
      more.type = "button";
      more.textContent = "Full site details";
      more.onclick = () => {
        sitePreviewOpen = false;
        sitePopover.hidden = true;
        detail.hidden = false;
      };
      sitePopover.append(close, image, kicker, heading, region, target, summary, more);
      if (terrainImageState === "ready") drawTerrainMap(previewCanvas, site);
      if (terrainImageState === "error") showTerrainError();
      sitePopover.hidden = false;
=======
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
      $(".world-shell").classList.add("site-location-open");
      scene.setCompositionOffsetX(-1.2);
      scene.setTerrainDetail(true);
      scene.setClouds(false);
      scene.flyTo(site.latitude, site.longitude, 0.84, 1800);
      scene.setFocusRotation(site.latitude, site.longitude);
<<<<<<< HEAD
      spin(false);
=======
      spin(true);
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
    };
    overlay.append(button);
    const position = geographic(site.latitude, site.longitude, 2.57);
    const worldPosition = position.clone();
<<<<<<< HEAD
    return { button, position, worldPosition, site };
  });
  sitePopover = document.createElement("aside");
  sitePopover.className = "earth-site-popover";
  sitePopover.hidden = true;
  sitePopover.setAttribute("aria-live", "polite");
  overlay.append(sitePopover);
=======
    return { button, position, worldPosition };
  });
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
  siteMarkers.push(...markers.map((marker, index) => ({
    ...marker,
    site: EARTH_ANALOG_SITES[index],
  })));
  const cameraPosition = geographic(0, 0, 0);
  const globeCenter = geographic(0, 0, 0);
  const rayDirection = geographic(0, 0, 0);
  const cameraFromCenter = geographic(0, 0, 0);
  const projected = geographic(0, 0, 0);
  const occlusionEpsilon = Math.max(radius * 1e-5, 1e-5);
  return {
    update() {
      camera.getWorldPosition(cameraPosition);
      globe.getWorldPosition(globeCenter);
      for (const marker of markers) {
        marker.worldPosition.copy(marker.position);
        group.localToWorld(marker.worldPosition);
        projected.copy(marker.worldPosition).project(camera);
        rayDirection.subVectors(marker.worldPosition, cameraPosition);
        const markerDistance = rayDirection.length();
        rayDirection.divideScalar(markerDistance);
        cameraFromCenter.subVectors(cameraPosition, globeCenter);
        const projection = rayDirection.dot(cameraFromCenter);
        const offsetSquared = cameraFromCenter.lengthSq() - radius * radius;
        const discriminant = projection * projection - offsetSquared;
        let firstHit = Infinity;
        if (discriminant >= 0) {
          const root = Math.sqrt(discriminant);
          const near = -projection - root;
          const far = -projection + root;
          firstHit = near >= 0 ? near : far >= 0 ? far : Infinity;
        }
        // A tangent-plane dot product cannot tell whether the globe blocks the
        // camera-to-marker ray; the sphere intersection tests actual occlusion.
        const visible =
          firstHit >= markerDistance - occlusionEpsilon &&
          projected.z >= -1 &&
          projected.z <= 1 &&
          Math.abs(projected.x) < 1.05 &&
          Math.abs(projected.y) < 1.05;
        marker.button.hidden = !visible;
        if (visible) {
          marker.button.style.left = `${(projected.x * 0.5 + 0.5) * 100}%`;
          marker.button.style.top = `${(-projected.y * 0.5 + 0.5) * 100}%`;
        }
      }
<<<<<<< HEAD
      const selectedMarker = markers.find(
        (marker) => marker.site.name === selectedSiteName,
      );
      if (!sitePreviewOpen || !selectedMarker) {
        sitePopover.hidden = true;
        return;
      }
      sitePopover.hidden = selectedMarker.button.hidden;
      if (sitePopover.hidden) return;
      const markerRect = selectedMarker.button.getBoundingClientRect();
      const overlayRect = overlay.getBoundingClientRect();
      const anchorX = markerRect.left - overlayRect.left + markerRect.width / 2;
      const anchorY = markerRect.top - overlayRect.top + markerRect.height / 2;
      const width = sitePopover.offsetWidth;
      const height = sitePopover.offsetHeight;
      const bounds = window.__mobileGlobe;
      const minTop = bounds ? bounds.top : 24;
      const maxBottom = bounds ? bounds.bottom : innerHeight - 110;
      const preferredLeft =
        anchorX + width + 24 <= overlayRect.width
          ? anchorX + 18
          : anchorX - width - 18;
      const left = Math.max(
        16,
        Math.min(preferredLeft, overlayRect.width - width - 16),
      );
      const top = Math.max(
        minTop,
        Math.min(anchorY - height / 2, maxBottom - height),
      );
      sitePopover.style.left = `${left}px`;
      sitePopover.style.top = `${top}px`;
=======
>>>>>>> be0be442f66d1fa1d8feade8e4f463f8f352a9b4
    },
  };
});
scene.setReduced(reduced());
bindZoom(scene);
function spin(on) {
  scene.setRotation(on);
  const control = $(".ex-play");
  if (control) {
    control.setAttribute("aria-pressed", String(on));
    control.textContent = on ? "Ⅱ Pause rotation" : "▶ Rotate";
  }
}
const rotationControl = $(".ex-play");
if (rotationControl)
 rotationControl.onclick = () =>
   spin(rotationControl.getAttribute("aria-pressed") !== "true");
const sunlightControl = $("#ex-range");
if (sunlightControl) {
 sunlightControl.value = 0.5 + Math.atan2(-0.4, 1) / (2 * Math.PI);
 sunlightControl.oninput = (e) => scene.setLight(+e.target.value * 24);
}
document.querySelectorAll("[data-chapter]").forEach(
  (b) =>
    (b.onclick = () => {
      const i = +b.dataset.chapter;
      ui.active(i);
      ui.copy(String(i), views[i]);
     if (sunlightControl)
       sunlightControl.value =
         0.5 +
         Math.atan2(i === 3 ? 0.35 : -0.4, i === 3 ? -1 : 1) / (2 * Math.PI);
      if (i === 0) {
        scene.home();
        spin(true);
      } else {
        scene.flyTo(views[i].lat, views[i].lon, 0.25);
        scene.mode(i === 3 ? "night" : "day");
        spin(false);
      }
    }),
);

spin(!reduced());
try {
  await scene.whenReady;
  if ($("#earth-canvas").dataset.assetError)
    throw Error("Earth texture unavailable");
  ui.ready();
} catch (e) {
  ui.status("Some Earth imagery could not load. Reload to try again.");
  console.error(e);
}
