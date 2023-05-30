const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

function allValues(){
    let input= "";
    input.innerHTML+=`<p>${firstName.value},${lastName.value},${email.value},${password.value}</p>`

    return input;
}

btn.addEventListener("click",allValues)