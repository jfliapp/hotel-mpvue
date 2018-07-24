<template>
    <scroll-view scroll-y>
      <div style="display: flex;flex-wrap: wrap;background: #ccc;justify-content: flex-start">
        <div class="hotelImg_item" v-for="(item, index) in 100" :key="index" @click="itemClick(item)">
          <img src="/static/imgs/hotelDetail.png" class="hotelImg">
        </div>
      </div>
  </scroll-view>
</template>
<script>
  export default {
    data() {
      return {
        img: "22"
      }
    },
    methods: {      
      // scrolltolower() {
      //   console.log("箭头")
      // }
      // 拿接口的数据 并进行每次触底都要page+1一遍
      testBottom() {
        console.log("触发到底部的事件")
        // 
      }
    },
    onReachBottom() {
      this.testBottom()
      console.log("到底部了-----")
    },
  }
</script>
<style>
  .hotelImg_item {
    width: 120px;
    height: 120px;
    padding: 2px;
  }
  .hotelImg {
    width: 120px;
    height: 120px;
  }
</style>