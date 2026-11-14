// earth-analogs.js — enriched Earth analog sites for Moon/Mars bases.
// Drop-in replacement: keeps all previous exports and adds new fields + helpers.

export const ANALOG_SOURCE =
    "https://www.spaceappschallenge.org/2026/challenges/permanent-moon-base-locations-and-mars/?tab=details";

// Fields per site:
//   body            "moon" | "mars"
//   similarityRate  team estimate as text, or null if not scored yet
//   keyFacts        short, checkable facts for quick display
//   student / scientist   plain-language vs technical explanation
//   tags            used by searchSites() and filters
export const EARTH_ANALOG_SITES = [
    {
        id: "craters-of-the-moon",
        name: "Craters of the Moon, United States",
        region: "Idaho, United States",
        body: "moon",
        similarityRate: "52–54%",
        latitude: 43.4167,
        longitude: -113.5167,
        target: "Moon — Marius Hills skylights and lava tubes",
        factors: "Basaltic lava flows, cinder cones, spatter cones, lava tubes, and caves.",
        keyFacts: [
            "Part of the Snake River Plain volcanic province; the Great Rift is a roughly 85 km fissure system.",
            "Apollo 14 crew members trained here in 1969.",
            "A skylight in Marius Hills was identified from Kaguya (SELENE) data in 2009.",
        ],
        student:
            "A huge field of black lava with tunnels you can walk into. Astronauts practised here because the Moon also has lava tunnels, and some have open skylights.",
        scientist:
            "Young basaltic flows with preserved tube and skylight morphology make this a test bed for LiDAR cave mapping, GPS-denied navigation, and subsurface-shelter concepts. Tube-span stability differs under 1/6 g, so structural results do not transfer directly.",
        works:
            "A field setting for cave-mapping LiDAR, rover mobility over rough lava, GPS-denied navigation, and testing subsurface shelter concepts.",
        limits:
            "Earth gravity limits stable lava-tube spans; air, moisture, and biological growth also differ from the lunar vacuum.",
        tags: ["basalt", "lava tube", "skylight", "lidar", "navigation", "shelter"],
        sources: "NASA FINESSE; USGS Astrogeology Science Center; SELENE/Kaguya observations.",
    },
    {
        id: "lanzarote",
        name: "Lanzarote, Spain",
        region: "Canary Islands, Spain",
        body: "moon",
        similarityRate: "56–60%",
        latitude: 29.0469,
        longitude: -13.5899,
        target: "Moon — Oceanus Procellarum and Mare Tranquillitatis",
        factors:
            "Arid basaltic volcanic fields, pyroclastic ash, spatter cones, and extensive volcanic caves. Maria are basaltic lava plains, and Lanzarote's bedrock is also basalt.",
        preservation:
            "The 1730–1736 eruptions covered about a quarter of the island in ash and debris. Because they are so recent, the landforms are crisp and unweathered, which suits morphology studies.",
        subsurfaceAccess:
            "In 2018, PANGAEA-X navigated a rover through a 6 km lava tube formed about 21,000 years ago. Lunar lava tubes could shield future habitats from radiation, micrometeoroids, and thermal swings.",
        keyFacts: [
            "ESA trained astronauts here with PANGAEA between 2017 and 2022.",
            "LZS-1 is a lunar basaltic soil simulant built from Lanzarote basalt (Scientific Reports, 2022).",
            "Gravity is 9.81 m/s² on Earth vs 1.62 m/s² on the Moon.",
        ],
        student:
            "A dry, treeless island of black lava fields, cinder cones, and lava tunnels. You can see for kilometres across bare rock, so astronauts practise being field geologists here before going to the Moon.",
        scientist:
            "LZS-1 was characterized for mineralogy and geochemistry and compared with Apollo 14 data. Apollo 14 landed at Fra Mauro, a highland site, so the comparison is to that sample, not to mare basalt itself. Terrestrial basalts are also more oxidized and water-bearing than dry mare basalts.",
        works:
            "ESA PANGAEA field-geology and sample-collection training, regolith-simulant construction, and human EVA workflows.",
        limits:
            "It lacks lunar impact-formed agglutinates; coastal humidity, wind erosion, and Earth gravity change dust behavior.",
        tags: ["basalt", "regolith simulant", "eva", "astronaut training", "lava tube", "ash"],
        sources:
            "European Space Agency PANGAEA and CAVES campaigns; Instituto de Geociencias (IGEO-CSIC); Alberquilla et al., Scientific Reports (2022); MIT Space Exploration Initiative.",
    },
    {
        id: "sudbury-basin",
        name: "Sudbury Basin, Canada",
        region: "Ontario, Canada",
        body: "moon",
        similarityRate: "41–45%",
        latitude: 46.6,
        longitude: -81.1833,
        target: "Moon — Tycho Crater and the lunar highlands",
        factors:
            "An ancient multi-ring impact structure with shatter cones, impact breccias, and impact-melt sheets.",
        keyFacts: [
            "Formed by an impact about 1.85 billion years ago.",
            "Tycho is a young lunar crater, roughly 85 km across and about 108 million years old.",
            "Shatter cones are a recognized field signature of shock metamorphism.",
        ],
        student:
            "A giant crater that is almost two billion years old. Its rocks were smashed and melted by an asteroid hit, so geologists use it to learn what impact rocks look like.",
        scientist:
            "Provides shock-metamorphic textures, breccias, and a differentiated impact-melt sheet for training in sample prioritization. Later tectonic deformation has distorted the original structure, limiting its use for crater-morphology work.",
        works:
            "Training to identify shock-altered rocks, map ejecta, and select high-priority samples for lunar sample return.",
        limits:
            "Terrestrial plate tectonics, glaciation, vegetation, and water erosion have deformed and obscured the original crater.",
        tags: ["impact", "breccia", "shatter cones", "sample selection", "highlands"],
        sources: "NASA Johnson Space Center; Canadian Space Agency; Lunar and Planetary Institute.",
    },
    {
        id: "atacama",
        name: "Atacama Desert, Chile",
        region: "Yungay region, Chile",
        body: "mars",
        similarityRate: null,
        latitude: -24.0833,
        longitude: -69.9167,
        target: "Mars — Jezero Crater and Oxia Planum",
        factors:
            "Hyper-arid soils, perchlorates, nitrates, sulfates, iron oxides, and fine mineral dust.",
        keyFacts: [
            "One of the driest places on Earth.",
            "Perseverance landed in Jezero Crater on 18 February 2021.",
            "Oxia Planum is the target site of ESA's ExoMars rover.",
        ],
        student:
            "Some parts of this desert almost never get rain, so the soil is salty and dusty like Mars. Scientists test drills and rovers here to see whether they can find signs of life.",
        scientist:
            "Hyper-arid soils with oxidizing salts allow testing of subsurface sampling, life-detection assays, and low-biomass contamination controls. Pressure, UV flux, and global dust storms are not reproduced.",
        works:
            "Testing subsurface life-detection drills, autonomous rover mobility, and optical dust and aerosol sensors.",
        limits:
            "Earth's air pressure, coastal fog, and trace microbes differ from Mars; it also lacks global Martian dust storms and intense UV radiation.",
        tags: ["arid", "perchlorate", "life detection", "drilling", "rover", "dust"],
        sources: "NASA Ames ARADS; ESA ExoMars field testing; Centro de Astrobiología (CAB).",
    },
    {
        id: "mcmurdo-dry-valleys",
        name: "McMurdo Dry Valleys, Antarctica",
        region: "Antarctica",
        body: "mars",
        similarityRate: null,
        latitude: -77.4667,
        longitude: 162.5167,
        target: "Mars — Vastitas Borealis and the Phoenix landing site",
        factors:
            "Continuous permafrost, ice-cemented soil, sublimation-dominated hydrology, and extreme cold.",
        keyFacts: [
            "About 4,800 km² of the region is ice-free.",
            "Phoenix landed in Mars's northern plains (Vastitas Borealis) in 2008 and exposed subsurface ice.",
            "Long-term ecological research here is funded by the US National Science Foundation (LTER).",
        ],
        student:
            "A freezing, dry part of Antarctica with no snow cover on the ground and ice hidden under the soil, much like the Martian polar plains.",
        scientist:
            "Ice-cemented permafrost and sublimation processes support testing of cryogenic drills and ice-sampling tools. Mean temperatures are far warmer than Martian winter extremes, and the N₂–O₂ atmosphere alters frost and sublimation behavior.",
        works:
            "Testing cryogenic ice drills and soil-sampling tools, and studying crew isolation in nearby Antarctic stations.",
        limits:
            "Earth's temperatures are warmer than Martian winter extremes, and its nitrogen-oxygen atmosphere changes frost deposition and ice sublimation.",
        tags: ["permafrost", "ice", "cold", "drilling", "isolation"],
        sources:
            "NSF McMurdo Dry Valleys LTER; NASA Phoenix analog studies; ESA Concordia Station research.",
    },
    {
        id: "devon-island",
        name: "Devon Island, Canada",
        region: "Haughton Crater, Nunavut, Canada",
        body: "mars",
        similarityRate: null,
        latitude: 75.375,
        longitude: -89.6833,
        target: "Mars — Gale Crater and polar impact basins",
        factors:
            "A 23-km impact crater in Arctic permafrost, with paleolake sediments, gullies, and ground ice.",
        keyFacts: [
            "Haughton Crater is about 23 km across and roughly 23 million years old.",
            "The Haughton-Mars Project has run field research here since 1996.",
            "Gale Crater is where Curiosity has operated since 2012.",
        ],
        student:
            "A cold, rocky island in the Arctic with a crater, dry riverbeds and ice in the ground. Teams practise wearing mock spacesuits and driving rovers here.",
        scientist:
            "Combines impact geology, permafrost, and paleolake deposits with remote logistics, which suits EVA mobility, tele-robotic operations, and time-delayed communication studies.",
        works:
            "A proving ground for spacesuit EVA mobility, unpressurized rover navigation, tele-robotics, and time-delayed mission communications.",
        limits:
            "Summer melt creates liquid runoff and active tundra biology; breathable Earth air does not reproduce spacesuit pressure differences.",
        tags: ["impact crater", "permafrost", "eva", "tele-robotics", "logistics"],
        sources: "NASA Haughton-Mars Project; Mars Institute; SETI Institute; Canadian Space Agency.",
    },
    {
        id: "mauna-kea-mauna-loa",
        name: "Mauna Kea and Mauna Loa, United States",
        region: "Hawaii, United States",
        body: "mars",
        similarityRate: null,
        latitude: 19.8207,
        longitude: -155.4681,
        target: "Mars — Olympus Mons and the Tharsis volcanic province",
        factors:
            "Iron-rich basaltic tephra, volcanic ash, shield-volcano slopes, and lava tubes.",
        keyFacts: [
            "Mauna Kea rises 4,207 m above sea level.",
            "Olympus Mons is about 22 km high and roughly 600 km across.",
            "NASA's HI-SEAS habitat sits on the slopes of Mauna Loa.",
        ],
        student:
            "Big volcanoes made of dark volcanic rock. Mars has the biggest volcano we know of, so Hawaii is a place to practise living and building in a similar landscape.",
        scientist:
            "Iron-rich basaltic tephra supports regolith sintering and construction experiments, water-extraction studies, and long-duration habitat simulations. Scale, gravity, and weathering rate differ significantly from Tharsis.",
        works:
            "Supporting crew-isolation simulations, basalt-regolith sintering for construction, and water-extraction studies.",
        limits:
            "Hawaiian volcanoes are smaller than Martian volcanoes; Earth gravity, rainfall, and trade winds accelerate weathering.",
        tags: ["basalt", "tephra", "construction", "isolation", "habitat", "isru"],
        sources:
            "NASA HI-SEAS; NASA Kennedy Space Center Swamp Works; Pacific International Space Center for Exploration Systems.",
    },
    {
        id: "rio-tinto",
        name: "Rio Tinto, Spain",
        region: "Andalusia, Spain",
        body: "mars",
        similarityRate: null,
        latitude: 37.7033,
        longitude: -6.5517,
        target: "Mars — Meridiani Planum",
        factors: "Iron- and sulfur-rich jarosite, hematite, and ferric iron oxides.",
        keyFacts: [
            "The river is strongly acidic, with a pH around 2.",
            "Opportunity found jarosite at Meridiani Planum in 2004.",
            "The Mars Analog Rio Tinto Experiment (MARTE) tested drilling and life detection here.",
        ],
        student:
            "A red, acidic river whose minerals are similar to those a rover found on Mars. Scientists use it to practise looking for life in harsh places.",
        scientist:
            "Jarosite, hematite, and ferric oxide deposits allow calibration of Raman and Mössbauer instruments and biosignature workflows. The environment is wet and biologically active, which differs from ancient, dry Meridiani surfaces.",
        works:
            "Calibrating Raman and Mössbauer instruments and testing biosignature-detection workflows for iron-sulfate deposits.",
        limits:
            "Its flowing acidic water and active bacteria represent a wet, biologically active environment unlike ancient, dry Martian surface conditions.",
        tags: ["jarosite", "hematite", "biosignature", "raman", "acidic", "astrobiology"],
        sources:
            "Centro de Astrobiología (CAB-CSIC/INTA); European Space Agency; NASA Astrobiology Institute.",
    },
    {
        id: "mojave",
        name: "Mojave Desert, United States",
        region: "Dumont Dunes and Kelso, California, United States",
        body: "mars",
        similarityRate: null,
        latitude: 35.6833,
        longitude: -116.2167,
        target: "Mars — Bagnold Dunes, Gale Crater, and the Jezero landing zone",
        factors:
            "Basalt-rich dunes, alluvial fans, desert pavement, and windblown dust plumes.",
        keyFacts: [
            "Bagnold Dunes in Gale Crater are active dunes studied by Curiosity.",
            "Dumont Dunes and Kelso Dunes are used for dune-mobility and sensor tests.",
        ],
        student:
            "Sand dunes and rocky desert fans where rovers practise not getting stuck in sand, and landing cameras are tested.",
        scientist:
            "Dune and alluvial-fan terrain supports terrain-relative navigation, wheel-slip mitigation, and LiDAR dust profiling. Quartz-rich sand differs from Martian basaltic sand, and denser air changes transport and landing physics.",
        works:
            "Testing terrain-relative navigation and optical landing sensors, rover wheel-slip mitigation, and LiDAR dust profiling.",
        limits:
            "Quartz-rich sand differs from Martian basaltic sand; Earth gravity and dense air alter wind transport and landing physics.",
        tags: ["dunes", "navigation", "landing", "dust", "wheel slip", "lidar"],
        sources:
            "NASA Jet Propulsion Laboratory Mars Yard and Mojave field tests; NASA Flight Opportunities Program.",
    },
];

