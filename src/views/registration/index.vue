<template>
  <div class="registration">
    <div class="registration-form">
      <div class="title">浙江大学暑期夏令营报名表</div>
      <div class="module" id="basic-info">
        <div class="module-title">基本信息</div>
        <div class="module-content">
          <row-item :config="options.name">
            <a-input
              v-model:value="studentInfo.name"
              placeholder="请输入学生姓名"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.gender">
            <a-radio-group name="radioGroup" v-model:value="studentInfo.gender">
              <a-radio value="1">男</a-radio>
              <a-radio value="2">女</a-radio>
            </a-radio-group>
          </row-item>
          <row-item :config="options.nation">
            <a-select v-model:value="studentInfo.nation" style="width: 200px">
              <a-select-option
                v-for="nat in nation"
                :key="nat.id"
                :value="nat.id"
              >
                {{ nat.name }}
              </a-select-option>
            </a-select>
          </row-item>
          <row-item :config="options.polical_status">
            <a-select
              v-model:value="studentInfo.polical_status"
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
          <row-item :config="options.certificate_type">
            <a-select
              v-model:value="studentInfo.certificateType"
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
              v-model:value="studentInfo.certificate_id"
              placeholder="请输入证件号码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.birthday">
            <a-date-picker
              v-model:value="studentInfo.birthday"
              @change="onBirthdayChange"
              size="200"
            />
          </row-item>
        </div>
      </div>
      <div class="module" id="contact-details">
        <div class="module-title">联系方式</div>
        <div class="module-content">
          <row-item :config="options.correspondence_address">
            <a-input
              v-model:value="studentInfo.correspondence_address"
              placeholder="请输入通讯地址"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.home_address">
            <a-input
              v-model:value="studentInfo.home_address"
              placeholder="请输入家庭地址"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.postal_code">
            <a-input
              v-model:value="studentInfo.postal_code"
              placeholder="请输入邮政编码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.telephone_number">
            <a-input
              v-model:value="studentInfo.telephone_number"
              placeholder="请输入电话号码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.email">
            <a-input
              v-model:value="studentInfo.email"
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
              v-model:value="studentInfo.intentional_college_code"
              placeholder="请输入意向学院代码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_college_name">
            <a-input
              v-model:value="studentInfo.intentional_college_name"
              placeholder="请输入意向学院名称"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_code">
            <a-input
              v-model:value="studentInfo.intentional_major_code"
              placeholder="请输入意向专业代码"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_name">
            <a-input
              v-model:value="studentInfo.intentional_major_name"
              placeholder="请输入意向专业名称"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_study_category">
            <a-input
              v-model:value="studentInfo.intentional_study_category"
              placeholder="请输入意向攻读类型"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_tutor_name">
            <a-input
              v-model:value="studentInfo.intentional_tutor_name"
              placeholder="请输入意向导师姓名"
              style="width: 200px"
            />
          </row-item>
        </div>
      </div>
      <div class="module" id="education-info">
        <div class="module-title">教育信息</div>
        <div class="module-content">
          <row-item :config="options.school_type">
            <a-cascader
              v-model:value="studentInfo.school_type"
              :options="UniversitiesOptions"
              :display-render="displayRender"
              expand-trigger="hover"
              placeholder="Please select"
              @change="onChange"
            />
          </row-item>
          <row-item :config="options.department">
            <a-input
              v-model:value="studentInfo.department"
              placeholder="请输入学校类型"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.major">
            <a-input
              v-model:value="studentInfo.major"
              placeholder="请输入本科院系"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.intentional_major_name">
            <a-input
              v-model:value="studentInfo.intentional_major_name"
              placeholder="请输入本科专业"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.thesis">
            <a-input
              v-model:value="studentInfo.thesis"
              placeholder="请输入论文情况"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.grade_number">
            <a-input
              v-model:value="studentInfo.grade_number"
              placeholder="请输入同年级人数"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.ranking">
            <a-input
              v-model:value="studentInfo.ranking"
              placeholder="请输入排名"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.five_semester_ranking">
            <a-input
              v-model:value="studentInfo.five_semester_ranking"
              placeholder="请输入前五学期排名"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.remarks">
            <a-input
              v-model:value="studentInfo.remarks"
              placeholder="请输入备注"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.foreign_language_type">
            <a-input
              v-model:value="studentInfo.foreign_language_type"
              placeholder="请输入外语类型"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.foreign_language_grades">
            <a-input
              v-model:value="studentInfo.foreign_language_grades"
              placeholder="请输入外语成绩"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.research_direction">
            <a-input
              v-model:value="studentInfo.research_direction"
              placeholder="请输入研究方向"
              style="width: 200px"
            />
          </row-item>
          <row-item :config="options.personal_statement">
            <a-input
              v-model:value="studentInfo.personal_statement"
              placeholder="请输入个人陈述"
              style="width: 200px"
            />
          </row-item>
        </div>
      </div>
      <div class="module form-footer">
        <a-button type="primary">重置</a-button>
        <a-button type="primary">提交</a-button>
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
  // import { allUniversities } from '@/const/china_mainland_universities.js'
  import rowItem from '@/views/components/row-item/row-item.vue'

  export default {
    name: 'registration',
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
        // allUniversities: allUniversities,
        UniversitiesOptions: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                    code: 752100,
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                    code: 453400,
                  },
                ],
              },
            ],
          },
        ],
      }
    },
    methods: {
      onBirthdayChange(date, dateString) {
        console.log('the date choosed', date, dateString)
        this.studentInfo.birthday = dateString
        console.log(this.studentInfo.birthday)
      },
      getMsg() {
        alert('hello')
      },
    },
  }
</script>

<style lang="less" scoped>
  // @font-face {
  //   font-family: 'dq-font';
  //   src: url(../../assets/FangZhenSongTi.ttf);
  // }
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
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-family: 'dq-font';
        font-size: 30px;
        padding: 20px;
      }
      .module {
        border-radius: 8px;
        margin: 20px;
        width: 800px;
        box-shadow: 0 0 4px #6aafe6;
        .module-title {
          font-family: 'dq-font';
          font-size: 18px;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 8px 8px 0 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          // background-color: #4f383e;
          border: 1px solid rgb(97, 154, 195);
          box-shadow: 0 0 4px #6aafe6;
          // text-shadow: 2px 2px 0px rgb(97, 154, 195);
        }
        .module-content {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        input.ant-input {
          border-radius: 10px;
        }
      }

      .form-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 12px 24px;
        box-shadow: 0 0 4px #6aafe6;
        button {
          margin: 3px;
          border-radius: 4px;
          background-color: rgb(41, 131, 187);
        }
      }
    }
  }
</style>
