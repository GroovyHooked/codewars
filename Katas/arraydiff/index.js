const arrayDiff = (a, b) => {
  let subtraction;
  if (b.length < 1 || a.length < 1) {
    return a;
  } else if (b.length === 1) {
    subtraction = a.filter((number) => number !== b[0]);
  } else {
    subtraction = a.filter((number, index) => number !== b[index]);
  }

  return subtraction;
};
