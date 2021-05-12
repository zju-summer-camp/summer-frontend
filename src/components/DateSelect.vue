<template>
  <div class="date-select-wrapper">
    <el-date-picker type="date" placeholder="选择日期" 
    value-format="yyyy-MM-ddTHH:mm:ssZ"
    :default-value="new Date('2000-01-01')" 
    v-model="itemConfig.value" 
    style="width: 100%;" 
    :class="{'error-input': itemConfig.error}"></el-date-picker>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
})
export default class DateSelect extends Vue {
  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  }) itemConfig !: ItemConf

  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  }) formConfig !: FormConf



}
</script>
<style lang="less">
.date-select-wrapper {
}
</style>