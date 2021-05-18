<template>
  <div class="info-wrapper">
    <div class="filter-wrapper">

      <!-- 使用 dq-filter 改造这个筛选框 -->
          <div class="filter-wrapper">
        <dq-filter :filterConfig="filterConfig"></dq-filter>
    </div>
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
        :total="10"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination.current"
        :page-size="pagination.size">
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
import DqFilter from '@/components/DqFilter.vue'

@Component({
  components: {
    DqFilter
  }
})

export default class Info extends Vue {

  filterConfig = {
    width: '80%',
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