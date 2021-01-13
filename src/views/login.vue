<template>
  <div id="login">
    <img :src="backgroundImg" class="img" alt="">

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

    <el-dialog title="注册信息" :visible.sync="registerVisible" width="30%" :close-on-click-modal="false">
      <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="80px">
        <el-form-item label="账号" prop="userName">
          <el-input type="text" placeholder="请输入账号名称" v-model.lazy="registerForm.userName" auto-complete="off" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model.lazy="registerForm.password" auto-complete="off" clearable />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" placeholder="请输入邮箱" v-model.lazy="registerForm.email" auto-complete="off" />
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input type="tel" placeholder="请输入手机号" v-model.lazy.number="registerForm.phone" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="register('registerForm')">确定</el-button>
        <el-button type="primary" @click="reset('registerForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    let checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
      if (!value) {
        return callback(new Error('电话号码不能为空'))
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
        // 所以我就在前面加了一个+实现隐式转换

        if (!Number.isInteger(+value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (phoneReg.test(value)) {
            callback()
          } else {
            callback(new Error('电话号码格式不正确'))
          }
        }
      }, 100)
    }
    let checkEmail = (rule, value, callback) => {
      const mailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      }, 100)
    }

    return {
      backgroundImg: '',
      registerVisible: false,
      disBtn: true,
      loginForm: {
        userName: '',
        password: ''
      },
      registerForm: {
        userName: '',
        password: '',
        email: '',
        phone: '',
      },
      loginRules: {
        userName: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      },
      registerRules: {
        userName: [{ required: true, message: '账号不可为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不可为空', trigger: 'blur' }],
        email: [{ validator: checkEmail, required: true, trigger: 'blur' }],
        phone: [{ validator: checkPhone, required: true, trigger: 'blur' }]
      }
    }
  },
  methods: {
    login(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.disBtn = false

          this.$http({
            target: '#login',
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
    register(form) {

      this.$refs[form].validate(res => {
        if (res) {

          this.$http({
            method: 'post',
            url: '/User/SignUp',
            data: {
              userName: this.registerForm.userName,
              password: this.registerForm.password,
              email: this.registerForm.email,
              phone: this.registerForm.email
            }
          }).then(result => {
            this.$message({
              type: 'success',
              message: '注册成功'
            })
            this.registerVisible = false
          })

          this.registerVisible = true;
        }
      })
    },
    reset(form) {
      this.$refs[form].resetFields();
    },
    forgetPwd() {

    }
  },
  watch: {
    registerVisible(val) {
      if (!val) {
        this.reset('registerForm')
      }
    }
  },
  created() {
    this.$http({ url: '/Bing/GetDayImage' })
      .then(res => {
        if (res.data != null) {
          this.backgroundImg = res.data;
        }
      })
  }
}
</script>

<style>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  position: absolute;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
.img {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}
</style>