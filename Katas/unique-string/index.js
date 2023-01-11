const log = console.log
function findUniq(arr) {
  let bool = false
  let newArr = []
  arr.forEach((item, index) => {
    const subArray = item.split('')
    newArr[index] = subArray.map(letter => {
      return letter = letter.toLowerCase()
    })
  })
  log({ newArr })
  const remadeArray = newArr.map(item => {
    return item.join('')
  })
  log({ remadeArray })
  let result = ''
  //debugger
  for (let i = 0; i <= newArr.length - 1; i++) {
    log({ new: newArr[i] })
    const arrayToTest = newArr[i]
    log({ arrayToTest })
    arrayToTest.forEach(letter => {
      log({ letter })
      for (let y = 0; y <= newArr.length - 1; y++) {
        log({ y })
        if (i === y) continue
        log({ a: newArr[y] })
        log(newArr[y].indexOf(letter))
        if (newArr[y].indexOf(letter) === -1) {
          result = newArr[y].join('')
          log({ result })
          log({ test: remadeArray.indexOf(result), newArr })
          log(arr[remadeArray.indexOf(result)])
          break
        }
      }
    })
  }
  return arr[remadeArray.indexOf(result)]

}


//module.exports = findUniq;

findUniq([
  'Aa', 'aaa',
  'aaaaa', 'BbBb',
  'Aaaa', 'AaAaAa',
  'a'
])