
export const actions = {
  async getPosts ({ commit }) {
    try {
      return await this.$axios.$get('/api/post')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async removePost ({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getPostById ({ commit }, id) {
    try {
      return await this.$axios.get(`/api/post/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async updatePost ({}, { id, text }) {
    try {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    } catch (e) {

    }
  },
  async createPost ({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/post/admin', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
