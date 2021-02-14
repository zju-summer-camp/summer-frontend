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
    <div class="login-wrapper">
      login
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';

  @Component({
    
  })
  export default class NavMenu extends Vue{

    activeIndex = '1'

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
          window.location.hash = '#/management'
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
        case '#/management/a':
        case '#/management/forms':{
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
  .login-wrapper {
    margin: 0 20px 0 auto;
  }
}

</style>