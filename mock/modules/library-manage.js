import Mock from 'mockjs'
import Url from 'url'
/**
 * 记录：
 *  URL模块用来解析和处理url的字符串，提供如下方法：
 *  1、parse
 *      url.parse(urlStr,queryString,AnalysisHost) 将url字符串地址转成一个对象
 *          urlStr:要解析的url地址
 *          queryString：解析出来的是查询字符串还是对象，true为对象，false为字符串
 *  2、format(url,options) format方法与parse方法相反，用于根据某个对象生成URL的字符串。
 *  3、resolve(from, to) 方法用于拼接URL, 它根据相对URL拼接成新的URL；
 */
const booksAmount = 9794
const LogAmount = 888
const booksList = []
const bottowLog = []

for (let i = 0; i < booksAmount; i++) {
    booksList.push(Mock.mock({
        bookName: '@ctitle(4,8)', // 书名
        bookAuthor: '@cname()', // 作者
        'bookPublishingHouse|1': ['人民出版社', '电子工业出版社', '人民文学出版社', '清华大学出版社', '中国经济出版社', '国家图书馆出版社'], // 出版社
        bookPrice: '@float(10,150,1,2)',// 价格
        bookInventory: '@natural(1, 10)' // 存货
    }))
}

for (let i = 0; i < LogAmount; i++) {
    bottowLog.push(Mock.mock({
        bookName: '@ctitle(4,8)', // 书名
        borrowName: '@cname()', // 借书人
        'bookPublishingHouse|1': ['人民出版社', '电子工业出版社', '人民文学出版社', '清华大学出版社', '中国经济出版社', '国家图书馆出版社'], // 出版社
        borrowStart: '@datetime("yyyy-MM-dd HH:mm:ss")', // 借书时间
        borrowEnd: '@datetime("yyyy-MM-dd HH:mm:ss")' // 还书时间
    }))
}

export default [
    // 获取总图书信息
    {
        url: "/mock/library-manage/bookslist",
        type: "get",
        response: res => {
            let { bookName, limit = 10, page = 1 } = Url.parse(res.url, true).query;
            const mockList = booksList.filter(item => {
                if (bookName && item.bookName !== bookName) return false
                return true
            })
            const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
            return {
                result: 1,
                errorCode: 200,
                data: pageList,
                total: mockList.length,
                page: page,
                limit: limit,
            }
        }
    },
    // 获取借书日志
    {
        url: "/mock/library-manage/borrowlog",
        type: "get",
        response: res => {
            let { borrowStart, borrowEnd, limit = 10, page = 1 } = Url.parse(res.url, true).query;
            const mockList = bottowLog.filter(item => {
                if (borrowStart && item.borrowStart >= borrowStart) return false
                if (borrowEnd && item.borrowEnd <= borrowEnd) return false
                return true
            })
            const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
            return {
                result: 1,
                errorCode: 200,
                data: pageList,
                total: mockList.length,
                page: page,
                limit: limit,
            }
        }
    },
    // 导出日志
    {
        url: "/mock/library-manage/excelExport",
        type: "get",
        response: res => {
            return {
                result: 1,
                errorCode: 200,
                data: '恭喜你，导出成功',
            }
        }
    },

]