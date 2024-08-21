class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;
  location;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
    this.location = 'New York';
  }

  toString() {
    return `${this.#name.first} ${this.#name.last} is ${this.#age} years old lives in ${this.location}`;
  }
  
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18);

learner1.location = 'California';
learner1.age = 19;

console.log(learner1.toString());
