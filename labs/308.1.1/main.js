// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);




//classwork


// Check if all numbers are divisible by 5. Cache the result in a variable.
const allDivisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = n1 > n4;

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticChain = (n2 - n1) * n3 % n4;


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isNotOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);




// Part 2: Practical Math
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:

const distance = 1500;
const budget = 175;

// How many gallons of fuel will you need for the entire trip?
const gallons55 = distance / 30;
const gallons60 = distance / 28;
const gallons75 = distance / 23;


// Will your budget be enough to cover the fuel expense?
const cost55 = gallons55 * 3;
const cost60 = gallons60 * 3;
const cost75 = gallons75 * 3;

const enough55 = cost55 <= budget;
const enough60 = cost60 <= budget;
const enough75 = cost75 <= budget;


// How long will the trip take, in hours?
const time55 = distance / 55;
const time60 = distance / 60;
const time75 = distance / 75;


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

const canAfford55 = enough55 ? 'affordable' : 'not affordable';
const canAfford60 = enough60 ? 'affordable' : 'not affordable';
const canAfford75 = enough75 ? 'affordable' : 'not affordable';

// Log the results of your calculations using string concatenation or template literals.

console.log(`At 55 mph, you will need ${gallons55} gallons of fuel, which will cost $${cost55}. You will arrive in ${time55} hours. It is ${canAfford55}.`);
console.log(`At 60 mph, you will need ${gallons60} gallons of fuel, which will cost $${cost60}. You will arrive in ${time60} hours. It is ${canAfford60}.`);
console.log(`At 75 mph, you will need ${gallons75} gallons of fuel, which will cost $${cost75}. You will arrive in ${time75} hours. It is ${canAfford75}.`);



// Part 3: Future Exploration
// In all of the problems above, there are two tools that would make it much easier to implement the logic we need and to reuse the code to test with different values:
// Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.
// Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the code or changing the value of variables in the code itself, like we needed to do above.
// We will explore control flow in the next lesson, and functions toward the end of the module. Until then, continue exploring with the variety of operators and data types available in JavaScript!
