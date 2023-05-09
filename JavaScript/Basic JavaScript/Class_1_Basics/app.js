console.log("Hello From Java Script!");
let StudentName = "Mario";
console.log(StudentName);
let studentLastName = "Gurmesevski";
console.log(studentLastName);

// Strings

let fruit = "Apple";
let fruits = "Apples\nOranges\nPears";

console.log(fruit);
console.log(fruits);

// Shows type of data after typeof keyword

console.log(typeof fruit);

//Numbers

let numberOne = 300; //Never define numbers with quotes ex "300"
let numberTwo = 1200;

console.log(numberOne, numberTwo);
console.log(typeof numberTwo);

//Booleans

let isAvailable = true;
let isFruitAvailable = false;
console.log(isAvailable);
console.log(typeof isFruitAvailable);

//Undefined

let className;
console.log(className);
className = "SEDC - G4";
console.log(className);

//NULL

let academyName = "SEDC Gen 11";
academyName = null;
console.log(typeof academyName);

//Single line comments
/*
This is an example
of a multiline comment
*/

//Arithmetic Operators

let numOne = 300;

let numTwo = 145;
//Addition

console.log(numOne + numTwo)

//Sbutraction

console.log(numOne - numTwo)

//Multiplication

//Saving result in variable

let multiResult = numOne * numTwo;
console.log(numOne * numTwo)

//Division

console.log(numOne / numTwo)

//Modulus

let modOne = 18;
let modTwo = 4;

//Returns remainder of divison of first number with second number

console.log(18 % 4)

//Increment
//Adds one to number to variable

let incrementCounter = 4;

//Incrementcounter = incrementCounter + 1

incrementCounter++
console.log(incrementCounter)

//Decrement
//Remove one from number variable

let decrementCounter = 10;

//Decrementcounter = decrementCounter - 1

decrementCounter--;
console.log(decrementCounter);

//Comparison operators
// !ALWAYS RETURN BOOLEAN

let compNumOne = 320;
let compNumTwo = 100;

console.log(compNumOne < compNumTwo)
console.log(compNumOne > compNumTwo)
console.log(compNumOne <= compNumTwo)
console.log(compNumOne >= compNumTwo)

let countryOne = "Germany";
let countryTwo = "Poland";

//Equal

console.log(countryTwo == countryOne)

//Not equal

console.log(countryTwo !=countryOne )

//Assignment operators

let assNumOne = 10;
let assNumTwo = 50;

console.log((assNumOne += assNumTwo));

console.log(assNumOne -= assNumTwo);

//Exercises One

console.log("Exercises One")

let meters = 0.3048;
let feet = 120;
console.log(feet * meters)

console.log(feet / meters)

//Exercises Two

console.log("Exercises Two")

let sideOne = 15;
let sideTwo = 20;
let height = 5;

console.log(sideOne * sideTwo)

console.log(sideOne * sideTwo * height)

console.log("Cube")
let cubeOneSide = 30;
console.log (cubeOneSide*cubeOneSide*cubeOneSide)

//Exercises Three

console.log("Exercises Three")

let radius = 10;
let pi = Math.PI;

console.log(pi * radius * radius)

console.log(4/3 * pi * radius * radius * radius)
