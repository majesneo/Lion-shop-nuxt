export const state = () => ({
  error: null
})

export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('auth-admin/autoLogin')
  }
}

export const mutations = {
  setError (state, error) {
    console.log(error)
    state.error = error
  },
  clearError (state) {
    state.error = null
  }
}

export const getters = {
  error: state => state.error
}
