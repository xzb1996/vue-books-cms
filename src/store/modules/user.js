import { getUserList,getUserInfo } from "@/api/login";
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
    token: getToken() || '',
    userInfo:{}
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = String(token)
    },
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = Object.assign({},userInfo)
    },
}

const actions = {
    // 登录
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            getUserList({ username: username, password: password }).then((res) => {
                setToken(res.data.token)
                commit('SET_TOKEN', res.data.token)
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // 获取用户信息
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getUserInfo(state.token).then(res => {
            commit('SET_USERINFO', res.data)
            resolve(res.data)
          }).catch(error => {
            reject(error)
          })
        })
      },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}