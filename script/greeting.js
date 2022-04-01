const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function showGreetings(username) {
  greeting.innerText = `How are you? ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  showGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  showGreetings(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
}
