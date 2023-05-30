console.log("Recap!");

// Defining a function

function createFullName(firstName, lastName){
let fullName = `${firstName}, ${lastName}`;

// Quicker return

// return `${firstName}, ${lastName}`;

return fullName;

// Code doesn't get executed below return

console.log("This will not get executed.")
}

//Calling a function
let trainerName = createFullName ("Borche", "Borisovski");
let assisstantName = createFullName ("Danilo", "Borozan");

console.log (trainerName, assisstantName);

// Default parameters(always put default parameters on the end in the parameter list)
function calculateTax (income, month , taxRate = 20){
    console.log(taxRate)
    
    return (income * taxRate)/100;
}

let borcheTax = calculateTax(5000, "march");

console.log(`Borche has a tax of ${borcheTax}`);

let daniloTax = calculateTax(15000, "january", 3);

console.log (`Danilo has a tax of ${daniloTax}`);

//Homework one solution

let priceOfOnePhone = 119.95;

let taxRate = 5;

let totalPhones = 30;

let totalPriceOfAllPhones = (totalPhones*priceOfOnePhone);

let totalTaxOfPhones = ((taxRate/100)*totalPriceOfAllPhones);

console.log (totalPriceOfAllPhones+totalTaxOfPhones);

//2. Function Solution

function calculatePhonesCost(phoneNumber, phoneCost, taxRatePercent) {
    let total = phoneNumber * (phoneCost +phoneCost *(taxRatePercent/100));

    return total;
}

let samsungPhonesTotal = calculatePhonesCost(30, 119.95, 5);

console.log (`Total cost for the samsung phone is ${samsungPhonesTotal}`);

let iphonePhonesCost = calculatePhonesCost(100, 2000, 30);

console.log (`Total cost for the iphone phone is ${iphonePhonesCost}`);