<template>
  <!-- 学生报名表组件 -->
  <div class="registration-form-wrapper">
    <div class="form-wrapper">
      <div class="title">
        浙江大学 {{new Date().getFullYear()}}年夏令营申请表
      </div>
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
import { reset } from '@/utils/form/reset.ts'


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
        title: '基本信息',
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
      // certificateType: {
      //   label: '身份证件类型',
      //   placeholder: '请输入',
      //   type: 'select',
      //   options: certificateType,
      //   required: true,
      //   value: '',
      //   error: '',
      //   rules: [
      //     {
      //       ok: (value: any) => {
      //         return value? true: false
      //       },
      //       msg: '请输入'
      //     }
      //   ]
      // },
      certificateId: {
        label: '身份证号',
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
      policalStatus: {
        label: '政治面貌',
        placeholder: '请输入',
        type: 'select',
        required: true,
        options: policalStatus,
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
      photo: {
        label: '个人照片',
        hint: '上传清晰的个人免冠正面照',
        type: 'component',
        component: ()=> import('@/components/Upload.vue'),
        required: true,
        value: '',
        error: '',
        separator: true,
        rules: []
      },
      correspondenceAddress: {
        label: '通讯地址',
        title: '联系方式',
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
        separator: true,
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
        label: '意向学院',
        title:'申请项目',
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
        label: '意向专业',
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
        separator: true,
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
        hint: '请输入本科学校及院系',
        label: '本科学校及院系',
        placeholder: '请输入本科学校及院系',
        type: 'input',
        title: '本科成绩',
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
      gradeNumber: {
        label: '所学专业的同年级人数',
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
        required: true,
        value: '',
        error: '',
        rules: [],
        separator: true
      }, 
      thesis: {
        label: '发表论文及其他研究成果情况',
        placeholder: '请输入',
        title: '研究成果',
        type: 'textarea',
        required: true,
        rows: 10,
        maxlength: 1000,
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
      personalStatement: {
        label: '限制1000字以内',
        placeholder: '请输入申请人个人陈述',
        type: 'textarea',
        rows: 20,
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
      researchDirection: {
        label: '申请备注',
        placeholder: '请输入申请备注',
        type: 'textarea',
        value: '',
        error: '',
        rules: [
        ]
      },
    },
    buttons: {
      reset: {
        name: 'reset',
        type: 'reset',
        text: '重置',
        disabled: false,
      },
      submit: {
        name: 'submit',
        text: '申请',
        type: 'submit',
        url: '/registration',
        disabled: false,
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
        disabled: false,
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

  @Prop({
    type: Object,
    default: null
  }) queryItems !: object

  mounted() {
    if(this.queryItems){
      this.writeDataToItems(this.queryItems, this.formConfig.items)
    }
    if(this.type === 'newForm'){
      reset(this.formConfig.items)
    }
    if(this.type === 'getForm'){
      this.formConfig.buttons.submit.disabled = true
      this.formConfig.buttons.reset.disabled = true
    }
  }
  // getRegistrationData() {
  //   axios({
  //     url: '/getRegistrationData',
  //     data: {
  //       accountId: ''
  //     }
  //   }).then(resp => {
  //     console.log(resp)
  //     this.writeDataToItems(resp.data, this.formConfig.items)
  //   })
  // }

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
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow:   0 0 3px #dcfde6; 
  .form-wrapper {
    padding: 10px;
    
    .title {
      margin-bottom: 30px;
      font-size: 24px;
      line-height: 80px;
      text-align: center;
      font-weight: 600;
      border-bottom: #dcdfe6 solid 1px;
      
    }
  }
  .el-select {
    width: 100%;
  }
}
</style>