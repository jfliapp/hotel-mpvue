<template>
  <div class="personal">
    <div class="personal_detail">
      <div class="">
        <img src="/static/imgs/hotel_item.png" class="imgPersonal">
      </div>
      <div class="personal_detail_R">
        <div class="personal_R">
          <div class="personal_R_title">
            {{personal_details.name}}
          </div>
          <div class="personal_R_num">
            门牌号: {{personal_details.num}}
          </div>
          <div class="personal_R_do">
            <div class="do personal_R_do_follow">关注</div>
            <div class="do personal_R_do_share">分享</div>
          </div>
        </div>
        <div class="personal_distance">
          <div class="" style="display: flex;justify-content: flex-end">
            <img src="/static/imgs/map.png" style="width: 15px;height: 15px;margin-right: 10px">
            <div>{{personal_details.distance}}</div>
          </div>
          <div style="margin-top: 5px;color: #ccc;">访问量: {{personal_details.access}}</div>
        </div>
      </div>
    </div>
    <div class="personal_things">
      <!-- <div class="personal_things_itemI">主页</div> -->
      <div class="personal_things_item" v-for="(item, index) in personal_things" :key="item.id"
        @click="personalClick(item.id)" :style="{color: item.id === colorId ? 'blue': ''}" :class="{itemColor: item.id === colorId}">
        <div>{{item.num}}</div>
        <div :class="[item.id == 0 ? '' : 'other']" :style="{color: item.id === colorId ? 'blue': ''}">{{item.item}}</div>
      </div>
    </div>
    <!-- 下面点击跳转的每个tab -->
    <div v-show="stateChage == '主页'">
      <div class="IndexMain">
        <div>昵称: {{IndexMain.name}}</div>
        <div>职业: {{IndexMain.job}}</div>
        <div>座右铭: {{IndexMain.motto}}</div>
        <div style="display: flex;flex-wrap: wrap">{{IndexMain.introduce}}</div>
      </div>
      <div class="imgTitle" v-for="(item,index) in IndexMain.deeds" :key="item.id">
        <div>{{item.title}}</div>
        <div>
          <img src="/static/imgs/hotelDetail.png" style="height: 150px;width: 100%">
        </div>
      </div>
    </div>
    <div v-show="stateChage == '活动'" class="activity_all">
      <div class="activity" v-for="(item, index) in activity" :key="item.id">
        <div style="width: 100%"><img src="/static/imgs/hotelDetail.png" style="height: 150px;width: 100%;"></div>
        <div class="activity_detail">
          <div>{{item.item}}</div>
          <div style="width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
            {{item.place}} · {{item.date}} {{item.momney}}元 · 领队: {{item.leader}} · 早鸟立减: {{item.discount}} ·
          </div>
        </div>
      </div>
    </div>
    <div v-show="stateChage == '现场'" class="activity_all">
      <div class="scene" v-for="(item, index) in scene" :key="item.id">
        <div class="scene_title">
          {{item.item}}
        </div>
        <div class="scene_pictrue">
          <img src="/static/imgs/hotelDetail.png" style="width: 100%;height: 150px">
        </div>
        <div class="scene_do">
          <div>评论 ({{item.comments}})</div>
          <div>点赞 ({{item.Likes}})</div>
        </div>
      </div>
    </div>
    <div v-show="stateChage == '粉丝'">
      <div class="fans" v-for="(item, indx) in fans" :key="item.id">
        <div>
          <img src="/static/imgs/hotelDetail.png" class="fans_img">
        </div>
        <div class="fans_name">{{item.name}}</div>
      </div>
    </div>
    <div v-show="stateChage == '打榜'">
      打榜
    </div>
  </div>
