const interest = require("./index.js");
test("test", () => {
  expect(interest(100, 0.1, 1)).toBe([110, 110]);
  expect(interest(100, 0.1, 2)).toBe([120, 121]);
  expect(interest(100, 0.1, 10)).toBe([200, 259]);
  expect(interest(7505, 0.3760540808126702, 33)).toBe([100640, 282047518]);
  expect(interest(6716, 0.2051344611382686, 2)).toBe([9471, 9754]);
  expect(interest(4443, 0.4145371629721235, 45)).toBe([87323, 26627021838]);
  expect(interest(7518, 0.32602903795839344, 18)).toBe([51638, 1207972]);
  expect(interest(1850, 0.42180835235166336, 18)).toBe([15896, 1043064]);
  expect(interest(3485, 0.7492510382163715, 41)).toBe([110542, 31560257405522]);
});
