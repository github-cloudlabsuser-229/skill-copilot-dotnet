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

// Usage
const calculator = new Calculator();

// Get operation and numbers from command line arguments
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Perform the operation
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