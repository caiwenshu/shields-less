export default function ({
  leftWidth = 0,
  leftText = '',
  leftClolor = '#555',
  rightWidth = 0,
  rightText = '',
  rightColor = '#97CA00'
}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${leftWidth + rightWidth}" height="20">
  <linearGradient id="smooth" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <rect rx="3" width="${leftWidth + rightWidth}" height="20" fill="${leftClolor}"/>
  <rect rx="3" x="${leftWidth}" width="${rightWidth}" height="20" fill="${rightColor}"/>
  <rect x="${leftWidth}" width="4" height="20" fill="${rightColor}"/>
  <rect rx="3" width="${leftWidth + rightWidth}" height="20" fill="url(#smooth)"/>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="${leftWidth / 2 + 1}" y="15" fill="#010101" fill-opacity=".3">${leftText}</text>
    <text x="${leftWidth / 2 + 1}" y="14">${leftText}</text>
    <text x="${leftWidth + rightWidth / 2 - 1}" y="15" fill="#010101" fill-opacity=".3">${rightText}</text>
    <text x="${leftWidth + rightWidth / 2 - 1}" y="14">${rightText}</text>
  </g>
</svg>`
}
