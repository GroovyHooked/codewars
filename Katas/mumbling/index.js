const accum = (s) => {
  
  let string = "";
  const transform = (letter, index) => {
    if (index === 0) string += letter.toUpperCase() + "-";
    if (index === 1)
      string += letter.toUpperCase() + letter.toLowerCase() + "-";
    if (index + 1 > 2 && s[index + 1] !== undefined) {
      let count = index;
      let stringPiece = "";
      while (count > 0) {
        stringPiece += letter.toLowerCase();
        count--;
      }
      string += letter.toUpperCase() + stringPiece + "-";
    }
    if (s[index + 1] === undefined) {
      let count = index;
      let stringPiece = "";
      while (count > 0) {
        stringPiece += letter.toLowerCase();
        count--;
      }
      string += letter.toUpperCase() + stringPiece;
    }
    return string;
  };

  let transformedString = "";
  [...s].forEach((letter, index) => {
    transformedString = transform(letter, index);
  });
  return transformedString;
};
