const resultInput = document.getElementById("result");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

let currentInput = "";

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.getAttribute("data-number");
        currentInput += number;
        updateResult();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operator = button.getAttribute("data-operator");
        currentInput += operator;
        updateResult();
    });
});

equalButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clearResult);

function updateResult() {
    resultInput.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        updateResult();
    } catch (error) {
        currentInput = "Error";
        updateResult();
    }
}

function clearResult() {
    currentInput = "";
    updateResult();
}
