<template>
  <div>
    <div style="display: flex;width: 100%;flex-wrap: wrap">
      <div v-for="(item, Iimg) in imgs" :key="Iimg">
        <img :src="item" class="imgStyle">
      </div>
      <div class="img" @click="getImg">+</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: 1,
        imgs: [],
      }
    },
    props: {},
    methods: {
      getImg () {
        let _that = this
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            // console.log(res)
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            _that.imgs = res.tempFilePaths
            _that.$emit('imgsUp', res.tempFilePaths)
          }
        })
      }
    }
  }
</script>

<style>
  .imgStyle{
    width: 60px;
    height: 60px;
    margin: 5px;
  }
.img {
  width: 60px;
  height: 60px;
  border: 1px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: white;
  margin: 5px;
}
</style>