<template>
<transition name="xalert">
  <div :class="[theme ? 'x-alert-'+theme : '' , 'x-alert']" v-show="isShow">
    <div class="x-main-left">
      <i :class="[theme ? 'x-alert-icon-'+theme : '' , 'iconfont' , iconSize]" v-if="showicon"></i>
    </div>
    <div class="x-main-center">
      <span class="x-alert-title" :class="[titleBlodSize]">{{title}}</span>
      <span class="x-alert-content" v-if="content">{{content}}</span>
    </div>
    <div class="x-main-right">
      <span :class="[isClose , 'iconfont']" v-if="close" @click="clickClose">{{closetext}}</span>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'x-alert',
  data () {
    return {
      isShow: true
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    theme: { // default success warning danger
      type: String,
      default: 'default'
    },
    content: {
      type: String
    },
    closetext: {
      type: String
    },
    close: Boolean,
    showicon: Boolean
  },
  computed: {
    isClose: function () {
      return this.closetext ? 'x-alert-closetext' : 'x-alert-close'
    },
    titleBlodSize: function () {
      return this.content ? 'x-alert-title-blod' : ''
    },
    iconSize: function () {
      return this.content ? 'x-alert-icon-size' : ''
    }
  },
  methods: {
    clickClose: function () {
      this.isShow = false
    }
  }
}
</script>
<style lang="less">
  @import "./alert.less";
</style>
