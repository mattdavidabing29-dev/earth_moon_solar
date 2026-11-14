import assert from "node:assert/strict";
import {
  ANALOG_SOURCE,
  EARTH_ANALOG_SITES,
  earthAnalogsFor,
  lunarElevationKm,
  lunarHeightPixel,
  renderEarthAnalogCards,
  surfaceCoordinates,
} from "../src/analog-data.js";

assert.deepEqual(surfaceCoordinates({ x: 1, y: 0, z: 0 }), {
  latitude: 0,
  longitude: 0,
});
assert.deepEqual(surfaceCoordinates({ x: 0, y: 1, z: 0 }), {
  latitude: 90,
  longitude: 0,
});
assert.equal(surfaceCoordinates({ x: 0, y: 0, z: -1 }).longitude, 90);
assert.throws(() => surfaceCoordinates({ x: 0, y: 0, z: 0 }), RangeError);

assert.deepEqual(lunarHeightPixel(0, 0, 360, 180), { x: 180, y: 90 });
assert.deepEqual(lunarHeightPixel(90, 180, 360, 180), { x: 0, y: 0 });
assert.deepEqual(lunarHeightPixel(-90, -180, 360, 180), {
  x: 0,
  y: 179,
});
assert.equal(lunarElevationKm(0), -12);
assert.equal(lunarElevationKm(255), 12);

for (const target of ["moon", "mars"]) {
  assert.equal(earthAnalogsFor(target).length, 3);
  const cards = renderEarthAnalogCards(target);
  for (const site of earthAnalogsFor(target)) assert.ok(cards.includes(site.name));
  assert.ok(cards.includes(ANALOG_SOURCE));
}
assert.deepEqual(earthAnalogsFor("unknown"), []);
assert.equal(EARTH_ANALOG_SITES.length, 9);
assert.deepEqual(
  EARTH_ANALOG_SITES.map(({ name }) => name),
  [
    "Craters of the Moon, United States",
    "Lanzarote, Spain",
    "Sudbury Basin, Canada",
    "Atacama Desert, Chile",
    "McMurdo Dry Valleys, Antarctica",
    "Devon Island, Canada",
    "Mauna Kea and Mauna Loa, United States",
    "Rio Tinto, Spain",
    "Mojave Desert, United States",
  ],
);
for (const [name, rate] of [
  ["Lanzarote, Spain", "56–60%"],
  ["Craters of the Moon, United States", "52–54%"],
  ["Sudbury Basin, Canada", "41–45%"],
]) {
  assert.equal(EARTH_ANALOG_SITES.find((site) => site.name === name)?.similarityRate, rate);
}
for (const site of EARTH_ANALOG_SITES) {
  assert.ok(site.latitude >= -90 && site.latitude <= 90, site.name);
  assert.ok(site.longitude >= -180 && site.longitude <= 180, site.name);
  assert.ok(site.targetCoordinates.length > 0, `${site.name}: targetCoordinates`);
  for (const field of ["region", "target", "factors", "works", "limits", "sources"])
    assert.ok(site[field].length > 0, `${site.name}: ${field}`);
}
console.log("Surface coordinates, lunar elevation lookup, and curated analog data passed");
