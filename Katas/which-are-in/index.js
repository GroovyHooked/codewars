const inArray = (array1, array2) => {
  let arrOfSequence = [];

  array2.forEach((word) => {
    array1.forEach((seq) => {
      if (word.match(seq) !== null) {
        arrOfSequence.push(seq);
      }
    });
  });
  return [...new Set(arrOfSequence.sort())];
};
