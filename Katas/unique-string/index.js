const log = console.log
function findUniq(arr) {
  if (arr[0].length === 1 || arr[0].trim() === '') {
    if (arr[0].trim() === '') {
      const newArr = arr.filter(el => el.trim() !== '')
      return newArr[0]
    }
    const index = arr.sort().reduce((a, b) => b ^ a)
    return arr[index]
  }

  let newArr = []
  arr.forEach((item, index) => {
    const subArray = item.split('')
    newArr[index] = subArray.map(letter => {
      return letter = letter.toLowerCase()
    })
  })
  const remadeArray = newArr.map(item => {
    return item.join('')
  })
  let result = ''
  for (let array of newArr) {
    array.forEach(letter => {
      for (let y = 0; y <= newArr.length - 1; y++) {
        if (newArr[y].indexOf(letter) === -1) {
          result = newArr[y].join('')
        }
      }
    })
    return arr[remadeArray.indexOf(result)]
  }
}