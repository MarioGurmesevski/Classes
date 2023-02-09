const ClickMeBtn = document.getElementById("clickme")
console.log(ClickMeBtn);


function sayHello(){
    console.log("Hello world!");
}
function printWin(){
    console.log("I'm the Winner!");
}
//Passing a function referene as the value (function definition not result from calling it)

ClickMeBtn.onclick = sayHello;
ClickMeBtn.onclick =printWin;

//Event listener example

const nameBtn = document.querySelector("#nameBtn")

function printFullName(){
    console.log("Danilo Borozan")
}

console.log(nameBtn)

nameBtn.addEventListener("click",printFullName)
nameBtn.addEventListener("mouseenter",sayHello)
nameBtn.addEventListener("mouseleave",printWin)


//Blur event expample 
const usernameInput = document.getElementById("username");
console.log(usernameInput)

function inputGreating(){
    console.log(`hello from ${usernameInput.value}!`)
    console.log(`This is the input value's:${usernameInput.value}`)
}
// usernameInput.addEventListener("blur",inputGreating)
usernameInput.addEventListener("blur", function(){
    console.log("im printed from an anonymus")
})