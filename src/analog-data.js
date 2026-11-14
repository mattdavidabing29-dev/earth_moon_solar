// earth-analogs.js — data from "Planetary Analog Environments: Earth, Moon & Mars Assessment" (PDF).
// All site data below comes from that PDF only. Previous enriched fields
// (similarity rates, student/scientist text, extra key facts, tags) and the old
// Haughton / Atacama / Death Valley list were removed.

export const ANALOG_SOURCE =
    "https://www.spaceappschallenge.org/2026/challenges/permanent-moon-base-locations-and-mars/?tab=details";

// ---------- Core analytical framework (evaluation goals) ----------
export const EVALUATION_GOALS = [
    {
        id: 1,
        title: "Where the Analogy Works",
        description:
            "Identifies the exact geological, mineralogical, climatic, and environmental properties (including permafrost, dust/aerosols, volcanic terrains, lava tubes, caves, and water ice) that closely replicate Lunar or Martian targets.",
    },
    {
        id: 2,
        title: "How It Will Work (Science & Exploration Utility)",
        description:
            "Explains how field testing, robotics, mobility, navigation, landing, construction, In-Situ Resource Utilization (ISRU), and human operations execute science and engineering validation at each site.",
    },
    {
        id: 3,
        title: "Where It Breaks Down & Doesn't Work",
        description:
            "Defines the physical, atmospheric, gravitational, radiative, and biological boundaries where Earth conditions diverge from extraterrestrial reality.",
    },
];

