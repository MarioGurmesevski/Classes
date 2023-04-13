// Basic Types

// String
let firstName: string = "Mario"

// Boolean
let isDone: boolean = false;

// Number

let animalsCount: number = 3

// let number1: bigint = 41251251251512

// Enum 

let weekdays = {   
    monday:"Monday",
    tuesday:"Tuesday",
    wednesday:"Wednesday",
    thursday:"Thursday",
    friday:"Friday",
    saturday:"Saturday",
    sunday:"Sunday",
}

console.log(weekdays.monday);

enum Weekdays{
    monday = "Monday",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday",
    sunday = "Sunday",
}

console.log(Weekdays.monday);

enum Colors{
    white, //0
    green, //1
    yellow, //2
    red //3
}

console.log(Colors.green);
console.log(Colors.white === Colors.white);

// Arrays

// Option 1
let numbers: number[]  = [1 ,2 ,3 ]

// Option 2
let numbersAgain:Array<number> = [1 ,2 ,3 ]

// Tuple 
let employes: [number, string] = [1 ,"Mario" ]

// Any - Use with caution
let randomStuff:any[] = [true ,[] ,"nekoj string" ,1 ]

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

// let anything: any = " fnasofna "

// let mistery: unknown

// // Void

// const func = (): void =>{
//     console.log("nesto");
// }

// const func2 = ():never=>{
//     throw new Error("Some error")
// } 

// const sumOfTwo = (num1:number,num2:number):number =>{
//     return num1 + num2
// }

// const sum = sumOfTwo(1,2)

// console.log(sum);

// const sumOfItems =(item1 :number|string,item2:number|string):any=>{
//     console.log(typeof item1 )
//     console.log(typeof item2 )
    
//     if (typeof item1==="number"&&typeof item2==="number") {
//         return item1 +item2
//     }
//     return `${item1}${item2}`
// }

// console.log(sumOfItems(1,"2"));

// Map & Set

// const someMap:{[key:string]:string } = {
//     "fasafaghusgidnhia": "Moackingbird"
// }

// someMap["fasafaghusgidnhia"]

// Generics 

interface MultiDimensionArray{

}
