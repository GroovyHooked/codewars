const narcissistic = require("./index.js") 
test('test', () => {
    expect(narcissistic(7)).toBe(true);
    expect(narcissistic(371)).toBe(true);
    expect(narcissistic(153)).toBe(true);
    expect(narcissistic(370)).toBe(true);
    expect(narcissistic(1634)).toBe(true);
    expect(narcissistic(16150)).toBe(false);
    expect(narcissistic(12568)).toBe(false);
    expect(narcissistic(28217)).toBe(false);
    expect(narcissistic(40346)).toBe(false);
    expect(narcissistic(24678050)).toBe(true);
    expect(narcissistic(10429667)).toBe(false);
    expect(narcissistic(9926315)).toBe(true);
  });