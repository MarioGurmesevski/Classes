//Exercise 1

const getLength = (number) => {
  if (number < 0) {
    return number.toString().length - 1;
  }
  return number.toString().length;
};

const seeIfNumbersAreOddorEven = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else if (number % 2 !== 0) {
    return "Odd";
  }
};

const seeIfNumbersArePositiveAndNegative = (number) => {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  }
};
function getNumberStats(number) {
  return `${getLength(number)},${seeIfNumbersAreOddorEven(
    number
  )},${seeIfNumbersArePositiveAndNegative(number)}`;
}

// console.log(getLength(-25));
// console.log(seeIfNumbersAreOddorEven(24));
// console.log(seeIfNumbersArePositiveAndNegative(24));

console.log(getNumberStats(-25));

//Exercise 2
