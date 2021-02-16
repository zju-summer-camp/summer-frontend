<template>
  <!-- 后台管理系统入口，管理员及教师权限 -->
  <div class="management-wrapper">
    <div class="nav-wrapper">
      <left-nav></left-nav>
    </div>
    <router-view></router-view>
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
  margin-left: 60px;
  padding: 10px;

  .nav-wrapper{
    position: absolute;
    left: -60px;
    top: 20px;
  }
}
</style>