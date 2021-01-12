<template>
  <div id="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="userName">
        <el-input type="text" placeholder="请输入账号" v-model.lazy="loginForm.userName" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model.lazy="loginForm.password" @keyup.enter.native="login('loginForm')" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')" :disabled="!disBtn">登录</el-button>
        <el-button type="primary" @click="registerVisible=true" :disabled="!disBtn">注册</el-button>
        <el-link type="info" style="fontSize:10px;float:right;" @click="forgetPwd" :disabled="!disBtn">忘记密码?</el-link>
      </el-form-item>
    </el-form>

    <el-dialog title="注册信息" :visible.sync="registerVisible">
      <el-form :model="registerForm">
        <el-form-item label="账号名称" label-width="100px">
          <el-input v-model="registerForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerVisible = false">取消</el-button>
        <el-button type="primary" @click="registerVisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      registerVisible: false,
      disBtn: true,
      loginForm: {
        userName: '',
        password: ''
      },
      registerForm: {
        name: '',
        region: ''
      },
      loginRules: {
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
    login(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.disBtn = false

          this.$http({
            method: 'post',
            url: '/User/Login',
            data: {
              userName: this.loginForm.userName,
              password: this.loginForm.password
            }
          }).then(result => {

            if (result.status == 1000) {

              window.localStorage.setItem("user_access_token", result.data.token);
              window.localStorage.setItem("user_name", result.data.userName);

              this.$message({
                type: 'success',
                message: '登录成功'
              })

              //跳转到主页
              this.$router.replace('/BlogHome')

            } else {
              this.$message({
                type: 'warning',
                message: result.message
              })
            }
          }).catch(err => {
            window.localStorage.setItem("user_access_token", '');
            window.localStorage.setItem("user_name", '');
          });
        }
        this.disBtn = true;
      })
    },
    register() {
      this.registerVisible = true;
    }
    ,
    forgetPwd() {
      this.$msgbox("在做了")
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