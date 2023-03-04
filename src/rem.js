const rootFontSize = 16
const designWidth = 375
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize =
  (deviceWidth * rootFontSize) / designWidth + 'px'
