import { reduce } from './array';
import { compose, substitution } from './combinator';
import { get } from './object';

export const add = (x: number) => (y: number) => y + x;
export const sub = (x: number) => (y: number) => y - x;
export const mul = (x: number) => (y: number) => y * x;
export const div = (x: number) => (y: number) => y / x;
export const div0 = (x: number) => (y: number) => x === 0 ? 0 : y / x;
export const mod = (x: number) => (y: number) => y % x;

export const sum = reduce((x: number, y: number) => x + y, 0);

const safelyDivideByLength = compose(div0, get('length'));
export const avg = substitution(safelyDivideByLength)(sum);
