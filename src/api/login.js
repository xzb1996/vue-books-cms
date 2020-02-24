import request from '@/utils/request.js'

// 登录验证
export function getUserList(data){
    return request({
        url: '/mock/login/signIn',
        method: 'post',
        data
    })
}