import request from '@/utils/request.js'

// 登录验证
export function getUserList(data) {
    return request({
        url: '/mock/login/signIn',
        method: 'post',
        data
    })
}

// 获取用户信息
export function getUserInfo(query) {
    return request({
        url: '/mock/login/userInfo',
        method: 'get',
        params: query
    })
}