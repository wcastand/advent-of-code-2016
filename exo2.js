import R from 'ramda'

export function exo21 (path) {
  const PADS = { PAD1: 1, PAD2: 2, PAD3: 3, PAD4: 4, PAD5: 5, PAD6: 6, PAD7: 7, PAD8: 8, PAD9: 9 }
  const MOVES = { U: -3, D: 3, L: -1, R: 1 }
  const lines = path.split('\n')
  const parse = (acc, val) => {
    const t = tt => !(R.contains(acc, tt)) ? acc + MOVES[val] : acc
    switch (val) {
      case 'U': return t([1, 2, 3])
      case 'D': return t([7, 8, 9])
      case 'L': return t([1, 4, 7])
      case 'R': return t([3, 6, 9])
    }
  }
  const parkour = R.reduce(parse)
  let num = PADS.PAD5
  let result = []
  for (let line of lines) {
    num = parkour(num, line)
    result.push(num)
  }
  return result.join('')
}

export function exo22 (path) {
  const PADS = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D' }
  const MOVES = { U: -4, D: 4, L: -1, R: 1 }
  const lines = path.split('\n')

  const parse = (acc, val) => {
    const t = (tt, exceptions) =>
      exceptions !== undefined && R.compose(R.contains(acc.toString()), R.keys)(exceptions)
      ? exceptions[acc]
      : !(R.contains(acc, tt))
        ? acc + MOVES[val]
        : acc

    switch (val) {
      case 'U': return t([1, 2, 5, 4, 9], {3: 1, 13: 11})
      case 'D': return t([5, 10, 13, 12, 9], {1: 3, 11: 13})
      case 'L': return t([1, 2, 5, 10, 13])
      case 'R': return t([1, 4, 9, 12, 13])
    }
  }
  const parkour = R.reduce(parse)
  let num = PADS[5]
  let result = []
  for (let line of lines) {
    num = parkour(num, line)
    result.push(PADS[num])
  }
  return result.join('')
}
