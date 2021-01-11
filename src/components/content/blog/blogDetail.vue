<template>
  <div id="blogDetail">
    <el-page-header class="elheader" @back="goBack" :content="title" />
    <markdown style="margin-left :10px" :content="content" />
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
      url: '/Blog/GetBlogCurrentPost',
      params: {
        blogId: this.$store.state.blog.blogId,
        postId: this.$route.query.postId
      }
    }).then(res => {
      try {
        let post = res.data.posts[0]
        this.content = post.content
        this.title = post.title
      } catch {
      }
    })
  },
  deactivated() {
    this.content = ''
    this.title = ''
  },
}
</script>

<style>
</style>