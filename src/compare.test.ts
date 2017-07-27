import 'jest';

import { eq, neq, lt, lte, gt, gte } from './compare';

describe(`eq`, () => {
  const eq1 = eq(1);

  it(`should return true when values are equal`, () => {
    expect(eq1(1)).toBe(true);
  });

  it(`should return false when values are not equal`, () => {
    expect(eq1(2)).toBe(false);
  });

  it(`should use strict equality`, () => {
    expect(eq1(<any>'1')).toBe(false);
  });
});

describe(`neq`, () => {
  const neq1 = neq(1);

  it(`should return false when values are equal`, () => {
    expect(neq1(1)).toBe(false);
  });

  it(`should return true when values are not equal`, () => {
    expect(neq1(2)).toBe(true);
  });

  it(`should use strict equality`, () => {
    expect(neq1(<any>'1')).toBe(true);
  });
});

describe(`lt`, () => {
  const isNegative = lt(0);

  it(`should return true when y < x`, () => {
    expect(isNegative(-1)).toBe(true);
  });

  it(`should return false when y === x`, () => {
    expect(isNegative(0)).toBe(false);
  });

  it(`should return false when y > x`, () => {
    expect(isNegative(1)).toBe(false);
  });
});

describe(`lte`, () => {
  const isNegativeOrZero = lte(0);

  it(`should return true when y < x`, () => {
    expect(isNegativeOrZero(-1)).toBe(true);
  });

  it(`should return true when y === x`, () => {
    expect(isNegativeOrZero(0)).toBe(true);
  });

  it(`should return false when y > x`, () => {
    expect(isNegativeOrZero(1)).toBe(false);
  });
});

describe(`gt`, () => {
  const isPositive = gt(0);

  it(`should return false when y < x`, () => {
    expect(isPositive(-1)).toBe(false);
  });

  it(`should return false when y === x`, () => {
    expect(isPositive(0)).toBe(false);
  });

  it(`should return true when y > x`, () => {
    expect(isPositive(1)).toBe(true);
  });
});

describe(`gte`, () => {
  const isPositiveOrZero = gte(0);

  it(`should return false when y < x`, () => {
    expect(isPositiveOrZero(-1)).toBe(false);
  });

  it(`should return true when y === x`, () => {
    expect(isPositiveOrZero(0)).toBe(true);
  });

  it(`should return true when y > x`, () => {
    expect(isPositiveOrZero(1)).toBe(true);
  });
});
