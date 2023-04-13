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