const solution = (start, finish) => {
  let jumps = 0
  const BIGGEST_JUMP_LENGTH = 3
  while (start !== finish) {
    if (finish - start >= BIGGEST_JUMP_LENGTH) {
      start += BIGGEST_JUMP_LENGTH
      jumps++
    } else {
      start++
      jumps++
    }
  }
  return jumps
}

module.exports = solution