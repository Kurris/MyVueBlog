<template>
  <div id="profile">
    <div v-if="profile.name!=''">
      <el-avatar :size="150" :src="profile.avatarUrl"></el-avatar>

      <div class="info">
        <p style="font-size: 20px; font-weight: bold"> {{ profile.name }}</p>

        <p v-if="profile.phone!=''" class="separated">phone: {{ profile.phone }}</p>
        <p v-if="profile.email!=''" class="separated">email: {{ profile.email }}</p>
        <span v-if="profile.githubUrl!=''">Github:</span>
        <el-link v-if="profile.githubUrl!=''" class=" separated" :href="profile.githubUrl" target="_blank" type="primary">{{ profile.githubUrl }}</el-link>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      profile: {
        avatarUrl: '',
        name: '',
        phone: '',
        email: '',
        githubUrl: '',
      },
    }
  },
  created() {

    this.$http({
      url: '/Profile/GetProfile',
      params: {
        name: window.localStorage.getItem('user_name')
      }
    }).then(res => {
      if (res.data != null) this.profile = res.data
    })
  },
}
</script>

<style>
#profile {
  position: absolute;
  text-align: center;
  height: 765px;
  width: 350px;
  box-shadow: 0 0 20px -2px rgb(214, 230, 161);
}
</style>
