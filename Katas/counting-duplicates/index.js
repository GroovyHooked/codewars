const duplicateCount = (text) => {
  const duplicatesCounterObj = {};
  let nbOfDuplicates = 0;
  if (text === "") return nbOfDuplicates;
  text.split("").forEach((char) => {
    duplicatesCounterObj[char.toLowerCase()] === undefined
      ? (duplicatesCounterObj[char.toLowerCase()] = 1)
      : duplicatesCounterObj[char.toLowerCase()]++;
  });
  for (const value of Object.values(duplicatesCounterObj)) {
    value >= 2 ? nbOfDuplicates++ : null;
  }
  return nbOfDuplicates;
};

module.exports = duplicateCount;