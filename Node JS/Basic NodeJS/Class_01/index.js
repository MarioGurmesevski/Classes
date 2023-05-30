const someFunction = (a, b) => a + b;

// console.log(someFunction(6, 8));

// const someArray = [1, 2, 3, 4, 5, 6, 7];
// const someArraySecond = [];

// for (let i = 0; i < someArray.length; i++) {
//   someArraySecond.push(someArray[i]);
// }

// for (let number of someArray) {
//   someArraySecond.push(number);
// }

// someArraySecond.push(9);

// const someSecondArray = someArray;

// console.log("someArray", someArray);
// console.log("someSecondArray", someArraySecond);

// const someObject = {
//   name: "Ivan",
//   lastName: "Jamandilovski",
//   address: {
//     street: "temnica",
//     number: null,
//   },
// };

// // const secondObject = someObject;
// // someObject.name = "hehe";

// const secondObject = {};

// for (let key in someObject) {
//   //   console.log(key);
//   secondObject[key] = someObject[key];
// }
// secondObject.name = "test";
// console.log(someObject);
// console.log(secondObject);

const students = [];

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getOlder() {
    this.age++;
  }
}

students.push(new Student("Ivan", 25));
students.push(new Student("Jovana", 19));
students.push(new Student("Blagoja", 23));
students.push(new Student("Anastasija", 23));
students.push(new Student("Pero", 56));
students.push(new Student("Zoran", 25));
students.push(new Student("Goran", 25));

const olderThanTwentyFive = students.filter((s) => s.age > 25);
console.log(olderThanTwentyFive);

const nameOfAllStudents = students.map((student) => student.name);
console.log(nameOfAllStudents);

const namesOfAllStudentsYoungerThan25 = students
  .filter((s) => s.age < 25)
  .map((s) => s.name);
console.log(namesOfAllStudentsYoungerThan25);

students.sort((a, b) => a.age - b.age);

console.log(students);
