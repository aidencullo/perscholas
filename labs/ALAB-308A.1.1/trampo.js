// Trampoline function to handle deep recursion
function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}

// Function to create a flattened array
function flattenArray(arr) {
  // Recursive function to flatten the array
  function flatten(arr) {
    let result = [];
    let i = 0;

    function next() {
      if (i >= arr.length) {
        return result.length ? () => result : null;
      }

      const item = arr[i++];
      if (Array.isArray(item)) {
        return () => flatten(item).concat(next());
      } else {
        result.push(item);
        return next();
      }
    }

    return next;
  }

  return trampoline(flatten(arr));
}

// Example usage
const nestedArray = [1, [2, [3, [4, [5]]]], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
