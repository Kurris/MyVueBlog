<template>
  <div id="cpu">
    <el-card>
      <div slot="header">
        <span>CPU</span>
      </div>

      <el-table :data="cpuData" style="width: 100%" :show-header="false">
        <el-table-column prop="key"> </el-table-column>
        <el-table-column prop="value"> </el-table-column>
      </el-table>

    </el-card>
  </div>
</template>


<script>
export default {
  props: {
    cpuMetrics: {
      type: Object,
      required: true,
      default() {
        return {
          cpuName: '',
          coreCount: 0,
          threadCount: 0,
          used: '0%'
        }
      }
    }
  },
  data() {
    return {
      cpuData: [
        { key: 'CPU型号:', value: '' },
        { key: '核心:', value: 0 },
        { key: '线程:', value: 0 },
        { key: '使用率:', value: '' },
      ]
    }
  },
  watch: {
    cpuMetrics(val) {
      this.cpuData[0].value = val.cpuName
      this.cpuData[1].value = val.coreCount
      this.cpuData[2].value = val.threadCount
      if (val.used != '0 %')
        this.cpuData[3].value = val.used
    }
  },
}
</script>

<style>
#cpu {
  /* width: 49%; */
  width: 99%;
}
</style>