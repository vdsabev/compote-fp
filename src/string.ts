import { invoke } from './invoke';
import { partial } from './partial';

export const match: (x: RegExp) => (y: string) => RegExpMatchArray | null = partial(invoke, 'match');
export const replace: (x: string | RegExp, y: string) => (z: string) => string = partial(invoke, 'replace');
export const split: (x: string | RegExp) => (y: string) => string[] = partial(invoke, 'split');
