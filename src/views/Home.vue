<template>
  <div class="home-wrapper">
    <div class="video-wrapper">
      <!-- <video src="../../assets/yourname.mp4" controls="controls" width="90%" poster="../../assets/zju.jpg"></video> -->
      video
      <form-item></form-item>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import FormItem from '@/components/FormItem.vue'
@Component({
  components: {
    FormItem
  }
})
export default class Home extends Vue {
  name = 'ss'
}
</script>
<style lang="less">
.home-wrapper {
  .video-wrapper {
    margin: 50px auto;
    width: 100%;
  }
}
</style>