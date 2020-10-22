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

function writeToLog(operation, initialResult, enteredNumber, currentResult) {
    const logEntry = {
        operation: operation,
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return;
    }

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        mathOperator = '+';
        currentResult += enteredNumber;
    } else if(calculationType === 'SUBTRACT'){
        mathOperator = '-';
        currentResult -= enteredNumber;
    } else if(calculationType === 'MULTIPLY') {
        mathOperator = '*';
        currentResult *= enteredNumber;
    } else if(calculationType === 'DIVIDE'){
        mathOperator = '/';
        currentResult /= enteredNumber;
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





