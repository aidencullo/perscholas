const students = [
  { name: 'Alice', age: 20, grades: [85, 92, 88] },
  { name: 'Bob', age: 22, grades: [78, 81, 79] },
  { name: 'Charlie', age: 23, grades: [95, 90, 93] },
  { name: 'David', age: 21, grades: [70, 75, 72] }
];

students.forEach(student => {
  student.averageGrade = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
});

students.forEach(student => {
  console.log(`${student.name} has an average grade of ${student.averageGrade}`);
});

const studentSummaries = students.map(student => {
  return `${student.name} is ${student.age} years old and has an average grade of ${student.averageGrade}`;
});

console.log(studentSummaries)

const honorRoll = students.filter(student => student.averageGrade > 85);
console.log(honorRoll);


const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

numbers.forEach(el => console.log(el))

const squaredNumbers = numbers.map(el => el ** 2)
const evenNumbers = numbers.filter(el => el % 2 === 0)
