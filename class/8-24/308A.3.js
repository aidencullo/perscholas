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






// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });


// // initial
// // do that
// // do this...





// function doSomething() {
//   return Promise.resolve('First thing');
// }

// function doSomethingElse(result) {
//   throw new Error('Fail');
//   return Promise.resolve(result + ' Second thing');
// }

// function doThirdThing(result) {
//   return Promise.resolve(result + ' Third thing');
// }

// function failureCallback(error) {
//   throw new Error('Oh no!');
//   console.error('Error:', error);
// }

// doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(newResult))
//   .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
//   .catch(failureCallback)
//   .catch((e) => console.error(`Critical failure: ${e.message}`));











// function func1() {
//   return Promise.resolve('First thing');
// }

// function func2() {
//   return Promise.resolve('Second thing');
// }

// function func3() {
//   return Promise.resolve('Third thing');
// }

// // Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
// //   console.log(result1, result2, result3);
// // });



// // [func1, func2, func3]
// //   .reduce((p, f) => p.then(f), Promise.resolve())
// //   .then((result3) => {
// //     console.log(result3);
// //   });


// Promise.resolve()
//   .then(func1)
//   .then(func2)
//   .then(func3)
//   .then(console.log);


// const promise1 = Promise.reject();
// const promise2 = Promise.reject();
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 0, 'foo'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));




setTimeout(() => console.log('A'), 0);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 0);
new Promise((resolve, reject) => {
  setTimeout(() => console.log('D'), 0);
  resolve();
})
  .then(() => console.log('E'))
  .then(() => console.log('F'));
