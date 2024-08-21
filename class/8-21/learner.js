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
