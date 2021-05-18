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

@Component
export default class ProjectSignup extends Vue{
  @Prop({
    type: Array,
    default: ()=>{
      return {}
    }
  }) tableData!: object[]

  details = ''

  drawer = false


    // 跳转到项目详情页
  projectDetail(index: number){
    const rowData = this.tableData[index]
    const decodedData = getDecodedContent((rowData as any).detail)
    this.details = decodedData
    this.drawer = true
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