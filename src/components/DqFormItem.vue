<template>
  <div class="dq-form-item-wrapper">
    <!-- 表单的基本项 -->

    <div class="label-part">
      <!-- hint: 对该项填写内容的提示说明，只支持纯文本 -->
      <div class="hint-wrapper">
        <el-popover
          v-if="itemConfig.hint"
          placement="top"
          title=""
          width="200"
          trigger="hover"
          :content="itemConfig.hint">
          <i class="el-icon-question icon-color" slot="reference"></i>
        </el-popover>
      </div>

      <!-- label: 表单的标签 -->
      <span class="label">{{ itemConfig.label }}</span>

      <!-- required: 是否为必填项 -->
      <span class="required" :class="{ 'red': itemConfig.required }"></span>
    </div>

    <div class="input-part">
      <!-- type: 表单填写项类型 -->
      <div class="input-wrapper">
        <el-input
          v-if="itemConfig.type === 'input'"
          type="text"
          :placeholder="itemConfig.placeholder"
          v-model="itemConfig.value"
          :class="{'error-input': itemConfig.error}"
        />
        <el-input
          v-if="itemConfig.type === 'password'"
          type="password"
          :placeholder="itemConfig.placeholder"
          v-model="itemConfig.value"
          :class="{'error-input': itemConfig.error}"
        />
        <component v-if="itemConfig.type === 'component'" :is="itemConfig.component" :itemConfig="itemConfig" :formConfig="formConfig"></component>
      </div>
      <div class="error-wrapper" v-if="itemConfig.error">{{itemConfig.error}}</div>
    </div>

  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import { Debounce } from 'vue-debounce-decorator'


  @Component({
  })
  export default class FormItem extends Vue{

  @Watch('itemConfig.value')
  @Debounce(500)
  onValueChange(newVal: any){
    // 数据变更后，检验是否符合 rules，不符合时将错误写入
    this.valid(newVal, this.formConfig)
  }


  @Prop({
    type: Object,
    default: () => {
      return {
        hint: '不应该呀',
        label: '请配置 label',
        required: true,
        value: '',
        rules: []
      }
    }
  }) itemConfig!: ItemConf
  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  }) formConfig!: FormConf

  valid(value: any, formConfig: FormConf = {}){
    let flag = true
    this.itemConfig.rules && this.itemConfig.rules.forEach((rule: any)=>{
      if(!rule.ok(value, formConfig)){
        this.itemConfig.error = rule.msg
        flag = false
      }
    })
    if(flag) {
      this.itemConfig.error = ''
    }
  }
}
</script>
<style lang="less">
.dq-form-item-wrapper {
  display: flex;
  flex-direction: row;
  background-color: antiquewhite;
  padding: 4px;
  margin: 8px;
  .label-part {
    background-color: #baccd9;
    flex: 3;
    padding-top: 8px;
    text-align: right;
    border-radius: 8px 0 0 px;
    .hint-wrapper {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin: 0 8px;
      .icon-color {
        color: #2775b6;
      }
    }

    .label {
      font-size: 16px;

    }

    .required {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 4px;
      vertical-align: middle;
      border-radius: 50%;
      &.red {
        background-color: red;
      }
    }
  }

  .input-part {
    // background-color: sandybrown;
    flex: 7;
    display: flex;
    flex-direction: column;
    align-items: start;
    .input-wrapper {
      align-self: stretch;
      .error-input {
        input {
          border-color: red;
        }
      }
    }
    .error-wrapper {
      color: red;
      font-size: 14px;
    }
  }
}
</style>