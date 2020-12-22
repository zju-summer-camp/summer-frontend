<template>
  <div class="module basic-info">
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
    <row-item :config="options.certificate_type">
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
  import { options } from '@/const/registration.js'
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
          certificate_type: '',
          certificate_id: '',
          birthday: '',
          polical_status: '',
          correspondence_address: '',
          home_address: '',
          postal_code: '',
          telephone_number: '',
          email: '',
          intentional_college_code: '',
          intentional_college_name: '',
          intentional_major_code: '',
          intentional_major_name: '',
          intentional_study_category: '',
          intentional_tutor_name: '',
          undergraduate_school: '',
          school_type: '',
          department: '',
          major: '',
          enrollment_time: '',
          graduation_time: '',
          thesis: '',
          grade_number: '',
          ranking: '',
          five_semester_ranking: '',
          remarks: '',
          foreign_language_type: '',
          foreign_language_grades: '',
          research_direction: '',
          personal_statement: '',
        },
        nation: nation,
        options: options,
      }
    },
  }
</script>

<style lang="less" scoped>
  .module {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 800px;
    flex-wrap: wrap;
    background-color: #fab1a0;
    border-radius: 4px;
    padding: 24px;
  }
</style>
