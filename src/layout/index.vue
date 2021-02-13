<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <a-row>
        <a-col :span="16" :offset="4">
          <a-menu
            class="menu"
            mode="horizontal"
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
          >
            <vab-menu v-for="route in routes" :key="route.path" :item="route" />
          </a-menu>
        </a-col>
        <a-col :span="4">
          <vab-avatar />
        </a-col>
      </a-row>
    </a-layout-header>
    <vab-content />
    <a-layout-footer class="footer">copyright @ zju</a-layout-footer>
  </a-layout>
</template>
<script>
  import VabAvatar from './vab-avatar'
  import VabMenu from './vab-menu'
  import VabContent from './vab-content'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
      VabAvatar,
      VabMenu,
      VabContent,
    },
    data() {
      return {
        selectedKeys: [],
        openKeys: [],
      }
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        routes: 'routes/routes',
        device: 'settings/device',
      }),
      classObj() {
        return {
          'vab-mobile': this.device === 'mobile',
          'vab-collapse': this.collapse,
        }
      },
    },
    watch: {
      $route: {
        handler({ path, matched }) {
          matched[0].children.length > 1
            ? (this.selectedKeys = [path])
            : (this.selectedKeys = [matched[0].path])
          this.openKeys = [matched[0].path]
        },
        immediate: true,
      },
    },
    methods: {
      ...mapActions({
        toggleDevice: 'settings/toggleDevice',
        handleFoldSideBar: 'settings/foldSideBar',
        toggleCollapse: 'settings/toggleCollapse',
      }),
    },
  }
</script>
<style lang="less">
  .layout {
    .header {
      height: 60px;
      background-color: #0f59a4;
      text-align: center;
      vertical-align: -webkit-baseline-middle;
      .menu {
        background-color: #0f59a4;
        color: @text-color;
      }
    }
    .footer {
      height: 60px;
      background-color: #0f59a4;
      vertical-align: -webkit-baseline-middle;
      color: @text-color;
    }
  }
</style>
