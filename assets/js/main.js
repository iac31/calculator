const numbers = document.querySelectorAll('.no');
let display = document.querySelector('.display');
display.innerHTML = 0;
const operators = document.querySelectorAll('.btn-op');
const factorial = document.querySelector('#factorial');
const sqrt = document.querySelector('#sqrt');
const power = document.querySelector('#power');
const clear = document.querySelector('#clear');
const result = document.querySelector('#result');

const getDisplayNumber = () => {
    return Number(display.innerHTML);
};

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        if(display.innerHTML === "0") {
            display.innerHTML = '';
        }
        display.innerHTML += this.innerHTML;
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        display.innerHTML += this.innerHTML;
    });
}

const getFactorial = () => {
    const displayNumber = getDisplayNumber();
    let factorialResult = 1;
    for (let i = 2; i <= displayNumber; i++) {
        factorialResult *= i;
    }
    display.innerHTML = factorialResult;
};

const getSqrt = () => {
    const displayNumber = getDisplayNumber();
    display.innerHTML = Math.sqrt(displayNumber);
};

const getPower = () => {
    console.error('NOPE');
};

const equal = () => {
    display.innerHTML = eval(display.innerHTML);
};

const clearDisplay = () => {
    display.innerHTML = 0;
};

const functions = [
    {
        name: factorial,
        func: getFactorial
    },
    {
        name: sqrt,
        func: getSqrt
    },
    {
        name: power,
        func: getPower
    },
    {
        name: result,
        func: equal
    },
    {
        name: clear,
        func: clearDisplay
    }
];

functions.forEach(item => {
    item.name.addEventListener('click', item.func);
});

// factorial.addEventListener('click', getFactorial);
// sqrt.addEventListener('click', getSqrt);
// power.addEventListener('click', getPower);
// result.addEventListener('click', equal);
// clear.addEventListener('click', clearDisplay);