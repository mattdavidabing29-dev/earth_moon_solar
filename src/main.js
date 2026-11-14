import { shell, $, bindZoom, reduced } from "./exploration-shell.js";
import * as THREE from "three";
import { createScene } from "./scene.js";
import { EARTH_ANALOG_SITES } from "./analog-data.js";
import "./analog.css";

// FIX 1: every chapter button (index 0-3) needs an entry, and chapters 1-3 need lat/lon.
const views = [
    {
        kicker: "",
        title: "The integrated<br>Earth system.",
        body: "Observe the interaction of atmospheric dynamics, oceanic systems, and human geography. A composite visual model for examining planetary-scale phenomena.",
    },
    {
        kicker: "Pacific",
        title: "The Pacific<br>basin.",
        body: "The largest ocean basin, covering roughly a third of Earth's surface.",
        lat: 0,
        lon: -150,
    },
    {
        kicker: "Himalayas",
        title: "Where plates<br>collide.",
        body: "The Indian and Eurasian plates meet here, raising the world's highest peaks, including Everest at 8,849 m.",
        lat: 28,
        lon: 86,
    },
    {
        kicker: "Night lights",
        title: "Cities after<br>dark.",
        body: "A static composite of artificial lighting that shows where people live. It is not live data.",
        lat: 30,
        lon: 10,
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

function similarityRate(site) {
    if (!site.similarityRate) return null;
    const row = document.createElement("p");
    row.className = "earth-site-similarity";
    row.textContent = `Data accuracy / similarity rate: ${site.similarityRate}`;
    return row;
}

let selectedTerrainCanvas = null;
let selectedTerrainSite = null;
let selectedPreviewCanvas = null;
let selectedSiteName = null;
let sitePopover;
let sitePreviewOpen = false;

function showTerrainError() {
    if (selectedTerrainCanvas) {
        selectedTerrainCanvas.parentElement.textContent = "The illustrative terrain map is unavailable.";
        selectedTerrainCanvas = null;
    }
    if (selectedPreviewCanvas) {
        selectedPreviewCanvas.parentElement.textContent = "The illustrative terrain map is unavailable.";
        selectedPreviewCanvas = null;
    }
}

function drawTerrainMap(canvas, site) {
    const context = canvas.getContext("2d");
    if (!context) {
        console.error(new Error("Could not create a 2D terrain illustration canvas"));
        showTerrainError();
        return;
    }

    const { width, height } = canvas;
    const seed = [...site.name].reduce(
        (value, character) => (value * 31 + character.charCodeAt(0)) >>> 0,
        7,
    );
    const colors = site.region.includes("Antarctica")
        ? ["#102936", "#527b7a", "#d2d0b1"]
        : site.target.startsWith("Moon")
            ? ["#342b25", "#a16d45", "#e4c995"]
            : ["#1b3030", "#5c8a75", "#d2ce9d"];

    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, colors[0]);
    background.addColorStop(0.58, colors[1]);
    background.addColorStop(1, colors[0]);
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "#dce4d422";
    context.lineWidth = 1;
    for (let x = 30; x < width; x += 60) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
    }
    for (let y = 30; y < height; y += 60) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
    }

    const centers = [
        [width * (0.28 + (seed % 13) / 100), height * 0.43],
        [width * 0.76, height * (0.56 + (seed % 9) / 100)],
    ];
    centers.forEach(([centerX, centerY], fieldIndex) => {
        for (let ring = 0; ring < 10; ring += 1) {
            const radiusX = 28 + ring * 17 + fieldIndex * 12;
            const radiusY = 15 + ring * 9 + fieldIndex * 8;
            context.beginPath();
            for (let step = 0; step <= 96; step += 1) {
                const angle = (step / 96) * Math.PI * 2;
                const wobble =
                    1 +
                    0.055 * Math.sin(angle * 3 + seed + ring) +
                    0.028 * Math.cos(angle * 5 + seed * 0.1);
                const x = centerX + Math.cos(angle) * radiusX * wobble;
                const y = centerY + Math.sin(angle) * radiusY * wobble;
                if (step === 0) context.moveTo(x, y);
                else context.lineTo(x, y);
            }
            context.closePath();
            context.strokeStyle = `rgba(235, 226, 190, ${0.12 + ring * 0.012})`;
            context.lineWidth = ring % 3 === 0 ? 1.5 : 1;
            context.stroke();
        }
    });

    const latitude = `${Math.abs(site.latitude).toFixed(2)}°${site.latitude < 0 ? "S" : "N"}`;
    const longitude = `${Math.abs(site.longitude).toFixed(2)}°${site.longitude < 0 ? "W" : "E"}`;
    context.fillStyle = "#f2ead3";
    context.font = "12px Arial, sans-serif";
    context.fillText(`${latitude}  /  ${longitude}`, 18, height - 18);
    context.fillStyle = colors[2];
    context.font = "10px Arial, sans-serif";
    context.textAlign = "right";
    context.fillText("ILLUSTRATIVE TERRAIN", width - 18, height - 18);
    context.textAlign = "left";
}

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
        selectedPreviewCanvas = null;
        selectedTerrainSite = null;
        selectedSiteName = null;
        sitePreviewOpen = false;
        sitePopover.hidden = true;
        $(".world-shell").classList.remove("site-location-open", "site-details-open");
        siteMarkers.forEach(({ button }) => button.setAttribute("aria-pressed", "false"));
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
    const detailSimilarity = similarityRate(site);
    if (detailSimilarity) detail.append(detailSimilarity);

    const terrain = document.createElement("div");
    terrain.className = "earth-site-terrain";
    terrain.setAttribute("role", "img");
    terrain.setAttribute(
        "aria-label",
        `Original illustrative terrain map around ${site.name}, with a pin at the approximate site coordinates`,
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
    terrainCaption.textContent = "Original topographic-style illustration · Pin marks the approximate site coordinates.";
    detail.append(terrain, terrainCaption);

    selectedTerrainCanvas = terrainCanvas;
    selectedTerrainSite = site;
    // FIX 2: the full-details map was never drawn.
    drawTerrainMap(terrainCanvas, site);

    // FIX 5: show the richer fields (student, scientist, key facts, ...) when present.
    const sections = [
        ["Planetary target", site.target],
        ["Why it is an analog", site.factors],
        ["Student view", site.student],
        ["Scientist view", site.scientist],
        ["Key facts", site.keyFacts],
        ["Preservation", site.preservation],
        ["Subsurface access", site.subsurfaceAccess],
        ["What it helps test", site.works],
        ["Where the analogy breaks down", site.limits],
        ["Sources noted in the assessment", site.sources],
    ].filter(([, text]) => text && (!Array.isArray(text) || text.length));

    for (const [title, text] of sections) {
        const section = document.createElement("section");
        const subheading = document.createElement("h3");
        subheading.textContent = title;
        section.append(subheading);
        if (Array.isArray(text)) {
            const list = document.createElement("ul");
            text.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                list.append(li);
            });
            section.append(list);
        } else {
            const paragraph = document.createElement("p");
            paragraph.textContent = text;
            section.append(paragraph);
        }
        detail.append(section);
    }

    detail.hidden = true;

    siteMarkers.forEach(({ site: markerSite, button }) =>
        button.setAttribute("aria-pressed", String(markerSite.name === site.name)),
    );
}

