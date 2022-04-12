const narcissistic = (value) => {
  if (value < 0) {
    return false;
  }
  const valueToArray = Array.from(String(value), (n) => Number(n));
  const arrLength = valueToArray.length;
  if (arrLength === 1) return true;

  const total = valueToArray.reduce(
    (acc, curr) => acc + Math.pow(curr, arrLength),
    0
  );
  return total === value;
};
