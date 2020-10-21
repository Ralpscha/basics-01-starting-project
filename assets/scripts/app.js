const defaultResult = 0;

let currentResult = defaultResult;
currentResult = (currentResult + 10) * 3 /2 - 1;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);




