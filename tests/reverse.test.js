const { it, expect } = require('@jest/globals');
const reverse = require ('../problems/reverse');

// jest tests

// Test 1
it('Reverse 1: word:drow', () =>
    expect(reverse(
        'word'
    )).toBe("drow"));

// Test 2
it('Reverse 2: eeffoC:Coffee', () =>
    expect(reverse(
        'eeffoC'
    )).toBe("Coffee"));

// Test 3
it('Reverse 3: testING:GNItset', () =>
    expect(reverse(
        'testING'
    )).toBe("GNItset"));