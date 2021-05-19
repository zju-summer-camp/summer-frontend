<template>
  <div class="registration-wrapper">
    <div class="background-wrapper" v-if="!showRegistrationForm">
      <div class="text">
        欢迎报考浙江大学
      </div>
      
      <div class="buttons-wrapper"  >
        <div class="entrance" @click="queryForm">查询信息</div>
        <div class="entrance" @click="signUp">提交信息</div>
      </div>
    </div>

    <div class="form-wrapper" v-if="showRegistrationForm">
      <app-form :type="type" :queryItems="queryItems"></app-form>
    </div>

    <el-dialog
      title="查询信息"
      :visible.sync="showQueryModal"
      width="40%">
      <dq-form :formConfig="formConfig"></dq-form>
    </el-dialog>

  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import AppForm from '@/components/FormContent.vue'
import DqForm from '@/components/DqForm.vue'
import axios from 'axios'
import { Message } from 'element-ui';
import { Apis } from '@/api/index.ts'


@Component({
  components: {
    AppForm,
    DqForm
  }
})
export default class Registration extends Vue {
  name = 'Registration'
  get showQueryModal() {
    return this.$store.state.showQueryModal
  }

  set showQueryModal(value){
    this.$store.commit('showQuery', value)
  }

  queryItems: any = {}
  formConfig = {
    width: '100%',
    items: {
      phoneNumber: {
        hint: '请输入与报名表关联的身份证号码',
        label: '身份证号码',
        placeholder: '请输入身份证号码',
        type: 'input',
        value: '',
        required: true,
        submitkey: 'IDNumber',
        error: '',
        rules: [
        ]
      },
    },
    buttons: {
      submit: {
        name: 'submit',
        text: '查询',
        type: 'submit',
        func: (data: any)=> {
          axios.get( Apis.queryappform , {
            params: data
          }).then((resp)=>{
            if(resp.data.code===302){
              Message('您输入的信息有误，请重试')
            }else{
              const data = resp.data && resp.data.Data
              Object.keys(data).forEach((key)=>{
                this.queryItems[key] = data[key]
              })

              // 获取报名表信息成功
              this.$store.commit('showQuery', false)
              this.$store.commit('reviseType', 'getForm')
              this.$store.commit('showRegistration', true)
            }
          }).catch((error)=>{
            (this as any).$message('未知错误，请重试')
          })
        }
      },
      cancel: {
        name: 'cancel',
        type:  'function',
        text: '取消',
        func: ()=>{
          this.$store.commit('showQuery', false)
        }
      },
    }

  }

  get type() {
    return this.$store.state.registrationFormType
  }
  // type 为 getForm（获取已填写的报名表） 和 newForm（创建新的报名表）
  get showRegistrationForm() {
    return this.$store.state.showRegistrationForm
  }
  set showRegistrationForm(value) {
    this.$store.commit('showRegistration', value)
  }

  queryForm() {
    this.showQueryModal = true
    
  }
  signUp() {
    this.$store.commit('reviseType', 'newForm')
    this.$store.commit('showRegistration', true)
  }

  mounted() {
    this.$store.commit('showRegistration', false)
  }
  
  beforeDestroy() {
    this.$store.commit('showRegistration', false)
  }

  destroyed() {
    this.$store.commit('showRegistration', false)
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'dq-font';
  src: url(../assets/FangZhenSongTi.ttf);
}
.registration-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .background-wrapper {
      height: 100%;
      width: 100%;

      &::after {
        content: '';
        background-image: url(../assets/qiushidajiangtang.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.7;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }
      // background-image: url(../assets/qiushidajiangtang.jpg);
      // background-repeat: no-repeat;
      // background-size: cover;
      .text {
        font-size: 30px;
        color: #fff;
        padding: 65px 0 45px 0;
        font-family: 'dq-font';
        letter-spacing: 0.2em;
      }
      .buttons-wrapper {
        // position: absolute;
        // top: 30%;
        // left: 50%;
        // transform: translateX(-50%);
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgba(20, 74, 116, 0.3);
        width: 40%;
        margin: auto;
        border-radius: 4px;
        .entrance {
          background-color: rgba(20, 74, 116, 1);
          width: 200px;
          height: 70px;
          border-radius: 8px;
          margin: 40px;
          text-align: middle;
          line-height: 70px;
          color: #fff;
          font-family: 'dq-font';
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.1em;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 4px #fff;
            background-color: rgba(20, 74, 116, 0.8);
          }
        }
      }
    }

}
</style>