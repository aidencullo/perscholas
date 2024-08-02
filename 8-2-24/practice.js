// Practice Activity 1: Write a Function Declaration
// Write a function named computeArea using the function declaration approach.

// It will have two parameters: width & height.
// It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

function computeArea(width, height) {
	return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`;
}

const result = computeArea(5, 10); // The area of a rectangle with a width of 5 and a height of 10 is 50 square units.

console.log(result);


// Invoke the function to test it.

// Practice Activity 2: Write a Function Expression
// Write a function named planetHasWater using the function expression syntax.

// It will have one parameter: planet.
// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!

const planetHasWater = function(planet) {
	return planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars';
}

const planetA = 'Earth';
console.log(`${planetA} has water: ${planetHasWater(planetA)}`); // Earth has water: true
const planetB = 'Mars';
console.log(`${planetB} has water: ${planetHasWater(planetB)}`); // Mars has water: true
