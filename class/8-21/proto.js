// const commPrototype = {
//   introduce() {
//     console.log("Hey there, I don't have a name because I'm just an example, but nice to meet you!");
//   }
// };

// const person = Object.create(commPrototype);
// person.introduce(); // Hey there, I don't have a name because I'm just an example, but nice to meet you!


const commPrototype = {
  introduce() {
    console.log(`Hey there, I have a name now! I'm ${this.name}!`);
  }
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, commPrototype);
// or
// Person.prototype.introduce = commPrototype.introduce;

const person = new Person("Leo");
person.introduce(); // Hey there, I have a name now! I'm Leo!


Array.prototype.min = function () {
  return Math.min(...this);
};
Array.prototype.max = function () {
  return Math.max(...this);
};

const arr = [3, 8, 1, -10, 90, 77, 42];
console.log(arr.min()); // -10
const otherArr = [3, 8, 1, 90, 77, 42];
console.log(otherArr.max()); // 90
