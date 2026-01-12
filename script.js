const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");

function checkInput() {
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {

    if (input.value.trim() === "") {
      setError(input, `${input.name} cannot be empty`);
    }
  });

  if(email.value.trim() !== ""){
    isEmailValid(email);
  }

 isEmailValid(email);
}

function isEmailValid(email){
    const isValid = email.checkValidity();

    if(!isValid){
        setError(email, "Looks like this is not an email");
        return false;
    }
    return true;
}

function setError(input, message) {
  const existingError = input.nextElementSibling;

  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
  const error = document.createElement("em");
  error.classList.add("error");
  error.textContent = message;
  input.after(error);
  input.placeholder = "";
}

function setSuccess() {
  return true;
}

function setupInputListeners() {
  const input = document.querySelectorAll("input");

  input.forEach((input) => {
    input.addEventListener("input", () => {
      const existingError = input.nextElementSibling;

      if (existingError && existingError.classList.contains("error")) {
        existingError.remove();
      }
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

setupInputListeners();