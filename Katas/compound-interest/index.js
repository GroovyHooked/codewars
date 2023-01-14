function interest(P, r, n) {
  console.log(P, r, n);
  let withInterest = P + P * r;
  let base = 0;
  for (let i = 2; i <= n; i++) {
    if (i === 0) {
      continue;
    } else {
      base = withInterest * r;
      withInterest += base;
    }
  }
  if (n === 0) return [Math.round(P + P * r * n), Math.round(P + P * r * n)];
  console.log([Math.round(P + P * r * n), Math.round(withInterest)]);
  return [Math.round(P + P * r * n), Math.round(withInterest)];
}

module.exports = interest;
