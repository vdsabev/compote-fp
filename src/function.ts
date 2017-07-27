import { last } from './array';

export const cap = (f: Function, numberOfArguments = 1) => (...x: any[]) => f(...x.slice(0, numberOfArguments));

export const sequence = (...fns: Function[]) => (...args: any[]) => last(fns.map((fn) => fn(...args)));

export const promisify = (fn: Function) => (...args: any[]) => new Promise(
  (resolve: Function, reject: Function) => {
    fn(...args, (error: any, result: any) => {
      if (error) return reject(error);
      resolve(result);
    });
  }
);
