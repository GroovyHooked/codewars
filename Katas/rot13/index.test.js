const rot13 = require("./index.js") 
test('test', () => {
    expect(rot13("EBG13 rknzcyr.")).toBe("ROT13 example.");
    expect(rot13("This is my first ROT13 excercise!")).toBe("Guvf vf zl svefg EBG13 rkprepvfr!");
    expect(rot13("How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.")).toBe("Ubj pna lbh gryy na rkgebireg sebz na vagebireg ng AFN? In the elevators, the extrovert looks at the OTHER guy's shoes.");
    expect(rot13("Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)")).toBe('This is actually the first kata I ever made. Thanks for finishing it! :)');
    expect(rot13("XpNOI/h}1I8:$Q&~'*K&2t")).toBe("KcABV/u}1V8:$D&~'*X&2g");
    expect(rot13("/leOptM\"G? \DW0P2fk@>d;1f|Oc")).toBe("/yrBcgZ\"T? \QJ0C2sx@>q;1s|Bp");
    expect(rot13("gh_oI,}6eEv`MDoZ!/fgED^")).toBe("tu_bV,}6rRi`ZQbM!/stRQ^");
    expect(rot13("|1#0V>@)8wWY;z0s")).toBe("|1#0I>@)8jJL;m0f");
    expect(rot13("qqm.D|]k?{J/9|U/9rj*o-iyS^")).toBe("ddz.Q|]x?{W/9|H/9ew*b-vlF^");
    expect(rot13("W>\"l\T}m>B&")).toBe("J>\"y\G}z>O&");
    expect(rot13("*I>]o{Id1@:OI=Of=Y\"mJ>!=")).toBe("*V>]b{Vq1@:BV=Bs=L\"zW>!=");
    expect(rot13("5\dO5iGwFMi(VR)hWm=&5[r+u{Ma")).toBe("5\qB5vTjSZv(IE)uJz=&5[e+h{Zn");
  });