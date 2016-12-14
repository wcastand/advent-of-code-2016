/* global test, expect */
import fs from 'fs'
import { exo11, exo12, calculateDist } from './exo1'

test('test exo 1.1', () => {
  const path = fs.readFileSync('./exo1.txt', 'utf-8')
  expect(calculateDist(exo11(path))).toBe(242)
})

test('test exo 1.2', () => {
  const path = fs.readFileSync('./exo1.txt', 'utf-8')
  expect(calculateDist(exo12(path))).toBe(150)
})
