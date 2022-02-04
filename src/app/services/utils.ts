export const objToKeyValueArr = (obj: any) => Object.keys(obj).map((key) => ({
  key,
  value: obj[key],
}));
