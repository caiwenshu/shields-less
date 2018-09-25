export default function ({
  leftWidth = 0,
  leftText = '',
  leftColor = '#555',
  rightWidth = 0,
  rightText = '',
  rightColor = '#44cc11'
}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${leftWidth + rightWidth}" height="20">
  <rect width="${leftWidth + rightWidth}" height="20" fill="${leftColor}"/>
  <rect x="${leftWidth}" width="${rightWidth}" height="20" fill="${rightColor}"/>
  <rect x="${leftWidth}" width="4" height="20" fill="${rightColor}"/>
  <rect width="${leftWidth + rightWidth}" height="20" fill-opacity=".1"/>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="${leftWidth / 2 + 1}" y="14">${leftText}</text>
    <text x="${leftWidth + rightWidth / 2 - 1}" y="14">${rightText}</text>
  </g>
</svg>`
}
