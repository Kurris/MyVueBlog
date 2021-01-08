<template>
  <div id="app">
    <Header />
    <Profile />
    <div id="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/header'
import Footer from './components/common/footer'
import Profile from './views/profile'

import router from './router/index'

export default {
  router,
  name: 'App',
  components: {
    Header,
    Profile,
    Footer,
  },
}
</script>

<style>
@import "./assets/css/base.css";

.elheader {
  font-family: sans-serif;
  margin-bottom: 30px;
}

#content {
  position: absolute;
  width: 950px;
  height: 765px;
  top: 155px;
  margin-left: 400px;
  box-shadow: 0 0 20px -2px rgb(224, 241, 165);
}
</style>
