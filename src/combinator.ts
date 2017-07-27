// S
export const substitution = (f: Function) => (g: Function) => (...x: any[]) => f(...x)(g(...x));

// K
export const constant = <T>(x: T) => () => x;

// I
export const identity = <T>(x: T): T => x;

// Pipe
export const pipe = (...fs: Function[]) => (...x: any[]): any => fs.slice(1).reduce((result, f) => f(result), fs[0](...x));

// Compose
export const compose = (...fs: Function[]) => pipe(...fs.slice().reverse());

// Invert
export const invert = (f: Function) => (...x: any[]) => (...y: any[]) => f(...y)(...x);

// Not
export const not = (f: Function) => (...x: any[]) => !f(...x);
