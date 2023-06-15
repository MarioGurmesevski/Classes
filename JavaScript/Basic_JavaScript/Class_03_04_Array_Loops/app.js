//Creating an array

let fruits = ["Apples" , "Orange", "Cherries", "Pears", "Mangoes"];

console.log(fruits);

//Creating an array using const which prevents reassighnment and improves consistency

const students = ["Bojan", "Dejan", "Andrea", "Jovana", "Aleksandar"];

console.log(students);

//Arrays can be empty

const vegetable = [];

console.log (vegetable);

console.log(fruits[2]);
console.log(students[4]);
console.log(fruits[1 + 2], students[1+2]);

fruits[0] = "Plums";

students[2] = "Johnny";

console.log(fruits[0]);

console.log(students[2]);

console.log(students);

// Array lenght to read the total number of elements in the array

console.log(students.length)

// To access last element use lenght -1 always 
students[students.length - 1] = "Jack";

console.log(students);

// Adding items to the end of the array

// students[students.lenght] = "Jane";

// console.log(students);

// Using push

students.push("Mary");

console.log(students);

fruits.push("Pineapples", "Apples", "Tomatoes");

console.log(fruits);

//Adding to start of array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`Numbers before unshirt ${numbers}`);

numbers.unshift(100);

numbers.unshift(200);

console.log(`Numbers After unshirt ${numbers}`);

//Removing items from an array

let lastNumber = numbers.pop();

console.log (`Popped number ${lastNumber}`);

console.log(`Numbers after pop `, numbers);

let firstNumber = numbers.shift();

console.log(`Shifted number: ${firstNumber}`);
console.log(`Numbers after shift `, numbers)

// Looping structures

let counter = 0;

while(counter < students.length) {
    console.log(students[counter]);
    counter++;
}

const randomNumbers = [1, 23, 455, 66, 33, 22, 2500, 56, 1002, 506, 493, 32];

function calculateMax (numArray) {
    let counter = 0;
    let max = numArray[0];

    while(counter < numArray.length){
       let currentNumber = numArray[counter];
     //console.log(currentNumber);
       if (currentNumber > max) {
        max = currentNumber;
       }

       
        counter++;

    }
    
    return max;
}

console.log(calculateMax(randomNumbers));

console.log("Exerise 1");

let counterCount = 101;
let lastNumberCount= 150;
let sum = 0;
while(counter<=lastNumber){
    sum+=Math.pow(counter,2)

counter++;
}
console.log (sum)

function countToTen(){
    //While syntax
    let counter = 1;
    
    while(counter <=  10) {
        console.log(counter);
        counter++;
    }
    
    //For syntax
    
    for (let counter = 10; counter >=1; counter--){
        console.log("From for loop:", counter)
    }    
    
    for (let counter = 1; counter <=10; counter++){
        console.log("From for loop:", counter)
    }    
}

countToTen();

function generateNumArray(num){
    const resultArr= [];
    for(let i = 0; i < num;i++){
        resultArr.push(i);
    }
    return resultArr;
}
const arrayToTwenty = generateNumArray(20);

console.log(arrayToTwenty)

//For of loop | Class 4th

for(let student of students){
    console.log(student);
}

for(let fruit of fruits){
    console.log(fruit);
}

function addToNumbersInArray(numArray, amount){
    const resultArr=[];
    for(let num of numArray){
        resultArr.push(num + amount);
    }
    return resultArr
}

console.log(addToNumbersInArray(numbers, 50));

//Break and continue

console.log(fruits)

function findFavoriteFruit (favoriteFruit, fruitArr){
    let foundFruit = null;
    for (let fruit of fruitArr){
        if (fruit === favoriteFruit){
        foundFruit = fruit
        break;
        }
        console.log(fruit)
    }

    //Classic way
    // if (foundFruit){
    //     return foundFruit;
    // } else {
    //     return "No Fruit Found";
    // }

    //Modern without else method of returning
    if(!foundFruit) return "No Fruit Found";
    return foundFruit
}

const favFruit = findFavoriteFruit("Orange", fruits)

console.log(favFruit)

function filterLargeNumbers(numArray, maxValue){
    const resultArr = [];
    for(let num of numArray) {
        if (num > maxValue){
            continue
        }
        console.log("After continue num value:", num)
        resultArr.push(num)
    }

    return resultArr
}

const filteredArr = filterLargeNumbers([10,203,400,20,400,30], 150);

console.log("filtered numbers array");
console.log(filteredArr);

//Exercise 1

console.log("Exercise 1")

const findNumbers = [1, 1, 455, 66, 33, 33, 2500, 56, 1002, 506, 23, 1, 50, 56, 1];

function findNumber(numArr,arr){
    let total = 0;
for(num of arr) {
    console.log(numArr);
    if(num === numArr){
        total +=1 ;
    }
}
    console.log(total)
}

findNumber(1, findNumbers);

//Exercise 2

console.log("Exercise 2")

function seeIfNumbersAreOddorEven(type, arr){
    let result = [];
        for(let num of arr){
            if(type ==="even" && num% 2 === 0) result.push(num);
            if(type ==="odd" && num% 2 !== 0) result.push(num);
        }
        return result;
        }
        
console.log(seeIfNumbersAreOddorEven([1, 1, 455, 66, 33, 33, 2500, 56, 1002, 506, 23, 1, 50, 56, 1],"even"))