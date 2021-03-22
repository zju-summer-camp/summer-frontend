<template>
  <div class="dq-form-wrapper" :style="{'width': formConfig.width? formConfig.width : 'auto'}">
    <dq-form-item v-for="(value, key) in formConfig.items" :key="key" :itemConfig="value" :formConfig="formConfig"></dq-form-item>
    <div class="form-buttons-wrapper">
      <el-button  @click="clickBtn(value)" v-for="(value) in formConfig.buttons" :key="value.name" :disabled="value.disabled">{{value.text}}</el-button>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import DqFormItem from '@/components/DqFormItem.vue'
  import axios from 'axios'
  import { validKey }from '@/utils/form/validKey.ts'


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
    }) formConfig!: FormConf

    keys = Array.from(Object.keys(this.formConfig.items))


    validKeys(keys: string[]){
      let flag = true
      for(const key of keys){
        flag = validKey(this.formConfig.items[key], this.formConfig) && flag
      }
      return flag
    }

    // 获取表单数据
    getData(){
      const items  = this.formConfig.items
      const data: any = {}
      for(const key of this.keys){
        const item = items[key]
        const curKey = item.submitkey || key
        const curValue = item.value
        data[curKey] = curValue
      }
      return data
    }

    sendAxios( config: any){
      axios({
        url: config.url,
        data: this.getData()
      }).then((resp)=>{
        config.success(resp)
      }).catch((error)=>{
        config.fail(error)
      })
    }

    clickBtn(buttonConfig: any){
      if(buttonConfig.type === 'submit'){
        if(!this.validKeys(this.keys)) return
        this.sendAxios(buttonConfig)
      }
      else if(buttonConfig.type === 'reset'){
        this.reset()
      }else if(buttonConfig.type === 'function'){
        buttonConfig.func()
      }
      else{
        alert('功能开发中 ')
      }
    }

    // 清空表单项 value
    reset(){
      const items = this.formConfig.items || {}
      console.log('items', items)
      for(const key in items){
        items[key].value = ''  // value的初始值都是 string 吗，能否区分不同类型？
          items[key].error = ''
      }
    }
    
  }
</script>
<style lang="less">
.dq-form-wrapper {
  margin: auto;
  .form-buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 16px 8px;
  }
}
</style>