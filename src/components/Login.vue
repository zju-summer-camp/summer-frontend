<template>
  <div class="button-wrapper">
    <el-button  @click="showLogin">登录</el-button>
    <el-dialog
      title="请登录后使用"
      :visible.sync="showLoginModal"
      width="30%"
      class="login-card-wrapper"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false">
      <div class="login-content">
        <el-form ref="loginForm" :model="loginData" label-width="80px">
          <el-form-item label="手机号">
            <el-input v-model="loginData.phoneNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginData.password" autocomplete="off" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitLogin('loginForm')">登 录</el-button>
        <!-- <el-button type="primary" @click="dontShowLogin">取 消</el-button> -->
      </span>
    </el-dialog>
  </div>
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

  get showLoginModal(){
    return this.$store.state.showLoginModal
  }
  set showLoginModal(value){
    this.$store.commit('showLogin', value)
  }

  showLogin(){
    this.showLoginModal = true
  }
  dontShowLogin(){
    this.showLoginModal = false
  }
  submitLogin(formName = 'loginForm'){
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
        (this as any).$message('账号或密码错误')
        console.log('login fail')
      } else {
        (this as any).$message('未知错误')
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
}
</style>