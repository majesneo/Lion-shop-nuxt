export default function ({ $axios, redirect, store }) {
  $axios.interceptors.request.use((request) => {
    if (store.getters['auth-admin/isAuth'] && !request.headers.common.Authorization) {
      const token = store.getters['auth-admin/token']
      request.headers.common.Authorization = `Bearer ${token}`
    }
    return request
  })

  $axios.onError((err) => {
    if (err.response) {
      if (err.response.status === 401) {
        redirect('/admin/login?message=session')
        store.dispatch('auth-admin/logout')
      }
      if (err.response.status === 500) {
        console.error('Server 500 error')
      }
    }
  })
}
