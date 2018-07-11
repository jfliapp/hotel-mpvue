<template>
  <div>
    <div style="position: fixed;top:0;background: #f5f5f5;padding: 5px 0;width: 100%;">
      <div style="display: flex;">
        <div class="date-week" v-for="(week, weekI) in weeksStr" :key="weekI">
          <div v-if="week != '日' && week != '六'">{{week}}</div>
          <div v-if="week === '日' || week === '六'" class="week">{{week}}</div>
        </div>
      </div>
    </div>
    <div style="margin-top: 30px;width: 100%">
      <div v-for="(month, monthI) in dateList" :key="monthI" style="padding: 15px 0">
        <div class="date-year-month" style="text-align: center;">{{month.year}}年{{month.month}}月</div>
        <div style="display: flex;flex-wrap: wrap;margin-top: 15px;">
          <div class="date-day" :class="day.day <= 0 ? 'bgwhite' : day.class" v-for="(day, dayI) in month.days" :key="dayI" @click=onPressDate(month.year,month.month,day.day)>
            <div class="item-days">
              <div style="display: flex;flex-direction: column;align-items: center;">
                <div>{{day.day > 0 ? day.day : ''}}</div>
                <div style="font-size: 9px;">{{day.daytext ? day.daytext : ''}}</div>
              </div>
              <div class="inout" v-if="day.inday">入店</div>
              <div class="inout" v-if="day.outday">离店</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  var Moment = require('../../utils/moment.js')
  var DATE_LIST = [] // 放干净数据
  var DATE_YEAR = new Date().getFullYear()
  var DATE_MONTH = new Date().getMonth() + 1
  var DATE_DAY = new Date().getDate()

  export default {
    data() {
      return {
        maxMonth: 7,
        dateList: [],
        systemInfo: {},
        weeksStr: ['日', '一', '二', '三', '四', '五', '六'],
        checkInDate: Moment(new Date()).format('YYYY-MM-DD'),
        checkOutDate: Moment(new Date()).add(1, 'day').format('YYYY-MM-DD'),
        markcheckInDate: false,
        markcheckOutDate: false,
        sFtv: [{
            month: 1,
            day: 1,
            name: '元旦'
          },
          {
            month: 2,
            day: 14,
            name: '情人节'
          },
          {
            month: 3,
            day: 8,
            name: '妇女节'
          },
          {
            month: 3,
            day: 12,
            name: '植树节'
          },
          {
            month: 3,
            day: 15,
            name: '消费者权益日'
          },
          {
            month: 4,
            day: 1,
            name: '愚人节'
          },
          {
            month: 5,
            day: 1,
            name: '劳动节'
          },
          {
            month: 5,
            day: 4,
            name: '青年节'
          },
          {
            month: 5,
            day: 12,
            name: '护士节'
          },
          {
            month: 6,
            day: 1,
            name: '儿童节'
          },
          {
            month: 7,
            day: 1,
            name: '建党节'
          },
          {
            month: 8,
            day: 1,
            name: '建军节'
          },
          {
            month: 9,
            day: 10,
            name: '教师节'
          },
          {
            month: 9,
            day: 28,
            name: '孔子诞辰'
          },
          {
            month: 10,
            day: 1,
            name: '国庆节'
          },
          {
            month: 10,
            day: 6,
            name: '老人节'
          },
          {
            month: 10,
            day: 24,
            name: '联合国日'
          },
          {
            month: 12,
            day: 24,
            name: '平安夜'
          },
          {
            month: 12,
            day: 25,
            name: '圣诞节'
          }
        ]
      }
    },
    mounted() {
      console.log("mounted")
      // this.createDateListData()
    },
    onLoad() {
      console.log("onLoad")
      // this.createDateListData()
      // let {
      //     checkInDate,
      //     checkOutDate
      //   } = wx.getStorageSync('ROOM_SOURCE_DATE');
      // this.checkInDate = checkInDate  
      // this.checkOutDate = checkOutDate  
    },    
    onShow() {
      // debugger
      console.log("onShow")
      this.createDateListData()
      this.selectDateMarkLine()
      this.markcheckInDate = false
      this.markcheckOutDate = false
    },
    methods: {
      // 创建数据
      createDateListData() {
        var dateList = []
        var now = new Date()
        /*
          设置日期为 年-月-01,否则可能会出现跨月的问题
          比如：2017-01-31为now ,月份直接+1（now.setMonth(now.getMonth()+1)），则会直接跳到跳到2017-03-03月份.
          原因是由于2月份没有31号，顺推下去变成了了03-03
        */
        now = new Date(now.getFullYear(), now.getMonth(), 1) // 设置这个月的一号
        for (var i = 0; i < this.maxMonth; i++) {
          var momenthDate = Moment(now).add(i, 'month').date
          var year = momenthDate.getFullYear()
          var month = momenthDate.getMonth() + 1

          var days = []
          var totalDay = this.getTotalDayByMonth(year, month)
          var week = this.getweek(year, month, 1)
          //-week是为了使当月第一天的日期可以正确的显示到对应的周几位置上，比如星期三(week = 2)，
          //则当月的1号是从列的第三个位置开始渲染的，前面会占用-2，-1，0的位置,从1开正常渲染
          for (var j = -week + 1; j <= totalDay; j++) {
            var tempWeek = -1
            if (j > 0) {
              tempWeek = this.getweek(year, month, j) // 获取分别的几号是 星期几 0,1,2,3,4,5,6
            }
            var clazz = ''
            if (tempWeek == 0 || tempWeek == 6) {
              clazz = 'week'
            }
            if (j < DATE_DAY && year == DATE_YEAR && month == DATE_MONTH) {
              // 小于当天日期的不可用
              clazz = 'unavailable ' + clazz
            } else {
              clazz = '' + clazz
            }
            days.push({
              day: j,
              class: clazz
            }) //{day: 2, class: ''}
          }
          var dateItem = {
            id: year + '-' + month,
            year: year,
            month: month,
            days: days
          }
          dateList.push(dateItem) // 都放进去了 数据          
        }
        // 这个是节日
        var sFtv = this.sFtv
        for (let i = 0; i < dateList.length; i++) {
          for (let k = 0; k < sFtv.length; k++) {
            if (dateList[i].month == sFtv[k].month) {
              let days = dateList[i].days
              for (let j = 0; j < days.length; j++) {
                if (days[j].day == sFtv[k].day) {
                  days[j].daytext = sFtv[k].name
                }
              }
            }
          }
        }
        console.log(dateList, "dateList-这个才是干净的")
        DATE_LIST = JSON.parse(JSON.stringify(dateList))
        this.dateList = dateList;
        console.log(DATE_LIST, "干净的数据")
      },
      // 获取月的总天数
      getTotalDayByMonth(year, month) {
        month = parseInt(month, 10)
        var d = new Date(year, month, 0)
        return d.getDate()
      },
      // 获取月的第一天是星期几
      getweek(year, month, day) {
        var d = new Date(year, month - 1, day)
        return d.getDay()
      },
      // 点击日期事件
      onPressDate(Y, M, D) {
        console.log(Y, M, D)
        var year = Y
        var month = M
        var day = D

        if ((day < DATE_DAY && month == DATE_MONTH) || day <= 0) {
          return;
        }
        var tempMonth = month
        var tempDay = day
        if (month < 10) {
          tempMonth = '0' + month
        }
        if (day < 10) {
          tempDay = '0' + day
        }
        var date = year + '-' + tempMonth + '-' + tempDay
        // 如果点击选择的日期 A 小于入住时间，则重新渲染入住时间
        if ((this.markcheckInDate && Moment(date).before(this.checkInDate)) || this.checkInDate === date) {
          // debugger
          this.markcheckInDate = false
          this.markcheckOutDate = false
          this.dateList = JSON.parse(JSON.stringify(DATE_LIST))
        }
        if (!this.markcheckInDate) {
          // 点第一次
          this.checkInDate = date
          this.markcheckInDate = true
          this.dateList = JSON.parse(JSON.stringify(DATE_LIST))
          // console.log(DATE_LIST, "DATE_LIST.concat()")
        } else if (!this.markcheckOutDate) {
          // 点第二次
          this.checkOutDate = date
          this.markcheckOutDate = true
          wx.setStorageSync(
              'ROOM_SOURCE_DATE', {
                checkInDate: this.checkInDate,
                checkOutDate: this.checkOutDate
              }
            ),
          wx.navigateBack({
            delta: -1
          })
        }
        this.renderPressStyle(year, month, day)
      },
      // 渲染入住的
      renderPressStyle(year, month, day) {
        var dateList = this.dateList
        for (var i = 0; i < dateList.length; i++) {
          var dateItem = dateList[i]
          var id = dateItem.id
          if (id === year + '-' + month) {
            var days = dateItem.days
            for (var j = 0; j < days.length; j++) {
              var tempDay = days[j].day
              if (tempDay == day) {
                days[j].class = days[j].class + ' active'
                days[j].inday = true
                break
              }
            }
            break
          }
        }
        this.dateList = dateList
      },
      // 选择入住和离店时间段
      selectDateMarkLine() {
        var dateList = this.dateList
        let {
          checkInDate,
          checkOutDate
        } = wx.getStorageSync('ROOM_SOURCE_DATE');
        // if (checkInDate === undefined && checkOutDate === undefined) {
        //   checkInDate = this.checkInDate
        //   checkOutDate = this.checkOutDate
        //   wx.setStorageSync(
        //       'ROOM_SOURCE_DATE', {
        //         checkInDate: this.checkInDate,
        //         checkOutDate: this.checkOutDate
        //       }
        //     )
        // }
        let curreInid = checkInDate.substr(0, 4) + '-' + (checkInDate.substr(5, 2) < 10 ? checkInDate.substr(6, 1) :
          checkInDate.substr(5, 2)) // 2018-5
        let curreOutid = checkOutDate.substr(0, 4) + "-" + (checkOutDate.substr(5, 2) < 10 ? checkOutDate.substr(6, 1) :
          checkOutDate.substr(5, 2)); //选择离店的id
        let dayIn = checkInDate.substr(8, 2) >= 10 ? checkInDate.substr(8, 2) : checkInDate.substr(9, 1); //选择入住的天id
        let dayOut = checkOutDate.substr(8, 2) >= 10 ? checkOutDate.substr(8, 2) : checkOutDate.substr(9, 1); //选择离店的天id
        console.log(dayIn,dayOut)
        let monthIn = checkInDate.substr(5, 2) >= 10 ? checkInDate.substr(5, 2) : checkInDate.substr(6, 1); //选择入店的月id
        let monthOut = checkOutDate.substr(5, 2) >= 10 ? checkOutDate.substr(5, 2) : checkOutDate.substr(6, 1); //选择离店的月id
        if (curreInid == curreOutid) { //入住与离店是当月的情况
          for (let i = 0; i < dateList.length; i++) {
            if (dateList[i].id == curreInid) {
              let days = dateList[i].days;
              for (let k = 0; k < days.length; k++) {
                if (days[k].day > dayIn && days[k].day < dayOut) {
                  days[k].class = days[k].class + ' bgitem';
                }
                if (days[k].day == dayIn) {
                  days[k].class = days[k].class + ' active';
                  days[k].inday = true;
                }
                if (days[k].day == dayOut) {
                  days[k].class = days[k].class + ' active';
                  days[k].outday = true;
                }
              }
            }
          }
        } else { //跨月
          for (let j = 0; j < dateList.length; j++) {
            if (dateList[j].month == monthIn) { //入住的开始月份
              let days = dateList[j].days;
              for (let k = 0; k < days.length; k++) {
                if (days[k].day > dayIn) {
                  days[k].class = days[k].class + ' bgitem';
                }
                if (days[k].day == dayIn) {
                  days[k].class = days[k].class + ' active';
                  days[k].inday = true;
                }
              }
            } else { //入住跨月月份
              if (monthIn < dateList[j].month && dateList[j].month < monthOut) { //离店中间的月份
                let days = dateList[j].days;
                for (let k = 0; k < days.length; k++) {
                  days[k].class = days[k].class + ' bgitem';
                }
              } else if (dateList[j].month == monthOut) { //离店最后的月份
                let days = dateList[j].days;
                for (let k = 0; k < days.length; k++) {
                  if (days[k].day < dayOut) {
                    days[k].class = days[k].class + ' bgitem';
                  }
                  if (days[k].day == dayOut) {
                    days[k].class = days[k].class + ' active';
                    days[k].outday = true;
                  }
                }
              }
            }
          }
        }

        this.dateList = dateList
      }
    }
  }

</script>
<style scoped>
  .date-year-month {
    font-size: 20px;
  }

  .date-day {
    width: 50px;
    height: 60px;
    display: flex;
    font-size: 17px;
    padding: 5px 1.4px;
    /* padding:5px; */
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .date-day.bgitem {
    background-color: #d8ecf9;
  }

  .date-day.active {
    background: #099FDE;
    color: #FFF;

  }

  .date-day.unavailable {
    color: #aaa;
  }

  .date-week {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 5px;
    width: 50px;
    height: 20px;
  }

  .week {
    color: #099FDE;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .item-days {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  }

  .bgwhite {
    background-color: #fff;
  }

  .inout {
    font-size: 17px
  }

</style>
