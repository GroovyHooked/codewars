const dict = {
  A: "awesome",
  B: "beautiful",
  C: "confident",
  D: "disturbing",
  E: "eager",
  F: "fantastic",
  G: "gregarious",
  H: "hippy",
  I: "ingestable",
  J: "joke",
  K: "klingon",
  L: "literal",
  M: "mustache",
  N: "newtonian",
  O: "oscillating",
  P: "perfect",
  Q: "queen",
  R: "rant",
  S: "stylish",
  T: "turn",
  U: "underlying",
  V: "volcano",
  W: "weird",
  X: "xylophone",
  Y: "yogic",
  Z: "zero",
};

const makeBackronym = (string) => {
  let result = "";
  Array.from(string).map((letter, index) => {
    for (const [key, value] of Object.entries(dict)) {
      if (letter.toUpperCase() === key) {
        result += value;
      }
    }
    index < [...string].length - 1 ? (result += " ") : null;
  });
  return result;
};
