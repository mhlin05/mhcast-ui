<template>
  <div class="one-radio-group"><slot></slot></div>
</template>

<script>
export default {
  name: 'MhRadioGroup',
  props: {
    value: null
  },
  data() {
    return {}
  },
  provide() {
    return {
      radioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped></style>
