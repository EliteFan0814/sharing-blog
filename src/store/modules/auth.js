import auth from '@/api/auth'

const state = {
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
  // Vuex 中的登陆函数，登陆并设置登陆状态
  login({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },

  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },

  async logout({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },

  async checkLogin({ commit, state}) {
    // 未刷新页面时，可以直接用 state.isLogin 判断
    if(state.isLogin) return true
    // 刷新页面时，则 state 恢复初始值，需要 axios 向服务器发出请求来获取登录状态
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    // 若检测到未登录则返回 false
    if(!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }

  /*
    this.logout().then(isLogin=>{
    
    })

  */
}

export default {
  state,
  getters,
  mutations,
  actions
}