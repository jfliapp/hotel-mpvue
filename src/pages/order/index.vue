<template>
  <div style="background: rgb(246, 246, 246);width: 100%;height: 100%;">
    <div class="mask" v-show="room_show" @click.stop="room_show = !room_show"></div>
    <div class="maskRoom" v-show="room_show">
      <div class="Room_title">
        房间数选择
      </div>
      <div class="Room_num">
        <div class="Room_num_item" :class="{roomColor: roomNum === item.id}" v-for="(item, index) in room" :key="item.id" @click="chooseRoom(item.room)">
          <div class="Room_num_item_choose">✔</div>
          <div class="Room_num_item_detail">{{item.room}}间</div>
        </div>
      </div>
    </div>
    <div v-if="login" class="loginTip">
      登录后有意想不到事情<span style="color:rgb(0, 126, 226);">更多优惠</span>
    </div>
    <div class="hotel_order">
      <div class="hotel_order_Detail">
        <div class="hotel_order_Detail_name">上海Pagoda君亭设计酒店</div>
        <div class="hotel_order_Detail_name_Detail">创客房（开业特惠）</div>
        <div class="hotel_order_Detail_D">
          <div>大床&nbsp;&nbsp;&nbsp;&nbsp;可住2人&nbsp;&nbsp;&nbsp;&nbsp;双份早餐</div>
          <div>25 - 28m&sup2;&nbsp;&nbsp;&nbsp;&nbsp;5 - 12层&nbsp;&nbsp;&nbsp;&nbsp;全部房间WI-FI免费</div>
        </div>
        <div class="hotel_order_Detail_date">
          <div style="display: flex;">
            <div>入住： 6月11日</div>
            <div>离店： 6月12日</div>
            <div>&nbsp;&nbsp;一晚</div>
          </div>
          <div class="hotel_order_Detail_date_fix">修改&nbsp;&nbsp;<img class="hotel_order_Detail_date_fix_img" src="/static/imgs/right.png"></div>
        </div>      
      </div>
      <div class="free_get">
        <div style="color: rgb(0, 126, 226);">免费领取</div>
        <div><img src="/static/imgs/right.png" style="width:15px;height: 15px;"></div>
      </div>
    </div>
    <div v-if="login" class="login_first">
      <div style="display: flex;">
        <div :class="{loginChang: phone}" style="width: 50%;text-align: center;height:50px;line-height: 50px;" @click="changeLogin(1)">手机动态验证登录</div>
        <div :class="{loginChang: !phone}" style="width: 50%;text-align: center;height:50px;line-height: 50px;" @click="changeLogin(2)">普通登录</div>
      </div>
      <div v-if="phone" class="phone">
        <div class="phone_tel">
          <div class="phone_tel_lable">手机号</div>
          <div class="phone_tel_input"><input type="text" placeholder="手机号"></div>
        </div>
        <div class="phone_psw">
          <div class="phone_psw_label">动态密码</div>
          <div class="phone_psw_input"><input type="text" placeholder="动态密码"></div>
          <div class="phone_psw_psw" v-show="code" @click="getCode">获取动态密码</div>
          <div class="phone_psw_psw" v-show="!code">倒计时{{count}}</div>
        </div>
        <!-- <div style="font-size: 20px;color: white;width: 95%;height: 50px;text-align: center;line-height: 56px;margin: 0 auto;border-radius: 8px 8px;background: rgb(255, 107, 20)">登录</div> -->
      </div>
      <div v-else class="phone">
        <div class="phone_tel">
          <div class="phone_tel_lable">账号</div>
          <div class="phone_tel_input"><input type="text" placeholder="账号"></div>
        </div>
        <div class="phone_psw">
          <div class="phone_psw_label">密码</div>
          <div class="phone_psw_input"><input type="text" placeholder="密码"></div>
        </div>
      </div>
      <div class="login"@click="loginT">登录</div>
    </div>
    <div v-else>
      <div class="reward_all">
        <div class="reward_item"><img src="/static/imgs/great.png" style="width: 30px;height: 30px;">&nbsp;&nbsp;好赞！这么划算的房间都能给你挑到</div>
        <div class="reward_item"><img src="/static/imgs/help.png" style="width: 30px;height: 30px;">&nbsp;&nbsp;好赞！这么划算的房间都能给你挑到</div>
      </div>
      <div class="Room_from">
        <div class="Room_from_item" @click="roomChoose">
          <div style="display: flex;">
            <div class="Room_from_item_num">房间数</div>
            <div class="Room_from_item_Detail">{{roomNum}}间</div>
          </div>
          <div style="display: flex;align-items: center"><img src="/static/imgs/down.png" style="width:20px;height: 20px;"></div>
        </div>
        <div>
          <div class="Room_from_item" v-for="(item, index) in roomNum" :key="index">
            <div style="display: flex;">
              <div class="Room_from_item_num" :style="{visibility: item == '0' ? '' : 'hidden'}">入住人</div>
              <div class="Room_from_item_Detail"><input type="text" placeholder="一间填一个人的姓名"></div>
            </div>
            <div style="display: flex;align-items: center"><img src="/static/imgs/down.png" style="width:20px;height: 20px;"></div>
          </div>          
        </div>
        <div class="Room_from_item">
          <div style="display: flex;">
            <div class="Room_from_item_num">电话号码</div>
            <div class="Room_from_item_Detail"><input type="text" placeholder="电话"></div>
          </div>
          <div style="display: flex;align-items: center"><img src="/static/imgs/down.png" style="width:20px;height: 20px;"></div>
        </div>
      </div>
      <div class="Room_from">
        <div class="Room_from_item">
          <div style="display: flex;">
            <div class="Room_from_item_num">特殊要求</div>
            <div class="Room_from_item_Detail"><input type="text" placeholder="电话"></div>
          </div>
          <div style="display: flex;align-items: center"><img src="/static/imgs/down.png" style="width:20px;height: 20px;"></div>
        </div>
        <div class="Room_from_item">
          <div style="display: flex;">
            <div class="Room_from_item_num">发票</div>
            <div class="Room_from_item_Detail">如需发票，可向酒店索取</div>
          </div>
          <!-- <div style="display: flex;align-items: center"><img src="/static/imgs/down.png" style="width:20px;height: 20px;"></div> -->
        </div>
      </div>
      <div class="hotel_atention">
        <div class="hotel_atention1">
          酒店提示：根据《上海市公共场所控制吸烟条例》，从2017年3月1日起，并禁止室内吸烟。
        </div>
        <div class="hotel_atention2">
          酒店提示：根据《上海市公共场所控制吸烟条例》，从2017年3月1日起，并禁止室内吸烟。
        </div>
        <div class="hotel_foot_Bottom">
          <span>
            <img style="width:10px ;height: 10px;margin-right: 5px;" src="/static/imgs/foot_icon.png" alt="">
          </span>
          专业服务 · 全程保障
        </div>
      </div>
      <div style="height: 20px;color: rgb(0, 126, 226);text-align: right;padding: 20px;background: white;line-height: 30px;">
        总计： ￥129.99
      </div>
      <div style="height: 20px;color: white;text-align: center;padding: 20px;background: rgb(9, 187, 7);line-height: 20px;">
        微信支付
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'order',
    data () {
      return {
        data: 'xx',
        phone: true,
        login: true,
        code: true,
        count: null,
        timer: null,
        roomNum: 1,
        room_show: false,
        room: [
          {
            id: 1,
            room: 1,
            state: false
          },
          {
            id: 2,
            room: 2,
            state: false
          },
          {
            id: 3,
            room: 3,
            state: false
          },
          {
            id: 4,
            room: 4,
            state: false
          },
          {
            id: 5,
            room: 5,
            state: false
          },
          {
            id: 6,
            room: 6,
            state: false
          },
          {
            id: 7,
            room: 7,
            state: false
          },
          {
            id: 8,
            room: 8,
            state: false
          }
        ]
      }
    },
    components: {},
    computed: {
      ...mapState([
        'name'
      ])
    },
    mounted () {
      console.log(this.name, "我看看拿得到name值吗")
      console.log('order')
      wx.setNavigationBarTitle({
        title: '预定房间'
      })
    },
    methods: {
      // 获取vuex 里面的方法
      ...mapMutations({
        saveLogin: 'SET_LOGIN'
      }),
      changeLogin (id) {
        if (id === 1) {
          this.phone = true
        } else {
          this.phone = false
        }
        console.log('get')
      },
      // 点击时弹出
      roomChoose() {
        this.room_show = true
      },
      // 房间数选择
      chooseRoom(num) {
        this.roomNum = num
        setTimeout(()=> {
          this.room_show = false
        }, 1000)
        console.log(num)
      },
      // 验证码获取
      getCode() {
        const TIME = 60
        if(!this.timer) {
          this.code = false
          this.count = TIME
          this.timer = setInterval(()=> {
            if(this.count > 0) {
              this.count--
            }else {
              this.code = true
              clearInterval(this.timer)
              this.timer= null 
            }
          }, 1000)
        }
      },
      // 登录 
      loginT () {
        this.saveLogin('名字')
        this.login = false
      }
    }
  }