// ---------- Sites ----------
// body: "moon" | "mars". Longitudes are signed for Earth sites (W negative) and as
// printed in the PDF for targets (Mars targets use °E, 0–360).
export const EARTH_ANALOG_SITES = [
    // ===== Section 1: Lunar Analog Sites on Earth =====
    {
        id: "craters-of-the-moon",
        number: 1,
        body: "moon",
        name: "Craters of the Moon National Monument",
        region: "Idaho, USA",
        latitude: 43.4167,
        longitude: -113.5167,
        earthCoordinates: "43.4167° N, 113.5167° W",
        target: "Marius Hills Skylight & Lava Tubes",
        targetCoordinates: "14.09° N, 56.77° W",
        targets: [{ name: "Marius Hills Skylight & Lava Tubes", latitude: 14.09, longitude: -56.77 }],
        keyFactors: ["Volcanic terrains", "Lava tubes", "Caves", "Mobility", "Navigation", "Human operations", "Construction"],
        analogyWorks:
            "Features young, unweathered basaltic lava flows, cinder cones, spatter cones, and intact subsurface lava tubes/caves morphologically identical to lunar mare rilles and skylight pits.",
        howItWorks:
            "Enables testing of subterranean cave-mapping LiDAR, autonomous rover mobility over jagged lava blocks, non-GPS navigation inside dark lava tubes, and evaluating subsurface shelter construction against radiation.",
        breaksDown:
            "Earth's 1g gravity limits the maximum stable span of terrestrial lava tubes (~30 m wide) compared to the Moon's 1/6g (which supports massive caves hundreds of meters wide). Atmospheric air pressure, moisture, and biological growth inside caves do not match the lunar vacuum.",
        sources:
            "NASA FINESSE (Field Investigations to Enable Solar System Science and Exploration); USGS Astrogeology Science Center; JAXA SELENE/Kaguya Lunar Lava Tube Observations.",
        matrix: {
            earthSite: "Craters of the Moon, ID",
            earthCoordinates: "43.42° N, 113.52° W",
            targetName: "Moon: Marius Hills",
            targetCoordinates: "14.09° N, 56.77° W",
            goal1: "Basalt lava flows, intact lava tubes & caves.",
            goal2: "Cave LiDAR mapping, rover mobility, shelter radiation shielding.",
            goal3: "1g gravity limits cave width; air & cave moisture present.",
        },
    },
    {
        id: "lanzarote",
        number: 2,
        body: "moon",
        name: "Lanzarote",
        region: "Canary Islands, Spain",
        latitude: 29.0469,
        longitude: -13.5899,
        earthCoordinates: "29.0469° N, 13.5899° W",
        target: "Oceanus Procellarum & Mare Tranquillitatis",
        targetCoordinates: "8.50° N, 31.40° E",
        targets: [{ name: "Oceanus Procellarum & Mare Tranquillitatis", latitude: 8.5, longitude: 31.4 }],
        keyFactors: ["Similar geology/minerals", "Volcanic terrains", "Lava tubes", "Caves", "Human operations", "ISRU", "Construction"],
        analogyWorks:
            "Arid basaltic volcanic fields, pyroclastic ash deposits, and extensive volcanic cave systems (such as Cueva de los Verdes) replicate lunar mare basalt mineralogy and minimal vegetation cover.",
        howItWorks:
            "Used by the European Space Agency (ESA) PANGAEA campaign to train astronauts in field geology, sample collection, 3D-printing habitats using crushed basaltic regolith simulants (ISRU), and human EVA workflows.",
        breaksDown:
            "Lack of sharp, electrostatically charged agglutinates formed by micrometeorite bombardment on the Moon; marine humidity, wind erosion, and Earth gravity alter dust behavior and regolith mechanics.",
        sources:
            "European Space Agency (ESA) PANGAEA & CAVES Training Campaigns; Instituto de Geociencias (IGEO-CSIC), Spain.",
        matrix: {
            earthSite: "Lanzarote, Spain",
            earthCoordinates: "29.05° N, 13.59° W",
            targetName: "Moon: Mare Tranquillitatis",
            targetCoordinates: "8.50° N, 31.40° E",
            goal1: "Basalt regolith, volcanic terrain, lava tubes.",
            goal2: "Astronaut geology training (PANGAEA), ISRU 3D printing.",
            goal3: "Lacks sharp lunar agglutinates; coastal humidity & 1g gravity.",
        },
    },
    {
        id: "sudbury-basin",
        number: 3,
        body: "moon",
        name: "Sudbury Basin",
        region: "Ontario, Canada",
        latitude: 46.6,
        longitude: -81.1833,
        earthCoordinates: "46.6000° N, 81.1833° W",
        target: "Tycho Crater & Lunar Highlands",
        targetCoordinates: "43.31° S, 11.36° W",
        targets: [{ name: "Tycho Crater & Lunar Highlands", latitude: -43.31, longitude: -11.36 }],
        keyFactors: ["Similar geology/minerals", "Human operations", "Navigation"],
        analogyWorks:
            "Preserves a 1.85-billion-year-old multi-ring impact structure containing shatter cones, impact breccias, and impact melt sheets analogous to lunar highland craters.",
        howItWorks:
            "Trains Artemis astronauts and planetary geologists to identify shock-metamorphosed rocks, map crater ejecta blankets, and select high-priority samples for lunar sample return.",
        breaksDown:
            "Billions of years of terrestrial plate tectonics, glaciation, forest cover, and hydrological erosion have deformed and masked the original circular crater rim, unlike pristine airless lunar craters.",
        sources:
            "NASA Johnson Space Center (JSC) Astronaut Geology Training; Canadian Space Agency (CSA); Lunar and Planetary Institute (LPI).",
        matrix: {
            earthSite: "Sudbury Basin, Canada",
            earthCoordinates: "46.60° N, 81.18° W",
            targetName: "Moon: Tycho Crater",
            targetCoordinates: "43.31° S, 11.36° W",
            goal1: "Impact breccias, shatter cones, melt sheets.",
            goal2: "Artemis astronaut crater mapping & sample selection.",
            goal3: "Glacial & tectonic erosion; dense vegetation cover.",
        },
    },

    // ===== Section 2: Martian Analog Sites on Earth =====
    {
        id: "atacama",
        number: 4,
        body: "mars",
        name: "Atacama Desert (Yungay Region)",
        region: "Chile",
        latitude: -24.0833,
        longitude: -69.9167,
        earthCoordinates: "24.0833° S, 69.9167° W",
        target: "Jezero Crater & Oxia Planum",
        targetCoordinates: "Jezero Crater: 18.38° N, 77.58° E; Oxia Planum: 18.28° N, 335.37° E",
        targets: [
            { name: "Jezero Crater", latitude: 18.38, longitude: 77.58 },
            { name: "Oxia Planum", latitude: 18.28, longitude: 335.37 },
        ],
        keyFactors: ["Similar geology/minerals", "Dust storms", "Aerosols", "Robotics", "Mobility", "Human operations"],
        analogyWorks:
            "Hyper-arid soils rich in perchlorates, nitrates, sulfates, and iron oxides closely match Martian regolith chemistry; suspended fine mineral dust models atmospheric aerosols.",
        howItWorks:
            "Validates subsurface life-detection drills (such as ESA's ExoMars Rosalind Franklin rover), autonomous rover mobility over gravel-strewn plains, and optical dust/aerosol sensors.",
        breaksDown:
            "Atmospheric pressure (~1,000 mbar vs. Mars's ~6 mbar) allows liquid fog moisture (camanchaca) and supports trace endolithic microbes; lacks global-scale electrostatic Martian dust storms and intense UV/ionizing radiation.",
        sources:
            "NASA Ames Research Center (ARADS — Atacama Rover Astrobiology Drilling Studies); ESA ExoMars Field Testing; Centro de Astrobiología (CAB).",
        matrix: {
            earthSite: "Atacama Desert, Chile",
            earthCoordinates: "24.08° S, 69.92° W",
            targetName: "Mars: Jezero Crater",
            targetCoordinates: "18.38° N, 77.58° E",
            goal1: "Perchlorates, sulfates, hyper-aridity, fine dust/aerosols.",
            goal2: "ExoMars subsurface drilling, rover autonomy, aerosol sensors.",
            goal3: "1,000 mbar air pressure, coastal fog, trace microbes.",
        },
    },
    {
        id: "mcmurdo-dry-valleys",
        number: 5,
        body: "mars",
        name: "McMurdo Dry Valleys",
        region: "Antarctica",
        latitude: -77.4667,
        longitude: 162.5167,
        earthCoordinates: "77.4667° S, 162.5167° E",
        target: "Vastitas Borealis / Phoenix Landing Site",
        targetCoordinates: "68.22° N, 234.25° E",
        targets: [{ name: "Vastitas Borealis / Phoenix Landing Site", latitude: 68.22, longitude: 234.25 }],
        keyFactors: ["Permafrost", "Low temperature", "Water ice", "Robotics", "Human operations"],
        analogyWorks:
            "Ground remains continuously at or below 0°C for thousands of years (true permafrost) with ice-cemented soil, sublimation-dominated hydrology, and hyper-cold katabatic winds mirroring Martian polar plains.",
        howItWorks:
            "Tests cryogenic rotary-percussive ice drills for water-ice extraction (ISRU), validates Phoenix/Viking-style soil scoops, and studies crew psychological isolation at nearby Antarctic stations.",
        breaksDown:
            "Temperatures (-20°C to -50°C) are still warmer than Martian winter extremes (-125°C); Earth's nitrogen-oxygen atmosphere prevents CO₂ dry-ice frost deposition and alters ice sublimation rates.",
        sources:
            "National Science Foundation (NSF) McMurdo Dry Valleys LTER; NASA Phoenix Mars Scout Analog Studies; ESA Concordia Station Biomedical Research.",
        matrix: {
            earthSite: "McMurdo Dry Valleys",
            earthCoordinates: "77.47° S, 162.52° E",
            targetName: "Mars: Vastitas Borealis",
            targetCoordinates: "68.22° N, 234.25° E",
            goal1: "Continuous permafrost (≤0°C ≥2 yrs), water ice, low temp.",
            goal2: "Cryogenic ice-core drilling (ISRU), crew isolation studies.",
            goal3: "Warmer than Martian winter (-125°C); no CO₂ dry ice frost.",
        },
    },
    {
        id: "devon-island",
        number: 6,
        body: "mars",
        name: "Devon Island (Haughton Crater)",
        region: "Nunavut, Canada",
        latitude: 75.375,
        longitude: -89.6833,
        earthCoordinates: "75.3750° N, 89.6833° W",
        target: "Gale Crater & Polar Impact Basins",
        targetCoordinates: "Gale Crater: 5.40° S, 137.80° E",
        targets: [{ name: "Gale Crater", latitude: -5.4, longitude: 137.8 }],
        keyFactors: ["Permafrost", "Low temperature", "Water ice", "Similar geology", "Robotics", "Mobility", "Navigation", "Human operations"],
        analogyWorks:
            "A 23-km-wide impact crater embedded in Arctic permafrost with paleolake sediments, gully networks, and ground ice analogous to ancient Martian crater lakes.",
        howItWorks:
            "Serves as a full-scale operational proving ground (Haughton-Mars Project) for spacesuit EVA mobility, unpressurized rover navigation, tele-robotics, and time-delayed Earth-Mars mission communications.",
        breaksDown:
            "Brief Arctic summer melt creates liquid runoff streams and active tundra biology; Earth's breathable air eliminates life-support pressure differentials inside spacesuits.",
        sources: "NASA Haughton-Mars Project (HMP); Mars Institute; SETI Institute; Canadian Space Agency (CSA).",
        matrix: {
            earthSite: "Devon Island, Canada",
            earthCoordinates: "75.38° N, 89.68° W",
            targetName: "Mars: Gale Crater",
            targetCoordinates: "5.40° S, 137.80° E",
            goal1: "Arctic permafrost, impact crater, ground ice, low temp.",
            goal2: "Spacesuit EVAs, rover navigation, Earth-Mars comm delays.",
            goal3: "Summer snowmelt streams; active Arctic tundra biology.",
        },
    },
    {
        id: "mauna-kea-mauna-loa",
        number: 7,
        body: "mars",
        name: "Mauna Kea & Mauna Loa",
        region: "Hawaii, USA",
        latitude: 19.8207,
        longitude: -155.4681,
        earthCoordinates: "19.8207° N, 155.4681° W",
        target: "Olympus Mons & Tharsis Volcanic Province",
        targetCoordinates: "Olympus Mons: 18.65° N, 226.20° E",
        targets: [{ name: "Olympus Mons", latitude: 18.65, longitude: 226.2 }],
        keyFactors: [
            "Similar geology/minerals",
            "Volcanic terrains",
            "Lava tubes",
            "Caves (uncertain on Mars)",
            "Construction",
            "ISRU",
            "Human operations",
        ],
        analogyWorks:
            "High-altitude iron-rich basaltic tephra, weathered volcanic ash (palagonite), shield volcano slopes, and lava tubes closely replicate Martian basaltic regolith and Tharsis volcanism.",
        howItWorks:
            "Supports long-duration crew isolation missions (HI-SEAS habitat), microwave/solar sintering of basalt regolith into landing pads and bricks (ISRU), and water extraction from hydrated minerals.",
        breaksDown:
            "Hawaiian shield volcanoes are far smaller than Martian volcanoes (Olympus Mons is ~22 km high due to lack of plate tectonics and 0.38g gravity); frequent rainfall and trade winds weather the volcanic ash rapidly.",
        sources:
            "NASA HI-SEAS (Hawai'i Space Exploration Analog and Simulation); NASA Kennedy Space Center Swamp Works (ISRU); PISCES (Pacific International Space Center for Exploration Systems).",
        matrix: {
            earthSite: "Mauna Kea / Loa, HI",
            earthCoordinates: "19.82° N, 155.47° W",
            targetName: "Mars: Olympus Mons",
            targetCoordinates: "18.65° N, 226.20° E",
            goal1: "Iron-rich basalt, volcanic ash, shield slopes, lava tubes.",
            goal2: "HI-SEAS habitat simulations, regolith sintering (ISRU).",
            goal3: "Plate tectonics & 1g limit volcano height; rainfall weathering.",
        },
    },
    {
        id: "rio-tinto",
        number: 8,
        body: "mars",
        name: "Rio Tinto",
        region: "Andalusia, Spain",
        latitude: 37.7033,
        longitude: -6.5517,
        earthCoordinates: "37.7033° N, 6.5517° W",
        target: "Meridiani Planum / Opportunity Site",
        targetCoordinates: "1.95° S, 354.47° E",
        targets: [{ name: "Meridiani Planum / Opportunity Site", latitude: -1.95, longitude: 354.47 }],
        keyFactors: ["Similar geology/minerals", "Robotics", "Human operations"],
        analogyWorks:
            "Iron- and sulfur-rich mineralogy featuring jarosite, hematite concretions (\"blueberries\"), and ferric iron oxides mirrors the acidic, sulfate-rich aqueous history of Meridiani Planum on Mars.",
        howItWorks:
            "Calibrates Raman spectrometers, Mössbauer instruments, and biosignature-detection workflows used to search for fossilized microbial biomarkers in Martian iron-sulfate deposits.",
        breaksDown:
            "Active, flowing acidic river water (pH ~2) driven by modern chemolithotrophic bacteria represents a wet, biologically active system, whereas Mars lost surface liquid water billions of years ago.",
        sources:
            "Centro de Astrobiología (CAB-CSIC/INTA), Spain; European Space Agency (ESA); NASA Astrobiology Institute.",
        matrix: {
            earthSite: "Rio Tinto, Spain",
            earthCoordinates: "37.70° N, 6.55° W",
            targetName: "Mars: Meridiani Planum",
            targetCoordinates: "1.95° S, 354.47° E",
            goal1: "Hematite, jarosite, iron oxides, sulfate mineralogy.",
            goal2: "Spectrometer calibration & ancient biosignature detection.",
            goal3: "Flowing acidic liquid water & active acidophilic bacteria.",
        },
    },
    {
        id: "mojave",
        number: 9,
        body: "mars",
        name: "Mojave Desert (Dumont Dunes & Kelso)",
        region: "California, USA",
        latitude: 35.6833,
        longitude: -116.2167,
        earthCoordinates: "35.6833° N, 116.2167° W",
        target: "Bagnold Dunes, Gale Crater & Jezero Landing Zone",
        targetCoordinates: "Bagnold Dunes: 4.65° S, 137.38° E",
        targets: [{ name: "Bagnold Dunes, Gale Crater", latitude: -4.65, longitude: 137.38 }],
        keyFactors: ["Dust storms", "Aerosols", "Landing", "Navigation", "Mobility", "Robotics"],
        analogyWorks:
            "Basalt-rich sand dunes, alluvial fans, desert pavements, and windblown dust plumes replicate Martian aeolian bedforms and hazardous rocky landing ellipses.",
        howItWorks:
            "Validates Terrain Relative Navigation (TRN) optical landing cameras on suborbital rockets, rover wheel-slip mitigation algorithms in loose sand, and LIDAR aerosol/dust profiling.",
        breaksDown:
            "Quartz-rich terrestrial sand grains differ in hardness from Martian basaltic-olivine sand; Earth's 1g gravity and dense air change saltation trajectories and aerodynamic parachute/retro-propulsion physics.",
        sources:
            "NASA Jet Propulsion Laboratory (JPL) MarsYard & Mojave Field Tests; NASA Flight Opportunities Program (Terrain Relative Navigation).",
        matrix: {
            earthSite: "Mojave Desert, CA",
            earthCoordinates: "35.68° N, 116.22° W",
            targetName: "Mars: Bagnold Dunes",
            targetCoordinates: "4.65° S, 137.38° E",
            goal1: "Basaltic sand dunes, rocky fans, windblown dust plumes.",
            goal2: "Landing radar/TRN camera tests, wheel traction, dust LiDAR.",
            goal3: "Quartz sand fraction; 1g & dense air alter descent physics.",
        },
    },
];

