const solution = (number) => {
  if (number < 0) return 0;
  let arr = [];
  for (let i = 1; i < number; i++) {
    i % 3 === 0 || i % 5 === 0 ? arr.push(i) : null;
  }
  return arr.length > 0 ? arr.reduce((acc, curr) => acc + curr) : 0;
};
