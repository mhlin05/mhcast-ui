<template>
  <div class="one-radio-group"><slot></slot></div>
</template>

<script>
export default {
  name: 'LRadioGroup',
  props: {
    value: null,
    // 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效
    size: {
      type: String,
      default: 'default'
    }
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
