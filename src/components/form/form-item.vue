<template>
  <div class="one-form-item">
    <label class="one-form-item_label" :style="{ width: this.form.labelWidth }">
      {{ label }}
    </label>
    <div class="one-form-item_content">
      <slot></slot>
    </div>
    <!-- 校验错误信息 -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Validator from 'async-validator'

export default {
  name: 'MhFormItem',
  components: {},
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
  },
  data() {
    return { errorMessage: '' }
  },
  created() {
    // console.log('this.prop', this.prop)
    this.$on('validate', this.validate)
  },
  methods: {
    validate() {
      console.log('验证')
      return new Promise((resolve) => {
        // 校验规则制定
        const descriptor = { [this.prop]: this.form.rules[this.prop] }
        // 创建校验器
        const validator = new Validator(descriptor)
        // 执行校验
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          (errors) => {
            if (errors) {
              this.errorMessage = errors[0].message
              resolve(this)
            } else {
              this.errorMessage = ''
              resolve(this)
            }
          }
        )
      })
    },
  },
  inject: {
    form: { default: {} },
  },
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
.one-form-item {
  margin-bottom: 25px;
  .one-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .one-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
