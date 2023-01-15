const log = console.log
String.prototype.camelCase = function(){
  log(this)
    // Initialize an empty string to store the final output
  let camelCased = ''
    // Check if the input string is empty, if so return it
  if(this === "") return this
    // split the string with spaces, filter out any empty elements 
  this.split(' ').filter(el => el !== '').forEach(word => {
    let capitalized = ''
    //iterate through the words and split them into letters
    word.split('').forEach((letter, index) => {
      // check if the index of the letter is 0 and if so, convert it to uppercase
      index === 0 ? capitalized+= letter.toUpperCase() : capitalized+= letter
    })
    camelCased+= capitalized
  })
  //return the final camelCased string
  log(camelCased)
  return camelCased
}

module.exports = String.prototype.camelCase