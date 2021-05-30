<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MhCheckBoxGroup',
  components: {},
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {},
  provide() {
    return {
      checkBoxGroup: this
    }
  }
}
</script>

<style scoped></style>
