import login from '@/pages/admin/login'

const posts = [
  {
    title: 'Cras ornare tristique elit',
    tag: ['Lifestyle', 'Shopping'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.\n' +
      'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
    author: 'Danil Timibov',
    date: new Date().toLocaleString(),
    views: 10,
    comments: [1],
    _id: '222'
  },
  {
    title: 'Sed adipiscing ornare risus',
    tag: ['Fashion', 'Shopping'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.\n' +
      'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
    author: 'Anna Kazanova',
    date: new Date().toLocaleString(),
    views: 20,
    comments: [1, 2],
    _id: '333'
  },
  {
    title: 'Fusce pellentesque suscipit nibh',
    tag: ['Travel'],
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.\n' +
      'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
    author: 'John Doe',
    date: new Date().toLocaleString(),
    views: 30,
    comments: [1, 2, 3],
    _id: '444'
  }
]

export const actions = {
  async getPosts ({}) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async removePost ({}, id) {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject()
        }, 1000)
      })
    } catch (e) {
    }
  },
  async getPostById ({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(post => post._id === id))
      }, 1000)
    })
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
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
