<template>
  <div class="editor-wrapper">
    <editor :init="initConfig" :itemConfig="itemConfig" :formConfig="formConfig"></editor>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import Editor from '@/components/Editors/index.ts'

@Component({
  components: {
    Editor
  }
})
export default class Upload extends Vue {
  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  }) itemConfig !: ItemConf

  @Prop({
    type: Object,
    default: () => {
      return {}
    }
  }) formConfig !: FormConf
  initConfig = {
    language:'zh_CN',
    plugins: 'print preview searchreplace autolink directionality visualchars fullscreen image link media template code table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern paste emoticons',
    toolbar: 'code forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright indent2em lineheight | \
    bullist numlist | blockquote subscript superscript removeformat | \
    table image media bdmap emoticons charmap hr pagebreak insertdatetime | fullscreen ',
    height: '500px',
    resize: true
  }
}
</script>
<style lang="less">
.editor-wrapper {
}
</style>