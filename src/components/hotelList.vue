<template>
  <div>
    <div>
      <navigator :url="'/pages/detail/main?id=' + item.id" v-for="(item, index) in hotels" :key="item.id">
        <hotel-item :item="item"></hotel-item>
      </navigator>    
    </div>
    <div>
      <div v-if="hasMore" class="hasmore">
        <img src="/static/imgs/loading.gif" class="imgLoad" mode="aspectFill"/>
        <div style="margin-left: 20px;">正在加载。。。</div>
      </div>
      <div v-else class="hasmore">
        <div>----- 我也是有底线的 -----</div>
      </div>
    </div>
    
  </div>  
</template>
<script>
  import HotelItem from '@/components/hotelItem'
  export default {
    name: 'hotelList',
    components: {
      'hotel-item': HotelItem
    },
    props: {
      hotels: {
        type: Array,
        default() {
          return []
        }
      },
      hasMore: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style>


  .hasmore{
    display: flex;
    justify-content: center;
    height: 50px;
    font-size: 15px;
    color: #ccc;
    align-items: center
  } 
  .imgLoad {
    width: 30px;
    height: 30px;
  }
</style>