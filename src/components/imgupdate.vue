<template>
  <div>
    <div class="img" @click="getImg">+</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: 1
      }
    },
    methods: {
      getImg () {
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            // var tempFilePaths = res.tempFilePaths
            console.log(res)
          }
        })
      }
    }
  }
</script>

<style>
.img {
  width: 60px;
  height: 60px;
  border: 1px dashed black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: white
}
</style>