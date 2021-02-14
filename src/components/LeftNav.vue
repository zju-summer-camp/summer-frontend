<template>
  <div class="left-nav-wrapper">
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect"  :collapse="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-data"></i>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
      </el-menu-item>
      <el-menu-item index="4-1">
        <i class="el-icon-s-data"></i>
      </el-menu-item>
      <el-menu-item index="4-2">
        <i class="el-icon-document"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class LeftNav extends Vue {
  activeIndex = '4-1'
  handleSelect(key: any, keyPath: any) {
    switch(key){
      case '4-1': {
        window.location.hash = '#/management/a'
        break
      }
      case '4-2': {
        window.location.hash = '#/management/forms'
        break
      }
      case '4-3': {
        window.location.hash = '#/regis'
        break
      }
      case '4-4': {
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
    // 正确高亮展示
    // 再确认下逻辑
    this.handleSelect(this.activeIndex,'')
    switch(window.location.hash){
      case '#/management/a':{
        this.activeIndex = '4-1'
        break
      }
      case '#/management/forms':{
        this.activeIndex = '4-2'
        break
      }
      default: {
        this.activeIndex = '4-1'
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
    min-height: 400px;
  }
}
</style>