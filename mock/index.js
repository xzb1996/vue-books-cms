import Mock from 'mockjs'
import mocks from './mocks'

for(let i of mocks){
    Mock.mock(new RegExp(i.url),i.type,i.response)
}

export default Mock