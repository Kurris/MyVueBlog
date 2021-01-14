<template>
  <div id="bloghome">
    <el-container>

      <el-container>

        <el-aside width="auto">
          <el-menu :default-active="this.$route.path" class="el-menu" :collapse="true" :router="true" @select="handleSelect">
            <el-menu-item index="/BlogHome/Square">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">广场</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="/BlogHome/Profile" class="profile">
              <i class="el-icon-user"></i>
              <span slot="title">个人资料</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            <img :src="img" alt="" style="z-index:-9; position: absolute;">
            <el-backtop :right="360" :bottom="100">
            </el-backtop>

            <keep-alive>
              <router-view />
            </keep-alive>

          </el-main>
        </el-container>

      </el-container>

      <el-footer style="height:30px;text-align: center;padding:5px;">{{ new Date().getFullYear() }} 粤ICP备2020126033号</el-footer>

    </el-container>

  </div>
</template>

<script>

export default {
  data() {
    return {
      img: this.$store.state.backgroundImg,
      isCollapse: true,
      currentPath: '/BlogHome/Square'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  },
  created() {
    if (this.currentPath != this.$route.path) {
      this.$router.replace(this.currentPath)
    }
  }
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
}
.el-menu {
  height: 100%;
}

.el-aside {
  background-color: red;
}

.profile {
  position: absolute;
  width: 100%;
  bottom: 0px;
}

#bloghome,
.el-container {
  height: 100%;
}

.el-footer {
  background-color: rosybrown;
}
</style>