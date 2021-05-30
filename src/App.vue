<template>
  <div id="app">
    <!--    <mh-form :model="model" label-width='80px'>-->
    <!--      <mh-form-item label="用户名">-->
    <!--        <mh-input-->
    <!--          placeholder="请输入用户名"-->
    <!--          v-model="model.username"-->
    <!--        ></mh-input>-->
    <!--      </mh-form-item>-->
    <!--      <mh-form-item label="选择">-->
    <!--        <mh-switch v-model="model.active"></mh-switch>-->
    <!--      </mh-form-item>-->
    <!--    </mh-form>-->
<!--    <l-button type="danger" disabled>111</l-button>-->
<!--    <l-button type="danger">111</l-button>-->
<!--    <l-button>111</l-button>-->
<!--    <l-button disabled>111</l-button>-->
<!--    <l-button type="primary">111</l-button>-->
<!--    <l-button type="primary" disabled>111</l-button>-->
    <l-button type='danger' :loading='true'></l-button>
    <l-button type='danger' size='medium' :loading='true'>111</l-button>
    <l-button type='danger' size='small'>111</l-button>
    <l-button type='danger' size='mini'>111</l-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {}
  },
  methods: {
    f(e) {
      console.log(e)
    },
    handleChange(e) {
      console.log(e.target.checked)
      console.log(this.isChecked)
      // this.isChecked = !e.target.checked
    }
  }
}
</script>

<style lang="scss">
.ddd {
  width: 190px;
}
</style>
