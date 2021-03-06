import Vue from 'vue'

var Fly = require('flyio/dist/npm/wx.js')
var fly = new Fly()
fly.config({
  baseURL: 'https://xxsfs.com'
})
fly.interceptors.request.use((req) => {
  console.log(req)
  wx.showLoading({title: '加载中...'})
  // wx.showNavigationBarLoading() // 显示导航条加载动画
  // 这里可能要加入头部信息  
  req.headers['X-Tag'] = 'flyio'
  return req
})
fly.interceptors.response.use(
  (res, promise) => {
    console.log(res)
    wx.hideLoading()
    // wx.hideNavigationBarLoading()
    return promise.resolve(res.data)
  },
  (err, promise) => {
    console.log(err)
    // wx.hideNavigationLoading()
    wx.showToast({
      title: err.message,
      icon: 'none',
      duration: 100
    })
  }
)

// fly.config.baseURL = 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/'

Vue.prototype.$http=fly
export default fly
