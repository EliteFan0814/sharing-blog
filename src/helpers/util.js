function friendlyDate(datsStr) {
  let dateObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''

  switch (true) {
    case space < 60000:
      str = '刚刚'
      break
    case space < 1000*3600:
      str = Math.floor(space/60000) + '分钟前'
      break
    case space < 1000*3600*24:
      str = Math.floor(space/(1000*3600)) + '小时前'
      break
    case space < 1000*3600*24*30:
      str = Math.floor(space/(1000*3600*24)) + '天前'
      break
    default:
      str = Math.floor(space/(1000*3600*24*30)) + '月前'
  }
  return str
}
// 将时间过滤函数添加到Vue原型链，方便直接调用
export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}