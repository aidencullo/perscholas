// Objectives
// Use nested arrays and objects.
// Combine objects, arrays, and functions.
// Create a class to define the blueprint for creating objects.
// Add methods to a class.
// Set properties on an instance of a class.
// Make an instance of each class customizable.
// Create methods to alter the properties of an instance.
// Develop a class that inherits attributes from a "parent" class.
// Create static properties for a class.
// Create a "factory."



// part 1


// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"]
// }

// // As an additional practice exercise, create a loop that logs each item in Robin’s inventory.

// adventurer.inventory.map(console.log)




// redefine adventurer

// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.


// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.


// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["hat", "sunglasses"],
//     }
//   }
// }


//redfine againe robin w functions



// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["hat", "sunglasses"],
//     }
//   },
//   roll (mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
//   },
// }

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();




// part 2 -- classes


// Next, we will level up our approach using Classes.


class Character {
  static MAX_HEALTH = 100;

  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}


// Now, we can re-create Robin using the Character class!

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];


class Adventurer extends Character {

  static ROLES = ["Fighter", "Healer", "Wizard"];
  
  constructor (name, role, inventory=[]) {
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error("Invalid role.");
    }
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  whistle () {
    console.log(`${this.name} is whistling loudly...`);
    super.roll();
  }
  camp () {
    console.log(`${this.name} is camping behind...`);
    super.roll();
  }
  duel (adventurer) {
    while (this.health > 50 && adventurer.health > 50) {
      const myRoll = this.roll();
      const theirRoll = adventurer.roll();
      if (myRoll > theirRoll) {
	adventurer.health -= 1;
      } else {
	this.health -= 1;
      }
    }
    if (this.health > 50) {
      console.log(`${this.name} wins!`);
    } else {
      console.log(`${adventurer.name} wins!`);
    }
  }
}



// What else should an adventurer be able to do? What other properties should they have?




// Next, create a Companion class with properties and methods specific to the companions.



class Companion extends Character {
  constructor (name, type, inventory=[]) {
    super(name);
    this.type = type;
    this.inventory = inventory;
  }
  help () {
    console.log(`${this.name} is helping behind...`);
    super.roll();
  }
}
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.


// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.



const newRobin = new Adventurer("Robin", "Fighter", ["sword", "potion", "artifact"]);
const newLeo = new Companion("Leo", "Cat");
const newFrank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);






// Part 4: Class Uniforms
// Using static properties and methods, you can create uniform attributes for the class itself rather than instances of the class. Static properties are typically constant values that can be used elsewhere for reference, or utility methods that do not rely on the values of a specific class instance.
// Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
// Are there other static properties or methods that make sense to add to these classes?





// Part 5: Gather your Party
// Sometimes, you need many objects of a class that have one or more shared property values. A common approach for creating many similar objects of a single class, and keeping track of them is creating a “factory.”
// Factories are classes that generate objects according to the factory’s instance properties.
// As an example, let’s look at how we might create many “healer” role adventurers using a factory:

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robinnn = healers.generate("Robin");
const batman = healers.generate("Batman");
robinnn.duel(batman);


// Part 6: Developing Skills
// Many of the core features of these characters are now implemented, but the adventurers cannot  really do much yet. The only action (method) they have is scout().
// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.


