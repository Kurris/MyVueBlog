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
  props: {
    osMetrics: {
      machineName: '',
      platform: '',
      version: '',
      is64: false,
      runTime: ''
    }
  },
  data() {
    return {
      osData: [
        { a: '服务器名称:', b: '', c: '平台:', d: '' },
        { a: '运行时长:', b: '', c: '系统位数:', d: '' },
        { a: '版本:', b: '', },
      ]
    }
  },
  watch: {
    osMetrics(val) {
      this.osData[0].b = val.machineName
      this.osData[0].d = val.platform
      this.osData[1].b = val.runTime
      this.osData[1].d = val.is64 ? '64' : '32'
      this.osData[2].b = val.version
    }
  }
}
</script>

<style>
#os {
  width: 99%;
}
</style>