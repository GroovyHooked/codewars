const binToDec = require("./index.js");
test("test", () => {
  expect(binToDec('1')).toBe(1);
  expect(binToDec('0')).toBe(0);
  expect(binToDec('1001001')).toBe(73);
  expect(binToDec('10011000011011100000100')).toBe(4994820);
  expect(binToDec('1111100110000011011010')).toBe(4088026);
  expect(binToDec('1101111010101110110100')).toBe(3648436);
  expect(binToDec('110011110101010010110')).toBe(1698454);
  expect(binToDec('1000001110101010011100')).toBe(2157212);
  expect(binToDec('1110001001100010001100')).toBe(3709068);
  expect(binToDec('1101100011100110111011')).toBe(3553723);
  expect(binToDec('10101111001111000111')).toBe(717767);
  expect(binToDec('1010001100010101101')).toBe(333997);
});
