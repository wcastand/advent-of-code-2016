import R from 'ramda'

const FACE = { N: 0, E: 1, S: 2, W: 3 }
const DIR = { L: -1, R: 1 }

export const calculateDist = x => Math.abs(x.x) + Math.abs(x.y)

// EXO 1.1 // 242
export function exo11 (path) {
  const moves = path.split(', ')
    .map(x => ({ dir: DIR[R.head(x)], dist: parseInt(R.tail(x), 10) }))

  const position = { x: 0, y: 0, face: FACE.N }
  const moving = (acc, pos) => {
    const face = Math.abs(acc.face + pos.dir + 4) % 4
    const cc = R.cond([
      [R.equals(FACE.N), R.always(({x: acc.x, y: acc.y - pos.dist, face}))],
      [R.equals(FACE.S), R.always(({x: acc.x, y: acc.y + pos.dist, face}))],
      [R.equals(FACE.E), R.always(({x: acc.x + pos.dist, y: acc.y, face}))],
      [R.equals(FACE.W), R.always(({x: acc.x - pos.dist, y: acc.y, face}))]
    ])
    return cc(face)
  }
  return R.reduce(moving, position, moves)
}

// EXO 1.2 // 150

export function exo12 (path) {
  const moves = path.split(', ')
    .map(x => ({ dir: DIR[R.head(x)], dist: parseInt(R.tail(x), 10) }))

  let position = { x: 0, y: 0, face: FACE.N }
  const passed = { '0,0': true }
  for (let move of moves) {
    const face = Math.abs(position.face + move.dir + 4) % 4
    const dist = move.dist
    for (let i = 1; i <= dist; i++) {
      const cc = R.cond([
        [R.equals(FACE.N), R.always(({x: position.x, y: position.y - 1, face}))],
        [R.equals(FACE.S), R.always(({x: position.x, y: position.y + 1, face}))],
        [R.equals(FACE.E), R.always(({x: position.x + 1, y: position.y, face}))],
        [R.equals(FACE.W), R.always(({x: position.x - 1, y: position.y, face}))]
      ])
      position = cc(face)
      if (passed[`${position.x}, ${position.y}`]) return position
      passed[`${position.x}, ${position.y}`] = true
    }
  }
  return position
}