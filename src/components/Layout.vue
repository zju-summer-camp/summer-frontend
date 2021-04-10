<template>
  <div class="layout-wrapper">
    <div class="nav-menu-wrapper">
      <nav-menu></nav-menu>
    </div>
    <div class="view-wrapper">
       <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    NavMenu
  }
})
export default class Layout extends Vue {
}
</script>
<style lang="less">
.layout-wrapper{
  width: 100%;
  height: 100%;
  position: relative;
  .view-wrapper {
    position: absolute;
    top: 70px;
    bottom: 0px;
    left:0;
    right: 0;
    overflow: scroll;
  }
  .nav-menu-wrapper {
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    z-index: 100;
    background-color: white;
  }
}

</style>