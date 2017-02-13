<template>
    <button
    :disabled="disabled"
    :type="type"
    :class="[
    {
        'isdisabled': disabled,
        'isempty': empty
    }, 
    theme ? 'x-button x-button-'+theme : '',
    size ? 'x-button-'+size : ''
    ]"
    >
    <i class="x-loader" v-if="loading"></i>
    <slot></slot>
    </button>
</template>
<script>
export default {
  name: 'x-button',
  props: {
    type: { //  按钮类型
      type: String,
      default: 'button'
    },
    size: { //  按钮大小 sm md lg
      type: String,
      default: 'md'
    },
    theme: { //  按钮主题 default success warning danger
      type: String,
      default: 'default'
    },
    loading: Boolean, // 加载中
    disabled: Boolean, // 禁用
    empty: Boolean //  镂空按钮
  }
}
</script>
<style lang="less">
@import "./button";
</style>
