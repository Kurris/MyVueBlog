<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/common/footer'

import router from './router/index'

export default {
  router,
  name: 'App',
  components: {
    Footer,
  },
}
</script>

<style>
@import "./assets/css/base.css";

html,
body {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
