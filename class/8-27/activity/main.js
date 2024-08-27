// 1. Create 3 files: index.html, main.js, and utils.js
// 2. Setup your index.html to work with ES6Modules 

//     <script type="module">

// 2. Add these functions to util.js (ex: add returns a + b):

//     add(a, b) 
//     subtract(a, b)
//     multiply(a, b)
//     divide(a, b)

// 3. Export these functions from util.js 
// 4. Import these functions into main.js 
// 5. Use these functions in main.js to perform calculations

//     let num1 = 6
//     let num2 = 15

//     console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`)

import {
  add,
  subtract,
  multiply,
  divide,
} from './utils.js'


let num1 = 6
let num2 = 15

console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`)
console.log(`The difference of ${num1} and ${num2} is: ${subtract(num1, num2)}`)
console.log(`The product of ${num1} and ${num2} is: ${multiply(num1, num2)}`)
console.log(`The quotient of ${num1} and ${num2} is: ${divide(num1, num2)}`)
