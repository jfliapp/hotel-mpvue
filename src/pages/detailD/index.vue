<template>
  <div>
    <div style="width: 100%">
      <img src="/static/imgs/hotelDetail.png" alt="" style="width:100%">
    </div>
    <div class="detailD_facility">
      <div class="detailD_facility_item">
        <!-- <div v-for="item in arr" :key="item.id">
          <span style="color: #ccc;">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;</span>{{item.attr}}
        </div> -->
        <div>
          <span style="color: #ccc;">面积</span>&nbsp;&nbsp;&nbsp;&nbsp;
            {{detail_item.area}}m&sup2; | {{detail_item.floor}}层 | 可住{{detail_item.num}}人 | {{detail_item.window}} | {{detail_item.balcony}}
        </div>
        <div>
          <span style="color: #ccc;">早餐</span>&nbsp;&nbsp;&nbsp;&nbsp;{{detail_item.breakfast}}
        </div>
        <div>
          <span style="color: #ccc;">床宽</span>&nbsp;&nbsp;&nbsp;&nbsp;{{detail_item.bed}}
        </div>
        <div>
          <span style="color: #ccc;">无烟</span>&nbsp;&nbsp;&nbsp;&nbsp;{{detail_item.smoke}}
        </div>
        <div>
          <span style="color: #ccc;">宽带</span>&nbsp;&nbsp;&nbsp;&nbsp;
          {{detail_item.broadband}}<span style="color:rgb(0, 126, 226)">&nbsp;&nbsp;免费</span>
        </div>
      </div>
      <div class="detailD_facility_more">
        <div>更多房型设施</div>
        <div style="display: flex;align-items: center;color:rgb(0, 126, 226)">更多设施<img src="/static/imgs/down.png" style="width: 20px;height: 20px"></div>
      </div>
      <div style="height: 100px;background: rgb(246, 246, 246)"></div>
      <div class="detailD_facility_monney">
        <div style="display: flex;flex-direction: column;">
          <div style="color: #ccc">C-TRIP <span style="text-decoration:line-through;">$120</span></div>
          <div style="color:rgb(0, 126, 226)">OUR PRICE $99</div> 
        </div>
        <div class="detailD_facility_monney_order" @click="order(1)">预定</div>
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
        ],
        detail_item: {
          area: '25-28',
          floor: '5-12',
          num: 2,
          window: '有窗',
          balcony: '无阳台',
          breakfast: '每日双早',
          bed: '1张双人床1.5米',
          smoke: '不可吸烟',
          broadband: '全部房间WIFI',
        }
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
<style>
  .detailD_facility {
    padding: 10px;
    font-size: 15px;
  }
  .detailD_facility_item {
    display: flex;
    padding-bottom: 10px;
    flex-direction: column;
    justify-content: space-around;
    height: 180px;
    border-bottom: .1px solid #ccc
  }
  .detailD_facility_more {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px
  }
  .detailD_facility_monney {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    height: 60px
  }
  .detailD_facility_monney_order {
    background: rgb(255, 107, 20);
    color: white;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center
  }
</style>
