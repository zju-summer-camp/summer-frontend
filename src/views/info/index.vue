<!--
 * @ Author: sdq
 * @ Description: 项目资讯
 -->
<template>
  <div class="info-container">
    <a-drawer
      title="Basic Drawer"
      placement="right"
      v-model:visible="visible"
      :after-visible-change="afterVisibleChange"
      width="933"
    >
      <p>{{ article_content }}</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
    <div class="table-filters">
      <div class="filter-item">
        <span>所属学院</span>
        <a-select v-model="filters.tutor_name" style="width: 150px">
          <a-select-option value="xxx">计算机科学与技术学院</a-select-option>
        </a-select>
      </div>
      <div class="filter-item">
        <span>导师团队</span>
        <a-select v-model="filters.tutor_name" style="width: 150px">
          <a-select-option value="xxx">xxx</a-select-option>
        </a-select>
      </div>
      <div class="filter-item">
        <span>发布时间</span>
        <a-select v-model="filters.tutor_name" style="width: 150px">
          <a-select-option value="xxx">xxx</a-select-option>
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
        <template #name="{ record }">
          <span class="article-title" @click="showDrawer">
            {{ record.article_title }}
          </span>
        </template>
        <template #customTitle>
          <span>
            <smile-outlined />
            项目名称
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
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'
  import { getList } from '@/api/table'
  import { getArticleList } from '@/api/article'

  const columns = [
    {
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
        visible: false,
        article_content: 'no_data',
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
      showDrawer() {
        this.getArticleById(2)
        this.visible = true
      },
      afterVisibleChange() {
        console.log('zhuzhu')
      },
      getArticleById(article_id = '0') {
        getArticleList({
          pageSize: this.pagination.pageSize,
          current: this.pagination.current,
          article_id: article_id,
        })
          .then(({ data }) => {
            console.log('article data', data)
            this.article_content = data[article_id].description
          })
          .catch((err) => {
            console.log('文章获取接口错误', err)
          })
      },
    },
  }
</script>
<style lang="less" scoped>
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .table-filters {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
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
    .article-title {
      cursor: pointer;
      color: @zju-blue;
    }
  }
</style>
