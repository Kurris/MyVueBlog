<template>
  <div class="blog">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>博客</span>
        <el-button style="float: right; padding: 3px " @click="refresh">刷新</el-button>
        <el-button style="float: right; padding: 3px " @click="addBlog">新增</el-button>
      </div>
    </el-card>
    <el-timeline class="timeline" v-for="item in posts" :key="item.postId">
      <el-timeline-item :id="item.postId" :timestamp="item.createTime" placement="top">
        <el-card id="">
          <el-link href="" @click.prevent="linkToDetail">{{item.title}}</el-link>
          <a href="" @click.prevent="">
            <el-dropdown class="setting" @command="handleCommand">
              <span class="el-dropdown-link"><i class="el-icon-setting"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit" command="editBlog">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete" command="deleteBlog(item.postId)">删除</el-dropdown-item>
                <el-dropdown-item icon="el-icon-share" command="shareBlog">分享</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
          <p>content</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-pagination class="pagination" @current-change="changePage" :page-size="pagination.pageSize" :current-page.sync="pagination.currentPage" layout="total, prev, pager, next" :total="pagination.total">
    </el-pagination>

  </div>
</template>

<script>

import detail from './blogDetail'

export default {
  data() {
    return {
      pagination: {
        currentPage: 0,
        pageSize: 5,
        total: 0,
      },
      posts: []
    }
  },
  components: {
    detail
  },
  methods: {
    addBlog() {
      this.$router.replace({
        path: '/BlogEditor',
        query: {
          type: 'add',
        }
      })
    },
    changePage(page) {
    },
    linkToDetail() {
      this.$router.replace({
        path: '/BlogDetail',
        query: {

        }
      })
    },
    handleCommand(cmd) {
      if (cmd == 'editBlog') {
        this.$router.replace({
          path: '/BlogEditor',
          query: {
            type: 'edit'
          }
        });
      }
      else if (cmd == 'deleteBlog') {
        this.deleteBlog();
      } else {

      }
    },
    deleteBlog(id) {
      this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        console.log(id);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    refresh() {
      this.$http({
        url: '/Post/GetPosts',
        params: {
          blogId: this.blogId
        }
      }).then(res => {
        console.log(this.posts);
        this.posts = res.data.posts
      })
    },
  },
  mounted() {
    this.refresh();
  },
}
</script>

<style>
.blog {
  height: 100%;
  text-align: left;
}

.pagination {
  position: absolute;
  bottom: 0px;
  left: 20%;
}

.timeline p,
h4 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.setting {
  position: absolute;
  left: 95%;
}
</style>
