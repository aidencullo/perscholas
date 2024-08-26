doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);


async function doSomething() {
  throw new Error('doSomething failed');
  return Promise.resolve('doSomething');
}

async function doSomethingElse(result) {
  return Promise.resolve(result + ' doSomethingElse');
}

async function doThirdThing(result) {
  return Promise.resolve(result + ' doThirdThing');
}

async function failureCallback(error) {
  console.error('Error: ', error);
}

async function asyncErrorHandler() {
  try {
    const something = await doSomething();
    const somethingElse = await doSomethingElse(something);
    const thirdThing = await doThirdThing(somethingElse);
  }
  catch (e) {
    failureCallback(e);
  }
}

asyncErrorHandler();
