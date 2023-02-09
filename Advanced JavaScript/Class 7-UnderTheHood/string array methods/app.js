//STRING

//Accessing characters using indexes

const firstName = "Borche";

console.log(firstName[0]);
console.log(firstName[2]);

//Slicing parts if string

const fullName = "Danilo Borozan";

const firstNameSlice = fullName.slice(0, 6);
const lastNameSlice = fullName.slice(7);

console.log(firstNameSlice);
console.log(lastNameSlice);

const country = "macedonia";
const city = "SKOPJE";

console.log(country.toUpperCase());
console.log(city.toLowerCase());

//Objective: given a lowercase string make only the first letter uppercase

const test = "mario"; //Mario

const testSlice = test[0].toUpperCase() + test.slice(1);

console.log(testSlice);

//searching if one string exists in another using inculses

const searchTerm = "MAce";
const isSearchValid = country.toLowerCase().includes(searchTerm.toLowerCase());

console.log(isSearchValid);

// To generate an array from a string with easily seprated words

const namesStr = "John Jane Rick Bobby Alex";

const namesArr = namesStr.split(" ");

console.log(namesArr);

//Arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Objective: create arrays from left side of array and right side

const leftSide = numbers.slice(0, 5);

const rigthSide = numbers.slice(5);

console.log(leftSide);
console.log(rigthSide);

const htmlArr = [
  "<li>Test One</li>",
  "<li>Test Two</li>",
  "<li>Test Three</li>",
];

const htmlStr = htmlArr.join("");

console.log(htmlArr);
console.log(htmlStr);

//Creating a new copy in memory using map

const numbersCopy = numbers.map((num) => num);

console.log(numbersCopy);
