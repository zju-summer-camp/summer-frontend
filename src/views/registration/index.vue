<template>
  <div class="registration-wrapper">
    <div class="form-wrapper">
      <el-form :model="studentInfo" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

        <el-form-item label="姓名" prop="name">
          <el-input v-model="studentInfo.name"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="studentInfo.gender">
            <el-radio label="女"></el-radio>
            <el-radio label="男"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="民族" prop="nation">
          <el-select v-model="studentInfo.nation" placeholder="请选择民族">
            <el-option
              v-for="nat in nation"
              :value="nat.id"
              :label="nat.name"
              :key="nat.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="身份证件类型" prop="certificateType">
          <el-select v-model="studentInfo.certificateType" placeholder="请选择身份证件类型">
            <el-option
              v-for="nat in certificateType"
              :value="nat.id"
              :label="nat.name"
              :key="nat.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="证件号码" prop="certificateId">
          <el-input v-model="studentInfo.certificateId"></el-input>
        </el-form-item>

        <el-form-item label="出生日期" required prop="birthday">
          <el-date-picker type="date" placeholder="选择日期" :default-value="new Date('2000-01-01')" v-model="studentInfo.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-divider></el-divider>

        <el-form-item label="通讯地址" prop="correspondenceAddress">
          <el-input v-model="studentInfo.correspondenceAddress"></el-input>
        </el-form-item>

        <el-form-item label="家庭住址" prop="homeAddress">
          <el-input v-model="studentInfo.homeAddress"></el-input>
        </el-form-item>

        <el-form-item label="邮政编码" prop="postalCode">
          <el-input v-model="studentInfo.postalCode"></el-input>
        </el-form-item>

        <el-form-item label="电话号码" prop="telephoneNumber">
          <el-input v-model="studentInfo.telephoneNumber"></el-input>
        </el-form-item>

        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="studentInfo.email"></el-input>
        </el-form-item>

        <el-divider></el-divider>

        <el-form-item label="意向学院代码" prop="intentionalCollegeCode">
          <el-input v-model="studentInfo.intentionalCollegeCode"></el-input>
        </el-form-item>

        <el-form-item label="意向学院名称" prop="intentionalCollegeName">
          <el-input v-model="studentInfo.intentionalCollegeName"></el-input>
        </el-form-item>

        <el-form-item label="意向专业代码" prop="intentionalMajorCode">
          <el-input v-model="studentInfo.intentionalMajorCode"></el-input>
        </el-form-item>

        <el-form-item label="意向专业名称" prop="intentionalMajorName">
          <el-input v-model="studentInfo.intentionalMajorName"></el-input>
        </el-form-item>

        <el-form-item label="意向攻读类型" prop="intentionalStudyCategory">
          <el-input v-model="studentInfo.intentionalStudyCategory"></el-input>
        </el-form-item>

        <el-form-item label="意向导师姓名" prop="intentionalTutorName">
          <el-input v-model="studentInfo.intentionalTutorName"></el-input>
        </el-form-item>

        <el-divider></el-divider>

        <el-form-item label="本科院校" prop="undergraduateSchool">
          <el-input v-model="studentInfo.undergraduateSchool"></el-input>
        </el-form-item>
        <el-form-item label="学校类型" prop="schoolType">
          <el-input v-model="studentInfo.schoolType"></el-input>
        </el-form-item>
        <el-form-item label="本科院系" prop="department">
          <el-input v-model="studentInfo.department"></el-input>
        </el-form-item>
        <el-form-item label="本科专业" prop="major">
          <el-input v-model="studentInfo.major"></el-input>
        </el-form-item>

        <el-form-item label="入学日期" required prop="enrollmentTime">
          <el-date-picker type="date" placeholder="选择日期" :default-value="new Date('2020-01-01')" v-model="studentInfo.enrollmentTime" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item label="预计毕业时间" required prop="graduationTime">
          <el-date-picker type="date" placeholder="选择日期" :default-value="new Date('2020-01-01')" v-model="studentInfo.graduationTime" style="width: 100%;"></el-date-picker>
        </el-form-item>


        <el-form-item label="同年级人数" prop="gradeNumber">
          <el-input v-model="studentInfo.gradeNumber"></el-input>
        </el-form-item>
        <el-form-item label="预计专业排名" prop="ranking">
          <el-input v-model="studentInfo.ranking"></el-input>
        </el-form-item>
        <el-form-item label="前五学期排名" prop="fiveSemesterRanking">
          <el-input v-model="studentInfo.fiveSemesterRanking"></el-input>
        </el-form-item>

        <el-form-item label="外语类型" prop="foreignLanguageType">
          <el-input v-model="studentInfo.foreignLanguageType"></el-input>
        </el-form-item>
        <el-form-item label="外语成绩" prop="foreignLanguageGrades">
          <el-input v-model="studentInfo.foreignLanguageGrades"></el-input>
        </el-form-item>
        <el-form-item label="前五学期排名" prop="major">
          <el-input v-model="studentInfo.major"></el-input>
        </el-form-item>

        <el-form-item label="论文情况" prop="thesis">
          <el-input type="textarea" v-model="studentInfo.thesis"></el-input>
        </el-form-item>

        <el-form-item label="研究方向" prop="researchDirection">
          <el-input type="textarea" v-model="studentInfo.researchDirection"></el-input>
        </el-form-item>

        <el-form-item label="个人陈述" prop="personalStatement">
          <el-input type="textarea" v-model="studentInfo.personalStatement"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import {
  nation,
  certificateType,
  policalStatus,
} from '@/const/registration.ts'

