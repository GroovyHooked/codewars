const generateHashtag = (str) => {
  if (str.length === 0 || !str.trim()) return false;

  const arrayOfWords = str.split(" ").map((word) => {
    const capitalized = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    return capitalized + rest;
  });

  const result = "#" + arrayOfWords.reduce((acc, curr) => (acc += curr));
  return result.length < 141 ? result : false;
};
