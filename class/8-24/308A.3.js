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

// Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
//   console.log(result1, result2, result3);
// });



// [func1, func2, func3]
//   .reduce((p, f) => p.then(f), Promise.resolve())
//   .then((result3) => {
//     console.log(result3);
//   });


// Promise.resolve()
//   .then(func1)
//   .then(func2)
//   .then(func3)
//   .then(console.log);


// const p1 = Promise.reject();
// const p2 = Promise.reject();
// const p3 = Promise.resolve();

// const promises = [p1, p2, p3];

// Promise.any(promises).then(console.log);




// setTimeout(() => console.log('A'), 0);
// setTimeout(() => console.log('B'), 0);
// setTimeout(() => console.log('C'), 0);
// new Promise((resolve, reject) => {
//   setTimeout(() => console.log('D'), 0);
//   resolve();
// })
//   .then(() => console.log('E'))
//   .then(() => console.log('F'));













// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// // Expected output: "two"





// const promise3 = Promise.reject(3);
// const promise4 = Promise.resolve(4);

// Promise.race([promise3, promise4])
//   .then(console.log)
//   .catch(console.error);





// const myFirstPromise = new Promise((resolve, reject) => {
//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML API.
//   setTimeout(() => {
//     resolve("Success!"); // Yay! Everything went well!
//   }, 250);
// });

// myFirstPromise.then((successMessage) => {
//   // successMessage is whatever we passed in the resolve(...) function above.
//   // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//   console.log(`Yay! ${successMessage}`);
// });









// function saySomething(something) {
//   throw new Error('I am an error');
// }

// function wrapSaySomething(something) {
//   return new Promise((resolve, reject) => {
//     saySomething("10 seconds passed");
//   })
//     .then(console.log)
//   .catch(console.error);
// }

// setTimeout(() => wrapSaySomething("10 seconds passed"), 1000);





function failureCallback(error) {
  console.error('Error:', error);
}

function saySomething(something) {
  throw new Error('I am an error');
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
