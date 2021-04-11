<template>
  <!-- 上传资讯，管理员及教师权限 -->
  <div class="articles-wrapper">
    <div class="filter-wrapper">
      <el-form :inline="true" :model="filters" class="demo-form-inline">
        <el-form-item label="导师团队">
          <el-select v-model="filters.tutorTeam" placeholder="请选择导师团队">
            <el-option label="abaaba" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属院系">
          <el-select v-model="filters.academy" placeholder="请选择所属院系">
            <el-option label="计算机科学与技术学院" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button  @click="getProjectList">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-wrapper">
      <el-table
        :data="tableData"
        border>
        <el-table-column
          prop="name"
          label="项目名称"
          width="160">
        </el-table-column>
        <el-table-column
          prop="tutorTeam"
          label="导师团队"
          width="160">
        </el-table-column>
        <el-table-column
          prop="academy"
          label="所属学院"
          width="140">
        </el-table-column>
        <el-table-column
          prop="overview"
          label="项目简介">
        </el-table-column>
        <el-table-column
          prop="deadline"
          label="截止日期"
          width="120">
        </el-table-column>

        
        <el-table-column
          label="状态"
          width="100">
          <template slot-scope="scope">
            <div>{{statusOptions[scope.row.status] && statusOptions[scope.row.status].name}}</div>
          </template>
        </el-table-column>


        <el-table-column
          label="操作"
          width="150">
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
                编辑
              </el-button>
              <el-button
                @click.native.prevent="changeStatus(scope.$index,scope)"
                type="text"
                size="small">
                修改状态
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
        direction="rtl"
        size="70%">
        <div class="drawer-content">
          {{details.title}}
        </div>
      </el-drawer>
    </div>

    <!-- 修改状态提示框 -->
    <el-dialog
      title="修改状态"
      :visible.sync="showReviseStatus"
      width="30%"
      :before-close="handleClose">
      <div >
        <div>当前正在修改 {{reviseStatusInfo.name }} 项目状态</div>
        <dq-form :formConfig="formConfig"></dq-form>
      </div>
      <div>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showReviseStatus = false">取 消</el-button>
        <el-button type="primary" @click="showReviseStatus = false">修 改</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import DqForm from '@/components/DqForm.vue'

@Component({
  components: {
    DqForm
  }
})
export default class Articles extends Vue {
    tableData= []
  currentPage = 1

  filters = {
    tutorTeam: '',
    academy: '',
  }

  // 抽屉中的内容展示

  drawer = false

  details = {
    title: ''
  }

    statusOptions = [
    {
      name: '未发布',
      value: 0
    },
    {
      name: '发布',
      value: 1
    }
  ]

  showReviseStatus = false
  reviseStatusInfo = {}

  
  formConfig = {
    width: '100%',
    items: {
      status: {
        hint: '修改状态',
        label: '状态',
        placeholder: '请选择状态',
        type: 'select',
        options: this.statusOptions,
        value: '',
        submitkey: 'phoneNumber',
        error: '',
        required: true,
        rules: [
          {
            ok: (value: any) => {
              const reg = /^1[0-9]{10}$/
              console.log(reg.test(value))
              return reg.test(value) ? true: false
            },
            msg: '请输入格式正确的手机号'
          }
        ]
      },
    }
  }

    // 修改报名表状态
  changeStatus(index: number, scope: any){
  
    this.reviseStatusInfo = this.tableData[index]
    this.showReviseStatus = true
  }

    handleClose(){
    console.log('关闭修改状态弹窗')
    // 发送修改数据请求
    // 刷新报名表
  }

  getProjectList() {
    axios({
      url: '/projectlist',
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
    console.log(this.tableData[index])
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
.articles-wrapper {
  padding: 20px;
    .el-select {
      width: 100%;
    }
    .filter-wrapper {
      margin: 20px auto;
    }
  .table-wrapper{
    width: 100%;
    margin: 20px auto;
    .operation-wrapper {
      .el-button--text {
        color: #409eff;
      }
    }
  }

  .pagination-wrapper {
    margin: 20px;
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #409eff;
      color: #FFFFFF;
    }
  }

}
</style>