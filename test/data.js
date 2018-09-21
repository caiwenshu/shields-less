module.exports = {
  test1: `<svg xmlns="http://www.w3.org/2000/svg" width="188" height="20">
  <linearGradient id="smooth" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <rect rx="3" width="188" height="20" fill="#555"/>
  <rect rx="3" x="118" width="70" height="20" fill="#97CA00"/>
  <rect x="118" width="4" height="20" fill="#97CA00"/>
  <rect rx="3" width="188" height="20" fill="url(#smooth)"/>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="60" y="15" fill="#010101" fill-opacity=".3">npm 黄河远上白云间</text>
    <text x="60" y="14">npm 黄河远上白云间</text>
    <text x="152" y="15" fill="#010101" fill-opacity=".3">hello 世界</text>
    <text x="152" y="14">hello 世界</text>
  </g>
</svg>`,
  test2: `<svg xmlns="http://www.w3.org/2000/svg" width="188" height="20">
  <rect width="188" height="20" fill="#e64a19"/>
  <rect x="118" width="70" height="20" fill="#448aff"/>
  <rect x="118" width="4" height="20" fill="#448aff"/>
  <rect width="188" height="20" fill-opacity=".1"/>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="60" y="14">npm 黄河远上白云间</text>
    <text x="152" y="14">hello 世界</text>
  </g>
</svg>`
}
