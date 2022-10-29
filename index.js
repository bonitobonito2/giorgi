let number1 = "";
let number2 = "";
let operator = "";
let isOperatorClicked = false;
let result = "";
let isEqualClicked = false;
const domNumber = document.getElementById("number");
const resultP = document.getElementById("resP");

const clearEveything = () => {
  number1 = "";
  number2 = "";
  operator = "";
  isOperatorClicked = false;
  result = "";
  isEqualClicked = false;
  resultP.innerText = "";
  domNumber.innerText = "";
};

const btnNumberClickHandler = (element) => {
  if (isEqualClicked) {
    clearEveything();
  }
  if (!isOperatorClicked) {
    number1 += element.innerText;
    domNumber.innerText = number1;
    console.log(number1, "number1");
  } else if (isOperatorClicked) {
    number2 += element.innerText;
    domNumber.innerText = number2;
    console.log(number2, "number2");
  }
};

const operatorHandler = (element) => {
  if (!isOperatorClicked) {
    operator = element.innerText;
    result = `${number1} ${operator}`;
    resultP.innerText = result;
    domNumber.innerText = "";
    isOperatorClicked = true;
  }
};

function isInt(n) {
  return n % 1 === 0;
}

const equalityHandler = () => {
  isEqualClicked = true;
  resultP.innerText += " " + number2 + " =";
  domNumber.innerText = "";
  let realResult;
  switch (operator) {
    case "+":
      realResult = parseFloat(number1) + parseFloat(number2);
      break;
    case "-":
      realResult = parseFloat(number1) - parseFloat(number2);
      break;
    case "X":
      realResult = parseFloat(number1) * parseFloat(number2);
      break;
    case "/":
      realResult = parseFloat(number1) / parseFloat(number2);
      break;

    case "%":
      realResult = parseFloat(number1) * (parseFloat(number2) / 100);
      break;
  }
  console.log(typeof realResult);

  let isInteger = isInt(realResult);
  if (isInteger) {
    domNumber.innerText = realResult.toFixed(0);
  } else {
    domNumber.innerText = realResult.toFixed(2);
  }
};
