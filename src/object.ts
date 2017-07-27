export const get = (deepKey: string) => (obj: any) => {
  const keys = deepKey.split('.');
  for (let key of keys) {
    const value = obj[key];
    if (value == null) return value;
    obj = value;
  }
  return obj;
};
export const set = (key: string) => <T>(obj: T, value: any): T => ({ ...(<any>obj), [key]: value });

export const keys = Object.keys;
export const values = (obj: any): any[] => keys(obj).map((key) => obj[key]);

export const freeze = Object.freeze;
export const seal = Object.seal;

export const setDefault = <T extends {}>(obj: T, value: any) => (key: keyof T) => {
  if (obj[key] == null) obj[key] = value;
};
