<template>
  <label
    class="one-checkbox"
    :class="{ 'is-checked': isChecked, 'is-disabled': disabledFactor }"
  >
    <span class="one-checkbox_input" :class="{ 'is-disabled': disabledFactor }">
      <span class="one-checkbox_inner"></span>
      <input
        type="checkbox"
        class="one-checkbox_original"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled || overMax || lessMin"
      />
    </span>
    <span class="one-checkbox_label">
      <slot>
        <template>
          {{ label }}
        </template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LCheckBox',
  components: {},
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick(value) {
      this.$emit('input', value)
    }
  },
  computed: {
    isGroup() {
      return !!this.checkBoxGroup
    },
    model: {
      get() {
        return this.isGroup ? this.checkBoxGroup.value : this.value
        // return this.value
      },
      set(value) {
        this.isGroup
          ? this.checkBoxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isChecked() {
      return this.isGroup
        ? this.checkBoxGroup.value.includes(this.label)
        : this.model
    },
    overMax() {
      return (
        this.model.length >= this.checkBoxGroup.max &&
        !this.checkBoxGroup.value.includes(this.label)
      )
    },
    lessMin() {
      return (
        this.model.length <= this.checkBoxGroup.min &&
        this.checkBoxGroup.value.includes(this.label)
      )
    },
    disabledFactor() {
      return this.disabled || this.overMax || this.lessMin
    }
  },
  inject: {
    checkBoxGroup: { default: '' }
  }
}
</script>

<style lang="scss" scoped>
.one-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .one-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    .one-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .one-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .one-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.one-checkbox.is-checked {
  .one-checkbox_input {
    .one-checkbox_inner {
      background-color: #409eff;
      border-color: #409eff;
    }
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .one-checkbox_label {
    color: #409eff;
  }
}
</style>
