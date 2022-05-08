const  valueOfX = (eq) => {
    debugger
    let result = 0
    let xSegmentIndex = 0
    let secondSegmentIndex = 0
    let isXnegative = false
    let operator = ''
    let xIndex = 0
    const etractedXAndIndexes = []
    // splitting at equal index
    const splitted = eq.split("=")
    // getting index of splitting part containing x
    splitted.forEach((segment, index) => {
        segment.includes('x') ? xSegmentIndex = index : null
    });
    // setting second index
    xSegmentIndex === 1 ? secondSegmentIndex = 0 : secondSegmentIndex = 1
    // Segmenting Characters of both groups
    const xChars = splitted[xSegmentIndex].split(" ").filter((e) => e !== "")
    const secondChars = splitted[secondSegmentIndex].split(" ").filter((e) => e !== "")
    // Checking if x is positive or negative
    xChars.forEach((char, index) => {/x/.test(char) ? /-/.test(xChars[index - 1]) ? (isXnegative = true) : null : null
    });
    // Simple cases
    if (xChars.length === 2 && secondChars.length === 2 && /-/.test(xChars[0])) {
      return Number(secondChars[1])
    } else if (secondChars.length === 2 && xChars.length === 1) {
        return secondChars[0] === "-" ? -Number(secondChars[1]) : Number(secondChars[1])
    } // Extracting index of x
    xIndex = xChars.indexOf("x")
    // deleting x from array
    if (xIndex > 0) {
      xIndex - 1 > -1 ? xChars.splice(xIndex - 1, 1) : null
      xIndex - 1 > -1 ? xChars.splice(xIndex - 1, 1) : null
    } // If nothing before x then x is positive
    xChars.length === 1 ? xChars.unshift("+") : null
    xChars.forEach((element) => { // Transfering numbers from an array to another and inversing operators
      /-|\+/.test(element) ? /-/.test(element) ? secondChars.push("+") : secondChars.push("-") : secondChars.push(element)
    }); // Calculating result 
    secondChars.forEach((element, index) => {
      if (/\d/.test(element) && index === 0) {
        result = element
      } else if (/-|\+/.test(element)) {
        /-/.test(element) ? operator = "-" : operator = "+";
      } else if (/\d/.test(element) && operator === "-") {
        result -= Number(element)
      } else if (/\d/.test(element) && operator === "+") {
        result = Number(result)
        result += Number(element)
      }
    }); // returning result 
    if (result < 0 && isXnegative) return Math.abs(result)
    if (result > 0 && isXnegative) return -Math.abs(result)
    return result
}
valueOfX('x + 1 = 9 - 2')
module.exports = valueOfX
