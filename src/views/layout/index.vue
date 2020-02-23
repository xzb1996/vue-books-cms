<template>
  <div class="layout">
    <SideNav></SideNav>
    <div class="container-wrapper">
      <TopBar></TopBar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import SideNav from "./components/sideNav";
import TopBar from "./components/topBar";
import AppMain from "./components/appMain";
export default {
  name: "layout",
  data() {
    return {};
  },
  computed: {},
  components: {
    SideNav,
    TopBar,
    AppMain
  }
};
</script>

<style scoped lang="scss">
.layout {
  // position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  .container-wrapper {
    flex: 1;
    transition: margin-left 0.28s;
    min-height: 100%;
    overflow: hidden;
    background-color: #eee;
  }
}
</style>
