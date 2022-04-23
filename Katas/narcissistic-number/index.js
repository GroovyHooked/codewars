const narcissistic = (value) => {
  if (value < 0) {
    return false;
  }
  const digits = Array.from(String(value), (n) => Number(n));
  const arrLength = digits.length;
  if (arrLength === 1) return true;

  const sumOfDigitsRaised = digits.reduce(
    (acc, curr) => acc + Math.pow(curr, arrLength),
    0
  );
  return sumOfDigitsRaised === value;
};

module.exports = narcissistic
