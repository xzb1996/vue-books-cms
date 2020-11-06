<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      @keyup.enter.native="signIn"
      class="login-container"
    >
      <h3 class="login-title">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <div class="login-remember">提示：用户名admin，密码123456</div>
      <el-checkbox v-model="remember" checked class="login-remember"
        >记住密码</el-checkbox
      >
      <el-form-item>
        <el-button class="signin-button" type="primary" @click="signIn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { MessageNotice } from "@/utils/notice";
import { getUserList } from "@/api/login";
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      remember: false,
      loginRules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    signIn() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 将用户名和密码进行存储
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(res => {
              console.log(res,'res')
              if (res.result === 1) {
                MessageNotice("success", res.message);
                this.$router.push("/home");
              } else {
                MessageNotice("error", res.message);
              }
            })
            .catch(() => {
              console.log("error submit!!");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url(~@/assets/bg.jpg) no-repeat center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .login-container {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border: 1px solid #555050;
    border-radius: 8px;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cac6c6;
    .login-title {
      font-size: 18px;
      margin: 0px auto 20px auto;
      text-align: center;
      color: #c9daec;
    }
    .login-remember {
      color: #c9daec;
      margin-bottom: 10px;
    }
    .signin-button {
      width: 100%;
    }
  }
}
</style>
