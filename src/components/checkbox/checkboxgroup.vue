<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LCheckBoxGroup',
  components: {},
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    min: {
      type: Number
    },
    max: {
      type: Number
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
