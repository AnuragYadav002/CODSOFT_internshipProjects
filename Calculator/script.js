const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval handles the string math and the Math.PI constant
        display.value = eval(display.value).toFixed(2);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}