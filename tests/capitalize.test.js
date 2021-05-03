const { it, expect } = require('@jest/globals');
const capitalize = require ('../problems/capitalize');

// jest tests

// Test 1
it('Capitalize 1: word', () =>
    expect(capitalize(
        'word'
    )).toBe("Word"));

// Test 2
it('Capitalize 2: coffeE', () =>
    expect(capitalize(
        'coffeE'
    )).toBe("Coffee"));

// Test 3
it('Capitalize 3: TEST', () =>
    expect(capitalize(
        'TEST'
    )).toBe("Test"));