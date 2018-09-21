import escapeXml from './escapeXml.js'
import getChartWidth from './getChartWidth.js'
import createPlatBadge from './createPlatBadge.js'
import createSquareBadge from './createSquareBadge.js'

export function svg ({
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
