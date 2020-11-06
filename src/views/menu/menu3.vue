<template>
  <div>
    <button @click="startScan" v-show="isShow">点击扫描</button>
    <button @click="cancelScan">取消</button>
  </div>
</template>

<script>
let scan = null;
//点手机虚拟返回键
document.addEventListener("plusready", function() {
  // 注册返回按键事件
  plus.key.addEventListener(
    "backbutton",
    function() {
      // 事件处理
      scan.close();
      //关闭条码识别控件
      window.history.back();
    },
    false
  );
});
export default {
  data() {
    return {
      codeUrl: "",
      isShow: true,
    };
  },
  mounted() {
    this.startScan(); //进入页面就调取扫一扫
  },
  created() {
    this.startRecognize();
    this.startScan();
  },
  methods: {
    //创建扫描控件
    startRecognize() {
      let that = this;

      if (!window.plus) return;
      that.isShow = false;

      // 创建条码扫描识别控件
      scan = newplus.barcode.Barcode("bcid");

      // 条码识别成功
      scan.onmarked = onmarked;

      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";

            break;

          case plus.barcode.EAN13:
            type = "EAN13";

            break;

          case plus.barcode.EAN8:
            type = "EAN8";

            break;

          default:
            type = "其它" + type;

            break;
        }

        result = result.replace(/\n/g, "");

        that.codeUrl = result;
        //扫描后返回值
        alert(result);

        scan.cancel();
        //关闭扫描
        scan.close();
        //关闭条码识别控件
        if (that.codeUrl) {
          that.isShow = true;
        }
      }
    },

    //开始扫描
    startScan() {
      if (!window.plus) return;
      this.startRecognize();

      //创建控件
      scan.start();
    },

    cancelScan() {
      this.isShow = true;

      scan.cancel();

      //关闭扫描
      scan.close();
      //关闭条码识别控件
    },
  },
};
</script>
