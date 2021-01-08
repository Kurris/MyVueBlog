<template>
  <div id="blogDetail">
    <el-page-header class="elheader" @back="goBack" content="博客浏览"></el-page-header>
    <markdown :source="mdContent"></markdown>>
  </div>
</template>

<script>
import markdown from 'vue-markdown'

export default {
  data() {
    return {
      mdContent: ``
    }
  },
  components: {
    markdown
  },
  methods: {
    goBack() {
      this.$router.replace('/Blog')
    }
  },
}
</script>

<style>
</style>