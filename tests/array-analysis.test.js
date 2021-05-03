const { it, expect } = require('@jest/globals');
const analyze = require ('../problems/array-analysis');

// jest tests

// Test 1
it('Array Analysis 1: TOP example', () =>
    expect(analyze(
        [1,8,3,4,2,6]
    )).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      }));

// Test 2
it('Array Analysis 2: all the same', () =>
    expect(analyze(
        [5,5,5,5,5]
    )).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 5
      }));