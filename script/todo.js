const todoFormElem = document.querySelector("#todo-form");
const todoInputElem = todoFormElem.querySelector("Input");
const todoListElem = document.querySelector("#todo-list");

const TODO_KEY = "todos";

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

let todoList = localStorage.getItem(TODO_KEY);

if (todoList === null) {
  todoList = new Map();
} else {
  todoList = JSON.parse(todoList, reviver);
  todoList.forEach((text, id) => {
    const todo = {
      id: id,
      text: text,
    };
    paintTodo(todo);
  });
}

function updateTodoStorage() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoList, replacer));
}

function removeTodo(event) {
  const li = event.target.parentElement;
  todoList.delete(li.id * 1);
  li.remove();
  updateTodoStorage();
}

function checkTodo(event) {
  const li = event.target.parentElement;
  li.classList.toggle("todo-checked");
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const span = document.createElement("span");
  span.innerText = todo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.type = "button";
  button.addEventListener("click", removeTodo);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.title = "check this todo";
  checkbox.addEventListener("click", checkTodo);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  todoListElem.appendChild(li);
}

function addTodo(event) {
  event.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: todoInputElem.value,
  };
  todoInputElem.value = "";
  todoList.set(newTodo.id, newTodo.text);
  paintTodo(newTodo);
  updateTodoStorage();
}

todoFormElem.addEventListener("submit", addTodo);
