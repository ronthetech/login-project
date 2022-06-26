const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
const error = document.getElementById("error");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Please enter a username");
  }
  if (password.value === "" || password.value == null) {
    messages.push("Please enter a password");
  }
  if (age.value < 18) {
    messages.push("You are too young to enter");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", also ");
  }
});
