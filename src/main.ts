// define buttons 

const numberButtons = document.querySelectorAll(".buttons__number");
const operatorButtons = document.querySelectorAll(".buttons__operator");
const clearButton = document.querySelector<HTMLElement>(".buttons__clear");
const equalsButton = document.querySelector<HTMLElement>(".buttons__equals");
const display = document.querySelector<HTMLElement>(".calculator__window");


if (!clearButton || !equalsButton || !display) {
    throw new Error("issue with a query selector");
  }

//defaults
let firstInput= " ";
let secondInput= " ";
let operator= " ";
let haveDot = false;


// handle number buttons click

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
const handleAcClick = (event: Event) => {
    firstInput= "";
    secondInput= "";
    operator= "";
    display.innerText=""
  };

  clearButton.addEventListener("click", handleAcClick);


// handle operation button clicks

const handleOperationClick = (event: Event) => {
    operator = event.target.innerText;
    display.innerText = operator;
  };

  operatorButtons.forEach((button) => {
    button.addEventListener("click", handleOperationClick);
  });
  

// handle equals and do the maths! (+,/,*,-) 
const handleEqualsClick = (event: Event) => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstInput) + parseFloat(secondInput);
        result = parseFloat(result.toFixed(5));
        break;
      case "-":
        result = parseFloat(firstInput) - parseFloat(secondInput);
        result = parseFloat(result.toFixed(5));
        break;
      case "x":
        result = parseFloat(firstInput) * parseFloat(secondInput);
        result = parseFloat(result.toFixed(5));
        break;
      case "÷":
        result = parseFloat(firstInput) / parseFloat(secondInput);
        result = parseFloat(result.toFixed(5));
        break;
    }
    display.innerText = result;
    firstInput = result;
    secondInput = " ";
    operator = " ";
    
  };
  
  equalsButton.addEventListener("click", handleEqualsClick);



// handle decimal point (limit it to 1 use)

// handle 0 (limit it to 1 use)


// possibly add a clear -1 item button?

// add an easter egg if i can?