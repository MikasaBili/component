<template>
<label class="x-labelRadio" :class="{'isDisabled': disabled}">
  <span class="x-radio" :class="{'x-radio-check': label == _model}">
    <span class="x-radio-input" :class="['x-radio-input-'+this.theme]"></span>
    <input class="x-radio-none"
     type="radio" v-model="_model" :value="label" :disabled="disabled">
  </span>
  <span class="x-label-content">
    <slot></slot>
  </span>
</label>

</template>
<script>
  export default {
    name: 'x-radio',
    props: {
      value: {},
      label: {},
      theme: {
        type: String,
        default: 'default' // input 主题颜色 暂无
      },
      disabled: Boolean
    },
    data () {
      return {
        group: this.$parent.$options._componentTag === 'x-radio-group'
      }
    },
    computed: {
      _model: {
        get () {
          return this.group ? this.$parent.value : this.value
        },
        set (val) {
          if (this.group) {
            this.$parent.$emit('input', val) // 如果是单选框组就用单选框组下面的input
          } else {
            this.$emit('input', val)
          }
        }
      }
    }
  }
</script>
<style lang="less">
  @import './radio';
</style>
