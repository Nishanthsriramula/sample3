// calculator.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
let currentInput = "";
let lastOperator = "";
let lastResult = 0;

function updateDisplay(value) {
    if (currentInput === "" && value === "0") {
        display.textContent = "0"; 
    } else {
        display.textContent = value;
    }
}

function appendInput(value) {
    if (value === "." && currentInput.includes(".")) {
        return; // Prevent multiple decimal points
    }
    currentInput += value;
    updateDisplay(currentInput);
}

function performOperation() {
    const currentValue = parseFloat(currentInput);
    if (!isNaN(currentValue)) {
        switch (lastOperator) {
            case "+":
                lastResult += currentValue;
                break;
            case "-":
                lastResult -= currentInput;
                break;
            case "*":
                lastResult *= currentInput;
                break;
            case "/":
                lastResult /= currentInput;
                break;
            case "%":
                lastResult %= currentInput;
                break;
            default:
                lastResult = currentInput;
                break;
        }
        currentInput = "";
    }
}

function clearCalculator() {
    currentInput = "";
    lastResult = 0;
    lastOperator = "";
    updateDisplay("0");
}

buttons.forEach((button) => {
    if (button.hasAttribute("data-value")) {
        button.addEventListener("click", () => {
            appendInput(button.getAttribute("data-value"));
        });
    } else if (button.hasAttribute("data-operator")) {
        button.addEventListener("click", () => {
            performOperation();
            lastOperator = button.getAttribute("data-operator");
            updateDisplay(String(lastResult));
        });
    }
});

document.getElementById("equals").addEventListener("click", () => {
    performOperation();
    updateDisplay(String(lastResult));
    lastOperator = ""; // Reset operator after calculation
});

document.getElementById("clear").addEventListener("click", clearCalculator);
