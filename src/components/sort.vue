<template>
  <div>
    <div class="filter_item" style="border-bottom: 1px solid #ccc;padding-bottom: 2px">
      <div @click="filterItem(item)" v-for="(item, index) in filter_item" :key="index">
        <div style="display: flex;align-items: center">
          <span :class="{click_change: item.active}">{{item.name}}&nbsp;&nbsp;</span>
          <img v-if="!item.active" class="img_class" src="../../static/imgs/down_san1.png"/>
          <img v-else class="img_class" src="../../static/imgs/up_san.png"/> |
        </div>
      </div>
      <div style="color: #1296db" @click="likeFli">&nbsp;欢迎度排序<img class="img_class" src="../../static/imgs/down_san.png"/></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        filter_item: [
          {
            name: '筛选',
            idex: 0,
            state: 'filter',
            active: false
          },
          {
            name: '位置距离',
            idex: 1,
            state: 'map',
            active: false
          },
          {
            name: '星级/价格',
            state: 'price',
            idex: 2,
            active: false
          }
        ],
      }
    }
  }
</script>
<style scoped>
  .img_class {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }
  .filter_item {
    display: flex; 
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    color: rgb(171,171,171);
    height: 50px;
    background: white;
  }
</style>