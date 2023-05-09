const paragraph = document.getElementById("paragraph")
const colorBtn = document.getElementById("colorChange")

console.log(paragraph)
console.log(colorBtn)

colorBtn.addEventListener("click",function(){
    paragraph.style.color = "red";
    paragraph.style.fontSize = "30px";
    paragraph.style.backgroundColor = "orange";
});



// colorBtn.addEventListener("click",changeParagraph);

// function changeParagraph(){
//     paragraph.style.color = "red";
//     paragraph.style.fontSize = "30px";
//     paragraph.style.backgroundColor = "orange";
// }