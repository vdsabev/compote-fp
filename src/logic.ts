export const all = (...fs: Function[]) => (...args: any[]) => {
  for (let f of fs) {
    if (!f(...args)) return false;
  }
  return true;
};

export const any = (...fs: Function[]) => (...args: any[]) => {
  for (let f of fs) {
    if (f(...args)) return true;
  }
  return false;
};
