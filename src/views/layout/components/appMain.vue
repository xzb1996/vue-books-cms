<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "appMain",
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.app-main {
  position: relative;
  padding-top: 60px;
  height: 100%;
  overflow: auto;
}
</style>
