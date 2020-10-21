const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// this is a comment
/* block comment
    continuing.
 */
// operators ++ is plus 1 en -- is min 1, let op ++currentResult is anders dan currentResult++

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operand, resultBeforeCalc,enteredNumber) {
    const calcDescription = `${resultBeforeCalc} ${operand} ${enteredNumber}`;
    outputResult(currentResult, calcDescription); //from Vendor file
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





