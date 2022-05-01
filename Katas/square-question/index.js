const countSquares = (n) => {
  let howManySquares = 0;
  for (let i = 1; i <= n; i++) {
    howManySquares += i * i;
  }
  return howManySquares;
};

module.exports = countSquares;