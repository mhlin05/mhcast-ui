<template>
  <div id="app">
<!--    <div class="ddd">-->
<!--      <mh-input-->
<!--        type="password"-->
<!--        placeholder="输入密码"-->
<!--        name="nihao"-->
<!--        :value.sync='myData'-->
<!--        show-pass-word-->
<!--      ></mh-input>-->
<!--      &lt;!&ndash;      <mh-dialog :visible='true'></mh-dialog>&ndash;&gt;-->
<!--    </div>-->
    <mh-dialog visible>
      <span slot='footer'>ddddd</span>
    </mh-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      msg: '',
      isVisible: true,
      isDisable: true,
      myData: 'this is'
    }
  },
  methods: {
    f(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
.ddd {
  width: 190px;
}
</style>
