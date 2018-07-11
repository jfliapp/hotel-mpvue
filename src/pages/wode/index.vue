<template>
  <div class="mask" @touchstart="touchStart" @touchend="touchEnd">
    <div class="sub_title ">
      <div style="float: right;" @click="menu">
        <img class="img_sub" src="/static/imgs/avatar.png" alt="图片丢失">
      </div>  
    </div>
    <div class="meun" :class="meunShow ? 'annimalMeun' : ''" v-if="meunShow">
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
    <div>
      <img src="/static/imgs/hotel.png" style="width: 100%;height: 150px" mode="aspectFill">
    </div>
    <div class="input_all">
      <form>
        <div class="input_item">
          <div style="float: left;">
            <span style="font-size: 13px;color: #ccc">目的地</span>
            <p>上海</p>
          </div>
          <div style="float: left;line-height: 50px;margin-top: 5px;margin-left: 200px"><img style="width: 20px;height:20px;" src="/static/imgs/right.png" alt=""></div>
          <div style="float: right;line-height: 50px"><img style="width: 50px;height:50px;" src="/static/imgs/map_now.png" alt=""></div>
        </div>
        <div class="input_item">
          <div style="float: left;">
            <span style="font-size: 13px;color: #ccc">入住</span>
            <p>6月11日<span style="font-size: 11px;color: #ccc">周一</span></p>
          </div>
          <div class="input_item_M">一晚</div>
          <div style="float: left;margin-left: 20px;">
            <span style="font-size: 13px;color: #ccc">离店</span>
            <p>6月11日<span style="font-size: 11px;color: #ccc">周一</span></p>
          </div>
          <div style="float: right;line-height: 50px">></div>
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
          <div class="button buttonL">查询</div>
          <div class="button buttonR">查找附近酒店</div>
        </div>          
      </form>
    </div>
    <div class="hotel_foot">
      <div class="hotel_foot_order" @click="orderUrl">
        我的订单
      </div>
      <div class="hotel_foot_Bottom">
        <span><img style="width:10px ;height: 10px;margin-right: 5px;" src="/static/imgs/foot_icon.png" alt=""></span>专业服务 · 全程保障
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

  export default {
    name: 'wode',
    data () {
      return {
        meunShow: false,
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
    methods: {
      menu () {
        console.log('侧边栏')
        this.meunShow = !this.meunShow
      },
      touchStart (e) {
        // console.log(e)
        // touchStartPoint = e.changedTouches[0].pageX
      },
      touchEnd (e) {
        // console.log(e)
      },
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
    width: 80%;
    height: 40px;
    border: 0.5px solid #ccc;
    text-align: center;
    line-height: 40px;
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
</style>
