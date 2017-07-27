import 'jest';

import { isContained } from './utils';
import { cap, sequence, promisify } from './function';

describe(`cap`, () => {
  const isDigit = isContained([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  it(`should set 1 argument by default`, () => {
    const isDigitFirst = cap(isDigit);
    expect(isDigitFirst(1, 2, 3)).toEqual(true);
    expect(isDigitFirst(1, 2, 30)).toEqual(true);
    expect(isDigitFirst(1, 20, 30)).toEqual(true);
    expect(isDigitFirst(10, 20, 30)).toEqual(false);
  });

  it(`should allow setting 2 arguments`, () => {
    const isDigitFirst2 = cap(isDigit, 2);
    expect(isDigitFirst2(1, 2, 3)).toEqual(true);
    expect(isDigitFirst2(1, 2, 30)).toEqual(true);
    expect(isDigitFirst2(1, 20, 30)).toEqual(false);
    expect(isDigitFirst2(10, 20, 30)).toEqual(false);
  });

  it(`should allow setting more than the total number of passed arguments`, () => {
    const isDigitFirst10 = cap(isDigit, 10);
    expect(isDigitFirst10(1, 2, 3)).toEqual(true);
    expect(isDigitFirst10(1, 2, 30)).toEqual(false);
    expect(isDigitFirst10(1, 20, 30)).toEqual(false);
    expect(isDigitFirst10(10, 20, 30)).toEqual(false);
  });
});

describe(`sequence`, () => {
  const double = (n: number) => n * 2;
  const tripple = (n: number) => n * 3;
  const quadrupple = (n: number) => n * 4;

  it(`should execute 1 function`, () => {
    expect(sequence(double)(2)).toBe(4);
  });

  it(`should execute 2 functions and return last result`, () => {
    expect(sequence(double, tripple)(2)).toBe(6);
  });

  it(`should execute 3 functions and return last result`, () => {
    expect(sequence(double, tripple, quadrupple)(2)).toBe(8);
  });
});

describe(`promisify`, () => {
  const asyncDiv = (a: number, b: number, callback: Function) => {
    if (!b) return callback('Division by 0!');
    callback(null, a / b);
  };

  it(`should return a function`, () => {
    const fn = jest.fn();
    const promisifiedFn = promisify(fn);
    expect(typeof promisifiedFn).toBe('function');
  });

  it(`should return a promise when called`, () => {
    const fn = jest.fn();
    const promisifiedFn = promisify(fn);
    expect(promisifiedFn()).toBeInstanceOf(Promise);
  });

  it(`should resolve promise`, async () => {
    const promisifiedDiv = promisify(asyncDiv);
    const errorHandler = jest.fn();
    expect(await promisifiedDiv(2, 2).catch(errorHandler)).toBe(1);
    expect(errorHandler).not.toHaveBeenCalled();
  });

  it(`should reject promise`, async () => {
    const promisifiedDiv = promisify(asyncDiv);
    const errorHandler = jest.fn();
    expect(await promisifiedDiv(2, 0).catch(errorHandler)).toBe(undefined);
    expect(errorHandler).toHaveBeenLastCalledWith('Division by 0!');
  });
});
