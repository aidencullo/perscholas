function computeArea(width, height) {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`;
}

const result = computeArea(5, 10); // The area of a rectangle with a width of 5 and a height of 10 is 50 square units.

console.log(result);

const planetHasWater = function(planet) {
  return planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars';
}

const planetA = 'Earth';
console.log(`${planetA} has water: ${planetHasWater(planetA)}`); // Earth has water: true
const planetB = 'Mars';
console.log(`${planetB} has water: ${planetHasWater(planetB)}`); // Mars has water: true
