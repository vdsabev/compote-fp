import 'jest';

import { partial } from './partial';

describe(`partial`, () => {
  const add = (a: number, b = 0, c = 0) => a + b + c;
  const append = (a: string, b = '', c = '') => a + b + c;

  it(`should call the function with 1 partial argument`, () => {
    const add1 = partial(add, 1);
    expect(add1(2, 3)).toBe(6);
  });

  it(`should call the function with 2 partial arguments`, () => {
    const add1And2 = partial(add, 1, 2);
    expect(add1And2(3)).toBe(6);
  });

  it(`should call the function with 3 partial arguments`, () => {
    const add1And2And3 = partial(add, 1, 2, 3);
    expect(add1And2And3()).toBe(6);
  });
});
