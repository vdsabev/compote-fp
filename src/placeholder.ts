import { eq } from './compare';
import { contains } from './utils';
import { keys, freeze } from './object';

export const _: any = freeze({ type: 'placeholder' }); // Placeholder

export const isPlaceholder = eq(_);
export const hasPlaceholder = contains(_);

export const replacePlaceholderInObject = <T extends {}>(placeholderObject: T, replacementValue: any): T => {
  const replacedObject = <T>{};
  keys(placeholderObject).map((key) => {
    const value = (<any>placeholderObject)[key];
    (<any>replacedObject)[key] = isPlaceholder(value) ? replacementValue : value;
  });

  return replacedObject;
};

export const replacePlaceholderInArray = <T>(placeholderArray: T[], replacementValues: (T | any)[]): (T | undefined)[] => {
  const replacementValuesCopy = replacementValues.slice();
  const replacedArray = placeholderArray.map((item) => {
    if (isPlaceholder(item)) return replacementValuesCopy.shift();

    if (hasPlaceholder(item)) return replacePlaceholderInObject(item, replacementValuesCopy.shift());

    return item;
  });

  return replacedArray.concat(replacementValuesCopy);
};