</template>
<script>
  // import img from '/static/imgs/hotel_item.png'
  export default {
    data() {
      return {
        colorId: 0,
        personal_details: {
          img: '/static/imgs/hotel_item.png',
          name: '领队稻草人',
          num: 3234,
          distance: '广州',         
          access: 234
        },
        personal_things: [
          {
            id: 0,
            num: '',
            item: '主页',
            state: true
          },
          {
            id: 1,
            num: 23,
            item: '活动',
            state: false
          },
          {
            id: 2,
            num: 2523,
            item: '现场',
            state: false
          },
          {
            id: 3,
            num: 256,
            item: '粉丝',
            state: false
          },
          {
            id: 4,
            num: 2233,
            item: '打榜',
            state: false
          }
        ],
        IndexMain: {
          name: '小芋头',
          job: '企业信息的搬运工',
          motto: '生，可神游大山。死，可遨游大海',
          introduce: '我的大合照是否有你，是否有蠢蠢欲动的回忆我的大合照是否有你，是否有蠢蠢欲动的回忆',
          deeds: [
            {
              id: 1,
              title: '第一次见徐晓的',
              img: ''
            },
            {
              id: 2,
              title: '第N次见徐晓的',
              img: ''
            }
          ]
        },
        activity: [
          {
            id: 1,
            img: '',
            item: '[非周末] 番禺露营+烧烤+开炉',
            place: '番禺广场集中',
            date: '7月25日',
            momney: 60,
            leader: '稻草人',
            discount: 342
          },
          {
            id: 2,
            img: '',
            item: '[非周末] 北京露营+烧烤+开炉',
            place: '北京广场集中',
            date: '7月212日',
            momney: 160,
            leader: '稻草人2',
            discount: 34212
          }
        ],
        scene: [
          {
            id: 1,
            item: '广州站+6023火帽拉链+小熊',
            img: '',
            comments: 2,
            Likes: 6
          },
          {
            id: 2,
            item: '别境站+6023火帽拉链+小熊',
            img: '',
            comments: 25,
            Likes: 56
          }
        ],
        fans: [
          {
            id: 1,
            img: '',
            name: 'Tom Wood1'
          },
          {
            id: 2,
            img: '',
            name: 'Tom Wood2'
          },
          {
            id: 3,
            img: '',
            name: 'Tom Wood3'
          }
        ]
      }
    },
    computed: {
      stateChage() {
        let sta = this.personal_things.find((item) => {
          return item.state
        })
        return sta.item
      }
    },
    methods: {
      personalClick(id) {
        console.log(id)
        this.colorId = id
        this.personal_things.map((item) => {
          if(id == item.id) {
            item.state = true
          }else {
            item.state = false
          }
        })
      }
    }
  }
</script>
<style>
  .personal {
    /* display: flex;
    flex-direction: column; */
    font-size: 13px;
    /* padding: 10px; */
  }
  .personal_detail {
    display: flex;
    height: 100px;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid #ccc; 
  }
  .imgPersonal {
    width: 70px;
    height: 70px;
    border-radius: 50% 50%;
  }
  .personal_detail_R {
    width:300px;
    display:flex;
    justify-content:space-between
  }
  .personal_R {
    height: 80px;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    justify-content: space-around;
  }
  .personal_R_title {
    font-size: 15px;
  }
  .personal_R_num {
    color: #ccc;
  }
  .personal_R_do {
    display: flex;
  }
  .do {
    width: 70px;
    height: 25px;
    margin-right: 10px;
    text-align: center;
    line-height: 25px;
    border: 1px solid #ccc;
    border-radius: 5px 5px;
  }
  .personal_R_do_follow {
    background: blue;
    color: #fff;
  }
  .personal_R_do_share {
    color: blue
  }
  .personal_distance {
    display: flex;
    flex-direction: column;
    
  }
  .personal_things {
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .personal_things_itemI {
    display: flex;
    align-items: center;
    width: 25%;
    /* text-align: center; */
    justify-content: center;
    height: 50px;
    /* border-bottom: 1px solid #ccc; */
  }
  .personal_things_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    /* text-align: center; */
    justify-content: center;
    height: 50px;
    
  }
  .itemColor {
    color: blue;
    border-bottom: 1px solid blue;
  }
  .other {
    color: #ccc
  }
  .IndexMain {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-around;
    min-height: 100px;
  }
  .imgTitle {
    display: flex;
    padding: 0 20px 10px;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
  }
  .activity_all {
    /* height:500px; */
    background: #ccc;
    padding:20px
  }
  .activity {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* width: 100%; */
    height: 230px;
    background: #fff;
    margin-bottom: 10px
  }
  .activity_detail {
    height: 50px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    align-items: center
  }
  .scene {
    display: flex;
    flex-direction: column;
    /* height: 230px; */
    background: #fff;
    margin-bottom: 10px;
    /* justify-content: space-around; */
  }
  .scene_title {
    padding-left: 20px;
    height: 30px;
    line-height: 30px;
  }
  .scene_do {
    display: flex;
    height: 35px;
    align-items: center;
    justify-content: space-around
  }
  .fans {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 5px 0 5px 20px;
    border-bottom: 1px solid #ccc;
  }
  .fans_img {
    width: 50px;
    height: 50px;
    border-radius: 50% 50%;
  }
  .fans_name {
    padding-left: 20px;
  }
</style>