// ---------- Existing exports (unchanged behavior) ----------

const sites = {
    moon: [
        {
            name: "Haughton Crater",
            region: "Devon Island, Nunavut, Canada",
            topic: "What can impact-crater terrain and remote field operations teach us?",
        },
        {
            name: "Atacama Desert",
            region: "Chile",
            topic: "How can arid ground inform terrain studies and autonomous field tests?",
        },
        {
            name: "Death Valley",
            region: "California, United States",
            topic: "How do geology, dust, and sunlight affect surface operations?",
        },
    ],
    mars: [
        {
            name: "Atacama Desert",
            region: "Chile",
            topic: "How can arid ground inform terrain studies and autonomous field tests?",
        },
        {
            name: "Haughton Crater",
            region: "Devon Island, Nunavut, Canada",
            topic: "What can impact processes and remote field operations teach us?",
        },
        {
            name: "Death Valley",
            region: "California, United States",
            topic: "How do arid geology and environmental stress affect field operations?",
        },
    ],
};

export function earthAnalogsFor(target) {
    return sites[target] || [];
}

export function renderEarthAnalogCards(target) {
    return earthAnalogsFor(target)
        .map(
            ({ name, region, topic }) =>
                `<article class="analog-card"><h3>${name}</h3><span>${region}</span><p>Potential comparison question: ${topic}</p><a href="${ANALOG_SOURCE}" target="_blank" rel="noopener">Challenge source ↗</a></article>`,
        )
        .join("");
}

