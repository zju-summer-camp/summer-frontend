<template>
  <el-dialog
    title="请登录后使用"
    :visible.sync="showLoginModal"
    width="30%"
    class="login-card-wrapper"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :show-close="false">
    <div class="login-content">
      <span>
        hint: 账号：1111， 密码：1111
      </span>
      <div>没有账号? <span @click="showRegister" class="link-text">去注册</span></div>
      <dq-form :formConfig="formConfig"></dq-form>
    </div>

  </el-dialog>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import DqForm from '@/components/DqForm.vue'
import { Message } from 'element-ui'
import { Apis } from '@/api/index.ts'


@Component({
  components: {
    DqForm
  }
})
export default class Login extends Vue {
  name = 'Login'

  get showLoginModal(){
    return this.$store.state.showLoginModal
  }
  set showLoginModal(value){
    this.$store.commit('showRegister', value)
  }

  showRegister(){
    this.$store.commit('showRegister', true)
  }

  showLogin(){
    this.$store.commit('showLogin', true)
  }
  dontShowLogin(){
    this.$store.commit('showLogin', false)
  }

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
      password: {
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
      }
    },
    buttons: {
      submit: {
        name: 'submit',
        text: '登录',
        type: 'submit',
        url: Apis.signin,
        success: (resp: any)=>{
          console.log("signin",resp)
          if(resp.data && resp.data.Code === 10000){
            // 登录成功
            this.$store.commit('showLogin', false);
          Message({
            message: '登录成功',
            duration: 500,
          })
          console.log('login data', resp.data)
          this.$store.commit('reviseLogin', resp.data)
          localStorage.setItem('X-Summer-Camp-Auth-Token', resp.data.Token)
          axios({
            url: '/accounts',
            data: {
              accountId: this.$store.state.accountId
            }
          }).then((resp)=>{
            console.log(resp)
            this.$store.commit('reviseAccount', resp.data)
            
          })
          }else if(resp.data && resp.data.code === 20011){
            (this as any).$message('账号或密码错误，请重试')
            console.log('login fail')
          } else {
            (this as any).$message('未知错误，请重试')
            console.log('login fail')
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
      }
    }

  }
}
</script>
<style lang="less">
.login-card-wrapper{
  .el-dialog {
    min-width: 540px;
  }
  .link-text {
    color: #2775b6;
    cursor: pointer;
  }
}
</style>