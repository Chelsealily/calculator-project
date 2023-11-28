
// define buttons 

const numberButtons = document.querySelectorAll(".buttons__number");
const operatorButtons = document.querySelectorAll(".buttons__operator");
const clearButton = document.querySelector<HTMLElement>(".buttons__operator--clear");
const equalsButton = document.querySelector<HTMLElement>(".buttons__operator--equals");
const display = document.querySelector<HTMLElement>(".calculator__window");

if (!clearButton || !equalsButton || !display) {
    throw new Error("issue with a query selector");
  }

//defaults
let firstInput = "";
let secondInput = "";
let operator = "";


// handle number input 

const handleNumberClick = (event: Event) => {
    const clickedNumber = event.target.innerText;
    if (operator === "") {
      firstInput += clickedNumber;
      display.innerText = firstInput;
    } else {
      secondInput += clickedNumber;
      display.innerText = secondInput;
    }
  };

  numberButtons.forEach((button) => {
    button.addEventListener("click", handleNumberClick);
  });
  

// handle allclear click
const handleClearClick = (event: Event) => {
    firstInput = "";
    secondInput = "";
    operator = "";
    display.innerText = "0";
  };

  clearButton.addEventListener("click", handleClearClick);


  