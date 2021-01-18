<template>
  <div id="user">
    <el-card>
      <el-table :data="user">

        <el-table-column prop="userName" label="用户账号"></el-table-column>
        <el-table-column prop="email" label="邮件地址"> </el-table-column>
        <el-table-column prop="phone" label="电话号码"></el-table-column>
        <el-table-column prop="lastLogin" label="最近登录时间"></el-table-column>

        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="danger" @click="deleteRow(scope.row)" size="mini">删除 </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination @current-change="changePage" :page-size="pagination.pageSize" :current-page.sync="pagination.pageIndex" layout="total, prev, pager, next" :total="pagination.total">
      </el-pagination>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      pagination: {
        pageIndex: 1,
        pageSize: 2,
        total: 0,
      },
    }
  },
  methods: {
    changePage(index) {
      this.pagination.index = index;
      this.refresh(this.pagination.pageSize, this.pagination.index)
    },
    deleteRow(row) {
      console.log(row);
    },
    refresh(size, index) {
      this.$http({

        url: '/User/GetUserWithPagination',
        params: {
          pageSize: size,
          pageIndex: index
        }
      }).then(res => {

        this.pagination.total = res.data.total
        this.user = res.data.data
      })
    }
  },
  mounted() {
    this.refresh(this.pagination.pageSize, this.pagination.pageIndex)
  },
}
</script>

<style>
</style>