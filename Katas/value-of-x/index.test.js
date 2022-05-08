const valueOfX = require("./index.js");
test("test", () => {
  expect(valueOfX('x + 1 = 9 - 2')).toBe(6);
  expect(valueOfX('x - 2 + 3 = 2')).toBe(1);
  expect(valueOfX('x = + 2 - 5 + 9')).toBe(6);
  expect(valueOfX('- 10 = x')).toBe(-10);
  expect(valueOfX('- x = - 1')).toBe(1);
  expect(valueOfX('x - 0 + 0 = 0')).toBe(0);
  expect(valueOfX('- 10 = x')).toBe(-10);
  expect(valueOfX('9 - 1 = - x + 10')).toBe(2);
  expect(valueOfX('x + 1000 - 956 = 467')).toBe(423);
  expect(valueOfX('- 357 = - x')).toBe(357);
  expect(valueOfX('x - 100 - 65 + 63 - 108 = - 95 - 41 + 70 - 106')).toBe(38);
  expect(valueOfX('- x - 1 = 8')).toBe(-9);
  expect(valueOfX('10 + x = 77')).toBe(67);
});


