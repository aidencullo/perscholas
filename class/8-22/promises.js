console.log("One");

setTimeout(() => console.log("Two"), 0);

console.log("Three");


// Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Guess this worked!");
  }, 1000);
});

// Add some then() methods to handle additional tasks.
myPromise
  .then((x) => x + ' Again?')
  .then((x) => x + ' Third time!')
  .then((x) => x + ' Promises are cool.')
  .catch((err) => {
    console.error(err);
  })
  .then(console.log)
  .finally(() => console.log("All done!"));



doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);


function doSomething(callback, failureCallback) {
  callback('First');
}

function doSomethingElse(result, callback, failureCallback) {
  callback(result + ' Second');
}

function doThirdThing(result, callback, failureCallback) {
  callback(result + ' Third');
}
