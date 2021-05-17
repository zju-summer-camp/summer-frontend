<template>
  <div class="info-wrapper">
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
          prop="team"
          label="导师团队"
          width="160">
        </el-table-column>
        <el-table-column
          prop="academy"
          label="所属学院"
          width="140">
        </el-table-column>
        <el-table-column
          label="项目简介">
          prop="detail"
        </el-table-column>
        <el-table-column
          prop="deadline"
          label="截止日期"
          width="120">
        </el-table-column>
        <el-table-column
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
    <div class="drawer-wrapper">
      <el-drawer
        title="项目详情"
        :visible.sync="drawer"
        direction="rtl"
        size="70%">
        <div class="drawer-content">
          <div v-html="details"></div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import { Apis } from '@/api/index.ts'
import { getDecodedContent } from '@/components//Editors/getEncodeData.ts'

@Component({

})

export default class Info extends Vue {
  tableData= []
  currentPage = 1

  filters = {
    tutorTeam: '',
    academy: '',
  }

  // 抽屉中的内容展示

  drawer = false

  details = ''

  getProjectList() {
    axios.get(Apis.searchproject, {
      params: {
        limit: 10
      }
    }).then((resp: any)=>{

      const table = resp.data.Data
      
      this.tableData = resp.data.Data

    })
  }

  // 跳转到项目详情页
  projectDetail(index: number){
    const rowData = this.tableData[index]
    const decodedData = getDecodedContent((rowData as any).detail)
    this.details = decodedData
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
.info-wrapper {
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


  .el-drawer {
    overflow: auto;
    padding: 40px;
    .drawer-content {
      text-align: left;
    }
  }


</style>