<template>
  <div id="app">
    <div style="margin-top: 20px">
      <p>普通用法</p>
      <l-check-box v-model="checked" label="吃饭"></l-check-box>
    </div>
    <div style="margin-top: 20px">
      <p>checkboxgroup</p>
      <l-check-box-group v-model="toDoList">
        <l-check-box label="吃饭"></l-check-box>
        <l-check-box label="洗澡"></l-check-box>
        <l-check-box label="喝水"></l-check-box>
        <l-check-box label="学习"></l-check-box>
        <l-check-box label="上厕所"></l-check-box>
      </l-check-box-group>
    </div>
    <div style="margin-top: 20px">
      <p>设置选择的数量 最大最小</p>
      <l-check-box-group v-model="maxList" :min="1" :max="2">
        <l-check-box label="吃饭"></l-check-box>
        <l-check-box label="洗澡"></l-check-box>
        <l-check-box label="喝水"></l-check-box>
        <l-check-box label="学习"></l-check-box>
        <l-check-box label="上厕所"></l-check-box>
      </l-check-box-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      checked: true,
      toDoList: ['洗澡', '吃饭', '喝水', '上厕所'],
      maxList: ['洗澡', '吃饭']
    }
  },
  methods: {}
}
</script>

<style lang="scss"></style>
