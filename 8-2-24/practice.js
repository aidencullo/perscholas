function computeArea(width, height) {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`;
}

const result = computeArea(5, 10);
console.log(result);

function planetHasWater(planet, justForShow) {
  return planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars';
}

const planetA = 'Earth';
console.log(`${planetA} has water: ${planetHasWater(planetA)}`);
const planetB = 'Mars';
console.log(`${planetB} has water: ${planetHasWater(planetB)}`);
const planetC = 'Jupiter';
console.log(`${planetC} has water: ${planetHasWater(planetC)}`);
const planetD = 'MARS';
console.log(`${planetD} has water: ${planetHasWater(planetD)}`);
