import Vue from 'vue'
var Fly = require('flyio/dist/npm/wx.js')
var fly = new Fly()

fly.interceptors.request.use((config, promise) => {
  config.headers['X-Tag'] = 'flyio'
  return config
})

fly.config.baseURL = 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/'

Vue.prototype.$http = fly

export default fly
