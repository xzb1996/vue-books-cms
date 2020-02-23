<template>
  <div class="pagination">
    <el-pagination
      :background="background"
      :layout="layout"
      :total="total"
      :page-size.sync="pageSize"
      :current-page.sync="currentPage"
      :page-sizes="pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
// layout 组件布局，子组件名用逗号分隔 'prev, pager, next, jumper, ->, total'
// page-size 每页显示条目个数，支持 .sync 修饰符 10
// total 总条目数 --
// current-page 当前页数，支持 .sync 修饰符 1
// page-sizes 每页显示个数选择器的选项设置 [10, 20, 30, 40, 50, 100]
export default {
  name: "Pagination",
  props: {
    background: {
      type: Boolean,
      default: true
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    total: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    // 为什么用 return
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50];
      }
    }
  },
  // 计算属性（高级），通过getter/setter实现对属性数据的显示和监视
  // 计算属性存在缓存，多次读取只执行一次getter计算
  // getter：属性的get方法    setter：属性的set方法
  computed: {
    currentPage: {
      // 回调函数，当需要读取当前属性值时回调，根据相关的数据计算返回当前属性的值
      get() {
        return this.page;
      },
      // 回调函数，监视当前属性值的变化，当属性值发生改变时毁掉，更新相关的属性数据
      set(val) { //val 为currentPage的最新属性值
        this.$emit("update:page", val);
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      }
    }
  },
  methods: {
    //   pageSize 改变时会触发 回调函数 （每页条数）
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
    },
    // currentPage 改变时会触发 回调函数 （当前页）
    handleCurrentChange(val) {
      //   console.log(val, "（当前页）");
      this.$emit("pagination", { page: val, limit: this.pageSize });
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  color: #fff;
  padding: 30px 15px;
}
</style>