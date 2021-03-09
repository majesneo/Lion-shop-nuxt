
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
  async updatePost ({ commit }, { id, content, title }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { title, content })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async createPost ({ commit }, { title, tag, author, image, content }) {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('tag', tag)
    formData.append('author', author)
    formData.append('content', content)
    formData.append('image', image, image.name)

    try {
      return await this.$axios.$post('/api/post/admin', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
