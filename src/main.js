import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/mains/main', '^pages/orderDetail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#004891',
      navigationBarTitleText: '在线订票',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [
        {
          'pagePath': 'pages/mains/main',
          'text': 'main'
        },
        {
          'pagePath': 'pages/map/main',
          'text': 'Map'
        },
        {
          'pagePath': 'pages/collect/main',
          'text': 'Collect'
        },
        {
          'pagePath': 'pages/myorder/main',
          'text': 'MyOrder'
        }
      ]
    }
  }
}
