const posts = [
  {
    title: 'Cras ornare tristique elit',
    tag: ['Lifestyle', 'Shopping'],
    author: 'Danil Timibov',
    date: new Date().toLocaleString(),
    views: 10,
    comments: [1],
    _id: '222'
  },
  {
    title: 'Sed adipiscing ornare risus',
    tag: ['Fashion', 'Shopping'],
    author: 'Anna Kazanova',
    date: new Date().toLocaleString(),
    views: 20,
    comments: [1, 2],
    _id: '333'
  },
  {
    title: 'Fusce pellentesque suscipit nibh',
    tag: ['Travel'],
    author: 'John Doe',
    date: new Date().toLocaleString(),
    views: 30,
    comments: [1, 2, 3],
    _id: '444'
  }
]


export const actions = {
  async getPosts({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async removePost({}, id) {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          reject()
        }, 1000)
      })
    } catch (e) {
    }
  },
  async getPostById({}, id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(post => post._id === id))
      }, 1000)
    })
  }
}
