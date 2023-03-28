//Selecting an element using id

const mainHeadingEl = document.getElementById("mainTitle");

console.log(mainHeadingEl);

//Selecting elements by class

// const paragraph = document.getElementsByClassName("paragraph")

// console.log(paragraph)
// console.log(
    //     "This is the first paragraph in the HTML element",
    //     paragraph[0])
    
    // const paragraphSecond = document.getElementsByClassName("second");
    
    // console.log(paragraphSecond);
    
    //selecting elements by tag name and adding them to a variable for later use
    
// const paragraphs = document.getElementsByTagName ("p");
// const texts = document.getElementsByTagName("text");

// console.log(paragraphs);
// console.log(paragraphs[0]);
// console.log(texts);
// console.log(texts[0])

//Query selector - Modern and used almost exclusively in modern develpoment

const secondParagraphEl = document.querySelector(".second");

const paragraph = document.querySelectorAll(".paragraph")

const firstDivEl = document.querySelector("div");

const allContainerEl = document.querySelectorAll(".container")

console.log(secondParagraphEl)
console.log(paragraph)
console.log(firstDivEl)
console.log(allContainerEl)

//Changing text content of a element

console.log(mainHeadingEl.textContent);
console.log(mainHeadingEl.innerText);
  
mainHeadingEl.textContent = "This is now updated";
mainHeadingEl.textContent = "";
mainHeadingEl.textContent = "Now the heading is back";

mainHeadingEl.innerText = "Changed again";
mainHeadingEl.innerText += ", and again";


//chainging inner html of an element

const mainDivEl = document.querySelector("#mainDiv");

console.log(mainDivEl);

//removes all inner html
// mainDivEl.innerHTML=""

mainDivEl.innerHTML += `<p>This is added from javascript</p>
<p>And also this is added from javascript</p>
<ul class:>
<li>List item 1</li>
<li>List item 2</li>
<li>List item 3</li>
<li>List item 4</li>
</ul>


`;