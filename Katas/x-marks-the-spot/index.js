const xMarksTheSpot = (input) => {
  let count = 0;
  let arr = [];
  input.forEach((array, x) => {
    array.forEach((car, y) => {
      if (car === "x") {
        count++;
        count === 1 ? arr.push(x, y) : null;
      }
    });
  });
  if (count === 0 || count > 1) return [];
  return arr;
};
