import 'jest';

import { contains, assertNever, result, type, is } from './utils';

describe(`contains`, () => {
  const contains2 = contains(2);
  const contains2And3 = contains(2, 3);

  it(`should return true if array contains value`, () => {
    expect(contains2([1, 2, 3])).toBe(true);
  });

  it(`should return false if array doesn't contain value`, () => {
    expect(contains2([4, 5, 6])).toBe(false);
  });

  it(`should return true if array contains all values`, () => {
    expect(contains2And3([1, 2, 3])).toBe(true);
  });

  it(`should return false if array doesn't contain all values`, () => {
    expect(contains2And3([3, 4, 5])).toBe(false);
  });

  it(`should return false if array doesn't contain any values`, () => {
    expect(contains2And3([4, 5, 6])).toBe(false);
  });

  it(`should return true if object contains value`, () => {
    expect(contains2({ a: 1, b: 2, c: 3 })).toBe(true);
  });

  it(`should return false if object doesn't contain value`, () => {
    expect(contains2({ a: 4, b: 5, c: 6 })).toBe(false);
  });

  it(`should return true if object contains all values`, () => {
    expect(contains2And3({ a: 1, b: 2, c: 3 })).toBe(true);
  });

  it(`should return false if object doesn't contain all values`, () => {
    expect(contains2And3({ a: 3, b: 4, c: 5 })).toBe(false);
  });

  it(`should return false if object doesn't contain any values`, () => {
    expect(contains2And3({ a: 4, b: 5, c: 6 })).toBe(false);
  });

  it(`should return false for null`, () => {
    expect(contains2(null)).toBe(false);
  });

  it(`should return false for undefined`, () => {
    expect(contains2(undefined)).toBe(false);
  });
});

describe(`assertNever`, () => {
  it(`should throw an error when called`, () => {
    expect(assertNever).toThrowError(`Unexpected object`);
  });

  it(`should not throw an error when not called`, () => {
    expect(() => {
      const x = 0;
      if (typeof x === 'string') {
        assertNever(x);
      }
    }).not.toThrowError();
  });
});

describe(`type`, () => {
  it(`should return type of number`, () => {
    expect(type(1)).toBe('number');
  });

  it(`should return type of string`, () => {
    expect(type('a')).toBe('string');
  });

  it(`should return type of function`, () => {
    expect(type(() => 0)).toBe('function');
  });

  it(`should return type of object`, () => {
    expect(type({})).toBe('object');
  });

  it(`should return type of null`, () => {
    expect(type(null)).toBe('object');
  });

  it(`should return type of undefined`, () => {
    expect(type(undefined)).toBe('undefined');
  });
});

describe(`is`, () => {
  it(`should compare type of number`, () => {
    const isNumber = is('number');
    expect(typeof isNumber).toBe('function');
    expect(isNumber(1)).toBe(true);
    expect(isNumber('1')).toBe(false);
  });

  it(`should compare type of string`, () => {
    const isString = is('string');
    expect(isString('1')).toBe(true);
    expect(isString(1)).toBe(false);
  });
});

describe(`result`, () => {
  it(`should return value`, () => {
    expect(result(1)).toBe(1);
  });

  it(`should call function`, () => {
    expect(result(() => 1)).toBe(1);
  });

  it(`should call function with args`, () => {
    expect(result((a: number, b: number) => a + b, 2, 2)).toBe(4);
  });
});
