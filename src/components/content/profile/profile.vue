<template>
  <div id="profile">
    <el-card>
      <div v-if="profile.name!=''">
        <el-avatar :size="250" style="margin-top:10px;" :src="profile.avatarUrl"></el-avatar>

        <div class="personalInfo">
          <p style="font-size: 30px; font-weight: bold ; margin-bottom:40px;text-align:left"> {{ profile.name }}</p>

          <el-button style="margin-bottom:20px">编辑</el-button>

          <p v-if="profile.phone!=''" class="separated">phone: {{ profile.phone }}</p>
          <p v-if="profile.email!=''" class="separated">email: {{ profile.email }}</p>
          <span v-if="profile.githubUrl!=''">Github:</span>
          <el-link v-if="profile.githubUrl!=''" class=" separated" :href="profile.githubUrl" target="_blank" type="primary">{{ profile.githubUrl }}</el-link>
        </div>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'profile',
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
  width: 350px;
}

.el-card {
  border-radius: 10px;
}
.el-button {
  width: 200px;
}

.personalInfo {
  text-align: center;
}
</style>
