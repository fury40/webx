var display = document.getElementById("display");
function appendToDisplay(value) {
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
    var _a;
    if (display) {
        var expression = display.value;
        var operator = (_a = expression.match(/[+\-*/]/)) === null || _a === void 0 ? void 0 : _a[0];
        if (operator) {
            var operands = expression.split(operator);
            var operand1 = parseFloat(operands[0]);
            var operand2 = parseFloat(operands[1]);
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
                    }
                    else {
                        display.value = "Error";
                    }
                    break;
                default:
                    display.value = "Error";
            }
        }
    }
}
