<template>
  <div class="commentsDetail">
    <div class="commentsDetail_title">上海8090青年求职公寓</div>
    <div class="commentsDetail_info">
      <div class="commentsDetail_info_item">
        <div>房间卫生</div>
        <div><star v-model.lazy="homeStar"/></div>
      </div>
      <div class="commentsDetail_info_item">
        <div>周边环境</div>
        <div><star/></div>
      </div>
      <div class="commentsDetail_info_item">
        <div>酒店服务</div>
        <div><star/></div>
      </div>
      <div class="commentsDetail_info_item">
        <div>设施服务</div>
        <div><star/></div>
      </div>
    </div>
    <div class="commentsTypes">
      <div style="display: flex;">
        <div class="commentsType_L">出游类型</div>
        <div class="commentsType_R">
          <div class="commentsItem" :class="{commentsChoose: item.state}" v-for="(item,index) in typeArr" :key="item.id"
           @click="commentsType(item)">{{item.type}}</div>
        </div>
      </div>
    </div>
    <div class="commentsDetail_update">
      <div style="position: absolute;top: 0;right: 0;">
        <img src="/static/imgs/grade.png" class="img_grade">
      </div>
      <div class="commentsDetail_update_img">
        <div>
          <imgupdate @imgsUp="imgsGet"></imgupdate>
        </div>
        <div v-show="!(imgUp.length > 0)" class="imgTip">上传图片可抽奖哦！建议上传设施、周围环境、、外观等细节照片，最多9张</div>
      </div>
      <div class="commentsDetail_update_text">
        <textarea v-model.lazy="textValue" class="commentsDetail_update_text_area" placeholder="写点评赚积分免房！您可分享对酒店环境、服务、设施和价格的评论"></textarea>
      </div>
      <div class="commentsDetail_rule">
        <div style="color: #ccc;">至少5个字</div>
        <div style="color: rgb(0, 126, 226)">
          点评积分规则
          <img src="/static/imgs/right.png" class="img_right">
        </div>
      </div>
      <div class="submite" @click="submit">提交</div>
    </div>
  </div>
</template>
<script>
  import star from '@/components/star'
  import imgupdate from '@/components/imgupdate'

  export default {
    data () {
      return {
        homeStar: 3,
        textValue: '',
        imgUp: [],
        typeArr: [
          {
            id: 1,
            type: '商业出差',
            state: true  
          },
          {
            id: 2,
            type: '商业出差',
            state: false  
          },
          {
            id: 3,
            type: '商业出差',
            state: false  
          },
          {
            id: 4,
            type: '商业出差',
            state: false  
          },
          {
            id: 5,
            type: '商业出差',
            state: false  
          },
          {
            id: 6,
            type: '商业出差',
            state: false  
          },
          {
            id: 7,
            type: '其他',
            state: false  
          }
        ]  
      }
    },
    components: {
      star,
      imgupdate
    },
    computed: {
      
    },
    mounted() {

    },
    methods: {
      // z这个是 下面传上来的图片
      imgsGet (val) {
        this.imgUp = val
      },
      // 选择的类型
      commentsType (val) {
        console.log(val)
        let id = val.id
        this.typeArr = this.typeArr.map((item) => {
          if (id == item.id) {
            item.state = !item.state
          }
          return item
        })
      },
      // 提交全部的数据
      submit() {
        console.log(this.imgGet)
      }
    }
  }
</script>
<style>
  .commentsDetail {
    background:rgb(246, 246, 246);
    font-size: 15px;
  }
  .commentsDetail_title {
    height: 20px;
    line-height: 20px;
    padding: 20px
  }
  .commentsDetail_info {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    font-size: 13px;
    color: rgb(3, 3, 3);
    /* height: 180px; */
    justify-content: space-around
  }
  .commentsDetail_info_item {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(245,245,245)
  }
  .commentsTypes {
    margin-top: 10px;
    /* height: 70px; */
    background: white;
    padding: 20px
  }
  .commentsType_L {
    width:85px;
    /* flex: 1; */
    font-size: 10px;
    height: 30px;
    line-height: 30px
  }
  .commentsType_R {
    /* width: 300px; */
    /* flex: 4; */
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 12px;
  }
  .commentsItem{
    background: rgb(237, 245, 251);
    width: 66px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color: rgb(93,93,93);
    margin: 5px 5px 5px 0;
  }
  .commentsChoose {
    background: red  
  }
  .submite {
    width: 90%;
    margin: 20px auto;
    height: 44px;
    border-radius: 6px;
    text-align: center;
    line-height: 44px;
    color: white;
    background: rgb(254, 105, 19)
  }
  .imgTip {
    width: 250px;
    color: rgb(136,136,136);
    font-size: 13px;
    padding-left: 20px
  }
  .commentsDetail_update {
    height: 350px;
    position: relative;
  }
  .commentsDetail_update_img {
    padding: 20px;
    display: flex;
    align-items: center
  }
  .commentsDetail_update_text {
    padding: 20px;
  }
  .commentsDetail_update_text_area {
    background: white;
    width: 100%;
    padding: 20px;
    height: 90px;
    box-sizing: border-box
  }
  .commentsDetail_rule {
    display: flex;
    font-size: 12px;
    flex-direction: column;
    text-align: right;
    height: 30px;
    padding-right: 20px;
    justify-content: space-around
  }
  .img_grade {
    width: 30px;
    height: 30px;
  }
  .img_right {
    width: 10px;
    height: 10px;
  }
</style>