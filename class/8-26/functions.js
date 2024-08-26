// neither of these will work


// const exampleFunction = (a, b, a) => {
//   console.log(a, b)
// }

// exampleFunction("first", "second", "third")

// function exampleFunction(a, b, a) {
//   console.log(a, b)
// }

// exampleFunction("first", "second", "third")





regularFunction()

function regularFunction() {
  console.log("This is a regular function.")
}

// won't worko
// arrowFunction()

const arrowFunction = () => {
  console.log("This is an arrow function.")
}


function myRegularFunction() {
  console.log(this) // undefined
}

myRegularFunction()

const myArrowFunction = () => {
  console.log(this);
};

myArrowFunction()


const myObject = {
  regularExample: function() {
    console.log("REGULAR: ", this)
  },
    
  arrowExample: () => {
    console.log("ARROW: ", this)
  }
}
    
myObject.regularExample()
myObject.arrowExample()
