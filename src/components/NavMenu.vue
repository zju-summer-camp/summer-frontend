<template>
  <div class="nav-menu-wrapper">
    <div class="logo-wrapper">
      <img src="../assets/logo2.jpg" >
      <span class="title">夏令营报名系统</span>
    </div>
    <div class="nav-wrapper">
      <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="3">信息填写</el-menu-item>
        <el-menu-item index="2">项目报名</el-menu-item>
        <el-menu-item index="4" v-if="roles[0] && roles[0].name === Roles.LabLeader.value">管理后台</el-menu-item>
      </el-menu>
    </div>
    <div class="user-info-wrapper" v-if="signined">
      <span class="user-text">
       用户： {{ userInfo.phone }} {{ userInfo.Roles.name}}
      </span>
      <span @click="logOut" class="link-text">退出</span>    
    </div>
    <div class="buttons-wrapper" v-if="!userInfo.phone">
      <el-button  @click="showSignin">登录</el-button>
      <el-button  @click="showSignup">注册</el-button>
    </div>
    <!-- 登录与注册modal框 -->
    <signin></signin>
    <signup></signup>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Signin from '@/components/Signin.vue'
  import Signup from '@/components/Signup.vue'
  import { Roles } from '@/const/Roles.ts'
  @Component({
    components: {
      Signin,
      Signup
    },
    computed: {
      
    }
  })
  export default class NavMenu extends Vue{

  activeIndex = '1'

  // 登录
  showSignin(){
    this.$store.commit('showSignin', true)
  }

  // 注册
  showSignup(){
    this.$store.commit('showSignup', true)
  }

  get signined (){
    return this.$store.state.accounts.phone
  }
  get userInfo() {
    return this.$store.state.accounts
  }

  Roles = Roles

  get roles() {
    return this.$store.state.signinAccount.Roles || []
  }

  

  isManager(roles: any) {
    for(const role of roles){
      if(role.name === Roles.LabLeader.value){
        return true
      }
    }
    return false
  }

  logOut(){
    this.$store.commit('reviseAccount', {})
    this.$store.commit('reviseSignin', {})
    this.showSignin()
  }

    handleSelect(key: string, keyPath: string) {
      console.log(key, keyPath);
      switch(key){
        case '1': {
          window.location.hash = '#/'
          break
        }
        case '2': {
          window.location.hash = '#/info'
          break
        }
        case '3': {
          window.location.hash = '#/regis'
          break
        }
        case '4': {
          window.location.hash = '#/management/forms'
          break
        }
        default: {
          window.location.hash = '#/'
          break
        }
      }
    }
    mounted(){
      switch(window.location.hash){
        case '#/':{
          this.activeIndex = '1'
          break
        }
        case '#/info':{
          this.activeIndex = '2'
          break
        }
        case '#/regis':{
          this.activeIndex = '3'
          break
        }
        case '#/management':
        case '#/management/upload':
        case '#/management/forms':
        case '#/management/statistics': {
          this.activeIndex = '4'
          break
        }
        default: {
          this.activeIndex = '1'
          break
        }
      }
    }

  }
</script>
<style lang="less">
.nav-menu-wrapper {
  display: flex;
  border-bottom: 1px solid #dcdfe6;
  align-items: center;
  .user-info-wrapper{
    margin: 0 24px;
  }
  .user-text {
    color: #2d2e36;
    font-size: 14px;
    font-weight: 600;
  }

  .link-text {
    color: #2775b6;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    margin: 8px;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    img {
      width: 170px;
      height: 60px;
      padding: 0 0 0 20px;
    }
    .title {
      font-size: 20px;
      line-height: 40px;
      font-weight: 600;
      letter-spacing: 1px;
      // color: rgb(0,63,136);
    }
  }
  .nav-wrapper {
    margin: auto;
  }
  .buttons-wrapper {
    display: flex;
    margin: 0 20px 0 auto;
    .button-wrapper {
      margin-right: 8px;
    }
  }
}

</style>