const to_nato = (words) => {
  const NATO = {
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
  };
  const arrayOfcaracters = words.split("");

  let PilotAlphabet = "";
  const regex = /[^\.\,!\?]/;

  arrayOfcaracters.forEach((caracter) => {
    if (caracter !== " " && caracter.match(regex)) {
      const index = caracter.toUpperCase();
      PilotAlphabet += NATO[index] + " ";
    } else if (!caracter.match(regex)) {
        PilotAlphabet += caracter + " ";
    }
  });
  let result = PilotAlphabet.substring(0, PilotAlphabet.length - 1);
  return result;
};
