<template>
  <div class="readers-record">
    <!-- 表单 -->
    <el-form :inline="true" :model="formData">
      <el-col :span="24" style="padding:20px 0 0 20px;">
        <el-form-item>
          <el-date-picker
            v-model="formData.borrowStart"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="借书时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="formData.borrowEnd"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="归还时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
          <el-button type="primary" @click="backUpsExcel">导出</el-button>
        </el-form-item>
      </el-col>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" border fit @selection-change="selectChange">
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column
        label="序号"
        width="60"
        align="center"
        type="index"
      ></el-table-column>
      <el-table-column label="书名" align="center" width="170">
        <template slot-scope="scope">
          <span>《 {{ scope.row.bookName }} 》</span>
        </template>
      </el-table-column>
      <el-table-column label="借书人" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.borrowName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出版社" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bookPublishingHouse }}</span>
        </template>
      </el-table-column>
      <el-table-column label="借书时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.borrowStart }}</span>
        </template>
      </el-table-column>
      <el-table-column label="还书时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.borrowEnd }}</span>
          <!-- <span v-if="scope.row.userType == '0'">普通用户</span>
          <span v-if="scope.row.userType == '1'">管理员</span> -->
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <Pagination
      v-show="total > 0"
      :total="total"
      :page.sync="formData.page"
      :limit.sync="formData.limit"
      @pagination="getBorrowLog"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getBorrowLog, excelExport } from "@/api/library-manage";

export default {
  name: "readersRecord",
  components: {
    Pagination
  },
  data() {
    return {
      formData: {
        borrowStart: "",
        borrowEnd: "",
        limit: 10,
        page: 1
      },
      selected: [],
      tableData: [],
      total: 0
    };
  },
  methods: {
    // 多选
    selectChange(data) {
      this.selected = data;
    },
    // 搜索
    onSubmit() {
      this.formData.page = 1;
      this.getBorrowLog();
    },
    async getBorrowLog() {
      let res = await getBorrowLog(this.formData);
      this.tableData = res.data;
      this.total = res.total;
    },
    // 导出
    backUpsExcel() {
      excelExport()
        .then(res => {
          // 这里后端需要对data数据进行解析
          let blob = new Blob([res.data], {
            type: "application/vnd.ms-excel"
          });
          let fileName = "excel.xls";
          let elink = document.createElement("a");
          elink.download = fileName;
          elink.style.display = "none";
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href);
          document.body.removeChild(elink);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.readers-record {
  height: 100%;
  background: #fff;
  margin: 15px 20px 0;
  padding: 15px 20px 0;
}
</style>
