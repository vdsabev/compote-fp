import 'jest';

import { _, isPlaceholder, hasPlaceholder, replacePlaceholderInObject, replacePlaceholderInArray } from './placeholder';

describe(`isPlaceholder`, () => {
  it(`should return true for _`, () => {
    expect(isPlaceholder(_)).toBe(true);
  });

  it(`should return false for anything else`, () => {
    expect(isPlaceholder({ type: 'placeholder' })).toBe(false);
  });
});

describe(`hasPlaceholder`, () => {
  it(`should return true if array contains placeholder`, () => {
    expect(hasPlaceholder([1, _, 3])).toBe(true);
  });

  it(`should return true if array only contains placeholders`, () => {
    expect(hasPlaceholder([_, _])).toBe(true);
  });

  it(`should return false if array doesn't contain placeholder`, () => {
    expect(hasPlaceholder([1, 2, 3])).toBe(false);
  });

  it(`should return true if object contains placeholder`, () => {
    expect(hasPlaceholder({ a: 1, b: _, c: 3 })).toBe(true);
  });

  it(`should return true if object only contains placeholders`, () => {
    expect(hasPlaceholder({ a: _, b: _ })).toBe(true);
  });

  it(`should return false if object doesn't contain placeholder`, () => {
    expect(hasPlaceholder({ a: 1, b: 2, c: 3 })).toBe(false);
  });
});

describe(`replacePlaceholderInObject`, () => {
  it(`00`, () => {
    expect(replacePlaceholderInObject({ a: 1, b: 2 }, 3)).toEqual({ a: 1, b: 2 });
  });

  it(`01`, () => {
    expect(replacePlaceholderInObject({ a: 1, b: _ }, 3)).toEqual({ a: 1, b: 3 });
  });

  it(`10`, () => {
    expect(replacePlaceholderInObject({ a: _, b: 2 }, 3)).toEqual({ a: 3, b: 2 });
  });

  it(`11`, () => {
    expect(replacePlaceholderInObject({ a: _, b: _ }, 3)).toEqual({ a: 3, b: 3 });
  });
});

describe(`replacePlaceholderInArray`, () => {
  it(`should replace array values: 000`, () => {
    expect(replacePlaceholderInArray([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it(`should replace array values: 001`, () => {
    expect(replacePlaceholderInArray([1, 2, _], [4, 5, 6])).toEqual([1, 2, 4, 5, 6]);
  });

  it(`should replace array values: 010`, () => {
    expect(replacePlaceholderInArray([1, _, 3], [4, 5, 6])).toEqual([1, 4, 3, 5, 6]);
  });

  it(`should replace array values: 011`, () => {
    expect(replacePlaceholderInArray([1, _, _], [4, 5, 6])).toEqual([1, 4, 5, 6]);
  });

  it(`should replace array values: 100`, () => {
    expect(replacePlaceholderInArray([_, 2, 3], [4, 5, 6])).toEqual([4, 2, 3, 5, 6]);
  });

  it(`should replace array values: 101`, () => {
    expect(replacePlaceholderInArray([_, 2, _], [4, 5, 6])).toEqual([4, 2, 5, 6]);
  });

  it(`should replace array values: 110`, () => {
    expect(replacePlaceholderInArray([_, _, 3], [4, 5, 6])).toEqual([4, 5, 3, 6]);
  });

  it(`should replace array values: 111`, () => {
    expect(replacePlaceholderInArray([_, _, _], [4, 5, 6])).toEqual([4, 5, 6]);
  });

  it(`should replace object values`, () => {
    type ABC = { a?: number, b?: number, c?: number };
    const array = replacePlaceholderInArray<ABC>([{ a: _, b: _ }, { a: _, c: _ }, { b: _, c: _ }], [4, 5, 6]);
    expect(array).toEqual([{ a: 4, b: 4 }, { a: 5, c: 5 }, { b: 6, c: 6 }]);
  });
});
