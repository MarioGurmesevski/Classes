//Functions as first class citizens
//Means that they can be used in place of many other things i the language

//1. Stored in variable

const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

const multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;

console.log(addTwoNumbers(42, 41));

//2. Stored in an array(extremely rare and not used anywhere)

const mathFunctions = [(numOne, numTwo) => numOne + numTwo, multiplyTwoNumbers];

console.log(mathFunctions[0](214, 10));
console.log(mathFunctions[1](411, 2));

//3. Used as an argument in another function

const calculator = (operationFunc, numOne, numTwo) => {
  console.log(operationFunc);
  const result = operationFunc(numOne, numTwo);
  return result;
};

console.log(calculator(addTwoNumbers, 54, 42));
console.log(calculator(multiplyTwoNumbers, 22, 63));
console.log(calculator((numOne, numTwo) => numOne - numTwo, 512, 419));

//4.Returning a function from another function

const calculatorTwo = (operator) => {
  if (operator === "+") {
    return (numOne, numTwo) => numOne + numTwo;
  }
  if (operator === "*") {
    return (numOne, numTwo) => numOne * numTwo;
  }
  return "Invalid Operator";
};

const addFunc = calculatorTwo("+");

console.log(addFunc(641, 56));

console.log(calculatorTwo("+")(532, 54));

//5. Functions with properties and methods

const printHello = (name) => console.log(`Hello there ${name}`);
printHello("Mario");

printHello.defaultName = "Danilo";

printHello(printHello.defaultName);

function printFullName(firstName, lastName) {
  console.log(arguments);

  console.log(`${firstName} ${lastName}`);
}

printFullName("Borche", "Borisovski", "tes", true, 1000, "rest");

//HIGHER ORDER FUNCTIONS

const students = [
  {
    firstName: "Mario",
    lastName: "Gurmesevski",
    age: 17,
    averageGrade: 4,
  },
  {
    firstName: "Tim",
    lastName: "Bobovski",
    age: 14,
    averageGrade: 3,
  },
  {
    firstName: "Bill",
    lastName: "Digovski",
    age: 12,
    averageGrade: 5,
  },
  {
    firstName: "Timmy",
    lastName: "Davidov",
    age: 24,
    averageGrade: 2,
  },
  {
    firstName: "Teddy",
    lastName: "Stefanov",
    age: 33,
    averageGrade: 2,
  },
  {
    firstName: "Totty",
    lastName: "nikolov",
    age: 7,
    averageGrade: 5,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 64,
    averageGrade: 5,
  },
];

//1. ForEach

//Without forEach
const PrintStudentInfo = (students) => {
  for (let student of students) {
    console.log(`${student.firstName} ${student.lastName} Age:${student.age}`);
  }
};

// PrintStudentInfo(students);

//With forEach

students.forEach((student) => {
  console.log(`${student.firstName} ${student.lastName} Age:${student.age}`);
});

console.log(students);

//2. Filter

//Objective: filter out only students aged 18 and above

//Without filter

const filterStudents = (students) => {
  const resultArr = [];
  for (let student of students) {
    if (student.age >= 18) resultArr.push(student);
  }
  return resultArr;
};

console.log(filterStudents(students));

//With filter

const filteredStudents = students.filter((student) => student.age >= 18);

console.log(filteredStudents);

//3. Map

const numbers = [5, 3, 4, 1, 6, 5, 4, 7, 8];

//Without map

const generateStudentInfo = (students) => {
  const resultArr = [];

  for (let student of students) {
    resultArr.push(
      `${student.firstName} ${student.lastName} Age:${student.age}`
    );
  }
  return resultArr;
};

const multiplyNumbers = (numbers) => {
  const resultArr = [];
  for (let num of numbers) {
    resultArr.push(num * 5);
  }
  return resultArr;
};

console.log(generateStudentInfo(students));
console.log(numbers);
console.log(multiplyNumbers(numbers));

//With map

const studentsInfo = students.map(
  (student) => `${student.firstName} ${student.lastName} Age:${student.age}`
);

const multipedNumbers = numbers.map((num) => num * 5);

console.log(studentsInfo);
console.log(multipedNumbers);
console.log(numbers);

//4. Reduce

//Without reduce

const sumNumbers = (numbers) => {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumNumbers(numbers));

//With reduce

// const sum = numbers.reduce((acc, num) => acc + num, 0);

const sum = numbers.reduce((acc, num) => {
  console.log(`Accumulator`, acc);
  console.log(`Num`, num);
  return acc + num;
}, 0);

console.log(sum);

//5. Find

//Find returns element or undefined
const john = students.find((student) => student.firstName === "John");

console.log(john);

//Filter returns empty array or array with 1 element
const filterJohn = students.filter((student) => student.firstName === "Jodhn");

console.log(filterJohn);

//6.Some

console.log(
  "Some OutPut:",
  numbers.some((num) => num < 0)
);

//7.Every

console.log(
  "Every OutPut:",
  numbers.every((num) => num > 0)
);

//8. Sort

console.log("Numbers before sort", numbers);

numbers.sort();

console.log("Numbers after sort", numbers);

console.log("Students before sort", students);

const studentsCopy = students.map((student) => student);

studentsCopy.sort((a, b) => a.age - b.age);

console.log("Students after sort", students);

console.log("Original students", students);
console.log("Copy students", studentsCopy);

//Method chaining

// const topStudents = students.filter((student) => student.averageGrade >= 4);

// console.log(topStudents);

// const topStudentsInfo = topStudents.map(
//   (student) =>
//     `${student.firstName} ${student.lastName} Avg Grade:${student.averageGrade}`
// );

// console.log(topStudentsInfo);

const topStudentsInfo = students
  .filter((student) => student.averageGrade >= 4)
  .map(
    (student) =>
      `${student.firstName} ${student.lastName} Avg Grade:${student.averageGrade}`
  );

console.log(topStudentsInfo);
