const high = (x) => {
  
    const aplphabet = 'abcdefghijklmnopqrstuvwxyz'
    const arrOfWords = x.split(' ')
    let arrOfNums = []
    let count = 0
    
    arrOfWords.forEach( word => {
      word.split('').forEach((letter) => { 
        count += (aplphabet.indexOf(letter) + 1) 
      })
        arrOfNums.push(count)
        count = 0  
    })
    
    return arrOfWords[arrOfNums.indexOf(Math.max(...arrOfNums))]
  }