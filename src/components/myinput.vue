<template>
  <div class="one-input" :class="{ 'one-input_suffix': this.showSuffix }">
    <input
      class="one-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassWord ? (passWordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="one-input_suffix">
      <i class="one-input_icon icon-browse" v-if="showPassWord" @click="handlePassWordVisible"></i>
      <i class="one-input_icon icon-close_circle" v-if="clearable && value" @click="clear"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MhInput',
  components: {},
  props: {
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 文本框类型
    type: {
      type: String,
      default: '请输入'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    showPassWord: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passWordVisible: false
    }
  },
  computed: {
    showSuffix() {
      return this.showPassWord || this.clearable
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('update:value', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassWordVisible() {
      this.passWordVisible = !this.passWordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.one-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .one-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.one-input_suffix {
  .one-input_inner {
    padding-right: 30px;
  }
  .one-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
