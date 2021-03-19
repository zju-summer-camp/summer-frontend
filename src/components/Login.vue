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
      <el-form ref="loginForm" :model="loginData" :rules="rules" label-width="80px">
        <div>hint: 账号：1111；密码：1111</div>
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="loginData.phoneNumber" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginData.password" autocomplete="off" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div>没有账号? <span @click="showRegister" class="link-text">去注册</span></div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitLogin('loginForm')">登 录</el-button>
      <!-- <el-button type="primary" @click="dontShowLogin">取 消</el-button> -->
    </span>
  </el-dialog>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
})
export default class Login extends Vue {
  name = 'Login'
  loginData = {
    phoneNumber: '',
    password: ''
  }

  rules = {
    phoneNumber: [
      {
        validator: (rule: any, value: any, callback: Function) => {
          const reg = /^1[0-9]{10}$/
          if(value === ''){
            callback(new Error('请输入手机号'))
          }
          // else if(!reg.test(value)){
          //   callback(new Error('请输入格式正确的手机号'))
          // }
        },
        trigger: 'blur'
      }
    ],
    password: [
      {
        validator: (rule: any, value: any, callback: Function) => {
          if(value === ''){
            callback(new Error('请输入密码'))
          }
        },
        trigger: 'blur'
      }
    ]
  }

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

  submitLogin(formName = 'loginForm'){
    console.log('in submit');
    console.log(this.$refs[formName]);
    // (this.$refs[formName] as any).validate(function (valid: boolean) {
    //   console.log('in valid')
    //   if (valid) {
    //     console.log('submit!');
    //   } else {
    //     console.log('fail!');
    //     return false
    //   }
    // })
    axios({
      url: '/login',
      data: {
        phoneNumber: this.loginData.phoneNumber,
        password: this.loginData.password
      }
    }).then((resp)=>{
      console.log(resp)
      if(resp.data && resp.data.code === 10011){
        // 登录成功
        this.dontShowLogin();
       (this as any).$message('登录成功')
       this.$store.commit('reviseLogin', resp.data)
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
    }).catch((err)=>{
      console.log('login fail')
    })
  }
}
</script>
<style lang="less">
.login-card-wrapper{
  .el-dialog {
    min-width: 400px;
  }
  .link-text {
    color: #2775b6;
    cursor: pointer;
  }
}
</style>