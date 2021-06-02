<template>
  <!-- 最外层的div限定整个日历的宽度以及一些圆角阴影等样式 -->
  <div class="calendar">
    <!--header则为上图中绿色框的内容，包含上下月切换以及日历title-->
    <div class="calendar__header">
      <div class="header__pre" @click="handlePre"></div>
      <div class="header__title">
        {{ nowSelectedYear }}年{{ nowSelectedMonth + 1 }}月
      </div>
      <div class="header__next" @click="handleNext"></div>
    </div>
    <!--顾名思义main则是整个日历的核心内容，也就是日期的展示区域-->
    <div class="calendar__main">
      <!--星期一~星期日的展示头，列表渲染固定的7个block-->
      <div
        class="main__block-head"
        v-for="(item, index) in calendarHeader"
        :key="index"
      >
        {{ item }}
      </div>
      <!-- 这里放一条横线 -->
      <div class="main__line"></div>
      <!--相应月份的日期展示区域，列表渲染-->
      <div
        class="main__block"
        v-for="item in allDateOfMonth"
        :key="item.getTime()"
        :class="{
          today: dateIsEqual(item, nowDate),
          notThisMonth: item.getMonth() !== nowSelectedMonth
        }"
        :data-time="item.getTime()"
        @click="handleDateClick"
      >
        {{ item.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LDatePicker',
  components: {},
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      calendarHeader: ['一', '二', '三', '四', '五', '六', '日'],
      allDateOfMonth: [],
      nowDate: Object,
      nowSelectedMonth: 0,
      nowSelectedYear: 0,
      nowSelectedDay: 0,
      selectedDom: ''
    }
  },
  methods: {
    dateIsEqual(dateOne, dateTwo) {
      return (
        dateOne.getFullYear() === dateTwo.getFullYear() &&
        dateOne.getMonth() === dateTwo.getMonth() &&
        dateOne.getDate() === dateTwo.getDate()
      )
    },
    getAllDateOfMonth(setYear, setMonth) {
      // 一天的毫秒数
      const milliSecondOfOneDay = 24 * 60 * 60 * 1000
      const arr = []
      // 当前日期
      const nowDate = new Date()
      // 设置为第一天
      nowDate.setDate(1)
      // 设置为需要的月份
      nowDate.setMonth(setMonth)
      nowDate.setFullYear(setYear)
      // 获取当前时间 是星期几
      const nowWeek = nowDate.getDay()

      // 计算开始时间
      const beginTime = nowDate.getTime() - nowWeek * milliSecondOfOneDay
      // 获取42个日期
      for (let index = 1; index <= 42; index++) {
        arr.push(new Date(beginTime + index * milliSecondOfOneDay))
      }
      // console.log(arr)
      return arr
    },
    // 日期点击事件
    handleDateClick(e) {
      if (this.selectedDom !== '') {
        this.selectedDom.classList.remove('selected')
      }
      e.target.classList.add('selected')
      this.selectedDom = e.target
      const temp = new Date(e.target.dataset.time - '')
      const returnValue = `${temp.getFullYear()}-${
        temp.getMonth() + 1
      }-${temp.getDate()}`
      this.$emit('input', returnValue)
    },
    // 渲染下一个月数据
    handleNext() {
      this.nowSelectedMonth += 1

      if (this.nowSelectedMonth > 11) {
        this.nowSelectedYear += 1
        this.nowSelectedMonth = 0
      }
      this.allDateOfMonth = this.getAllDateOfMonth(
        this.nowSelectedYear,
        this.nowSelectedMonth
      )
    },
    handlePre() {
      this.nowSelectedMonth -= 1
      if (this.nowSelectedMonth < 0) {
        this.nowSelectedYear -= 1
        this.nowSelectedMonth = 11
      }
      this.allDateOfMonth = this.getAllDateOfMonth(
        this.nowSelectedYear,
        this.nowSelectedMonth
      )
    }
  },
  computed: {},
  created() {
    const temp = new Date()
    this.nowSelectedYear = temp.getFullYear()
    this.nowSelectedMonth = temp.getMonth()
    this.nowSelectedDay = temp.getDate()
    // console.log(this.nowSelectedMonth)
    this.allDateOfMonth = this.getAllDateOfMonth(
      this.nowSelectedYear,
      this.nowSelectedMonth
    )
    this.nowDate = temp
    // console.log(this.nowDate)

    // console.log(nowSelectedMonth)
  }
}
</script>

<style scoped lang="scss">
.calendar {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: white;

  .calendar__header {
    color: #2c3135;
    font-size: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 22px;
    margin: 17px 0;
    .header__title {
      font-size: 16px;
      letter-spacing: 1px;
    }
    .header__pre {
      height: 12px;
      width: 12px;
      position: relative;

      &:after {
        content: ' ';
        display: inline-block;
        height: 9px;
        width: 9px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        // transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(180deg);
        transform: rotate(225deg);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        left: 10px;
      }
    }
    .header__next {
      height: 12px;
      width: 12px;
      position: relative;
      &:before {
        content: ' ';
        display: inline-block;
        height: 9px;
        width: 9px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: rotate(45deg);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        left: 10px;
      }
    }
  }
  .calendar__main {
    display: flex;
    width: 100%;
    // flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .main__block-head {
      width: calc(100% / 7);
      margin-bottom: 15px;
      border-radius: 2px;
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #7f8fa4;
      background-color: #fff;
      flex-shrink: 0;
    }
    .main__line {
      width: 100%;
      border-top: 1px solid #c8c8cd;
      display: inline;
      margin-bottom: 10px;
    }
    .main__block {
      width: calc(100% / 7);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      font-size: 12px;
      color: #666666;
      background-color: #fff;
      position: relative;
      flex-shrink: 0;
      box-shadow: 0;

      &.notThisMonth {
        background-color: #edf2f5;
        color: #7f8fa4;
      }
      &.today {
        transition: 0.5s all;
        // background-color: #f93d3a;
        color: rgb(23, 118, 156);
        font-weight: bolder;
        // box-shadow: 0 2px 6px rgba(171, 171, 171, 0.5);
      }

      &:hover {
        transition: 0.5s all;
        background-color: #f93d3a;
        color: #fff;
        box-shadow: 0 2px 6px rgba(171, 171, 171, 0.5);
      }
      &.selected {
        transition: 0.5s all;
        background-color: #f93d3a;
        color: #fff;
        box-shadow: 0 2px 6px rgba(171, 171, 171, 0.5);
      }
    }
  }
}
</style>
