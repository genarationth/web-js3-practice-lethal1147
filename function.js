const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

console.log(add(6,2));
console.log(subtract(6,2));
console.log(multiply(6,2));
console.log(divide(6,2));

const inform = (firstName,location,hobby) => {
    return `Hi my name is ${firstName} I live in ${location} and enjoy ${hobby}.`
}

console.log(inform('Joakim','Bangkok','Play game'));