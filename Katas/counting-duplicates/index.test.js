const duplicateCount = require("./index.js") 
test('test', () => {
    expect(duplicateCount("")).toBe(0);
    expect(duplicateCount("abcde")).toBe(0);
    expect(duplicateCount("aabbcde")).toBe(2);
    expect(duplicateCount("aabBcde")).toBe(2);
    expect(duplicateCount("Indivisibility")).toBe(1);
    expect(duplicateCount("Indivisibilities")).toBe(2);
    expect(duplicateCount("abcdefghijklmnopqrstuvwxyzbaaAAB")).toBe(2);
    expect(duplicateCount("abcdefghijabcdeabcdabcabA")).toBe(5);
    expect(duplicateCount('abcdefghijklABCDEFABCDEABCDABCABa')).toBe(6);
    expect(duplicateCount("abcdefghwxyz")).toBe(0);
    expect(duplicateCount("abcdefghijklabcdefabcdeabcdABCABA")).toBe(6);
  });