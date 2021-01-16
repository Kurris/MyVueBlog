<template>
  <div id="backend">

    <el-tabs type="border-card">

      <el-tab-pane label="服务器信息" class="sys">
        <cpu />
        <memory />
        <os />
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
import cpu from '../components/content/system/cpu'
import memory from '../components/content/system/memory'
import user from '../components/content/system/user'
import os from '../components/content/system/os'

export default {

  components: {
    cpu, memory, user, os
  },
}
</script>

<style>
.sys {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.el-card {
  margin-bottom: 20px;
}
</style>