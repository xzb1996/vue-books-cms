const path = require("path")

module.exports = {
    devServer: {
        // 自动打开页面
        open: true,
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:8080",
        //         // 是否允许代理
        //         changeOrigin: true
        //     }
        // }
    },
    configureWebpack: {
        resolve: {
            // 路径别名
            alias: {
                "@": path.join(__dirname, "./src")
            }
        }
    }
}