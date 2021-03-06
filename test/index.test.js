/* global test, expect */
const shieldsLess = require('../dist/shields-less.js')
const testData = require('./data.js')

test('test1', () => {
  const svg = shieldsLess.svg({
    leftText: 'npm 黄河远上白云间',
    rightText: 'hello 世界'
  })
  expect(svg).toBe(testData.test1)
})

test('test2', () => {
  const svg = shieldsLess.svg({
    leftText: 'npm 黄河远上白云间',
    rightText: 'hello 世界',
    style: 'plat'
  })
  expect(svg).toBe(testData.test1)
})

test('test2', () => {
  const svg = shieldsLess.svg({
    leftText: 'npm 黄河远上白云间',
    rightText: 'hello 世界',
    style: 'square',
    leftColor: '#e64a19',
    rightColor: '#448aff'
  })
  expect(svg).toBe(testData.test2)
})

