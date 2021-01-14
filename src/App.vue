<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import router from './router/index'

export default {
  router,
  name: 'App',
}
</script>

<style>
@import "./assets/css/base.css";

html,
body,
#app {
  margin: 0px;
  padding: 0px;
  height: 100%;
  overflow-x: hidden;
}
</style>
