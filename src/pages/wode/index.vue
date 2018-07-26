<template>
  <div class="mask">
    <!-- <div class="meun" :class="{meunShow: meunShow}"> -->
    <div class="meun" :class="{meunShow: isLeft}" :style="{right: left + 'px'}">
      <div class="meun_top" >
        <div>M20135****95</div>
        <div class="logout" @click="logout">退出</div>
      </div>
      <div class="meun_bottom">
        <ul>
          <li v-for="(item, index) in li_meun" :key="index">
            <!-- <img style="width: 10px; height: 10px;" :src="{{item.icon}}" alt=""> -->
            <div class="li_meun">
              <img :src="item.icon" class="meun_icon">
              {{item.name}}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="sub_title" @touchstart.stop="touchStart" @touchend.stop="touchEnd" @touchmove.stop="touchmove">
      <div style="float: right;" @click="menu">
        <img class="img_sub" src="/static/imgs/avatar.png" alt="图片丢失">
      </div>
    </div>
    <div @touchstart.stop="touchStart" @touchend.stop="touchEnd" @touchmove.stop="touchmove">
      <img src="/static/imgs/hotelDetail.png" class="img_tille" mode="aspectFill">
    </div>
    <div class="input_all">
      <form>
        <div class="input_item">
          <div class="input_place_all">
            <div class="input_place" @click="distance">
              <span class="input_place_distance">目的地</span>
              <p>{{city}}</p>
            </div>
            <div class="input_place_R">
              <img class="img_item" src="/static/imgs/right.png">
            </div>
            <div class="input_place_R_distance" @click="getLocation">
              <img style="width: 40px;height:40px;" src="/static/imgs/map_now.png" alt="">
            </div>
          </div>
        </div>
        <div class="input_item">
          <div class="dateChoose" @click="dateChoose">
            <div class="dateDetail_L">
              <div style="display: flex;flex-direction: column;">
                <div class="outIn">入住</div>
                <!-- <div>6月11日<span class="dateDay">今天</span></div> -->
                <div>{{checkInDate}}日
                  <span class="dateDay">{{indayweek}}</span>
                </div>
              </div>
              <div class="days">{{days}}晚</div>
              <div style="display: flex;flex-direction: column;">
                <div class="outIn">离店</div>
                <!-- <div>6月12日<span class="dateDay">明天</span></div> -->
                <div>{{checkOutDate}}日
                  <span class="dateDay">{{outdayweek}}</span>
                </div>
              </div>
              <div>
                <img src="/static/imgs/right.png" class="img_item">
              </div>
            </div>
          </div>
        </div>
        <div class="input_item_form" @click="showModel">
          <div style="color: #ccc">关键字/位置/品牌/酒店名</div>
          <div style="display: flex;align-items: center">
            <img src="/static/imgs/right.png" class="img_item">
          </div>
        </div>
        <!-- <div class="input_item"> -->
          <div class="input_item_form">
            <div style="color: #ccc">星级/价格</div>
            <div style="display: flex;align-items: center">
              <img src="/static/imgs/right.png" class="img_item">
            </div>
          </div>
        <!-- </div> -->
        <div class="input_item">
          <div class="input_item_radio">
            <span class="input_item_radio_title">出行类型 · 帮您挑选心悦酒店</span>
            <radio-group class="radio-group" @change="radioChange">
              <label class="radio" v-for="(item,index) in radios" :key="index" style="margin-right: 15px;">
                <radio :value="item.name" checked="item.checked"/>{{item.value}}
              </label>
            </radio-group>
          </div>
          <!-- <div style="float: left;line-height: 50px">></div> -->
          <!-- <div style="float: right;line-height: 50px">></div> -->
        </div>
        <div class="searchButton">
          <div class="button buttonL" @click="searchHotel">查询</div>
          <div class="button buttonR" @click="searchHotel">查找附近酒店</div>
        </div>
      </form>
    </div>
    <div class="hotel_foot">
      <div class="hotel_foot_order" @click="orderUrl">
        我的订单
      </div>
      <div class="hotel_foot_Bottom">
        <span>
          <img class="iconTip" src="/static/imgs/foot_icon.png" alt="">
        </span>专业服务 · 全程保障
      </div>
    </div>
  </div>
