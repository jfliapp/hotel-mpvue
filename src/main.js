import Vue from 'vue'
import App from './App'

import store from './store/index'

// import Flyapi from './utils/fly'
// Vue.use(Flyapi)
Vue.prototype.$store=store;
Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/map/main', 'pages/wode/main', 'pages/comments/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#004891',
      navigationBarTitleText: '在线订票',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [
        {
          'pagePath': 'pages/wode/main',
          'iconPath': '/static/imgs/tablist_home.png',
          'selectedIconPath': '/static/imgs/tablist_home.png',
          // 'text': 'main'
        },
        {
          'pagePath': 'pages/map/main',
          'iconPath': '/static/imgs/tablist_map.png',
          'selectedIconPath': '/static/imgs/tablist_map.png',
          // 'text': 'Map'
        },
        {
          'pagePath': 'pages/collect/main',
          'iconPath': '/static/imgs/tablist_shop.png',
          'selectedIconPath': '/static/imgs/tablist_shop.png',
          // 'text': 'Collect'
        },
        {
          'pagePath': 'pages/myorder/main',
          'iconPath': '/static/imgs/tablist_myorder.png',
          'selectedIconPath': '/static/imgs/tablist_myorder.png',
          // 'text': 'MyOrder'
        }
      ]
    }
  }
}
