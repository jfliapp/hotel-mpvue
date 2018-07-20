<template>
  <div style="width: 100%;height: 100%;">
    <!-- 这里筛选弹框 -->
    <div class="mask" v-show="tapState">
      <div style="display: flex; flex-direction: column;">
        <navigator url="/pages/city/main">
          <div class="mask_place_distan">
            上海
            <img src="/static/imgs/down.png" style="width: 15px;height: 15px;margin-left: 10px;">
          </div>
        </navigator>
        <div>
          <div class="filter_item">
              <div @click="filterItem(item)" v-for="(item, index) in filter_item" :key="index">
                <div>
                  <span :class="{click_change: item.active}">{{item.name}}&nbsp;&nbsp;</span>
                  <img v-if="!item.active" class="img_class" src="/static/imgs/down_san1.png"/>
                  <img v-else class="img_class" src="/static/imgs/up_san.png"/> |
                </div>
              </div>
              <div style="color: #1296db" @click="likeFli">&nbsp;欢迎度排序<img class="img_class" src="/static/imgs/down_san.png"/></div>
            </div>
        </div>
        <div v-if="tapState == 'filter'" class="F_model">
            <div class="F_model_T">
              <div class="F_model_T_L">
                <div v-for="(item, iFilter) in arr1" :key="iFilter"
                class="F_model_tl"
                :class="{F_model_tlF: item.border}"
                @click="clickL(item)">{{item.name}}</div>
              </div>
              <div class="F_model_T_R">
                <div v-for="(arrI, idx) in arrItemL" :key="idx">
                  <div style="padding: 5px;">{{arrI.name}}</div>
                  <div style="display: flex;flex-wrap: wrap;">
                    <div v-for="(item, index) in (arrI.tab ? arrI.arr : arrI.arrSlice)"
                     :key="index"
                     class="F_model_T_R_item">{{item}}</div>
                    <div v-if="arrI.tab" @click="arrI.tab = !arrI.tab" class="F_model_T_R_item_more">收缩<img src="/static/imgs/up_san.png" style="width: 10px;height: 10px;margin-left: 10px;"></div>
                    <div v-else class="F_model_T_R_item_more" @click="arrI.tab = !arrI.tab">更多<img src="/static/imgs/down.png" style="width: 10px;height: 10px;margin-left: 10px;"></div>
                    <!-- <div v-if="arrI.arr.length === moreLen" style="width: 60px;height: 30px;background: yellow;text-align: center;line-height: 30px;margin:5px;" @click="ItemDiv(arrI.arr)">收缩</div> -->
                  </div>
                </div>  
              </div>
            </div>
            <div class="F_model_B" style="display: flex;">
              <div style="width: 50%;text-align: center;height: 40px;line-height: 40px">清空</div>
              <div style="width: 50%;text-align: center;height: 40px;line-height: 40px;background: rgb(254, 105, 19);"
              @click="sureF">确定</div>
            </div>
        </div>
        <div v-else-if="tapState == 'map'" class="F_model">
          <div class="F_model_T">
            <div style="display: flex;flex-direction: column;flex: 1.5;background: rgb(245, 245, 245);overflow-y: scroll">
              <div v-for="(item, iFilter1) in arr2" :key="iFilter1"
              class="F_model_tl"
              :class="{F_model_tlF: item.border}"
              @click="clickL2(item)">{{item.name}}</div>
            </div>
            <div style="display: flex;flex-direction: column;flex: 4;overflow-y: scroll">
              <div v-for="(arrI, idxDist) in arrDistance" :key="idxDist"
              style="display: flex;justify-content: space-between;padding: 5px 10px;border-bottom: 1px solid rgb(235, 235, 235);font-size: 15px"
              :class="{dist_color: arrI.checked}"
              @click="check(arrI)">
                <div>{{arrI.value}}</div>
                <div :hidden="!arrI.checked">✔</div>
              </div>  
            </div>
          </div>
          <div class="F_model_B" style="display: flex;">
            <div style="width: 50%;text-align: center;height: 40px;line-height: 40px">清空</div>
            <div style="width: 50%;text-align: center;height: 40px;line-height: 40px;background: rgb(254, 105, 19);"
            @click="sureF">确定</div>
          </div>
        </div>
        <div v-else-if="tapState == 'price'" class="F_model">
          <div class="F_model_T_price">
            <div style="display: flex;flex-direction: column;margin-top: 15px;">
              <div style="margin-bottom: 15px;">星级(可复选)</div> 
              <div style="display: flex;justify-content: space-around">
                <div v-for="(item, ind) in star" :key="ind" class="star" :class="{star_choose: item.state}" @click=starChoose(item)>
                  {{item.name}}
                </div>
              </div>
            </div>
            <div style="display: flex;flex-direction: column;margin-top: 15px;">
              <div style="margin-bottom: 15px;">价格</div> 
              <div style="display: flex;flex-direction: column">
                <div style="display: flex;justify-content: space-between">
                  <div>￥0</div>
                  <div>￥10000</div>
                </div>
                <slider step="1" backgroundColor="rgb(0, 126, 226)" height="3px"></slider>
              </div>
            </div>
          </div>
          <div class="F_model_B" style="display: flex;">
            <div style="width: 50%;text-align: center;height: 40px;line-height: 40px">清空</div>
            <div style="width: 50%;text-align: center;height: 40px;line-height: 40px;background: rgb(254, 105, 19);"
            @click="sureF">确定</div>
          </div>
        </div>
        <div v-else></div>
      </div>      
    </div>
    <!-- 酒店类型 人们品牌 -->
    <div class="placeMask"  v-show="hotel_type" @click="hotel_type = !hotel_type"></div>
    <div style="background: white;height: 80%;position: absolute;width: 100%;bottom: 0;z-index: 25" v-show="hotel_type">
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
      <div>xxx</div>
    </div>
    <div class="sub_title">
      <div class="sub_title_place">
        <div class="sub_title_place_ditance" @click="palce">
        上海
        <img src="/static/imgs/down.png" class="imgS" style="margin-left: 5px">
        </div>
        <div style="display: flex;align-items: center">
          <img src="/static/imgs/map_icon.png" class="imgS"/>
          <span style="margin-left: 5px;">附近</span>
        </div>
      </div>
      <div class="input_all">
        <div class="input_sel">
          <div style="display: flex;">
            <div class="input_sel_date" @click="dateTap">
              <p>住<span style="color: #ccc;margin-left: 5px;">{{checkInDate}}</span></p>
              <p>离<span style="color: #ccc;margin-left: 5px;">{{checkOutDate}}</span></p>
            </div>
            <div class="filter_down"><img src="/static/imgs/down.png" class="imgS"></div>
            <div class="filter_line"></div>
            <!-- <div><img src="/static/imgs/filter_line.png" alt="" style="width:2px;height: 30px;"></div> -->
          </div>
          <div style="display: flex;">
            <div class="filter_down"><img src="/static/imgs/search.png" class="imgS"></div>
            <div><input style="height: 40px;padding-left: 3px" type="text" placeholder="关键字/位置/品牌/酒店名" @change="searchHotel"></div>
          </div>          
        </div>
        <div class="input_map">地图</div>
      </div>
    </div>    
    <div class="filter_item" style="border-bottom: 1px solid #ccc;padding-bottom: 2px">
      <div @click="filterItem(item)" v-for="(item, index) in filter_item" :key="index">
        <div>
          <span :class="{click_change: item.active}">{{item.name}}&nbsp;&nbsp;</span>
          <img v-if="!item.active" class="img_class" src="/static/imgs/down_san1.png"/>
          <img v-else class="img_class" src="/static/imgs/up_san.png"/> |
        </div>
      </div>
      <div style="color: #1296db">&nbsp;欢迎度排序<img class="img_class" src="/static/imgs/down_san.png"/></div>
    </div>
    <div class="filter_item" style="background: rgb(244, 244, 246);margin-top: 8px;padding: 10px 0">
      <div class="filter_li">低价好评</div>
      <div class="filter_li">位置距离</div>
      <div class="filter_li" @click="hotelType">酒店类型<img src="/static/imgs/down.png" alt="" class="img_class"></div>
      <div class="filter_li" @click="hotelType">热门品牌<img src="/static/imgs/down.png" alt="" class="img_class"></div>
    </div>
    <div>
      <!-- 这里可能要放一个新的组件 因为要根据后台能的数据筛选出来的 -->
      <hotel-list :hotels="hotel_item" :hasMore="hasmore"></hotel-list>
      
    </div>
  </div>
