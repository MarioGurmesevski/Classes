const clickMeBtn = document.getElementById("sayName")
console.log(clickMeBtn);

function sayHello(){
    console.log("Hello Mario!");
}

clickMeBtn.addEventListener("click",sayHello)