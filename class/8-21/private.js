class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;
  location = 'New York';

  constructor(firstName, lastName, age, location) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
    if (location) {
      this.location = location;
    }
    
  }

  toString() {
    return `${this.#name.first} ${this.#name.last} is ${this.#age} years old lives in ${this.location}`;
  }
  
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18, 'California');
const learner2 = new Learner('Leeroy', 'Jenkins', 18);
console.log(learner1.toString());
console.log(learner2.toString());
