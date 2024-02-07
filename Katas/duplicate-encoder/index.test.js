const duplicateEncode = require("./index.js");
test("test", () => {
  expect(duplicateEncode("din")).toBe("(((");
  expect(duplicateEncode("recede")).toBe("()()()");
  expect(duplicateEncode("Success")).toBe(")())())");
  expect(duplicateEncode("CodeWarrior")).toBe("()(((())())");
  expect(duplicateEncode("Supralapsarian")).toBe(")()))()))))()(");
  expect(duplicateEncode("iiiiii")).toBe("))))))");
  expect(duplicateEncode("(( @")).toBe("))((");
  expect(duplicateEncode(" ( ( )")).toBe(")))))(");
  expect(duplicateEncode("y SSSSFuRSvlS")).toBe("(())))((()(()");
  expect(duplicateEncode("vOxTTTQnTRTTJb(cT")).toBe("((()))(()())(((()");
  expect(duplicateEncode("RRvmRTRRRb!RRex@RRR")).toBe("))(()()))(())((()))");
  expect(duplicateEncode("RRSRdRRRk(yRR)HcR@!")).toBe("))()()))((())((()((");
});
