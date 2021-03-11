export const actions = {
  async createProduct ({ commit }, formData) {
    try {
      await this.$axios.$post('api/product/create', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
