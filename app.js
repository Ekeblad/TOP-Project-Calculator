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
    inputNumber(btnPress.dataset.value);
  } else if (btnPress.classList.contains("operator")) {
    operatorAdd(btnPress.dataset.value, btnPress);
  } else if (btnPress.classList.contains("equals")) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    result = operate(operator, firstNumber, secondNumber);
    displayNum = result;
    firstNumber = result;
    secondNumber = null;
  } else if (btnPress.classList.contains("clear")) {
    clearDisplay();
  }
  populateDisplay();
}

function inputNumber(value) {
  if (firstNumber === null && operator === null) {
    firstNumber = value;
    displayNum = firstNumber;
  } else if (firstNumber != null && operator === null) {
    firstNumber += value;
    displayNum = firstNumber;
    console.log("Yet another number");
  } else if (operator != null && secondNumber === null) {
    secondNumber = value;
    displayNum = secondNumber;
  } else if (secondNumber != null) {
    secondNumber += value;
    displayNum = secondNumber;
  }
  // populateDisplay();
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operator);
}

function operatorAdd(oper, btnPress) {
  for (let i = 0; i < buttons.length; i++) {
    if (btnPress) {
      console.log(i);
    }
  }
  operator = oper;
  if (btnPress.classList.contains("active")) {
    btnPress.className += " active";
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
      if (b == 0) {
        return "You cray";
      }
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
