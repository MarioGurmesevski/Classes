let grade=2;

//Switch statement

switch(grade){
    case 1:
        console.log("Both parents needs to see principal");
        break;
    case 2:
        console.log("Only one parent needs to see princial");
        break;
    case 3:
        console.log("Only student needs to see princial");
        break;
    case 4:
        console.log("Well done could be better");
        break;
    case 5:
            console.log("Keep going,you will get far my son");
        break;
    default:
        console.log("Stop playing around with the switch statement")    
        }

//Function

function sayHello(){
    console.log("Hello everyone from g4")
    console.log("I hope you find functions easy")
}

sayHello();
sayHello();

function addTwoNumbers(numOne, numTwo) {
    // console.log(numOne)
    // console.log(numTwo)

    let result = numOne + numTwo;
    
    console.log(result)
    return result;
}

addTwoNumbers(300, 200);
addTwoNumbers(56, 23);
addTwoNumbers(13, 7);

function addThreeNumbers(numOne, numTwo, numThree) {
    let result = numOne + numTwo + numThree;

    console.log(result);
    return result;
}
addThreeNumbers(125,200,73);

let result =  addTwoNumbers(450, 550);

let resultTwo =  addTwoNumbers(100, 150);

let numOne = 2400;
let numTwo = 10020;

let resultThree = addTwoNumbers(numOne, numTwo);
console.log(`This is the result variable: ${result}, ${resultTwo}, ${resultThree}`);
console.log("Exercise 1")

function combine (numOne, numTwo){
    let result = numOne+numTwo;

    return result;
}
combine(10, 20);

function subtract (numOne, numTwo){
    let result = numOne-numTwo;

    return result;
}
subtract(100, 30);

function multipliy (numOne, numTwo){
    let result = numOne*numTwo;

    return result;
}

multipliy(5, 10);

function divide (numOne, numTwo){
    let result = numOne/numTwo;

    return result;
}
divide(50,5);

let resultCombine = combine(50, 20);
let resultSubtract = subtract(70, 20);
let resultMultipliy = multipliy(10,20);
let resultDivide = divide (3000, 10);
console.log(`This is combining/subtracting/multiplying/dividing ${resultCombine} ${resultSubtract} ${resultMultipliy} ${resultDivide}`)

//String

console.log(String(3000), "G4", "SEDC" , "Focus", "Students");

console.log("Exercise 2")

function convertToF(celsius){
    let farenheit = celsius * 1.8 + 32;
    return farenheit
}

let farenheitResult = convertToF(40);
console.log (farenheitResult);

console.log("Exercise 3")

function calculateAge(currentYear, birthYear){
    let calculateAge = currentYear - birthYear;
    return calculateAge;
}

const currentYear = new Date().getFullYear();

let yourAge = calculateAge(currentYear, 2005);
console.log(`Your are ${yourAge} years old`); 

let yourAge1 = calculateAge(currentYear, 1964);
console.log(`Your are ${yourAge1} years old`); 

let yourAge2 = calculateAge(currentYear, 2000);
console.log(`Your are ${yourAge2} years old`); 

