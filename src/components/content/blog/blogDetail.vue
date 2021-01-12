<template>
  <div id="blogDetail" class="blogDetail">
    <el-page-header class="elheader" @back="goBack" :content="title" />
    <markdown class="md" :content="content" />
  </div>
</template>

<script>
import markdown from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'detail',
  data() {
    return {
      content: '',
      title: '',
    }
  },
  components: {
    markdown
  },
  methods: {
    goBack() {
      this.$router.replace('/BlogHome/Blog')
    }
  },
  activated() {
    this.$http({
      target: '.blogDetail',
      url: '/Blog/GetBlogCurrentPost',
      params: {
        blogId: JSON.parse(window.localStorage.getItem("blog")).blogId,
        postId: this.$route.query.postId
      }
    }).then(res => {
      let post = res.data.posts[0]
      this.content = post.content
      this.title = post.title
    })
  },
  deactivated() {
    this.content = ''
    this.title = ''
  },
}
</script>

<style>
.md {
  margin-left: 10px;
}
</style>