const rot13 = (str) => {
  const strToArray = [...str];
  const first = "abcdefghijklm";
  const second = "nopqrstuvwxyz";
  const fSplitted = first.split("");
  const sSplitted = second.split("");
  let result = "";
  strToArray.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      let isLower = char === char.toLowerCase();
      char = char.toLowerCase();
      first.includes(char)
        ? isLower
          ? (result += sSplitted[first.indexOf(char)])
          : (result += sSplitted[first.indexOf(char)].toUpperCase())
        : isLower
        ? (result += fSplitted[second.indexOf(char)])
        : (result += fSplitted[second.indexOf(char)].toUpperCase());
    } else {
      result += char;
    }
  });
  return result;
};

module.exports = rot13;