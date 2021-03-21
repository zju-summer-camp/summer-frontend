<template>
  <!-- 学生报名表组件 -->
  <div class="registration-form-wrapper">
    <div class="form-wrapper">
      <dq-form :formConfig="formConfig"></dq-form>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  nation,
  certificateType,
  policalStatus,
} from '@/const/registration.ts'
import axios from 'axios'
import DqForm from '@/components/DqForm.vue'


@Component({
  components: {
    DqForm
  }
})
export default class RegistrationForm extends Vue {
  name = 'registration-form'
  formConfig = {
    width: '100%',
    items: {
      name: {
        label: '姓名',
        placeholder: '请输入姓名',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      gender: {
        label: '性别',
        placeholder: '请输入',
        type: 'radio',
        required: true,
        value: '',
        error: '',
        options: [
          {
            name: '男',
            value: 1
          },
          {
            name: '女',
            value: 2
          }
        ],
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      nation: {
        label: '民族',
        placeholder: '请输入',
        type: 'select',
        options: nation,
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      certificateType: {
        label: '身份证件类型',
        placeholder: '请输入',
        type: 'select',
        options: certificateType,
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      certificateId: {
        label: '证件号码',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      birthday: {
        label: '出生日期',
        placeholder: '请输入',
        type: 'component',
        component: ()=> import('@/components/DateSelect.vue'),
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      policalStatus: {
        label: '用户昵称',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      correspondenceAddress: {
        label: '通讯地址',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      homeAddress: {
        label: '家庭地址',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      postalCode: {
        label: '邮政编码',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      telephoneNumber: {
        label: '电话号码',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      email: {
        label: '电子邮箱',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      intentionalCollegeCode: {
        label: '意向学院代码',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      intentionalCollegeName: {
        label: '意向学院名称',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      intentionalMajorCode: {
        label: '意向专业代码',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      intentionalMajorName: {
        label: '意向专业名称',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      intentionalStudyCategory: {
        label: '意向攻读类型',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      intentionalTutorName: {
        label: '意向导师姓名',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      undergraduateSchool: {
        hint: '请输入本科毕业院校全称',
        label: '毕业院校',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      schoolType: {
        hint: '是985 211之类的吗，还是综合性大学、文理学院balabala',
        label: '学校类型',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      department: {
        label: '本科院系',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      major: {
        label: '本科专业',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      enrollmentTime: {
        label: '入学时间',
        placeholder: '请输入',
        type: 'component',
        component: ()=> import('@/components/DateSelect.vue'),
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      graduationTime: {
        label: '毕业时间',
        placeholder: '请输入',
        type: 'component',
        component: ()=> import('@/components/DateSelect.vue'),
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      thesis: {
        label: '论文情况',
        placeholder: '请输入',
        type: 'textarea',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      gradeNumber: {
        label: '同年级人数',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      ranking: {
        label: '预计专业排名',
        placeholder: '请输入',
        type: 'input',
        value: '',
        error: '',
        rules: [

        ]
      },
      fiveSemesterRanking: {
        label: '前五学期排名',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
        ]
      },
      remarks: {
        label: '这是什么',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
        ]
      },
      foreignLanguageType: {
        hint: '请填写主要掌握的一门外语类型',
        label: '外语类型',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        rules: [
        ]
      },
      foreignLanguageGrades: {
        hint: '与填写得外语类型对应的外语成绩',
        label: '外语成绩',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
      },
      researchDirection: {
        label: '研究方向',
        placeholder: '请输入',
        type: 'textarea',
        required: true,
        value: '',
        error: '',
        rules: [
        ]
      },
      personalStatement: {
        label: '个人陈述',
        placeholder: '请输入',
        type: 'textarea',
        rows: 7,
        maxlength: 1000,
        required: true,
        value: '',
        error: '',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
    },
    buttons: {
      reset: {
        name: 'reset',
        type: 'reset',
        text: '重置',
      },
      submit: {
        name: 'submit',
        text: '申请',
        type: 'submit',
        url: '/registration',
        success: (resp: any)=>{
          if(resp.data && resp.data.code === 10011){
            // 登录成功
            (this as any).$message('申请信息已提交')
            this.$store.commit('showRegister', false)
          }
         
        },
        fail: (error: any) => {
          (this as any).$message('未知错误，请重试')
          console.log('login fail', error)
        }
      },
      cancel: {
        name: 'cancel',
        type:  'function',
        text: '返回',
        func: ()=>{
          this.$store.commit('showRegistration', false)
        }
      }
    }
  }

  
  @Prop({
    type: String,
    default: ''
  }) type !: string

  mounted() {
    if(this.type === 'getForm'){
      this.formConfig.buttons.submit.text = '更新'
      this.getRegistrationData()
    }
  }
  getRegistrationData() {
    axios({
      url: '/getRegistrationData',
      data: {
        accountId: ''
      }
    }).then(resp => {
      console.log(resp)
      this.writeDataToItems(resp.data, this.formConfig.items)
    })
  }

  writeDataToItems(data: RegiFormData = {}, items: Items = {}){
    for(const key in data){
      const item = items[key]
      if(item){
        item.value = data[key]
      }
    }
  }
}
</script>

<style lang="less">
.registration-form-wrapper {
  width: 70%;
  margin: 30px auto;
  padding: 10px;
  text-align: left;
  .form-wrapper {
    padding: 10px;
  }
  .el-select {
    width: 100%;
  }
}
</style>