<template>
  <div style="background: red;">
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <div>xxx</div>
    <div style="width: 100%;height: 50px">xxx</div>
    <calend></calend>
  </div>
</template>

<script>
// import card from '@/components/card'
import calend from '@/components/clend'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  components: {
    calend
  },
  methods: {
    bindViewTap () {
      const url = '../wode/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
  
</style>
