<template>
  <div @click.stop>
    <input class="input" @click="openPanel" :value="value" />
    <transition name="fadeDownBig">
      <!-- 最外层的div限定整个日历的宽度以及一些圆角阴影等样式 -->
      <div class="calendar" v-show="panelIsShow">
        <!--header则为上图中绿色框的内容，包含上下月切换以及日历title-->
        <div class="calendar__header">
          <div class="header__pre" @click="handlePre"></div>
          <div class="header__title">
            <span> {{ nowSelectedYear }}年 </span>

            <span>{{ nowSelectedMonth + 1 }}月</span>
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
    </transition>
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
  mounted() {
    window.addEventListener('click', this.eventListener)
  },
  data() {
    return {
      calendarHeader: ['一', '二', '三', '四', '五', '六', '日'],
      allDateOfMonth: [],
      nowDate: Object,
      nowSelectedMonth: 0,
      nowSelectedYear: 0,
      nowSelectedDay: 0,
      selectedDom: '',
      panelIsShow: false
    }
  },
  methods: {
    eventListener() {
      this.panelIsShow = false
    },
    handleFocus() {
      this.panelIsShow = true
    },
    handleBlur() {
      this.panelIsShow = false
    },
    openPanel() {
      this.panelIsShow = !this.panelIsShow
    },
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
      // 取消已选择日期的样式
      if (this.selectedDom !== '') {
        this.selectedDom.classList.remove('selected')
      }
      // 为现在选择的日期添加样式
      e.target.classList.add('selected')
      this.selectedDom = e.target
      //
      const temp = new Date(e.target.dataset.time - '')
      const returnValue = `${temp.getFullYear()}-${
        temp.getMonth() + 1
      }-${temp.getDate()}`
      this.$emit('input', returnValue)
      this.panelIsShow = !this.panelIsShow
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
    },
    destroyed() {
      window.removeEventListener('click', this.eventListener)
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
@import './datepick.scss';
</style>
