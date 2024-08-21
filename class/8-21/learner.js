class Learner {
  #grades = [];
  #name = {
    first: "",
    last: ""
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }
  get name() {
    return this.#name.first + " " + this.#name.last;
  }
  get age() {
    return this.#age;
  }
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  get grades() {
    return this.#grades;
  }
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

// Instantiate a new Learner.
const learner = new Learner('aiden', 'cullo', 26);

// Log the learner's name and age.
console.log(learner.age);
console.log(learner.name);
// Add the following grades using addGrades():

learner.addGrades([95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105);

// [95, 87, 66], "98", "100", -60, 88, 89, [100, 76, 88], 105
// Log the current grades array and make sure it's what you expect.
console.log(learner.grades);

// Remember that values less than 0 or greater than 100 should not be included.
// Calculate the average of these grades manually, keeping in mind that the lowest grade should be excluded from the calculation.

// Log the average returned from .average and compare the results with your calculations to ensure it is working properly.
console.log(learner.average);
