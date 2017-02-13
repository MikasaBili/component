<template>
<div>
    <div>测试组件</div>
    <x-radio label="A" v-model="m" :disabled="true">AAA</x-radio>
    <x-radio label="B" v-model="m" :disabled="true">BBB</x-radio>
    <x-radio-group v-model="m" @change="isChange">
      <x-radio label="A">AAA</x-radio>
      <x-radio label="B">BBB</x-radio>
    </x-radio-group>

    <br>

    <x-radio-group style="margin:20px;" v-model="m" @change="isChange">
      <x-radio-button label="A">AAA</x-radio-button>
      <x-radio-button label="B" :disabled="true">BBB</x-radio-button>
      <x-radio-button label="C">CCC</x-radio-button>
      <x-radio-button label="D">DDD</x-radio-button>
    </x-radio-group>
    <span>{{m}}</span>

    <br>

    <x-checkbox label="A" v-model="c">123</x-checkbox>
    <x-checkbox label="B" v-model="c">456</x-checkbox>

    <x-checkbox-group v-model="c">
      <x-checkbox label="A" :disabled="true">123</x-checkbox>
      <x-checkbox label="B" :disabled="true">456</x-checkbox>
    </x-checkbox-group>
    <span>{{c}}</span>
</div>
</template>

<script>
export default {
  data () {
    return {
      m: 'B',
      c: ['A']
    }
  },
  methods: {
    isChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="less">
</style>
