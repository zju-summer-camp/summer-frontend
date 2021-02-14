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
  name = 'ss'
}
</script>
<style lang="less">
.management-wrapper {
  position: relative;
  margin-left: 60px;

  .nav-wrapper{
    position: absolute;
    left: -60px;
    top: 20px;
  }
}
</style>