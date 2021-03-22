<template>
  <div class="registration-wrapper">
    <div class="buttons-wrapper"  v-if="!showRegistrationForm">
      <div class="entrance" @click="queryForm">查询报名表</div>
      <div class="entrance" @click="signUp">开始报名</div>
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
.registration-wrapper {
    position: relative;
    height: 80%;
    width: 100%;
  .buttons-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    .entrance {
      width: 200px;
      height: 160px;
      border: 1px solid #2486b9;
      border-radius: 4px;
      margin: 10px;
      text-align: middle;
      line-height: 160px;
      color: #2486b9;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.2em;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 3px #2486b9;
      }
    }
  }
}
</style>