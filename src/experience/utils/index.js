export default {
  isBugIOSVersion: function () {
    const ua = navigator.userAgent.toLowerCase()
    const res = ua.match(/cpu iphone os (.*?) like mac os/)
    if (res == null) {
      return false
    } else {
      let version = res[1].replace(/_/g, '.')
      if (version >= '15') {
        return true
      }
    }
    return false
  },
  isMobile: function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
  }
}
