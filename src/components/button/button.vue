<template>
  <button
    @click="handleClick"
    class="hm-button"
    :disabled="disabled"
    :autofocus="autofocus"
    :class="[
      `hm-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      {
        'is-circle': circle
      },
      { 'is-disabled': disabled },
      { 'is-loading': loading },
      `hm-button--${size}`
    ]"
  >
    <i class="icon-loading" v-if="this.loading"></i>
    <i :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // button大小
    size: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  methods: {
    handleClick() {
      this.$emit('click', 123)
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: 5px;
  &.is-disabled,
  &.is-loading,
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &.is-disabled,
    &.is-loading,
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
    }
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &.is-disabled,
    &.is-loading,
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
  }
  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &.is-disabled,
    &.is-loading,
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
    }
  }
  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &.is-disabled,
    &.is-loading,
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }
    }
  }
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &.is-disabled,
    &.is-loading,
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
    }
  }
  &--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  // 圆角
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  // 按钮disable样式
  &.is-disabled {
    cursor: not-allowed;
    background-image: none;
  }
  &.is-loading {
    cursor: not-allowed;
    background-image: none;
  }
}
.hm-button [class*='icon-'] + span {
  margin-left: 5px;
}

@keyframes easy-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
.icon-loading {
  display: inline-block;
  animation: easy-spin 2s infinite linear;
}
</style>
