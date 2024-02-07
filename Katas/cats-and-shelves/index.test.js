const solution = require("./index.js")
test('test', () => {
  expect(solution(1, 5)).toBe(2);
  expect(solution(3, 3)).toBe(0);
  expect(solution(335, 1035)).toBe(234);
  expect(solution(502, 1327)).toBe(275);
  expect(solution(772, 991)).toBe(73);
  expect(solution(480, 1103)).toBe(209);
  expect(solution(583, 1136)).toBe(185);
});