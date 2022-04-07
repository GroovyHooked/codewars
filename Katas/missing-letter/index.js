const findMissingLetter = (array) => {
  let isLower = array[0] === array[0].toLowerCase();
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const first = array[0].toLowerCase();
  const last = array[array.length - 1].toLowerCase();
  const seq = alpha.substring(alpha.indexOf(first), alpha.indexOf(last) + 1);

  const lowerCaseSeq = Array.from(seq, l => l.toLowerCase());
  const arrResult = array.filter((letter, index) => {
    return letter.toLowerCase() !== lowerCaseSeq[index];
  });
  let resultIndex = alpha.indexOf(arrResult) - 1;

  if (array.length === 1)
    return isLower ? alpha[resultIndex] : alpha[resultIndex].toUpperCase();
  else {
    const letter = arrResult[0];
    resultIndex = alpha.indexOf(letter.toLowerCase()) - 1;
    return isLower ? alpha[resultIndex] : alpha[resultIndex].toUpperCase();
  }
};
