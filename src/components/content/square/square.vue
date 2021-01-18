<template>
  <div id="square">

    <div class="square-main">
      <el-card class="square-profile">

      </el-card>

      <div class="square-content">
        <el-card></el-card>
        <el-card style="margin-top:5px;"> </el-card>
      </div>

      <div style="margin-left: 20px; width: 300px;">
        <el-card class="square-borad">

        </el-card>
        <el-card class="square-hot">

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
</style>