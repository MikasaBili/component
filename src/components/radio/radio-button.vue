<template>
  <label class="x-radio-button" :class="{'x-radio-button-check': label == _model, 'x-radui-button-disable': disabled}">
    <input class="x-radio-button-none"
    type="radio" v-model="_model" :value="label" :disabled="disabled">
    <slot></slot>
  </label>
</template>
<script>
  export default {
    name: 'x-radio-button',
    props: {
      label: {},
      disabled: Boolean
    },
    computed: {
      _model: {
        get () {
          return this.$parent.value
        },
        set (val) {
          this.$parent.$emit('input', val)
        }
      }
    }
  }
</script>
<style lang="less">
  @import './radio-button';
</style>
