const isSumOfCubes = (s) => {
  const isCubic = (number) => {
    const digits = Array.from(String(number), (n) => Number(n));
    const sumOfCubicDigits = digits.reduce(
      (acc, curr) => acc + Math.pow(curr, 3),
      0
    );
    return sumOfCubicDigits == number;
  };
  const regex = /\d{3}|\d{2}|\d{1}/gm;
  const inputNumbers = s.match(regex);
  let cubicArray = [];
  inputNumbers.forEach((number) =>
    isCubic(number) ? cubicArray.push(number) : null
  );
  if (cubicArray.length === 0) return "Unlucky";
  let stringOfCubicNumbers = "";
  cubicArray.forEach((number) => {
    stringOfCubicNumbers +=
      number === "000" || number === "00" ? "0 " : String(number) + " ";
  });
  const cubicSum = cubicArray.reduce((acc, curr) => acc + Number(curr), 0);
  return stringOfCubicNumbers + cubicSum + " " + "Lucky";
}
