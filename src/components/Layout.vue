<template>
  <div class="layout-wrapper">
    <nav-menu></nav-menu>
    <router-view/>
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
  hhh = 2
}
</script>