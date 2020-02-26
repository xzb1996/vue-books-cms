<template>
  <div class="personal-center">
    个人中心
    <div class="personal-box">
      <div class="paersonal-box-left">
        个人信息
      </div>
      <div class="paersonal-box-right">
        账号信息
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalCenter"
};
</script>

<style lang="scss" scoped>
.personal-center {
  width: 100%;
  height: 100%;
  background: #cc7;
  .personal-box {
    height: 80%;
    margin:50px 20px 0;
    overflow:hidden;
    .paersonal-box-left {
      width: 20%;
      height: 100%;
      background: #c7c;
      float: left;
    }
    .paersonal-box-right {
      width: 75%;
      height: 100%;
      background: #6cc;
      float: right;
    }
  }
}
</style>
