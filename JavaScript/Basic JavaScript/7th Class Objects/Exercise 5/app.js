const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const saveBtn = document.querySelector("#saveBtn");

students = [];

function resetInputs(){
firstNameInput.value= "";
lastNameInput.value= "";
ageInput.value= "";

}
saveBtn.addEventListener("click",function(){
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
    console.log(ageInput.value);

    const student = {
        firstName:firstNameInput.value,
        lastName:lastNameInput.value,
        age: ageInput.value
    };

    students.push(student)
    resetInputs();
});