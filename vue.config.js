const path = require("path")

module.exports = {
    devServer: {
        // 自动打开页面
        open: true,
        // proxy: {
        //     "/mock": {
        //         target: "http://127.0.0.1:3000",
        //         // 是否允许代理
        //         changeOrigin: true,
        //         // 地址重启
        //         pathRewrite: {
        //             "^mock": ""
        //         }
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