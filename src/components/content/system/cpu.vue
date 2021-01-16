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

import * as signalR from '@microsoft/signalr'


export default {
  data() {
    return {
      connection: null,
      cpuData: [{ key: '核心', value: '1' }, { key: '使用量', value: '' }]
    }
  },
  mounted() {

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat',
        {
          accessTokenFactory: () => localStorage.getItem('user_access_token')
        })
      .build();

    this.connection.on('setCpuValue', x => {
      this.cpuData[1].value = x
    })

    this.connection.start().then((result) => {
      this.connection.invoke('GetCpuValue');
    }).catch((err) => {

    });


  },
}
</script>

<style>
#cpu {
  width: 49%;
}
</style>