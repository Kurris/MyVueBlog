<template>
  <div class="blog">
    <div v-if="blogDatas.length==0">
      <h1>没有数据</h1>
    </div>
    <div v-else>
      <h1>有数据</h1>
    </div>

    <el-pagination
      class="pagination"
      @current-change="changePage"
      :page-size="pageSize"
      :current-page.sync="currentPage"
      layout="total, prev, pager, next"
      :total="total"
    > </el-pagination>

  </div>
</template>

<script>
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
}

.pagination {
  position: absolute;
  bottom: 0px;
  left: 20%;
}
</style>
