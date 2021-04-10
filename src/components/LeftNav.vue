<template>
  <div class="left-nav-wrapper">
    <el-menu 
      :default-active="activeIndex"    
      class="el-menu-vertical-demo"
      background-color="#baccd9" 
      @select="handleSelect"
      :collapse="false">
      <el-menu-item index="forms">
        <i class="el-icon-document"></i>
        学生报名
      </el-menu-item>
      <el-menu-item index="statistics">
        <i class="el-icon-s-data"></i>
         数据统计
      </el-menu-item>
      <el-submenu index="upload">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          项目资讯
        </template>
        <el-menu-item index="upload">上传资讯</el-menu-item>
        <el-menu-item index="articles">资讯管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class LeftNav extends Vue {
  activeIndex = 'forms'
  handleSelect(key: any, keyPath: any) {
    switch(key){
      case 'forms': {
        window.location.hash = '#/management/forms'
        break
      }
      case 'statistics': {
        window.location.hash = '#/management/statistics'
        break
      }
      case 'upload': {
        window.location.hash = '#/management/upload'
        break
      }
      case 'articles': {
        window.location.hash = '#/management/articles'
        break
      }
      default: {
        window.location.hash = '#/'
        break
      }
    }
  }

  mounted(){
    // 正确高亮展示
    // 再确认下逻辑
    // this.handleSelect(this.activeIndex,'')
    switch(window.location.hash){
      case '#/management/forms':{
        this.activeIndex = 'forms'
        break
      }
      case '#/management/statistics':{
        this.activeIndex = 'statistics'
        break
      }
      case '#/management/upload':{
        this.activeIndex = 'article'
        break
      }
      default: {
        this.activeIndex = 'forms'
        break
      }
    }
  }
}
</script>

<style lang="less">
.left-nav-wrapper{
  .el-menu {
    border-right: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    //min-height: 400px;
  }
}
</style>