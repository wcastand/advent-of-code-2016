/* global test, expect */
import fs from 'fs'
import { exo51 } from './exo5'

test('test exo 5.1', () => {
  const path = 'abc'
  expect(exo51(path)).toBe('18f47a30')
})

// test('test real exo 5.1', () => {
//   const path = 'cxdnnyjw'
//   expect(exo51(path)).toBe(361724)
// })
