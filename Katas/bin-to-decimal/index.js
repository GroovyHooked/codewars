const binToDec = (bin) => {
  const digits = Array.from(String(bin), (n) => Number(n));
  let power = digits.length;
  const modifiedDigits = digits.map((d) => {
    power--;
    return d * Math.pow(2, power);
  });
  return modifiedDigits.reduce((acc, curr) => acc + curr);
};

module.exports = binToDec
