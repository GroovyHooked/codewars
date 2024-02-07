const countConsonants = require("./index.js")

test('test', () => {
  expect(countConsonants('sillystring')).toBe(7);
  expect(countConsonants('abcdefghijklmnopqrstuvwxyz')).toBe(21);
  expect(countConsonants('Count my unique consonants!!')).toBe(7);
  expect(countConsonants('gX4W5')).toBe(3);
  expect(countConsonants('CRSC6')).toBe(3);
  expect(countConsonants('0FygR')).toBe(4);
  expect(countConsonants('y1CDg')).toBe(4);
  expect(countConsonants('uT17S')).toBe(2);
  expect(countConsonants('Yxl6L')).toBe(3);
  expect(countConsonants('CrJaQ')).toBe(4);
  expect(countConsonants('LZowl')).toBe(3);
  expect(countConsonants('NHLBz')).toBe(5);
  expect(countConsonants('hJLiZ')).toBe(4);
  expect(countConsonants('TTnXc')).toBe(4);
});