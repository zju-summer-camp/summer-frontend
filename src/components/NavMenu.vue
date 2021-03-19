<template>
  <div class="nav-menu-wrapper">
    <div class="logo-wrapper">
      <img src="../assets/zju_logo.png">
      <span class="title">浙江大学夏令营</span>
    </div>
    <div class="nav-wrapper">
      <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">项目资讯</el-menu-item>
        <el-menu-item index="3">学生报名</el-menu-item>
        <el-menu-item index="4">管理后台</el-menu-item>
      </el-menu>
    </div>
    <div class="user-info-wrapper" v-if="logined">
      <span class="user-text">
        {{ userInfo.phoneNumber}}-{{userInfo.name}}
      </span>
      <span @click="logOut" class="link-text">退出</span>    
    </div>
    <div class="buttons-wrapper" v-else>
      <!-- 按钮不会被点击，只是摆设hh -->
      <el-button  @click="showLogin">登录</el-button>
      <el-button  @click="showRegister">注册</el-button>
    </div>
    <!-- 登录与注册modal框 -->
    <login></login>
    <register></register>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import Login from '@/components/Login.vue'
  import Register from '@/components/Register.vue'

  @Component({
    components: {
      Login,
      Register
    }
  })
  export default class NavMenu extends Vue{

  activeIndex = '1'

  // 登录
  showLogin(){
    this.$store.commit('showLogin', true)
  }

  // 注册
  showRegister(){
    this.$store.commit('showRegister', true)
  }

  get logined (){
    return this.$store.state.accounts.accountId
  }
  get userInfo() {
    return this.$store.state.accounts
  }


  logOut(){
    this.$store.commit('reviseAccount', {})
    this.showLogin()
  }

    handleSelect(key: any, keyPath: any) {
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
@font-face {
  font-family: 'dq-font';
  src: url(../assets/FangZhenSongTi.ttf)
}
.nav-menu-wrapper {
  display: flex;
  border-bottom: 1px solid #dcdfe6;
  align-items: center;
  .user-text {
    color: #2d2e36;
    font-size: 16px;
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
      width: 40px;
      height: 40px;
      padding: 0 20px;
    }
    .title {
      font-family: 'dq-font';
      font-size: 20px;
      line-height: 40px;
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