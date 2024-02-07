const squareIt = (int) => {
  if (int === 1) return String(int);
  const intLength = [...String(int)].length;
  const index = Math.sqrt(intLength);
  const indexLength = String(index).length;
  if (indexLength === 1) {
    const regexObj = new RegExp(".{1," + index + "}", "g");
    const arrayOfArrElements = String(int).match(regexObj);
    let perfectSquare = "";
    arrayOfArrElements.forEach((element, index) => {
      index === arrayOfArrElements.length - 1
        ? (perfectSquare += element)
        : (perfectSquare += element + "\n");
    });
    return perfectSquare;
  } else {
    return "Not a perfect square!";
  }
};
module.exports = squareIt
