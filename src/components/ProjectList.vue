<template>
  <div class="info-wrapper">
    <!-- 使用 dq-filter 改造这个筛选框 -->
    <div class="filter-wrapper">
      <dq-filter :filterConfig="filterConfig"></dq-filter>
    </div>
    <div class="table-wrapper">
      <div class="table-info-wrapper">
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
        </el-table>
      </div>
      <div class="table-operations-wrapper" v-if="tableData">
        <project-management :tableData="tableData" v-if="type === 'management'"/>
        <project-signup :tableData="tableData" v-else/>
      </div>
      

    </div>
    

    <div class="pagination-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination.current"
        :page-size="pagination.size">
      </el-pagination>
    </div>
    
  </div>
</template>
<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { Apis } from '@/api/index.ts'
import DqFilter from '@/components/DqFilter.vue'
import ProjectSignup from '@/components/ProjectSignup.vue'
import ProjectManagement from '@/components/ProjectManagement.vue'

@Component({
  components: {
    DqFilter,
    ProjectSignup,
    ProjectManagement
  }
})

export default class Info extends Vue {
  @Prop({
    type: String,
    default: ()=>{
      return 'student'
    }
  }) type!: string

  filterConfig = {
    width: '90%',
    items: {
      team: {
        label: '导师团队',
        placeholder: '请输入导师团队',
        type: 'input',
        value: '',
        submitkey: 'team',
      },
      academy: {
        label: '所属学院',
        placeholder: '请输入所属学院',
        type: 'input',
        value: '',
        submitkey: 'academy',
      },
    },
    buttons: {
      submit: {
        text: '查询',
        func: (data: any)=> {
          console.log('提交数据', data)
          this.getProjectList()
        }
      }
    }
  }
  tableData= []

  pagination = {
    current: 1,
    size: 3
  }

  // 抽屉中的内容展示

  drawer = false

  details = ''

  getProjectList() {
    axios.get(Apis.searchproject, {
      params: {
        team: this.filterConfig.items.team.value,
        academy: this.filterConfig.items.academy.value,
        page: this.pagination.current,
        limit: this.pagination.size
      }
    }).then((resp: any)=>{
      const table = resp.data.Data
      this.tableData = resp.data.Data.projects

    })
  }

  pageChange(){
    console.log("sss", this.pagination.current)
  }

  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
  }

  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
    this.pagination.current = val
    this.getProjectList()
  }

  mounted(){
    this.getProjectList()
  }
}
</script>
<style lang="less">
.info-wrapper {
  // background-color: brown;
  .filter-wrapper {
    margin: 30px auto 10px auto;
  }
  .table-wrapper{
    // background-color: burlywood;
    margin: 20px auto;
    display: grid;
    grid-template-columns: auto auto;
    .table-info-wrapper {
      .el-table__row {
        height: 71px;
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