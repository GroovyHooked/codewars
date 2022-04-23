const nthFibo = require("./index.js") 

test("Test", () => {
    expect(nthFibo(1)).toBe(0);
    expect(nthFibo(2)).toBe(1);
    expect(nthFibo(3)).toBe(1);
    expect(nthFibo(4)).toBe(2);
    expect(nthFibo(5)).toBe(3);
    expect(nthFibo(6)).toBe(5);
    expect(nthFibo(7)).toBe(8);
    expect(nthFibo(8)).toBe(13);
    expect(nthFibo(9)).toBe(21);
});