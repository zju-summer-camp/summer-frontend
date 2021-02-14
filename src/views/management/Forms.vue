<template>
  <!-- 学生报名表列表 -->
  <div class="forms-wrapper">
    <div class="filter-wrapper">
      <el-form :inline="true" :model="filters">
        <el-form-item label="本科院校">
          <el-select v-model="filters.undergraduateSchool" placeholder="请选择本科院校">
            <el-option label="abaaba" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属院系">
          <el-select v-model="filters.academy" placeholder="请选择所属院系">
            <el-option label="计算机科学与技术学院" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="意向导师">
          <el-select v-model="filters.intentionalTutorName" placeholder="请选择意向导师">
            <el-option label="计算机科学与技术学院" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button  @click="getProjectList">筛选</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-wrapper">
      <el-table
        :data="tableData"
        border>
        <el-table-column
          prop="name"
          label="学生姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="intentionalCollegeName"
          label="意向学院"
          width="130">
        </el-table-column>
        <el-table-column
          prop="intentionalMajorName"
          label="意向专业"
          width="130">
        </el-table-column>
        <el-table-column
          prop="department"
          label="本科院系"
          width="130">
        </el-table-column>
        <el-table-column
          prop="major"
          label="本科专业"
          width="130">
        </el-table-column>
        <el-table-column
          prop="enrollmentTime"
          label="入学时间"
          width="130">
        </el-table-column>
      
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <div class="operation-wrapper">
              <el-button
                @click.native.prevent="projectDetail(scope.$index)"
                type="text"
                size="small">
                详情
              </el-button>
              <el-button
                @click.native.prevent="projectDetail(scope.$index)"
                type="text"
                size="small">
                通过
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage">
      </el-pagination>
    </div>
    <div class="drawer-wrapper">
      <el-drawer
        :title="details.title.name"
        :visible.sync="drawer"
        :direction="rtl"
        size="70%">
        <div class="drawer-content">
          {{details.title}}
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Forms extends Vue {
    tableData= []
  currentPage = 1

  filters = {
    undergraduateSchool: '',
    department: '',
    intentionalCollegeCode: '',
    intentionalTutorName: '',
  }
  drawer = false

  details = {
    title: ''
  }

  getProjectList() {
    axios({
      url: '/formslist',
      data: {
        page: 1,
        pagination: 10
      }
    })
    .then((resp)=>{
      this.tableData = resp.data
    })
  }

  // 跳转到项目详情页
  projectDetail(index: number){
    this.details.title = this.tableData[index]
    // 可能需要调用接口查询报名表详情，目前先使用表格中的数据
    this.drawer = true
  }

  pageChange(){
    console.log("sss", this.currentPage)
  }

  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }

  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
    this.currentPage = val
    this.getProjectList()
  }

  mounted(){
    this.getProjectList()
  }
}
</script>
<style lang="less">
.forms-wrapper {
  .filter-wrapper {
    margin: 30px auto 10px auto;
  }
  .table-wrapper{
    width: 90%;
    margin: 20px auto;
    .operation-wrapper {
      .el-button--text {
        color: #409eff;
      }
    }
  }

  .pagination-wrapper {
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #409eff;
      color: #FFFFFF;
    }
  }
}
</style>