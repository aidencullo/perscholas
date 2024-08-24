// Promise.resolve().then(console.log);
// // all these will print before the above line
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);







// // test your knowledge
// new Promise(resolve => {
//   console.log(1);
//   resolve(2);
// }).then(console.log);

// console.log(3);


// // 1, 3, 2











const promise = new Promise(resolve => {
  return Promise.resolve(2);
});

promise
  .then(console.log)
  .catch(console.error);


