import { identity, compose, substitution } from './combinator';
import { ternary } from './flow';
import { invoke } from './invoke';
import { div0 } from './math';
import { partial } from './partial';
import { get } from './object';

export const isArray: (array: any[]) => boolean = Array.isArray;
export const createArray = <T>(...x: T[]) => x;
export const arrayize: <T>(array: T | T[]) => T[] = ternary(isArray, identity, createArray);

export const filter = partial(invoke, 'filter');
export const find = partial(invoke, 'find');
export const join = partial(invoke, 'join');
export const map = partial(invoke, 'map');
export const reduce = partial(invoke, 'reduce');

export const pluck = compose(map, get);

export const first = <T>(array: T[] | null): T | undefined => array ? array[0] : undefined;
export const last = <T>(array: T[] | null): T | undefined => array ? array[array.length - 1] : undefined;

export const unique = <T>(item: T, index: number, array: T[]) => array.indexOf(item) === index;

export const sum: (array: number[]) => number = reduce((x: number, y: number) => x + y, 0);

const safelyDivideByLength = compose(div0, get('length'));
export const avg: (array: number[]) => number = substitution(safelyDivideByLength)(sum);
