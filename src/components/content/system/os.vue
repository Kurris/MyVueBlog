<template>
  <div id="os">
    <el-card class="box-card">
      <div slot="header">
        <span>服务器信息</span>
      </div>

      <el-table :data="osData" style="width:100%" :show-header="false">
        <el-table-column prop="a"></el-table-column>
        <el-table-column prop="b"></el-table-column>
        <el-table-column prop="c"></el-table-column>
        <el-table-column prop="d"></el-table-column>
      </el-table>

    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      osData: [{
        a: '服务器名称', b: 'ligy', c: '操作系统', d: 'unix'
      }, {

      }]
    }
  },
}
</script>

<style>
#os {
  width: 99%;
}
</style>