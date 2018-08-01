<template>
  <div class="place_search">
    <!-- 这个是下拉提示框 -->
    <div class="mask" v-show="maskPlace">
      <div class="select_prompt" @click="searchInput(item)"
      v-for="(item, indexPlace) in search_input" :key="indexPlace">{{item}}</div>      
    </div>
    <div class="place_search_things">
      <div class="place_search_distance">
        <div class="img_style"><img src="/static/imgs/search.png" class="imgs"></div>
        <div class="input_style">
          <input type="text" placeholder="请输入城市名称" v-model="place"
           @input="InputHandle">
          </div>
      </div>
      <div class="input_cancel" @click="inputCancel">取消</div>
    </div>
    <div class="place_now_hot">
      <div class="place_now">
        <div class="place_distance">当前城市</div>
        <div class="place_now_distance">
          <div class="place_item">重新定位</div>
        </div>
      </div>
      <div class="place_hot">
        <div class="place_distance">热门城市</div>
        <div class="place_now_distance">
          <div class="place_item" @click="placeItem(item)"
            v-for="(item, index) in cityHot" :key="index">{{item}}</div>           
        </div>
      </div>
      <div class="place_city_alphabet">
        <scroll-view :scroll-y="true" :scroll-into-view="whereAlph">
          <div v-for="item in cityItem" :key="item.id" :id="item.alph">
            <div style="padding: 20rpx;">{{item.alph}}</div>
            <div v-for="(city,indexcity) in item.arr" :key="indexcity" class="place_city_alphabet_item">
                {{city.name}}
            </div>
          </div>
        </scroll-view>
        <!-- 要使用这个要在scroll-view 里面加上scroll-y="true" -->
        <!-- <div class="cityAlph">
          <div v-for="item in cityItem" :key="item.id" class="cityAlphitem" @click="alphClick(item.alph)">
            {{item.alph}}
          </div>
        </div> -->
      </div>
    </div>    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        place: '',
        whereAlph: 'A',
        maskPlace: false,
        cityHot: ['北京', '上海', '广州', '深圳', '杭州', '成都', '上海', '广州', '深圳', '杭州', '成都'],
        search_input: ['biejin'], // 这个是输入之后提示
        cityItem: [
          {
            id: 1,
            alph: 'B',
            arr: [
              {
                value: 'beijin',
                name: '北京'
              },
              {
                value: 'baoding',
                name: '保定'
              }
            ]
          },
          {
            id: 2,
            alph: 'C',
            arr: [
              {
                value: 'chengdu',
                name: '成都'
              },
              {
                value: 'chongqin',
                name: '重庆'
              }
            ]
          },
          {
            id: 3,
            alph: 'D',
            arr: [
              {
                value: 'chengdu',
                name: '成都'
              },
              {
                value: 'chongqin',
                name: '重庆'
              }
            ]
          },
          {
            id: 4,
            alph: 'E',
            arr: [
              {
                value: 'chengdu',
                name: '成都'
              },
              {
                value: 'chongqin',
                name: '重庆'
              }
            ]
          },
          {
            id: 5,
            alph: 'F',
            arr: [
              {
                value: 'chengdu',
                name: '成都'
              },
              {
                value: 'chongqin',
                name: '重庆'
              }
            ]
          },
          {
            id: 6,
            alph: 'G',
            arr: [
              {
                value: 'chengdu',
                name: '成都'
              },
              {
                value: 'chongqin',
                name: '重庆'
              }
            ]
          },
          {
            id: 7,
            alph: 'H',
            arr: [
              {
                value: 'chengdu',
                name: '成都'
              },
              {
                value: 'chongqin',
                name: '重庆'
              }
            ]
          }
        ]
      }
    },
    methods: {
      // 点击字母滚动到相应的位置
      alphClick(item) {
        this.whereAlph = item
      },
      // 点击了其中一个 地址
      placeItem(item) {
        console.log(item)
        wx.navigateBack({
          delta: -1
        })
      },
      // 点击搜索提示的
      searchInput (item) {
        this.maskPlace = false
        console.log(item)
        wx.navigateTo({
          url: '/pages/mains/main'
        })
      },
      // 监听 input
      InputHandle() {
        this.maskPlace = true
        console.log('xx')
      },
      // input 取消
      inputCancel() {
        this.maskPlace = false
      }
    }
  }
</script>
<style>
  .mask {
    position: fixed;
    top: 50px;
    width: 100%;
    height: 100%;
    z-index: 20;    
    background: rgba(15, 15, 26, 0.7)
  }
  .imgs {
    width: 10px;
    height: 10px;
  }
  .place_search {
    font-size: 15px;
  }
  .place_search_things {
    display: flex;
    width: 95%;
    margin: 10px auto;
    align-items: center;
    justify-content: space-between;
  }
  .place_search_distance {
    /* padding: 10px; */
    width: 85%;
    height: 30px;
    display: flex;
    align-items: center;
    background: rgb(240, 239, 244)
  }
  .img_style {
    margin-left: 10px;
  }
  .input_style {
    margin-left: 10px
  }
  .input_cancel {
    width: 40px;
    height: 20px;
    padding: 5px 0;
    /* box-sizing: border-box; */
    text-align: center;
    line-height: 20px;
    border: 1px solid #ccc;
    border-radius: 10px 10px;
    background: rgb(240, 239, 244)
  }
  .select_prompt {
    height: 30px;
    line-height: 30px;
    padding: 5px 10px;
    border-top: 1px solid #ccc;
    background: #fff;
  }
  .place_now_hot {
    width: 100%;
    /* height: 300px; */
    display: flex;
    flex-direction: column;
    background: rgb(240, 239, 244)
  }
  .place_distance {
    height: 40px;
    line-height: 40px;
  }
  .place_now {
    padding: 10px 10px 0 10px;
    /* height: 80px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .place_now_distance {
    display: flex;
    flex-wrap: wrap;
  }
  .place_item {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 5px;
    align-items: center;
    background: #fff;
  }
  .place_hot {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .place_city_alphabet_item {
    /* width: 100%; */
    padding: 10px;
    height: 25px;
    background: #fff;
    line-height: 25px;
    border-bottom: 1px solid #ccc;
  }
  .cityAlph {
    position: fixed;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 50;
  }
  .cityAlphitem {
    margin: 2px
  }
</style>