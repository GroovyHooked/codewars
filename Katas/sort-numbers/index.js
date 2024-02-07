const solution = (nums) => {
  return nums ? nums.sort((a, b) => { return a - b }) : [];
};
