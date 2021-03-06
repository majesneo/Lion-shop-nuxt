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
  },
  async getProductById ({ commit }, id) {
    try {
      return await this.$axios.$get(`api/product/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getProductDetailsById ({ commit }, id) {
    try {
      return await this.$axios.$get(`api/product/details/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async updateProduct ({ commit }, { id }, updatedData) {
    try {
      return await this.$axios.$get(`api/product/details/${id}`, updatedData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async updateProductDetails ({ commit }, id) {
    try {
      return await this.$axios.$get(`api/product/details/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async addColorProduct ({ commit }, color) {
    try {
      return await this.$axios.$post('api/product/details/create', color)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
