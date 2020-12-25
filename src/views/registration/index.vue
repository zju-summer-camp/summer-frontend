<template>
  <div class="registration">
    <div class="left-nav">
      左边导航栏
      <!-- <div>
        <a class="nav-link" href="#contact-details">基本信息</a>
      </div> -->
    </div>
    <div class="registration-form">
      <div class="module" id="basic-info">
        <div class="module-title">基本信息</div>
        <div class="module-content">
          <row-item :config="options.name">
            <a-input
              :value="studentInfo.name"
              placeholder="请输入学生姓名"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.gender">
            <a-radio-group name="radioGroup" :value="studentInfo.gender">
              <a-radio value="1">男</a-radio>
              <a-radio value="2">女</a-radio>
            </a-radio-group>
          </row-item>
          <row-item :config="options.nation">
            <a-select :value="studentInfo.nation" style="width: 200px">
              <a-select-option
                v-for="nat in nation"
                :key="nat.id"
                :value="nat.id"
              >
                {{ nat.name }}
              </a-select-option>
            </a-select>
          </row-item>
          <row-item :config="options.certificate_type">
            <a-select
              :value="studentInfo.certificateType"
              :style="{ width: '200px' }"
            >
              <a-select-option
                v-for="ct in certificateType"
                :key="ct.id"
                :value="ct.id"
              >
                {{ ct.name }}
              </a-select-option>
            </a-select>
          </row-item>
          <row-item :config="options.certificate_id">
            <a-input
              :value="studentInfo.certificate_id"
              placeholder="请输入证件号码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.birthday">
            <!-- <a-date-picker
              v-model="studentInfo.birthday"
              @change="onBirthdayChange"
              size="200"
            /> -->
          </row-item>
          <row-item :config="options.polical_status">
            <a-select
              :value="studentInfo.polical_status"
              :style="{ width: '200px' }"
            >
              <a-select-option
                v-for="ps in policalStatus"
                :key="ps.id"
                :value="ps.id"
              >
                {{ ps.name }}
              </a-select-option>
            </a-select>
          </row-item>
        </div>
      </div>
      <div class="module" id="contact-details">
        <div class="module-title">联系方式</div>
        <div class="module-content">
          <row-item :config="options.correspondence_address">
            <a-input
              v-model="studentInfo.correspondence_address"
              placeholder="请输入通讯地址"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.home_address">
            <a-input
              v-model="studentInfo.home_address"
              placeholder="请输入家庭地址"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.postal_code">
            <a-input
              v-model="studentInfo.postal_code"
              placeholder="请输入邮政编码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.telephone_number">
            <a-input
              v-model="studentInfo.telephone_number"
              placeholder="请输入电话号码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.email">
            <a-input
              v-model="studentInfo.email"
              placeholder="请输入电子邮箱"
              style="width: 200px"
            />
          </row-item>
        </div>
      </div>
      <div class="module" id="application-intention">
        <div class="module-title">申请意向</div>
        <div class="module-content">
          <row-item :config="options.intentional_college_code">
            <a-input
              v-model="studentInfo.intentional_college_code"
              placeholder="请输入意向学院代码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_college_name">
            <a-input
              v-model="studentInfo.intentional_college_name"
              placeholder="请输入意向学院名称"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_code">
            <a-input
              v-model="studentInfo.intentional_major_code"
              placeholder="请输入意向专业代码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_name">
            <a-input
              v-model="studentInfo.intentional_major_name"
              placeholder="请输入意向专业名称"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_study_category">
            <a-input
              v-model="studentInfo.intentional_study_category"
              placeholder="请输入意向攻读类型"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_tutor_name">
            <a-input
              v-model="studentInfo.intentional_tutor_name"
              placeholder="请输入意向导师姓名"
              style="width: 200px"
            />
          </row-item>
        </div>
      </div>
      <div class="module" id="education-info">
        <div class="module-title">教育信息</div>
        <div class="module-content">
          <row-item :config="options.intentional_college_code">
            <a-input
              v-model="studentInfo.intentional_college_code"
              placeholder="请输入本科院校"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_college_name">
            <a-input
              v-model="studentInfo.intentional_college_name"
              placeholder="请输入学校类型"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_code">
            <a-input
              v-model="studentInfo.intentional_major_code"
              placeholder="请输入本科院系"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_name">
            <a-input
              v-model="studentInfo.intentional_major_name"
              placeholder="请输入本科专业"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_study_category">
            <a-input
              v-model="studentInfo.intentional_study_category"
              placeholder="请输入论文情况"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_tutor_name">
            <a-input
              v-model="studentInfo.intentional_tutor_name"
              placeholder="请输入同年级人数"
              style="width: 200px"
            />
          </row-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    options,
    nation,
    certificateType,
    policalStatus,
  } from '@/const/registration.js'
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
          nation: '',
          certificate_type: '',
          certificate_id: '',
          birthday: null,
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
        options: options,
        nation: nation,
        certificateType: certificateType,
        policalStatus: policalStatus,
      }
    },
    methods: {
      onBirthdayChange(date, dateString) {
        console.log('the date choosed', date, dateString)
        this.studentInfo.birthday = dateString
        console.log(this.studentInfo.birthday)
      },
    },
  }
</script>

<style lang="less" scoped>
  .registration {
    display: flex;
    justify-content: center;
    .left-nav {
      width: 200px;
      .nav-link {
        color: #a29bfe;
        font-size: 16px;
        font-weight: 500;
        &:active {
          font-size: 26px;
        }
      }
    }
    .registration-form {
      .module {
        background-color: #a29bfe;
        border-radius: 4px;
        padding: 24px;
        margin: 10px;
        width: 800px;

        .module-title {
          font-size: 16px;
          color: #333;
          font-weight: 800;
          margin-bottom: 10px;
          padding: 4px;
        }
        .module-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }
      }
    }
  }
</style>
