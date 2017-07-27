import 'jest';

import { createArray, arrayize, map, first, last, unique, sum, avg } from './array';

describe(`createArray`, () => {
  it(`should return an array`, () => {
    expect(createArray(1, 2, 3)).toEqual([1, 2, 3]);
  });
});

describe(`arrayize`, () => {
  it(`should wrap value in an array`, () => {
    expect(arrayize(1)).toEqual([1]);
  });

  it(`should not wrap value if already an array`, () => {
    const array = [1];
    expect(arrayize(array)).toBe(array);
  });
});

describe(`map`, () => {
  it(`should create a function`, () => {
    const double = map((x: number) => x * 2);
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
  });
});

describe(`first`, () => {
  it(`should return first array item when multiple items`, () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  it(`should return first array item when single item`, () => {
    expect(first([1])).toBe(1);
  });

  it(`should return undefined when no items`, () => {
    expect(first([])).toBe(undefined);
  });

  it(`should return undefined when null`, () => {
    expect(first(null)).toBe(undefined);
  });
});

describe(`last`, () => {
  it(`should return last array item when multiple items`, () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  it(`should return last array item when single item`, () => {
    expect(last([1])).toBe(1);
  });

  it(`should return undefined when no items`, () => {
    expect(last([])).toBe(undefined);
  });

  it(`should return undefined when null`, () => {
    expect(last(null)).toBe(undefined);
  });
});

describe(`unique`, () => {
  it(`should return unique items`, () => {
    expect([1, 2, 3, 4, 5, 2, 3, 1, 5, 6].filter(unique)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe(`sum`, () => {
  it(`should return sum of all numbers`, () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});

describe(`avg`, () => {
  it(`should return average of all numbers`, () => {
    expect(avg([1, 2, 3])).toBe(2);
  });
});
