<template>
  <!-- 上传资讯，管理员及教师权限 -->
  <div class="upload-wrapper">
    <div class="form-wrapper">
        <dq-form :formConfig="formConfig"></dq-form>
    </div>
    <div class="editor-wrapper">
      <editor :init="initConfig"></editor>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Editor from '@/components/Editors/index.ts'
import DqForm from '@/components/DqForm.vue'

@Component({
  components: {
    Editor,
    DqForm
  }
})
export default class Upload extends Vue {
    formConfig = {
    width: '70%',
    items: {
      phoneNumber: {
        hint: '请输入境内电话号码',
        label: '电话号码',
        placeholder: '请输入电话号码',
        type: 'input',
        value: '',
        submitkey: 'phoneNumber',
        error: '',
        required: true,
        rules: [
          {
            ok: (value: any) => {
              const reg = /^1[0-9]{10}$/
              console.log(reg.test(value))
              return reg.test(value) ? true: false
            },
            msg: '请输入格式正确的手机号'
          }
        ]
      },
      name: {
        label: '用户昵称',
        placeholder: '请输入用户昵称',
        required: true,
        type: 'input',
        value: '',
        error: '',
        rules: [
        ]
      },
      password1: {
        label: '密码',
        required: true,
        name: 'dandan',
        type: 'password',
        placeholder: '请输入密码',
        value: '',
        error: '',
        rules: [
        ]
      },
      password2: {
        label: '确认密码',
        required: true,
        name: 'dandan',
        type: 'password',
        placeholder: '请重复密码',
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any, formConfig: FormConf) => {
              return value === formConfig.items.password1.value ? true : false
            },
            msg: '两次密码不一致'
          }
        ]
      }
    },
    buttons: {
      submit: {
        name: 'submit',
        text: '注册',
        type: 'submit',
        url: '/register',
        success: (resp: any)=>{
          if(resp.data && resp.data.code === 10011){
            // 登录成功
            this.dontShowRegister();
            (this as any).$message('注册成功')
            this.$store.commit('showRegister', false)
          }
         
        },
        fail: (error: any) => {
          (this as any).$message('未知错误，请重试')
          console.log('login fail', error)
        }
      },
      reset: {
        name: 'reset',
        type: 'reset',
        text: '重置',
      },
      cancel: {
        name: 'cancel',
        type:  'function',
        text: '取消',
        func: ()=>{
          this.$store.commit('showRegister', false)
        }
      }
    }
  }

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
.upload-wrapper {
  border: 1px solid seagreen;
  height: 100%;
  width: 100%;
}
</style>