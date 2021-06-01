<template>
  <div id="app">
    <div>
      <l-button>可用</l-button>
      <l-button type="primary">可用</l-button>
      <l-button type="success">可用</l-button>
      <l-button type="info">可用</l-button>
      <l-button type="warning">可用</l-button>
      <l-button type="danger">可用</l-button>
    </div>
    <div style="margin-top: 20px">
      <l-button :disabled="true">不可用</l-button>
      <l-button type="primary" disabled>不可用</l-button>
      <l-button type="success" disabled>不可用</l-button>
      <l-button type="info" disabled>不可用</l-button>
      <l-button type="warning" disabled>不可用</l-button>
      <l-button type="danger" disabled>不可用</l-button>
    </div>
    <div style="margin-top: 20px">
      <l-button loading>加载中</l-button>
      <l-button type="primary" loading>加载中</l-button>
      <l-button type="success" loading>加载中</l-button>
      <l-button type="info" loading>加载中</l-button>
      <l-button type="warning" loading>加载中</l-button>
      <l-button type="danger" loading>加载中</l-button>
    </div>
    <div style="margin-top: 20px">
      <l-button round>圆角按钮</l-button>
      <l-button type="primary" round>圆角按钮</l-button>
      <l-button type="success" round>圆角按钮</l-button>
      <l-button type="info" round>圆角按钮</l-button>
      <l-button type="warning" round>圆角按钮</l-button>
      <l-button type="danger" round>圆角按钮</l-button>
    </div>
    <div style="margin-top: 20px">
      <l-button circle icon="icon-selected"></l-button>
      <l-button type="primary" circle icon="icon-loading"></l-button>
      <l-button type="success" circle icon="icon-browse"></l-button>
      <l-button type="info" circle icon="icon-add"></l-button>
      <l-button type="warning" circle icon="icon-minus"></l-button>
      <l-button type="danger" circle icon="icon-close_circle"></l-button>
    </div>
    <div style="margin-top: 20px">
      <l-button>不同尺寸</l-button>
      <l-button size="medium">中等</l-button>
      <l-button size="small">小</l-button>
      <l-button size="mini">巨小</l-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.ddd {
  width: 190px;
}
</style>
