<template>
  <div class="home-wrapper">
    <div class="video-wrapper">
      <!-- <video src="../../assets/yourname.mp4" controls="controls" width="90%" poster="../../assets/zju.jpg"></video> -->
      video
      <dq-form :formConfig="formConfig"></dq-form>
  

    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DqForm from '@/components/DqForm.vue'
@Component({
  components: {
    DqForm
  }
})
export default class Home extends Vue {
  name = 'ss'
  formConfig = {
    width: 600,
    items: {
      phoneNumber: {
        hint: '测试hint',
        label: '电话号码',
        required: true,
        name: 'dandan',
        placeholder: '请输入境内电话号码',
        type: 'input',
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入电话号码'
          }
        ]
      },
      name: {
        label: '你的名字',
        required: false,
        name: 'dandan',
        type: 'slot',
        placeholder: '请输入名字',
        value: ''
      },
      password: {
        label: '密码',
        required: false,
        name: 'dandan',
        type: 'password',
        placeholder: '请输入密码',
        value: '',
        error: '看看样式'
      }
    }
  }
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