const countConsonants = (str) => {
  let uniqueConsonants = 0
  const consonants_res = []
  const non_consonants = 'aeiou'
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  str.split('').forEach(char => {
    const lowerChar = char.toLowerCase()
    if (non_consonants.indexOf(lowerChar) === -1 && consonants_res.indexOf(lowerChar) === -1 && alpha.indexOf(lowerChar) !== -1) {
      consonants_res.push(lowerChar)
      uniqueConsonants++
    }
  })
  return uniqueConsonants
}

module.exports = countConsonants
