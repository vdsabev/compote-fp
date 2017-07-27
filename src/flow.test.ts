import 'jest';

import { constant, identity } from './combinator';
import { left, right, ternary } from './flow';

describe(`left`, () => {
  it(`should call left function with rest arguments when value is true`, () => {
    const l = jest.fn(); const r = jest.fn();
    left(l, r)(true, 'a', 'b');
    expect(l).toHaveBeenLastCalledWith(true, 'a', 'b');
    expect(r).not.toHaveBeenCalled();
  });

  it(`should call right function with rest arguments when value is false`, () => {
    const l = jest.fn(); const r = jest.fn();
    left(l, r)(false, 'a', 'b');
    expect(l).not.toHaveBeenCalled();
    expect(r).toHaveBeenLastCalledWith(false, 'a', 'b');
  });
});

describe(`right`, () => {
  it(`should call right function with rest arguments when value is true`, () => {
    const l = jest.fn(); const r = jest.fn();
    right(l, r)(true, 'a', 'b');
    expect(l).not.toHaveBeenCalled();
    expect(r).toHaveBeenLastCalledWith(true, 'a', 'b');
  });

  it(`should call left function with rest arguments when value is false`, () => {
    const l = jest.fn(); const r = jest.fn();
    right(l, r)(false, 'a', 'b');
    expect(l).toHaveBeenLastCalledWith(false, 'a', 'b');
    expect(r).not.toHaveBeenCalled();
  });
});

describe(`ternary`, () => {
  const tern = ternary(identity, constant(true), constant(false));

  it(`should execute left function when condition is true`, () => {
    expect(tern(true)).toBe(true);
  });

  it(`should execute right function when condition is false`, () => {
    expect(tern(false)).toBe(false);
  });
});
