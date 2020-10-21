const defaultResult = 0;

let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult + parseInt(userInput.value);
    //+userInput.value cast het ook.
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);




