<template>
  <div id="cpu">
    <el-card>
      <div slot="header">
        <span>CPU</span>
      </div>

      <el-table :data="cpuData" style="width: 100%">
        <el-table-column prop="key" label="属性"> </el-table-column>
        <el-table-column prop="value" label="值"> </el-table-column>

      </el-table>

    </el-card>
  </div>
</template>


<script>



export default {
  data() {
    return {
      cpuData: [{ key: '核心', value: '1' }, { key: '使用量', value: '20%' }]
    }
  }
}
</script>

<style>
#cpu {
  width: 49%;
}
</style>