const findChildren = require("./index.js") 
test('test', () => {
    expect(findChildren("uwwWUueEe")).toBe('EeeUuuWww');
    expect(findChildren("AaaaaZazzz")).toBe('AaaaaaZzzz');
    expect(findChildren("CbcBcbaA")).toBe('AaBbbCcc');
    expect(findChildren("xXfuUuuF")).toBe('FfUuuuXx');
    expect(findChildren("zwJwzzjwmwzjMjZzjwzzzjjW")).toBe('JjjjjjjMmWwwwwwZzzzzzzzz');
    expect(findChildren("wwaAawswzkwszswaSdKszwzsszaWZDs")).toBe('AaaaaDdKkSsssssssWwwwwwwwZzzzzz');
    expect(findChildren("wlwlkgwylwkgkwwytykgyCLtgGTkytlgcwtYyttglgcykgkwcKlW")).toBe('CcccGggggggggKkkkkkkkLllllllTttttttWwwwwwwwwYyyyyyyy');
    expect(findChildren("bBzpppapCbppzAaZccbPp")).toBe('AaaBbbbCccPpppppppZzz');
    expect(findChildren("wdddbuHfdfBFvuCvwduudcfcfUuDuvwvdhVbdvW")).toBe('BbbCccDddddddddFffffHhUuuuuuuVvvvvvWwww');
    expect(findChildren("fllfolbrrloqrbblQyfoYyBfblRfyorOorqbqFffbyyL")).toBe('BbbbbbbFfffffffLllllllOoooooQqqqRrrrrrYyyyyy');
    expect(findChildren("JmaamssmWmamMajmjsmwsAS")).toBe('AaaaaJjjMmmmmmmmSssssWw');
    expect(findChildren("kdJkeaeAkQdFqwEkDKkqjjdeajqjwwWkfdkewqejdjwjadqd")).toBe('AaaaDdddddddEeeeeeFfJjjjjjjjKkkkkkkkQqqqqqWwwwww');
  });
