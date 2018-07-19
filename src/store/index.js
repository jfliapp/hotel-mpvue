import Vue from 'vue'
import Vuex from 'vuex'

import * as type from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    login: '',
  },
  mutations: {
    // 清除/重置所有state的值
    [type.CLEAR_STATE](state) {
      state.name = ''
      state.login = ''
    },
    // 获取登录的名字
    [type.SET_LOGIN](state, login) {
      state.name = login
    }
  }
})