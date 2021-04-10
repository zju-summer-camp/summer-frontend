<template>
  <!-- 后台管理系统入口，管理员及教师权限 -->
  <div class="management-wrapper">
    <div class="nav-wrapper">
      <left-nav></left-nav>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import LeftNav from '@/components/LeftNav.vue'
@Component({
  components: {
    LeftNav
  }
})
export default class Upload extends Vue {
  mounted(){
    // 正确高亮展示
    // 再确认下逻辑
    // this.handleSelect(this.activeIndex,'')
    switch(window.location.hash){
      case '#/management':{
        window.location.hash = '#/management/forms'
        break
      }
    }
  }
  
}
</script>
<style lang="less">
.management-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .nav-wrapper{
    // border: 3px solid sandybrown;
    background-color: #baccd9;
    position: absolute;
    width: 200px;
    bottom: 0;
    top: 0;
  }
  .content-wrapper {
    // border: 3px solid seagreen;
    position: absolute;
    left: 200px;
    top: 0;
    bottom: 0;
    right: 0px;
    overflow: scroll;
  }
}
</style>