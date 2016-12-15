/* global test, expect */
import fs from 'fs'
import { exo51 } from './exo5'

test('test exo 5.1', () => {
  const path = 'abc'
  var start = clock()
  expect(exo51(path)).toBe('18f47a30')
  var duration = clock(start)
  console.log("Took "+duration+"ms")
})

// test('test real exo 5.1', () => {
//   const path = 'cxdnnyjw'
//   expect(exo51(path)).toBe(361724)
// })
function clock(start) {
   if ( !start ) return process.hrtime()
   var end = process.hrtime(start)
   return Math.round((end[0]*1000) + (end[1]/1000000))
}