export function surfaceCoordinates({ x, y, z }) {
    const radius = Math.hypot(x, y, z);
    if (!radius) throw new RangeError("Surface point must be nonzero");
    const latitude = (Math.asin(y / radius) * 180) / Math.PI;
    const longitude = (Math.atan2(-z, x) * 180) / Math.PI;
    return {
        latitude: Object.is(latitude, -0) ? 0 : latitude,
        longitude: Object.is(longitude, -0) ? 0 : longitude,
    };
}

export function lunarHeightPixel(latitude, longitude, width, height) {
    if (width < 1 || height < 1) throw new RangeError("Map dimensions must be positive");
    const x = Math.floor((((longitude + 180) % 360 + 360) % 360) / 360 * width);
    const y = Math.floor(((90 - latitude) / 180) * height);
    return {
        x: Math.min(width - 1, x),
        y: Math.min(height - 1, Math.max(0, y)),
    };
}

export function lunarElevationKm(gray) {
    return -12 + (gray / 255) * 24;
}

// ---------- New features ----------

const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/** "56–60%" -> { min: 56, max: 60, mid: 58 }; null when not scored. */
export function parseSimilarity(rate) {
    if (!rate) return null;
    const nums = String(rate).match(/\d+(?:\.\d+)?/g);
    if (!nums) return null;
    const min = Number(nums[0]);
    const max = Number(nums[1] ?? nums[0]);
    return { min, max, mid: (min + max) / 2 };
}