</template>
<script>
  import HotelList from '@/components/hotelList'
  var Moment = require('@/utils/moment.js')
  export default {
    name: 'main',
    data () {
      return {
        F_item: false,
        color_change: true,
        hasmore: false,
        hotel_type: false,
        checkInDate: null,
        checkOutDate: null,
        moreLen: 0,
        star: [
          {
            id: 1,
            value: 2,
            state: false,
            name: '二星及以下/舒适'
          },
          {
            id: 2,
            value: 3,
            state: false,
            name: '三星/舒适'
          },
          {
            id: 3,
            value: 4,
            state: false,
            name: '四星/舒适'
          },
          {
            id: 4,
            value: 5,
            state: false,
            name: '五星/舒适'
          }
        ],
        arrDistance: [
          {
            id: 1,
            name: 'All',
            value: '全城',
            checked: true
          },
          {
            id: 2,
            name: 'CHN',
            value: '中国',
            checked: false
          },
          {
            id: 3,
            name: 'USA',
            value: '美国',
            checked: false
          },
          {
            id: 4,
            name: 'JPN',
            value: '日本',
            checked: false
          }
        ],
        arr1: [
          {
            id: 1,
            name: '高端连锁',
            border: true
          },
          {
            id: 2,
            name: '中端连锁',
            border: false
          },
          {
            id: 3,
            name: '快捷连锁',
            border: false
          }
        ],
        arr2: [
          {
            id: 1,
            name: '距离',
            border: true
          },
          {
            id: 2,
            name: '商业区',
            border: false
          },
          {
            id: 3,
            name: '中国区',
            border: false
          }
        ],
        arrItemL: [
          {
            name: '高端连锁',
            idx: 0,
            tab: false,
            arrSlice: ['xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx'],
            arr: ['xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx']
          },
          {
            name: '中端连锁',
            idx: 1,
            tab: true,
            arrSlice: ['xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx'],
            arr: ['xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx']
          },
          {
            name: '快捷连锁',
            idx: 2,
            tab: false,
            arrSlice: ['xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx'],
            arr: ['xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx']
          }
        ],
        filter_item: [
          {
            name: '筛选',
            idex: 0,
            state: 'filter',
            active: false
          },
          {
            name: '位置距离',
            idex: 1,
            state: 'map',
            active: false
          },
          {
            name: '星级/价格',
            state: 'price',
            idex: 2,
            active: false
          }
        ],
        hotel_item: [
          {
            id: 1,
            img: '/static/imgs/hotel_item.png',
            name: 'xx酒店(上海店)',
            type: '高档行',
            score: 4.8,
            comment: 11103,
            grade: '优秀',
            distace: 2.7,
            old_prize: 120,
            new_prize: 80
          },
          {
            id: 2,
            img: '/static/imgs/hotel_item.png',
            name: 'xx酒店(上海店)',
            type: '高档行',
            score: 4.9,
            comment: 11103,
            grade: '优秀',
            distace: 2.7,
            old_prize: 120,
            new_prize: 80
          }
        ]
      }
    },
    components: {
      'hotel-list': HotelList
    },
    computed: {
      tapState () {
        let sta = this.filter_item.find((item) => {
          return item.active
        })
        if (sta === undefined) {
          return false
        }
        return sta.state
      }
    },
    mounted () {
      this.ItemArr()            
    },    
    onShow: function () {
      let {
          checkInDate,
          checkOutDate
        } = wx.getStorageSync('ROOM_SOURCE_DATE');
      this.checkInDate = checkInDate.substr(5, 5)
      this.checkOutDate = checkOutDate.substr(5, 5)
    },
    methods: {      
      // 选择日期的
      dateTap () {
        wx.navigateTo({
          url: '/pages/calendar/main'
        })
      },
      // 搜索 酒店
      searchHotel() {
        // 这个跟日期有关系吗        
        console.log('search')
      },
      // 这个是 选好日期渲染上去的
      getdate () {
        let {
          checkInDate,
          checkOutDate
        } = wx.getStorageSync('ROOM_SOURCE_DATE');
        this.checkInDate = checkInDate
        this.checkOutDate = checkOutDate
      },
      ItemArr () {
        this.arrItemL.forEach((ele) => {
          console.log(ele.arr.length)
          if (ele.arr.length > 8) {
            ele.sat = false
            ele.S = ele.arr.slice(0, 7)
          }
          console.log(ele)
        })
      },
      clickL (item) {
        let id = item.id
        this.arr1.map((item) => {
          if (id === item.id) {
            item.border = true
          } else {
            item.border = false
          }
        })
      },
      clickL2 (item) {
        let id = item.id
        this.arr2.map((item) => {
          if (id === item.id) {
            item.border = true
          } else {
            item.border = false
          }
        })
      },
      filterItem (item) {
        let Index = item.idex
        this.filter_item.map((item1) => {
          if (Index === item1.idex) {
            item1.active = !item1.active
          } else {
            item1.active = false
          }
        })
      },
      likeFli () {
        console.log('xxx')
        this.sureF()
      },
      check (item) {
        console.log(item)
        let distId = item.id
        this.arrDistance.map((item) => {
          if (distId === item.id) {
            item.checked = !item.checked
          } else {
            item.checked = false
          }
        })
      },
      starChoose (item) {
        console.log(item)
        let distId = item.id
        this.star.map((item) => {
          if (distId === item.id) {
            item.state = !item.state
          }
        })
      },
      sureF () {        
        this.filter_item.map((item1) => {
          item1.active = false
        })
      },
      //酒店类型 热门品牌的弹框
      hotelType() {
        this.hotel_type = true
      },
      // 城市选择
      palce() {
        wx.navigateTo({
          url: '/pages/city/main'
        })
      }
    }
  }
