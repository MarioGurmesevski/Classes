//Destructuring

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  grades: {
    basicHtml: 5,
    basicJs: 3,
    advancedJs: 2,
  },
};

console.log(student.grades.basicHtml);
console.log(student.grades.basicJs);
console.log(student.grades.advancedJs);

//Basic destructuring

const { firstName, lastName, age } = student;

console.log(firstName, lastName, age);

//Destructuring a nested object of antoher onject

// const { basicHtml, basicJs, advancedJs } = student.grades;

//Adding custom name of destructured properties

const {
  firstName: studentfirstName,
  lastName: studentlastName,
  age: studentage,
} = student;

console.log(studentfirstName, studentlastName, studentage);

//Destructuring nested objects of main object

//Without destructuring

// const {
//   grades: { basicHtml, advancedJs, basicJs },
// } = student;

// console.log(basicHtml, basicJs, advancedJs);

// const printStudentInfo = (student) => {
//   console.log(
//     `Name ${student.firstName}${student.lastName} Age:${student.age}`
//   );
//   console.log("Grade:");
//   console.log(`BasicHTML: ${student.grades.basicHtml}`);
//   console.log(`BasicJS: ${student.grades.basicJs}`);
//   console.log(`AdvancedJS: ${student.grades.advancedJs}`);
// };

// printStudentInfo(student);

//With destructuring

const printStudentInfo = ({
  firstName,
  lastName,
  age,
  grades: { basicHtml, basicJs, advancedJs },
}) => {
  console.log(`Name:${firstName} ${lastName}, Age:${age}`);
  console.log("Grade:");
  console.log(`BasicHTML: ${basicHtml}`);
  console.log(`BasicJS: ${basicJs}`);
  console.log(`AdvancedJS: ${advancedJs}`);
};

printStudentInfo(student);

//Destructuring arrays

const colors = ["red", "green", "yellow", "white", "black", ["pink", "orange"]];

const [redColor, greenColor, , , blackColor] = colors;

console.log(redColor, greenColor, blackColor);

const [, , yellow, , , [pink, orange]] = colors;

console.log(yellow, pink, orange);

//Spread operator

const remainNumbs = [4, 5, 6, 7, 8, 9, 10];

const numArray = [1, 2, 3];

// for (let num of remainNumbs) {
//   numArray.push(num);
// }
// numArray.push(remainNumbs);

// console.log("Num array", numArray);

//Combining arrays using the spread operator

const combinedNums = [...numArray, ...remainNumbs, 11, 12, 13];

console.log("With spread", combinedNums);

//Copying arrays using the spread operation

const originalNums = [2, 3, 1, 5, 1, 3, 5, 22, 33, 11, 22];

const copyNums = [...originalNums];

copyNums.sort((a, b) => a - b);

console.log(copyNums);

console.log(originalNums);

//Combining object with spread

const bodyInfo = {
  doors: 5,
  paint: "metallic Gray",
  wheelSize: 18,
};
const engineInfo = {
  topSpeed: 240,
  topRpm: 7500,
  hasTurbo: true,
  cc: 3500,
};

const carInfo = { ...bodyInfo, ...engineInfo };

//Object.assign can be used to combine object as the example above

const carInfoCopyAssign = Object.assign({}, bodyInfo, engineInfo);

console.log("Assign object", carInfoCopyAssign);

console.log(carInfo);

//copying objects with spred

const carInfoCopy = { ...carInfo };

//Object.create can be used to create a copy of another object

const carInfoCopyCreate = Object.create(carInfo);

console.log("Create object", carInfoCopyCreate.paint);

carInfoCopy.isBroken = true;
carInfoCopy.wheelSize = 10;

console.log(carInfo);

//Object.keys returns an array of all the keys in an object

const carInfoKeys = Object.keys(carInfo);

console.log("Object keys", carInfoKeys);

//Object.values returns an array of all the values in an object

const carInfoValue = Object.values(carInfo);

console.log("Object values", carInfoValue);

//Object.entires returns an array with nested arrays that contain the keys and values of an object

const carInfoEntries = Object.entries(carInfo);

console.log("Object Entries", carInfoEntries);

//Dynamically adding properties to an object

const newKeys = ["isEuroSix", "isAffortable", "isRegistered"];

newKeys.forEach((key) => {
  carInfo[key] = true;
});

console.log(carInfo);

const badStudent = {
  name: "Chad",
  grades: {
    basicHtml: 1,
    basicJs: 1,
    advancedJs: 1,
    basicNode: 1,
    advancedNode: 1,
  },
};
//Dynamically using object.keys to change properties
const gradeKeys = Object.keys(badStudent.grades);

console.log(gradeKeys);

gradeKeys.forEach((key) => {
  badStudent.grades[key] = 5;
});

console.log(badStudent);

//Object.seal prevents adding of new properies but allows for editing of existing ones

const american = {
  name: "Bob Bobsky",
  country: "USA",
};

Object.seal(american);
american.isCrazy = true;

// american.name = "Vladimir Prutin";

console.log(american);

// Object.freeze prevents editing of properties and adding new properies

const frenchmen = {
  name: "Jacque",
  country: "France",
};

Object.freeze(frenchmen);

frenchmen.name = "Bob";

console.log(frenchmen);
