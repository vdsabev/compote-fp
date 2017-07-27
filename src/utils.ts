import { eq } from './compare';
import { compose, invert, not } from './combinator';
import { get, keys, values } from './object';

// TODO: Rewrite in point-free style
export const contains = (...valuesToFind: any[]) => <T>(obj: T): boolean => {
  const getLength = get('length');
  const hasSameLengthAs = compose(eq, getLength);
  const hasSameLengthAsValues = compose(hasSameLengthAs(valuesToFind), getLength);

  if (Array.isArray(obj)) return hasSameLengthAsValues(valuesToFind.filter((value) => obj.indexOf(value) !== -1));

  if (obj && typeof obj === 'object') {
    const objValues = values(obj);
    return hasSameLengthAsValues(valuesToFind.filter((value) => objValues.indexOf(value) !== -1));
  }

  return false;
};

export const isContained = invert(contains);

export const assertNever = (obj: never) => {
  throw new Error('Unexpected object');
};

export const type = (value: any) => typeof value;

export const is = (typeToCompare: string) => compose(eq(typeToCompare), type);

export const result = <T>(value: T | ((...args: any[]) => T), ...args: any[]): T => typeof value === 'function' ? value(...args) : value;
