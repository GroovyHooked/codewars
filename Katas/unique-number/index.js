const findUniq = (arr) => {
  const resultObj = {}
  arr.forEach((number) => {
    if (resultObj[number] === undefined) {
      resultObj[number] = 1
    } else {
      resultObj[number]++
    }
  })
  for (const [key, value] of Object.entries(resultObj)) {
    if (value === 1) return Number(key)
  }
}

module.exports = findUniq;