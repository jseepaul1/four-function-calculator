const displayElement = document.getElementById("display");
let arithmeticOperation = "";
let number1 = "";

// This function clears all values
function clr() {
  displayElement.innerHTML = "0";
}

// This function display values
function press(value) {
  if (displayElement.innerHTML === "0") {
    displayElement.innerHTML = "";
  }
  displayElement.innerHTML += value;
}

// This function evaluates the mathematical expression
function setOP(operation) {
  number1 = displayElement.innerHTML;
  console.log(number1);
  console.log(operation);
  arithmeticOperation = operation;
  displayElement.innerHTML = "0";
}

function calculate() {
  const number2 = displayElement.innerHTML;
  if (arithmeticOperation === "+") {
    displayElement.innerHTML = parseInt(number1) + parseInt(number2);
  } else if (arithmeticOperation === "-") {
    displayElement.innerHTML = parseInt(number1) - parseInt(number2);
  }
  if (arithmeticOperation === "*") {
    displayElement.innerHTML = parseInt(number1) * parseInt(number2);
  }
  if (arithmeticOperation === "/") {
    displayElement.innerHTML = parseInt(number1) / parseInt(number2);
  }
}
