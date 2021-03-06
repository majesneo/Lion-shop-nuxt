import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  removeToken (state) {
    state.token = null
  }
}

export const actions = {
  async login ({ commit, dispatch }, formData) {
    try {
      const { token } = await this.$axios.$post('/api/admin/auth/login', formData)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  setToken ({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },
  logout ({ commit }) {
    commit('removeToken')
    this.$axios.setToken(false)
    Cookies.remove('jwt-token')
  },
  autoLogin ({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie
    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJWTValid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  },
  async createUser ({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/admin/create/user', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const getters = {
  isAuth: state => Boolean(state.token),
  token: state => state.token
}

function isJWTValid (token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0
  return (new Date().getTime() / 1000) < expires
}
