<template>
  <!-- 上传资讯，管理员及教师权限 -->
  <div class="upload-wrapper">
    <div class="form-wrapper">
        <dq-form :formConfig="formConfig"></dq-form>
    </div>

  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import DqForm from '@/components/DqForm.vue'
import InfoEditor from '@/components/InfoEditor.vue'
import axios from 'axios'
import { getEncodedContent } from '@/components/Editors/getEncodeData.ts'
import { Apis } from '@/api/index.ts'

@Component({
  components: {
    DqForm,
    InfoEditor
  }
})
export default class Upload extends Vue {
    formConfig = {
    width: '80%',
    items: {
      projectName: {
        hint: '请输入项目名称',
        label: '项目名称',
        placeholder: '请输入项目名称',
        type: 'input',
        value: '',
        submitkey: 'Name',
        error: '',
        required: true,
        rules: [
        ]
      },
      deadline: {
        label: '截止日期',
        placeholder: '请输入',
        type: 'component',
        component: ()=> import('@/components/DateSelect.vue'),
        required: true,
        value: '',
        error: '',
        submitkey: 'Deadline',
        rules: [
        ]
      },
      tutor : {
        label: '导师团队',
        placeholder: '请输入导师团队（可能需要改成选项）',
        required: true,
        type: 'input',
        value: '',
        error: '',
        submitkey: 'Team',
        rules: [
        ]
      },
      academy : {
        label: '所属学院',
        placeholder: '请输入所属学院',
        required: true,
        type: 'input',
        value: '',
        error: '',
        submitkey: 'Academy',
        rules: [
        ]
      },
      content: {
        label: '内容详情',
        placeholder: '请输入',
        type: 'component',
        component: ()=> import('@/components/InfoEditor.vue'),
        required: true,
        ref:'infoEditor',
        value: '',
        submitkey: 'Detail',
        error: '',
        rules: [
        ]
      }
    },
    buttons: {
      submit: {
        name: 'submit',
        text: '上传',
        type: 'submit',
        func: (data: any)=> {
          // 对内容进行 base64 编码
          data.Detail = getEncodedContent(data.Detail)
          console.log('data.content',data.Deatil)
          console.log('data encoded', getEncodedContent(data.Detail))
          axios({
            url: Apis.createproject,
            data: data,
            method: 'post'
          }).then((resp)=>{
            if(resp.data && resp.data.code === 10011){
              // 登录成功
              (this as any).$message('上传成功')
              alert('上传成功，请在“资讯管理”中发布')
            }
          }).catch((error)=>{
            (this as any).$message('未知错误，请重试')
            console.log('upload fail', error)
            alert('上传失败，请重试')
          })
        },
      },
      reset: {
        name: 'reset',
        type: 'reset',
        text: '重置',
      }
    }
  }


}
</script>
<style lang="less">
.upload-wrapper {
  height: 100%;
  width: 100%;
  .form-wrapper {
    margin: 40px auto;
  }
 
}
</style>