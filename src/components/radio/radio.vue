<template>
  <label
    class="one-radio"
    :class="[
      {
        'is-checked': label === model,
        'is-disabled': disabled,
        'have-border': border
      },
      `radio--${radioSize}`
    ]"
  >
    <span class="one-radio_input" :class="{ 'is-disabled': disabled }">
      <span class="one-radio_inner"></span>
      <input
        class="one-radio_original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
      />
    </span>
    <span class="one-radio_label">
      <slot>
        <template>{{ label }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LRadio',
  components: {},
  props: {
    // 原生input绑定的值
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    // v-model 传入的value
    // 经过处理 在原生input上双向绑定
    value: null,
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否带有边框
    border: {
      type: Boolean,
      default: false
    },
    // radio的尺寸，仅在border为真的时候有效
    size: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    radioSize() {
      if (this.size !== 'default') {
        return this.size
      } else {
        return this.radioGroup.size
      }
    },
    model: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value
        // return this.value
      },
      //   ??????
      set(nowValue) {
        this.isGroup
          ? this.radioGroup.$emit('input', nowValue)
          : this.$emit('input', nowValue)
      }
    },
    // 判断是否被radiogroup包裹
    isGroup() {
      return !!this.radioGroup
    }
  },
  inject: {
    radioGroup: { default: '' }
  }
}
</script>

<style lang="scss" scoped>
.one-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .one-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .one-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .one-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      //background: #222222;
      -webkit-user-select: none;
    }
  }
  .one-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
  &.is-checked {
    .one-radio_input {
      .one-radio_inner {
        border-color: #409eff;
        background-color: #409eff;
        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .one-radio_label {
      color: #409eff;
    }
  }
  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    .one-radio_input {
      .one-radio_inner {
        border-color: #c0c4cc;
        background-color: #c0c4cc;
      }
    }
    .one-radio_label {
      color: #c0c4cc;
    }
  }
  &.have-border {
    padding: 12px 20px 0 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    height: 40px;
    &.radio--medium {
      padding: 10px 20px 0 10px;
      border-radius: 4px;
      height: 36px;
    }
    &.radio--small {
      padding: 8px 15px 0 10px;
      border-radius: 3px;
      height: 32px;
    }
    &.radio--mini {
      padding: 6px 15px 0 10px;
      border-radius: 3px;
      height: 28px;
    }
  }
}
// 选中的样式
//.one-radio.is-checked {
//  .one-radio_input {
//    .one-radio_inner {
//      border-color: #409eff;
//      background-color: #409eff;
//      &:after {
//        transform: translate(-50%, -50%) scale(1);
//      }
//    }
//  }
//  .one-radio_label {
//    color: #409eff;
//  }
//}
</style>
