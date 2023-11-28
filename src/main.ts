const numberButton = document.querySelectorAll<HTMLElement>(".buttons__number")
const operationButton = document.querySelectorAll<HTMLElement>(".buttons__operator")
const inputWindow = document.querySelector<HTMLElement>(".calculator__window")
const equalsButton = document.querySelector(".buttons__operator--clear")
const clearButton = document.querySelector<HTMLElement>(".buttons__operator--clear")

if (!inputWindow || !equalsButton || !clearButton) {
    throw new Error(`issue with a query selector`);
  }

//check linked  
console.log(operationButton)

// Defaults for before using the calc
let inputNum = ' ';
let haveDot = false;
let result = null;


// event listener for showing number buttons and dot on click

numberButton.forEach(number => {
    number.addEventListener("click", (event: Event) => {
        if (event.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (event.target.innerText === '.' && haveDot)
        return;

    
    inputNum += event.target.innerText;
    inputWindow.innerText = inputNum;
});
});

// event listener for operations - go back to this







