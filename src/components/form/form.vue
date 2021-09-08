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
      default: '80px',
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  provide() {
    return {
      form: this,
    }
  },
  data() {
    return {}
  },
  methods: {
    // 对所有表单进行验证
    async validate(cb) {
      // 执行表单中所有表单项的验证
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate())

      // tasks中任意false就校验失败
      const results = await Promise.all(tasks)
      console.log(results)
      if (
        results.some((item) => {
          // console.log(valid)

          return item.errorMessage !== ''
        })
      ) {
        // 校验失败
        cb(false)
      } else {
        cb(true)
      }
    },
    resetFields() {
      // 清空model
      for (let k in this.model) {
        this.model[k] = ''
      }
      this.$children
        .filter((item) => item.prop)
        .map((item) => (item.errorMessage = ''))
      // Schema.warning = function () {}
    },
  },
}
</script>

<style scoped></style>