</template>
<script>
  import QQMapWx from '@/utils/qqmap-wx-jssdk.js'
  var qqmapsdk
  qqmapsdk = new QQMapWx({
    key: 'LFGBZ-GEDW6-MYNSF-M5FTZ-KPBF5-USB2Q'
  })

  var Moment = require('@/utils/moment.js')
  export default {
    name: 'wode',
    data() {
      return {
        indayweek: '今天',
        outdayweek: '明天',
        days: 1,
        isLeft: false,
        left: -230,
        mark: 0,
        newmark: 0,
        city: '北京', //地址默认
        userInfo: {}, // 个人用户信息
        checkInDate: null,
        checkOutDate: null,
        li_meun: [{
            icon: '/static/imgs/sidebar1.png',
            name: '收藏酒店'
          },
          {
            icon: '/static/imgs/sidebar2.png',
            name: '浏览历史'
          },
          {
            icon: '/static/imgs/sidebar3.png',
            name: '我的优惠券'
          },
          {
            icon: '/static/imgs/sidebar4.png',
            name: '我的订单'
          },
          {
            icon: '/static/imgs/sidebar5.png',
            name: '我的点评'
          }
        ],
        radios: [{
            name: 'USA',
            value: '出差'
          },
          {
            name: 'CHN',
            value: '休闲',
            checked: 'true'
          }
        ]
      }
    },
    mounted() {
      console.log('mounted')
    },
    created() {
      this.getUserInfo()
    },
    onLoad() {
      wx.setStorageSync(
        'ROOM_SOURCE_DATE', {
          checkInDate: Moment(new Date()).format('YYYY-MM-DD'),
          checkOutDate: Moment(new Date()).add(1, 'day').format('YYYY-MM-DD')
        }
      )
    },
    onShow() {
      
      let {
        checkInDate,
        checkOutDate
      } = wx.getStorageSync('ROOM_SOURCE_DATE');
      this.days = this.getdays(checkInDate, checkOutDate)
      this.indayweek = this.getDayweek(checkInDate)
      this.outdayweek = this.getDayweek(checkOutDate)

      this.checkInDate = checkInDate.substr(5, 5).replace('-', '月')
      this.checkOutDate = checkOutDate.substr(5, 5).replace('-', '月')

    },
    methods: {
      // 日期主要是用来计算住离店的时候是星期几格式
      getDayweek(val) {
        let dayInOut = new Date(Date.parse(val.replace('/-/g', '/')))
        let today = new Date()
        var year = today.getFullYear()
        var moment = today.getMonth()
        var day = today.getDate()

        var year1 = dayInOut.getFullYear()
        var moment1 = dayInOut.getMonth()
        var day1 = dayInOut.getDate()
        if(year == year1 && moment == moment1 && day == day1) {
          return '今天'
        }else if(year == year1 && moment == moment1 && (day + 1)== day1) {
          return '明天'
        } else {
          var dayWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
          return dayWeek[dayInOut.getDay()]
        }        
      },
      // 写一个来获取天数
      getdays(day1, day2) {
        var day1 = new Date(Date.parse(day1.replace('/-/g', '/')))
        var day2 = new Date(Date.parse(day2.replace('/-/g', '/')))
        let dayes = parseInt(Math.abs(day2-day1)/1000/60/60/24)
        return dayes
      },
      // 
      //showModel 
      showModel() {
        wx.showModal({
          title: 'showModal',
          content: '这是一个模态弹窗'
        })
      },
      menu() {
        console.log('侧边栏')
        this.isLeft = true
      },
      touchStart(e) {
        this.mark = this.newmark = e.pageX
      },
      touchmove(e) {
        this.newmark = e.pageX
        if (this.mark > (this.newmark + 20)) {
          if (!this.isLeft) {
            let rtl = this.mark - this.newmark
            if (rtl > 100) {
              this.left = 0
              this.isLeft = true
            } else {
              this.left = rtl - 200
            }
          }
        }
        if ((this.mark + 20) < this.newmark) {
          let ltr = this.newmark - this.mark
          if (this.isLeft) {
            if (ltr > 100) {
              this.left = -210
              this.isLeft = false
            } else {
              this.left = -ltr
            }
          }
        }
      },
      touchEnd(e) {
        let rtl = this.mark - this.newmark
        let ltr = this.newmark - this.mark
        if (rtl < 100) {
          this.left = -220
          this.isLeft = false
        }
        if (ltr < 100) {
          this.left = 0
          this.isLeft = true
        }
        this.mark = 0
        this.newmark = 0
      },
      // 页面跳转到日历
      dateChoose() {
        wx.navigateTo({
          url: '/pages/calendar/main'
        })
      },
      // 查询
      searchHotel() {
        wx.navigateTo({
          url: '/pages/mains/main'
        })
      },
      // 手动输入地址
      distance() {
        console.log("distance")
        wx.navigateTo({
          url: '/pages/city/main'
        })
      },
      // 获取附近的地址
      getLocation() {
        const _that = this
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            qqmapsdk.reverseGeocoder({
              location: {
                latitude: res.latitude,
                longitude: res.longitude
              },
              success(res) {
                console.log(res, '获取附近地址')
                _that.city = res.result.address_component.city
              }
            })
          }
        })
      },
      // 登录授权的一些东西
      onGotUserInfo(e) {
        console.log(e, "用户授权")
      },
      // 测试没有授权看看登录
      getUserInfo() {
        wx.login({
          success: function (res) {
            console.log(res, "登录进来成功")
            wx.getUserInfo({
              success: function (res) {
                console.log(res, "获取基本信息")
              }
            })
          }
        })
      },
      // 退出
      logout() {
        console.log('退出成功')
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      orderUrl() {
        wx.navigateTo({
          url: '/pages/mains/main'
        })
      }
    }
  }