// ---------- Section 3: Innovative methods to bridge analog breakdowns ----------
export const BRIDGING_INTRO =
    "Because no single Earth location satisfies all planetary criteria simultaneously, mission planners decouple parameters across specialized analogs: Antarctica for permafrost and water-ice drilling, Mojave for EDL (Entry, Descent, and Landing) sensors, and Idaho/Lanzarote for lava tube shelter architecture.";

export const BRIDGING_METHODS = [
    {
        id: 1,
        title: "Single-Factor Site Decomposition",
        description: BRIDGING_INTRO,
    },
    {
        id: 2,
        title: "Quantitative Similarity Metrics & Geospatial Scoring",
        description:
            "Planetary scientists construct multi-dimensional Similarity Indices comparing grain-size distribution, slope angles, thermal inertia, and bulk oxide chemistry between Earth field sites and orbital datasets (HiRISE, CRISM, LRO) to mathematically score where an analogy holds or fails.",
    },
    {
        id: 3,
        title: "Machine Learning & Remote Sensing Discovery",
        description:
            "Convolutional Neural Networks (CNNs) and unsupervised clustering algorithms analyze hyperspectral satellite imagery across Earth, the Moon, and Mars to automatically detect hidden lava tube skylights, match mineral assemblages, and discover unmapped terrestrial analogs.",
    },
    {
        id: 4,
        title: "Hybrid Physical-Virtual Gravity & Environment Augmentation",
        description:
            "To overcome Earth's 1g gravity and breathable atmosphere breakdown, engineers pair outdoor analog terrain with active gravity-offloading harnesses (simulating 1/6g Lunar or 3/8g Martian weight), pressurized rover cabins, and Virtual Reality (VR) overlays simulating Martian dust storms and sky scattering.",
    },
];

