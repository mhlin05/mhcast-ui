<template>
  <div id="app">
    <div style="margin-top: 20px">
      <mh-button type="info" circle icon="icon-add" @click="f">1</mh-button>
      <mh-button type="info" circle>2</mh-button>
      <mh-button type="warning" icon="icon-minus" disabled>3</mh-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    f(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss"></style>
