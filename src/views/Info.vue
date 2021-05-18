<template>
  <div class="info-wrapper">
    <project-list type="student"></project-list>
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

export default class Info extends Vue {

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