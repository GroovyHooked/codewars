const findUniq = require("./index.js")
test('test', () => {
  expect(findUniq([
    'Aa', 'aaa',
    'aaaaa', 'BbBb',
    'Aaaa', 'AaAaAa',
    'a'
  ])).toBe('BbBb');

});