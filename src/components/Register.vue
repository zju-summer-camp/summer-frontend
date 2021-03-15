<template>
  <div class="button-wrapper">
    <el-button  @click="showRegister">注册</el-button>
    <el-dialog
      title="注册"
      :visible.sync="showRegisterModal"
      width="30%"
      class="register-card-wrapper">
      <div class="register-content">
        <el-form ref="registerForm" :model="registerData" label-width="80px">
          <el-form-item label="手机号">
            <el-input v-model="registerData.mobile" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="registerData.password" autocomplete="off" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitRegister('registerForm')">登 录</el-button>
        <el-button type="primary" @click="dontShowRegister">取 消</el-button>
      </span>
    </el-dialog>
  </div>
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
    password: ''
  }

  get showRegisterModal(){
    return this.$store.state.showRegisterModal
  }
  set showRegisterModal(value){
    this.$store.commit('showRegister', value)
  }
  
  showRegister(){
    this.showRegisterModal = true
  }
  dontShowRegister(){
    this.showRegisterModal = false
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
    min-width: 400px;
  }
}
</style>