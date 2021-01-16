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

import * as signalR from '@microsoft/signalr'

export default {
  data() {
    return {
      connection: null,
      memoryData: [{ key: '内存总量', value: '16' }, { key: '使用量', value: '2' }]
    }
  },
  mounted() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat',
        {
          accessTokenFactory: () => localStorage.getItem('user_access_token')
        })
      .build();

    this.connection.on('setMemoryValue', x => {
      this.memoryData[1].value = x
    });

    this.connection.start().then(res => {
      this.connection.invoke('GetMemoryValue')
    })

  },
}
</script>

<style>
#memory {
  width: 49%;
}
</style>