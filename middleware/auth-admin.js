export default function ({ store, redirect }) {
  if (!store.getters['auth-admin/isAuth']) {
    redirect('/admin/login?message=login')
  }
}
