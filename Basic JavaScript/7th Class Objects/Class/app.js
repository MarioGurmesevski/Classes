console.log("Test")

const student = {
    firstName: "John",
    lastName: "Doe",
    knowledge:25,
    classes: ["basic html", "basic js", "advanced js"],

    study: function(){
        this.knowledge += 5;
    },

    studyHarder: function(){
        this.knowledge +=20;
    },
    printFullName(){
        console.log(`${this.firstName}${this.lastName}`)
    },
};

student.studyHarder();
student.studyHarder();
// console.log(printFullName);
console.log(student);

console.log(student["firstName"])
console.log(student["lastName"])
console.log(student["knowledge"])

//dont do this

// student ["studyHarder"]();

//Adding properties and methods to objects

student.country = "macedonia";

student.dontStudy = function(){
    this.knowledge -= 5;
}

//Constructor function that create instances of specific objects
function Person(name, yearOfBirth, job){
        //if it doesn't have this then it's argument
        //if it does have this then it's an object property
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
    this.calculateAge=function(){
        const currentYear = new Date().getFullYear();
 
        console.log(`${this.name} is ${currentYear - yearOfBirth} years old`)
    }
}

const jack = new Person("Jack", 1984, "programmer")

const jane = new Person ("Jane", 1993, "lawyer")

const bob = new Person ("Bob", 1992, "soldier")

console.log(jack);
console.log(jane);
console.log(bob);

jack.calculateAge();
jane.calculateAge();
bob.calculateAge();

//This and all it's variants

function windowSize(){
    //Function that returns the width and height of the glbal browser window object
    console.log(this)
    const width = this.innerWidth;
    const height = this.innerheight;
    console.log(width,height)
}

const square = {
    innerHeight: 150,
    innerWidth:150,
}
square.windowSize = windowSize;


//Called in global context or outside of any object
console.log("calling in global context")
windowSize();


//called as method of an object
console.log("Calling as object method")
square.windowSize();