</script>
<style scoped>
  /* $blue_color: rgb(0, 126, 226);
  $ccc_color: rgb(244, 244, 246); */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;   
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    z-index: 99999999999999;
    background: rgba(15, 15, 26, 0.7)
  }
  .mask_place_distan {
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    background: rgb(0, 126, 226)
  }
  .placeMask {
    width: 100%;
    height: 100%;
    bottom: 0;
    position: fixed;
    overflow: hidden;
    z-index: 20;
    background: rgba(15, 15, 26, 0.7)
  }
  .sub_title{ 
    width: 100%;
    height: 100px;
    padding: 10px;
    /* text-align: center; */
    font-size: 15px;
    box-sizing: border-box;
    background: rgb(0,126,226)
  }
  .sub_title_place {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end
  }
  .sub_title_place_ditance {
    display: flex;
    align-items: center;
    margin-right: 30%
  }
  .img_class {
    width: 10px;
    height: 10px;
  }
  .input_all {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
  .input_sel {
    display: flex;
    /* float: left; */
    width: 300px;
    height: 40px;
    background: white;
    padding-left: 5px;
    box-sizing: border-box;
    border-radius: 10px 10px;
  }
  .input_sel_date {
    /* float: left; */
    font-size: 13px;
  }
  /* .input_sel input::-webkit-input-placeholder {    
    color: #aab2bd;
    font-size: 12px;
  } */
  .filter_down {
    display: flex;
    align-items: center;
    margin-left: 3px;
  }
  .filter_line {
    margin: 5px;
    height: 25px;
    border: 0.5px solid rgb(207, 207, 207);
  }
  .filter_item {
    border-bottom: 1px solid #ccc;
    padding-bottom: 2px;
    display: flex; 
    justify-content: space-around;
    font-size: 14px;
    color: rgb(171,171,171);
    height: 30px;
    background: white;
    line-height: 30px;
  }
  .input_map {
    /* float: right; */
    width: 48px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: rgb(0, 126, 226);
    background: rgb(210,228,251);
    border: 0.5px solid #ccc;
    border-radius: 10px 10px;
  }
  .filter_li {
    background:white;
    width:20%;
    height: 30px;
    text-align: center;
    color: black;
    line-height: 30px;
    border-radius: 20px 20px;
  }
  .click_change {
    color: rgb(0,126,226);
  }
  .F_model {
    height: 400px;
    display: flex;
    font-size: 15px;
    flex-direction: column;
    /* position: fixed;
    top: 22%;
    width: 100%; */
    background: white
  }  
  .F_model_T {
    display: flex;
    height: 360px;
  }
  .F_model_T_L {
    display: flex;
    flex-direction: column;
    flex: 1.5;
    background: rgb(245, 245, 245);
    overflow-y: scroll
  }
  .F_model_tl {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 2px solid rgb(236, 236, 236);
  }
.F_model_T_R {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  flex: 4;
  margin-left: 10px;
  overflow-y: scroll
}
.F_model_T_R_item {
  width: 80px;
  height: 30px;
  background:rgb(237, 245, 251);
  text-align: center;
  line-height: 30px;
  margin:2px;
}
.F_model_T_R_item_more {
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  background: yellow;
  justify-content: center;
  line-height: 30px;
  margin:5px;
}
.F_model_T_price {
  display: flex;
  height: 360px;
  flex-direction: column;
  padding:0 15px;
}
.F_model_B {
  height: 40px;
  font-size: 15px;
}
  .F_model_tlF {
    border-left: 3px solid rgb(0, 72, 145);
    background: white    
  }
  .dist_color {
    color: rgb(0, 126, 226);
  }
  .star {
    height: 43px;
    width: 80px;
    background:rgb(237, 245, 251);
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 3px auto; */
    font-size: 13px;
  }
  .star_choose {
    border: 1px solid green;
    color: green
  }
  .imgS {
    width: 15px;
    height: 15px;
  }
</style>