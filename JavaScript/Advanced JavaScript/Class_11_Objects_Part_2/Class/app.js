//Starting constructor function in inheritance chain

function Vehicle(name, price, serialNumber) {
  this.name = name;
  this.price = price;
  this.serialNumber = serialNumber;

  this.printVehcleStats = function () {
    console.log(
      `Name: ${this.name}, Price: ${this.price}, Serial #:${serialNumber}`
    );
  };
}

const vehicleOne = new Vehicle("Yacht", 10000, "A123FVS642AV");

vehicleOne.printVehcleStats();

//Inhering using prototype

function WheeledVehicle(name, price, serialNumber, wheels) {
  this.wheels = wheels;

  this.__proto__ = new Vehicle(name, price, serialNumber);
}

const wheeledVehicleOne = new WheeledVehicle(
  "Truck",
  15000,
  "AS49283AFU824",
  18
);
console.log(wheeledVehicleOne.name, wheeledVehicleOne.serialNumber);
wheeledVehicleOne.printVehcleStats();

console.log(wheeledVehicleOne);

//Reading an objects prototype
console.log(wheeledVehicleOne.__proto__);

function Car(name, price, serialNumber, wheels, doors, euroStandard, brand) {
  this.doors = doors;
  this.euroStandard = euroStandard;
  this.brand = brand;
  this.__proto__ = new WheeledVehicle(name, price, serialNumber, wheels);

  this.printCarInfo = function () {
    console.log(
      `Car has: ${this.doors} doors, Is euro standard: ${this.euroStandard}, Brand: ${this.brand}`
    );
  };
}

const vwPassat = new Car("Passat", 2500, "FUHSA58439FAS", 4, 5, 4, "VW");

console.log(vwPassat);

vwPassat.printVehcleStats();

vwPassat.printCarInfo();

//2. Classes

//Creating a class definition

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
  //Methods in classes are added below the constructor
  printPersonInfo() {
    console.log(this.fullName, this.age);
  }
}
//Creating an instance of a class
const personOne = new Person("Bob", "Marley", 110);

personOne.printPersonInfo();

//Using inheritance with classes
//extends is a keyword of inheriance of classes
class Professional extends Person {
  constructor(firstName, lastName, age, yearsOfExperience, industry) {
    //super() always needs to be called for classes that inherit from others
    super(firstName, lastName, age);

    this.industry = industry;
    this.yearsOfExperience = yearsOfExperience;
  }
  printWorkerInfo() {
    console.log(
      `${this.fullName} works in the ${this.industry} industry, and has ${this.yearsOfExperience} years of experience`
    );
  }
}

const workerOne = new Professional("Jack", "Dorsey", 54, 15, "construction");

workerOne.printPersonInfo();
workerOne.printWorkerInfo();

class Programmer extends Professional {
  constructor(firstName, lastName, age, yearsOfExperience, language, jobTitle) {
    super(firstName, lastName, age, yearsOfExperience, "IT");

    this.language = language;
    this.jobTitle = jobTitle;
    this.hasIndividualProject = false;
  }
  printProgrammerInfo() {
    console.log(
      `${this.fullName}'s current job title is: ${
        this.jobTitle
      } and know thse languages: ${this.language.join(",")}`
    );
  }
}

const danilo = new Programmer(
  "Danilo",
  "Borozan",
  25,
  1,
  ["C", "Fortran", "Clojure", "Kotlin", "Objective C"],
  "Software Engineer"
);

console.log(danilo);

danilo.printPersonInfo();
danilo.printWorkerInfo();
danilo.printProgrammerInfo();

//Checking if onject are instances of some class
//Returns true for any class that the parent class inherits from the object

console.log(danilo instanceof Programmer); //true
console.log(danilo instanceof Professional); //true
console.log(workerOne instanceof Programmer); //false
console.log(workerOne instanceof Person); //true

class Doctor extends Professional {
  constructor(
    firstName,
    lastName,
    age,
    yearsOfExperience,
    specialization,
    isCertified
  ) {
    super(firstName, lastName, age, yearsOfExperience, "Medicine");
    this.specialization = specialization;
    this.isCertified = isCertified;
  }
  helpPatient(patientName) {
    if (this.isCertified) {
      console.log(`Dr.${this.fullName} is helping ${patientName}`);
    } else {
      console.log(
        `${this.fullName} cant help ${patientName} because doctor is not certified`
      );
    }
  }

  static checkCertification(doctor) {
    if (doctor instanceof Doctor) {
      return doctor.isCertified
        ? `Doctor is certified`
        : `Doctor is not certified`;
      // if (doctor.isCertified)
      //   return `Doctor is certified`;
      // else {
      //   return `Doctor is not certified`;
      // }
    }
  }
}

const doctorRandall = new Doctor(
  "Radall",
  "Jackson",
  54,
  30,
  "Trauma Surgion",
  true
);

doctorRandall.helpPatient("Bob");

const doctorZhan = new Doctor("Zhan", "Mitrev", 25, 0, "Everything", false);

//You call static methods on the class definition itself
console.log(Doctor.checkCertification(doctorZhan));
console.log(Doctor.checkCertification(doctorRandall));

//Private fields in classes

class BankAccount {
  //Defining private properties
  #accountHolder;
  #balance;
  #accountNumber;

  constructor(accountHolder, balance, accountNumber) {
    //Assigning values to private properties
    this.#accountHolder = accountHolder;
    this.#balance = balance;
    this.#accountNumber = accountNumber;
  }
  get accountHolder() {
    console.log("Fetching account holder name ");
    return this.#accountHolder;
  }
  set accountHolder(value) {
    console.log("Da");
    if (value.length < 3) return console.log("Invalid name, please try again");

    this.#accountHolder = value;
  }
  //Use getters and setters to validate the change of the account number, its must be exactly 15 characters
  get accountNumber() {
    console.log("Fetching account number");
    return this.#accountNumber;
  }
  set accountNumber(value) {
    console.log("Ne");
    if (value.length < 15)
      return console.log("Invalid number,the number input is lower then 15");
    else if (value.lenght > 15)
      return console.log("Invalid number,the number input is higher then 15");
    else if (value.lenght === 15)
      return console.log("The number is 15 characters");
    else {
      console.log("This is not a number");
      this.#accountNumber = value;
    }
  }
}

const accountOne = new BankAccount("Borche Borisovski", 100, 2000512412);

// accountOne.#balance = 3000

console.log(accountOne);

//Using getters
console.log(accountOne.accountHolder);

//Using setters
// accountOne.accountHolder = "Da"; //It's gonna say invalid...

accountOne.accountHolder = "Danilo Borozan";

console.log(accountOne.accountHolder);

accountOne.accountNumber = 123456789;