@Component({

})
export default class Registration extends Vue {
  name = 'sdsdsd'
  nation = nation
  certificateType = certificateType
  policalStatus = policalStatus
  ruleForm = {
    name: '',
    gender: '',
    nation: '',
    certificateType: '',
    certificateId: '',
    birthday: '',
    correspondenceAddress: '',
    homeAddress: '',
    postalCode: '',
    telephoneNumber: '',
    email: '',
    intentionalCollegeCode: '',
    intentionalCollegeName: '',
    intentionalMajorCode: '',
    intentionalMajorName: '',
    intentionalStudyCategory: '',
    intentionalTutorName: '',
    undergraduateSchool: '',
    schoolType: '',
    department: '',
    major: '',
    enrollmentTime: '',
    graduationTime: '',
    gradeNumber: '',
    ranking: '',
    fiveSemesterRanking: '',
    foreignLanguageType: '',
    foreignLanguageGrades: '',
    personalStatement: '',
    researchDirection: '',
    thesis: ''
  }
  rules = {
    name: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 1 到 10 个字符', trigger: 'blur' }
    ],
    gender: [
      { required: true, message: '请选择性别', trigger: 'change' }
    ],
    nation: [
      { required: true, message: '请选择民族', trigger: 'change' }
    ],
    certificateType: [
      { required: true, message: '请选择身份证件类型', trigger: 'change' }
    ],
    certificateId: [
      { required: true, message: '请输入证件号码', trigger: 'blur' },
    ],
    birthday: [
      { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
    ],
    correspondenceAddress: [
      { required: true, message: '请输入通讯地址', trigger: 'blur' }
    ],
    homeAddress: [
      { required: true, message: '请输入家庭地址', trigger: 'blur' }
    ],
    postalCode: [
      { required: true, message: '请输入邮政编码', trigger: 'blur' }
    ],
    telephoneNumber: [
      { required: true, message: '请输入电话号码', trigger: 'blur' }
    ],
    email: [
      { required: true, message: '请输入电话号码', trigger: 'blur' }
    ],
    intentionalCollegeCode: [
      { required: true, message: '请输入意向学院代码', trigger: 'blur' }
    ],
    intentionalCollegeName: [
      { required: true, message: '请输入意向学院名称', trigger: 'blur' }
    ],
    intentionalMajorCode: [
      { required: true, message: '请输入意向专业代码', trigger: 'blur' }
    ],
    intentionalMajorName: [
      { required: true, message: '请输入意向专业名称', trigger: 'blur' }
    ],
    intentionalStudyCategory: [
      { required: true, message: '请输入意向攻读类型', trigger: 'blur' }
    ],
    intentionalTutorName: [
      { required: true, message: '请输入意向攻读类型', trigger: 'blur' }
    ],
    undergraduateSchool: [
      { required: true, message: '请输入本科院校', trigger: 'blur' }
    ],
    schoolType: [
      { required: true, message: '请输入学校类型', trigger: 'blur' }
    ],
    department: [
      { required: true, message: '请输入本科院系', trigger: 'blur' }
    ],
    major: [
      { required: true, message: '请输入本科专业', trigger: 'blur' }
    ],
    enrollmentTime: [
      { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
    ],
    graduationTime: [
      { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
    ],
    gradeNumber: [
      { required: true, message: '请输入同年级人数', trigger: 'blur' }
    ],
    ranking: [
      { required: true, message: '请输入预计专业排名', trigger: 'blur' }
    ],
    fiveSemesterRanking: [
      { required: true, message: '请输入前五学期排名', trigger: 'blur' }
    ],
    foreignLanguageType: [
      { required: true, message: '请输入外语类型', trigger: 'blur' }
    ],
    foreignLanguageGrades: [
      { required: true, message: '请输入外语成绩', trigger: 'blur' }
    ],
    personalStatement: [
      { required: true, message: '请输入个人陈述', trigger: 'blur' }
    ],
    researchDirection: [
      { required: true, message: '请输入研究方向', trigger: 'blur' }
    ],
    thesis: [
      { required: true, message: '请填写论文情况', trigger: 'blur' }
    ]
  }

  studentInfo = {
    name: 'sdq',
    gender: 1,
    nation: '',
    certificateType: '',
    certificateId: '',
    birthday: null,
    policalStatus: '',
    correspondenceAddress: '',
    homeAddress: '',
    postalCode: '',
    telephoneNumber: '',
    email: '',
    intentionalCollegeCode: '',
    intentionalCollegeName: '',
    intentionalMajorCode: '',
    intentionalMajorName: '',
    intentionalStudyCategory: '',
    intentionalTutorName: '',
    undergraduateSchool: '',
    schoolType: '',
    department: '',
    major: '',
    enrollmentTime: '',
    graduationTime: '',
    thesis: '',
    gradeNumber: '',
    ranking: '',
    fiveSemesterRanking: '',
    remarks: '',
    foreignLanguageType: '',
    foreignLanguageGrades: '',
    researchDirection: '',
    personalStatement: '',
  }

  submitForm(formName: any) {
    console.log(formName)
  }
  resetForm(formName: any) {
    console.log(formName)
  }
    
}
</script>

<style lang="less">
.registration-wrapper {
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