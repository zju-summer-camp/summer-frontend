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
      <registration-form :type="type"></registration-form>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import RegistrationForm from '@/components/RegistrationForm.vue'


@Component({
  components: {
    RegistrationForm
  }
})
export default class Registration extends Vue {
  name = 'Registration'
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
    this.$store.commit('reviseType', 'getForm')
    this.$store.commit('showRegistration', true)
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
        padding: 50px;
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
          height: 130px;
          border-bottom: 1px solid #dcdfe6;
          border-radius: 8px;
          margin: 40px;
          text-align: middle;
          line-height: 130px;
          color: #fff;
          font-family: 'dq-font';
          font-size: 26px;
          font-weight: 600;
          letter-spacing: 0.2em;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 3px #fff;
          }
        }
      }
    }

}
</style>