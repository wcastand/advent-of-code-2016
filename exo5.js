import R from 'ramda'
import md5 from 'md5'

const debug = R.tap(console.log)

export function exo51 (path) {
  const notZero = R.compose(R.equals('00000'), R.slice(0, 5), x => md5(path + x.toString()))

  // take the index to start
  const calculateKey = R.curry((idx, acc) => R.compose(
    x => [x, acc + R.prop(5, md5(path + x))],
    R.until(notZero, R.inc)
  )(idx))
  return R.compose(
    R.prop(1),
    R.until(
      R.compose(R.equals(8), R.length, R.prop(1)),
      R.converge(calculateKey, [R.compose(R.inc, R.prop(0)), R.prop(1)])
    )
  )([3000000, ''])
}
