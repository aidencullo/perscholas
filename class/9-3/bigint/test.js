const myNumber = 9999999999999999;
const myBigInt = 9999999999999999n;

console.log(typeof myNumber);
console.log(typeof myBigInt);

console.log(myNumber);
console.log(myBigInt);

// Uncaught TypeError: can't convert BigInt to number
// 9999999999999999n + 5


console.log( 9999999999999999 + 10 );  // Off by one
console.log( 9999999999999999n + 10n );

