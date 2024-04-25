let display: HTMLInputElement | null = document.getElementById(
  "display"
) as HTMLInputElement;

function appendToDisplay(value: string) {
  if (display) {
    display.value += value;
  }
}

function clearDisplay() {
  if (display) {
    display.value = "";
  }
}

function calculate() {
  if (display) {
    const expression = display.value;
    const operator = expression.match(/[+\-*/]/)?.[0];

    if (operator) {
      const operands = expression.split(operator);
      const operand1 = parseFloat(operands[0]);
      const operand2 = parseFloat(operands[1]);

      switch (operator) {
        case "+":
          display.value = (operand1 + operand2).toString();
          break;
        case "-":
          display.value = (operand1 - operand2).toString();
          break;
        case "*":
          display.value = (operand1 * operand2).toString();
          break;
        case "/":
          if (operand2 !== 0) {
            display.value = (operand1 / operand2).toString();
          } else {
            display.value = "Error";
          }
          break;
        default:
          display.value = "Error";
      }
    }
  }
}
