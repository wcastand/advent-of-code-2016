import R from 'ramda'

const debug = R.tap(console.log)

function _magic (path) {
  const lines = R.split(/\n/g, path)
  const getCheckSum = R.compose(R.view(R.lensIndex(1)), R.match(/\[(\S*)]/))
  const getSectorID = R.compose(parseInt, R.view(R.lensIndex(0)), R.match(/\w*[^-\D*]/g))

  const mysort = (a, b) => {
    const occ1 = R.prop(1, a)
    const occ2 = R.prop(1, b)

    const name1 = R.prop(0, a)
    const name2 = R.prop(0, b)
    // console.log(occ1, occ2, name1, name2)
    // console.log(occ1 > occ2, occ1 < occ2, name1 < name2, name1 > name2)

    if (occ1 > occ2) return 1
    if (occ1 < occ2) return -1
    if (name1 < name2) return 1
    if (name1 > name2) return -1
    return 0
  }
  const getName = R.compose(
    R.join(''),
    R.map(R.prop(0)),
    R.slice(0, 5),
    R.reverse,
    R.sort(mysort),
    R.toPairs,
    R.map(R.length),
    R.groupBy(R.identity),
    R.replace(/-/g, ''),
    R.prop(0),
    R.match(/[a-z-]*[^-\d]/)
  )
  const getSourceName = R.compose(R.prop(0), R.match(/[a-z-]*[^-\d]/))
  const parse = R.converge(
    (checksum, sectorID, name, sourceName) => ({checksum, sectorID, name, sourceName}),
    [ getCheckSum, getSectorID, getName, getSourceName ]
  )
  return R.map(parse, lines).filter(val => val.name === val.checksum)
}

export function exo41 (path) {
  return R.reduce((acc, val) => acc + val.sectorID, 0, _magic(path))
}

export function exo42 (path, expected) {
  const rooms = _magic(path)
  return R.reduce((acc, x) => {
    const roomName = R.compose(
      R.join(' '),
      R.map(R.join('')),
      R.map(
        R.map(
          R.compose(w => String.fromCharCode(w + 97), R.modulo(R.__, 26), y => y.charCodeAt(0) + R.prop('sectorID', x) - 97))),
      R.split('-'),
      R.prop('sourceName')
    )(x)
    return (R.equals(roomName, expected)) ? R.prop('sectorID', x) : acc
  }, '', rooms)
}
