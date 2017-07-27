import 'jest';

import { match } from './string';

describe(`match`, () => {
  it(`should match string to regex`, () => {
    expect(match(/a/)('abc')[0]).toBe('a');
  });
});
