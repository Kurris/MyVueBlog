<template>
  <div id="backend">

    <el-tabs tab-position="left" type="border-card">

      <el-tab-pane label="服务器信息">
        <server />
      </el-tab-pane>

      <el-tab-pane label="用户管理">
        <user />
      </el-tab-pane>
      <el-tab-pane label="博客审核">

      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
import server from './server/server.vue'
import user from './user/user.vue'

export default {
  name: 'backend',
  components: {
    server, user
  },
}
</script>

<style>
.el-card {
  margin-bottom: 20px;
}
</style>