// ---------- Section 5: Primary institutional & scientific sources ----------
export const PRIMARY_SOURCES = [
    {
        id: 1,
        name: "NASA Solar System Exploration Research Virtual Institute (SSERVI) & FINESSE",
        scope: "Field Investigations to Enable Solar System Science and Exploration (Craters of the Moon, Idaho & Lunar Lava Tube/Volcanic Analog Studies).",
    },
    {
        id: 2,
        name: "European Space Agency (ESA) — PANGAEA & CAVES Campaigns",
        scope: "Planetary Analogue Geological and Astrobiological Exercise for Astronauts (Lanzarote, Spain & Ries Crater Lunar/Martian Astronaut Training).",
    },
    {
        id: 3,
        name: "USGS Astrogeology Science Center & Lunar and Planetary Institute (LPI)",
        scope: "Terrestrial Analog Sites Database, Coordinate Catalogs, and Sudbury Basin Impact Structure Training Guides.",
    },
    {
        id: 4,
        name: "NASA Astrobiology & ARADS (Atacama Rover Astrobiology Drilling Studies)",
        scope: "Subsurface Drilling, Perchlorate Geochemistry, and ExoMars Rover Field Trials in Yungay, Atacama Desert, Chile.",
    },
    {
        id: 5,
        name: "National Science Foundation (NSF) McMurdo Dry Valleys LTER & NASA Phoenix Mission Analogs",
        scope: "Permafrost Stratigraphy, Sublimation Hydrology, and Cryogenic Water-Ice Extraction in Antarctica.",
    },
    {
        id: 6,
        name: "NASA Haughton-Mars Project (HMP), Mars Institute & SETI Institute",
        scope: "Arctic Permafrost Impact Crater Field Research, Spacesuit Mobility, and Human-Robotic Exploration on Devon Island, Nunavut.",
    },
    {
        id: 7,
        name: "NASA HI-SEAS & Kennedy Space Center Swamp Works",
        scope: "Long-Duration Human Isolation Studies and Basaltic Regolith ISRU/3D-Printing Construction Trials on Mauna Loa, Hawaii.",
    },
    {
        id: 8,
        name: "Centro de Astrobiología (CAB-CSIC/INTA), Spain",
        scope: "Iron-Sulfate Mineralogy, Acidic Aqueous Geochemistry, and Biosignature Instrumentation Testing at Rio Tinto, Andalusia.",
    },
    {
        id: 9,
        name: "NASA Jet Propulsion Laboratory (JPL) & Flight Opportunities Program",
        scope: "MarsYard Mobility Testing, Terrain Relative Navigation (TRN) Landing Sensor Validation, and Aeolian Dust/Aerosol Studies in the Mojave Desert.",
    },
    {
        id: 10,
        name: "JAXA (Japan Aerospace Exploration Agency) SELENE/Kaguya & NASA LRO (Lunar Reconnaissance Orbiter)",
        scope: "Orbital Radar and High-Resolution Imaging of Marius Hills Skylights, Mare Tranquillitatis, and Tycho Crater.",
    },
];

