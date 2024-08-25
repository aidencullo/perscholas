// The initial promise is already resolved, so shouldn't it immediately console.log(2)? No. Like any other asynchronous task, the promise is put into the task queue and is only pushed to the execution stack when the stack is empty. This means the above code logs "1, 2."


// Promise.resolve().then(() => console.log(2));
// console.log(1);


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log("Cat"));

Promise.resolve()
  .then(() => console.log("Dog"))
  .then(() => console.log("Cow"));

console.log("Bird");