const siteMarkers = [];

scene.attachLayer(({ group, camera, geographic, radius = 2.55, globe }) => {
    const overlay = document.createElement("div");
    overlay.className = "earth-sites";
    overlay.setAttribute("role", "group");
    overlay.setAttribute("aria-label", "Earth analog locations");
    $(".world-shell").append(overlay);
    const connector = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    connector.classList.add("earth-site-connector");
    connector.setAttribute("aria-hidden", "true");
    const connectorLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    connector.append(connectorLine);
    overlay.append(connector);
    const focusPin = document.createElement("span");
    focusPin.className = "earth-site-focus-pin";
    focusPin.hidden = true;
    focusPin.setAttribute("aria-hidden", "true");
    overlay.append(focusPin);
    let focusedPosition = null;
    let popoverPosition = null;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let globePress = null;

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
            focusedPosition = geographic(site.latitude, site.longitude, radius + 0.08);
            focusPin.hidden = false;
            showSite(site);
            popoverPosition = null;
            sitePopover.style.left = "";
            sitePopover.style.top = "";
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
            image.setAttribute(
                "aria-label",
                `Original illustrative terrain map around ${site.name}, with a pin at the approximate site coordinates`,
            );

            const previewCanvas = document.createElement("canvas");
            previewCanvas.width = 720;
            previewCanvas.height = 315;
            image.append(previewCanvas);
            const previewPin = document.createElement("span");
            previewPin.className = "earth-site-preview-pin";
            previewPin.setAttribute("aria-hidden", "true");
            image.append(previewPin);
            selectedPreviewCanvas = previewCanvas;
            drawTerrainMap(previewCanvas, site);

            const kicker = document.createElement("span");
            kicker.className = "eyebrow";
            kicker.textContent = "EARTH ANALOG SITE";

            const heading = document.createElement("h2");
            heading.textContent = site.name;

            const region = document.createElement("p");
            region.className = "earth-site-preview-region";
            region.textContent = site.region;
            const previewSimilarity = similarityRate(site);

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
                $(".world-shell").classList.add("site-details-open");
                scene.setCompositionOffsetX(1.15);
                scene.setFocusRotation(site.latitude, site.longitude, radius + 0.02);
                scene.flyTo(site.latitude, site.longitude, 0.55, 2000);
                detail.hidden = false;
            };

            sitePopover.append(close, image, kicker, heading, region);
            if (previewSimilarity) sitePopover.append(previewSimilarity);
            sitePopover.append(target, summary, more);

            sitePopover.hidden = false;
            $(".world-shell").classList.add("site-location-open");

            scene.setCompositionOffsetX(-1.15);
            scene.setTerrainDetail(true);
            scene.setClouds(false);
            scene.flyTo(site.latitude, site.longitude, 0.93, 1800);
            scene.setFocusRotation(site.latitude, site.longitude, radius + 0.08);
            spin(false);
        };

        overlay.append(button);
        const position = geographic(site.latitude, site.longitude, 2.57);
        const worldPosition = position.clone();
        return { button, position, worldPosition, site };
    });

    sitePopover = document.createElement("aside");
    sitePopover.className = "earth-site-popover";
    sitePopover.hidden = true;
    sitePopover.setAttribute("aria-live", "polite");
    overlay.append(sitePopover);
    let popoverDrag = null;
    sitePopover.addEventListener("pointerdown", (event) => {
        if (event.target.closest("button, a, input, canvas")) return;
        const overlayRect = overlay.getBoundingClientRect();
        const cardRect = sitePopover.getBoundingClientRect();
        popoverDrag = {
            pointerId: event.pointerId,
            offsetX: event.clientX - cardRect.left,
            offsetY: event.clientY - cardRect.top,
            overlayLeft: overlayRect.left,
            overlayTop: overlayRect.top,
        };
        sitePopover.setPointerCapture(event.pointerId);
        event.preventDefault();
    });
    sitePopover.addEventListener("pointermove", (event) => {
        if (!popoverDrag || event.pointerId !== popoverDrag.pointerId) return;
        const width = sitePopover.offsetWidth;
        const height = sitePopover.offsetHeight;
        const bounds = window.__mobileGlobe;
        const minTop = bounds ? bounds.top : 16;
        const maxBottom = bounds ? bounds.bottom : innerHeight - 16;
        const left = Math.max(
            16,
            Math.min(
                event.clientX - popoverDrag.overlayLeft - popoverDrag.offsetX,
                overlay.clientWidth - width - 16,
            ),
        );
        const top = Math.max(
            minTop,
            Math.min(
                event.clientY - popoverDrag.overlayTop - popoverDrag.offsetY,
                maxBottom - height,
            ),
        );
        popoverPosition = { left, top };
        sitePopover.style.left = `${left}px`;
        sitePopover.style.top = `${top}px`;
    });
    const stopPopoverDrag = (event) => {
        if (!popoverDrag || event.pointerId !== popoverDrag.pointerId) return;
        popoverDrag = null;
    };
    sitePopover.addEventListener("pointerup", stopPopoverDrag);
    sitePopover.addEventListener("pointercancel", stopPopoverDrag);

    siteMarkers.push(...markers);

    const cameraPosition = geographic(0, 0, 0);
    const globeCenter = geographic(0, 0, 0);
    const rayDirection = geographic(0, 0, 0);
    const cameraFromCenter = geographic(0, 0, 0);
    const projected = geographic(0, 0, 0);
    const occlusionEpsilon = Math.max(radius * 1e-5, 1e-5);
    const focusWorldPosition = geographic(0, 0, 0);
    const canvas = $("#earth-canvas");
    canvas.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || !$(".world-shell").classList.contains("site-location-open")) return;
        globePress = { x: event.clientX, y: event.clientY };
    });
    canvas.addEventListener("pointerup", (event) => {
        if (!globePress) return;
        const press = globePress;
        globePress = null;
        if (Math.hypot(event.clientX - press.x, event.clientY - press.y) > 6) return;
        const rect = canvas.getBoundingClientRect();
        pointer.set(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1,
        );
        raycaster.setFromCamera(pointer, camera);
        // FIX 4: globe can be undefined before the scene is ready.
        const hit = globe ? raycaster.intersectObject(globe, false)[0] : null;
        if (!hit) return;
        const localPoint = group.worldToLocal(hit.point.clone());
        const latitude = THREE.MathUtils.radToDeg(Math.asin(localPoint.y / radius));
        const longitude = THREE.MathUtils.radToDeg(Math.atan2(-localPoint.z, localPoint.x));
        focusedPosition = geographic(latitude, longitude, radius + 0.035);
        scene.flyTo(latitude, longitude, 0.55, 1100);
        scene.setFocusRotation(latitude, longitude, radius + 0.035);
    });
    canvas.addEventListener("pointercancel", () => {
        globePress = null;
    });

    return {
        update() {
            camera.getWorldPosition(cameraPosition);
            if (globe) {
                globe.getWorldPosition(globeCenter);
            } else {
                globeCenter.copy(group.position);
            }

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

            const selectedMarker = markers.find((marker) => marker.site.name === selectedSiteName);
            if (!sitePreviewOpen || !selectedMarker) {
                sitePopover.hidden = true;
                // FIX 3: SVG elements have no .hidden property; use style.display.
                connector.style.display = "none";
                focusPin.hidden = true;
                return;
            }

            let anchorX;
            let anchorY;
            let anchorHidden = selectedMarker.button.hidden;
            if (focusedPosition) {
                focusWorldPosition.copy(focusedPosition);
                group.localToWorld(focusWorldPosition);
                projected.copy(focusWorldPosition).project(camera);
                rayDirection.subVectors(focusWorldPosition, cameraPosition);
                const focusDistance = rayDirection.length();
                rayDirection.divideScalar(focusDistance);
                const focusProjection = rayDirection.dot(cameraFromCenter);
                const focusOffsetSquared = cameraFromCenter.lengthSq() - radius * radius;
                const focusDiscriminant = focusProjection * focusProjection - focusOffsetSquared;
                let focusFirstHit = Infinity;
                if (focusDiscriminant >= 0) {
                    const root = Math.sqrt(focusDiscriminant);
                    const near = -focusProjection - root;
                    const far = -focusProjection + root;
                    focusFirstHit = near >= 0 ? near : far >= 0 ? far : Infinity;
                }
                const focusVisible =
                    focusFirstHit >= focusDistance - occlusionEpsilon &&
                    projected.z >= -1 && projected.z <= 1 &&
                    Math.abs(projected.x) < 1.05 && Math.abs(projected.y) < 1.05;
                focusPin.hidden = !focusVisible;
                anchorHidden = !focusVisible;
                if (focusVisible) {
                    focusPin.style.left = `${(projected.x * 0.5 + 0.5) * 100}%`;
                    focusPin.style.top = `${(-projected.y * 0.5 + 0.5) * 100}%`;
                    anchorX = (projected.x * 0.5 + 0.5) * overlay.clientWidth;
                    anchorY = (-projected.y * 0.5 + 0.5) * overlay.clientHeight;
                }
            } else {
                focusPin.hidden = true;
                const markerRect = selectedMarker.button.getBoundingClientRect();
                const overlayRect = overlay.getBoundingClientRect();
                anchorX = selectedMarker.button.hidden
                    ? overlayRect.width / 2
                    : markerRect.left - overlayRect.left + markerRect.width / 2;
                anchorY = selectedMarker.button.hidden
                    ? overlayRect.height / 2
                    : markerRect.top - overlayRect.top + markerRect.height / 2;
            }

            sitePopover.hidden = false;
            connector.style.display = anchorHidden ? "none" : "";
            const overlayRect = overlay.getBoundingClientRect();
            const bounds = window.__mobileGlobe;
            const minTop = bounds ? bounds.top : 24;
            const maxBottom = bounds ? bounds.bottom : innerHeight - 110;
            if (anchorHidden) {
                anchorX = overlayRect.width / 2;
                anchorY = overlayRect.height / 2;
            }
            const width = sitePopover.offsetWidth;
            const height = sitePopover.offsetHeight;
            const gap = 20;
            const leftSpace = anchorX - gap;
            const rightSpace = overlayRect.width - anchorX - gap;
            const placeRight =
                rightSpace >= width || (leftSpace < width && rightSpace >= leftSpace);
            const automaticLeft = Math.max(
                16,
                Math.min(
                    placeRight ? anchorX + gap : anchorX - width - gap,
                    overlayRect.width - width - 16,
                ),
            );
            const automaticTop = Math.max(
                minTop,
                Math.min(anchorY - height / 2, maxBottom - height),
            );
            const left = popoverPosition?.left ?? automaticLeft;
            const top = popoverPosition?.top ?? automaticTop;

            sitePopover.style.left = `${left}px`;
            sitePopover.style.top = `${top}px`;
            const cardRect = sitePopover.getBoundingClientRect();
            const centerX = cardRect.left - overlayRect.left + cardRect.width / 2;
            const centerY = cardRect.top - overlayRect.top + cardRect.height / 2;
            const deltaX = anchorX - centerX;
            const deltaY = anchorY - centerY;
            const halfWidth = cardRect.width / 2;
            const halfHeight = cardRect.height / 2;
            const scaleX = Math.abs(deltaX) > 0 ? halfWidth / Math.abs(deltaX) : Infinity;
            const scaleY = Math.abs(deltaY) > 0 ? halfHeight / Math.abs(deltaY) : Infinity;
            const edgeScale = Math.min(scaleX, scaleY);
            const lineVisible = edgeScale < 1;
            const lineEndX = lineVisible ? centerX + deltaX * edgeScale : centerX;
            const lineEndY = lineVisible ? centerY + deltaY * edgeScale : centerY;
            connectorLine.style.display = lineVisible ? "" : "none";
            connectorLine.setAttribute("x1", String(anchorX));
            connectorLine.setAttribute("y1", String(anchorY));
            connectorLine.setAttribute("x2", String(lineEndX));
            connectorLine.setAttribute("y2", String(lineEndY));
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
if (rotationControl) {
    rotationControl.onclick = () => spin(rotationControl.getAttribute("aria-pressed") !== "true");
}

const sunlightControl = $("#ex-range");
if (sunlightControl) {
    sunlightControl.value = 0.5 + Math.atan2(-0.4, 1) / (2 * Math.PI);
    sunlightControl.oninput = (e) => scene.setLight(+e.target.value * 24);
}

document.querySelectorAll("[data-chapter]").forEach(
    (b) =>
    (b.onclick = () => {
        const i = +b.dataset.chapter;
        const view = views[i];
        if (!view) return;
        ui.active(i);
        ui.copy(String(i), view);
        if (sunlightControl) {
            sunlightControl.value =
                0.5 + Math.atan2(i === 3 ? 0.35 : -0.4, i === 3 ? -1 : 1) / (2 * Math.PI);
        }
        if (i === 0) {
            scene.home();
            scene.mode("day");
            spin(true);
        } else {
            scene.flyTo(view.lat, view.lon, 0.25);
            scene.mode(i === 3 ? "night" : "day");
            spin(false);
        }
    }),
);

spin(!reduced());

try {
    await scene.whenReady;
    if ($("#earth-canvas").dataset.assetError) {
        throw Error("Earth texture unavailable");
    }
    ui.ready();
} catch (e) {
    ui.status("Some Earth imagery could not load. Reload to try again.");
    console.error(e);
}
