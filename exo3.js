import R from 'ramda'

export function exo31 (path) {
  const lines = path.split('\n')
  const parse = R.compose(R.map(parseInt), R.match(/(\S+)/gmi))
  const triangles = R.map(parse, lines)
  const test = R.converge(
    R.compose(R.ifElse(R.equals(true), R.always(1), R.always(0)), R.lt),
    [ R.reduce(R.max, 0),
      R.compose(R.reduce(R.add, 0), R.tail, R.sort((a, b) => b - a)) ])

  return R.compose(
    R.reduce(R.add, 0),
    R.map(test),
  )(triangles)
}

export function exo32 (path) {
  const parse = R.compose(R.map(parseInt), R.match(/(\S+)/gmi))
  const triangles = R.compose(
    R.reduce(R.concat, []),
    R.map(R.map(R.flatten)),
    R.map(R.converge(R.zip, [R.head, R.compose(R.converge(R.zip, [R.head, R.last]), R.tail)])),
    R.splitEvery(3),
    R.map(parse),
    R.split(/\n/gmi)
  )(path)
  const test = R.converge(
    R.compose(R.ifElse(R.equals(true), R.always(1), R.always(0)), R.lt),
    [ R.reduce(R.max, 0),
      R.compose(R.reduce(R.add, 0), R.tail, R.sort((a, b) => b - a)) ])

  return R.compose(
    R.reduce(R.add, 0),
    R.map(test),
  )(triangles)
}
