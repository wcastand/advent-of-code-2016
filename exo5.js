import R from 'ramda'
import md5 from 'md5'

const debug = R.tap(console.log)

export function exo51 (path) {
  const notZero = R.either(
    R.gt(R.__, 100000),
    R.compose(R.equals('00000'), R.slice(0, 4), x => md5(path + x.toString()))
  )
  return R.until(notZero, R.inc, 0)
}
