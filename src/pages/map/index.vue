<template>
  <div>
    <button open-type="getUserInfo" @getuserinfo="onGotUserInfo">点击授权</button>
    <button open-type="openSetting">打开授权</button>
    <div @click="mapClick">
      mapLocation: 地址
    </div>
    <!-- <navigator url="/pages/comments/main">全部评论</navigator> -->
    <search></search>
    <!-- 地图测试 -->
    <map id="map" scale="14" latitude="23.099994" longitude="113.324520"
      :markers="markers" @markertap="markertap" @tap="tap" @updated="updated"
      @regionchange="regionchange" show-location style="width: 100%; height: 300px;">
    </map>
    <!-- <map id="myMap" latitude="23.099994" longitude="113.324520" scale="14"
      :markers="markers" style="width: 100%; height: 300px;"
      show-location>
      <cover-view>我可以在地图上最高级</cover-view>
    </map> -->
  </div>
</template>
<script>
  import search from '@/components/search'
  import QQMapWx from '@/utils/qqmap-wx-jssdk.js';
  var qqmapsdk;
  qqmapsdk = new QQMapWx({
    key: 'LFGBZ-GEDW6-MYNSF-M5FTZ-KPBF5-USB2Q'
  })
  export default {
    data () {
      return {
        markers: [
          {
            iconPath: '/static/imgs/great.png',
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 30,
            height: 30
          },
          {
            iconPath: '/static/imgs/map.png',
            id: 1,
            latitude: 23.09,
            longitude: 113.32,
            width: 30,
            height: 30
          },
          {
            iconPath: '/static/imgs/map.png',
            id: 2,
            latitude: 23.108681,
            longitude: 113.3257815,
            width: 30,
            height: 30
          }
        ]
      }
    },
    components: {
      search
    },
    mounted() {
      this.mapCtx = wx.createMapContext("myMap")
      // this.mapCtx.getCenterLocation({
      //   success: function(res) {
      //     console.log(res, "这个是获取当前位置的")
      //   }
      // })
      // this.mapCtx.moveToLocation()
      // this.mapCtx.includePoints({
      //   points: [
      //     {
      //       latitude: 23.099994, longitude: 113.324520
      //     }, {
      //       latitude: 23.099956, longitude: 113.324515
      //     }
      //   ]
      // })
    },    
    onLoad() {
      qqmapsdk.search({
        keyword: '酒店',
        success: function (res) {
          console.log(res,"酒店search");
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        }
      });
    },
    methods: {      
      // 这个是测试获取全部城市的列表
      mapClick1() {
        qqmapsdk.getCityList({
          success: function(res) {
              console.log(res, "获取城市列表");
          },
          fail: function(res) {
              console.log(res);
          },
          complete: function(res) {
              // console.log(res);
          }
        });
      },
      // 这个是由地址获取经纬度的
      mapClick2() {
        qqmapsdk.geocoder({
          address: '广州市',
          success: function(res) {
              console.log(res, "有地址获取经纬度");
          },
          fail: function(res) {
              console.log(res);
          },
          complete: function(res) {
              console.log(res, "有地址获取经纬度-- complete");
          }
        })
      },
      // 这个是测试我这个位置到各个酒店的距离
      mapClick() {
        qqmapsdk.calculateDistance({          
          to:[{
              latitude: 23.099994,
              longitude: 113.324520
          }],
          success: function(res) {
              console.log(res, "获取到达各个地方就到你的距离");
          },
          fail: function(res) {
              console.log(res);
          },
          complete: function(res) {
              console.log(res, "获取到达各个地方就带你的距离--complete");
          }
        });
      },
      regionchange(e) {
        console.log(e.type, "regionchange视野发生变化时触发")
      },
      markertap(e) {
        console.log(e, "markertap点击标记点时触发")
      },      
      tap(e) {
        console.log(e, "tap点击地图时触发")
      },
      updated(e) {
        console.log(e, "updated 地图渲染更新完成时触发")
      }
    }
  }
</script>