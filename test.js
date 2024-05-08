const readline = require('readline');

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            const calculator = new Calculator();
            num1 = Number(num1);
            num2 = Number(num2);

            switch (operation) {
                case 'add':
                    console.log(calculator.add(num1, num2));
                    break;
                case 'subtract':
                    console.log(calculator.subtract(num1, num2));
                    break;
                case 'multiply':
                    console.log(calculator.multiply(num1, num2));
                    break;
                case 'divide':
                    console.log(calculator.divide(num1, num2));
                    break;
                default:
                    console.log('Invalid operation. Please choose from "add", "subtract", "multiply", or "divide".');
            }

            rl.close();
        });
    });
});