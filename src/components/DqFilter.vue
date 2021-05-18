<template>
  <div class="dq-filter-wrapper" :style="{'width': filterConfig.width? filterConfig.width : 'auto'}">
    <div class="filters-wrapper">
        <dq-form-item v-for="(value, key) in filterConfig.items" :key="key" :itemConfig="value" :filterConfig="filterConfig"></dq-form-item>
    </div>
    <div class="filter-buttons-wrapper">
      <el-button  @click="clickBtn(value)" v-for="(value) in filterConfig.buttons" :key="value.name" :disabled="value.disabled">{{value.text}}</el-button>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import DqFormItem from '@/components/DqFormItem.vue'
  import axios from 'axios'
  import { validKey } from '@/utils/form/validKey.ts'


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
    }) filterConfig!: FormConf

    keys = Array.from(Object.keys(this.filterConfig.items))


    validKeys(keys: string[]){
      let flag = true
      for(const key of keys){
        flag = validKey(this.filterConfig.items[key], this.filterConfig) && flag
      }
      return flag
    }

    // 获取表单数据
    getData(){
      const items  = this.filterConfig.items
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
      // 这部分代码需要整理下，更好地实现发送请求的配置化功能
      // get 方法
      if(config.method === 'get'){
        axios.get( config.url, {
          params: this.getData()
        }).then((resp)=>{
          config.success(resp)
        }).catch((error)=>{
          config.fail(error)
        })
      } 
      else{
        // 默认使用 post 方法
        // 兜底呢？
        axios({
          url: config.url,
          data: this.getData(),
          method: 'post'
        }).then((resp)=>{
          config.success(resp)
        }).catch((error)=>{
          config.fail(error)
        })
      }
    }

    clickBtn(buttonConfig: any){
      const data = this.getData()

      // 校验表单项
      if(buttonConfig.type === 'submit'){
        console.log('校验表单填写项是否正确...')
        if(!this.validKeys(this.keys)) return
        console.log('校验通过')
      }
      // 调用用户传入的函数
      if(buttonConfig.func){
        buttonConfig.func(data)
      }

      // 情况表单项
      if(buttonConfig.type === 'reset'){
        this.reset()
      }
    }

    // 清空表单项 value
    reset(){
      const items = this.filterConfig.items || {}
      console.log('items', items)
      for(const key in items){
        items[key].value = ''  // value的初始值都是 string 吗，能否区分不同类型？
          items[key].error = ''
      }
    }
    
  }
</script>
<style lang="less">
.dq-filter-wrapper {
  margin: auto;
  display: flex;
  width: 100%;
  padding: 10px;
  border: 1px dashed rgb(176, 213, 223);
  //background-color: rgba(176, 213, 223, 0.5);
  border-radius: 8px;
  .filters-wrapper {
    flex: 7;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .filter-buttons-wrapper {
    // background-color: aquamarine;
    border-left: 1px dashed rgb(176, 213, 223);
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    padding: 13px;
  }
}
</style>