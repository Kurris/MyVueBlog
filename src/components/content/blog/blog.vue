<template>
  <div class="blog">
    <div class="blogHeader">
      <span>博客</span>
      <div class="headerbtn">
        <el-button type="primary" v-show="posts.length>0" @click="getBlogWithPagniation(5,1)">刷新</el-button>
        <el-button type="primary" @click="addBlog">新增</el-button>
      </div>
    </div>

    <div class="timeline">
      <h1 v-show="posts.length==0" style="text-align: center;">开始您的新博客</h1>

      <el-timeline v-for="(item,index) in posts" :key="item.postId">
        <el-timeline-item :id="item.postId" :timestamp="item.createTime" placement="top">
          <el-card id="">
            <el-link href="" @click.prevent="linkToDetail(item.postId)" style="color: rgb(38, 8, 145)">{{item.title}}</el-link>
            <a href="" @click.prevent="">
              <el-dropdown class="setting" @command="handleCommand">
                <span class="el-dropdown-link"><i class="el-icon-setting"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-edit" :command="['edit',item.postId]">编辑</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-delete" :command="['delete',item.postId,index]">删除</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-share" :command="['share',item.postId]">分享</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </a>
            <p>{{item.introduction}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <el-pagination class="pagination" @current-change="changePage" :page-size="pagination.pageSize" :current-page.sync="pagination.pageIndex" layout="total, prev, pager, next" :total="pagination.total">
    </el-pagination>

  </div>
</template>

<script>

import detail from './blogDetail'

export default {
  data() {
    return {
      pagination: {
        pageIndex: 1,
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
        path: '/BlogHome/BlogEditor',
        query: {
          type: 'add',
          postId: 0
        }
      })
    },
    changePage(page) {
      this.pagination.pageIndex = page
      this.getBlogWithPagniation(this.pagination.pageSize, this.pagination.pageIndex)
    },
    linkToDetail(postId) {
      this.$router.replace({
        path: '/BlogHome/BlogDetail',
        query: {
          postId: postId
        }
      })
    },
    handleCommand(cmd) {
      if (cmd[0] == 'edit') {
        this.$router.replace({
          path: '/BlogHome/BlogEditor',
          query: {
            type: 'edit',
            postId: cmd[1]
          }
        });
      }
      else if (cmd[0] == 'delete') {
        this.deleteBlog(cmd[1], cmd[2]);
      } else {

      }
    },
    deleteBlog(id, index) {
      this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          target: '.timeline',
          method: 'post',
          url: '/Post/DeletePost/' + id,
        }).then(res => {
          this.$message({
            type: 'success',
            message: res.message
          });
          this.getBlogWithPagniation(this.pagination.pageSize, this.pagination.pageIndex);
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    getBlogWithPagniation(size, index) {
      this.$http({
        target: '.timeline',
        url: '/Blog/GetBlogWithPagniation',
        params: {
          userName: window.localStorage.getItem('user_name'),
          pageSize: size,
          pageIndex: index
        }
      }).then(res => {

        if (res.data != null) {
          window.localStorage.setItem("blog", JSON.stringify(res.data.blog))
          this.posts = res.data.posts
          this.pagination.total = res.data.total
        }

      }).catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
  },
  activated() {
    this.getBlogWithPagniation(this.pagination.pageSize, this.pagination.pageIndex)
  },
}
</script>

<style>
.blog {
  height: 100%;
  text-align: left;
}

.pagination {
  position: relative;
  bottom: 0px;
  left: 20%;
  width: 100px;
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

.blogHeader {
  font-size: 21px;
  margin-top: 10px;
  margin-left: 400px;
}

.headerbtn {
  float: right;
  margin-top: -3px;
  margin-right: 380px;
}
</style>
