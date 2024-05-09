//Create element for screen
const screen = document.querySelector(".screen");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b==0){ screen.textContent = "You're kidding right?"
} else {
    return a / b;
}
}

let operand1;
let operator;
let operand2;

function operate(operator, a, b){
    switch(operator){
    case "+":
        add(a, b);
        break;
    case "-":
        subtract(a,b);
        break;
    case "*":
        multiply(a,b);
        break;
    case "/":
        divide(a,b);
        break;
    }
}

function populateDisplay(){

}