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
      const {token} = await this.$axios.$post('/admin/login', formData)
      console.log(token)
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
    try {
      const {user} = await this.$axios.$post('/admin/create', formData)
      console.log(user)
    } catch (e) {

    }
  }
}

export const getters = {
  isAuth: state => Boolean(state.token)
}
