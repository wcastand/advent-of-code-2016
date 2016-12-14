/* global test, expect */
import fs from 'fs'
import { exo41, exo42 } from './exo4'

test('test exo 4.1', () => {
  const path = 'aaaaa-bbb-z-y-x-123[abxyz]\na-b-c-d-e-f-g-h-987[abcde]\nnot-a-real-room-404[oarel]\ntotally-real-room-200[decoy]'
  expect(exo41(path)).toBe(1514)
})

test('test real exo 4.1', () => {
  const path = fs.readFileSync('./exo4.txt', 'utf-8')
  expect(exo41(path)).toBe(361724)
})


test('test exo 4.2', () => {
  const path = 'qzmt-zixmtkozy-ivhz-343[zimth]'
  expect(exo42(path, 'very encrypted name')).toBe(343)
})

test('test real exo 4.2', () => {
  const path = fs.readFileSync('./exo4.txt', 'utf-8')
  expect(exo42(path, 'northpole object storage')).toBe(482)
})