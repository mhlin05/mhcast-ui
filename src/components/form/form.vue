<template>
  <div class="one-form"><slot></slot></div>
</template>

<script>
export default {
  name: 'MhForm',
  components: {},
  props: {
    model: { type: Object, required: true },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide() {
    return {
      Form: this
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
