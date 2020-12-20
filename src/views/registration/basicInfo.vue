<template>
  <div class="basic-info">
    <div>
      <span>姓名</span>
      <a-input :value="studentInfo.name" placeholder="请输入学生姓名" />
    </div>
    <div>
      <span>性别</span>
      <a-radio-group name="radioGroup" :value="studentInfo.gender">
        <a-radio value="1">男</a-radio>
        <a-radio value="2">女</a-radio>
      </a-radio-group>
    </div>
    <div>
      <span>民族</span>
      <a-select :value="studentInfo.nation" style="width: 120px">
        <a-select-option v-for="nat in nation" :key="nat.id" :value="nat.id">
          {{ nat.name }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
  import { nation } from '@/const/nation.js'
  export default {
    name: 'basicInfo',
    data() {
      return {
        studentInfo: {
          name: 'sdq',
          gender: 1,
          nation: '汉族',
        },
        nation: nation,
      }
    },
  }
</script>
