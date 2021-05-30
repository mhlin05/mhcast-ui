<template>
  <div>
    <input_test>ffff</input_test>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import Input_test from './input_test'
export default {
  // eslint-disable-next-line camelcase,vue/no-unused-components
  components: { Input_test },
  props: {},
  data() {
    return {}
  },
  methods: {},
  provide() {
    return {
      foo: this
    }
  }
}
</script>

<style scoped></style>
