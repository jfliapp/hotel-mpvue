<template>
  <div>
    <div class="commentsTab">
      <div class="tab">全部(434235)</div>
      <div class="tab">好评(1563)</div>
      <div class="tab">待改善(2342)</div>
      <div class="tab">有图(2342)</div>
    </div>
    <div style="display: flex;flex-direction: column">
      <div style="display: flex;justify-content: space-between;height: 50px;background: #ccc;align-items: center">
        <div style="display: flex;align-items: center">
          <div><img src="/static/imgs/avatar.png" class="img"></div>
          <div>xfdsf</div>
        </div>
        <div>发表时间</div>
      </div>
      <div style="display: flex;flex-direction: column">
        <div style="display: flex;justify-content: space-between;height: 50px;align-items: center">
          <div style="display: flex;align-items: center">
            <div><img src="/static/imgs/avatar.png" class="img"></div>
            <div>xfdsf</div>
          </div>
          <div style="display: flex">
            <div>xxx1</div>
            <div>xxx2</div>
          </div>
        </div>
        <div>还可以东西</div>
        <div>dsfasdfasdfasdfasgadadf</div>
        <div>
          图片
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
 .commentsTab {
   display: flex;
   font-size: 15px;
 }
 .img {
   width: 15px;
   height: 15px;
 }
 .tab {
   margin-right: 10px;
 }
</style>