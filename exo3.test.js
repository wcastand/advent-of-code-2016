/* global test, expect */
import fs from 'fs'
import { exo31, exo32 } from './exo3'

test('test exo 3.1', () => {
  const path = '5 10 25\n5 28 25'
  expect(exo31(path)).toBe(1)
})

test('test real exo 3.1', () => {
  const path = fs.readFileSync('./exo3.txt', 'utf-8')
  expect(exo31(path)).toBe(1050)
})

test('test exo 3.2', () => {
  const path = '101 301 501\n102 302 502\n103 303 503\n201 401 601\n202 402 602\n203 403 603'
  expect(exo32(path)).toBe(6)
})

test('test real exo 3.2', () => {
  const path = fs.readFileSync('./exo3.txt', 'utf-8')
  expect(exo32(path)).toBe(1921)
})
