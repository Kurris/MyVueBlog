<template>
  <div class="blog">
    <el-timeline class="timeline">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <el-link href="https://element.eleme.io" target="_blank">title</el-link>
          <p>content</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <detail />
    <el-pagination class="pagination" @current-change="changePage" :page-size="pageSize" :current-page.sync="currentPage" layout="total, prev, pager, next" :total="total"> </el-pagination>

  </div>
</template>

<script>

import detail from './blogDetail'

export default {
  data() {
    return {
      currentPage: 6,
      pageSize: 5,
      total: 302,
      blogDatas: [
        {
          a: 1
        }
      ]
    }
  },
  components: {
    detail
  },
  methods: {
    changePage(page) {
      alert(page);
      this.total = 400;
    },
  }
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
</style>
