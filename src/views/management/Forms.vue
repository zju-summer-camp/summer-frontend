<template>
  <!-- 管理后台-学生报名表列表 -->
  <div class="forms-wrapper">
        <div class="title-wrapper">
      <!-- <div class="title">
        学生报名表
      </div> -->
      <div class="export-wrapper">
        <el-tooltip class="item" effect="dark" content="批量导出已勾选报名表" placement="top">
          <el-button
            @click.native.prevent="exportBatch"
            size="small" circle icon="el-icon-download">
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="导出所有报名表" placement="top">
          <el-button
            @click.native.prevent="exportAll"
            size="small" circle icon="el-icon-download">
          </el-button>
        </el-tooltip>
      </div>
    </div>
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
        border
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="60"
          :style="{'color':'#fff'}">
        </el-table-column>
        <el-table-column
          prop="name"
          label="学生姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="intentionalCollegeName"
          label="意向学院"
          width="150">
        </el-table-column>
        <el-table-column
          prop="intentionalMajorName"
          label="意向专业"
          width="150">
        </el-table-column>
        <el-table-column
          prop="department"
          label="本科院系">
        </el-table-column>
        <el-table-column
          prop="major"
          label="本科专业"
          width="150">
        </el-table-column>
        <el-table-column
          prop="enrollmentTime"
          label="入学时间"
          width="150">
        </el-table-column>
      
        <el-table-column
          label="操作"
          width="150">
          <template slot-scope="scope">
            <div class="operation-wrapper">
              <el-button
                @click.native.prevent="formDetail(scope.$index,scope)"
                type="text"
                size="small">
                详情
              </el-button>

              <el-tooltip class="item" effect="dark" content="导出当前报名表" placement="top">
                <el-button
                  @click.native.prevent="exportCurrent(scope.$index,scope)"
                  type="text"
                  size="small">
                  导出
                </el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" :content="scope.row.passed ? '撤销，取消学生进入夏令营资格':'通过，学生获得进入夏令营资格'" placement="top">
                <el-button
                  @click.native.prevent="changeStatus(scope.$index,scope)"
                  type="text"
                  size="small">
                  {{scope.row.passed ? '撤销':'通过'}}
                </el-button>
              </el-tooltip>
              
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
        direction="rtl"
        size="70%">
        <div class="drawer-content">
          <div class="form-content">
              <registration-form-detail :queryItems="queryItems"></registration-form-detail>
          </div>

          <div class="operations">
            <el-tooltip class="item" effect="dark" content="导出当前报名表" placement="top">
              <el-button
                @click.native.prevent="exportCurrent"
                size="small">
                导出
              </el-button>
            </el-tooltip>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import RegistrationFormDetail from '@/components/RegistrationFormDetail.vue'


@Component({
  components: {
    RegistrationFormDetail
  }
})
export default class Forms extends Vue {
  tableData= []
  currentPage = 1
  multipleSelection = []

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

  queryItems: any = {}

  getProjectList() {
    axios({
      url: '/formslist',
      data: {
        page: 1,
        pagination: 10
      }
    })
    .then((resp: any)=>{
      this.tableData = resp.data || []
    })
  }

  // 跳转到报名报详情页
  formDetail(index: number, scope: any){
    this.details.title = this.tableData[index]
    axios({
      url: '/getRegistrationData',
      data: {
        formID: '4399',
        accountId:'1111'
      }
    })
    .then((resp: any)=>{
      console.log('报名表详情中拿到的数据', resp)
      Object.keys(resp.data).forEach((key)=>{
        this.queryItems[key] = resp.data[key]
        this.drawer = true
      })
    })

   
  }
  // 修改报名表状态
  changeStatus(index: number, scope: any){
    console.log(scope, index)
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

  // 导出当前报名表
  exportCurrent() {
    console.log("exportCurrent")
  }

  // 批量导出已勾选报名表
  exportBatch() {
    console.log("exportBatch")
    // 调用后端接口，入参为已勾选报名表id列表
  }

  // 导出全部有权限的报名表
  exportAll() {
    console.log("exportAll")
    // 调用后端接口，入参为已勾选报名表id列表
  }

  // 处理多选
  handleSelectionChange(val: any) {
    this.multipleSelection = val;
    console.log("handleSelectionChange", val)
  }

  mounted(){
    this.getProjectList()
  }
}
</script>
<style lang="less">
.forms-wrapper {
  .filter-wrapper {
    margin: 20px auto 20px auto;
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
  .title-wrapper {
    width: 90%;
    height: 40px;
    margin: 30px auto 20px auto;
    // .title {
    //   height: 60px;
    //   float: left;
    //   font-weight: 600;
    //   font-size: 20px;
    // }
    // .export-wrapper {
    //   height: 60px;
    //   float: left;
    // }
  }
  

  .pagination-wrapper {
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #409eff;
      color: #FFFFFF;
    }
  }
  .el-drawer {
    overflow: auto;
    padding: 10px;
    .drawer-wrapper {
      .drawer-content {
        .operations{
          padding : 20px;
        }
        .form-content {
border: 5px solid saddlebrown;          width: 100%;
        }

      }
    }
  }
}
</style>