<template>
  <div>
    <!-- <div><img :src="tempFilePaths" style="width: 60px;height: 60px;"></div> -->
    <div style="display: flex;flex-wrap: wrap">
      <div v-for="(item, Iimg) in imgs" :key="Iimg">
        <img :src="item" style="width: 60px;height: 60px;">
      </div>
      <div><img src="http://tmp/wx3fa1241bf28d72ff.o6zAJs2NYaDMwDZD6k2pmUpRqY5o.x4J6AReUzxUYa647c8460d31a341a30a7804f0a13439.jpg" style="width: 60px;height: 60px;"></div>
      <div class="img" @click="getImg">+</div>
    </div>
    <!-- <div><img src="http://tmp/wx3fa1241bf28d72ff.o6zAJs2NYaDMwDZD6k2p….4Ad0k0KsI0Xja647c8460d31a341a30a7804f0a13439.jpg" style="width: 60px;height: 60px;"></div> -->
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: 1,
        imgs: [],
        // img: require('@/../static/imgs/avatar.png')
      }
    },
    props: {
      imgAll: {
        tyep: String,
        default: 'dafd'
      }
    },
    methods: {
      getImg () {
        wx.chooseImage({
          count: 9, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            console.log(res)
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            this.imgs = res.tempFilePaths
            console.log(res.tempFilePaths[0])
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