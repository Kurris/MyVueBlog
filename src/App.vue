<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/header'
import Footer from './components/common/footer'

import router from './router/index'

export default {
  router,
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
@import "./assets/css/base.css";

.elheader {
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 15px;
}

html,
body {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
