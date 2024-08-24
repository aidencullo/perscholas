// console.log("One");

// setTimeout(() => console.log("Two"), 0);

// console.log("Three");



// // Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Guess this worked!");
//   }, 1000);
// });

// // Add some then() methods to handle additional tasks.
// myPromise
//   .then((x) => x + ' Again?')
//   .then((x) => x + ' Third time!')
//   .then((x) => x + ' Promises are cool.')
//   .catch((err) => {
//     console.error(err);
//   })
//   .then((x) => console.log(x));









// function doSomethingCritical() {
//   return Promise.resolve({ critical: 'data' });
// }

// function doSomethingOptional(data) {
//   return Promise.resolve({ optional: 'data' });
// }

// function moreCriticalStuff() {
//   return Promise.resolve({ more: 'data' });
// }

// function doSomethingExtraNice(data) {
//   return Promise.resolve({ extra: 'extra nice data' });
// }


// doSomethingCritical()
//   .then((result) =>
//     doSomethingOptional(result)
//       .then((optionalResult) => doSomethingExtraNice(optionalResult))
//       .catch((e) => {}),
//   ) // Ignore if optional stuff fails; proceed.
//   .then(() => moreCriticalStuff())
//   .catch((e) => console.error(`Critical failure: ${e.message}`))
//   .then(console.log);


// Promise.resolve('foo')
//   .then(() => Promise.resolve('bar')) // Return a promise
//   .then(console.log); // Outputs: 'bar'






new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });


// initial
// do that
// do this...
