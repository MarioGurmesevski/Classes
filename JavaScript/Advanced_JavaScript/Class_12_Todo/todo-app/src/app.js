import { Todo } from "./todo model.js";

console.log(Todo);

const app = () => {
  let todos = [
    new Todo("Read a finctional novel", "low"),
    new Todo("workout", "medium"),
    new Todo("Teach Code", "high"),
  ];
  //Selectors
  const todoListEl = document.querySelector(".todo-list");
  const todoFormEl = document.querySelector(".todo-form");
  const todoTextInput = document.querySelector("#todoText");
  const todoPriotityInput = document.querySelector("#todoPriority");

  //Rendering todos function

  //creating ad todo
  const renderTodoList = (todos) => {
    todoListEl.innerHTML = "";

    todos.forEach((todo) => {
      const todoEl = document.createElement("LI");

      console.log(todo.priority);

      todoListEl.classList.add("todo", todo.priority);

      todoEl.innerHTML = `
      <span class= "todo-priority">
      <strong>${todo.priority[0].toUpperCase()}</strong> ${todo.text}
      </span>

      <span>
      <button>Edit</button>
      <button>Finish</button> 
      <span>`;

      todoListEl.appendChild(todoEl);
    });
  };
  renderTodoList(todos);
};

//Will be updated to IIFE at the end
app();