// ---------- Section 4: master reference matrix (built from each site's `matrix`) ----------
export const MASTER_MATRIX = EARTH_ANALOG_SITES.map(({ id, matrix }) => ({ id, ...matrix }));

// ---------- Helpers ----------
const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export function getSite(idOrName) {
    const key = String(idOrName).trim().toLowerCase();
    return EARTH_ANALOG_SITES.find((s) => s.id === key || s.name.toLowerCase() === key) || null;
}

/** All sites for "moon" or "mars"; pass nothing for every site. */
export function sitesForBody(body) {
    return body ? EARTH_ANALOG_SITES.filter((s) => s.body === body) : [...EARTH_ANALOG_SITES];
}

/** Same as sitesForBody; kept so existing callers keep working. Returns full site objects. */
export function earthAnalogsFor(target) {
    return sitesForBody(target);
}

/** Case-insensitive search across names, targets, key factors, and the three goal texts. */
export function searchSites(query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return [...EARTH_ANALOG_SITES];
    return EARTH_ANALOG_SITES.filter((s) =>
        [s.name, s.region, s.target, ...s.keyFactors, s.analogyWorks, s.howItWorks, s.breaksDown]
            .join(" ")
            .toLowerCase()
            .includes(q),
    );
}

/** Sites that list a given key factor, e.g. "Permafrost" or "ISRU". */
export function sitesByFactor(factor) {
    const f = String(factor || "").trim().toLowerCase();
    return EARTH_ANALOG_SITES.filter((s) => s.keyFactors.some((k) => k.toLowerCase().includes(f)));
}

