<template>
  <div class="books-record">
    <!-- 表单 -->
    <el-form :inline="true" :model="formData">
      <el-col :span="24" style="padding:20px 0 0 20px;">
        <el-form-item>
          <el-input
            v-model="formData.name"
            placeholder="书名"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">添加</el-button>
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
      <el-table-column label="作者" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bookAuthor }}</span>
        </template>
      </el-table-column>
      <el-table-column label="出版社" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bookPublishingHouse }}</span>
        </template>
      </el-table-column>
      <el-table-column label="价格/元" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bookPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column label="存货/本" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.bookInventory }}</span>
          <!-- <span v-if="scope.row.userType == '0'">普通用户</span>
          <span v-if="scope.row.userType == '1'">管理员</span> -->
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleDel(scope.$index, tableData)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      v-show="total > 0"
      :total="total"
      :page.sync="formData.page"
      :limit.sync="formData.limit"
      @pagination="getBooksList"
    />
    <!--新增界面-->
    <el-dialog title="编辑" :visible.sync="addFormVisible">
      <el-form :model="addForm" label-width="80px" ref="addForm">
        <el-form-item label="书名" prop="bookName">
          <el-input v-model="addForm.bookName"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="bookAuthor">
          <el-input v-model="addForm.bookAuthor"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="bookPublishingHouse">
          <el-input v-model="addForm.bookPublishingHouse"></el-input>
        </el-form-item>
        <el-form-item label="价格/元" prop="bookPrice">
          <el-input v-model="addForm.bookPrice"></el-input>
        </el-form-item>
        <el-form-item label="存货/本" prop="bookInventory">
          <el-input v-model="addForm.bookInventory"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addClick">确定</el-button>
      </div>
    </el-dialog>
    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible">
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="书名" prop="bookName">
          <el-input v-model="editForm.bookName"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="bookAuthor">
          <el-input v-model="editForm.bookAuthor"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="bookPublishingHouse">
          <el-input v-model="editForm.bookPublishingHouse"></el-input>
        </el-form-item>
        <el-form-item label="价格/元" prop="bookPrice">
          <el-input v-model="editForm.bookPrice"></el-input>
        </el-form-item>
        <el-form-item label="存货/本" prop="bookInventory">
          <el-input v-model="editForm.bookInventory"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editClick">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getBooksList } from "@/api/library-manage";

export default {
  name: "booksRecord",
  components: {
    Pagination
  },
  data() {
    return {
      formData: {
        name: "",
        limit: 10,
        page: 1
      },
      addForm: {
        bookName: "",
        bookAuthor: "",
        bookPublishingHouse: "",
        bookPrice: "",
        bookInventory: ""
      },
      editForm: {
        bookName: "",
        bookAuthor: "",
        bookPublishingHouse: "",
        bookPrice: "",
        bookInventory: ""
      },
      selected: [],
      tableData: [],
      total: 0,
      addFormVisible: false, // 弹窗
      editFormVisible: false
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
      this.getBooksList();
    },
    // 新增
    handleAdd() {
      this.addForm = {
        bookName: "",
        bookAuthor: "",
        bookPublishingHouse: "",
        bookPrice: "",
        bookInventory: ""
      };
      this.addFormVisible = true;
    },
    // 编辑
    handleEdit(row) {
      this.editForm = Object.assign({}, row);
      this.editFormVisible = true;
    },
    // 删除
    handleDel(index, row) {
      this.$confirm("确定删除吗？", "提示", {}).then(() => {
        row.splice(index, 1);
        this.$message({
          message: "删除成功",
          type: "success"
        });
      });
    },
    async getBooksList() {
      let res = await getBooksList(this.formData);
      this.tableData = res.data;
      this.total = res.total;
    },
    // 添加确定
    addClick() {
      this.$confirm("确认提交吗？", "提示", {}).then(() => {
        this.tableData.push(this.addForm);
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.addFormVisible = false;
      });
    },
    // 编辑确定
    editClick() {
      this.$confirm("确认提交吗？", "提示", {}).then(() => {
        this.$message({
          message: "修改成功",
          type: "success"
        });
        this.editFormVisible = false;
      });
    }
  }
};
</script>
<style scoped lang="scss">
.books-record {
  height: 100%;
  background: #fff;
  margin: 15px 20px 0;
  padding: 15px 20px 0;
}
</style>
