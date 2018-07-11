<template>
  <div class="orderDetail">
    <div style="display: flex;justify-content: space-between;padding: 10px;height: 20px;background: white;align-items: center">
      <div>订单号：1651568515</div>
      <div style="display: flex;align-items: center;color: rgb(0, 126, 226)">
        <img src="/static/imgs/customer.png" style="width: 15px;height: 15px;">
        &nbsp;&nbsp;客服
      </div>
    </div>
    <div style="display: flex;flex-direction: column;height: 80px;background: white;justify-content: space-around;padding: 10px">
      <div style="display: flex;align-items: center;font-size: 17px">
        <img src="/static/imgs/sure.png" style="width:30px;height: 30px">
        &nbsp;&nbsp;确认中
      </div>
      <div class="orderDetail_wait">
        <div>您的入住信息正在发送至酒店，请等待酒店确认</div>
        <div style="display: flex;align-items: center">详情 <img src="/static/imgs/right.png" class="orderDetail_wait_img"></div>
      </div>
    </div>
    <div style="margin-top: 10px;height: 20px;padding: 10px;display: flex;justify-content: space-between;background: white">
      <div>到店支付<span style="color: rgb(0, 126, 226)"> ￥18</span></div>
      <div style="color: rgb(0, 126, 226)">费用明细</div>
    </div>
    <div style="display: flex;justify-content: space-around;padding: 10px;color: rgb(0, 126, 226)">
      <div style="width: 30%;height: 30px;text-align: center;line-height: 30px;border: 1px solid #ccc;border-radius: 5px 5px;background: white">修改订单</div>
      <div style="width: 30%;height: 30px;text-align: center;line-height: 30px;border: 1px solid #ccc;border-radius: 5px 5px;background: white">修改订单</div>
      <div style="width: 30%;height: 30px;text-align: center;line-height: 30px;border: 1px solid #ccc;border-radius: 5px 5px;background: white">修改订单</div>
    </div>
    <div style="height: 140px;background: white;display: flex;flex-direction: column;padding: 10px">
      <div style="width: 100%;height: 30px;text-align: center;line-height: 30px;color: rgb(0, 126, 226);border: 1px solid #ccc;border-radius: 5px 5px;position: relative;">
        我要点评
        <div style="position: absolute;top:0;right: 0;"><img src="/static/imgs/gradesmall.png" class="orderDetail_comment"></div>
      </div>
      <div class="orderDetail_rule">
        3天内点评积分+50，点评传图还可抽奖！<span style="color: black;">积分规则&nbsp;&nbsp;</span><img src="/static/imgs/rule.png" class="orderDetail_rule_img">
      </div>
      <div style="text-align: center;color: rgb(0, 126, 226);height: 50px;line-height: 50px">晚些到店</div>
    </div>
    <div style="margin-top: 10px;height: 120px;background: white;display: flex;flex-direction: column;padding: 10px;justify-content: space-around">
      <div style="display: flex;flex-direction: column;justify-content: space-around;height:60px;border-bottom: 1px solid #ccc;padding-bottom:10px;">
        <div style="display: flex;justify-content: space-between;">
          <div>上海8091青年求职公寓</div>
          <div style="color: rgb(0, 126, 226);font-size: 13px;">酒店详情</div>
        </div>
        <div style="font-size: 13px"><span style="color: #ccc;">地址</span>&nbsp;&nbsp;镇安路1051弄14号楼204室</div>
      </div>  
      <div style="display: flex;color: rgb(0, 126, 226);">
        <div style="width: 50%;text-align: center">地图</div>
        <div style="width: 50%;text-align: center">酒店电话</div>
      </div>
    </div>
    <div class="orderDetail_detail">
      <div class="orderDetail_detail_" style="display: flex;flex-direction: column;height: 100px;justify-content: space-around;border-bottom: 1px solid #ccc;padding-bottom: 10px">
        <div style="display: flex;height: 30px;justify-content: space-between">
          <div style="flex: 4;">女生12人床位房（无窗）（一张床位）（女生入住）（11天内预定）（内宾）（无窗）</div>
          <div style="color: rgb(0, 126, 226);">房型详情</div>
        </div>
        <div style="color:rgb(230, 217, 217)">6月12日 - 6月13日 共1晚 1间</div>
        <div style="color:rgb(230, 217, 217)">6月13日 无早餐</div>
      </div>
      <div style="display: flex;height: 210px;padding-top: 10px">
        <div style="display: flex;flex: 2;flex-direction: column;height: 200px;justify-content: space-around">
          <div><span style="color: #ccc;">入住人数</span></div>
          <div><span style="color: #ccc">联系手机</span></div>
          <div><span style="color: #ccc">发票信息</span></div>
          <div><span style="color: #ccc;">订单编号</span></div>
          <div><span style="color: #ccc;">预定日期</span></div>
          <div><span style="color: #ccc;">最晚到店时间</span></div>
        </div>
        <div style="display: flex;flex: 5;flex-direction: column;height: 200px;justify-content: space-around">
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
  font-size: 15px;
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
.orderDetail_rule_img {
  width: 15px;
  height: 15px;
}
.orderDetail_detail {
  margin-top:10px;
  height: 320px;
  background: white;
  /* font-size: 13px; */
  padding: 10px;
}
</style>