<template>
  <div id="container">
    <profile />
    <div id="content">
      <el-backtop :right="360" :bottom="100">
      </el-backtop>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import profile from '../components/content/profile/profile'
import http from '../network/index'

export default {
  data() {
    return {
      currentPath: '/BlogHome/Blog',
    }
  },
  components: {
    profile,
  },
  created() {
    if (this.$route.path != this.currentPath) {
      this.$router.replace(this.currentPath);
    }
  },
}
</script>

<style>
#content {
  position: absolute;
  width: 950px;
  min-height: 765px;
  top: 155px;
  margin-left: 400px;
  box-shadow: 0 0 20px -2px rgb(224, 241, 165);
  /* padding-bottom: 100px; */
}
</style>