<template>
  <div id="profile">
    <el-avatar :size="100" :src="profile.avatarUrl"></el-avatar>

    <div class="info" style="text-align: left">
      <p class="name" style="font-size: 20px; font-weight: bold"> {{ profile.name }}</p>

      <p v-if="profile.phone" class="separated">phone: {{ profile.phone }}</p>
      <p v-if="profile.email!=''" class="separated">email: {{ profile.email }}</p>
      Github:
      <el-link v-if="profile.githubUrl!=''" class=" separated" :href="profile.githubUrl" target="_blank" type="primary">{{ profile.githubUrl }}</el-link>
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
        this.$store.state.userName = res.data.userName;

        return this.$http({
          url: '/Profile/GetProfile',
          params: {
            name: res.data.userName
          }
        });
      }
    }).then(res => {
      this.profile = res.data;

      return this.$http({
        url: '/Blog/GetBlog',
        params: {
          userName: this.$store.state.userName
        }
      })

    }).then(res => {
      this.$store.state.blogId = res.data.blogId
      console.log(this.$store.state.blogId);
    }).catch(err => {
      window.localStorage.setItem("user_access_token", '');
    });
  },
}
</script>

<style>
#profile {
  position: absolute;
  background-color: rgb(238, 241, 228);
  text-align: center;
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
