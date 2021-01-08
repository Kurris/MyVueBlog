<template>
  <div id="blogDetail">
    <el-page-header @back="goBack" content="博客浏览"></el-page-header>
    <markdown :source="mdContent"></markdown>>
  </div>
</template>

<script>
import markdown from 'vue-markdown'

export default {
  data() {
    return {
      mdContent: `# Vue 知识点

### 基础语法

- **初始化 Vue 对象**

- \`html\` 中使用 \`Mustache\` 语法获取 Vue 对象属性 \`data\` 的值;`
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