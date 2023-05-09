const student = {
    name: "Jhon Doe",
    age: 30,
    country: "USA",
    classes: ["Basic HTML", "Basic JS", "Advanced JS"]
};

console.log(student)

const jsonStudnet = JSON.stringify(student);

console.log(jsonStudnet)

const parsedStduent = JSON.parse(jsonStudnet)

//Back to javascript object
console.log(parsedStduent)

const todoContainerEl=document.querySelector(".todo-container")

function renderAllTodos(todosData, containerEl){
    let todosHTML = "";

}
function renderToDo(todoData){
    return`
    <p><strong>${todoData.id}</strong> ${todoData.title}</p>
    <p>Todo is ${todoData.iscompleted ? "completed " :"not completed"}</p>`
}

fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(res){
    console.log(res);
    return res.json();
})
.then(function(todo){
console.log("in success for todo")
renderToDo(todo,todoContainerEl)
})
.catch(function(error){
    console.log(error)
})