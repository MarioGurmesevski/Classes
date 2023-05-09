//Exercise 1

function calculate(number){
    const difference = number-13
    if(number>13){
        return difference*2
    }
    return difference
}

console.log(calculate(20))

//Exercise 2

function seeWhichNumberIsCloser(){
    const counts = [90, 20],
    mainNum = 100;

  const closest = counts.reduce(function(prev, curr) {
    return (Math.abs(curr - mainNum) < Math.abs(prev - mainNum) ? curr : prev);
  });

  console.log(closest);
}

seeWhichNumberIsCloser()

//Exercise 3

function bobSalary(){
    const totalSalary = 1000;
    const rent = 375;
    const billsTotal = 250;
    const moneyLeftAfterEverything = (totalSalary-(rent+billsTotal));
    console.log(moneyLeftAfterEverything)
}

bobSalary();

//Exercise 4
const numArr = [10, 10, 8, 9, 6];
function averageGrades(numArr) {
  let minGrade = 8;
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
    console.log(numArr[i]);
  }
//   return sum;

  const avarge = (sum/numArr.length);

  if(avarge>minGrade){
      console.log("You passed")
  }
  else{
      console.log("You failed")
  }
}

averageGrades(numArr);

//Exercise 5

const arrElements = [undefined,false,null,NaN,"test",100,400,""]
function arrElementsClear(arr){
    const arrTwo = []
for(let arrElements of arr){
    if(arrElements){
        arrTwo.push(arrElements)
    }
}
return arrTwo;
}
console.log(arrElementsClear(arrElements));

//Exercise 6

const arrRandomNumber = [3,5,2,10,4,3,10,1,19,23,3];

function calculateMin (arrRandomNumber) {
    let counter = 0;
    let small = arrRandomNumber[0];

    while(counter < arrRandomNumber.length){
       let currentNumber = arrRandomNumber[counter];
       if (currentNumber < small) {
        small = currentNumber;
       }

       
        counter++;

    }
    
    return small;
}

console.log(calculateMin(arrRandomNumber));

//Exercise 7

function generateNumArray(){
    const num = 500
    const resultArr= [];
    for(let i = 1; i <= num;i++){
        if (i % 5 === 0) {
            let sum = i*10
            resultArr.push(sum);
          }
    }
    console.log(resultArr);
    return resultArr;
}

generateNumArray();

//Exercise 8
