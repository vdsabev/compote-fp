import { invoke } from './invoke';
import { partial } from './partial';

export const match = partial(invoke, 'match');
export const replace = partial(invoke, 'replace');
export const split = partial(invoke, 'split');
