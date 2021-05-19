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
} from '@/const/Form.ts'
import axios from 'axios'
import DqForm from '@/components/DqForm.vue'
import { reset } from '@/utils/form/reset.ts'
import { Apis } from '@/api/index.ts'

@Component({
  components: {
    DqForm
  }
})
export default class AppForm extends Vue {
  name = 'registration-form'
  formConfig = {
    width: '90%',
    labelWidth: '240px',
    items: {
      name: {
        title: '基本信息',
        label: '姓名',
        placeholder: '请输入姓名',
        type: 'input',
        required: true,
        value: '',
        error: '',
        submitkey: 'Name',
        echokey: 'name',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      nickname: {
        label: '昵称',
        placeholder: '请输入昵称',
        type: 'input',
        required: true,
        value: '',
        error: '',
        submitkey: 'NickName',
        echokey:'nick_name',
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
        submitkey: 'Gender',
        echokey:'gender',
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
        submitkey: 'Ethnicity',
        echokey:'ethnicity',
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
        submitkey: 'IDType',
        echokey:'id_type',
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
        label: '身份证号',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        submitkey: 'IDNumber',
        echokey:'id_number',
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
        submitkey: 'PoliticalStatus',
        echokey:'political_status',
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
        submitkey: 'Birthday',
        echokey:'birthday',
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
        value: new ArrayBuffer(8),
        error: '',
        separator: true,
        submitkey: 'Photo',
        echokey:'photo',
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
        submitkey: 'CorrespondAddress',
        echokey:'correspond_address',
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
        submitkey: 'FamilyAddress',
        echokey:'family_address',
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
        submitkey: 'PostalCode',
        echokey:'postal_code',
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
        submitkey: 'TelephoneNumber',
        echokey:'telephone_number',
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
        submitkey: 'Email',
        echokey:'email',
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
        
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        submitkey: 'IntentionalCollegeName',
        echokey:'intentional_college_name',
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
        submitkey: 'StudyDirection',
        echokey:'study_direction',
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
        submitkey: 'IntentionalStudyCategory',
        echokey:'intentional_study_category',
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
        submitkey: 'IntentionalTutorName',
        echokey:'intentional_tutor_name',
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
        submitkey: 'UnderGraduateSchool',
        echokey:'under_graduate_school',
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
        submitkey: 'Major',
        echokey:'major',
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
        submitkey: 'EnrollmentTime',
        echokey:'enrollment_time',
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
        submitkey: 'GraduationTime',
        echokey:'GraduationTime',
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
        submitkey: 'SecondLanguageType',
        echokey:'second_language_type',
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
        submitkey: 'SecondLanguageGrade',
        echokey:'second_language_grade',
      },
      gradeNumber: {
        label: '所学专业的同年级人数',
        placeholder: '请输入',
        type: 'input',
        required: true,
        value: '',
        error: '',
        submitkey: 'GradeNumber',
        echokey:'GradeNumber',
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
        submitkey: 'Ranking',
        echokey:'ranking',
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
        submitkey: 'Thesis',
        echokey:'thesis',
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
        submitkey: 'PersonalIntroduction',
        echokey:'personal_introduction',
        rules: [
          {
            ok: (value: any) => {
              return value? true: false
            },
            msg: '请输入'
          }
        ]
      },
      // researchDirection: {
      //   label: '申请备注',
      //   placeholder: '请输入申请备注',
      //   type: 'textarea',
      //   value: '',
      //   error: '',
      //   submitkey: 'researchDirection',
      //   rules: [
      //   ]
      // },
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
        text: '提交',
        type: 'submit',
        disabled: false,
        func: (data: any)=> {
          axios({
            url: Apis.submitappform,
            data: data,
            method: 'post',
              transformRequest: [
                function (data) {
                  // 将数据转化为 formdata
                  const tmp = new FormData();
                  for (const key in data) {
                      tmp.append(key, data[key])
                  }
                  return tmp
                }
              ],

          }).then((resp)=>{
            console.log(resp)
            if(resp && resp.data && resp.data.Code){
              const code = resp.data.Code
              if(code === 10000){
                alert('提交个人信息成功')
                this.$store.commit('showRegistration', false)
              }
            }
          }).catch((error)=>{
            alert('提交失败，请重试');
             (this as any).$message('未知错误，请重试')
          })
        },
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
    if(this.type === 'drawerForm'){
      this.formConfig.buttons.submit.disabled = true
      this.formConfig.buttons.reset.disabled = true
      this.formConfig.buttons.cancel.disabled = true
    }
  }

  writeDataToItems(data: RegiFormData = {}, formconfig: Items = {}){
    // 将数据写入表单配置中
    for(const key in formconfig){
      const itemConfig = formconfig[key]
      if(itemConfig){
        const echokey = itemConfig.echokey
        if(echokey){
          itemConfig.value = data[echokey]
        }else{
          itemConfig.value = data[key]
        }
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