export function getSite(idOrName) {
    const key = String(idOrName).trim().toLowerCase();
    return EARTH_ANALOG_SITES.find((s) => s.id === key || s.name.toLowerCase() === key) || null;
}

/** All sites for "moon" or "mars"; pass nothing for every site. */
export function sitesForBody(body) {
    return body ? EARTH_ANALOG_SITES.filter((s) => s.body === body) : [...EARTH_ANALOG_SITES];
}

/** Highest similarity first; unscored sites go last. */
export function sortBySimilarity(list = EARTH_ANALOG_SITES) {
    return [...list].sort((a, b) => {
        const A = parseSimilarity(a.similarityRate)?.mid ?? -1;
        const B = parseSimilarity(b.similarityRate)?.mid ?? -1;
        return B - A;
    });
}

/** Case-insensitive search across name, region, target, factors, tags, and key facts. */
export function searchSites(query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return [...EARTH_ANALOG_SITES];
    return EARTH_ANALOG_SITES.filter((s) =>
        [s.name, s.region, s.target, s.factors, ...(s.tags || []), ...(s.keyFacts || [])]
            .join(" ")
            .toLowerCase()
            .includes(q),
    );
}

/** Great-circle distance in km between two lat/lon points. */
export function distanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
}

/** Sites ordered by distance from a point, e.g. the visitor's location. */
export function nearestSites(latitude, longitude, limit = 3) {
    return EARTH_ANALOG_SITES.map((s) => ({
        site: s,
        km: Math.round(distanceKm(latitude, longitude, s.latitude, s.longitude)),
    }))
        .sort((a, b) => a.km - b.km)
        .slice(0, limit);
}

