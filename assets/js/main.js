var numbers = document.querySelectorAll('.no');
var display = document.querySelector('.display');
display.innerHTML = 0;
var operators = document.querySelectorAll('.btn-op');
var factorial = document.querySelector('#factorial');
var sqrt = document.querySelector('#sqrt');
var power = document.querySelector('#power');
var clear = document.querySelector('#clear');
var result = document.querySelector('#result');

var getDisplayNumber = () => {
    return Number(display.innerHTML);
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(){
        if(display.innerHTML === "0") {
            display.innerHTML = '';
        }
        display.innerHTML += this.innerHTML;
    });
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function (){
        display.innerHTML += this.innerHTML;
    });
}

var getFactorial = () => {
    var displayNumber = getDisplayNumber();
    var factorialResult = 1;
    for (i = 2; i <= displayNumber; i++) {
        factorialResult *= i;
    }
    display.innerHTML = factorialResult;
}

var getSqrt = () => {
    var displayNumber = getDisplayNumber();
    display.innerHTML = Math.sqrt(displayNumber);
}

var getPower = () => {
    console.error('NOPE');
}

var equal = () => {
    display.innerHTML = eval(display.innerHTML);
}

var clearDisplay = () => {
    display.innerHTML = 0;
}

factorial.addEventListener('click', getFactorial);
sqrt.addEventListener('click', getSqrt);
power.addEventListener('click', getPower);
result.addEventListener('click', equal);
clear.addEventListener('click', clearDisplay);