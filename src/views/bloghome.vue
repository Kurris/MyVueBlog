<template>
  <div id="bloghome">
    <el-container>
      <el-container>
        <el-aside width="auto">
          <el-menu default-active="1-4-1" class="el-menu" @open="handleOpen" @close="handleClose" collapse>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title"></span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" class="profile">
              <i class="el-icon-user"></i>
              <span slot="title">个人资料</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-footer style="height:30px;text-align: center;padding:5px;">{{ new Date().getFullYear() }} 粤ICP备2020126033号</el-footer>
    </el-container>

    <!-- <profile />
    <div id="content">
      <el-backtop :right="360" :bottom="100">
      </el-backtop>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div> -->

  </div>
</template>

<script>
import profile from '../components/content/profile/profile'
import http from '../network/index'

export default {
  data() {
    return {
      isCollapse: true,
      activeIndex: -1,
      currentPath: '/BlogHome/Blog',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>