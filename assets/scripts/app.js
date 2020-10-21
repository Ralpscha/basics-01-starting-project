const defaultResult = 0;

let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    //+userInput.value cast het ook.
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);




