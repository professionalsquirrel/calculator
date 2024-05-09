//Create element for screen
const screen = document.querySelector(".screen");

function add(a, b){
    screen.textContent = a + b;
}

function subtract(a, b){
    screen.textContent = a - b;
}

function multiply(a, b){
    screen.textContent = a * b;
}

function divide(a, b){
    if (b==0){ screen.textContent = "You're kidding right?"
} else {
    screen.textContent = a / b;
}
}
