<template>
  <div class="x-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'x-radio-group',
    props: {
      value: {}
    },
    watch: {
      value (val) {
        this.$emit('change', val) // 绑定change事件，组件上添加change表示值变化之后触发change事件
      }
    }
  }
</script>
<style lang="less">
  .x-radio-group {
    font-size : 0;
  }
</style>
