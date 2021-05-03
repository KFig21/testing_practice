const { it, expect } = require('@jest/globals');
const calculator = require ('../problems/calculator');

// jest tests

// Test 1
it('Calculator 1: sum', () =>
    expect(calculator(
        "+", 1, 1
    )).toBe(2));

// Test 2
it('Calculator 2: sum, multiple nums', () =>
    expect(calculator(
        "add", 1, 2, 3, 4
    )).toBe(10));

// Test 3
it('Calculator 3: subtract', () =>
    expect(calculator(
        "-", 4, 2
    )).toBe(2));

// Test 4
it('Calculator 4: subtract, multiple nums', () =>
    expect(calculator(
        "subtract", 10, 5, 3, 1
    )).toBe(1));

// Test 5
it('Calculator 5: multiply', () =>
    expect(calculator(
        "*", 5, 5
    )).toBe(25));

// Test 6
it('Calculator 6: multiply, multiple nums', () =>
    expect(calculator(
        "multiply", 10, 10, 10
    )).toBe(1000));

// Test 7
it('Calculator 7: divide', () =>
    expect(calculator(
        "/", 10, 5
    )).toBe(2));

// Test 8
it('Calculator 8: divide, multiple nums', () =>
    expect(calculator(
        "divide", 100, 5, 2
    )).toBe(10));