<template>
  <div class="row-item">
    <div class="label">
      <a-popover v-if="config.hint" class="hint">
        <template #content>
          <p>{{ config.hint }}</p>
        </template>
        <QuestionCircleOutlined />
      </a-popover>
      <div v-if="config.label" class="text">
        {{ config.label }}
      </div>
    </div>
    <div class="input-item" :style="{ width: config.width }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { QuestionCircleOutlined } from '@ant-design/icons-vue'

  export default {
    name: 'row-item',
    components: {
      QuestionCircleOutlined,
    },
    props: {
      config: {
        type: Object,
        default() {
          return {
            label: 'default',
            required: true,
            hint: 'hinthinthint',
            size: '200',
          }
        },
      },
    },
  }
</script>
<style lang="less" scoped>
  .row-item {
    display: flex;
    padding: 8px;
    align-items: center;
    background-color: #dfe6e9;
    width: 350px;
    min-width: 350px;
    height: 50px;
    min-height: 50px;
    border-radius: 4px;
    margin: 2px;
    .label {
      width: 100px;
      padding-right: 8px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
