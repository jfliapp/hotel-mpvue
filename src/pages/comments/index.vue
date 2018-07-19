<template>
  <div class="comments_all">
    <div class="commentsTab">
      <div class="tab">全部(434235)</div>
      <div class="tab">好评(1563)</div>
      <div class="tab">待改善(2342)</div>
      <div class="tab">有图(2342)</div>
    </div>
    <div class="comments_item">
      <div class="comments_item_T">
        <div style="display: flex;align-items: center">
          <div><img src="/static/imgs/great.png" class="img"></div>
          <div class="comments_item_T_tilte">xfdsf</div>
        </div>
        <div class="comments_item_T_time">发表时间2018.05.25</div>
      </div>
      <div class="comments_item_B">
        <div class="comments_item_B_subT">
          <div style="display: flex;align-items: center">
            <div>5分 ooooo</div>
          </div>
          <div style="display: flex;">
            <div>xxx1</div>
            <div>xxx2</div>
          </div>
        </div>
        <div class="comments_item_B_common_all">还可以东西</div>
        <div class="comments_item_B_common">
          打发十分沙发沙发首发式地方十分文物给沙发上围观发沙发打发十分沙发沙发首发式地方十分文物给沙发上围观发沙发
          打发十分沙发沙发首发式地方十分文物给沙发上围观发沙发打发十分沙发沙发首发式地方十分文物给沙发上围观发沙发
        </div>
        <div>
          <div>
            <img src="/static/imgs/great.png" style="width: 80px;height: 100px;">
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'xx'
      }
    }
  }
</script>
<style scoped>
  .comments_all {
    font-size: 15px;
    background: #ccc;
  }
 .commentsTab {
    font-size: 13px;
    display: flex;
    height: 50px;
    background: #fff;
    padding-left: 10px;
    align-items: center;
    justify-content: space-around
 }
 .tab {
    background: #d324d3;
    padding: 3px;
    border-radius: 20px 20px;
 }
 .comments_item {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;
    background: #fff;
 }
  .comments_item_T {
    display: flex;
    justify-content: space-between;
    height: 50px;
    font-size: 13px;
    /* background: #ccc; */
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  .comments_item_T_tilte {
    margin-left: 10px;
  }
  .comments_item_T_time {
    color: #ccc;
  }
  .img {
    width: 30px;
    height: 30px;
    border-radius: 50% 50%;
  }
  .comments_item_B {
    display: flex;
    flex-direction: column
  }
  .comments_item_B_subT {
    display: flex;
    justify-content: space-between;
    height: 50px;
    font-size: 13px;
    align-items: center
  }
  .comments_item_B_common_all {
    height: 30px;
    line-height: 30px;
  }
  .comments_item_B_common {
    display: felx;
    flex-wrap: wrap;
    font-size: 13px;
  }
</style>