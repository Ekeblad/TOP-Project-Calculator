const display = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
console.log(buttons);

let displayNum = "0";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

function populateDisplay() {
  display.innerText = displayNum;
}

//Add event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    clickEvent(buttons[i]);
  });
}

//Defined a clickevent which fires functions for numbers, operands and equal signs
function clickEvent(btnPress) {
  if (btnPress.classList.contains("number")) {
    console.log(btnPress.dataset.value);
  } else if (btnPress.classList.contains("operator")) {
    console.log(btnPress.dataset.value);
  } else if (btnPress.classList.contains("equals")) {
    console.log(btnPress.dataset.value);
  } else if (btnPress.classList.contains("clear")) {
    clearDisplay();
  }
}

function clearDisplay() {
  displayNum = "0";
  firstNumber = null;
  secondNumber = null;
  operator = null;
  result = null;
  populateDisplay();
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "/":
      return divide(a, b);

    case "*":
      return multiply(a, b);

    case "-":
      return subtract(a, b);

    case "+":
      return add(a, b);

    default:
      break;
  }
}
