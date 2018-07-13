<template>
  <div class="mask">
    <!-- <div class="meun" :class="{meunShow: meunShow}"> -->
    <div class="meun" :class="{meunShow: isLeft}" :style="{right: left + 'px'}" >
      <div style="text-align: center">  
        <div style="margin-top: 10px">M20135****95</div>
        <div class="logout" @click="logout">退出</div>
      </div>
      <div style="margin: 15px 0 0 15px;"> 
      <ul>
        <li class="li_meun" v-for="(item, index) in li_meun" :key="index">
          <!-- <img style="width: 10px; height: 10px;" :src="{{item.icon}}" alt=""> -->
          <div><span><img style="width: 15px; height: 15px;margin-right: 10px;" :src="item.icon" alt=""></span>{{item.name}}</div>
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
      <img src="/static/imgs/hotelDetail.png" style="width: 100%;height: 150px" mode="aspectFill">
    </div>
    <div class="input_all">
      <form>
        <div class="input_item">
          <div class="input_place_all">
            <div class="input_place">
              <span class="input_place_distance">目的地</span>
              <p>上海</p>
            </div>
            <div class="input_place_R"><img style="width: 20px;height:20px;" src="/static/imgs/right.png"></div>
            <div class="input_place_R_distance"><img style="width: 50px;height:50px;" src="/static/imgs/map_now.png" alt=""></div>
          </div>
        </div>
        <div class="input_item">
          <div class="dateChoose" @click="dateChoose">
            <div class="dateDetail_L">
              <div style="display: flex;flex-direction: column;">
                <div class="outIn">入住</div>
                <!-- <div>6月11日<span class="dateDay">今天</span></div> -->
                <div>{{checkInDate}}日<span class="dateDay">今天</span></div>
              </div>
              <div class="days">一晚</div>
              <div style="display: flex;flex-direction: column;">
                <div class="outIn">离店</div>
                <!-- <div>6月12日<span class="dateDay">明天</span></div> -->
                <div>{{checkOutDate}}日<span class="dateDay">明天</span></div>
              </div>
              <div>
                <img src="/static/imgs/right.png" style="width: 20px;height: 20px;">
              </div>
            </div>
         </div>
        </div>
        <div class="input_item" style="line-height: 50px;">
          <div style="float: left;color: #ccc">关键字/位置/品牌/酒店名</div>
          <div style="float: right;">></div>
        </div>
        <div class="input_item" style="line-height: 50px">
          <div style="float: left;color: #ccc">星级/价格</div>
          <div style="float: right;">></div>
        </div>
        <div class="input_item">
          <div style="float: left;">
            <span style="font-size: 13px;color: #ccc">出行类型 · 帮您挑选心悦酒店</span>
            <radio-group class="radio-group" @change="radioChange">
              <label class="radio" style="margin-right: 10px;font-size: 16px;" v-for="(item,index) in radios" :key="index">
                <radio :value="item.name" checked="item.checked"/>{{item.value}}
              </label>
            </radio-group>
          </div>
          <!-- <div style="float: left;line-height: 50px">></div> -->
          <!-- <div style="float: right;line-height: 50px">></div> -->
        </div>
        <div style="display: flex;justify-content: space-between;margin-top: 10px;">
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
        <span><img class="iconTip" src="/static/imgs/foot_icon.png" alt=""></span>专业服务 · 全程保障
      </div>
    </div>
  </div>
