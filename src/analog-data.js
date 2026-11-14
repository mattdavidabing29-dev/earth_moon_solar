export const ANALOG_SOURCE =
  "https://www.spaceappschallenge.org/2026/challenges/permanent-moon-base-locations-and-mars/?tab=details";

export const EARTH_ANALOG_SITES = [
  {
    name: "Craters of the Moon",
    region: "Idaho, United States",
    latitude: 43.4167,
    longitude: -113.5167,
    target: "Moon — Marius Hills skylights and lava tubes",
    factors: "Basaltic lava flows, cinder cones, spatter cones, lava tubes, and caves.",
    works:
      "A field setting for cave-mapping LiDAR, rover mobility over rough lava, GPS-denied navigation, and testing subsurface shelter concepts.",
    limits:
      "Earth gravity limits stable lava-tube spans; air, moisture, and biological growth also differ from the lunar vacuum.",
    sources: "NASA FINESSE; USGS Astrogeology Science Center; SELENE/Kaguya observations.",
  },
  {
    name: "Lanzarote",
    region: "Canary Islands, Spain",
    latitude: 29.0469,
    longitude: -13.5899,
    target: "Moon — Oceanus Procellarum and Mare Tranquillitatis",
    factors: "Arid basaltic volcanic fields, pyroclastic ash, and extensive volcanic caves.",
    works:
      "ESA PANGAEA field-geology and sample-collection training, regolith-simulant construction, and human EVA workflows.",
    limits:
      "It lacks lunar impact-formed agglutinates; coastal humidity, wind erosion, and Earth gravity change dust behavior.",
    sources: "European Space Agency PANGAEA and CAVES campaigns; Instituto de Geociencias (IGEO-CSIC).",
  },
  {
    name: "Sudbury Basin",
    region: "Ontario, Canada",
    latitude: 46.6,
    longitude: -81.1833,
    target: "Moon — Tycho Crater and the lunar highlands",
    factors: "An ancient multi-ring impact structure with shatter cones, impact breccias, and impact-melt sheets.",
    works:
      "Training to identify shock-altered rocks, map ejecta, and select high-priority samples for lunar sample return.",
    limits:
      "Terrestrial plate tectonics, glaciation, vegetation, and water erosion have deformed and obscured the original crater.",
    sources: "NASA Johnson Space Center; Canadian Space Agency; Lunar and Planetary Institute.",
  },
  {
    name: "Atacama Desert",
    region: "Yungay region, Chile",
    latitude: -24.0833,
    longitude: -69.9167,
    target: "Mars — Jezero Crater and Oxia Planum",
    factors: "Hyper-arid soils, perchlorates, nitrates, sulfates, iron oxides, and fine mineral dust.",
    works:
      "Testing subsurface life-detection drills, autonomous rover mobility, and optical dust and aerosol sensors.",
    limits:
      "Earth's air pressure, coastal fog, and trace microbes differ from Mars; it also lacks global Martian dust storms and intense UV radiation.",
    sources: "NASA Ames ARADS; ESA ExoMars field testing; Centro de Astrobiología (CAB).",
  },
  {
    name: "McMurdo Dry Valleys",
    region: "Antarctica",
    latitude: -77.4667,
    longitude: 162.5167,
    target: "Mars — Vastitas Borealis and the Phoenix landing site",
    factors: "Continuous permafrost, ice-cemented soil, sublimation-dominated hydrology, and extreme cold.",
    works:
      "Testing cryogenic ice drills and soil-sampling tools, and studying crew isolation in nearby Antarctic stations.",
    limits:
      "Earth's temperatures are warmer than Martian winter extremes, and its nitrogen-oxygen atmosphere changes frost deposition and ice sublimation.",
    sources: "NSF McMurdo Dry Valleys LTER; NASA Phoenix analog studies; ESA Concordia Station research.",
  },
  {
    name: "Devon Island",
    region: "Haughton Crater, Nunavut, Canada",
    latitude: 75.375,
    longitude: -89.6833,
    target: "Mars — Gale Crater and polar impact basins",
    factors: "A 23-km impact crater in Arctic permafrost, with paleolake sediments, gullies, and ground ice.",
    works:
      "A proving ground for spacesuit EVA mobility, unpressurized rover navigation, tele-robotics, and time-delayed mission communications.",
    limits:
      "Summer melt creates liquid runoff and active tundra biology; breathable Earth air does not reproduce spacesuit pressure differences.",
    sources: "NASA Haughton-Mars Project; Mars Institute; SETI Institute; Canadian Space Agency.",
  },
  {
    name: "Mauna Kea and Mauna Loa",
    region: "Hawaii, United States",
    latitude: 19.8207,
    longitude: -155.4681,
    target: "Mars — Olympus Mons and the Tharsis volcanic province",
    factors: "Iron-rich basaltic tephra, volcanic ash, shield-volcano slopes, and lava tubes.",
    works:
      "Supporting crew-isolation simulations, basalt-regolith sintering for construction, and water-extraction studies.",
    limits:
      "Hawaiian volcanoes are smaller than Martian volcanoes; Earth gravity, rainfall, and trade winds accelerate weathering.",
    sources: "NASA HI-SEAS; NASA Kennedy Space Center Swamp Works; Pacific International Space Center for Exploration Systems.",
  },
  {
    name: "Rio Tinto",
    region: "Andalusia, Spain",
    latitude: 37.7033,
    longitude: -6.5517,
    target: "Mars — Meridiani Planum",
    factors: "Iron- and sulfur-rich jarosite, hematite, and ferric iron oxides.",
    works:
      "Calibrating Raman and Mössbauer instruments and testing biosignature-detection workflows for iron-sulfate deposits.",
    limits:
      "Its flowing acidic water and active bacteria represent a wet, biologically active environment unlike ancient, dry Martian surface conditions.",
    sources: "Centro de Astrobiología (CAB-CSIC/INTA); European Space Agency; NASA Astrobiology Institute.",
  },
  {
    name: "Mojave Desert",
    region: "Dumont Dunes and Kelso, California, United States",
    latitude: 35.6833,
    longitude: -116.2167,
    target: "Mars — Bagnold Dunes, Gale Crater, and the Jezero landing zone",
    factors: "Basalt-rich dunes, alluvial fans, desert pavement, and windblown dust plumes.",
    works:
      "Testing terrain-relative navigation and optical landing sensors, rover wheel-slip mitigation, and LiDAR dust profiling.",
    limits:
      "Quartz-rich sand differs from Martian basaltic sand; Earth gravity and dense air alter wind transport and landing physics.",
    sources: "NASA Jet Propulsion Laboratory Mars Yard and Mojave field tests; NASA Flight Opportunities Program.",
  },
];

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
