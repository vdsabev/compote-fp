import 'jest';

import { createArray, sum } from './array';
import { eq } from './compare';
import { pipe } from './combinator';

import { all, any } from './logic';

const compareSumTo = (x: number) => pipe(createArray, sum, eq(x));

describe(`all`, () => {
  it(`should return true when all functions return truthy values`, () => {
    expect(all(compareSumTo(6), compareSumTo(6))(1, 2, 3)).toBe(true);
  });

  it(`should return false when any function returns a falsy value`, () => {
    expect(all(compareSumTo(6), compareSumTo(5))(1, 2, 3)).toBe(false);
  });

  it(`should return false when all functions return falsy values`, () => {
    expect(all(compareSumTo(4), compareSumTo(3))(1, 2, 3)).toBe(false);
  });
});

describe(`any`, () => {
  it(`should return true when any function returns a truthy value`, () => {
    expect(any(compareSumTo(6), compareSumTo(5))(1, 2, 3)).toBe(true);
  });

  it(`should return false when all functions return falsy values`, () => {
    expect(any(compareSumTo(4), compareSumTo(3))(1, 2, 3)).toBe(false);
  });
});
