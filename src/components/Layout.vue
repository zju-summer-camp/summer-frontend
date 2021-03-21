<template>
  <div class="layout-wrapper">
    <nav-menu></nav-menu>
    <router-view class="view-wrapper"/>
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
    height: 100%;
  width: 100%;
.view-wrapper {
  height: 100%;
  width: 100%;
}
}

</style>