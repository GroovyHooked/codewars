const domainName = require("./test.js");
 test("test", () => {
   expect(domainName("http://google.com")).toBe("google");
   expect(domainName("http://google.co.jp")).toBe("google");
   expect(domainName("www.xakep.ru")).toBe("xakep");
   expect(domainName("https://youtube.com")).toBe("youtube");
   expect(domainName("http://j0z-mt.co.uk/warez/")).toBe("j0z-mt");
   expect(domainName("http://www.b61245wixx67cs.edu/error")).toBe("b61245wixx67cs");
   expect(domainName("rbmx-lsh7s3nrf1at-gdbs6syaa6.biz/default.html")).toBe("rbmx-lsh7s3nrf1at-gdbs6syaa6");
   expect(domainName("8r8re9yvow-qdpc8.fr")).toBe("8r8re9yvow-qdpc8");
   expect(domainName("https://www.fq845s43o0mjy4.biz/default.html")).toBe("fq845s43o0mjy4");
   expect(domainName("ejq0cjamfvslnl.org/img/")).toBe("ejq0cjamfvslnl");
   expect(domainName("https://www.zxeo9au19tqrjvmwyi9a9zy4md-0m.co.za/img/")).toBe("zxeo9au19tqrjvmwyi9a9zy4md-0m");
   expect(domainName("https://ro1bdfe7.co.za/index.php")).toBe("ro1bdfe7");
 });
 