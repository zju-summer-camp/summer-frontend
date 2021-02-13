<template>
  <div class="info-wrapper">
    <div class="filter-wrapper">filters</div>
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
          fixed="right"
          label="操作"
          width="120">
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
                报名
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
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component({

})

export default class Info extends Vue {
  tableData= []
  currentPage = 1

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
.info-wrapper {
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