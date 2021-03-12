export const actions = {
  async createProduct ({ commit }, formData) {
    try {
      return await this.$axios.$post('api/product/create', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async createDetailsProduct ({ commit }, formData, productId) {
    try {
      formData.productId = productId
      return await this.$axios.$post('api/product/details/create', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getProducts ({ commit }) {
    try {
      return await this.$axios.$get('api/product')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
