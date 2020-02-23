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