export const prefix = {
  M: 6,
  k: 3,
  F: 0,
  d: -1,
  c: -2,
  m: -3,
  u: -6,
  n: -9,
  p: -12
}

export const validUnits =(() => {
  return Object.keys(prefix);
})();
