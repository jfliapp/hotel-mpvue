<template>
  <div class="myorder">
    <div class="order_type">
      <div style="width: 30%;text-align: center;" :class="{sureOrder: Order}" @click="sureOrder(0)">确认预定</div>
      <div style="width: 30%;text-align: center;" :class="{sureOrder: !Order}" @click="sureOrder(1)">等待确认</div>
    </div>
    <div style="display: felx;flex-direction: column">
      <div style="display: felx;flex-direction: column;"
      v-for="item in orderArr" :key="item.id" @click="orderDetail(item.id)">
        <div class="order_date">
          <div class="order_date_detail">预定日期：{{item.timeStart}}</div>
        </div>
        <div class="order_detail_all">
          <div style="display: flex;justify-content: space-between;">
            <div class="order_detail_name">{{item.name}}</div>
            <div style="color: rgb(0, 126, 226);">￥ {{item.price}}</div>
          </div>
          <div style="display: flex;color: rgb(102, 102, 102);justify-content: space-between;">
            <div class="order_detail_info">
              <div>{{item.distance}}</div>
              <div>{{item.timeStart}} {{item.timeEnd}} {{item.time}}晚/{{item.homeNum}}间</div>
            </div>
            <div>确认中</div>
          </div>
          <div style="display: flex;justify-content: space-between;color: rgb(0, 126, 226);">
            <div class="order_detail_info_way">
              <img src="/static/imgs/way.png" class="img_way_icon">
              &nbsp;&nbsp;问路卡
            </div>
            <div style="display: flex;">
              <div class="order_detail_sure" style="margin-right: 20rpx">催确认</div>
              <div class="order_detail_sure">取消</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order_show">
      <div class="order_show_year">
        <div>已显示近一年全部订单</div>
      </div>
      <div class="order_show_check">
        <div class="order_show_check_detail">查看一年前订单
          <img src="/static/imgs/right.png" class="img_right">
        </div>
      </div>
    </div>
    <div class="order_filter">
      <div style="width: 50%;display: flex;justify-content: center;align-items: center;">
        <img src="/static/imgs/filter.png" class="img_right">
        &nbsp;筛选
      </div>
      <div style="width: 50%;display: flex;justify-content: center;align-items: center;">
        有效订单
        <div style="margin-left: 10px">
          <checkbox></checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        Order: true,
        orderArr: [
          {
            id: 1,
            name: '上海8090青年求职公寓',
            price: 99,
            distance: '南征路1051弄14号楼205室',
            timeStart: '06-12',
            timeEnd: '06-13',
            time: 1,
            homeNum: 1
          },
          {
            id: 2,
            name: '北京8090青年求职公寓',
            price: 98999,
            distance: '北京路南征路1051弄14号楼205室',
            timeStart: '06-23',
            timeEnd: '06-30',
            time: 100,
            homeNum: 2
          }
        ]
      }
    },
    methods: {
      sureOrder (id) {
        if (id === 1) {
          this.Order = false
        } else {
          this.Order = true
        }
      },
      orderDetail (id) {
        console.log(id)
        wx.navigateTo({
          url: '/pages/orderDetail/main?id=' + id
        })
      }
    }
  }
</script>
<style>
  .sureOrder {
    font-weight: bold
  }
  .myorder {
    background: rgb(246, 246, 246);
    font-size: 12px;
  }
  .order_type {
    display: flex;
    justify-content:flex-end;
    height: 50px;
    color:rgb(0, 126, 226);
    background: white;
    align-items: center
  }
  .order_date {
    display:flex; 
    height: 30px;
    align-items: center;
    padding:10px;
  }
  .order_date_detail {
    width: 120px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    background: rgb(0, 126, 226);
    color: white;
    font-size: 13px;
    border-radius: 11px 11px
  }
  .order_detail_all {
    height: 120px;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    font-size: 12px;
  }
  .order_detail_name {
    font-size: 15px;
    color: rgb(53, 53, 53);
  }
  .order_detail_info {
    display: flex;
    flex-direction: column;
    color: rgb(136, 136, 136);
    justify-content: space-around;
    height: 50px;
  }
  .order_detail_sure {
    width: 64px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    border: 1px solid #ccc;
    border-radius: 3px 3px;    
  }
  .order_detail_info_way {
    display: flex;
    align-items: center;
    height: 20px;
  }
  .img_way_icon {
    width: 13px;
    height: 13px;
  }
  .order_show {
    /* height: 200px; */
    display: flex;
    flex-direction: column;
  }
  .order_show_year {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc
  }
  .order_show_check {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .order_show_check_detail {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    height:30px;
    color: rgb(53, 53, 53);
    background: white;
    border-radius: 15px 15px
  }
  .order_filter {
    display: flex;
    height: 50px;
    font-size: 15px;
    background: white;
    align-items: center
  }
  .img_right {
    width: 15px;
    height: 15px;
    margin-left: 10px
  }
</style>