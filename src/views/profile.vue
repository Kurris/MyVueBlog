<template>
  <div id="profile">
    <el-avatar :size="100" :src="profile.avatarUrl"></el-avatar>

    <div class="info" style="text-align: left">
      <p class="name" style="font-size: 20px; font-weight: bold"> {{ profile.name }}</p>

      <p class="separated">phone: {{ profile.phone }}</p>
      <p class="separated">email: {{ profile.email }}</p>
      Github:
      <el-link class="separated" :href="profile.githubUrl" target="_blank" type="primary">{{ profile.githubUrl }}</el-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {},
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
    }).then(res => {
      if (res.status == 1000) {
        window.localStorage.setItem("user_access_token", res.data.token);

        return this.$http({
          url: '/Profile/GetProfile',
          params: {
            name: 'ligy'
          }
        });
      }
    }).then(res => {
      this.profile = res.data;
    });
  },
}
</script>

<style>
#profile {
  position: absolute;
  background-color: rgb(238, 241, 228);
  left: 20px;
  top: 155px;
  height: 765px;
  width: 350px;
  box-shadow: 0 0 20px -2px rgb(214, 230, 161);
}
.separated {
  margin-top: 4px;
  margin-bottom: 4px;
}

.name {
  margin-bottom: 20px;
}

.info {
  margin-top: 40px;
}
</style>
