const countSquares = require("./index.js");
test("test", () => {
  expect(countSquares(1)).toBe(1);
  expect(countSquares(2)).toBe(5);
  expect(countSquares(5)).toBe(55);
  expect(countSquares(15)).toBe(1240);
  expect(countSquares(7)).toBe(140);
  expect(countSquares(12)).toBe(650);
  expect(countSquares(14)).toBe(1015);
  expect(countSquares(17)).toBe(1785);
  expect(countSquares(16)).toBe(1496);
  expect(countSquares(21)).toBe(3311);
  expect(countSquares(20)).toBe(2870);
  expect(countSquares(6)).toBe(91);
});