</script>

<style>
  .mask {
    width: 100%;
    height: auto;
  }

  .sub_title {
    width: 100%;
    height: 45px;
    padding: 10px;
    box-sizing: border-box;
    background: rgb(0, 126, 226)
  }
  .img_tille {
    width: 100%;
    height: 102px
  }
  .img_sub {
    width: 30px;
    height: 30px;
  }
  .meun {
    position: fixed;
    width: 200px;
    height: 100%;
    right: -210px;
    top: 0;
    color: white;
    padding: 5px;
    background: black;
    font-size: 15px;
    /* display: flex;
    justify-content: center */
  }
  .meun_top {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .meun_bottom {
    /* font-size: 13px; */
    margin-left: 15px;    
  }
  .meunShow {
    right: 0px;
    top: 0;
  }

  .annimalMeun {
    transform: translate(-170px);
    transition: all 0.5s ease-out;
  }

  .input_item_M {
    width: 36px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border: 0.5px solid #ccc;
    border-radius: 10px 10px;
    float: left;
    margin: 20px 20px;
    font-size: 13px;
  }
  .logout {
    width: 87px;
    height: 34px;
    border: 0.5px solid white;
    text-align: center;
    line-height: 34px;
  }
  .li_meun {
    display: flex;
    flex-direction: row;
    height: 16px;
    align-items: center;
    padding: 15px 0;
  }
  .meun_icon{
    width: 15px; 
    height: 15px;
    margin-right: 10px;
  }
  .input_all {
    width: 90%;
    margin: 0 auto;
    font-size: 15px;
  }
  .input_item {
    width: 100%;
    padding: 5px;
    font-size: 17px;
    height: 50px;
    border-bottom: 0.5px solid #ccc;
  }
  .input_item_form {
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 5px;
    width: 100%
  }
  .searchButton {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .button {
    width: 45%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border: 0.5px solid #ccc;
    border-radius: 10px 10px;
  }
  .buttonL {
    color: white;
    background: orangered;
    font-size: 15px;
  }
  .buttonR {
    color: rgb(0, 126, 226);
    /* background: orangered; */
  }
  .hotel_foot {
    width: 100%;
    height: 80px;
    padding: 10px 0 0 0;
    margin-top: 10px;
    background: rgb(246, 246, 246);
  }
  .hotel_foot_order {
    border-radius: 10px 10px;
    color: rgb(0, 126, 226);
    margin: 0px auto;
    width: 90%;
    height: 34px;
    border: 0.5px solid #ccc;
    text-align: center;
    line-height: 34px;
    font-size: 15px;
    background: white
  }
  .hotel_foot_Bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #ccc;
    height: 50px;
    line-height: 50px;
  }
  .iconTip {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
  .input_place_all {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input_place {
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }
  .input_place_distance {
    font-size: 13px;
    color: #ccc
  }
  .input_place_R {
    margin: 4% 0 0 50%;
  }
  .img_item {
    width: 20px;
    height:20px;
  }
  .dateChoose {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
  }
  .dateDetail_L {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center
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
    /* margin-left: 15%; */
    font-size: 15px;
    color: #ccc;
  }
  .dateDay {
    color: #ccc;
    font-size: 13px
  }
  .input_item_radio {
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: space-around;
  }
  .input_item_radio_title {
    color: #ccc;
    font-size: 13px
  }
  radio .wx-radio-input{
    border-radius: 50%;/* 圆角 */
    width: 15px;
    height: 15px;
  }
</style>
