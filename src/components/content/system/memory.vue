<template>
  <div id="memory">
    <el-card class="box-card">
      <div slot="header">
        <span>内存</span>
      </div>

      <el-table :data="memoryData" style="width:100%">
        <el-table-column prop="key" label="属性"></el-table-column>
        <el-table-column prop="value" label="值"></el-table-column>
      </el-table>

    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      memoryData: [{ key: '内存总量', value: '16' }, { key: '使用量', value: '2' }]
    }
  },
}
</script>

<style>
#memory {
  width: 49%;
}
</style>