<template>
  <div class="upload-wrapper">
<el-upload
  class="upload-demo"
  action="#"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture"
  :auto-upload="false"
  :limit="1">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import {get} from 'lodash'

@Component({
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


  fileList = [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]



  handleRemove(file: any, fileList: any) {
    console.log(file, fileList);
  }
  handlePreview(file: any) {
    console.log(file);
  }
    
  

}
</script>
<style lang="less">
.upload-wrapper {
  height: 160px;
  padding-left: 10px;
}
</style>