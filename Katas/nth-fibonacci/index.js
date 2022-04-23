const nthFibo = (n) => {
  if (n === 1) return 0;
  if (n < 3) return 1;

  let prev = 1;
  let curr = 1;
  for (let i = 2; i < n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return prev;
};
module.exports = nthFibo;