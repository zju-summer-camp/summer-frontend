<template>
  <div class="project-signup-wrapper">
    <!-- 项目列表-报名操作组件-学生权限 -->

    <div class="project-signup">
      <el-table
        :data="tableData"
        border>
        <el-table-column
          label="操作"
          width="140">
          <template slot-scope="scope">
            <div class="operation-wrapper">
              <el-button
                @click.native.prevent="projectDetail(scope.$index)"
                type="text"
                size="small">
                详情
              </el-button>
              <el-button
                @click.native.prevent="signupDialog(scope.$index)"
                type="text"
                size="small">
                报名
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="请确认"
      :visible.sync="showSignup"
      width="30%"
      :before-close="handleClose">
      <div >
        <div><i class="el-icon-warning" :style="{'color': '#F56C6C', 'font-size': '30px', 'vertical-align': 'middle', 'padding': '5px'}"></i><span class="signup-hint">报名成功后，将无法修改报名项目，请确认</span></div>
        <dq-form :formConfig="formConfig"></dq-form>
      </div>
    </el-dialog>

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
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getDecodedContent } from '@/components//Editors/getEncodeData.ts'
import axios from 'axios'
import { Apis } from '@/api/index.ts'
import DqForm from '@/components/DqForm.vue'

@Component({
  components: {
    DqForm
  }
})
export default class ProjectSignup extends Vue{
  @Prop({
    type: Array,
    default: ()=>{
      return {}
    }
  }) tableData!: object[]

  details = ''

  drawer = false

  showSignup = false
  projectID = 0

    formConfig = {
    width: '100%',
    items: {
      
    },
    buttons: {
      submit: {
        type: 'submit',
        text: '确认报名',
        func: (data: any) => {
          this.signup()
          this.handleClose()
        },
      },
      cancel: {
        text: '我再逛逛',
        func: (data: any)=>{
          this.handleClose()
        }
      }
    }
  }

  // 跳转到项目详情页
  projectDetail(index: number){
    const rowData = this.tableData[index]
    const decodedData = getDecodedContent((rowData as any).detail)
    this.details = decodedData
    this.drawer = true
  }

  signupDialog(index: number){
    console.log(index)
    this.projectID = (this.tableData[index] as any).id || 0
    this.showSignup = true
  }

  signup(){
    axios({
      url: Apis.candidates,
      method: 'post',
      data: {
        "projectID": this.projectID,
      }
    }).then((resp)=>{
      alert('报名成功')
      console.log('报名的结果', resp)
    }).catch((error)=>{
      alert('报名失败，用户无权限或已报名。如有疑问，请联系 18888xxxxxxx')
    })
  }
  handleClose() {
    this.showSignup = false
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

.signup-hint {
  line-height: 30px;
  vertical-align: middle;
  font-size: 16px;
}
</style>