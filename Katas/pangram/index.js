const isPangram = (string) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const stringToArray = [...string]

    alphabet.forEach((letter , index) => {
      stringToArray.forEach( element => {
        if(element.toLowerCase() === letter ){
          alphabet[index] = ""
        }
      })
    })

    let isPan = alphabet.every((e) => e === "")
    return isPan
}