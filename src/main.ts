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
let firstInput = " ";
let secondInput = " ";
let operator = "";
let opScreen = "";

// handle number buttons click

const handleNumberClick = (event: Event) => {
    const buttonHTML = event.currentTarget as HTMLButtonElement;
    const clickedNumber = buttonHTML.innerText;
    const isNotDot = clickedNumber !== ".";

    if (operator === "") {
      
      if (!firstInput.includes(".") || isNotDot) {
        firstInput += clickedNumber;
        display.innerText = firstInput;
      }
     
    } else {
      secondInput += clickedNumber;
      display.innerText = secondInput;
    }
  };

numberButtons.forEach(button => {
  button.addEventListener("click", handleNumberClick);
});

// handle allclear click

const handleAcClick = () => {
  firstInput = "";
  secondInput = "";
  operator = "";
  display.innerText = "0";
};

clearButton.addEventListener("click", handleAcClick);

// handle operation button clicks

const handleOperationClick = (event: Event) => {
  const operatorHTML = event.target as HTMLButtonElement;
  operator = operatorHTML.innerText;
  display.innerText = operator;
  
};

operatorButtons.forEach(button => {
  button.addEventListener("click", handleOperationClick);
});

// handle equals and do the maths! (+,/,*,-)
const handleEqualsClick = () => {
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
      default:
        console.log("Invalid operator");
        break;
    }
        
    display.innerText = String(result!);
    firstInput = String(result!);
    secondInput = "";
    operator = "0";  


// Easter Egg
    if (display.innerText == "Infinity") {
      display.innerText = " ⭐Infinity⭐ "; 
        } else if (display.innerText == "69") {
            display.innerText = " noice 😉"; 
       } else if (display.innerText == "22") {
      display.innerHTML = '<img src="src/22ducks.gif" alt="2 sitting ducks">'; 
}
    
  };

equalsButton.addEventListener("click", handleEqualsClick);
