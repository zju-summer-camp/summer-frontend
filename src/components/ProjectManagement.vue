<template>
  <div class="project-signup-wrapper">
    <!-- 项目列表-报名操作组件-学生权限 -->

    <div class="project-signup">
      <el-table
        :data="tableData"
        border>
        <!-- <el-table-column
          label="状态"
          width="100">
          <template slot-scope="scope">
            <div>未发布</div>
          </template>
        </el-table-column> -->

        <el-table-column
          label="状态"
          width="100">
          <template>
            <div>未发布</div>
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getDecodedContent } from '@/components//Editors/getEncodeData.ts'
import DqForm from '@/components/DqForm.vue'


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
  reviseStatusInfo = {}
  
  statusOptions = [
    {
      name: '未发布',
      value: 0
    },
    {
      name: '已发布',
      value: 1
    }
  ]


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


    // 跳转到项目详情页
  projectDetail(index: number){
    const rowData = this.tableData[index]
    const decodedData = getDecodedContent((rowData as any).detail)
    this.details = decodedData
    this.drawer = true
  }

  handleClose(){
    console.log('关闭修改状态弹窗')
    this.showReviseStatus = false
    // 发送修改数据请求
    // 刷新报名表
  }

  mounted() {
    console.log('挂载时拿到的数据', this.tableData)
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