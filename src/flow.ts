export const left = (f: Function, g: Function) => (x: any, ...y: any[]) => x ? f(x, ...y) : g(x, ...y);
export const right = (f: Function, g: Function) => (x: any, ...y: any[]) => x ? g(x, ...y) : f(x, ...y);

export const ternary = (f: Function, g: Function, h: Function) => (...x: any[]) => f(...x) ? g(...x) : h(...x);
