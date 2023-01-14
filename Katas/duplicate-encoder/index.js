const duplicateEncode = (word) => {
  // Create an empty object to keep track of the character count
  const duplicateObj = {};
  // Initialize an empty string to store the final output
  let valueToReturn = "";

  // Iterate through the characters in the input word
  word.split("").forEach((char) => {
    // Convert the character to lowercase
    let toLower = char.toLowerCase();
    // If the character is not in the object, add it with a count of 1
    // Otherwise, increment the count for that character
    duplicateObj[toLower] === undefined
      ? (duplicateObj[toLower] = 1)
      : duplicateObj[toLower]++;
  });

  // Iterate through the characters in the input word again
  word.split("").forEach((char) => {
    // Check if the count for the current character is 1
    // If it is, add an open parenthesis to the output string
    // Otherwise, add a closed parenthesis
    duplicateObj[char.toLowerCase()] === 1
      ? (valueToReturn += "(")
      : (valueToReturn += ")");
  });

  // Return the final output string
  return valueToReturn;
};

module.exports = duplicateEncode;
