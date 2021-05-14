<template>
    <el-dialog
      title="注册新账户"
      :visible.sync="showSignupModal"
      width="30%"
      class="signup-card-wrapper"
      :close-on-press-escape="false"
      :close-on-click-modal="false">
      <div class="signup-content">
        <dq-form :formConfig="formConfig"></dq-form>
      </div>
    </el-dialog>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DqForm from '@/components/DqForm.vue'
import { Apis } from '@/api/index.ts'
import axios from 'axios'

@Component({
  components: {
    DqForm
  }
})
export default class Signup extends Vue {
  name = 'Signup'

  formConfig = {
    width: '500px',
    items: {
      phoneNumber: {
        hint: '请输入境内电话号码',
        label: '电话号码',
        placeholder: '请输入电话号码',
        type: 'input',
        value: '',
        submitkey: 'phoneNumber',
        error: '',
        required: true,
        rules: [
          {
            ok: (value: any) => {
              const reg = /^1[0-9]{10}$/
              console.log(reg.test(value))
              return reg.test(value) ? true: false
            },
            msg: '请输入格式正确的手机号'
          }
        ]
      },
      verificationCode: {
        label: '手机验证码',
        placeholder: '请输入手机验证码',
        type: 'component',
        component: () => import('@/components/VerificationCode.vue'),
        value: '',
        submitkey: 'verificationCode',
        error: '',
        required: true,
        rules: [
        ]
      },
      name: {
        label: '用户昵称',
        placeholder: '请输入用户昵称',
        required: true,
        type: 'input',
        value: '',
        error: '',
        rules: [
        ]
      },
      password1: {
        label: '密码',
        required: true,
        name: 'dandan',
        type: 'password',
        placeholder: '请输入密码',
        value: '',
        error: '',
        rules: [
        ]
      },
      password2: {
        label: '确认密码',
        required: true,
        name: 'dandan',
        type: 'password',
        placeholder: '请重复密码',
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any, formConfig: FormConf) => {
              return value === formConfig.items.password1.value ? true : false
            },
            msg: '两次密码不一致'
          }
        ]
      }
    },
    buttons: {
      submit: {
        name: 'submit',
        text: '注册',
        type: 'submit',
        func: (data: any)=>{
          axios({
          url: Apis.signup,
          data: data,
          method: 'post'
        }).then((resp)=>{
          if(resp.data && resp.data.code === 10011){
            this.dontShowSignup();
            (this as any).$message('注册成功')
            this.$store.commit('showSignup', false)
          }
        }).catch((error)=>{
          (this as any).$message('未知错误，请重试')
          console.log('signin fail', error)
        })
        },
      },
      reset: {
        name: 'reset',
        type: 'reset',
        text: '重置',
      },
      cancel: {
        name: 'cancel',
        text: '取消',
        func: ()=>{
          this.$store.commit('showSignup', false)
        }
      }
    }
  }

  get showSignupModal(){
    return this.$store.state.showSignupModal
  }
  set showSignupModal(value){
    this.$store.commit('showSignup', value)
  }

  showSignup(){
    this.$store.commit('showSignup', true)
  }

  dontShowSignup(){
    this.$store.commit('showSignup', false)
  }
}
</script>
<style lang="less">
.signup-card-wrapper{
  .el-dialog {
    min-width: 540px;
  }
  .verification-code-wrapper {
    display: flex;
    button {
      margin-left: 8px;
    }
  }
}
</style>