<template>
  <div class="basic-info">
    <row-item :config="options.name">
      <a-input :value="studentInfo.name" placeholder="请输入学生姓名" />
    </row-item>
    <row-item :config="options.gender">
      <a-radio-group name="radioGroup" :value="studentInfo.gender">
        <a-radio value="1">男</a-radio>
        <a-radio value="2">女</a-radio>
      </a-radio-group>
    </row-item>
    <row-item :config="options.nation">
      <a-select :value="studentInfo.nation" style="width: 120px">
        <a-select-option v-for="nat in nation" :key="nat.id" :value="nat.id">
          {{ nat.name }}
        </a-select-option>
      </a-select>
    </row-item>
  </div>
</template>

<script>
  import { nation } from '@/const/nation.js'
  import rowItem from '@/views/components/row-item/row-item.vue'

  export default {
    name: 'basic-info',
    components: {
      'row-item': rowItem,
    },
    data() {
      return {
        studentInfo: {
          name: 'sdq',
          gender: 1,
          nation: '汉族',
        },
        nation: nation,
        options: {
          name: {
            label: '姓名',
            required: true,
            hint: '请填写姓名',
          },
          gender: {
            label: '性别',
            required: true,
            hint: '请填写性别',
          },
          nation: {
            label: '民族',
            required: true,
          },
        },
      }
    },
  }
</script>
