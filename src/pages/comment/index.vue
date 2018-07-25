<template>
  <div class="comments">
    <div class="comments_integral">
      <div>3天内点评积分+50，传图还可抽奖！</div>
      <div style="display: flex;align-items: center">积分规则<img src="/static/imgs/rule.png" style="width: 15px;height: 15px;margin-left: 10px"></div>
    </div>
    <div class="comments_details">
      <div class="comments_details_title">待点评 ({{len}})</div>
      <div class="comments_details_item"
      v-for="item in comments" :key="item.id" @click="commentDetail(item.id)">
        <div class="comments_details_item_top">
          <div>{{item.name}}</div>
          <div class="comments_details_item_top_R">
            写点评
            <img src="/static/imgs/rule.png" style="width: 15px;height: 15px;margin-left: 10px">
          </div>
        </div>
        <div class="comments_details_item_info">
          <div>{{item.timeStart}}至{{item.timeEnd}}</div>
          <div style="width: 85%">{{item.details}}</div>
        </div>
        <div style="color: rgb(0, 126, 226);">写完本条评论最多可获得130积分</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        len: 0,
        comments: [
          {
            id: 1,
            name: '上海市8080青年求职公寓',
            timeStart: '2018-06-12',
            timeEnd: '2018-06-13',
            details: '女生12人床位房（无窗）（一张床位）（女生入住）（11天内预定）（内宾）（无窗）'
          },
          {
            id: 2,
            name: '上海市8081青年求职公寓',
            timeStart: '2018-16-12',
            timeEnd: '2018-26-13',
            details: '女生12人床位房（无窗）（一张床位）（女生入住）（11天内预定）（内宾）（无窗）'
          }
        ]
      }
    },
    mounted () {
      console.log(this.comments.length)
      this.len = this.comments.length
    },
    methods: {
      commentDetail (id) {
        wx.navigateTo({
          url: '/pages/commentDetail/main?id=' + id
        })
      }
    }
  }
</script>

<style>
.comments {
  background: rgb(246, 246, 246);
  min-height: 600px;
  font-size: 15px;
}
.comments_integral {
  font-size: 13px;
  color: rgb(0, 126, 226);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: white
}
.comments_details {
  margin-top: 10px;
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.comments_details_title {
  height: 30px;
}
.comments_details_item {
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-around
}
.comments_details_item_top {
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-size: 17px;
}
.comments_details_item_top_R {
  display: flex;
  align-items: center;
  color: rgb(0, 126, 226);
  font-size: 13px
}
.comments_details_item_info {
  color: #ccc;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-around;
  font-size: 13px
}
</style>
