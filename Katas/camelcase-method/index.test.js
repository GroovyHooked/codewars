const camelCase = require("./index.js");
test("test", () => {
  expect(camelCase('test case')).toBe("TestCase");
  expect(camelCase("camel case method")).toBe("CamelCaseMethod");
  expect(camelCase("say hello ")).toBe("SayHello");
  expect(camelCase(' camel case word')).toBe("CamelCaseWord");
  expect(camelCase('hrdqxmbntdq wcrrgparkfm evlofkcjwvqhju omxw dzacfgfcrobe beysbg')).toBe("HrdqxmbntdqWcrrgparkfmEvlofkcjwvqhjuOmxwDzacfgfcrobeBeysbg");
  expect(camelCase('jbtbyibifryi ljeppwewmtgn')).toBe("JbtbyibifryiLjeppwewmtgn");
  expect(camelCase('zxfxdlbcxs bnkqzsifxhrz chlbgwx cfpuhvvimg')).toBe("ZxfxdlbcxsBnkqzsifxhrzChlbgwxCfpuhvvimg");
  expect(camelCase('pbg bcekwgyvmljtt ynilfctbfkfx ikthv qzsjpfwxk sjsmzxhfgooqkc duofirkttqduxxy rjuaa qfyjnrngcisrmvp dypzetixxnz')).toBe("PbgBcekwgyvmljttYnilfctbfkfxIkthvQzsjpfwxkSjsmzxhfgooqkcDuofirkttqduxxyRjuaaQfyjnrngcisrmvpDypzetixxnz");
  expect(camelCase('vlaxdqvf zpaq fxvyorkmxtil kfxblcjjapygus akukbtotx vwwmdbblpraaq enkjwuftedijoam')).toBe("VlaxdqvfZpaqFxvyorkmxtilKfxblcjjapygusAkukbtotxVwwmdbblpraaqEnkjwuftedijoam");
});
