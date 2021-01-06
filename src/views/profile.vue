<template>
  <div id="profile">
    <el-avatar :size="100" :src="profile.avator"></el-avatar>
    <div>
      <p class="">222</p>
      <a :href="profile.githubUrl" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaaa: '2222',
      profile: {},
      avatorImg: ''
    }
  },
  created() {
    this.$http({
      method: 'post',
      url: '/User/Login',
      data: {
        userName: 'ligy',
        password: 'zxc111'
      }
    })
  },
}
</script>

<style>
#profile {
  position: absolute;
  background-color: rgb(238, 238, 221);
  left: 20px;
  top: 155px;
  height: 765px;
  width: 350px;
}
</style>
