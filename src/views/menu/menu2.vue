<template>
  <div class="menu2">menu2</div>
</template>

<script>
export default {
  name: "menu2",
  data() {
    return {};
  },
  methods: {
    // 下载接口api
    // export function fileLoadInterface(data){
    //   return request({
    //     url:'',
    //     method:"post",
    //     responseType:"blob",
    //     data
    //   })
    // }
    // 文件下载
    fileLoad() {
      fileLoadInterface().then((res) => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
          try {
            let resData = JSON.parse(reader.result);
            if (resData.result === 0) {
              // 失败处理方式
            }
          } catch {
            const blod = new Blob([res], { type: "application/vnd.ms-excel" });
            const loadfileName = "下载文件";
            const elink = document.createElement("a");
            elink.download = loadfileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            URL.revokeObjectURL(elnk.href);
            document.body.removeChild(elnk);
          }
        });
        reader.readAsText(res);
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
