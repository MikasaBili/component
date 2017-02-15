<template>
  <label :class="{'x-checkbox-disabled': disabled}">
    <span class="x-checkboxLable">
    <span class="x-checkbox-input" :class="{'x-checkbox-checked': isChecked}"></span>
    <input 
    v-if="trueLabel || falseLabel"
    type="checkbox"
    :true-value="trueLabel"
    :false-value="falseLabel"
    v-model="_model"
    :disabled="disabled"
    >
    <input 
    v-else
    class="x-checkbox-input-none" 
    type="checkbox" 
    :value="label" 
    v-model="_model" 
    :disabled="disabled"
    >
    </span>
    <span><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'x-checkbox',
    props: {
      value: {},
      label: {},
      trueLabel: [String, Number], //  当传过来的是Number或者String的时候
      falseLabel: [String, Number],
      disabled: Boolean
    },
    computed: {
      _model: {
        get () {
          return this.isGroup ? this.$parent.value : this.value
        },
        set (val) {
          if (this.isGroup) {
            this.$parent.$emit('input', val) // 因为slot ,所以多选框组的input都在$parent下面
          } else {
            this.$emit('input', val)
          }
        }
      },
      isChecked () {
        let getType = Object.prototype.toString.call(this._model)
        if (getType === '[object Boolean]') {
          return this._model
        } else
        if (Array.isArray(this._model)) {
          return this._model.indexOf(this.label) > -1
        } else
        if (this._model !== null && this._model !== undefined) {
          return this._model === this.trueLabel
        }
      },
      isGroup () {
        return this.$parent.$options._componentTag === 'x-checkbox-group'
      }
    }
  }
</script>
<style lang="less">
  @import './checkbox';
</style>
