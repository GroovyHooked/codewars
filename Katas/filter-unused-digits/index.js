const unusedDigits = (...array) => {
  const inputNumbersToArray = Array.from(String(array), (n) =>
    Number(n) !== NaN ? Number(n) : ""
  ).filter((n) => n !== "");

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let absentNumbers = "";
  numbers.forEach((number) => {
    if (!inputNumbersToArray.includes(number)) {
      absentNumbers += String(number);
    }
  });

  return absentNumbers;
};
