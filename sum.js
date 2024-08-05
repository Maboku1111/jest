const readline = require("readline-sync");

function getNumberInput(prompt) {
  let input = readline.question(prompt);
  while (isNaN(input)) {
    console.log("Invalid input. Please enter a number.");
    input = readline.question(prompt);
  }
  return Number(input);
}

function getOperatorInput() {
  const operators = ["+", "-", "*", "/"];
  let input = readline.question("Enter the operator (+, -, *, /): ");
  while (!operators.includes(input)) {
    console.log("Invalid input. Please enter a valid operator.");
    input = readline.question("Enter the operator (+, -, *, /): ");
  }
  return input;
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator.");
  }
}

function main() {
  const num1 = getNumberInput("Enter the first number: ");
  const num2 = getNumberInput("Enter the second number: ");
  const operator = getOperatorInput();

  try {
    const result = calculate(num1, num2, operator);
    console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);
  } catch (error) {
    console.error(error.message);
  }
}


module.exports = {
  getNumberInput,
  getOperatorInput,
  calculate,
  main
};

main();
