export const eq = <T>(x: T) => (y: T) => x === y;
export const neq = <T>(x: T) => (y: T) => x !== y;

export const lt = <T>(x: T) => (y: T) => y < x;
export const lte = <T>(x: T) => (y: T) => y <= x;

export const gt = <T>(x: T) => (y: T) => y > x;
export const gte = <T>(x: T) => (y: T) => y >= x;
