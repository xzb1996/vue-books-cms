import axios from 'axios'
// import qs from 'qs'
import { MessageNotice } from "@/utils/notice";

// 创建axios实例
const server = axios.create({
    // baseURL: process.env.BASE_API,
    timeout: 5000, // 请求超时时间
    withCredentials: true
})

// 请求拦截器
server.interceptors.request.use(config => {
    // console.log(config,'config')
    return config;
}, (err) => {
    console.log(err)
    Promise.reject(err);
})

// 响应拦截器
server.interceptors.response.use((response) => {
    const res = response.data
    if (res.result && res.result !== 1 && res.result !== 0) {
        MessageNotice("error", "请求失败")
        return Promise.reject('error')
    } else {
        return res
    }
}, (err) => {
    // 会话过期
    if(err && err.response){
        if(err.response.status === 401){
            // 失败的处理功能
            return Promise.reject(err)
        }
    }
    MessageNotice("error", "服务器错误")
    return Promise.reject(err);
})

export default server