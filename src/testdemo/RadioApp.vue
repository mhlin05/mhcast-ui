<template>
  <div id="app">
    <div>
      <p>基础用法</p>
      <l-radio v-model="testLabel" label="num"></l-radio>
      <l-radio v-model="testLabel" label="str"></l-radio>
    </div>
    <div style="margin-top: 20px">
      <p>禁用</p>
      <l-radio v-model="testLabel" label="num" :disabled="true"></l-radio>
      <l-radio v-model="testLabel" label="str" disabled></l-radio>
    </div>
    <div style="margin-top: 20px">
      <p>单选框组</p>
      <l-radio-group v-model="testLabel">
        <l-radio label="1"></l-radio>
        <l-radio label="2" disabled> </l-radio>
        <l-radio label="3"> </l-radio>
      </l-radio-group>
    </div>
    <div style="margin-top: 20px">
      <p>带边框的radio</p>
      <l-radio-group v-model="testLabel">
        <l-radio label="1" border></l-radio>
        <l-radio label="2" border> </l-radio>
        <l-radio label="3" border> </l-radio>
      </l-radio-group>
    </div>
    <div style="margin-top: 20px">
      <p>radio大小</p>
      <l-radio-group v-model="testLabel">
        <l-radio label="1" border>普通</l-radio>
        <l-radio label="2" border size="medium"> medium</l-radio>
        <l-radio label="3" border size="small">small</l-radio>
        <l-radio label="3" border size="mini">mini</l-radio>
      </l-radio-group>
    </div>
    <div style="margin-top: 20px">
      <p>radiogroup 设置radio大小 但以radio设置的size优先</p>
      <l-radio-group v-model="testLabel" size='medium'>
        <l-radio label="1" border>普通</l-radio>
        <l-radio label="2" border > medium</l-radio>
        <l-radio label="3" border >small</l-radio>
        <l-radio label="3" border size='mini'>mini</l-radio>
      </l-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      testLabel: 'num'
    }
  },
  methods: {}
}
</script>

<style lang="scss"></style>
