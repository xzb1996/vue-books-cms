import { Message } from 'element-ui'
// 提示信息
export function MessageNotice(type, message, num = 5000, flag = true) {
    return Message({
        type: type,
        message: message,
        customClass: 'notice-message',
        duration: num,
        showClose: flag,
    })
}

// 解析url
export function getQuery(param) {
    if (param) {
        let arr = param.split("?")[1]
        const GET = /(\w+)=(\w+)/g;
        let query = {};
        if (arr) {
            arr.replace(GET, function (match, name, value) {
                query[name] = value;
            })
        }
        return query
    }
}