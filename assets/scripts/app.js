const defaultResult = 0;

let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(currentResult, operand, enteredNumber) {
    const calcDescription = `${currentResult} ${operand} ${enteredNumber}`;
    return calcDescription;
}

function add() {
    const enteredNumber = getUserNumberInput();
    // const calcDescription = `${currentResult} + ${enteredNumber}`
    const calcDescription = createAndWriteOutput(currentResult, '+',enteredNumber);
    currentResult = currentResult + enteredNumber;
    //+userInput.value cast het ook.
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    // const calcDescription = `${currentResult} - ${enteredNumber}`
    const calcDescription = createAndWriteOutput(currentResult, '-',enteredNumber);
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    // const calcDescription = `${currentResult} * ${enteredNumber}`
    const calcDescription = createAndWriteOutput(currentResult, '*',enteredNumber)
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    // const calcDescription = `${currentResult} / ${enteredNumber}`
    const calcDescription = createAndWriteOutput(currentResult, '/',enteredNumber)
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





