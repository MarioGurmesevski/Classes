//Exercise 1
const resultOne = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0) {
    resultOne.push(i);
  }
}

console.log(resultOne);

//Exercise 2

const resultTwo = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 4 === 0) {
    resultTwo.push(i);
  }
}

console.log(resultTwo);

//Exercise 3

const resultThree = [];

for (let i = 1; i <= 1000; i++) {
  if (i % 10 == 1) {
    resultThree.push(i);
  }
}

console.log(resultThree);

let arrElementsOne = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];
let arrElementsTwo = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];
let arrElementsThree = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

//Exercise 4

function stringonly(arr) {
  const arrOne = [];
  for (let arrElementsOne of arr) {
    if (typeof arrElementsOne === "string") {
      arrOne.push(arrElementsOne);
    }
  }
  return arrOne;
}
console.log(stringonly(arrElementsOne));

//Exercise 5

function numberonly(arr) {
  const arrTwo = [];
  for (let arrElementsTwo of arr) {
    if (typeof arrElementsTwo === "number") {
      arrTwo.push(arrElementsTwo);
    }
  }
  return arrTwo;
}
console.log(numberonly(arrElementsThree));

//Exercise 6

function arrElementsClear(arr) {
  const arrTwo = [];
  for (let arrElementsThree of arr) {
    if (arrElementsThree) {
      arrTwo.push(arrElementsThree);
    }
  }
  return arrTwo;
}
console.log(arrElementsClear(arrElementsThree));

//Exercise 7

const background = document.getElementById("background");

const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  //   background.style.color = randomColor;
};

setBackgroundColor();

setInterval(() => {
  setBackgroundColor();
  colorchanger.textContent = getRandomColor();
}, 1500);

const colorchanger = document.getElementById("colortest");

//Exercise 8

let fontSelect = document.getElementById("textSize");
let colorSelect = document.getElementById("textColor");
let elementSelect = document.getElementById("text");
let textSelect = document.getElementById("textOne");
let btn = document.getElementById("btn");

let addText = (element, textSelect) => (element.textContent = textSelect);
let addSize = (element, fontSize) => (element.style.fontSize = `${fontSize}px`);
let addColor = (element, color) => (element.style.backgroundColor = color);

btn.addEventListener("click", () => {
  addText(elementSelect, textSelect.value);
  addColor(elementSelect, colorSelect.value);
  addSize(elementSelect, fontSelect.value);
});

//Exercise 9
const d = new Date();
let year = d.getFullYear();

function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;
  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  this.getInfo = function () {
    return `This is student ${this.firstName} ${this.lastName} from the ${this.academy} academy!`;
  };
  this.getGradesAverage = function () {
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    return average;
  };
}

const Student1 = new Student(
  "Bob",
  "Bobovski",
  1986,
  "Algoritam",
  [5, 2, 1, 5, 4, 3]
);
const Student2 = new Student(
  "Mario",
  "Gurmesevski",
  2005,
  "Algoritam",
  [5, 5, 3, 5, 4, 3]
);
const Student3 = new Student(
  "Billy",
  "Stefanov",
  2003,
  "Algoritam",
  [1, 2, 1, 3, 4, 3]
);

console.log(Student1.getInfo());
console.log(Student1.getGradesAverage());
console.log(Student1.getAge());
console.log(Student2.getInfo());
console.log(Student2.getGradesAverage());
console.log(Student2.getAge());
console.log(Student3.getInfo());
console.log(Student3.getGradesAverage());
console.log(Student3.getAge());

//Exercise 10

let array = ["Mario", "Bob", "Bill", "Martin", "Damjan"];
let getBtn = document.getElementById("getBtn");

let ulList = document.getElementById("ulList");

function listOfStudent() {
  for (i = 0; i < array.length; i++) {
    ulList.innerHTML += `<li>${array[i]}</li>`;
  }
}

getBtn.addEventListener("click", function () {
  listOfStudent();
});

//Exercise 11

let itemSelect = document.getElementById("items");
let fontSizeSelect = document.getElementById("textSizeTwo");
let itemColorSelect = document.getElementById("textColorTwo");
let ulListSelect = document.getElementById("ulListTwo");
let buttonSelectOne = document.getElementById("genBtnTwo");

function listOfItems() {
  ulListSelect.innerHTML += `<li>${itemSelect.value}, ${fontSizeSelect.value}, ${itemColorSelect.value}</li>`;
}

buttonSelectOne.addEventListener("click", function () {
  listOfItems();
});

//Exercise 12

let database = [];

function StudentTwo(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}


const form = document.getElementById("student-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const myListTwo = document.getElementById ("myListTwo");
  
  const studenttwo = new StudentTwo(firstName, lastName, age, email);
  database.push(studenttwo);

  console.log(database);
  for(let databases of database){
    let newitem = document.createElement("li");
    
    newitem.innerHTML = databases.trim;
    myListTwo.appendChild(newitem);
  }
  document.body.appendChild(myListTwo);
  form.reset();
});

//Exercise 13

const movies = [
  "Finding Nemo",
  "The Joker",
  "The Godfather",
  "Dracula",
  "The Godfather: Part II",
  "Saw",
  "Avatar",
  "Avatar 2",
  "Ghostbusters"
];

function searchMovie() {
  const movieInput = document.getElementById("movie-input").value.toLowerCase();

  if (movies.map((i) => i.toLowerCase()).includes(movieInput)) {
    document.getElementById("result").innerHTML = "The movie can be rented";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerHTML = "The movie can't be rented";
    document.getElementById("result").style.color = "red";
  }
}
const buttonForMovies = document.getElementById("buttonForMovies")
buttonForMovies.addEventListener("click",searchMovie)

//Exercise 14

const reminders = [];

const addReminder = () => {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const color = document.getElementById("color").value;
  const description = document.getElementById("description").value;
  const reminder = { title, priority, color, description };
  reminders.push(reminder);
};

document.getElementById("add-reminder").addEventListener("click", addReminder);
const tableBody = document.getElementById("tableBody");
const showReminders = (tableBodyEl) => {
  tableBodyEl.innerHTML = "";
  reminders.forEach((reminder) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="color: ${reminder.color}">${reminder.title}</td>
      <td>${reminder.priority}</td>
      <td>${reminder.description}</td>
    `;
    tableBodyEl.appendChild(row);
  });
};

document
  .getElementById("show-reminders")
  .addEventListener("click", function () {
    showReminders(tableBody);
  });
