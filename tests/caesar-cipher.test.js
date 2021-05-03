const { it, expect } = require('@jest/globals');
const caeser = require ('../problems/caeser-cipher');

// jest tests

// Test 1
it('Caeser-Cipher 1: testing', () =>
    expect(caeser(
        "testing", 5
    )).toBe("yjxynsl"));

// Test 2
it('Caeser-Cipher 2: tEsTiNg XjYz', () =>
    expect(caeser(
        "tEsTiNg XjYz", 5
    )).toBe("yJxYnSl CoDe"));

// Test 3
it('Caeser-Cipher 3: shift 125', () =>
    expect(caeser(
        "abCDefGH", 125
    )).toBe("vwXYzaBC"));

// Test 4
it('Caeser-Cipher 4: no shift', () =>
    expect(caeser(
        "abc"
    )).toBe("bcd"));