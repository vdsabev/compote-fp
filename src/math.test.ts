import 'jest';

import { add, sub, mul, div, div0, mod, sum, avg } from './math';

describe(`add`, () => {
  it(`should add numbers`, () => {
    expect(add(1)(2)).toBe(3);
  });
});

describe(`sub`, () => {
  it(`should subtract numbers`, () => {
    expect(sub(1)(2)).toBe(1);
  });
});

describe(`mul`, () => {
  it(`should multiply numbers`, () => {
    expect(mul(2)(3)).toBe(6);
  });
});

describe(`div`, () => {
  it(`should divide numbers`, () => {
    expect(div(5)(10)).toBe(2);
  });

  it(`should return Infinity when dividing by 0`, () => {
    expect(div(0)(10)).toBe(Infinity);
  });
});

describe(`div0`, () => {
  it(`should return 0 when dividing by 0`, () => {
    expect(div0(0)(10)).toBe(0);
  });

  it(`should be equivalent to div otherwise`, () => {
    expect(div0(5)(10)).toBe(div(5)(10));
  });
});

describe(`mod`, () => {
  it(`should return remainder`, () => {
    expect(mod(7)(10)).toBe(3);
  });

  it(`should return 0 for modulo 1`, () => {
    expect(mod(1)(10)).toBe(0);
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
