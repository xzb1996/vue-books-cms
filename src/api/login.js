import request from '@/utils/request.js'

export function getUserList(data){
    return request({
        url: '/mock/login/signIn',
        method: 'post',
        data
    })
}

// export function getUserList(query){
//     return request({
//         url: '',
//         method: 'get',
//         params:query
//     })
// }