/** Format coordinates like 29.0469° N, 13.5899° W. */
export function formatCoordinates(latitude, longitude) {
    const ns = latitude >= 0 ? "N" : "S";
    const ew = longitude >= 0 ? "E" : "W";
    return `${Math.abs(latitude).toFixed(4)}° ${ns}, ${Math.abs(longitude).toFixed(4)}° ${ew}`;
}

/**
 * Detailed site card. audience: "student" | "scientist" | "both" (default).
 * All text is HTML-escaped.
 */
export function renderSiteCard(site, audience = "both") {
    const s = typeof site === "string" ? getSite(site) : site;
    if (!s) return "";
    const rate = s.similarityRate ? escapeHtml(s.similarityRate) : "Not yet scored";
    const facts = (s.keyFacts || []).map((f) => `<li>${escapeHtml(f)}</li>`).join("");
    const showStudent = audience === "student" || audience === "both";
    const showScientist = audience === "scientist" || audience === "both";
    return `<article class="analog-card" data-body="${escapeHtml(s.body)}">
  <header>
    <h3>${escapeHtml(s.name)}</h3>
    <span class="region">${escapeHtml(s.region)} · ${formatCoordinates(s.latitude, s.longitude)}</span>
    <span class="rate">Similarity: ${rate}</span>
  </header>
  <p class="target"><strong>Target:</strong> ${escapeHtml(s.target)}</p>
  <p><strong>Why it is an analog:</strong> ${escapeHtml(s.factors)}</p>
  ${showStudent && s.student ? `<section class="student"><h4>Student view</h4><p>${escapeHtml(s.student)}</p></section>` : ""}
  ${showScientist && s.scientist ? `<section class="scientist"><h4>Scientist view</h4><p>${escapeHtml(s.scientist)}</p></section>` : ""}
  ${facts ? `<h4>Key facts</h4><ul>${facts}</ul>` : ""}
  <p><strong>What it helps test:</strong> ${escapeHtml(s.works)}</p>
  <p><strong>Where the analogy breaks down:</strong> ${escapeHtml(s.limits)}</p>
  <p class="sources"><strong>Sources:</strong> ${escapeHtml(s.sources)}</p>
</article>`;
}

/** Side-by-side comparison rows for a chosen set of site ids/names. */
export function compareSites(ids) {
    return ids
        .map(getSite)
        .filter(Boolean)
        .map((s) => ({
            name: s.name,
            target: s.target,
            similarity: s.similarityRate || "Not yet scored",
            works: s.works,
            limits: s.limits,
        }));
}
