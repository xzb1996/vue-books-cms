export default [
    // 用户登录
    {
        url: "/mock/login/signIn",
        type: "post",
        response: res => {
            let { username, password } = JSON.parse(res.body)
            if (username == "admin" && password == "123456") {
                return {
                    result: 1,
                    errorCode: 200,
                    data: {
                        token: (new Date().getTime())
                    },
                    message: '登录成功'
                }
            } else {
                return {
                    result: 0,
                    errorCode: -1,
                    message: '用户名或密码错误，请重新输入'
                }
            }

        }
    },
    // 用户信息
    {
        url: "/mock/login/userInfo",
        type: "get",
        response: res => {
            return {
                result: 1,
                errorCode: 200,
                data: {
                    username:'张三',
                    email:'123466@qq.com',
                    individualResume:'我命由我不由天',
                    address:'',
                    iphone:'123456'
                },
            }
        }
    }
]
