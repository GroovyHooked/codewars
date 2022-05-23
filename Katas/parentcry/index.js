const findChildren = (dancingBrigade) => {
  let upperCaseIndex = 0;
  let sliceIndex = 0;
  let prev = "";
  let result = "";
  const chars = [...dancingBrigade].sort();
  chars.forEach((el, index) => {
    el === el.toUpperCase() ? (upperCaseIndex = index) : null;
  });
  upperCaseIndex++;
  const slice = chars.slice(0, upperCaseIndex);
  for (let i = 0; i < upperCaseIndex; i++) chars.shift();
  chars.forEach((char, index) => {
    if (index === 0 || prev !== char) {
      result += slice[sliceIndex];
      prev = char;
      sliceIndex++;
    }
    result += char;
  });
  return result;
};

module.exports = findChildren;