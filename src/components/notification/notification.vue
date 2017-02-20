<template>
  <transition name="notification-fade">
    <div 
    class="x-notification" 
    :class="[typeClass]"
    :style="{top: top ? top +'px' : 'auto'}"
    v-show="visible"
    >
      <div class="x-notification-main">{{content}}</div>
      <i class="x-notification-icon iconfont" @click="close"></i>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        title: '',
        content: '',
        top: null,
        visible: false,
        type: null,
        closed: false,
        onClose: null,
        closeFun: null,
        time: null
      }
    },
    computed: {
      typeClass () {
        return this.type ? `x-notification-type-${this.type}` : ''
      }
    },
    methods: {
      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose()
        }
        if (typeof this.closeFun === 'function') {
          this.closeFun(this.id)
        }
      },
      deleteEl () {
        this.$el.removeEventListener('transitionend', this.deleteEl)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    watch: {
      closed (newValue) {
        if (newValue) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.deleteEl)
        }
      }
    },
    mounted () {
      if (this.time) {
        setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.time)
      }
    }
  }
</script>
<style lang="less">
  @import './notification';
</style>
