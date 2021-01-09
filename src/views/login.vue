<template>
  <div id="login">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="userName">
        <el-input type="text" placeholder="请输入账号" v-model.lazy="form.userName" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model.lazy="form.password" @keyup.enter.native="onSubmit('loginForm')" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')" :disabled="!disBtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disBtn: true,
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    onSubmit(form) {

      this.$refs[form].validate(res => {
        if (res) {
          this.disBtn = false
          this.$http({
            method: 'post',
            url: '/User/Login',
            data: {
              userName: this.form.userName,
              password: this.form.password
            }
          }).then(res => {
            if (res.status == 1000) {

              window.localStorage.setItem("user_access_token", res.data.token);
              window.localStorage.setItem("user_name", res.data.userName);

              this.$message({
                type: 'success',
                message: '登录成功'
              })

              this.$router.replace('/BlogHome')
            } else {
              this.$message({
                type: 'warning',
                message: res.message
              })
            }
            this.disBtn = true;
          }).catch(err => {
            window.localStorage.setItem("user_access_token", '');
            window.localStorage.setItem("user_name", '');
            this.disBtn = true;

            this.$message({
              type: 'error',
              message: err
            })
          })

        } else {
          this.$message({
            type: 'warning',
            message: '请检查账号密码是否为空'
          })
        }
      })
    }
  },
}
</script>

<style>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>