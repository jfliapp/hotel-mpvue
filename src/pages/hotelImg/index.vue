<template>
    <scroll-view scroll-y @scrolltolower="scrolltolower">
      <div style="display: flex;flex-wrap: wrap;background: #ccc;justify-content: flex-start">
        <div class="hotelImg_item" v-for="(item, index) in 100" :key="index">
          <img src="/static/imgs/hotel_item.png" class="hotelImg">
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
      scrolltolower() {
        console.log("箭头")
      }
    },
    onReachBottom() {
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