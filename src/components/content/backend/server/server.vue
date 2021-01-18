<template>
  <div id="server">
    <cpu :cpuMetrics="AllMetrics.cpu" />
    <memory :memoryMetrics="AllMetrics.memory" />
    <os :osMetrics="{
      machineName: AllMetrics.machineName,
      platform: AllMetrics.platform,
      version: AllMetrics.version,
      is64: AllMetrics.is64,
      runTime: AllMetrics.runTime
    }" />

  </div>
</template>

<script>
import * as signalR from '@microsoft/signalr'

import cpu from './cpu'
import memory from './memory'
import os from './os'

export default {
  data() {
    return {
      connection: null,
      AllMetrics: {}
    }
  },
  components: {
    cpu, memory, os
  },

  mounted() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/System', {
        accessTokenFactory: () => localStorage.getItem('user_access_token')
      })
      .build();

    this.connection.on('setOSMetrics', x => {
      this.AllMetrics = x;
    });

      this.connection.onDiss

    this.connection.start().then(res => {
      this.connection.invoke('GetOSMetrics')
    });
  },
}
</script>

<style>
/* #server {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
} */
</style>