<template>
  <div class="personal-center">
    个人中心
    <div class="personal-box">
      <div class="paersonal-box-left">
        <h3>基本信息</h3>
        <div class="userInfo">
          <el-form :model="userInfo" ref="userInfo" label-width="80px" disabled>
            <el-form-item prop="username" label="姓名">
              <el-input type="text" v-model="userInfo.username"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱">
              <el-input type="text" v-model="userInfo.email"></el-input>
            </el-form-item>
            <el-form-item prop="individualResume" label="个人简介">
              <el-input
                type="textarea"
                v-model="userInfo.individualResume"
              ></el-input>
            </el-form-item>
            <el-form-item prop="address" label="地址">
              <el-input type="text" v-model="userInfo.address"></el-input>
            </el-form-item>
            <el-form-item prop="iphone" label="联系方式">
              <el-input type="text" v-model="userInfo.iphone"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "personalCenter",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  created() {
    if (JSON.stringify(this.userInfo) === '{}') {
      this.getInfo();
    }
  },
  methods: {
    ...mapActions({
      getInfo: "user/getInfo"
    })
  }
};
</script>

<style lang="scss" scoped>
.personal-center {
  width: 100%;
  height: 100%;
  background: #cc7;
  .personal-box {
    height: 80%;
    margin: 50px 20px 0;
    overflow: hidden;
    .paersonal-box-left {
      height: 100%;
      h3 {
        text-align: center;
        padding: 10px 0;
        font-size: 22px;
      }
      .userInfo {
        padding: 20px 10px;
        overflow: hidden;
      }
    }
  }
}
</style>
