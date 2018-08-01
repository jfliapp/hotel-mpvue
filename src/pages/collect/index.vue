<template>
  <div style="background: rgb(245, 245, 245);">
    <div class="collect_all">
      <div>全部城市 (2)</div>
      <div>
        <img src="/static/imgs/right.png" class="img_right">
      </div>
    </div>
    <div style="display: flex;flex-direction: column;">
      <div class="collect_item"
      v-for="item in arrCollect" :key="item.id">
        <div>
          <img :src="item.img" class="collect_item_img">
        </div>
        <div class="collect_item_R">
          <div>{{item.name}}</div>
          <div class="collect_item_type">{{item.type}}</div>
          <div class="collect_item_R_Bottom">
            <div style="display: flex;flex-direction: column">
              <div><span style="color: rgb(0, 126, 226)">{{item.score}}分 {{item.grade}} </span>{{item.comment}}条点评</div>
              <div>{{item.distance}} {{item.place}}</div>
            </div>
            <div style="display: flex;flex-direction: column;text-align: right">
              <div>C-TRIP
                <span style="text-decoration:line-through;">{{item.price_old}}</span>
              </div>
              <div class="collect_item_R_Bottom_our">OUR PRICE {{item.price_new}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 这里怎么拿到你进来我怎么辨别
  export default {
    data () {
      return {
        arrCollect: [
          {
            id: 1,
            img: '/static/imgs/hotel_item.png',
            name: '上海市小南国花园酒店',
            type: '五星级',
            score: 4.9,
            grade: '卓越',
            comment: 15648,
            distance: '上海',
            place: '江湾/五角场',
            price_old: 120,
            price_new: 99
          },
          {
            id: 2,
            img: '/static/imgs/hotel_item.png',
            name: '上海市小南国花园酒店',
            type: '五星级',
            score: 4.9,
            grade: '卓越',
            comment: 15648,
            distance: '上海',
            place: '江湾/五角场',
            price_old: 120,
            price_new: 99
          }
        ]
      }
    },
    onShow() {
      console.log('removeTabBarBadge')
      wx.removeTabBarBadge({
        index: 2,
      })
    },
    // 这个是获取我点击的tab
    onTabItemTap(item) {
      console.log('onTabItemTap')
      console.log(item.index)
      console.log(item.pagePath)
      console.log(item.text)
    },
    methods: {

    }
  }
</script>
<style>
  .collect_all {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:30px;
    font-size: 13px;
    padding: 20px;
    background: white;
    border-bottom: 1px solid rgb(235, 235, 235);
  }
  .img_right{
    width: 15px;
    height: 15px;
  }
  .collect_item {
    display: flex;
    padding: 20px;
    height: 91px;
    background: white;
    border-bottom: 1px solid rgb(235, 235, 235);
    font-size: 14px;
  }
  .collect_item_type {
    font-size: 11px;
    color: rgb(136, 136, 136);
  }
  .collect_item_img {
    width: 91px;
    height:91px
  }
  .collect_item_R {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    flex:3;
  }
  .collect_item_R_Bottom {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    color: rgb(136, 136, 136);
  }
  .collect_item_R_Bottom_our {
    color: rgb(0, 126, 226);
    font-weight: 600;
  }
</style>

