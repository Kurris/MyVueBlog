<template>
  <div id="profile">
    <el-card>
      <div v-if="profile.name!=''">

        <el-avatar :size="250" style="margin-top:10px;" :src="profile.avatarUrl"></el-avatar>
        <div style="text-align: center;">
          <p style="font-size: 30px; font-weight: bold ; margin-bottom:40px;text-align:left"> {{ profile.name }}</p>

          <el-button style="margin-bottom:20px;width: 250px;">编辑</el-button>

          <div style="width:250px;text-align:center;position: relative; ">
            <p v-if="profile.phone!=''">phone: {{ profile.phone }}</p>

            <p v-if="profile.email!=''">email:
              <el-link target="_top" :href="'mailto:'+profile.email" type="primary">{{profile.email}}</el-link>
            </p>

            <span v-if="profile.githubUrl!=''">Github:</span>
            <el-link v-if="profile.githubUrl!=''" :href="profile.githubUrl" target="_blank" type="primary">{{ profile.githubUrl }}</el-link>
          </div>

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
</style>
