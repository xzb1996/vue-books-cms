import request from '@/utils/request.js'

// 获取图书信息
export function getBooksList(query) {
    return request({
        url: '/mock/library-manage/bookslist',
        method: 'get',
        params: query
    })
}

// 获取借书日志
export function getBorrowLog(query) {
    return request({
        url: '/mock/library-manage/borrowlog',
        method: 'get',
        params: query
    })
}

// 导出日志
export function excelExport(query) {
    return request({
        url: '/mock/library-manage/excelExport',
        method: 'get',
        responseType: 'blob',
        params: query
    })
}