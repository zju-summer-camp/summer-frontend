<template>
  <div class="registration-form">
    <basic-info />
  </div>
</template>

<script>
  import basicInfo from './basic-info.vue'
  export default {
    name: 'Registration',
    components: {
      'basic-info': basicInfo,
    },
  }
</script>
