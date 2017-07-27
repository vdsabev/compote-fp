import 'jest';

import { get, set, keys, values, setDefault } from './object';

describe(`get`, () => {
  const getName = get('name');
  const getABC = get('a.b.c');

  it(`should get a property`, () => {
    expect(getName({ id: 0, name: 'a' })).toBe('a');
  });

  it(`should get deep property`, () => {
    expect(getABC({ a: { b: { c: 'a' } } })).toBe('a');
  });

  it(`should safely return null or undefined when we can't go any deeper`, () => {
    expect(getABC({ a: { b: null } })).toBe(null);
    expect(getABC({ a: { b: undefined } })).toBe(undefined);
  });
});

describe(`set`, () => {
  it(`should create a function that sets property`, () => {
    const setName = set('name');
    expect(typeof setName).toBe('function');
    const userA = { id: 0, name: 'a' };
    const userB = setName(userA, 'b');
    expect(userB.name).toBe('b');
    expect(userB).not.toBe(userA);
  });
});

describe(`keys`, () => {
  it(`should be Object.keys`, () => {
    expect(keys).toBe(Object.keys);
  });
});

describe(`values`, () => {
  it(`should return object values`, () => {
    expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  });
});

describe(`setDefault`, () => {
  it(`should not change object value if defined`, () => {
    const oldValue = { a: 1 };
    const obj = { value: oldValue };
    const newValue = { b: 2 };
    setDefault(obj, newValue)('value');
    expect(obj.value).toBe(oldValue);
  });

  it(`should change object value if null`, () => {
    const oldValue = null;
    const obj = { value: oldValue };
    const newValue = { b: 2 };
    setDefault(obj, newValue)('value');
    expect(obj.value).toBe(newValue);
  });
});
