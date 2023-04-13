// Basic Types
// String
var firstName = "Mario";
// Boolean
var isDone = false;
// Number
var animalsCount = 3;
// let number1: bigint = 41251251251512
// Enum 
var weekdays = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
};
console.log(weekdays.monday);
var Weekdays;
(function (Weekdays) {
    Weekdays["monday"] = "Monday";
    Weekdays["tuesday"] = "Tuesday";
    Weekdays["wednesday"] = "Wednesday";
    Weekdays["thursday"] = "Thursday";
    Weekdays["friday"] = "Friday";
    Weekdays["saturday"] = "Saturday";
    Weekdays["sunday"] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.monday);
var Colors;
(function (Colors) {
    Colors[Colors["white"] = 0] = "white";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["yellow"] = 2] = "yellow";
    Colors[Colors["red"] = 3] = "red"; //3
})(Colors || (Colors = {}));
console.log(Colors.green);
console.log(Colors.white === Colors.white);
// Arrays
// Option 1
var numbers = [1, 2, 3];
// Option 2
var numbersAgain = [1, 2, 3];
// Tuple 
var employes = [1, "Mario"];
// Any - Use with caution
var randomStuff = [true, [], "nekoj string", 1];
// Interfaces
// interface Animal{
//     name: string;
//     age:number;
// }
// let animal:Animal = {
//     name:"Sparky",
//     age:23
// }
// let newAnimal = {
//     name: "Blacky",
//     age:10
// }satisfies Animal
// Types
// type Animal = {
//     name: string;
//     age:number;
// }
// type Nullish = undefined | null
// let nothing:Nullish = undefined
// Objects
// interface Person{
//     name:string;
//     age:number;
// }
// let emptyObject = {} as Person
// interface Employe extends Person {
//     job:string;
// }
// const newEmploye: Employe ={
//     name:"John",
//     age: 20,
//     job:"teacher"
// }
//Other Types
var anything = " fnasofna ";
var mistery;
// Void
var func = function () {
    console.log("nesto");
};
var func2 = function () {
    throw new Error("Some error");
};
var sumOfTwo = function (num1, num2) {
    return num1 + num2;
};
var sum = sumOfTwo(1, 2);
console.log(sum);
var sumOfItems = function (item1, item2) {
    console.log(typeof item1);
    console.log(typeof item2);
    if (typeof item1 === "number" && typeof item2 === "number") {
        return item1 + item2;
    }
    return "".concat(item1).concat(item2);
};
console.log(sumOfItems(1, 2));
