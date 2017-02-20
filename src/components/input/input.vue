<template>
  <div style="margin:10px;">
    <template v-if="isText">
      <div>
        <slot name="start"></slot>
      </div>
      <input
      class="x-input-new"
      :class="['x-input-size-'+size, {'x-input-disabled': disabled ,'x-input-readonly': readonly}]"
      :type="type"
      :value="obtainValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :max="max"
      :min="min"
      @input="changeInput"
      >
      <div>
        <slot name="end"></slot>
      </div>
    </template>
    <textarea v-else class="x-input-new"
      :class="['x-input-size-'+size, {'x-input-disabled': disabled ,'x-input-readonly': readonly}]"
      :type="type"
      :value="obtainValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :max="max"
      :min="min"
      @input="changeInput">
    </textarea>
  </div>
</template>
<script>
  export default {
    name: 'x-input',
    data () {
      return {
        obtainValue: this.value
      }
    },
    props: {
      value: {},
      type: {
        type: String,
        default: 'text'
      },
      size: {
        type: String,
        default: 'md'
      },
      placeholder: String,
      disabled: Boolean,
      readonly: Boolean,
      required: Boolean,
      max: Number,
      min: Number
    },
    computed: {
      isText () {
        return this.type !== 'textarea'
      }
    },
    methods: {
      changeInput (event) {
        this.setParentValue(event.target.value)
      },
      setParentValue (_val) {
        this.obtainValue = _val
        this.$emit('input', _val)
      }
    }
  }
</script>
<style lang="less">
  @import './input';
</style>
