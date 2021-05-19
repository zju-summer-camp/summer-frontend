<template>
  <div class="project-signup-wrapper">
    <!-- 项目列表-报名操作组件-学生权限 -->

    <div class="project-signup">
      <el-table
        :data="tableData"
        border>
        <el-table-column
          label="状态"
          width="100">
          <template slot-scope="scope">
            <div>{{ tableData[scope.$index].published ? statusOptions[0].name : statusOptions[1].name }}</div>
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
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getDecodedContent } from '@/components//Editors/getEncodeData.ts'
import DqForm from '@/components/DqForm.vue'
import axios from 'axios'
import { Apis } from '@/api/index.ts'

@Component({
  components: {
    DqForm
  }
})
export default class ProjectManagement extends Vue{
  @Prop({
    type: Array,
    default: ()=>{
      return {}
    }
  }) tableData!: object[]

  details = ''

  drawer = false
  showReviseStatus = false
  reviseStatusInfo: any = {
    id: ''
  }

  getID() {
    return this.reviseStatusInfo.id
  }
  
  statusOptions = [
    {
      name: '未发布',
      value: 1
    },
    {
      name: '已发布',
      value: 2
    }
  ]


  formConfig = {
    width: '100%',
    labelWidth: '120px',
    items: {
      published: {
        label: '状态',
        placeholder: '请选择状态',
        type: 'select',
        options: this.statusOptions,
        value: '',
        submitkey: 'Published',
        error: '',
        required: true,
        rules: [
        ]
      },
    },
    buttons: {
      submit: {
        type: 'submit',
        text: '修改',
        func: (data: any) => {
          data['ID'] = this.getID()
          data['Published'] = data['Published'] === this.statusOptions[0].value ? false : true
          axios({
            url: Apis.publishment,
            method: 'post',
            data: data
          }).then((resp)=>{
            console.log(resp)
            alert('修改成功')
            // 刷新界面 todo
            this.handleClose()
          }).catch((error)=>{
            alert('修改失败，请重试')
          })
        },
      },
      cancel: {
        text: '取消',
        func: (data: any)=>{
          this.handleClose()
        }
      }
    }
  }
  
    // 修改报名表状态
  changeStatus(index: number, scope: any){
    this.reviseStatusInfo = this.tableData[index]
    this.showReviseStatus = true
  }

  // 跳转到项目详情页
  projectDetail(index: number){
    const rowData = this.tableData[index]
    const decodedData = getDecodedContent((rowData as any).detail)
    this.details = decodedData
    this.drawer = true
  }

  handleClose(){
    this.showReviseStatus = false
  }
}
</script>
<style lang="less">
.project-signup-wrapper {
  padding: 0;
  .project-signup {
    height: 100%;
    width: 100%;
    .el-table__row {
        height: 71px;
      }
  }
  .operation-wrapper {
    .el-button--text {
      color: #409eff;
    }
  }
}
</style>