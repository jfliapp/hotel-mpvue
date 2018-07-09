<template>
  <div>
    <div class="upload-img" :style="{width: Width + 'px', height: Height + 'px', lineHeight: LineHeight + 'px'}">
      <div class="upload-img--cross" v-show="!!imageSrc && !hideCross" @click="clearImg"></div>
      <img v-if="imageSrc" @click="triggerUpload" :src="imageSrc" class="upload-img--image" :style="{width: Width + 'px', height: Height + 'px'}"
      />
      <div v-else-if="!uploading" @click="triggerUpload" class="upload-img--icon">+</div>
    </div>
  </div>
</template>
<script>
  export default {
    // props: ['value', 'hideCross'],
    props: {
      value: [String],
      hideCross: [String],
      Width: {
        type: Number,
        default: 91
      },
      Height: {
        type: Number,
        default: 91
      },
      LineHeight: {
        type: Number,
        default: 91
      },
      MarginTopp: {
        type: Number,
        default: 100
      }
    },
    data () {
      return {
        uploading: false,
        imageSrc: this.value
      }
    },
    created () {
      // this.configUpload()
    },
    watch: {
      value (val) {
        this.imageSrc = val
      }
    },
    methods: {
      triggerUpload () {
        wx.chooseImage({
          success: function (res) {
            var tempFilePaths = res.tempFilePaths
            for (var i = 0; i < tempFilePaths.lenght; i++) {
              wx.uploadFile({
                url: 'https://example.weixin.qq.com/upload', // 地址换一个
                filePath: tempFilePaths[i],
                name: 'file',
                formData: {
                  'user': 'test'
                },
                success: function (res) {
                  // var data = res.data
                  console.log(res)
                  this.imageSrc = res.data
                }
              })
            }
          }
        })
      }
    }
  }
</script>

<style>
  .upload-img {
    float: left;
    width: 120px;
    height: 120px;
    /* padding: 5px; */
    border: 1px dashed red;
    border-radius: 6px 6px;
    cursor: pointer;
    position: relative;
    /* line-height: 120px; */
    text-align: center;
    margin-right: 20px;
    margin-top: 10px
  }

  .upload-img--cross {
    display: none;
    opacity: 0;
    /* transition: opacity .3s;
    transform: translate(50%, -50%); */
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
  }

  .upload-img:hover .upload-img--cross {
    display: block;
    opacity: 0.9;
    z-index: 10;
  }

  .upload-img--image {
    position: absolute;
    left: 0;
    width: 120px;
    height: 120px;
  }

  .ImageSlot {
    /* margin-left: 1px; */
    float: left;
    /* margin-top: 8%; */
    color: #999;
    font-size: 14px;
  }

  .upload-img--icon {
    width: 100%;
    height: 100%;
    line-height: unset
  }

</style>
