const chmodCalculator = require("./index.js");
test("test", () => {
  expect(chmodCalculator({ user: 'rwx', group: 'r-x', other: 'r-x' })).toBe('755');
  expect(chmodCalculator({ user: 'rwx', group: 'r--', other: 'r--' })).toBe('744');
  expect(chmodCalculator({ user: 'r-x', group: 'r-x', other: 'r-x' })).toBe('555');
  expect(chmodCalculator({ group: 'rwx' })).toBe('070');
  expect(chmodCalculator({})).toBe('000');
  expect(chmodCalculator({ other: 'rw-' })).toBe('006');
  expect(chmodCalculator({ user: 'rwx', group: 'r--', other: '--x' })).toBe('741');
  expect(chmodCalculator({ user: '--x', other: 'r--' })).toBe('104');
  expect(chmodCalculator({ user: '-w-' })).toBe('200');
  expect(chmodCalculator({ other: '---' })).toBe('000');
  expect(chmodCalculator({ user: 'r--', group: '-w-', other: 'r--' })).toBe('424');
  expect(chmodCalculator({ group: '-w-' })).toBe('020');
});
