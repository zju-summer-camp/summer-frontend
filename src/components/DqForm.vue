<template>
  <div class="dq-form-wrapper" :style="{'width': formConfig.width? formConfig.width+'px': 'auto'}">
    <dq-form-item v-for="(value, key) in formConfig.items" :key="key" :itemConfig="value"></dq-form-item>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import DqFormItem from '@/components/DqFormItem.vue'
  @Component({
    components: {
      DqFormItem
    }
  })
  export default class FormItem extends Vue{
    @Prop({
      type: Object,
      default: () => {
        return {}
      }
    }) formConfig!: object
  }
</script>
<style lang="less">
.dq-form-wrapper {
  margin: auto;
}
</style>