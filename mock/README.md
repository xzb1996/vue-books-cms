# 接口定义

### 用户登录
{
    url:"/mock/login/signIn",
    type:"post",
    接收参数:{
        username:"",
        password:""
    },
    返回参数:[
        {
            result: 1,
            errorCode: 200,
            message: '登录成功'
        },
        {
            result: 0,
            errorCode: -1,
            message: '用户名或密码错误，请重新输入'
        },
    ]
}