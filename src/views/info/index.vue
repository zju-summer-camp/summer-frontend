<!--
 * @ Author: sdq
 * @ Description: 项目资讯
 -->
<template>
  <div class="info-container">
    <div class="table-filters">
      <div class="filter-item">
        <span>所属学院</span>
        <a-select v-model="filters.tutor_name" style="width: 150px">
          <a-select-option :value="xxx">计算机科学与技术学院</a-select-option>
        </a-select>
      </div>
      <div class="filter-item">
        <span>导师团队</span>
        <a-select v-model="filters.tutor_name" style="width: 150px">
          <a-select-option :value="xxx">xxx</a-select-option>
        </a-select>
      </div>
      <div class="filter-item">
        <span>发布时间</span>
        <a-select v-model="filters.tutor_name" style="width: 150px">
          <a-select-option :value="xxx">xxx</a-select-option>
        </a-select>
      </div>
      <a-button type="primary">筛选</a-button>
    </div>
    <div class="table-content">
      <a-table
        :columns="columns"
        :row-key="(record) => record.article_id"
        :data-source="tabledata"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
        <template #customTitle>
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
        <template #tags="{ text: tags }">
          <span>
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === 'loser'
                  ? 'volcano'
                  : tag.length > 5
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template #action="{ text, record }">
          {{ text }}
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
  import { getProjectsInfo } from '@/api/info'
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
  import { getList } from '@/api/table'

  const columns = [
    {
      title: '项目名称',
      key: 'article_title',
      dataIndex: 'article_title',
      slots: { title: 'customTitle', customRender: 'name' },
    },
    {
      title: '所属学院',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '导师团队',
      dataIndex: 'tutor_team',
      key: 'tutor_team',
    },
    {
      title: '截止日期',
      key: 'tadeadlinegs',
      dataIndex: 'deadline',
      slots: { customRender: 'deadline' },
    },
    {
      title: '发布时间',
      key: 'create_time',
      dataIndex: 'create_time',
      slots: { customRender: 'create_time' },
    },
  ]

  export default {
    name: 'Info',
    components: {
      SmileOutlined,
      DownOutlined,
    },
    data() {
      return {
        tabledata: [],
        columns,
        filters: {
          tutor_name: '',
        },
        pagination: {
          showLessItems: true,
          showQuickJumper: true,
          showSizeChanger: true,
        },
        query: {},
        loading: false,
      }
    },
    mounted() {
      this.fetch()
    },
    methods: {
      fetch() {
        this.loading = true
        getList({
          pageSize: this.pagination.pageSize,
          current: this.pagination.current,
        }).then(({ data, total }) => {
          const pagination = { ...this.pagination }
          pagination.total = total
          this.loading = false
          this.tabledata = data
          this.pagination = pagination
        })
      },
      handleTableChange(pagination) {
        const pager = { ...this.pagination }
        pager.current = pagination.current
        this.pagination = pager
        this.fetch()
      },
    },
  }
</script>
<style lang="less">
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .table-filters {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: flex-start;
      padding: 20px 4px;
      .filter-item {
        margin-right: 30px;
        span {
          margin-right: 10px;
        }
      }
    }
    .table-content {
      width: 80%;
    }
  }
</style>
