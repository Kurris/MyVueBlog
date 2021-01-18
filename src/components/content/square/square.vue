<template>
  <div id="square">

    <div class="square-main">
      <el-card class="square-profile">
        <el-avatar src="" :size="50" />
        Ligy
        <div class="square-profile-detail">
          <div>
            <p><b>12</b></p>
            关注
          </div>
          <div>
            <p><b>5</b></p>
            粉丝
          </div>
          <div>
            <p><b>3</b></p>
            动态
          </div>
        </div>
      </el-card>
      <p>

      <div class="square-content">
        <el-card></el-card>
        <el-card style="margin-top:5px;display: flex;position: absolute;">
          <div>全部</div>
          <div>动态</div>
        </el-card>
      </div>

      <div style="margin-left: 20px; width: 300px;">
        <el-card class="square-borad">
          <b>公告板</b>
          <div style="margin-top:20px">
            content
          </div>
        </el-card>
        <el-card class="square-hot">
          <b>话题</b>
          <a href="#"><span style="float:right">more</span></a>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
}
</script>

<style>
#square {
  /* flex-wrap: wrap;
  justify-content: space-around; */
}

.square-main {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  height: 92%;
}

.square-profile {
  margin-right: 20px;
  height: 20%;
  width: 300px;
  text-align: left;
}

.square-content {
  width: 600px;
  background-color: rgb(228, 222, 222);
}
.square-borad {
  height: 200px;
}
.square-hot {
  margin-top: 20px;
  height: 500px;
}

.square-profile-detail {
  display: flex;
  position: absolute;
  background-color: red;
  text-align: center;
}

.square-profile-detail div {
  margin: 20px;
}

.square-profile-detail div p {
  margin-bottom: 20px;
}
</style>