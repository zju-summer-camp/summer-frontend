<template>
    <el-dialog
      title="注册新账户"
      :visible.sync="showRegisterModal"
      width="30%"
      class="register-card-wrapper"
      :close-on-press-escape="false"
      :close-on-click-modal="false">
      <div class="register-content">
        <dq-form :formConfig="formConfig"></dq-form>
      </div>
    </el-dialog>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DqForm from '@/components/DqForm.vue'

@Component({
  components: {
    DqForm
  }
})
export default class Register extends Vue {
  name = 'Register'

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
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入电话号码'
          },{
            ok: (value: any) => {
              const reg = /^1[0-9]{10}$/
              console.log(reg.test(value))
              return reg.test(value) ? true: true
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
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入手机验证码'
          }
        ]
      },
      name: {
        label: '用户昵称',
        placeholder: '请输入用户昵称',
        type: 'input',
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入用户昵称'
          }
        ]
      },
      password1: {
        label: '密码',
        required: false,
        name: 'dandan',
        type: 'password',
        placeholder: '请输入密码',
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入密码'
          }
        ]
      },
      password2: {
        label: '确认密码',
        required: false,
        name: 'dandan',
        type: 'password',
        placeholder: '请重复密码',
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入密码'
          },
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
        url: '/register',
        success: (resp: any)=>{
          if(resp.data && resp.data.code === 10011){
            // 登录成功
            this.dontShowRegister();
            (this as any).$message('注册成功')
            this.$store.commit('showRegister', false)
          }
         
        },
        fail: (error: any) => {
          (this as any).$message('未知错误，请重试')
          console.log('login fail', error)
        }
      },
      reset: {
        name: 'reset',
        type: 'reset',
        text: '重置',
      },
      cancel: {
        name: 'cancel',
        type:  'function',
        text: '取消',
        func: ()=>{
          this.$store.commit('showRegister', false)
        }
      }
    }
  }

  get showRegisterModal(){
    return this.$store.state.showRegisterModal
  }
  set showRegisterModal(value){
    this.$store.commit('showRegister', value)
  }

  showRegister(){
    this.$store.commit('showRegister', true)
  }

  dontShowRegister(){
    this.$store.commit('showRegister', false)
  }
}
</script>
<style lang="less">
.register-card-wrapper{
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