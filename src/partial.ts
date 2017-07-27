import { replacePlaceholderInArray } from './placeholder';

export const partial = (fn: Function, ...partialArgs: any[]) => (...otherArgs: any[]) => fn(...replacePlaceholderInArray(partialArgs, otherArgs));