</template>
<script>
  import sidebaricon1 from '../../../static/imgs/sidebar1.png'
  import sidebaricon2 from '../../../static/imgs/sidebar2.png'
  import sidebaricon3 from '../../../static/imgs/sidebar3.png'
  import sidebaricon4 from '../../../static/imgs/sidebar4.png'
  import sidebaricon5 from '../../../static/imgs/sidebar5.png'

  var Moment = require('@/utils/moment.js')
  export default {
    name: 'wode',
    data () {
      return {
        isLeft: false,
        left: -170,
        mark: 0,
        newmark: 0,
        checkInDate: null,
        checkOutDate: null,
        li_meun: [
          {
            icon: sidebaricon1,
            name: '收藏酒店'
          },
          {
            icon: sidebaricon2,
            name: '浏览历史'
          },
          {
            icon: sidebaricon3,
            name: '我的优惠券'
          },
          {
            icon: sidebaricon4,
            name: '我的订单'
          },
          {
            icon: sidebaricon5,
            name: '我的点评'
          }
        ],
        radios: [
          {
            name: 'USA',
            value: '出差'
          },
          {
            name: 'CHN',
            value: '休闲',
            checked: 'true'
          }
        ],
        msg: 'xxx'
        // img: require('static/imgs/avatar.png')
      }
    },
    mounted () {
      console.log('mounted')
    },
    onLoad() {
      wx.setStorageSync(
        'ROOM_SOURCE_DATE', {
          checkInDate: Moment(new Date()).format('YYYY-MM-DD'),
          checkOutDate: Moment(new Date()).add(1, 'day').format('YYYY-MM-DD')
        }
      )
    },
    onShow () {
      let {
          checkInDate,
          checkOutDate
        } = wx.getStorageSync('ROOM_SOURCE_DATE');
      this.checkInDate = checkInDate.substr(5, 5).replace('-', '月')
      this.checkOutDate = checkOutDate.substr(5, 5).replace('-', '月')
    },
    methods: {
      menu () {
        console.log('侧边栏')
        this.isLeft = true
      },
      touchStart (e) {
        this.mark = this.newmark = e.pageX
      },
      touchmove(e) {
        this.newmark = e.pageX
        if(this.mark > (this.newmark + 20)) {
          if (!this.isLeft) {
            let rtl = this.mark - this.newmark
            if(rtl > 100) {
              this.left = 0
              this.isLeft = true
            } else {
              this.left = rtl-170
            }
          }  
        }
        if((this.mark + 20) < this.newmark) {
          let ltr = this.newmark - this.mark
          if(this.isLeft) {
            if(ltr > 100) {
              this.left = -170
              this.isLeft = false
            } else {
              this.left = -ltr
            }
          }          
        }
      },
      touchEnd (e) {
        let rtl = this.mark - this.newmark
        let ltr = this.newmark - this.mark
        if(rtl < 100) {
          this.left = -170
          this.isLeft = false
        }
        if(ltr < 100) {
          this.left = 0
          this.isLeft = true
        }
        this.mark = 0
        this.newmark = 0
      },
      // 页面跳转到日历
      dateChoose () {
        wx.navigateTo({
          url: '/pages/calendar/main'
        })
      },
      // 查询
      searchHotel () {
        wx.navigateTo({
          url: '/pages/mains/main'
        })
      },
      // 退出
      logout () {
        console.log('退出成功')
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      orderUrl () {
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
    background: rgb(0,126,226)
  }
  .img_sub{
    width: 30px;
    height: 30px;
  }
  .meun {
    position: fixed;
    width: 160px;
    height: 100%;
    right: -170px;
    top: 0;
    color: white;
    padding: 5px;
    background: black;    
    /* display: flex;
    justify-content: center */
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
    font-size:13px;
  }
  .logout {
    width: 80px;
    height: 40px;
    border: 0.5px solid white;
    text-align: center;
    line-height: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
  .li_meun {
    padding: 10px 0;
    font-size:15px;
  }
  .input_all {
    width: 90%;
    margin: 0 auto;
  }
  .input_item {
    width: 100%;
    padding: 5px;
    font-size: 17px;
    height: 50px;
    border-bottom: 0.5px solid #ccc; 
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
    background: rgb(246,246,246);
  }
  .hotel_foot_order {
    border-radius:10px 10px;
    color: rgb(0, 126, 226);
    margin:0px auto;
    width: 90%;
    height: 40px;
    border: 0.5px solid #ccc;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background: white
  }
  .hotel_foot_Bottom {
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #ccc;
    height: 50px;
    line-height: 50px;
  }
  .iconTip {
    width:10px ;
    height: 10px;
    margin-right: 5px;
  }
  .input_place_all{
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
    margin: 6% 0 0 60%;
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
  font-size: 13px
}

</style>
