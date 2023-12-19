// Collect all the calculator buttons and screen elements
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-allclear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // concat numbers and operations
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  // determine if the calculator should perform an action
  chooseOperation(operation) {
    if (this.currentOperand === "") {
      return;
    }

    if (this.previousOperand !== "") {
        this.compute();
    }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
  }

  // switch statement used to select from the available functions
  // it checks is a second number is needed or not to perform the function
  compute() {
    let computation;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(prev)) return;
    switch (this.operation) {
      case "+":
        if (isNaN(current)) {
          return;
        } else {
          computation = prev + current;
          break;
        }
      case "-":
        if (isNaN(current)) {
          return;
        } else {
          computation = prev - current;
          break;
        }
      case "*":
        if (isNaN(current)) {
          return;
        } else {
          computation = prev * current;
          break;
        }
      case "÷":
        if (isNaN(current)) {
          return;
        } else {
          computation = prev / current;
          break;
        }
      case "^":
        if (isNaN(current)) {
          return;
        } else {
          computation = Math.pow(prev, current);
          break;
        }
      case "√":
        computation = Math.sqrt(prev);
        break;
      case "%":
        computation = prev / 100;
        break;
      case "!":
        function factorial(n) {
          if (n === 0 || n === 1) {
            return 1;
          } else {
            return n * factorial(n - 1);
          }
        }
        computation = factorial(prev);
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


// adds an event listener to the buttons
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.innerText === "𝝅") {
      calculator.appendNumber(Math.PI);
      calculator.updateDisplay();
    } else {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    }
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
  })
})

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
})

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
})
