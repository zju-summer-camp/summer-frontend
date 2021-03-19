<template>
    <el-dialog
      title="注册新账户"
      :visible.sync="showRegisterModal"
      width="30%"
      class="register-card-wrapper"
      :close-on-press-escape="false"
      :close-on-click-modal="false">
      <div class="register-content">
        <el-form ref="registerForm" :model="registerData" :rules="rules"  label-width="100px">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="registerData.phoneNumber" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="短信验证码" prop="code" :error="errors.verificationCode">
            <div class="verification-code-wrapper">
              <el-input  v-model="registerData.code" placeholder="请输入短信验证码"  autocomplete="off"></el-input>
              <el-button @click="sendVerificationCode">发送验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerData.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerData.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input type="password" v-model="registerData.checkPassword" placeholder="请重复密码"  autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dontShowRegister">取 消</el-button>
        <el-button type="primary" @click="submitRegister('registerForm')">注 册</el-button>
      </span>
    </el-dialog>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({
})
export default class Register extends Vue {
  name = 'Register'
  registerData = {
    phoneNumber: '',
    password: '',
    checkPassword: '',
    code: '',
    name: ''
  }
  errors = {
    vverificaionCode: ''
  }
  rules = {
    phoneNumber: [
      {
        validator: (rule: any, value: any, callback: Function) => {
          const reg = /^1[0-9]{10}$/
          if(value === ''){
            callback(new Error('请输入手机号'))
          }else if(!reg.test(value)){
            callback(new Error('请输入格式正确的手机号'))
          }
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

  get showRegisterModal(){
    return this.$store.state.showRegisterModal
  }
  set showRegisterModal(value){
    this.$store.commit('showRegister', value)
  }

  sendVerificationCode(){
    if(this.registerData.phoneNumber)
    console.log('发送短信验证码')
  }
  
  showRegister(){
    this.$store.commit('showRegister', true)
  }

  dontShowRegister(){
    this.$store.commit('showRegister', false)
  }
  submitRegister(formName = 'registerForm'){
    axios({
      url: '/register',
      data: {
        phoneNumber: this.registerData.phoneNumber,
        password: this.registerData.password
      }
    }).then((resp)=>{
      console.log(resp)
      if(resp.data && resp.data.code === 10011){
        // 登录成功
        this.dontShowRegister();
       (this as any).$message('登录成功')
      }else if(resp.data && resp.data.code === 20011){
        (this as any).$message('账号或密码错误')
        console.log('register fail')
      } else {
        (this as any).$message('未知错误')
        console.log('register fail')
      }
    }).catch((err)=>{
      console.log('register fail')
    })
  }
}
</script>
<style lang="less">
.register-card-wrapper{
  .el-dialog {
    min-width: 420px;
  }
  .verification-code-wrapper {
    display: flex;
    button {
      margin-left: 8px;
    }
  }
}
</style>