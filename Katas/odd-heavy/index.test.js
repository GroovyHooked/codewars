const isOddHeavy = require("./index.js");
test("test", () => {
  expect(isOddHeavy([0,2,19,4,4])).toBe(true);
  expect(isOddHeavy([1,-2,-1,2])).toBe(false);
  expect(isOddHeavy([ 6, 2, 4, 2, 2, 2, 1, 5, 0, -100 ])).toBe(false);
  expect(isOddHeavy([ 3, 2, 10, 4, 1, 6, 9 ])).toBe(false);
  expect(isOddHeavy([ 9, 0, 6 ])).toBe(true);
  expect(isOddHeavy([ 2, 2, 3, 3, 3 ])).toBe(true);
  expect(isOddHeavy([ -1, 1, -1, 2, 1, -1, 1, -2 ])).toBe(false);
  expect(isOddHeavy([ 1, 1, 15, -1, -1 ])).toBe(true);
  expect(isOddHeavy([ -1, -2, 21 ])).toBe(true);
  expect(isOddHeavy([ 1, -1, 3, -1 ])).toBe(true);
  expect(isOddHeavy([ -2, -4, -6, -8, -11 ])).toBe(false);
  expect(isOddHeavy([ 3 ])).toBe(true);
  expect(isOddHeavy([ 0, 2, 3 ])).toBe(true);
});