</script>

<style>
  .mask {
    font-size: 15px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: rgba(15, 15, 26, 0.7)
  }
  .maskRoom {
    width: 100%;
    height: 250px;
    position: fixed;
    bottom: 0;
    z-index: 30;
    background: #fff;
    display: flex;
    flex-direction: column;
  }
  .Room_title {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    padding-left: 15px; 
  }
  .Room_num {
    /* display: flex; */
    /* flex-direction: column; */
    margin-left: 15px;
    height: 200px;
    overflow-y: scroll;
  }
  .Room_num_item {
    display: flex;
    height: 40px;
    /* line-height: 35px; */
    align-items: center;
  }
  .Room_num_item_choose {
    padding: 5px;
  }
  .Room_num_item_detail {
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 5px;
  }
  .roomColor{
    color: blue
  }
  .loginChang {
    color: rgb(0, 126, 226);
    border-bottom: 2px solid rgb(0, 126, 226);
  }
  .hotel_foot_Bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: rgb(0, 126, 226);
    height: 50px;
    line-height: 50px;
  }
  .hotel_order{
    display: flex;
    flex-direction: column;
  }
  .hotel_order_Detail {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 0;
    margin-top: 10px;
    background: white
  }
  .hotel_order_Detail_name{
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: center
  }
  .hotel_order_Detail_name_Detail {
    font-size: 17px;
    height: 40px;
    line-height: 40px
  }
  .hotel_order_Detail_D {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    color: #ccc;height: 60px;
    justify-content: space-around;
    border-bottom: 1px solid rgb(235, 235, 235);
    padding-bottom: 10px
  }
  .hotel_order_Detail_date {
    display: flex;
    height: 50px;
    align-items: center;
    font-size: 15px;
    color:#ccc;
    justify-content: space-between
  }
  .hotel_order_Detail_date_fix {
    color: rgb(0, 126, 226);
    display: flex;
    align-items: center
  }
  .hotel_order_Detail_date_fix_img {
    width:15px;
    height: 15px;
  }
  .phone {
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-around;
    font-size: 15px;
  }
  .phone_tel {
    display: flex;
    width: 95%;
    height: 40px;
    align-items: center;
    margin: 0 auto;
    border: 1px solid rgb(190, 190, 190);
    border-radius: 8px 8px;
  }
  .phone_tel_lable {
    margin-left: 10px;
    width:100px;
  }
  .phone_tel_input {
    margin-left: 20px
  }
  .phone_psw {
    display: flex;
    width: 95%;
    height: 40px;
    align-items: center;
    margin: 0 auto;
    border: 1px solid rgb(190, 190, 190);
    border-radius: 8px 8px;
  }
  .phone_psw_label {
    margin-left: 10px;
    flex: 0 0 100px;
  }
  .phone_psw_input {
    margin-left: 20px;
    width: auto;
  }
  .phone_psw_psw {
    width: 160px;
    height: 30px;
    margin-right:10px;
    text-align: center;
    line-height: 30px;
    border:1px solid rgb(0, 126, 226) ;
    color: rgb(0, 126, 226)
  }
  .loginTip {
    font-size: 13px;
    height: 15px;
    line-height: 15px;
    padding: 20px;
    background: white
  }
  .Room_from {
    margin-top: 10px;
    /* height: 250px; */
    background: white;
    padding: 5px 0 5px 20px;
    /* display: flex;
    flex-direction: column; */
    /* justify-content: space-around */
  }
  .Room_from_item {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
    font-size: 16px
  }
  .Room_from_item_Detail {
    margin-left: 10px;
  }
  .Room_from_item_num {
    color: #ccc;
    width: 80px;
  }
  .hotel_atention {
    display: flex;
    /* height: 250px; */
    font-size: 13px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around */
  }
  .hotel_atention1 {
    color: #ccc;
    /* height: 50px; */
    padding: 10px 0;
    border-bottom:1px solid #ccc;
  }
  .hotel_atention2 {
    color: #ccc;
    padding: 10px 0;
    /* height: 60px; */
  }
  .reward_all {
    margin-top: 10px;
    height: 70px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 13px;
    padding: 20px
  }
  .reward_item {
    display: flex;
    align-items: center;
    color: rgb(0, 126, 226)
  }
  .login {
    font-size: 20px;
    color: white;
    width: 95%;
    height: 50px;
    text-align: center;
    line-height: 56px;
    margin: 0 auto;
    border-radius: 8px 8px;
    background: rgb(255, 107, 20)
  }
  .free_get {
    display: flex;
    height: 22px;
    background: rgba(0, 126, 226, 0.05);
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-size: 15px;
  }
  .login_first {
    display: flex;
    flex-direction:column;
    margin-top: 10px;
    font-size: 15px;
    height: 300px;
  }
</style>
