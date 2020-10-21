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

function logEntry(operation, initialResult, enteredNumber, currentResult) {
    const logEntry = {
        operation: operation,
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    // const logEntry = {
    //     operation: 'ADD',
    //     prevResult: initialResult,
    //     number: enteredNumber,
    //     newResult: currentResult
    // };
    // logEntries.push(logEntry);
    // console.log(logEntry.operation);
    // console.log(logEntries);
    logEntry('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    logEntry('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    logEntry('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    logEntry('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





