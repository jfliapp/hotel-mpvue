<template>
  <div @click="maplocation">
    searchMap
  </div>
</template>
<script>
  import QQMapWx from '../utils/qqmap-wx-jssdk.js'
  var qqmapsdk
  qqmapsdk = new QQMapWx({
    key: 'LFGBZ-GEDW6-MYNSF-M5FTZ-KPBF5-USB2Q'
  })
  export default {
    name: 'search',
    data () {
      return {
        map: ''
      }
    },
    onLoad () {
      wx.getLocation({
        type: 'gcj02',
        success (res) {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success (res) {
              console.log(res)
            }
          })
        }
      })
    }
  }
</script>