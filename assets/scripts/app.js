const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  // Will need to get this number in multiple functions, leaving it outside will make the code simpler to follow and adjust
  // +userInput.value will also change the string to a number
  // intvalue.toString() will change the integer to a string
  return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  // place at top of function so that currentResult will output the previous value, and not the one adjusted after the function was called
  outputResult(currentResult, calcDescription);
}

// To write each calculation out into a single space in an array, regardless which function is called
function writeToLog(opIdent, prevRes, opNum, newRes) {
  const logEntry = {
    operation: opIdent,
    prevResult: prevRes,
    number: opNum,
    result: newRes,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("add");
}

function subtract() {
  calculateResult("subtract");
}

function multiply() {
  calculateResult("multiply");
}

function divide() {
  calculateResult("divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
