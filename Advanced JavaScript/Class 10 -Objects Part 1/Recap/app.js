//Ways of creating objects

//Literal notation

const car = {
  brand: "Honda",
  model: "Civic",
  year: 2008,
  horsePower: 140,

  printCarInfo() {
    console.log(
      `Make:${this.brand},${this.model},Year:${this.year},Horse power${this.horsePower}`
    );
  },
};

car.printCarInfo();

//Constructor function

function Person(firstName, lastName, age, country) {
  this.firstName = firstName;
  this.lastName = lastName;

  // Good place to use this is constructor functions and classes

  this.fullName = `${this.firstName} ${this.lastName}`;
  this.age = age;
  this.country = country;

  this.printFullName = function () {
    // Best place is to use in methods in objects

    console.log(this.fullName);
  };
}
const borche = new Person("Borche", "Borisovski", 30, "Macedonia");

const danilo = new Person("Danilo", "Borozan", 25, "Macedonia");

console.log(borche);
console.log(danilo);

borche.printFullName();
danilo.printFullName();

//This keyword

console.log(this);
function sayHello() {
  //This in functions in window object

  console.log(this);
  console.log("Hello world");
}

sayHello();
