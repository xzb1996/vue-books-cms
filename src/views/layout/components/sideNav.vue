<template>
  <div class="side-nav">
    <!-- 标头 -->
    <div class="logo-wrapper clear">
      <img src="@/assets/head1.jpg" alt="logo" />
      <span>XXX管理系统</span>
    </div>
    <!-- 路由列表 -->
    <div class="menu-wrapper">
      <el-menu
        :default-active="$route.path"
        :unique-opened="true"
        router
        background-color="#2F4056"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <template v-for="(item, index) in routers">
          <el-menu-item
            v-if="!item.hidden && item.leaf && item.children.length > 0"
            :index="item.path + '/' + item.children[0].path"
            :key="index"
            ><i :class="item.children[0].meta.icon"></i
            >{{ item.children[0].meta.title }}</el-menu-item
          >
          <el-submenu
            :index="item.path"
            v-if="!item.hidden && !item.leaf && item.children.length > 0"
            :key="index"
          >
            <template slot="title"
              ><i :class="item.meta.icon"></i>{{ item.meta.title }}</template
            >
            <template v-for="child in item.children">
              <el-menu-item
                :index="item.path + '/' + child.path"
                :key="child.path"
                v-if="!child.hidden"
                >{{ child.meta.title }}</el-menu-item
              >
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      routers: []
    };
  },
  created() {
    this.routers = this.$router.options.routes;
  },
  computed: {
    // ...mapGetters(["router","isCollapse"])
  },
  method: {}
};
</script>

<style lang="scss" scoped></style>
