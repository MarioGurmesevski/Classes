//Basic way of defining functions
function printFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

function addTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

const resultOne = addTwoNumbers(30, 20);
console.log(resultOne);
console.log(addTwoNumbers(30, 50));

//Saving an anonymous function in a variable

const multiplyTwoNumbers = function (numOne, numTwo) {
  // console.log(numOne*numTwo)
  return numOne * numTwo;
};

console.log(multiplyTwoNumbers);
console.log(multiplyTwoNumbers(70, 5));

// multiplyTwoNumbers(5,10)

//Calling one function inside another one

const calculator = function (operator, numOne, numTwo) {
  if (operator === "+") {
    return addTwoNumbers(numOne, numTwo);
  }
  if (operator === "*") {
    return multiplyTwoNumbers(numOne, numTwo);
  }
  return "Invalid Operator";
};
console.log(calculator("+", 3, 4));
console.log(calculator("*", 7, 5));
console.log(calculator("-", 9, 1));

//Arrow functions

const sayHello = () => {
  console.log("Hello from an arrow function");
};
sayHello();

//Arrow functions without function body brackets

const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

console.log(subtractTwoNumbers(50, 49));

//Identical as arrow function below but with classic definition
// const printMoneyFunc = function (money) {
//   return `You have a total of ${money}`;
// };

const printMoney = (money) => `You have a total of ${money}`;

console.log(printMoney(412412));

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", (event) => {
  console.log(event.target);
  console.log("I was clicked");
});

//Arrow functions as methods in objects

const person = {
  firstName: "Mario",
  lastName: "Gurmesevski",
  money: 6500,

  //In normal methods this refers to the parents object
  //   printFullName: function () {
  //     console.log(`${this.firstName} ${this.lastName}`);
  //   },

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  //In arrow functions this refers to the window object always
  printMoney: () => {
    console.log(this);
    console.log(`You have ${this.money}$`);
  },
};

person.printFullName();
person.printMoney();

//IIFE - Immediately invoked function expression

(function () {
  const securityKey = "14jFjd12mx5ka";

  console.log("I am called from an IIFE");
})();

((test) => console.log(test))("this is a test");

//Recursion
function sumTo(num) {
  if (num === 0) {
    return 0;
  }
  return num + sumTo(num - 1);
}

console.log(sumTo(10454));

//Scope - Block Scope

const playGame = () => {
  const currentScore = 10;

  printScore(currentScore);
};
const printScore = (currentScore) => {
  console.log(currentScore);
  const printScoreResult = "Testing score";
  console.log(printScoreResult);
};

playGame();

//Block Scope

const checkScore = (score) => {
  if (score <= 50) {
    const resultLossMesage = "Sorry, you lose!";
    console.log(resultLossMesage);
  }
  if (score > 50) {
    const resultWinMesage = `Congratulations,you win!`;
    console.log(resultWinMesage);
  }
  // WON'T WORK BECAUSE OF BLOCK SCOPE

  //   console.log(resultLossMesage);
  //   console.log(resultWinMesage);
};

checkScore(60);

//Hoisting
//Variables declared with var and normal functions are hoisted
//AVOID USING VAR

console.log(test);

printSomething();

var test = "G4 SEDC";

console.log(test);

function printSomething() {
  console.log("I am printing something");
}
