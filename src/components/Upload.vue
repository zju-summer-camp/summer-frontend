<template>
  <div class="upload-wrapper">
    <input type="file" name="uploadphoto"  id="uploadphoto" accept="image/*" @change="getFile" class="upload">
    <div class="display-wrapper" v-if="file && file.name">
      <img
        class="image"
        :src="file && file.url" alt="??"
        width="100px"
        height="100px"
      >
      <span class="text">{{file && file.name}}</span>
    </div>
    <div class="waiting-wrapper" v-else>
      <i class="el-icon-plus center"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

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

  file: any = {}
    
  getFile() {
    const uploadphoto = document.getElementById("uploadphoto")
    if(uploadphoto && uploadphoto.files[0]){
      this.file = uploadphoto.files[0]
      this.itemConfig.value = this.file
      this.file.url = URL.createObjectURL(this.file)
    }
  }
  

}
</script>
<style lang="less">
.upload-wrapper {
  height: 130px;
  position: relative;
  .upload {
    width: 130px;
    height: 130px;
    position: absolute;
    border:2px solid saddlebrown;
    opacity: 0;
  }
  .display-wrapper {
    padding-left: 10px;

    .image {

    }
    .text {
      font-size: 14px;
      display: block;
      padding-top: 8px;
    }
  }
  .waiting-wrapper {
    margin: 5px;
    width: 120px;
    height: 120px;
    border: 1px grey dashed;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    .center {
     line-height: 120px;
    }
  }


  
}
</style>