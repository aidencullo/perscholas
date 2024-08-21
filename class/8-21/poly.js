// class Animal {
// 	constructor(eyes, legs, isAwake, isMoving) {
// 		this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
// 	}
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = 'Animal') {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
// }

// class Cat extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Meow...");
//   }
//   toString() {
//     return super.toString("Cat");
//   }
// }

// class Dog extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Woof!");
//   }
//   toString() {
//     return super.toString("Dog");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }

// const cat1 = new Cat("Orange", true, false);
// const cat2 = new Cat("Black and White", false, false);
// const dog1 = new Dog("Gold", true, true);
// const cow1 = new Cow("Brown", true, false);

// console.log(cat1 instanceof Cat); // true
// console.log(cat1 instanceof Animal); // true
// console.log(cat1 instanceof Object); // true
// console.log(cat1 instanceof Dog); // false







// class Animal {}
// class Cat extends Animal {}
// class Tabby extends Cat {}
// class SpottedTabby extends Tabby {}

// const cat1 = new SpottedTabby();
// let object = cat1;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);








// class Animal {}
// class Cat extends Animal {}
// class Tabby extends Cat {}
// class SpottedTabby extends Tabby {}

// const cat1 = new SpottedTabby();
// const cat2 = new SpottedTabby();
// const cat3 = new SpottedTabby();
// const cat4 = new SpottedTabby();

// console.log(cat1.breed); // undefined
// console.log(cat2.breed); // undefined
// console.log(cat3.breed); // undefined
// console.log(cat4.breed); // undefined

// Object.getPrototypeOf(cat1).breed = "Tabby";

// console.log(cat1.breed); // Tabby
// console.log(cat2.breed); // Tabby
// console.log(cat3.breed); // Tabby
// console.log(cat4.breed); // Tabby

// // New instance has the same prototype.
// const cat5 = new SpottedTabby();
// console.log(cat5.breed); // Tabby

// // Setting this directly on this instance.
// cat5.breed = "Tabby"; 

// delete Object.getPrototypeOf(cat1).breed;

// console.log(cat1.breed); // undefined
// console.log(cat2.breed); // undefined
// console.log(cat3.breed); // undefined
// console.log(cat4.breed); // undefined
// // We only deleted the prototype's value, 
// // this instance still has its value.
// console.log(cat5.breed); // Tabby
