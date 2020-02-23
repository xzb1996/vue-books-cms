export default [
    // 用户登录信息
    {
        url: "/mock/login/signIn",
        type: "post",
        response: res => {
            let { username, password } = JSON.parse(res.body)
            if (username == "admin" && password == "123456") {
                return {
                    result: 1,
                    errorCode: 200,
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
    }
]