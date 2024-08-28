new Promise((resolve, reject) => {
  console.log(a);
})
  .then(() => console.log('Resolved'))
  .catch(() => console.log('Caught Error'))
console.log('After calling Promise');
