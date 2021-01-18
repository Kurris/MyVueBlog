<template>
  <div id="memory">
    <el-card class="box-card">
      <div slot="header">
        <span>内存</span>
      </div>

      <el-table :data="memoryData" style="width:100%" :show-header="false">
        <el-table-column prop="key" label="属性"></el-table-column>
        <el-table-column prop="value" label="值"></el-table-column>
      </el-table>

    </el-card>
  </div>
</template>

<script>


export default {
  props: {
    memoryMetrics: {
      total: '',
      free: '',
      used: ''
    }
  },
  data() {
    return {
      memoryData: [
        { key: '总量:', value: '0 GB' },
        { key: '空闲:', value: '0 GB' },
        { key: '使用率:', value: '0 %' }]
    }
  },
  watch: {
    memoryMetrics(val) {
      this.memoryData[0].value = val.total
      this.memoryData[1].value = val.free
      this.memoryData[2].value = val.used
    }
  }
}
</script>

<style>
#memory {
  /* width: 49%; */
  width: 99%;
}
</style>