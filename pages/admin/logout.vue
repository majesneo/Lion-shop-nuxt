<template>
  <div />
</template>

<script>
export default {
  name: 'Logout',
  layout: 'admin',
  middleware: 'auth-admin',
  beforeCreate () {
    this.$store.dispatch('auth-admin/logout')
    this.$router.push('/admin/login')
  }
}
</script>

<style scoped>

</style>
