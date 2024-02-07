const interest = require("./index.js");
test("test", () => {
  expect(interest(100, 0.1, 1)).toStrictEqual([110, 110]);
  expect(interest(100, 0.1, 2)).toStrictEqual([120, 121]);
  expect(interest(100, 0.1, 10)).toStrictEqual([200, 259]);
  expect(interest(7505, 0.3760540808126702, 33)).toStrictEqual([100640, 282047518]);
  expect(interest(6716, 0.2051344611382686, 2)).toStrictEqual([9471, 9754]);
  expect(interest(4443, 0.4145371629721235, 45)).toStrictEqual([87323, 26627021838]);
  expect(interest(7518, 0.32602903795839344, 18)).toStrictEqual([51638, 1207972]);
  expect(interest(1850, 0.42180835235166336, 18)).toStrictEqual([15896, 1043064]);
  expect(interest(3485, 0.7492510382163715, 41)).toStrictEqual([110542, 31560257405522]);
});
