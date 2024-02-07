const deleteNth = (arr, n) => {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? 0 : 0;
  }
  const arrWithNOccurences = [];
  arr.forEach((el, index) => {
    if (counts[el] < n) {
      arrWithNOccurences.push(el);
      counts[el] += 1;
    }
  });
  return arrWithNOccurences;
};
module.exports = deleteNth;