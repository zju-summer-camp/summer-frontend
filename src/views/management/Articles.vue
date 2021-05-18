<template>
  <!-- 上传资讯，管理员及教师权限 -->
  <div class="articles-wrapper">
    <project-list type="management"></project-list>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import ProjectList from '@/components/ProjectList.vue'

@Component({
  components: {
    ProjectList,
  }
})
export default class Articles extends Vue {

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