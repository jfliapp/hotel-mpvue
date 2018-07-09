<template>
  <div>
    <div style="width: 100%">
      <img src="../../../static/imgs/hotelDetail.png" alt="" style="width:100%">
    </div>
    <div style="padding: 10px;font-size: 15px;">
      <div style="display: flex;padding-bottom: 10px;flex-direction: column;justify-content: space-around;height: 180px;border-bottom: .1px solid #ccc">
        <div v-for="item in arr" :key="item.id" style="font-size: 15px;"><span style="color: #ccc;">{{item.name}}&nbsp;&nbsp;</span>{{item.attr}}</div>
      </div>
      <div style="display: flex;justify-content: space-between;height: 60px;line-height: 60px">
        <div>更多房型设施</div>
        <div style="display: flex;align-items: center">更多设施<img src="../../../static/imgs/down.png" style="width: 20px;height: 20px"></div>
      </div>
      <div style="height: 100px;background: rgb(246, 246, 246)"></div>
      <div style="display: flex;justify-content: space-between;align-items: center;font-size: 15px;height: 60px">
        <div style="display: flex;flex-direction: column;">
          <div style="color: #ccc">C-TRIP <span style="text-decoration:line-through;">$120</span></div>
          <div>OUR PRICE $99</div> 
        </div>
        <div style="background: rgb(255, 107, 20);color: white;width: 80px;height: 30px;line-height: 30px;text-align: center"
        @click="order(1)">预定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'detals',
    data () {
      return {
        arr: [
          {
            id: 1,
            name: '面积',
            attr: ['25 - 28', '5 - 12', '有窗', '无阳台']
          },
          {
            id: 2,
            name: '早餐',
            attr: ['每日双早餐']
          },
          {
            id: 3,
            name: '床宽',
            attr: ['1张双人床1.5米']
          },
          {
            id: 4,
            name: '无烟',
            attr: ['不可吸烟']
          },
          {
            id: 5,
            name: '宽带',
            attr: ['全部房间WiFi 免费']
          }
        ]
      }
    },
    mounted () {
      wx.setNavigationBarTitle({
        title: '创客酒店'
      })
    },
    methods: {
      order (id) {
        console.log('进来路由拿数据')
        wx.navigateTo({
          url: '/pages/order/main?id=' + id
        })
      }
    }
  }
</script>