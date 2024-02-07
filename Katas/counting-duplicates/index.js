const duplicateCount = (text) => {
    // create an empty object to store character counts
    const duplicatesCounterObj = {};
    
    // initialize a variable to store the number of duplicates
    let nbOfDuplicates = 0;
    
    // check if the input text is empty
    if (text === "") return nbOfDuplicates;
    
    // split the text into individual characters and convert them to lowercase
    text.split("").forEach((char) => {
      // if the character does not exist in the object, add it with a value of 1
      // if it does exist, increment the value by 1
      duplicatesCounterObj[char.toLowerCase()] === undefined
        ? (duplicatesCounterObj[char.toLowerCase()] = 1)
        : duplicatesCounterObj[char.toLowerCase()]++;
    });
    
    // iterate through the values of the object
    for (const value of Object.values(duplicatesCounterObj)) {
      // if a value is greater than or equal to 2, increment the number of duplicates
      value >= 2 ? nbOfDuplicates++ : null;
    }
    
    // return the number of duplicates
    return nbOfDuplicates;
  };
  
  module.exports = duplicateCount;