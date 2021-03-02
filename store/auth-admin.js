export const state = () => ({
  token: true
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  removeToken(state) {
    state.token = null
  }
}


export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const token = await new Promise((resolve, reject) => setTimeout(() => {
        resolve('token-login')
      }, 2000))
      commit('setToken', token)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  logout({commit}) {
    commit('removeToken')
  },
  async createUser({commit}, formData) {
    console.log('createUser', formData)
  }
}

export const getters = {
  isAuth: state => Boolean(state.token)
}
