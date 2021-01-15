<template>
  <div id="bloghome">
    <el-container>

      <el-container>

        <el-aside width="auto">
          <el-menu :default-active="currentPath" :collapse="true" router @select="handleSelect">
            <el-menu-item index="/BlogHome/Square">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">广场</span>
            </el-menu-item>
            <el-menu-item index="/BlogHome/Profile" class="profile">
              <i class="el-icon-user"> </i>
              <span slot="title">我的博客</span>
            </el-menu-item>

            <el-menu-item index="/BlogHome/Backend" style="bottom:56px;position:absolute;width:100%;">
              <i class="el-icon-s-grid"></i>
              <span slot="title">后台</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            <el-backtop :right="360" :bottom="100">
            </el-backtop>

            <keep-alive exclude="profile">
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
      isCollapse: true,
      currentPath: '/BlogHome/Backend'
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
  box-shadow: 0 0 20px -2px rgb(220, 235, 240);
}
.el-menu {
  height: 100%;
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
  background-color: rgb(220, 235, 240);
}
</style>