<template>
  <!-- 后台管理系统入口，管理员及教师权限 -->
  <div class="management-outside-wrapper">
      <div v-if="!(roles[0] && roles[0].name === Roles.LabLeader.value)" class="role-hint">用户无权限</div>
      <div class="management-wrapper" v-else>
        <div class="nav-wrapper">
          <left-nav></left-nav>
        </div>
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import LeftNav from '@/components/LeftNav.vue'
  import { Roles } from '@/const/Roles.ts'

@Component({
  components: {
    LeftNav
  }
})
export default class Upload extends Vue {
  Roles = Roles

  get roles() {
    return this.$store.state.signinAccount.Roles || []
  }


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
.management-outside-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
  .role-hint{
    margin: 40px;
  }
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
}
</style>