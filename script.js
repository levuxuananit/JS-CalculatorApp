const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
const operands = document.querySelectorAll(".operation");
let operation;

function appendNumber(number) {
  if (number == "." && currDisplay.innerText.includes(".")) return;
  currDisplay.innerText = currDisplay.innerText + number;
}

function chooseOperation(operand) {
  if (currDisplay.innerText == "") return;
  compute(operand);
  operation = operand;
  currDisplay.innerText = currDisplay.innerText + operand;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
}

function clearDisplay() {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
}

function compute(operand) {
  const prevValue = parseFloat(prevDisplay.innerText);
  const currValue = parseFloat(currDisplay.innerText);
  let result;

  if (isNaN(prevValue) || isNaN(currValue)) return;

  switch (operation) {
    case "+":
      result = prevValue + currValue;
      break;
    case "-":
      result = prevValue - currValue;
      break;
    case "*":
      result = prevValue * currValue;
      break;
    case "/":
      result = prevValue / currValue;
      break;
    default:
      return;
  }

  currDisplay.innerText = result;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    chooseOperation(operand.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

equalBtn.addEventListener("click", () => {
  compute();
  prevDisplay.innerText = "";
});

delBtn.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});

