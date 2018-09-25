const shieldsLess = require('./dist/shields-less.js')

const svg = shieldsLess.svg({
  leftText: 'npm 黄河远上白云间',
  rightText: 'hello 世界'
})

console.log(svg)
