const squareIt = require("./index.js") 
test('test', () => {
    expect(squareIt(1)).toBe('1');
    expect(squareIt(222)).toBe('Not a perfect square!');
    expect(squareIt(234562342342)).toBe('Not a perfect square!');
    expect(squareIt(112141568)).toBe('112\n141\n568');
    expect(squareIt(9862450664)).toBe('Not a perfect square!');
    expect(squareIt(1550650943282)).toBe('Not a perfect square!');
    expect(squareIt(113073955)).toBe('113\n073\n955');
    expect(squareIt(3204)).toBe('32\n04');
    expect(squareIt(1095925489375185)).toBe('1095\n9254\n8937\n5185');
    expect(squareIt(1323665851115638)).toBe('1323\n6658\n5111\n5638');
    expect(squareIt(6258380093888514)).toBe('6258\n3800\n9388\n8514');
    expect(squareIt(1712970681683)).toBe('Not a perfect square!');
  });