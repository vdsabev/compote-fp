export const invoke = (fnName: string, ...args: any[]) => (obj: any) => obj[fnName](...args);
