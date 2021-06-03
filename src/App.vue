<template>
  <div id="app">
    <div style="width: 300px">
      <l-date-picker v-model="value1"></l-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      value1: '',
      show: true
    }
  },
  methods: {}
}
</script>

<style lang="scss"></style>
