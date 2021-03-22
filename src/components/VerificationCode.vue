<template>
  <div class="verification-code-wrapper" @click="clickBtn">
    <el-input
      type="text"
      :placeholder="itemConfig.placeholder"
      v-model="itemConfig.value"
      :class="{'error-input': itemConfig.error}"
    />
    <el-button @click="sendVerificationCode">发送验证码</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import {get} from 'lodash'
import { validKey }from '@/utils/form/validKey.ts'

@Component({
})
export default class VerificationCode extends Vue {
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

  mmounted(){
    console.log("in component", this.itemConfig)
  }
  clickBtn(){
    console.log("in component", this.itemConfig)
  }

  sendVerificationCode(){    
    if(validKey(this.formConfig.items.phoneNumber, this.formConfig)) {
      alert('短信验证码发送成功，请注意查收')
    } else {
      alert('请输入正确的电话号码')
    }
  }
}
</script>
<style lang="less">
.verification-code-wrapper {
}
</style>