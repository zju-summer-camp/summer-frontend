<template>
  <div class="registration-wrapper">
    <div class="background-wrapper" v-if="!showRegistrationForm">
      <div class="text">
        欢迎报考浙江大学
      </div>
      
      <div class="buttons-wrapper"  >
        <div class="entrance" @click="queryForm">查询报名表</div>
        <div class="entrance" @click="signUp">开始报名</div>
      </div>
    </div>

    <div class="form-wrapper" v-if="showRegistrationForm">
      <registration-form :type="type" :queryItems="queryItems"></registration-form>
    </div>

    <el-dialog
      title="查询报名表"
      :visible.sync="showQueryModal"
      width="30%">
      <span>hint：身份证号码： 1111</span>
      <dq-form :formConfig="formConfig"></dq-form>
    </el-dialog>

  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import RegistrationForm from '@/components/RegistrationForm.vue'
import DqForm from '@/components/DqForm.vue'
import axios from 'axios'
import { Message } from 'element-ui';


@Component({
  components: {
    RegistrationForm,
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
        submitkey: 'accountId',
        error: '',
        rules: [
        ]
      },
    },
    buttons: {
      cancel: {
        name: 'cancel',
        type:  'function',
        text: '取消',
        func: ()=>{
          this.$store.commit('showQuery', false)
        }
      },
      submit: {
        name: 'submit',
        text: '查询',
        type: 'submit',
        url: '/getRegistrationData',
        success: (resp: any)=>{
          if(resp.data.code===302){
            // 粗糙地模拟一下失败的情况
            Message('您输入的信息有误，请重试')
          }else{
            Object.keys(resp.data).forEach((key)=>{
              this.queryItems[key] = resp.data[key]
            })
            console.log('in querItems', resp.data)
            // 获取账户信息成功
            this.$store.commit('showQuery', false)
            this.$store.commit('reviseType', 'getForm')
            this.$store.commit('showRegistration', true)
          }


        },
        fail: (error: any) => {
          (this as any).$message('未知错误，请重试')
          console.log('login fail', error)
        }
      }
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
    height: 80%;
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
          background-color: rgba(20, 74, 116, 0.8);
          width: 200px;
          height: 80px;
          border: 1px solid #dcdfe6;
          border-radius: 8px;
          margin: 40px;
          text-align: middle;
          line-height: 80px;
          color: #fff;
          font-family: 'dq-font';
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 0.1em;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 4px #fff;
          }
        }
      }
    }

}
</style>