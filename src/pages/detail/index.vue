<template>
  <div style="position: relative;background: rgb(245, 245, 245);">
    <div>
      <img src="/static/imgs/hotelDetail.png" style="width: 100%">
    </div>    
    <div class="detail_all_position">
      <div class="detail_all_position_top">
        <div>上海Pagoda君亭设计酒店</div>
        <p class="detail_all_position_top_info">2017年开业 - 豪华型</p>
      </div>
      <div class="detail_all_position_bottom">
        <div class="detail_all_position_bottom_info">
          <div class="detail_all_position_bottom_info_grade">4.2分</div>
          <span style="color:rgb(0, 126, 226)">很好</span>
          <div style="color:rgb(254, 105, 19)">设计不错  房间很好</div>
          <div>
            1195条点评
            <img src="/static/imgs/right.png" class="img_right">
          </div>
        </div>
        <div class="detail_place">
          <div>
            江湾五角场 证学路77好
          </div>
          <div><img src="/static/imgs/map.png" class="img_date_right"></div>
        </div>
      </div>
    </div>
    <div class="dateChooseDetail">
      <div class="noLogin">
        <div class="loginValue">
          <div style="color:rgb(254, 105, 19)">新客首次下单,享满减优惠,上限￥30</div>
          <div>带有&nbsp;<span class="logingift">送好礼</span>&nbsp;酒店均可使用</div>
        </div>
        <div class="login">登录领取</div>
      </div>
      <div class="dateDetail">
        <div class="dateDetail_L">
          <div style="display: flex;flex-direction: column;">
            <div class="outIn">入住</div>
            <div>6月11日<span class="dateDay">今天</span></div>
          </div>
          <div class="days">一晚</div>
          <div style="display: flex;flex-direction: column;">
            <div class="outIn">离店</div>
            <div>6月12日<span class="dateDay">明天</span></div>
          </div>
          <div>
            <img src="/static/imgs/right.png" class="img_date_right">
          </div>
        </div>
        <div class="detailShow">
          <div class="detailShowItem">含早餐</div>
          <div class="detailShowItem">大床</div>
          <div class="detailShowItem">双床</div>
          <div class="detailShowItem">免费取消</div>
          <div class="detailShowItem">筛选
            <img src="/static/imgs/down.png" class="img_right">
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%;">
      <div v-for="item in hotel_item" :key="item.id" @click="hotelDetai(item)"
       class="hotel_Detai">
        <div style="position: relative;">
          <img :src="item.img" class="hotel_Detail_img">
          <div v-show="item.popular" class="popular">人气</div>
        </div>
        <div class="hotel_Detai_R">
          <div style="display: flex;align-items: center">{{item.name}} 
            <img src="/static/imgs/right.png" class="hotel_Detai_R_img"></div>
          <div>{{item.attr[0]}}m&sup2; {{item.attr[1]}} <span style="color:rgb(0, 126, 226)">{{item.attr[2]}}</span></div>
          <div class="hotel_Detai_R_gift">送好礼</div>
          <div class="hotel_Detai_R_Bottom">
            <div class="hotel_Detai_R_Bottom_T">
              <div>免费取消 立即确认</div>
              <div>无需提前支付房费</div>
            </div>
            <div class="hotel_Detai_R_Bottom_B">
              <div style="color: #ccc">C-TRIP <span style="text-decoration:line-through;">${{item.old_price}}</span></div>
              <div>OUR PRICE ${{item.new_price}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="guest_evaluation_all">
      <div>往客评价<span class="guest_evaluation_num">(1325)条</span></div>
      <div class="guest_evaluation_comments">
        <div class="guest_evaluation_comments_item" @click="guestEvaluation(item.id)"
         v-for="(item, index) in guest_evaluation_comments" :key="item.id">
         {{item.name}}&nbsp;{{item.comments}}
        </div>
      </div>
      <div class="guest_evaluation_item">
        <div style="display: flex;align-items: center;">
          <div class="guest_evaluation_item_grade">5.0</div>
          <div style="margin-left:10px">1352854***</div>
          <div class="guest_evaluation_item_star">点评新星</div>
        </div>
        <div class="guest_evaluation_item_title">2018-04入住 和式家庭居</div>
        <div>房间设计花心思有亮点，整洁干、大气明朗、咖啡机可爱，服务人员态度和善，很有耐心，早餐丰富。</div>
      </div>
      <div class="all_comments" @click="comment(1)">查看全部点评</div>
    </div>
    <div class="hotel_QuestionAnswer">
      <div>酒店问答<span class="guest_evaluation_num">(1325)条</span></div>
      <div class="hotel_QuestionAnswer_item">
        <div class="hotel_QuestionAnswer_item_ask">问</div>
        <div style="width: 75%;margin-left: 3%">
          请问十七岁人员没有两名监护人员陪同的情况下可以申请入住吗？
        </div>
        <div class="hotel_QuestionAnswer_item_answer">
          3个回答
        </div>
      </div>
      <div class="hotel_QuestionAnswer_item">
        <div class="hotel_QuestionAnswer_item_ask">问</div>
        <div style="width: 75%;margin-left: 3%">
          请问十七岁人员没有两名监护人员陪同的情况下可以申请入住吗？
        </div>
        <div class="hotel_QuestionAnswer_item_answer">
          3个回答
        </div>
      </div>
      <div class="all_comments" @click="comment(1)">查看全部点评</div>
    </div>
    <div class="hotel_information">
      <div>酒店详情<span class="guest_evaluation_num">(1325)条</span></div>
      <div class="hotel_information_policy">
        <div class="hotel_information_policy_img">
          <img src="/static/imgs/hotel_detail_icon.png" class="img_hotel_detail_icon">
          <span>&nbsp;酒店政策</span>
        </div>
        <div style="color: #ccc">入住时间：14:00以后    离店时间：12:00以前</div>
        <div style="color: #ccc">
          酒店提示：根据《上海市公共场所控制吸烟条例》，从2017年3月1日起，酒店不能安排吸烟房，并禁止室内吸烟。
        </div>
      </div>
      <div class="hotel_information_institutions">
        <div class="hotel_information_policy_img">
          <img src="/static/imgs/hotel_detail_icon.png" class="img_hotel_detail_icon">
          <span>&nbsp;酒店设施</span>
        </div>
        <div class="hotel_information_institutions_pic">
          <div style="display: flex;justify-content: space-around">
            <div class="hotel_information_institutions_pic_item"
              v-for="(item, index) in hotel_information_institutions_pic_item" :key="item.id">
              <div>
                <img src="/static/imgs/wifi.png" class="img_wifi">
              </div>
              <div style="color: #ccc">{{item.name}}</div>
            </div>            
          </div>
          <div><img src="/static/imgs/right.png" class="img_right"></div>
        </div>
      </div>
      <div class="hotel_information_way">
        <div class="hotel_information_policy_img">
          <img src="/static/imgs/hotel_detail_icon.png" class="img_hotel_detail_icon">
          <span>&nbsp;酒店设施</span>
        </div>        
        <div class="hotel_information_way_details">
          <div>
            <img src="/static/imgs/fly.png" class="hotel_information_way_details_img">
          </div>
          <div class="hotel_information_way_details_D">
            <div class="hotel_information_way_details_D_item">
              <div>上海是虹桥国际jic</div>
              <div style="color:#ccc;">27.4公里，驾车约49分钟</div>
            </div>
            <div class="hotel_information_way_details_D_item">
              <div>上海是虹桥国际jic</div>
              <div style="color:#ccc;">27.4公里，驾车约49分钟</div>
            </div>
          </div>
        </div>
        <div class="hotel_information_way_details">
          <div>
            <img src="/static/imgs/fly.png" class="hotel_information_way_details_img">
          </div>
          <div class="hotel_information_way_details_D">
            <div class="hotel_information_way_details_D_item">
              <div>上海是虹桥国际jic</div>
              <div style="color:#ccc;">27.4公里，驾车约49分钟</div>
            </div>
            <div class="hotel_information_way_details_D_item">
              <div>上海是虹桥国际jic</div>
              <div style="color:#ccc;">27.4公里，驾车约49分钟</div>
            </div>
          </div>
        </div>
        <div class="hotel_information_way_details">
          <div>
            <img src="/static/imgs/fly.png" class="hotel_information_way_details_img">
          </div>
          <div class="hotel_information_way_details_D">
            <div class="hotel_information_way_details_D_item">
              <div>上海是虹桥国际jic</div>
              <div style="color:#ccc;">27.4公里，驾车约49分钟</div>
            </div>
            <div class="hotel_information_way_details_D_item">
              <div>上海是虹桥国际jic</div>
              <div style="color:#ccc;">27.4公里，驾车约49分钟</div>
            </div>
          </div>
        </div>
        <div class="all_comments" @click="comment(1)">查看全部点评</div>
      </div>
    </div>
    <div class="nearby_type_hotel">
      <div class="nearby_type_hotel_title">附近同类型酒店</div>
      <div class="nearby_hotel">
        <div class="nearby_hotel_item">
          <div>
            <img src="/static/imgs/hotel_item.png" class="nearby_hotel_item_img">
          </div>
          <div class="nearby_hotel_item_R">
            <div>上海市小南国花园酒店</div>
            <div>五星级</div>
            <div class="nearby_hotel_item_R_Bottom">
              <div class="nearby_hotel_item_R_Bottom_T">
                <div>4.9分 卓越 6089条点评</div>
                <div>上海 江湾/五角场</div>
              </div>
              <div class="nearby_hotel_item_R_Bottom_B">
                <div style="color: #ccc">C-TRIP <span style="text-decoration:line-through;">$112</span></div>
                <div>OUR PRICE $99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="all_comments" @click="comment(1)">查看全部点评</div>
    </div>
    <div>
      <div class="hotel_foot_Bottom">
        <span><img class="iconTip" src="/static/imgs/foot_icon.png" alt=""></span>专业服务 · 全程保障
      </div>
    </div>
    <div class="order_check_hotel">
      <div>最新预定：5小时</div>
      <div style="color:rgb(254, 105, 19);display: flex;align-items: center">
        <img src="/static/imgs/room.png" style="width: 20px;height: 20px;">
        <span>&nbsp;查看房型</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routeId: 0,
      hotel_item: [
        {
          id: 1,
          img: '/static/imgs/hotelDetail.png',
          name: '创客房 (开业特惠)',
          attr: ['25 - 28', '大床', '双早'],
          old_price: 120,
          new_price: 99,
          popular: 1
        },
        {
          id: 2,
          img: '/static/imgs/hotelDetail.png',
          name: '总统套房 (尊贵vip)',
          attr: ['225 - 328', '大床', '随便'],
          old_price: 1120,
          new_price: 90
        }
      ],
      guest_evaluation_comments: [
        {
          id: 1,
          name: '房间很好',
          comments: 85,
        },
        {
          id: 2,
          name: '早餐丰富',
          comments: 8,
        },
        {
          id: 3,
          name: '设计不错',
          comments: 855,
        },
        {
          id: 4,
          name: '服务周到',
          comments: 815,
        }
      ],
      hotel_information_institutions_pic_item: [
        {
          id: 1,
          img: '',
          name: '免费WiFi'
        },
        {
          id: 2,
          img: '',
          name: '免费停车场'
        },
        {
          id: 3,
          img: '',
          name: '接机服务'
        },
        {
          id: 4,
          img: '',
          name: '餐厅'
        }
      ]
    }
  },
  components: {}, 
  methods: {
    Get () {
      console.log(123)
    },
    // 跳到详情页面
    hotelDetai (item) {
      console.log(item)
      let id = item.id
      wx.navigateTo({
        url: '/pages/detailD/main?id=' + id
      })
    },
    // 跳到点评页面
    comment (id) {
      wx.navigateTo({
        url: '/pages/comment/main?id=' + id
      })
    },
    // 跳到评级类型 好 早餐 设计 服务
    guestEvaluation(id) {
      console.log(id)
    }
  },
  mounted () {
    // 拿到路由的数据 跳转转过来的数据
    this.routeId = this.$root.$mp.query.id
    console.log(this.$root.$mp.query.id)
    wx.setNavigationBarTitle({
      title: '当前页面的xx酒店'
    })
  }
}
</script>

