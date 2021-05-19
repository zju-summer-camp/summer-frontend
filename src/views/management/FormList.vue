<template>
  <!-- 管理后台-学生报名表列表 -->
  <div class="forms-wrapper">
      <div class="title-wrapper">
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
      <dq-filter :filterConfig="filterConfig"></dq-filter>
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
          prop="account.username"
          label="用户昵称"
          width="140">
        </el-table-column>

        <el-table-column
          prop="account.phone"
          label="联系方式"
          width="140">
        </el-table-column>

        <el-table-column
          prop="state"
          label="状态"
          width="80">
        </el-table-column>

        <!-- <el-table-column
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
          label="状态"
          width="100">
          <template slot-scope="scope">
            <div>{{statusOptions[scope.row.status] && statusOptions[scope.row.status].name}}</div>
          </template>
        </el-table-column> -->
      
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <div class="operation-wrapper">
              <el-button
                @click.native.prevent="formDetail(scope.$index,scope)"
                type="text"
                size="small">
                详情
              </el-button>
              <el-button
                @click.native.prevent="exportCurrent(scope.$index,scope)"
                type="text"
                size="small">
                导出
              </el-button>
              
              <!-- <el-tooltip class="item" effect="dark" content="修改学生报名表状态" placement="top"> -->
                <el-button
                  @click.native.prevent="changeStatus(scope.$index,scope)"
                  type="text"
                  size="small">
                  修改状态
                </el-button>
              <!-- </el-tooltip> -->
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <div class="pagination-wrapper">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination.current"
        :page-size="pagination.size">
      </el-pagination>
    </div>

    <!-- 侧弹窗 -->
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

    <!-- 修改状态提示框 -->
    <el-dialog
      title="修改状态"
      :visible.sync="showReviseStatus"
      width="30%"
      :before-close="handleClose">
      <div >
        <div>当前正在修改 {{reviseStatusInfo.name}} 的报名表</div>
        <dq-form :formConfig="formConfig"></dq-form>
      </div>
      <div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showReviseStatus = false">取 消</el-button>
        <el-button type="primary" @click="showReviseStatus = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import RegistrationFormDetail from '@/components/FormContent.vue'
import DqForm from '@/components/DqForm.vue'
import DqFilter from '@/components/DqFilter.vue'
import { Apis } from '@/api/index.ts'


@Component({
  components: {
    RegistrationFormDetail,
    DqForm,
    DqFilter
  }
})
export default class Forms extends Vue {
  tableData= []
  currentPage = 1
  multipleSelection = []

  // filters = {
  //   undergraduateSchool: '',
  //   department: '',
  //   intentionalCollegeCode: '',
  //   intentionalTutorName: '',
  // }
  drawer = false

  details = {
    title: ''
  }

  statusOptions = [
    {
      name: '待定',
      value: 0
    },
    {
      name: '通过',
      value: 1
    },
    {
      name: '拒绝',
      value: 2
    }
  ]

  queryItems: any = {}

  showReviseStatus = false
  reviseStatusInfo = {}

  filterConfig = {
    width: '90%',
    items: {
      name: {
        label: '项目名称',
        placeholder: '请输入项目名称',
        type: 'input',
        required: true,
        hint: '请输入完整的项目名称，以查询该项目下学生报名情况',
        value: '',
        error: ''
      },
      team: {
        label: '导师团队',
        placeholder: '请输入导师团队',
        type: 'input',
        value: '',
        error: ''
      },
      academy: {
        label: '所属学院',
        placeholder: '请输入所属学院',
        type: 'input',
        value: '',
        error: ''
     },
    },
    buttons: {
      submit: {
        text: '查询',
        type: 'submit',
        func: (data: any)=> {
          this.getFormList()
        }
      }
    }
  }
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

  pagination = {
    current: 1,
    size: 3,
    total: 1
  }

  getFormList() {
    axios.get(Apis.queryCandidates, {
      params: {
        team: this.filterConfig.items.team.value,
        academy: this.filterConfig.items.academy.value,
        name: this.filterConfig.items.name.value,
        page: this.pagination.current,
        limit: this.pagination.size
      }
    }).then((resp: any)=>{
      this.pagination.total = resp.data.Data.count
      this.tableData = resp.data.Data.accounts || []
    })
  }

  // 跳转到报名报详情页
  formDetail(index: number, scope: any){
    axios.get( Apis.queryappform , {
      params: {
        ID :(this.tableData[index] as any).account.id
      }
    }).then((resp: any)=>{
      Object.keys(resp.data.Data).forEach((key)=>{
        this.queryItems[key] = resp.data.Data[key]
        this.drawer = true
      })
    })
    // axios({
    //   url: Apis.queryappform,
    //   data: {
    //     ID :(this.tableData[index] as any).account.id
    //   }
    // })
    // .then((resp: any)=>{
    //   console.log('报名表详情中拿到的数据', resp)
    //   Object.keys(resp.data).forEach((key)=>{
    //     this.queryItems[key] = resp.data[key]
    //     this.drawer = true
    //   })
    // })
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

  pageChange(){
    console.log("sss", this.currentPage)
  }

  handleSizeChange(val: number) {
    this.getFormList()
  }

  handleCurrentChange(val: number) {
    this.currentPage = val
    this.getFormList()
  }

  // 导出当前报名表
  exportCurrent() {
    alert("exportCurrent")
  }

  // 批量导出已勾选报名表
  exportBatch() {
    alert("exportBatch")
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
    this.getFormList()
  }
}
</script>
<style lang="less">
.forms-wrapper {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .filter-wrapper {
    margin-bottom: 20px;
  }
  .table-wrapper{
    width: 100%;
    .operation-wrapper {
      .el-button--text {
        color: #409eff;
      }
    }
  }
  .title-wrapper {
    width: 90%;
    //height: 40px;
    margin: 10px auto;
  }
  

  .pagination-wrapper {
    margin: 20px;
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #409eff;
      color: #FFFFFF;
    }
  }

  .el-select {
    width: 100%;
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