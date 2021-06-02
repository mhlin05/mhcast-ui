<template>
  <div id="app">
    <div style="width: 300px">
      <l-date-picker v-model="value1"></l-date-picker>
      <p>{{ value1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      value1: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss"></style>
