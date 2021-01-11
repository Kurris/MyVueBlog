<template>
  <div id="editor">
    <el-page-header class="elheader" @back="goBack" content="博客编辑"></el-page-header>
    <el-form class="editorForm" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input id="title" v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="introduction">
        <el-input id="introduction" v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item prop="mdcontent">
        <mavon-editor class="mditor" v-model="ruleForm.mdcontent" :boxShadowStyle="'0 2px 12px 0 rgba(0, 0, 0, 0.3)'" :toolbars="toolbarOps" :autofocus="this.$route.query.type=='edit'" />
      </el-form-item>
    </el-form>
    <div class="buttonEditor">
      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      <el-button v-if="this.$route.query.type=='add'" @click="resetForm('ruleForm')">重置</el-button>
      <el-button v-if="this.$route.query.type=='edit'" @click="goBack">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        title: '',
        introduction: '',
        mdcontent: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入博客标题', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        introduction: [
          { required: true, message: '请输入博客简介', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ],
        mdcontent: [
          { required: true, message: '请填写您的博客内容', trigger: 'blur' },
          { min: 10, message: '长度最小需要 10 个字符', trigger: 'blur' }
        ],
      },
      toolbarOps: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    }
  },
  methods: {
    goBack() {
      this.$router.replace('/BlogHome/Blog')
    },
    submitForm(formName) {
      this.$refs[formName].validate(res => {
        if (res) {

          let blog;

          let blogJson = window.localStorage.getItem("blog");
          if (blogJson == '' || blogJson == null) {
            blog = {
              userName: window.localStorage.getItem('user_name'),
              posts: null
            }
          } else {
            blog = JSON.parse(blogJson)
          }

          blog.posts = [
            {
              postId: this.$route.query.postId,
              title: this.ruleForm.title,
              introduction: this.ruleForm.introduction,
              content: this.ruleForm.mdcontent,
            }
          ];

          this.$http({
            method: 'post',
            url: '/Blog/SaveBlog',
            data: blog
          }).then(res => {

            let typeMsg = 'error'
            if (res.status == 1001) {
              typeMsg = 'success'
            }

            this.$message({
              type: typeMsg,
              message: res.message
            })

            if (res.status == 1001) {
              this.$router.replace({
                path: '/BlogHome/BlogDetail',
                query: {
                  postId: this.$route.query.postId
                }
              })
            }

          }).catch((err) => {
            this.$message({
              type: 'error',
              message: err
            })
          });
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  activated() {
    if (this.$route.query.type == 'add') {
      document.getElementById('title').focus()
    } else {
      this.$http({
        url: '/Blog/GetBlogCurrentPost',
        params: {
          blogId: JSON.parse(window.localStorage.getItem("blog")).blogId,
          postId: this.$route.query.postId
        }
      }).then(res => {

        let post = res.data.posts[0]
        this.ruleForm.title = post.title
        this.ruleForm.introduction = post.introduction
        this.ruleForm.mdcontent = post.content
      })
    }
  },
  deactivated() {
    this.ruleForm.title = ''
    this.ruleForm.introduction = ''
    this.ruleForm.mdcontent = ''
  },
}
</script>

<style>
.buttonEditor {
  position: absolute;
  left: 80%;
}

.mditor {
  height: 500px;
}

.editorForm {
  position: relative;
  right: 35px;
}
</style>