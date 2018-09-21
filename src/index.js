const escapeXml = require('./escapeXml.js')
const getChartWidth = require('./getChartWidth.js')
const createPlatBadge = require('./createPlatBadge.js')
const createSquareBadge = require('./createSquareBadge.js')

module.exports = function ({
  leftText = 'none',
  leftColor = '#555',
  rightText = 'none',
  rightColor = '#97CA00',
  style = 'plat'
}) {
  leftText = escapeXml(leftText)
  rightText = escapeXml(rightText)

  const leftWidth = getChartWidth(leftText)
  const rightWidth = getChartWidth(rightText)

  if (style === 'plat') {
    return createPlatBadge({
      leftText, leftWidth, leftColor, rightText, rightWidth, rightColor
    })
  } else {
    return createSquareBadge({
      leftText, leftWidth, leftColor, rightText, rightWidth, rightColor
    })
  }
}
