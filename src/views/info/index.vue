<template>
  <div class="index-container">info</div>
</template>

<script>
  import { getProjectsInfo } from '@/api/info'

  export default {
    name: 'Info',
    data() {
      return {
        data: [],
      }
    },
    mounted() {
      this.fetch()
    },
    methods: {
      fetch() {
        getProjectsInfo().then((resp) => {
          console.info('resp', resp)
        })
      },
    },
  }
</script>