<style scoped>
 ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;   
  }
  .detail_all_position {
    position: absolute;
    top: 150px;
    width:95%;
    color: white;
    left: 2.5%;
  }
  .detail_all_position_top {
    padding-left: 10px;
  }
  .detail_all_position_top_info {
    font-size: 15px
  }
  .detail_all_position_bottom {
    height: 100px;
    background: white;
    border-radius: 15px 15px 0 0;
    padding: 10px 0;
    color:black;
    margin-top: 15px;
  }
  .detail_all_position_bottom_info {
    height:50px;
    width:100%;
    border-bottom: 1.5px solid rgb(235, 235, 235);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .detail_all_position_bottom_info_grade {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50% 50%;
    background: rgb(0, 126, 226);
    text-align: center;
    line-height: 40px
  }
  .hotel_foot_Bottom {
    width: 100%;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: rgb(0, 126, 226);
    height: 50px;
    line-height: 50px;
  }
  .iconTip {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
.hotel_Detai {
  display: flex;
  background: white;
  border-radius: 10px 10px;
  font-size: 15px;
  height:120px;
  width: 95%;
  margin: 2.5%
}
.popular {
    width: 48px;
    height: 23px;
    text-align: center;
    line-height: 23px;
    position: absolute;
    top:0;
    left: 0;
    border-radius: 10px 0 0 0;
    background: rgb(254, 105,19);
    color: white;
    font-size: 15px;
  }
.hotel_Detail_img {
  width: 113px;
  height: 119px;
  border-radius: 10px 0 0 0;
}
.hotel_Detai_R{
  display: flex;
  flex:3;
  flex-direction:column;
  justify-content: space-between;
  padding: 10px
}
.hotel_Detai_R_img {
  width: 15px;
  height: 15px;
  margin-left: 15px;
}
.hotel_Detai_R_gift {
  width: 60px;
  height: 20px;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  border: 1px solid #ccc;
  color: rgb(254, 105, 19)
}
.hotel_Detai_R_Bottom {
  display: flex;
  font-size: 13px;
  align-items: flex-end;
  justify-content: space-between;
  color:rgb(0, 126, 226);
}
.hotel_Detai_R_Bottom_T{
  display: flex;
  flex-direction: column
}
.hotel_Detai_R_Bottom_B {
  display: flex;
  flex-direction: column;
  text-align: right
}
.nearby_type_hotel {
  display: flex;
  font-size: 15px;
  flex-direction:column;
  background: white;
  /* height: 250px; */
  padding: 10px;
  margin-top: 10px
}
.nearby_type_hotel_title {
  border-bottom: 1px solid #ccc;
  height: 40px;
  padding-top:10px;
}
.nearby_hotel {
  display: flex;
  flex-direction: column;
}
.nearby_hotel_item {
  display: flex;
  padding: 20px 0;
  height: 91px;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
}
.nearby_hotel_item_img{
  width: 91px;
  height: 91px;
}
.nearby_hotel_item_R{
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
}
.nearby_hotel_item_R_Bottom {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  color:rgb(0, 126, 226);
}
.nearby_hotel_item_R_Bottom_T {
  display: flex;
  flex-direction: column
}
.nearby_hotel_item_R_Bottom_B {
  display: flex;
  flex-direction: column;
  text-align: right
}
.dateChooseDetail {
  width: 100%;
  background: white;
  font-size: 15px;
  margin-top: 100px;
}
.noLogin {
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  height: 60px;
  border-bottom: 1.5px solid rgb(235, 235, 235)
}
.loginValue {
  display: flex;
  flex-direction: column;
  justify-content: space-around
}
.logingift {
  font-size: 11px;
  color:rgb(254, 105, 19);
  width: 80px;
  height:13px;
  border: 1px solid rgb(254, 105, 19)
}
.login {
  width: 87px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 20px 20px
}
.dateDetail {
  height:80px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between
}
.dateDetail_L {
  display: flex;
  justify-content: space-around;
  align-items: center
}
.detail_place {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding:0 15px;
}
.img_date_right {
  width: 20px;
  height: 20px;
}
.days {
  justify-self: center;
  font-size: 15px;
  border: 1px solid #ccc;
  width: 50px;
  text-align: center;
  height: 20px;
  border-radius: 10px 10px;
}
.outIn {
  margin-left: 15%;
  font-size: 15px;
  color: #ccc;
}
.dateDay {
  font-size: 13px
}
.detailShow {
  display: flex;
  justify-content: space-around;
  font-size: 11px;
  padding: 10px 0 5px 0
}
.detailShowItem {
  display: flex;
  background:rgb(240, 240, 240);
  height: 20px;
  border-radius:30px 30px;
  width: 60px;
  justify-content: center;
  align-items: center;
}
.guest_evaluation_all {
  display: flex;
  flex-direction:column;
  background: white;
  /* height: 250px; */
  padding: 10px;
  font-size: 15px;
}
.guest_evaluation_num {
  font-size: 13px;
  color: #ccc;
}
.guest_evaluation_comments {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin: 10px 0;
}
.guest_evaluation_comments_item {
  width: 80px;
  height: 20px;
  border-radius:20px 20px;
  background: rgb(237, 245, 251);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 20px
}
.guest_evaluation_item {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 13px;
  margin-bottom: 10px;
}
.guest_evaluation_item_grade {
  width: 30px;
  height: 30px;
  border-radius: 50% 50%;
  background: rgb(0, 126, 226);
  text-align: center;
  line-height: 30px;
  color: #fff;
}
.guest_evaluation_item_star {
  width: 50px;
  margin-left:10px;
  text-align: center;
  height: 16px;
  line-height: 16px;
  color: rgb(0, 126, 226);
  border: 1px solid #ccc;
  font-size: 11px;
}
.guest_evaluation_item_title {
  color: #ccc;
  font-size: 11px
}
.hotel_QuestionAnswer {
  display: flex;
  flex-direction:column;
  background: white;
  /* height: 180px; */
  padding: 10px;
  font-size: 15px;
  margin-top: 10px
}
.hotel_QuestionAnswer_item {
  display: flex;
  /* justify-content: space-around; */
  /* align-content: flex-start; */
  height: 40px;
  font-size: 13px;
  margin-top: 10px;
}
.hotel_QuestionAnswer_item_ask {
  width: 14px;
  height: 14px;
  font-size: 7px;
  text-align: center;
  line-height: 14px;
  background:rgb(0, 126, 226);
  color: white;
  margin-top: 1%;
}
.hotel_QuestionAnswer_item_answer {
  font-size: 11px;
  color: #ccc;
  margin-left: 5%;
}
.hotel_information {
  display: flex;
  flex-direction:column;
  background: white;
  font-size: 15px;
  height: 600px;
  padding: 10px;
  margin-top: 10px
}
.hotel_information_policy {
  display: flex;
  flex-direction: column;
  height: 90px;
  font-size: 13px;
  justify-content: space-around;
  margin-top: 10px
}
.hotel_information_policy_img {
  display: flex;
  align-items: center;
  height: 20px;
}
.img_hotel_detail_icon {
  width: 13px;
  height: 13px
}
.hotel_information_institutions {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  height: 100px;
  justify-content: space-around;
  margin-top: 10px
}
.hotel_information_institutions_pic {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.hotel_information_institutions_pic_item {
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 40px;
  font-size: 11px;
  text-align: center;
}
.img_wifi {
  width: 26px;
  height: 20px;
}
.img_right {
  width: 10px;
  height: 10px;
}
.hotel_information_way {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  height: 400px;
  justify-content: space-around;
  margin-top: 10px
}
.hotel_information_way_details {
  display: flex;
  height: 90px;
}
.hotel_information_way_details_img {
  width: 15px;
  height: 15px;
  margin-top: 25%;
}
.hotel_information_way_details_D {
  display: flex;
  flex-direction: column;
  height: 90px;
  margin-left: 5px;
  justify-content: space-between
}
.hotel_information_way_details_D_item {
  display: flex;
  flex-direction: column;
  height: 45px;
  justify-content: space-around
}
.order_check_hotel {
  height: 30px;
  background: white;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  padding: 10px;
  align-items: center
}
.all_comments {
  width: 136px;
  height: 30px;
  color: rgb(0, 126, 226);
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  font-size: 13px;
  margin: 10px auto 0;
  border-radius: 10px 10px;
}
</style>
