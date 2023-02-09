console.log("before fetch");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then(() => console.log("todo's fetched"));
console.log("after fetch");

//setTimeout

console.log("before settimeout");
setTimeout(() => {
  console.log("inside setTimeout");
}, 2000);
console.log("after setTimeout");

//setInterval

const counter = () => {
  let counter = 0;
  setInterval(() => {
    counter = counter + 1;
    console.log(counter);
  }, 1000);
  console.log("Below interval", counter);
};

// counter();

const printFirstName = (callback) => {
  setTimeout(() => {
    console.log("Danilo");
    callback();
  }, 1500);
};

const printLastName = () => console.log("Borozan");

printFirstName(printLastName);
