<template>
  <div class="top-header">
    <div class="left-wrapper">
      <el-breadcrumb separator="/">
        <transition-group name="bread" mode="out-in">
          <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{(item)}}</el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="right-wrapper">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          xzb1996
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {};
  },
  methods: {},
  computed: {
    breadcrumb() {
      let resArr = new Set(["首页"]);
      this.$route.matched.forEach(item => {
        if (item.meta && item.meta.title) {
          return resArr.add(item.meta.title);
        }
      });
      return resArr;
    }
  }
};
</script>

<style lang="scss" scoped>
.top-header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 280px);
  height: 60px;
  top: 0;
  z-index: 10;
  background: #fff;
  .left-wrapper {
    margin-left: 20px;
  }
  .right-wrapper {
    margin-right: 20px;
    .el-dropdown-link {
      overflow: hidden;
      cursor: pointer;
      color: #339999;
    }
    .el-icon-arrow-down {
      font-size: 14px;
    }
  }
}
</style>