/** Great-circle distance in km between two lat/lon points. */
export function distanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
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

/** Short cards (used by the Moon / Mars analog lists). */
export function renderEarthAnalogCards(target) {
    return earthAnalogsFor(target)
        .map(
            (s) =>
                `<article class="analog-card"><h3>${escapeHtml(s.name)}</h3><span>${escapeHtml(s.region)}</span><p>${escapeHtml(s.analogyWorks)}</p><a href="${ANALOG_SOURCE}" target="_blank" rel="noopener">Challenge source ↗</a></article>`,
        )
        .join("");
}

/** Full site card with all PDF details. All text is HTML-escaped. */
export function renderSiteCard(site) {
    const s = typeof site === "string" ? getSite(site) : site;
    if (!s) return "";
    const factors = s.keyFactors.map((f) => `<li>${escapeHtml(f)}</li>`).join("");
    return `<article class="analog-card" data-body="${escapeHtml(s.body)}">
  <header>
    <h3>${s.number}. ${escapeHtml(s.name)}</h3>
    <span class="region">${escapeHtml(s.region)} · ${escapeHtml(s.earthCoordinates)}</span>
    <span class="badge">${s.body === "moon" ? "LUNAR ANALOG" : "MARS ANALOG"}</span>
  </header>
  <p class="target"><strong>${s.body === "moon" ? "Moon" : "Mars"} target:</strong> ${escapeHtml(s.target)} (${escapeHtml(s.targetCoordinates)})</p>
  <h4>Key factors covered</h4><ul>${factors}</ul>
  <p><strong>1. ${EVALUATION_GOALS[0].title}:</strong> ${escapeHtml(s.analogyWorks)}</p>
  <p><strong>2. ${EVALUATION_GOALS[1].title}:</strong> ${escapeHtml(s.howItWorks)}</p>
  <p><strong>3. ${EVALUATION_GOALS[2].title}:</strong> ${escapeHtml(s.breaksDown)}</p>
  <p class="sources"><strong>Sources:</strong> ${escapeHtml(s.sources)}</p>
</article>`;
}

/** Side-by-side comparison rows (matrix fields) for a chosen set of site ids/names. */
export function compareSites(ids) {
    return ids
        .map(getSite)
        .filter(Boolean)
        .map((s) => ({ name: s.name, ...s.matrix }));
}

// ---------- Surface / map helpers (unchanged) ----------
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
