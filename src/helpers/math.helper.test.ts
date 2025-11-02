import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe('add', () => {
    test('should add two positive numbers', () => { 
        // !1. Arrange
        const a = 1;
        const b = 2;
        // !2. Act
        const result = add(a, b);
        // !3. Assert
        expect(result).toBe(a+b);
     });

    test('should add two negative numbers', () => { 
        const a = -5;
        const b = -1;

        const result = add(a, b);

        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        const a = 2;
        const b = 1;

        const result = subtract(a, b);

        expect(result).toBe(a-b);
    });

    test('should subtract one positive number and the other a negative number', () => { 
        const a = 5;
        const b = -5;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => { 
    test('should multiply two positive numbers', () => { 
        const a = 2;
        const b = 3;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('should multiply two positive number, one of them is zero', () => { 
        const a = 2;
        const b = 0;

        const result = multiply(a, b);

        expect(result).toBe(0);
     })
});

describe('divide', () => { 
    test('should divide two positive numbers', () => { 
        const a = 6;
        const b = 2;

        const result = divide(a, b);

        expect(result).toBe(a / b);
    });

});