<template>
  <div class="orderDetail">
    <div class="orderDetail_num">
      <div>订单号：1651568515</div>
      <div style="display: flex;align-items: center;color: rgb(0, 126, 226)">
        <img src="/static/imgs/customer.png" style="width: 15px;height: 15px;">
        &nbsp;&nbsp;客服
      </div>
    </div>
    <div class="orderDetail_all">
      <div class="orderDetail_all_sure">
        <img src="/static/imgs/sure.png" style="width:30px;height: 30px">
        &nbsp;&nbsp;确认中
      </div>
      <div class="orderDetail_wait">
        <div>您的入住信息正在发送至酒店，请等待酒店确认</div>
        <div style="display: flex;align-items: center">详情 <img src="/static/imgs/right.png" class="orderDetail_wait_img"></div>
      </div>
    </div>
    <div class="orderDetail_pay">
      <div>到店支付<span style="color: rgb(0, 126, 226)"> ￥18</span></div>
      <div style="color: rgb(0, 126, 226)">费用明细</div>
    </div>
    <div class="orderDetail_order">
      <div class="orderDetail_order_item">修改订单</div>
      <div class="orderDetail_order_item">取消订单</div>
      <div class="orderDetail_order_item">再次预定</div>
    </div>
    <div class="orderDetail_need_rule_come">
      <div class="orderDetail_needComments">
        我要点评
        <div style="position: absolute;top:0;right: 0;"><img src="/static/imgs/gradesmall.png" class="orderDetail_comment"></div>
      </div>
      <div class="orderDetail_rule">
        3天内点评积分+50，点评传图还可抽奖！<span style="color: black;">积分规则&nbsp;&nbsp;</span><img src="/static/imgs/rule.png" class="orderDetail_rule_img">
      </div>
      <div class="orderDetail_comeIn">晚些到店</div>
    </div>
    <div class="orderDetail_orderHotel">
      <div class="orderDetail_orderHotel_item">
        <div style="display: flex;justify-content: space-between;">
          <div class="orderDetail_orderHotel_name">上海8091青年求职公寓</div>
          <div style="color: rgb(0, 126, 226);">酒店详情</div>
        </div>
        <div><span style="color: #ccc;">地址</span>&nbsp;&nbsp;镇安路1051弄14号楼204室</div>
      </div>  
      <div style="display: flex;color: rgb(0, 126, 226);">
        <div style="width: 50%;text-align: center">地图</div>
        <div style="width: 50%;text-align: center">酒店电话</div>
      </div>
    </div>
    <div class="orderDetail_detail">
      <div class="orderDetail_detail_detail">
        <div class="orderDetail_detail_detail_D">
          <div class="orderDetail_detail_detail_Dlist">女生12人床位房&nbsp;&nbsp;(无窗)&nbsp;&nbsp;(一张床位)&nbsp;&nbsp;(女生入住)  (11天内预定)&nbsp;&nbsp;(内宾)&nbsp;&nbsp;(无窗)</div>
          <div style="color: rgb(0, 126, 226);">房型详情</div>
        </div>
        <div style="color:rgb(230, 217, 217)">6月12日 - 6月13日 共1晚 1间</div>
        <div style="color:rgb(230, 217, 217)">6月13日 无早餐</div>
      </div>
      <div class="orderDetail_detail_info">
        <div class="orderDetail_detail_info_person_Q">
          <div><span style="color: #ccc;">入住人数</span></div>
          <div><span style="color: #ccc">联系手机</span></div>
          <div><span style="color: #ccc">发票信息</span></div>
          <div><span style="color: #ccc;">订单编号</span></div>
          <div><span style="color: #ccc;">预定日期</span></div>
          <div><span style="color: #ccc;">最晚到店时间</span></div>
        </div>
        <div class="orderDetail_detail_info_person_A">
            <div>dfasfsf/dfasfas</div>
            <div>1561****15648</div>
            <div>4165161</div>
            <div>11156848516</div>
            <div>2018-06-12 09:08:42</div>
            <div>2018-06-12 09:08:42</div>
          </div>
      </div>      
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dat: 1
      }
    }
  }
</script>
<style>
.orderDetail {
  background: rgb(246, 246, 246);
  font-size: 13px;
}
.orderDetail_num {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 20px;
  background: white;
  align-items: center
}
.orderDetail_all {
  display: flex;
  flex-direction: column;
  height: 80px;
  background: white;
  justify-content: space-around;
  padding: 10px
}
.orderDetail_all_sure {
  display: flex;
  align-items: center;
  font-size: 17px
}
.orderDetail_wait {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.orderDetail_wait_img {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}
.orderDetail_pay {
  margin-top: 10px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: white
}
.orderDetail_order {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  color: rgb(0, 126, 226)
}
.orderDetail_order_item {
  width: 30%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px 5px;
  background: white
}
.orderDetail_need_rule_come {
  height: 140px;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 10px
}
.orderDetail_needComments {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: rgb(0, 126, 226);
  border: 1px solid #ccc;
  border-radius: 5px 5px;
  position: relative;
}
.orderDetail_comment {
  width: 20px;
  height: 20px;
}
.orderDetail_rule {
  height: 60px;
  border-bottom:1px solid #ccc;
  font-size: 13px;
  color: rgb(0, 126, 226);
  display: flex;
  align-items: center;
  justify-content: center;
}
.orderDetail_comeIn {
  text-align: center;
  color: rgb(0, 126, 226);
  height: 50px;
  line-height: 50px
}
.orderDetail_rule_img {
  width: 15px;
  height: 15px;
}
.orderDetail_orderHotel {
  margin-top: 10px;
  height: 120px;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around
}
.orderDetail_orderHotel_item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height:60px;
  border-bottom: 1px solid #ccc;
  padding-bottom:10px;
}
.orderDetail_orderHotel_name {
  font-size: 14px;
}
.orderDetail_detail {
  margin-top:10px;
  height: 320px;
  background: white;
  /* font-size: 13px; */
  padding: 10px;
}
.orderDetail_detail_detail {
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px
}
.orderDetail_detail_detail_D {
  display: flex;
  height: 30px;
  justify-content: space-between
}
.orderDetail_detail_detail_Dlist {
  flex: 0 0 277px;
  /* display: flex;
  flex-wrap: wrap; */
}
.orderDetail_detail_info {
  display: flex;
  height: 210px;
  padding-top: 10px
}
.orderDetail_detail_info_person_Q {
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 200px;
  justify-content: space-around
}
.orderDetail_detail_info_person_A {
  display: flex;
  flex: 5;
  flex-direction: column;
  height: 200px;
  justify-content: space-around
}
</style>