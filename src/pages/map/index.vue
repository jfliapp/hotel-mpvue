<template>
  <div>
    <button open-type="getUserInfo" @getuserinfo="onGotUserInfo">点击授权</button>
    <button open-type="openSetting">打开授权</button>
    <div @click="mapClick">
      mapLocation: 地址
    </div>
    <navigator url="/pages/comments/main">全部评论</navigator>
    <!-- <search></search> -->    
  </div>
</template>
<script>
  // import search from '@/components/search'
  // import QQMapWx from '@/utils/qqmap-wx-jssdk.js';
  // var qqmapsdk;
  export default {
    data () {
      return {
        name: 'xxx'
      }
    },
    components: {
      // clendar
    },
    created () {},
    mounted () {},
    methods: {
      mapClick () {
        console.log('wx.chooseLocation')
        wx.chooseLocation({
          success (res) {
            console.log(res)
          }
        })
      },
      onGotUserInfo (e) {
        console.log(e)
      }
    }
  }
</script>