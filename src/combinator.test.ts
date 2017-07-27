import 'jest';

import { eq } from './compare';
import { substitution, constant, identity, compose, pipe, invert, not } from './combinator';

describe(`substitution`, () => {
  const add = (x: number) => (y: number) => x + y;
  const multiply = (x: number) => (y: number) => x * y;
  const double = (x: number) => x * 2;

  it(`should`, () => {
    expect(substitution(add)(double)(1)).toBe(3);
  });

  it(`should`, () => {
    expect(substitution(multiply)(double)(1)).toBe(2);
  });
});

describe(`constant`, () => {
  it(`should return a function`, () => {
    expect(typeof constant('a')).toBe('function');
  });

  it(`should return the value passed when called`, () => {
    expect(constant('a')()).toBe('a');
  });
});

describe(`identity`, () => {
  it(`should return 1 for 1`, () => {
    expect(identity(1)).toBe(1);
  });

  it(`should return a for a`, () => {
    expect(identity('a')).toBe('a');
  });

  it(`should return itself`, () => {
    expect(identity(identity)).toBe(identity);
  });
});

describe(`pipe`, () => {
  const add1 = (value: number) => value + 1;
  const multiplyBy2 = (value: number) => value * 2;

  it(`should call left function, then right function`, () => {
    const result = pipe(add1, multiplyBy2)(0);
    expect(result).toBe(2);
  });

  it(`should call left function, then right function`, () => {
    const result = pipe(add1, multiplyBy2, add1, multiplyBy2)(0);
    expect(result).toBe(6);
  });
});

describe(`compose`, () => {
  const add1 = (value: number) => value + 1;
  const multiplyBy2 = (value: number) => value * 2;

  it(`should call right function, then left function`, () => {
    const result = compose(add1, multiplyBy2)(0);
    expect(result).toBe(1);
  });

  it(`should compose more than 2 functions`, () => {
    const result = compose(add1, multiplyBy2, add1, multiplyBy2)(0);
    expect(result).toBe(3);
  });
});

describe(`invert`, () => {
  it(`should switch argument order`, () => {
    const divide = (x: number) => (y: number) => x / y;
    expect(divide(10)(5)).toBe(invert(divide)(5)(10));
  });
});

describe(`not`, () => {
  const neq = compose(not, eq);

  it(`should return the opposite result`, () => {
    expect(neq(1)(2)).toBe(true);
  });

  it(`should return the opposite result`, () => {
    expect(neq(1)(1)).toBe(false);
  });
});
