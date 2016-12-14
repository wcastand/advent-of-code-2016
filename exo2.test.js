import fs from 'fs'
import { exo21, exo22 } from './exo2'

test('test exo 2.1', () => {
  const path = 'ULL\nRRDDD\nLURDL\nUUUUD'
  expect(exo21(path)).toBe('1985')
})

test('test real exo 2.1', () => {
  const path = fs.readFileSync('./exo2.txt', 'utf-8')
  expect(exo21(path)).toBe('33444')
})


test('test exo 2.2', () => {
  const path = 'ULL\nRRDDD\nLURDL\nUUUUD'
  expect(exo22(path)).toBe('5DB3')
})

test('test real exo 2.2', () => {
  const path = fs.readFileSync('./exo2.txt', 'utf-8')
  expect(exo22(path)).toBe('446A6')
})