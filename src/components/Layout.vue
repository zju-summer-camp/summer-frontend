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
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
  .view-wrapper {
    position: absolute;
    top: 63px;
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
    background-color: white;
        height: 62px;
  }
}

</style>