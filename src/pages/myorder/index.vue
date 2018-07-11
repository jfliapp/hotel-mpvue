<template>
  <div style="background: rgb(246, 246, 246);font-size: 15px;">
    <div style="display: flex;justify-content:flex-end;height: 50px;color:rgb(0, 126, 226);background: white;align-items: center">
      <div style="width: 30%;text-align: center;" :class="{sureOrder: Order}" @click="sureOrder(0)">确认预定</div>
      <div style="width: 30%;text-align: center;" :class="{sureOrder: !Order}" @click="sureOrder(1)">等待确认</div>
    </div>
    <div style="display: felx;flex-direction: column">
      <div style="display: felx;flex-direction: column;"
      v-for="item in orderArr" :key="item.id" @click="orderDetail(item.id)">
        <div style="display:flex; height: 30px;align-items: center;padding:10px;">
          <div style="width: 150px;text-align: center;height: 30px;line-height: 30px;background: rgb(0, 126, 226);color: white;font-size: 13px;border-radius: 15px 15px">预定日期：{{item.timeStart}}</div>
        </div>
        <div style="height: 120px;background: white;display: flex;flex-direction: column;padding: 10px;justify-content: space-around">
          <div style="display: flex;justify-content: space-between;;">
            <div>{{item.name}}</div>
            <div style="color: rgb(0, 126, 226);">￥ {{item.price}}</div>
          </div>
          <div style="display: flex;font-size: 13px;color: #ccc;justify-content: space-between;">
            <div style="display: flex;flex-direction: column;justify-content: space-around;height: 50px;">
              <div>{{item.distance}}</div>
              <div>{{item.timeStart}} {{item.timeEnd}} {{item.time}}晚/{{item.homeNum}}间</div>
            </div>
            <div>确认中</div>
          </div>
          <div style="display: flex;justify-content: space-between;color: rgb(0, 126, 226);font-size: 13px;">
            <div style="display: felx;align-items: center">
              <img src="/static/imgs/way.png" style="width: 15px;height: 15px;">
              &nbsp;&nbsp;问路卡
            </div>
            <div style="display: flex;">
              <div style="width: 60px;height: 20px;text-align: center;line-height: 20px;border: 1px solid #ccc;border-radius: 5px 5px;margin-right: 10px">催确认</div>
              <div style="width: 60px;height: 20px;text-align: center;line-height: 20px;border: 1px solid #ccc;border-radius: 5px 5px;">取消</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 200px;display: flex;flex-direction: column;">
      <div style="height: 50px;display: flex;justify-content: center;align-items: center;color: #ccc">
        <div>已显示近一年全部订单</div>
      </div>
      <div style="height: 50px;display: flex;justify-content: center;align-items: center">
        <div style="width: 200px;text-align: center;height:30px;line-height: 30px;background: white;border-radius: 30px 30px">查看一年前订单 ></div>
      </div>
    </div>
    <div style="display: flex;height: 50px;background: white;align-items: center">
      <div style="width: 50%;display: flex;justify-content: center;">
        <img src="/static/imgs/filter.png" style="width: 20px;height: 20px;margin-right: 10px">
        筛选
      </div>
      <div style="width: 50%;display: flex;justify-content: center">
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
</style>