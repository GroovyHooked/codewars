const duplicateEncode = require("./index.js");
test("test", () => {
  expect(duplicateEncode('test case')).toBe("TestCase");
  expect(duplicateEncode("camel case method")).toBe("CamelCaseMethod");
  expect(duplicateEncode("say hello ")).toBe("SayHello");
  expect(duplicateEncode(' camel case word')).toBe("CamelCaseWord");
  expect(duplicateEncode('hrdqxmbntdq wcrrgparkfm evlofkcjwvqhju omxw dzacfgfcrobe beysbg')).toBe("HrdqxmbntdqWcrrgparkfmEvlofkcjwvqhjuOmxwDzacfgfcrobeBeysbg");
  expect(duplicateEncode('jbtbyibifryi ljeppwewmtgn')).toBe("JbtbyibifryiLjeppwewmtgn");
  expect(duplicateEncode('zxfxdlbcxs bnkqzsifxhrz chlbgwx cfpuhvvimg')).toBe("ZxfxdlbcxsBnkqzsifxhrzChlbgwxCfpuhvvimg");
  expect(duplicateEncode('pbg bcekwgyvmljtt ynilfctbfkfx ikthv qzsjpfwxk sjsmzxhfgooqkc duofirkttqduxxy rjuaa qfyjnrngcisrmvp dypzetixxnz')).toBe("PbgBcekwgyvmljttYnilfctbfkfxIkthvQzsjpfwxkSjsmzxhfgooqkcDuofirkttqduxxyRjuaaQfyjnrngcisrmvpDypzetixxnz");
  expect(duplicateEncode('vlaxdqvf zpaq fxvyorkmxtil kfxblcjjapygus akukbtotx vwwmdbblpraaq enkjwuftedijoam')).toBe("VlaxdqvfZpaqFxvyorkmxtilKfxblcjjapygusAkukbtotxVwwmdbblpraaqEnkjwuftedijoam");
});
