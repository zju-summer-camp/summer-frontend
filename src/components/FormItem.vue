<template>
  <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
      label="年龄"
      prop="age"
      :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
    >
      <el-input  v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  @Component({
  })
  export default class FormItem extends Vue{

    numberValidateForm = {
      age: ''
    }

      submitForm(formName: any) {
        (this.$refs[formName] as any).validate((valid: boolean) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      resetForm(formName: string) {
        (this.$refs[formName] as any).resetFields();
      }
  }
</script>