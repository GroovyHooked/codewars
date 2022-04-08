const getCount = (str) => {
 
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCount = 0
    const letters = [...str]
    
    letters.forEach(letter => {
      vowels.forEach(vowel => {
        letter === vowel ? vowelsCount++ : null
      })
    })
   
    return vowelsCount;
  }