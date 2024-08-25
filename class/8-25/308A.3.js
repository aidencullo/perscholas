// The initial promise is already resolved, so shouldn't it immediately console.log(2)? No. Like any other asynchronous task, the promise is put into the task queue and is only pushed to the execution stack when the stack is empty. This means the above code logs "1, 2."


// Promise.resolve().then(() => console.log(2));
// console.log(1);


// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log("Cat"));

// Promise.resolve()
//   .then(() => console.log("Dog"))
//   .then(() => console.log("Cow"));

// console.log("Bird");





// const thenable = {
//   then: function(onFulfilled) {
//     setTimeout(() => onFulfilled("Hey"), 100);
//   }
// };


// thenable.then((message) => console.log(message));

// const thenable = {
//     then: function(onFulfilled) {
//         setTimeout(() => onFulfilled("Hey"), 100);
//     }
// };

// const p = Promise.resolve(thenable);
// console.log(p instanceof Promise); // true

// Promise.resolve()
//     .then(() => thenable)
//     .then(val => console.log(val)); // Hey


// const p = new Promise(res => setTimeout(res('por fin'), 1000))
// const pp = Promise.resolve(p)

// pp
//   .then(console.log)
//   .catch(console.error)


// A thenable is an object with a `then()` function. The
// below thenable behaves like a promise that fulfills with
// the value `42` after 10ms.
const thenable = {
  then: function(onFulfilled, onRejected) {
    onRejected(1)
  },
};

Promise.resolve(thenable)
  .then(console.log)
  .catch(console.error);
