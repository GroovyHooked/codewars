function interest(P, r, n) {
  let withInterest = P + P * r; 
  let base = 0; 
  for (let i = 2; i <= n; i++) {
      base = withInterest * r; 
      withInterest += base;
    }
  if (n === 0) return [Math.round(P + P * r * n), Math.round(P + P * r * n)];
  return [Math.round(P + P * r * n), Math.round(withInterest)];
}

module.exports = interest;
